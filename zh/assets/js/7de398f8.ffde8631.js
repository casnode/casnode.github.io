"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[431],{2981:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var n=a(7462),s=a(3366),i=(a(7294),a(3905)),o=["components"],r={title:"\u4ece DiscuzX \u8fc1\u79fb",slug:"/\u8fc1\u79fb"},d=void 0,c={unversionedId:"migration",id:"migration",isDocsHomePage:!1,title:"\u4ece DiscuzX \u8fc1\u79fb",description:"Casnode \u63d0\u4f9b\u4e86\u5f88\u591aGo \u811a\u672c\u6765\u5e2e\u52a9\u7528\u6237\u5c06\u4ed6\u4eec\u7684\u8bba\u575b\u4ece DiscuzX 3.x \u8fc1\u79fb\u5230Casnode\u3002 \u811a\u672c\u4f4d\u4e8e\uff1ahttps://github.com/casbin/casnode/tree/master/discuzx",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/\u8fc1\u79fb",permalink:"/zh/docs/\u8fc1\u79fb",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/migration.md",tags:[],version:"current",frontMatter:{title:"\u4ece DiscuzX \u8fc1\u79fb",slug:"/\u8fc1\u79fb"},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/zh/docs/docker"},next:{title:"API \u6982\u8ff0",permalink:"/zh/docs/api-overview"}},p=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:"\u79fb \u6c11",id:"\u79fb-\u6c11",children:[],level:2}],m={toc:p};function l(e){var t=e.components,a=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Casnode \u63d0\u4f9b\u4e86\u5f88\u591aGo \u811a\u672c\u6765\u5e2e\u52a9\u7528\u6237\u5c06\u4ed6\u4eec\u7684\u8bba\u575b\u4ece DiscuzX 3.x \u8fc1\u79fb\u5230Casnode\u3002 \u811a\u672c\u4f4d\u4e8e\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,i.kt)("p",null,"Xorm\u652f\u6301\u7684\u6570\u636e\u5e93(\u4f8b\u5982MySQL) \u7531 Cansode \u7528\u4e8e\u5b58\u50a8\u4e3b\u9898\u548c\u56de\u590d\u7b49\u8bba\u575b\u6570\u636e\u3002 Casnode \u7528\u4e8e\u5b58\u50a8\u56fe\u50cf\u548c\u9644\u4ef6\u6587\u4ef6\u7684\u5bf9\u8c61\u5b58\u50a8(\u4f5c\u4e3aCasdoor \u5b58\u50a8\u63d0\u4f9b\u5546\u7684\u5f62\u5f0f)\u3002"),(0,i.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("p",null,"\u60a8\u9700\u8981\u5728\u8fdb\u884c\u8fc1\u79fb\u4e4b\u524d\u51c6\u5907\u597d\u4ee5\u4e0b\u73af\u5883\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e91\u7aef\u865a\u62df\u673a\uff08\u542b4\u4e2a\u6838\u5fc3\u548c8GB\u5185\u5b58\uff0c8\u4e2a\u6838\u5fc3\u548c16GB\u66f4\u9ad8\uff09\uff0c \u66f4\u5feb\u5730\u4f7f\u7528\u5185\u8054\u7f51\u4e0e\u6570\u636e\u5e93\u7684\u8fde\u63a5\u3002 \u6b64 VM \u7528\u4e8e\u8fd0\u884c\u8fc1\u79fb\u811a\u672c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e0a\u9762\u865a\u62df\u673a\u4e2d\u5e26\u6709\u8fc1\u79fb\u811a\u672c\u7684 Casnode git \u4ed3\u5e93(Casnode \u5b9e\u4f8b\u53ef\u4ee5\u8fd0\u884c\u6216\u505c\u6b62)\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6b63\u5728\u8fd0\u884c\u7684 Casdoor \u5b9e\u4f8b (\u5728\u540c\u4e00\u4e2a\u4e91\u7aef\u865a\u62df\u673a\u4e2d\u66f4\u4f18\u8d8a\uff0c\u901f\u5ea6\u66f4\u5feb)\uff0c \u81f3\u5c11\u6709\u4e00\u4e2a\u5bf9\u8c61\u5b58\u50a8\u88ab\u914d\u7f6e\u4e3aCasdoor \u5b58\u50a8\u63d0\u4f9b\u5546\u3002 \u8fd9\u7528\u4e8e\u5c06DiscuzX\u7684\u56fe\u50cf\u548c\u9644\u4ef6\u6587\u4ef6\u4e0a\u4f20\u5230\u5bf9\u8c61\u5b58\u50a8\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u60a8\u7684 DiscuzX \u5b9e\u4f8b\u5df2\u4e0a\u7ebf\u3002")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,"\u9996\u5148\u6839\u636e\u4ed6\u4eec\u7684\u5b89\u88c5\u6307\u5357\u6b63\u786e\u914d\u7f6eCasdoor \u548c Casnode \uff0c\u786e\u4fdd\u4ed6\u4eec\u5728\u8fc1\u79fb\u524d\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8ba9\u57ce\u5821\u548c\u5361\u65af\u8bfa\u8282\u70b9\u8fde\u63a5\u5230DB\u7684\u5185\u8054\u7f51URL\u3002 \u8ba9Cassdoor\u7684\u5b58\u50a8\u63d0\u4f9b\u5546\u7684\u7aef\u70b9\u6210\u4e3a\u4e91\u5bf9\u8c61\u5b58\u50a8\u7684\u5185\u8054\u7f51URL\u3002 \u8fd9\u5c06\u4f1a\u66f4\u5feb\u4e00\u4e9b\u3002 :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 Casnode\u7684 app.conf\u4e2d\u914d\u7f6eCasdoor \u6570\u636e\u5e93\uff0c\u6240\u4ee5Casnode \u53ef\u4ee5\u76f4\u63a5\u8fde\u63a5\u5230Cassdoor\u7684\u6570\u636e\u5e93\u5e76\u521b\u5efa\u7528\u6237\u3002 \u8fd9\u5c06\u6bd4\u8c03\u7528 Cassdoor's RESTful API \u6765\u521b\u5efa\u7528\u6237\u66f4\u5feb\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbname = \u8170\u95e8\n")),(0,i.kt)("p",{parentName:"div"},"\u914d\u7f6e\u8fc1\u79fb\u811a\u672c\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go%E3%80%82"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go\u3002")),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"dbname: \u4f60\u7684 DiscuzX's \u6570\u636e\u5e93\u540d\u79f0"),(0,i.kt)("li",{parentName:"ol"},"discuzxDomain: \u4f60\u7684 DiscuzX's \u516c\u5171\u57df\u540d, \u5e26\u6709\u5c3e\u968f\u659c\u6760\u7684"),(0,i.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: \u4f60\u7684 DiscuzX\u7684\u9644\u4ef6\u57faURL, \u5e26\u6709\u5c3e\u968f\u659c\u6760(\u4f60\u53ef\u4ee5\u4ece\u4f60DiscuzX\u7684\u9644\u4ef6\u6587\u4ef6 URL \u83b7\u53d6)"),(0,i.kt)("li",{parentName:"ol"},"\u5934\u50cfPoolBaseUrl: \u4e0d\u8981\u66f4\u6539")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbname = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')))),(0,i.kt)("h2",{id:"\u79fb-\u6c11"},"\u79fb \u6c11"),(0,i.kt)("p",null,"\u60a8\u53ef\u80fd\u4f1a\u5728\u811a\u672c\u9876\u7aef\u770b\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"XXXConcurrency")," \u88ab\u5b9a\u4e49\uff0c \u8fd9\u662f\u8981\u8fdb\u884c\u8fc1\u79fb\u7684\u5e76\u884c\u7ebf\u7a0b\u6570\u3002 \u60a8\u53ef\u4ee5\u6839\u636e\u60a8\u7684\u73af\u5883\u8c03\u6574\u6b64\u503c\u3002 \u5982\u679c\u79fb\u5f99\u89c4\u6a21\u592a\u5c0f\uff0c\u79fb\u5f99\u5c06\u975e\u5e38\u7f13\u6162\u3002 \u5982\u679c\u592a\u9ad8\uff0c\u6570\u636e\u5e93\u8fde\u63a5\u5c06\u66f4\u6709\u53ef\u80fd\u62a5\u544a\u201c\u8fde\u63a5\u592a\u591a\u201d\u9519\u8bef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurus = 20\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6211\u4eec\u5728\u4ee5\u4e0b\u7ae0\u8282\u4e2d\u63d0\u4f9b\u7684\u4f30\u8ba1\u65f6\u95f4\u662f\u5728\u4e00\u4e2a\u4e0e\u6570\u636e\u5e93\u548c\u5bf9\u8c61\u5b58\u50a8\u6709\u8fdc\u7a0b\u4e92\u8054\u7f51\u8fde\u63a5\u7684\u673a\u5668\u4e2d\u6d4b\u91cf\u7684\u3002 \u5982\u679c\u60a8\u7684\u865a\u62df\u673a\u4e0e\u6570\u636e\u5e93\u548c\u5bf9\u8c61\u5b58\u50a8\u5728\u540c\u4e00\u4e2a\u5b50\u7f51\u4e2d\uff0c\u60a8\u5c06\u4f1a\u66f4\u5feb\u4e00\u4e9b\u3002 :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"1-\u7528\u6237\u8fc1\u79fb"},"1. \u7528\u6237\u8fc1\u79fb"),(0,i.kt)("p",{parentName:"div"},"\u5c06\u60a8\u7684DiscuzX\u7684\u6240\u6709UCenter \u6210\u5458\u8fc1\u79fb\u5230Cassdoor\u7684\u7528\u6237\uff1a"),(0,i.kt)("p",{parentName:"div"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAddUser")," : ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,i.kt)("p",{parentName:"div"},"\u8fd9\u4e00\u6b65\u5927\u7ea6\u9700\u89812\u5206\u949f\u7684\u65f6\u95f4\u7ed960 000\u540d\u7528\u6237\u3002"),(0,i.kt)("h3",{parentName:"div",id:"2-\u7528\u6237\u5934\u50cf\u8fc1\u79fb"},"2. \u7528\u6237\u5934\u50cf\u8fc1\u79fb"),(0,i.kt)("p",{parentName:"div"},"\u8981\u5c06\u60a8DiscuzX\u7684\u6240\u6709UCenter\u6210\u5458\u7684\u5934\u50cf\u8fc1\u79fb\u5230Cassdoor\u7684\u8d44\u6e90 (\u901a\u8fc7Cassdoor\u7684\u5b58\u50a8\u63d0\u4f9b\u5546\uff0c\u7531\u4e91\u5bf9\u8c61\u5b58\u50a8\u652f\u6301):"),(0,i.kt)("p",{parentName:"div"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,i.kt)("p",{parentName:"div"},"\u8fd9\u4e00\u6b65\u9aa4\u5927\u7ea6\u9700\u898110\u5206\u949f\u7684\u65f6\u95f4\u7ed960 000\u540d\u7528\u6237\u3002"),(0,i.kt)("h3",{parentName:"div",id:"3-\u8bba\u575b\u8fc1\u79fb"},"3. \u8bba\u575b\u8fc1\u79fb"),(0,i.kt)("p",{parentName:"div"},"\u8981\u5c06\u60a8\u7684\u6240\u6709DiscuzX\u8bba\u575b\u8fc1\u79fb\u5230Castor\u7684\u6807\u7b7e\u9875\u548c\u8282\u70b9\uff1a"),(0,i.kt)("p",{parentName:"div"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAddForums")," : ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,i.kt)("p",{parentName:"div"},"\u8fd9\u4e2a\u6b65\u9aa4\u901a\u5e38\u5728 2 \u79d2\u5185\u5b8c\u6210\u3002"),(0,i.kt)("h3",{parentName:"div",id:"4-\u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb"},"4. \u7ebf\u7a0b\u548c\u5e16\u5b50\u8fc1\u79fb"),(0,i.kt)("p",{parentName:"div"},"\u8981\u5c06\u60a8\u6240\u6709\u7684 DiscuzX \u7ebf\u7a0b & \u5e16\u5b50\u8fc1\u79fb\u5230Cassdoor \u7684\u4e3b\u9898 & \u7b54\u590d\uff1a"),(0,i.kt)("p",{parentName:"div"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,i.kt)("p",{parentName:"div"},"\u8fd9\u4e00\u6b65\u5927\u7ea6\u9700\u89817\u5206\u949f\u7684\u65f6\u95f4\u6765\u5904\u740610 000\u540d\u7528\u6237\u3002"),(0,i.kt)("h2",{parentName:"div",id:"\u6700\u540e\u5b8c\u6210"},"\u6700\u540e\u5b8c\u6210"),(0,i.kt)("p",{parentName:"div"},"\u5728\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u53ef\u4ee5\u540c\u65f6\u4fdd\u6301Casnode \u5b9e\u4f8b\u8fd0\u884c\u3002 \u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u901a\u8fc7\u5728Casnode\u7684\u516c\u5f00\u4e3b\u9875\u4e2d\u6309 ",(0,i.kt)("inlineCode",{parentName:"p"},"F5")," \u6765\u7acb\u5373\u770b\u5230\u6548\u679c\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u60a8\u5728\u8fd0\u884c\u8fc1\u79fb\u811a\u672c\u65f6\u9047\u5230\u6050\u614c\uff0c\u8bf7\u8054\u7cfbCasnode \u4f5c\u8005"))))}l.isMDXComponent=!0}}]);