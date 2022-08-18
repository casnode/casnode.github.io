"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[242],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8187:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const i={title:"Hauptpaket"},o=void 0,u={unversionedId:"main-package",id:"main-package",title:"Hauptpaket",description:"Es gibt mehrere Pakete im Backend von Casnode. Die Hauptfunktion und das Beego Framework rufen diese Pakete beim Programmstart auf.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/de/docs/main-package",draft:!1,editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/main-package.md",tags:[],version:"current",frontMatter:{title:"Hauptpaket"},sidebar:"tutorialSidebar",previous:{title:"\xdcbersicht",permalink:"/de/docs/architecture-overview"},next:{title:"Router",permalink:"/de/docs/routers"}},c={},s=[{value:"wichtigsten",id:"wichtigsten",level:2}],p={toc:s};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Es gibt mehrere Pakete im Backend von Casnode. Die Hauptfunktion und das Beego Framework rufen diese Pakete beim Programmstart auf."),(0,a.kt)("h2",{id:"wichtigsten"},"wichtigsten"),(0,a.kt)("p",null,"Das Hauptpaket ist der Eingang von Casnode. Wir machen einige grundlegende Installationsschritte im Hauptpaket:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Richte einige globale Variablen"),"ein: Datenbankadapter, http Client, OSS-Adapter, Segmenter und Forum Basisinformationen (Forum-Version, Online-Nummer, Google Groups Crawlers)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Filter einrichten:")," API-Request-Filter, Suchmaschinen-Bot-Filter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sitzungsdaten:")," Casnode verwendet Beego Session um Benutzerinformationen zu speichern. In der Hauptfunktion hat diese Zeilen geschrieben, um eine dateibasierte Sitzung zu verwenden:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"\nbeego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365\n')),(0,a.kt)("p",null,"Bitte wenden Sie sich an ",(0,a.kt)("a",{parentName:"p",href:"https://beego.me/docs/mvc/controller/session.md"},"Beego Session")," wenn Sie einen anderen Sitzungsadapter in Beego verwenden m\xf6chten."))}l.isMDXComponent=!0}}]);