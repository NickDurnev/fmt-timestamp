const $t = (i, t) => {
  try {
    const s = new Date(i).getTime() - (/* @__PURE__ */ new Date()).getTime(), n = Math.sign(s), o = Math.abs(s), r = new Intl.RelativeTimeFormat(t, { numeric: "auto" }), h = Math.abs(o / 1e3);
    if (h < 60)
      return r.format(n * h, "second");
    const l = h / 60 >> 0;
    if (l < 60)
      return r.format(n * l, "minute");
    const a = l / 60 >> 0;
    if (a < 24)
      return r.format(n * a, "hour");
    const p = a / 24 >> 0;
    if (p < 7)
      return r.format(n * p, "day");
    const c = p / 7 >> 0;
    if (c < 4)
      return r.format(n * c, "week");
    const d = Math.round(o / 2592e6);
    if (d < 12)
      return r.format(n * d, "months");
    const v = o / 31536e6 >> 0;
    return r.format(n * v, "years");
  } catch {
    return null;
  }
}, mt = (i, t, e, s) => {
  try {
    const n = new Date(i), o = {
      day: "numeric",
      month: "short",
      // use abbreviated month names (e.g. Jan, Feb)
      year: n.getFullYear() === s ? void 0 : "2-digit",
      // include year only if it does not match current year
      // use last 2 digits of the year (e.g. 22, 15)
      timeZone: e
    };
    return new Intl.DateTimeFormat(t, o).format(n);
  } catch {
    return null;
  }
}, ft = (i) => {
  const t = new Date(i), e = t.getMinutes(), s = t.getHours();
  if (!t.getSeconds())
    return t;
  const o = e + 1 === 60 ? 0 : e + 1, r = e + 1 === 60 ? s + 1 : s;
  return t.setMinutes(o), t.setHours(r), t.setSeconds(0), t;
}, _t = (i, t, e) => {
  try {
    const s = ft(i), n = {
      hour: "numeric",
      minute: "numeric",
      timeZone: e
    };
    return new Intl.DateTimeFormat(
      t,
      // the locale to use when formatting the date.
      n
      // the options to use when formatting the time string.
    ).format(s);
  } catch {
    return null;
  }
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = window, K = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Y = Symbol(), J = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== Y)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (K && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = J.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && J.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const gt = (i) => new at(typeof i == "string" ? i : i + "", void 0, Y), yt = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, n, o) => s + ((r) => {
    if (r._$cssResult$ === !0)
      return r.cssText;
    if (typeof r == "number")
      return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[o + 1], i[0]);
  return new at(e, i, Y);
}, At = (i, t) => {
  K ? i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const s = document.createElement("style"), n = N.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = e.cssText, i.appendChild(s);
  });
}, G = K ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return gt(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;
const R = window, Q = R.trustedTypes, bt = Q ? Q.emptyScript : "", X = R.reactiveElementPolyfillSupport, q = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? bt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, ht = (i, t) => t !== i && (t == t || i == i), I = { attribute: !0, type: String, converter: q, reflect: !1, hasChanged: ht };
let g = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var e;
    this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, s) => {
      const n = this._$Ep(s, e);
      n !== void 0 && (this._$Ev.set(n, s), t.push(n));
    }), t;
  }
  static createProperty(t, e = I) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = typeof t == "symbol" ? Symbol() : "__" + t, n = this.getPropertyDescriptor(t, s, e);
      n !== void 0 && Object.defineProperty(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    return { get() {
      return this[e];
    }, set(n) {
      const o = this[t];
      this[e] = n, this.requestUpdate(t, o, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || I;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, s = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const n of s)
        this.createProperty(n, e[n]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const n of s)
        e.unshift(G(n));
    } else
      t !== void 0 && e.push(G(t));
    return e;
  }
  static _$Ep(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, s;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) === null || s === void 0 || s.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return At(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EO(t, e, s = I) {
    var n;
    const o = this.constructor._$Ep(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const r = (((n = s.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== void 0 ? s.converter : q).toAttribute(e, s.type);
      this._$El = t, r == null ? this.removeAttribute(o) : this.setAttribute(o, r), this._$El = null;
    }
  }
  _$AK(t, e) {
    var s;
    const n = this.constructor, o = n._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const r = n.getPropertyOptions(o), h = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((s = r.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? r.converter : q;
      this._$El = o, this[o] = h.fromAttribute(e, r.type), this._$El = null;
    }
  }
  requestUpdate(t, e, s) {
    let n = !0;
    t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || ht)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, s))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, o) => this[o] = n), this._$Ei = void 0);
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (t = this._$ES) === null || t === void 0 || t.forEach((n) => {
        var o;
        return (o = n.hostUpdate) === null || o === void 0 ? void 0 : o.call(n);
      }), this.update(s)) : this._$Ek();
    } catch (n) {
      throw e = !1, this._$Ek(), n;
    }
    e && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((s) => {
      var n;
      return (n = s.hostUpdated) === null || n === void 0 ? void 0 : n.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, s) => this._$EO(s, this[s], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
g.finalized = !0, g.elementProperties = /* @__PURE__ */ new Map(), g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, X == null || X({ ReactiveElement: g }), ((z = R.reactiveElementVersions) !== null && z !== void 0 ? z : R.reactiveElementVersions = []).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var j;
const M = window, A = M.trustedTypes, tt = A ? A.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, W = "$lit$", $ = `lit$${(Math.random() + "").slice(9)}$`, ct = "?" + $, Et = `<${ct}>`, b = document, C = () => b.createComment(""), T = (i) => i === null || typeof i != "object" && typeof i != "function", dt = Array.isArray, St = (i) => dt(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", L = `[ 	
\f\r]`, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, et = /-->/g, st = />/g, m = RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), it = /'/g, nt = /"/g, ut = /^(?:script|style|textarea|title)$/i, wt = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), Ct = wt(1), f = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), ot = /* @__PURE__ */ new WeakMap(), y = b.createTreeWalker(b, 129, null, !1), Tt = (i, t) => {
  const e = i.length - 1, s = [];
  let n, o = t === 2 ? "<svg>" : "", r = S;
  for (let l = 0; l < e; l++) {
    const a = i[l];
    let p, c, d = -1, v = 0;
    for (; v < a.length && (r.lastIndex = v, c = r.exec(a), c !== null); )
      v = r.lastIndex, r === S ? c[1] === "!--" ? r = et : c[1] !== void 0 ? r = st : c[2] !== void 0 ? (ut.test(c[2]) && (n = RegExp("</" + c[2], "g")), r = m) : c[3] !== void 0 && (r = m) : r === m ? c[0] === ">" ? (r = n ?? S, d = -1) : c[1] === void 0 ? d = -2 : (d = r.lastIndex - c[2].length, p = c[1], r = c[3] === void 0 ? m : c[3] === '"' ? nt : it) : r === nt || r === it ? r = m : r === et || r === st ? r = S : (r = m, n = void 0);
    const O = r === m && i[l + 1].startsWith("/>") ? " " : "";
    o += r === S ? a + Et : d >= 0 ? (s.push(p), a.slice(0, d) + W + a.slice(d) + $ + O) : a + $ + (d === -2 ? (s.push(void 0), l) : O);
  }
  const h = o + (i[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(i) || !i.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [tt !== void 0 ? tt.createHTML(h) : h, s];
};
class x {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let o = 0, r = 0;
    const h = t.length - 1, l = this.parts, [a, p] = Tt(t, e);
    if (this.el = x.createElement(a, s), y.currentNode = this.el.content, e === 2) {
      const c = this.el.content, d = c.firstChild;
      d.remove(), c.append(...d.childNodes);
    }
    for (; (n = y.nextNode()) !== null && l.length < h; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const c = [];
          for (const d of n.getAttributeNames())
            if (d.endsWith(W) || d.startsWith($)) {
              const v = p[r++];
              if (c.push(d), v !== void 0) {
                const O = n.getAttribute(v.toLowerCase() + W).split($), k = /([.?@])?(.*)/.exec(v);
                l.push({ type: 1, index: o, name: k[2], strings: O, ctor: k[1] === "." ? Pt : k[1] === "?" ? Ot : k[1] === "@" ? kt : D });
              } else
                l.push({ type: 6, index: o });
            }
          for (const d of c)
            n.removeAttribute(d);
        }
        if (ut.test(n.tagName)) {
          const c = n.textContent.split($), d = c.length - 1;
          if (d > 0) {
            n.textContent = A ? A.emptyScript : "";
            for (let v = 0; v < d; v++)
              n.append(c[v], C()), y.nextNode(), l.push({ type: 2, index: ++o });
            n.append(c[d], C());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === ct)
          l.push({ type: 2, index: o });
        else {
          let c = -1;
          for (; (c = n.data.indexOf($, c + 1)) !== -1; )
            l.push({ type: 7, index: o }), c += $.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const s = b.createElement("template");
    return s.innerHTML = t, s;
  }
}
function E(i, t, e = i, s) {
  var n, o, r, h;
  if (t === f)
    return t;
  let l = s !== void 0 ? (n = e._$Co) === null || n === void 0 ? void 0 : n[s] : e._$Cl;
  const a = T(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== a && ((o = l == null ? void 0 : l._$AO) === null || o === void 0 || o.call(l, !1), a === void 0 ? l = void 0 : (l = new a(i), l._$AT(i, e, s)), s !== void 0 ? ((r = (h = e)._$Co) !== null && r !== void 0 ? r : h._$Co = [])[s] = l : e._$Cl = l), l !== void 0 && (t = E(i, l._$AS(i, t.values), l, s)), t;
}
class xt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const { el: { content: s }, parts: n } = this._$AD, o = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : b).importNode(s, !0);
    y.currentNode = o;
    let r = y.nextNode(), h = 0, l = 0, a = n[0];
    for (; a !== void 0; ) {
      if (h === a.index) {
        let p;
        a.type === 2 ? p = new P(r, r.nextSibling, this, t) : a.type === 1 ? p = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (p = new Ht(r, this, t)), this._$AV.push(p), a = n[++l];
      }
      h !== (a == null ? void 0 : a.index) && (r = y.nextNode(), h++);
    }
    return o;
  }
  v(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class P {
  constructor(t, e, s, n) {
    var o;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = n, this._$Cp = (o = n == null ? void 0 : n.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), T(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== f && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : St(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== u && T(this._$AH) ? this._$AA.nextSibling.data = t : this.$(b.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: s, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = x.createElement(n.h, this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o)
      this._$AH.v(s);
    else {
      const r = new xt(o, this), h = r.u(this.options);
      r.v(s), this.$(h), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = ot.get(t.strings);
    return e === void 0 && ot.set(t.strings, e = new x(t)), e;
  }
  T(t) {
    dt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, n = 0;
    for (const o of t)
      n === e.length ? e.push(s = new P(this.k(C()), this.k(C()), this, this.options)) : s = e[n], s._$AI(o), n++;
    n < e.length && (this._$AR(s && s._$AB.nextSibling, n), e.length = n);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class D {
  constructor(t, e, s, n, o) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, n) {
    const o = this.strings;
    let r = !1;
    if (o === void 0)
      t = E(this, t, e, 0), r = !T(t) || t !== this._$AH && t !== f, r && (this._$AH = t);
    else {
      const h = t;
      let l, a;
      for (t = o[0], l = 0; l < o.length - 1; l++)
        a = E(this, h[s + l], e, l), a === f && (a = this._$AH[l]), r || (r = !T(a) || a !== this._$AH[l]), a === u ? t = u : t !== u && (t += (a ?? "") + o[l + 1]), this._$AH[l] = a;
    }
    r && !n && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Pt extends D {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const Ut = A ? A.emptyScript : "";
class Ot extends D {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== u ? this.element.setAttribute(this.name, Ut) : this.element.removeAttribute(this.name);
  }
}
class kt extends D {
  constructor(t, e, s, n, o) {
    super(t, e, s, n, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = E(this, t, e, 0)) !== null && s !== void 0 ? s : u) === f)
      return;
    const n = this._$AH, o = t === u && n !== u || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, r = t !== u && (n === u || o);
    o && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ht {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const rt = M.litHtmlPolyfillSupport;
rt == null || rt(x, P), ((j = M.litHtmlVersions) !== null && j !== void 0 ? j : M.litHtmlVersions = []).push("2.7.2");
const Nt = (i, t, e) => {
  var s, n;
  const o = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : t;
  let r = o._$litPart$;
  if (r === void 0) {
    const h = (n = e == null ? void 0 : e.renderBefore) !== null && n !== void 0 ? n : null;
    o._$litPart$ = r = new P(t.insertBefore(C(), h), h, void 0, e ?? {});
  }
  return r._$AI(i), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var B, F;
class w extends g {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const s = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = s.firstChild), s;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Nt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return f;
  }
}
w.finalized = !0, w._$litElement$ = !0, (B = globalThis.litElementHydrateSupport) === null || B === void 0 || B.call(globalThis, { LitElement: w });
const lt = globalThis.litElementPolyfillSupport;
lt == null || lt({ LitElement: w });
((F = globalThis.litElementVersions) !== null && F !== void 0 ? F : globalThis.litElementVersions = []).push("3.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = ({ finisher: i, descriptor: t }) => (e, s) => {
  var n;
  if (s === void 0) {
    const o = (n = e.originalKey) !== null && n !== void 0 ? n : e.key, r = t != null ? { kind: "method", placement: "prototype", key: o, descriptor: t(e.key) } : { ...e, key: o };
    return i != null && (r.finisher = function(h) {
      i(h, o);
    }), r;
  }
  {
    const o = e.constructor;
    t !== void 0 && Object.defineProperty(e, s, t(s)), i == null || i(o, s);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = (i) => (t) => typeof t == "function" ? ((e, s) => (customElements.define(e, s), s))(i, t) : ((e, s) => {
  const { kind: n, elements: o } = s;
  return { kind: n, elements: o, finisher(r) {
    customElements.define(e, r);
  } };
})(i, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt = (i, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, i);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, i);
} };
function Z(i) {
  return (t, e) => e !== void 0 ? ((s, n, o) => {
    n.constructor.createProperty(o, s);
  })(i, t, e) : Mt(i, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Dt(i) {
  return Z({ ...i, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V;
const zt = ((V = window.HTMLSlotElement) === null || V === void 0 ? void 0 : V.prototype.assignedElements) != null ? (i, t) => i.assignedElements(t) : (i, t) => i.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
function It(i) {
  const { slot: t, selector: e } = i ?? {};
  return pt({ descriptor: (s) => ({ get() {
    var n;
    const o = "slot" + (t ? `[name=${t}]` : ":not([name])"), r = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(o), h = r != null ? zt(r, i) : [];
    return e ? h.filter((l) => l.matches(e)) : h;
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function jt(i, t, e) {
  let s, n = i;
  return typeof i == "object" ? (n = i.slot, s = i) : s = { flatten: t }, e ? It({ slot: n, flatten: t, selector: e }) : pt({ descriptor: (o) => ({ get() {
    var r, h;
    const l = "slot" + (n ? `[name=${n}]` : ":not([name])"), a = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(l);
    return (h = a == null ? void 0 : a.assignedNodes(s)) !== null && h !== void 0 ? h : [];
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Bt = (i) => (...t) => ({ _$litDirective$: i, values: t });
class Ft {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vt = Bt(class extends Ft {
  constructor(i) {
    var t;
    if (super(i), i.type !== Lt.ATTRIBUTE || i.name !== "class" || ((t = i.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return " " + Object.keys(i).filter((t) => i[t]).join(" ") + " ";
  }
  update(i, [t]) {
    var e, s;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), i.strings !== void 0 && (this.nt = new Set(i.strings.join(" ").split(/\s/).filter((o) => o !== "")));
      for (const o in t)
        t[o] && !(!((e = this.nt) === null || e === void 0) && e.has(o)) && this.it.add(o);
      return this.render(t);
    }
    const n = i.element.classList;
    this.it.forEach((o) => {
      o in t || (n.remove(o), this.it.delete(o));
    });
    for (const o in t) {
      const r = !!t[o];
      r === this.it.has(o) || !((s = this.nt) === null || s === void 0) && s.has(o) || (r ? (n.add(o), this.it.add(o)) : (n.remove(o), this.it.delete(o)));
    }
    return f;
  }
}), qt = (i) => {
  try {
    const t = new Intl.Locale(i);
    return i;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().locale;
  }
}, Wt = (i) => {
  try {
    return Intl.DateTimeFormat(void 0, { timeZone: i }).resolvedOptions(), i;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
};
var Kt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, U = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Yt(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && Kt(t, e, n), n;
}, vt = /* @__PURE__ */ ((i) => (i[i.formatRelativeTime = 0] = "formatRelativeTime", i[i.formatToShort = 1] = "formatToShort", i[i.formatToTime = 2] = "formatToTime", i))(vt || {});
const H = [$t], Zt = (/* @__PURE__ */ new Date()).getFullYear();
let _ = class extends w {
  constructor() {
    super(...arguments), this.locale = "", this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone, this._slottedContent = "", this._formattedData = "", this.formatMode = 0;
  }
  willUpdate(i) {
    if (i.has("locale")) {
      const t = qt(this.locale);
      this.locale = t;
    }
    if (i.has("timezone")) {
      const t = Wt(this.timezone);
      this.timezone = t;
    }
    this._formattedData = H[this.formatMode](
      this._slottedContent,
      this.locale,
      this.timezone,
      Zt
    );
  }
  _changeFormat(i) {
    this.formatMode = (this.formatMode + 1) % (Object.keys(vt).length - 3), H.length < 3 && (this.formatMode === 2 ? H.push(mt) : H.push(_t)), this.requestUpdate();
  }
  _handleSlotChange() {
    var i, t;
    this._slottedContent = (t = (i = this._slottedNodes[0]) == null ? void 0 : i.textContent) == null ? void 0 : t.trim();
  }
  render() {
    const i = {
      invalid: !this._formattedData
    };
    return Ct`
      <slot class="hidden-slot" @slotchange="${this._handleSlotChange}"></slot>
      <button @click="${this._changeFormat}">
        <p class=${Vt(i)} title=${this._slottedContent}>
          ${this._formattedData ?? this._slottedContent}
        </p>
      </button>
    `;
  }
};
_.styles = yt`
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
  `;
U([
  jt()
], _.prototype, "_slottedNodes", 2);
U([
  Z({
    attribute: "locale",
    reflect: !0
  })
], _.prototype, "locale", 2);
U([
  Z({ attribute: "timezone" })
], _.prototype, "timezone", 2);
U([
  Dt()
], _.prototype, "_slottedContent", 2);
_ = U([
  Rt("fmt-timestamp")
], _);
export {
  _ as FmtTimestamp,
  $t as formatRelativeTime,
  mt as formatToShort,
  _t as formatToTime,
  ft as roundTime
};
