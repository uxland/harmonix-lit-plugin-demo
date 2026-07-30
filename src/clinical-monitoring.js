import { clinicalMonitoringRegions as p, PrimariaNavItem as b } from "@uxland/primary-shell";
import { html as S, LitElement as P, unsafeCSS as x, css as U } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A = (s) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(s, t);
  })) : customElements.define(s, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = globalThis, g = l.ShadowRoot && (l.ShadyCSS === void 0 || l.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, v = Symbol(), f = /* @__PURE__ */ new WeakMap();
let M = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== v) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (g && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = f.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && f.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const C = (s) => new M(typeof s == "string" ? s : s + "", void 0, v), O = (s, t) => {
  if (g) s.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const i = document.createElement("style"), r = l.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, s.appendChild(i);
  }
}, y = g ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return C(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: R, defineProperty: z, getOwnPropertyDescriptor: I, getOwnPropertyNames: k, getOwnPropertySymbols: T, getPrototypeOf: L } = Object, d = globalThis, w = d.trustedTypes, V = w ? w.emptyScript : "", j = d.reactiveElementPolyfillSupport, h = (s, t) => s, u = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? V : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, E = (s, t) => !R(s, t), $ = { attribute: !0, type: String, converter: u, reflect: !1, hasChanged: E };
Symbol.metadata ??= Symbol("metadata"), d.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class a extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = $) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && z(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: r, set: o } = I(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return r?.call(this);
    }, set(n) {
      const _ = r?.call(this);
      o.call(this, n), this.requestUpdate(t, _, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? $;
  }
  static _$Ei() {
    if (this.hasOwnProperty(h("elementProperties"))) return;
    const t = L(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(h("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(h("properties"))) {
      const e = this.properties, i = [...k(e), ...T(e)];
      for (const r of i) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, r] of e) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const r = this._$Eu(e, i);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i) e.unshift(y(r));
    } else t !== void 0 && e.push(y(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((t) => this.enableUpdating = t)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t) => t(this)));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return O(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t) => t.hostDisconnected?.()));
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EC(t, e) {
    const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const o = (i.converter?.toAttribute !== void 0 ? i.converter : u).toAttribute(e, i.type);
      this._$Em = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const o = i.getPropertyOptions(r), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : u;
      this._$Em = r, this[r] = n.fromAttribute(e, o.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, i) {
    if (t !== void 0) {
      if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? E)(this[t], e)) return;
      this.P(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, i) {
    this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$Em !== t && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
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
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [r, o] of this._$Ep) this[r] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, o] of i) o.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], o);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach(((i) => i.hostUpdate?.())), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej &&= this._$Ej.forEach(((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, a[h("elementProperties")] = /* @__PURE__ */ new Map(), a[h("finalized")] = /* @__PURE__ */ new Map(), j?.({ ReactiveElement: a }), (d.reactiveElementVersions ??= []).push("2.0.4");
const q = ":host{min-height:1px;height:100%;width:100%;max-width:100%;display:block}primaria-region>div{display:contents}.wrapper{position:relative;min-height:1px;height:100%;width:100%;max-width:100%;display:flex;flex-direction:row}.wrapper #widgets-sidebar-region{width:25%;max-width:25%;min-width:0;flex-shrink:0;overflow:auto}.wrapper .content{flex:1;min-width:0;display:flex;flex-direction:column}.wrapper .content #header-widgets-region{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:24px 12px 0 24px}.wrapper .content #content-widgets-region{flex:1;min-height:1px;height:100%;padding:24px 12px 24px 24px}@media (max-width: 1439px){:host{min-height:100vh}.wrapper{flex-direction:column}.wrapper #widgets-sidebar-region{max-width:100%;width:auto;overflow:auto;min-height:100%}.wrapper .content #content-widgets-region{height:70vh;flex:none}}", N = (s) => S`
    <div class="wrapper">
      <div class="content">
        <primaria-region id="header-widgets-region" name=${p.header}></primaria-region>
        <primaria-region id="content-widgets-region" name=${p.content}></primaria-region>
      </div>
      <primaria-region id="widgets-sidebar-region" name=${p.sidebar}></primaria-region>
    </div>
`, m = class m extends P {
  render() {
    return S`${N()}`;
  }
  firstUpdated() {
    this._observeMaximizedState();
  }
  _observeMaximizedState() {
    const t = this.renderRoot.querySelector("#content-widgets-region");
    if (!t) return;
    new MutationObserver(() => {
      const i = t.querySelector("activity-history-main");
      if (!i) return;
      const r = i.hasAttribute("maximized") || !!i.maximized;
      this._toggleWidgetsVisibility(!r);
    }).observe(t, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["maximized"]
    });
  }
  _toggleWidgetsVisibility(t) {
    const e = this.renderRoot.querySelector("#widgets-sidebar-region"), i = this.renderRoot.querySelector("#header-widgets-region");
    e && (e.style.display = t ? "" : "none"), i && (i.style.display = t ? "" : "none");
  }
};
m.styles = U`
    ${x(q)}
  `;
let c = m;
const D = async (s) => {
  A("clinical-monitoring")(c), s.regionManager.registerMainView({
    id: s.pluginInfo.pluginId,
    factory: () => {
      const t = new c();
      return Promise.resolve(t);
    },
    isDefault: !0
  }), s.regionManager.registerView(s.regionManager.regions.shell.navigationMenu, {
    id: s.pluginInfo.pluginId,
    factory: () => {
      const t = new b({
        icon: "account_box",
        label: "Seguiment clínic",
        callbackFn: () => {
          s.regionManager.activateMainView(s.pluginInfo.pluginId);
        }
      });
      return Promise.resolve(t);
    },
    sortHint: "0020"
  });
}, W = (s) => {
  s.regionManager.removeView(s.regionManager.regions.shell.main, s.pluginInfo.pluginId), s.regionManager.removeView(s.regionManager.regions.shell.navigationMenu, s.pluginInfo.pluginId);
}, J = async (s) => (D(s), Promise.resolve()), K = (s) => (W(s), Promise.resolve());
export {
  K as dispose,
  J as initialize
};
//# sourceMappingURL=index.js.map
