"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[154],{3500:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var i=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],r={title:"Migration from DiscuzX"},c=void 0,l={unversionedId:"migration",id:"migration",isDocsHomePage:!1,title:"Migration from DiscuzX",description:"Casnode has provided a lot of Go scripts to help users migrate their forums from DiscuzX 3.x to Casnode. The scripts are located at//github.com/casbin/casnode/tree/master/discuzx",source:"@site/docs/migration.md",sourceDirName:".",slug:"/migration",permalink:"/docs/migration",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/migration.md",tags:[],version:"current",frontMatter:{title:"Migration from DiscuzX"},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/docs/docker"},next:{title:"API Overview",permalink:"/docs/api-overview"}},d=[{value:"Preparation",id:"preparation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Migration",id:"migration",children:[{value:"1. User migration",id:"1-user-migration",children:[],level:3},{value:"2. User avatar migration",id:"2-user-avatar-migration",children:[],level:3},{value:"3. Forum migration",id:"3-forum-migration",children:[],level:3},{value:"4. Thread and post migration",id:"4-thread-and-post-migration",children:[],level:3}],level:2},{value:"Finalization",id:"finalization",children:[],level:2}],m={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casnode has provided a lot of Go scripts to help users migrate their forums from DiscuzX 3.x to Casnode. The scripts are located at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/tree/master/discuzx"},"https://github.com/casbin/casnode/tree/master/discuzx")),(0,o.kt)("p",null,"A Xorm-supported database (e.g., MySQL) is used by Cansode to store forum data like topics and replies. Object storage (as the form of Casdoor storage provider) is used by Casnode to store images and attachment files."),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"You need to prepare the following environments before conducting the migration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A cloud VM (better with above 4 cores and 8GB memory, 8 cores and 16GB is even better), better with Intranet connection with the database for higher speed. This VM is used to run the Go migration scripts. "),(0,o.kt)("li",{parentName:"ol"},"A Casnode git repository with the Go migration scripts in the above VM (the Casnode instance can be running or stopped)."),(0,o.kt)("li",{parentName:"ol"},"A running Casdoor instance (better in the same cloud VM for higher speed), with at least one object storage is configured as a Casdoor storage provider. This is used for uploading the images and attachment files of DiscuzX to the object storage."),(0,o.kt)("li",{parentName:"ol"},"Your DiscuzX instance is online.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"First configure the Casdoor and Casnode correctly based on the their installation guides, make sure they are working normally before migration."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster."))),(0,o.kt)("p",null,"Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorDbName = casdoor\n")),(0,o.kt)("p",null,"Configure the migration script at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/conf.go"},"https://github.com/casbin/casnode/blob/master/discuzx/conf.go")," ."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"dbName: your DiscuzX's DB name"),(0,o.kt)("li",{parentName:"ol"},"discuzxDomain: your DiscuzX's public domain, with trailing slash"),(0,o.kt)("li",{parentName:"ol"},"discuzxAttachmentBaseUrl: your DiscuzX's attachment base URL, with trailing slash (you can get it from a attachment file URL of your DiscuzX)"),(0,o.kt)("li",{parentName:"ol"},"avatarPoolBaseUrl: don't change this")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package discuzx\n\nvar dbName = "ultrax"\nvar discuzxDomain = "https://www.discuz.net/"\nvar discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In Casnode, we assume you use the same DB username and password for all 3 DBs: Casnode's DB, Casdoor's DB and DiscuzX's DB. So make sure this DB user can access all 3 DBs."))),(0,o.kt)("h2",{id:"migration"},"Migration"),(0,o.kt)("p",null,"You may see the ",(0,o.kt)("inlineCode",{parentName:"p"},"XXXConcurrency"),' is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var SyncAvatarsConcurrency = 20\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster."))),(0,o.kt)("h3",{id:"1-user-migration"},"1. User migration"),(0,o.kt)("p",null,"To migrate all your DiscuzX's UCenter members to Casdoor's users:"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"TestAddUsers")," in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/user_test.go")),(0,o.kt)("p",null,"This step will roughly take 2 minutes for 60,000 users."),(0,o.kt)("h3",{id:"2-user-avatar-migration"},"2. User avatar migration"),(0,o.kt)("p",null,"To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"TestSyncAvatars")," in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go")),(0,o.kt)("p",null,"This step will roughly take 10 minutes for 60,000 users."),(0,o.kt)("h3",{id:"3-forum-migration"},"3. Forum migration"),(0,o.kt)("p",null,"To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"TestAddForums")," in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go")),(0,o.kt)("p",null,"This step will usually finish in 2 seconds."),(0,o.kt)("h3",{id:"4-thread-and-post-migration"},"4. Thread and post migration"),(0,o.kt)("p",null,"To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"TestAddThreads")," in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go"},"https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go")),(0,o.kt)("p",null,"This step will roughly take 7 minutes for 10,000 users."),(0,o.kt)("h2",{id:"finalization"},"Finalization"),(0,o.kt)("p",null,"During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5")," in Casnode's public homepage."),(0,o.kt)("p",null,"If you encounter panic when running the migration scripts, contact the Casnode authors."))}u.isMDXComponent=!0}}]);