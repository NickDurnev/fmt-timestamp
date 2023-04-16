import { css as J, LitElement as Q, html as X } from "lit";
const tt = (i, t) => {
  try {
    const s = new Date(i).getTime() - (/* @__PURE__ */ new Date()).getTime(), n = Math.sign(s), o = Math.abs(s), r = new Intl.RelativeTimeFormat(t, { numeric: "auto" }), c = Math.abs(o / 1e3);
    if (c < 60)
      return r.format(n * c, "second");
    const l = c / 60 >> 0;
    if (l < 60)
      return r.format(n * l, "minute");
    const a = l / 60 >> 0;
    if (a < 24)
      return r.format(n * a, "hour");
    const m = a / 24 >> 0;
    if (m < 7)
      return r.format(n * m, "day");
    const h = m / 7 >> 0;
    if (h < 4)
      return r.format(n * h, "week");
    const d = Math.round(o / 2592e6);
    if (d < 12)
      return r.format(n * d, "months");
    const v = o / 31536e6 >> 0;
    return r.format(n * v, "years");
  } catch {
    return null;
  }
}, et = (i, t, e, s) => {
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
}, it = (i) => {
  const t = new Date(i), e = t.getMinutes(), s = t.getHours();
  if (!t.getSeconds())
    return t;
  const o = e + 1 === 60 ? 0 : e + 1, r = e + 1 === 60 ? s + 1 : s;
  return t.setMinutes(o), t.setHours(r), t.setSeconds(0), t;
}, nt = (i, t, e) => {
  try {
    const s = it(i), n = {
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
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = (i) => (t) => typeof t == "function" ? ((e, s) => (customElements.define(e, s), s))(i, t) : ((e, s) => {
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
const ot = (i, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, i);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, i);
} };
function L(i) {
  return (t, e) => e !== void 0 ? ((s, n, o) => {
    n.constructor.createProperty(o, s);
  })(i, t, e) : ot(i, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function rt(i) {
  return L({ ...i, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = ({ finisher: i, descriptor: t }) => (e, s) => {
  var n;
  if (s === void 0) {
    const o = (n = e.originalKey) !== null && n !== void 0 ? n : e.key, r = t != null ? { kind: "method", placement: "prototype", key: o, descriptor: t(e.key) } : { ...e, key: o };
    return i != null && (r.finisher = function(c) {
      i(c, o);
    }), r;
  }
  {
    const o = e.constructor;
    t !== void 0 && Object.defineProperty(e, s, t(s)), i == null || i(o, s);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var I;
const lt = ((I = window.HTMLSlotElement) === null || I === void 0 ? void 0 : I.prototype.assignedElements) != null ? (i, t) => i.assignedElements(t) : (i, t) => i.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
function at(i) {
  const { slot: t, selector: e } = i ?? {};
  return Y({ descriptor: (s) => ({ get() {
    var n;
    const o = "slot" + (t ? `[name=${t}]` : ":not([name])"), r = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(o), c = r != null ? lt(r, i) : [];
    return e ? c.filter((l) => l.matches(e)) : c;
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ht(i, t, e) {
  let s, n = i;
  return typeof i == "object" ? (n = i.slot, s = i) : s = { flatten: t }, e ? at({ slot: n, flatten: t, selector: e }) : Y({ descriptor: (o) => ({ get() {
    var r, c;
    const l = "slot" + (n ? `[name=${n}]` : ":not([name])"), a = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(l);
    return (c = a == null ? void 0 : a.assignedNodes(s)) !== null && c !== void 0 ? c : [];
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var R;
const E = window, A = E.trustedTypes, P = A ? A.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, z = "$lit$", p = `lit$${(Math.random() + "").slice(9)}$`, Z = "?" + p, ct = `<${Z}>`, g = document, M = () => g.createComment(""), H = (i) => i === null || typeof i != "object" && typeof i != "function", q = Array.isArray, dt = (i) => q(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", O = `[ 	
\f\r]`, T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, U = /-->/g, j = />/g, $ = RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), F = /'/g, B = /"/g, K = /^(?:script|style|textarea|title)$/i, y = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), V = /* @__PURE__ */ new WeakMap(), _ = g.createTreeWalker(g, 129, null, !1), ut = (i, t) => {
  const e = i.length - 1, s = [];
  let n, o = t === 2 ? "<svg>" : "", r = T;
  for (let l = 0; l < e; l++) {
    const a = i[l];
    let m, h, d = -1, v = 0;
    for (; v < a.length && (r.lastIndex = v, h = r.exec(a), h !== null); )
      v = r.lastIndex, r === T ? h[1] === "!--" ? r = U : h[1] !== void 0 ? r = j : h[2] !== void 0 ? (K.test(h[2]) && (n = RegExp("</" + h[2], "g")), r = $) : h[3] !== void 0 && (r = $) : r === $ ? h[0] === ">" ? (r = n ?? T, d = -1) : h[1] === void 0 ? d = -2 : (d = r.lastIndex - h[2].length, m = h[1], r = h[3] === void 0 ? $ : h[3] === '"' ? B : F) : r === B || r === F ? r = $ : r === U || r === j ? r = T : (r = $, n = void 0);
    const C = r === $ && i[l + 1].startsWith("/>") ? " " : "";
    o += r === T ? a + ct : d >= 0 ? (s.push(m), a.slice(0, d) + z + a.slice(d) + p + C) : a + p + (d === -2 ? (s.push(void 0), l) : C);
  }
  const c = o + (i[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(i) || !i.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [P !== void 0 ? P.createHTML(c) : c, s];
};
class w {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let o = 0, r = 0;
    const c = t.length - 1, l = this.parts, [a, m] = ut(t, e);
    if (this.el = w.createElement(a, s), _.currentNode = this.el.content, e === 2) {
      const h = this.el.content, d = h.firstChild;
      d.remove(), h.append(...d.childNodes);
    }
    for (; (n = _.nextNode()) !== null && l.length < c; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const h = [];
          for (const d of n.getAttributeNames())
            if (d.endsWith(z) || d.startsWith(p)) {
              const v = m[r++];
              if (h.push(d), v !== void 0) {
                const C = n.getAttribute(v.toLowerCase() + z).split(p), N = /([.?@])?(.*)/.exec(v);
                l.push({ type: 1, index: o, name: N[2], strings: C, ctor: N[1] === "." ? vt : N[1] === "?" ? $t : N[1] === "@" ? ft : D });
              } else
                l.push({ type: 6, index: o });
            }
          for (const d of h)
            n.removeAttribute(d);
        }
        if (K.test(n.tagName)) {
          const h = n.textContent.split(p), d = h.length - 1;
          if (d > 0) {
            n.textContent = A ? A.emptyScript : "";
            for (let v = 0; v < d; v++)
              n.append(h[v], M()), _.nextNode(), l.push({ type: 2, index: ++o });
            n.append(h[d], M());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Z)
          l.push({ type: 2, index: o });
        else {
          let h = -1;
          for (; (h = n.data.indexOf(p, h + 1)) !== -1; )
            l.push({ type: 7, index: o }), h += p.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const s = g.createElement("template");
    return s.innerHTML = t, s;
  }
}
function b(i, t, e = i, s) {
  var n, o, r, c;
  if (t === y)
    return t;
  let l = s !== void 0 ? (n = e._$Co) === null || n === void 0 ? void 0 : n[s] : e._$Cl;
  const a = H(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== a && ((o = l == null ? void 0 : l._$AO) === null || o === void 0 || o.call(l, !1), a === void 0 ? l = void 0 : (l = new a(i), l._$AT(i, e, s)), s !== void 0 ? ((r = (c = e)._$Co) !== null && r !== void 0 ? r : c._$Co = [])[s] = l : e._$Cl = l), l !== void 0 && (t = b(i, l._$AS(i, t.values), l, s)), t;
}
class mt {
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
    const { el: { content: s }, parts: n } = this._$AD, o = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : g).importNode(s, !0);
    _.currentNode = o;
    let r = _.nextNode(), c = 0, l = 0, a = n[0];
    for (; a !== void 0; ) {
      if (c === a.index) {
        let m;
        a.type === 2 ? m = new k(r, r.nextSibling, this, t) : a.type === 1 ? m = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (m = new _t(r, this, t)), this._$AV.push(m), a = n[++l];
      }
      c !== (a == null ? void 0 : a.index) && (r = _.nextNode(), c++);
    }
    return o;
  }
  v(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class k {
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
    t = b(this, t, e), H(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== y && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : dt(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== u && H(this._$AH) ? this._$AA.nextSibling.data = t : this.$(g.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: s, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = w.createElement(n.h, this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o)
      this._$AH.v(s);
    else {
      const r = new mt(o, this), c = r.u(this.options);
      r.v(s), this.$(c), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = V.get(t.strings);
    return e === void 0 && V.set(t.strings, e = new w(t)), e;
  }
  T(t) {
    q(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, n = 0;
    for (const o of t)
      n === e.length ? e.push(s = new k(this.k(M()), this.k(M()), this, this.options)) : s = e[n], s._$AI(o), n++;
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
      t = b(this, t, e, 0), r = !H(t) || t !== this._$AH && t !== y, r && (this._$AH = t);
    else {
      const c = t;
      let l, a;
      for (t = o[0], l = 0; l < o.length - 1; l++)
        a = b(this, c[s + l], e, l), a === y && (a = this._$AH[l]), r || (r = !H(a) || a !== this._$AH[l]), a === u ? t = u : t !== u && (t += (a ?? "") + o[l + 1]), this._$AH[l] = a;
    }
    r && !n && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class vt extends D {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const pt = A ? A.emptyScript : "";
class $t extends D {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== u ? this.element.setAttribute(this.name, pt) : this.element.removeAttribute(this.name);
  }
}
class ft extends D {
  constructor(t, e, s, n, o) {
    super(t, e, s, n, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = b(this, t, e, 0)) !== null && s !== void 0 ? s : u) === y)
      return;
    const n = this._$AH, o = t === u && n !== u || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, r = t !== u && (n === u || o);
    o && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class _t {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    b(this, t);
  }
}
const W = E.litHtmlPolyfillSupport;
W == null || W(w, k), ((R = E.litHtmlVersions) !== null && R !== void 0 ? R : E.litHtmlVersions = []).push("2.7.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, gt = (i) => (...t) => ({ _$litDirective$: i, values: t });
class yt {
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
const bt = gt(class extends yt {
  constructor(i) {
    var t;
    if (super(i), i.type !== At.ATTRIBUTE || i.name !== "class" || ((t = i.strings) === null || t === void 0 ? void 0 : t.length) > 2)
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
    return y;
  }
}), Tt = (i) => {
  try {
    const t = new Intl.Locale(i);
    return i;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().locale;
  }
}, Ht = (i) => {
  try {
    return Intl.DateTimeFormat(void 0, { timeZone: i }).resolvedOptions(), i;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
};
var wt = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, x = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? xt(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && wt(t, e, n), n;
}, G = /* @__PURE__ */ ((i) => (i[i.formatRelativeTime = 0] = "formatRelativeTime", i[i.formatToShort = 1] = "formatToShort", i[i.formatToTime = 2] = "formatToTime", i))(G || {});
const S = [tt], Ct = (/* @__PURE__ */ new Date()).getFullYear();
let f = class extends Q {
  constructor() {
    super(...arguments), this.locale = "", this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone, this._slottedContent = "", this._formattedData = "", this.formatMode = 0;
  }
  willUpdate(i) {
    if (i.has("locale")) {
      const t = Tt(this.locale);
      this.locale = t;
    }
    if (i.has("timezone")) {
      const t = Ht(this.timezone);
      this.timezone = t;
    }
    this._formattedData = S[this.formatMode](
      this._slottedContent,
      this.locale,
      this.timezone,
      Ct
    );
  }
  _changeFormat(i) {
    this.formatMode = (this.formatMode + 1) % (Object.keys(G).length - 3), S.length < 3 && (this.formatMode === 2 ? S.push(et) : S.push(nt)), this.requestUpdate();
  }
  _handleSlotChange() {
    var i, t;
    this._slottedContent = (t = (i = this._slottedNodes[0]) == null ? void 0 : i.textContent) == null ? void 0 : t.trim();
  }
  render() {
    const i = {
      invalid: !this._formattedData
    };
    return X`
      <slot class="hidden-slot" @slotchange="${this._handleSlotChange}"></slot>
      <button @click="${this._changeFormat}">
        <p class=${bt(i)} title=${this._slottedContent}>
          ${this._formattedData ?? this._slottedContent}
        </p>
      </button>
    `;
  }
};
f.styles = J`
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
x([
  ht()
], f.prototype, "_slottedNodes", 2);
x([
  L({
    attribute: "locale",
    reflect: !0
  })
], f.prototype, "locale", 2);
x([
  L({ attribute: "timezone" })
], f.prototype, "timezone", 2);
x([
  rt()
], f.prototype, "_slottedContent", 2);
f = x([
  st("fmt-timestamp")
], f);
export {
  f as FmtTimestamp,
  tt as formatRelativeTime,
  et as formatToShort,
  nt as formatToTime,
  it as roundTime
};
