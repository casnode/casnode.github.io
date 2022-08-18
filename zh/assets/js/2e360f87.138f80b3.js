"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[946],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(3117),o=(n(7294),n(3905));const i={title:"Internationalization"},a=void 0,c={unversionedId:"internationalization",id:"internationalization",title:"Internationalization",description:"Casnode \u652f\u6301\u591a\u79cd\u8bed\u8a00\uff0c\u5c06\u7ffb\u8bd1\u90e8\u7f72\u5230Crowdin\uff0c\u6211\u4eec\u652f\u6301\u4e2d\u6587\u3001\u6cd5\u6587\u3001\u5fb7\u6587\u3001\u4fc4\u6587\u3001\u65e5\u6587\u548c\u671d\u9c9c\u6587\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/internationalization.md",sourceDirName:".",slug:"/internationalization",permalink:"/zh/docs/internationalization",draft:!1,editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/internationalization.md",tags:[],version:"current",frontMatter:{title:"Internationalization"},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u7aef\u6e32\u67d3",permalink:"/zh/docs/server-side-rendering"}},u={},l=[],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casnode \u652f\u6301\u591a\u79cd\u8bed\u8a00\uff0c\u5c06\u7ffb\u8bd1\u90e8\u7f72\u5230Crowdin\uff0c\u6211\u4eec\u652f\u6301\u4e2d\u6587\u3001\u6cd5\u6587\u3001\u5fb7\u6587\u3001\u4fc4\u6587\u3001\u65e5\u6587\u548c\u671d\u9c9c\u6587\u3002"),(0,o.kt)("p",null,"Casnode \u4f7f\u7528\u5b98\u65b9\u7684 Crowdin cli \u6765\u540c\u6b65\u6765\u81ea Crowdin \u7684\u7ffb\u8bd1\u3002 \u5982\u679c\u60a8\u60f3\u8981\u6dfb\u52a0\u66f4\u591a\u8bed\u8a00\u652f\u6301\uff0c\u8bf7\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode"},"\u6211\u4eec\u7684\u793e\u533a"),"\u4e2d\u63d0\u51fa\uff0c \u5982\u679c\u60a8\u60f3\u5e2e\u52a9\u6211\u4eec\u52a0\u5feb\u7ffb\u8bd1\u5de5\u4f5c\uff0c\u8bf7\u5e2e\u52a9\u6211\u4eec\u7ffb\u8bd1 ",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/casnode-web"},"Crowdin"),"\u3002"))}p.isMDXComponent=!0}}]);