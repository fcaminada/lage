"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[477],{1477:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Qe});var a=n(6540),l=n(1003),o=n(9532);const r=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new o.dV("DocProvider");return e}function s(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(53),m=n(4581),u=n(8168),p=n(1312),h=n(5489);function f(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return a.createElement(h.A,{className:(0,d.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function b(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(f,(0,u.A)({},t,{subLabel:a.createElement(p.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(f,(0,u.A)({},n,{subLabel:a.createElement(p.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=c();return a.createElement(b,{previous:e.previous,next:e.next})}var E=n(4586),g=n(8295),A=n(7559),C=n(5597),N=n(2252);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function y(e){const t=L[e.versionMetadata.banner];return a.createElement(t,e)}function _(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(h.A,{to:n,onClick:l},a.createElement(p.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,E.A)(),{pluginId:o}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:r}=(0,C.g1)(o),{latestDocSuggestion:i,latestVersionSuggestion:c}=(0,g.HW)(o),s=i??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.A)(t,A.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(y,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(_,{versionLabel:c.label,to:s.path,onClick:()=>r(c.name)})))}function k(e){let{className:t}=e;const n=(0,N.r)();return n.banner?a.createElement(T,{className:t,versionMetadata:n}):null}function x(e){let{className:t}=e;const n=(0,N.r)();return n.badge?a.createElement("span",{className:(0,d.A)(t,A.G.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function w(e){let{lastUpdatedBy:t}=e;return a.createElement(p.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:A.G.common.lastUpdated},a.createElement(p.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(H,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(w,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const U={iconEdit:"iconEdit_Z9Sw"};function B(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.A)(U.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function S(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:A.G.common.editThisPage},a.createElement(B,null),a.createElement(p.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var I=n(6133);const V={tags:"tags_jXut",tag:"tag_QGVx"};function z(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.A)(V.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:V.tag},a.createElement(I.A,{label:t,permalink:n}))}))))}const R={lastUpdated:"lastUpdated_vwxv"};function O(e){return a.createElement("div",{className:(0,d.A)(A.G.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(z,e)))}function D(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,d.A)(A.G.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(S,{editUrl:t})),a.createElement("div",{className:(0,d.A)("col",R.lastUpdated)},(n||l)&&a.createElement(M,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function G(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,i=r.length>0,s=!!(t||n||o);return i||s?a.createElement("footer",{className:(0,d.A)(A.G.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(O,{tags:r}),s&&a.createElement(D,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var P=n(1422),F=n(6342);function W(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function q(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=q({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function j(e){const t=e.getBoundingClientRect();return t.top===t.bottom?j(e.parentNode):t}function $(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>j(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(j(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,F.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Q(e){const t=(0,a.useRef)(void 0),n=Y();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=$(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function Z(e){let{toc:t,className:n,linkClassName:l,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(Z,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const X=a.memo(Z);function J(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:i,...c}=e;const s=(0,F.p)(),d=r??s.tableOfContents.minHeadingLevel,m=i??s.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>q({toc:W(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:m});return Q((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:m}}),[l,o,d,m])),a.createElement(X,(0,u.A)({toc:p,className:n,linkClassName:l},c))}const K={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function ee(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.A)({type:"button"},n,{className:(0,d.A)("clean-btn",K.tocCollapsibleButton,!t&&K.tocCollapsibleButtonExpanded,n.className)}),a.createElement(p.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const te={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function ne(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:i}=(0,P.u)({initialState:!0});return a.createElement("div",{className:(0,d.A)(te.tocCollapsible,!r&&te.tocCollapsibleExpanded,n)},a.createElement(ee,{collapsed:r,onClick:i}),a.createElement(P.N,{lazy:!0,className:te.tocCollapsibleContent,collapsed:r},a.createElement(J,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const ae={tocMobile:"tocMobile_ITEo"};function le(){const{toc:e,frontMatter:t}=c();return a.createElement(ne,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(A.G.docs.docTocMobile,ae.tocMobile)})}const oe={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},re="table-of-contents__link toc-highlight",ie="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,d.A)(oe.tableOfContents,"thin-scrollbar",t)},a.createElement(J,(0,u.A)({},n,{linkClassName:re,linkActiveClassName:ie})))}function se(){const{toc:e,frontMatter:t}=c();return a.createElement(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:A.G.docs.docTocDesktop})}const de={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function me(e){let{as:t,id:n,...l}=e;const{navbar:{hideOnScroll:o}}=(0,F.p)();if("h1"===t||!n)return a.createElement(t,(0,u.A)({},l,{id:void 0}));const r=(0,p.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof l.children?l.children:n});return a.createElement(t,(0,u.A)({},l,{className:(0,d.A)("anchor",o?de.anchorWithHideOnScrollNavbar:de.anchorWithStickyNavbar,l.className),id:n}),l.children,a.createElement(h.A,{className:"hash-link",to:`#${n}`,"aria-label":r,title:r},"\u200b"))}var ue=n(5680);const pe=e=>{let{children:t,...n}=e;const l=(0,a.useRef)(null),[o,r]=(0,a.useState)(!1);return a.createElement("pre",(0,u.A)({},n,{ref:l}),t,a.createElement("button",{type:"button","aria-label":(0,p.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:()=>{l.current&&function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection(),r=o.rangeCount>0&&o.getRangeAt(0);n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),l&&l.focus()}(Array.from(l.current.querySelectorAll("code div.line")).map((e=>e.textContent)).join("\n")),r(!0),setTimeout((()=>r(!1)),2e3)}},o?a.createElement(p.A,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(p.A,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))};var he=n(5260);var fe=n(2303);const be={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function ve(e){return!!e&&("SUMMARY"===e.tagName||ve(e.parentElement))}function Ee(e,t){return!!e&&(e===t||Ee(e.parentElement,t))}function ge(e){let{summary:t,children:n,...l}=e;const o=(0,fe.A)(),r=(0,a.useRef)(null),{collapsed:i,setCollapsed:c}=(0,P.u)({initialState:!l.open}),[s,m]=(0,a.useState)(l.open),p=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,u.A)({},l,{ref:r,open:s,"data-collapsed":i,className:(0,d.A)(be.details,o&&be.isBrowser,l.className),onMouseDown:e=>{ve(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ve(t)&&Ee(t,r.current)&&(e.preventDefault(),i?(c(!1),m(!0)):c(!0))}}),p,a.createElement(P.N,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)}},a.createElement("div",{className:be.collapsibleContent},n)))}const Ae={details:"details_b_Ee"},Ce="alert alert--info";function Ne(e){let{...t}=e;return a.createElement(ge,(0,u.A)({},t,{className:(0,d.A)(Ce,Ae.details,t.className)}))}function Le(e){return a.createElement(me,e)}const ye={containsTaskList:"containsTaskList_mC6p"};function _e(e){if(void 0!==e)return(0,d.A)(e,e?.includes("contains-task-list")&&ye.containsTaskList)}const Te={img:"img_ev3q"};const ke="admonition_LlT9",xe="admonitionHeading_tbUL",He="admonitionIcon_kALy",we="admonitionContent_S0QG";const Me={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(p.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(p.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(p.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(p.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(p.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Ue={secondary:"note",important:"info",success:"tip",warning:"danger"};function Be(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:e.title??t,children:n}}const Se={...{head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(he.A,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(pe,e)},a:function(e){return a.createElement(h.A,e)},pre:function(e){return a.createElement(pe,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(Ne,(0,u.A)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,u.A)({},e,{className:_e(e.className)}))},img:function(e){return a.createElement("img",(0,u.A)({loading:"lazy"},e,{className:(t=e.className,(0,d.A)(t,Te.img))}));var t},h1:e=>a.createElement(Le,(0,u.A)({as:"h1"},e)),h2:e=>a.createElement(Le,(0,u.A)({as:"h2"},e)),h3:e=>a.createElement(Le,(0,u.A)({as:"h3"},e)),h4:e=>a.createElement(Le,(0,u.A)({as:"h4"},e)),h5:e=>a.createElement(Le,(0,u.A)({as:"h5"},e)),h6:e=>a.createElement(Le,(0,u.A)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:l,icon:o}=Be(e),r=function(e){const t=Ue[e]??e,n=Me[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),Me.info)}(n),i=l??r.label,{iconComponent:c}=r,s=o??a.createElement(c,null);return a.createElement("div",{className:(0,d.A)(A.G.common.admonition,A.G.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,ke)},a.createElement("div",{className:xe},a.createElement("span",{className:He},s),i),a.createElement("div",{className:we},t))},mermaid:n(1828).A},div:e=>"shiki-twoslash-fragment"===e.className?a.createElement(a.Fragment,null,e.children):a.createElement("div",e),pre:e=>a.createElement(pe,e),code:e=>a.createElement("code",e)};function Ie(e){let{children:t}=e;return a.createElement(ue.xA,{components:Se},t)}function Ve(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.A)(A.G.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(me,{as:"h1"},n)),a.createElement(Ie,null,t))}var ze=n(1754),Re=n(9169),Oe=n(6025);function De(e){return a.createElement("svg",(0,u.A)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Ge={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Pe(){const e=(0,Oe.A)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.A,{"aria-label":(0,p.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(De,{className:Ge.breadcrumbHomeIcon})))}const Fe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function We(e){let{children:t,href:n,isLast:l}=e;const o="breadcrumbs__link";return l?a.createElement("span",{className:o,itemProp:"name"},t):n?a.createElement(h.A,{className:o,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:o},t)}function qe(e){let{children:t,active:n,index:l,addMicrodata:o}=e;return a.createElement("li",(0,u.A)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.A)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function je(){const e=(0,ze.OF)(),t=(0,Re.Dt)();return e?a.createElement("nav",{className:(0,d.A)(A.G.docs.docBreadcrumbs,Fe.breadcrumbsContainer),"aria-label":(0,p.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Pe,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(qe,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(We,{href:t.href,isLast:l},t.label))})))):null}const $e={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Ye(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?a.createElement(le,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(se,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.A)("col",!n.hidden&&$e.docItemCol)},a.createElement(k,null),a.createElement("div",{className:$e.docItemContainer},a.createElement("article",null,a.createElement(je,null),a.createElement(x,null),n.mobile,a.createElement(Ve,null,t),a.createElement(G,null)),a.createElement(v,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Qe(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.e3,{className:t},a.createElement(s,null),a.createElement(Ye,null,a.createElement(n,null))))}},6133:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(6540),l=n(53),o=n(5489);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:n,count:i}=e;return a.createElement(o.A,{href:t,className:(0,l.A)(r.tag,i?r.tagWithCount:r.tagRegular)},n,i&&a.createElement("span",null,i))}},2252:(e,t,n)=>{n.d(t,{n:()=>r,r:()=>i});var a=n(6540),l=n(9532);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(o);if(null===e)throw new l.dV("DocsVersionProvider");return e}}}]);