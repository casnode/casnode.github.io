(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[674],{6608:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var o=r(2122),s=r(9756),n=(r(7294),r(3905)),i=["components"],a={title:"routers",slug:"/routers"},u=void 0,l={unversionedId:"routers",id:"routers",isDocsHomePage:!1,title:"routers",description:"Actually, routers is a built-in package of Beego. routers.init() is run by the framework when program starts. However, we added some filter functions to the package.",source:"@site/docs/routers.md",sourceDirName:".",slug:"/routers",permalink:"/docs/routers",editUrl:"https://github.com/casdoor/casdoor-website/tree/master/docs/routers.md",version:"current",frontMatter:{title:"routers",slug:"/routers"},sidebar:"tutorialSidebar",previous:{title:"main package",permalink:"/docs/main-package"},next:{title:"Controllers",permalink:"/docs/controllers"}},d=[{value:"routers/filter.go",id:"routersfiltergo",children:[]},{value:"routers/filter_ssr.go",id:"routersfilter_ssrgo",children:[]}],c={toc:d};function p(e){var t=e.components,r=(0,s.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Actually, ",(0,n.kt)("inlineCode",{parentName:"p"},"routers")," is a built-in package of Beego. ",(0,n.kt)("inlineCode",{parentName:"p"},"routers.init()")," is run by the framework when program starts. However, we added some filter functions to the package."),(0,n.kt)("p",null,"We are not going to talk about the ",(0,n.kt)("inlineCode",{parentName:"p"},"routers/router.go")," here, Beego has already had a good document for it. We are going to introduce our filters here."),(0,n.kt)("h2",{id:"routersfiltergo"},"routers/filter.go"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TransparentStatic:")," This filter is to serve static files. If a request path is not starts with ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/"),", then the filter will serve a static file to the browser. The filter will find the requested file in ",(0,n.kt)("inlineCode",{parentName:"p"},"web/build/"),", and serve the file if exist."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"FreshAccountActiveStatus:")," Update users' online states when they send a request."),(0,n.kt)("h2",{id:"routersfilter_ssrgo"},"routers/filter_ssr.go"),(0,n.kt)("p",null,"We use Chromedp to render pages for search engine bots. If Chrome is installed, functions in this file will return a rendered page to bots."),(0,n.kt)("p",null,"We use a Regular expression ",(0,n.kt)("inlineCode",{parentName:"p"},"bot|slurp|bing|crawler")," to match the User Agent of the request. If matched, we think the request is sent by a bot."))}p.isMDXComponent=!0}}]);