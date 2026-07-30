import { clinicalMonitoringRegions as p, PrimariaNavItem as b } from "@uxland/primary-shell";
import { html as S, LitElement as P, unsafeCSS as x, css as U } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const M = (s) => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(s, e);
  })) : customElements.define(s, e);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = globalThis, g = l.ShadowRoot && (l.ShadyCSS === void 0 || l.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, v = Symbol(), m = /* @__PURE__ */ new WeakMap();
let C = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== v) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (g && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = m.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && m.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const A = (s) => new C(typeof s == "string" ? s : s + "", void 0, v), O = (s, e) => {
  if (g) s.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const i = document.createElement("style"), r = l.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = t.cssText, s.appendChild(i);
  }
}, y = g ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return A(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: R, defineProperty: z, getOwnPropertyDescriptor: I, getOwnPropertyNames: k, getOwnPropertySymbols: T, getPrototypeOf: L } = Object, c = globalThis, w = c.trustedTypes, V = w ? w.emptyScript : "", j = c.reactiveElementPolyfillSupport, h = (s, e) => s, u = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? V : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, e) {
  let t = s;
  switch (e) {
    case Boolean:
      t = s !== null;
      break;
    case Number:
      t = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(s);
      } catch {
        t = null;
      }
  }
  return t;
} }, E = (s, e) => !R(s, e), $ = { attribute: !0, type: String, converter: u, reflect: !1, hasChanged: E };
Symbol.metadata ??= Symbol("metadata"), c.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class a extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = $) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), r = this.getPropertyDescriptor(e, i, t);
      r !== void 0 && z(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: r, set: n } = I(this.prototype, e) ?? { get() {
      return this[t];
    }, set(o) {
      this[t] = o;
    } };
    return { get() {
      return r?.call(this);
    }, set(o) {
      const _ = r?.call(this);
      n.call(this, o), this.requestUpdate(e, _, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? $;
  }
  static _$Ei() {
    if (this.hasOwnProperty(h("elementProperties"))) return;
    const e = L(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(h("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(h("properties"))) {
      const t = this.properties, i = [...k(t), ...T(t)];
      for (const r of i) this.createProperty(r, t[r]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, r] of t) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const r = this._$Eu(t, i);
      r !== void 0 && this._$Eh.set(r, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const r of i) t.unshift(y(r));
    } else e !== void 0 && t.push(y(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((e) => e(this)));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return O(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    const i = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, i);
    if (r !== void 0 && i.reflect === !0) {
      const n = (i.converter?.toAttribute !== void 0 ? i.converter : u).toAttribute(t, i.type);
      this._$Em = e, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const i = this.constructor, r = i._$Eh.get(e);
    if (r !== void 0 && this._$Em !== r) {
      const n = i.getPropertyOptions(r), o = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : u;
      this._$Em = r, this[r] = o.fromAttribute(t, n.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ??= this.constructor.getPropertyOptions(e), !(i.hasChanged ?? E)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ??= /* @__PURE__ */ new Set()).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, n] of i) n.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], n);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((i) => i.hostUpdate?.())), this.update(t)) : this._$EU();
    } catch (i) {
      throw e = !1, this._$EU(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach(((t) => t.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej &&= this._$Ej.forEach(((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, a[h("elementProperties")] = /* @__PURE__ */ new Map(), a[h("finalized")] = /* @__PURE__ */ new Map(), j?.({ ReactiveElement: a }), (c.reactiveElementVersions ??= []).push("2.0.4");
const q = ":host{min-height:1px;height:100%;width:100%}primaria-region>div{display:contents}.wrapper{position:relative;min-height:1px;height:100%;display:flex;flex-direction:row}.wrapper #widgets-sidebar-region{width:50%;overflow:auto}.wrapper .content{flex:1;display:flex;flex-direction:column}.wrapper .content #header-widgets-region{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;padding:24px 12px 0 24px}.wrapper .content #content-widgets-region{flex:1;min-height:1px;height:100%;padding:24px 12px 24px 24px}@media (max-width: 1439px){:host{min-height:100vh}.wrapper{flex-direction:column;gap:24px}.wrapper #widgets-sidebar-region{max-width:100%;width:auto;overflow:unset;padding-inline:24px;padding-top:24px}.wrapper .content{gap:24px;padding-inline:24px}.wrapper .content #header-widgets-region{padding:unset}.wrapper .content #content-widgets-region{height:70vh;flex:none;padding:unset}}", N = (s) => S`
    <div class="wrapper">
      <div class="content">
        <primaria-region id="header-widgets-region" name=${p.header}></primaria-region>
        <primaria-region id="content-widgets-region" name=${p.content}></primaria-region>
      </div>
      <primaria-region id="widgets-sidebar-region" name=${p.sidebar}></primaria-region>
    </div>
`, f = class f extends P {
  render() {
    return S`${N()}`;
  }
  firstUpdated() {
    this._observeMaximizedState();
  }
  _observeMaximizedState() {
    const e = this.renderRoot.querySelector("#content-widgets-region");
    if (!e) return;
    new MutationObserver(() => {
      const i = e.querySelector("activity-history-main");
      if (!i) return;
      const r = i.hasAttribute("maximized") || !!i.maximized;
      this._toggleWidgetsVisibility(!r);
    }).observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["maximized"]
    });
  }
  _toggleWidgetsVisibility(e) {
    const t = this.renderRoot.querySelector("#widgets-sidebar-region"), i = this.renderRoot.querySelector("#header-widgets-region");
    t && (t.style.display = e ? "" : "none"), i && (i.style.display = e ? "" : "none");
  }
};
f.styles = U`
    ${x(q)}
  `;
let d = f;
const D = async (s) => {
  M("clinical-monitoring")(d), s.regionManager.registerMainView({
    id: s.pluginInfo.pluginId,
    factory: () => {
      const e = new d();
      return Promise.resolve(e);
    },
    isDefault: !0
  }), s.regionManager.registerView(s.regionManager.regions.shell.navigationMenu, {
    id: s.pluginInfo.pluginId,
    factory: () => {
      const e = new b({
        icon: "account_box",
        label: "Seguiment administratiu",
        callbackFn: () => {
          s.regionManager.activateMainView(s.pluginInfo.pluginId);
        }
      });
      return Promise.resolve(e);
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
