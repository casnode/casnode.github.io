"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={title:"Routers",description:"Filters in Casnode",keywords:["routers","filter"]},a=void 0,s={unversionedId:"routers",id:"routers",title:"Routers",description:"Filters in Casnode",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/routers.md",sourceDirName:".",slug:"/routers",permalink:"/ko/docs/routers",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/ko",tags:[],version:"current",frontMatter:{title:"Routers",description:"Filters in Casnode",keywords:["routers","filter"]},sidebar:"tutorialSidebar",previous:{title:"Main package",permalink:"/ko/docs/main-package"},next:{title:"Controllers",permalink:"/ko/docs/controllers"}},l={},u=[{value:"routers/filter.go",id:"routersfiltergo",level:2},{value:"routers/filter_ssr.go",id:"routersfilter_ssrgo",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Actually, ",(0,o.kt)("inlineCode",{parentName:"p"},"routers")," is a built-in package of Beego. ",(0,o.kt)("inlineCode",{parentName:"p"},"routers.init()")," is run by the framework when program starts. However, we added some filter functions to the package."),(0,o.kt)("p",null,"We are not going to talk about the ",(0,o.kt)("inlineCode",{parentName:"p"},"routers/router.go")," here, Beego has already had a good document for it. We are going to introduce our filters here."),(0,o.kt)("h2",{id:"routersfiltergo"},"routers/filter.go"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TransparentStatic:")," This filter is to serve static files. If a request path is not starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/"),", then the filter will serve a static file to the browser. The filter will find the requested file in ",(0,o.kt)("inlineCode",{parentName:"p"},"web/build/"),", and serve the file if exist."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FreshAccountActiveStatus:")," Update users' online states when they send a request."),(0,o.kt)("h2",{id:"routersfilter_ssrgo"},"routers/filter_ssr.go"),(0,o.kt)("p",null,"We use Chromedp to render pages for search engine bots. If Chrome is installed, functions in this file will return a rendered page to bots."),(0,o.kt)("p",null,"We use a Regular expression ",(0,o.kt)("inlineCode",{parentName:"p"},"bot|slurp|bing|crawler")," to match the User Agent of the request. If matched, we think the request is sent by a bot."))}p.isMDXComponent=!0}}]);