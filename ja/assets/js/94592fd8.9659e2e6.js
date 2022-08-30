"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u30e1\u30a4\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8",description:"Casnode main packages",keywords:["main"]},i=void 0,s={unversionedId:"main-package",id:"main-package",title:"\u30e1\u30a4\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8",description:"Casnode main packages",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/ja/docs/main-package",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/ja",tags:[],version:"current",frontMatter:{title:"\u30e1\u30a4\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8",description:"Casnode main packages",keywords:["main"]},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8981",permalink:"/ja/docs/architecture-overview"},next:{title:"Routers",permalink:"/ja/docs/routers"}},c={},p=[{value:"\u30e1\u30a4\u30f3",id:"\u30e1\u30a4\u30f3",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casnode\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u3042\u308a\u307e\u3059\u3002 The main function and the Beego framework call these packages when the program starts."),(0,o.kt)("h2",{id:"\u30e1\u30a4\u30f3"},"\u30e1\u30a4\u30f3"),(0,o.kt)("p",null,"\u30e1\u30a4\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8\u306fCasnode\u306e\u5165\u308a\u53e3\u3067\u3059\u3002 \u30e1\u30a4\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3044\u304f\u3064\u304b\u306e\u57fa\u672c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u306e\u8a2d\u5b9a"),": \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30a2\u30c0\u30d7\u30bf, http\u30af\u30e9\u30a4\u30a2\u30f3\u30c8, OSS\u30a2\u30c0\u30d7\u30bf, \u30bb\u30b0\u30e1\u30f3\u30bf\u30fc, \u30d5\u30a9\u30fc\u30e9\u30e0\u306e\u57fa\u672c\u60c5\u5831(\u30d5\u30a9\u30fc\u30e9\u30e0\u306e\u30d0\u30fc\u30b8\u30e7\u30f3, \u30aa\u30f3\u30e9\u30a4\u30f3\u756a\u53f7, Google Groups Crawlers)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u30d5\u30a3\u30eb\u30bf\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7:")," API \u30ea\u30af\u30a8\u30b9\u30c8\u30d5\u30a3\u30eb\u30bf\u3001\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u30dc\u30c3\u30c8\u30d5\u30a3\u30eb\u30bf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u30bb\u30c3\u30b7\u30e7\u30f3\u30c7\u30fc\u30bf:")," Casnode\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306bBeego\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30e1\u30a4\u30f3\u95a2\u6570\u3067\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u30d9\u30fc\u30b9\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u3053\u308c\u3089\u306e\u884c\u3092\u66f8\u304d\u307e\u3057\u305f\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.Session.Session.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.Session.Session.Session.Session.Session.SessionProviderConfig = ".tmp"\nbeego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 365 * 24 * 365\n')),(0,o.kt)("p",null,"Beego \u3067\u5225\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u30a2\u30c0\u30d7\u30bf\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001 ",(0,o.kt)("a",{parentName:"p",href:"https://beego.me/docs/mvc/controller/session.md"},"Beego \u30bb\u30c3\u30b7\u30e7\u30f3")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0}}]);