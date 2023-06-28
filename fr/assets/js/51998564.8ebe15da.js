"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[9039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Contr\xf4leurs",description:"Use controllers to handle requests",keywords:["handler","controllers","request"],authors:["kininaru"]},i=void 0,l={unversionedId:"controllers",id:"controllers",title:"Contr\xf4leurs",description:"Use controllers to handle requests",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/controllers.md",sourceDirName:".",slug:"/controllers",permalink:"/fr/docs/controllers",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/fr",tags:[],version:"current",frontMatter:{title:"Contr\xf4leurs",description:"Use controllers to handle requests",keywords:["handler","controllers","request"],authors:["kininaru"]},sidebar:"tutorialSidebar",previous:{title:"Routeurs",permalink:"/fr/docs/routers"},next:{title:"Server Side Rendering",permalink:"/fr/docs/server-side-rendering"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dans ",(0,o.kt)("inlineCode",{parentName:"p"},"routers/router.go"),", vous pouvez trouver beaucoup de lignes comme"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'Beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")\n')),(0,o.kt)("p",null,"Veuillez pr\xeater attention au troisi\xe8me param\xe8tre ",(0,o.kt)("inlineCode",{parentName:"p"},'"GET:GetTopics"'),". Cette cha\xeene de caract\xe8res est une combinaison de la m\xe9thode de requ\xeate HTTP et du nom de la fonction du gestionnaire de requ\xeates. Vous pouvez trouver une fonction appel\xe9e ",(0,o.kt)("inlineCode",{parentName:"p"},"GetTopics")," dans le paquet ",(0,o.kt)("inlineCode",{parentName:"p"},"contr\xf4leurs"),", et c'est le gestionnaire de la requ\xeate ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/get-topics"),"."),(0,o.kt)("p",null,"Vous pouvez trouver la fonction correspondante de la requ\xeate de cette fa\xe7on."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are using ",(0,o.kt)("strong",{parentName:"p"},"Goland"),", you can press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+F"),"(vscode use ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+F")," instead), and search ",(0,o.kt)("inlineCode",{parentName:"p"},"func (c *ApiController) FunctionName")," to locate to the function quickly.")))}p.isMDXComponent=!0}}]);