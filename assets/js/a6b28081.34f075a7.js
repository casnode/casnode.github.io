"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[3150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=n,f=u["".concat(d,".").concat(g)]||u[g]||p[g]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={title:"Configure File Storage, SMS and Email",description:"how to configure Casdoor to provide SMS, Email, and Storage functionality for the Casnode application",keywords:["Provider"],authors:["yehong-z"]},i=void 0,s={unversionedId:"provider",id:"provider",title:"Configure File Storage, SMS and Email",description:"how to configure Casdoor to provide SMS, Email, and Storage functionality for the Casnode application",source:"@site/docs/provider.md",sourceDirName:".",slug:"/provider",permalink:"/docs/provider",draft:!1,editUrl:"https://github.com/casnode/casnode-website/edit/master/docs/provider.md",tags:[],version:"current",frontMatter:{title:"Configure File Storage, SMS and Email",description:"how to configure Casdoor to provide SMS, Email, and Storage functionality for the Casnode application",keywords:["Provider"],authors:["yehong-z"]},sidebar:"tutorialSidebar",previous:{title:"Migration from DiscuzX",permalink:"/docs/migration"},next:{title:"API reference",permalink:"/docs/category/api-reference"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Configure the SMS Provider",id:"step-1-configure-the-sms-provider",level:2},{value:"Step 2: Configure the Email Provider",id:"step-2-configure-the-email-provider",level:2},{value:"Step 3: Configure the Storage Provider",id:"step-3-configure-the-storage-provider",level:2},{value:"Step 4: Add SMS, SMTP and Storage Providers to Casnode Application",id:"step-4-add-sms-smtp-and-storage-providers-to-casnode-application",level:2},{value:"Step 5: Test the Configuration",id:"step-5-test-the-configuration",level:2}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This document will guide you on how to configure Casdoor to use SMS, Email, and Storage providers to enable the respective functionality for the Casnode application.\nBy properly configuring the SMS, Email, and Storage providers,\nyou can allow the Casnode application to send SMS and Email notifications to users, as well as utilize cloud storage services."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before getting started with the configuration,\nplease ensure that the following prerequisites are met:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You have successfully installed and deployed Casdoor and the Casnode application."),(0,n.kt)("li",{parentName:"ol"},"You have a valid SMS provider account and possess the necessary API key or authentication credentials."),(0,n.kt)("li",{parentName:"ol"},"You have a valid Email provider account and possess the SMTP server information and account credentials."),(0,n.kt)("li",{parentName:"ol"},"You have a valid Storage provider account and possess the necessary access credentials.")),(0,n.kt)("h2",{id:"step-1-configure-the-sms-provider"},"Step 1: Configure the SMS Provider"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the Casdoor Management Interface and Log in using your administrator account."),(0,n.kt)("li",{parentName:"ol"},"Adding an SMS provider.\n",(0,n.kt)("img",{alt:"add provider",src:r(6281).Z,width:"1912",height:"775"})),(0,n.kt)("li",{parentName:"ol"},"Fill in the appropriate parameters based on the requirements of your SMS provider. This generally includes the API key, API URL, etc.\n",(0,n.kt)("img",{alt:"add provider",src:r(8947).Z,width:"945",height:"734"})),(0,n.kt)("li",{parentName:"ol"},"Save the configuration changes.")),(0,n.kt)("h2",{id:"step-2-configure-the-email-provider"},"Step 2: Configure the Email Provider"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the Casdoor Management Interface and log in using your administrator account."),(0,n.kt)("li",{parentName:"ol"},"Add an SMTP Email provider."),(0,n.kt)("li",{parentName:"ol"},"Fill in the appropriate parameters based on the requirements of your Email provider. This generally includes the SMTP server address, port number, account credentials, etc.\n",(0,n.kt)("img",{alt:"smtp",src:r(1626).Z,width:"869",height:"850"})),(0,n.kt)("li",{parentName:"ol"},"Save the configuration changes.")),(0,n.kt)("h2",{id:"step-3-configure-the-storage-provider"},"Step 3: Configure the Storage Provider"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the Casdoor Management Interface and log in using your administrator account."),(0,n.kt)("li",{parentName:"ol"},"Add a Storage provider."),(0,n.kt)("li",{parentName:"ol"},"Fill in the appropriate parameters based on the requirements of your Storage provider. This generally includes the Access Key ID, Secret Access Key, region, and bucket name."),(0,n.kt)("li",{parentName:"ol"},"Save the configuration changes.")),(0,n.kt)("h2",{id:"step-4-add-sms-smtp-and-storage-providers-to-casnode-application"},"Step 4: Add SMS, SMTP and Storage Providers to Casnode Application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the Casdoor Management Interface and Log in using your administrator account."),(0,n.kt)("li",{parentName:"ol"},"Open the Casnode Application.\n",(0,n.kt)("img",{alt:"add provider2",src:r(7375).Z,width:"1857",height:"730"})),(0,n.kt)("li",{parentName:"ol"},"Add Providers to the Application.\n",(0,n.kt)("img",{alt:"add provider3",src:r(7908).Z,width:"1811",height:"826"}))),(0,n.kt)("h2",{id:"step-5-test-the-configuration"},"Step 5: Test the Configuration"),(0,n.kt)("p",null,"Once the SMS, SMTP and Storage providers are configured,\nyou can trigger the respective SMS and Email notification features (such as reply), and upload/download files\nthrough the Casnode application and verify if notifications are received and storage is functional as expected.\nThis will help validate the correctness of the configuration."))}p.isMDXComponent=!0},6281:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/addprovider-2f45fcd3cc05282e790ffc806489e4b0.png"},7375:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/addprovider2-ce910cb111be1544907a1915eb335063.png"},7908:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/addprovider3-8fa567a1eb9078675c451f4b0d1a9591.png"},8947:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/config_sms-c7f2c7a81717bca58bc06c2e13416cfe.png"},1626:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/smtp-2e158d9f0e8aeed6fa97d8e231f3ce0b.png"}}]);