"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[194],{8581:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),d=["components"],r={},p=void 0,s={unversionedId:"bt-panel",id:"bt-panel",isDocsHomePage:!1,title:"bt-panel",description:"\u5728 Linux BT \u9762\u677f\u4e0b\u5b89\u88c5 Casnode",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/bt-panel.md",sourceDirName:".",slug:"/bt-panel",permalink:"/zh/docs/bt-panel",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/bt-panel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/zh/docs/installation"},next:{title:"docker",permalink:"/zh/docs/docker"}},c=[{value:"\u5728 Linux BT \u9762\u677f\u4e0b\u5b89\u88c5 Casnode",id:"\u5728-linux-bt-\u9762\u677f\u4e0b\u5b89\u88c5-casnode",children:[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[],level:3}],level:2}],l={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6559\u5b66\u73af\u5883\u4e3a Ubuntu 20.04  ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("h2",{id:"\u5728-linux-bt-\u9762\u677f\u4e0b\u5b89\u88c5-casnode"},"\u5728 Linux BT \u9762\u677f\u4e0b\u5b89\u88c5 Casnode"),(0,i.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("p",null,"\u5b89\u88c5\u5b8cBT\u9762\u677f\u540e\uff0c\u6d4f\u89c8\u5668\u8bbf\u95eeBT\u9762\u677f\uff0c\u9009\u62e9\u8f6f\u4ef6\u5546\u5e97\uff0c\u641c\u7d22\u5e76\u5b89\u88c5MySQL\uff0c\u7136\u540e\u641c\u7d22node\uff0c\u53ef\u4ee5\u770b\u5230\u6709\u4e00\u4e2aPM2\u7ba1\u7406\u5668\uff0c\u5b89\u88c5PM2\u7ba1\u7406\u5668"),(0,i.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u65ad\u5f00\u670d\u52a1\u5668\u6216\u91cd\u542f\u670d\u52a1\u5668\uff0cnode\u4f1a\u81ea\u52a8\u5199\u5165\u73af\u5883\u53d8\u91cf\u3002"),(0,i.kt)("p",null,"\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"git --version")," \u4ee5\u786e\u4fddgit \u5b89\u88c5\u548cgit\u7684\u7248\u672c\uff0c \u5982\u679c\u6ca1\u6709\u627e\u5230\u63d0\u793a\u547d\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," \uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"apt-get \u5b89\u88c5 git")," \u6765\u5b89\u88c5git\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8981\u6210\u529f\u8bbf\u95eeCasnode \uff0c\u60a8\u9700\u8981\u6253\u5f00 ",(0,i.kt)("strong",{parentName:"h5"},"7001")," \u548c ",(0,i.kt)("strong",{parentName:"h5"},"8000")," \u7aef\u53e3\u3002 :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"\u5b89\u88c5-golang"},"\u5b89\u88c5 Golang"),(0,i.kt)("p",{parentName:"div"},"root\u7528\u6237\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06 Go \u4e8c\u8fdb\u5236\u6587\u4ef6\u4e0b\u8f7d\u5e76\u89e3\u538b\u5230 ",(0,i.kt)("strong",{parentName:"p"},"/usr/local"),"\u76ee\u5f55\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget -c https://dl.google.com/go/go.16.5.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local\n")),(0,i.kt)("p",{parentName:"div"},"Then we need to add Golang to the environment variables, edit ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/profile"),", add the following code in the last line of the file."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u5bfc\u51fa GOROOT=/usr/local/go\n\u5bfc\u51fa PATH=$PATH:$GOROOT/ bin\n")),(0,i.kt)("p",{parentName:"div"},"Then use command ",(0,i.kt)("inlineCode",{parentName:"p"},"source /etc/profile")," to make the newly added environment variables work."),(0,i.kt)("p",{parentName:"div"},"Now, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"go version"),", you will see the go version, and we installed it successfully. If you can\u2019t connect to GitHub, you can set up the mirror. The command is"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,i.kt)("h4",{parentName:"div",id:"git-clone-casnode--casdoor"},"Git clone Casnode & Casdoor"),(0,i.kt)("p",{parentName:"div"},"Next, execute the following commands in the folder where you want to store the project."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoog.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,i.kt)("p",{parentName:"div"},"Now, you can see there are two folders, Casnode and Casdoor."),(0,i.kt)("br",null),(0,i.kt)("h3",{parentName:"div",id:"\u914d\u7f6e-cassdoor"},"\u914d\u7f6e Cassdoor"),(0,i.kt)("h4",{parentName:"div",id:"\u8fd0\u884ccasdoor"},"\u8fd0\u884cCasdoor"),(0,i.kt)("p",{parentName:"div"},"We first configure Casdoor."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cd casdoor\ngo build main.go\n")),(0,i.kt)("p",{parentName:"div"},"Then edit ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", find"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,i.kt)("p",{parentName:"div"},"Change MySQL password provided by the BT panel as ",(0,i.kt)("strong",{parentName:"p"},"123"),"."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nnpm install\nnpm building\ncd ...\nsudo nohup ./main &\n")),(0,i.kt)("h4",{parentName:"div",id:"\u914d\u7f6e-casdoor-\u4e2d\u7684-casnode"},"\u914d\u7f6e Casdoor \u4e2d\u7684 Casnode"),(0,i.kt)("p",{parentName:"div"},"Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode."),(0,i.kt)("p",{parentName:"div"},"The default administrator login account is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/123"),"."),(0,i.kt)("p",{parentName:"div"},"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save."),(0,i.kt)("p",{parentName:"div"},"Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum. Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to http://your-ip:7000/callback.Finally, remember the Client ID and Client Secret, and click Save."),(0,i.kt)("p",{parentName:"div"},"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,i.kt)("br",null),(0,i.kt)("h3",{parentName:"div",id:"\u914d\u7f6e-casnode"},"\u914d\u7f6e Casnode"),(0,i.kt)("p",{parentName:"div"},"Next we configure in Casnode."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd casnode\ngo build main.go\n")),(0,i.kt)("p",{parentName:"div"},"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),", find"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,i.kt)("p",{parentName:"div"},"Change MySQL password provided by the BT panel to ",(0,i.kt)("strong",{parentName:"p"},"123"),", then find casdoorEndpoint, modify it to http://your-ip:8000 (Casdoor backend address), find ",(0,i.kt)("strong",{parentName:"p"},"ClientId")," and ",(0,i.kt)("strong",{parentName:"p"},"ClientSecret"),", and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to your set. Save and exit."),(0,i.kt)("p",{parentName:"div"},"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"web/src/Conf.js"),", modify ",(0,i.kt)("inlineCode",{parentName:"p"},"serverUrl")," to http://your-ip:8000 (Casdoor front-end access address), modify ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientId")," to the ClientId of the application just added, modify ",(0,i.kt)("inlineCode",{parentName:"p"},"appName")," to the set application name, and modify ",(0,i.kt)("inlineCode",{parentName:"p"},"organizationName")," to the set organization name."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run build\ncd ..\nnohup ./main &\n")),(0,i.kt)("p",{parentName:"div"},"Next visit ",(0,i.kt)("strong",{parentName:"p"},"http://your-ip:7000"),", click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,i.kt)("p",{parentName:"div"},"For more settings please see ",(0,i.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"Casnode.")))))}m.isMDXComponent=!0}}]);