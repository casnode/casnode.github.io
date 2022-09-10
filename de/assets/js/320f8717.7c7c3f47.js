"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const r={},i=void 0,l={unversionedId:"bt-panel",id:"bt-panel",title:"bt-panel",description:"- - -",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/bt-panel.md",sourceDirName:".",slug:"/bt-panel",permalink:"/de/docs/bt-panel",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/de",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/de/docs/installation"},next:{title:"docker",permalink:"/de/docs/docker"}},s={},d=[{value:"Casnode unter dem Linux BT Panel installieren",id:"casnode-unter-dem-linux-bt-panel-installieren",level:2},{value:"Arbeit vorbereiten",id:"arbeit-vorbereiten",level:3},{value:"Install Golang",id:"install-golang",level:4},{value:"Git clone Casnode &amp; Casdoor",id:"git-clone-casnode--casdoor",level:4},{value:"Casdoor konfigurieren",id:"casdoor-konfigurieren",level:3},{value:"Casdoor ausf\xfchren",id:"casdoor-ausf\xfchren",level:4},{value:"Kasnode in Casdoor konfigurieren",id:"kasnode-in-casdoor-konfigurieren",level:4},{value:"Kasnode konfigurieren",id:"kasnode-konfigurieren",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"title: BT panel description: Install Casnode under the Linux BT panel keywords: ","[bt panel]"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The tutorial environment is Ubuntu 20.04")),(0,o.kt)("h2",{id:"casnode-unter-dem-linux-bt-panel-installieren"},"Casnode unter dem Linux BT Panel installieren"),(0,o.kt)("h3",{id:"arbeit-vorbereiten"},"Arbeit vorbereiten"),(0,o.kt)("p",null,"After installing the BT panel, the browser visits the BT panel, selects the software store, searches for and installs MySQL, and then searches for node, you can see that there is a PM2 manager, install the PM2 manager."),(0,o.kt)("p",null,"After the installation is complete, disconnect from the server or restart the server, node will be automatically written into the environment variable."),(0,o.kt)("p",null,"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"git --version")," to make sure git is , if the prompts Command ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," not found, use ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get install git")," to install git."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To access the Casnode successfully, you need to open the ",(0,o.kt)("strong",{parentName:"p"},"7001")," and ",(0,o.kt)("strong",{parentName:"p"},"8000")," port.")),(0,o.kt)("h4",{id:"install-golang"},"Install Golang"),(0,o.kt)("p",null,"The root user executes the following commands to download and decompress the Go binary file to the ",(0,o.kt)("strong",{parentName:"p"},"/usr/local")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget -c https://dl.google.com/go/go1.16.5.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local\n")),(0,o.kt)("p",null,"Then we need to add Golang to the environment variables, edit ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/profile"),", add the following code in the last line of the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"exportiere GOROOT=/usr/local/go\nexport PATH=$PATH:$GOROOT/bin\n")),(0,o.kt)("p",null,"Then use command ",(0,o.kt)("inlineCode",{parentName:"p"},"source /etc/profile")," to make the newly added environment variables work."),(0,o.kt)("p",null,"Now, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"go version"),", you will see the go version, and we installed it successfully. If you can\u2019t connect to GitHub, you can set up the mirror. The command is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"gehe env -w GOPROXY=https://goproxy.cn,direct\n")),(0,o.kt)("h4",{id:"git-clone-casnode--casdoor"},"Git clone Casnode & Casdoor"),(0,o.kt)("p",null,"Next, execute the following commands in the folder where you want to store the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,o.kt)("p",null,"Now, you can see there are two folders, Casnode and Casdoor."),(0,o.kt)("h3",{id:"casdoor-konfigurieren"},"Casdoor konfigurieren"),(0,o.kt)("h4",{id:"casdoor-ausf\xfchren"},"Casdoor ausf\xfchren"),(0,o.kt)("p",null,"We first configure Casdoor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"cd casdoor\ngo build main.go\n")),(0,o.kt)("p",null,"Then edit ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", find"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,o.kt)("p",null,"Change MySQL password provided by the BT panel as ",(0,o.kt)("strong",{parentName:"p"},"123"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nnpm install\nnpm run build\ncd ..\nsudo nohup ./main &\n")),(0,o.kt)("h4",{id:"kasnode-in-casdoor-konfigurieren"},"Kasnode in Casdoor konfigurieren"),(0,o.kt)("p",null,"Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode."),(0,o.kt)("p",null,"The default administrator login account is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin/123"),"."),(0,o.kt)("p",null,"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save."),(0,o.kt)("p",null,"Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum. Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to http://your-ip:7000/callback.Finally, remember the Client ID and Client Secret, and click Save."),(0,o.kt)("p",null,"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"kasnode-konfigurieren"},"Kasnode konfigurieren"),(0,o.kt)("p",null,"Next we configure in Casnode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd casnode\ngo build main.go\n")),(0,o.kt)("p",null,"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", find"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,o.kt)("p",null,"Change MySQL password provided by the BT panel to ",(0,o.kt)("strong",{parentName:"p"},"123"),", then find casdoorEndpoint, modify it to http://your-ip:8000 (Casdoor backend address), find ",(0,o.kt)("strong",{parentName:"p"},"ClientId")," and ",(0,o.kt)("strong",{parentName:"p"},"ClientSecret"),", and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to your set. Save and exit."),(0,o.kt)("p",null,"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"web/src/Conf.js"),", modify ",(0,o.kt)("inlineCode",{parentName:"p"},"serverUrl")," to http://your-ip:8000 (Casdoor front-end access address), modify ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientId")," to the ClientId of the application just added, modify ",(0,o.kt)("inlineCode",{parentName:"p"},"appName")," to the set application name, and modify ",(0,o.kt)("inlineCode",{parentName:"p"},"organizationName")," to the set organization name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run build\ncd ..\nnohup ./main &\n")),(0,o.kt)("p",null,"Next visit ",(0,o.kt)("strong",{parentName:"p"},"http://your-ip:7000"),", click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,o.kt)("p",null,"For more settings please see ",(0,o.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"Casnode.")))}p.isMDXComponent=!0}}]);