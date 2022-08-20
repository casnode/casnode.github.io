"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[242],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8187:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(3117),i=(n(7294),n(3905));const a={title:"Hauptpaket"},o=void 0,u={unversionedId:"main-package",id:"main-package",title:"Hauptpaket",description:"Es gibt mehrere Pakete im Backend von Casnode. Die Hauptfunktion und das Beego Framework rufen diese Pakete beim Programmstart auf.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/de/docs/main-package",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/de",tags:[],version:"current",frontMatter:{title:"Hauptpaket"},sidebar:"tutorialSidebar",previous:{title:"\xdcbersicht",permalink:"/de/docs/architecture-overview"},next:{title:"Router",permalink:"/de/docs/routers"}},c={},s=[{value:"wichtigsten",id:"wichtigsten",level:2}],p={toc:s};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Es gibt mehrere Pakete im Backend von Casnode. Die Hauptfunktion und das Beego Framework rufen diese Pakete beim Programmstart auf."),(0,i.kt)("h2",{id:"wichtigsten"},"wichtigsten"),(0,i.kt)("p",null,"Das Hauptpaket ist der Eingang von Casnode. Wir machen einige grundlegende Installationsschritte im Hauptpaket:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Richte einige globale Variablen"),"ein: Datenbankadapter, http Client, OSS-Adapter, Segmenter und Forum Basisinformationen (Forum-Version, Online-Nummer, Google Groups Crawlers)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Filter einrichten:")," API-Request-Filter, Suchmaschinen-Bot-Filter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sitzungsdaten:")," Casnode verwendet Beego Session um Benutzerinformationen zu speichern. In der Hauptfunktion hat diese Zeilen geschrieben, um eine dateibasierte Sitzung zu verwenden:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"\nbeego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365\n')),(0,i.kt)("p",null,"Bitte wenden Sie sich an ",(0,i.kt)("a",{parentName:"p",href:"https://beego.me/docs/mvc/controller/session.md"},"Beego Session")," wenn Sie einen anderen Sitzungsadapter in Beego verwenden m\xf6chten."))}l.isMDXComponent=!0}}]);