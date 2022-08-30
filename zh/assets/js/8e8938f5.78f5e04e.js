"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"bt-panel",id:"bt-panel",title:"bt-panel",description:"- - -",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/bt-panel.md",sourceDirName:".",slug:"/bt-panel",permalink:"/zh/docs/bt-panel",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/zh/docs/installation"},next:{title:"docker",permalink:"/zh/docs/docker"}},s={},d=[{value:"\u5728 Linux BT \u9762\u677f\u4e0b\u5b89\u88c5 Casnode",id:"\u5728-linux-bt-\u9762\u677f\u4e0b\u5b89\u88c5-casnode",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u5b89\u88c5 Golang",id:"\u5b89\u88c5-golang",level:4},{value:"Git clone Casnode &amp; Casdoor",id:"git-clone-casnode--casdoor",level:4},{value:"\u914d\u7f6e Cassdoor",id:"\u914d\u7f6e-cassdoor",level:3},{value:"\u8fd0\u884cCasdoor",id:"\u8fd0\u884ccasdoor",level:4},{value:"\u914d\u7f6e Casdoor \u4e2d\u7684 Casnode",id:"\u914d\u7f6e-casdoor-\u4e2d\u7684-casnode",level:4},{value:"\u914d\u7f6e Casnode",id:"\u914d\u7f6e-casnode",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"title: BT panel description: Install Casnode under the Linux BT panel keywords: ","[bt panel]"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The tutorial environment is Ubuntu 20.04")),(0,a.kt)("h2",{id:"\u5728-linux-bt-\u9762\u677f\u4e0b\u5b89\u88c5-casnode"},"\u5728 Linux BT \u9762\u677f\u4e0b\u5b89\u88c5 Casnode"),(0,a.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"After installing the BT panel, the browser visits the BT panel, selects the software store, searches for and installs MySQL, and then searches for node, you can see that there is a PM2 manager, install the PM2 manager."),(0,a.kt)("p",null,"After the installation is complete, disconnect from the server or restart the server, node will be automatically written into the environment variable."),(0,a.kt)("p",null,"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"git --version")," to make sure git is , if the prompts Command ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," not found, use ",(0,a.kt)("inlineCode",{parentName:"p"},"apt-get install git")," to install git."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To access the Casnode successfully, you need to open the ",(0,a.kt)("strong",{parentName:"p"},"7001")," and ",(0,a.kt)("strong",{parentName:"p"},"8000")," port.")),(0,a.kt)("h4",{id:"\u5b89\u88c5-golang"},"\u5b89\u88c5 Golang"),(0,a.kt)("p",null,"The root user executes the following commands to download and decompress the Go binary file to the ",(0,a.kt)("strong",{parentName:"p"},"/usr/local")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget -c https://dl.google.com/go/go.16.5.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local\n")),(0,a.kt)("p",null,"Then we need to add Golang to the environment variables, edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/profile"),", add the following code in the last line of the file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u5bfc\u51fa GOROOT=/usr/local/go\n\u5bfc\u51fa PATH=$PATH:$GOROOT/ bin\n")),(0,a.kt)("p",null,"Then use command ",(0,a.kt)("inlineCode",{parentName:"p"},"source /etc/profile")," to make the newly added environment variables work."),(0,a.kt)("p",null,"Now, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"go version"),", you will see the go version, and we installed it successfully. If you can\u2019t connect to GitHub, you can set up the mirror. The command is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,a.kt)("h4",{id:"git-clone-casnode--casdoor"},"Git clone Casnode & Casdoor"),(0,a.kt)("p",null,"Next, execute the following commands in the folder where you want to store the project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoog.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,a.kt)("p",null,"Now, you can see there are two folders, Casnode and Casdoor."),(0,a.kt)("h3",{id:"\u914d\u7f6e-cassdoor"},"\u914d\u7f6e Cassdoor"),(0,a.kt)("h4",{id:"\u8fd0\u884ccasdoor"},"\u8fd0\u884cCasdoor"),(0,a.kt)("p",null,"We first configure Casdoor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"cd casdoor\ngo build main.go\n")),(0,a.kt)("p",null,"Then edit ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", find"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,a.kt)("p",null,"Change MySQL password provided by the BT panel as ",(0,a.kt)("strong",{parentName:"p"},"123"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nnpm install\nnpm building\ncd ...\nsudo nohup ./main &\n")),(0,a.kt)("h4",{id:"\u914d\u7f6e-casdoor-\u4e2d\u7684-casnode"},"\u914d\u7f6e Casdoor \u4e2d\u7684 Casnode"),(0,a.kt)("p",null,"Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode."),(0,a.kt)("p",null,"The default administrator login account is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin/123"),"."),(0,a.kt)("p",null,"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save."),(0,a.kt)("p",null,"Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum. Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to http://your-ip:7000/callback.Finally, remember the Client ID and Client Secret, and click Save."),(0,a.kt)("p",null,"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u914d\u7f6e-casnode"},"\u914d\u7f6e Casnode"),(0,a.kt)("p",null,"Next we configure in Casnode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd casnode\ngo build main.go\n")),(0,a.kt)("p",null,"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", find"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,a.kt)("p",null,"Change MySQL password provided by the BT panel to ",(0,a.kt)("strong",{parentName:"p"},"123"),", then find casdoorEndpoint, modify it to http://your-ip:8000 (Casdoor backend address), find ",(0,a.kt)("strong",{parentName:"p"},"ClientId")," and ",(0,a.kt)("strong",{parentName:"p"},"ClientSecret"),", and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to your set. Save and exit."),(0,a.kt)("p",null,"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"web/src/Conf.js"),", modify ",(0,a.kt)("inlineCode",{parentName:"p"},"serverUrl")," to http://your-ip:8000 (Casdoor front-end access address), modify ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientId")," to the ClientId of the application just added, modify ",(0,a.kt)("inlineCode",{parentName:"p"},"appName")," to the set application name, and modify ",(0,a.kt)("inlineCode",{parentName:"p"},"organizationName")," to the set organization name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run build\ncd ..\nnohup ./main &\n")),(0,a.kt)("p",null,"Next visit ",(0,a.kt)("strong",{parentName:"p"},"http://your-ip:7000"),", click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,a.kt)("p",null,"For more settings please see ",(0,a.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"Casnode.")))}p.isMDXComponent=!0}}]);