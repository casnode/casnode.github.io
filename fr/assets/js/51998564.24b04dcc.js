"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[39],{3984:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Controllers"},l=void 0,c={unversionedId:"controllers",id:"controllers",isDocsHomePage:!1,title:"Controllers",description:"In routers/router.go, you can find lots of lines like",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/controllers.md",sourceDirName:".",slug:"/controllers",permalink:"/fr/docs/controllers",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/controllers.md",tags:[],version:"current",frontMatter:{title:"Controllers"},sidebar:"tutorialSidebar",previous:{title:"Routers",permalink:"/fr/docs/routers"},next:{title:"Internationalization",permalink:"/fr/docs/internationalization"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"routers/router.go"),", you can find lots of lines like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")\n')),(0,i.kt)("p",null,"Please pay attention to the third parameter ",(0,i.kt)("inlineCode",{parentName:"p"},'"GET:GetTopics"'),". This string is a combination of HTTP request method, and the function name of the request handler. You can find a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"GetTopics")," in the package ",(0,i.kt)("inlineCode",{parentName:"p"},"controllers"),", and it is the handler of the request ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/get-topics"),"."),(0,i.kt)("p",null,"You can find the corresponding function of the request this way."),(0,i.kt)("p",null,":::tip If you are using ",(0,i.kt)("strong",{parentName:"p"},"Goland"),", you can press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+F"),"(vscode use ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+F")," instead), and search ",(0,i.kt)("inlineCode",{parentName:"p"},"func (c *ApiController) FunctionName")," to locate to the function quickly. :::"))}d.isMDXComponent=!0}}]);