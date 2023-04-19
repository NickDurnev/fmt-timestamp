import { css as k, LitElement as b, html as C } from "lit";
const F = (t, e) => {
  try {
    const r = new Date(t).getTime() - (/* @__PURE__ */ new Date()).getTime(), o = Math.sign(r), i = Math.abs(r), s = 1e3 * 60 * 60 * 24 * 30, l = 1e3 * 60 * 60 * 24 * 365, a = new Intl.RelativeTimeFormat(e, { numeric: "auto" }), m = i / 1e3;
    if (m < 60)
      return a.format(o * m, "second");
    const h = m / 60 >> 0;
    if (h < 60)
      return a.format(o * h, "minute");
    const f = h / 60 >> 0;
    if (f < 24)
      return a.format(o * f, "hour");
    const p = f / 24 >> 0;
    if (p < 7)
      return a.format(o * p, "day");
    const g = p / 7 >> 0;
    if (g < 4)
      return a.format(o * g, "week");
    const _ = Math.round(i / s);
    if (_ < 12)
      return a.format(o * _, "months");
    const D = i / l >> 0;
    return a.format(o * D, "years");
  } catch {
    return null;
  }
}, O = (t, e, n, r) => {
  try {
    const o = new Date(t), i = {
      day: "numeric",
      month: "short",
      // use abbreviated month names (e.g. Jan, Feb)
      year: o.getFullYear() === r ? void 0 : "2-digit",
      // include year only if it does not match current year
      // use last 2 digits of the year (e.g. 22, 15)
      timeZone: n
    };
    return new Intl.DateTimeFormat(e, i).format(o);
  } catch {
    return null;
  }
}, S = (t, e, n) => {
  try {
    const r = new Date(t), o = {
      hour: "numeric",
      minute: "numeric",
      timeZone: n
    };
    return new Intl.DateTimeFormat(
      e,
      // the locale to use when formatting the date.
      o
      // the options to use when formatting the time string.
    ).format(r);
  } catch {
    return null;
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = (t) => (e) => typeof e == "function" ? ((n, r) => (customElements.define(n, r), r))(t, e) : ((n, r) => {
  const { kind: o, elements: i } = r;
  return { kind: o, elements: i, finisher(s) {
    customElements.define(n, s);
  } };
})(t, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function y(t) {
  return (e, n) => n !== void 0 ? ((r, o, i) => {
    o.constructor.createProperty(i, r);
  })(t, e, n) : I(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function N(t) {
  return y({ ...t, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = ({ finisher: t, descriptor: e }) => (n, r) => {
  var o;
  if (r === void 0) {
    const i = (o = n.originalKey) !== null && o !== void 0 ? o : n.key, s = e != null ? { kind: "method", placement: "prototype", key: i, descriptor: e(n.key) } : { ...n, key: i };
    return t != null && (s.finisher = function(l) {
      t(l, i);
    }), s;
  }
  {
    const i = n.constructor;
    e !== void 0 && Object.defineProperty(n, r, e(r)), t == null || t(i, r);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;
const $ = ((v = window.HTMLSlotElement) === null || v === void 0 ? void 0 : v.prototype.assignedElements) != null ? (t, e) => t.assignedElements(e) : (t, e) => t.assignedNodes(e).filter((n) => n.nodeType === Node.ELEMENT_NODE);
function x(t) {
  const { slot: e, selector: n } = t ?? {};
  return T({ descriptor: (r) => ({ get() {
    var o;
    const i = "slot" + (e ? `[name=${e}]` : ":not([name])"), s = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(i), l = s != null ? $(s, t) : [];
    return n ? l.filter((a) => a.matches(n)) : l;
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function L(t, e, n) {
  let r, o = t;
  return typeof t == "object" ? (o = t.slot, r = t) : r = { flatten: e }, n ? x({ slot: o, flatten: e, selector: n }) : T({ descriptor: (i) => ({ get() {
    var s, l;
    const a = "slot" + (o ? `[name=${o}]` : ":not([name])"), m = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(a);
    return (l = m == null ? void 0 : m.assignedNodes(r)) !== null && l !== void 0 ? l : [];
  }, enumerable: !0, configurable: !0 }) });
}
const P = (t) => {
  try {
    const e = new Intl.Locale(t);
    return t;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().locale;
  }
}, E = (t) => {
  try {
    return Intl.DateTimeFormat(void 0, { timeZone: t }).resolvedOptions(), t;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
};
var M = Object.defineProperty, R = Object.getOwnPropertyDescriptor, d = (t, e, n, r) => {
  for (var o = r > 1 ? void 0 : r ? R(e, n) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = (r ? s(e, n, o) : s(o)) || o);
  return r && o && M(e, n, o), o;
}, w = /* @__PURE__ */ ((t) => (t[t.formatRelativeTime = 0] = "formatRelativeTime", t[t.formatToShort = 1] = "formatToShort", t[t.formatToTime = 2] = "formatToTime", t))(w || {});
const u = [F], j = (/* @__PURE__ */ new Date()).getFullYear();
let c = class extends b {
  constructor() {
    super(...arguments), this.locale = "", this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone, this._slottedContent = "", this._formattedData = "", this.formatMode = 0;
  }
  willUpdate(t) {
    if (t.has("locale")) {
      const e = P(this.locale);
      this.locale = e;
    }
    if (t.has("timezone")) {
      const e = E(this.timezone);
      this.timezone = e;
    }
    this._formattedData = u[this.formatMode](
      this._slottedContent,
      this.locale,
      this.timezone,
      j
    ), this._slottedNodes[0] && (this._slottedNodes[0].textContent = `${this._formattedData ?? this._slottedContent}`), this._formattedData ? this.classList.remove("invalid") : this.classList.add("invalid");
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this._changeFormat);
  }
  _changeFormat(t) {
    this.formatMode = (this.formatMode + 1) % (Object.keys(w).length - 3), u.length < 3 && (this.formatMode === 2 ? u.push(O) : u.push(S)), this.requestUpdate();
  }
  _handleSlotChange() {
    var t, e;
    this._slottedContent = (e = (t = this._slottedNodes[0]) == null ? void 0 : t.textContent) == null ? void 0 : e.trim();
  }
  render() {
    return C`
      <slot
        title=${this._slottedContent}
        @slotchange="${this._handleSlotChange}"
      ></slot>
    `;
  }
};
c.styles = k`
    :host {
      cursor: pointer;
    }
    :host(.invalid) {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
  `;
d([
  L({ flatten: !0 })
], c.prototype, "_slottedNodes", 2);
d([
  y({
    attribute: "locale",
    reflect: !0
  })
], c.prototype, "locale", 2);
d([
  y({ attribute: "timezone" })
], c.prototype, "timezone", 2);
d([
  N()
], c.prototype, "_slottedContent", 2);
c = d([
  z("fmt-timestamp")
], c);
export {
  c as FmtTimestamp,
  F as formatRelativeTime,
  O as formatToShort,
  S as formatToTime
};
