"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[242],{8187:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],s={title:"Hauptpaket"},u=void 0,p={unversionedId:"main-package",id:"main-package",isDocsHomePage:!1,title:"Hauptpaket",description:"Es gibt mehrere Pakete im Backend von Casnode. Die Hauptfunktion und das Beego Framework rufen diese Pakete beim Programmstart auf.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/de/docs/main-package",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/main-package.md",tags:[],version:"current",frontMatter:{title:"Hauptpaket"},sidebar:"tutorialSidebar",previous:{title:"\xdcbersicht",permalink:"/de/docs/architecture-overview"},next:{title:"Router",permalink:"/de/docs/routers"}},c=[{value:"wichtigsten",id:"wichtigsten",children:[],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Es gibt mehrere Pakete im Backend von Casnode. Die Hauptfunktion und das Beego Framework rufen diese Pakete beim Programmstart auf."),(0,r.kt)("h2",{id:"wichtigsten"},"wichtigsten"),(0,r.kt)("p",null,"Das Hauptpaket ist der Eingang von Casnode. Wir machen einige grundlegende Installationsschritte im Hauptpaket:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Richte einige globale Variablen"),"ein: Datenbankadapter, http Client, OSS-Adapter, Segmenter und Forum Basisinformationen (Forum-Version, Online-Nummer, Google Groups Crawlers)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filter einrichten:")," API-Request-Filter, Suchmaschinen-Bot-Filter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitzungsdaten:")," Casnode verwendet Beego Session um Benutzerinformationen zu speichern. In der Hauptfunktion hat diese Zeilen geschrieben, um eine dateibasierte Sitzung zu verwenden:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"\nbeego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365\n')),(0,r.kt)("p",null,"Bitte wenden Sie sich an ",(0,r.kt)("a",{parentName:"p",href:"https://beego.me/docs/mvc/controller/session.md"},"Beego Session")," wenn Sie einen anderen Sitzungsadapter in Beego verwenden m\xf6chten."))}m.isMDXComponent=!0}}]);