"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[464],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||o;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9721:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Paquet principal"},u=void 0,l={unversionedId:"main-package",id:"main-package",isDocsHomePage:!1,title:"Paquet principal",description:"Il y a plusieurs paquets dans le backend de Casnode. La fonction principale et le framework Beego appellent ces paquets au d\xe9marrage du programme.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/fr/docs/main-package",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/main-package.md",tags:[],version:"current",frontMatter:{title:"Paquet principal"},sidebar:"tutorialSidebar",previous:{title:"Aper\xe7u",permalink:"/fr/docs/architecture-overview"},next:{title:"Routeurs",permalink:"/fr/docs/routers"}},p=[{value:"principal",id:"principal",children:[],level:2}],c={toc:p};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Il y a plusieurs paquets dans le backend de Casnode. La fonction principale et le framework Beego appellent ces paquets au d\xe9marrage du programme."),(0,o.kt)("h2",{id:"principal"},"principal"),(0,o.kt)("p",null,"Le paquet principal est l'entr\xe9e de Casnode. Nous faisons quelques \xe9tapes de configuration de base dans le paquet principal :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configurer quelques variables globales"),": adaptateur de base de donn\xe9es, client http, adaptateur OSS, Segmenter et informations de base du forum (version du forum, num\xe9ro en ligne, Google Groupes Crawlers)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"D\xe9finition des filtres :")," Filtre des requ\xeates API, filtre des robots de recherche")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Donn\xe9es de session :")," Casnode utilise la session Beego pour stocker les informations de l'utilisateur. Dans la fonction principale, a \xe9crit ces lignes pour utiliser une session bas\xe9e sur un fichier :"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.Session.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"\nbeego.BConfig.WebConfig.SessionGCMaxLifetime = 3600 * 24 * 365\n')),(0,o.kt)("p",null,"Veuillez vous r\xe9f\xe9rer \xe0 la ",(0,o.kt)("a",{parentName:"p",href:"https://beego.me/docs/mvc/controller/session.md"},"session Beego")," si vous voulez utiliser un autre adaptateur de session dans Beego."))}f.isMDXComponent=!0}}]);