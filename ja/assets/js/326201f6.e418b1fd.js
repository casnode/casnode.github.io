"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[684],{5360:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=a(3117),o=a(102),i=(a(7294),a(3905)),r=["components"],d={},s=void 0,p={unversionedId:"bt-panel",id:"bt-panel",isDocsHomePage:!1,title:"bt-panel",description:"Install Casnode under the Linux BT panel",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/bt-panel.md",sourceDirName:".",slug:"/bt-panel",permalink:"/ja/docs/bt-panel",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/bt-panel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/ja/docs/installation"},next:{title:"docker",permalink:"/ja/docs/docker"}},l=[{value:"Install Casnode under the Linux BT panel",id:"install-casnode-under-the-linux-bt-panel",children:[{value:"Prepare work",id:"prepare-work",children:[],level:3}],level:2}],c={toc:l};function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"The tutorial environment is Ubuntu 20.04  ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("h2",{id:"install-casnode-under-the-linux-bt-panel"},"Install Casnode under the Linux BT panel"),(0,i.kt)("h3",{id:"prepare-work"},"Prepare work"),(0,i.kt)("p",null,"After installing the BT panel, the browser visits the BT panel, selects the software store, searches for and installs MySQL, and then searches for node, you can see that there is a PM2 manager, install the PM2 manager."),(0,i.kt)("p",null,"After the installation is complete, disconnect from the server or restart the server, node will be automatically written into the environment variable."),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"git --version")," to make sure git is , if the prompts Command ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," not found, use ",(0,i.kt)("inlineCode",{parentName:"p"},"apt-get install git")," to install git."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"To access the Casnode successfully, you need to open the ",(0,i.kt)("strong",{parentName:"h5"},"7001")," and ",(0,i.kt)("strong",{parentName:"h5"},"8000")," port. :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"install-golang"},"Install Golang"),(0,i.kt)("p",{parentName:"div"},"The root user executes the following commands to download and decompress the Go binary file to the ",(0,i.kt)("strong",{parentName:"p"},"/usr/local")," directory."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget -c https://dl.google.com/go/go1.16.5.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local\n")),(0,i.kt)("p",{parentName:"div"},"Then we need to add Golang to the environment variables, ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo vim /etc/profile"),", Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),", add the following code in the last line of the file."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export GOROOT=/usr/local/go\nexport PATH=$PATH:$GOROOT/bin\n")),(0,i.kt)("p",{parentName:"div"},"Press ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc")," and enter ",(0,i.kt)("inlineCode",{parentName:"p"},":wq")," to save the file and exit."),(0,i.kt)("p",{parentName:"div"},"Then use command ",(0,i.kt)("inlineCode",{parentName:"p"},"source /etc/profile")," to make the newly added environment variables work."),(0,i.kt)("p",{parentName:"div"},"Now, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"go version"),", you will see the go version, and we installed it successfully. If you can\u2019t connect to GitHub, you can set up the mirror. The command is"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,i.kt)("h4",{parentName:"div",id:"git-clone-casnode--casdoor"},"Git clone Casnode & Casdoor"),(0,i.kt)("p",{parentName:"div"},"Next, execute the following commands in the folder where you want to store the project."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,i.kt)("p",{parentName:"div"},"Now, you can see there are two folders, Casnode and Casdoor."),(0,i.kt)("br",null),(0,i.kt)("h3",{parentName:"div",id:"configure-casdoor"},"Configure Casdoor"),(0,i.kt)("h4",{parentName:"div",id:"run-casdoor"},"Run Casdoor"),(0,i.kt)("p",{parentName:"div"},"We first configure Casdoor."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cd casdoor\ngo build main.go\nvim conf/app.conf\n")),(0,i.kt)("p",{parentName:"div"},"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),", find"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,i.kt)("p",{parentName:"div"},"Change MySQL password provided by the BT panel as ",(0,i.kt)("strong",{parentName:"p"},"123"),", then press ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc"),", enter ",(0,i.kt)("inlineCode",{parentName:"p"},":wq")," to save and exit."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nnpm install\nnpm run build\ncd ..\nsudo nohup ./main &\n")),(0,i.kt)("h4",{parentName:"div",id:"configure-casnode-in-casdoor"},"Configure Casnode in Casdoor"),(0,i.kt)("p",{parentName:"div"},"Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode."),(0,i.kt)("p",{parentName:"div"},"The default administrator login account is admin/123."),(0,i.kt)("p",{parentName:"div"},"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save."),(0,i.kt)("p",{parentName:"div"},"Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum. Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to http://your-ip:7000/callback.Finally, remember the Client ID and Client Secret, and click Save."),(0,i.kt)("p",{parentName:"div"},"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,i.kt)("br",null),(0,i.kt)("h3",{parentName:"div",id:"configure-casnode"},"Configure Casnode"),(0,i.kt)("p",{parentName:"div"},"Next we configure in Casnode."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su\ncd casnode\ngo build main.go\nvim conf/app.conf\n")),(0,i.kt)("p",{parentName:"div"},"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," and find"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,i.kt)("p",{parentName:"div"},"Change MySQL password provided by the BT panel to ",(0,i.kt)("strong",{parentName:"p"},"123"),", then find casdoorEndpoint, modify it to http://your-ip:8000 (Casdoor backend address), find ",(0,i.kt)("strong",{parentName:"p"},"ClientId")," and ",(0,i.kt)("strong",{parentName:"p"},"ClientSecret"),", and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to your set. Save and exit."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nvim src/Conf.js\n")),(0,i.kt)("p",{parentName:"div"},"Modify serverUrl to http://your-ip:8000 (Casdoor front-end access address), modify ClientId to the ClientId of the application just added, modify appname to the set application name, and modify the organization to the set organization name. Save and exit."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run build\ncd ..\nnohup ./main &\n")),(0,i.kt)("p",{parentName:"div"},"Next visit ",(0,i.kt)("strong",{parentName:"p"},"http://your-ip:7000"),", click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,i.kt)("p",{parentName:"div"},"For more settings please see ",(0,i.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"Casnode.")))))}m.isMDXComponent=!0}}]);