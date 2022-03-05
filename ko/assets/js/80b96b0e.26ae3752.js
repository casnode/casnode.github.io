"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[377],{5395:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),s=["components"],a={title:"Server Side Rendering"},d=void 0,l={unversionedId:"server-side-rendering",id:"server-side-rendering",isDocsHomePage:!1,title:"Server Side Rendering",description:"Casnode support SSR. SSR(Server-side rendering) is a popular technique for rendering a client-side single page application (SPA) on the server and then sending a fully rendered page to the client.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/server-side-rendering.md",sourceDirName:".",slug:"/server-side-rendering",permalink:"/ko/docs/server-side-rendering",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/server-side-rendering.md",tags:[],version:"current",frontMatter:{title:"Server Side Rendering"},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/ko/docs/controllers"},next:{title:"Internationalization",permalink:"/ko/docs/internationalization"}},p=[{value:"Implementation",id:"implementation",children:[],level:2}],u={toc:p};function c(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casnode support SSR. SSR(Server-side rendering) is a popular technique for rendering a client-side single page application (SPA) on the server and then sending a fully rendered page to the client."),(0,o.kt)("p",null,"This allows for dynamic components to be served as static HTML markup.This approach can be useful for search engine optimization (SEO) when indexing does not handle JavaScript properly. It may also be beneficial in situations where downloading a large JavaScript bundle is impaired by a slow network."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"You can see the implementation of server side rendering in ",(0,o.kt)("inlineCode",{parentName:"p"},"routers/filter_ssr.go"),".We use Chromedp to render pages for search engine bots. If Chrome is installed, functions in this file will return a rendered page to bots."),(0,o.kt)("p",null,"We use a Regular expression ",(0,o.kt)("inlineCode",{parentName:"p"},"bot|slurp|bing|crawler")," to match the User Agent of the request. If matched, we think the request is sent by a bot."))}c.isMDXComponent=!0}}]);