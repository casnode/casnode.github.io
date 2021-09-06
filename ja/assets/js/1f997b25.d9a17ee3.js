"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[534],{1688:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return g}});var a=t(7462),i=t(3366),o=t(7294),r=t(3905),l=t(9443);var A=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6010),d="tabItem_1uMI",u="tabItemActive_2DSg";var p=function(e){var n,t=e.lazy,a=e.block,i=e.defaultValue,r=e.values,l=e.groupId,p=e.className,c=o.Children.toArray(e.children),f=null!=r?r:c.map((function(e){return{value:e.props.value,label:e.props.label}})),m=null!=i?i:null==(n=c.find((function(e){return e.props.default})))?void 0:n.props.value,v=A(),b=v.tabGroupChoices,g=v.setTabGroupChoices,I=(0,o.useState)(m),y=I[0],k=I[1],N=[];if(null!=l){var T=b[l];null!=T&&T!==y&&f.some((function(e){return e.value===T}))&&k(T)}var R=function(e){var n=e.currentTarget,t=N.indexOf(n),a=f[t].value;k(a),null!=l&&(g(l,a),setTimeout((function(){var e,t,a,i,o,r,l,A;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,A=r.innerWidth,t>=0&&o<=A&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},h=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;t=N[a]||N[0];break;case"ArrowLeft":var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":y===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:h,onFocus:R,onClick:R},null!=t?t:n)}))),t?(0,o.cloneElement)(c.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))};var c=function(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)},f=["components"],m={title:"Installation",slug:"/installation"},v=void 0,b={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"These paragraphs will help you deploy Casnode on your server. If you want to install Casnode by BT panel or Docker, please look BT panel and Docker.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/ja/docs/installation",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/installation.mdx",tags:[],version:"current",frontMatter:{title:"Installation",slug:"/installation"},sidebar:"tutorialSidebar",previous:{title:"Main Features",permalink:"/ja/docs/main-features"},next:{title:"BTpanel",permalink:"/ja/docs/BTpanel"}},g=[{value:"Production Environment",id:"production-environment",children:[{value:"1. Setup Casdoor",id:"1-setup-casdoor",children:[]},{value:"2. Modify <code>conf/app.conf</code>",id:"2-modify-confappconf",children:[]},{value:"3. Modify <code>web/src/Conf.js</code>",id:"3-modify-websrcconfjs",children:[]},{value:"4. Build front end",id:"4-build-front-end",children:[]},{value:"5. Build back end",id:"5-build-back-end",children:[]}]},{value:"Dev Environment",id:"dev-environment",children:[{value:"1. Do step 1-3 above",id:"1-do-step-1-3-above",children:[]},{value:"4. Run back end",id:"4-run-back-end",children:[]},{value:"5. Run front end",id:"5-run-front-end",children:[]}]}],I={toc:g};function y(e){var n=e.components,o=(0,i.Z)(e,f);return(0,r.kt)("wrapper",(0,a.Z)({},I,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These paragraphs will help you deploy Casnode on your server. If you want to install Casnode by BT panel or Docker, please look ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/BTpanel"},"BT panel")," and ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/Docker"},"Docker"),"."),(0,r.kt)("p",null,"Please clone Casnode first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casbin/casnode\n")),(0,r.kt)("p",null,"and follow these steps to easily setup your own forum!"),(0,r.kt)("h2",{id:"production-environment"},"Production Environment"),(0,r.kt)("h3",{id:"1-setup-casdoor"},"1. Setup Casdoor"),(0,r.kt)("p",null,"Casnode uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casdoor"},"Casdoor")," to manage members. So you need to create an organization and an application for Casnode in a Casdoor instance."),(0,r.kt)("p",null,"Follow these steps to setup Casdoor for Casnode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Navigate to Casdoor (Click ",(0,r.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/overview"},"here")," for details of Casdoor)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Sign into the organization "built-in"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Organizations")," in the top bar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"add")," button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remember the Organization name, here I use ",(0,r.kt)("strong",{parentName:"p"},"casbin-forum")," as my organization name: ",(0,r.kt)("img",{alt:"organization",src:t(3461).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Applications")," in the top bar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"add")," button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remember the Application name, here I use forum as my application name:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Edit")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"application",src:t(3619).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the organization you just created as the application organization")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"select",src:t(4694).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify the redirect URLs to the forum URL. If you are in a developing environment, your redirect URL is ",(0,r.kt)("strong",{parentName:"li"},"http://localhost:3000/callback"),". If you are in a production environment, your redirect URL is ",(0,r.kt)("strong",{parentName:"li"},"http://yourip:7000/callback"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"redirecturls",src:t(2195).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save")," and remember the ",(0,r.kt)("inlineCode",{parentName:"li"},"Client ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Client Secret"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"client",src:t(5594).Z})),(0,r.kt)("h3",{id:"2-modify-confappconf"},"2. Modify ",(0,r.kt)("inlineCode",{parentName:"h3"},"conf/app.conf")),(0,r.kt)("p",null,"Here is an explanation of the config items:"),(0,r.kt)("p",null,"Database connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:"{2}","{2}":!0},"driverName = mysql\ndataSourceName = root:123@tcp(localhost:3306)/\ndbName = casnode\n")),(0,r.kt)("p",null,"Object Storage Service (Casnode uses OSS to store resources):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},'OSSProvider = ""\naccessKeyID     = ""\naccessKeySecret = ""\nOSSCustomDomain = ""\nOSSBasicPath = ""\nOSSRegion = ""\nOSSEndPoint = ""\nOSSBucket = ""\n')),(0,r.kt)("p",null,"If you can not access Google in normal ways, you need to set up a http proxy here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},'httpProxy = "127.0.0.1:10808"\n')),(0,r.kt)("p",null,"Casdoor config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:"{2,5,8,13}","{2,5,8,13}":!0},'# Your Casdoor endpoint in step 1\ncasdoorEndpoint = http://localhost:8000\n\n# Client ID you copied in step 1\nclientId = xxx\n\n# Client Secret you copied in step 1\nclientSecret = xxx\n\njwtSecret = CasdoorSecret\n\n# Organization name in step 1\ncasdoorOrganization = "casbin-forum"\n')),(0,r.kt)("h3",{id:"3-modify-websrcconfjs"},"3. Modify ",(0,r.kt)("inlineCode",{parentName:"h3"},"web/src/Conf.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,6,9,12}","{3,6,9,12}":!0},'export const AuthConfig = {\n  // Your Casdoor endpoint in step 1\n  serverUrl: "http://localhost:7001",\n\n  // Client ID you copied in step 1\n  clientId: "014ae4bd048734ca2dea",\n\n  // Application name you copied in step 1\n  appName: "app-casbin-forum",\n\n  // Organization name you copied in step 1\n  organizationName: "casbin-forum",\n};\n')),(0,r.kt)("h3",{id:"4-build-front-end"},"4. Build front end"),(0,r.kt)("p",null,"In folder ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),", run the following commands:"),(0,r.kt)(p,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,r.kt)(c,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install && yarn run build\n"))),(0,r.kt)(c,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install && npm run build\n")))),(0,r.kt)("h3",{id:"5-build-back-end"},"5. Build back end"),(0,r.kt)("p",null,"In repository root, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go build\n./casnode\n")),(0,r.kt)("p",null,"Then the Casnode app should run on port 7000. You can setup a nginx proxy pass to manage SSL or something else."),(0,r.kt)("p",null,"For most of site owners who want to develop a forum using Casnode, steps above is enough. But if you are a developer, want to contribute to Casnode, or modify the code to suit your own environment, then you can run Casnode in the developing mode. Please follow these steps to start developing mode:"),(0,r.kt)("h2",{id:"dev-environment"},"Dev Environment"),(0,r.kt)("h3",{id:"1-do-step-1-3-above"},"1. Do step 1-3 above"),(0,r.kt)("h3",{id:"4-run-back-end"},"4. Run back end"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"go run main.go\n")),(0,r.kt)("h3",{id:"5-run-front-end"},"5. Run front end"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," folder:"),(0,r.kt)(p,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,r.kt)(c,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\nyarn run start\n"))),(0,r.kt)(c,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run start\n")))),(0,r.kt)("p",null,"Now, Casnode runs its front end at port 3000 and runs it's back end at port 7000. You can modify the code and see what will happen."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"The front end uses these codes to determine whether it is a dev mode:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export function initServerUrl() {\n  const hostname = window.location.hostname;\n  if (hostname === "localhost") {\n    ServerUrl = `http://${hostname}:7000`;\n  }\n}\n')),(0,r.kt)("p",{parentName:"div"},"It means if hostname is ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", then you are in dev mode. If not, then you are in productive mode. Port of the back end is not same in dev mode and productive mode, so please do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," in your browser in dev mode. :::"))))}y.isMDXComponent=!0},3619:function(e,n,t){n.Z=t.p+"assets/images/application-c5bbb1ad79fd4a5fed9e878ac2e1f1e7.png"},4694:function(e,n){n.Z="data:image/png;base64,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"},5594:function(e,n){n.Z="data:image/png;base64,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"},3461:function(e,n,t){n.Z=t.p+"assets/images/organization-adeb2572cb281ed207d1030b61eb4af8.png"},2195:function(e,n,t){n.Z=t.p+"assets/images/redirecturls-915163abce545efe90f59013666b4c8b.png"}}]);