"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[334],{958:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var i=a(3117),o=a(102),n=(a(7294),a(3905)),s=["components"],r={title:"Migration from DiscuzX",slug:"/migration"},c=void 0,d={unversionedId:"migration",id:"migration",isDocsHomePage:!1,title:"Migration from DiscuzX",description:"Casnode has provided a lot of Go scripts to help users migrate their forums from DiscuzX 3.x to Casnode. The scripts are located at//github.com/casbin/casnode/tree/master/discuzx",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/migration.md",sourceDirName:".",slug:"/migration",permalink:"/fr/docs/migration",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/migration.md",tags:[],version:"current",frontMatter:{title:"Migration from DiscuzX",slug:"/migration"},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/fr/docs/docker"},next:{title:"API Overview",permalink:"/fr/docs/api-overview"}},m=[{value:"Preparation",id:"preparation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Migration",id:"migration",children:[],level:2}],p={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casnode has provided a lot of Go scripts to help users migrate their forums from DiscuzX 3.x to Casnode. The scripts are located at: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,n.kt)("p",null,"A Xorm-supported database (e.g., MySQL) is used by Cansode to store forum data like topics and replies. Object storage (as the form of Casdoor storage provider) is used by Casnode to store images and attachment files."),(0,n.kt)("h2",{id:"preparation"},"Preparation"),(0,n.kt)("p",null,"You need to prepare the following environments before conducting the migration:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A cloud VM (better with above 4 cores and 8GB memory, 8 cores and 16GB is even better), better with Intranet connection with the database for higher speed. This VM is used to run the Go migration scripts."),(0,n.kt)("li",{parentName:"ol"},"A Casnode git repository with the Go migration scripts in the above VM (the Casnode instance can be running or stopped)."),(0,n.kt)("li",{parentName:"ol"},"A running Casdoor instance (better in the same cloud VM for higher speed), with at least one object storage is configured as a Casdoor storage provider. This is used for uploading the images and attachment files of DiscuzX to the object storage."),(0,n.kt)("li",{parentName:"ol"},"Your DiscuzX instance is online.")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"First configure the Casdoor and Casnode correctly based on the their installation guides, make sure they are working normally before migration."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster. :::")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users."),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,n.kt)("p",{parentName:"div"},"Configure the migration script at: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go")," ."),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol"},"dbName: your DiscuzX's DB name"),(0,n.kt)("li",{parentName:"ol"},"discuzxDomain: your DiscuzX's public domain, with trailing slash"),(0,n.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: your DiscuzX's attachment base URL, with trailing slash (you can get it from a attachment file URL of your DiscuzX)"),(0,n.kt)("li",{parentName:"ol"},"avatarPoolBaseUrl: don't change this")),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbName = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')))),(0,n.kt)("h2",{id:"migration"},"Migration"),(0,n.kt)("p",null,"You may see the ",(0,n.kt)("inlineCode",{parentName:"p"},"XXXConcurrency"),' is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurrency = 20\n")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster. :::")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("h3",{parentName:"div",id:"1-user-migration"},"1. User migration"),(0,n.kt)("p",{parentName:"div"},"To migrate all your DiscuzX's UCenter members to Casdoor's users:"),(0,n.kt)("p",{parentName:"div"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"TestAddUsers")," in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,n.kt)("p",{parentName:"div"},"This step will roughly take 2 minutes for 60,000 users."),(0,n.kt)("h3",{parentName:"div",id:"2-user-avatar-migration"},"2. User avatar migration"),(0,n.kt)("p",{parentName:"div"},"To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):"),(0,n.kt)("p",{parentName:"div"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,n.kt)("p",{parentName:"div"},"This step will roughly take 10 minutes for 60,000 users."),(0,n.kt)("h3",{parentName:"div",id:"3-forum-migration"},"3. Forum migration"),(0,n.kt)("p",{parentName:"div"},"To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:"),(0,n.kt)("p",{parentName:"div"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"TestAddForums")," in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,n.kt)("p",{parentName:"div"},"This step will usually finish in 2 seconds."),(0,n.kt)("h3",{parentName:"div",id:"4-thread-and-post-migration"},"4. Thread and post migration"),(0,n.kt)("p",{parentName:"div"},"To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:"),(0,n.kt)("p",{parentName:"div"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,n.kt)("p",{parentName:"div"},"This step will roughly take 7 minutes for 10,000 users."),(0,n.kt)("h2",{parentName:"div",id:"finalization"},"Finalization"),(0,n.kt)("p",{parentName:"div"},"During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"F5")," in Casnode's public homepage."),(0,n.kt)("p",{parentName:"div"},"If you encounter panic when running the migration scripts, contact the Casnode authors."))))}u.isMDXComponent=!0}}]);