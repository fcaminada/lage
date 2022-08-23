import { BackfillCacheProvider, RemoteFallbackCacheProvider, TargetHasher } from "@lage-run/cache";
import { Command } from "commander";
import { createProfileReporter } from "./createProfileReporter";
import { createReporter } from "../../createReporter";
import { findNpmClient } from "../../workspace/findNpmClient";
import { getConfig } from "../../config/getConfig";
import { getFilteredPackages } from "../../filter/getFilteredPackages";
import { getPackageInfos, getWorkspaceRoot } from "workspace-tools";
import { NpmScriptRunner, SimpleScheduler } from "@lage-run/scheduler";
import { TargetGraphBuilder } from "@lage-run/target-graph";
import createLogger, { LogLevel, Reporter } from "@lage-run/logger";

function filterArgsForTasks(args: string[]) {
  const optionsPosition = args.findIndex((arg) => arg.startsWith("-"));
  return {
    tasks: args.slice(0, optionsPosition === -1 ? undefined : optionsPosition),
    taskArgs: optionsPosition === -1 ? [] : args.slice(optionsPosition),
  };
}

interface RunOptions {
  reporter: string[];
  concurrency: number;
  profile: string | boolean | undefined;
  verbose: boolean;
  logLevel: keyof typeof LogLevel;
  grouped: boolean;
  dependencies: boolean;
  dependents: boolean;
  since: string;
  scope: string[];
  skipLocalCache: boolean;
  continue: boolean;
  cache: boolean;
  resetCache: boolean;
  nodeargs: string;
}

export async function runAction(options: RunOptions, command: Command) {
  const cwd = process.cwd();
  const config = getConfig(cwd);
  const reporterInstances: Reporter[] = [];

  // Configure logger
  const logger = createLogger();

  const reporterOptions = Array.isArray(options.reporter) ? options.reporter : [options.reporter];

  for (const reporter of reporterOptions) {
    const reporterInstance = createReporter({
      verbose: options.verbose,
      grouped: options.grouped,
      logLevel: LogLevel[options.logLevel],
      reporter: reporter as string,
    });
    reporterInstances.push(reporterInstance);
    logger.addReporter(reporterInstance);
  }

  if (options.profile !== undefined) {
    const reporter = createProfileReporter(options);
    reporterInstances.push(reporter);
    logger.addReporter(reporter);
  }

  // Build Target Graph
  const root = getWorkspaceRoot(process.cwd())!;
  const packageInfos = getPackageInfos(root);

  const builder = new TargetGraphBuilder(root, packageInfos);

  const { tasks, taskArgs } = filterArgsForTasks(command.args);

  const packages = getFilteredPackages({
    root,
    logger,
    packageInfos,
    includeDependencies: options.dependencies,
    includeDependents: options.dependents,
    repoWideChanges: config.repoWideChanges,
    since: options.since,
    scope: options.scope,
  });

  for (const [id, definition] of Object.entries(config.pipeline)) {
    if (Array.isArray(definition)) {
      builder.addTargetConfig(id, {
        cache: true,
        dependsOn: definition,
        options: {},
        outputs: config.cacheOptions.outputGlob,
      });
    } else {
      builder.addTargetConfig(id, definition);
    }
  }

  const targetGraph = builder.buildTargetGraph(tasks, packages);

  // Create Cache Provider
  const cacheProvider = new RemoteFallbackCacheProvider({
    root,
    logger,
    localCacheProvider:
      options.skipLocalCache === true
        ? undefined
        : new BackfillCacheProvider({
            root,
            cacheOptions: {
              outputGlob: config.cacheOptions.outputGlob,
              ...(config.cacheOptions.internalCacheFolder && { internalCacheFolder: config.cacheOptions.internalCacheFolder }),
            },
          }),
    remoteCacheProvider: config.cacheOptions?.cacheStorageConfig
      ? new BackfillCacheProvider({ root, cacheOptions: config.cacheOptions })
      : undefined,
    writeRemoteCache: config.cacheOptions?.writeRemoteCache === true || String(process.env.LAGE_WRITE_CACHE).toLowerCase() === "true",
  });

  const hasher = new TargetHasher({
    root,
    environmentGlob: config.cacheOptions.environmentGlob,
    cacheKey: config.cacheOptions.cacheKey,
  });

  // Run Tasks with Scheduler + NpmScriptRunner
  const runner = new NpmScriptRunner({
    logger,
    nodeOptions: options.nodeargs,
    taskArgs,
    npmCmd: findNpmClient(config.npmClient),
  });

  const scheduler = new SimpleScheduler({
    logger,
    concurrency: options.concurrency,
    cacheProvider,
    hasher,
    continueOnError: options.continue,
    shouldCache: options.cache,
    shouldResetCache: options.resetCache,
    runner,
  });

  const summary = await scheduler.run(root, targetGraph);

  for (const reporterInstance of reporterInstances) {
    reporterInstance.summarize(summary);
  }

  if (summary.results !== "success") {
    process.exitCode = 1;
  }
}
