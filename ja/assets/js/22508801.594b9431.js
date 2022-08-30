"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[32],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Routers",description:"Filters in Casnode",keywords:["routers","filter"]},a=void 0,l={unversionedId:"routers",id:"routers",title:"Routers",description:"Filters in Casnode",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/routers.md",sourceDirName:".",slug:"/routers",permalink:"/ja/docs/routers",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/ja",tags:[],version:"current",frontMatter:{title:"Routers",description:"Filters in Casnode",keywords:["routers","filter"]},sidebar:"tutorialSidebar",previous:{title:"\u30e1\u30a4\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8",permalink:"/ja/docs/main-package"},next:{title:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",permalink:"/ja/docs/controllers"}},s={},c=[{value:"\u30eb\u30fc\u30bf\u30fc/filter.go",id:"\u30eb\u30fc\u30bf\u30fcfiltergo",level:2},{value:"routers/filter_ssr.go",id:"routersfilter_ssrgo",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5b9f\u969b\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u30eb\u30fc\u30bf")," \u306fBeego\u306e\u7d44\u307f\u8fbc\u307f\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3059\u3002 ",(0,o.kt)("inlineCode",{parentName:"p"},"routers.init()")," \u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u8d77\u52d5\u6642\u306b\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306b\u3088\u3063\u3066\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u3044\u304f\u3064\u304b\u306e\u30d5\u30a3\u30eb\u30bf\u95a2\u6570\u3092\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"routers/router.go")," \u306b\u3064\u3044\u3066\u8a71\u3059\u3064\u3082\u308a\u306f\u3042\u308a\u307e\u305b\u3093\u3002Beego \u306f\u3059\u3067\u306b\u826f\u3044\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30eb\u30fc\u30bf\u30fcfiltergo"},"\u30eb\u30fc\u30bf\u30fc/filter.go"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TransparentStatic:")," \u9759\u7684\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u63d0\u4f9b\u3059\u308b\u30d5\u30a3\u30eb\u30bf\u3067\u3059\u3002 \u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30b9\u304c ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/"),"\u3067\u59cb\u307e\u3089\u306a\u3044\u5834\u5408\u3001\u30d5\u30a3\u30eb\u30bf\u306f\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u3092\u30d6\u30e9\u30a6\u30b6\u30fc\u306b\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30d5\u30a3\u30eb\u30bf\u30fc\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"web/build/"),"\u3067\u8981\u6c42\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u898b\u3064\u3051\u3001\u5b58\u5728\u3059\u308b\u5834\u5408\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FreshAccountActiveStatus:")," \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u72b6\u614b\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"routersfilter_ssrgo"},"routers/filter_ssr.go"),(0,o.kt)("p",null,"\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u306e\u30dc\u30c3\u30c8\u7528\u306b\u30da\u30fc\u30b8\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306bChromedp\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 Chrome \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u95a2\u6570\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30da\u30fc\u30b8\u3092 bots \u306b\u8fd4\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u6b63\u898f\u8868\u73fe ",(0,o.kt)("inlineCode",{parentName:"p"},"bot|slurp|bing|croller")," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e User Agent \u3068\u4e00\u81f4\u3057\u307e\u3059\u3002 \u4e00\u81f4\u3059\u308b\u5834\u5408\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u30dc\u30c3\u30c8\u306b\u3088\u3063\u3066\u9001\u4fe1\u3055\u308c\u308b\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);