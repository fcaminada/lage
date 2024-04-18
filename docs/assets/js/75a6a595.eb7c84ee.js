"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[754],{5680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var t=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),y=p(n),g=l,m=y["".concat(s,".").concat(g)]||y[g]||c[g]||o;return n?t.createElement(m,i(i({ref:a},d),{},{components:n})):t.createElement(m,i({ref:a},d))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=g;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[y]="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5555:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var t=n(8168),l=(n(6540),n(5680));const o={sidebar_position:2,title:"2. Pipeline"},i=void 0,r={unversionedId:"Tutorial/pipeline",id:"Tutorial/pipeline",title:"2. Pipeline",description:'In this step, you\'ll learn about how to influence how lage schedules which "target" runs at which time. For full details on how to configure pipelines, make sure to consult with the reference for configuration.',source:"@site/docs/Tutorial/pipeline.md",sourceDirName:"Tutorial",slug:"/Tutorial/pipeline",permalink:"/lage/docs/Tutorial/pipeline",draft:!1,editUrl:"https://github.com/microsoft/lage/edit/master/docs/docs/Tutorial/pipeline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"2. Pipeline"},sidebar:"defaultSidebar",previous:{title:"1. Installation",permalink:"/lage/docs/Tutorial/installation"},next:{title:"3. Scoping by packages",permalink:"/lage/docs/Tutorial/scopes"}},s={},p=[{value:"What is a <code>lage</code> pipeline?",id:"what-is-a-lage-pipeline",level:2},{value:"Defining a pipeline",id:"defining-a-pipeline",level:2},{value:"Task dependency format",id:"task-dependency-format",level:3},{value:"Topological dependency",id:"topological-dependency",level:3},{value:"Empty dependency list",id:"empty-dependency-list",level:3},{value:"Tasks that are in the <code>pipeline</code> but not in SOME <code>package.json</code>",id:"tasks-that-are-in-the-pipeline-but-not-in-some-packagejson",level:3},{value:"Specific package tasks",id:"specific-package-tasks",level:3}],d={toc:p},y="wrapper";function c(e){let{components:a,...n}=e;return(0,l.yg)(y,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"In this step, you'll learn about how to influence how ",(0,l.yg)("inlineCode",{parentName:"p"},"lage"),' schedules which "target" runs at which time. For full details on how to configure pipelines, make sure to consult with the ',(0,l.yg)("a",{parentName:"p",href:"/docs/Reference/config"},"reference for configuration"),"."),(0,l.yg)("h2",{id:"what-is-a-lage-pipeline"},"What is a ",(0,l.yg)("inlineCode",{parentName:"h2"},"lage")," pipeline?"),(0,l.yg)("p",null,"In the traditional monorepo task runners, each npm lifecycle script like ",(0,l.yg)("inlineCode",{parentName:"p"},"build")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"test")," is run topologically or in parallel individually. Depending on the graph of the packages, CPU cores are left idle wasting developer time."),(0,l.yg)("p",null,"Futhermore, the developer is expected to keep track of an ",(0,l.yg)("strong",{parentName:"p"},"implicit")," graph of the tasks. For example, the developer is expected to understand that perhaps the ",(0,l.yg)("inlineCode",{parentName:"p"},"test")," task is only available after ",(0,l.yg)("inlineCode",{parentName:"p"},"build")," has completed."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"lage")," gives developers a way to specify these relationships ",(0,l.yg)("strong",{parentName:"p"},"explicitly"),". The advantage here are twofold:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Incoming new developers can look at ",(0,l.yg)("inlineCode",{parentName:"li"},"lage.config.js")," and understand how tasks are related."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"lage")," can use this explicit declaration to perform an optimized build based on the abundant availability of multi-core processors.")),(0,l.yg)("h2",{id:"defining-a-pipeline"},"Defining a pipeline"),(0,l.yg)("p",null,"To define the task dependency graph, use the ",(0,l.yg)("inlineCode",{parentName:"p"},"pipeline")," key in the ",(0,l.yg)("inlineCode",{parentName:"p"},"lage.config.js"),". For example, this is the default generated configuration when you run ",(0,l.yg)("inlineCode",{parentName:"p"},"npx lage init"),":"),(0,l.yg)("div",{className:"shiki-twoslash-fragment"},(0,l.yg)("pre",{parentName:"div",className:"shiki light-plus with-title",style:{backgroundColor:"#FFFFFF",color:"#000000"},title:"/lage.config.js"},(0,l.yg)("div",{parentName:"pre",className:"code-title"},"/lage.config.js"),(0,l.yg)("div",{parentName:"pre",className:"language-id"},"js"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#267F99"}},"module"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#267F99"}},"exports"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," = {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#001080"}},"pipeline:"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#001080"}},"build:"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"^build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#001080"}},"test:"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#001080"}},"lint:"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," []")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"};"))))),(0,l.yg)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"/lage.config.js"},(0,l.yg)("div",{parentName:"pre",className:"code-title"},"/lage.config.js"),(0,l.yg)("div",{parentName:"pre",className:"language-id"},"js"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"module"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"exports"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},"pipeline"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},"build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},"lint"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," []")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,l.yg)("h3",{id:"task-dependency-format"},"Task dependency format"),(0,l.yg)("p",null,"What you are declaring here in the ",(0,l.yg)("inlineCode",{parentName:"p"},"pipeline")," object of the configuration is a dependency graph of tasks. The ",(0,l.yg)("inlineCode",{parentName:"p"},"test")," task above depends on the ",(0,l.yg)("inlineCode",{parentName:"p"},"build")," task of the same package. A task can depend on multiple other tasks. This may be more relevant in a more complex monorepo."),(0,l.yg)("h3",{id:"topological-dependency"},"Topological dependency"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"^")," symbol explicitly declares that the task has a package-topological dependency on another task. For example, if ",(0,l.yg)("inlineCode",{parentName:"p"},"foo")," package depends on ",(0,l.yg)("inlineCode",{parentName:"p"},"bar"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"lage build")," will guarantee that the ",(0,l.yg)("inlineCode",{parentName:"p"},"build")," task of ",(0,l.yg)("inlineCode",{parentName:"p"},"bar")," will happen before ",(0,l.yg)("inlineCode",{parentName:"p"},"foo"),"'s ",(0,l.yg)("inlineCode",{parentName:"p"},"build")," task."),(0,l.yg)("div",{className:"shiki-twoslash-fragment"},(0,l.yg)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"pipeline"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": ["),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"^build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"]")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"}"))))),(0,l.yg)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"pipeline"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,l.yg)("h3",{id:"empty-dependency-list"},"Empty dependency list"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"lint")," task above has NO dependencies. This means that it can start whenever it can!"),(0,l.yg)("div",{className:"shiki-twoslash-fragment"},(0,l.yg)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"pipeline"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"lint"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": []")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"}"))))),(0,l.yg)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"pipeline"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lint"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[]")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,l.yg)("h3",{id:"tasks-that-are-in-the-pipeline-but-not-in-some-packagejson"},"Tasks that are in the ",(0,l.yg)("inlineCode",{parentName:"h3"},"pipeline")," but not in SOME ",(0,l.yg)("inlineCode",{parentName:"h3"},"package.json")),(0,l.yg)("p",null,"Sometimes tasks declared in the ",(0,l.yg)("inlineCode",{parentName:"p"},"pipeline")," are not present in all packages' ",(0,l.yg)("inlineCode",{parentName:"p"},"package.json")," files. ",(0,l.yg)("inlineCode",{parentName:"p"},"lage")," will automatically ignore those. No problem!"),(0,l.yg)("h3",{id:"specific-package-tasks"},"Specific package tasks"),(0,l.yg)("p",null,"Sometimes a specific package may depend on a task from another specific package. This can occur especially in repos that are just coming off of lerna or rush where the tasks are traditionally run in separate phases. Sometimes assumptions were made that cannot be expressed in the simple task pipeline configuration as seen above. These dependencies can be specified in the pipeline config as follows."),(0,l.yg)("p",null,"In this example, we illustrate a ",(0,l.yg)("inlineCode",{parentName:"p"},"build")," script of ",(0,l.yg)("inlineCode",{parentName:"p"},"foo")," package depends on the ",(0,l.yg)("inlineCode",{parentName:"p"},"test")," script of ",(0,l.yg)("inlineCode",{parentName:"p"},"bar"),". The syntax is ",(0,l.yg)("inlineCode",{parentName:"p"},"[package]#[task]"),"."),(0,l.yg)("div",{className:"shiki-twoslash-fragment"},(0,l.yg)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#008000"}},"// foo build depends on the output of bar build.")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"pipeline"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"test"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": ["),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"foo#build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": ["),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"bar#test"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"]")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"}"))))),(0,l.yg)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#616E88"}},"// foo build depends on the output of bar build.")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"pipeline"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"test"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"],")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"foo#build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"bar#test"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,l.yg)("p",null,"This seems like it goes against ",(0,l.yg)("inlineCode",{parentName:"p"},'test: ["build"]'),", but it does not. Since ",(0,l.yg)("inlineCode",{parentName:"p"},"test")," scripts does not have a topological dependency, they can theoretically be triggered whenever that package's ",(0,l.yg)("inlineCode",{parentName:"p"},"build")," script has finished!"),(0,l.yg)("p",null,"The general guidance is to get rid of these specific package-task to package-task dependencies in the pipeline as quickly as possible so the builds can be optimized better."))}c.isMDXComponent=!0}}]);