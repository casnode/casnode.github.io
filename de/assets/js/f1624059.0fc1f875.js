"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[289],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=u(t),p=i,h=l["".concat(d,".").concat(p)]||l[p]||m[p]||a;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=l;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},7583:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),s=["components"],o={title:"Migration von DiscuzX"},d=void 0,u={unversionedId:"migration",id:"migration",isDocsHomePage:!1,title:"Migration von DiscuzX",description:"Casnode hat eine Menge Go-Skripte zur Verf\xfcgung gestellt, um Benutzern zu helfen, ihre Foren von DiscuzX 3.x nach Casnode zu migrieren. Die Skripte befinden sich unter//github.com/casbin/casnode/tree/master/discuzx",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/migration",permalink:"/de/docs/migration",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/migration.md",tags:[],version:"current",frontMatter:{title:"Migration von DiscuzX"},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/de/docs/docker"},next:{title:"API-\xdcbersicht",permalink:"/de/docs/api-overview"}},c=[{value:"Zubereitung",id:"zubereitung",children:[],level:2},{value:"Konfiguration",id:"konfiguration",children:[],level:2},{value:"Migration",id:"migration",children:[],level:2}],m={toc:c};function l(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casnode hat eine Menge Go-Skripte zur Verf\xfcgung gestellt, um Benutzern zu helfen, ihre Foren von DiscuzX 3.x nach Casnode zu migrieren. Die Skripte befinden sich unter: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,a.kt)("p",null,"Eine Xorm-unterst\xfctzte Datenbank (z.B. MySQL) wird von Cansode verwendet, um Forendaten wie Themen und Antworten zu speichern. Die Objektspeicherung (als Form des Casdoor Speicheranbieters) wird von Casnode zur Speicherung von Bildern und Dateianh\xe4ngen verwendet."),(0,a.kt)("h2",{id:"zubereitung"},"Zubereitung"),(0,a.kt)("p",null,"Sie m\xfcssen die folgenden Umgebungen vorbereiten, bevor Sie die Migration durchf\xfchren:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Eine Cloud-VM (besser mit \xfcber 4 Kernen und 8 GB Speicher, 8 Kerne und 16 GB ist noch besser), besser bei Intranet-Verbindung mit der Datenbank f\xfcr h\xf6here Geschwindigkeit. Diese VM wird verwendet, um die Go-Migrationsskripte auszuf\xfchren."),(0,a.kt)("li",{parentName:"ol"},"Ein Casnode Git-Repository mit den Go-Migrationsskripten in der obigen VM (die Casnode-Instanz kann ausgef\xfchrt oder gestoppt werden)."),(0,a.kt)("li",{parentName:"ol"},"Eine laufende Casdoor Instanz (besser in der gleichen Cloud VM f\xfcr h\xf6here Geschwindigkeit), mit mindestens einem Objektspeicher als Speicheranbieter von Casdoor konfiguriert. Dies wird zum Hochladen der Bilder und Anh\xe4nge von DiscuzX in den Objektspeicher verwendet."),(0,a.kt)("li",{parentName:"ol"},"Ihre DiscuzX-Instanz ist online.")),(0,a.kt)("h2",{id:"konfiguration"},"Konfiguration"),(0,a.kt)("p",null,"Konfigurieren Sie zuerst die Casdoor und Casnode basierend auf den Installationsanleitungen, stellen Sie sicher, dass sie vor der Migration normal funktionieren."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Lassen Sie Casdoor und Casnode sich mit der DB's Intranet URL verbinden. Lassen Sie Casdoor Endpunkt des Speicheranbieters die Intranet-URL des Cloud-Objekt-Speichers sein. Es wird viel schneller sein. :::")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Konfigurieren Sie die Casdoor Datenbank in Casnode's app.conf, damit Casnode sich direkt mit Casdoor's DB verbinden und Benutzer erstellen kann. Dies wird schneller sein, als Casdoor RESTful API aufzurufen, um Benutzer zu erstellen."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,a.kt)("p",{parentName:"div"},"Konfigurieren Sie das Migrationsskript unter: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go")," ."),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"dbName: Ihr DiscuzX's DB-Name"),(0,a.kt)("li",{parentName:"ol"},"discuzxDomain: DiscuzX public Domain, mit folgendem Schr\xe4gstrich"),(0,a.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: Die Anhang-Basis-URL Ihres DiscuzX mit folgendem Schr\xe4gstrich (Sie k\xf6nnen es von einer URL der Anhang-Datei Ihres DiscuzX erhalten)"),(0,a.kt)("li",{parentName:"ol"},"avatarPoolBaseUrl: \xc4ndern Sie dies nicht")),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbName = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')))),(0,a.kt)("h2",{id:"migration"},"Migration"),(0,a.kt)("p",null,"Du kannst die ",(0,a.kt)("inlineCode",{parentName:"p"},"XXXConcurrency"),' oben an den Skripten sehen Dies ist die Anzahl der gleichzeitigen Threads, um die Migration durchzuf\xfchren. Sie k\xf6nnen diesen Wert auf Ihre Umgebung abstimmen. Wenn es zu klein ist, wird die Migration sehr langsam sein. Wenn es zu hoch ist, werden die DB-Verbindungen eher "Verbindungen zu viele" Fehler melden.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurrency = 20\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Die Einsch\xe4tzungszeit, die wir in den folgenden Abschnitten gew\xe4hren, wird in einer Maschine mit einer entfernten Internetverbindung mit der DB und der Objektspeicherung gemessen. Wenn Ihr VM im selben Subnetz mit der DB und der Objektspeicherung ist, werden Sie viel schneller sein. :::")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("h3",{parentName:"div",id:"1-benutzermigration"},"1. Benutzermigration"),(0,a.kt)("p",{parentName:"div"},"Um alle Ihre DiscuzX's UCenter-Mitglieder zu Casdoor's Benutzern zu migrieren:"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"TestAddUsers")," ausf\xfchren in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,a.kt)("p",{parentName:"div"},"Dieser Schritt dauert ungef\xe4hr 2 Minuten f\xfcr 60.000 Benutzer."),(0,a.kt)("h3",{parentName:"div",id:"2-benutzer-avatar-migration"},"2. Benutzer Avatar-Migration"),(0,a.kt)("p",{parentName:"div"},"Um alle Avatare Ihrer DiscuzX UCenter-Mitglieder zu Casdoor's Ressourcen zu migrieren (\xfcber Casdoor's Storage Provider, unterst\xfctzt durch den Cloud-Objekt-Speichern):"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars ausf\xfchren")," in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,a.kt)("p",{parentName:"div"},"Dieser Schritt dauert ungef\xe4hr 10 Minuten f\xfcr 60.000 Benutzer."),(0,a.kt)("h3",{parentName:"div",id:"3-forum-migration"},"3. Forum Migration"),(0,a.kt)("p",{parentName:"div"},"Um alle DiscuzX-Foren in die Tab und Knoten von Casdoor zu migrieren:"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"TestAddForums")," in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")," ausf\xfchren"),(0,a.kt)("p",{parentName:"div"},"Dieser Schritt endet in der Regel in 2 Sekunden."),(0,a.kt)("h3",{parentName:"div",id:"4-thread-und-post-migration"},"4. Thread und Post-Migration"),(0,a.kt)("p",{parentName:"div"},"To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," ausf\xfchren in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,a.kt)("p",{parentName:"div"},"Dieser Schritt dauert ungef\xe4hr 7 Minuten f\xfcr 10.000 Benutzer."),(0,a.kt)("h2",{parentName:"div",id:"fertigstellung"},"Fertigstellung"),(0,a.kt)("p",{parentName:"div"},"W\xe4hrend der Migration k\xf6nnen Sie die Casnode-Instanz gleichzeitig laufen lassen damit Sie den Effekt sofort sehen k\xf6nnen, indem Sie ",(0,a.kt)("inlineCode",{parentName:"p"},"F5")," auf der \xf6ffentlichen Startseite von Casnode dr\xfccken."),(0,a.kt)("p",{parentName:"div"},"Wenn Sie beim Ausf\xfchren der Migrationsskripte auf Panik sto\xdfen, wenden Sie sich an die Autoren von Casnode."))))}l.isMDXComponent=!0}}]);