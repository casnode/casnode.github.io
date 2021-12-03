"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[32],{4511:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=r(3117),s=r(102),n=(r(7294),r(3905)),i=["components"],a={title:"Routers",slug:"/routers"},u=void 0,l={unversionedId:"routers",id:"routers",isDocsHomePage:!1,title:"Routers",description:"Actually, routers is a built-in package of Beego. routers.init() is run by the framework when program starts. However, we added some filter functions to the package.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/routers.md",sourceDirName:".",slug:"/routers",permalink:"/ja/docs/routers",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/routers.md",tags:[],version:"current",frontMatter:{title:"Routers",slug:"/routers"},sidebar:"tutorialSidebar",previous:{title:"Main package",permalink:"/ja/docs/main-package"},next:{title:"Controllers",permalink:"/ja/docs/controllers"}},c=[{value:"routers/filter.go",id:"routersfiltergo",children:[],level:2},{value:"routers/filter_ssr.go",id:"routersfilter_ssrgo",children:[],level:2}],d={toc:c};function p(e){var t=e.components,r=(0,s.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Actually, ",(0,n.kt)("inlineCode",{parentName:"p"},"routers")," is a built-in package of Beego. ",(0,n.kt)("inlineCode",{parentName:"p"},"routers.init()")," is run by the framework when program starts. However, we added some filter functions to the package."),(0,n.kt)("p",null,"We are not going to talk about the ",(0,n.kt)("inlineCode",{parentName:"p"},"routers/router.go")," here, Beego has already had a good document for it. We are going to introduce our filters here."),(0,n.kt)("h2",{id:"routersfiltergo"},"routers/filter.go"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TransparentStatic:")," This filter is to serve static files. If a request path is not starts with ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/"),", then the filter will serve a static file to the browser. The filter will find the requested file in ",(0,n.kt)("inlineCode",{parentName:"p"},"web/build/"),", and serve the file if exist."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"FreshAccountActiveStatus:")," Update users' online states when they send a request."),(0,n.kt)("h2",{id:"routersfilter_ssrgo"},"routers/filter_ssr.go"),(0,n.kt)("p",null,"We use Chromedp to render pages for search engine bots. If Chrome is installed, functions in this file will return a rendered page to bots."),(0,n.kt)("p",null,"We use a Regular expression ",(0,n.kt)("inlineCode",{parentName:"p"},"bot|slurp|bing|crawler")," to match the User Agent of the request. If matched, we think the request is sent by a bot."))}p.isMDXComponent=!0}}]);