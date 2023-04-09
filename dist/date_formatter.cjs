"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const R=require("lit"),J=require("./formatToRelative.cjs"),Q=require("./formatToShort.cjs"),X=require("./formatToTime.cjs");require("./isValidLocale-47677d8d.cjs");require("./isValidTimeZone-5f79ce56.cjs");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function U(n){return(t,e)=>e!==void 0?((i,s,o)=>{s.constructor.createProperty(o,i)})(n,t,e):et(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(n){return U({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=({finisher:n,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const o=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return n!=null&&(r.finisher=function(d){n(d,o)}),r}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),n==null||n(o,i)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const st=((M=window.HTMLSlotElement)===null||M===void 0?void 0:M.prototype.assignedElements)!=null?(n,t)=>n.assignedElements(t):(n,t)=>n.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function nt(n){const{slot:t,selector:e}=n??{};return V({descriptor:i=>({get(){var s;const o="slot"+(t?`[name=${t}]`:":not([name])"),r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o),d=r!=null?st(r,n):[];return e?d.filter(l=>l.matches(e)):d},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(n,t,e){let i,s=n;return typeof n=="object"?(s=n.slot,i=n):i={flatten:t},e?nt({slot:s,flatten:t,selector:e}):V({descriptor:o=>({get(){var r,d;const l="slot"+(s?`[name=${s}]`:":not([name])"),h=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(l);return(d=h==null?void 0:h.assignedNodes(i))!==null&&d!==void 0?d:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const C=window,f=C.trustedTypes,L=f?f.createPolicy("lit-html",{createHTML:n=>n}):void 0,j="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,K="?"+$,rt=`<${K}>`,A=document,E=()=>A.createComment(""),x=n=>n===null||typeof n!="object"&&typeof n!="function",Y=Array.isArray,lt=n=>Y(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",k=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,F=/>/g,v=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,B=/"/g,G=/^(?:script|style|textarea|title)$/i,g=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),z=new WeakMap,m=A.createTreeWalker(A,129,null,!1),ht=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=b;for(let l=0;l<e;l++){const h=n[l];let _,a,c=-1,p=0;for(;p<h.length&&(r.lastIndex=p,a=r.exec(h),a!==null);)p=r.lastIndex,r===b?a[1]==="!--"?r=O:a[1]!==void 0?r=F:a[2]!==void 0?(G.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=v):a[3]!==void 0&&(r=v):r===v?a[0]===">"?(r=s??b,c=-1):a[1]===void 0?c=-2:(c=r.lastIndex-a[2].length,_=a[1],r=a[3]===void 0?v:a[3]==='"'?B:q):r===B||r===q?r=v:r===O||r===F?r=b:(r=v,s=void 0);const H=r===v&&n[l+1].startsWith("/>")?" ":"";o+=r===b?h+rt:c>=0?(i.push(_),h.slice(0,c)+j+h.slice(c)+$+H):h+$+(c===-2?(i.push(void 0),l):H)}const d=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[L!==void 0?L.createHTML(d):d,i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,l=this.parts,[h,_]=ht(t,e);if(this.el=T.createElement(h,i),m.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(s=m.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const c of s.getAttributeNames())if(c.endsWith(j)||c.startsWith($)){const p=_[r++];if(a.push(c),p!==void 0){const H=s.getAttribute(p.toLowerCase()+j).split($),N=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:N[2],strings:H,ctor:N[1]==="."?dt:N[1]==="?"?ut:N[1]==="@"?pt:D})}else l.push({type:6,index:o})}for(const c of a)s.removeAttribute(c)}if(G.test(s.tagName)){const a=s.textContent.split($),c=a.length-1;if(c>0){s.textContent=f?f.emptyScript:"";for(let p=0;p<c;p++)s.append(a[p],E()),m.nextNode(),l.push({type:2,index:++o});s.append(a[c],E())}}}else if(s.nodeType===8)if(s.data===K)l.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf($,a+1))!==-1;)l.push({type:7,index:o}),a+=$.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function y(n,t,e=n,i){var s,o,r,d;if(t===g)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=y(n,l._$AS(n,t.values),l,i)),t}class at{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);m.currentNode=o;let r=m.nextNode(),d=0,l=0,h=s[0];for(;h!==void 0;){if(d===h.index){let _;h.type===2?_=new S(r,r.nextSibling,this,t):h.type===1?_=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(_=new _t(r,this,t)),this.u.push(_),h=s[++l]}d!==(h==null?void 0:h.index)&&(r=m.nextNode(),d++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class S{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=y(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==g&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lt(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const r=new at(o,this),d=r.v(this.options);r.p(i),this.T(d),this._$AH=r}}_$AC(t){let e=z.get(t.strings);return e===void 0&&z.set(t.strings,e=new T(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new S(this.S(E()),this.S(E()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class D{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=y(this,t,e,0),r=!x(t)||t!==this._$AH&&t!==g,r&&(this._$AH=t);else{const d=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=y(this,d[i+l],e,l),h===g&&(h=this._$AH[l]),r||(r=!x(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}r&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class dt extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const ct=f?f.emptyScript:"";class ut extends D{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,ct):this.element.removeAttribute(this.name)}}class pt extends D{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=y(this,t,e,0))!==null&&i!==void 0?i:u)===g)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class _t{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}}const Z=C.litHtmlPolyfillSupport;Z==null||Z(T,S),((I=C.litHtmlVersions)!==null&&I!==void 0?I:C.litHtmlVersions=[]).push("2.7.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vt=n=>(...t)=>({_$litDirective$:n,values:t});class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=vt(class extends mt{constructor(n){var t;if(super(n),n.type!==$t.ATTRIBUTE||n.name!=="class"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((e=this.st)===null||e===void 0)&&e.has(o))&&this.nt.add(o);return this.render(t)}const s=n.element.classList;this.nt.forEach(o=>{o in t||(s.remove(o),this.nt.delete(o))});for(const o in t){const r=!!t[o];r===this.nt.has(o)||!((i=this.st)===null||i===void 0)&&i.has(o)||(r?(s.add(o),this.nt.add(o)):(s.remove(o),this.nt.delete(o)))}return g}});var ft=Object.defineProperty,At=Object.getOwnPropertyDescriptor,w=(n,t,e,i)=>{for(var s=i>1?void 0:i?At(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&ft(t,e,s),s};const P=[J,Q,X];exports.DateFormatter=class extends R.LitElement{constructor(){super(...arguments),this.locale="",this.timeZone="",this._slottedContent="",this._formattedData="",this._functionIndex=0,this._showedTooltip=!1}_changeFormat(t){this._functionIndex===P.length-1?this._functionIndex=0:this._functionIndex++,this._formattedData=P[this._functionIndex](this._slottedContent,this.locale,this.timeZone),this.requestUpdate()}_handleSlotChange(){var t,e;this._slottedContent=(e=(t=this._slottedNodes[0])==null?void 0:t.textContent)==null?void 0:e.trim(),this._formattedData=P[this._functionIndex](this._slottedContent,this.locale)}_toggleShowed(){this._showedTooltip=!this._showedTooltip,this.requestUpdate()}render(){const t={hidden:this._showedTooltip===!1,showed:this._showedTooltip},e={invalid:!this._formattedData};return R.html`<div>
      <p class=${W(t)}>
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </p>
      <button
        @click="${this._changeFormat}"
      >
        <p class=${W(e)} title=${this._slottedContent}>
          ${this._formattedData?this._formattedData:this._slottedContent}
        </p>
      </button>
       <!-- <button
        @mouseenter="${this._toggleShowed}"
        @mouseleave="${this._toggleShowed}"
      >
        Toggle Tooltip
      </button> -->
    </div>`}};exports.DateFormatter.styles=R.css`
    * {
      box-sizing: border-box;
    }
    p {
      margin: 0;
    }
    div {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
    }
    div > p {
      margin-bottom: 10px;
      padding: 10px;
      background-color: #cc7cd5;
      color: #ece9ee;
      transition: all 300ms linear;
      border-radius: 10px;
    }
    button {
      min-width: 120px;
      padding: 20px;
      background-color: #bb9dcd;
      color: #ece9ee;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      font-size: 20px;
      transition: background-color 300ms linear;
    }

    button:hover,
    button:focus {
      background-color: #73498c;
    }

    .hidden {
      display:none;
      /* opacity: 0;
      transform: scale(0.5); */
    }
    /* .showed {
      opacity: 1;
      transform: scale(1);
    } */
    .invalid {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
  `;w([ot()],exports.DateFormatter.prototype,"_slottedNodes",2);w([U({attribute:"locale",reflect:!0})],exports.DateFormatter.prototype,"locale",2);w([U({attribute:"timeZone",reflect:!0})],exports.DateFormatter.prototype,"timeZone",2);w([it()],exports.DateFormatter.prototype,"_slottedContent",2);exports.DateFormatter=w([tt("date-formatter")],exports.DateFormatter);
