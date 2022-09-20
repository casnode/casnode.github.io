"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[1372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Overview",description:"Introduction to Casnode",keywords:["overview","introduction"]},i=void 0,s={unversionedId:"overview",id:"overview",title:"Overview",description:"Introduction to Casnode",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/casnode/casnode-website/edit/master/docs/overview.md",tags:[],version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1663653655,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{title:"Overview",description:"Introduction to Casnode",keywords:["overview","introduction"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Main Features",permalink:"/docs/main-features"}},c={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casnode is a forum developed by ",(0,a.kt)("a",{parentName:"p",href:"https://casbin.io/"},"Casbin community"),". The detailed architecture:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Tools"),(0,a.kt)("th",{parentName:"tr",align:null},"Source code"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,a.kt)("td",{parentName:"tr",align:null},"Web frontend UI for Casnode"),(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript and React"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode/tree/master/web"},"https://github.com/casbin/casnode/tree/master/web"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Backend"),(0,a.kt)("td",{parentName:"tr",align:null},"RESTful API backend for Casnode"),(0,a.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL + Xorm"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode/"},"https://github.com/casbin/casnode/"))))),(0,a.kt)("p",null," Casbin community uses the forum as the official forum: ",(0,a.kt)("a",{parentName:"p",href:"https://forum.casbin.com/"},"Casnode"),"."),(0,a.kt)("p",null,"Casnode is open source, you can get the code ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode"},"here"),"."),(0,a.kt)("p",null,"Casnode is easy to use. It has detailed description in user interfaces so normal users can easily get start with Casnode. This document is prepared for administrators who want to get full use of Casnode."))}d.isMDXComponent=!0}}]);