"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[4328],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>k});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(o),k=r,m=u["".concat(d,".").concat(k)]||u[k]||p[k]||a;return o?n.createElement(m,i(i({ref:t},s),{},{components:o})):n.createElement(m,i({ref:t},s))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4824:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={title:"Docker",description:"Install casnode through docker",keywords:["docker"],authors:["oranges-eating"]},i=void 0,c={unversionedId:"docker",id:"docker",title:"Docker",description:"Install casnode through docker",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/docker.md",sourceDirName:".",slug:"/docker",permalink:"/zh/docs/docker",draft:!1,editUrl:"https://github.com/casnode/casnode-website/edit/master/docs/docker.md",tags:[],version:"current",frontMatter:{title:"Docker",description:"Install casnode through docker",keywords:["docker"],authors:["oranges-eating"]},sidebar:"tutorialSidebar",previous:{title:"BT panel",permalink:"/zh/docs/bt-panel"},next:{title:"\u4ece DiscuzX \u8fc1\u79fb",permalink:"/zh/docs/migration"}},d={},l=[{value:"Install casnode through docker",id:"install-casnode-through-docker",level:2},{value:"Prepare work",id:"prepare-work",level:3},{value:"Install docker and docker-compose",id:"install-docker-and-docker-compose",level:4},{value:"Clone casnode &amp; casdoor",id:"clone-casnode--casdoor",level:4},{value:"Configure casdoor",id:"configure-casdoor",level:3},{value:"Run casdoor",id:"run-casdoor",level:4},{value:"Configure casnode in casdoor",id:"configure-casnode-in-casdoor",level:4},{value:"Configure casnode",id:"configure-casnode",level:3}],s={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The tutorial environment is Ubuntu 20.0.4 .")),(0,r.kt)("h2",{id:"install-casnode-through-docker"},"Install casnode through docker"),(0,r.kt)("h3",{id:"prepare-work"},"Prepare work"),(0,r.kt)("h4",{id:"install-docker-and-docker-compose"},"Install docker and docker-compose"),(0,r.kt)("p",null,"Install Docker and Docker-compose, you see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,r.kt)("h4",{id:"clone-casnode--casdoor"},"Clone casnode & casdoor"),(0,r.kt)("p",null,"Next, clone Casdoor and Casndoe from GitHub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,r.kt)("p",null,"Now, you can see two folders, ",(0,r.kt)("inlineCode",{parentName:"p"},"casnode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"casdoor"),"."),(0,r.kt)("h3",{id:"configure-casdoor"},"Configure casdoor"),(0,r.kt)("h4",{id:"run-casdoor"},"Run casdoor"),(0,r.kt)("p",null,"We first configure casdoor."),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", modify ",(0,r.kt)("strong",{parentName:"p"},"dataSourceName = root:123@tcp(localhost:3306)/ to dataSourceName = root:123@tcp(db:3306)/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"mysql and casdoor are in different docker containers.")),(0,r.kt)("h4",{id:"configure-casnode-in-casdoor"},"Configure casnode in casdoor"),(0,r.kt)("p",null,"Now that Casdoor has been configured, visit ",(0,r.kt)("a",{parentName:"p",href:"http://your-ip:8000"},"http://your-ip:8000")," to configure Casnode."),(0,r.kt)("p",null,"The default administrator login account is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/123"),"."),(0,r.kt)("p",null,"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save."),(0,r.kt)("p",null,"Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum.Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://your-ip:7000/callback"),".Finally, remember the Client ID and Client Secret, and click Save."),(0,r.kt)("p",null,"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"configure-casnode"},"Configure casnode"),(0,r.kt)("p",null,"Next we configure in Casnode."),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", modify ",(0,r.kt)("strong",{parentName:"p"},"dataSourceName = root:123@tcp(localhost:3306)/")," to ",(0,r.kt)("strong",{parentName:"p"},"dataSourceName = root:123@tcp(db:3306)/")," so that the data come from your database."),(0,r.kt)("p",null,"Then find ",(0,r.kt)("inlineCode",{parentName:"p"},"casdoorEndpoint"),", modify it to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://your-ip:8000")," (Casdoor backend address), find ",(0,r.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"clientSecret"),", and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to you set."),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"web/src/Conf.js")," , modify ",(0,r.kt)("inlineCode",{parentName:"p"},"serverUrl")," to ",(0,r.kt)("a",{parentName:"p",href:"http://your-ip:8000"},"http://your-ip:8000")," (Casdoor front-end access address), modify ",(0,r.kt)("inlineCode",{parentName:"p"},"clientId")," to the clientId of the application just added, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"appName")," to the set application name, and modify ",(0,r.kt)("inlineCode",{parentName:"p"},"organizationName")," to the set organization name."),(0,r.kt)("p",null,"Next, run casnode with docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),(0,r.kt)("p",null,"Next visit ",(0,r.kt)("a",{parentName:"p",href:"http://your-ip:7000"},"http://your-ip:7000"),", click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,r.kt)("p",null,"More settings reference ",(0,r.kt)("a",{parentName:"p",href:"https://casnode.org/docs/overview"},"casnode.org"),"."))}p.isMDXComponent=!0}}]);