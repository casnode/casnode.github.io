"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[711],{7268:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return l}});var n=a(7462),i=a(3366),s=(a(7294),a(3905)),o=["components"],r={title:"DiscuzX\u304b\u3089\u306e\u79fb\u884c"},d=void 0,c={unversionedId:"migration",id:"migration",isDocsHomePage:!1,title:"DiscuzX\u304b\u3089\u306e\u79fb\u884c",description:"Casnode\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304cDiscuzX 3.x\u304b\u3089Casnode\u306b\u30d5\u30a9\u30fc\u30e9\u30e0\u3092\u79fb\u884c\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u591a\u304f\u306eGo\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5834\u6240\u306f https://github.com/casbin/casnode/tree/master/discuzx",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/migration",permalink:"/ja/docs/migration",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/migration.md",tags:[],version:"current",frontMatter:{title:"DiscuzX\u304b\u3089\u306e\u79fb\u884c"},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/ja/docs/docker"},next:{title:"API \u306e\u6982\u8981",permalink:"/ja/docs/api-overview"}},m=[{value:"\u6e96\u5099",id:"\u6e96\u5099",children:[],level:2},{value:"\u8a2d\u5b9a",id:"\u8a2d\u5b9a",children:[],level:2},{value:"\u79fb\u884c",id:"\u79fb\u884c",children:[],level:2}],p={toc:m};function l(e){var t=e.components,a=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Casnode\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304cDiscuzX 3.x\u304b\u3089Casnode\u306b\u30d5\u30a9\u30fc\u30e9\u30e0\u3092\u79fb\u884c\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u591a\u304f\u306eGo\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5834\u6240\u306f ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,s.kt)("p",null,"Xorm\u5bfe\u5fdc\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9(MySQL\u306a\u3069)\u306f\u3001\u30c8\u30d4\u30c3\u30af\u3084\u8fd4\u4fe1\u306a\u3069\u306e\u30d5\u30a9\u30fc\u30e9\u30e0\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306bCansode\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8(Casdoor\u30b9\u30c8\u30ec\u30fc\u30b8\u30d7\u30ed\u30d0\u30a4\u30c0\u306e\u5f62\u5f0f\u3068\u3057\u3066)\u306f\u3001Casnode\u306b\u3088\u3063\u3066\u753b\u50cf\u3084\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,s.kt)("h2",{id:"\u6e96\u5099"},"\u6e96\u5099"),(0,s.kt)("p",null,"\u79fb\u884c\u3092\u884c\u3046\u524d\u306b\u3001\u4ee5\u4e0b\u306e\u74b0\u5883\u3092\u6e96\u5099\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u30af\u30e9\u30a6\u30c9 VM (4 \u3064\u306e\u30b3\u30a2\u3068 8 GB \u306e\u30e1\u30e2\u30ea\u30018 \u3064\u306e\u30b3\u30a2\u3068 16 GB \u306e\u65b9\u304c\u512a\u308c\u3066\u3044\u307e\u3059) \u9ad8\u901f\u5316\u306e\u305f\u3081\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u30a4\u30f3\u30c8\u30e9\u30cd\u30c3\u30c8\u63a5\u7d9a\u306b\u512a\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e VM \u306f\u3001Go \u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u4e0a\u8a18\u306eVM\u3067Go\u79fb\u884c\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u305fCasnode\u306egit\u30ea\u30dd\u30b8\u30c8\u30ea(Casnode\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5b9f\u884c\u307e\u305f\u306f\u505c\u6b62\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059)\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5b9f\u884c\u4e2d\u306eCasdoor \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9 (\u540c\u3058\u30af\u30e9\u30a6\u30c9 VM \u3067\u9ad8\u901f\u5316) \u5c11\u306a\u304f\u3068\u3082 1 \u3064\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u3001Casdoor \u30b9\u30c8\u30ec\u30fc\u30b8\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u3057\u3066\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u306fDiscuzX\u306e\u753b\u50cf\u3068\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,s.kt)("li",{parentName:"ol"},"DiscuzX\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u3059\u3002")),(0,s.kt)("h2",{id:"\u8a2d\u5b9a"},"\u8a2d\u5b9a"),(0,s.kt)("p",null,"\u6700\u521d\u306b\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30ac\u30a4\u30c9\u306b\u57fa\u3065\u3044\u3066Casdoor\u3068Casnode\u3092\u6b63\u3057\u304f\u8a2d\u5b9a\u3057\u3001\u79fb\u884c\u524d\u306b\u6b63\u5e38\u306b\u52d5\u4f5c\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Casdoor\u3068Casnode\u3092DB\u306e\u30a4\u30f3\u30c8\u30e9\u30cd\u30c3\u30c8URL\u306b\u63a5\u7d9a\u3055\u305b\u307e\u3059\u3002 Casdoor\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u30d7\u30ed\u30d0\u30a4\u30c0\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u30af\u30e9\u30a6\u30c9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30a4\u30f3\u30c8\u30e9\u30cd\u30c3\u30c8URL\u306b\u3057\u307e\u3059\u3002 \u3082\u3063\u3068\u901f\u304f\u306a\u308a\u307e\u3059 :::")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Casnode\u306eapp.conf\u3067Casdoor\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u69cb\u6210\u3059\u308b\u305f\u3081\u3001Casnode\u306fCasdoor\u306eDB\u306b\u76f4\u63a5\u63a5\u7d9a\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306f\u3001Casdoor\u306eRESTful API\u3092\u547c\u3073\u51fa\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3088\u308a\u3082\u901f\u304f\u306a\u308a\u307e\u3059\u3002"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,s.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u3067\u79fb\u884c\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go")," ."),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},"dbName: \u3042\u306a\u305f\u306eDiscuzX\u306eDB\u540d"),(0,s.kt)("li",{parentName:"ol"},"discuzxDomain: DiscuzX\u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30c9\u30e1\u30a4\u30f3\u3001\u672b\u5c3e\u306e\u30b9\u30e9\u30c3\u30b7\u30e5\u4ed8\u304d"),(0,s.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: \u672b\u5c3e\u30b9\u30e9\u30c3\u30b7\u30e5\u4ed8\u304dDiscuzX\u306e\u6dfb\u4ed8\u30d9\u30fc\u30b9URL\uff08DiscuzX\u306e\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30ebURL\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\uff09"),(0,s.kt)("li",{parentName:"ol"},"avatarPoolBaseUrl: \u3053\u308c\u3092\u5909\u66f4\u3057\u306a\u3044")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbName = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')))),(0,s.kt)("h2",{id:"\u79fb\u884c"},"\u79fb\u884c"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"XXXConcurrency")," \u304c\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5148\u982d\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u79fb\u884c\u3092\u884c\u3046\u4e26\u884c\u30b9\u30ec\u30c3\u30c9\u306e\u6570\u3067\u3059 \u74b0\u5883\u306b\u57fa\u3065\u3044\u3066\u3053\u306e\u5024\u3092\u8abf\u6574\u3067\u304d\u307e\u3059\u3002 \u5c0f\u3055\u3059\u304e\u308b\u3068\u3001\u79fb\u4f4f\u306f\u975e\u5e38\u306b\u9045\u304f\u306a\u308a\u307e\u3059\u3002 \u9ad8\u3059\u304e\u308b\u3068\u3001DB\u63a5\u7d9a\u306f\u300c\u63a5\u7d9a\u304c\u591a\u3059\u304e\u308b\u300d\u30a8\u30e9\u30fc\u3092\u5831\u544a\u3059\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurrency = 20\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u63d0\u4f9b\u3059\u308b\u63a8\u5b9a\u6642\u9593\u306f\u3001DB \u3068\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u4f7f\u7528\u3057\u305f\u30ea\u30e2\u30fc\u30c8\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u63a5\u7d9a\u306e\u3042\u308b\u30de\u30b7\u30f3\u3067\u6e2c\u5b9a\u3055\u308c\u307e\u3059\u3002 VM \u304c DB \u3068\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u3068\u540c\u3058\u30b5\u30d6\u30cd\u30c3\u30c8\u306b\u3042\u308b\u5834\u5408\u3001\u3088\u308a\u9ad8\u901f\u306b\u306a\u308a\u307e\u3059\u3002 :::")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("h3",{parentName:"div",id:"1-\u30e6\u30fc\u30b6\u30fc\u306e\u79fb\u884c"},"1. \u30e6\u30fc\u30b6\u30fc\u306e\u79fb\u884c"),(0,s.kt)("p",{parentName:"div"},"DiscuzX \u306e UCenter \u30e1\u30f3\u30d0\u30fc\u5168\u54e1\u3092 Casdoor \u30e6\u30fc\u30b6\u30fc\u306b\u79fb\u884c\u3059\u308b\u306b\u306f:"),(0,s.kt)("p",{parentName:"div"},"\u5b9f\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"TestAddUsers")," in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,s.kt)("p",{parentName:"div"},"\u3053\u306e\u624b\u9806\u3067\u306f\u300160,000\u30e6\u30fc\u30b6\u30fc\u306b2\u5206\u307b\u3069\u304b\u304b\u308a\u307e\u3059\u3002"),(0,s.kt)("h3",{parentName:"div",id:"2-\u30e6\u30fc\u30b6\u30fc\u30a2\u30d0\u30bf\u30fc\u306e\u79fb\u884c"},"2. \u30e6\u30fc\u30b6\u30fc\u30a2\u30d0\u30bf\u30fc\u306e\u79fb\u884c"),(0,s.kt)("p",{parentName:"div"},"DiscuzX \u306e UCenter \u30e1\u30f3\u30d0\u30fc\u306e\u30a2\u30d0\u30bf\u30fc\u3092\u3059\u3079\u3066\u3001Casdoor \u306e\u30ea\u30bd\u30fc\u30b9\u306b\u79fb\u884c\u3059\u308b\u306b\u306f\u3001(\u30af\u30e9\u30a6\u30c9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3055\u308c\u305f Casdoor \u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u4ecb\u3057\u3066) \u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,s.kt)("p",{parentName:"div"},"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u300160,000\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u7d0410\u5206\u304b\u304b\u308a\u307e\u3059\u3002"),(0,s.kt)("h3",{parentName:"div",id:"3-\u30d5\u30a9\u30fc\u30e9\u30e0\u306e\u79fb\u884c"},"3. \u30d5\u30a9\u30fc\u30e9\u30e0\u306e\u79fb\u884c"),(0,s.kt)("p",{parentName:"div"},"DiscuzX\u306e\u3059\u3079\u3066\u306e\u30d5\u30a9\u30fc\u30e9\u30e0\u3092Casdoor\u306e\u30bf\u30d6\u3068\u30ce\u30fc\u30c9\u306b\u79fb\u884c\u3059\u308b\u306b\u306f:"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"TestAddForums")," in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,s.kt)("p",{parentName:"div"},"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u901a\u5e382\u79d2\u3067\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,s.kt)("h3",{parentName:"div",id:"4-\u30b9\u30ec\u30c3\u30c9\u3068\u79fb\u884c\u6295\u7a3f"},"4. \u30b9\u30ec\u30c3\u30c9\u3068\u79fb\u884c\u6295\u7a3f"),(0,s.kt)("p",{parentName:"div"},"DiscuzX\u306e\u3059\u3079\u3066\u306e\u30b9\u30ec\u30c3\u30c9\u3092\u79fb\u884c\u3059\u308b\u306b\u306f & Casdoor\u306e\u30c8\u30d4\u30c3\u30af\u306b\u6295\u7a3f & \u8fd4\u4fe1:"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,s.kt)("p",{parentName:"div"},"\u3053\u306e\u624b\u9806\u3067\u306f\u300110,000\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u7d047\u5206\u304b\u304b\u308a\u307e\u3059\u3002"),(0,s.kt)("h2",{parentName:"div",id:"\u5b8c\u4e86"},"\u5b8c\u4e86"),(0,s.kt)("p",{parentName:"div"},"\u79fb\u884c\u4e2d\u306f\u3001Casnode\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u540c\u6642\u306b\u5b9f\u884c\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u3001Casnode\u306e\u516c\u958b\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u3067 ",(0,s.kt)("inlineCode",{parentName:"p"},"F5")," \u3092\u62bc\u3059\u3053\u3068\u3067\u3001\u52b9\u679c\u3092\u3059\u3050\u306b\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)("p",{parentName:"div"},"\u79fb\u884c\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u6642\u306b\u30d1\u30cb\u30c3\u30af\u306b\u9665\u3063\u305f\u5834\u5408\u306f\u3001Casnode\u306e\u4f5c\u6210\u8005\u306b\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))))}l.isMDXComponent=!0}}]);