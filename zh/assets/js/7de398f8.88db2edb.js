"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[1431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={title:"\u4ece DiscuzX \u8fc1\u79fb",description:"Migration from DiscuzX",keywords:["discuz","discuz!","discuzx"],authors:["hsluoyz"]},s=void 0,i={unversionedId:"migration",id:"migration",title:"\u4ece DiscuzX \u8fc1\u79fb",description:"Migration from DiscuzX",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/migration",permalink:"/zh/docs/migration",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/zh-CN",tags:[],version:"current",frontMatter:{title:"\u4ece DiscuzX \u8fc1\u79fb",description:"Migration from DiscuzX",keywords:["discuz","discuz!","discuzx"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/zh/docs/docker"},next:{title:"Configure File Storage, SMS and Email",permalink:"/zh/docs/provider"}},l={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Migration",id:"migration",level:2},{value:"1. \u7528\u6237\u8fc1\u79fb",id:"1-\u7528\u6237\u8fc1\u79fb",level:3},{value:"2. \u7528\u6237\u5934\u50cf\u8fc1\u79fb",id:"2-\u7528\u6237\u5934\u50cf\u8fc1\u79fb",level:3},{value:"3. \u8bba\u575b\u8fc1\u79fb",id:"3-\u8bba\u575b\u8fc1\u79fb",level:3},{value:"4. \u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb",id:"4-\u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb",level:3},{value:"\u6700\u540e\u5b8c\u6210",id:"\u6700\u540e\u5b8c\u6210",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casnode \u63d0\u4f9b\u4e86\u5f88\u591aGo \u811a\u672c\u6765\u5e2e\u52a9\u7528\u6237\u5c06\u4ed6\u4eec\u7684\u8bba\u575b\u4ece DiscuzX 3.x \u8fc1\u79fb\u5230Casnode\u3002 \u811a\u672c\u4f4d\u4e8e\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,a.kt)("p",null,"Xorm\u652f\u6301\u7684\u6570\u636e\u5e93(\u4f8b\u5982MySQL) \u7531 Cansode \u7528\u4e8e\u5b58\u50a8\u4e3b\u9898\u548c\u56de\u590d\u7b49\u8bba\u575b\u6570\u636e\u3002 Casnode \u7528\u4e8e\u5b58\u50a8\u56fe\u50cf\u548c\u9644\u4ef6\u6587\u4ef6\u7684\u5bf9\u8c61\u5b58\u50a8(\u4f5c\u4e3aCasdoor \u5b58\u50a8\u63d0\u4f9b\u5546\u7684\u5f62\u5f0f)\u3002"),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u5728\u8fdb\u884c\u8fc1\u79fb\u4e4b\u524d\u51c6\u5907\u597d\u4ee5\u4e0b\u73af\u5883\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e91\u7aef\u865a\u62df\u673a\uff08\u542b4\u4e2a\u6838\u5fc3\u548c8GB\u5185\u5b58\uff0c8\u4e2a\u6838\u5fc3\u548c16GB\u66f4\u9ad8\uff09\uff0c \u66f4\u5feb\u5730\u4f7f\u7528\u5185\u8054\u7f51\u4e0e\u6570\u636e\u5e93\u7684\u8fde\u63a5\u3002 \u6b64 VM \u7528\u4e8e\u8fd0\u884c\u8fc1\u79fb\u811a\u672c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0a\u9762\u865a\u62df\u673a\u4e2d\u5e26\u6709\u8fc1\u79fb\u811a\u672c\u7684 Casnode git \u4ed3\u5e93(Casnode \u5b9e\u4f8b\u53ef\u4ee5\u8fd0\u884c\u6216\u505c\u6b62)\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6b63\u5728\u8fd0\u884c\u7684 Casdoor \u5b9e\u4f8b (\u5728\u540c\u4e00\u4e2a\u4e91\u7aef\u865a\u62df\u673a\u4e2d\u66f4\u4f18\u8d8a\uff0c\u901f\u5ea6\u66f4\u5feb)\uff0c \u81f3\u5c11\u6709\u4e00\u4e2a\u5bf9\u8c61\u5b58\u50a8\u88ab\u914d\u7f6e\u4e3aCasdoor \u5b58\u50a8\u63d0\u4f9b\u5546\u3002 \u8fd9\u7528\u4e8e\u5c06DiscuzX\u7684\u56fe\u50cf\u548c\u9644\u4ef6\u6587\u4ef6\u4e0a\u4f20\u5230\u5bf9\u8c61\u5b58\u50a8\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u60a8\u7684 DiscuzX \u5b9e\u4f8b\u5df2\u4e0a\u7ebf\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u9996\u5148\u6839\u636e\u4ed6\u4eec\u7684\u5b89\u88c5\u6307\u5357\u6b63\u786e\u914d\u7f6eCasdoor \u548c Casnode \uff0c\u786e\u4fdd\u4ed6\u4eec\u5728\u8fc1\u79fb\u524d\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.")),(0,a.kt)("p",null,"Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,a.kt)("p",null,"Configure the migration script at: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go")," ."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"dbname: \u4f60\u7684 DiscuzX's \u6570\u636e\u5e93\u540d\u79f0"),(0,a.kt)("li",{parentName:"ol"},"discuzxDomain: \u4f60\u7684 DiscuzX's \u516c\u5171\u57df\u540d, \u5e26\u6709\u5c3e\u968f\u659c\u6760\u7684"),(0,a.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: \u4f60\u7684 DiscuzX\u7684\u9644\u4ef6\u57faURL, \u5e26\u6709\u5c3e\u968f\u659c\u6760(\u4f60\u53ef\u4ee5\u4ece\u4f60DiscuzX\u7684\u9644\u4ef6\u6587\u4ef6 URL \u83b7\u53d6)"),(0,a.kt)("li",{parentName:"ol"},"\u5934\u50cfPoolBaseUrl: \u4e0d\u8981\u66f4\u6539")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbname = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In Casnode, we assume you use the same DB username and password for all 3 DBs: Casnode's DB, Casdoor's DB and DiscuzX's DB. So make sure this DB user can access all 3 DBs.")),(0,a.kt)("h2",{id:"migration"},"Migration"),(0,a.kt)("p",null,"You may see the ",(0,a.kt)("inlineCode",{parentName:"p"},"XXXConcurrency"),' is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurus = 20\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster.")),(0,a.kt)("h3",{id:"1-\u7528\u6237\u8fc1\u79fb"},"1. \u7528\u6237\u8fc1\u79fb"),(0,a.kt)("p",null,"To migrate all your DiscuzX's UCenter members to Casdoor's users:"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAddUsers")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,a.kt)("p",null,"This step will roughly take 2 minutes for 60,000 users."),(0,a.kt)("h3",{id:"2-\u7528\u6237\u5934\u50cf\u8fc1\u79fb"},"2. \u7528\u6237\u5934\u50cf\u8fc1\u79fb"),(0,a.kt)("p",null,"To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,a.kt)("p",null,"This step will roughly take 10 minutes for 60,000 users."),(0,a.kt)("h3",{id:"3-\u8bba\u575b\u8fc1\u79fb"},"3. \u8bba\u575b\u8fc1\u79fb"),(0,a.kt)("p",null,"To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAddForums")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,a.kt)("p",null,"This step will usually finish in 2 seconds."),(0,a.kt)("h3",{id:"4-\u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb"},"4. \u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb"),(0,a.kt)("p",null,"To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,a.kt)("p",null,"This step will roughly take 7 minutes for 10,000 users."),(0,a.kt)("h2",{id:"\u6700\u540e\u5b8c\u6210"},"\u6700\u540e\u5b8c\u6210"),(0,a.kt)("p",null,"During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5")," in Casnode's public homepage."),(0,a.kt)("p",null,"If you encounter panic when running the migration scripts, contact the Casnode authors."))}d.isMDXComponent=!0}}]);