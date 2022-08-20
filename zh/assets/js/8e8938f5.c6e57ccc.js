"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[194],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=c(t),u=o,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return t?a.createElement(k,r(r({ref:n},l),{},{components:t})):a.createElement(k,r({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=s;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8581:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=t(3117),o=(t(7294),t(3905));const i={},r=void 0,d={unversionedId:"bt-panel",id:"bt-panel",title:"bt-panel",description:"\u5728 Linux BT \u9762\u677f\u4e0b\u5b89\u88c5 Casnode",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/bt-panel.md",sourceDirName:".",slug:"/bt-panel",permalink:"/zh/docs/bt-panel",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/zh/docs/installation"},next:{title:"docker",permalink:"/zh/docs/docker"}},p={},c=[{value:"\u5728 Linux BT \u9762\u677f\u4e0b\u5b89\u88c5 Casnode",id:"\u5728-linux-bt-\u9762\u677f\u4e0b\u5b89\u88c5-casnode",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3}],l={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u6559\u5b66\u73af\u5883\u4e3a Ubuntu 20.04  ",type:"caution"}),(0,o.kt)("h2",{id:"\u5728-linux-bt-\u9762\u677f\u4e0b\u5b89\u88c5-casnode"},"\u5728 Linux BT \u9762\u677f\u4e0b\u5b89\u88c5 Casnode"),(0,o.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8cBT\u9762\u677f\u540e\uff0c\u6d4f\u89c8\u5668\u8bbf\u95eeBT\u9762\u677f\uff0c\u9009\u62e9\u8f6f\u4ef6\u5546\u5e97\uff0c\u641c\u7d22\u5e76\u5b89\u88c5MySQL\uff0c\u7136\u540e\u641c\u7d22node\uff0c\u53ef\u4ee5\u770b\u5230\u6709\u4e00\u4e2aPM2\u7ba1\u7406\u5668\uff0c\u5b89\u88c5PM2\u7ba1\u7406\u5668"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u65ad\u5f00\u670d\u52a1\u5668\u6216\u91cd\u542f\u670d\u52a1\u5668\uff0cnode\u4f1a\u81ea\u52a8\u5199\u5165\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("p",null,"\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"git --version")," \u4ee5\u786e\u4fddgit \u5b89\u88c5\u548cgit\u7684\u7248\u672c\uff0c \u5982\u679c\u6ca1\u6709\u627e\u5230\u63d0\u793a\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," \uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get \u5b89\u88c5 git")," \u6765\u5b89\u88c5git\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u8981\u6210\u529f\u8bbf\u95eeCasnode \uff0c\u60a8\u9700\u8981\u6253\u5f00 ",(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"7001")," \u548c ",(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"8000")," \u7aef\u53e3\u3002 :::"),(0,o.kt)("h4",{parentName:"admonition",id:"\u5b89\u88c5-golang"},"\u5b89\u88c5 Golang"),(0,o.kt)("p",{parentName:"admonition"},"root\u7528\u6237\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06 Go \u4e8c\u8fdb\u5236\u6587\u4ef6\u4e0b\u8f7d\u5e76\u89e3\u538b\u5230 ",(0,o.kt)("strong",{parentName:"p"},"/usr/local"),"\u76ee\u5f55\u3002"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget -c https://dl.google.com/go/go.16.5.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local\n")),(0,o.kt)("p",{parentName:"admonition"},"Then we need to add Golang to the environment variables, edit ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/profile"),", add the following code in the last line of the file."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u5bfc\u51fa GOROOT=/usr/local/go\n\u5bfc\u51fa PATH=$PATH:$GOROOT/ bin\n")),(0,o.kt)("p",{parentName:"admonition"},"Then use command ",(0,o.kt)("inlineCode",{parentName:"p"},"source /etc/profile")," to make the newly added environment variables work."),(0,o.kt)("p",{parentName:"admonition"},"Now, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"go version"),", you will see the go version, and we installed it successfully. If you can\u2019t connect to GitHub, you can set up the mirror. The command is"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,o.kt)("h4",{parentName:"admonition",id:"git-clone-casnode--casdoor"},"Git clone Casnode & Casdoor"),(0,o.kt)("p",{parentName:"admonition"},"Next, execute the following commands in the folder where you want to store the project."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoog.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,o.kt)("p",{parentName:"admonition"},"Now, you can see there are two folders, Casnode and Casdoor."),(0,o.kt)("br",null),(0,o.kt)("h3",{parentName:"admonition",id:"\u914d\u7f6e-cassdoor"},"\u914d\u7f6e Cassdoor"),(0,o.kt)("h4",{parentName:"admonition",id:"\u8fd0\u884ccasdoor"},"\u8fd0\u884cCasdoor"),(0,o.kt)("p",{parentName:"admonition"},"We first configure Casdoor."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"cd casdoor\ngo build main.go\n")),(0,o.kt)("p",{parentName:"admonition"},"Then edit ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", find"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,o.kt)("p",{parentName:"admonition"},"Change MySQL password provided by the BT panel as ",(0,o.kt)("strong",{parentName:"p"},"123"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nnpm install\nnpm building\ncd ...\nsudo nohup ./main &\n")),(0,o.kt)("h4",{parentName:"admonition",id:"\u914d\u7f6e-casdoor-\u4e2d\u7684-casnode"},"\u914d\u7f6e Casdoor \u4e2d\u7684 Casnode"),(0,o.kt)("p",{parentName:"admonition"},"Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode."),(0,o.kt)("p",{parentName:"admonition"},"The default administrator login account is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin/123"),"."),(0,o.kt)("p",{parentName:"admonition"},"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save."),(0,o.kt)("p",{parentName:"admonition"},"Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum. Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to http://your-ip:7000/callback.Finally, remember the Client ID and Client Secret, and click Save."),(0,o.kt)("p",{parentName:"admonition"},"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,o.kt)("br",null),(0,o.kt)("h3",{parentName:"admonition",id:"\u914d\u7f6e-casnode"},"\u914d\u7f6e Casnode"),(0,o.kt)("p",{parentName:"admonition"},"Next we configure in Casnode."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd casnode\ngo build main.go\n")),(0,o.kt)("p",{parentName:"admonition"},"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", find"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,o.kt)("p",{parentName:"admonition"},"Change MySQL password provided by the BT panel to ",(0,o.kt)("strong",{parentName:"p"},"123"),", then find casdoorEndpoint, modify it to http://your-ip:8000 (Casdoor backend address), find ",(0,o.kt)("strong",{parentName:"p"},"ClientId")," and ",(0,o.kt)("strong",{parentName:"p"},"ClientSecret"),", and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to your set. Save and exit."),(0,o.kt)("p",{parentName:"admonition"},"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"web/src/Conf.js"),", modify ",(0,o.kt)("inlineCode",{parentName:"p"},"serverUrl")," to http://your-ip:8000 (Casdoor front-end access address), modify ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientId")," to the ClientId of the application just added, modify ",(0,o.kt)("inlineCode",{parentName:"p"},"appName")," to the set application name, and modify ",(0,o.kt)("inlineCode",{parentName:"p"},"organizationName")," to the set organization name."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run build\ncd ..\nnohup ./main &\n")),(0,o.kt)("p",{parentName:"admonition"},"Next visit ",(0,o.kt)("strong",{parentName:"p"},"http://your-ip:7000"),", click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,o.kt)("p",{parentName:"admonition"},"For more settings please see ",(0,o.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"Casnode."))))}m.isMDXComponent=!0}}]);