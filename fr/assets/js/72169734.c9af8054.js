"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[300],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7955:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},c=void 0,l={unversionedId:"docker",id:"docker",isDocsHomePage:!1,title:"docker",description:"Installer casnode via docker",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/docker.md",sourceDirName:".",slug:"/docker",permalink:"/fr/docs/docker",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bt-panel",permalink:"/fr/docs/bt-panel"},next:{title:"Migration depuis DiscuzX",permalink:"/fr/docs/migration"}},u=[{value:"Installer casnode via docker",id:"installer-casnode-via-docker",children:[{value:"Pr\xe9paration du travail",id:"pr\xe9paration-du-travail",children:[{value:"Installer docker et docker-compose",id:"installer-docker-et-docker-compose",children:[],level:4},{value:"Cloner la casnode &amp; casdoor",id:"cloner-la-casnode--casdoor",children:[],level:4}],level:3},{value:"Configurer la casdoor",id:"configurer-la-casdoor",children:[{value:"Courir la cassette",id:"courir-la-cassette",children:[],level:4}],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"L'environnement du tutoriel est Ubuntu 20.0.4 .  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("h2",{id:"installer-casnode-via-docker"},"Installer casnode via docker"),(0,o.kt)("h3",{id:"pr\xe9paration-du-travail"},"Pr\xe9paration du travail"),(0,o.kt)("h4",{id:"installer-docker-et-docker-compose"},"Installer docker et docker-compose"),(0,o.kt)("p",null,"Installez Docker et Docker-compose, vous voyez ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker")," et ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"cloner-la-casnode--casdoor"},"Cloner la casnode & casdoor"),(0,o.kt)("p",null,"Ensuite, cloner Casdoor et Casndoe de GitHub."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,o.kt)("p",null,"Maintenant, vous pouvez voir deux dossiers, casnode et casdoor."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"configurer-la-casdoor"},"Configurer la casdoor"),(0,o.kt)("h4",{id:"courir-la-cassette"},"Courir la cassette"),(0,o.kt)("p",null,"Nous configurons d'abord la casdoor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd casdoor\nvim conf/app.conf\n")),(0,o.kt)("p",null,"Modifier dataSourceName = root:123@tcp(localhost:3306)/ to dataSourceName = root:123@tcp(db:3306)/"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose vers le haut\n")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"mysql et casdoor sont dans diff\xe9rents docker containers. :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h4",{parentName:"div",id:"configurer-casnode-dans-casdoor"},"Configurer casnode dans casdoor"),(0,o.kt)("p",{parentName:"div"},"Maintenant que Casdoor a \xe9t\xe9 configur\xe9, visitez http://your-ip:8000 pour configurer Casnode."),(0,o.kt)("p",{parentName:"div"},"Le compte de connexion administrateur par d\xe9faut est ",(0,o.kt)("inlineCode",{parentName:"p"},"admin/123"),"."),(0,o.kt)("p",{parentName:"div"},"Cliquez sur Organisation, puis sur Ajouter, cliquez sur Modifier pour l'organisation ajout\xe9e, et changez le nom de l'organisation que vous voulez. Ici, je l'ai r\xe9gl\xe9 sur casbin-forum, puis cliquez sur Enregistrer."),(0,o.kt)("p",{parentName:"div"},"Cliquez sur Applications, puis cliquez sur Ajouter, pour l'application que vous venez d'ajouter, cliquez sur Modifier, changer le nom de l'application en nom que vous voulez, je l'ai chang\xe9 en app-casbin-forum. cliquez sur l'organisation, s\xe9lectionnez l'organisation que vous venez d'ajouter, mon organisation est casbin- forum. Cliquez sur les URL de redirection, modifiez le lien dans la bo\xeete pour ",(0,o.kt)("inlineCode",{parentName:"p"},"http://votre-ip:7000/callback"),". Enfin, souvenez-vous de l'ID du client et du secret du client, puis cliquez sur Enregistrer."),(0,o.kt)("p",{parentName:"div"},"Cliquez sur Utilisateurs, sur Ajouter, puis sur Modifier, modifier l'utilisateur ajout\xe9, cliquez sur Organisation, s\xe9lectionnez le forum de casse et cliquez sur Administrateur. Enfin, cliquez sur Enregistrer, maintenant que votre organisation a un compte administrateur."),(0,o.kt)("br",null),(0,o.kt)("h3",{parentName:"div",id:"configurer-la-casnode"},"Configurer la casnode"),(0,o.kt)("p",{parentName:"div"},"Ensuite, nous configurons dans Casnode."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd casnode\nvim conf/app.conf\n")),(0,o.kt)("p",{parentName:"div"},"Modifiez ",(0,o.kt)("strong",{parentName:"p"},"dataSourceName = root:123@tcp(localhost:3306)/")," \xe0 ",(0,o.kt)("strong",{parentName:"p"},"dataSourceName = root:123@tcp(db:3306)/")," pour que les donn\xe9es proviennent de votre base de donn\xe9es."),(0,o.kt)("p",{parentName:"div"},"Puis trouvez casdoorEndpoint, modifiez-la sur ",(0,o.kt)("inlineCode",{parentName:"p"},"http://votre-ip:8000")," (adresse backend de Casdoor), trouvez le clientId et clientSecret, et les modifier \xe0 l'identifiant du client d'application et au secret client pr\xe9c\xe9demment m\xe9moris\xe9, trouver casdoorOrganization, modifier le nom de l'organisation pour vous d\xe9finir. Enfin appuyez sur ",(0,o.kt)("strong",{parentName:"p"},"Esc"),", entrez : wq pour enregistrer et quitter."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nvim src/Conf.js\n")),(0,o.kt)("p",{parentName:"div"},"Appuyez sur ",(0,o.kt)("strong",{parentName:"p"},"i"),", modifiez l'adresse serverUrl \xe0 http://votre-ip:8000 (adresse d'acc\xe8s front-end de Casdoor), modifier l'Id du client \xe0 l'Id du client de l'application que vient d'ajouter, modifier le nom de l'application et modifier l'organisation pour le nom de l'organisation d\xe9finie. Cliquez sur ",(0,o.kt)("strong",{parentName:"p"},"\xc9chap"),", entrez : wq pour enregistrer et quitter. open src/auth/Auth.js,modify"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export function getSignupUrl() {\n  // return `${trim(authConfig.serverUrl)}/signup/${authConfig.appName}`;\n  return getSigninUrl().replace(\n    "/login/oauth/authorize",\n    "/signup/oauth/authorize"\n  );\n}\n')),(0,o.kt)("p",{parentName:"div"},"\xe0"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export function getSignupUrl() {\n  return `${trim(authConfig.serverUrl)}/signup/${authConfig.appName}`;\n  //return getSigninUrl().replace(\n  // "/login/oauth/authorize",\n  // "/signup/oauth/authorize"\n  //);\n}\n')),(0,o.kt)("p",{parentName:"div"},"Ensuite, vous avez besoin"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ..\ndocker-compose vers le haut\n")),(0,o.kt)("p",{parentName:"div"},"Prochaine visite http://your-ip:7000, cliquez sur login, entrez le compte que vous avez ajout\xe9 avant, user_1/123, vous avez maintenant r\xe9ussi \xe0 vous connecter \xe0 Casnode."),(0,o.kt)("p",{parentName:"div"},"Plus de param\xe8tres de r\xe9f\xe9rence ",(0,o.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"casnode.")))))}p.isMDXComponent=!0}}]);