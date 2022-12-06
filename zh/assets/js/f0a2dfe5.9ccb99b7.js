"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[9594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u63a7\u5236\u5668",description:"Use controllers to handle requests",keywords:["handler","controllers","request"],authors:["kininaru"]},i=void 0,l={unversionedId:"controllers",id:"controllers",title:"\u63a7\u5236\u5668",description:"Use controllers to handle requests",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/controllers.md",sourceDirName:".",slug:"/controllers",permalink:"/zh/docs/controllers",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/zh-CN",tags:[],version:"current",frontMatter:{title:"\u63a7\u5236\u5668",description:"Use controllers to handle requests",keywords:["handler","controllers","request"],authors:["kininaru"]},sidebar:"tutorialSidebar",previous:{title:"\u8def\u7531",permalink:"/zh/docs/routers"},next:{title:"\u670d\u52a1\u7aef\u6e32\u67d3",permalink:"/zh/docs/server-side-rendering"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u8def\u7531\u5668/\u8def\u7531\u5668"),"\u4e2d\uff0c\u60a8\u53ef\u4ee5\u627e\u5230\u5f88\u591a\u884c\u50cf\u662f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'Beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")\n')),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\u7b2c\u4e09\u4e2a\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},'"GET:GetTopics"'),"\u3002 \u6b64\u5b57\u7b26\u4e32\u662fHTTP \u8bf7\u6c42\u65b9\u6cd5\u548c\u8bf7\u6c42\u5904\u7406\u5668\u7684\u51fd\u6570\u540d\u79f0\u7684\u7ec4\u5408\u3002 \u60a8\u53ef\u4ee5\u5728\u8f6f\u4ef6\u5305 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u5668"),"\u4e2d\u627e\u5230\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"GetTopics")," \u7684\u51fd\u6570\u3002 \u5e76\u4e14\u5b83\u662f\u8bf7\u6c42\u7684\u5904\u7406\u7a0b\u5e8f ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/get-topics")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u627e\u5230\u8bf7\u6c42\u7684\u76f8\u5e94\u51fd\u6570\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are using ",(0,o.kt)("strong",{parentName:"p"},"Goland"),", you can press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+F"),"(vscode use ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+F")," instead), and search ",(0,o.kt)("inlineCode",{parentName:"p"},"func (c *ApiController) FunctionName")," to locate to the function quickly.")))}u.isMDXComponent=!0}}]);