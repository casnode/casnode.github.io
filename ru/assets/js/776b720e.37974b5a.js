"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[669],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8325:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],p={},i=void 0,c={unversionedId:"bt-panel",id:"bt-panel",isDocsHomePage:!1,title:"bt-panel",description:"::caution \u041e\u0431\u043e\u043b\u043e\u0447\u043a\u0430 Ubuntu 20.04",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/bt-panel.md",sourceDirName:".",slug:"/bt-panel",permalink:"/ru/docs/bt-panel",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/bt-panel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",permalink:"/ru/docs/installation"},next:{title:"docker",permalink:"/ru/docs/docker"}},u=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Casnode \u043f\u043e\u0434 \u043f\u0430\u043d\u0435\u043b\u044c Linux BT",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-casnode-\u043f\u043e\u0434-\u043f\u0430\u043d\u0435\u043b\u044c-linux-bt",children:[{value:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0440\u0430\u0431\u043e\u0442\u0435",id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u043a-\u0440\u0430\u0431\u043e\u0442\u0435",children:[{value:"Install Golang",id:"install-golang",children:[],level:4},{value:"Git clone Casnode &amp; Casdoor",id:"git-clone-casnode--casdoor",children:[],level:4}],level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Casdoor",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-casdoor",children:[{value:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044c",id:"\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c-\u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044c",children:[],level:4},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Casnode \u0432 Casdoor",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-casnode-\u0432-casdoor",children:[],level:4}],level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Casnode",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-casnode",children:[],level:3}],level:2}],s={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"::caution \u041e\u0431\u043e\u043b\u043e\u0447\u043a\u0430 Ubuntu 20.04",(0,o.kt)("br",{parentName:"p"}),"\n",":::"),(0,o.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-casnode-\u043f\u043e\u0434-\u043f\u0430\u043d\u0435\u043b\u044c-linux-bt"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Casnode \u043f\u043e\u0434 \u043f\u0430\u043d\u0435\u043b\u044c Linux BT"),(0,o.kt)("h3",{id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u043a-\u0440\u0430\u0431\u043e\u0442\u0435"},"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0440\u0430\u0431\u043e\u0442\u0435"),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u0430\u043d\u0435\u043b\u0438 BT \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043f\u043e\u0441\u0435\u0449\u0430\u0435\u0442 \u043f\u0430\u043d\u0435\u043b\u044c BT, \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f, \u0438\u0449\u0435\u0442 \u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 MySQL, \u0430 \u0437\u0430\u0442\u0435\u043c \u0438\u0449\u0435\u0442 \u0443\u0437\u0435\u043b, \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 PM2, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 PM2."),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u0441\u044c \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440, \u0443\u0437\u0435\u043b \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u044b."),(0,o.kt)("p",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"git --version")," , \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e git \u044d\u0442\u043e , \u0435\u0441\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get install git")," \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 git."),(0,o.kt)("p",null,"::tip \u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a Casnode \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u0440\u0442 ",(0,o.kt)("strong",{parentName:"p"},"7001")," \u0438 ",(0,o.kt)("strong",{parentName:"p"},"8000")," :::"),(0,o.kt)("h4",{id:"install-golang"},"Install Golang"),(0,o.kt)("p",null,"\u041a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438 \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u043a\u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 Go \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,o.kt)("strong",{parentName:"p"},"/usr/local"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget -c https://dl.google.com/go/go1.16.5.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local\n")),(0,o.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c Golang \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo vim /etc/profile"),", Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),", \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434 \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u0444\u0430\u0439\u043b\u0430."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u044d\u043a\u0441\u043f\u043e\u0440\u0442 GOROOT=/usr/local/go\n\u044d\u043a\u0441\u043f\u043e\u0440\u0442 PATH=$PATH:$GOROOT/bin\n")),(0,o.kt)("p",null,"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"Esc")," \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},":wq")," , \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0438 \u0432\u044b\u0439\u0442\u0438."),(0,o.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"source /etc/profile")," , \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u044b."),(0,o.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u0432\u0435\u0434\u0438\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u0432\u0435\u0440\u0441\u0438\u044e"),", \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 go \u0432\u0435\u0440\u0441\u0438\u044e, \u0438 \u043c\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0435\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a GitHub, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0437\u0435\u0440\u043a\u0430\u043b\u043e. \u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"go ruv -w GOPROXY=https://goproxy.cn,direct\n")),(0,o.kt)("h4",{id:"git-clone-casnode--casdoor"},"Git clone Casnode & Casdoor"),(0,o.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432 \u043f\u0430\u043f\u043a\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casdoor.git\ngit clone https://github.com/casbin/casnode.git\n")),(0,o.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0434\u0432\u0435 \u043f\u0430\u043f\u043a\u0438: Casnode \u0438 Casdoor."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-casdoor"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Casdoor"),(0,o.kt)("h4",{id:"\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c-\u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044c"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u0441\u0442\u0440\u044e\u043b\u044c"),(0,o.kt)("p",null,"\u041c\u044b \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c Casdoor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"cd casdoor\n\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u0431\u043e\u0440\u043a\u0435 main.go\nvim conf/app.conf\n")),(0,o.kt)("p",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),", \u043d\u0430\u0439\u0442\u0438"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,o.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c MySQL \u043e\u0442 \u043f\u0430\u043d\u0435\u043b\u0438 BT \u043a\u0430\u043a ",(0,o.kt)("strong",{parentName:"p"},"123"),", \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"Esc"),", \u0432\u0432\u0435\u0434\u0438\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},":wq")," \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0432\u044b\u0445\u043e\u0434\u0430."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nnpm install\nnpm \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c build\ncd ..\nsudo nohup ./main &\n")),(0,o.kt)("h4",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-casnode-\u0432-casdoor"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Casnode \u0432 Casdoor"),(0,o.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u0433\u0434\u0430 Casdoor \u0431\u044b\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d, \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435 http://your-ip:8000 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 Casnode."),(0,o.kt)("p",null,"\u0423\u0447\u0451\u0442\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 admin/123."),(0,o.kt)("p",null,"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e, \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u041f\u0440\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435. \u0417\u0434\u0435\u0441\u044c \u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b \u0435\u0433\u043e \u0432 casbin-forum, \u0430 \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c."),(0,o.kt)("p",null,'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f", \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c" \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c", \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043c\u044f \u043d\u0430 \u0438\u043c\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435, \u044f \u0438\u0437\u043c\u0435\u043d\u0438\u043b \u0435\u0433\u043e \u043d\u0430 app-casbin-forum. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438, \u043c\u043e\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u0437\u0438\u043d\u043e-\u0444\u043e\u0440\u0443\u043c. \u0429\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 Redirect URL, \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 \u043f\u043e\u043b\u0435 http://your-ip:7000/callback.Finally, \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u0435 ID \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 Client Secret, \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c.'),(0,o.kt)("p",null,"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c, \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 casbin-\u0444\u043e\u0440\u0443\u043c \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430. \u041d\u0430\u043a\u043e\u043d\u0435\u0446 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c, \u0442\u0435\u043f\u0435\u0440\u044c \u0443 \u0432\u0430\u0448\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0435\u0441\u0442\u044c \u0443\u0447\u0451\u0442\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c-casnode"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Casnode"),(0,o.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435 \u043c\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043c \u0432 Casnode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su\ncd casnode\n\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u0431\u043e\u0440\u043a\u0435 main.go\nvim conf/app.conf\n")),(0,o.kt)("p",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," \u0438 \u043d\u0430\u0439\u0442\u0438"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dataSourceName = root:123@tcp(localhost:3306)/\n")),(0,o.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c MySQL \u043e\u0442 \u043f\u0430\u043d\u0435\u043b\u0438 BT \u043d\u0430 ",(0,o.kt)("strong",{parentName:"p"},"123"),", \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0439\u0434\u0438\u0442\u0435 casdoorEndpoint, \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0435\u0433\u043e \u043d\u0430 http://your-ip:8000 (\u0431\u044d\u043a\u044d\u043d\u0434 \u0430\u0434\u0440\u0435\u0441), \u043d\u0430\u0439\u0442\u0438 ",(0,o.kt)("strong",{parentName:"p"},"ClientId")," \u0438 ",(0,o.kt)("strong",{parentName:"p"},"ClientSecret"),", \u0438 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0445 \u043a \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u043c\u0443 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0441\u0435\u043a\u0440\u0435\u0442\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043d\u0430\u0439\u0434\u0438\u0442\u0435 casdoorOrganization, \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043a \u043d\u0430\u0431\u043e\u0440\u0443. \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0432\u044b\u0439\u0442\u0438."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nvim src/Conf.js\n")),(0,o.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c serverUrl \u043d\u0430 http://your-ip: 8000 (\u0430\u0434\u0440\u0435\u0441 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432 \u043a\u0430\u0441\u0441\u0443), \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c ID \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u041a\u043b\u0438\u0435\u043d\u0442\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e, \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043c\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043a \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438. \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0432\u044b\u0439\u0442\u0438."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\nnpm \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c build\ncd ..\nnohup ./main &\n")),(0,o.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u0438\u0437\u0438\u0442 ",(0,o.kt)("strong",{parentName:"p"},"http://your-ip:7000"),", \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043b\u043e\u0433\u0438\u043d, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0440\u0430\u043d\u044c\u0448\u0435, user_1/123, \u0432\u044b \u0442\u0435\u043f\u0435\u0440\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438 \u0432 Casnode."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,o.kt)("a",{parentName:"p",href:"https://casnode.org/docs"},"Casnode.")))}d.isMDXComponent=!0}}]);