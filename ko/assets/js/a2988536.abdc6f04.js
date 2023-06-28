"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[4018],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9265:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=o(7462),n=(o(7294),o(3905));const r={title:"Migration from DiscuzX",description:"Migration from DiscuzX",keywords:["discuz","discuz!","discuzx"],authors:["hsluoyz"]},i=void 0,s={unversionedId:"migration",id:"migration",title:"Migration from DiscuzX",description:"Migration from DiscuzX",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/migration",permalink:"/ko/docs/migration",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/ko",tags:[],version:"current",frontMatter:{title:"Migration from DiscuzX",description:"Migration from DiscuzX",keywords:["discuz","discuz!","discuzx"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/ko/docs/docker"},next:{title:"API reference",permalink:"/ko/docs/category/api-reference"}},c={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Migration",id:"migration",level:2},{value:"1. User migration",id:"1-user-migration",level:3},{value:"2. User avatar migration",id:"2-user-avatar-migration",level:3},{value:"3. Forum migration",id:"3-forum-migration",level:3},{value:"4. Thread and post migration",id:"4-thread-and-post-migration",level:3},{value:"Finalization",id:"finalization",level:2}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casnode has provided a lot of Go scripts to help users migrate their forums from DiscuzX 3.x to Casnode. The scripts are located at: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,n.kt)("p",null,"A Xorm-supported database (e.g., MySQL) is used by Cansode to store forum data like topics and replies. Object storage (as the form of Casdoor storage provider) is used by Casnode to store images and attachment files."),(0,n.kt)("h2",{id:"preparation"},"Preparation"),(0,n.kt)("p",null,"You need to prepare the following environments before conducting the migration:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A cloud VM (better with above 4 cores and 8GB memory, 8 cores and 16GB is even better), better with Intranet connection with the database for higher speed. This VM is used to run the Go migration scripts."),(0,n.kt)("li",{parentName:"ol"},"A Casnode git repository with the Go migration scripts in the above VM (the Casnode instance can be running or stopped)."),(0,n.kt)("li",{parentName:"ol"},"A running Casdoor instance (better in the same cloud VM for higher speed), with at least one object storage is configured as a Casdoor storage provider. This is used for uploading the images and attachment files of DiscuzX to the object storage."),(0,n.kt)("li",{parentName:"ol"},"Your DiscuzX instance is online.")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"First configure the Casdoor and Casnode correctly based on the their installation guides, make sure they are working normally before migration."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.")),(0,n.kt)("p",null,"Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,n.kt)("p",null,"Configure the migration script at: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go")," ."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"dbName: your DiscuzX's DB name"),(0,n.kt)("li",{parentName:"ol"},"discuzxDomain: your DiscuzX's public domain, with trailing slash"),(0,n.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: your DiscuzX's attachment base URL, with trailing slash (you can get it from a attachment file URL of your DiscuzX)"),(0,n.kt)("li",{parentName:"ol"},"avatarPoolBaseUrl: don't change this")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbName = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In Casnode, we assume you use the same DB username and password for all 3 DBs: Casnode's DB, Casdoor's DB and DiscuzX's DB. So make sure this DB user can access all 3 DBs.")),(0,n.kt)("h2",{id:"migration"},"Migration"),(0,n.kt)("p",null,"You may see the ",(0,n.kt)("inlineCode",{parentName:"p"},"XXXConcurrency"),' is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurrency = 20\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster.")),(0,n.kt)("h3",{id:"1-user-migration"},"1. User migration"),(0,n.kt)("p",null,"To migrate all your DiscuzX's UCenter members to Casdoor's users:"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"TestAddUsers")," in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,n.kt)("p",null,"This step will roughly take 2 minutes for 60,000 users."),(0,n.kt)("h3",{id:"2-user-avatar-migration"},"2. User avatar migration"),(0,n.kt)("p",null,"To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,n.kt)("p",null,"This step will roughly take 10 minutes for 60,000 users."),(0,n.kt)("h3",{id:"3-forum-migration"},"3. Forum migration"),(0,n.kt)("p",null,"To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"TestAddForums")," in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,n.kt)("p",null,"This step will usually finish in 2 seconds."),(0,n.kt)("h3",{id:"4-thread-and-post-migration"},"4. Thread and post migration"),(0,n.kt)("p",null,"To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,n.kt)("p",null,"This step will roughly take 7 minutes for 10,000 users."),(0,n.kt)("h2",{id:"finalization"},"Finalization"),(0,n.kt)("p",null,"During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"F5")," in Casnode's public homepage."),(0,n.kt)("p",null,"If you encounter panic when running the migration scripts, contact the Casnode authors."))}d.isMDXComponent=!0}}]);