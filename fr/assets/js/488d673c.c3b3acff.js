"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[52],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4030:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const o={title:"Server Side Rendering",description:"Server Side Rendering",keywords:["SSR"]},a=void 0,s={unversionedId:"server-side-rendering",id:"server-side-rendering",title:"Server Side Rendering",description:"Server Side Rendering",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/server-side-rendering.md",sourceDirName:".",slug:"/server-side-rendering",permalink:"/fr/docs/server-side-rendering",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/fr",tags:[],version:"current",frontMatter:{title:"Server Side Rendering",description:"Server Side Rendering",keywords:["SSR"]},sidebar:"tutorialSidebar",previous:{title:"Contr\xf4leurs",permalink:"/fr/docs/controllers"},next:{title:"Internationalisation",permalink:"/fr/docs/internationalization"}},l={},c=[{value:"Implementation",id:"implementation",level:2}],p={toc:c};function d(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Casnode support SSR. SSR(Server-side rendering) is a popular technique for rendering a client-side single page application (SPA) on the server and then sending a fully rendered page to the client."),(0,i.kt)("p",null,"This allows for dynamic components to be served as static HTML markup.This approach can be useful for search engine optimization (SEO) when indexing does not handle JavaScript properly. It may also be beneficial in situations where downloading a large JavaScript bundle is impaired by a slow network."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"You can see the implementation of server side rendering in ",(0,i.kt)("inlineCode",{parentName:"p"},"routers/filter_ssr.go"),".We use Chromedp to render pages for search engine bots. If Chrome is installed, functions in this file will return a rendered page to bots."),(0,i.kt)("p",null,"We use a Regular expression ",(0,i.kt)("inlineCode",{parentName:"p"},"bot|slurp|bing|crawler")," to match the User Agent of the request. If matched, we think the request is sent by a bot."))}d.isMDXComponent=!0}}]);