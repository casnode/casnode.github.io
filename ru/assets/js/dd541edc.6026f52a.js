"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[2],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||s[m]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={},i=void 0,c={unversionedId:"docker",id:"docker",title:"docker",description:"- - -",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docker.md",sourceDirName:".",slug:"/docker",permalink:"/ru/docs/docker",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/ru",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bt-panel",permalink:"/ru/docs/bt-panel"},next:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u0441 DiscuzX",permalink:"/ru/docs/migration"}},l={},d=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 \u0434\u043e\u043a\u0435\u0440",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0447\u0435\u0440\u0435\u0437-\u0434\u043e\u043a\u0435\u0440",level:2},{value:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0440\u0430\u0431\u043e\u0442\u0435",id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u043a-\u0440\u0430\u0431\u043e\u0442\u0435",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c docker \u0438 docker-compose",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-docker-\u0438-docker-compose",level:4},{value:"\u041a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c &amp; \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044c",id:"\u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c--\u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044c",level:4},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u0430\u0441\u0442\u0440\u044e\u043b\u0438",level:3},{value:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0448\u0430\u0441\u0441\u0438",id:"\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c-\u0448\u0430\u0441\u0441\u0438",level:4},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043a\u0430\u043d\u043e\u043d \u0432 \u043a\u043e\u0440\u043f\u0443\u0441\u0435",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-\u043a\u0430\u043d\u043e\u043d-\u0432-\u043a\u043e\u0440\u043f\u0443\u0441\u0435",level:4},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c casnode",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-casnode",level:3}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"title: Docker description: Install casnode through docker keywords: ","[docker]"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The tutorial environment is Ubuntu 20.0.4 .")),(0,a.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0447\u0435\u0440\u0435\u0437-\u0434\u043e\u043a\u0435\u0440"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 \u0434\u043e\u043a\u0435\u0440"),(0,a.kt)("h3",{id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u043a-\u0440\u0430\u0431\u043e\u0442\u0435"},"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0440\u0430\u0431\u043e\u0442\u0435"),(0,a.kt)("h4",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-docker-\u0438-docker-compose"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c docker \u0438 docker-compose"),(0,a.kt)("p",null,"Install Docker and Docker-compose, you see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,a.kt)("h4",{id:"\u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c--\u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044c"},"\u041a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c & \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044c"),(0,a.kt)("p",null,"Next, clone Casdoor and Casndoe from GitHub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,a.kt)("p",null,"Now, you can see two folders, ",(0,a.kt)("inlineCode",{parentName:"p"},"casnode")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"casdoor"),"."),(0,a.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u0430\u0441\u0442\u0440\u044e\u043b\u0438"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u0438"),(0,a.kt)("h4",{id:"\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c-\u0448\u0430\u0441\u0441\u0438"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0448\u0430\u0441\u0441\u0438"),(0,a.kt)("p",null,"We first configure casdoor."),(0,a.kt)("p",null,"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", modify ",(0,a.kt)("strong",{parentName:"p"},"dataSourceName = root:123@tcp(localhost:3306)/ to dataSourceName = root:123@tcp(db:3306)/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"mysql and casdoor are in different docker containers.")),(0,a.kt)("h4",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-\u043a\u0430\u043d\u043e\u043d-\u0432-\u043a\u043e\u0440\u043f\u0443\u0441\u0435"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043a\u0430\u043d\u043e\u043d \u0432 \u043a\u043e\u0440\u043f\u0443\u0441\u0435"),(0,a.kt)("p",null,"Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode."),(0,a.kt)("p",null,"The default administrator login account is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin/123"),"."),(0,a.kt)("p",null,"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save."),(0,a.kt)("p",null,"Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum.Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-ip:7000/callback"),".Finally, remember the Client ID and Client Secret, and click Save."),(0,a.kt)("p",null,"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-casnode"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c casnode"),(0,a.kt)("p",null,"Next we configure in Casnode."),(0,a.kt)("p",null,"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", modify ",(0,a.kt)("strong",{parentName:"p"},"dataSourceName = root:123@tcp(localhost:3306)/")," to ",(0,a.kt)("strong",{parentName:"p"},"dataSourceName = root:123@tcp(db:3306)/")," so that the data come from your database."),(0,a.kt)("p",null,"Then find ",(0,a.kt)("inlineCode",{parentName:"p"},"casdoorEndpoint"),", modify it to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-ip:8000")," (Casdoor backend address), find ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clientSecret"),", and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to you set."),(0,a.kt)("p",null,"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"web/src/Conf.js")," , modify ",(0,a.kt)("inlineCode",{parentName:"p"},"serverUrl")," to http://your-ip:8000 (Casdoor front-end access address), modify ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," to the clientId of the application just added, modify ",(0,a.kt)("inlineCode",{parentName:"p"},"appName")," to the set application name, and modify ",(0,a.kt)("inlineCode",{parentName:"p"},"organizationName")," to the set organization name."),(0,a.kt)("p",null,"Next, run casnode with docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u043a\u0435\u0440 \u0432\u0432\u0435\u0440\u0445\n")),(0,a.kt)("p",null,"Next visit http://your-ip:7000, click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,a.kt)("p",null,"More settings reference ",(0,a.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"casnode.")))}s.isMDXComponent=!0}}]);