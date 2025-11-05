import { PrimariaRegionHost as le, PrimariaNavItem as he } from "@uxland/primary-shell";
import { notEqual as pe, html as Z, LitElement as de, unsafeCSS as fe, css as ge } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer((() => {
    customElements.define(t, e);
  })) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const v = globalThis, R = v.ShadowRoot && (v.ShadyCSS === void 0 || v.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Q = Symbol(), F = /* @__PURE__ */ new WeakMap();
let me = class {
  constructor(e, r, n) {
    if (this._$cssResult$ = !0, n !== Q) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (R && e === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (e = F.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && F.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ve = (t) => new me(typeof t == "string" ? t : t + "", void 0, Q), we = (t, e) => {
  if (R) t.adoptedStyleSheets = e.map(((r) => r instanceof CSSStyleSheet ? r : r.styleSheet));
  else for (const r of e) {
    const n = document.createElement("style"), i = v.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = r.cssText, t.appendChild(n);
  }
}, q = R ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const n of e.cssRules) r += n.cssText;
  return ve(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: _e, defineProperty: Se, getOwnPropertyDescriptor: be, getOwnPropertyNames: Ee, getOwnPropertySymbols: $e, getPrototypeOf: Oe } = Object, b = globalThis, N = b.trustedTypes, Ae = N ? N.emptyScript : "", Pe = b.reactiveElementPolyfillSupport, m = (t, e) => t, j = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Ae : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, ee = (t, e) => !_e(t, e), V = { attribute: !0, type: String, converter: j, reflect: !1, hasChanged: ee };
Symbol.metadata ??= Symbol("metadata"), b.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class g extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = V) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.elementProperties.set(e, r), !r.noAccessor) {
      const n = Symbol(), i = this.getPropertyDescriptor(e, n, r);
      i !== void 0 && Se(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, r, n) {
    const { get: i, set: s } = be(this.prototype, e) ?? { get() {
      return this[r];
    }, set(o) {
      this[r] = o;
    } };
    return { get() {
      return i?.call(this);
    }, set(o) {
      const u = i?.call(this);
      s.call(this, o), this.requestUpdate(e, u, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? V;
  }
  static _$Ei() {
    if (this.hasOwnProperty(m("elementProperties"))) return;
    const e = Oe(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(m("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(m("properties"))) {
      const r = this.properties, n = [...Ee(r), ...$e(r)];
      for (const i of n) this.createProperty(i, r[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [n, i] of r) this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const i = this._$Eu(r, n);
      i !== void 0 && this._$Eh.set(i, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n) r.unshift(q(i));
    } else e !== void 0 && r.push(q(e));
    return r;
  }
  static _$Eu(e, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
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
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return we(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, r, n) {
    this._$AK(e, n);
  }
  _$EC(e, r) {
    const n = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, n);
    if (i !== void 0 && n.reflect === !0) {
      const s = (n.converter?.toAttribute !== void 0 ? n.converter : j).toAttribute(r, n.type);
      this._$Em = e, s == null ? this.removeAttribute(i) : this.setAttribute(i, s), this._$Em = null;
    }
  }
  _$AK(e, r) {
    const n = this.constructor, i = n._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const s = n.getPropertyOptions(i), o = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : j;
      this._$Em = i, this[i] = o.fromAttribute(r, s.type), this._$Em = null;
    }
  }
  requestUpdate(e, r, n) {
    if (e !== void 0) {
      if (n ??= this.constructor.getPropertyOptions(e), !(n.hasChanged ?? ee)(this[e], r)) return;
      this.P(e, r, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, r, n) {
    this._$AL.has(e) || this._$AL.set(e, r), n.reflect === !0 && this._$Em !== e && (this._$Ej ??= /* @__PURE__ */ new Set()).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
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
        for (const [i, s] of this._$Ep) this[i] = s;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [i, s] of n) s.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], s);
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), this._$EO?.forEach(((n) => n.hostUpdate?.())), this.update(r)) : this._$EU();
    } catch (n) {
      throw e = !1, this._$EU(), n;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach(((r) => r.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
    this._$Ej &&= this._$Ej.forEach(((r) => this._$EC(r, this[r]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[m("elementProperties")] = /* @__PURE__ */ new Map(), g[m("finalized")] = /* @__PURE__ */ new Map(), Pe?.({ ReactiveElement: g }), (b.reactiveElementVersions ??= []).push("2.0.4");
/*
 * @license
 * BSD License
 *
 * Copyright (c) 2020, UXLand
 *
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * 3. All advertising materials mentioning features or use of this software must display the following acknowledgement: This product includes software developed by the <copyright holder>.
 * 4. Neither the name of the <copyright holder> nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ''AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
const je = () => {
};
function a(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function l(t) {
  return function e(r) {
    return arguments.length === 0 || a(r) ? e : t.apply(this, arguments);
  };
}
function c(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return a(r) ? e : l(function(i) {
          return t(r, i);
        });
      default:
        return a(r) && a(n) ? e : a(r) ? l(function(i) {
          return t(i, n);
        }) : a(n) ? l(function(i) {
          return t(r, i);
        }) : t(r, n);
    }
  };
}
function Re(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
function z(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function k(t, e, r) {
  for (var n = 0, i = r.length; n < i; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function Ue(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function _(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ce(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const $ = typeof Object.is == "function" ? Object.is : Ce;
var D = Object.prototype.toString, Ie = /* @__PURE__ */ (function() {
  return D.call(arguments) === "[object Arguments]" ? function(e) {
    return D.call(e) === "[object Arguments]";
  } : function(e) {
    return _("callee", e);
  };
})(), Me = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), H = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], L = /* @__PURE__ */ (function() {
  return arguments.propertyIsEnumerable("length");
})(), Te = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, f = /* @__PURE__ */ l(typeof Object.keys == "function" && !L ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, i = [], s = L && Ie(e);
  for (r in e)
    _(r, e) && (!s || r !== "length") && (i[i.length] = r);
  if (Me)
    for (n = H.length - 1; n >= 0; )
      r = H[n], _(r, e) && !Te(i, r) && (i[i.length] = r), n -= 1;
  return i;
}), B = /* @__PURE__ */ l(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function W(t, e, r, n) {
  var i = z(t), s = z(e);
  function o(u, h) {
    return U(u, h, r.slice(), n.slice());
  }
  return !k(function(u, h) {
    return !k(o, h, u);
  }, s, i);
}
function U(t, e, r, n) {
  if ($(t, e))
    return !0;
  var i = B(t);
  if (i !== B(e) || t == null || e == null)
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (i) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && Ue(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && $(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!$(t.valueOf(), e.valueOf()))
        return !1;
      break;
    case "Error":
      return t.name === e.name && t.message === e.message;
    case "RegExp":
      if (!(t.source === e.source && t.global === e.global && t.ignoreCase === e.ignoreCase && t.multiline === e.multiline && t.sticky === e.sticky && t.unicode === e.unicode))
        return !1;
      break;
  }
  for (var s = r.length - 1; s >= 0; ) {
    if (r[s] === t)
      return n[s] === e;
    s -= 1;
  }
  switch (i) {
    case "Map":
      return t.size !== e.size ? !1 : W(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : W(t.values(), e.values(), r.concat([t]), n.concat([e]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return !1;
  }
  var o = f(t);
  if (o.length !== f(e).length)
    return !1;
  var u = r.concat([t]), h = n.concat([e]);
  for (s = o.length - 1; s >= 0; ) {
    var d = o[s];
    if (!(_(d, e) && U(e[d], t[d], u, h)))
      return !1;
    s -= 1;
  }
  return !0;
}
var xe = /* @__PURE__ */ c(function(e, r) {
  return U(e, r, [], []);
});
function Fe(t, e, r) {
  var n, i;
  if (typeof t.indexOf == "function")
    switch (typeof e) {
      case "number":
        if (e === 0) {
          for (n = 1 / e; r < t.length; ) {
            if (i = t[r], i === 0 && 1 / i === n)
              return r;
            r += 1;
          }
          return -1;
        } else if (e !== e) {
          for (; r < t.length; ) {
            if (i = t[r], typeof i == "number" && i !== i)
              return r;
            r += 1;
          }
          return -1;
        }
        return t.indexOf(e, r);
      // all these types can utilise Set
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return t.indexOf(e, r);
      case "object":
        if (e === null)
          return t.indexOf(e, r);
    }
  for (; r < t.length; ) {
    if (xe(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function qe(t, e) {
  return Fe(e, t, 0) >= 0;
}
function w(t, e) {
  for (var r = 0, n = e.length, i = Array(n); r < n; )
    i[r] = t(e[r]), r += 1;
  return i;
}
function O(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var y = function(e) {
  return (e < 10 ? "0" : "") + e;
}, Ne = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + y(e.getUTCMonth() + 1) + "-" + y(e.getUTCDate()) + "T" + y(e.getUTCHours()) + ":" + y(e.getUTCMinutes()) + ":" + y(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function Ve(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
const C = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function ze(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function te(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = Array.prototype.slice.call(arguments, 0), i = n.pop();
    if (!C(i)) {
      for (var s = 0; s < t.length; ) {
        if (typeof i[t[s]] == "function")
          return i[t[s]].apply(i, n);
        s += 1;
      }
      if (ze(i)) {
        var o = e.apply(null, n);
        return o(i);
      }
    }
    return r.apply(this, arguments);
  };
}
function ke(t, e) {
  for (var r = 0, n = e.length, i = []; r < n; )
    t(e[r]) && (i[i.length] = e[r]), r += 1;
  return i;
}
function De(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function He(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
var Le = /* @__PURE__ */ l(function(e) {
  return C(e) ? !0 : !e || typeof e != "object" || He(e) ? !1 : e.nodeType === 1 ? !!e.length : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Be = /* @__PURE__ */ (function() {
  function t(e) {
    this.f = e;
  }
  return t.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, t.prototype["@@transducer/result"] = function(e) {
    return e;
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(e, r);
  }, t;
})();
function We(t) {
  return new Be(t);
}
function E(t, e) {
  switch (t) {
    case 0:
      return function() {
        return e.apply(this, arguments);
      };
    case 1:
      return function(r) {
        return e.apply(this, arguments);
      };
    case 2:
      return function(r, n) {
        return e.apply(this, arguments);
      };
    case 3:
      return function(r, n, i) {
        return e.apply(this, arguments);
      };
    case 4:
      return function(r, n, i, s) {
        return e.apply(this, arguments);
      };
    case 5:
      return function(r, n, i, s, o) {
        return e.apply(this, arguments);
      };
    case 6:
      return function(r, n, i, s, o, u) {
        return e.apply(this, arguments);
      };
    case 7:
      return function(r, n, i, s, o, u, h) {
        return e.apply(this, arguments);
      };
    case 8:
      return function(r, n, i, s, o, u, h, d) {
        return e.apply(this, arguments);
      };
    case 9:
      return function(r, n, i, s, o, u, h, d, ce) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, n, i, s, o, u, h, d, ce, Ot) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
var re = /* @__PURE__ */ c(function(e, r) {
  return E(e.length, function() {
    return e.apply(r, arguments);
  });
});
function Xe(t, e, r) {
  for (var n = 0, i = r.length; n < i; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
function X(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function G(t, e, r, n) {
  return t["@@transducer/result"](r[n](re(t["@@transducer/step"], t), e));
}
var J = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function I(t, e, r) {
  if (typeof t == "function" && (t = We(t)), Le(r))
    return Xe(t, e, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return G(t, e, r, "fantasy-land/reduce");
  if (r[J] != null)
    return X(t, e, r[J]());
  if (typeof r.next == "function")
    return X(t, e, r);
  if (typeof r.reduce == "function")
    return G(t, e, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
const S = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var Ge = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = S.init, t.prototype["@@transducer/result"] = S.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
})(), Je = /* @__PURE__ */ c(function(e, r) {
  return new Ge(e, r);
}), Ke = /* @__PURE__ */ c(
  /* @__PURE__ */ te(["filter"], Je, function(t, e) {
    return De(e) ? I(function(r, n) {
      return t(e[n]) && (r[n] = e[n]), r;
    }, {}, f(e)) : (
      // else
      ke(t, e)
    );
  })
), Ye = /* @__PURE__ */ c(function(e, r) {
  return Ke(Ve(e), r);
});
function ne(t, e) {
  var r = function(o) {
    var u = e.concat([t]);
    return qe(o, u) ? "<Circular>" : ne(o, u);
  }, n = function(s, o) {
    return w(function(u) {
      return O(u) + ": " + r(s[u]);
    }, o.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + w(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + w(r, t).concat(n(t, Ye(function(s) {
        return /^\d+$/.test(s);
      }, f(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : O(Ne(t))) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : O(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var i = t.toString();
        if (i !== "[object Object]")
          return i;
      }
      return "{" + n(t, f(t)).join(", ") + "}";
  }
}
function Ze(t, e) {
  if (e == null || !Re(e.then))
    throw new TypeError("`" + t + "` expected a Promise, received " + ne(e, []));
}
var Qe = /* @__PURE__ */ c(function(e, r) {
  return Ze("andThen", r), r.then(e);
}), et = /* @__PURE__ */ (function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = S.init, t.prototype["@@transducer/result"] = S.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
})(), tt = /* @__PURE__ */ c(function(e, r) {
  return new et(e, r);
});
function ie(t, e, r) {
  return function() {
    for (var n = [], i = 0, s = t, o = 0; o < e.length || i < arguments.length; ) {
      var u;
      o < e.length && (!a(e[o]) || i >= arguments.length) ? u = e[o] : (u = arguments[i], i += 1), n[o] = u, a(u) || (s -= 1), o += 1;
    }
    return s <= 0 ? r.apply(this, n) : E(s, ie(t, n, r));
  };
}
var rt = /* @__PURE__ */ c(function(e, r) {
  return e === 1 ? l(r) : E(e, ie(e, [], r));
}), nt = /* @__PURE__ */ c(
  /* @__PURE__ */ te(["fantasy-land/map", "map"], tt, function(e, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return rt(r.length, function() {
          return e.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return I(function(n, i) {
          return n[i] = e(r[i]), n;
        }, {}, f(r));
      default:
        return w(e, r);
    }
  })
);
function it(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function se(t) {
  return function e(r, n, i) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return a(r) ? e : c(function(s, o) {
          return t(r, s, o);
        });
      case 2:
        return a(r) && a(n) ? e : a(r) ? c(function(s, o) {
          return t(s, n, o);
        }) : a(n) ? c(function(s, o) {
          return t(r, s, o);
        }) : l(function(s) {
          return t(r, n, s);
        });
      default:
        return a(r) && a(n) && a(i) ? e : a(r) && a(n) ? c(function(s, o) {
          return t(s, o, i);
        }) : a(r) && a(i) ? c(function(s, o) {
          return t(s, n, o);
        }) : a(n) && a(i) ? c(function(s, o) {
          return t(r, s, o);
        }) : a(r) ? l(function(s) {
          return t(s, n, i);
        }) : a(n) ? l(function(s) {
          return t(r, s, i);
        }) : a(i) ? l(function(s) {
          return t(r, n, s);
        }) : t(r, n, i);
    }
  };
}
var st = /* @__PURE__ */ se(I);
function oe(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return C(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var ot = /* @__PURE__ */ se(
  /* @__PURE__ */ oe("slice", function(e, r, n) {
    return Array.prototype.slice.call(n, e, r);
  })
), at = /* @__PURE__ */ l(
  /* @__PURE__ */ oe(
    "tail",
    /* @__PURE__ */ ot(1, 1 / 0)
  )
);
function ae() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return E(arguments[0].length, st(it, arguments[0], at(arguments)));
}
class ut {
  constructor(e) {
    this.targetRegion = e;
  }
  async attach() {
    const e = this.targetRegion.regionManager.getRegisteredViews(this.targetRegion.name);
    return ae(nt((r) => this.targetRegion.addView(r.key, r.view)), re(Promise.all, Promise), Qe(je))(e);
  }
  detach() {
    return Promise.resolve();
  }
}
let ct = class {
  constructor() {
    this.registry = [];
  }
  get behaviors() {
    return [...this.registry];
  }
  register(e) {
    this.behaviors.some((r) => r === e) || this.registry.push(e);
  }
};
const ue = new ct();
ue.register(ut);
const lt = ue;
class ht {
  constructor(e) {
    this.host = e;
  }
  get behaviors() {
    return lt.behaviors.map((e) => new e(this.host.uxlRegion));
  }
  activateView(e) {
    return this.host.contains(e) || this.addViewToHost(e), e.hidden = !1, Promise.resolve(void 0);
  }
  deactivateView(e) {
    return e.view && e.view.removeFromDomWhenDeactivated ? this.removeViewFromHost(e) : e.hidden = !0, Promise.resolve(null);
  }
  removeView(e) {
    this.removeViewFromHost(e);
  }
  viewAdded(e) {
  }
  addViewToHost(e) {
    this.host.appendChild(e);
  }
  removeViewFromHost(e) {
    this.host.removeChild(e), this.host.uxlRegion.viewRemovedFromDom(e.view);
  }
}
const pt = (t, e) => !t.sortHint && !e.sortHint || !e.sortHint ? -1 : t.sortHint ? t.sortHint.localeCompare(e.sortHint) : 1;
let dt = class extends ht {
  async viewAdded(e) {
    await this.host.uxlRegion.activate(e);
  }
  addViewToHost(e) {
    const r = this.host.uxlRegion.currentActiveViews.sort(pt).indexOf(e.view);
    r >= this.host.children.length ? super.addViewToHost(e) : this.host.insertBefore(e, this.host.children[r]);
  }
};
const ft = (t, e) => new dt(e), A = "default", K = "dynamic";
class gt {
  constructor() {
    this.adapterRegistry = /* @__PURE__ */ new Map(), this.adapterRegistry.set(K, []);
  }
  registerAdapterFactory(e, r) {
    this.adapterRegistry.set(e, r);
  }
  get dynamicFactories() {
    return this.adapterRegistry.get(K);
  }
  registerDynamicAdapterFactory(e) {
    this.dynamicFactories.indexOf(e) === -1 && this.dynamicFactories.push(e);
  }
  getDynamicFactory(e) {
    return this.dynamicFactories.reduce((r, n) => r || n(e), null);
  }
  getAdapterFactory(e) {
    return this.getDynamicFactory(e) || (this.adapterRegistry.has(e.constructor) ? this.adapterRegistry.get(e.constructor) : this.adapterRegistry.has(e.localName) ? this.adapterRegistry.get(e.localName) : this.adapterRegistry.has(e.tagName) ? this.adapterRegistry.get(e.tagName) : this.adapterRegistry.has(A) ? this.adapterRegistry.get(A) : null);
  }
  registerDefaultAdapterFactory(e) {
    this.adapterRegistry.set(A, e);
  }
}
const yt = new gt(), Y = "__uxl_regions__", M = (t) => (e, r) => {
  e.constructor[Y] = { ...e.constructor[Y], [r]: t };
};
var mt = /* @__PURE__ */ c(function(e, r) {
  return r == null || r !== r ? e : r;
});
const vt = (t, e) => e.constructor._classProperties ? e.constructor._classProperties.get(t).hasChanged : void 0;
ae(vt, mt(pe));
yt.registerDefaultAdapterFactory(ft);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var P;
((P = window.HTMLSlotElement) === null || P === void 0 ? void 0 : P.prototype.assignedElements) != null;
const wt = ":host{min-height:1px;height:100%;width:100%}.wrapper{position:relative;min-height:1px;height:100%;display:flex;flex-direction:row}.wrapper #widgets-sidebar-region{width:50%;border-left:1px solid rgb(189,189,189);overflow:auto}.wrapper .content{flex:1;display:flex;flex-direction:column}.wrapper .content #header-widgets-region{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;padding:24px 24px 0}.wrapper .content #content-widgets-region{flex:1;min-height:1px;height:100%;padding:24px}@media (max-width: 1439px){:host{min-height:100vh}.wrapper{flex-direction:column-reverse;gap:24px}.wrapper #widgets-sidebar-region{max-width:100%;width:auto;border-left:none;overflow:unset;padding-inline:24px;padding-top:24px}.wrapper .content{gap:24px;padding-inline:24px}.wrapper .content #header-widgets-region{padding:unset}.wrapper .content #content-widgets-region{height:70vh;flex:none;padding:unset}}", _t = (t) => Z`
    <div class="wrapper">
      <div class="content">
        <div id="header-widgets-region"></div>
        <div id="content-widgets-region"></div>
      </div>
      <div id="widgets-sidebar-region"></div>
    </div>
`;
var St = Object.defineProperty, T = (t, e, r, n) => {
  for (var i = void 0, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = o(e, r, i) || i);
  return i && St(e, r, i), i;
};
const x = class x extends le(de) {
  render() {
    return Z`${_t()}`;
  }
  firstUpdated() {
    this._observeMaximizedState();
  }
  _observeMaximizedState() {
    const e = this.renderRoot.querySelector("#content-widgets-region");
    if (!e) return;
    new MutationObserver(() => {
      const n = e.querySelector("activity-history-main");
      if (!n) return;
      const i = n.hasAttribute("maximized") || n.maximized;
      this._toggleWidgetsVisibility(!i);
    }).observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["maximized"]
    });
  }
  _toggleWidgetsVisibility(e) {
    const r = this.renderRoot.querySelector("#widgets-sidebar-region"), n = this.renderRoot.querySelector("#header-widgets-region");
    r && (r.style.display = e ? "" : "none"), n && (n.style.display = e ? "" : "none");
  }
};
x.styles = ge`
    ${fe(wt)}
  `;
let p = x;
T([
  M({ targetId: "widgets-sidebar-region", name: "clinical-monitoring-widgets-sidebar-region" })
], p.prototype, "sidebarRegion");
T([
  M({ targetId: "header-widgets-region", name: "clinical-monitoring-header-widgets-region" })
], p.prototype, "headerRegion");
T([
  M({ targetId: "content-widgets-region", name: "clinical-monitoring-content-widgets-region" })
], p.prototype, "contentRegion");
const bt = async (t) => {
  ye("clinical-monitoring")(p), t.regionManager.registerMainView({
    id: t.pluginInfo.pluginId,
    factory: () => {
      const e = new p();
      return Promise.resolve(e);
    },
    isDefault: !0
  }), t.regionManager.registerView(t.regionManager.regions.shell.navigationMenu, {
    id: t.pluginInfo.pluginId,
    factory: () => {
      const e = new he({
        icon: "account_box",
        label: "Seguiment administratiu",
        callbackFn: () => {
          t.regionManager.activateMainView(t.pluginInfo.pluginId);
        }
      });
      return Promise.resolve(e);
    },
    sortHint: "0020"
  }), setTimeout(() => {
    $t(t);
  }, 300);
}, Et = (t) => {
  t.regionManager.removeView(t.regionManager.regions.shell.main, t.pluginInfo.pluginId), t.regionManager.removeView(t.regionManager.regions.shell.navigationMenu, t.pluginInfo.pluginId);
}, $t = (t) => {
  t.regionManager.activateMainView(t.pluginInfo.pluginId);
}, Ct = async (t) => (bt(t), Promise.resolve()), It = (t) => (Et(t), Promise.resolve());
export {
  It as dispose,
  Ct as initialize
};
//# sourceMappingURL=index.js.map
