(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[169],{8845:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=t(2122),o=t(9756),i=(t(7294),t(3905)),r=["components"],l={},s=void 0,c={unversionedId:"BTpanel",id:"BTpanel",isDocsHomePage:!1,title:"BTpanel",description:"Install casnode under the Linux BT panel",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/BTpanel.md",sourceDirName:".",slug:"/BTpanel",permalink:"/zh/docs/BTpanel",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/BTpanel.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/zh/docs/installation"},next:{title:"API Overview",permalink:"/zh/docs/api-overview"}},d=[{value:"Install casnode under the Linux BT panel",id:"install-casnode-under-the-linux-bt-panel",children:[{value:"Prepare work",id:"prepare-work",children:[]},{value:"Configure casdoor",id:"configure-casdoor",children:[]},{value:"Configure casnode",id:"configure-casnode",children:[]}]}],p={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"The tutorial environment is Ubuntu 20.0.4 .  ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("h2",{id:"install-casnode-under-the-linux-bt-panel"},"Install casnode under the Linux BT panel"),(0,i.kt)("h3",{id:"prepare-work"},"Prepare work"),(0,i.kt)("p",null,"After installing the BT panel, the browser visits the pagoda panel, selects the software store, searches for and installs MySQL, and then searches for node, you can see that there is a PM2 manager, install the PM2 manager."),(0,i.kt)("p",null,"After the installation is complete, disconnect from the server or restart the server, node will be automatically written into the environment variable."),(0,i.kt)("p",null,"Enter git --version to view the git version, if it prompts Command'git' not found, use apt-get install git to install git."),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"install-golang"},"Install golang"),(0,i.kt)("p",null,"The root user executes the following commands to download and decompress the Go binary file to the /usr/local directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget -c https://dl.google.com/go/go1.16.5.linux-amd64.targz -O - | sudo tar -xz -C /usr/local\n")),(0,i.kt)("p",null,"Then we need to add go to the environment variables, sudo vim /etc/profile, Enter ",(0,i.kt)("strong",{parentName:"p"},"i"),", write the following code in the last line of the file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export GOROOT=/usr/local/go\nexport PATH=\\$PATH:\\$GOROOT/bin\n")),(0,i.kt)("p",null,"Press ",(0,i.kt)("strong",{parentName:"p"},"Esc")," and enter:wq and source /etc/profile."),(0,i.kt)("p",null,"Now,enter go version,You will see the go version, and we installed it successfully. If you can\u2019t connect to github, you can set up the mirror. The command is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"git-casnode--casdoor"},"Git casnode & casdoor"),(0,i.kt)("p",null,"Next, execute the following commands in the folder where you want to store the project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,i.kt)("p",null,"Now, you can see two folders, casnode and casdoor."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"configure-casdoor"},"Configure casdoor"),(0,i.kt)("h4",{id:"run-casdoor"},"Run casdoor"),(0,i.kt)("p",null,"We first configure casdoor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cd casdoor\ngo build main.go\nvim conf/app.conf\n")),(0,i.kt)("p",null,"Enter ",(0,i.kt)("strong",{parentName:"p"},"i"),",find"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,i.kt)("p",null,"Change 123 to the MySQL password provided by the BT panel,then press ",(0,i.kt)("strong",{parentName:"p"},"Esc"),",enter:wq to save and exit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nnpm install\nnpm run build\ncd ..\nsudo nohup ./main &\n")),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"configure-casnode-in-casdoor"},"Configure casnode in casdoor"),(0,i.kt)("p",null,"Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode."),(0,i.kt)("p",null,"The default administrator login account is admin/123."),(0,i.kt)("p",null,"Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save.",(0,i.kt)("br",{parentName:"p"}),"\n","Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum.Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to http://your-ip:7000/callback.Finally, remember the Client ID and Client Secret, and click Save."),(0,i.kt)("p",null,"Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"configure-casnode"},"Configure casnode"),(0,i.kt)("p",null,"Next we configure in Casnode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su\ncd casnode\ngo build main.go\nvim conf/app.conf\n")),(0,i.kt)("p",null,"Enter i.find"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,i.kt)("p",null,"Change 123 to the MySQL password provided by the BT panel, then find casdoorEndpoint, modify it to http://your-ip:8000 (Casdoor backend address), find clientId and clientSecret, and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to you set. Finally press ",(0,i.kt)("strong",{parentName:"p"},"Esc"),", enter: wq to save and exit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nvim src/Conf.js\n")),(0,i.kt)("p",null,"Press ",(0,i.kt)("strong",{parentName:"p"},"i"),", modify serverUrl to http://your-ip:8000 (Casdoor front-end access address), modify clientId to the clientId of the application just added, modify appname to the set application name, and modify the organization to the set organization name. Click ",(0,i.kt)("strong",{parentName:"p"},"Esc"),", enter: wq to save and exit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run build\ncd ..\nnohup ./main &\n")),(0,i.kt)("p",null,"Next visit http://your-ip:7000, click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode."),(0,i.kt)("p",null,"More settings reference ",(0,i.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"casnode.")))}u.isMDXComponent=!0}}]);