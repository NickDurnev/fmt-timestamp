(function(a,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("lit")):typeof define=="function"&&define.amd?define(["exports","lit"],m):(a=typeof globalThis<"u"?globalThis:a||self,m(a["fmt-timestamp"]={},a.lit))})(this,function(a,m){"use strict";const _=t=>{const{name:e}=t,o=new Map,r=(n,i,s)=>{const l=`${e} ${s??""} ${n??""} ${(i==null?void 0:i.timeZone)??""}`;return o.has(l)?o.get(l).value:o.set(l,{locale:n,options:i,value:new t(n,i)}).get(l).value};return r.cache=o,r},z=_(Intl.RelativeTimeFormat),d=_(Intl.DateTimeFormat),k=(t,e)=>{try{const r=new Date(t).getTime()-new Date().getTime(),n=Math.sign(r),i=Math.abs(r),s=1e3*60*60*24*30,l=1e3*60*60*24*365,c=z(e,{numeric:"auto"}),u=i/1e3;if(u<60)return c.format(n*u,"second");const y=u/60>>0;if(y<60)return c.format(n*y,"minute");const T=y/60>>0;if(T<24)return c.format(n*T,"hour");const g=T/24>>0;if(g<7)return c.format(n*g,"day");const S=g/7>>0;if(S<4)return c.format(n*S,"week");const D=Math.round(i/s);if(D<12)return c.format(n*D,"months");const q=i/l>>0;return c.format(n*q,"years")}catch{return null}},w=(t,e,o,r)=>{try{const n=new Date(t),i={day:"numeric",month:"short",year:n.getFullYear()===r?void 0:"2-digit",timeZone:o};return d(e,i,"ToShort").format(n)}catch{return null}},F=(t,e,o)=>{try{const r=new Date(t);return d(e,{hour:"numeric",minute:"numeric",timeZone:o},"ToTime").format(r)}catch{return null}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=t=>e=>typeof e=="function"?((o,r)=>(customElements.define(o,r),r))(t,e):((o,r)=>{const{kind:n,elements:i}=r;return{kind:n,elements:i,finisher(s){customElements.define(o,s)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function p(t){return(e,o)=>o!==void 0?((r,n,i)=>{n.constructor.createProperty(i,r)})(t,e,o):O(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(t){return p({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=({finisher:t,descriptor:e})=>(o,r)=>{var n;if(r===void 0){const i=(n=o.originalKey)!==null&&n!==void 0?n:o.key,s=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return t!=null&&(s.finisher=function(l){t(l,i)}),s}{const i=o.constructor;e!==void 0&&Object.defineProperty(o,r,e(r)),t==null||t(i,r)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var v;const N=((v=window.HTMLSlotElement)===null||v===void 0?void 0:v.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(o=>o.nodeType===Node.ELEMENT_NODE);function P(t){const{slot:e,selector:o}=t??{};return b({descriptor:r=>({get(){var n;const i="slot"+(e?`[name=${e}]`:":not([name])"),s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i),l=s!=null?N(s,t):[];return o?l.filter(c=>c.matches(o)):l},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t,e,o){let r,n=t;return typeof t=="object"?(n=t.slot,r=t):r={flatten:e},o?P({slot:n,flatten:e,selector:o}):b({descriptor:i=>({get(){var s,l;const c="slot"+(n?`[name=${n}]`:":not([name])"),u=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(c);return(l=u==null?void 0:u.assignedNodes(r))!==null&&l!==void 0?l:[]},enumerable:!0,configurable:!0})})}const j=t=>{try{const e=new Intl.Locale(t);return t}catch{return d(void 0,{},"localeChecking").resolvedOptions().locale}},L=t=>{try{return d(void 0,{timeZone:t},"timeZoneChecking").resolvedOptions(),t}catch{return d(void 0,{},"defaultTimeZone").resolvedOptions().timeZone}};var E=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,f=(t,e,o,r)=>{for(var n=r>1?void 0:r?Z(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=(r?s(e,o,n):s(n))||n);return r&&n&&E(e,o,n),n},C=(t=>(t[t.formatRelativeTime=0]="formatRelativeTime",t[t.formatToShort=1]="formatToShort",t[t.formatToTime=2]="formatToTime",t))(C||{});const h=[k],I=new Date().getFullYear();a.FmtTimestamp=class extends m.LitElement{constructor(){super(...arguments),this.locale="",this.timezone=d(void 0,{},"defaultTimeZone").resolvedOptions().timeZone,this._slottedContent="",this._formattedData="",this.formatMode=0}willUpdate(e){if(e.has("locale")){const o=j(this.locale);this.locale=o}if(e.has("timezone")){const o=L(this.timezone);this.timezone=o}this._formattedData=h[this.formatMode](this._slottedContent,this.locale,this.timezone,I),this._slottedNodes[0]&&(this._slottedNodes[0].textContent=`${this._formattedData??this._slottedContent}`),this._formattedData?this.classList.remove("invalid"):this.classList.add("invalid")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._changeFormat)}_changeFormat(e){this.formatMode=(this.formatMode+1)%(Object.keys(C).length-3),h.length<3&&(this.formatMode===2?h.push(w):h.push(F)),this.requestUpdate()}_handleSlotChange(){var e,o;this._slottedContent=(o=(e=this._slottedNodes[0])==null?void 0:e.textContent)==null?void 0:o.trim()}render(){return m.html`
      <slot
        title=${this._slottedContent}
        @slotchange="${this._handleSlotChange}"
      ></slot>
    `}},a.FmtTimestamp.styles=m.css`
    :host {
      cursor: pointer;
    }
    :host(.invalid) {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
  `,f([R({flatten:!0})],a.FmtTimestamp.prototype,"_slottedNodes",2),f([p({attribute:"locale",reflect:!0})],a.FmtTimestamp.prototype,"locale",2),f([p({attribute:"timezone"})],a.FmtTimestamp.prototype,"timezone",2),f([M()],a.FmtTimestamp.prototype,"_slottedContent",2),a.FmtTimestamp=f([$("fmt-timestamp")],a.FmtTimestamp),a.formatRelativeTime=k,a.formatToShort=w,a.formatToTime=F,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
