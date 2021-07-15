(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[251],{161:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=t(2122),o=t(9756),i=(t(7294),t(3905)),r=["components"],l={title:"Installation",slug:"/installation"},s=void 0,d={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"These paragraphs will help you deploy Casnode on your server.If you want to install Casnode by BT panel or docker,look BTpanel. docker",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ja/docs/installation",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/installation.md",version:"current",frontMatter:{title:"Installation",slug:"/installation"},sidebar:"tutorialSidebar",previous:{title:"Main Features",permalink:"/ja/docs/main-features"},next:{title:"BTpanel",permalink:"/ja/docs/BTpanel"}},p=[{value:"1. Setup Casdoor",id:"1-setup-casdoor",children:[]},{value:"2. Modify <code>conf/app.conf</code>",id:"2-modify-confappconf",children:[]},{value:"3. Modify <code>web/src/Conf.js</code>",id:"3-modify-websrcconfjs",children:[]},{value:"4. Build front end",id:"4-build-front-end",children:[]},{value:"5. Build back end",id:"5-build-back-end",children:[]},{value:"1. Do step 1-3 above",id:"1-do-step-1-3-above",children:[]},{value:"2. Run back end",id:"2-run-back-end",children:[]},{value:"3. Run front end",id:"3-run-front-end",children:[]},{value:"Notice",id:"notice",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These paragraphs will help you deploy Casnode on your server.If you want to install Casnode by BT panel or docker,look ",(0,i.kt)("a",{parentName:"p",href:"/ja/docs/BTpanel"},"BTpanel.")," ",(0,i.kt)("a",{parentName:"p",href:"/ja/docs/Docker"},"docker")),(0,i.kt)("p",null,"Please clone Casnode first, and follow these steps."),(0,i.kt)("h2",{id:"1-setup-casdoor"},"1. Setup Casdoor"),(0,i.kt)("p",null,"Casnode uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casdoor"},"Casdoor")," to manage members. So you need to create an organization and an application for Casnode in a Casdoor instance."),(0,i.kt)("p",null,"Follow these steps to setup Casdoor for Casnode:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Naviate to Casdoor (Click ",(0,i.kt)("a",{parentName:"li",href:"https://casdoor.org/docs/overview"},"here")," for details of Casdoor)"),(0,i.kt)("li",{parentName:"ul"},'Sign into the organization "built-in"'),(0,i.kt)("li",{parentName:"ul"},'Click "Organizations" in the top bar'),(0,i.kt)("li",{parentName:"ul"},'Click "add" button'),(0,i.kt)("li",{parentName:"ul"},"Remember the Organization name (Of course you can change the organization name first)"),(0,i.kt)("li",{parentName:"ul"},'Click "Applications" in the top bar'),(0,i.kt)("li",{parentName:"ul"},'Click "add" button'),(0,i.kt)("li",{parentName:"ul"},"Remember the Application name (Of course you can change the Application name first)"),(0,i.kt)("li",{parentName:"ul"},'Click "Edit"'),(0,i.kt)("li",{parentName:"ul"},"Select the organization you just created as the application organization"),(0,i.kt)("li",{parentName:"ul"},"Modify the redirect URLs to the forum URL. If you are in a development environment, your redirect URL is http://localhost:3000/callback. If you are in a production environment, your redirect URL is http://yourip:7000/callback"),(0,i.kt)("li",{parentName:"ul"},'Click "Save" and remember the ',(0,i.kt)("inlineCode",{parentName:"li"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Client Secret"))),(0,i.kt)("h2",{id:"2-modify-confappconf"},"2. Modify ",(0,i.kt)("inlineCode",{parentName:"h2"},"conf/app.conf")),(0,i.kt)("p",null,"Here is an explanation to some of those config items:"),(0,i.kt)("p",null,"Database connection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"driverName = mysql\ndataSourceName = root:123@tcp(localhost:3306)/\ndbName = casnode\n")),(0,i.kt)("p",null,"Object Storage Service (Casnode uses OSS to store resources):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'OSSProvider = ""\naccessKeyID     = ""\naccessKeySecret = ""\nOSSCustomDomain = ""\nOSSBasicPath = ""\nOSSRegion = ""\nOSSEndPoint = ""\nOSSBucket = ""\n')),(0,i.kt)("p",null,"If you can not access Google in normal ways, you need to set up a http proxy here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'httpProxy = "127.0.0.1:10808"\n')),(0,i.kt)("p",null,"Casdoor config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'# Your Casdoor endpoint in step 1\ncasdoorEndpoint = http://localhost:8000\n\n# Client ID you copied in step 1\nclientId = xxx\n\n# Client Secret you copied in step 1\nclientSecret = xxx\n\njwtSecret = CasdoorSecret\n\n# Organization name in step 1\ncasdoorOrganization = "casbin-forum"\n')),(0,i.kt)("h2",{id:"3-modify-websrcconfjs"},"3. Modify ",(0,i.kt)("inlineCode",{parentName:"h2"},"web/src/Conf.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export const AuthConfig = {\n  // Your Casdoor endpoint in step 1\n  serverUrl: "http://localhost:7001",\n\n  // Client ID you copied in step 1\n  clientId: "014ae4bd048734ca2dea",\n\n  // Application name you copied in step 1\n  appName: "app-casbin-forum",\n\n  // Organization name you copied in step 1\n  organizationName: "casbin-forum",\n};\n')),(0,i.kt)("h2",{id:"4-build-front-end"},"4. Build front end"),(0,i.kt)("p",null,"In folder ",(0,i.kt)("inlineCode",{parentName:"p"},"web"),", run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run build\n")),(0,i.kt)("p",null,"If you prefer yarn, you can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\nyarn run build\n")),(0,i.kt)("h2",{id:"5-build-back-end"},"5. Build back end"),(0,i.kt)("p",null,"In repository root, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go build\n./casnode\n")),(0,i.kt)("p",null,"Then the Casnode app should run on port 7000. You can setup a nginx proxy pass to manage SSL or something else."),(0,i.kt)("p",null,"For most of site owners, steps above is enough. But if you are a developer, want to contribute to Casnode, or modify the code to suit your environment, then you can run Casnode in debug mode. Please follow these steps to start debug mode:"),(0,i.kt)("h2",{id:"1-do-step-1-3-above"},"1. Do step 1-3 above"),(0,i.kt)("h2",{id:"2-run-back-end"},"2. Run back end"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go run main.go\n")),(0,i.kt)("h2",{id:"3-run-front-end"},"3. Run front end"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run start\n")),(0,i.kt)("p",null,"For yarn users:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run start\n")),(0,i.kt)("p",null,"Now, Casnode runs it's front end at port 3000 and runs it's back end at port 7000. You can modify the code and see want will happen."),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("p",null,"The front end uses these codes to determine whether it is a dev mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export function initServerUrl() {\n  const hostname = window.location.hostname;\n  if (hostname === "localhost") {\n    ServerUrl = `http://${hostname}:7000`;\n  }\n}\n')),(0,i.kt)("p",null,"It means if hostname is ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),", then you are in dev mode. If not, then you are in productive mode. Port of the back end is not same in dev mode and productive mode, so please do not use ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," in your browser in dev mode."))}u.isMDXComponent=!0}}]);