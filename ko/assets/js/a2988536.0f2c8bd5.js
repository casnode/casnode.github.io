"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[18],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return l}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),l=a,h=p["".concat(c,".").concat(l)]||p[l]||d[l]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var o=n(3117),a=(n(7294),n(3905));const r={title:"Migration from DiscuzX"},i=void 0,s={unversionedId:"migration",id:"migration",title:"Migration from DiscuzX",description:"Casnode has provided a lot of Go scripts to help users migrate their forums from DiscuzX 3.x to Casnode. The scripts are located at//github.com/casbin/casnode/tree/master/discuzx",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/migration",permalink:"/ko/docs/migration",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/ko",tags:[],version:"current",frontMatter:{title:"Migration from DiscuzX"},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/ko/docs/docker"},next:{title:"API Overview",permalink:"/ko/docs/api-overview"}},c={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Migration",id:"migration",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casnode has provided a lot of Go scripts to help users migrate their forums from DiscuzX 3.x to Casnode. The scripts are located at: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,a.kt)("p",null,"A Xorm-supported database (e.g., MySQL) is used by Cansode to store forum data like topics and replies. Object storage (as the form of Casdoor storage provider) is used by Casnode to store images and attachment files."),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"You need to prepare the following environments before conducting the migration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A cloud VM (better with above 4 cores and 8GB memory, 8 cores and 16GB is even better), better with Intranet connection with the database for higher speed. This VM is used to run the Go migration scripts."),(0,a.kt)("li",{parentName:"ol"},"A Casnode git repository with the Go migration scripts in the above VM (the Casnode instance can be running or stopped)."),(0,a.kt)("li",{parentName:"ol"},"A running Casdoor instance (better in the same cloud VM for higher speed), with at least one object storage is configured as a Casdoor storage provider. This is used for uploading the images and attachment files of DiscuzX to the object storage."),(0,a.kt)("li",{parentName:"ol"},"Your DiscuzX instance is online.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"First configure the Casdoor and Casnode correctly based on the their installation guides, make sure they are working normally before migration."),(0,a.kt)("admonition",{title:"Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster. :::",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,a.kt)("p",{parentName:"admonition"},"Configure the migration script at: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go")," ."),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"dbName: your DiscuzX's DB name"),(0,a.kt)("li",{parentName:"ol"},"discuzxDomain: your DiscuzX's public domain, with trailing slash"),(0,a.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: your DiscuzX's attachment base URL, with trailing slash (you can get it from a attachment file URL of your DiscuzX)"),(0,a.kt)("li",{parentName:"ol"},"avatarPoolBaseUrl: don't change this")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbName = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n'))),(0,a.kt)("h2",{id:"migration"},"Migration"),(0,a.kt)("p",null,"You may see the ",(0,a.kt)("inlineCode",{parentName:"p"},"XXXConcurrency"),' is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurrency = 20\n")),(0,a.kt)("admonition",{title:"The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster. :::",type:"tip"},(0,a.kt)("h3",{parentName:"admonition",id:"1-user-migration"},"1. User migration"),(0,a.kt)("p",{parentName:"admonition"},"To migrate all your DiscuzX's UCenter members to Casdoor's users:"),(0,a.kt)("p",{parentName:"admonition"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAddUsers")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,a.kt)("p",{parentName:"admonition"},"This step will roughly take 2 minutes for 60,000 users."),(0,a.kt)("h3",{parentName:"admonition",id:"2-user-avatar-migration"},"2. User avatar migration"),(0,a.kt)("p",{parentName:"admonition"},"To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):"),(0,a.kt)("p",{parentName:"admonition"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,a.kt)("p",{parentName:"admonition"},"This step will roughly take 10 minutes for 60,000 users."),(0,a.kt)("h3",{parentName:"admonition",id:"3-forum-migration"},"3. Forum migration"),(0,a.kt)("p",{parentName:"admonition"},"To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:"),(0,a.kt)("p",{parentName:"admonition"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAddForums")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,a.kt)("p",{parentName:"admonition"},"This step will usually finish in 2 seconds."),(0,a.kt)("h3",{parentName:"admonition",id:"4-thread-and-post-migration"},"4. Thread and post migration"),(0,a.kt)("p",{parentName:"admonition"},"To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:"),(0,a.kt)("p",{parentName:"admonition"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,a.kt)("p",{parentName:"admonition"},"This step will roughly take 7 minutes for 10,000 users."),(0,a.kt)("h2",{parentName:"admonition",id:"finalization"},"Finalization"),(0,a.kt)("p",{parentName:"admonition"},"During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5")," in Casnode's public homepage."),(0,a.kt)("p",{parentName:"admonition"},"If you encounter panic when running the migration scripts, contact the Casnode authors.")))}d.isMDXComponent=!0}}]);