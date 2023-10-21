"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[7918],{8690:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var l=n(7294),a=n(833),r=n(902);const c=l.createContext(null);function o(e){let{children:t,content:n}=e;const a=function(e){return(0,l.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return l.createElement(c.Provider,{value:a},t)}function i(){const e=(0,l.useContext)(c);if(null===e)throw new r.i6("DocProvider");return e}function s(){const{metadata:e,frontMatter:t,assets:n}=i();return l.createElement(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(6010),d=n(7524),u=n(64);function f(){const{metadata:e}=i();return l.createElement(u.Z,{previous:e.previous,next:e.next})}var h=n(3120),v=n(4364),g=n(7462),E=n(5281),p=n(2263),b=n(4881),L=n(1526);const k="lastUpdated_VsjB";var N=n(5999);function _(e){let{authors:t}=e;return t.length<=1?l.createElement(l.Fragment,null,l.createElement("span",null,l.createElement(N.Z,null,"Created by")),l.createElement("a",{href:`https://github.com/${t[0]}`,target:"_blank",rel:"noreferrer"},l.createElement("img",{alt:`${t[0]}`,src:`https://avatars.githubusercontent.com/${t[0]}`,width:"24px",style:{borderRadius:"12px",verticalAlign:"sub",marginLeft:"4px"}}),"  ",t[0])):t.length<=3?l.createElement(l.Fragment,null,l.createElement("span",null,l.createElement(N.Z,null,"Modified by")),t.map((e=>l.createElement("a",{key:e,href:`https://github.com/${e}`,target:"_blank",rel:"noreferrer"},l.createElement("img",{alt:`${e}`,src:`https://avatars.githubusercontent.com/${e}`,width:"24px",style:{borderRadius:"12px",verticalAlign:"sub",marginLeft:"4px"}})," ",e)))):l.createElement(l.Fragment,null,l.createElement("span",null,l.createElement(N.Z,null,"Modified by")),t.map((e=>l.createElement("a",{key:e,href:`https://github.com/${e}`,target:"_blank",rel:"noreferrer"},l.createElement("img",{alt:`${e}`,src:`https://avatars.githubusercontent.com/${e}`,width:"24px",style:{borderRadius:"12px",verticalAlign:"sub",marginLeft:"4px"}})))))}function C(e){return l.createElement("div",{className:(0,m.Z)(E.k.docs.docFooterTagsRow,"row margin-bottom--sm")},l.createElement("div",{className:"col"},l.createElement(L.Z,e)))}function x(e){return l.createElement("svg",(0,g.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 25 25","aria-hidden":!0},e),l.createElement("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}))}function Z(e){return l.createElement(l.Fragment,null,l.createElement("a",(0,g.Z)({href:e.transUrl,target:"_blank",rel:"noreferrer noopener",className:E.k.common.editThisPage},e),l.createElement(x,{style:{marginRight:"0.3em",verticalAlign:"sub"}}),l.createElement(N.Z,null,"Translate this page")))}function H(e){let{editUrl:t,transUrl:n,authors:a}=e;return l.createElement("div",{className:(0,m.Z)(E.k.docs.docFooterEditMetaRow,"row")},l.createElement("div",{className:"col"},t&&l.createElement(b.Z,{editUrl:t})," ",n&&l.createElement(Z,{transUrl:n,style:{marginLeft:"2rem"}})),l.createElement("div",{className:(0,m.Z)("col",k)},l.createElement(_,{authors:a})))}function w(){const{metadata:e}=i(),{editUrl:t,tags:n}=e,a=e.frontMatter.authors||["casdoor"],r=n.length>0,c=!!t;if(!(r||c))return null;const{i18n:o}=(0,p.Z)(),s=o.currentLocale;let d=null;return"zh"===s?d="https://crowdin.com/project/casdoor-website/zh-CN":"en"!==s&&(d=`https://crowdin.com/project/casdoor-website/${s}`),l.createElement("footer",{className:(0,m.Z)(E.k.docs.docFooter,"docusaurus-mt-lg")},r&&l.createElement(C,{tags:n}),c&&l.createElement(H,{editUrl:t,transUrl:d,authors:a}))}var y=n(6043),M=n(3743);const T="tocCollapsibleButton_TO0P",I="tocCollapsibleButtonExpanded_MG3E";function O(e){let{collapsed:t,...n}=e;return l.createElement("button",(0,g.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",T,!t&&I,n.className)}),l.createElement(N.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const A="tocCollapsible_ETCw",$="tocCollapsibleContent_vkbj",R="tocCollapsibleExpanded_sAul";function z(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:r}=e;const{collapsed:c,toggleCollapsed:o}=(0,y.u)({initialState:!0});return l.createElement("div",{className:(0,m.Z)(A,!c&&R,n)},l.createElement(O,{collapsed:c,onClick:o}),l.createElement(y.z,{lazy:!0,className:$,collapsed:c},l.createElement(M.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:r})))}const U="tocMobile_ITEo";function D(){const{toc:e,frontMatter:t}=i();return l.createElement(z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(E.k.docs.docTocMobile,U)})}var F=n(9407);function B(){const{toc:e,frontMatter:t}=i();return l.createElement(F.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:E.k.docs.docTocDesktop})}var j=n(2503),S=n(8718);function P(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=i();return t.hide_title||void 0!==n?null:e.title}();return l.createElement("div",{className:(0,m.Z)(E.k.docs.docMarkdown,"markdown")},n&&l.createElement("header",null,l.createElement(j.Z,{as:"h1"},n)),l.createElement(S.Z,null,t))}var V=n(1310);const q="docItemContainer_Djhp",G="docItemCol_VOVn";function J(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=i(),n=(0,d.i)(),a=e.hide_table_of_contents,r=!a&&t.length>0;return{hidden:a,mobile:r?l.createElement(D,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:l.createElement(B,null)}}();return l.createElement("div",{className:"row"},l.createElement("div",{className:(0,m.Z)("col",!n.hidden&&G)},l.createElement(h.Z,null),l.createElement("div",{className:q},l.createElement("article",null,l.createElement(V.Z,null),l.createElement(v.Z,null),n.mobile,l.createElement(P,null,t),l.createElement(w,null)),l.createElement(f,null))),n.desktop&&l.createElement("div",{className:"col col--3"},n.desktop))}function W(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return l.createElement(o,{content:e.content},l.createElement(a.FG,{className:t},l.createElement(s,null),l.createElement(J,null,l.createElement(n,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7462),a=n(7294),r=n(6010),c=n(3743);const o="tableOfContents_bqdL";function i(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},a.createElement(c.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(7462),a=n(7294),r=n(6668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):l.push(a)})),l}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const l=e.find((e=>i(e).top>=n));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:c}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let a=t;a<=n;a+=1)l.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),i=s(o,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const f=a.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...h}=e;const v=(0,r.L)(),g=m??v.tableOfContents.minHeadingLevel,E=u??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>o({toc:c(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:g,maxHeadingLevel:E});return d((0,a.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:E}}),[i,s,g,E])),a.createElement(f,(0,l.Z)({toc:p,className:n,linkClassName:i},h))}},64:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(7294),a=n(49),r=n(9861),c=n(2949);function o(e){return l.createElement(l.Fragment,null,l.createElement(a.Z,e),l.createElement("br",null),l.createElement(r.Z,{id:"comments",repo:"casbin/casnode",repoId:"MDEwOlJlcG9zaXRvcnkyNjc3NDk0NTE=",category:"Docs comments",categoryId:"DIC_kwDOD_WIS84CRIiB",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:(0,c.I)().colorMode,lang:"en",loading:"lazy"}))}}}]);