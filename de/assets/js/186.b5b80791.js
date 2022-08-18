"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[186],{35:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var r=n(7294),o=n(833),a=n(902);const i=r.createContext(null);function c(e){let{children:t,content:n}=e;const o=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return r.createElement(i.Provider,{value:o},t)}function l(){const e=(0,r.useContext)(i);if(null===e)throw new a.i6("DocProvider");return e}function s(){var e;const{metadata:t,frontMatter:n,assets:a}=l();return r.createElement(o.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=a.image)?e:n.image})}var u=n(4334),d=n(7524),f=n(64);function m(){const{metadata:e}=l();return r.createElement(f.Z,{previous:e.previous,next:e.next})}var p=n(2263),h=n(9960),b=n(5999),v=n(143),y=n(5281),g=n(373),E=n(4477);const _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return r.createElement(b.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return r.createElement(b.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function w(e){const t=_[e.versionMetadata.banner];return r.createElement(t,e)}function O(e){let{versionLabel:t,to:n,onClick:o}=e;return r.createElement(b.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:r.createElement("b",null,r.createElement(h.Z,{to:n,onClick:o},r.createElement(b.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function C(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,p.Z)(),{pluginId:a}=(0,v.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,g.J)(a),{latestDocSuggestion:c,latestVersionSuggestion:l}=(0,v.Jo)(a),s=null!=c?c:(d=l).docs.find((e=>e.id===d.mainDocId));var d;return r.createElement("div",{className:(0,u.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(w,{siteTitle:o,versionMetadata:n})),r.createElement("div",{className:"margin-top--md"},r.createElement(O,{versionLabel:l.label,to:s.path,onClick:()=>i(l.name)})))}function I(e){let{className:t}=e;const n=(0,E.E)();return n.banner?r.createElement(C,{className:t,versionMetadata:n}):null}function S(e){let{className:t}=e;const n=(0,E.E)();return n.badge?r.createElement("span",{className:(0,u.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},r.createElement(b.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return r.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.createElement("b",null,r.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function T(e){let{lastUpdatedBy:t}=e;return r.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.createElement("b",null,t)}}," by {user}")}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:o}=e;return r.createElement("span",{className:y.k.common.lastUpdated},r.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?r.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:o?r.createElement(T,{lastUpdatedBy:o}):""}},"Last updated{atDate}{byUser}"),!1)}var D=n(4881),k=n(1526),L="lastUpdated_vwxv";function R(e){return r.createElement("div",{className:(0,u.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},r.createElement("div",{className:"col"},r.createElement(k.Z,e)))}function P(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:a}=e;return r.createElement("div",{className:(0,u.Z)(y.k.docs.docFooterEditMetaRow,"row")},r.createElement("div",{className:"col"},t&&r.createElement(D.Z,{editUrl:t})),r.createElement("div",{className:(0,u.Z)("col",L)},(n||o)&&r.createElement(M,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:o})))}function j(){const{metadata:e}=l(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:a,tags:i}=e,c=i.length>0,s=!!(t||n||a);return c||s?r.createElement("footer",{className:(0,u.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},c&&r.createElement(R,{tags:i}),s&&r.createElement(P,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:o})):null}var A=n(6043),U=n(3743),x=n(3117),Z="tocCollapsibleButton_TO0P",H="tocCollapsibleButtonExpanded_MG3E";function B(e){let{collapsed:t,...n}=e;return r.createElement("button",(0,x.Z)({type:"button"},n,{className:(0,u.Z)("clean-btn",Z,!t&&H,n.className)}),r.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var q="tocCollapsible_ETCw",V="tocCollapsibleContent_vkbj",Q="tocCollapsibleExpanded_sAul";function W(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:c}=(0,A.u)({initialState:!0});return r.createElement("div",{className:(0,u.Z)(q,!i&&Q,n)},r.createElement(B,{collapsed:i,onClick:c}),r.createElement(A.z,{lazy:!0,className:V,collapsed:i},r.createElement(U.Z,{toc:t,minHeadingLevel:o,maxHeadingLevel:a})))}var G="tocMobile_ITEo";function z(){const{toc:e,frontMatter:t}=l();return r.createElement(W,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(y.k.docs.docTocMobile,G)})}var F=n(9407);function K(){const{toc:e,frontMatter:t}=l();return r.createElement(F.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var J=n(2503),$=n(9588);function X(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=l();return t.hide_title||void 0!==n?null:e.title}();return r.createElement("div",{className:(0,u.Z)(y.k.docs.docMarkdown,"markdown")},n&&r.createElement("header",null,r.createElement(J.Z,{as:"h1"},n)),r.createElement($.Z,null,t))}var Y=n(3438),ee=n(8596),te=n(4996);function ne(e){return r.createElement("svg",(0,x.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function oe(e){let{children:t,href:n,isLast:o}=e;const a="breadcrumbs__link";return o?r.createElement("span",{className:a,itemProp:"name"},t):n?r.createElement(h.Z,{className:a,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:a},t)}function ae(e){let{children:t,active:n,index:o,addMicrodata:a}=e;return r.createElement("li",(0,x.Z)({},a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(o+1)}))}function ie(){const e=(0,te.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(h.Z,{"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,u.Z)("breadcrumbs__link",re.breadcrumbsItemLink),href:e},r.createElement(ne,{className:re.breadcrumbHomeIcon})))}function ce(){const e=(0,Y.s1)(),t=(0,ee.Ns)();return e?r.createElement("nav",{className:(0,u.Z)(y.k.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(ie,null),e.map(((t,n)=>{const o=n===e.length-1;return r.createElement(ae,{key:n,active:o,index:n,addMicrodata:!!t.href},r.createElement(oe,{href:t.href,isLast:o},t.label))})))):null}var le="docItemContainer_Djhp",se="docItemCol_VOVn";function ue(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=l(),n=(0,d.i)(),o=e.hide_table_of_contents,a=!o&&t.length>0;return{hidden:o,mobile:a?r.createElement(z,null):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:r.createElement(K,null)}}();return r.createElement("div",{className:"row"},r.createElement("div",{className:(0,u.Z)("col",!n.hidden&&se)},r.createElement(I,null),r.createElement("div",{className:le},r.createElement("article",null,r.createElement(ce,null),r.createElement(S,null),n.mobile,r.createElement(X,null,t),r.createElement(j,null)),r.createElement(m,null))),n.desktop&&r.createElement("div",{className:"col col--3"},n.desktop))}function de(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return r.createElement(c,{content:e.content},r.createElement(o.FG,{className:t},r.createElement(s,null),r.createElement(ue,null,r.createElement(n,null))))}},49:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3117),o=n(7294),a=n(5999),i=n(2244);function c(e){const{previous:t,next:n}=e;return o.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&o.createElement(i.Z,(0,r.Z)({},t,{subLabel:o.createElement(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&o.createElement(i.Z,(0,r.Z)({},n,{subLabel:o.createElement(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},9407:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(3117),o=n(7294),a=n(4334),i=n(3743),c="tableOfContents_bqdL";function l(e){let{className:t,...n}=e;return o.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar",t)},o.createElement(i.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3117),o=n(7294),a=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):r.push(o)})),r}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:r}=t;const o=e.find((e=>l(e).top>=r));if(o){var a;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(o))?o:null!=(a=e[e.indexOf(o)-1])?a:null}return null!=(n=e[e.length-1])?n:null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,o.useRef)(void 0),n=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let o=t;o<=n;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),l=s(c,{anchorTopOffset:n.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function f(e){let{toc:t,className:n,linkClassName:r,isChild:a}=e;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}var m=o.memo(f);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:f,...p}=e;const h=(0,a.L)(),b=null!=u?u:h.tableOfContents.minHeadingLevel,v=null!=f?f:h.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,o.useMemo)((()=>c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:b,maxHeadingLevel:v});return d((0,o.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:b,maxHeadingLevel:v}}),[l,s,b,v])),o.createElement(m,(0,r.Z)({toc:y,className:n,linkClassName:l},p))}},4477:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return i}});var r=n(7294),o=n(902);const a=r.createContext(null);function i(e){let{children:t,version:n}=e;return r.createElement(a.Provider,{value:n},t)}function c(){const e=(0,r.useContext)(a);if(null===e)throw new o.i6("DocsVersionProvider");return e}},2449:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=c(n(7294)),o=c(n(5697)),a=n(6674),i=n(7990);function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,n,o,c=p(l);function l(){return d(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(i.COMMENT_COUNT_SCRIPT_ID)?v():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),i.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)(i.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,a.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,a=u(e,["shortname","config","children","className"]),c=o?" ".concat(o):"";return r.default.createElement("span",s({},a,{className:"".concat(i.COMMENT_COUNT_CLASS).concat(c),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}])&&f(t.prototype,n),o&&f(t,o),l}(r.default.Component);t.CommentCount=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},5890:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(n(7294)),o=i(n(5697)),a=n(7990);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,o,a=m(i);function i(){return u(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,s(e,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",l({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&d(t.prototype,n),o&&d(t,o),i}(r.default.Component);t.CommentEmbed=b,b.defaultProps={showMedia:!0,showParentComment:!0,width:a.COMMENT_EMBED_WIDTH,height:a.COMMENT_EMBED_HEIGHT},b.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},4811:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=c(n(7294)),o=c(n(5697)),a=n(6674),i=n(7990);function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,n,o,c=p(l);function l(){return d(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(i.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),i.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)(i.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById(i.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,a.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),i.CALLBACKS.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,u(e,["shortname","config"]));return r.default.createElement("div",s({},t,{id:i.THREAD_ID}))}}])&&f(t.prototype,n),o&&f(t,o),l}(r.default.Component);t.DiscussionEmbed=v,v.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},4573:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var r=c(n(7294)),o=c(n(5697)),a=n(6674),i=n(7990);function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,n,o,c=p(l);function l(){return d(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(i.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),i.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,a.removeScript)(i.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(i.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,a.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,u(e,["shortname","config"]));return r.default.createElement("div",s({},t,{id:i.RECOMMENDATIONS_ID}))}}])&&f(t.prototype,n),o&&f(t,o),l}(r.default.Component);t.Recommendations=v,v.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},7990:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0;t.THREAD_ID="disqus_thread";t.EMBED_SCRIPT_ID="dsq-embed-scr";t.COMMENT_COUNT_CLASS="disqus-comment-count";t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";t.COMMENT_EMBED_WIDTH=420;t.COMMENT_EMBED_HEIGHT=320;t.RECOMMENDATIONS_ID="disqus_recommendations";t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:function(e,t,n){Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return a.DiscussionEmbed}});var r=n(2449),o=n(5890),a=n(4811),i=n(4573);r.CommentCount,o.CommentEmbed,a.DiscussionEmbed,i.Recommendations},6674:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(e){return e.remove()}))},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},c=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),c&&e.apply(o,a)}},t.isReactElement=c,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var l=r.value;if("object"===a(t[l])){if(e(t[l],n[l]))return!0}else if(t[l]!==n[l]&&!c(t[l]))return!0}}catch(s){o.e(s)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}}}]);