import { css as D, LitElement as z, html as $ } from "lit";
const k = (t) => {
  const { name: e } = t, n = /* @__PURE__ */ new Map(), r = (o, i, s) => {
    const a = `${e} ${s ?? ""} ${o ?? ""} ${(i == null ? void 0 : i.timeZone) ?? ""}`;
    return n.has(a) ? n.get(a).value : n.set(a, {
      locale: o,
      options: i,
      value: new t(o, i)
    }).get(a).value;
  };
  return r.cache = n, r;
}, S = k(
  Intl.RelativeTimeFormat
), d = k(Intl.DateTimeFormat), F = (t, e) => {
  try {
    const r = new Date(t).getTime() - (/* @__PURE__ */ new Date()).getTime(), o = Math.sign(r), i = Math.abs(r), s = 1e3 * 60 * 60 * 24 * 30, a = 1e3 * 60 * 60 * 24 * 365, l = S(e, { numeric: "auto" }), m = i / 1e3;
    if (m < 60)
      return l.format(o * m, "second");
    const f = m / 60 >> 0;
    if (f < 60)
      return l.format(o * f, "minute");
    const v = f / 60 >> 0;
    if (v < 24)
      return l.format(o * v, "hour");
    const p = v / 24 >> 0;
    if (p < 7)
      return l.format(o * p, "day");
    const T = p / 7 >> 0;
    if (T < 4)
      return l.format(o * T, "week");
    const _ = Math.round(i / s);
    if (_ < 12)
      return l.format(o * _, "months");
    const b = i / a >> 0;
    return l.format(o * b, "years");
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
    return d(
      e,
      // the locale to use when formatting the date.
      i,
      // the options to use when formatting the time string.
      "ToShort"
    ).format(o);
  } catch {
    return null;
  }
}, N = (t, e, n) => {
  try {
    const r = new Date(t);
    return d(
      e,
      {
        hour: "numeric",
        minute: "numeric",
        timeZone: n
      },
      // the options to use when formatting the time string.
      "ToTime"
      // function marker for caching.
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
const M = (t) => (e) => typeof e == "function" ? ((n, r) => (customElements.define(n, r), r))(t, e) : ((n, r) => {
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
const x = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) {
  n.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(n) {
  n.createProperty(e.key, t);
} };
function g(t) {
  return (e, n) => n !== void 0 ? ((r, o, i) => {
    o.constructor.createProperty(i, r);
  })(t, e, n) : x(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function L(t) {
  return g({ ...t, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = ({ finisher: t, descriptor: e }) => (n, r) => {
  var o;
  if (r === void 0) {
    const i = (o = n.originalKey) !== null && o !== void 0 ? o : n.key, s = e != null ? { kind: "method", placement: "prototype", key: i, descriptor: e(n.key) } : { ...n, key: i };
    return t != null && (s.finisher = function(a) {
      t(a, i);
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
var y;
const P = ((y = window.HTMLSlotElement) === null || y === void 0 ? void 0 : y.prototype.assignedElements) != null ? (t, e) => t.assignedElements(e) : (t, e) => t.assignedNodes(e).filter((n) => n.nodeType === Node.ELEMENT_NODE);
function R(t) {
  const { slot: e, selector: n } = t ?? {};
  return w({ descriptor: (r) => ({ get() {
    var o;
    const i = "slot" + (e ? `[name=${e}]` : ":not([name])"), s = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(i), a = s != null ? P(s, t) : [];
    return n ? a.filter((l) => l.matches(n)) : a;
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function E(t, e, n) {
  let r, o = t;
  return typeof t == "object" ? (o = t.slot, r = t) : r = { flatten: e }, n ? R({ slot: o, flatten: e, selector: n }) : w({ descriptor: (i) => ({ get() {
    var s, a;
    const l = "slot" + (o ? `[name=${o}]` : ":not([name])"), m = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(l);
    return (a = m == null ? void 0 : m.assignedNodes(r)) !== null && a !== void 0 ? a : [];
  }, enumerable: !0, configurable: !0 }) });
}
const Z = (t) => {
  try {
    const e = new Intl.Locale(t);
    return t;
  } catch {
    return d(void 0, {}, "localeChecking").resolvedOptions().locale;
  }
}, j = (t) => {
  try {
    return d(void 0, { timeZone: t }, "timeZoneChecking").resolvedOptions(), t;
  } catch {
    return d(void 0, {}, "defaultTimeZone").resolvedOptions().timeZone;
  }
};
var I = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, u = (t, e, n, r) => {
  for (var o = r > 1 ? void 0 : r ? Y(e, n) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = (r ? s(e, n, o) : s(o)) || o);
  return r && o && I(e, n, o), o;
}, C = /* @__PURE__ */ ((t) => (t[t.formatRelativeTime = 0] = "formatRelativeTime", t[t.formatToShort = 1] = "formatToShort", t[t.formatToTime = 2] = "formatToTime", t))(C || {});
const h = [F], q = (/* @__PURE__ */ new Date()).getFullYear();
let c = class extends z {
  constructor() {
    super(...arguments), this.locale = "", this.timezone = d(void 0, {}, "defaultTimeZone").resolvedOptions().timeZone, this._slottedContent = "", this._formattedData = "", this.formatMode = 0;
  }
  willUpdate(t) {
    if (t.has("locale")) {
      const e = Z(this.locale);
      this.locale = e;
    }
    if (t.has("timezone")) {
      const e = j(this.timezone);
      this.timezone = e;
    }
    this._formattedData = h[this.formatMode](
      this._slottedContent,
      this.locale,
      this.timezone,
      q
    ), this._slottedNodes[0] && (this._slottedNodes[0].textContent = `${this._formattedData ?? this._slottedContent}`), this._formattedData ? this.classList.remove("invalid") : this.classList.add("invalid");
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this._changeFormat);
  }
  _changeFormat(t) {
    this.formatMode = (this.formatMode + 1) % (Object.keys(C).length - 3), h.length < 3 && (this.formatMode === 2 ? h.push(O) : h.push(N)), this.requestUpdate();
  }
  _handleSlotChange() {
    var t, e;
    this._slottedContent = (e = (t = this._slottedNodes[0]) == null ? void 0 : t.textContent) == null ? void 0 : e.trim();
  }
  render() {
    return $`
      <slot
        title=${this._slottedContent}
        @slotchange="${this._handleSlotChange}"
      ></slot>
    `;
  }
};
c.styles = D`
    :host {
      cursor: pointer;
    }
    :host(.invalid) {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
  `;
u([
  E({ flatten: !0 })
], c.prototype, "_slottedNodes", 2);
u([
  g({
    attribute: "locale",
    reflect: !0
  })
], c.prototype, "locale", 2);
u([
  g({ attribute: "timezone" })
], c.prototype, "timezone", 2);
u([
  L()
], c.prototype, "_slottedContent", 2);
c = u([
  M("fmt-timestamp")
], c);
export {
  c as FmtTimestamp,
  F as formatRelativeTime,
  O as formatToShort,
  N as formatToTime
};
