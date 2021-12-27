"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[710],{676:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),o=n(6010),a=n(4973),i=n(9558);function l(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return r.createElement(a.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.createElement("b",null,r.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function c(e){var t=e.lastUpdatedBy;return r.createElement(a.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.createElement("b",null,t)}}," by {user}")}function s(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,o=e.lastUpdatedBy;return r.createElement("span",{className:i.kM.common.lastUpdated},r.createElement(a.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?r.createElement(l,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:o?r.createElement(c,{lastUpdatedBy:o}):""}},"Last updated{atDate}{byUser}"),!1)}var u=n(6146),d=n(7682),f="lastUpdated_mt2f";function m(e){return r.createElement("div",{className:(0,o.Z)(i.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},r.createElement("div",{className:"col"},r.createElement(d.Z,e)))}function p(e){var t=e.editUrl,n=e.lastUpdatedAt,a=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return r.createElement("div",{className:(0,o.Z)(i.kM.docs.docFooterEditMetaRow,"row")},r.createElement("div",{className:"col"},t&&r.createElement(u.Z,{editUrl:t})),r.createElement("div",{className:(0,o.Z)("col",f)},(n||a)&&r.createElement(s,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:a})))}function h(e){var t=e.content.metadata,n=t.editUrl,a=t.lastUpdatedAt,l=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,s=t.tags,u=s.length>0,d=!!(n||a||c);return u||d?r.createElement("footer",{className:(0,o.Z)(i.kM.docs.docFooter,"docusaurus-mt-lg")},u&&r.createElement(m,{tags:s}),d&&r.createElement(p,{editUrl:n,lastUpdatedAt:a,lastUpdatedBy:c,formattedLastUpdatedAt:l})):r.createElement(r.Fragment,null)}},1101:function(e,t,n){var r=n(7294),o=n(6742),a=n(4973);t.Z=function(e){var t=e.metadata;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t.previous&&r.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),r.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),r.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))}},4474:function(e,t,n){var r=n(7294),o=n(2263),a=n(6742),i=n(4973),l=n(907),c=n(9558),s=n(6010);var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=u[e.versionMetadata.banner];return r.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,o=e.onClick;return r.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:r.createElement("b",null,r.createElement(a.Z,{to:n,onClick:o},r.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function m(e){var t,n=e.versionMetadata,a=(0,o.Z)().siteConfig.title,i=(0,l.gA)({failfast:!0}).pluginId,u=(0,c.J)(i).savePreferredVersionName,m=(0,l.Jo)(i),p=m.latestDocSuggestion,h=m.latestVersionSuggestion,y=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return r.createElement("div",{className:(0,s.Z)(c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(d,{siteTitle:a,versionMetadata:n})),r.createElement("div",{className:"margin-top--md"},r.createElement(f,{versionLabel:h.label,to:y.path,onClick:function(){return u(h.name)}})))}t.Z=function(e){var t=e.versionMetadata;return t.banner?r.createElement(m,{versionMetadata:t}):r.createElement(r.Fragment,null)}},6146:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),o=n(4973),a=n(7462),i=n(3366),l=n(6010),c="iconEdit_mS5F",s=["className"],u=function(e){var t=e.className,n=(0,i.Z)(e,s);return r.createElement("svg",(0,a.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(c,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=n(9558);function f(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(u,null),r.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:function(e,t,n){n.d(t,{N:function(){return f},Z:function(){return m}});var r=n(3366),o=n(7462),a=n(7294),i=n(6010),l=n(4973),c=n(9558),s="anchorWithStickyNavbar_y2LR",u="anchorWithHideOnScrollNavbar_3ly5",d=["id"],f=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,o.Z)({},t,{id:void 0}),t.children))},m=function(e){return"h1"===e?f:(t=e,function(e){var n,f=e.id,m=(0,r.Z)(e,d),p=(0,c.LU)().navbar.hideOnScroll;return f?a.createElement(t,(0,o.Z)({},m,{className:(0,i.Z)("anchor",(n={},n[u]=p,n[s]=!p,n)),id:f}),m.children,a.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+f,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,m)});var t}},7588:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),o=n(3366),a=n(7294),i=n(6010),l=n(5002),c="tableOfContents_vrFS",s=["className"];var u=function(e){var t=e.className,n=(0,o.Z)(e,s);return a.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},a.createElement(l.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},2317:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),o=n(6010),a=n(4973),i=n(9558),l="tocCollapsible_aw-L",c="tocCollapsibleButton_zr6a",s="tocCollapsibleContent_0dom",u="tocCollapsibleExpanded_FSiv",d=n(5002);function f(e){var t,n=e.toc,f=e.className,m=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,i.uR)({initialState:!0}),y=h.collapsed,v=h.toggleCollapsed;return r.createElement("div",{className:(0,o.Z)(l,(t={},t[u]=!y,t),f)},r.createElement("button",{type:"button",className:(0,o.Z)("clean-btn",c),onClick:v},r.createElement(a.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),r.createElement(i.zF,{lazy:!0,className:s,collapsed:y},r.createElement(d.Z,{toc:n,minHeadingLevel:m,maxHeadingLevel:p})))}},5002:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),o=n(3366),a=n(7294),i=n(9558),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,n=e.className,r=e.linkClassName,o=e.isChild;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(c,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}function s(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,d=void 0===u?"table-of-contents__link":u,f=e.linkActiveClassName,m=void 0===f?void 0:f,p=e.minHeadingLevel,h=e.maxHeadingLevel,y=(0,o.Z)(e,l),v=(0,i.LU)(),b=null!=p?p:v.tableOfContents.minHeadingLevel,g=null!=h?h:v.tableOfContents.maxHeadingLevel,E=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:g}),_=(0,a.useMemo)((function(){if(d&&m)return{linkClassName:d,linkActiveClassName:m,minHeadingLevel:b,maxHeadingLevel:g}}),[d,m,b,g]);return(0,i.Si)(_),a.createElement(c,(0,r.Z)({toc:E,className:s,linkClassName:d},y))}},7211:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),o=n(6010),a=n(6742),i="tag_WK-t",l="tagRegular_LXbV",c="tagWithCount_S5Zl";var s=function(e){var t,n=e.permalink,s=e.name,u=e.count;return r.createElement(a.Z,{href:n,className:(0,o.Z)(i,(t={},t[l]=!u,t[c]=u,t))},s,u&&r.createElement("span",null,u))}},7682:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),o=n(6010),a=n(4973),i=n(7211),l="tags_NBRY",c="tag_F03v";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,o.Z)(l,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:c},r.createElement(i.Z,{name:t,permalink:n}))}))))}},2449:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=l(n(7294)),o=l(n(5697)),a=n(6674),i=n(7990);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var v=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,o,l=p(c);function c(){return d(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(i.COMMENT_COUNT_SCRIPT_ID)?v():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),i.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)(i.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,a.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,a=u(e,["shortname","config","children","className"]),l=o?" ".concat(o):"";return r.default.createElement("span",s({},a,{className:"".concat(i.COMMENT_COUNT_CLASS).concat(l),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}])&&f(t.prototype,n),o&&f(t,o),c}(r.default.Component);t.CommentCount=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},5890:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(n(7294)),o=i(n(5697)),a=n(7990);function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,o,a=m(i);function i(){return u(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,s(e,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",c({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&d(t.prototype,n),o&&d(t,o),i}(r.default.Component);t.CommentEmbed=y,y.defaultProps={showMedia:!0,showParentComment:!0,width:a.COMMENT_EMBED_WIDTH,height:a.COMMENT_EMBED_HEIGHT},y.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},4811:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=l(n(7294)),o=l(n(5697)),a=n(6674),i=n(7990);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,o,l=p(c);function c(){return d(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(i.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),i.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)(i.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById(i.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,a.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),i.CALLBACKS.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,u(e,["shortname","config"]));return r.default.createElement("div",s({},t,{id:i.THREAD_ID}))}}])&&f(t.prototype,n),o&&f(t,o),c}(r.default.Component);t.DiscussionEmbed=v,v.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},4573:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var r=l(n(7294)),o=l(n(5697)),a=n(6674),i=n(7990);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,o,l=p(c);function c(){return d(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(i.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),i.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,a.removeScript)(i.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(i.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,a.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,u(e,["shortname","config"]));return r.default.createElement("div",s({},t,{id:i.RECOMMENDATIONS_ID}))}}])&&f(t.prototype,n),o&&f(t,o),c}(r.default.Component);t.Recommendations=v,v.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},7990:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0;t.THREAD_ID="disqus_thread";t.EMBED_SCRIPT_ID="dsq-embed-scr";t.COMMENT_COUNT_CLASS="disqus-comment-count";t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";t.COMMENT_EMBED_WIDTH=420;t.COMMENT_EMBED_HEIGHT=320;t.RECOMMENDATIONS_ID="disqus_recommendations";t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:function(e,t,n){Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return a.DiscussionEmbed}});var r=n(2449),o=n(5890),a=n(4811),i=n(4573);r.CommentCount,o.CommentEmbed,a.DiscussionEmbed,i.Recommendations},6674:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(e){return e.remove()}))},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},l=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),l&&e.apply(o,a)}},t.isReactElement=l,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var c=r.value;if("object"===a(t[c])){if(e(t[c],n[c]))return!0}else if(t[c]!==n[c]&&!l(t[c]))return!0}}catch(s){o.e(s)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}}}]);