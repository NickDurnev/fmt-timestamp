import { css as J, LitElement as Q, html as X } from "lit";
import tt from "./formatToRelative.js";
import et from "./formatToShort.js";
import { f as it } from "./roundTime-2327a0f0.js";
import "./isValidLocale-d87d3605.js";
import "./isValidTimeZone-434ac3c1.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = (o) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(o, t) : ((e, i) => {
  const { kind: s, elements: n } = i;
  return { kind: s, elements: n, finisher(r) {
    customElements.define(e, r);
  } };
})(o, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = (o, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, o);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, o);
} };
function j(o) {
  return (t, e) => e !== void 0 ? ((i, s, n) => {
    s.constructor.createProperty(n, i);
  })(o, t, e) : ot(o, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function nt(o) {
  return j({ ...o, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = ({ finisher: o, descriptor: t }) => (e, i) => {
  var s;
  if (i === void 0) {
    const n = (s = e.originalKey) !== null && s !== void 0 ? s : e.key, r = t != null ? { kind: "method", placement: "prototype", key: n, descriptor: t(e.key) } : { ...e, key: n };
    return o != null && (r.finisher = function(d) {
      o(d, n);
    }), r;
  }
  {
    const n = e.constructor;
    t !== void 0 && Object.defineProperty(e, i, t(i)), o == null || o(n, i);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k;
const rt = ((k = window.HTMLSlotElement) === null || k === void 0 ? void 0 : k.prototype.assignedElements) != null ? (o, t) => o.assignedElements(t) : (o, t) => o.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
function lt(o) {
  const { slot: t, selector: e } = o ?? {};
  return K({ descriptor: (i) => ({ get() {
    var s;
    const n = "slot" + (t ? `[name=${t}]` : ":not([name])"), r = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(n), d = r != null ? rt(r, o) : [];
    return e ? d.filter((l) => l.matches(e)) : d;
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ht(o, t, e) {
  let i, s = o;
  return typeof o == "object" ? (s = o.slot, i = o) : i = { flatten: t }, e ? lt({ slot: s, flatten: t, selector: e }) : K({ descriptor: (n) => ({ get() {
    var r, d;
    const l = "slot" + (s ? `[name=${s}]` : ":not([name])"), h = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(l);
    return (d = h == null ? void 0 : h.assignedNodes(i)) !== null && d !== void 0 ? d : [];
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var D;
const E = window, A = E.trustedTypes, L = A ? A.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, U = "$lit$", $ = `lit$${(Math.random() + "").slice(9)}$`, Z = "?" + $, at = `<${Z}>`, g = document, S = () => g.createComment(""), T = (o) => o === null || typeof o != "object" && typeof o != "function", Y = Array.isArray, dt = (o) => Y(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", P = `[ 	
\f\r]`, b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, z = /-->/g, O = />/g, v = RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), B = /'/g, W = /"/g, G = /^(?:script|style|textarea|title)$/i, y = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), q = /* @__PURE__ */ new WeakMap(), f = g.createTreeWalker(g, 129, null, !1), ct = (o, t) => {
  const e = o.length - 1, i = [];
  let s, n = t === 2 ? "<svg>" : "", r = b;
  for (let l = 0; l < e; l++) {
    const h = o[l];
    let _, a, c = -1, p = 0;
    for (; p < h.length && (r.lastIndex = p, a = r.exec(h), a !== null); )
      p = r.lastIndex, r === b ? a[1] === "!--" ? r = z : a[1] !== void 0 ? r = O : a[2] !== void 0 ? (G.test(a[2]) && (s = RegExp("</" + a[2], "g")), r = v) : a[3] !== void 0 && (r = v) : r === v ? a[0] === ">" ? (r = s ?? b, c = -1) : a[1] === void 0 ? c = -2 : (c = r.lastIndex - a[2].length, _ = a[1], r = a[3] === void 0 ? v : a[3] === '"' ? W : B) : r === W || r === B ? r = v : r === z || r === O ? r = b : (r = v, s = void 0);
    const N = r === v && o[l + 1].startsWith("/>") ? " " : "";
    n += r === b ? h + at : c >= 0 ? (i.push(_), h.slice(0, c) + U + h.slice(c) + $ + N) : h + $ + (c === -2 ? (i.push(void 0), l) : N);
  }
  const d = n + (o[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(o) || !o.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [L !== void 0 ? L.createHTML(d) : d, i];
};
class w {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let n = 0, r = 0;
    const d = t.length - 1, l = this.parts, [h, _] = ct(t, e);
    if (this.el = w.createElement(h, i), f.currentNode = this.el.content, e === 2) {
      const a = this.el.content, c = a.firstChild;
      c.remove(), a.append(...c.childNodes);
    }
    for (; (s = f.nextNode()) !== null && l.length < d; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const a = [];
          for (const c of s.getAttributeNames())
            if (c.endsWith(U) || c.startsWith($)) {
              const p = _[r++];
              if (a.push(c), p !== void 0) {
                const N = s.getAttribute(p.toLowerCase() + U).split($), C = /([.?@])?(.*)/.exec(p);
                l.push({ type: 1, index: n, name: C[2], strings: N, ctor: C[1] === "." ? pt : C[1] === "?" ? $t : C[1] === "@" ? vt : I });
              } else
                l.push({ type: 6, index: n });
            }
          for (const c of a)
            s.removeAttribute(c);
        }
        if (G.test(s.tagName)) {
          const a = s.textContent.split($), c = a.length - 1;
          if (c > 0) {
            s.textContent = A ? A.emptyScript : "";
            for (let p = 0; p < c; p++)
              s.append(a[p], S()), f.nextNode(), l.push({ type: 2, index: ++n });
            s.append(a[c], S());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === Z)
          l.push({ type: 2, index: n });
        else {
          let a = -1;
          for (; (a = s.data.indexOf($, a + 1)) !== -1; )
            l.push({ type: 7, index: n }), a += $.length - 1;
        }
      n++;
    }
  }
  static createElement(t, e) {
    const i = g.createElement("template");
    return i.innerHTML = t, i;
  }
}
function x(o, t, e = o, i) {
  var s, n, r, d;
  if (t === y)
    return t;
  let l = i !== void 0 ? (s = e._$Co) === null || s === void 0 ? void 0 : s[i] : e._$Cl;
  const h = T(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((n = l == null ? void 0 : l._$AO) === null || n === void 0 || n.call(l, !1), h === void 0 ? l = void 0 : (l = new h(o), l._$AT(o, e, i)), i !== void 0 ? ((r = (d = e)._$Co) !== null && r !== void 0 ? r : d._$Co = [])[i] = l : e._$Cl = l), l !== void 0 && (t = x(o, l._$AS(o, t.values), l, i)), t;
}
class ut {
  constructor(t, e) {
    this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t) {
    var e;
    const { el: { content: i }, parts: s } = this._$AD, n = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : g).importNode(i, !0);
    f.currentNode = n;
    let r = f.nextNode(), d = 0, l = 0, h = s[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let _;
        h.type === 2 ? _ = new M(r, r.nextSibling, this, t) : h.type === 1 ? _ = new h.ctor(r, h.name, h.strings, this, t) : h.type === 6 && (_ = new mt(r, this, t)), this.u.push(_), h = s[++l];
      }
      d !== (h == null ? void 0 : h.index) && (r = f.nextNode(), d++);
    }
    return n;
  }
  p(t) {
    let e = 0;
    for (const i of this.u)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class M {
  constructor(t, e, i, s) {
    var n;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cm = (n = s == null ? void 0 : s.isConnected) === null || n === void 0 || n;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cm;
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
    t = x(this, t, e), T(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== y && this.g(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : dt(t) ? this.k(t) : this.g(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  g(t) {
    this._$AH !== u && T(this._$AH) ? this._$AA.nextSibling.data = t : this.T(g.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: i, _$litType$: s } = t, n = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = w.createElement(s.h, this.options)), s);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === n)
      this._$AH.p(i);
    else {
      const r = new ut(n, this), d = r.v(this.options);
      r.p(i), this.T(d), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = q.get(t.strings);
    return e === void 0 && q.set(t.strings, e = new w(t)), e;
  }
  k(t) {
    Y(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const n of t)
      s === e.length ? e.push(i = new M(this.S(S()), this.S(S()), this, this.options)) : i = e[s], i._$AI(n), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cm = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class I {
  constructor(t, e, i, s, n) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const n = this.strings;
    let r = !1;
    if (n === void 0)
      t = x(this, t, e, 0), r = !T(t) || t !== this._$AH && t !== y, r && (this._$AH = t);
    else {
      const d = t;
      let l, h;
      for (t = n[0], l = 0; l < n.length - 1; l++)
        h = x(this, d[i + l], e, l), h === y && (h = this._$AH[l]), r || (r = !T(h) || h !== this._$AH[l]), h === u ? t = u : t !== u && (t += (h ?? "") + n[l + 1]), this._$AH[l] = h;
    }
    r && !s && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class pt extends I {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const _t = A ? A.emptyScript : "";
class $t extends I {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== u ? this.element.setAttribute(this.name, _t) : this.element.removeAttribute(this.name);
  }
}
class vt extends I {
  constructor(t, e, i, s, n) {
    super(t, e, i, s, n), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = x(this, t, e, 0)) !== null && i !== void 0 ? i : u) === y)
      return;
    const s = this._$AH, n = t === u && s !== u || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== u && (s === u || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class mt {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    x(this, t);
  }
}
const F = E.litHtmlPolyfillSupport;
F == null || F(w, M), ((D = E.litHtmlVersions) !== null && D !== void 0 ? D : E.litHtmlVersions = []).push("2.7.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, At = (o) => (...t) => ({ _$litDirective$: o, values: t });
class gt {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
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
const V = At(class extends gt {
  constructor(o) {
    var t;
    if (super(o), o.type !== ft.ATTRIBUTE || o.name !== "class" || ((t = o.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(o) {
    return " " + Object.keys(o).filter((t) => o[t]).join(" ") + " ";
  }
  update(o, [t]) {
    var e, i;
    if (this.nt === void 0) {
      this.nt = /* @__PURE__ */ new Set(), o.strings !== void 0 && (this.st = new Set(o.strings.join(" ").split(/\s/).filter((n) => n !== "")));
      for (const n in t)
        t[n] && !(!((e = this.st) === null || e === void 0) && e.has(n)) && this.nt.add(n);
      return this.render(t);
    }
    const s = o.element.classList;
    this.nt.forEach((n) => {
      n in t || (s.remove(n), this.nt.delete(n));
    });
    for (const n in t) {
      const r = !!t[n];
      r === this.nt.has(n) || !((i = this.st) === null || i === void 0) && i.has(n) || (r ? (s.add(n), this.nt.add(n)) : (s.remove(n), this.nt.delete(n)));
    }
    return y;
  }
});
var yt = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, H = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? xt(t, e) : t, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && yt(t, e, s), s;
};
const R = [
  tt,
  et,
  it
];
let m = class extends Q {
  constructor() {
    super(...arguments), this.locale = "", this.timezone = "", this._slottedContent = "", this._formattedData = "", this._functionIndex = 0, this._showedTooltip = !1;
  }
  _changeFormat(o) {
    this._functionIndex === R.length - 1 ? this._functionIndex = 0 : this._functionIndex++, this._formattedData = R[this._functionIndex](
      this._slottedContent,
      this.locale,
      this.timezone
    ), this.requestUpdate();
  }
  _handleSlotChange() {
    var o, t;
    this._slottedContent = (t = (o = this._slottedNodes[0]) == null ? void 0 : o.textContent) == null ? void 0 : t.trim(), this._formattedData = R[this._functionIndex](
      this._slottedContent,
      this.locale,
      this.timezone
    );
  }
  //additional animation method
  _toggleShowed() {
    this._showedTooltip = !this._showedTooltip, this.requestUpdate();
  }
  render() {
    const o = {
      hidden: this._showedTooltip === !1,
      showed: this._showedTooltip
    }, t = {
      invalid: !this._formattedData
    };
    return X`<div>
      <p class=${V(o)}>
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </p>
      <button @click="${this._changeFormat}">
        <p class=${V(t)} title=${this._slottedContent}>
          ${this._formattedData ? this._formattedData : this._slottedContent}
        </p>
      </button>
      <!-- <button
        @mouseenter="${this._toggleShowed}"
        @mouseleave="${this._toggleShowed}"
      >
        Toggle Tooltip
      </button> -->
    </div>`;
  }
};
m.styles = J`
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
      margin-bottom:10px;
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
      display: none;
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
  `;
H([
  ht()
], m.prototype, "_slottedNodes", 2);
H([
  j({ attribute: "locale", reflect: !0 })
], m.prototype, "locale", 2);
H([
  j({ attribute: "timezone", reflect: !0 })
], m.prototype, "timezone", 2);
H([
  nt()
], m.prototype, "_slottedContent", 2);
m = H([
  st("date-formatter")
], m);
export {
  m as DateFormatter
};
