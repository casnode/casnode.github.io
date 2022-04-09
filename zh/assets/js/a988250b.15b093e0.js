"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[260],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1944:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"\u8def\u7531"},l=void 0,u={unversionedId:"routers",id:"routers",isDocsHomePage:!1,title:"\u8def\u7531",description:"\u5b9e\u9645\u4e0a\uff0c \u8def\u7531\u5668 \u662f\u4e00\u4e2a\u5185\u7f6e\u7684Beego\u5305\u4ef6\u3002 routers.init() \u7a0b\u5e8f\u542f\u52a8\u65f6\u7531\u6846\u67b6\u8fd0\u884c\u3002 \u7136\u800c\uff0c\u6211\u4eec\u5728\u5305\u88f9\u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e9b\u8fc7\u6ee4\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/routers.md",sourceDirName:".",slug:"/routers",permalink:"/zh/docs/routers",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/routers.md",tags:[],version:"current",frontMatter:{title:"\u8def\u7531"},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u5305",permalink:"/zh/docs/main-package"},next:{title:"\u63a7\u5236\u5668",permalink:"/zh/docs/controllers"}},p=[{value:"\u8def\u7531\u5668/\u8fc7\u6ee4\u5668.go",id:"\u8def\u7531\u5668\u8fc7\u6ee4\u5668go",children:[],level:2},{value:"\u8def\u7531\u5668/filter_ssr.go",id:"\u8def\u7531\u5668filter_ssrgo",children:[],level:2}],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8def\u7531\u5668")," \u662f\u4e00\u4e2a\u5185\u7f6e\u7684Beego\u5305\u4ef6\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"routers.init()")," \u7a0b\u5e8f\u542f\u52a8\u65f6\u7531\u6846\u67b6\u8fd0\u884c\u3002 \u7136\u800c\uff0c\u6211\u4eec\u5728\u5305\u88f9\u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e9b\u8fc7\u6ee4\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4e0d\u4f1a\u5728\u8fd9\u91cc\u8bf4 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8def\u7531\u5668/\u8def\u7531\u5668")," \u3002Beego\u5df2\u7ecf\u6709\u4e00\u4e2a\u5f88\u597d\u7684\u6587\u6863\u3002 \u6211\u4eec\u5c06\u5728\u8fd9\u91cc\u4ecb\u7ecd\u6211\u4eec\u7684\u8fc7\u6ee4\u5668\u3002"),(0,i.kt)("h2",{id:"\u8def\u7531\u5668\u8fc7\u6ee4\u5668go"},"\u8def\u7531\u5668/\u8fc7\u6ee4\u5668.go"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u900f\u660e\u9759\u6001\uff1a")," \u6b64\u8fc7\u6ee4\u5668\u5c06\u670d\u52a1\u4e8e\u9759\u6001\u6587\u4ef6\u3002 \u5982\u679c\u8bf7\u6c42\u8def\u5f84\u4e0d\u662f\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/"),"\u5f00\u5934\u7684\uff0c\u90a3\u4e48\u8fc7\u6ee4\u5668\u5c06\u4e3a\u6d4f\u89c8\u5668\u63d0\u4f9b\u9759\u6001\u6587\u4ef6\u3002 \u8fc7\u6ee4\u5668\u5c06\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"web/build/"),"\u4e2d\u627e\u5230\u8bf7\u6c42\u7684\u6587\u4ef6\uff0c\u5982\u679c\u5b58\u5728\u5219\u670d\u52a1\u4e8e\u8be5\u6587\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u65b0\u65e7\u8d26\u6237\u6fc0\u6d3b\u72b6\u6001\uff1a")," \u66f4\u65b0\u7528\u6237\u53d1\u9001\u8bf7\u6c42\u65f6\u7684\u5728\u7ebf\u72b6\u6001\u3002"),(0,i.kt)("h2",{id:"\u8def\u7531\u5668filter_ssrgo"},"\u8def\u7531\u5668/filter_ssr.go"),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 Chromedp \u6e32\u67d3\u641c\u7d22\u5f15\u64ce\u673a\u5668\u4eba\u7684\u9875\u9762\u3002 \u5982\u679c\u5b89\u88c5\u4e86 Chrome \uff0c\u6b64\u6587\u4ef6\u4e2d\u7684\u51fd\u6570\u5c06\u8fd4\u56de\u6e32\u67d3\u9875\u9762\u5230\u673a\u5668\u4eba\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"bot|slurp|bing|crawler")," \u6765\u5339\u914d\u8bf7\u6c42\u7684\u7528\u6237\u4ee3\u7406\u4eba\u3002 \u5982\u679c\u5339\u914d\uff0c\u6211\u4eec\u8ba4\u4e3a\u8bf7\u6c42\u662f\u7531\u673a\u5668\u4eba\u53d1\u9001\u7684\u3002"))}f.isMDXComponent=!0}}]);