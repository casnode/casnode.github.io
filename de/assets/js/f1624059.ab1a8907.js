"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[3289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"Migration von DiscuzX",description:"Migration from DiscuzX",keywords:["discuz","discuz!","discuzx"],authors:["hsluoyz"]},o=void 0,s={unversionedId:"migration",id:"migration",title:"Migration von DiscuzX",description:"Migration from DiscuzX",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/migration",permalink:"/de/docs/migration",draft:!1,editUrl:"https://github.com/casnode/casnode-website/edit/master/docs/migration.md",tags:[],version:"current",frontMatter:{title:"Migration von DiscuzX",description:"Migration from DiscuzX",keywords:["discuz","discuz!","discuzx"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/de/docs/docker"},next:{title:"Configure File Storage, SMS and Email",permalink:"/de/docs/provider"}},u={},l=[{value:"Zubereitung",id:"zubereitung",level:2},{value:"Konfiguration",id:"konfiguration",level:2},{value:"Migration",id:"migration",level:2},{value:"1. Benutzermigration",id:"1-benutzermigration",level:3},{value:"2. Benutzer Avatar-Migration",id:"2-benutzer-avatar-migration",level:3},{value:"3. Forum Migration",id:"3-forum-migration",level:3},{value:"4. Thread und Post-Migration",id:"4-thread-und-post-migration",level:3},{value:"Fertigstellung",id:"fertigstellung",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Casnode hat eine Menge Go-Skripte zur Verf\xfcgung gestellt, um Benutzern zu helfen, ihre Foren von DiscuzX 3.x nach Casnode zu migrieren. The scripts are located at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,i.kt)("p",null,"Eine Xorm-unterst\xfctzte Datenbank (z.B. MySQL) wird von Cansode verwendet, um Forendaten wie Themen und Antworten zu speichern. Die Objektspeicherung (als Form des Casdoor Speicheranbieters) wird von Casnode zur Speicherung von Bildern und Dateianh\xe4ngen verwendet."),(0,i.kt)("h2",{id:"zubereitung"},"Zubereitung"),(0,i.kt)("p",null,"Sie m\xfcssen die folgenden Umgebungen vorbereiten, bevor Sie die Migration durchf\xfchren:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Eine Cloud-VM (besser mit \xfcber 4 Kernen und 8 GB Speicher, 8 Kerne und 16 GB ist noch besser), besser bei Intranet-Verbindung mit der Datenbank f\xfcr h\xf6here Geschwindigkeit. Diese VM wird verwendet, um die Go-Migrationsskripte auszuf\xfchren."),(0,i.kt)("li",{parentName:"ol"},"Ein Casnode Git-Repository mit den Go-Migrationsskripten in der obigen VM (die Casnode-Instanz kann ausgef\xfchrt oder gestoppt werden)."),(0,i.kt)("li",{parentName:"ol"},"Eine laufende Casdoor Instanz (besser in der gleichen Cloud VM f\xfcr h\xf6here Geschwindigkeit), mit mindestens einem Objektspeicher als Speicheranbieter von Casdoor konfiguriert. Dies wird zum Hochladen der Bilder und Anh\xe4nge von DiscuzX in den Objektspeicher verwendet."),(0,i.kt)("li",{parentName:"ol"},"Ihre DiscuzX-Instanz ist online.")),(0,i.kt)("h2",{id:"konfiguration"},"Konfiguration"),(0,i.kt)("p",null,"Konfigurieren Sie zuerst die Casdoor und Casnode basierend auf den Installationsanleitungen, stellen Sie sicher, dass sie vor der Migration normal funktionieren."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.")),(0,i.kt)("p",null,"Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,i.kt)("p",null,"Configure the migration script at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go")," ."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"dbName: Ihr DiscuzX's DB-Name"),(0,i.kt)("li",{parentName:"ol"},"discuzxDomain: DiscuzX public Domain, mit folgendem Schr\xe4gstrich"),(0,i.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: Die Anhang-Basis-URL Ihres DiscuzX mit folgendem Schr\xe4gstrich (Sie k\xf6nnen es von einer URL der Anhang-Datei Ihres DiscuzX erhalten)"),(0,i.kt)("li",{parentName:"ol"},"avatarPoolBaseUrl: \xc4ndern Sie dies nicht")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbName = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In Casnode, we assume you use the same DB username and password for all 3 DBs: Casnode's DB, Casdoor's DB and DiscuzX's DB. So make sure this DB user can access all 3 DBs.")),(0,i.kt)("h2",{id:"migration"},"Migration"),(0,i.kt)("p",null,"You may see the ",(0,i.kt)("inlineCode",{parentName:"p"},"XXXConcurrency"),' is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurrency = 20\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster.")),(0,i.kt)("h3",{id:"1-benutzermigration"},"1. Benutzermigration"),(0,i.kt)("p",null,"To migrate all your DiscuzX's UCenter members to Casdoor's users:"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAddUsers")," in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,i.kt)("p",null,"This step will roughly take 2 minutes for 60,000 users."),(0,i.kt)("h3",{id:"2-benutzer-avatar-migration"},"2. Benutzer Avatar-Migration"),(0,i.kt)("p",null,"To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,i.kt)("p",null,"This step will roughly take 10 minutes for 60,000 users."),(0,i.kt)("h3",{id:"3-forum-migration"},"3. Forum Migration"),(0,i.kt)("p",null,"To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAddForums")," in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,i.kt)("p",null,"This step will usually finish in 2 seconds."),(0,i.kt)("h3",{id:"4-thread-und-post-migration"},"4. Thread und Post-Migration"),(0,i.kt)("p",null,"To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,i.kt)("p",null,"This step will roughly take 7 minutes for 10,000 users."),(0,i.kt)("h2",{id:"fertigstellung"},"Fertigstellung"),(0,i.kt)("p",null,"During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"F5")," in Casnode's public homepage."),(0,i.kt)("p",null,"If you encounter panic when running the migration scripts, contact the Casnode authors."))}d.isMDXComponent=!0}}]);