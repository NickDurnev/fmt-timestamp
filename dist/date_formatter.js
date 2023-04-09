import { css as J, LitElement as Q, html as X } from "lit";
import tt from "./formatToRelative.js";
import et from "./formatToShort.js";
import it from "./formatToTime.js";
import "./isValidLocale-d87d3605.js";
import "./isValidTimeZone-434ac3c1.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = (n) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(n, t) : ((e, i) => {
  const { kind: s, elements: o } = i;
  return { kind: s, elements: o, finisher(r) {
    customElements.define(e, r);
  } };
})(n, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = (n, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, n);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, n);
} };
function j(n) {
  return (t, e) => e !== void 0 ? ((i, s, o) => {
    s.constructor.createProperty(o, i);
  })(n, t, e) : nt(n, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ot(n) {
  return j({ ...n, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = ({ finisher: n, descriptor: t }) => (e, i) => {
  var s;
  if (i === void 0) {
    const o = (s = e.originalKey) !== null && s !== void 0 ? s : e.key, r = t != null ? { kind: "method", placement: "prototype", key: o, descriptor: t(e.key) } : { ...e, key: o };
    return n != null && (r.finisher = function(d) {
      n(d, o);
    }), r;
  }
  {
    const o = e.constructor;
    t !== void 0 && Object.defineProperty(e, i, t(i)), n == null || n(o, i);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k;
const rt = ((k = window.HTMLSlotElement) === null || k === void 0 ? void 0 : k.prototype.assignedElements) != null ? (n, t) => n.assignedElements(t) : (n, t) => n.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
function lt(n) {
  const { slot: t, selector: e } = n ?? {};
  return V({ descriptor: (i) => ({ get() {
    var s;
    const o = "slot" + (t ? `[name=${t}]` : ":not([name])"), r = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(o), d = r != null ? rt(r, n) : [];
    return e ? d.filter((l) => l.matches(e)) : d;
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ht(n, t, e) {
  let i, s = n;
  return typeof n == "object" ? (s = n.slot, i = n) : i = { flatten: t }, e ? lt({ slot: s, flatten: t, selector: e }) : V({ descriptor: (o) => ({ get() {
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
const E = window, A = E.trustedTypes, L = A ? A.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, U = "$lit$", $ = `lit$${(Math.random() + "").slice(9)}$`, K = "?" + $, at = `<${K}>`, g = document, S = () => g.createComment(""), T = (n) => n === null || typeof n != "object" && typeof n != "function", Y = Array.isArray, dt = (n) => Y(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", P = `[ 	
\f\r]`, b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, O = /-->/g, B = />/g, v = RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), z = /'/g, Z = /"/g, G = /^(?:script|style|textarea|title)$/i, y = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), W = /* @__PURE__ */ new WeakMap(), f = g.createTreeWalker(g, 129, null, !1), ct = (n, t) => {
  const e = n.length - 1, i = [];
  let s, o = t === 2 ? "<svg>" : "", r = b;
  for (let l = 0; l < e; l++) {
    const h = n[l];
    let _, a, c = -1, p = 0;
    for (; p < h.length && (r.lastIndex = p, a = r.exec(h), a !== null); )
      p = r.lastIndex, r === b ? a[1] === "!--" ? r = O : a[1] !== void 0 ? r = B : a[2] !== void 0 ? (G.test(a[2]) && (s = RegExp("</" + a[2], "g")), r = v) : a[3] !== void 0 && (r = v) : r === v ? a[0] === ">" ? (r = s ?? b, c = -1) : a[1] === void 0 ? c = -2 : (c = r.lastIndex - a[2].length, _ = a[1], r = a[3] === void 0 ? v : a[3] === '"' ? Z : z) : r === Z || r === z ? r = v : r === O || r === B ? r = b : (r = v, s = void 0);
    const N = r === v && n[l + 1].startsWith("/>") ? " " : "";
    o += r === b ? h + at : c >= 0 ? (i.push(_), h.slice(0, c) + U + h.slice(c) + $ + N) : h + $ + (c === -2 ? (i.push(void 0), l) : N);
  }
  const d = o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [L !== void 0 ? L.createHTML(d) : d, i];
};
class w {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let o = 0, r = 0;
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
                l.push({ type: 1, index: o, name: C[2], strings: N, ctor: C[1] === "." ? pt : C[1] === "?" ? $t : C[1] === "@" ? vt : I });
              } else
                l.push({ type: 6, index: o });
            }
          for (const c of a)
            s.removeAttribute(c);
        }
        if (G.test(s.tagName)) {
          const a = s.textContent.split($), c = a.length - 1;
          if (c > 0) {
            s.textContent = A ? A.emptyScript : "";
            for (let p = 0; p < c; p++)
              s.append(a[p], S()), f.nextNode(), l.push({ type: 2, index: ++o });
            s.append(a[c], S());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === K)
          l.push({ type: 2, index: o });
        else {
          let a = -1;
          for (; (a = s.data.indexOf($, a + 1)) !== -1; )
            l.push({ type: 7, index: o }), a += $.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const i = g.createElement("template");
    return i.innerHTML = t, i;
  }
}
function x(n, t, e = n, i) {
  var s, o, r, d;
  if (t === y)
    return t;
  let l = i !== void 0 ? (s = e._$Co) === null || s === void 0 ? void 0 : s[i] : e._$Cl;
  const h = T(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((o = l == null ? void 0 : l._$AO) === null || o === void 0 || o.call(l, !1), h === void 0 ? l = void 0 : (l = new h(n), l._$AT(n, e, i)), i !== void 0 ? ((r = (d = e)._$Co) !== null && r !== void 0 ? r : d._$Co = [])[i] = l : e._$Cl = l), l !== void 0 && (t = x(n, l._$AS(n, t.values), l, i)), t;
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
    const { el: { content: i }, parts: s } = this._$AD, o = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : g).importNode(i, !0);
    f.currentNode = o;
    let r = f.nextNode(), d = 0, l = 0, h = s[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let _;
        h.type === 2 ? _ = new M(r, r.nextSibling, this, t) : h.type === 1 ? _ = new h.ctor(r, h.name, h.strings, this, t) : h.type === 6 && (_ = new mt(r, this, t)), this.u.push(_), h = s[++l];
      }
      d !== (h == null ? void 0 : h.index) && (r = f.nextNode(), d++);
    }
    return o;
  }
  p(t) {
    let e = 0;
    for (const i of this.u)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class M {
  constructor(t, e, i, s) {
    var o;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cm = (o = s == null ? void 0 : s.isConnected) === null || o === void 0 || o;
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
    const { values: i, _$litType$: s } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = w.createElement(s.h, this.options)), s);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o)
      this._$AH.p(i);
    else {
      const r = new ut(o, this), d = r.v(this.options);
      r.p(i), this.T(d), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = W.get(t.strings);
    return e === void 0 && W.set(t.strings, e = new w(t)), e;
  }
  k(t) {
    Y(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const o of t)
      s === e.length ? e.push(i = new M(this.S(S()), this.S(S()), this, this.options)) : i = e[s], i._$AI(o), s++;
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
  constructor(t, e, i, s, o) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const o = this.strings;
    let r = !1;
    if (o === void 0)
      t = x(this, t, e, 0), r = !T(t) || t !== this._$AH && t !== y, r && (this._$AH = t);
    else {
      const d = t;
      let l, h;
      for (t = o[0], l = 0; l < o.length - 1; l++)
        h = x(this, d[i + l], e, l), h === y && (h = this._$AH[l]), r || (r = !T(h) || h !== this._$AH[l]), h === u ? t = u : t !== u && (t += (h ?? "") + o[l + 1]), this._$AH[l] = h;
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
  constructor(t, e, i, s, o) {
    super(t, e, i, s, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = x(this, t, e, 0)) !== null && i !== void 0 ? i : u) === y)
      return;
    const s = this._$AH, o = t === u && s !== u || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== u && (s === u || o);
    o && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
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
const q = E.litHtmlPolyfillSupport;
q == null || q(w, M), ((D = E.litHtmlVersions) !== null && D !== void 0 ? D : E.litHtmlVersions = []).push("2.7.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, At = (n) => (...t) => ({ _$litDirective$: n, values: t });
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
const F = At(class extends gt {
  constructor(n) {
    var t;
    if (super(n), n.type !== ft.ATTRIBUTE || n.name !== "class" || ((t = n.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return " " + Object.keys(n).filter((t) => n[t]).join(" ") + " ";
  }
  update(n, [t]) {
    var e, i;
    if (this.nt === void 0) {
      this.nt = /* @__PURE__ */ new Set(), n.strings !== void 0 && (this.st = new Set(n.strings.join(" ").split(/\s/).filter((o) => o !== "")));
      for (const o in t)
        t[o] && !(!((e = this.st) === null || e === void 0) && e.has(o)) && this.nt.add(o);
      return this.render(t);
    }
    const s = n.element.classList;
    this.nt.forEach((o) => {
      o in t || (s.remove(o), this.nt.delete(o));
    });
    for (const o in t) {
      const r = !!t[o];
      r === this.nt.has(o) || !((i = this.st) === null || i === void 0) && i.has(o) || (r ? (s.add(o), this.nt.add(o)) : (s.remove(o), this.nt.delete(o)));
    }
    return y;
  }
});
var yt = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, H = (n, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? xt(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && yt(t, e, s), s;
};
const R = [
  tt,
  et,
  it
];
let m = class extends Q {
  constructor() {
    super(...arguments), this.locale = "", this.timeZone = "", this._slottedContent = "", this._formattedData = "", this._functionIndex = 0, this._showedTooltip = !1;
  }
  _changeFormat(n) {
    this._functionIndex === R.length - 1 ? this._functionIndex = 0 : this._functionIndex++, this._formattedData = R[this._functionIndex](
      this._slottedContent,
      this.locale,
      this.timeZone
    ), this.requestUpdate();
  }
  _handleSlotChange() {
    var n, t;
    this._slottedContent = (t = (n = this._slottedNodes[0]) == null ? void 0 : n.textContent) == null ? void 0 : t.trim(), this._formattedData = R[this._functionIndex](
      this._slottedContent,
      this.locale
    );
  }
  //additional animation method
  _toggleShowed() {
    this._showedTooltip = !this._showedTooltip, this.requestUpdate();
  }
  render() {
    const n = {
      hidden: this._showedTooltip === !1,
      showed: this._showedTooltip
    }, t = {
      invalid: !this._formattedData
    };
    return X`<div>
      <p class=${F(n)}>
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </p>
      <button
        @click="${this._changeFormat}"
      >
        <p class=${F(t)} title=${this._slottedContent}>
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
  `;
H([
  ht()
], m.prototype, "_slottedNodes", 2);
H([
  j({ attribute: "locale", reflect: !0 })
], m.prototype, "locale", 2);
H([
  j({ attribute: "timeZone", reflect: !0 })
], m.prototype, "timeZone", 2);
H([
  ot()
], m.prototype, "_slottedContent", 2);
m = H([
  st("date-formatter")
], m);
export {
  m as DateFormatter
};
