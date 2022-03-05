"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[946],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},521:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Internationalization"},u=void 0,l={unversionedId:"internationalization",id:"internationalization",isDocsHomePage:!1,title:"Internationalization",description:"Casnode \u652f\u6301\u591a\u79cd\u8bed\u8a00\uff0c\u5c06\u7ffb\u8bd1\u90e8\u7f72\u5230Crowdin\uff0c\u6211\u4eec\u652f\u6301\u4e2d\u6587\u3001\u6cd5\u6587\u3001\u5fb7\u6587\u3001\u4fc4\u6587\u3001\u65e5\u6587\u548c\u671d\u9c9c\u6587\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/internationalization.md",sourceDirName:".",slug:"/internationalization",permalink:"/zh/docs/internationalization",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/internationalization.md",tags:[],version:"current",frontMatter:{title:"Internationalization"},sidebar:"tutorialSidebar",previous:{title:"Server Side Rendering",permalink:"/zh/docs/server-side-rendering"}},p=[],s={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Casnode \u652f\u6301\u591a\u79cd\u8bed\u8a00\uff0c\u5c06\u7ffb\u8bd1\u90e8\u7f72\u5230Crowdin\uff0c\u6211\u4eec\u652f\u6301\u4e2d\u6587\u3001\u6cd5\u6587\u3001\u5fb7\u6587\u3001\u4fc4\u6587\u3001\u65e5\u6587\u548c\u671d\u9c9c\u6587\u3002"),(0,i.kt)("p",null,"Casnode \u4f7f\u7528\u5b98\u65b9\u7684 Crowdin cli \u6765\u540c\u6b65\u6765\u81ea Crowdin \u7684\u7ffb\u8bd1\u3002 \u5982\u679c\u60a8\u60f3\u8981\u6dfb\u52a0\u66f4\u591a\u8bed\u8a00\u652f\u6301\uff0c\u8bf7\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode"},"\u6211\u4eec\u7684\u793e\u533a"),"\u4e2d\u63d0\u51fa\uff0c \u5982\u679c\u60a8\u60f3\u5e2e\u52a9\u6211\u4eec\u52a0\u5feb\u7ffb\u8bd1\u5de5\u4f5c\uff0c\u8bf7\u5e2e\u52a9\u6211\u4eec\u7ffb\u8bd1 ",(0,i.kt)("a",{parentName:"p",href:"https://crowdin.com/project/casnode-web"},"Crowdin"),"\u3002"))}f.isMDXComponent=!0}}]);