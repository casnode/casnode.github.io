"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[841],{8497:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var a=i(7462),t=i(3366),r=(i(7294),i(3905)),d=["components"],s={},o=void 0,l={unversionedId:"bt-panel",id:"bt-panel",isDocsHomePage:!1,title:"bt-panel",description:"Casnode unter dem Linux BT Panel installieren",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/bt-panel.md",sourceDirName:".",slug:"/bt-panel",permalink:"/de/docs/bt-panel",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/bt-panel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/de/docs/installation"},next:{title:"docker",permalink:"/de/docs/docker"}},u=[{value:"Casnode unter dem Linux BT Panel installieren",id:"casnode-unter-dem-linux-bt-panel-installieren",children:[{value:"Arbeit vorbereiten",id:"arbeit-vorbereiten",children:[],level:3}],level:2}],p={toc:u};function c(e){var n=e.components,i=(0,t.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Die Tutorialumgebung ist Ubuntu 20.04  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"casnode-unter-dem-linux-bt-panel-installieren"},"Casnode unter dem Linux BT Panel installieren"),(0,r.kt)("h3",{id:"arbeit-vorbereiten"},"Arbeit vorbereiten"),(0,r.kt)("p",null,"Nach der Installation des BT-Panels besucht der Browser das BT-Panel, w\xe4hlt den Software-Store aus, sucht nach und installiert MySQL, und sucht dann nach Knoten, k\xf6nnen Sie sehen, dass es einen PM2-Manager gibt, installieren Sie den PM2-Manager."),(0,r.kt)("p",null,"Nachdem die Installation abgeschlossen ist, trennen Sie die Verbindung vom Server oder starten Sie den Server neu, der Knoten wird automatisch in die Umgebungsvariable geschrieben."),(0,r.kt)("p",null,"Gib ",(0,r.kt)("inlineCode",{parentName:"p"},"git --version")," ein, um sicherzustellen, dass git ist, wenn das Eingabeaufforderungskommando ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," nicht gefunden wurde, verwenden Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get install git")," , um git zu installieren."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Um auf den Casnode erfolgreich zuzugreifen, m\xfcssen Sie den ",(0,r.kt)("strong",{parentName:"h5"},"7001")," und ",(0,r.kt)("strong",{parentName:"h5"},"8000")," Port \xf6ffnen. :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h4",{parentName:"div",id:"install-golang"},"Install Golang"),(0,r.kt)("p",{parentName:"div"},"Der root-Benutzer f\xfchrt die folgenden Befehle aus, um die Go-Bin\xe4rdatei herunterzuladen und in das ",(0,r.kt)("strong",{parentName:"p"},"/usr/local")," Verzeichnis zu dekomprimieren."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget -c https://dl.google.com/go/go1.16.5.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local\n")),(0,r.kt)("p",{parentName:"div"},"Dann m\xfcssen wir Golang zu den Umgebungsvariablen hinzuf\xfcgen, ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo vim /etc/profile"),", Geben Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),"ein, f\xfcgen Sie den folgenden Code in der letzten Zeile der Datei hinzu."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"exportiere GOROOT=/usr/local/go\nexport PATH=$PATH:$GOROOT/bin\n")),(0,r.kt)("p",{parentName:"div"},"Dr\xfccken Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"Esc")," und geben Sie ",(0,r.kt)("inlineCode",{parentName:"p"},":wq")," ein, um die Datei zu speichern und zu beenden."),(0,r.kt)("p",{parentName:"div"},"Benutzen Sie dann den Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"source /etc/profile")," um die neu hinzugef\xfcgten Umgebungsvariablen funktionieren zu lassen."),(0,r.kt)("p",{parentName:"div"},"Geben Sie jetzt ",(0,r.kt)("inlineCode",{parentName:"p"},"go version"),"ein, Sie werden die go version sehen, und wir haben sie erfolgreich installiert. Wenn Sie keine Verbindung zu GitHub herstellen k\xf6nnen, k\xf6nnen Sie den Spiegel einrichten. Der Befehl ist"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"gehe env -w GOPROXY=https://goproxy.cn,direct\n")),(0,r.kt)("h4",{parentName:"div",id:"git-clone-casnode--casdoor"},"Git clone Casnode & Casdoor"),(0,r.kt)("p",{parentName:"div"},"F\xfchren Sie als n\xe4chstes die folgenden Befehle in dem Ordner aus, in dem Sie das Projekt speichern m\xf6chten."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,r.kt)("p",{parentName:"div"},"Jetzt k\xf6nnen Sie sehen, es gibt zwei Ordner, Casnode und Casdoor."),(0,r.kt)("br",null),(0,r.kt)("h3",{parentName:"div",id:"casdoor-konfigurieren"},"Casdoor konfigurieren"),(0,r.kt)("h4",{parentName:"div",id:"casdoor-ausf\xfchren"},"Casdoor ausf\xfchren"),(0,r.kt)("p",{parentName:"div"},"Wir konfigurieren zuerst Casdoor."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"cd casdoor\ngo build main.go\nvim conf/app.conf\n")),(0,r.kt)("p",{parentName:"div"},"Geben Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),"ein, finden"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,r.kt)("p",{parentName:"div"},"\xc4ndern Sie das MySQL-Passwort des BT-Panels als ",(0,r.kt)("strong",{parentName:"p"},"123"),", dr\xfccken Sie dann ",(0,r.kt)("inlineCode",{parentName:"p"},"Esc"),", geben Sie ",(0,r.kt)("inlineCode",{parentName:"p"},":wq")," ein, um zu speichern und zu beenden."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nnpm install\nnpm run build\ncd ..\nsudo nohup ./main &\n")),(0,r.kt)("h4",{parentName:"div",id:"kasnode-in-casdoor-konfigurieren"},"Kasnode in Casdoor konfigurieren"),(0,r.kt)("p",{parentName:"div"},"Nun, da Casdoor konfiguriert wurde, besuchen Sie http://your-ip:8000 um Casnode zu konfigurieren."),(0,r.kt)("p",{parentName:"div"},"Der Standard-Administrator-Login-Account ist admin/123."),(0,r.kt)("p",{parentName:"div"},"Klicken Sie auf Organisation und dann auf Hinzuf\xfcgen, klicken Sie auf Bearbeiten f\xfcr die hinzugef\xfcgte Organisation und \xe4ndern Sie den Namen in den gew\xfcnschten Organisationsnamen. Hier setze ich es auf Casbin-Forum, und klicken Sie dann auf Speichern."),(0,r.kt)("p",{parentName:"div"},"Klicken Sie auf Anwendungen und klicken Sie dann auf Hinzuf\xfcgen, um die Anwendung zu bearbeiten, \xe4ndern Sie den Namen der Anwendung, den Sie wollen, \xe4nderte ich ihn in app-casbin-forum. Klicken Sie auf die Organisation, w\xe4hlen Sie die Organisation, die Sie gerade hinzugef\xfcgt haben, meine Organisation ist Casbin-Forum. Klicken Sie auf Weiterleitungs-URLs, \xe4ndern Sie den Link in der Box auf http://your-ip:7000/callback.Schlie\xdflich, merken Sie sich die Client ID und Client Secret, und klicken Sie auf Speichern."),(0,r.kt)("p",{parentName:"div"},"Klicken Sie auf Benutzer, klicken Sie auf Hinzuf\xfcgen, klicken Sie dann auf Bearbeiten, \xe4ndern Sie den hinzugef\xfcgten Benutzer, klicken Sie auf Organisation, w\xe4hlen Sie das Casbin-Forum, und klicken Sie auf admin. Klicken Sie schlie\xdflich auf Speichern, jetzt hat Ihre Organisation ein Administrator-Konto."),(0,r.kt)("br",null),(0,r.kt)("h3",{parentName:"div",id:"kasnode-konfigurieren"},"Kasnode konfigurieren"),(0,r.kt)("p",{parentName:"div"},"Als n\xe4chstes konfigurieren wir in Casnode."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su\ncd casnode\ngo build main.go\nvim conf/app.conf\n")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"i")," eingeben und finden"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,r.kt)("p",{parentName:"div"},"\xc4ndern Sie das MySQL-Passwort des BT-Panels auf ",(0,r.kt)("strong",{parentName:"p"},"123"),"und finden Sie dann casdoorEndpoint, \xe4ndern Sie es auf http://your-ip:8000 (Casdoor Backend-Adresse), finde ",(0,r.kt)("strong",{parentName:"p"},"ClientId")," und ",(0,r.kt)("strong",{parentName:"p"},"ClientSecret"),", und \xe4ndern Sie sie auf die zuvor gespeicherte Anwendungs-Client-ID und das Kundengeheimnis, finden Sie casdoorOrganization, \xe4ndern Sie den Organisationsnamen zu Ihrem Set! Speichern und beenden."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nvim src/Conf.js\n")),(0,r.kt)("p",{parentName:"div"},"\xc4ndern Sie serverUrl auf http://your-ip:8000 (Adresse an der Casdoor-Adresse), \xe4ndern Sie ClientId zu der ClientId der gerade hinzugef\xfcgten Anwendung, \xe4ndern Sie appname auf den festgesetzten Anwendungsnamen und \xe4ndern Sie die Organisation auf den festgelegten Organisationsnamen. Speichern und beenden."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm Installation\nnpm run build\ncd ..\nnohup ./main &\n")),(0,r.kt)("p",{parentName:"div"},"N\xe4chster Besuch ",(0,r.kt)("strong",{parentName:"p"},"http://your-ip:7000"),", klicken Sie auf Anmeldung, geben Sie den Account, den Sie zuvor hinzugef\xfcgt haben, user_1/123 ein, Sie haben sich jetzt erfolgreich bei Casnode eingeloggt."),(0,r.kt)("p",{parentName:"div"},"Weitere Einstellungen finden Sie unter ",(0,r.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"Casnode.")))))}c.isMDXComponent=!0}}]);