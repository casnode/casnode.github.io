"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[9817],{4228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var a=n(7294),r=n(833),i=n(3438),c=n(4996),l=n(6010),o=n(9960),s=n(3919),m=n(5999);const d="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function E(e){let{href:t,children:n}=e;return a.createElement(o.Z,{href:t,className:(0,l.Z)("card padding--lg",d)},n)}function g(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(E,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",u),title:r},n," ",r),i&&a.createElement("p",{className:(0,l.Z)("text--truncate",p),title:i},i))}function h(e){var t;let{item:n}=e;const r=(0,i.Wl)(n);return r?a.createElement(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function f(e){var t,n;let{item:r}=e;const c=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=r.docId)?t:void 0);return a.createElement(g,{href:r.href,icon:c,title:r.label,description:null!=(n=r.description)?n:null==l?void 0:l.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function N(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return a.createElement(N,e);const r=(0,i.MN)(t);return a.createElement("section",{className:(0,l.Z)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(v,{item:e})))))}var Z=n(64),_=n(3120),b=n(4364),y=n(1310),w=n(2503);const I="generatedIndexPage_vN6x",x="list_eTzJ",D="title_kItE";function W(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,c.Z)(t.image)})}function C(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return a.createElement("div",{className:I},a.createElement(_.Z,null),a.createElement(y.Z,null),a.createElement(b.Z,null),a.createElement("header",null,a.createElement(w.Z,{as:"h1",className:D},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(k,{items:n.items,className:x})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(Z.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function T(e){return a.createElement(a.Fragment,null,a.createElement(W,e),a.createElement(C,e))}},2503:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),c=n(5999),l=n(6668),o=n(9960);const s="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:u}}=(0,l.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},d,{id:void 0}));const p=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return r.createElement(t,(0,a.Z)({},d,{className:(0,i.Z)("anchor",u?m:s,d.className),id:n}),d.children,r.createElement(o.Z,{className:"hash-link",to:"#"+n,"aria-label":p,title:p},"\u200b"))}},2244:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(6010),i=n(9960);function c(e){const{permalink:t,title:n,subLabel:c,isNext:l}=e;return a.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&a.createElement("div",{className:"pagination-nav__sublabel"},c),a.createElement("div",{className:"pagination-nav__label"},n))}},64:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(49),i=n(9861),c=n(2949);function l(e){return a.createElement(a.Fragment,null,a.createElement(r.Z,e),a.createElement("br",null),a.createElement(i.Z,{id:"comments",repo:"casbin/casnode",repoId:"MDEwOlJlcG9zaXRvcnkyNjc3NDk0NTE=",category:"Docs comments",categoryId:"DIC_kwDOD_WIS84CRIiB",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:(0,c.I)().colorMode,lang:"en",loading:"lazy"}))}}}]);