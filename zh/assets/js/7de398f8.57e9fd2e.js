"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[431],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2981:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var a=n(3117),r=(n(7294),n(3905));const o={title:"\u4ece DiscuzX \u8fc1\u79fb"},i=void 0,s={unversionedId:"migration",id:"migration",title:"\u4ece DiscuzX \u8fc1\u79fb",description:"Casnode \u63d0\u4f9b\u4e86\u5f88\u591aGo \u811a\u672c\u6765\u5e2e\u52a9\u7528\u6237\u5c06\u4ed6\u4eec\u7684\u8bba\u575b\u4ece DiscuzX 3.x \u8fc1\u79fb\u5230Casnode\u3002 \u811a\u672c\u4f4d\u4e8e\uff1ahttps://github.com/casbin/casnode/tree/master/discuzx",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/migration",permalink:"/zh/docs/migration",draft:!1,editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/migration.md",tags:[],version:"current",frontMatter:{title:"\u4ece DiscuzX \u8fc1\u79fb"},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/zh/docs/docker"},next:{title:"API \u6982\u8ff0",permalink:"/zh/docs/api-overview"}},c={},l=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Migration",id:"migration",level:2},{value:"1. \u7528\u6237\u8fc1\u79fb",id:"1-\u7528\u6237\u8fc1\u79fb",level:3},{value:"2. \u7528\u6237\u5934\u50cf\u8fc1\u79fb",id:"2-\u7528\u6237\u5934\u50cf\u8fc1\u79fb",level:3},{value:"3. \u8bba\u575b\u8fc1\u79fb",id:"3-\u8bba\u575b\u8fc1\u79fb",level:3},{value:"4. \u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb",id:"4-\u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb",level:3},{value:"\u6700\u540e\u5b8c\u6210",id:"\u6700\u540e\u5b8c\u6210",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casnode \u63d0\u4f9b\u4e86\u5f88\u591aGo \u811a\u672c\u6765\u5e2e\u52a9\u7528\u6237\u5c06\u4ed6\u4eec\u7684\u8bba\u575b\u4ece DiscuzX 3.x \u8fc1\u79fb\u5230Casnode\u3002 \u811a\u672c\u4f4d\u4e8e\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,r.kt)("p",null,"Xorm\u652f\u6301\u7684\u6570\u636e\u5e93(\u4f8b\u5982MySQL) \u7531 Cansode \u7528\u4e8e\u5b58\u50a8\u4e3b\u9898\u548c\u56de\u590d\u7b49\u8bba\u575b\u6570\u636e\u3002 Casnode \u7528\u4e8e\u5b58\u50a8\u56fe\u50cf\u548c\u9644\u4ef6\u6587\u4ef6\u7684\u5bf9\u8c61\u5b58\u50a8(\u4f5c\u4e3aCasdoor \u5b58\u50a8\u63d0\u4f9b\u5546\u7684\u5f62\u5f0f)\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u5728\u8fdb\u884c\u8fc1\u79fb\u4e4b\u524d\u51c6\u5907\u597d\u4ee5\u4e0b\u73af\u5883\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e91\u7aef\u865a\u62df\u673a\uff08\u542b4\u4e2a\u6838\u5fc3\u548c8GB\u5185\u5b58\uff0c8\u4e2a\u6838\u5fc3\u548c16GB\u66f4\u9ad8\uff09\uff0c \u66f4\u5feb\u5730\u4f7f\u7528\u5185\u8054\u7f51\u4e0e\u6570\u636e\u5e93\u7684\u8fde\u63a5\u3002 \u6b64 VM \u7528\u4e8e\u8fd0\u884c\u8fc1\u79fb\u811a\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u9762\u865a\u62df\u673a\u4e2d\u5e26\u6709\u8fc1\u79fb\u811a\u672c\u7684 Casnode git \u4ed3\u5e93(Casnode \u5b9e\u4f8b\u53ef\u4ee5\u8fd0\u884c\u6216\u505c\u6b62)\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6b63\u5728\u8fd0\u884c\u7684 Casdoor \u5b9e\u4f8b (\u5728\u540c\u4e00\u4e2a\u4e91\u7aef\u865a\u62df\u673a\u4e2d\u66f4\u4f18\u8d8a\uff0c\u901f\u5ea6\u66f4\u5feb)\uff0c \u81f3\u5c11\u6709\u4e00\u4e2a\u5bf9\u8c61\u5b58\u50a8\u88ab\u914d\u7f6e\u4e3aCasdoor \u5b58\u50a8\u63d0\u4f9b\u5546\u3002 \u8fd9\u7528\u4e8e\u5c06DiscuzX\u7684\u56fe\u50cf\u548c\u9644\u4ef6\u6587\u4ef6\u4e0a\u4f20\u5230\u5bf9\u8c61\u5b58\u50a8\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u60a8\u7684 DiscuzX \u5b9e\u4f8b\u5df2\u4e0a\u7ebf\u3002")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u9996\u5148\u6839\u636e\u4ed6\u4eec\u7684\u5b89\u88c5\u6307\u5357\u6b63\u786e\u914d\u7f6eCasdoor \u548c Casnode \uff0c\u786e\u4fdd\u4ed6\u4eec\u5728\u8fc1\u79fb\u524d\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8ba9casdoor\u548ccasnode\u8fde\u63a5\u5230DB\u7684\u5185\u8054\u7f51URL\uff0c \u8ba9Cassdoor\u7684\u5b58\u50a8\u63d0\u4f9b\u5546\u7684\u7aef\u70b9\u6210\u4e3a\u4e91\u5bf9\u8c61\u5b58\u50a8\u7684\u5185\u8054\u7f51URL\u3002 \u8fd9\u5c06\u4f1a\u66f4\u5feb\u4e00\u4e9b\u3002")),(0,r.kt)("p",null,"\u5728 Casnode\u7684 app.conf\u4e2d\u914d\u7f6eCasdoor \u6570\u636e\u5e93\uff0c\u6240\u4ee5Casnode \u53ef\u4ee5\u76f4\u63a5\u8fde\u63a5\u5230Cassdoor\u7684\u6570\u636e\u5e93\u5e76\u521b\u5efa\u7528\u6237\u3002 \u8fd9\u5c06\u6bd4\u8c03\u7528 Cassdoor's RESTful API \u6765\u521b\u5efa\u7528\u6237\u66f4\u5feb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u8fc1\u79fb\u811a\u672c\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go%E3%80%82"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"dbname: \u4f60\u7684 DiscuzX's \u6570\u636e\u5e93\u540d\u79f0"),(0,r.kt)("li",{parentName:"ol"},"discuzxDomain: \u4f60\u7684 DiscuzX's \u516c\u5171\u57df\u540d, \u5e26\u6709\u5c3e\u968f\u659c\u6760\u7684"),(0,r.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: \u4f60\u7684 DiscuzX\u7684\u9644\u4ef6\u57faURL, \u5e26\u6709\u5c3e\u968f\u659c\u6760(\u4f60\u53ef\u4ee5\u4ece\u4f60DiscuzX\u7684\u9644\u4ef6\u6587\u4ef6 URL \u83b7\u53d6)"),(0,r.kt)("li",{parentName:"ol"},"\u5934\u50cfPoolBaseUrl: \u4e0d\u8981\u66f4\u6539")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbname = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728Casnode\u4e2d\uff0c\u6211\u4eec\u5047\u5b9a\u4f60\u5bf9\u6240\u67093\u4e2aDB\u4f7f\u7528\u76f8\u540c\u7684DB\u7528\u6237\u540d\u548c\u5bc6\u7801\uff1aCasnode\u7684DB\u3001Cassdoorer DB\u548cDiscuzX\u7684DB\u3002 \u6240\u4ee5\u8bf7\u786e\u4fdd\u6b64\u6570\u636e\u5e93\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u6240\u67093\u4e2aDB\u3002")),(0,r.kt)("h2",{id:"migration"},"Migration"),(0,r.kt)("p",null,"\u60a8\u53ef\u80fd\u4f1a\u5728\u811a\u672c\u9876\u7aef\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"XXXConcurrency")," \u88ab\u5b9a\u4e49\uff0c \u8fd9\u662f\u8981\u8fdb\u884c\u8fc1\u79fb\u7684\u5e76\u884c\u7ebf\u7a0b\u6570\u3002 \u60a8\u53ef\u4ee5\u6839\u636e\u60a8\u7684\u73af\u5883\u8c03\u6574\u6b64\u503c\u3002 \u5982\u679c\u79fb\u5f99\u89c4\u6a21\u592a\u5c0f\uff0c\u79fb\u5f99\u5c06\u975e\u5e38\u7f13\u6162\u3002 \u5982\u679c\u592a\u9ad8\uff0c\u6570\u636e\u5e93\u8fde\u63a5\u5c06\u66f4\u6709\u53ef\u80fd\u62a5\u544a\u201c\u8fde\u63a5\u592a\u591a\u201d\u9519\u8bef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurus = 20\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5728\u4ee5\u4e0b\u7ae0\u8282\u4e2d\u63d0\u4f9b\u7684\u4f30\u8ba1\u65f6\u95f4\u662f\u5728\u4e00\u4e2a\u4e0e\u6570\u636e\u5e93\u548c\u5bf9\u8c61\u5b58\u50a8\u6709\u8fdc\u7a0b\u4e92\u8054\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e2d\u6d4b\u91cf\u7684\u3002 \u5982\u679c\u60a8\u7684\u865a\u62df\u673a\u4e0e\u6570\u636e\u5e93\u548c\u5bf9\u8c61\u5b58\u50a8\u5728\u540c\u4e00\u4e2a\u5b50\u7f51\u4e2d\uff0c\u60a8\u5c06\u4f1a\u66f4\u5feb\u4e00\u4e9b\u3002")),(0,r.kt)("h3",{id:"1-\u7528\u6237\u8fc1\u79fb"},"1. \u7528\u6237\u8fc1\u79fb"),(0,r.kt)("p",null,"\u5c06\u60a8\u7684DiscuzX\u7684\u6240\u6709UCenter \u6210\u5458\u8fc1\u79fb\u5230Cassdoor\u7684\u7528\u6237\uff1a"),(0,r.kt)("p",null,"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"TestAddUser")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u5927\u7ea6\u9700\u89812\u5206\u949f\u7684\u65f6\u95f4\u7ed960 000\u540d\u7528\u6237\u3002"),(0,r.kt)("h3",{id:"2-\u7528\u6237\u5934\u50cf\u8fc1\u79fb"},"2. \u7528\u6237\u5934\u50cf\u8fc1\u79fb"),(0,r.kt)("p",null,"\u8981\u5c06\u60a8DiscuzX\u7684\u6240\u6709UCenter\u6210\u5458\u7684\u5934\u50cf\u8fc1\u79fb\u5230Cassdoor\u7684\u8d44\u6e90 (\u901a\u8fc7Cassdoor\u7684\u5b58\u50a8\u63d0\u4f9b\u5546\uff0c\u7531\u4e91\u5bf9\u8c61\u5b58\u50a8\u652f\u6301):"),(0,r.kt)("p",null,"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u9aa4\u5927\u7ea6\u9700\u898110\u5206\u949f\u7684\u65f6\u95f4\u7ed960 000\u540d\u7528\u6237\u3002"),(0,r.kt)("h3",{id:"3-\u8bba\u575b\u8fc1\u79fb"},"3. \u8bba\u575b\u8fc1\u79fb"),(0,r.kt)("p",null,"\u8981\u5c06\u60a8\u7684\u6240\u6709DiscuzX\u8bba\u575b\u8fc1\u79fb\u5230Castor\u7684\u6807\u7b7e\u9875\u548c\u8282\u70b9\uff1a"),(0,r.kt)("p",null,"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"TestAddForums")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6b65\u9aa4\u901a\u5e38\u5728 2 \u79d2\u5185\u5b8c\u6210\u3002"),(0,r.kt)("h3",{id:"4-\u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb"},"4. \u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb"),(0,r.kt)("p",null,"\u8981\u5c06\u60a8\u6240\u6709\u7684 DiscuzX \u7ebf\u7a0b & \u5e16\u5b50\u8fc1\u79fb\u5230Cassdoor \u7684\u4e3b\u9898 & \u7b54\u590d\uff1a"),(0,r.kt)("p",null,"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u5927\u7ea6\u9700\u89817\u5206\u949f\u7684\u65f6\u95f4\u6765\u5904\u740610 000\u540d\u7528\u6237\u3002"),(0,r.kt)("h2",{id:"\u6700\u540e\u5b8c\u6210"},"\u6700\u540e\u5b8c\u6210"),(0,r.kt)("p",null,"\u5728\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u53ef\u4ee5\u540c\u65f6\u4fdd\u6301Casnode \u5b9e\u4f8b\u8fd0\u884c\u3002 \u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u901a\u8fc7\u5728Casnode\u7684\u516c\u5f00\u4e3b\u9875\u4e2d\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"F5")," \u6765\u7acb\u5373\u770b\u5230\u6548\u679c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5728\u8fd0\u884c\u8fc1\u79fb\u811a\u672c\u65f6\u9047\u5230\u6050\u614c\uff0c\u8bf7\u8054\u7cfbCasnode \u4f5c\u8005"))}p.isMDXComponent=!0}}]);