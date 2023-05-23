/*! For license information please see 5628.7bc6f5ee.js.LICENSE.txt */
"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[5628],{9530:(e,t)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class o{constructor(e,t,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(t,e))}return e}toString(){return this.cssText}}const a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e;var l;const c=window,h=c.trustedTypes,d=h?h.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},m=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,s)=>{const i=this._$Ep(s,t);void 0!==i&&(this._$Ev.set(i,s),e.push(i))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of t)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,s;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=v){var i;const n=this.constructor._$Ep(e,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(t,s.type);this._$El=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=i.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(s=e.converter)||void 0===s?void 0:s.fromAttribute)?e.converter:p;this._$El=n,this[n]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(s)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var _;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.4.2");const f=window,$=f.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,A="?"+y,E=`<${A}>`,S=document,C=(e="")=>S.createComment(e),w=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,I=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,k=/"/g,M=/^(?:script|style|textarea|title)$/i,x=(Z=1,(e,...t)=>({_$litType$:Z,strings:e,values:t})),L=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),H=new WeakMap,G=S.createTreeWalker(S,129,null,!1);var Z;class W{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[l,c]=((e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":"",o=T;for(let l=0;l<s;l++){const t=e[l];let s,a,c=-1,h=0;for(;h<t.length&&(o.lastIndex=h,a=o.exec(t),null!==a);)h=o.lastIndex,o===T?"!--"===a[1]?o=P:void 0!==a[1]?o=U:void 0!==a[2]?(M.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=I):void 0!==a[3]&&(o=I):o===I?">"===a[0]?(o=null!=n?n:T,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,s=a[1],o=void 0===a[3]?I:'"'===a[3]?k:O):o===k||o===O?o=I:o===P||o===U?o=T:(o=I,n=void 0);const d=o===I&&e[l+1].startsWith("/>")?" ":"";r+=o===T?t+E:c>=0?(i.push(s),t.slice(0,c)+"$lit$"+t.slice(c)+y+d):t+y+(-2===c?(i.push(void 0),l):d)}const a=r+(e[s]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,i]})(e,t);if(this.el=W.createElement(l,s),G.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=G.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(y)){const s=c[r++];if(e.push(t),void 0!==s){const e=i.getAttribute(s.toLowerCase()+"$lit$").split(y),t=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?Y:"?"===t[1]?K:"@"===t[1]?F:B})}else a.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(M.test(i.tagName)){const e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=$?$.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],C()),G.nextNode(),a.push({type:2,index:++n});i.append(e[t],C())}}}else if(8===i.nodeType)if(i.data===A)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(y,e+1));)a.push({type:7,index:n}),e+=y.length-1}n++}}static createElement(e,t){const s=S.createElement("template");return s.innerHTML=e,s}}function D(e,t,s=e,i){var n,r,o,a;if(t===L)return t;let l=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const c=w(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,s,i)),void 0!==i?(null!==(o=(a=s)._$Co)&&void 0!==o?o:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(t=D(e,l._$AS(e,t.values),l,i)),t}class j{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:s},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(s,!0);G.currentNode=n;let r=G.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new z(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new q(r,this,e)),this.u.push(t),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=G.nextNode(),o++)}return n}p(e){let t=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class z{constructor(e,t,s,i){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cm=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),w(e)?e===R||null==e||""===e?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==L&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==R&&w(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=W.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(s);else{const e=new j(n,this),t=e.v(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return void 0===t&&H.set(e.strings,t=new W(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new z(this.O(C()),this.O(C()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class B{constructor(e,t,s,i,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=D(this,e,t,0),r=!w(e)||e!==this._$AH&&e!==L,r&&(this._$AH=e);else{const i=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=D(this,i[s+o],t,o),a===L&&(a=this._$AH[o]),r||(r=!w(a)||a!==this._$AH[o]),a===R?e=R:e!==R&&(e+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Y extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}const V=$?$.emptyScript:"";class K extends B{constructor(){super(...arguments),this.type=4}j(e){e&&e!==R?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class F extends B{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=D(this,e,t,0))&&void 0!==s?s:R)===L)return;const i=this._$AH,n=e===R&&i!==R||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==R&&(i===R||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class q{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const J=f.litHtmlPolyfillSupport;null==J||J(W,z),(null!==(_=f.litHtmlVersions)&&void 0!==_?_:f.litHtmlVersions=[]).push("2.4.0");var Q,X;class ee extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:t;let o=r._$litPart$;if(void 0===o){const e=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new z(t.insertBefore(C(),e),e,void 0,null!=s?s:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return L}}ee.finalized=!0,ee._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:ee});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:ee}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function ie(e){return(t,s)=>{return void 0!==s?(i=e,n=s,void t.constructor.createProperty(n,i)):se(e,t);var i,n}}var ne;null===(ne=window.HTMLSlotElement)||void 0===ne||ne.prototype.assignedElements;const re=2;const oe=(e,t)=>{var s,i;const n=e._$AN;if(void 0===n)return!1;for(const r of n)null===(i=(s=r)._$AO)||void 0===i||i.call(s,t,!1),oe(r,t);return!0},ae=e=>{let t,s;do{if(void 0===(t=e._$AM))break;s=t._$AN,s.delete(e),e=t}while(0===(null==s?void 0:s.size))},le=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),de(t)}};function ce(e){void 0!==this._$AN?(ae(this),this._$AM=e,le(this)):this._$AM=e}function he(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)oe(i[r],!1),ae(i[r]);else null!=i&&(oe(i,!1),ae(i));else oe(this,e)}const de=e=>{var t,s,i,n;e.type==re&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=he),null!==(s=(n=e)._$AQ)&&void 0!==s||(n._$AQ=ce))};class ue{}const pe=new WeakMap,me=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends class extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),le(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(oe(this,e),ae(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}{render(e){return R}update(e,[t]){var s;const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.dt=null===(s=e.options)||void 0===s?void 0:s.host,this.rt(this.ct=e.element)),R}rt(e){var t;if("function"==typeof this.Y){const s=null!==(t=this.dt)&&void 0!==t?t:globalThis;let i=pe.get(s);void 0===i&&(i=new WeakMap,pe.set(s,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,s;return"function"==typeof this.Y?null===(t=pe.get(null!==(e=this.dt)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.Y):null===(s=this.Y)||void 0===s?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ve=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,_e=(e,t,s,i)=>{for(var n,r=i>1?void 0:i?ge(t,s):t,o=e.length-1;o>=0;o--)(n=e[o])&&(r=(i?n(t,s,r):n(r))||r);return i&&r&&ve(t,s,r),r};t.GiscusWidget=class extends ee{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new ue,this.messageEventHandler=this.handleMessageEvent.bind(this),this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var e;return null==(e=this._iframeRef)?void 0:e.value}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(e){return`[giscus] An error occurred. Error message: "${e}".`}setupSession(){const e=location.href,t=new URL(e),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")||"";if(i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,t.toString());if(s)try{this.__session=JSON.parse(s||"")||""}catch(n){this.__session="",localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}handleMessageEvent(e){if(e.origin!==this.host)return;const{data:t}=e;if("object"!=typeof t||!t.giscus||(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),!t.giscus.error))return;const s=t.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn(`${this._formatError(s)} Session has been cleared.`),void this.update(new Map);console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(e){var t,s;null==(s=null==(t=this.iframeRef)?void 0:t.contentWindow)||s.postMessage({giscus:e},this.host)}updateConfig(){const e={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(e)}firstUpdated(){var e;null==(e=this.iframeRef)||e.addEventListener("load",(()=>{var e;return null==(e=this.iframeRef)?void 0:e.classList.remove("loading")}))}requestUpdate(e,t,s){this.hasUpdated&&"host"!==e?this.updateConfig():super.requestUpdate(e,t,s)}getMetaContent(e,t=!1){const s=t?`meta[property='og:${e}'],`:"",i=document.querySelector(s+`meta[name='${e}']`);return i?i.content:""}_getCleanedUrl(){const e=new URL(location.href);return e.searchParams.delete("giscus"),e}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const e=this._getCleanedUrl().toString(),t=`${e}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||e,n={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this.host||this.GISCUS_DEFAULT_HOST}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(n)}`}render(){return x`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${me(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},t.GiscusWidget.styles=((e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new o(s,e,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,_e([ie({reflect:!0})],t.GiscusWidget.prototype,"host",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"repo",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"repoId",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"category",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"categoryId",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"mapping",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"term",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"strict",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"reactionsEnabled",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"emitMetadata",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"inputPosition",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"theme",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"lang",2),_e([ie({reflect:!0})],t.GiscusWidget.prototype,"loading",2),t.GiscusWidget=_e([(e=>t=>{return"function"==typeof t?(s=e,i=t,customElements.define(s,i),i):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){customElements.define(e,t)}}})(e,t);var s,i})("giscus-widget")],t.GiscusWidget)},8071:(e,t,s)=>{const i=s(5893),n=s(7294);e.exports=function({id:e,host:t,repo:r,repoId:o,category:a,categoryId:l,mapping:c,term:h,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:m,theme:v,lang:g,loading:_}){const[f,$]=n.useState(!1);return n.useEffect((()=>{f||(Promise.resolve().then((()=>s(9530))),$(!0))}),[]),f?i.jsx("giscus-widget",{id:e,host:t,repo:r,repoid:o,category:a,categoryid:l,mapping:c,term:h,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:m,theme:v,lang:g,loading:_}):null}},1310:(e,t,s)=>{s.d(t,{Z:()=>f});var i=s(7462),n=s(7294),r=s(6010),o=s(5281),a=s(3438),l=s(8596),c=s(9960),h=s(5999),d=s(4996);function u(e){return n.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p="breadcrumbHomeIcon_YNFT";function m(){const e=(0,d.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(c.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(u,{className:p})))}const v="breadcrumbsContainer_Z_bl";function g(e){let{children:t,href:s,isLast:i}=e;const r="breadcrumbs__link";return i?n.createElement("span",{className:r,itemProp:"name"},t):s?n.createElement(c.Z,{className:r,href:s,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function _(e){let{children:t,active:s,index:o,addMicrodata:a}=e;return n.createElement("li",(0,i.Z)({},a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s})}),t,n.createElement("meta",{itemProp:"position",content:String(o+1)}))}function f(){const e=(0,a.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,v),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(m,null),e.map(((t,s)=>{const i=s===e.length-1;return n.createElement(_,{key:s,active:i,index:s,addMicrodata:!!t.href},n.createElement(g,{href:t.href,isLast:i},t.label))})))):null}},49:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(7462),n=s(7294),r=s(5999),o=s(2244);function a(e){const{previous:t,next:s}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(o.Z,(0,i.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),s&&n.createElement(o.Z,(0,i.Z)({},s,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(7294),n=s(6010),r=s(5999),o=s(5281),a=s(4477);function l(e){let{className:t}=e;const s=(0,a.E)();return s.badge?i.createElement("span",{className:(0,n.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},i.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label}},"Version: {versionLabel}")):null}},3120:(e,t,s)=>{s.d(t,{Z:()=>g});var i=s(7294),n=s(6010),r=s(2263),o=s(9960),a=s(5999),l=s(143),c=s(5281),h=s(373),d=s(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return i.createElement(a.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:i.createElement("b",null,s.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return i.createElement(a.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:i.createElement("b",null,s.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return i.createElement(t,e)}function m(e){let{versionLabel:t,to:s,onClick:n}=e;return i.createElement(a.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:i.createElement("b",null,i.createElement(o.Z,{to:s,onClick:n},i.createElement(a.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:o}}=(0,r.Z)(),{pluginId:a}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,h.J)(a),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,l.Jo)(a),g=u??(_=v).docs.find((e=>e.id===_.mainDocId));var _;return i.createElement("div",{className:(0,n.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},i.createElement("div",null,i.createElement(p,{siteTitle:o,versionMetadata:s})),i.createElement("div",{className:"margin-top--md"},i.createElement(m,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const s=(0,d.E)();return s.banner?i.createElement(v,{className:t,versionMetadata:s}):null}},5251:(e,t,s)=>{s(7418);var i=s(7294),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;n=r("react.element"),t.Fragment=r("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var i,r={},c=null,h=null;for(i in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:h,props:r,_owner:o.current}}t.jsx=c,t.jsxs=c},5893:(e,t,s)=>{e.exports=s(5251)},9861:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s(8071)}}]);