! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = ae.type(e);
        return "function" === n || ae.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (ae.isFunction(t)) return ae.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return ae.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return ae.filter(t, e, n);
            t = ae.filter(t, e)
        }
        return ae.grep(e, function(e) {
            return J.call(t, e) > -1 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return ae.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        Z.removeEventListener("DOMContentLoaded", o), e.removeEventListener("load", o), ae.ready()
    }

    function s() {
        this.expando = ae.expando + s.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ae, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Pe.test(n) ? ae.parseJSON(n) : n
                } catch (r) {}
                Ee.set(e, t, n)
            } else n = void 0;
        return n
    }

    function u(e, t, n, i) {
        var r, a = 1,
            o = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return ae.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (ae.cssNumber[t] ? "" : "px"),
            c = (ae.cssNumber[t] || "px" !== u && +l) && De.exec(ae.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do a = a || ".5", c /= a, ae.style(e, t, c + u); while (a !== (a = s() / l) && 1 !== a && --o)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"))
    }

    function f(e, t, n, i, r) {
        for (var a, o, s, l, u, f, p = t.createDocumentFragment(), h = [], g = 0, v = e.length; v > g; g++)
            if (a = e[g], a || 0 === a)
                if ("object" === ae.type(a)) ae.merge(h, a.nodeType ? [a] : a);
                else if (He.test(a)) {
            for (o = o || p.appendChild(t.createElement("div")), s = (Me.exec(a) || ["", ""])[1].toLowerCase(), l = Ve[s] || Ve._default, o.innerHTML = l[1] + ae.htmlPrefilter(a) + l[2], f = l[0]; f--;) o = o.lastChild;
            ae.merge(h, o.childNodes), o = p.firstChild, o.textContent = ""
        } else h.push(t.createTextNode(a));
        for (p.textContent = "", g = 0; a = h[g++];)
            if (i && ae.inArray(a, i) > -1) r && r.push(a);
            else if (u = ae.contains(a.ownerDocument, a), o = c(p.appendChild(a), "script"), u && d(o), n)
            for (f = 0; a = o[f++];) je.test(a.type || "") && n.push(a);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function g() {
        try {
            return Z.activeElement
        } catch (e) {}
    }

    function v(e, t, n, i, r, a) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) v(e, s, n, i, t[s], a);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = h;
        else if (!r) return e;
        return 1 === a && (o = r, r = function(e) {
            return ae().off(e), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = ae.guid++)), e.each(function() {
            ae.event.add(this, t, r, i, n)
        })
    }

    function m(e, t) {
        return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = $e.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        var n, i, r, a, o, s, l, u;
        if (1 === t.nodeType) {
            if (ke.hasData(e) && (a = ke.access(e), o = ke.set(t, a), u = a.events)) {
                delete o.handle, o.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; i > n; n++) ae.event.add(t, r, u[r][n])
            }
            Ee.hasData(e) && (s = Ee.access(e), l = ae.extend({}, s), Ee.set(t, l))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function C(e, t, n, i) {
        t = Q.apply([], t);
        var r, a, o, s, l, u, d = 0,
            p = e.length,
            h = p - 1,
            g = t[0],
            v = ae.isFunction(g);
        if (v || p > 1 && "string" == typeof g && !ie.checkClone && Re.test(g)) return e.each(function(r) {
            var a = e.eq(r);
            v && (t[0] = g.call(this, r, a.html())), C(a, t, n, i)
        });
        if (p && (r = f(t, e[0].ownerDocument, !1, e, i), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
            for (o = ae.map(c(r, "script"), y), s = o.length; p > d; d++) l = r, d !== h && (l = ae.clone(l, !0, !0), s && ae.merge(o, c(l, "script"))), n.call(e[d], l, d);
            if (s)
                for (u = o[o.length - 1].ownerDocument, ae.map(o, b), d = 0; s > d; d++) l = o[d], je.test(l.type || "") && !ke.access(l, "globalEval") && ae.contains(u, l) && (l.src ? ae._evalUrl && ae._evalUrl(l.src) : ae.globalEval(l.textContent.replace(We, "")))
        }
        return e
    }

    function S(e, t, n) {
        for (var i, r = t ? ae.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || ae.cleanData(c(i)), i.parentNode && (n && ae.contains(i.ownerDocument, i) && d(c(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function T(e, t) {
        var n = ae(t.createElement(e)).appendTo(t.body),
            i = ae.css(n[0], "display");
        return n.detach(), i
    }

    function k(e) {
        var t = Z,
            n = _e[e];
        return n || (n = T(e, t), "none" !== n && n || (Be = (Be || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Be[0].contentDocument, t.write(), t.close(), n = T(e, t), Be.detach()), _e[e] = n), n
    }

    function E(e, t, n) {
        var i, r, a, o, s = e.style;
        return n = n || Ge(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || ae.contains(e.ownerDocument, e) || (o = ae.style(e, t)), n && !ie.pixelMarginRight() && Ze.test(o) && ze.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a), void 0 !== o ? o + "" : o
    }

    function P(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e) {
        if (e in it) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
            if (e = nt[n] + t, e in it) return e
    }

    function F(e, t, n) {
        var i = De.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function D(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += ae.css(e, n + Ie[a], !0, r)), i ? ("content" === n && (o -= ae.css(e, "padding" + Ie[a], !0, r)), "margin" !== n && (o -= ae.css(e, "border" + Ie[a] + "Width", !0, r))) : (o += ae.css(e, "padding" + Ie[a], !0, r), "padding" !== n && (o += ae.css(e, "border" + Ie[a] + "Width", !0, r)));
        return o
    }

    function I(t, n, i) {
        var r = !0,
            a = "width" === n ? t.offsetWidth : t.offsetHeight,
            o = Ge(t),
            s = "border-box" === ae.css(t, "boxSizing", !1, o);
        if (Z.msFullscreenElement && e.top !== e && t.getClientRects().length && (a = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= a || null == a) {
            if (a = E(t, n, o), (0 > a || null == a) && (a = t.style[n]), Ze.test(a)) return a;
            r = s && (ie.boxSizingReliable() || a === t.style[n]), a = parseFloat(a) || 0
        }
        return a + D(t, n, i || (s ? "border" : "content"), r, o) + "px"
    }

    function O(e, t) {
        for (var n, i, r, a = [], o = 0, s = e.length; s > o; o++) i = e[o], i.style && (a[o] = ke.get(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Oe(i) && (a[o] = ke.access(i, "olddisplay", k(i.nodeName)))) : (r = Oe(i), "none" === n && r || ke.set(i, "olddisplay", r ? n : ae.css(i, "display"))));
        for (o = 0; s > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function N(e, t, n, i, r) {
        return new N.prototype.init(e, t, n, i, r)
    }

    function M() {
        return e.setTimeout(function() {
            rt = void 0
        }), rt = ae.now()
    }

    function j(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ie[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function V(e, t, n) {
        for (var i, r = (L.tweeners[t] || []).concat(L.tweeners["*"]), a = 0, o = r.length; o > a; a++)
            if (i = r[a].call(n, t, e)) return i
    }

    function H(e, t, n) {
        var i, r, a, o, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Oe(e),
            g = ke.get(e, "fxshow");
        n.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, ae.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ae.css(e, "display"), c = "none" === u ? ke.get(e, "olddisplay") || k(e.nodeName) : u, "inline" === c && "none" === ae.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], ot.exec(r)) {
                if (delete t[i], a = a || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    h = !0
                }
                f[i] = g && g[i] || ae.style(e, i)
            } else u = void 0;
        if (ae.isEmptyObject(f)) "inline" === ("none" === u ? k(e.nodeName) : u) && (p.display = u);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ke.access(e, "fxshow", {}), a && (g.hidden = !h), h ? ae(e).show() : d.done(function() {
                ae(e).hide()
            }), d.done(function() {
                var t;
                ke.remove(e, "fxshow");
                for (t in f) ae.style(e, t, f[t])
            });
            for (i in f) o = V(h ? g[i] : 0, i, d), i in g || (g[i] = o.start, h && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function q(e, t) {
        var n, i, r, a, o;
        for (n in e)
            if (i = ae.camelCase(n), r = t[i], a = e[n], ae.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = ae.cssHooks[i], o && "expand" in o) {
                a = o.expand(a), delete e[i];
                for (n in a) n in e || (e[n] = a[n], t[n] = r)
            } else t[i] = r
    }

    function L(e, t, n) {
        var i, r, a = 0,
            o = L.prefilters.length,
            s = ae.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = rt || M(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(a);
                return s.notifyWith(e, [u, a, n]), 1 > a && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: ae.extend({}, t),
                opts: ae.extend(!0, {
                    specialEasing: {},
                    easing: ae.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ae.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (q(c, u.opts.specialEasing); o > a; a++)
            if (i = L.prefilters[a].call(u, e, c, u.opts)) return ae.isFunction(i.stop) && (ae._queueHooks(u.elem, u.opts.queue).stop = ae.proxy(i.stop, i)), i;
        return ae.map(c, V, u), ae.isFunction(u.opts.start) && u.opts.start.call(e, u), ae.fx.timer(ae.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Y(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                a = t.toLowerCase().match(we) || [];
            if (ae.isFunction(n))
                for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function X(e, t, n, i) {
        function r(s) {
            var l;
            return a[s] = !0, ae.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var a = {},
            o = e === Et;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }

    function R(e, t) {
        var n, i, r = ae.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ae.extend(!0, e, i), e
    }

    function $(e, t, n) {
        for (var i, r, a, o, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) a = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    a = r;
                    break
                }
                o || (o = r)
            }
            a = a || o
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }

    function W(e, t, n, i) {
        var r, a, o, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (o = u[l + " " + a] || u["* " + a], !o)
                for (r in u)
                    if (s = r.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                        o === !0 ? o = u[r] : u[r] !== !0 && (a = s[0], c.unshift(s[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: o ? d : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, n, i) {
        var r;
        if (ae.isArray(t)) ae.each(t, function(t, r) {
            n || Dt.test(e) ? i(e, r) : B(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== ae.type(t)) i(e, t);
        else
            for (r in t) B(e + "[" + r + "]", t[r], n, i)
    }

    function _(e) {
        return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var z = [],
        Z = e.document,
        G = z.slice,
        Q = z.concat,
        K = z.push,
        J = z.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {},
        re = "2.2.2",
        ae = function(e, t) {
            return new ae.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        le = /-([\da-z])/gi,
        ue = function(e, t) {
            return t.toUpperCase()
        };
    ae.fn = ae.prototype = {
        jquery: re,
        constructor: ae,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        },
        pushStack: function(e) {
            var t = ae.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return ae.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ae.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: z.sort,
        splice: z.splice
    }, ae.extend = ae.fn.extend = function() {
        var e, t, n, i, r, a, o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || ae.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = o[t], i = e[t], o !== i && (u && i && (ae.isPlainObject(i) || (r = ae.isArray(i))) ? (r ? (r = !1, a = n && ae.isArray(n) ? n : []) : a = n && ae.isPlainObject(n) ? n : {}, o[t] = ae.extend(u, a, i)) : void 0 !== i && (o[t] = i));
        return o
    }, ae.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ae.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !ae.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== ae.type(e) || e.nodeType || ae.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = ae.trim(e), e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(le, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ae.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : J.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], a = 0, o = e.length, s = !n; o > a; a++) i = !t(e[a], a), i !== s && r.push(e[a]);
            return r
        },
        map: function(e, t, i) {
            var r, a, o = 0,
                s = [];
            if (n(e))
                for (r = e.length; r > o; o++) a = t(e[o], o, i), null != a && s.push(a);
            else
                for (o in e) a = t(e[o], o, i), null != a && s.push(a);
            return Q.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), ae.isFunction(e) ? (i = G.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(G.call(arguments)))
            }, r.guid = e.guid = e.guid || ae.guid++, r) : void 0
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (ae.fn[Symbol.iterator] = z[Symbol.iterator]), ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, n, i) {
            var r, a, o, s, l, u, d, p, h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((t ? t.ownerDocument || t : U) !== O && I(t), t = t || O, M)) {
                if (11 !== g && (u = me.exec(e)))
                    if (r = u[1]) {
                        if (9 === g) {
                            if (!(o = t.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (h && (o = h.getElementById(r)) && q(t, o) && o.id === r) return n.push(o), n
                    } else {
                        if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                    }
                if (w.qsa && !W[e + " "] && (!j || !j.test(e))) {
                    if (1 !== g) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = L), d = k(e), a = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; a--;) d[a] = l + " " + f(d[a]);
                        p = d.join(","), h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return K.apply(n, h.querySelectorAll(p)), n
                    } catch (v) {} finally {
                        s === L && t.removeAttribute("id")
                    }
                }
            }
            return P(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[L] = !0, e
        }

        function r(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function o(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || _) - (~e.sourceIndex || _);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                a = X++;
            return t.first ? function(t, n, a) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, a)
            } : function(t, n, o) {
                var s, l, u, c = [Y, a];
                if (o) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, o)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (u = t[L] || (t[L] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === Y && s[1] === a) return c[2] = s[2];
                            if (l[i] = c, c[2] = e(t, n, o)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var r = 0, a = n.length; a > r; r++) t(e, n[r], i);
            return i
        }

        function v(e, t, n, i, r) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), u && t.push(s)));
            return o
        }

        function m(e, t, n, r, a, o) {
            return r && !r[L] && (r = m(r)), a && !a[L] && (a = m(a, o)), i(function(i, o, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = o.length,
                    m = i || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : v(m, f, e, s, l),
                    b = n ? a || (i ? e : h || r) ? [] : o : y;
                if (n && n(y, b, s, l), r)
                    for (u = v(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            a(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = a ? ee(i, d) : f[c]) > -1 && (i[u] = !(o[u] = d))
                    }
                } else b = v(b === o ? b.splice(h, b.length) : b), a ? a(null, o, b, l) : K.apply(o, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, a = C.relative[e[0].type], o = a || C.relative[" "], s = a ? 1 : 0, l = p(function(e) {
                    return e === t
                }, o, !0), u = p(function(e) {
                    return ee(t, e) > -1
                }, o, !0), c = [function(e, n, i) {
                    var r = !a && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                if (n = C.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[L]) {
                        for (i = ++s; r > i && !C.relative[e[i].type]; i++);
                        return m(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var r = n.length > 0,
                a = e.length > 0,
                o = function(i, o, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        g = i && [],
                        m = [],
                        y = A,
                        b = i || a && C.find.TAG("*", u),
                        x = Y += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (A = o === O || o || u); h !== w && null != (c = b[h]); h++) {
                        if (a && c) {
                            for (d = 0, o || c.ownerDocument === O || (I(c), s = !M); f = e[d++];)
                                if (f(c, o || O, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (Y = x)
                        }
                        r && ((c = !f && c) && p--, i && g.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(g, m, o, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = G.call(l));
                            m = v(m)
                        }
                        K.apply(l, m), u && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (Y = x, A = y), g
                };
            return r ? i(o) : o
        }
        var x, w, C, S, T, k, E, P, A, F, D, I, O, N, M, j, V, H, q, L = "sizzle" + 1 * new Date,
            U = e.document,
            Y = 0,
            X = 0,
            R = n(),
            $ = n(),
            W = n(),
            B = function(e, t) {
                return e === t && (D = !0), 0
            },
            _ = 1 << 31,
            z = {}.hasOwnProperty,
            Z = [],
            G = Z.pop,
            Q = Z.push,
            K = Z.push,
            J = Z.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            oe = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(ae),
            fe = new RegExp("^" + ie + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Ce = function() {
                I()
            };
        try {
            K.apply(Z = J.call(U.childNodes), U.childNodes), Z[U.childNodes.length].nodeType
        } catch (Se) {
            K = {
                apply: Z.length ? function(e, t) {
                    Q.apply(e, J.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, I = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : U;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, N = O.documentElement, M = !T(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(O.getElementsByClassName), w.getById = r(function(e) {
                return N.appendChild(e).id = L, !O.getElementsByName || !O.getElementsByName(L).length
            }), w.getById ? (C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && M ? t.getElementsByClassName(e) : void 0
            }, V = [], j = [], (w.qsa = ve.test(O.querySelectorAll)) && (r(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + L + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || j.push(".#.+[+~]")
            }), r(function(e) {
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (w.matchesSelector = ve.test(H = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), V.push("!=", ae)
            }), j = j.length && new RegExp(j.join("|")), V = V.length && new RegExp(V.join("|")), t = ve.test(N.compareDocumentPosition), q = t || ve.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, B = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === U && q(U, e) ? -1 : t === O || t.ownerDocument === U && q(U, t) ? 1 : F ? ee(F, e) - ee(F, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !a) return e === O ? -1 : t === O ? 1 : r ? -1 : a ? 1 : F ? ee(F, e) - ee(F, t) : 0;
                if (r === a) return o(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? o(s[i], l[i]) : s[i] === U ? -1 : l[i] === U ? 1 : 0
            }, O) : O
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== O && I(e), n = n.replace(ce, "='$1']"), w.matchesSelector && M && !W[n + " "] && (!V || !V.test(n)) && (!j || !j.test(n))) try {
                var i = H.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, O, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && I(e), q(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && I(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && z.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : w.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (D = !w.detectDuplicates, F = !w.sortStable && e.slice(0), e.sort(B), D) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return F = null, e
        }, S = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += S(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var a = t.attr(r, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, g = a !== o ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (v) {
                            if (a) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [o ? v.firstChild : v.lastChild], o && y) {
                                for (f = v, d = f[L] || (f[L] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === Y && u[1], b = p && u[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [Y, p, b];
                                        break
                                    }
                            } else if (y && (f = t, d = f[L] || (f[L] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === Y && u[1], b = p), b === !1)
                                for (;
                                    (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (y && (d = f[L] || (f[L] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [Y, b]), f !== t)););
                            return b -= r, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, a = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[L] ? a(n) : a.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = a(e, n), o = r.length; o--;) i = ee(e, r[o]), e[i] = !(t[i] = r[o])
                    }) : function(e) {
                        return a(e, 0, r)
                    }) : a
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = E(e.replace(se, "$1"));
                    return r[L] ? i(function(e, t, n, i) {
                        for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, i, a) {
                        return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xe, we),
                        function(t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, k = t.tokenize = function(e, n) {
            var i, r, a, o, s, l, u, c = $[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = C.preFilter; s;) {
                i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), a.push({
                    value: i,
                    type: r[0].replace(se, " ")
                }), s = s.slice(i.length));
                for (o in C.filter) !(r = pe[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: o,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                a = W[e + " "];
            if (!a) {
                for (t || (t = k(e)), n = t.length; n--;) a = y(t[n]), a[L] ? i.push(a) : r.push(a);
                a = W(e, b(r, i)), a.selector = e
            }
            return a
        }, P = t.select = function(e, t, n, i) {
            var r, a, o, s, l, u = "function" == typeof e && e,
                d = !i && k(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === t.nodeType && M && C.relative[a[1].type]) {
                    if (t = (C.find.ID(o.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !C.relative[s = o.type]);)
                    if ((l = C.find[s]) && (i = l(o.matches[0].replace(xe, we), ye.test(a[0].type) && c(t.parentNode) || t))) {
                        if (a.splice(r, 1), e = i.length && f(a), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || E(e, d))(i, t, !M, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = L.split("").sort(B).join("") === L, w.detectDuplicates = !!D, I(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    ae.find = ce, ae.expr = ce.selectors, ae.expr[":"] = ae.expr.pseudos, ae.uniqueSort = ae.unique = ce.uniqueSort, ae.text = ce.getText, ae.isXMLDoc = ce.isXML, ae.contains = ce.contains;
    var de = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && ae(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        fe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        pe = ae.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    ae.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ae.find.matchesSelector(i, e) ? [i] : [] : ae.find.matches(e, ae.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ae.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(ae(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (ae.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) ae.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? ae.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && pe.test(e) ? ae(e) : e || [], !1).length
        }
    });
    var ve, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = ae.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || ve, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), he.test(i[1]) && ae.isPlainObject(t))
                        for (i in t) ae.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = Z.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
        };
    ye.prototype = ae.fn, ve = ae(Z);
    var be = /^(?:parents|prev(?:Until|All))/,
        xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ae.fn.extend({
        has: function(e) {
            var t = ae(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (ae.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, a = [], o = pe.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? ae.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.call(ae(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ae.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function(e) {
            return fe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return fe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ae.merge([], e.childNodes)
        }
    }, function(e, t) {
        ae.fn[e] = function(n, i) {
            var r = ae.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ae.filter(i, r)), this.length > 1 && (xe[e] || ae.uniqueSort(r), be.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var we = /\S+/g;
    ae.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : ae.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            l = -1,
            u = function() {
                for (r = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, s.push(n)), function i(t) {
                        ae.each(t, function(t, n) {
                            ae.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ae.type(n) && i(n)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return ae.each(arguments, function(e, t) {
                        for (var n;
                            (n = ae.inArray(t, o, n)) > -1;) o.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? ae.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, ae.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ae.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ae.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ae.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ae.Deferred(function(n) {
                            ae.each(t, function(t, a) {
                                var o = ae.isFunction(e[t]) && e[t];
                                r[a[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && ae.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ae.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, ae.each(t, function(e, a) {
                var o = a[2],
                    s = a[3];
                i[a[1]] = o.add, s && o.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function() {
                    return r[a[0] + "With"](this === r ? i : this, arguments), this
                }, r[a[0] + "With"] = o.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                a = G.call(arguments),
                o = a.length,
                s = 1 !== o || e && ae.isFunction(e.promise) ? o : 0,
                l = 1 === s ? e : ae.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (o > 1)
                for (t = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) a[r] && ae.isFunction(a[r].promise) ? a[r].promise().progress(u(r, n, t)).done(u(r, i, a)).fail(l.reject) : --s;
            return s || l.resolveWith(i, a), l.promise()
        }
    });
    var Ce;
    ae.fn.ready = function(e) {
        return ae.ready.promise().done(e), this
    }, ae.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ae.readyWait++ : ae.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ae.readyWait : ae.isReady) || (ae.isReady = !0, e !== !0 && --ae.readyWait > 0 || (Ce.resolveWith(Z, [ae]), ae.fn.triggerHandler && (ae(Z).triggerHandler("ready"), ae(Z).off("ready"))))
        }
    }), ae.ready.promise = function(t) {
        return Ce || (Ce = ae.Deferred(), "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? e.setTimeout(ae.ready) : (Z.addEventListener("DOMContentLoaded", o), e.addEventListener("load", o))), Ce.promise(t)
    }, ae.ready.promise();
    var Se = function(e, t, n, i, r, a, o) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === ae.type(n)) {
                r = !0;
                for (s in n) Se(e, t, s, n[s], !0, a, o)
            } else if (void 0 !== i && (r = !0, ae.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(ae(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
        },
        Te = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!Te(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n;
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, ae.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, a = e[this.expando];
            if (void 0 !== a) {
                if (void 0 === t) this.register(e);
                else {
                    ae.isArray(t) ? i = t.concat(t.map(ae.camelCase)) : (r = ae.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(we) || [])), n = i.length;
                    for (; n--;) delete a[i[n]]
                }(void 0 === t || ae.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ae.isEmptyObject(t)
        }
    };
    var ke = new s,
        Ee = new s,
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ae = /[A-Z]/g;
    ae.extend({
        hasData: function(e) {
            return Ee.hasData(e) || ke.hasData(e)
        },
        data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        removeData: function(e, t) {
            Ee.remove(e, t)
        },
        _data: function(e, t, n) {
            return ke.access(e, t, n)
        },
        _removeData: function(e, t) {
            ke.remove(e, t)
        }
    }), ae.fn.extend({
        data: function(e, t) {
            var n, i, r, a = this[0],
                o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = Ee.get(a), 1 === a.nodeType && !ke.get(a, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = ae.camelCase(i.slice(5)), l(a, i, r[i])));
                    ke.set(a, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Ee.set(this, e)
            }) : Se(this, function(t) {
                var n, i;
                if (a && void 0 === t) {
                    if (n = Ee.get(a, e) || Ee.get(a, e.replace(Ae, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = ae.camelCase(e), n = Ee.get(a, i), void 0 !== n) return n;
                    if (n = l(a, i, void 0), void 0 !== n) return n
                } else i = ae.camelCase(e), this.each(function() {
                    var n = Ee.get(this, i);
                    Ee.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Ee.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ee.remove(this, e)
            })
        }
    }), ae.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ke.get(e, t), n && (!i || ae.isArray(n) ? i = ke.access(e, t, ae.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ae.queue(e, t),
                i = n.length,
                r = n.shift(),
                a = ae._queueHooks(e, t),
                o = function() {
                    ae.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ke.get(e, n) || ke.access(e, n, {
                empty: ae.Callbacks("once memory").add(function() {
                    ke.remove(e, [t + "queue", n])
                })
            })
        }
    }), ae.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ae.queue(this, e, t);
                ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ae.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = ae.Deferred(),
                a = this,
                o = this.length,
                s = function() {
                    --i || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = ke.get(a[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        De = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Ie = ["Top", "Right", "Bottom", "Left"],
        Oe = function(e, t) {
            return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
        },
        Ne = /^(?:checkbox|radio)$/i,
        Me = /<([\w:-]+)/,
        je = /^$|\/(?:java|ecma)script/i,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var He = /<|&#?\w+;/;
    ! function() {
        var e = Z.createDocumentFragment(),
            t = e.appendChild(Z.createElement("div")),
            n = Z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var qe = /^key/,
        Le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ue = /^([^.]*)(?:\.(.+)|)/;
    ae.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, f, p, h, g, v = ke.get(e);
            if (v)
                for (n.handler && (a = n, n = a.handler, r = a.selector), n.guid || (n.guid = ae.guid++), (l = v.events) || (l = v.events = {}), (o = v.handle) || (o = v.handle = function(t) {
                        return "undefined" != typeof ae && ae.event.triggered !== t.type ? ae.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(we) || [""], u = t.length; u--;) s = Ue.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = ae.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = ae.event.special[p] || {}, c = ae.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ae.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, a), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, h, o) !== !1 || e.addEventListener && e.addEventListener(p, o)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), ae.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, f, p, h, g, v = ke.hasData(e) && ke.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(we) || [""], u = t.length; u--;)
                    if (s = Ue.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ae.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = f.length; a--;) c = f[a], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(a, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        o && !f.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || ae.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l) ae.event.remove(e, p + t[u], n, i, !0);
                ae.isEmptyObject(l) && ke.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = ae.event.fix(e);
            var t, n, i, r, a, o = [],
                s = G.call(arguments),
                l = (ke.get(this, "events") || {})[e.type] || [],
                u = ae.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (o = ae.event.handlers.call(this, e, l), t = 0;
                    (r = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, i = ((ae.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, o = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; s > n; n++) a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? ae(r, this).index(l) > -1 : ae.find(r, this, null, [l]).length), i[r] && i.push(a);
                        i.length && o.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, a = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[ae.expando]) return e;
            var t, n, i, r = e.type,
                a = e,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Le.test(r) ? this.mouseHooks : qe.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new ae.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
            return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ae.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ae.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ae.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ae.Event = function(e, t) {
        return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void(this[ae.expando] = !0)) : new ae.Event(e, t)
    }, ae.Event.prototype = {
        constructor: ae.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ae.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ae.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    a = e.handleObj;
                return r && (r === i || ae.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ae.fn.extend({
        on: function(e, t, n, i) {
            return v(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return v(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                ae.event.remove(this, e, n, t)
            })
        }
    });
    var Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Xe = /<script|<style|<link/i,
        Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^true\/(.*)/,
        We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ae.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ye, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, a, o, s = e.cloneNode(!0),
                l = ae.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e)))
                for (o = c(s), a = c(e), i = 0, r = a.length; r > i; i++) w(a[i], o[i]);
            if (t)
                if (n)
                    for (a = a || c(e), o = o || c(s), i = 0, r = a.length; r > i; i++) x(a[i], o[i]);
                else x(e, s);
            return o = c(s, "script"), o.length > 0 && d(o, !l && c(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, i, r = ae.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (Te(n)) {
                    if (t = n[ke.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? ae.event.remove(n, i) : ae.removeEvent(n, i, t.handle);
                        n[ke.expando] = void 0
                    }
                    n[Ee.expando] && (n[Ee.expando] = void 0)
                }
        }
    }), ae.fn.extend({
        domManip: C,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Se(this, function(e) {
                return void 0 === e ? ae.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return C(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return C(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return C(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return C(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ae.cleanData(c(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ae.clone(this, e, t)
            })
        },
        html: function(e) {
            return Se(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Xe.test(e) && !Ve[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ae.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ae.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return C(this, arguments, function(t) {
                var n = this.parentNode;
                ae.inArray(this, e) < 0 && (ae.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ae.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ae.fn[e] = function(e) {
            for (var n, i = [], r = ae(e), a = r.length - 1, o = 0; a >= o; o++) n = o === a ? this : this.clone(!0), ae(r[o])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Be, _e = {
            HTML: "block",
            BODY: "block"
        },
        ze = /^margin/,
        Ze = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        Ge = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Qe = function(e, t, n, i) {
            var r, a, o = {};
            for (a in t) o[a] = e.style[a], e.style[a] = t[a];
            r = n.apply(e, i || []);
            for (a in t) e.style[a] = o[a];
            return r
        },
        Ke = Z.documentElement;
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ke.appendChild(o);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, a = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ke.removeChild(o)
        }
        var n, i, r, a, o = Z.createElement("div"),
            s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), ae.extend(ie, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            pixelMarginRight: function() {
                return null == i && t(), r
            },
            reliableMarginLeft: function() {
                return null == i && t(), a
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(Z.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ke.appendChild(o), t = !parseFloat(e.getComputedStyle(n).marginRight), Ke.removeChild(o), s.removeChild(n), t
            }
        }))
    }();
    var Je = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nt = ["Webkit", "O", "Moz", "ms"],
        it = Z.createElement("div").style;
    ae.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = E(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = ae.camelCase(t),
                    l = e.style;
                return t = ae.cssProps[s] || (ae.cssProps[s] = A(s) || s), o = ae.cssHooks[t] || ae.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t] : (a = typeof n, "string" === a && (r = De.exec(n)) && r[1] && (n = u(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (ae.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var r, a, o, s = ae.camelCase(t);
            return t = ae.cssProps[s] || (ae.cssProps[s] = A(s) || s), o = ae.cssHooks[t] || ae.cssHooks[s], o && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = E(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (a = parseFloat(r), n === !0 || isFinite(a) ? a || 0 : r) : r
        }
    }), ae.each(["height", "width"], function(e, t) {
        ae.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Je.test(ae.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, et, function() {
                    return I(e, t, i)
                }) : I(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r, a = i && Ge(e),
                    o = i && D(e, t, i, "border-box" === ae.css(e, "boxSizing", !1, a), a);
                return o && (r = De.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ae.css(e, t)), F(e, n, o)
            }
        }
    }), ae.cssHooks.marginLeft = P(ie.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), ae.cssHooks.marginRight = P(ie.reliableMarginRight, function(e, t) {
        return t ? Qe(e, {
            display: "inline-block"
        }, E, [e, "marginRight"]) : void 0
    }), ae.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ae.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ie[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, ze.test(e) || (ae.cssHooks[e + t].set = F)
    }), ae.fn.extend({
        css: function(e, t) {
            return Se(this, function(e, t, n) {
                var i, r, a = {},
                    o = 0;
                if (ae.isArray(t)) {
                    for (i = Ge(e), r = t.length; r > o; o++) a[t[o]] = ae.css(e, t[o], !1, i);
                    return a
                }
                return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Oe(this) ? ae(this).show() : ae(this).hide()
            })
        }
    }), ae.Tween = N, N.prototype = {
        constructor: N,
        init: function(e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || ae.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ae.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = N.propHooks[this.prop];
            return e && e.get ? e.get(this) : N.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = N.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ae.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ae.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ae.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ae.fx = N.prototype.init, ae.fx.step = {};
    var rt, at, ot = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    ae.Animation = ae.extend(L, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return u(n.elem, e, De.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], L.tweeners[n] = L.tweeners[n] || [], L.tweeners[n].unshift(t)
            },
            prefilters: [H],
            prefilter: function(e, t) {
                t ? L.prefilters.unshift(e) : L.prefilters.push(e)
            }
        }), ae.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ae.extend({}, e) : {
                complete: n || !n && t || ae.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ae.isFunction(t) && t
            };
            return i.duration = ae.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ae.fx.speeds ? ae.fx.speeds[i.duration] : ae.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ae.isFunction(i.old) && i.old.call(this), i.queue && ae.dequeue(this, i.queue)
            }, i
        }, ae.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Oe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = ae.isEmptyObject(e),
                    a = ae.speed(t, n, i),
                    o = function() {
                        var t = L(this, ae.extend({}, e), a);
                        (r || ke.get(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        a = ae.timers,
                        o = ke.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && st.test(r) && i(o[r]);
                    for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                    !t && n || ae.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ke.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        a = ae.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, ae.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ae.each(["toggle", "show", "hide"], function(e, t) {
            var n = ae.fn[t];
            ae.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, r)
            }
        }), ae.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ae.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ae.timers = [], ae.fx.tick = function() {
            var e, t = 0,
                n = ae.timers;
            for (rt = ae.now(); t < n.length; t++) e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || ae.fx.stop(), rt = void 0
        }, ae.fx.timer = function(e) {
            ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop()
        }, ae.fx.interval = 13, ae.fx.start = function() {
            at || (at = e.setInterval(ae.fx.tick, ae.fx.interval))
        }, ae.fx.stop = function() {
            e.clearInterval(at), at = null
        }, ae.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ae.fn.delay = function(t, n) {
            return t = ae.fx ? ae.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = Z.createElement("input"),
                t = Z.createElement("select"),
                n = t.appendChild(Z.createElement("option"));
            e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
        }();
    var lt, ut = ae.expr.attrHandle;
    ae.fn.extend({
        attr: function(e, t) {
            return Se(this, ae.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ae.removeAttr(this, e)
            })
        }
    }), ae.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? ae.prop(e, t, n) : (1 === a && ae.isXMLDoc(e) || (t = t.toLowerCase(), r = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void ae.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ae.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                a = t && t.match(we);
            if (a && 1 === e.nodeType)
                for (; n = a[r++];) i = ae.propFix[n] || n, ae.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), lt = {
        set: function(e, t, n) {
            return t === !1 ? ae.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ut[t] || ae.find.attr;
        ut[t] = function(e, t, i) {
            var r, a;
            return i || (a = ut[t], ut[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ut[t] = a), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;
    ae.fn.extend({
        prop: function(e, t) {
            return Se(this, ae.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ae.propFix[e] || e]
            })
        }
    }), ae.extend({
        prop: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ae.isXMLDoc(e) || (t = ae.propFix[t] || t, r = ae.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ae.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ie.optSelected || (ae.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ae.propFix[this.toLowerCase()] = this
    });
    var ft = /[\t\r\n\f]/g;
    ae.fn.extend({
        addClass: function(e) {
            var t, n, i, r, a, o, s, l = 0;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).addClass(e.call(this, t, U(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[l++];)
                    if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(ft, " ")) {
                        for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        s = ae.trim(i), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, a, o, s, l = 0;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).removeClass(e.call(this, t, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[l++];)
                    if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(ft, " ")) {
                        for (o = 0; a = t[o++];)
                            for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                        s = ae.trim(i), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function(n) {
                ae(this).toggleClass(e.call(this, n, U(this), t), t)
            }) : this.each(function() {
                var t, i, r, a;
                if ("string" === n)
                    for (i = 0, r = ae(this), a = e.match(we) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = U(this), t && ke.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ke.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(n) + " ").replace(ft, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    ae.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = ae.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, ae(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ae.isArray(r) && (r = ae.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = ae.valHooks[r.type] || ae.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)
            }
        }
    }), ae.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ae.find.attr(e, "value");
                    return null != t ? t : ae.trim(ae.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, o = a ? null : [], s = a ? r + 1 : i.length, l = 0 > r ? s : a ? r : 0; s > l; l++)
                        if (n = i[l], (n.selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ae.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ae(n).val(), a) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, a = ae.makeArray(t), o = r.length; o--;) i = r[o], (i.selected = ae.inArray(ae.valHooks.option.get(i), a) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), ae.each(["radio", "checkbox"], function() {
        ae.valHooks[this] = {
            set: function(e, t) {
                return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) > -1 : void 0
            }
        }, ie.checkOn || (ae.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    ae.extend(ae.event, {
        trigger: function(t, n, i, r) {
            var a, o, s, l, u, c, d, f = [i || Z],
                p = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = s = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(p + ae.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[ae.expando] ? t : new ae.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ae.makeArray(n, [t]), d = ae.event.special[p] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !ae.isWindow(i)) {
                    for (l = d.delegateType || p, gt.test(l + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (i.ownerDocument || Z) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (a = 0;
                    (o = f[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : d.bindType || p, c = (ke.get(o, "events") || {})[t.type] && ke.get(o, "handle"), c && c.apply(o, n), c = u && o[u], c && c.apply && Te(o) && (t.result = c.apply(o, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Te(i) || u && ae.isFunction(i[p]) && !ae.isWindow(i) && (s = i[u], s && (i[u] = null), ae.event.triggered = p, i[p](), ae.event.triggered = void 0, s && (i[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = ae.extend(new ae.Event, n, {
                type: e,
                isSimulated: !0
            });
            ae.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }), ae.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ae.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ae.event.trigger(e, t, n, !0) : void 0
        }
    }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ae.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ae.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || ae.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ae.event.simulate(t, e.target, ae.event.fix(e))
        };
        ae.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = ke.access(i, t);
                r || i.addEventListener(e, n, !0), ke.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = ke.access(i, t) - 1;
                r ? ke.access(i, t, r) : (i.removeEventListener(e, n, !0), ke.remove(i, t))
            }
        }
    });
    var vt = e.location,
        mt = ae.now(),
        yt = /\?/;
    ae.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, ae.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t), n
    };
    var bt = /#.*$/,
        xt = /([?&])_=[^&]*/,
        wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        St = /^(?:GET|HEAD)$/,
        Tt = /^\/\//,
        kt = {},
        Et = {},
        Pt = "*/".concat("*"),
        At = Z.createElement("a");
    At.href = vt.href, ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: Ct.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ae.parseJSON,
                "text xml": ae.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, ae.ajaxSettings), t) : R(ae.ajaxSettings, e)
        },
        ajaxPrefilter: Y(kt),
        ajaxTransport: Y(Et),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var u, d, y, b, w, S = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), r = void 0, o = s || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, i && (b = $(f, C, i)), b = W(f, b, C, u), u ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ae.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (ae.etag[a] = w)), 204 === t || "HEAD" === f.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = b.state, d = b.data, y = b.error, u = !y)) : (y = S, !t && S || (S = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || S) + "", u ? g.resolveWith(p, [d, S, C]) : g.rejectWith(p, [C, S, y]), C.statusCode(m), m = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? d : y]), v.fireWith(p, [C, S]), c && (h.trigger("ajaxComplete", [C, f]), --ae.active || ae.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, a, o, s, l, u, c, d, f = ae.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? ae(p) : ae.event,
                g = ae.Deferred(),
                v = ae.Callbacks("once memory"),
                m = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = wt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (g.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, f.url = ((t || f.url || vt.href) + "").replace(bt, "").replace(Tt, vt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ae.trim(f.dataType || "*").toLowerCase().match(we) || [""], null == f.crossDomain) {
                u = Z.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = At.protocol + "//" + At.host != u.protocol + "//" + u.host
                } catch (S) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ae.param(f.data, f.traditional)), X(kt, f, n, C), 2 === x) return C;
            c = ae.event && f.global, c && 0 === ae.active++ && ae.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !St.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (yt.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = xt.test(a) ? a.replace(xt, "$1_=" + mt++) : a + (yt.test(a) ? "&" : "?") + "_=" + mt++)), f.ifModified && (ae.lastModified[a] && C.setRequestHeader("If-Modified-Since", ae.lastModified[a]), ae.etag[a] && C.setRequestHeader("If-None-Match", ae.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (f.beforeSend.call(p, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[d](f[d]);
            if (r = X(Et, f, n, C)) {
                if (C.readyState = 1, c && h.trigger("ajaxSend", [C, f]), 2 === x) return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(y, i)
                } catch (S) {
                    if (!(2 > x)) throw S;
                    i(-1, S)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return ae.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ae.get(e, void 0, t, "script")
        }
    }), ae.each(["get", "post"], function(e, t) {
        ae[t] = function(e, n, i, r) {
            return ae.isFunction(n) && (r = r || i, i = n, n = void 0), ae.ajax(ae.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, ae.isPlainObject(e) && e))
        }
    }), ae._evalUrl = function(e) {
        return ae.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ae.fn.extend({
        wrapAll: function(e) {
            var t;
            return ae.isFunction(e) ? this.each(function(t) {
                ae(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return ae.isFunction(e) ? this.each(function(t) {
                ae(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ae(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ae.isFunction(e);
            return this.each(function(n) {
                ae(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ae.expr.filters.hidden = function(e) {
        return !ae.expr.filters.visible(e)
    }, ae.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Ft = /%20/g,
        Dt = /\[\]$/,
        It = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    ae.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = ae.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) B(n, e[n], t, r);
        return i.join("&").replace(Ft, "+")
    }, ae.fn.extend({
        serialize: function() {
            return ae.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ae.prop(this, "elements");
                return e ? ae.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ae(this).is(":disabled") && Nt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = ae(this).val();
                return null == n ? null : ae.isArray(n) ? ae.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(It, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(It, "\r\n")
                }
            }).get()
        }
    }), ae.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Mt = {
            0: 200,
            1223: 204
        },
        jt = ae.ajaxSettings.xhr();
    ie.cors = !!jt && "withCredentials" in jt, ie.ajax = jt = !!jt, ae.ajaxTransport(function(t) {
        var n, i;
        return ie.cors || jt && !t.crossDomain ? {
            send: function(r, a) {
                var o, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) s[o] = t.xhrFields[o];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) s.setRequestHeader(o, r[o]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Mt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), ae.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ae.globalEval(e), e
            }
        }
    }), ae.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ae.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = ae("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), Z.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Vt = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    ae.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || ae.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), ae.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, a, o, s = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ht, "$1" + r) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return o || ae.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function() {
            o = arguments
        }, i.always(function() {
            void 0 === a ? ae(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, Vt.push(r)), o && ae.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), ae.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Z;
        var i = he.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = f([e], t, r), r && r.length && ae(r).remove(), ae.merge([], i.childNodes))
    };
    var qt = ae.fn.load;
    ae.fn.load = function(e, t, n) {
        if ("string" != typeof e && qt) return qt.apply(this, arguments);
        var i, r, a, o = this,
            s = e.indexOf(" ");
        return s > -1 && (i = ae.trim(e.slice(s)), e = e.slice(0, s)), ae.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && ae.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, o.html(i ? ae("<div>").append(ae.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            o.each(function() {
                n.apply(o, a || [e.responseText, t, e])
            })
        }), this
    }, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ae.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ae.expr.filters.animated = function(e) {
        return ae.grep(ae.timers, function(t) {
            return e === t.elem
        }).length
    }, ae.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, o, s, l, u, c = ae.css(e, "position"),
                d = ae(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), a = ae.css(e, "top"), l = ae.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1, u ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, n, ae.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ae.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ae.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                a = i && i.ownerDocument;
            if (a) return t = a.documentElement, ae.contains(t, i) ? (r = i.getBoundingClientRect(), n = _(a), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ae.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (i = e.offset()), i.top += ae.css(e[0], "borderTopWidth", !0), i.left += ae.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - ae.css(n, "marginTop", !0),
                    left: t.left - i.left - ae.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ae.css(e, "position");) e = e.offsetParent;
                return e || Ke
            })
        }
    }), ae.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ae.fn[e] = function(i) {
            return Se(this, function(e, i, r) {
                var a = _(e);
                return void 0 === r ? a ? a[t] : e[i] : void(a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), ae.each(["top", "left"], function(e, t) {
        ae.cssHooks[t] = P(ie.pixelPosition, function(e, n) {
            return n ? (n = E(e, t), Ze.test(n) ? ae(e).position()[t] + "px" : n) : void 0
        })
    }), ae.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ae.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            ae.fn[i] = function(i, r) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    o = n || (i === !0 || r === !0 ? "margin" : "border");
                return Se(this, function(t, n, i) {
                    var r;
                    return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ae.css(t, n, o) : ae.style(t, n, i, o)
                }, t, a ? i : void 0, a, null)
            }
        })
    }), ae.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ae
    });
    var Lt = e.jQuery,
        Ut = e.$;
    return ae.noConflict = function(t) {
        return e.$ === ae && (e.$ = Ut), t && e.jQuery === ae && (e.jQuery = Lt), ae
    }, t || (e.jQuery = e.$ = ae), ae
}),
function(e) {
    function t(e) {
        var t = e.length,
            i = n.type(e);
        return "function" === i || n.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var n = function(e, t) {
            return new n.fn.init(e, t)
        };
        n.isWindow = function(e) {
            return null != e && e == e.window
        }, n.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
        }, n.isArray = Array.isArray || function(e) {
            return "array" === n.type(e)
        }, n.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
            try {
                if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            for (t in e);
            return void 0 === t || a.call(e, t)
        }, n.each = function(e, n, i) {
            var r, a = 0,
                o = e.length,
                s = t(e);
            if (i) {
                if (s)
                    for (; o > a && (r = n.apply(e[a], i), r !== !1); a++);
                else
                    for (a in e)
                        if (r = n.apply(e[a], i), r === !1) break
            } else if (s)
                for (; o > a && (r = n.call(e[a], a, e[a]), r !== !1); a++);
            else
                for (a in e)
                    if (r = n.call(e[a], a, e[a]), r === !1) break; return e
        }, n.data = function(e, t, r) {
            if (void 0 === r) {
                var a = e[n.expando],
                    o = a && i[a];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                return i[a] = i[a] || {}, i[a][t] = r, r
            }
        }, n.removeData = function(e, t) {
            var r = e[n.expando],
                a = r && i[r];
            a && n.each(t, function(e, t) {
                delete a[t]
            })
        }, n.extend = function() {
            var e, t, i, r, a, o, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                if (null != (a = arguments[l]))
                    for (r in a) e = s[r], i = a[r], s !== i && (c && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, o = e && n.isArray(e) ? e : []) : o = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(c, o, i)) : void 0 !== i && (s[r] = i));
            return s
        }, n.queue = function(e, i, r) {
            function a(e, n) {
                var i = n || [];
                return null != e && (t(Object(e)) ? ! function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                    if (n !== n)
                        for (; void 0 !== t[i];) e[r++] = t[i++];
                    return e.length = r, e
                }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
            }
            if (e) {
                i = (i || "fx") + "queue";
                var o = n.data(e, i);
                return r ? (!o || n.isArray(r) ? o = n.data(e, i, a(r)) : o.push(r), o) : o || []
            }
        }, n.dequeue = function(e, t) {
            n.each(e.nodeType ? [e] : e, function(e, i) {
                t = t || "fx";
                var r = n.queue(i, t),
                    a = r.shift();
                "inprogress" === a && (a = r.shift()), a && ("fx" === t && r.unshift("inprogress"), a.call(i, function() {
                    n.dequeue(i, t)
                }))
            })
        }, n.fn = n.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    i = this.offset(),
                    r = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : n(e).offset();
                return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        };
        var i = {};
        n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
        for (var r = {}, a = r.hasOwnProperty, o = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
        n.fn.init.prototype = n.fn, e.Velocity = {
            Utilities: n
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, n, i) {
        function r(e) {
            for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                var r = e[t];
                r && i.push(r)
            }
            return i
        }

        function a(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }

        function o(e) {
            var t = f.data(e, "velocity");
            return null === t ? i : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, n, i, r) {
            function a(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function o(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, n) {
                return ((a(t, n) * e + o(t, n)) * e + s(t)) * e
            }

            function u(e, t, n) {
                return 3 * a(t, n) * e * e + 2 * o(t, n) * e + s(t)
            }

            function c(t, n) {
                for (var r = 0; g > r; ++r) {
                    var a = u(n, e, i);
                    if (0 === a) return n;
                    var o = l(n, e, i) - t;
                    n -= o / a
                }
                return n
            }

            function d() {
                for (var t = 0; b > t; ++t) S[t] = l(t * x, e, i)
            }

            function f(t, n, r) {
                var a, o, s = 0;
                do o = n + (r - n) / 2, a = l(o, e, i) - t, a > 0 ? r = o : n = o; while (Math.abs(a) > m && ++s < y);
                return o
            }

            function p(t) {
                for (var n = 0, r = 1, a = b - 1; r != a && S[r] <= t; ++r) n += x;
                --r;
                var o = (t - S[r]) / (S[r + 1] - S[r]),
                    s = n + o * x,
                    l = u(s, e, i);
                return l >= v ? c(t, s) : 0 == l ? s : f(t, n, n + x)
            }

            function h() {
                T = !0, e == n && i == r || d()
            }
            var g = 4,
                v = .001,
                m = 1e-7,
                y = 10,
                b = 11,
                x = 1 / (b - 1),
                w = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var C = 0; 4 > C; ++C)
                if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
            e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
            var S = w ? new Float32Array(b) : new Array(b),
                T = !1,
                k = function(t) {
                    return T || h(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), n, r)
                };
            k.getControlPoints = function() {
                return [{
                    x: e,
                    y: n
                }, {
                    x: i,
                    y: r
                }]
            };
            var E = "generateBezier(" + [e, n, i, r] + ")";
            return k.toString = function() {
                return E
            }, k
        }

        function u(e, t) {
            var n = e;
            return g.isString(e) ? b.Easings[e] || (n = !1) : n = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
        }

        function c(e) {
            if (e) {
                var t = (new Date).getTime(),
                    n = b.State.calls.length;
                n > 1e4 && (b.State.calls = r(b.State.calls));
                for (var a = 0; n > a; a++)
                    if (b.State.calls[a]) {
                        var s = b.State.calls[a],
                            l = s[0],
                            u = s[2],
                            p = s[3],
                            h = !!p,
                            v = null;
                        p || (p = b.State.calls[a][3] = t - 16);
                        for (var m = Math.min((t - p) / u.duration, 1), y = 0, x = l.length; x > y; y++) {
                            var C = l[y],
                                T = C.element;
                            if (o(T)) {
                                var k = !1;
                                if (u.display !== i && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        f.each(E, function(e, t) {
                                            w.setPropertyValue(T, "display", t)
                                        })
                                    }
                                    w.setPropertyValue(T, "display", u.display)
                                }
                                u.visibility !== i && "hidden" !== u.visibility && w.setPropertyValue(T, "visibility", u.visibility);
                                for (var P in C)
                                    if ("element" !== P) {
                                        var A, F = C[P],
                                            D = g.isString(F.easing) ? b.Easings[F.easing] : F.easing;
                                        if (1 === m) A = F.endValue;
                                        else {
                                            var I = F.endValue - F.startValue;
                                            if (A = F.startValue + I * D(m, u, I), !h && A === F.currentValue) continue
                                        }
                                        if (F.currentValue = A, "tween" === P) v = A;
                                        else {
                                            if (w.Hooks.registered[P]) {
                                                var O = w.Hooks.getRoot(P),
                                                    N = o(T).rootPropertyValueCache[O];
                                                N && (F.rootPropertyValue = N)
                                            }
                                            var M = w.setPropertyValue(T, P, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);
                                            w.Hooks.registered[P] && (w.Normalizations.registered[O] ? o(T).rootPropertyValueCache[O] = w.Normalizations.registered[O]("extract", null, M[1]) : o(T).rootPropertyValueCache[O] = M[1]), "transform" === M[0] && (k = !0)
                                        }
                                    }
                                u.mobileHA && o(T).transformCache.translate3d === i && (o(T).transformCache.translate3d = "(0px, 0px, 0px)", k = !0), k && w.flushTransformCache(T)
                            }
                        }
                        u.display !== i && "none" !== u.display && (b.State.calls[a][2].display = !1), u.visibility !== i && "hidden" !== u.visibility && (b.State.calls[a][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], m, Math.max(0, p + u.duration - t), p, v), 1 === m && d(a)
                    }
            }
            b.State.isTicking && S(c)
        }

        function d(e, t) {
            if (!b.State.calls[e]) return !1;
            for (var n = b.State.calls[e][0], r = b.State.calls[e][1], a = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = n.length; c > u; u++) {
                var d = n[u].element;
                if (t || a.loop || ("none" === a.display && w.setPropertyValue(d, "display", a.display), "hidden" === a.visibility && w.setPropertyValue(d, "visibility", a.visibility)), a.loop !== !0 && (f.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(f.queue(d)[1])) && o(d)) {
                    o(d).isAnimating = !1, o(d).rootPropertyValueCache = {};
                    var p = !1;
                    f.each(w.Lists.transforms3D, function(e, t) {
                        var n = /^scale/.test(t) ? 1 : 0,
                            r = o(d).transformCache[t];
                        o(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (p = !0, delete o(d).transformCache[t])
                    }), a.mobileHA && (p = !0, delete o(d).transformCache.translate3d), p && w.flushTransformCache(d), w.Values.removeClass(d, "velocity-animating")
                }
                if (!t && a.complete && !a.loop && u === c - 1) try {
                    a.complete.call(r, r)
                } catch (h) {
                    setTimeout(function() {
                        throw h
                    }, 1)
                }
                s && a.loop !== !0 && s(r), o(d) && a.loop === !0 && !t && (f.each(o(d).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), b(d, "reverse", {
                    loop: !0,
                    delay: a.delay
                })), a.queue !== !1 && f.dequeue(d, a.queue)
            }
            b.State.calls[e] = !1;
            for (var g = 0, v = b.State.calls.length; v > g; g++)
                if (b.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }
        var f, p = function() {
                if (n.documentMode) return n.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = n.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return i
            }(),
            h = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var n, i = (new Date).getTime();
                    return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                        t(i + n)
                    }, n)
                }
            }(),
            g = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            v = !1;
        if (e.fn && e.fn.jquery ? (f = e, v = !0) : f = t.Velocity.Utilities, 8 >= p && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var m = 400,
            y = "swing",
            b = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: n.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: f,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: m,
                    easing: y,
                    begin: i,
                    complete: i,
                    progress: i,
                    display: i,
                    visibility: i,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    f.data(e, "velocity", {
                        isSVG: g.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        t.pageYOffset !== i ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var x = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, n, i) {
                var r = {
                    x: t.x + i.dx * n,
                    v: t.v + i.dv * n,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: r.v,
                    dv: e(r)
                }
            }

            function n(n, i) {
                var r = {
                        dx: n.v,
                        dv: e(n)
                    },
                    a = t(n, .5 * i, r),
                    o = t(n, .5 * i, a),
                    s = t(n, i, o),
                    l = 1 / 6 * (r.dx + 2 * (a.dx + o.dx) + s.dx),
                    u = 1 / 6 * (r.dv + 2 * (a.dv + o.dv) + s.dv);
                return n.x = n.x + l * i, n.v = n.v + u * i, n
            }
            return function i(e, t, r) {
                var a, o, s, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    u = [0],
                    c = 0,
                    d = 1e-4,
                    f = .016;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, r = r || null, l.tension = e, l.friction = t, a = null !== r, a ? (c = i(e, t), o = c / r * f) : o = f;;)
                    if (s = n(s || l, o), u.push(1 + s.x), c += 16, !(Math.abs(s.x) > d && Math.abs(s.v) > d)) break;
                return a ? function(e) {
                    return u[e * (u.length - 1) | 0]
                } : c
            }
        }();
        b.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, f.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            b.Easings[t[0]] = l.apply(null, t[1])
        });
        var w = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < w.Lists.colors.length; e++) {
                        var t = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var n, i, r;
                    if (p)
                        for (n in w.Hooks.templates) {
                            i = w.Hooks.templates[n], r = i[0].split(" ");
                            var a = i[1].match(w.RegEx.valueSplit);
                            "Color" === r[0] && (r.push(r.shift()), a.push(a.shift()), w.Hooks.templates[n] = [r.join(" "), a.join(" ")])
                        }
                    for (n in w.Hooks.templates) {
                        i = w.Hooks.templates[n], r = i[0].split(" ");
                        for (var e in r) {
                            var o = n + r[e],
                                s = e;
                            w.Hooks.registered[o] = [n, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = w.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var n = w.Hooks.registered[e];
                    if (n) {
                        var i = n[0],
                            r = n[1];
                        return t = w.Hooks.cleanRootPropertyValue(i, t), t.toString().match(w.RegEx.valueSplit)[r]
                    }
                    return t
                },
                injectValue: function(e, t, n) {
                    var i = w.Hooks.registered[e];
                    if (i) {
                        var r, a, o = i[0],
                            s = i[1];
                        return n = w.Hooks.cleanRootPropertyValue(o, n), r = n.toString().match(w.RegEx.valueSplit), r[s] = t, a = r.join(" ")
                    }
                    return n
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, n) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var i;
                                return w.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(w.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                            case "inject":
                                return "rect(" + n + ")"
                        }
                    },
                    blur: function(e, t, n) {
                        switch (e) {
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var i = parseFloat(n);
                                if (!i && 0 !== i) {
                                    var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    i = r ? r[1] : 0
                                }
                                return i;
                            case "inject":
                                return parseFloat(n) ? "blur(" + n + ")" : "none"
                        }
                    },
                    opacity: function(e, t, n) {
                        if (8 >= p) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                return n = i ? i[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return n;
                            case "inject":
                                return n
                        }
                    }
                },
                register: function() {
                    9 >= p || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                    for (var e = 0; e < w.Lists.transformsBase.length; e++) ! function() {
                        var t = w.Lists.transformsBase[e];
                        w.Normalizations.registered[t] = function(e, n, r) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return o(n) === i || o(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : o(n).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var a = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                            break;
                                        case "scal":
                                        case "scale":
                                            b.State.isAndroid && o(n).transformCache[t] === i && 1 > r && (r = 1), a = !/(\d)$/i.test(r);
                                            break;
                                        case "skew":
                                            a = !/(deg|\d)$/i.test(r);
                                            break;
                                        case "rotate":
                                            a = !/(deg|\d)$/i.test(r)
                                    }
                                    return a || (o(n).transformCache[t] = "(" + r + ")"), o(n).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < w.Lists.colors.length; e++) ! function() {
                        var t = w.Lists.colors[e];
                        w.Normalizations.registered[t] = function(e, n, r) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var a;
                                    if (w.RegEx.wrappedValueAlreadyExtracted.test(r)) a = r;
                                    else {
                                        var o, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(r) ? o = s[r] !== i ? s[r] : s.black : w.RegEx.isHex.test(r) ? o = "rgb(" + w.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (o = s.black), a = (o || r).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= p || 3 !== a.split(" ").length || (a += " 1"), a;
                                case "inject":
                                    return 8 >= p ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                        var r;
                        if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), g.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[e] = r, [r, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(n, function(e, t, n, i) {
                        return t + t + n + n + i + i
                    }), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, n, r, a) {
                function s(e, n) {
                    function r() {
                        u && w.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= p) l = f.css(e, n);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(e, "display") && (u = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !a) {
                            if ("height" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
                                return r(), c
                            }
                            if ("width" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var d = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
                                return r(), d
                            }
                        }
                        var h;
                        h = o(e) === i ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === p && "filter" === n ? h.getPropertyValue(n) : h[n], "" !== l && null !== l || (l = e.style[n]), r()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = f(e).position()[n] + "px")
                    }
                    return l
                }
                var l;
                if (w.Hooks.registered[n]) {
                    var u = n,
                        c = w.Hooks.getRoot(u);
                    r === i && (r = w.getPropertyValue(e, w.Names.prefixCheck(c)[0])), w.Normalizations.registered[c] && (r = w.Normalizations.registered[c]("extract", e, r)), l = w.Hooks.extractValue(u, r)
                } else if (w.Normalizations.registered[n]) {
                    var d, h;
                    d = w.Normalizations.registered[n]("name", e), "transform" !== d && (h = s(e, w.Names.prefixCheck(d)[0]), w.Values.isCSSNullValue(h) && w.Hooks.templates[n] && (h = w.Hooks.templates[n][1])), l = w.Normalizations.registered[n]("extract", e, h)
                }
                if (!/^[\d-]/.test(l))
                    if (o(e) && o(e).isSVG && w.Names.SVGAttribute(n))
                        if (/^(height|width)$/i.test(n)) try {
                            l = e.getBBox()[n]
                        } catch (g) {
                            l = 0
                        } else l = e.getAttribute(n);
                        else l = s(e, w.Names.prefixCheck(n)[0]);
                return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
            },
            setPropertyValue: function(e, n, i, r, a) {
                var s = n;
                if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? t.scrollTo(i, a.alternateValue) : t.scrollTo(a.alternateValue, i);
                else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", e)) w.Normalizations.registered[n]("inject", e, i), s = "transform", i = o(e).transformCache[n];
                else {
                    if (w.Hooks.registered[n]) {
                        var l = n,
                            u = w.Hooks.getRoot(n);
                        r = r || w.getPropertyValue(e, u), i = w.Hooks.injectValue(l, i, r), n = u
                    }
                    if (w.Normalizations.registered[n] && (i = w.Normalizations.registered[n]("inject", e, i), n = w.Normalizations.registered[n]("name", e)), s = w.Names.prefixCheck(n)[0], 8 >= p) try {
                        e.style[s] = i
                    } catch (c) {
                        b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                    } else o(e) && o(e).isSVG && w.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                    b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                }
                return [s, i]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(w.getPropertyValue(e, t))
                }
                var n = "";
                if ((p || b.State.isAndroid && !b.State.isChrome) && o(e).isSVG) {
                    var i = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    f.each(o(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                    })
                } else {
                    var r, a;
                    f.each(o(e).transformCache, function(t) {
                        return r = o(e).transformCache[t], "transformPerspective" === t ? (a = r, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
                    }), a && (n = "perspective" + a + " " + n)
                }
                w.setPropertyValue(e, "transform", n)
            }
        };
        w.Hooks.register(), w.Normalizations.register(), b.hook = function(e, t, n) {
            var r = i;
            return e = a(e), f.each(e, function(e, a) {
                if (o(a) === i && b.init(a), n === i) r === i && (r = b.CSS.getPropertyValue(a, t));
                else {
                    var s = b.CSS.setPropertyValue(a, t, n);
                    "transform" === s[0] && b.CSS.flushTransformCache(a), r = s
                }
            }), r
        };
        var C = function() {
            function e() {
                return s ? P.promise || null : l
            }

            function r() {
                function e(e) {
                    function d(e, t) {
                        var n = i,
                            r = i,
                            o = i;
                        return g.isArray(e) ? (n = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? o = e[1] : (g.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (r = t ? e[1] : u(e[1], s.duration), e[2] !== i && (o = e[2]))) : n = e, t || (r = r || s.easing), g.isFunction(n) && (n = n.call(a, T, S)), g.isFunction(o) && (o = o.call(a, T, S)), [n || 0, r, o]
                    }

                    function p(e, t) {
                        var n, i;
                        return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return n = e, ""
                        }), n || (n = w.Values.getUnitType(e)), [i, n]
                    }

                    function m() {
                        var e = {
                                myParent: a.parentNode || n.body,
                                position: w.getPropertyValue(a, "position"),
                                fontSize: w.getPropertyValue(a, "fontSize")
                            },
                            i = e.position === M.lastPosition && e.myParent === M.lastParent,
                            r = e.fontSize === M.lastFontSize;
                        M.lastParent = e.myParent, M.lastPosition = e.position, M.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (r && i) l.emToPx = M.lastEmToPx, l.percentToPxWidth = M.lastPercentToPxWidth, l.percentToPxHeight = M.lastPercentToPxHeight;
                        else {
                            var u = o(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                            b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                b.CSS.setPropertyValue(u, t, "hidden")
                            }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                b.CSS.setPropertyValue(u, t, s + "%")
                            }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = M.lastEmToPx = (parseFloat(w.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === M.remToPx && (M.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(t.innerWidth) / 100, M.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = M.remToPx, l.vwToPx = M.vwToPx, l.vhToPx = M.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                    }
                    if (s.begin && 0 === T) try {
                        s.begin.call(h, h)
                    } catch (x) {
                        setTimeout(function() {
                            throw x
                        }, 1)
                    }
                    if ("scroll" === A) {
                        var C, k, E, F = /^x$/i.test(s.axis) ? "Left" : "Top",
                            D = parseFloat(s.offset) || 0;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, C = s.container["scroll" + F], E = C + f(a).position()[F.toLowerCase()] + D) : s.container = null : (C = b.State.scrollAnchor[b.State["scrollProperty" + F]], k = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], E = f(a).offset()[F.toLowerCase()] + D), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: E,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: F,
                                    alternateValue: k
                                }
                            },
                            element: a
                        }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                    } else if ("reverse" === A) {
                        if (!o(a).tweensContainer) return void f.dequeue(a, s.queue);
                        "none" === o(a).opts.display && (o(a).opts.display = "auto"), "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"), o(a).opts.loop = !1, o(a).opts.begin = null, o(a).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = f.extend({}, o(a).opts, s);
                        var I = f.extend(!0, {}, o(a).tweensContainer);
                        for (var O in I)
                            if ("element" !== O) {
                                var N = I[O].startValue;
                                I[O].startValue = I[O].currentValue = I[O].endValue, I[O].endValue = N, g.isEmptyObject(y) || (I[O].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(I[O]), a)
                            }
                        l = I
                    } else if ("start" === A) {
                        var I;
                        o(a).tweensContainer && o(a).isAnimating === !0 && (I = o(a).tweensContainer), f.each(v, function(e, t) {
                            if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                                var n = d(t, !0),
                                    r = n[0],
                                    a = n[1],
                                    o = n[2];
                                if (w.RegEx.isHex.test(r)) {
                                    for (var s = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(r), u = o ? w.Values.hexToRgb(o) : i, c = 0; c < s.length; c++) {
                                        var f = [l[c]];
                                        a && f.push(a), u !== i && f.push(u[c]), v[e + s[c]] = f
                                    }
                                    delete v[e]
                                }
                            }
                        });
                        for (var V in v) {
                            var H = d(v[V]),
                                q = H[0],
                                L = H[1],
                                U = H[2];
                            V = w.Names.camelCase(V);
                            var Y = w.Hooks.getRoot(V),
                                X = !1;
                            if (o(a).isSVG || "tween" === Y || w.Names.prefixCheck(Y)[1] !== !1 || w.Normalizations.registered[Y] !== i) {
                                (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(V) && !U && 0 !== q && (U = 0), s._cacheValues && I && I[V] ? (U === i && (U = I[V].endValue + I[V].unitType), X = o(a).rootPropertyValueCache[Y]) : w.Hooks.registered[V] ? U === i ? (X = w.getPropertyValue(a, Y), U = w.getPropertyValue(a, V, X)) : X = w.Hooks.templates[Y][1] : U === i && (U = w.getPropertyValue(a, V));
                                var R, $, W, B = !1;
                                if (R = p(V, U), U = R[0], W = R[1], R = p(V, q), q = R[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return B = t, ""
                                    }), $ = R[1], U = parseFloat(U) || 0, q = parseFloat(q) || 0, "%" === $ && (/^(fontSize|lineHeight)$/.test(V) ? (q /= 100, $ = "em") : /^scale/.test(V) ? (q /= 100, $ = "") : /(Red|Green|Blue)$/i.test(V) && (q = q / 100 * 255, $ = "")), /[\/*]/.test(B)) $ = W;
                                else if (W !== $ && 0 !== U)
                                    if (0 === q) $ = W;
                                    else {
                                        r = r || m();
                                        var _ = /margin|padding|left|right|width|text|word|letter/i.test(V) || /X$/.test(V) || "x" === V ? "x" : "y";
                                        switch (W) {
                                            case "%":
                                                U *= "x" === _ ? r.percentToPxWidth : r.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                U *= r[W + "ToPx"]
                                        }
                                        switch ($) {
                                            case "%":
                                                U *= 1 / ("x" === _ ? r.percentToPxWidth : r.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                U *= 1 / r[$ + "ToPx"]
                                        }
                                    }
                                switch (B) {
                                    case "+":
                                        q = U + q;
                                        break;
                                    case "-":
                                        q = U - q;
                                        break;
                                    case "*":
                                        q = U * q;
                                        break;
                                    case "/":
                                        q = U / q
                                }
                                l[V] = {
                                    rootPropertyValue: X,
                                    startValue: U,
                                    currentValue: U,
                                    endValue: q,
                                    unitType: $,
                                    easing: L
                                }, b.debug && console.log("tweensContainer (" + V + "): " + JSON.stringify(l[V]), a)
                            } else b.debug && console.log("Skipping [" + Y + "] due to a lack of browser support.")
                        }
                        l.element = a
                    }
                    l.element && (w.Values.addClass(a, "velocity-animating"), j.push(l), "" === s.queue && (o(a).tweensContainer = l, o(a).opts = s), o(a).isAnimating = !0, T === S - 1 ? (b.State.calls.push([j, h, s, null, P.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : T++)
                }
                var r, a = this,
                    s = f.extend({}, b.defaults, y),
                    l = {};
                switch (o(a) === i && b.init(a), parseFloat(s.delay) && s.queue !== !1 && f.queue(a, s.queue, function(e) {
                    b.velocityQueueEntryFlag = !0, o(a).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(s.delay)),
                        next: e
                    }
                }), s.duration.toString().toLowerCase()) {
                    case "fast":
                        s.duration = 200;
                        break;
                    case "normal":
                        s.duration = m;
                        break;
                    case "slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(a, s.queue, function(t, n) {
                    return n === !0 ? (P.promise && P.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(a)[0] || f.dequeue(a)
            }
            var s, l, p, h, v, y, x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
            if (g.isWrapped(this) ? (s = !1, p = 0, h = this, l = this) : (s = !0, p = 1, h = x ? arguments[0].elements || arguments[0].e : arguments[0]), h = a(h)) {
                x ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[p], y = arguments[p + 1]);
                var S = h.length,
                    T = 0;
                if (!/^(stop|finish|finishAll)$/i.test(v) && !f.isPlainObject(y)) {
                    var k = p + 1;
                    y = {};
                    for (var E = k; E < arguments.length; E++) g.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? g.isString(arguments[E]) || g.isArray(arguments[E]) ? y.easing = arguments[E] : g.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                }
                var P = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                s && b.Promise && (P.promise = new b.Promise(function(e, t) {
                    P.resolver = e, P.rejecter = t
                }));
                var A;
                switch (v) {
                    case "scroll":
                        A = "scroll";
                        break;
                    case "reverse":
                        A = "reverse";
                        break;
                    case "finish":
                    case "finishAll":
                    case "stop":
                        f.each(h, function(e, t) {
                            o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer), "finishAll" !== v || y !== !0 && !g.isString(y) || (f.each(f.queue(t, g.isString(y) ? y : ""), function(e, t) {
                                g.isFunction(t) && t()
                            }), f.queue(t, g.isString(y) ? y : "", []))
                        });
                        var F = [];
                        return f.each(b.State.calls, function(e, t) {
                            t && f.each(t[1], function(n, r) {
                                var a = y === i ? "" : y;
                                return a === !0 || t[2].queue === a || y === i && t[2].queue === !1 ? void f.each(h, function(n, i) {
                                    i === r && ((y === !0 || g.isString(y)) && (f.each(f.queue(i, g.isString(y) ? y : ""), function(e, t) {
                                        g.isFunction(t) && t(null, !0)
                                    }), f.queue(i, g.isString(y) ? y : "", [])), "stop" === v ? (o(i) && o(i).tweensContainer && a !== !1 && f.each(o(i).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), F.push(e)) : "finish" !== v && "finishAll" !== v || (t[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === v && (f.each(F, function(e, t) {
                            d(t, !0)
                        }), P.promise && P.resolver(h)), e();
                    default:
                        if (!f.isPlainObject(v) || g.isEmptyObject(v)) {
                            if (g.isString(v) && b.Redirects[v]) {
                                var D = f.extend({}, y),
                                    I = D.duration,
                                    O = D.delay || 0;
                                return D.backwards === !0 && (h = f.extend(!0, [], h).reverse()), f.each(h, function(e, t) {
                                    parseFloat(D.stagger) ? D.delay = O + parseFloat(D.stagger) * e : g.isFunction(D.stagger) && (D.delay = O + D.stagger.call(t, e, S)), D.drag && (D.duration = parseFloat(I) || (/^(callout|transition)/.test(v) ? 1e3 : m), D.duration = Math.max(D.duration * (D.backwards ? 1 - e / S : (e + 1) / S), .75 * D.duration, 200)), b.Redirects[v].call(t, t, D || {}, e, S, h, P.promise ? P : i)
                                }), e()
                            }
                            var N = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return P.promise ? P.rejecter(new Error(N)) : console.log(N), e()
                        }
                        A = "start"
                }
                var M = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    j = [];
                f.each(h, function(e, t) {
                    g.isNode(t) && r.call(t)
                });
                var V, D = f.extend({}, b.defaults, y);
                if (D.loop = parseInt(D.loop), V = 2 * D.loop - 1, D.loop)
                    for (var H = 0; V > H; H++) {
                        var q = {
                            delay: D.delay,
                            progress: D.progress
                        };
                        H === V - 1 && (q.display = D.display, q.visibility = D.visibility, q.complete = D.complete), C(h, "reverse", q)
                    }
                return e()
            }
        };
        b = f.extend(C, b), b.animate = C;
        var S = t.requestAnimationFrame || h;
        return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
            n.hidden ? (S = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : S = t.requestAnimationFrame || h
        }), e.Velocity = b, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function(e, t) {
            b.Redirects["slide" + t] = function(e, n, r, a, o, s) {
                var l = f.extend({}, n),
                    u = l.begin,
                    c = l.complete,
                    d = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    p = {};
                l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(o, o);
                    for (var n in d) {
                        p[n] = e.style[n];
                        var i = b.CSS.getPropertyValue(e, n);
                        d[n] = "Down" === t ? [i, 0] : [0, i]
                    }
                    p.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in p) e.style[t] = p[t];
                    c && c.call(o, o), s && s.resolver(o)
                }, b(e, d, l)
            }
        }), f.each(["In", "Out"], function(e, t) {
            b.Redirects["fade" + t] = function(e, n, r, a, o, s) {
                var l = f.extend({}, n),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                r !== a - 1 ? l.complete = l.begin = null : l.complete = function() {
                    c && c.call(o, o), s && s.resolver(o)
                }, l.display === i && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
            }
        }), b
    }(window.jQuery || window.Zepto || window, window, document)
}),
function(e) {
    var t = function(e) {
            return e.split("").reverse().join("")
        },
        n = {
            numberStep: function(t, n) {
                var i = Math.floor(t),
                    r = e(n.elem);
                r.text(i)
            }
        },
        i = function(e) {
            var t = e.elem;
            if (t.nodeType && t.parentNode) {
                var i = t._animateNumberSetter;
                i || (i = n.numberStep), i(e.now, e)
            }
        };
    e.Tween && e.Tween.propHooks ? e.Tween.propHooks.number = {
        set: i
    } : e.fx.step.number = i;
    var r = function(e, t) {
            for (var n, i, r, a = e.split("").reverse(), o = [], s = 0, l = Math.ceil(e.length / t); l > s; s++) {
                for (n = "", r = 0; t > r && (i = s * t + r, i !== e.length); r++) n += a[i];
                o.push(n)
            }
            return o
        },
        a = function(e) {
            var n = e.length - 1,
                i = t(e[n]);
            return e[n] = t(parseInt(i, 10).toString()), e
        };
    e.animateNumber = {
        numberStepFactories: {
            append: function(t) {
                return function(n, i) {
                    var r = Math.floor(n),
                        a = e(i.elem);
                    a.prop("number", n).text(r + t)
                }
            },
            separator: function(n, i, o) {
                return n = n || " ", i = i || 3, o = o || "",
                    function(s, l) {
                        var u = Math.floor(s),
                            c = u.toString(),
                            d = e(l.elem);
                        if (c.length > i) {
                            var f = r(c, i);
                            c = a(f).join(n), c = t(c)
                        }
                        d.prop("number", s).text(c + o)
                    }
            }
        }
    }, e.fn.animateNumber = function() {
        for (var t = arguments[0], i = e.extend({}, n, t), r = e(this), a = [i], o = 1, s = arguments.length; s > o; o++) a.push(arguments[o]);
        if (t.numberStep) {
            var l = this.each(function() {
                    this._animateNumberSetter = t.numberStep
                }),
                u = i.complete;
            i.complete = function() {
                l.each(function() {
                    delete this._animateNumberSetter
                }), u && u.apply(this, arguments)
            }
        }
        return r.animate.apply(r, a)
    }
}(jQuery),
function(e) {
    e.easytabs = function(t, n) {
        var i, r, a, o, s, l, u = this,
            c = e(t),
            d = {
                animate: !0,
                panelActiveClass: "active",
                tabActiveClass: "active",
                defaultTab: "li:first-child",
                animationSpeed: "normal",
                tabs: "> ul > li",
                updateHash: !0,
                cycle: !1,
                collapsible: !1,
                collapsedClass: "collapsed",
                collapsedByDefault: !0,
                uiTabs: !1,
                transitionIn: "fadeIn",
                transitionOut: "fadeOut",
                transitionInEasing: "swing",
                transitionOutEasing: "swing",
                transitionCollapse: "slideUp",
                transitionUncollapse: "slideDown",
                transitionCollapseEasing: "swing",
                transitionUncollapseEasing: "swing",
                containerClass: "",
                tabsClass: "",
                tabClass: "",
                panelClass: "",
                cache: !0,
                event: "click",
                panelContext: c
            },
            f = {
                fast: 200,
                normal: 400,
                slow: 600
            };
        u.init = function() {
            u.settings = l = e.extend({}, d, n), l.bind_str = l.event + ".easytabs", l.uiTabs && (l.tabActiveClass = "ui-tabs-selected", l.containerClass = "ui-tabs ui-widget ui-widget-content ui-corner-all", l.tabsClass = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all", l.tabClass = "ui-state-default ui-corner-top", l.panelClass = "ui-tabs-panel ui-widget-content ui-corner-bottom"), l.collapsible && void 0 !== n.defaultTab && void 0 === n.collpasedByDefault && (l.collapsedByDefault = !1), "string" == typeof l.animationSpeed && (l.animationSpeed = f[l.animationSpeed]), e("a.anchor").remove().prependTo("body"), c.data("easytabs", {}), u.setTransitions(), u.getTabs(), h(), g(), m(), w(), C(), c.attr("data-easytabs", !0)
        }, u.setTransitions = function() {
            a = l.animate ? {
                show: l.transitionIn,
                hide: l.transitionOut,
                speed: l.animationSpeed,
                collapse: l.transitionCollapse,
                uncollapse: l.transitionUncollapse,
                halfSpeed: l.animationSpeed / 2
            } : {
                show: "show",
                hide: "hide",
                speed: 0,
                collapse: "hide",
                uncollapse: "show",
                halfSpeed: 0
            }
        }, u.getTabs = function() {
            var t;
            u.tabs = c.find(l.tabs), u.panels = e(), u.tabs.each(function() {
                var n = e(this),
                    i = n.children("a"),
                    r = n.children("a").data("target");
                n.data("easytabs", {}), void 0 !== r && null !== r ? n.data("easytabs").ajax = i.attr("href") : r = i.attr("href"), r = r.match(/#([^\?]+)/)[1], t = l.panelContext.find("#" + r), t.length ? (t.data("easytabs", {
                    position: t.css("position"),
                    visibility: t.css("visibility")
                }), t.not(l.panelActiveClass).hide(), u.panels = u.panels.add(t), n.data("easytabs").panel = t) : (u.tabs = u.tabs.not(n), "console" in window && console.warn("Warning: tab without matching panel for selector '#" + r + "' removed from set"))
            })
        }, u.selectTab = function(e, t) {
            var n = window.location,
                i = (n.hash.match(/^[^\?]*/)[0], e.parent().data("easytabs").panel),
                r = e.parent().data("easytabs").ajax;
            l.collapsible && !s && (e.hasClass(l.tabActiveClass) || e.hasClass(l.collapsedClass)) ? u.toggleTabCollapse(e, i, r, t) : e.hasClass(l.tabActiveClass) && i.hasClass(l.panelActiveClass) ? l.cache || y(e, i, r, t) : y(e, i, r, t)
        }, u.toggleTabCollapse = function(e, t, n, i) {
            u.panels.stop(!0, !0), p(c, "easytabs:before", [e, t, l]) && (u.tabs.filter("." + l.tabActiveClass).removeClass(l.tabActiveClass).children().removeClass(l.tabActiveClass), e.hasClass(l.collapsedClass) ? (!n || l.cache && e.parent().data("easytabs").cached || (c.trigger("easytabs:ajax:beforeSend", [e, t]), t.load(n, function(n, i, r) {
                e.parent().data("easytabs").cached = !0, c.trigger("easytabs:ajax:complete", [e, t, n, i, r])
            })), e.parent().removeClass(l.collapsedClass).addClass(l.tabActiveClass).children().removeClass(l.collapsedClass).addClass(l.tabActiveClass), t.addClass(l.panelActiveClass)[a.uncollapse](a.speed, l.transitionUncollapseEasing, function() {
                c.trigger("easytabs:midTransition", [e, t, l]), "function" == typeof i && i()
            })) : (e.addClass(l.collapsedClass).parent().addClass(l.collapsedClass), t.removeClass(l.panelActiveClass)[a.collapse](a.speed, l.transitionCollapseEasing, function() {
                c.trigger("easytabs:midTransition", [e, t, l]), "function" == typeof i && i()
            })))
        }, u.matchTab = function(e) {
            return u.tabs.find("[href='" + e + "'],[data-target='" + e + "']").first()
        }, u.matchInPanel = function(e) {
            return e && u.validId(e) ? u.panels.filter(":has(" + e + ")").first() : []
        }, u.validId = function(e) {
            return e.substr(1).match(/^[A-Za-z][A-Za-z0-9\-_:\.]*$/)
        }, u.selectTabFromHashChange = function() {
            var e, t = window.location.hash.match(/^[^\?]*/)[0],
                n = u.matchTab(t);
            l.updateHash && (n.length ? (s = !0, u.selectTab(n)) : (e = u.matchInPanel(t), e.length ? (t = "#" + e.attr("id"), n = u.matchTab(t), s = !0, u.selectTab(n)) : i.hasClass(l.tabActiveClass) || l.cycle || ("" === t || u.matchTab(o).length || c.closest(t).length) && (s = !0, u.selectTab(r))))
        }, u.cycleTabs = function(t) {
            l.cycle && (t %= u.tabs.length, $tab = e(u.tabs[t]).children("a").first(), s = !0, u.selectTab($tab, function() {
                setTimeout(function() {
                    u.cycleTabs(t + 1)
                }, l.cycle)
            }))
        }, u.publicMethods = {
            select: function(t) {
                var n;
                0 === (n = u.tabs.filter(t)).length ? 0 === (n = u.tabs.find("a[href='" + t + "']")).length && 0 === (n = u.tabs.find("a" + t)).length && 0 === (n = u.tabs.find("[data-target='" + t + "']")).length && 0 === (n = u.tabs.find("a[href$='" + t + "']")).length && e.error("Tab '" + t + "' does not exist in tab set") : n = n.children("a").first(), u.selectTab(n)
            }
        };
        var p = function(t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), r.result !== !1
            },
            h = function() {
                c.addClass(l.containerClass), u.tabs.parent().addClass(l.tabsClass), u.tabs.addClass(l.tabClass), u.panels.addClass(l.panelClass)
            },
            g = function() {
                var t, n = window.location.hash.match(/^[^\?]*/)[0],
                    a = u.matchTab(n).parent();
                1 === a.length ? (i = a, l.cycle = !1) : (t = u.matchInPanel(n), t.length ? (n = "#" + t.attr("id"), i = u.matchTab(n).parent()) : (i = u.tabs.parent().find(l.defaultTab), 0 === i.length && e.error("The specified default tab ('" + l.defaultTab + "') could not be found in the tab set ('" + l.tabs + "') out of " + u.tabs.length + " tabs."))), r = i.children("a").first(), v(a)
            },
            v = function(t) {
                var n, a;
                l.collapsible && 0 === t.length && l.collapsedByDefault ? i.addClass(l.collapsedClass).children().addClass(l.collapsedClass) : (n = e(i.data("easytabs").panel), a = i.data("easytabs").ajax, !a || l.cache && i.data("easytabs").cached || (c.trigger("easytabs:ajax:beforeSend", [r, n]), n.load(a, function(e, t, a) {
                        i.data("easytabs").cached = !0, c.trigger("easytabs:ajax:complete", [r, n, e, t, a])
                    })),
                    i.data("easytabs").panel.show().addClass(l.panelActiveClass), i.addClass(l.tabActiveClass).children().addClass(l.tabActiveClass)), c.trigger("easytabs:initialised", [r, n])
            },
            m = function() {
                u.tabs.children("a").bind(l.bind_str, function(t) {
                    l.cycle = !1, s = !1, u.selectTab(e(this)), t.preventDefault ? t.preventDefault() : t.returnValue = !1
                })
            },
            y = function(e, t, n, i) {
                if (u.panels.stop(!0, !0), p(c, "easytabs:before", [e, t, l])) {
                    var r, d, f, h, g = u.panels.filter(":visible"),
                        v = t.parent(),
                        m = window.location.hash.match(/^[^\?]*/)[0];
                    l.animate && (r = b(t), d = g.length ? x(g) : 0, f = r - d), o = m, h = function() {
                        c.trigger("easytabs:midTransition", [e, t, l]), l.animate && "fadeIn" == l.transitionIn && 0 > f && v.animate({
                            height: v.height() + f
                        }, a.halfSpeed).css({
                            "min-height": ""
                        }), l.updateHash && !s ? window.history.pushState ? window.history.pushState(null, null, "#" + t.attr("id")) : window.location.hash = "#" + t.attr("id") : s = !1, t[a.show](a.speed, l.transitionInEasing, function() {
                            v.css({
                                height: "",
                                "min-height": ""
                            }), c.trigger("easytabs:after", [e, t, l]), "function" == typeof i && i()
                        })
                    }, !n || l.cache && e.parent().data("easytabs").cached || (c.trigger("easytabs:ajax:beforeSend", [e, t]), t.load(n, function(n, i, r) {
                        e.parent().data("easytabs").cached = !0, c.trigger("easytabs:ajax:complete", [e, t, n, i, r])
                    })), l.animate && "fadeOut" == l.transitionOut && (f > 0 ? v.animate({
                        height: v.height() + f
                    }, a.halfSpeed) : v.css({
                        "min-height": v.height()
                    })), u.tabs.filter("." + l.tabActiveClass).removeClass(l.tabActiveClass).children().removeClass(l.tabActiveClass), u.tabs.filter("." + l.collapsedClass).removeClass(l.collapsedClass).children().removeClass(l.collapsedClass), e.parent().addClass(l.tabActiveClass).children().addClass(l.tabActiveClass), u.panels.filter("." + l.panelActiveClass).removeClass(l.panelActiveClass), t.addClass(l.panelActiveClass), g.length ? g[a.hide](a.speed, l.transitionOutEasing, h) : t[a.uncollapse](a.speed, l.transitionUncollapseEasing, h)
                }
            },
            b = function(t) {
                if (t.data("easytabs") && t.data("easytabs").lastHeight) return t.data("easytabs").lastHeight;
                var n, i, r = t.css("display");
                try {
                    n = e("<div></div>", {
                        position: "absolute",
                        visibility: "hidden",
                        overflow: "hidden"
                    })
                } catch (a) {
                    n = e("<div></div>", {
                        visibility: "hidden",
                        overflow: "hidden"
                    })
                }
                return i = t.wrap(n).css({
                    position: "relative",
                    visibility: "hidden",
                    display: "block"
                }).outerHeight(), t.unwrap(), t.css({
                    position: t.data("easytabs").position,
                    visibility: t.data("easytabs").visibility,
                    display: r
                }), t.data("easytabs").lastHeight = i, i
            },
            x = function(e) {
                var t = e.outerHeight();
                return e.data("easytabs") ? e.data("easytabs").lastHeight = t : e.data("easytabs", {
                    lastHeight: t
                }), t
            },
            w = function() {
                "function" == typeof e(window).hashchange ? e(window).hashchange(function() {
                    u.selectTabFromHashChange()
                }) : e.address && "function" == typeof e.address.change && e.address.change(function() {
                    u.selectTabFromHashChange()
                })
            },
            C = function() {
                var e;
                l.cycle && (e = u.tabs.index(i), setTimeout(function() {
                    u.cycleTabs(e + 1)
                }, l.cycle))
            };
        u.init()
    }, e.fn.easytabs = function(t) {
        var n = arguments;
        return this.each(function() {
            var i = e(this),
                r = i.data("easytabs");
            return void 0 === r && (r = new e.easytabs(this, t), i.data("easytabs", r)), r.publicMethods[t] ? r.publicMethods[t](Array.prototype.slice.call(n, 1)) : void 0
        })
    }
}(jQuery),
function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0],
                r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                a = document.createElement("div");
            a.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>", i.appendChild(a.childNodes[1])
        }
        return t && e.extend(n, t), this.each(function() {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var i = ".fitvidsignore";
            n.ignore && (i = i + ", " + n.ignore);
            var r = e(this).find(t.join(","));
            r = r.not("object object"), r = r.not(i), r.each(function() {
                var t = e(this);
                if (!(t.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9), t.attr("width", 16));
                    var n = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                        r = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                        a = n / r;
                    if (!t.attr("name")) {
                        var o = "fitvid" + e.fn.fitVids._count;
                        t.attr("name", o), e.fn.fitVids._count++
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }, e.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(this, function(e) {
    ! function(e, t) {
        "use strict";

        function n(t) {
            t && "custom" === t.errorMessagePosition && "function" == typeof t.errorMessageCustom && (e.formUtils.warn("Use of deprecated function errorMessageCustom, use config.submitErrorMessageCallback instead"), t.submitErrorMessageCallback = function(e, n) {
                t.errorMessageCustom(e, t.language.errorTitle, n, t)
            })
        }

        function i(t) {
            if (t.errorMessagePosition && "object" == typeof t.errorMessagePosition) {
                e.formUtils.warn("Deprecated use of config parameter errorMessagePosition, use config.submitErrorMessageCallback instead");
                var n = t.errorMessagePosition;
                t.errorMessagePosition = "top", t.submitErrorMessageCallback = function() {
                    return n
                }
            }
        }

        function r(t) {
            var n = t.find("[data-validation-if-checked]");
            n.length && e.formUtils.warn('Detected use of attribute "data-validation-if-checked" which is deprecated. Use "data-validation-depends-on" provided by module "logic"'), n.on("beforeValidation", function() {
                var n = e(this),
                    i = n.valAttr("if-checked"),
                    r = e('input[name="' + i + '"]', t),
                    a = r.is(":checked"),
                    o = (e.formUtils.getValue(r) || "").toString(),
                    s = n.valAttr("if-checked-value");
                (!a || s && s !== o) && n.valAttr("skipped", !0)
            })
        }
        e.fn.validateForm = function(t, n) {
            return e.formUtils.warn("Use of deprecated function $.validateForm, use $.isValid instead"), this.isValid(t, n, !0)
        }, e(window).on("validatorsLoaded formValidationSetup", function(t, a, o) {
            a || (a = e("form")), n(o), i(o), r(a)
        })
    }(e),
    function(e) {
        "use strict";
        var t = {
            resolveErrorMessage: function(e, t, n, i, r) {
                var a = i.validationErrorMsgAttribute + "-" + n.replace("validate_", ""),
                    o = e.attr(a);
                return o || (o = e.attr(i.validationErrorMsgAttribute), o || (o = "function" != typeof t.errorMessageKey ? r[t.errorMessageKey] : r[t.errorMessageKey(i)], o || (o = t.errorMessage))), o
            },
            getParentContainer: function(t) {
                if (t.valAttr("error-msg-container")) return e(t.valAttr("error-msg-container"));
                var n = t.parent();
                if (!n.hasClass("form-group") && !n.closest("form").hasClass("form-horizontal")) {
                    var i = n.closest(".form-group");
                    if (i.length) return i.eq(0)
                }
                return n
            },
            applyInputErrorStyling: function(e, t) {
                e.addClass(t.errorElementClass).removeClass("valid"), this.getParentContainer(e).addClass(t.inputParentClassOnError).removeClass(t.inputParentClassOnSuccess), "" !== t.borderColorOnError && e.css("border-color", t.borderColorOnError)
            },
            applyInputSuccessStyling: function(e, t) {
                e.addClass("valid"), this.getParentContainer(e).addClass(t.inputParentClassOnSuccess)
            },
            removeInputStylingAndMessage: function(e, n) {
                e.removeClass("valid").removeClass(n.errorElementClass).css("border-color", "");
                var i = t.getParentContainer(e);
                if (i.removeClass(n.inputParentClassOnError).removeClass(n.inputParentClassOnSuccess), "function" == typeof n.inlineErrorMessageCallback) {
                    var r = n.inlineErrorMessageCallback(e, n);
                    r && r.html("")
                } else i.find("." + n.errorMessageClass).remove()
            },
            removeAllMessagesAndStyling: function(n, i) {
                if ("function" == typeof i.submitErrorMessageCallback) {
                    var r = i.submitErrorMessageCallback(n, i);
                    r && r.html("")
                } else n.find("." + i.errorMessageClass + ".alert").remove();
                n.find("." + i.errorElementClass + ",.valid").each(function() {
                    t.removeInputStylingAndMessage(e(this), i)
                })
            },
            setInlineMessage: function(t, n, i) {
                this.applyInputErrorStyling(t, i);
                var r, a = document.getElementById(t.attr("name") + "_err_msg"),
                    o = !1,
                    s = function(i) {
                        e.formUtils.$win.trigger("validationErrorDisplay", [t, i]), i.html(n)
                    },
                    l = function() {
                        var a = !1;
                        o.find("." + i.errorMessageClass).each(function() {
                            return this.inputReferer === t[0] ? (a = e(this), !1) : void 0
                        }), console.log(a), a ? n ? s(a) : a.remove() : "" !== n && (r = e('<div class="' + i.errorMessageClass + ' alert"></div>'), s(r), r[0].inputReferer = t[0], o.prepend(r))
                    };
                if (a) e.formUtils.warn("Using deprecated element reference " + a.id), o = e(a), l();
                else if ("function" == typeof i.inlineErrorMessageCallback) {
                    if (o = i.inlineErrorMessageCallback(t, i), !o) return;
                    l()
                } else {
                    var u = this.getParentContainer(t);
                    r = u.find("." + i.errorMessageClass + ".help-block"), 0 === r.length && (r = e("<span></span>").addClass("help-block").addClass(i.errorMessageClass), r.appendTo(u)), s(r)
                }
            },
            setMessageInTopOfForm: function(t, n, i, r) {
                var a = '<div class="{errorMessageClass} alert alert-danger"><strong>{errorTitle}</strong><ul>{fields}</ul></div>',
                    o = !1;
                if ("function" != typeof i.submitErrorMessageCallback || (o = i.submitErrorMessageCallback(t, n, i), console.log(o), o)) {
                    var s = {
                        errorTitle: r.errorTitle,
                        fields: "",
                        errorMessageClass: i.errorMessageClass
                    };
                    e.each(n, function(e, t) {
                        s.fields += "<li>" + t + "</li>"
                    }), e.each(s, function(e, t) {
                        a = a.replace("{" + e + "}", t)
                    }), o ? o.html(a) : t.children().eq(0).before(e(a))
                }
            }
        };
        e.formUtils = e.extend(e.formUtils || {}, {
            dialogs: t
        })
    }(e),
    function(e, t) {
        "use strict";
        var n = 0;
        e.fn.validateOnBlur = function(t, n) {
            return this.find("*[data-validation]").bind("blur.validation", function() {
                e(this).validateInputOnBlur(t, n, !0, "blur")
            }), n.validateCheckboxRadioOnClick && this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation", function() {
                e(this).validateInputOnBlur(t, n, !0, "click")
            }), this
        }, e.fn.validateOnEvent = function(t, n) {
            var i = "FORM" === this[0].nodeName ? this.find("*[data-validation-event]") : this;
            return i.each(function() {
                var i = e(this),
                    r = i.valAttr("event");
                r && i.unbind(r + ".validation").bind(r + ".validation", function(i) {
                    9 !== (i || {}).keyCode && e(this).validateInputOnBlur(t, n, !0, r)
                })
            }), this
        }, e.fn.showHelpOnFocus = function(t) {
            return t || (t = "data-validation-help"), this.find(".has-help-txt").valAttr("has-keyup-event", !1).removeClass("has-help-txt"), this.find("textarea,input").each(function() {
                var i = e(this),
                    r = "jquery_form_help_" + ++n,
                    a = i.attr(t);
                a && i.addClass("has-help-txt").unbind("focus.help").bind("focus.help", function() {
                    var t = i.parent().find("." + r);
                    0 === t.length && (t = e("<span />").addClass(r).addClass("help").addClass("help-block").text(a).hide(), i.after(t)), t.fadeIn()
                }).unbind("blur.help").bind("blur.help", function() {
                    e(this).parent().find("." + r).fadeOut("slow")
                })
            }), this
        }, e.fn.validate = function(t, n, i) {
            var r = e.extend({}, e.formUtils.LANG, i || {});
            this.each(function() {
                var i = e(this),
                    a = i.closest("form").get(0).validationConfig || {};
                i.one("validation", function(e, n) {
                    "function" == typeof t && t(n, this, e)
                }), i.validateInputOnBlur(r, e.extend({}, a, n || {}), !0)
            })
        }, e.fn.willPostponeValidation = function() {
            return (this.valAttr("suggestion-nr") || this.valAttr("postpone") || this.hasClass("hasDatepicker")) && !t.postponedValidation
        }, e.fn.validateInputOnBlur = function(n, i, r, a) {
            if (e.formUtils.eventType = a, this.willPostponeValidation()) {
                var o = this,
                    s = this.valAttr("postpone") || 200;
                return t.postponedValidation = function() {
                    o.validateInputOnBlur(n, i, r, a), t.postponedValidation = !1
                }, setTimeout(function() {
                    t.postponedValidation && t.postponedValidation()
                }, s), this
            }
            n = e.extend({}, e.formUtils.LANG, n || {}), e.formUtils.dialogs.removeInputStylingAndMessage(this, i);
            var l = this,
                u = l.closest("form"),
                c = e.formUtils.validateInput(l, n, i, u, a);
            return r && l.unbind("keyup.validation"), c.shouldChangeDisplay && (c.isValid ? e.formUtils.dialogs.applyInputSuccessStyling(l, i) : e.formUtils.dialogs.setInlineMessage(l, c.errorMsg, i)), !c.isValid && r && l.bind("keyup.validation", function(t) {
                9 !== t.keyCode && e(this).validateInputOnBlur(n, i, !1, "keyup")
            }), this
        }, e.fn.valAttr = function(e, t) {
            return void 0 === t ? this.attr("data-validation-" + e) : t === !1 || null === t ? this.removeAttr("data-validation-" + e) : (e = e.length > 0 ? "-" + e : "", this.attr("data-validation" + e, t))
        }, e.fn.isValid = function(t, n, i) {
            if (e.formUtils.isLoadingModules) {
                var r = this;
                return setTimeout(function() {
                    r.isValid(t, n, i)
                }, 200), null
            }
            n = e.extend({}, e.formUtils.defaultConfig(), n || {}), t = e.extend({}, e.formUtils.LANG, t || {}), i = i !== !1, e.formUtils.errorDisplayPreventedWhenHalted && (delete e.formUtils.errorDisplayPreventedWhenHalted, i = !1), e.formUtils.isValidatingEntireForm = !0, e.formUtils.haltValidation = !1;
            var a = function(t, r) {
                    e.inArray(t, s) < 0 && s.push(t), l.push(r), r.attr("current-error", t), i && e.formUtils.dialogs.applyInputErrorStyling(r, n)
                },
                o = [],
                s = [],
                l = [],
                u = this,
                c = function(t, i) {
                    return "submit" === i || "button" === i || "reset" === i ? !0 : e.inArray(t, n.ignore || []) > -1
                };
            if (i && e.formUtils.dialogs.removeAllMessagesAndStyling(u, n), u.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function() {
                    var i = e(this),
                        r = i.attr("type"),
                        s = "radio" === r || "checkbox" === r,
                        l = i.attr("name");
                    if (!c(l, r) && (!s || e.inArray(l, o) < 0)) {
                        s && o.push(l);
                        var d = e.formUtils.validateInput(i, t, n, u, "submit");
                        d.shouldChangeDisplay && (d.isValid ? d.isValid && (i.valAttr("current-error", !1), e.formUtils.dialogs.applyInputSuccessStyling(i, n)) : a(d.errorMsg, i))
                    }
                }), "function" == typeof n.onValidate) {
                var d = n.onValidate(u);
                e.isArray(d) ? e.each(d, function(e, t) {
                    a(t.message, t.element)
                }) : d && d.element && d.message && a(d.message, d.element)
            }
            return e.formUtils.isValidatingEntireForm = !1, !e.formUtils.haltValidation && l.length > 0 ? (i && ("top" === n.errorMessagePosition ? e.formUtils.dialogs.setMessageInTopOfForm(u, s, n, t) : e.each(l, function(t, i) {
                e.formUtils.dialogs.setInlineMessage(i, i.attr("current-error"), n)
            }), n.scrollToTopOnError && e.formUtils.$win.scrollTop(u.offset().top - 20)), !1) : (!i && e.formUtils.haltValidation && (e.formUtils.errorDisplayPreventedWhenHalted = !0), !e.formUtils.haltValidation)
        }, e.fn.restrictLength = function(t) {
            return new e.formUtils.lengthRestriction(this, t), this
        }, e.fn.addSuggestions = function(t) {
            var n = !1;
            return this.find("input").each(function() {
                var i = e(this);
                n = e.split(i.attr("data-suggestions")), n.length > 0 && !i.hasClass("has-suggestions") && (e.formUtils.suggest(i, n, t), i.addClass("has-suggestions"))
            }), this
        }
    }(e, window),
    function(e) {
        "use strict";
        e.formUtils = e.extend(e.formUtils || {}, {
            isLoadingModules: !1,
            loadedModules: {},
            loadModules: function(t, n, i) {
                if (e.formUtils.isLoadingModules) return void setTimeout(function() {
                    e.formUtils.loadModules(t, n, i)
                }, 10);
                var r = !1,
                    a = function(t, n) {
                        var a = e.split(t),
                            o = a.length,
                            s = function() {
                                o--, 0 === o && (e.formUtils.isLoadingModules = !1, i && r && "function" == typeof i && i())
                            };
                        o > 0 && (e.formUtils.isLoadingModules = !0);
                        var l = "?_=" + (new Date).getTime(),
                            u = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                        e.each(a, function(t, i) {
                            if (i = e.trim(i), 0 === i.length) s();
                            else {
                                var a = n + i + (".js" === i.slice(-3) ? "" : ".js"),
                                    o = document.createElement("SCRIPT");
                                a in e.formUtils.loadedModules ? s() : (e.formUtils.loadedModules[a] = 1, r = !0, o.type = "text/javascript", o.onload = s, o.src = a + (".dev.js" === a.slice(-7) ? l : ""), o.onerror = function() {
                                    e.formUtils.warn("Unable to load form validation module " + a)
                                }, o.onreadystatechange = function() {
                                    "complete" !== this.readyState && "loaded" !== this.readyState || (s(), this.onload = null, this.onreadystatechange = null)
                                }, u.appendChild(o))
                            }
                        })
                    };
                if (n) a(t, n);
                else {
                    var o = function() {
                        var n = !1;
                        return e('script[src*="form-validator"]').each(function() {
                            return n = this.src.substr(0, this.src.lastIndexOf("/")) + "/", "/" === n && (n = ""), !1
                        }), n !== !1 ? (a(t, n), !0) : !1
                    };
                    o() || e(o)
                }
            }
        })
    }(e),
    function(e) {
        "use strict";
        e.split = function(t, n) {
            if ("function" != typeof n) {
                if (!t) return [];
                var i = [];
                return e.each(t.split(n ? n : /[,|\-\s]\s*/g), function(t, n) {
                    n = e.trim(n), n.length && i.push(n)
                }), i
            }
            t && e.each(t.split(/[,|\-\s]\s*/g), function(t, i) {
                return i = e.trim(i), i.length ? n(i, t) : void 0
            })
        }, e.validate = function(t) {
            var n = e.extend(e.formUtils.defaultConfig(), {
                form: "form",
                validateOnEvent: !1,
                validateOnBlur: !0,
                validateCheckboxRadioOnClick: !0,
                showHelpOnFocus: !0,
                addSuggestions: !0,
                modules: "",
                onModulesLoaded: null,
                language: !1,
                onSuccess: !1,
                onError: !1,
                onElementValidate: !1
            });
            if (t = e.extend(n, t || {}), t.lang && "en" !== t.lang) {
                var i = "lang/" + t.lang + ".js";
                t.modules += t.modules.length ? "," + i : i
            }
            e(t.form).each(function(n, i) {
                i.validationConfig = t;
                var r = e(i);
                r.trigger("formValidationSetup", [r, t]), r.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"), r.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"), r.bind("submit.validation", function() {
                    var n = e(this);
                    if (e.formUtils.haltValidation) return !1;
                    if (e.formUtils.isLoadingModules) return setTimeout(function() {
                        n.trigger("submit.validation")
                    }, 200), !1;
                    var i = n.isValid(t.language, t);
                    if (e.formUtils.haltValidation) return !1;
                    if (!i || "function" != typeof t.onSuccess) return i || "function" != typeof t.onError ? i : (t.onError(n), !1);
                    var r = t.onSuccess(n);
                    return r === !1 ? !1 : void 0
                }).bind("reset.validation", function() {
                    e.formUtils.dialogs.removeAllMessagesAndStyling(r, t)
                }).addClass("has-validation-callback"), t.showHelpOnFocus && r.showHelpOnFocus(), t.addSuggestions && r.addSuggestions(), t.validateOnBlur && (r.validateOnBlur(t.language, t), r.bind("html5ValidationAttrsFound", function() {
                    r.validateOnBlur(t.language, t)
                })), t.validateOnEvent && r.validateOnEvent(t.language, t)
            }), "" !== t.modules && e.formUtils.loadModules(t.modules, !1, function() {
                "function" == typeof t.onModulesLoaded && t.onModulesLoaded();
                var n = "string" == typeof t.form ? e(t.form) : t.form;
                e.formUtils.$win.trigger("validatorsLoaded", [n, t])
            })
        }
    }(e),
    function(e, t) {
        "use strict";
        var n = e(t);
        e.formUtils = e.extend(e.formUtils || {}, {
            $win: n,
            defaultConfig: function() {
                return {
                    ignore: [],
                    errorElementClass: "error",
                    borderColorOnError: "#b94a48",
                    errorMessageClass: "form-error",
                    validationRuleAttribute: "data-validation",
                    validationErrorMsgAttribute: "data-validation-error-msg",
                    errorMessagePosition: "element",
                    errorMessageTemplate: {
                        container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
                        messages: "<strong>{errorTitle}</strong><ul>{fields}</ul>",
                        field: "<li>{msg}</li>"
                    },
                    scrollToTopOnError: !0,
                    dateFormat: "yyyy-mm-dd",
                    addValidClassOnAll: !1,
                    decimalSeparator: ".",
                    inputParentClassOnError: "has-error",
                    inputParentClassOnSuccess: "has-success",
                    validateHiddenInputs: !1,
                    inlineErrorMessageCallback: !1,
                    submitErrorMessageCallback: !1
                }
            },
            validators: {},
            _events: {
                load: [],
                valid: [],
                invalid: []
            },
            haltValidation: !1,
            isValidatingEntireForm: !1,
            addValidator: function(e) {
                var t = 0 === e.name.indexOf("validate_") ? e.name : "validate_" + e.name;
                void 0 === e.validateOnKeyUp && (e.validateOnKeyUp = !0), this.validators[t] = e
            },
            warn: function(e) {
                "console" in t ? "function" == typeof t.console.warn ? t.console.warn(e) : "function" == typeof t.console.log && t.console.log(e) : alert(e)
            },
            getValue: function(e, t) {
                var n = t ? t.find(e) : e;
                if (n.length > 0) {
                    var i = n.eq(0).attr("type");
                    return "radio" === i || "checkbox" === i ? n.filter(":checked").val() : n.val()
                }
                return !1
            },
            validateInput: function(t, n, i, r, a) {
                i = i || e.formUtils.defaultConfig(), n = n || e.formUtils.LANG;
                var o = this.getValue(t);
                t.valAttr("skipped", !1).one("beforeValidation", function() {
                    (t.attr("disabled") || !t.is(":visible") && !i.validateHiddenInputs) && t.valAttr("skipped", 1)
                }).trigger("beforeValidation", [o, i, n]);
                var s = "true" === t.valAttr("optional"),
                    l = !o && s,
                    u = t.attr(i.validationRuleAttribute),
                    c = !0,
                    d = "",
                    f = {
                        isValid: !0,
                        shouldChangeDisplay: !0,
                        errorMsg: ""
                    };
                if (!u || l || t.valAttr("skipped")) return f.shouldChangeDisplay = i.addValidClassOnAll, f;
                var p = t.valAttr("ignore");
                return p && e.each(p.split(""), function(e, t) {
                    o = o.replace(new RegExp("\\" + t), "")
                }), e.split(u, function(s) {
                    0 !== s.indexOf("validate_") && (s = "validate_" + s);
                    var l = e.formUtils.validators[s];
                    if (!l) throw new Error('Using undefined validator "' + s + '". Maybe you have forgotten to load the module that "' + s + '" belongs to?');
                    return "validate_checkbox_group" === s && (t = r.find('[name="' + t.attr("name") + '"]:eq(0)')), ("keyup" !== a || l.validateOnKeyUp) && (c = l.validatorFunction(o, t, i, n, r)), c ? void 0 : (d = e.formUtils.dialogs.resolveErrorMessage(t, l, s, i, n), !1)
                }, " "), c === !1 ? (t.trigger("validation", !1), f.errorMsg = d, f.isValid = !1, f.shouldChangeDisplay = !0) : null === c ? f.shouldChangeDisplay = !1 : (t.trigger("validation", !0), f.shouldChangeDisplay = !0), "function" == typeof i.onElementValidate && null !== d && i.onElementValidate(f.isValid, t, r, d), t.trigger("afterValidation", [f, a]), f
            },
            parseDate: function(t, n, i) {
                var r, a, o, s, l = n.replace(/[a-zA-Z]/gi, "").substring(0, 1),
                    u = "^",
                    c = n.split(l || null);
                if (e.each(c, function(e, t) {
                        u += (e > 0 ? "\\" + l : "") + "(\\d{" + t.length + "})"
                    }), u += "$", i) {
                    var d = [];
                    e.each(t.split(l), function(e, t) {
                        1 === t.length && (t = "0" + t), d.push(t)
                    }), t = d.join(l)
                }
                if (r = t.match(new RegExp(u)), null === r) return !1;
                var f = function(t, n, i) {
                    for (var r = 0; r < n.length; r++)
                        if (n[r].substring(0, 1) === t) return e.formUtils.parseDateInt(i[r + 1]);
                    return -1
                };
                return o = f("m", c, r), a = f("d", c, r), s = f("y", c, r), 2 === o && a > 28 && (s % 4 !== 0 || s % 100 === 0 && s % 400 !== 0) || 2 === o && a > 29 && (s % 4 === 0 || s % 100 !== 0 && s % 400 === 0) || o > 12 || 0 === o ? !1 : this.isShortMonth(o) && a > 30 || !this.isShortMonth(o) && a > 31 || 0 === a ? !1 : [s, o, a]
            },
            parseDateInt: function(e) {
                return 0 === e.indexOf("0") && (e = e.replace("0", "")), parseInt(e, 10)
            },
            isShortMonth: function(e) {
                return e % 2 === 0 && 7 > e || e % 2 !== 0 && e > 7
            },
            lengthRestriction: function(t, n) {
                var i = parseInt(n.text(), 10),
                    r = 0,
                    a = function() {
                        var e = t.val().length;
                        if (e > i) {
                            var a = t.scrollTop();
                            t.val(t.val().substring(0, i)), t.scrollTop(a)
                        }
                        r = i - e, 0 > r && (r = 0), n.text(r)
                    };
                e(t).bind("keydown keyup keypress focus blur", a).bind("cut paste", function() {
                    setTimeout(a, 100)
                }), e(document).bind("ready", a)
            },
            numericRangeCheck: function(t, n) {
                var i = e.split(n),
                    r = parseInt(n.substr(3), 10);
                return 1 === i.length && -1 === n.indexOf("min") && -1 === n.indexOf("max") && (i = [n, n]), 2 === i.length && (t < parseInt(i[0], 10) || t > parseInt(i[1], 10)) ? ["out", i[0], i[1]] : 0 === n.indexOf("min") && r > t ? ["min", r] : 0 === n.indexOf("max") && t > r ? ["max", r] : ["ok"]
            },
            _numSuggestionElements: 0,
            _selectedSuggestion: null,
            _previousTypedVal: null,
            suggest: function(t, i, r) {
                var a = {
                        css: {
                            maxHeight: "150px",
                            background: "#FFF",
                            lineHeight: "150%",
                            textDecoration: "underline",
                            overflowX: "hidden",
                            overflowY: "auto",
                            border: "#CCC solid 1px",
                            borderTop: "none",
                            cursor: "pointer"
                        },
                        activeSuggestionCSS: {
                            background: "#E9E9E9"
                        }
                    },
                    o = function(e, t) {
                        var n = t.offset();
                        e.css({
                            width: t.outerWidth(),
                            left: n.left + "px",
                            top: n.top + t.outerHeight() + "px"
                        })
                    };
                r && e.extend(a, r), a.css.position = "absolute", a.css["z-index"] = 9999, t.attr("autocomplete", "off"), 0 === this._numSuggestionElements && n.bind("resize", function() {
                    e(".jquery-form-suggestions").each(function() {
                        var t = e(this),
                            n = t.attr("data-suggest-container");
                        o(t, e(".suggestions-" + n).eq(0))
                    })
                }), this._numSuggestionElements++;
                var s = function(t) {
                    var n = t.valAttr("suggestion-nr");
                    e.formUtils._selectedSuggestion = null, e.formUtils._previousTypedVal = null, e(".jquery-form-suggestion-" + n).fadeOut("fast")
                };
                return t.data("suggestions", i).valAttr("suggestion-nr", this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest", function() {
                    e(this).trigger("keyup"), e.formUtils._selectedSuggestion = null
                }).unbind("keyup.suggest").bind("keyup.suggest", function() {
                    var n = e(this),
                        i = [],
                        r = e.trim(n.val()).toLocaleLowerCase();
                    if (r !== e.formUtils._previousTypedVal) {
                        e.formUtils._previousTypedVal = r;
                        var l = !1,
                            u = n.valAttr("suggestion-nr"),
                            c = e(".jquery-form-suggestion-" + u);
                        if (c.scrollTop(0), "" !== r) {
                            var d = r.length > 2;
                            e.each(n.data("suggestions"), function(e, t) {
                                var n = t.toLocaleLowerCase();
                                return n === r ? (i.push("<strong>" + t + "</strong>"), l = !0, !1) : void((0 === n.indexOf(r) || d && n.indexOf(r) > -1) && i.push(t.replace(new RegExp(r, "gi"), "<strong>$&</strong>")))
                            })
                        }
                        l || 0 === i.length && c.length > 0 ? c.hide() : i.length > 0 && 0 === c.length ? (c = e("<div></div>").css(a.css).appendTo("body"), t.addClass("suggestions-" + u), c.attr("data-suggest-container", u).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-" + u)) : i.length > 0 && !c.is(":visible") && c.show(), i.length > 0 && r.length !== i[0].length && (o(c, n), c.html(""), e.each(i, function(t, i) {
                            e("<div></div>").append(i).css({
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                padding: "5px"
                            }).addClass("form-suggest-element").appendTo(c).click(function() {
                                n.focus(), n.val(e(this).text()), n.trigger("change"), s(n)
                            })
                        }))
                    }
                }).unbind("keydown.validation").bind("keydown.validation", function(t) {
                    var n, i, r = t.keyCode ? t.keyCode : t.which,
                        o = e(this);
                    if (13 === r && null !== e.formUtils._selectedSuggestion) {
                        if (n = o.valAttr("suggestion-nr"), i = e(".jquery-form-suggestion-" + n), i.length > 0) {
                            var l = i.find("div").eq(e.formUtils._selectedSuggestion).text();
                            o.val(l), o.trigger("change"), s(o), t.preventDefault()
                        }
                    } else {
                        n = o.valAttr("suggestion-nr"), i = e(".jquery-form-suggestion-" + n);
                        var u = i.children();
                        if (u.length > 0 && e.inArray(r, [38, 40]) > -1) {
                            38 === r ? (null === e.formUtils._selectedSuggestion ? e.formUtils._selectedSuggestion = u.length - 1 : e.formUtils._selectedSuggestion--, e.formUtils._selectedSuggestion < 0 && (e.formUtils._selectedSuggestion = u.length - 1)) : 40 === r && (null === e.formUtils._selectedSuggestion ? e.formUtils._selectedSuggestion = 0 : e.formUtils._selectedSuggestion++, e.formUtils._selectedSuggestion > u.length - 1 && (e.formUtils._selectedSuggestion = 0));
                            var c = i.innerHeight(),
                                d = i.scrollTop(),
                                f = i.children().eq(0).outerHeight(),
                                p = f * e.formUtils._selectedSuggestion;
                            return (d > p || p > d + c) && i.scrollTop(p), u.removeClass("active-suggestion").css("background", "none").eq(e.formUtils._selectedSuggestion).addClass("active-suggestion").css(a.activeSuggestionCSS), t.preventDefault(), !1
                        }
                    }
                }).unbind("blur.suggest").bind("blur.suggest", function() {
                    s(e(this))
                }), t
            },
            LANG: {
                errorTitle: "Form submission failed!",
                requiredField: "This is a required field",
                requiredFields: "You have not answered all required fields",
                badTime: "You have not given a correct time",
                badEmail: "You have not given a correct e-mail address",
                badTelephone: "You have not given a correct phone number",
                badSecurityAnswer: "You have not given a correct answer to the security question",
                badDate: "You have not given a correct date",
                lengthBadStart: "The input value must be between ",
                lengthBadEnd: " characters",
                lengthTooLongStart: "The input value is longer than ",
                lengthTooShortStart: "The input value is shorter than ",
                notConfirmed: "Input values could not be confirmed",
                badDomain: "Incorrect domain value",
                badUrl: "The input value is not a correct URL",
                badCustomVal: "The input value is incorrect",
                andSpaces: " and spaces ",
                badInt: "The input value was not a correct number",
                badSecurityNumber: "Your social security number was incorrect",
                badUKVatAnswer: "Incorrect UK VAT Number",
                badUKNin: "Incorrect UK NIN",
                badUKUtr: "Incorrect UK UTR Number",
                badStrength: "The password isn't strong enough",
                badNumberOfSelectedOptionsStart: "You have to choose at least ",
                badNumberOfSelectedOptionsEnd: " answers",
                badAlphaNumeric: "The input value can only contain alphanumeric characters ",
                badAlphaNumericExtra: " and ",
                wrongFileSize: "The file you are trying to upload is too large (max %s)",
                wrongFileType: "Only files of type %s is allowed",
                groupCheckedRangeStart: "Please choose between ",
                groupCheckedTooFewStart: "Please choose at least ",
                groupCheckedTooManyStart: "Please choose a maximum of ",
                groupCheckedEnd: " item(s)",
                badCreditCard: "The credit card number is not correct",
                badCVV: "The CVV number was not correct",
                wrongFileDim: "Incorrect image dimensions,",
                imageTooTall: "the image can not be taller than",
                imageTooWide: "the image can not be wider than",
                imageTooSmall: "the image was too small",
                min: "min",
                max: "max",
                imageRatioNotAccepted: "Image ratio is not be accepted",
                badBrazilTelephoneAnswer: "The phone number entered is invalid",
                badBrazilCEPAnswer: "The CEP entered is invalid",
                badBrazilCPFAnswer: "The CPF entered is invalid",
                badPlPesel: "The PESEL entered is invalid",
                badPlNip: "The NIP entered is invalid",
                badPlRegon: "The REGON entered is invalid",
                badreCaptcha: "Please confirm that you are not a bot"
            }
        })
    }(e, window),
    function(e) {
        e.formUtils.addValidator({
            name: "email",
            validatorFunction: function(t) {
                var n = t.toLowerCase().split("@"),
                    i = n[0],
                    r = n[1];
                if (i && r) {
                    if (0 === i.indexOf('"')) {
                        var a = i.length;
                        if (i = i.replace(/\"/g, ""), i.length !== a - 2) return !1
                    }
                    return e.formUtils.validators.validate_domain.validatorFunction(n[1]) && 0 !== i.indexOf(".") && "." !== i.substring(i.length - 1, i.length) && -1 === i.indexOf("..") && !/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(i)
                }
                return !1
            },
            errorMessage: "",
            errorMessageKey: "badEmail"
        }), e.formUtils.addValidator({
            name: "domain",
            validatorFunction: function(e) {
                return e.length > 0 && e.length <= 253 && !/[^a-zA-Z0-9]/.test(e.slice(-2)) && !/[^a-zA-Z0-9]/.test(e.substr(0, 1)) && !/[^a-zA-Z0-9\.\-]/.test(e) && 1 === e.split("..").length && e.split(".").length > 1
            },
            errorMessage: "",
            errorMessageKey: "badDomain"
        }), e.formUtils.addValidator({
            name: "required",
            validatorFunction: function(t, n, i, r, a) {
                switch (n.attr("type")) {
                    case "checkbox":
                        return n.is(":checked");
                    case "radio":
                        return a.find('input[name="' + n.attr("name") + '"]').filter(":checked").length > 0;
                    default:
                        return "" !== e.trim(t)
                }
            },
            errorMessage: "",
            errorMessageKey: function(e) {
                return "top" === e.errorMessagePosition || "function" == typeof e.errorMessagePosition ? "requiredFields" : "requiredField"
            }
        }), e.formUtils.addValidator({
            name: "length",
            validatorFunction: function(t, n, i, r) {
                var a = n.valAttr("length"),
                    o = n.attr("type");
                if (void 0 === a) return alert('Please add attribute "data-validation-length" to ' + n[0].nodeName + " named " + n.attr("name")), !0;
                var s, l = "file" === o && void 0 !== n.get(0).files ? n.get(0).files.length : t.length,
                    u = e.formUtils.numericRangeCheck(l, a);
                switch (u[0]) {
                    case "out":
                        this.errorMessage = r.lengthBadStart + a + r.lengthBadEnd, s = !1;
                        break;
                    case "min":
                        this.errorMessage = r.lengthTooShortStart + u[1] + r.lengthBadEnd, s = !1;
                        break;
                    case "max":
                        this.errorMessage = r.lengthTooLongStart + u[1] + r.lengthBadEnd, s = !1;
                        break;
                    default:
                        s = !0
                }
                return s
            },
            errorMessage: "",
            errorMessageKey: ""
        }), e.formUtils.addValidator({
            name: "url",
            validatorFunction: function(t) {
                var n = /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                if (n.test(t)) {
                    var i = t.split("://")[1],
                        r = i.indexOf("/");
                    return r > -1 && (i = i.substr(0, r)), e.formUtils.validators.validate_domain.validatorFunction(i)
                }
                return !1
            },
            errorMessage: "",
            errorMessageKey: "badUrl"
        }), e.formUtils.addValidator({
            name: "number",
            validatorFunction: function(e, t, n) {
                if ("" !== e) {
                    var i, r, a = t.valAttr("allowing") || "",
                        o = t.valAttr("decimal-separator") || n.decimalSeparator,
                        s = !1,
                        l = t.valAttr("step") || "",
                        u = !1,
                        c = t.attr("data-sanitize") || "",
                        d = c.match(/(^|[\s])numberFormat([\s]|$)/i);
                    if (d) {
                        if (!window.numeral) throw new ReferenceError("The data-sanitize value numberFormat cannot be used without the numeral library. Please see Data Validation in http://www.formvalidator.net for more information.");
                        e.length && (e = String(numeral().unformat(e)))
                    }
                    if (-1 === a.indexOf("number") && (a += ",number"), -1 === a.indexOf("negative") && 0 === e.indexOf("-")) return !1;
                    if (a.indexOf("range") > -1 && (i = parseFloat(a.substring(a.indexOf("[") + 1, a.indexOf(";"))), r = parseFloat(a.substring(a.indexOf(";") + 1, a.indexOf("]"))), s = !0), "" !== l && (u = !0), "," === o) {
                        if (e.indexOf(".") > -1) return !1;
                        e = e.replace(",", ".")
                    }
                    if ("" === e.replace(/[0-9-]/g, "") && (!s || e >= i && r >= e) && (!u || e % l === 0)) return !0;
                    if (a.indexOf("float") > -1 && null !== e.match(new RegExp("^([0-9-]+)\\.([0-9]+)$")) && (!s || e >= i && r >= e) && (!u || e % l === 0)) return !0
                }
                return !1
            },
            errorMessage: "",
            errorMessageKey: "badInt"
        }), e.formUtils.addValidator({
            name: "alphanumeric",
            validatorFunction: function(t, n, i, r) {
                var a = "^([a-zA-Z0-9",
                    o = "]+)$",
                    s = n.valAttr("allowing"),
                    l = "";
                if (s) {
                    l = a + s + o;
                    var u = s.replace(/\\/g, "");
                    u.indexOf(" ") > -1 && (u = u.replace(" ", ""), u += r.andSpaces || e.formUtils.LANG.andSpaces), this.errorMessage = r.badAlphaNumeric + r.badAlphaNumericExtra + u
                } else l = a + o, this.errorMessage = r.badAlphaNumeric;
                return new RegExp(l).test(t)
            },
            errorMessage: "",
            errorMessageKey: ""
        }), e.formUtils.addValidator({
            name: "custom",
            validatorFunction: function(e, t) {
                var n = new RegExp(t.valAttr("regexp"));
                return n.test(e)
            },
            errorMessage: "",
            errorMessageKey: "badCustomVal"
        }), e.formUtils.addValidator({
            name: "date",
            validatorFunction: function(t, n, i) {
                var r = n.valAttr("format") || i.dateFormat || "yyyy-mm-dd",
                    a = "false" === n.valAttr("require-leading-zero");
                return e.formUtils.parseDate(t, r, a) !== !1
            },
            errorMessage: "",
            errorMessageKey: "badDate"
        }), e.formUtils.addValidator({
            name: "checkbox_group",
            validatorFunction: function(t, n, i, r, a) {
                var o = !0,
                    s = n.attr("name"),
                    l = e('input[type=checkbox][name^="' + s + '"]', a),
                    u = l.filter(":checked").length,
                    c = n.valAttr("qty");
                if (void 0 === c) {
                    var d = n.get(0).nodeName;
                    alert('Attribute "data-validation-qty" is missing from ' + d + " named " + n.attr("name"))
                }
                var f = e.formUtils.numericRangeCheck(u, c);
                switch (f[0]) {
                    case "out":
                        this.errorMessage = r.groupCheckedRangeStart + c + r.groupCheckedEnd, o = !1;
                        break;
                    case "min":
                        this.errorMessage = r.groupCheckedTooFewStart + f[1] + r.groupCheckedEnd, o = !1;
                        break;
                    case "max":
                        this.errorMessage = r.groupCheckedTooManyStart + f[1] + r.groupCheckedEnd, o = !1;
                        break;
                    default:
                        o = !0
                }
                if (!o) {
                    var p = function() {
                        l.unbind("click", p), l.filter("*[data-validation]").validateInputOnBlur(r, i, !1, "blur")
                    };
                    l.bind("click", p)
                }
                return o
            }
        })
    }(e)
}),
function(e) {
    e.fn.hoverIntent = function(t, n, i) {
        var r = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        r = "object" == typeof t ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, {
            over: t,
            out: n,
            selector: i
        }) : e.extend(r, {
            over: t,
            out: t,
            selector: n
        });
        var a, o, s, l, u = function(e) {
                a = e.pageX, o = e.pageY
            },
            c = function(t, n) {
                return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.abs(s - a) + Math.abs(l - o) < r.sensitivity ? (e(n).off("mousemove.hoverIntent", u), n.hoverIntent_s = 1, r.over.apply(n, [t])) : (s = a, l = o, n.hoverIntent_t = setTimeout(function() {
                    c(t, n)
                }, r.interval), void 0)
            },
            d = function(e, t) {
                return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, r.out.apply(t, [e])
            },
            f = function(t) {
                var n = jQuery.extend({}, t),
                    i = this;
                i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)), "mouseenter" == t.type ? (s = n.pageX, l = n.pageY, e(i).on("mousemove.hoverIntent", u), 1 != i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function() {
                    c(n, i)
                }, r.interval))) : (e(i).off("mousemove.hoverIntent", u), 1 == i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function() {
                    d(n, i)
                }, r.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": f,
            "mouseleave.hoverIntent": f
        }, r.selector)
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    function t() {
        var t, n, i = {
            height: u.innerHeight,
            width: u.innerWidth
        };
        return i.height || (t = l.compatMode, !t && e.support.boxModel || (n = "CSS1Compat" === t ? c : l.body, i = {
            height: n.clientHeight,
            width: n.clientWidth
        })), i
    }

    function n() {
        return {
            top: u.pageYOffset || c.scrollTop || l.body.scrollTop,
            left: u.pageXOffset || c.scrollLeft || l.body.scrollLeft
        }
    }

    function i() {
        if (s.length) {
            var i = 0,
                o = e.map(s, function(e) {
                    var t = e.data.selector,
                        n = e.$element;
                    return t ? n.find(t) : n
                });
            for (r = r || t(), a = a || n(); i < s.length; i++)
                if (e.contains(c, o[i][0])) {
                    var l = e(o[i]),
                        u = {
                            height: l[0].offsetHeight,
                            width: l[0].offsetWidth
                        },
                        d = l.offset(),
                        f = l.data("inview");
                    if (!a || !r) return;
                    d.top + u.height > a.top && d.top < a.top + r.height && d.left + u.width > a.left && d.left < a.left + r.width ? f || l.data("inview", !0).trigger("inview", [!0]) : f && l.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    var r, a, o, s = [],
        l = document,
        u = window,
        c = l.documentElement;
    e.event.special.inview = {
        add: function(t) {
            s.push({
                data: t,
                $element: e(this),
                element: this
            }), !o && s.length && (o = setInterval(i, 250))
        },
        remove: function(e) {
            for (var t = 0; t < s.length; t++) {
                var n = s[t];
                if (n.element === this && n.data.guid === e.guid) {
                    s.splice(t, 1);
                    break
                }
            }
            s.length || (clearInterval(o), o = null)
        }
    }, e(u).on("scroll resize scrollstop", function() {
        r = a = null
    }), !c.addEventListener && c.attachEvent && c.attachEvent("onfocusin", function() {
        a = null
    })
}),
function(e, t) {
    "use strict";
    var n = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: "",
        mode: "slide",
        useCSS: !0,
        cssEasing: "ease",
        easing: "linear",
        speed: 400,
        auto: !1,
        pauseOnHover: !1,
        loop: !1,
        slideEndAnimation: !0,
        pause: 2e3,
        keyPress: !1,
        controls: !0,
        prevHtml: "",
        nextHtml: "",
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: "middle",
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function(e) {},
        onSliderLoad: function(e) {},
        onBeforeSlide: function(e, t) {},
        onAfterSlide: function(e, t) {},
        onBeforeNextSlide: function(e, t) {},
        onBeforePrevSlide: function(e, t) {}
    };
    e.fn.lightSlider = function(t) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            e(this).lightSlider(t)
        }), this;
        var i = {},
            r = e.extend(!0, {}, n, t),
            a = {},
            o = this;
        i.$el = this, "fade" === r.mode && (r.vertical = !1);
        var s = o.children(),
            l = e(window).width(),
            u = null,
            c = null,
            d = 0,
            f = 0,
            p = !1,
            h = 0,
            g = "",
            v = 0,
            m = r.vertical === !0 ? "height" : "width",
            y = r.vertical === !0 ? "margin-bottom" : "margin-right",
            b = 0,
            x = 0,
            w = 0,
            C = 0,
            S = null,
            T = "ontouchstart" in document.documentElement,
            k = {};
        return k.chbreakpoint = function() {
            if (l = e(window).width(), r.responsive.length) {
                var t;
                if (r.autoWidth === !1 && (t = r.item), l < r.responsive[0].breakpoint)
                    for (var n = 0; n < r.responsive.length; n++) l < r.responsive[n].breakpoint && (u = r.responsive[n].breakpoint, c = r.responsive[n]);
                if ("undefined" != typeof c && null !== c)
                    for (var i in c.settings) c.settings.hasOwnProperty(i) && ("undefined" != typeof a[i] && null !== a[i] || (a[i] = r[i]), r[i] = c.settings[i]);
                if (!e.isEmptyObject(a) && l > r.responsive[0].breakpoint)
                    for (var o in a) a.hasOwnProperty(o) && (r[o] = a[o]);
                r.autoWidth === !1 && b > 0 && w > 0 && t !== r.item && (v = Math.round(b / ((w + r.slideMargin) * r.slideMove)))
            }
        }, k.calSW = function() {
            r.autoWidth === !1 && (w = (h - (r.item * r.slideMargin - r.slideMargin)) / r.item)
        }, k.calWidth = function(e) {
            var t = e === !0 ? g.find(".lslide").length : s.length;
            if (r.autoWidth === !1) f = t * (w + r.slideMargin);
            else {
                f = 0;
                for (var n = 0; t > n; n++) f += parseInt(s.eq(n).width()) + r.slideMargin
            }
            return f
        }, i = {
            doCss: function() {
                var e = function() {
                    for (var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], t = document.documentElement, n = 0; n < e.length; n++)
                        if (e[n] in t.style) return !0
                };
                return !(!r.useCSS || !e())
            },
            keyPress: function() {
                r.keyPress && e(document).on("keyup.lightslider", function(t) {
                    e(":focus").is("input, textarea") || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, 37 === t.keyCode ? o.goToPrevSlide() : 39 === t.keyCode && o.goToNextSlide())
                })
            },
            controls: function() {
                r.controls && (o.after('<div class="lSAction"><a class="lSPrev">' + r.prevHtml + '</a><a class="lSNext">' + r.nextHtml + "</a></div>"), r.autoWidth ? k.calWidth(!1) < h && g.find(".lSAction").hide() : d <= r.item && g.find(".lSAction").hide(), g.find(".lSAction a").on("click", function(t) {
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, "lSPrev" === e(this).attr("class") ? o.goToPrevSlide() : o.goToNextSlide(), !1
                }))
            },
            initialStyle: function() {
                var e = this;
                "fade" === r.mode && (r.autoWidth = !1, r.slideEndAnimation = !1), r.auto && (r.slideEndAnimation = !1), r.autoWidth && (r.slideMove = 1, r.item = 1), r.loop && (r.slideMove = 1, r.freeMove = !1), r.onBeforeStart.call(this, o), k.chbreakpoint(), o.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + r.addClass + '"><div class="lSSlideWrapper"></div></div>'), g = o.parent(".lSSlideWrapper"), r.rtl === !0 && g.parent().addClass("lSrtl"), r.vertical ? (g.parent().addClass("vertical"), h = r.verticalHeight, g.css("height", h + "px")) : h = o.outerWidth(), s.addClass("lslide"), r.loop === !0 && "slide" === r.mode && (k.calSW(), k.clone = function() {
                    if (k.calWidth(!0) > h) {
                        for (var t = 0, n = 0, i = 0; i < s.length && (t += parseInt(o.find(".lslide").eq(i).width()) + r.slideMargin, n++, !(t >= h + r.slideMargin)); i++);
                        var a = r.autoWidth === !0 ? n : r.item;
                        if (a < o.find(".clone.left").length)
                            for (var l = 0; l < o.find(".clone.left").length - a; l++) s.eq(l).remove();
                        if (a < o.find(".clone.right").length)
                            for (var u = s.length - 1; u > s.length - 1 - o.find(".clone.right").length; u--) v--, s.eq(u).remove();
                        for (var c = o.find(".clone.right").length; a > c; c++) o.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(o), v++;
                        for (var d = o.find(".lslide").length - o.find(".clone.left").length; d > o.find(".lslide").length - a; d--) o.find(".lslide").eq(d - 1).clone().removeClass("lslide").addClass("clone left").prependTo(o);
                        s = o.children()
                    } else s.hasClass("clone") && (o.find(".clone").remove(), e.move(o, 0))
                }, k.clone()), k.sSW = function() {
                    d = s.length, r.rtl === !0 && r.vertical === !1 && (y = "margin-left"), r.autoWidth === !1 && s.css(m, w + "px"), s.css(y, r.slideMargin + "px"), f = k.calWidth(!1), o.css(m, f + "px"), r.loop === !0 && "slide" === r.mode && p === !1 && (v = o.find(".clone.left").length)
                }, k.calL = function() {
                    s = o.children(), d = s.length
                }, this.doCss() && g.addClass("usingCss"), k.calL(), "slide" === r.mode ? (k.calSW(), k.sSW(), r.loop === !0 && (b = e.slideValue(), this.move(o, b)), r.vertical === !1 && this.setHeight(o, !1)) : (this.setHeight(o, !0), o.addClass("lSFade"), this.doCss() || (s.fadeOut(0), s.eq(v).fadeIn(0))), r.loop === !0 && "slide" === r.mode ? s.eq(v).addClass("active") : s.first().addClass("active")
            },
            pager: function() {
                var e = this;
                if (k.createPager = function() {
                        C = (h - (r.thumbItem * r.thumbMargin - r.thumbMargin)) / r.thumbItem;
                        var t = g.find(".lslide"),
                            n = g.find(".lslide").length,
                            i = 0,
                            a = "",
                            s = 0;
                        for (i = 0; n > i; i++) {
                            "slide" === r.mode && (r.autoWidth ? s += (parseInt(t.eq(i).width()) + r.slideMargin) * r.slideMove : s = i * ((w + r.slideMargin) * r.slideMove));
                            var l = t.eq(i * r.slideMove).attr("data-thumb");
                            if (a += r.gallery === !0 ? '<li style="width:100%;' + m + ":" + C + "px;" + y + ":" + r.thumbMargin + 'px"><a href="#"><img src="' + l + '" /></a></li>' : '<li><a href="#">' + (i + 1) + "</a></li>", "slide" === r.mode && s >= f - h - r.slideMargin) {
                                i += 1;
                                var u = 2;
                                r.autoWidth && (a += '<li><a href="#">' + (i + 1) + "</a></li>", u = 1), u > i ? (a = null, g.parent().addClass("noPager")) : g.parent().removeClass("noPager");
                                break
                            }
                        }
                        var c = g.parent();
                        c.find(".lSPager").html(a), r.gallery === !0 && (r.vertical === !0 && c.find(".lSPager").css("width", r.vThumbWidth + "px"), x = i * (r.thumbMargin + C) + .5, c.find(".lSPager").css({
                            property: x + "px",
                            "transition-duration": r.speed + "ms"
                        }), r.vertical === !0 && g.parent().css("padding-right", r.vThumbWidth + r.galleryMargin + "px"), c.find(".lSPager").css(m, x + "px"));
                        var d = c.find(".lSPager").find("li");
                        d.first().addClass("active"), d.on("click", function() {
                            return r.loop === !0 && "slide" === r.mode ? v += d.index(this) - c.find(".lSPager").find("li.active").index() : v = d.index(this), o.mode(!1), r.gallery === !0 && e.slideThumb(), !1
                        })
                    }, r.pager) {
                    var t = "lSpg";
                    r.gallery && (t = "lSGallery"), g.after('<ul class="lSPager ' + t + '"></ul>');
                    var n = r.vertical ? "margin-left" : "margin-top";
                    g.parent().find(".lSPager").css(n, r.galleryMargin + "px"), k.createPager()
                }
                setTimeout(function() {
                    k.init()
                }, 0)
            },
            setHeight: function(e, t) {
                var n = null,
                    i = this;
                n = r.loop ? e.children(".lslide ").first() : e.children().first();
                var a = function() {
                    var i = n.outerHeight(),
                        r = 0,
                        a = i;
                    t && (i = 0, r = 100 * a / h), e.css({
                        height: i + "px",
                        "padding-bottom": r + "%"
                    })
                };
                a(), n.find("img").length ? n.find("img")[0].complete ? (a(), S || i.auto()) : n.find("img").load(function() {
                    setTimeout(function() {
                        a(), S || i.auto()
                    }, 100)
                }) : S || i.auto()
            },
            active: function(e, t) {
                this.doCss() && "fade" === r.mode && g.addClass("on");
                var n = 0;
                if (v * r.slideMove < d) {
                    e.removeClass("active"), this.doCss() || "fade" !== r.mode || t !== !1 || e.fadeOut(r.speed), n = t === !0 ? v : v * r.slideMove;
                    var i, a;
                    t === !0 && (i = e.length, a = i - 1, n + 1 >= i && (n = a)), r.loop === !0 && "slide" === r.mode && (n = t === !0 ? v - o.find(".clone.left").length : v * r.slideMove, t === !0 && (i = e.length, a = i - 1, n + 1 === i ? n = a : n + 1 > i && (n = 0))), this.doCss() || "fade" !== r.mode || t !== !1 || e.eq(n).fadeIn(r.speed), e.eq(n).addClass("active")
                } else e.removeClass("active"), e.eq(e.length - 1).addClass("active"), this.doCss() || "fade" !== r.mode || t !== !1 || (e.fadeOut(r.speed), e.eq(n).fadeIn(r.speed))
            },
            move: function(e, t) {
                r.rtl === !0 && (t = -t), this.doCss() ? r.vertical === !0 ? e.css({
                    transform: "translate3d(0px, " + -t + "px, 0px)",
                    "-webkit-transform": "translate3d(0px, " + -t + "px, 0px)"
                }) : e.css({
                    transform: "translate3d(" + -t + "px, 0px, 0px)",
                    "-webkit-transform": "translate3d(" + -t + "px, 0px, 0px)"
                }) : r.vertical === !0 ? e.css("position", "relative").animate({
                    top: -t + "px"
                }, r.speed, r.easing) : e.css("position", "relative").animate({
                    left: -t + "px"
                }, r.speed, r.easing);
                var n = g.parent().find(".lSPager").find("li");
                this.active(n, !0)
            },
            fade: function() {
                this.active(s, !1);
                var e = g.parent().find(".lSPager").find("li");
                this.active(e, !0)
            },
            slide: function() {
                var e = this;
                k.calSlide = function() {
                    f > h && (b = e.slideValue(), e.active(s, !1), b > f - h - r.slideMargin ? b = f - h - r.slideMargin : 0 > b && (b = 0), e.move(o, b), r.loop === !0 && "slide" === r.mode && (v >= d - o.find(".clone.left").length / r.slideMove && e.resetSlide(o.find(".clone.left").length), 0 === v && e.resetSlide(g.find(".lslide").length)))
                }, k.calSlide()
            },
            resetSlide: function(e) {
                var t = this;
                g.find(".lSAction a").addClass("disabled"), setTimeout(function() {
                    v = e, g.css("transition-duration", "0ms"), b = t.slideValue(), t.active(s, !1), i.move(o, b), setTimeout(function() {
                        g.css("transition-duration", r.speed + "ms"), g.find(".lSAction a").removeClass("disabled")
                    }, 50)
                }, r.speed + 100)
            },
            slideValue: function() {
                var e = 0;
                if (r.autoWidth === !1) e = v * ((w + r.slideMargin) * r.slideMove);
                else {
                    e = 0;
                    for (var t = 0; v > t; t++) e += parseInt(s.eq(t).width()) + r.slideMargin
                }
                return e
            },
            slideThumb: function() {
                var e;
                switch (r.currentPagerPosition) {
                    case "left":
                        e = 0;
                        break;
                    case "middle":
                        e = h / 2 - C / 2;
                        break;
                    case "right":
                        e = h - C
                }
                var t = v - o.find(".clone.left").length,
                    n = g.parent().find(".lSPager");
                "slide" === r.mode && r.loop === !0 && (t >= n.children().length ? t = 0 : 0 > t && (t = n.children().length));
                var i = t * (C + r.thumbMargin) - e;
                i + h > x && (i = x - h - r.thumbMargin), 0 > i && (i = 0), this.move(n, i)
            },
            auto: function() {
                r.auto && (clearInterval(S), S = setInterval(function() {
                    o.goToNextSlide()
                }, r.pause))
            },
            pauseOnHover: function() {
                var t = this;
                r.auto && r.pauseOnHover && (g.on("mouseenter", function() {
                    e(this).addClass("ls-hover"), o.pause(), r.auto = !0
                }), g.on("mouseleave", function() {
                    e(this).removeClass("ls-hover"), g.find(".lightSlider").hasClass("lsGrabbing") || t.auto()
                }))
            },
            touchMove: function(e, t) {
                if (g.css("transition-duration", "0ms"), "slide" === r.mode) {
                    var n = e - t,
                        i = b - n;
                    if (i >= f - h - r.slideMargin)
                        if (r.freeMove === !1) i = f - h - r.slideMargin;
                        else {
                            var a = f - h - r.slideMargin;
                            i = a + (i - a) / 5
                        }
                    else 0 > i && (r.freeMove === !1 ? i = 0 : i /= 5);
                    this.move(o, i)
                }
            },
            touchEnd: function(e) {
                if (g.css("transition-duration", r.speed + "ms"), "slide" === r.mode) {
                    var t = !1,
                        n = !0;
                    b -= e, b > f - h - r.slideMargin ? (b = f - h - r.slideMargin, r.autoWidth === !1 && (t = !0)) : 0 > b && (b = 0);
                    var i = function(e) {
                        var n = 0;
                        if (t || e && (n = 1), r.autoWidth)
                            for (var i = 0, a = 0; a < s.length && (i += parseInt(s.eq(a).width()) + r.slideMargin, v = a + n, !(i >= b)); a++);
                        else {
                            var o = b / ((w + r.slideMargin) * r.slideMove);
                            v = parseInt(o) + n, b >= f - h - r.slideMargin && o % 1 !== 0 && v++
                        }
                    };
                    e >= r.swipeThreshold ? (i(!1), n = !1) : e <= -r.swipeThreshold && (i(!0), n = !1), o.mode(n), this.slideThumb()
                } else e >= r.swipeThreshold ? o.goToPrevSlide() : e <= -r.swipeThreshold && o.goToNextSlide()
            },
            enableDrag: function() {
                var t = this;
                if (!T) {
                    var n = 0,
                        i = 0,
                        a = !1;
                    g.find(".lightSlider").addClass("lsGrab"), g.on("mousedown", function(t) {
                        return h > f && 0 !== f ? !1 : void("lSPrev" !== e(t.target).attr("class") && "lSNext" !== e(t.target).attr("class") && (n = r.vertical === !0 ? t.pageY : t.pageX, a = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, g.scrollLeft += 1, g.scrollLeft -= 1, g.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(S)))
                    }), e(window).on("mousemove", function(e) {
                        a && (i = r.vertical === !0 ? e.pageY : e.pageX, t.touchMove(i, n))
                    }), e(window).on("mouseup", function(o) {
                        if (a) {
                            g.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"), a = !1, i = r.vertical === !0 ? o.pageY : o.pageX;
                            var s = i - n;
                            Math.abs(s) >= r.swipeThreshold && e(window).on("click.ls", function(t) {
                                t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopImmediatePropagation(), t.stopPropagation(), e(window).off("click.ls")
                            }), t.touchEnd(s)
                        }
                    })
                }
            },
            enableTouch: function() {
                var e = this;
                if (T) {
                    var t = {},
                        n = {};
                    g.on("touchstart", function(e) {
                        n = e.originalEvent.targetTouches[0], t.pageX = e.originalEvent.targetTouches[0].pageX, t.pageY = e.originalEvent.targetTouches[0].pageY, clearInterval(S)
                    }), g.on("touchmove", function(i) {
                        if (h > f && 0 !== f) return !1;
                        var a = i.originalEvent;
                        n = a.targetTouches[0];
                        var o = Math.abs(n.pageX - t.pageX),
                            s = Math.abs(n.pageY - t.pageY);
                        r.vertical === !0 ? (3 * s > o && i.preventDefault(), e.touchMove(n.pageY, t.pageY)) : (3 * o > s && i.preventDefault(), e.touchMove(n.pageX, t.pageX))
                    }), g.on("touchend", function() {
                        if (h > f && 0 !== f) return !1;
                        var i;
                        i = r.vertical === !0 ? n.pageY - t.pageY : n.pageX - t.pageX, e.touchEnd(i)
                    })
                }
            },
            build: function() {
                var t = this;
                t.initialStyle(), this.doCss() && (r.enableTouch === !0 && t.enableTouch(), r.enableDrag === !0 && t.enableDrag()), e(window).on("focus", function() {
                    t.auto()
                }), e(window).on("blur", function() {
                    clearInterval(S)
                }), t.pager(), t.pauseOnHover(), t.controls(), t.keyPress()
            }
        }, i.build(), k.init = function() {
            k.chbreakpoint(), r.vertical === !0 ? (h = r.item > 1 ? r.verticalHeight : s.outerHeight(), g.css("height", h + "px")) : h = g.outerWidth(), r.loop === !0 && "slide" === r.mode && k.clone(), k.calL(), "slide" === r.mode && o.removeClass("lSSlide"), "slide" === r.mode && (k.calSW(), k.sSW()), setTimeout(function() {
                "slide" === r.mode && o.addClass("lSSlide")
            }, 1e3), r.pager && k.createPager(), r.adaptiveHeight === !0 && r.vertical === !1 && o.css("height", s.eq(v).outerHeight(!0)), r.adaptiveHeight === !1 && ("slide" === r.mode ? r.vertical === !1 ? i.setHeight(o, !1) : i.auto() : i.setHeight(o, !0)), r.gallery === !0 && i.slideThumb(), "slide" === r.mode && i.slide(), r.autoWidth === !1 ? s.length <= r.item ? g.find(".lSAction").hide() : g.find(".lSAction").show() : k.calWidth(!1) < h && 0 !== f ? g.find(".lSAction").hide() : g.find(".lSAction").show()
        }, o.goToPrevSlide = function() {
            if (v > 0) r.onBeforePrevSlide.call(this, o, v), v--, o.mode(!1), r.gallery === !0 && i.slideThumb();
            else if (r.loop === !0) {
                if (r.onBeforePrevSlide.call(this, o, v), "fade" === r.mode) {
                    var e = d - 1;
                    v = parseInt(e / r.slideMove)
                }
                o.mode(!1), r.gallery === !0 && i.slideThumb()
            } else r.slideEndAnimation === !0 && (o.addClass("leftEnd"), setTimeout(function() {
                o.removeClass("leftEnd")
            }, 400))
        }, o.goToNextSlide = function() {
            var e = !0;
            if ("slide" === r.mode) {
                var t = i.slideValue();
                e = t < f - h - r.slideMargin
            }
            v * r.slideMove < d - r.slideMove && e ? (r.onBeforeNextSlide.call(this, o, v), v++, o.mode(!1), r.gallery === !0 && i.slideThumb()) : r.loop === !0 ? (r.onBeforeNextSlide.call(this, o, v), v = 0, o.mode(!1), r.gallery === !0 && i.slideThumb()) : r.slideEndAnimation === !0 && (o.addClass("rightEnd"), setTimeout(function() {
                o.removeClass("rightEnd")
            }, 400))
        }, o.mode = function(e) {
            r.adaptiveHeight === !0 && r.vertical === !1 && o.css("height", s.eq(v).outerHeight(!0)), p === !1 && ("slide" === r.mode ? i.doCss() && (o.addClass("lSSlide"), "" !== r.speed && g.css("transition-duration", r.speed + "ms"), "" !== r.cssEasing && g.css("transition-timing-function", r.cssEasing)) : i.doCss() && ("" !== r.speed && o.css("transition-duration", r.speed + "ms"), "" !== r.cssEasing && o.css("transition-timing-function", r.cssEasing))), e || r.onBeforeSlide.call(this, o, v), "slide" === r.mode ? i.slide() : i.fade(), g.hasClass("ls-hover") || i.auto(), setTimeout(function() {
                e || r.onAfterSlide.call(this, o, v)
            }, r.speed), p = !0
        }, o.play = function() {
            o.goToNextSlide(), r.auto = !0, i.auto()
        }, o.pause = function() {
            r.auto = !1, clearInterval(S)
        }, o.refresh = function() {
            k.init()
        }, o.getCurrentSlideCount = function() {
            var e = v;
            if (r.loop) {
                var t = g.find(".lslide").length,
                    n = o.find(".clone.left").length;
                e = n - 1 >= v ? t + (v - n) : v >= t + n ? v - t - n : v - n
            }
            return e + 1
        }, o.getTotalSlideCount = function() {
            return g.find(".lslide").length
        }, o.goToSlide = function(e) {
            v = r.loop ? e + o.find(".clone.left").length - 1 : e, o.mode(!1), r.gallery === !0 && i.slideThumb()
        }, o.destroy = function() {
            o.lightSlider && (o.goToPrevSlide = function() {}, o.goToNextSlide = function() {}, o.mode = function() {}, o.play = function() {}, o.pause = function() {}, o.refresh = function() {}, o.getCurrentSlideCount = function() {}, o.getTotalSlideCount = function() {}, o.goToSlide = function() {}, o.lightSlider = null, k = {
                init: function() {}
            }, o.parent().parent().find(".lSAction, .lSPager").remove(), o.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), o.children().removeAttr("style"), s.removeClass("lslide active"), o.find(".clone").remove(), s = null, S = null, p = !1, v = 0)
        }, setTimeout(function() {
            r.onSliderLoad.call(this, o)
        }, 10), e(window).on("resize orientationchange", function(e) {
            setTimeout(function() {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1, k.init()
            }, 200)
        }), this
    }
}(jQuery),
function(e) {
    e.fn.slinky = function(t) {
        var n = e.extend({
                label: "Back",
                speed: 300,
                resize: !0
            }, t),
            i = function(e, t, i) {
                var r = (e.outerWidth(), Math.round(parseInt(e.get(0).style.left)) || 0);
                e.stop(!0, !0).animate({
                    left: -Math.abs(t ? r - 100 : r + 100) + "%"
                }, n.speed, function() {
                    "function" == typeof i && i()
                })
            },
            r = function(e, t) {
                e.stop(!0, !0).animate({
                    height: t.outerHeight()
                }, n.speed)
            };
        return this.each(function() {
            var t = e(this),
                a = t.children().first();
            if (e("a + ul", t).prev().addClass("next"), n.label === !0) e("li > ul", t).each(function() {
                var t = e(this).parent().find("a").first().text(),
                    n = e("<a>").text(t).prop("href", "#").addClass("back");
                e(this).prepend(n)
            });
            else {
                var o = e("<a>").text(n.label).prop("href", "#").addClass("back");
                e("li > ul", t).prepend(o)
            }
            e("a", t).on("click", function(o) {
                var s = e(this);
                /#/.test(this.href) && o.preventDefault(), t.is(":animated") || (s.hasClass("next") ? (s.next().show(), i(a, !0), n.resize && r(t, s.next())) : s.hasClass("back") && (i(a, !1, function() {
                    s.parent().hide()
                }), n.resize && r(t, s.parent().parents("ul"))))
            })
        })
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t, n, i = function(t, n) {
        return this.$el = t, this.options = e.extend({}, i.rules.defaults, i.rules[n.rule] || {}, n), this.min = Number(this.options.min) || 0, this.max = Number(this.options.max) || 0, this.$el.on({
            "focus.spinner": e.proxy(function(t) {
                t.preventDefault(), e(document).trigger("mouseup.spinner"), this.oldValue = this.value()
            }, this),
            "change.spinner": e.proxy(function(e) {
                e.preventDefault(), this.value(this.$el.val())
            }, this),
            "keydown.spinner": e.proxy(function(e) {
                var t = {
                    38: "up",
                    40: "down"
                }[e.which];
                t && (e.preventDefault(), this.spin(t))
            }, this)
        }), this.oldValue = this.value(), this.value(this.$el.val()), this
    };
    i.rules = {
        defaults: {
            min: null,
            max: null,
            step: 1,
            precision: 0
        },
        currency: {
            min: 0,
            max: null,
            step: .01,
            precision: 2
        },
        quantity: {
            min: 1,
            max: 999,
            step: 1,
            precision: 0
        },
        percent: {
            min: 1,
            max: 100,
            step: 1,
            precision: 0
        },
        month: {
            min: 1,
            max: 12,
            step: 1,
            precision: 0
        },
        day: {
            min: 1,
            max: 31,
            step: 1,
            precision: 0
        },
        hour: {
            min: 0,
            max: 23,
            step: 1,
            precision: 0
        },
        minute: {
            min: 1,
            max: 59,
            step: 1,
            precision: 0
        },
        second: {
            min: 1,
            max: 59,
            step: 1,
            precision: 0
        }
    }, i.prototype = {
        spin: function(t) {
            if (!this.$el.prop("disabled")) {
                this.oldValue = this.value();
                var n = e.isFunction(this.options.step) ? this.options.step.call(this, t) : this.options.step,
                    i = "up" === t ? 1 : -1;
                this.value(this.oldValue + Number(n) * i)
            }
        },
        value: function(i) {
            if (null === i || void 0 === i) return this.numeric(this.$el.val());
            i = this.numeric(i);
            var r = this.validate(i);
            0 !== r && (i = -1 === r ? this.min : this.max), this.$el.val(i.toFixed(this.options.precision)), this.oldValue !== this.value() && (this.$el.trigger("changing.spinner", [this.value(), this.oldValue]), clearTimeout(t), t = setTimeout(e.proxy(function() {
                this.$el.trigger("changed.spinner", [this.value(), this.oldValue])
            }, this), n.delay))
        },
        numeric: function(e) {
            return e = this.options.precision > 0 ? parseFloat(e, 10) : parseInt(e, 10), isFinite(e) ? e : e || this.options.min || 0
        },
        validate: function(e) {
            return null !== this.options.min && e < this.min ? -1 : null !== this.options.max && e > this.max ? 1 : 0
        }
    }, n = function(t, n) {
        this.$el = e(t), this.$spinning = this.$el.find('[data-spin="spinner"]'), 0 === this.$spinning.length && (this.$spinning = this.$el.find(':input[type="text"]')), n = e.extend({}, n, this.$spinning.data()), this.spinning = new i(this.$spinning, n), this.$el.on("click.spinner", '[data-spin="up"], [data-spin="down"]', e.proxy(this, "spin")).on("mousedown.spinner", '[data-spin="up"], [data-spin="down"]', e.proxy(this, "spin")), e(document).on("mouseup.spinner", e.proxy(function() {
            clearTimeout(this.spinTimeout), clearInterval(this.spinInterval)
        }, this)), n.delay && this.delay(n.delay), n.changed && this.changed(n.changed), n.changing && this.changing(n.changing)
    }, n.delay = 500, n.prototype = {
        constructor: n,
        spin: function(t) {
            var n = e(t.currentTarget).data("spin");
            switch (t.type) {
                case "click":
                    t.preventDefault(), this.spinning.spin(n);
                    break;
                case "mousedown":
                    1 === t.which && (this.spinTimeout = setTimeout(e.proxy(this, "beginSpin", n), 300))
            }
        },
        delay: function(e) {
            var t = Number(e);
            t >= 0 && (this.constructor.delay = t + 100)
        },
        value: function() {
            return this.spinning.value()
        },
        changed: function(e) {
            this.bindHandler("changed.spinner", e)
        },
        changing: function(e) {
            this.bindHandler("changing.spinner", e)
        },
        bindHandler: function(t, n) {
            e.isFunction(n) ? this.$spinning.on(t, n) : this.$spinning.off(t)
        },
        beginSpin: function(t) {
            this.spinInterval = setInterval(e.proxy(this.spinning, "spin", t), 100)
        }
    };
    var r = e.fn.spinner;
    return e.fn.spinner = function(t, i) {
        return this.each(function() {
            var r = e.data(this, "spinner");
            r || (r = new n(this, t), e.data(this, "spinner", r)), "delay" === t || "changed" === t || "changing" === t ? r[t](i) : "step" === t && i ? r.spinning.step = i : "spin" === t && i && r.spinning.spin(i)
        })
    }, e.fn.spinner.Constructor = n, e.fn.spinner.noConflict = function() {
        return e.fn.spinner = r, this
    }, e(function() {
        e('[data-trigger="spinner"]').spinner()
    }), e.fn.spinner
}),
function(e, t) {
    "use strict";
    var n = function() {
        var n = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            i = function() {
                var t = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
                return t && e("html").css("cursor", "pointer").on("click", e.noop), t
            }(),
            r = function() {
                var e = document.documentElement.style;
                return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
            }(),
            a = function() {
                return !!t.PointerEvent
            }(),
            o = function(e, t) {
                var i = n.menuClass;
                t.cssArrows && (i += " " + n.menuArrowClass), e.toggleClass(i)
            },
            s = function(t, i) {
                return t.find("li." + i.pathClass).slice(0, i.pathLevels).addClass(i.hoverClass + " " + n.bcClass).filter(function() {
                    return e(this).children(i.popUpSelector).hide().show().length
                }).removeClass(i.pathClass)
            },
            l = function(e) {
                e.children("a").toggleClass(n.anchorClass)
            },
            u = function(e) {
                var t = e.css("ms-touch-action"),
                    n = e.css("touch-action");
                n = n || t, n = "pan-y" === n ? "auto" : "pan-y", e.css({
                    "ms-touch-action": n,
                    "touch-action": n
                })
            },
            c = function(e) {
                return e.closest("." + n.menuClass)
            },
            d = function(e) {
                return c(e).data("sf-options")
            },
            f = function() {
                var t = e(this),
                    n = d(t);
                clearTimeout(n.sfTimer), t.siblings().superfish("hide").end().superfish("show")
            },
            p = function(t) {
                t.retainPath = e.inArray(this[0], t.$path) > -1, this.superfish("hide"), this.parents("." + t.hoverClass).length || (t.onIdle.call(c(this)), t.$path.length && e.proxy(f, t.$path)())
            },
            h = function() {
                var t = e(this),
                    n = d(t);
                i ? e.proxy(p, t, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(p, t, n), n.delay))
            },
            g = function(t) {
                var n = e(this),
                    i = d(n),
                    r = n.siblings(t.data.popUpSelector);
                return i.onHandleTouch.call(r) === !1 ? this : void(r.length > 0 && r.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === t.type || "pointerdown" === t.type ? n.trigger("focus") : e.proxy(f, n.parent("li"))()))
            },
            v = function(t, n) {
                var o = "li:has(" + n.popUpSelector + ")";
                e.fn.hoverIntent && !n.disableHI ? t.hoverIntent(f, h, o) : t.on("mouseenter.superfish", o, f).on("mouseleave.superfish", o, h);
                var s = "MSPointerDown.superfish";
                a && (s = "pointerdown.superfish"), i || (s += " touchend.superfish"), r && (s += " mousedown.superfish"), t.on("focusin.superfish", "li", f).on("focusout.superfish", "li", h).on(s, "a", n, g)
            };
        return {
            hide: function(t) {
                if (this.length) {
                    var n = this,
                        i = d(n);
                    if (!i) return this;
                    var r = i.retainPath === !0 ? i.$path : "",
                        a = n.find("li." + i.hoverClass).add(this).not(r).removeClass(i.hoverClass).children(i.popUpSelector),
                        o = i.speedOut;
                    if (t && (a.show(), o = 0), i.retainPath = !1, i.onBeforeHide.call(a) === !1) return this;
                    a.stop(!0, !0).animate(i.animationOut, o, function() {
                        var t = e(this);
                        i.onHide.call(t)
                    })
                }
                return this
            },
            show: function() {
                var e = d(this);
                if (!e) return this;
                var t = this.addClass(e.hoverClass),
                    n = t.children(e.popUpSelector);
                return e.onBeforeShow.call(n) === !1 ? this : (n.stop(!0, !0).animate(e.animation, e.speed, function() {
                    e.onShow.call(n)
                }), this)
            },
            destroy: function() {
                return this.each(function() {
                    var t, i = e(this),
                        r = i.data("sf-options");
                    return r ? (t = i.find(r.popUpSelector).parent("li"), clearTimeout(r.sfTimer), o(i, r), l(t), u(i), i.off(".superfish").off(".hoverIntent"), t.children(r.popUpSelector).attr("style", function(e, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }), r.$path.removeClass(r.hoverClass + " " + n.bcClass).addClass(r.pathClass), i.find("." + r.hoverClass).removeClass(r.hoverClass), r.onDestroy.call(i), void i.removeData("sf-options")) : !1
                })
            },
            init: function(t) {
                return this.each(function() {
                    var i = e(this);
                    if (i.data("sf-options")) return !1;
                    var r = e.extend({}, e.fn.superfish.defaults, t),
                        a = i.find(r.popUpSelector).parent("li");
                    r.$path = s(i, r), i.data("sf-options", r), o(i, r), l(a), u(i), v(i, r), a.not("." + n.bcClass).superfish("hide", !0), r.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function(t, i) {
        return n[t] ? n[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? e.error("Method " + t + " does not exist on jQuery.fn.superfish") : n.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop
    }
}(jQuery, window),
function(e) {
    e.fn.YouTubePopUp = function(t) {
        var n = e.extend({
            autoplay: 1
        }, t);
        e(this).on("click", function(t) {
            var i = e(this).attr("href");
            if (i.match(/(youtube.com)/)) var r = "v=",
                a = 1;
            if (i.match(/(youtu.be)/) || i.match(/(vimeo.com\/)+[0-9]/)) var r = "/",
                a = 3;
            if (i.match(/(vimeo.com\/)+[a-zA-Z]/)) var r = "/",
                a = 5;
            var o = i.split(r)[a],
                s = o.replace(/(&)+(.*)/, "");
            if (i.match(/(youtu.be)/) || i.match(/(youtube.com)/)) var l = "https://www.youtube.com/embed/" + s + "?autoplay=" + n.autoplay;
            if (i.match(/(vimeo.com\/)+[0-9]/) || i.match(/(vimeo.com\/)+[a-zA-Z]/)) var l = "https://player.vimeo.com/video/" + s + "?autoplay=" + n.autoplay;
            e("body").append('<div class="YouTubePopUp-Wrap"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + l + '" allowfullscreen></iframe></div></div>'), e(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function() {
                e(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() {
                    e(this).remove()
                })
            }), t.preventDefault()
        }), e(document).keyup(function(t) {
            27 == t.keyCode && e(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click()
        })
    }
}(jQuery),
function(e) {
    "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
}(function() {
    return function(e, t, n, i) {
        function r(e, t) {
            var n = [];
            return e && t ? (o.each([e, t], function(e, t) {
                var i = [];
                o.each(t, function(e, t) {
                    for (; t.toString().length < 5;) t = "0" + t;
                    i.push(t)
                }), n.push(i.join(""))
            }), parseFloat(n[0]) > parseFloat(n[1])) : !1
        }
        if (!e.Velocity || !e.Velocity.Utilities) return void(t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var a = e.Velocity,
            o = a.Utilities,
            s = a.version,
            l = {
                major: 1,
                minor: 1,
                patch: 0
            };
        if (r(l, s)) {
            var u = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(u), new Error(u)
        }
        a.RegisterEffect = a.RegisterUI = function(e, t) {
            function n(e, t, n, i) {
                var r, s = 0;
                o.each(e.nodeType ? [e] : e, function(e, t) {
                    i && (n += e * i), r = t.parentNode, o.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(e, n) {
                        s += parseFloat(a.CSS.getPropertyValue(t, n))
                    })
                }), a.animate(r, {
                    height: ("In" === t ? "+" : "-") + "=" + s
                }, {
                    queue: !1,
                    easing: "ease-in-out",
                    duration: n * ("In" === t ? .6 : 1)
                })
            }
            return a.Redirects[e] = function(r, s, l, u, c, d) {
                function f() {
                    s.display !== i && "none" !== s.display || !/Out$/.test(e) || o.each(c.nodeType ? [c] : c, function(e, t) {
                        a.CSS.setPropertyValue(t, "display", "none")
                    }), s.complete && s.complete.call(c, c), d && d.resolver(c || r)
                }
                var p = l === u - 1;
                "function" == typeof t.defaultDuration ? t.defaultDuration = t.defaultDuration.call(c, c) : t.defaultDuration = parseFloat(t.defaultDuration);
                for (var h = 0; h < t.calls.length; h++) {
                    var g = t.calls[h],
                        v = g[0],
                        m = s.duration || t.defaultDuration || 1e3,
                        y = g[1],
                        b = g[2] || {},
                        x = {};
                    if (x.duration = m * (y || 1), x.queue = s.queue || "", x.easing = b.easing || "ease", x.delay = parseFloat(b.delay) || 0, x._cacheValues = b._cacheValues || !0, 0 === h) {
                        if (x.delay += parseFloat(s.delay) || 0,
                            0 === l && (x.begin = function() {
                                s.begin && s.begin.call(c, c);
                                var t = e.match(/(In|Out)$/);
                                t && "In" === t[0] && v.opacity !== i && o.each(c.nodeType ? [c] : c, function(e, t) {
                                    a.CSS.setPropertyValue(t, "opacity", 0)
                                }), s.animateParentHeight && t && n(c, t[0], m + x.delay, s.stagger)
                            }), null !== s.display)
                            if (s.display !== i && "none" !== s.display) x.display = s.display;
                            else if (/In$/.test(e)) {
                            var w = a.CSS.Values.getDisplayType(r);
                            x.display = "inline" === w ? "inline-block" : w
                        }
                        s.visibility && "hidden" !== s.visibility && (x.visibility = s.visibility)
                    }
                    h === t.calls.length - 1 && (x.complete = function() {
                        if (t.reset) {
                            for (var e in t.reset) {
                                var n = t.reset[e];
                                a.CSS.Hooks.registered[e] !== i || "string" != typeof n && "number" != typeof n || (t.reset[e] = [t.reset[e], t.reset[e]])
                            }
                            var o = {
                                duration: 0,
                                queue: !1
                            };
                            p && (o.complete = f), a.animate(r, t.reset, o)
                        } else p && f()
                    }, "hidden" === s.visibility && (x.visibility = s.visibility)), a.animate(r, v, x)
                }
            }, a
        }, a.RegisterEffect.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [{
                        translateY: -30
                    }, .25],
                    [{
                        translateY: 0
                    }, .125],
                    [{
                        translateY: -15
                    }, .125],
                    [{
                        translateY: 0
                    }, .25]
                ]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 11
                    }, .125],
                    [{
                        translateX: -11
                    }, .125],
                    [{
                        translateX: 0
                    }, .125]
                ]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuad", 1]
                    }, .25],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }, .25],
                    [{
                        opacity: [0, "easeInOutQuad"]
                    }, .25],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }, .25]
                ]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, .5, {
                        easing: "easeInExpo"
                    }],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [{
                        rotateZ: 15
                    }, .2],
                    [{
                        rotateZ: -10
                    }, .2],
                    [{
                        rotateZ: 5
                    }, .2],
                    [{
                        rotateZ: -5
                    }, .2],
                    [{
                        rotateZ: 0
                    }, .2]
                ]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        rotateZ: -3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: 3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: -3
                    }, .1],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    [{
                        scaleX: 1,
                        scaleY: 1,
                        rotateZ: 0
                    }, .2]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [1, 0]
                    }]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [0, 1]
                    }]
                ]
            },
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateY: [0, -55]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateY: 55
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateX: [0, -45]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateX: 25
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateY: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateY: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateY: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateY: -10
                    }, .5],
                    [{
                        opacity: 0,
                        rotateY: 90
                    }, .5]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateX: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateX: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateX: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateX: -15
                    }, .5],
                    [{
                        opacity: 0,
                        rotateX: 90
                    }, .5]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["100%", "50%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        translateX: [0, -700],
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "100%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: 0,
                        scaleY: 0,
                        translateX: -700,
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0
                }
            },
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        rotateY: [0, 160]
                    }, 1, {
                        easing: "easeInOutSine"
                    }]
                ]
            },
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuint", 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 0,
                        scaleY: 0,
                        rotateY: 160
                    }, 1, {
                        easing: "swing"
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1,
                    rotateY: 0
                }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 1.5],
                        scaleY: [1, 1.5],
                        translateZ: 0
                    }]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 1.3,
                        scaleY: 1.3,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, .625],
                        scaleY: [1, .625],
                        translateZ: 0
                    }]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: .5,
                        scaleY: .5,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        scaleX: [1.05, .3],
                        scaleY: [1.05, .3]
                    }, .4],
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        translateZ: 0
                    }, .2],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        scaleX: .95,
                        scaleY: .95
                    }, .35],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        translateZ: 0
                    }, .35],
                    [{
                        opacity: [0, 1],
                        scaleX: .3,
                        scaleY: .3
                    }, .3]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [-30, 1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: 10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: 20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: -1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [30, -1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: -10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: -20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: 1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [30, -1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: -10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: 30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: -1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [-30, 1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: 10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: -30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: 1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            }
        };
        for (var c in a.RegisterEffect.packagedEffects) a.RegisterEffect(c, a.RegisterEffect.packagedEffects[c]);
        a.RunSequence = function(e) {
            var t = o.extend(!0, [], e);
            t.length > 1 && (o.each(t.reverse(), function(e, n) {
                var i = t[e + 1];
                if (i) {
                    var r = n.o || n.options,
                        s = i.o || i.options,
                        l = r && r.sequenceQueue === !1 ? "begin" : "complete",
                        u = s && s[l],
                        c = {};
                    c[l] = function() {
                        var e = i.e || i.elements,
                            t = e.nodeType ? [e] : e;
                        u && u.call(t, t), a(n)
                    }, i.o ? i.o = o.extend({}, s, c) : i.options = o.extend({}, s, c)
                }
            }), t.reverse()), a(t[0])
        }
    }(window.jQuery || window.Zepto || window, window, document)
}),
function(e) {
    function t(e, t) {
        if (!e) throw new Error("Missing selector. Refer to Usage documentation: https://github.com/peduarte/wallop#javascript");
        for (var n = 0; n < s.length; n++)
            if (s[n] === e) throw new Error("An instance of Wallop with this selector already exists.");
        if (this.options = {
                buttonPreviousClass: "Wallop-buttonPrevious",
                buttonNextClass: "Wallop-buttonNext",
                itemClass: "Wallop-item",
                currentItemClass: "Wallop-item--current",
                showPreviousClass: "Wallop-item--showPrevious",
                showNextClass: "Wallop-item--showNext",
                hidePreviousClass: "Wallop-item--hidePrevious",
                hideNextClass: "Wallop-item--hideNext",
                carousel: !0
            }, e.length > 0) throw new Error("Selector cannot be an array, Refer to Usage documentation: https://github.com/peduarte/wallop#javascript");
        this.$selector = e, this.options = a(this.options, t), this.event = null, this.allItemsArray = Array.prototype.slice.call(this.$selector.querySelectorAll(" ." + this.options.itemClass)), this.currentItemIndex = this.allItemsArray.indexOf(this.$selector.querySelector(" ." + this.options.currentItemClass)), this.lastItemIndex = this.allItemsArray.length - 1, this.buttonPrevious = this.$selector.querySelector(" ." + this.options.buttonPreviousClass), this.buttonNext = this.$selector.querySelector(" ." + this.options.buttonNextClass), this.bindEvents(), this.createCustomEvent(), -1 === this.currentItemIndex && (this.currentItemIndex = 0, i(this.allItemsArray[this.currentItemIndex], this.options.currentItemClass)), this.updateButtonStates();
        var r = this;
        setTimeout(function() {
            r.event.detail.currentItemIndex = r.currentItemIndex, r.$selector.dispatchEvent(r.event)
        }, 0)
    }

    function n(e) {
        return e ? document.querySelectorAll("." + e) : void 0
    }

    function i(e, t) {
        e && (e.className = (e.className + " " + t).trim())
    }

    function r(e, t) {
        e && (e.className = e.className.replace(t, "").trim())
    }

    function a(e, t) {
        var n, i = {};
        for (n in e) i[n] = e[n];
        for (n in t) i[n] = t[n];
        return i
    }

    function o(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }
    var s = [],
        l = t.prototype;
    l.updateButtonStates = function() {
        !this.buttonPrevious && !this.buttonNext || this.options.carousel || (this.currentItemIndex === this.lastItemIndex ? this.buttonNext.setAttribute("disabled", "disabled") : 0 === this.currentItemIndex && this.buttonPrevious.setAttribute("disabled", "disabled"))
    }, l.removeAllHelperSettings = function() {
        r(this.allItemsArray[this.currentItemIndex], this.options.currentItemClass), r(n(this.options.hidePreviousClass)[0], this.options.hidePreviousClass), r(n(this.options.hideNextClass)[0], this.options.hideNextClass), r(n(this.options.showPreviousClass)[0], this.options.showPreviousClass), r(n(this.options.showNextClass)[0], this.options.showNextClass), (this.buttonPrevious || this.buttonNext) && (this.buttonPrevious.removeAttribute("disabled"), this.buttonNext.removeAttribute("disabled"))
    }, l.goTo = function(e) {
        if (e !== this.currentItemIndex && (e = -1 === e && this.options.carousel ? this.lastItemIndex : e, e = e === this.lastItemIndex + 1 && this.options.carousel ? 0 : e, !(0 > e || e > this.lastItemIndex))) {
            this.removeAllHelperSettings();
            var t = (e > this.currentItemIndex || 0 === e && this.currentItemIndex === this.lastItemIndex) && !(e === this.lastItemIndex && 0 === this.currentItemIndex);
            i(this.allItemsArray[this.currentItemIndex], t ? this.options.hidePreviousClass : this.options.hideNextClass), i(this.allItemsArray[e], this.options.currentItemClass + " " + (t ? this.options.showNextClass : this.options.showPreviousClass)), this.currentItemIndex = e, this.updateButtonStates(), this.event.detail.currentItemIndex = this.currentItemIndex, this.$selector.dispatchEvent(this.event)
        }
    }, l.previous = function() {
        this.goTo(this.currentItemIndex - 1)
    }, l.next = function() {
        this.goTo(this.currentItemIndex + 1)
    }, l.bindEvents = function() {
        s.push(this.$selector);
        var e = this;
        this.buttonPrevious && this.buttonPrevious.addEventListener("click", function(t) {
            t.preventDefault(), e.previous()
        }), this.buttonNext && this.buttonNext.addEventListener("click", function(t) {
            t.preventDefault(), e.next()
        })
    }, l.on = function(e, t) {
        this.$selector.addEventListener(e, t, !1)
    }, l.off = function(e, t) {
        this.$selector.removeEventListener(e, t, !1)
    }, l.createCustomEvent = function() {
        var e = this;
        this.event = new o("change", {
            detail: {
                wallopEl: e.$selector,
                currentItemIndex: Number(e.currentItemIndex)
            },
            bubbles: !0,
            cancelable: !0
        })
    }, o.prototype = window.CustomEvent ? window.CustomEvent.prototype : {}, window.CustomEvent = o, "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof module && module.exports ? module.exports = t : e.Wallop = t
}(this),
function(e) {
    "use strict";
    ! function() {
        var t = e(".js-modal-video");
        t.YouTubePopUp()
    }(),
    function() {
        var t = e(".js-button-menu"),
            n = e("body"),
            i = e(".js-drawer--tablet, .js-drawer--mobile");
        t.on("click", function() {
            return i.toggleClass("drawer--open"), !1
        }), i.on("click", function(e) {
            e.stopPropagation()
        }), n.on("click", function() {
            i.removeClass("drawer--open")
        })
    }(),
    function() {
        var t = e(".js-drawer--search"),
            n = e(".js-button-search"),
            i = e(".js-header"),
            r = i.hasClass("header--border");
        n.on("click", function(e) {
            t.toggleClass("drawer--open"), n.toggleClass("button-search--open"), r || i.toggleClass("header--border"), e.stopPropagation()
        }), t.on("click", function(e) {
            e.stopPropagation()
        }), e("body").on("click", function() {
            t.removeClass("drawer--open"), n.removeClass("button-search--open"), r || i.removeClass("header--border")
        })
    }(),
    function() {
        var t = e(".js-form-contact");
        if (t.length) {
            var n = function(t) {
                var n = t.attr("action"),
                    i = t.serialize(),
                    r = e(".js-form-contact__modal");
                return e.ajax({
                    url: n,
                    type: "POST",
                    data: i,
                    success: function() {
                        t.find("input:text, textarea").val(""), r.fadeIn().delay(2e3).fadeOut()
                    }
                }), !1
            };
            e.validate({
                form: t,
                onSuccess: n,
                scrollToTopOnError: !1
            })
        }
    }(),
    function() {
        e(".js-gallery").lightSlider({
            gallery: !0,
            item: 1,
            controls: !1,
            addClass: "gallery__holder",
            vertical: !0,
            adaptiveHeight: !0,
            loop: !0,
            thumbItem: 4
        })
    }(),
    function() {
        var t = e(".js-menu");
        t.superfish({
            delay: 300,
            autoArrows: !1,
            speed: "fast",
            disableHI: !0
        })
    }(),
    function() {
        e(".js-menu-mobile").slinky()
    }(),
    function() {
        var t = e(".js-preloader"),
            n = e(".js-preload-me").length;
        n && e(window).on("load", function() {
            t.fadeOut("slow", function() {
                e(this).remove()
            })
        })
    }(),
    function() {
        var t = e(".js-slider");
        t.each(function() {
            var t = e(this),
                n = new Wallop(t[0], {
                    buttonPreviousClass: "slider__nav-btn--prev",
                    buttonNextClass: "slider__nav-btn--next"
                }),
                i = function() {
                    var e = t.find(".js-slider-item"),
                        n = t.find(".js-slider-item.Wallop-item--current"),
                        i = n.prev().length ? n.prev() : e.last(),
                        r = n.next().length ? n.next() : e.first(),
                        a = t.find(".js-slider-prev"),
                        o = t.find(".js-slider-next");
                    a.css("background-image", "url(" + i.find(".js-slider-image").attr("src") + ")"), o.css("background-image", "url(" + r.find(".js-slider-image").attr("src") + ")")
                },
                r = function(e) {
                    var n = t.find(".js-slider-item").eq(e),
                        i = t.find(".js-slider-item.Wallop-item--hidePrevious");
                    n.find(".js-slider-animated").velocity("stop").velocity("transition.slideDownIn", {
                        stagger: 250,
                        duration: 1500,
                        display: null
                    }), i.find(".js-slider-animated").velocity("stop").velocity("transition.slideDownOut", {
                        duration: 1500,
                        display: null
                    })
                };
            n.on("change", function(e) {
                i(), r(e.detail.currentItemIndex)
            })
        })
    }(),
    function() {
        var t = e(".js-animate-number");
        t.each(function() {
            var t = e(this),
                n = t.data("number");
            t.one("inview", function() {
                t.animateNumber({
                    number: n,
                    numberStep: e.animateNumber.numberStepFactories.separator(".")
                }, 3e3)
            })
        })
    }(),
    function() {
        var t = e(".js-tabs");
        t.easytabs({
            tabActiveClass: "tab__title--active",
            updateHash: !1
        })
    }(),
    function() {
        var t = e(".js-thumb-product");
        if (t.length) {
            var n = 6e3,
                i = "thumb-product--active",
                r = function() {
                    t.eq(Math.floor(Math.random() * t.length)).addClass(i), t.eq(Math.floor(Math.random() * t.length)).addClass(i)
                };
            r(), setInterval(function() {
                t.removeClass(i), r()
            }, n)
        }
    }(),
    function() {
        e("body").fitVids()
    }()
}(jQuery);