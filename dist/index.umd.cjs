(function(a,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("lit")):typeof define=="function"&&define.amd?define(["exports","lit"],c):(a=typeof globalThis<"u"?globalThis:a||self,c(a["fmt-timestamp"]={},a.lit))})(this,function(a,c){"use strict";const g=(t,e)=>{try{const r=new Date(t).getTime()-new Date().getTime(),n=Math.sign(r),i=Math.abs(r),s=1e3*60*60*24*30,m=1e3*60*60*24*365,l=new Intl.RelativeTimeFormat(e,{numeric:"auto"}),d=i/1e3;if(d<60)return l.format(n*d,"second");const v=d/60>>0;if(v<60)return l.format(n*v,"minute");const y=v/60>>0;if(y<24)return l.format(n*y,"hour");const T=y/24>>0;if(T<7)return l.format(n*T,"day");const D=T/7>>0;if(D<4)return l.format(n*D,"week");const k=Math.round(i/s);if(k<12)return l.format(n*k,"months");const R=i/m>>0;return l.format(n*R,"years")}catch{return null}},_=(t,e,o,r)=>{try{const n=new Date(t),i={day:"numeric",month:"short",year:n.getFullYear()===r?void 0:"2-digit",timeZone:o};return new Intl.DateTimeFormat(e,i).format(n)}catch{return null}},F=(t,e,o)=>{try{const r=new Date(t),n={hour:"numeric",minute:"numeric",timeZone:o};return new Intl.DateTimeFormat(e,n).format(r)}catch{return null}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=t=>e=>typeof e=="function"?((o,r)=>(customElements.define(o,r),r))(t,e):((o,r)=>{const{kind:n,elements:i}=r;return{kind:n,elements:i,finisher(s){customElements.define(o,s)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function h(t){return(e,o)=>o!==void 0?((r,n,i)=>{n.constructor.createProperty(i,r)})(t,e,o):S(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(t){return h({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=({finisher:t,descriptor:e})=>(o,r)=>{var n;if(r===void 0){const i=(n=o.originalKey)!==null&&n!==void 0?n:o.key,s=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return t!=null&&(s.finisher=function(m){t(m,i)}),s}{const i=o.constructor;e!==void 0&&Object.defineProperty(o,r,e(r)),t==null||t(i,r)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var p;const z=((p=window.HTMLSlotElement)===null||p===void 0?void 0:p.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(o=>o.nodeType===Node.ELEMENT_NODE);function I(t){const{slot:e,selector:o}=t??{};return w({descriptor:r=>({get(){var n;const i="slot"+(e?`[name=${e}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i),m=s!=null?z(s,t):[];return o?m.filter(l=>l.matches(o)):m},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(t,e,o){let r,n=t;return typeof t=="object"?(n=t.slot,r=t):r={flatten:e},o?I({slot:n,flatten:e,selector:o}):w({descriptor:i=>({get(){var s,m;const l="slot"+(n?`[name=${n}]`:":not([name])"),d=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(l);return(m=d==null?void 0:d.assignedNodes(r))!==null&&m!==void 0?m:[]},enumerable:!0,configurable:!0})})}const $=t=>{try{const e=new Intl.Locale(t);return t}catch{return Intl.DateTimeFormat().resolvedOptions().locale}},P=t=>{try{return Intl.DateTimeFormat(void 0,{timeZone:t}).resolvedOptions(),t}catch{return Intl.DateTimeFormat().resolvedOptions().timeZone}};var j=Object.defineProperty,L=Object.getOwnPropertyDescriptor,u=(t,e,o,r)=>{for(var n=r>1?void 0:r?L(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=(r?s(e,o,n):s(n))||n);return r&&n&&j(e,o,n),n},b=(t=>(t[t.formatRelativeTime=0]="formatRelativeTime",t[t.formatToShort=1]="formatToShort",t[t.formatToTime=2]="formatToTime",t))(b||{});const f=[g],M=new Date().getFullYear();a.FmtTimestamp=class extends c.LitElement{constructor(){super(...arguments),this.locale="",this.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone,this._slottedContent="",this._formattedData="",this.formatMode=0}willUpdate(e){if(e.has("locale")){const o=$(this.locale);this.locale=o}if(e.has("timezone")){const o=P(this.timezone);this.timezone=o}this._formattedData=f[this.formatMode](this._slottedContent,this.locale,this.timezone,M),this._slottedNodes[0]&&(this._slottedNodes[0].textContent=`${this._formattedData??this._slottedContent}`),this._formattedData?this.classList.remove("invalid"):this.classList.add("invalid")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._changeFormat)}_changeFormat(e){this.formatMode=(this.formatMode+1)%(Object.keys(b).length-3),f.length<3&&(this.formatMode===2?f.push(_):f.push(F)),this.requestUpdate()}_handleSlotChange(){var e,o;this._slottedContent=(o=(e=this._slottedNodes[0])==null?void 0:e.textContent)==null?void 0:o.trim()}render(){return c.html`
      <slot
        title=${this._slottedContent}
        @slotchange="${this._handleSlotChange}"
      ></slot>
    `}},a.FmtTimestamp.styles=c.css`
    :host {
      cursor: pointer;
    }
    :host(.invalid) {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
  `,u([N({flatten:!0})],a.FmtTimestamp.prototype,"_slottedNodes",2),u([h({attribute:"locale",reflect:!0})],a.FmtTimestamp.prototype,"locale",2),u([h({attribute:"timezone"})],a.FmtTimestamp.prototype,"timezone",2),u([O()],a.FmtTimestamp.prototype,"_slottedContent",2),a.FmtTimestamp=u([C("fmt-timestamp")],a.FmtTimestamp),a.formatRelativeTime=g,a.formatToShort=_,a.formatToTime=F,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
