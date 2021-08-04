"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[762],{9424:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={},d=void 0,s={unversionedId:"Docker",id:"Docker",isDocsHomePage:!1,title:"Docker",description:"Install casnode through docker",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Docker.md",sourceDirName:".",slug:"/Docker",permalink:"/ru/docs/Docker",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/Docker.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BTpanel",permalink:"/ru/docs/BTpanel"},next:{title:"API Overview",permalink:"/ru/docs/api-overview"}},l=[{value:"Install casnode through docker",id:"install-casnode-through-docker",children:[{value:"Prepare work",id:"prepare-work",children:[]},{value:"Configure casdoor",id:"configure-casdoor",children:[]},{value:"Configure casnode",id:"configure-casnode",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"The tutorial environment is Ubuntu 20.0.4 .  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"install-casnode-through-docker"},"Install casnode through docker"),(0,r.kt)("h3",{id:"prepare-work"},"Prepare work"),(0,r.kt)("h4",{id:"install-docker-and-docker-compose"},"Install docker and docker-compose"),(0,r.kt)("p",null,"Install Docker and Docker-compose,you see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"git-casnode--casdoor"},"Git casnode & casdoor"),(0,r.kt)("p",null,"Next, execute the following commands in the folder where you want to store the project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,r.kt)("p",null,"Now, you can see two folders, casnode and casdoor."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"configure-casdoor"},"Configure casdoor"),(0,r.kt)("h4",{id:"run-casdoor"},"Run casdoor"),(0,r.kt)("p",null,"We first configure casdoor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd casdoor\nvim conf/app.conf\n")),(0,r.kt)("p",null,"Modify dataSourceName = root:123@tcp(localhost:3306)/ to dataSourceName = root:123@tcp(",(0,r.kt)("inlineCode",{parentName:"p"},"db"),":3306)/"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),(0,r.kt)("br",null),":::tip mysql and casdoor are in different docker containers. :::",(0,r.kt)("h4",{id:"configure-casnode-in-casdoor"},"Configure casnode in casdoor"),(0,r.kt)("p",null,"Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode."),(0,r.kt)("p",null,"The default administrator login account is admin/123."),(0,r.kt)("p",null,"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save.",(0,r.kt)("br",{parentName:"p"}),"\n","Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum.Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://your-ip:7000/callback"),".Finally, remember the Client ID and Client Secret, and click Save."),(0,r.kt)("p",null,"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"configure-casnode"},"Configure casnode"),(0,r.kt)("p",null,"Next we configure in Casnode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd casnode\nvim conf/app.conf\n")),(0,r.kt)("p",null,"Modify dataSourceName = root:123@tcp(localhost:3306)/ to dataSourceName = root:123@tcp(",(0,r.kt)("inlineCode",{parentName:"p"},"db"),":3306)/.",(0,r.kt)("br",{parentName:"p"}),"\n","Then find casdoorEndpoint, modify it to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://your-ip:8000")," (Casdoor backend address), find clientId and clientSecret, and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to you set. Finally press ",(0,r.kt)("strong",{parentName:"p"},"Esc"),", enter: wq to save and exit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nvim src/Conf.js\n")),(0,r.kt)("p",null,"Press ",(0,r.kt)("strong",{parentName:"p"},"i"),", modify serverUrl to http://your-ip:8000 (Casdoor front-end access address), modify clientId to the clientId of the application just added, modify appname to the set application name, and modify the organization to the set organization name. Click ",(0,r.kt)("strong",{parentName:"p"},"Esc"),", enter: wq to save and exit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ..\ndocker-compose up\n")),(0,r.kt)("p",null,"Next visit http://your-ip:7000, click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,r.kt)("p",null,"More settings reference ",(0,r.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"casnode.")))}u.isMDXComponent=!0}}]);