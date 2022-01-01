"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[350],{9723:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var t=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],r={title:"Main package"},c=void 0,p={unversionedId:"main-package",id:"main-package",isDocsHomePage:!1,title:"Main package",description:"There are several packages in the backend of Casnode. The main function and the Beego framework call these packages when  the program starts.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/ja/docs/main-package",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/main-package.md",tags:[],version:"current",frontMatter:{title:"Main package"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/ja/docs/architecture-overview"},next:{title:"Routers",permalink:"/ja/docs/routers"}},l=[{value:"main",id:"main",children:[],level:2}],u={toc:l};function m(e){var a=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"There are several packages in the backend of Casnode. The main function and the Beego framework call these packages when  the program starts."),(0,s.kt)("h2",{id:"main"},"main"),(0,s.kt)("p",null,"The main package is the entrance of Casnode. We do some basic setup steps in the main package:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Setup some global variables"),": Database adapter, http Client, OSS adapter, Segmenter and Forum basic info (forum version, online number, Google Groups Crawlers)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Setup filters:")," API requests filter, search engine bot filter")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Session data:")," Casnode uses Beego session to store user info. In the main function, wrote these lines to use a file based session:"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.Session.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"\nbeego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365\n')),(0,s.kt)("p",null,"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"https://beego.me/docs/mvc/controller/session.md"},"Beego session")," if you want to use another session adapter in Beego."))}m.isMDXComponent=!0}}]);