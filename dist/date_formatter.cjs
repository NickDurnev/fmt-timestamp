"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const O=require("lit"),G=require("./formatToRelative.cjs"),J=require("./formatToShort.cjs"),Q=require("./roundTime-f4e93685.cjs");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=i=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(i,t):((e,s)=>{const{kind:o,elements:n}=s;return{kind:o,elements:n,finisher(r){customElements.define(e,r)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function F(i){return(t,e)=>e!==void 0?((s,o,n)=>{o.constructor.createProperty(n,s)})(i,t,e):tt(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(i){return F({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=({finisher:i,descriptor:t})=>(e,s)=>{var o;if(s===void 0){const n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return i!=null&&(r.finisher=function(d){i(d,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,s,t(s)),i==null||i(n,s)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k;const it=((k=window.HTMLSlotElement)===null||k===void 0?void 0:k.prototype.assignedElements)!=null?(i,t)=>i.assignedElements(t):(i,t)=>i.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function st(i){const{slot:t,selector:e}=i??{};return V({descriptor:s=>({get(){var o;const n="slot"+(t?`[name=${t}]`:":not([name])"),r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n),d=r!=null?it(r,i):[];return e?d.filter(l=>l.matches(e)):d},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(i,t,e){let s,o=i;return typeof i=="object"?(o=i.slot,s=i):s={flatten:t},e?st({slot:o,flatten:t,selector:e}):V({descriptor:n=>({get(){var r,d;const l="slot"+(o?`[name=${o}]`:":not([name])"),a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(l);return(d=a==null?void 0:a.assignedNodes(s))!==null&&d!==void 0?d:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const S=window,f=S.trustedTypes,P=f?f.createPolicy("lit-html",{createHTML:i=>i}):void 0,R="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,W="?"+$,nt=`<${W}>`,A=document,w=()=>A.createComment(""),T=i=>i===null||typeof i!="object"&&typeof i!="function",Z=Array.isArray,rt=i=>Z(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",I=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,m=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,U=/"/g,K=/^(?:script|style|textarea|title)$/i,g=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),B=new WeakMap,_=A.createTreeWalker(A,129,null,!1),lt=(i,t)=>{const e=i.length-1,s=[];let o,n=t===2?"<svg>":"",r=b;for(let l=0;l<e;l++){const a=i[l];let p,h,c=-1,v=0;for(;v<a.length&&(r.lastIndex=v,h=r.exec(a),h!==null);)v=r.lastIndex,r===b?h[1]==="!--"?r=j:h[1]!==void 0?r=z:h[2]!==void 0?(K.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=m):h[3]!==void 0&&(r=m):r===m?h[0]===">"?(r=o??b,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,p=h[1],r=h[3]===void 0?m:h[3]==='"'?U:L):r===U||r===L?r=m:r===j||r===z?r=b:(r=m,o=void 0);const C=r===m&&i[l+1].startsWith("/>")?" ":"";n+=r===b?a+nt:c>=0?(s.push(p),a.slice(0,c)+R+a.slice(c)+$+C):a+$+(c===-2?(s.push(void 0),l):C)}const d=n+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[P!==void 0?P.createHTML(d):d,s]};class x{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let n=0,r=0;const d=t.length-1,l=this.parts,[a,p]=lt(t,e);if(this.el=x.createElement(a,s),_.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(o=_.nextNode())!==null&&l.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const c of o.getAttributeNames())if(c.endsWith(R)||c.startsWith($)){const v=p[r++];if(h.push(c),v!==void 0){const C=o.getAttribute(v.toLowerCase()+R).split($),N=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:N[2],strings:C,ctor:N[1]==="."?ht:N[1]==="?"?ct:N[1]==="@"?ut:D})}else l.push({type:6,index:n})}for(const c of h)o.removeAttribute(c)}if(K.test(o.tagName)){const h=o.textContent.split($),c=h.length-1;if(c>0){o.textContent=f?f.emptyScript:"";for(let v=0;v<c;v++)o.append(h[v],w()),_.nextNode(),l.push({type:2,index:++n});o.append(h[c],w())}}}else if(o.nodeType===8)if(o.data===W)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf($,h+1))!==-1;)l.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function y(i,t,e=i,s){var o,n,r,d;if(t===g)return t;let l=s!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[s]:e._$Cl;const a=T(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(i),l._$AT(i,e,s)),s!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=y(i,l._$AS(i,t.values),l,s)),t}class at{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(s,!0);_.currentNode=n;let r=_.nextNode(),d=0,l=0,a=o[0];for(;a!==void 0;){if(d===a.index){let p;a.type===2?p=new E(r,r.nextSibling,this,t):a.type===1?p=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(p=new vt(r,this,t)),this.u.push(p),a=o[++l]}d!==(a==null?void 0:a.index)&&(r=_.nextNode(),d++)}return n}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class E{constructor(t,e,s,o){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=y(this,t,e),T(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==g&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):rt(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==u&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=x.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(s);else{const r=new at(n,this),d=r.v(this.options);r.p(s),this.T(d),this._$AH=r}}_$AC(t){let e=B.get(t.strings);return e===void 0&&B.set(t.strings,e=new x(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const n of t)o===e.length?e.push(s=new E(this.S(w()),this.S(w()),this,this.options)):s=e[o],s._$AI(n),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class D{constructor(t,e,s,o,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,o){const n=this.strings;let r=!1;if(n===void 0)t=y(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==g,r&&(this._$AH=t);else{const d=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=y(this,d[s+l],e,l),a===g&&(a=this._$AH[l]),r||(r=!T(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!o&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ht extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const dt=f?f.emptyScript:"";class ct extends D{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,dt):this.element.removeAttribute(this.name)}}class ut extends D{constructor(t,e,s,o,n){super(t,e,s,o,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=y(this,t,e,0))!==null&&s!==void 0?s:u)===g)return;const o=this._$AH,n=t===u&&o!==u||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==u&&(o===u||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class vt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}}const q=S.litHtmlPolyfillSupport;q==null||q(x,E),((M=S.litHtmlVersions)!==null&&M!==void 0?M:S.litHtmlVersions=[]).push("2.7.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$t=i=>(...t)=>({_$litDirective$:i,values:t});class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=$t(class extends mt{constructor(i){var t;if(super(i),i.type!==pt.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,s;if(this.nt===void 0){this.nt=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((e=this.st)===null||e===void 0)&&e.has(n))&&this.nt.add(n);return this.render(t)}const o=i.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const r=!!t[n];r===this.nt.has(n)||!((s=this.st)===null||s===void 0)&&s.has(n)||(r?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return g}}),ft=i=>{try{const t=new Intl.Locale(i);return i}catch{return Intl.DateTimeFormat().resolvedOptions().locale}},At=i=>{try{return Intl.DateTimeFormat(void 0,{timeZone:i}).resolvedOptions(),i}catch{return Intl.DateTimeFormat().resolvedOptions().timeZone}};var gt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,H=(i,t,e,s)=>{for(var o=s>1?void 0:s?yt(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&gt(t,e,o),o};const bt=[G,J,Q.formatToTime];var Y=(i=>(i[i.formatRelativeTime=0]="formatRelativeTime",i[i.formatToShort=1]="formatToShort",i[i.formatToTime=2]="formatToTime",i))(Y||{});exports.DateFormatter=class extends O.LitElement{constructor(){super(...arguments),this.locale="",this.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone,this._slottedContent="",this._formattedData="",this.formatMode=0}willUpdate(t){if(t.has("locale")){const e=ft(this.locale);this.locale=e}if(t.has("timezone")){const e=At(this.timezone);this.timezone=e}this._formattedData=bt[this.formatMode](this._slottedContent,this.locale,this.timezone)}_changeFormat(t){this.formatMode=(this.formatMode+1)%(Object.keys(Y).length-3),this.requestUpdate()}_handleSlotChange(){var t,e;this._slottedContent=(e=(t=this._slottedNodes[0])==null?void 0:t.textContent)==null?void 0:e.trim()}render(){const t={invalid:!this._formattedData};return O.html`
      <slot class="hidden-slot" @slotchange="${this._handleSlotChange}"></slot>
      <button @click="${this._changeFormat}">
        <p class=${_t(t)} title=${this._slottedContent}>
          ${this._formattedData??this._slottedContent}
        </p>
      </button>
    `}};exports.DateFormatter.styles=O.css`
    .invalid {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
    .hidden-slot {
      display: none;
    }
    button {
      cursor: pointer;
      padding: var(--btn-padding);
      background-color: var(--btn-background);
      color: var(--btn-color);
      border: var(--btn-border);
      font-size: var(--btn-fontSize);
      border-radius: var(--btn-borderRadius);
      transition: var(--btn-transition);
    }

    button:hover,
    button:focus {
      background-color: var(--btn-hoverBackground);
      color: var(--btn-hoverColor);
    }
  `;H([ot()],exports.DateFormatter.prototype,"_slottedNodes",2);H([F({attribute:"locale",reflect:!0})],exports.DateFormatter.prototype,"locale",2);H([F({attribute:"timezone"})],exports.DateFormatter.prototype,"timezone",2);H([et()],exports.DateFormatter.prototype,"_slottedContent",2);exports.DateFormatter=H([X("date-formatter")],exports.DateFormatter);
