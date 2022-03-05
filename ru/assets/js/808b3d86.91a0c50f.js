"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[51],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1431:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={title:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b"},l=void 0,p={unversionedId:"controllers",id:"controllers",isDocsHomePage:!1,title:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b",description:"\u0412 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u0430/\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u0430, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u043e\u043a, \u043a\u0430\u043a",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/controllers.md",sourceDirName:".",slug:"/controllers",permalink:"/ru/docs/controllers",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/controllers.md",tags:[],version:"current",frontMatter:{title:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b"},sidebar:"tutorialSidebar",previous:{title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u044b",permalink:"/ru/docs/routers"},next:{title:"Server Side Rendering",permalink:"/ru/docs/server-side-rendering"}},u=[],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0412 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u0430/\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u0430"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u043e\u043a, \u043a\u0430\u043a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")\n')),(0,i.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0442\u0440\u0435\u0442\u0438\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},'"GET:GetTopics"'),". \u042d\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u0430 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u0438\u043c\u0435\u043d\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"GetTopics")," \u0432 \u043f\u0430\u043a\u0435\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432"),", \u0438 \u044d\u0442\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/get-topics"),"."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."),(0,i.kt)("p",null,":::tip \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",(0,i.kt)("strong",{parentName:"p"},"\u0417\u043e\u043b\u043e\u0442\u0430"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0436\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+F"),"(\u0432\u0437\u0430\u043c\u0435\u043d vscode \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+F")," ), \u0438 \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"func (c *ApiController) FunctionName")," \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u0441\u0442\u0440\u043e \u043d\u0430\u0439\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e. :::"))}f.isMDXComponent=!0}}]);