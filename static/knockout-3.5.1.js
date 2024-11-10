/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function() {
    (function(e) {
        var s = this || (0,
        eval)("this")
          , n = s.document
          , i = s.navigator
          , t = s.jQuery
          , o = s.JSON;
        t || "undefined" == typeof jQuery || (t = jQuery),
        function(e) {
            "function" == typeof define && define.amd ? define(["exports", "require"], e) : e("object" == typeof exports && "object" == typeof module ? module.exports || exports : s.ko = {})
        }(function(a, r) {
            function b(e, t) {
                return (null === e || typeof e in j) && e === t
            }
            function _(t, n) {
                var s;
                return function() {
                    s || (s = c.a.setTimeout(function() {
                        s = e,
                        t()
                    }, n))
                }
            }
            function y(e, t) {
                var n;
                return function() {
                    clearTimeout(n),
                    n = c.a.setTimeout(e, t)
                }
            }
            function C(e, t) {
                t && "change" !== t ? "beforeChange" === t ? this.pc(e) : this.gb(e, t) : this.qc(e)
            }
            function x(e, t) {
                null !== t && t.s && t.s()
            }
            function E(e, t) {
                var n = this.qd
                  , s = n[l];
                s.ra || (this.Qb && this.mb[t] ? (n.uc(t, e, this.mb[t]),
                this.mb[t] = null,
                --this.Qb) : s.I[t] || n.uc(t, e, s.J ? {
                    da: e
                } : n.$c(e)),
                e.Ja && e.gd())
            }
            c = "undefined" != typeof a ? a : {},
            c.b = function(e, t) {
                for (var n = e.split("."), s = c, o = 0; o < n.length - 1; o++)
                    s = s[n[o]];
                s[n[n.length - 1]] = t
            }
            ,
            c.L = function(e, t, n) {
                e[t] = n
            }
            ,
            c.version = "3.5.1",
            c.b("version", c.version),
            c.options = {
                deferUpdates: !1,
                useOnlyNativeEvents: !1,
                foreachHidesDestroyed: !1
            },
            c.a = function() {
                function d(e, t) {
                    for (var n in e)
                        l.call(e, n) && t(n, e[n])
                }
                function m(e, t) {
                    if (t)
                        for (var n in t)
                            l.call(t, n) && (e[n] = t[n]);
                    return e
                }
                function f(e, t) {
                    return e.__proto__ = t,
                    e
                }
                function p(e, t, n, s) {
                    var o = e[t].match(r) || [];
                    c.a.D(n.match(r), function(e) {
                        c.a.Na(o, e, s)
                    }),
                    e[t] = o.join(" ")
                }
                var l = Object.prototype.hasOwnProperty
                  , g = {
                    __proto__: []
                }instanceof Array
                  , b = "function" == typeof Symbol
                  , u = {}
                  , v = {};
                u[i && /Firefox\/2/i.test(i.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"],
                u.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "),
                d(u, function(e, t) {
                    if (t.length)
                        for (var n = 0, s = t.length; n < s; n++)
                            v[t[n]] = e
                });
                var h, j = {
                    propertychange: !0
                }, a = n && function() {
                    for (var t = 3, s = n.createElement("div"), o = s.getElementsByTagName("i"); s.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->",
                    o[0]; )
                        ;
                    return 4 < t ? t : e
                }(), r = /\S+/g;
                return {
                    Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                    D: function(e, t, n) {
                        for (var s = 0, o = e.length; s < o; s++)
                            t.call(n, e[s], s, e)
                    },
                    A: "function" == typeof Array.prototype.indexOf ? function(e, t) {
                        return Array.prototype.indexOf.call(e, t)
                    }
                    : function(e, t) {
                        for (var n = 0, s = e.length; n < s; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }
                    ,
                    Lb: function(t, n, s) {
                        for (var o = 0, i = t.length; o < i; o++)
                            if (n.call(s, t[o], o, t))
                                return t[o];
                        return e
                    },
                    Pa: function(e, t) {
                        var n = c.a.A(e, t);
                        0 < n ? e.splice(n, 1) : 0 === n && e.shift()
                    },
                    wc: function(e) {
                        var t = [];
                        return e && c.a.D(e, function(e) {
                            0 > c.a.A(t, e) && t.push(e)
                        }),
                        t
                    },
                    Mb: function(e, t, n) {
                        if (o = [],
                        e)
                            for (var o, s = 0, i = e.length; s < i; s++)
                                o.push(t.call(n, e[s], s));
                        return o
                    },
                    jb: function(e, t, n) {
                        if (o = [],
                        e)
                            for (var o, s = 0, i = e.length; s < i; s++)
                                t.call(n, e[s], s) && o.push(e[s]);
                        return o
                    },
                    Nb: function(e, t) {
                        if (t instanceof Array)
                            e.push.apply(e, t);
                        else
                            for (var n = 0, s = t.length; n < s; n++)
                                e.push(t[n]);
                        return e
                    },
                    Na: function(e, t, n) {
                        var s = c.a.A(c.a.bc(e), t);
                        0 > s ? n && e.push(t) : n || e.splice(s, 1)
                    },
                    Ba: g,
                    extend: m,
                    setPrototypeOf: f,
                    Ab: g ? f : m,
                    P: d,
                    Ga: function(e, t, n) {
                        if (!e)
                            return e;
                        var s, o = {};
                        for (s in e)
                            l.call(e, s) && (o[s] = t.call(n, e[s], s, e));
                        return o
                    },
                    Tb: function(e) {
                        for (; e.firstChild; )
                            c.removeNode(e.firstChild)
                    },
                    Yb: function(e) {
                        e = c.a.la(e);
                        for (var s = (e[0] && e[0].ownerDocument || n).createElement("div"), t = 0, o = e.length; t < o; t++)
                            s.appendChild(c.oa(e[t]));
                        return s
                    },
                    Ca: function(e, t) {
                        for (var s, n = 0, i = e.length, o = []; n < i; n++)
                            s = e[n].cloneNode(!0),
                            o.push(t ? c.oa(s) : s);
                        return o
                    },
                    va: function(e, t) {
                        if (c.a.Tb(e),
                        t)
                            for (var n = 0, s = t.length; n < s; n++)
                                e.appendChild(t[n])
                    },
                    Xc: function(e, t) {
                        if (s = e.nodeType ? [e] : e,
                        0 < s.length) {
                            for (var s, i = s[0], a = i.parentNode, n = 0, o = t.length; n < o; n++)
                                a.insertBefore(t[n], i);
                            n = 0;
                            for (o = s.length; n < o; n++)
                                c.removeNode(s[n])
                        }
                    },
                    Ua: function(e, t) {
                        if (e.length) {
                            for (t = 8 === t.nodeType && t.parentNode || t; e.length && e[0].parentNode !== t; )
                                e.splice(0, 1);
                            for (; 1 < e.length && e[e.length - 1].parentNode !== t; )
                                e.length--;
                            if (1 < e.length) {
                                var n = e[0]
                                  , s = e[e.length - 1];
                                for (e.length = 0; n !== s; )
                                    e.push(n),
                                    n = n.nextSibling;
                                e.push(s)
                            }
                        }
                        return e
                    },
                    Zc: function(e, t) {
                        7 > a ? e.setAttribute("selected", t) : e.selected = t
                    },
                    Db: function(t) {
                        return null === t || t === e ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    },
                    Ud: function(e, t) {
                        return e = e || "",
                        !(t.length > e.length) && e.substring(0, t.length) === t
                    },
                    vd: function(e, t) {
                        if (e === t)
                            return !0;
                        if (11 === e.nodeType)
                            return !1;
                        if (t.contains)
                            return t.contains(1 !== e.nodeType ? e.parentNode : e);
                        if (t.compareDocumentPosition)
                            return 16 == (t.compareDocumentPosition(e) & 16);
                        for (; e && e != t; )
                            e = e.parentNode;
                        return !!e
                    },
                    Sb: function(e) {
                        return c.a.vd(e, e.ownerDocument.documentElement)
                    },
                    kd: function(e) {
                        return !!c.a.Lb(e, c.a.Sb)
                    },
                    R: function(e) {
                        return e && e.tagName && e.tagName.toLowerCase()
                    },
                    Ac: function(e) {
                        return c.onError ? function() {
                            try {
                                return e.apply(this, arguments)
                            } catch (e) {
                                throw c.onError && c.onError(e),
                                e
                            }
                        }
                        : e
                    },
                    setTimeout: function(e, t) {
                        return setTimeout(c.a.Ac(e), t)
                    },
                    Gc: function(e) {
                        setTimeout(function() {
                            throw c.onError && c.onError(e),
                            e
                        }, 0)
                    },
                    B: function(e, n, s) {
                        if (o = c.a.Ac(s),
                        s = j[n],
                        c.options.useOnlyNativeEvents || s || !t)
                            if (s || "function" != typeof e.addEventListener)
                                if ("undefined" != typeof e.attachEvent) {
                                    var o, i = function(t) {
                                        o.call(e, t)
                                    }, a = "on" + n;
                                    e.attachEvent(a, i),
                                    c.a.K.za(e, function() {
                                        e.detachEvent(a, i)
                                    })
                                } else
                                    throw Error("Browser doesn't support addEventListener or attachEvent");
                            else
                                e.addEventListener(n, o, !1);
                        else
                            h || (h = "function" == typeof t(e).on ? "on" : "bind"),
                            t(e)[h](n, o)
                    },
                    Fb: function(e, o) {
                        if (!e || !e.nodeType)
                            throw Error("element must be a DOM node when calling triggerEvent");
                        var i;
                        if ("input" === c.a.R(e) && e.type && "click" == o.toLowerCase() ? (i = e.type,
                        i = "checkbox" == i || "radio" == i) : i = !1,
                        c.options.useOnlyNativeEvents || !t || i)
                            if ("function" == typeof n.createEvent)
                                if ("function" == typeof e.dispatchEvent)
                                    i = n.createEvent(v[o] || "HTMLEvents"),
                                    i.initEvent(o, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e),
                                    e.dispatchEvent(i);
                                else
                                    throw Error("The supplied element doesn't support dispatchEvent");
                            else if (i && e.click)
                                e.click();
                            else if ("undefined" != typeof e.fireEvent)
                                e.fireEvent("on" + o);
                            else
                                throw Error("Browser doesn't support triggering events");
                        else
                            t(e).trigger(o)
                    },
                    f: function(e) {
                        return c.O(e) ? e() : e
                    },
                    bc: function(e) {
                        return c.O(e) ? e.v() : e
                    },
                    Eb: function(e, t, n) {
                        var s;
                        t && ("object" == typeof e.classList ? (s = e.classList[n ? "add" : "remove"],
                        c.a.D(t.match(r), function(t) {
                            s.call(e.classList, t)
                        })) : "string" == typeof e.className.baseVal ? p(e.className, "baseVal", t, n) : p(e, "className", t, n))
                    },
                    Bb: function(t, n) {
                        var o, s = c.a.f(n);
                        (null === s || s === e) && (s = ""),
                        o = c.h.firstChild(t),
                        !o || 3 != o.nodeType || c.h.nextSibling(o) ? c.h.va(t, [t.ownerDocument.createTextNode(s)]) : o.data = s,
                        c.a.Ad(t)
                    },
                    Yc: function(e, t) {
                        if (e.name = t,
                        7 >= a)
                            try {
                                var s = e.name.replace(/[&<>'"]/g, function(e) {
                                    return "&#" + e.charCodeAt(0) + ";"
                                });
                                e.mergeAttributes(n.createElement("<input name='" + s + "'/>"), !1)
                            } catch {}
                    },
                    Ad: function(e) {
                        9 <= a && (e = 1 == e.nodeType ? e : e.parentNode,
                        e.style && (e.style.zoom = e.style.zoom))
                    },
                    wd: function(e) {
                        if (a) {
                            var t = e.style.width;
                            e.style.width = 0,
                            e.style.width = t
                        }
                    },
                    Pd: function(e, t) {
                        e = c.a.f(e),
                        t = c.a.f(t);
                        for (var s = [], n = e; n <= t; n++)
                            s.push(n);
                        return s
                    },
                    la: function(e) {
                        for (var n = [], t = 0, s = e.length; t < s; t++)
                            n.push(e[t]);
                        return n
                    },
                    Da: function(e) {
                        return b ? Symbol(e) : e
                    },
                    Zd: 6 === a,
                    $d: 7 === a,
                    W: a,
                    Lc: function(e, t) {
                        for (var s = c.a.la(e.getElementsByTagName("input")).concat(c.a.la(e.getElementsByTagName("textarea"))), i = "string" == typeof t ? function(e) {
                            return e.name === t
                        }
                        : function(e) {
                            return t.test(e.name)
                        }
                        , o = [], n = s.length - 1; 0 <= n; n--)
                            i(s[n]) && o.push(s[n]);
                        return o
                    },
                    Nd: function(e) {
                        return "string" == typeof e && (e = c.a.Db(e)) ? o && o.parse ? o.parse(e) : new Function("return " + e)() : null
                    },
                    hc: function(e, t, n) {
                        if (!o || !o.stringify)
                            throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return o.stringify(c.a.f(e), t, n)
                    },
                    Od: function(e, t, s) {
                        s = s || {};
                        var o, i, a, r, m, l = s.params || {}, u = s.includeFields || this.Jc, h = e;
                        if ("object" == typeof e && "form" === c.a.R(e))
                            for (h = e.action,
                            a = u.length - 1; 0 <= a; a--)
                                for (r = c.a.Lc(e, u[a]),
                                i = r.length - 1; 0 <= i; i--)
                                    l[r[i].name] = r[i].value;
                        t = c.a.f(t),
                        o = n.createElement("form"),
                        o.style.display = "none",
                        o.action = h,
                        o.method = "post";
                        for (m in t)
                            e = n.createElement("input"),
                            e.type = "hidden",
                            e.name = m,
                            e.value = c.a.hc(c.a.f(t[m])),
                            o.appendChild(e);
                        d(l, function(e, t) {
                            var s = n.createElement("input");
                            s.type = "hidden",
                            s.name = e,
                            s.value = t,
                            o.appendChild(s)
                        }),
                        n.body.appendChild(o),
                        s.submitter ? s.submitter(o) : o.submit(),
                        setTimeout(function() {
                            o.parentNode.removeChild(o)
                        }, 0)
                    }
                }
            }(),
            c.b("utils", c.a),
            c.b("utils.arrayForEach", c.a.D),
            c.b("utils.arrayFirst", c.a.Lb),
            c.b("utils.arrayFilter", c.a.jb),
            c.b("utils.arrayGetDistinctValues", c.a.wc),
            c.b("utils.arrayIndexOf", c.a.A),
            c.b("utils.arrayMap", c.a.Mb),
            c.b("utils.arrayPushAll", c.a.Nb),
            c.b("utils.arrayRemoveItem", c.a.Pa),
            c.b("utils.cloneNodes", c.a.Ca),
            c.b("utils.createSymbolOrString", c.a.Da),
            c.b("utils.extend", c.a.extend),
            c.b("utils.fieldsIncludedWithJsonPost", c.a.Jc),
            c.b("utils.getFormFields", c.a.Lc),
            c.b("utils.objectMap", c.a.Ga),
            c.b("utils.peekObservable", c.a.bc),
            c.b("utils.postJson", c.a.Od),
            c.b("utils.parseJson", c.a.Nd),
            c.b("utils.registerEventHandler", c.a.B),
            c.b("utils.stringifyJson", c.a.hc),
            c.b("utils.range", c.a.Pd),
            c.b("utils.toggleDomNodeCssClass", c.a.Eb),
            c.b("utils.triggerEvent", c.a.Fb),
            c.b("utils.unwrapObservable", c.a.f),
            c.b("utils.objectForEach", c.a.P),
            c.b("utils.addOrRemoveItem", c.a.Na),
            c.b("utils.setTextContent", c.a.Bb),
            c.b("unwrap", c.a.f),
            Function.prototype.bind || (Function.prototype.bind = function(e) {
                var n, t = this;
                return 1 === arguments.length ? function() {
                    return t.apply(e, arguments)
                }
                : (n = Array.prototype.slice.call(arguments, 1),
                function() {
                    var s = n.slice(0);
                    return s.push.apply(s, arguments),
                    t.apply(e, s)
                }
                )
            }
            ),
            c.a.g = new function() {
                var n, o, i = 0, t = "__ko__" + (new Date).getTime(), s = {};
                return c.a.W ? (n = function(n, o) {
                    var a = n[t];
                    if (!a || "null" === a || !s[a]) {
                        if (!o)
                            return e;
                        a = n[t] = "ko" + i++,
                        s[a] = {}
                    }
                    return s[a]
                }
                ,
                o = function(e) {
                    var n = e[t];
                    return !!n && (delete s[n],
                    e[t] = null,
                    !0)
                }
                ) : (n = function(e, n) {
                    var s = e[t];
                    return !s && n && (s = e[t] = {}),
                    s
                }
                ,
                o = function(e) {
                    return !!e[t] && (delete e[t],
                    !0)
                }
                ),
                {
                    get: function(e, t) {
                        var s = n(e, !1);
                        return s && s[t]
                    },
                    set: function(t, s, o) {
                        (t = n(t, o !== e)) && (t[s] = o)
                    },
                    Ub: function(e, t, s) {
                        return e = n(e, !0),
                        e[t] || (e[t] = s)
                    },
                    clear: o,
                    Z: function() {
                        return i++ + t
                    }
                }
            }
            ,
            c.b("utils.domData", c.a.g),
            c.b("utils.domData.clear", c.a.g.clear),
            c.a.K = new function() {
                function n(t, n) {
                    var o = c.a.g.get(t, s);
                    return o === e && n && (o = [],
                    c.a.g.set(t, s, o)),
                    o
                }
                function o(e) {
                    if (t = n(e, !1),
                    t)
                        for (var t = t.slice(0), s = 0; s < t.length; s++)
                            t[s](e);
                    c.a.g.clear(e),
                    c.a.K.cleanExternalData(e),
                    a[e.nodeType] && i(e.childNodes, !0)
                }
                function i(e, t) {
                    for (var i, s = [], n = 0; n < e.length; n++)
                        if ((!t || 8 === e[n].nodeType) && (o(s[s.length] = i = e[n]),
                        e[n] !== i))
                            for (; n-- && -1 == c.a.A(s, e[n]); )
                                ;
                }
                var s = c.a.g.Z()
                  , r = {
                    1: !0,
                    8: !0,
                    9: !0
                }
                  , a = {
                    1: !0,
                    9: !0
                };
                return {
                    za: function(e, t) {
                        if ("function" != typeof t)
                            throw Error("Callback must be a function");
                        n(e, !0).push(t)
                    },
                    yb: function(t, o) {
                        var i = n(t, !1);
                        i && (c.a.Pa(i, o),
                        0 == i.length && c.a.g.set(t, s, e))
                    },
                    oa: function(e) {
                        return c.u.G(function() {
                            r[e.nodeType] && (o(e),
                            a[e.nodeType] && i(e.getElementsByTagName("*")))
                        }),
                        e
                    },
                    removeNode: function(e) {
                        c.oa(e),
                        e.parentNode && e.parentNode.removeChild(e)
                    },
                    cleanExternalData: function(e) {
                        t && "function" == typeof t.cleanData && t.cleanData([e])
                    }
                }
            }
            ,
            c.oa = c.a.K.oa,
            c.removeNode = c.a.K.removeNode,
            c.b("cleanNode", c.oa),
            c.b("removeNode", c.removeNode),
            c.b("utils.domNodeDisposal", c.a.K),
            c.b("utils.domNodeDisposal.addDisposeCallback", c.a.K.za),
            c.b("utils.domNodeDisposal.removeDisposeCallback", c.a.K.yb),
            function() {
                var l = [0, "", ""]
                  , o = [1, "<table>", "</table>"]
                  , i = [3, "<table><tbody><tr>", "</tr></tbody></table>"]
                  , a = [1, "<select multiple='multiple'>", "</select>"]
                  , d = {
                    thead: o,
                    tbody: o,
                    tfoot: o,
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: i,
                    th: i,
                    option: a,
                    optgroup: a
                }
                  , r = 8 >= c.a.W;
                c.a.ua = function(e, o) {
                    if (t) {
                        if (t.parseHTML)
                            i = t.parseHTML(e, o) || [];
                        else if ((i = t.clean([e], o)) && i[0]) {
                            for (a = i[0]; a.parentNode && 11 !== a.parentNode.nodeType; )
                                a = a.parentNode;
                            a.parentNode && a.parentNode.removeChild(a)
                        }
                    } else {
                        (i = o) || (i = n);
                        var i, a = i.parentWindow || i.defaultView || s, m = c.a.Db(e).toLowerCase(), u = i.createElement("div"), h = (m = m.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && d[m[1]] || l, m = h[0], h = "ignored<div>" + h[1] + e + h[2] + "</div>";
                        for ("function" == typeof a.innerShiv ? u.appendChild(a.innerShiv(h)) : (r && i.body.appendChild(u),
                        u.innerHTML = h,
                        r && u.parentNode.removeChild(u)); m--; )
                            u = u.lastChild;
                        i = c.a.la(u.lastChild.childNodes)
                    }
                    return i
                }
                ,
                c.a.Md = function(e, t) {
                    var n = c.a.ua(e, t);
                    return n.length && n[0].parentElement || c.a.Yb(n)
                }
                ,
                c.a.fc = function(n, s) {
                    if (c.a.Tb(n),
                    s = c.a.f(s),
                    null !== s && s !== e)
                        if ("string" != typeof s && (s = s.toString()),
                        t)
                            t(n).html(s);
                        else
                            for (var i = c.a.ua(s, n.ownerDocument), o = 0; o < i.length; o++)
                                n.appendChild(i[o])
                }
            }(),
            c.b("utils.parseHtmlFragment", c.a.ua),
            c.b("utils.setHtml", c.a.fc),
            c.aa = function() {
                function n(e, t) {
                    if (e)
                        if (8 == e.nodeType)
                            s = c.aa.Uc(e.nodeValue),
                            s != null && t.push({
                                ud: e,
                                Kd: s
                            });
                        else if (1 == e.nodeType)
                            for (var s = 0, o = e.childNodes, i = o.length; s < i; s++)
                                n(o[s], t)
                }
                var t = {};
                return {
                    Xb: function(e) {
                        if ("function" != typeof e)
                            throw Error("You can only pass a function to ko.memoization.memoize()");
                        var n = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        return t[n] = e,
                        "<!--[ko_memo:" + n + "]-->"
                    },
                    bd: function(n, s) {
                        var o = t[n];
                        if (o === e)
                            throw Error("Couldn't find any memo with ID " + n + ". Perhaps it's already been unmemoized.");
                        try {
                            return o.apply(null, s || []),
                            !0
                        } finally {
                            delete t[n]
                        }
                    },
                    cd: function(e, t) {
                        o = [],
                        n(e, o);
                        for (var s, o, a, i = 0, r = o.length; i < r; i++)
                            s = o[i].ud,
                            a = [s],
                            t && c.a.Nb(a, t),
                            c.aa.bd(o[i].Kd, a),
                            s.nodeValue = "",
                            s.parentNode && s.parentNode.removeChild(s)
                    },
                    Uc: function(e) {
                        return (e = e.match(/^\[ko_memo:(.*?)\]$/)) ? e[1] : null
                    }
                }
            }(),
            c.b("memoization", c.aa),
            c.b("memoization.memoize", c.aa.Xb),
            c.b("memoization.unmemoize", c.aa.bd),
            c.b("memoization.parseMemoText", c.aa.Uc),
            c.b("memoization.unmemoizeDomNodeAndDescendants", c.aa.cd),
            c.na = function() {
                function a() {
                    if (e)
                        for (var i, n = e, s = 0; t < e; )
                            if (i = o[t++]) {
                                if (t > n) {
                                    if (5e3 <= ++s) {
                                        t = e,
                                        c.a.Gc(Error("'Too much recursion' after processing " + s + " task groups."));
                                        break
                                    }
                                    n = e
                                }
                                try {
                                    i()
                                } catch (e) {
                                    c.a.Gc(e)
                                }
                            }
                }
                function r() {
                    a(),
                    t = e = o.length = 0
                }
                var i, o = [], e = 0, l = 1, t = 0;
                return s.MutationObserver ? i = function(e) {
                    var t = n.createElement("div");
                    return new MutationObserver(e).observe(t, {
                        attributes: !0
                    }),
                    function() {
                        t.classList.toggle("foo")
                    }
                }(r) : i = n && "onreadystatechange"in n.createElement("script") ? function(e) {
                    var t = n.createElement("script");
                    t.onreadystatechange = function() {
                        t.onreadystatechange = null,
                        n.documentElement.removeChild(t),
                        t = null,
                        e()
                    }
                    ,
                    n.documentElement.appendChild(t)
                }
                : function(e) {
                    setTimeout(e, 0)
                }
                ,
                {
                    scheduler: i,
                    zb: function(t) {
                        return e || c.na.scheduler(r),
                        o[e++] = t,
                        l++
                    },
                    cancel: function(n) {
                        n = n - (l - e),
                        n >= t && n < e && (o[n] = null)
                    },
                    resetForTesting: function() {
                        var n = e - t;
                        return t = e = o.length = 0,
                        n
                    },
                    Sd: a
                }
            }(),
            c.b("tasks", c.na),
            c.b("tasks.schedule", c.na.zb),
            c.b("tasks.runEarly", c.na.Sd),
            c.Ta = {
                throttle: function(e, t) {
                    e.throttleEvaluation = t;
                    var n = null;
                    return c.$({
                        read: e,
                        write: function(s) {
                            clearTimeout(n),
                            n = c.a.setTimeout(function() {
                                e(s)
                            }, t)
                        }
                    })
                },
                rateLimit: function(e, t) {
                    var n, s, o;
                    "number" == typeof t ? s = t : (s = t.timeout,
                    n = t.method),
                    e.Hb = !1,
                    o = "function" == typeof n ? n : "notifyWhenChangesStop" == n ? y : _,
                    e.ub(function(e) {
                        return o(e, s, t)
                    })
                },
                deferred: function(t, n) {
                    if (!0 !== n)
                        throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                    t.Hb || (t.Hb = !0,
                    t.ub(function(n) {
                        var o, s = !1;
                        return function() {
                            if (!s) {
                                c.na.cancel(o),
                                o = c.na.zb(n);
                                try {
                                    s = !0,
                                    t.notifySubscribers(e, "dirty")
                                } finally {
                                    s = !1
                                }
                            }
                        }
                    }))
                },
                notify: function(e, t) {
                    e.equalityComparer = "always" == t ? null : b
                }
            },
            j = {
                undefined: 1,
                boolean: 1,
                number: 1,
                string: 1
            },
            c.b("extenders", c.Ta),
            c.ic = function(e, t, n) {
                this.da = e,
                this.lc = t,
                this.mc = n,
                this.Ib = !1,
                this.fb = this.Jb = null,
                c.L(this, "dispose", this.s),
                c.L(this, "disposeWhenNodeIsRemoved", this.l)
            }
            ,
            c.ic.prototype.s = function() {
                this.Ib || (this.fb && c.a.K.yb(this.Jb, this.fb),
                this.Ib = !0,
                this.mc(),
                this.da = this.lc = this.mc = this.Jb = this.fb = null)
            }
            ,
            c.ic.prototype.l = function(e) {
                this.Jb = e,
                c.a.K.za(e, this.fb = this.s.bind(this))
            }
            ,
            c.T = function() {
                c.a.Ab(this, u),
                u.qb(this)
            }
            ,
            u = {
                qb: function(e) {
                    e.U = {
                        change: []
                    },
                    e.sc = 1
                },
                subscribe: function(e, t, n) {
                    var o, s = this;
                    return n = n || "change",
                    o = new c.ic(s,t ? e.bind(t) : e,function() {
                        c.a.Pa(s.U[n], o),
                        s.hb && s.hb(n)
                    }
                    ),
                    s.Qa && s.Qa(n),
                    s.U[n] || (s.U[n] = []),
                    s.U[n].push(o),
                    o
                },
                notifySubscribers: function(e, t) {
                    if (t = t || "change",
                    "change" === t && this.Gb(),
                    this.Wa(t)) {
                        var n, s, o = "change" === t && this.ed || this.U[t].slice(0);
                        try {
                            c.u.xc();
                            for (n = 0; s = o[n]; ++n)
                                s.Ib || s.lc(e)
                        } finally {
                            c.u.end()
                        }
                    }
                },
                ob: function() {
                    return this.sc
                },
                Dd: function(e) {
                    return this.ob() !== e
                },
                Gb: function() {
                    ++this.sc
                },
                ub: function(e) {
                    var n, s, o, i, a, r, t = this, l = c.O(t);
                    t.gb || (t.gb = t.notifySubscribers,
                    t.notifySubscribers = C),
                    r = e(function() {
                        t.Ja = !1,
                        l && n === t && (n = t.nc ? t.nc() : t());
                        var e = a || o && t.sb(s, n);
                        o = a = i = !1,
                        e && t.gb(s = n)
                    }),
                    t.qc = function(e, s) {
                        s && t.Ja || (o = !s),
                        t.ed = t.U.change.slice(0),
                        t.Ja = i = !0,
                        n = e,
                        r()
                    }
                    ,
                    t.pc = function(e) {
                        i || (s = e,
                        t.gb(e, "beforeChange"))
                    }
                    ,
                    t.rc = function() {
                        o = !0
                    }
                    ,
                    t.gd = function() {
                        t.sb(s, t.v(!0)) && (a = !0)
                    }
                },
                Wa: function(e) {
                    return this.U[e] && this.U[e].length
                },
                Bd: function(e) {
                    if (e)
                        return this.U[e] && this.U[e].length || 0;
                    var t = 0;
                    return c.a.P(this.U, function(e, n) {
                        "dirty" !== e && (t += n.length)
                    }),
                    t
                },
                sb: function(e, t) {
                    return !this.equalityComparer || !this.equalityComparer(e, t)
                },
                toString: function() {
                    return "[object Object]"
                },
                extend: function(e) {
                    var t = this;
                    return e && c.a.P(e, function(e, n) {
                        var s = c.Ta[e];
                        "function" == typeof s && (t = s(t, n) || t)
                    }),
                    t
                }
            },
            c.L(u, "init", u.qb),
            c.L(u, "subscribe", u.subscribe),
            c.L(u, "extend", u.extend),
            c.L(u, "getSubscriptionsCount", u.Bd),
            c.a.Ba && c.a.setPrototypeOf(u, Function.prototype),
            c.T.fn = u,
            c.Qc = function(e) {
                return e != null && "function" == typeof e.subscribe && "function" == typeof e.notifySubscribers
            }
            ,
            c.b("subscribable", c.T),
            c.b("isSubscribable", c.Qc),
            c.S = c.u = function() {
                function t(t) {
                    s.push(e),
                    e = t
                }
                function n() {
                    e = s.pop()
                }
                var e, s = [], o = 0;
                return {
                    xc: t,
                    end: n,
                    cc: function(t) {
                        if (e) {
                            if (!c.Qc(t))
                                throw Error("Only subscribable things can act as dependencies");
                            e.od.call(e.pd, t, t.fd || (t.fd = ++o))
                        }
                    },
                    G: function(e, s, o) {
                        try {
                            return t(),
                            e.apply(s, o || [])
                        } finally {
                            n()
                        }
                    },
                    qa: function() {
                        if (e)
                            return e.o.qa()
                    },
                    Va: function() {
                        if (e)
                            return e.o.Va()
                    },
                    Ya: function() {
                        if (e)
                            return e.Ya
                    },
                    o: function() {
                        if (e)
                            return e.o
                    }
                }
            }(),
            c.b("computedContext", c.S),
            c.b("computedContext.getDependenciesCount", c.S.qa),
            c.b("computedContext.getDependencies", c.S.Va),
            c.b("computedContext.isInitial", c.S.Ya),
            c.b("computedContext.registerDependency", c.S.cc),
            c.b("ignoreDependencies", c.Yd = c.u.G),
            f = c.a.Da("_latestValue"),
            c.ta = function(e) {
                function t() {
                    return 0 < arguments.length ? (t.sb(t[f], arguments[0]) && (t.ya(),
                    t[f] = arguments[0],
                    t.xa()),
                    this) : (c.u.cc(t),
                    t[f])
                }
                return t[f] = e,
                c.a.Ba || c.a.extend(t, c.T.fn),
                c.T.fn.qb(t),
                c.a.Ab(t, h),
                c.options.deferUpdates && c.Ta.deferred(t, !0),
                t
            }
            ,
            h = {
                equalityComparer: b,
                v: function() {
                    return this[f]
                },
                xa: function() {
                    this.notifySubscribers(this[f], "spectate"),
                    this.notifySubscribers(this[f])
                },
                ya: function() {
                    this.notifySubscribers(this[f], "beforeChange")
                }
            },
            c.a.Ba && c.a.setPrototypeOf(h, c.T.fn),
            m = c.ta.Ma = "__ko_proto__",
            h[m] = c.ta,
            c.O = function(e) {
                if ((e = "function" == typeof e && e[m]) && e !== h[m] && e !== c.o.fn[m])
                    throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
                return !!e
            }
            ,
            c.Za = function(e) {
                return "function" == typeof e && (e[m] === h[m] || e[m] === c.o.fn[m] && e.Nc)
            }
            ,
            c.b("observable", c.ta),
            c.b("isObservable", c.O),
            c.b("isWriteableObservable", c.Za),
            c.b("isWritableObservable", c.Za),
            c.b("observable.fn", h),
            c.L(h, "peek", h.v),
            c.L(h, "valueHasMutated", h.xa),
            c.L(h, "valueWillMutate", h.ya),
            c.Ha = function(e) {
                if (e = e || [],
                "object" != typeof e || !("length"in e))
                    throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                return e = c.ta(e),
                c.a.Ab(e, c.Ha.fn),
                e.extend({
                    trackArrayChanges: !0
                })
            }
            ,
            c.Ha.fn = {
                remove: function(e) {
                    for (var o, n = this.v(), s = [], i = "function" != typeof e || c.O(e) ? function(t) {
                        return t === e
                    }
                    : e, t = 0; t < n.length; t++)
                        if (o = n[t],
                        i(o)) {
                            if (0 === s.length && this.ya(),
                            n[t] !== o)
                                throw Error("Array modified during remove; cannot remove item");
                            s.push(o),
                            n.splice(t, 1),
                            t--
                        }
                    return s.length && this.xa(),
                    s
                },
                removeAll: function(t) {
                    if (t === e) {
                        var n = this.v()
                          , s = n.slice(0);
                        return this.ya(),
                        n.splice(0, n.length),
                        this.xa(),
                        s
                    }
                    return t ? this.remove(function(e) {
                        return 0 <= c.a.A(t, e)
                    }) : []
                },
                destroy: function(e) {
                    var t, n, s = this.v(), o = "function" != typeof e || c.O(e) ? function(t) {
                        return t === e
                    }
                    : e;
                    this.ya();
                    for (t = s.length - 1; 0 <= t; t--)
                        n = s[t],
                        o(n) && (n._destroy = !0);
                    this.xa()
                },
                destroyAll: function(t) {
                    return t === e ? this.destroy(function() {
                        return !0
                    }) : t ? this.destroy(function(e) {
                        return 0 <= c.a.A(t, e)
                    }) : []
                },
                indexOf: function(e) {
                    var t = this();
                    return c.a.A(t, e)
                },
                replace: function(e, t) {
                    var n = this.indexOf(e);
                    0 <= n && (this.ya(),
                    this.v()[n] = t,
                    this.xa())
                },
                sorted: function(e) {
                    var t = this().slice(0);
                    return e ? t.sort(e) : t.sort()
                },
                reversed: function() {
                    return this().slice(0).reverse()
                }
            },
            c.a.Ba && c.a.setPrototypeOf(c.Ha.fn, c.ta.fn),
            c.a.D("pop push reverse shift sort splice unshift".split(" "), function(e) {
                c.Ha.fn[e] = function() {
                    var n, t = this.v();
                    return this.ya(),
                    this.zc(t, e, arguments),
                    n = t[e].apply(t, arguments),
                    this.xa(),
                    n === t ? this : n
                }
            }),
            c.a.D(["slice"], function(e) {
                c.Ha.fn[e] = function() {
                    var t = this();
                    return t[e].apply(t, arguments)
                }
            }),
            c.Pc = function(e) {
                return c.O(e) && "function" == typeof e.remove && "function" == typeof e.push
            }
            ,
            c.b("observableArray", c.Ha),
            c.b("isObservableArray", c.Pc),
            c.Ta.trackArrayChanges = function(t, n) {
                function h() {
                    function e() {
                        if (o) {
                            var e, n = [].concat(t.v() || []);
                            t.Wa("arrayChange") && ((!s || 1 < o) && (s = c.a.Pb(l, n, t.Ob)),
                            e = s),
                            l = n,
                            s = null,
                            o = 0,
                            e && e.length && t.notifySubscribers(e, "arrayChange")
                        }
                    }
                    i ? e() : (i = !0,
                    r = t.subscribe(function() {
                        ++o
                    }, null, "spectate"),
                    l = [].concat(t.v() || []),
                    s = null,
                    a = t.subscribe(e))
                }
                if (t.Ob = {},
                n && "object" == typeof n && c.a.extend(t.Ob, n),
                t.Ob.sparse = !0,
                !t.zc) {
                    var a, r, l, i = !1, s = null, o = 0, d = t.Qa, u = t.hb;
                    t.Qa = function(e) {
                        d && d.call(t, e),
                        "arrayChange" === e && h()
                    }
                    ,
                    t.hb = function(n) {
                        u && u.call(t, n),
                        "arrayChange" !== n || t.Wa("arrayChange") || (a && a.s(),
                        r && r.s(),
                        r = a = null,
                        i = !1,
                        l = e)
                    }
                    ,
                    t.zc = function(e, t, n) {
                        function d(e, t, n) {
                            return u[u.length] = {
                                status: e,
                                value: t,
                                index: n
                            }
                        }
                        if (i && !o) {
                            var u = []
                              , a = e.length
                              , l = n.length
                              , r = 0;
                            switch (t) {
                            case "push":
                                r = a;
                            case "unshift":
                                for (t = 0; t < l; t++)
                                    d("added", n[t], r + t);
                                break;
                            case "pop":
                                r = a - 1;
                            case "shift":
                                a && d("deleted", e[r], r);
                                break;
                            case "splice":
                                t = Math.min(Math.max(0, 0 > n[0] ? a + n[0] : n[0]), a);
                                for (var a = 1 === l ? a : Math.min(t + (n[1] || 0), a), l = t + l - 2, r = Math.max(a, l), h = [], m = [], f = 2; t < r; ++t,
                                ++f)
                                    t < a && m.push(d("deleted", e[t], t)),
                                    t < l && h.push(d("added", n[f], t));
                                c.a.Kc(m, h);
                                break;
                            default:
                                return
                            }
                            s = u
                        }
                    }
                }
            }
            ,
            l = c.a.Da("_state"),
            c.o = c.$ = function(t, n, s) {
                function i() {
                    if (0 < arguments.length) {
                        if ("function" == typeof a)
                            a.apply(o.nb, arguments);
                        else
                            throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    }
                    return o.ra || c.u.cc(i),
                    (o.ka || o.J && i.Xa()) && i.ha(),
                    o.X
                }
                if ("object" == typeof t ? s = t : (s = s || {},
                t && (s.read = t)),
                "function" != typeof s.read)
                    throw Error("Pass a function that returns the value of the ko.computed");
                var a = s.write
                  , o = {
                    X: e,
                    sa: !0,
                    ka: !0,
                    rb: !1,
                    jc: !1,
                    ra: !1,
                    wb: !1,
                    J: !1,
                    Wc: s.read,
                    nb: n || s.owner,
                    l: s.disposeWhenNodeIsRemoved || s.l || null,
                    Sa: s.disposeWhen || s.Sa,
                    Rb: null,
                    I: {},
                    V: 0,
                    Ic: null
                };
                return i[l] = o,
                i.Nc = "function" == typeof a,
                c.a.Ba || c.a.extend(i, c.T.fn),
                c.T.fn.qb(i),
                c.a.Ab(i, d),
                s.pure ? (o.wb = !0,
                o.J = !0,
                c.a.extend(i, w)) : s.deferEvaluation && c.a.extend(i, O),
                c.options.deferUpdates && c.Ta.deferred(i, !0),
                o.l && (o.jc = !0,
                o.l.nodeType || (o.l = null)),
                o.J || s.deferEvaluation || i.ha(),
                o.l && i.ja() && c.a.K.za(o.l, o.Rb = function() {
                    i.s()
                }
                ),
                i
            }
            ;
            var c, l, u, h, m, f, p, g, v, j, d = {
                equalityComparer: b,
                qa: function() {
                    return this[l].V
                },
                Va: function() {
                    var e = [];
                    return c.a.P(this[l].I, function(t, n) {
                        e[n.Ka] = n.da
                    }),
                    e
                },
                Vb: function(e) {
                    if (!this[l].V)
                        return !1;
                    var t = this.Va();
                    return -1 !== c.a.A(t, e) || !!c.a.Lb(t, function(t) {
                        return t.Vb && t.Vb(e)
                    })
                },
                uc: function(e, t, n) {
                    if (this[l].wb && t === this)
                        throw Error("A 'pure' computed must not be called recursively");
                    this[l].I[e] = n,
                    n.Ka = this[l].V++,
                    n.La = t.ob()
                },
                Xa: function() {
                    var e, t, n = this[l].I;
                    for (t in n)
                        if (Object.prototype.hasOwnProperty.call(n, t) && (e = n[t],
                        this.Ia && e.da.Ja || e.da.Dd(e.La)))
                            return !0
                },
                Jd: function() {
                    this.Ia && !this[l].rb && this.Ia(!1)
                },
                ja: function() {
                    var e = this[l];
                    return e.ka || 0 < e.V
                },
                Rd: function() {
                    this.Ja ? this[l].ka && (this[l].sa = !0) : this.Hc()
                },
                $c: function(e) {
                    if (e.Hb) {
                        var t = e.subscribe(this.Jd, this, "dirty")
                          , n = e.subscribe(this.Rd, this);
                        return {
                            da: e,
                            s: function() {
                                t.s(),
                                n.s()
                            }
                        }
                    }
                    return e.subscribe(this.Hc, this)
                },
                Hc: function() {
                    var e = this
                      , t = e.throttleEvaluation;
                    t && 0 <= t ? (clearTimeout(this[l].Ic),
                    this[l].Ic = c.a.setTimeout(function() {
                        e.ha(!0)
                    }, t)) : e.Ia ? e.Ia(!0) : e.ha(!0)
                },
                ha: function(e) {
                    var t = this[l]
                      , n = t.Sa
                      , s = !1;
                    if (!t.rb && !t.ra) {
                        if (t.l && !c.a.Sb(t.l) || n && n()) {
                            if (!t.jc) {
                                this.s();
                                return
                            }
                        } else
                            t.jc = !1;
                        t.rb = !0;
                        try {
                            s = this.zd(e)
                        } finally {
                            t.rb = !1
                        }
                        return s
                    }
                },
                zd: function(t) {
                    var o, n = this[l], s = !1, i = n.wb ? e : !n.V, s = {
                        qd: this,
                        mb: n.I,
                        Qb: n.V
                    };
                    return c.u.xc({
                        pd: s,
                        od: E,
                        o: this,
                        Ya: i
                    }),
                    n.I = {},
                    n.V = 0,
                    o = this.yd(n, s),
                    n.V ? s = this.sb(n.X, o) : (this.s(),
                    s = !0),
                    s && (n.J ? this.Gb() : this.notifySubscribers(n.X, "beforeChange"),
                    n.X = o,
                    this.notifySubscribers(n.X, "spectate"),
                    !n.J && t && this.notifySubscribers(n.X),
                    this.rc && this.rc()),
                    i && this.notifySubscribers(n.X, "awake"),
                    s
                },
                yd: function(e, t) {
                    try {
                        var n = e.Wc;
                        return e.nb ? n.call(e.nb) : n()
                    } finally {
                        c.u.end(),
                        t.Qb && !e.J && c.a.P(t.mb, x),
                        e.sa = e.ka = !1
                    }
                },
                v: function(e) {
                    var t = this[l];
                    return (t.ka && (e || !t.V) || t.J && this.Xa()) && this.ha(),
                    t.X
                },
                ub: function(e) {
                    c.T.fn.ub.call(this, e),
                    this.nc = function() {
                        return this[l].J || (this[l].sa ? this.ha() : this[l].ka = !1),
                        this[l].X
                    }
                    ,
                    this.Ia = function(e) {
                        this.pc(this[l].X),
                        this[l].ka = !0,
                        e && (this[l].sa = !0),
                        this.qc(this, !e)
                    }
                },
                s: function() {
                    var t = this[l];
                    !t.J && t.I && c.a.P(t.I, function(e, t) {
                        t.s && t.s()
                    }),
                    t.l && t.Rb && c.a.K.yb(t.l, t.Rb),
                    t.I = e,
                    t.V = 0,
                    t.ra = !0,
                    t.sa = !1,
                    t.ka = !1,
                    t.J = !1,
                    t.l = e,
                    t.Sa = e,
                    t.Wc = e,
                    this.Nc || (t.nb = e)
                }
            }, w = {
                Qa: function(e) {
                    var s, n = this, t = n[l];
                    !t.ra && t.J && "change" == e && (t.J = !1,
                    t.sa || n.Xa() ? (t.I = null,
                    t.V = 0,
                    n.ha() && n.Gb()) : (s = [],
                    c.a.P(t.I, function(e, t) {
                        s[t.Ka] = e
                    }),
                    c.a.D(s, function(e, s) {
                        var i = t.I[e]
                          , o = n.$c(i.da);
                        o.Ka = s,
                        o.La = i.La,
                        t.I[e] = o
                    }),
                    n.Xa() && n.ha() && n.Gb()),
                    t.ra || n.notifySubscribers(t.X, "awake"))
                },
                hb: function(t) {
                    var n = this[l];
                    n.ra || "change" != t || this.Wa("change") || (c.a.P(n.I, function(e, t) {
                        t.s && (n.I[e] = {
                            da: t.da,
                            Ka: t.Ka,
                            La: t.La
                        },
                        t.s())
                    }),
                    n.J = !0,
                    this.notifySubscribers(e, "asleep"))
                },
                ob: function() {
                    var e = this[l];
                    return e.J && (e.sa || this.Xa()) && this.ha(),
                    c.T.fn.ob.call(this)
                }
            }, O = {
                Qa: function(e) {
                    "change" != e && "beforeChange" != e || this.v()
                }
            };
            c.a.Ba && c.a.setPrototypeOf(d, c.T.fn),
            g = c.ta.Ma,
            d[g] = c.o,
            c.Oc = function(e) {
                return "function" == typeof e && e[g] === d[g]
            }
            ,
            c.Fd = function(e) {
                return c.Oc(e) && e[l] && e[l].wb
            }
            ,
            c.b("computed", c.o),
            c.b("dependentObservable", c.o),
            c.b("isComputed", c.Oc),
            c.b("isPureComputed", c.Fd),
            c.b("computed.fn", d),
            c.L(d, "peek", d.v),
            c.L(d, "dispose", d.s),
            c.L(d, "isActive", d.ja),
            c.L(d, "getDependenciesCount", d.qa),
            c.L(d, "getDependencies", d.Va),
            c.xb = function(e, t) {
                return "function" == typeof e ? c.o(e, t, {
                    pure: !0
                }) : (e = c.a.extend({}, e),
                e.pure = !0,
                c.o(e, t))
            }
            ,
            c.b("pureComputed", c.xb),
            function() {
                function n(o, i, a) {
                    if (a = a || new t,
                    o = i(o),
                    "object" != typeof o || null === o || o === e || o instanceof RegExp || o instanceof Date || o instanceof String || o instanceof Number || o instanceof Boolean)
                        return o;
                    var r = o instanceof Array ? [] : {};
                    return a.save(o, r),
                    s(o, function(t) {
                        var c, s = i(o[t]);
                        switch (typeof s) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "function":
                            r[t] = s;
                            break;
                        case "object":
                        case "undefined":
                            c = a.get(s),
                            r[t] = c !== e ? c : n(s, i, a)
                        }
                    }),
                    r
                }
                function s(e, t) {
                    if (e instanceof Array) {
                        for (var n = 0; n < e.length; n++)
                            t(n);
                        "function" == typeof e.toJSON && t("toJSON")
                    } else
                        for (n in e)
                            t(n)
                }
                function t() {
                    this.keys = [],
                    this.values = []
                }
                c.ad = function(e) {
                    if (0 == arguments.length)
                        throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return n(e, function(e) {
                        for (var t = 0; c.O(e) && 10 > t; t++)
                            e = e();
                        return e
                    })
                }
                ,
                c.toJSON = function(e, t, n) {
                    return e = c.ad(e),
                    c.a.hc(e, t, n)
                }
                ,
                t.prototype = {
                    constructor: t,
                    save: function(e, t) {
                        var n = c.a.A(this.keys, e);
                        0 <= n ? this.values[n] = t : (this.keys.push(e),
                        this.values.push(t))
                    },
                    get: function(t) {
                        return t = c.a.A(this.keys, t),
                        0 <= t ? this.values[t] : e
                    }
                }
            }(),
            c.b("toJS", c.ad),
            c.b("toJSON", c.toJSON),
            c.Wd = function(e, t, n) {
                function s(t) {
                    var s = c.xb(e, n).extend({
                        ma: "always"
                    })
                      , o = s.subscribe(function(e) {
                        e && (o.s(),
                        t(e))
                    });
                    return s.notifySubscribers(s.v()),
                    o
                }
                return "function" != typeof Promise || t ? s(t.bind(n)) : new Promise(s)
            }
            ,
            c.b("when", c.Wd),
            function() {
                c.w = {
                    M: function(t) {
                        switch (c.a.R(t)) {
                        case "option":
                            return !0 === t.__ko__hasDomDataOptionValue__ ? c.a.g.get(t, c.c.options.$b) : 7 >= c.a.W ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
                        case "select":
                            return 0 <= t.selectedIndex ? c.w.M(t.options[t.selectedIndex]) : e;
                        default:
                            return t.value
                        }
                    },
                    cb: function(t, n, s) {
                        switch (c.a.R(t)) {
                        case "option":
                            "string" == typeof n ? (c.a.g.set(t, c.c.options.$b, e),
                            "__ko__hasDomDataOptionValue__"in t && delete t.__ko__hasDomDataOptionValue__,
                            t.value = n) : (c.a.g.set(t, c.c.options.$b, n),
                            t.__ko__hasDomDataOptionValue__ = !0,
                            t.value = "number" == typeof n ? n : "");
                            break;
                        case "select":
                            ("" === n || null === n) && (n = e);
                            for (var a, o = -1, i = 0, r = t.options.length; i < r; ++i)
                                if (a = c.w.M(t.options[i]),
                                a == n || "" === a && n === e) {
                                    o = i;
                                    break
                                }
                            (s || 0 <= o || n === e && 1 < t.size) && (t.selectedIndex = o,
                            6 === c.a.W && c.a.setTimeout(function() {
                                t.selectedIndex = o
                            }, 0));
                            break;
                        default:
                            (null === n || n === e) && (n = ""),
                            t.value = n
                        }
                    }
                }
            }(),
            c.b("selectExtensions", c.w),
            c.b("selectExtensions.readValue", c.w.M),
            c.b("selectExtensions.writeValue", c.w.cb),
            c.m = function() {
                function t(e) {
                    e = c.a.Db(e),
                    123 === e.charCodeAt(0) && (e = e.slice(1, -1)),
                    e += `
,`;
                    var t, s, r, d, h = [], u = e.match(n), o = [], l = 0;
                    if (1 < u.length) {
                        for (d = 0; s = u[d]; ++d) {
                            if (t = s.charCodeAt(0),
                            44 === t) {
                                if (0 >= l) {
                                    h.push(r && o.length ? {
                                        key: r,
                                        value: o.join("")
                                    } : {
                                        unknown: r || o.join("")
                                    }),
                                    r = l = 0,
                                    o = [];
                                    continue
                                }
                            } else if (58 === t) {
                                if (!l && !r && 1 === o.length) {
                                    r = o.pop();
                                    continue
                                }
                            } else if (47 === t && 1 < s.length && (47 === s.charCodeAt(1) || 42 === s.charCodeAt(1)))
                                continue;
                            else
                                47 === t && d && 1 < s.length ? (t = u[d - 1].match(i)) && !a[t[0]] && (e = e.substr(e.indexOf(s) + 1),
                                u = e.match(n),
                                d = -1,
                                s = "/") : 40 === t || 123 === t || 91 === t ? ++l : 41 === t || 125 === t || 93 === t ? --l : r || o.length || 34 !== t && 39 !== t || (s = s.slice(1, -1));
                            o.push(s)
                        }
                        if (0 < l)
                            throw Error("Unbalanced parentheses, braces, or brackets")
                    }
                    return h
                }
                var s = ["true", "false", "null", "undefined"]
                  , o = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i
                  , n = RegExp(`"(?:\\\\.|[^"])*"|'(?:\\\\.|[^'])*'|\`(?:\\\\.|[^\`])*\`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*
|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,"'\`{}()/:[\\]]*[^\\s,"'\`{}()/:[\\]]|[^\\s]`, "g")
                  , i = /[\])"'A-Za-z0-9_$]+$/
                  , a = {
                    in: 1,
                    return: 1,
                    typeof: 1
                }
                  , e = {};
                return {
                    Ra: [],
                    wa: e,
                    ac: t,
                    vb: function(n, i) {
                        function a(t, n) {
                            if (!u) {
                                var h, i = c.getBindingHandler(t);
                                if (i && i.preprocess && !(n = i.preprocess(n, t, a)))
                                    return;
                                (i = e[t]) && (h = n,
                                0 <= c.a.A(s, h) ? h = !1 : (i = h.match(o),
                                h = null !== i && (i[1] ? "Object(" + i[1] + ")" + i[2] : h)),
                                i = h),
                                i && r.push("'" + ("string" == typeof e[t] ? e[t] : t) + "':function(_z){" + h + "=_z}")
                            }
                            d && (n = "function(){return " + n + " }"),
                            l.push("'" + t + "':" + n)
                        }
                        i = i || {};
                        var l = []
                          , r = []
                          , d = i.valueAccessors
                          , u = i.bindingParams
                          , h = "string" == typeof n ? t(n) : n;
                        return c.a.D(h, function(e) {
                            a(e.key || e.unknown, e.value)
                        }),
                        r.length && a("_ko_property_writers", "{" + r.join(",") + " }"),
                        l.join(",")
                    },
                    Id: function(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n].key == t)
                                return !0;
                        return !1
                    },
                    eb: function(e, t, n, s, o) {
                        e && c.O(e) ? !c.Za(e) || o && e.v() === s || e(s) : (e = t.get("_ko_property_writers")) && e[n] && e[n](s)
                    }
                }
            }(),
            c.b("expressionRewriting", c.m),
            c.b("expressionRewriting.bindingRewriteValidators", c.m.Ra),
            c.b("expressionRewriting.parseObjectLiteral", c.m.ac),
            c.b("expressionRewriting.preProcessBindings", c.m.vb),
            c.b("expressionRewriting._twoWayBindings", c.m.wa),
            c.b("jsonExpressionRewriting", c.m),
            c.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", c.m.vb),
            function() {
                function e(e) {
                    return 8 == e.nodeType && a.test(s ? e.text : e.nodeValue)
                }
                function t(e) {
                    return 8 == e.nodeType && l.test(s ? e.text : e.nodeValue)
                }
                function o(n, s) {
                    for (var o = n, i = 1, a = []; o = o.nextSibling; ) {
                        if (t(o) && (c.a.g.set(o, r, !0),
                        i--,
                        0 === i))
                            return a;
                        a.push(o),
                        e(o) && i++
                    }
                    if (!s)
                        throw Error("Cannot find closing comment tag to match: " + n.nodeValue);
                    return null
                }
                function i(e, t) {
                    var n = o(e, t);
                    return n ? 0 < n.length ? n[n.length - 1].nextSibling : e.nextSibling : null
                }
                var s = n && "<!--test-->" === n.createComment("test").text
                  , a = s ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/
                  , l = s ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/
                  , d = {
                    ul: !0,
                    ol: !0
                }
                  , r = "__ko_matchedEndComment__";
                c.h = {
                    ea: {},
                    childNodes: function(t) {
                        return e(t) ? o(t) : t.childNodes
                    },
                    Ea: function(t) {
                        if (e(t)) {
                            t = c.h.childNodes(t);
                            for (var n = 0, s = t.length; n < s; n++)
                                c.removeNode(t[n])
                        } else
                            c.a.Tb(t)
                    },
                    va: function(t, n) {
                        if (e(t)) {
                            c.h.Ea(t);
                            for (var o = t.nextSibling, s = 0, i = n.length; s < i; s++)
                                o.parentNode.insertBefore(n[s], o)
                        } else
                            c.a.va(t, n)
                    },
                    Vc: function(t, n) {
                        var s;
                        e(t) ? (s = t.nextSibling,
                        t = t.parentNode) : s = t.firstChild,
                        s ? n !== s && t.insertBefore(n, s) : t.appendChild(n)
                    },
                    Wb: function(t, n, s) {
                        s ? (s = s.nextSibling,
                        e(t) && (t = t.parentNode),
                        s ? n !== s && t.insertBefore(n, s) : t.appendChild(n)) : c.h.Vc(t, n)
                    },
                    firstChild: function(n) {
                        if (e(n))
                            return !n.nextSibling || t(n.nextSibling) ? null : n.nextSibling;
                        if (n.firstChild && t(n.firstChild))
                            throw Error("Found invalid end comment, as the first child of " + n);
                        return n.firstChild
                    },
                    nextSibling: function(n) {
                        if (e(n) && (n = i(n)),
                        n.nextSibling && t(n.nextSibling)) {
                            var s = n.nextSibling;
                            if (t(s) && !c.a.g.get(s, r))
                                throw Error("Found end comment without a matching opening comment, as child of " + n);
                            return null
                        }
                        return n.nextSibling
                    },
                    Cd: e,
                    Vd: function(e) {
                        return (e = (s ? e.text : e.nodeValue).match(a)) ? e[1] : null
                    },
                    Sc: function(n) {
                        if (d[c.a.R(n)]) {
                            var s, o, a, r = n.firstChild;
                            if (r)
                                do
                                    if (1 === r.nodeType) {
                                        if (s = r.firstChild,
                                        o = null,
                                        s)
                                            do
                                                o ? o.push(s) : e(s) ? (a = i(s, !0),
                                                a ? s = a : o = [s]) : t(s) && (o = [s]);
                                            while (s = s.nextSibling)if (s = o)
                                            for (o = r.nextSibling,
                                            a = 0; a < s.length; a++)
                                                o ? n.insertBefore(s[a], o) : n.appendChild(s[a])
                                    }
                                while (r = r.nextSibling)
                        }
                    }
                }
            }(),
            c.b("virtualElements", c.h),
            c.b("virtualElements.allowedBindings", c.h.ea),
            c.b("virtualElements.emptyNode", c.h.Ea),
            c.b("virtualElements.insertAfter", c.h.Wb),
            c.b("virtualElements.prepend", c.h.Vc),
            c.b("virtualElements.setDomNodeChildren", c.h.va),
            function() {
                c.ga = function() {
                    this.nd = {}
                }
                ,
                c.a.extend(c.ga.prototype, {
                    nodeHasBindings: function(e) {
                        switch (e.nodeType) {
                        case 1:
                            return null != e.getAttribute("data-bind") || c.j.getComponentNameForNode(e);
                        case 8:
                            return c.h.Cd(e);
                        default:
                            return !1
                        }
                    },
                    getBindings: function(e, t) {
                        var n = this.getBindingsString(e, t)
                          , n = n ? this.parseBindingsString(n, t, e) : null;
                        return c.j.tc(n, e, t, !1)
                    },
                    getBindingAccessors: function(e, t) {
                        var n = this.getBindingsString(e, t)
                          , n = n ? this.parseBindingsString(n, t, e, {
                            valueAccessors: !0
                        }) : null;
                        return c.j.tc(n, e, t, !0)
                    },
                    getBindingsString: function(e) {
                        switch (e.nodeType) {
                        case 1:
                            return e.getAttribute("data-bind");
                        case 8:
                            return c.h.Vd(e);
                        default:
                            return null
                        }
                    },
                    parseBindingsString: function(e, t, n, s) {
                        try {
                            var o, r, l, i = this.nd, a = e + (s && s.valueAccessors || "");
                            return (o = i[a]) || (l = "with($context){with($data||{}){return{" + c.m.vb(e, s) + "}}}",
                            r = new Function("$context","$element",l),
                            o = i[a] = r),
                            o(t, n)
                        } catch (t) {
                            throw t.message = `Unable to parse bindings.
Bindings value: ` + e + `
Message: ` + t.message,
                            t
                        }
                    }
                }),
                c.ga.instance = new c.ga
            }(),
            c.b("bindingProvider", c.ga),
            function() {
                function b(e) {
                    var t = (e = c.a.g.get(e, o)) && e.N;
                    t && (e.N = null,
                    t.Tc())
                }
                function l(e, t, n) {
                    this.node = e,
                    this.yc = t,
                    this.kb = [],
                    this.H = !1,
                    t.N || c.a.K.za(e, b),
                    n && n.N && (n.N.kb.push(e),
                    this.Kb = n)
                }
                function w(e) {
                    return function() {
                        return e
                    }
                }
                function u(e) {
                    return e()
                }
                function m(e) {
                    return c.a.Ga(c.u.G(e), function(t, n) {
                        return function() {
                            return e()[n]
                        }
                    })
                }
                function _(e, t, n) {
                    return "function" == typeof e ? m(e.bind(null, t, n)) : c.a.Ga(e, w)
                }
                function y(e, t) {
                    return m(this.getBindings.bind(this, e, t))
                }
                function g(e, t) {
                    if (n = c.h.firstChild(t),
                    n) {
                        var n, s, o = c.ga.instance, i = o.preprocessNode;
                        if (i) {
                            for (; s = n; )
                                n = c.h.nextSibling(s),
                                i.call(o, s);
                            n = c.h.firstChild(t)
                        }
                        for (; s = n; )
                            n = c.h.nextSibling(s),
                            p(e, s)
                    }
                    c.i.ma(t, c.i.H)
                }
                function p(e, t) {
                    var n = e
                      , s = 1 === t.nodeType;
                    s && c.h.Sc(t),
                    (s || c.ga.instance.nodeHasBindings(t)) && (n = f(t, null, e).bindingContextForDescendants),
                    n && !v[c.a.R(t)] && g(n, t)
                }
                function j(e) {
                    var n = []
                      , s = {}
                      , t = [];
                    return c.a.P(e, function o(i) {
                        if (!s[i]) {
                            var a = c.getBindingHandler(i);
                            a && (a.after && (t.push(i),
                            c.a.D(a.after, function(n) {
                                if (e[n]) {
                                    if (-1 !== c.a.A(t, n))
                                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + t.join(", "));
                                    o(n)
                                }
                            }),
                            t.length--),
                            n.push({
                                key: i,
                                Mc: a
                            })),
                            s[i] = !0
                        }
                    }),
                    n
                }
                function f(t, n, s) {
                    if (r = c.a.g.Ub(t, o, {}),
                    g = r.hd,
                    !n) {
                        if (g)
                            throw Error("You cannot apply bindings multiple times to the same element.");
                        r.hd = !0
                    }
                    if (g || (r.context = s),
                    r.Zb || (r.Zb = {}),
                    n && "function" != typeof n)
                        a = n;
                    else {
                        var a, r, l, m, f, p, g, v = c.ga.instance, b = v.getBindingAccessors || y, d = c.$(function() {
                            return (a = n ? n(s, t) : b.call(v, t, s)) && (s[i] && s[i](),
                            s[h] && s[h]()),
                            a
                        }, null, {
                            l: t
                        });
                        a && d.ja() || (d = null)
                    }
                    return l = s,
                    a && (m = function() {
                        return c.a.Ga(d ? d() : a, u)
                    }
                    ,
                    p = d ? function(e) {
                        return function() {
                            return u(d()[e])
                        }
                    }
                    : function(e) {
                        return a[e]
                    }
                    ,
                    m.get = function(e) {
                        return a[e] && u(p(e))
                    }
                    ,
                    m.has = function(e) {
                        return e in a
                    }
                    ,
                    c.i.H in a && c.i.subscribe(t, c.i.H, function() {
                        var e, n = (0,
                        a[c.i.H])();
                        n && (e = c.h.childNodes(t),
                        e.length && n(e, c.Ec(e[0])))
                    }),
                    c.i.pa in a && (l = c.i.Cb(t, s),
                    c.i.subscribe(t, c.i.pa, function() {
                        var e = (0,
                        a[c.i.pa])();
                        e && c.h.firstChild(t) && e(t)
                    })),
                    r = j(a),
                    c.a.D(r, function(n) {
                        var o = n.Mc.init
                          , i = n.Mc.update
                          , s = n.key;
                        if (8 === t.nodeType && !c.h.ea[s])
                            throw Error("The binding '" + s + "' cannot be used with virtual elements");
                        try {
                            "function" == typeof o && c.u.G(function() {
                                var n = o(t, p(s), m, l.$data, l);
                                if (n && n.controlsDescendantBindings) {
                                    if (f !== e)
                                        throw Error("Multiple bindings (" + f + " and " + s + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                    f = s
                                }
                            }),
                            "function" == typeof i && c.$(function() {
                                i(t, p(s), m, l.$data, l)
                            }, null, {
                                l: t
                            })
                        } catch (e) {
                            throw e.message = 'Unable to process binding "' + s + ": " + a[s] + `"
Message: ` + e.message,
                            e
                        }
                    })),
                    r = f === e,
                    {
                        shouldBindDescendants: r,
                        bindingContextForDescendants: r && l
                    }
                }
                function r(t, n) {
                    return t && t instanceof c.fa ? t : new c.fa(t,e,e,n)
                }
                var o, d, v, i = c.a.Da("_subscribable"), a = c.a.Da("_ancestorBindingInfo"), h = c.a.Da("_dataDependency");
                c.c = {},
                v = {
                    script: !0,
                    textarea: !0,
                    template: !0
                },
                c.getBindingHandler = function(e) {
                    return c.c[e]
                }
                ,
                d = {},
                c.fa = function(t, n, s, o, r) {
                    function f() {
                        var t = v ? m() : m
                          , e = c.a.f(t);
                        return n ? (c.a.extend(l, n),
                        a in n && (l[a] = n[a])) : (l.$parents = [],
                        l.$root = e,
                        l.ko = c),
                        l[i] = u,
                        p ? e = l.$data : (l.$rawData = t,
                        l.$data = e),
                        s && (l[s] = e),
                        o && o(l, n, e),
                        n && n[i] && !c.S.o().Vb(n[i]) && n[i](),
                        g && (l[h] = g),
                        l.$data
                    }
                    var u, l = this, p = t === d, m = p ? e : t, v = "function" == typeof m && !c.O(m), g = r && r.dataDependency;
                    r && r.exportDependencies ? f() : (u = c.xb(f),
                    u.v(),
                    u.ja() ? u.equalityComparer = null : l[i] = e)
                }
                ,
                c.fa.prototype.createChildContext = function(e, t, n, s) {
                    if (!s && t && "object" == typeof t && (s = t,
                    t = s.as,
                    n = s.extend),
                    t && s && s.noChildContext) {
                        var o = "function" == typeof e && !c.O(e);
                        return new c.fa(d,this,null,function(s) {
                            n && n(s),
                            s[t] = o ? e() : e
                        }
                        ,s)
                    }
                    return new c.fa(e,this,t,function(e, t) {
                        e.$parentContext = t,
                        e.$parent = t.$data,
                        e.$parents = (t.$parents || []).slice(0),
                        e.$parents.unshift(e.$parent),
                        n && n(e)
                    }
                    ,s)
                }
                ,
                c.fa.prototype.extend = function(e, t) {
                    return new c.fa(d,this,null,function(t) {
                        c.a.extend(t, "function" == typeof e ? e(t) : e)
                    }
                    ,t)
                }
                ,
                o = c.a.g.Z(),
                l.prototype.Tc = function() {
                    this.Kb && this.Kb.N && this.Kb.N.sd(this.node)
                }
                ,
                l.prototype.sd = function(e) {
                    c.a.Pa(this.kb, e),
                    !this.kb.length && this.H && this.Cc()
                }
                ,
                l.prototype.Cc = function() {
                    this.H = !0,
                    this.yc.N && !this.kb.length && (this.yc.N = null,
                    c.a.K.yb(this.node, b),
                    c.i.ma(this.node, c.i.pa),
                    this.Tc())
                }
                ,
                c.i = {
                    H: "childrenComplete",
                    pa: "descendantsComplete",
                    subscribe: function(e, t, n, s, i) {
                        var a = c.a.g.Ub(e, o, {});
                        return a.Fa || (a.Fa = new c.T),
                        i && i.notifyImmediately && a.Zb[t] && c.u.G(n, s, [e]),
                        a.Fa.subscribe(n, s, t)
                    },
                    ma: function(t, n) {
                        var s = c.a.g.get(t, o);
                        if (s && (s.Zb[n] = !0,
                        s.Fa && s.Fa.notifySubscribers(t, n),
                        n == c.i.H))
                            if (s.N)
                                s.N.Cc();
                            else if (s.N === e && s.Fa && s.Fa.Wa(c.i.pa))
                                throw Error("descendantsComplete event not supported for bindings on this node")
                    },
                    Cb: function(e, t) {
                        var n = c.a.g.Ub(e, o, {});
                        return n.N || (n.N = new l(e,n,t[a])),
                        t[a] == n ? t : t.extend(function(e) {
                            e[a] = n
                        })
                    }
                },
                c.Td = function(e) {
                    return (e = c.a.g.get(e, o)) && e.context
                }
                ,
                c.ib = function(e, t, n) {
                    return 1 === e.nodeType && c.h.Sc(e),
                    f(e, t, r(n))
                }
                ,
                c.ld = function(e, t, n) {
                    return n = r(n),
                    c.ib(e, _(t, n, e), n)
                }
                ,
                c.Oa = function(e, t) {
                    1 !== t.nodeType && 8 !== t.nodeType || g(r(e), t)
                }
                ,
                c.vc = function(e, o, i) {
                    if (!t && s.jQuery && (t = s.jQuery),
                    2 > arguments.length) {
                        if (o = n.body,
                        !o)
                            throw Error("ko.applyBindings: could not find document.body; has the document been loaded?")
                    } else if (!o || 1 !== o.nodeType && 8 !== o.nodeType)
                        throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    p(r(e, i), o)
                }
                ,
                c.Dc = function(t) {
                    return !t || 1 !== t.nodeType && 8 !== t.nodeType ? e : c.Td(t)
                }
                ,
                c.Ec = function(t) {
                    return (t = c.Dc(t)) ? t.$data : e
                }
                ,
                c.b("bindingHandlers", c.c),
                c.b("bindingEvent", c.i),
                c.b("bindingEvent.subscribe", c.i.subscribe),
                c.b("bindingEvent.startPossiblyAsyncContentBinding", c.i.Cb),
                c.b("applyBindings", c.vc),
                c.b("applyBindingsToDescendants", c.Oa),
                c.b("applyBindingAccessorsToNode", c.ib),
                c.b("applyBindingsToNode", c.ld),
                c.b("contextFor", c.Dc),
                c.b("dataFor", c.Ec)
            }(),
            function(e) {
                function o(t, o) {
                    var r, a = Object.prototype.hasOwnProperty.call(n, t) ? n[t] : e;
                    a ? a.subscribe(o) : (a = n[t] = new c.T,
                    a.subscribe(o),
                    i(t, function(e, o) {
                        var i = !!o && !!o.synchronous;
                        s[t] = {
                            definition: e,
                            Gd: i
                        },
                        delete n[t],
                        r || i ? a.notifySubscribers(e) : c.na.zb(function() {
                            a.notifySubscribers(e)
                        })
                    }),
                    r = !0)
                }
                function i(e, n) {
                    t("getConfig", [e], function(s) {
                        s ? t("loadComponent", [e, s], function(e) {
                            n(e, s)
                        }) : n(null, null)
                    })
                }
                function t(n, s, o, i) {
                    i || (i = c.j.loaders.slice(0));
                    var r, l, a = i.shift();
                    if (a)
                        if (r = a[n],
                        r) {
                            if (l = !1,
                            r.apply(a, s.concat(function(e) {
                                l ? o(null) : null !== e ? o(e) : t(n, s, o, i)
                            })) !== e && (l = !0,
                            !a.suppressLoaderExceptions))
                                throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                        } else
                            t(n, s, o, i);
                    else
                        o(null)
                }
                var n = {}
                  , s = {};
                c.j = {
                    get: function(t, n) {
                        var i = Object.prototype.hasOwnProperty.call(s, t) ? s[t] : e;
                        i ? i.Gd ? c.u.G(function() {
                            n(i.definition)
                        }) : c.na.zb(function() {
                            n(i.definition)
                        }) : o(t, n)
                    },
                    Bc: function(e) {
                        delete s[e]
                    },
                    oc: t
                },
                c.j.loaders = [],
                c.b("components", c.j),
                c.b("components.get", c.j.get),
                c.b("components.clearCachedDefinition", c.j.Bc)
            }(),
            function() {
                function u(e, n, s, i) {
                    function a() {
                        0 === --d && i(r)
                    }
                    var r = {}
                      , d = 2
                      , l = s.template;
                    s = s.viewModel,
                    l ? o(n, l, function(t) {
                        c.j.oc("loadTemplate", [e, t], function(e) {
                            r.template = e,
                            a()
                        })
                    }) : a(),
                    s ? o(n, s, function(n) {
                        c.j.oc("loadViewModel", [e, n], function(e) {
                            r[t] = e,
                            a()
                        })
                    }) : a()
                }
                function a(e, n, s) {
                    if ("function" == typeof n)
                        s(function(e) {
                            return new n(e)
                        });
                    else if ("function" == typeof n[t])
                        s(n[t]);
                    else if ("instance"in n) {
                        var o = n.instance;
                        s(function() {
                            return o
                        })
                    } else
                        "viewModel"in n ? a(e, n.viewModel, s) : e("Unknown viewModel value: " + n)
                }
                function l(e) {
                    switch (c.a.R(e)) {
                    case "script":
                        return c.a.ua(e.text);
                    case "textarea":
                        return c.a.ua(e.value);
                    case "template":
                        if (d(e.content))
                            return c.a.Ca(e.content.childNodes)
                    }
                    return c.a.Ca(e.childNodes)
                }
                function d(e) {
                    return s.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType
                }
                function o(e, t, n) {
                    "string" == typeof t.require ? r || s.require ? (r || s.require)([t.require], function(e) {
                        e && "object" == typeof e && e.Xd && e.default && (e = e.default),
                        n(e)
                    }) : e("Uses require, but no AMD loader is present") : n(t)
                }
                function i(e) {
                    return function(t) {
                        throw Error("Component '" + e + "': " + t)
                    }
                }
                var t, e = {};
                c.j.register = function(t, n) {
                    if (!n)
                        throw Error("Invalid configuration for " + t);
                    if (c.j.tb(t))
                        throw Error("Component " + t + " is already registered");
                    e[t] = n
                }
                ,
                c.j.tb = function(t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                c.j.unregister = function(t) {
                    delete e[t],
                    c.j.Bc(t)
                }
                ,
                c.j.Fc = {
                    getConfig: function(t, n) {
                        n(c.j.tb(t) ? e[t] : null)
                    },
                    loadComponent: function(e, t, n) {
                        var s = i(e);
                        o(s, t, function(t) {
                            u(e, s, t, n)
                        })
                    },
                    loadTemplate: function(e, t, o) {
                        if (e = i(e),
                        "string" == typeof t)
                            o(c.a.ua(t));
                        else if (t instanceof Array)
                            o(t);
                        else if (d(t))
                            o(c.a.la(t.childNodes));
                        else if (t.element)
                            if (t = t.element,
                            s.HTMLElement ? t instanceof HTMLElement : t && t.tagName && 1 === t.nodeType)
                                o(l(t));
                            else if ("string" == typeof t) {
                                var a = n.getElementById(t);
                                a ? o(l(a)) : e("Cannot find element with ID " + t)
                            } else
                                e("Unknown element type: " + t);
                        else
                            e("Unknown template value: " + t)
                    },
                    loadViewModel: function(e, t, n) {
                        a(i(e), t, n)
                    }
                },
                t = "createViewModel",
                c.b("components.register", c.j.register),
                c.b("components.isRegistered", c.j.tb),
                c.b("components.unregister", c.j.unregister),
                c.b("components.defaultLoader", c.j.Fc),
                c.j.loaders.push(c.j.Fc),
                c.j.dd = e
            }(),
            function() {
                function e(e, n) {
                    if (s = e.getAttribute("params"),
                    s) {
                        var s = t.parseBindingsString(s, n, e, {
                            valueAccessors: !0,
                            bindingParams: !0
                        })
                          , s = c.a.Ga(s, function(t) {
                            return c.o(t, null, {
                                l: e
                            })
                        })
                          , o = c.a.Ga(s, function(t) {
                            var n = t.v();
                            return t.ja() ? c.o({
                                read: function() {
                                    return c.a.f(t())
                                },
                                write: c.Za(n) && function(e) {
                                    t()(e)
                                }
                                ,
                                l: e
                            }) : n
                        });
                        return Object.prototype.hasOwnProperty.call(o, "$raw") || (o.$raw = s),
                        o
                    }
                    return {
                        $raw: {}
                    }
                }
                c.j.getComponentNameForNode = function(e) {
                    var t = c.a.R(e);
                    if (c.j.tb(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + e || 8 >= c.a.W && e.tagName === t))
                        return t
                }
                ,
                c.j.tc = function(t, n, s, o) {
                    if (1 === n.nodeType) {
                        var i, a = c.j.getComponentNameForNode(n);
                        if (a) {
                            if (t = t || {},
                            t.component)
                                throw Error('Cannot use the "component" binding on a custom element matching a component');
                            i = {
                                name: a,
                                params: e(n, s)
                            },
                            t.component = o ? function() {
                                return i
                            }
                            : i
                        }
                    }
                    return t
                }
                ;
                var t = new c.ga;
                9 > c.a.W && (c.j.register = function(e) {
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(c.j.register),
                n.createDocumentFragment = function(e) {
                    return function() {
                        var s, t = e(), n = c.j.dd;
                        for (s in n)
                            ;
                        return t
                    }
                }(n.createDocumentFragment))
            }(),
            function() {
                function e(e, t, n) {
                    if (t = t.template,
                    !t)
                        throw Error("Component '" + e + "' has no template");
                    e = c.a.Ca(t),
                    c.h.va(n, e)
                }
                function t(e, t, n) {
                    var s = e.createViewModel;
                    return s ? s.call(e, t, n) : t
                }
                var n = 0;
                c.c.component = {
                    init: function(s, o, i, a, r) {
                        function h() {
                            var e = l && l.dispose;
                            "function" == typeof e && e.call(l),
                            d && d.s(),
                            u = l = d = null
                        }
                        var l, d, u, m = c.a.la(c.h.childNodes(s));
                        return c.h.Ea(s),
                        c.a.K.za(s, h),
                        c.o(function() {
                            if (a = c.a.f(o()),
                            "string" == typeof a ? i = a : (i = c.a.f(a.name),
                            f = c.a.f(a.params)),
                            !i)
                                throw Error("No component name specified");
                            var i, a, f, p = c.i.Cb(s, r), g = u = ++n;
                            c.j.get(i, function(n) {
                                if (u === g) {
                                    if (h(),
                                    !n)
                                        throw Error("Unknown component '" + i + "'");
                                    e(i, n, s);
                                    var o = t(n, f, {
                                        element: s,
                                        templateNodes: m
                                    });
                                    n = p.createChildContext(o, {
                                        extend: function(e) {
                                            e.$component = o,
                                            e.$componentTemplateNodes = m
                                        }
                                    }),
                                    o && o.koDescendantsComplete && (d = c.i.subscribe(s, c.i.pa, o.koDescendantsComplete, o)),
                                    l = o,
                                    c.Oa(n, s)
                                }
                            })
                        }, null, {
                            l: s
                        }),
                        {
                            controlsDescendantBindings: !0
                        }
                    }
                },
                c.h.ea.component = !0
            }(),
            v = {
                class: "className",
                for: "htmlFor"
            },
            c.c.attr = {
                update: function(t, n) {
                    var s = c.a.f(n()) || {};
                    c.a.P(s, function(n, s) {
                        s = c.a.f(s);
                        var o = n.indexOf(":")
                          , o = "lookupNamespaceURI"in t && 0 < o && t.lookupNamespaceURI(n.substr(0, o))
                          , i = !1 === s || null === s || s === e;
                        i ? o ? t.removeAttributeNS(o, n) : t.removeAttribute(n) : s = s.toString(),
                        8 >= c.a.W && n in v ? (n = v[n],
                        i ? t.removeAttribute(n) : t[n] = s) : i || (o ? t.setAttributeNS(o, n, s) : t.setAttribute(n, s)),
                        "name" === n && c.a.Yc(t, i ? "" : s)
                    })
                }
            },
            function() {
                c.c.checked = {
                    after: ["value", "attr"],
                    init: function(t, n, s) {
                        function u() {
                            var u, f, p, m = t.checked, l = i();
                            !c.S.Ya() && (m || !r && !c.S.qa()) && (u = c.u.G(n),
                            o ? (f = h ? u.v() : u,
                            p = d,
                            d = l,
                            p !== l ? m && (c.a.Na(f, l, !0),
                            c.a.Na(f, p, !1)) : c.a.Na(f, l, m),
                            h && c.Za(u) && u(f)) : (a && (l === e ? l = m : m || (l = e)),
                            c.m.eb(u, s, "checked", l, !0)))
                        }
                        function m() {
                            var s = c.a.f(n())
                              , r = i();
                            o ? (t.checked = 0 <= c.a.A(s, r),
                            d = r) : t.checked = a && r === e ? !!s : i() === s
                        }
                        var i = c.xb(function() {
                            if (s.has("checkedValue"))
                                return c.a.f(s.get("checkedValue"));
                            if (f)
                                return s.has("value") ? c.a.f(s.get("value")) : t.value
                        })
                          , a = "checkbox" == t.type
                          , r = "radio" == t.type;
                        if (a || r) {
                            var l = n()
                              , o = a && c.a.f(l)instanceof Array
                              , h = !(o && l.push && l.splice)
                              , f = r || o
                              , d = o ? i() : e;
                            r && !t.name && c.c.uniqueName.init(t, function() {
                                return !0
                            }),
                            c.o(u, null, {
                                l: t
                            }),
                            c.a.B(t, "click", u),
                            c.o(m, null, {
                                l: t
                            }),
                            l = e
                        }
                    }
                },
                c.m.wa.checked = !0,
                c.c.checkedValue = {
                    update: function(e, t) {
                        e.value = c.a.f(t())
                    }
                }
            }(),
            c.c.class = {
                update: function(e, t) {
                    var n = c.a.Db(c.a.f(t()));
                    c.a.Eb(e, e.__ko__cssValue, !1),
                    e.__ko__cssValue = n,
                    c.a.Eb(e, n, !0)
                }
            },
            c.c.css = {
                update: function(e, t) {
                    var n = c.a.f(t());
                    null !== n && "object" == typeof n ? c.a.P(n, function(t, n) {
                        n = c.a.f(n),
                        c.a.Eb(e, t, n)
                    }) : c.c.class.update(e, t)
                }
            },
            c.c.enable = {
                update: function(e, t) {
                    var n = c.a.f(t());
                    n && e.disabled ? e.removeAttribute("disabled") : n || e.disabled || (e.disabled = !0)
                }
            },
            c.c.disable = {
                update: function(e, t) {
                    c.c.enable.update(e, function() {
                        return !c.a.f(t())
                    })
                }
            },
            c.c.event = {
                init: function(e, t, n, s, o) {
                    var i = t() || {};
                    c.a.P(i, function(i) {
                        "string" == typeof i && c.a.B(e, i, function(e) {
                            var a, r, l = t()[i];
                            if (l) {
                                try {
                                    a = c.a.la(arguments),
                                    s = o.$data,
                                    a.unshift(s),
                                    r = l.apply(s, a)
                                } finally {
                                    !0 !== r && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                                }
                                !1 === n.get(i + "Bubble") && (e.cancelBubble = !0,
                                e.stopPropagation && e.stopPropagation())
                            }
                        })
                    })
                }
            },
            c.c.foreach = {
                Rc: function(e) {
                    return function() {
                        var n = e()
                          , t = c.a.bc(n);
                        return !t || "number" == typeof t.length ? {
                            foreach: n,
                            templateEngine: c.ba.Ma
                        } : (c.a.f(n),
                        {
                            foreach: t.data,
                            as: t.as,
                            noChildContext: t.noChildContext,
                            includeDestroyed: t.includeDestroyed,
                            afterAdd: t.afterAdd,
                            beforeRemove: t.beforeRemove,
                            afterRender: t.afterRender,
                            beforeMove: t.beforeMove,
                            afterMove: t.afterMove,
                            templateEngine: c.ba.Ma
                        })
                    }
                },
                init: function(e, t) {
                    return c.c.template.init(e, c.c.foreach.Rc(t))
                },
                update: function(e, t, n, s, o) {
                    return c.c.template.update(e, c.c.foreach.Rc(t), n, s, o)
                }
            },
            c.m.Ra.foreach = !1,
            c.h.ea.foreach = !0,
            c.c.hasfocus = {
                init: function(e, t, n) {
                    function s(s) {
                        e.__ko_hasfocusUpdating = !0;
                        var i, o = e.ownerDocument;
                        if ("activeElement"in o) {
                            try {
                                i = o.activeElement
                            } catch {
                                i = o.body
                            }
                            s = i === e
                        }
                        o = t(),
                        c.m.eb(o, n, "hasfocus", s, !0),
                        e.__ko_hasfocusLastValue = s,
                        e.__ko_hasfocusUpdating = !1
                    }
                    var o = s.bind(null, !0)
                      , i = s.bind(null, !1);
                    c.a.B(e, "focus", o),
                    c.a.B(e, "focusin", o),
                    c.a.B(e, "blur", i),
                    c.a.B(e, "focusout", i),
                    e.__ko_hasfocusLastValue = !1
                },
                update: function(e, t) {
                    var n = !!c.a.f(t());
                    e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === n || (n ? e.focus() : e.blur(),
                    !n && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(),
                    c.u.G(c.a.Fb, null, [e, n ? "focusin" : "focusout"]))
                }
            },
            c.m.wa.hasfocus = !0,
            c.c.hasFocus = c.c.hasfocus,
            c.m.wa.hasFocus = "hasfocus",
            c.c.html = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(e, t) {
                    c.a.fc(e, t())
                }
            },
            function() {
                function e(e, t, n) {
                    c.c[e] = {
                        init: function(e, s, o, i, a) {
                            var l, d, u, h, m, f, r = {};
                            return t && (i = o.get("as"),
                            u = o.get("noChildContext"),
                            l = !i || !u,
                            r = {
                                as: i,
                                noChildContext: u,
                                exportDependencies: l
                            }),
                            f = (m = "render" == o.get("completeOn")) || o.has(c.i.pa),
                            c.o(function() {
                                var p, i = c.a.f(s()), o = !n !== !i, u = !d;
                                (l || o !== h) && (f && (a = c.i.Cb(e, a)),
                                o && ((!t || l) && (r.dataDependency = c.S.o()),
                                p = t ? a.createChildContext("function" == typeof i ? i : s, r) : c.S.qa() ? a.extend(null, r) : a),
                                u && c.S.qa() && (d = c.a.Ca(c.h.childNodes(e), !0)),
                                o ? (u || c.h.va(e, c.a.Ca(d)),
                                c.Oa(p, e)) : (c.h.Ea(e),
                                m || c.i.ma(e, c.i.H)),
                                h = o)
                            }, null, {
                                l: e
                            }),
                            {
                                controlsDescendantBindings: !0
                            }
                        }
                    },
                    c.m.Ra[e] = !1,
                    c.h.ea[e] = !0
                }
                e("if"),
                e("ifnot", !1, !0),
                e("with", !0)
            }(),
            c.c.let = {
                init: function(e, t, n, s, o) {
                    return t = o.extend(t),
                    c.Oa(t, e),
                    {
                        controlsDescendantBindings: !0
                    }
                }
            },
            c.h.ea.let = !0,
            p = {},
            c.c.options = {
                init: function(e) {
                    if ("select" !== c.a.R(e))
                        throw Error("options binding applies only to SELECT elements");
                    for (; 0 < e.length; )
                        e.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(t, n, s) {
                    function m() {
                        return c.a.jb(t.options, function(e) {
                            return e.selected
                        })
                    }
                    function f(e, t, n) {
                        var s = typeof t;
                        return "function" == s ? t(e) : "string" == s ? e[t] : n
                    }
                    function g(e, n) {
                        if (r && a)
                            c.i.ma(t, c.i.H);
                        else if (i.length) {
                            var s = 0 <= c.a.A(i, c.w.M(n[0]));
                            c.a.Zc(n[0], s),
                            r && !s && c.u.G(c.a.Fb, null, [t, "change"])
                        }
                    }
                    var i, r, u, h, l = t.multiple, d = 0 != t.length && l ? t.scrollTop : null, o = c.a.f(n()), a = s.get("valueAllowUnset") && s.has("value"), v = s.get("optionsIncludeDestroyed");
                    n = {},
                    i = [],
                    a || (l ? i = c.a.Mb(m(), c.w.M) : 0 <= t.selectedIndex && i.push(c.w.M(t.options[t.selectedIndex]))),
                    o && ("undefined" == typeof o.length && (o = [o]),
                    u = c.a.jb(o, function(t) {
                        return v || t === e || null === t || !c.a.f(t._destroy)
                    }),
                    s.has("optionsCaption") && (o = c.a.f(s.get("optionsCaption")),
                    null !== o && o !== e && u.unshift(p))),
                    r = !1,
                    n.beforeRemove = function(e) {
                        t.removeChild(e)
                    }
                    ,
                    o = g,
                    s.has("optionsAfterRender") && "function" == typeof s.get("optionsAfterRender") && (o = function(t, n) {
                        g(0, n),
                        c.u.G(s.get("optionsAfterRender"), null, [n[0], t !== p ? t : e])
                    }
                    ),
                    c.a.ec(t, u, function(n, o, l) {
                        return l.length && (i = !a && l[0].selected ? [c.w.M(l[0])] : [],
                        r = !0),
                        o = t.ownerDocument.createElement("option"),
                        n === p ? (c.a.Bb(o, s.get("optionsCaption")),
                        c.w.cb(o, e)) : (l = f(n, s.get("optionsValue"), n),
                        c.w.cb(o, c.a.f(l)),
                        n = f(n, s.get("optionsText"), l),
                        c.a.Bb(o, n)),
                        [o]
                    }, n, o),
                    a || (l ? h = i.length && m().length < i.length : h = i.length && 0 <= t.selectedIndex ? c.w.M(t.options[t.selectedIndex]) !== i[0] : i.length || 0 <= t.selectedIndex,
                    h && c.u.G(c.a.Fb, null, [t, "change"])),
                    (a || c.S.Ya()) && c.i.ma(t, c.i.H),
                    c.a.wd(t),
                    d && 20 < Math.abs(d - t.scrollTop) && (t.scrollTop = d)
                }
            },
            c.c.options.$b = c.a.g.Z(),
            c.c.selectedOptions = {
                init: function(e, t, n) {
                    function s() {
                        var o = t()
                          , s = [];
                        c.a.D(e.getElementsByTagName("option"), function(e) {
                            e.selected && s.push(c.w.M(e))
                        }),
                        c.m.eb(o, n, "selectedOptions", s)
                    }
                    function i() {
                        var n = c.a.f(t())
                          , s = e.scrollTop;
                        n && "number" == typeof n.length && c.a.D(e.getElementsByTagName("option"), function(e) {
                            var t = 0 <= c.a.A(n, c.w.M(e));
                            e.selected != t && c.a.Zc(e, t)
                        }),
                        e.scrollTop = s
                    }
                    if ("select" != c.a.R(e))
                        throw Error("selectedOptions binding applies only to SELECT elements");
                    var o;
                    c.i.subscribe(e, c.i.H, function() {
                        o ? s() : (c.a.B(e, "change", s),
                        o = c.o(i, null, {
                            l: e
                        }))
                    }, null, {
                        notifyImmediately: !0
                    })
                },
                update: function() {}
            },
            c.m.wa.selectedOptions = !0,
            c.c.style = {
                update: function(n, s) {
                    var o = c.a.f(s() || {});
                    c.a.P(o, function(s, o) {
                        if (o = c.a.f(o),
                        (null === o || o === e || !1 === o) && (o = ""),
                        t)
                            t(n).css(s, o);
                        else if (/^--/.test(s))
                            n.style.setProperty(s, o);
                        else {
                            s = s.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            });
                            var i = n.style[s];
                            n.style[s] = o,
                            o === i || n.style[s] != i || isNaN(o) || (n.style[s] = o + "px")
                        }
                    })
                }
            },
            c.c.submit = {
                init: function(e, t, n, s, o) {
                    if ("function" != typeof t())
                        throw Error("The value for a submit binding must be a function");
                    c.a.B(e, "submit", function(n) {
                        var s, i = t();
                        try {
                            s = i.call(o.$data, e)
                        } finally {
                            !0 !== s && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                        }
                    })
                }
            },
            c.c.text = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(e, t) {
                    c.a.Bb(e, t())
                }
            },
            c.h.ea.text = !0,
            function() {
                if (s && s.navigator && (n = function(e) {
                    if (e)
                        return parseFloat(e[1])
                }
                ,
                o = s.navigator.userAgent,
                (i = s.opera && s.opera.version && parseInt(s.opera.version())) || (l = n(o.match(/Edge\/([^ ]+)$/))) || n(o.match(/Chrome\/([^ ]+)/)) || (a = n(o.match(/Version\/([^ ]+) Safari/))) || (r = n(o.match(/Firefox\/([^ ]+)/))) || (t = c.a.W || n(o.match(/MSIE ([^ ]+)/))) || (t = n(o.match(/rv:([^ )]+)/)))),
                8 <= t && 10 > t)
                    var t, n, o, i, a, r, l, d = c.a.g.Z(), u = c.a.g.Z(), m = function(e) {
                        var t = this.activeElement;
                        (t = t && c.a.g.get(t, u)) && t(e)
                    }, h = function(e, t) {
                        var n = e.ownerDocument;
                        c.a.g.get(n, d) || (c.a.g.set(n, d, !0),
                        c.a.B(n, "selectionchange", m)),
                        c.a.g.set(e, u, t)
                    };
                c.c.textInput = {
                    init: function(n, s, o) {
                        function d(e, t) {
                            c.a.B(n, e, t)
                        }
                        function j() {
                            var t = c.a.f(s());
                            (null === t || t === e) && (t = ""),
                            p !== e && t === p ? c.a.setTimeout(j, 4) : n.value !== t && (b = !0,
                            n.value = t,
                            b = !1,
                            g = n.value)
                        }
                        function m() {
                            f || (p = n.value,
                            f = c.a.setTimeout(u, 4))
                        }
                        function u() {
                            clearTimeout(f),
                            p = f = e;
                            var t = n.value;
                            g !== t && (g = t,
                            c.m.eb(s(), o, "textInput", t))
                        }
                        var f, p, g = n.value, v = 9 == c.a.W ? m : u, b = !1;
                        t && d("keypress", u),
                        11 > t && d("propertychange", function(e) {
                            b || "value" !== e.propertyName || v(e)
                        }),
                        8 == t && (d("keyup", u),
                        d("keydown", u)),
                        h && (h(n, v),
                        d("dragend", m)),
                        (!t || 9 <= t) && d("input", v),
                        5 > a && "textarea" === c.a.R(n) ? (d("keydown", m),
                        d("paste", m),
                        d("cut", m)) : 11 > i ? d("keydown", m) : 4 > r ? (d("DOMAutoComplete", u),
                        d("dragdrop", u),
                        d("drop", u)) : l && "number" === n.type && d("keydown", m),
                        d("change", u),
                        d("blur", u),
                        c.o(j, null, {
                            l: n
                        })
                    }
                },
                c.m.wa.textInput = !0,
                c.c.textinput = {
                    preprocess: function(e, t, n) {
                        n("textInput", e)
                    }
                }
            }(),
            c.c.uniqueName = {
                init: function(e, t) {
                    if (t()) {
                        var n = "ko_unique_" + ++c.c.uniqueName.rd;
                        c.a.Yc(e, n)
                    }
                }
            },
            c.c.uniqueName.rd = 0,
            c.c.using = {
                init: function(e, t, n, s, o) {
                    var i;
                    return n.has("as") && (i = {
                        as: n.get("as"),
                        noChildContext: n.get("noChildContext")
                    }),
                    t = o.createChildContext(t, i),
                    c.Oa(t, e),
                    {
                        controlsDescendantBindings: !0
                    }
                }
            },
            c.h.ea.using = !0,
            c.c.value = {
                init: function(t, n, s) {
                    if (r = c.a.R(t),
                    l = "input" == r,
                    !l || "checkbox" != t.type && "radio" != t.type) {
                        var o, a, r, l, m, i = [], d = s.get("valueUpdate"), u = !1, h = null;
                        d && ("string" == typeof d ? i = [d] : i = c.a.wc(d),
                        c.a.Pa(i, "change")),
                        o = function() {
                            h = null,
                            u = !1;
                            var e = n()
                              , o = c.w.M(t);
                            c.m.eb(e, s, "value", o)
                        }
                        ,
                        !c.a.W || !l || "text" != t.type || "off" == t.autocomplete || t.form && "off" == t.form.autocomplete || -1 != c.a.A(i, "propertychange") || (c.a.B(t, "propertychange", function() {
                            u = !0
                        }),
                        c.a.B(t, "focus", function() {
                            u = !1
                        }),
                        c.a.B(t, "blur", function() {
                            u && o()
                        })),
                        c.a.D(i, function(e) {
                            var n = o;
                            c.a.Ud(e, "after") && (n = function() {
                                h = c.w.M(t),
                                c.a.setTimeout(o, 0)
                            }
                            ,
                            e = e.substring(5)),
                            c.a.B(t, e, n)
                        }),
                        a = l && "file" == t.type ? function() {
                            var s = c.a.f(n());
                            null === s || s === e || "" === s ? t.value = "" : c.u.G(o)
                        }
                        : function() {
                            var i = c.a.f(n())
                              , l = c.w.M(t);
                            null !== h && i === h ? c.a.setTimeout(a, 0) : (i !== l || l === e) && ("select" === r ? (l = s.get("valueAllowUnset"),
                            c.w.cb(t, i, l),
                            l || i === c.w.M(t) || c.u.G(o)) : c.w.cb(t, i))
                        }
                        ,
                        "select" === r ? c.i.subscribe(t, c.i.H, function() {
                            m ? s.get("valueAllowUnset") ? a() : o() : (c.a.B(t, "change", o),
                            m = c.o(a, null, {
                                l: t
                            }))
                        }, null, {
                            notifyImmediately: !0
                        }) : (c.a.B(t, "change", o),
                        c.o(a, null, {
                            l: t
                        }))
                    } else
                        c.ib(t, {
                            checkedValue: n
                        })
                },
                update: function() {}
            },
            c.m.wa.value = !0,
            c.c.visible = {
                update: function(e, t) {
                    var n = c.a.f(t())
                      , s = "none" != e.style.display;
                    n && !s ? e.style.display = "" : !n && s && (e.style.display = "none")
                }
            },
            c.c.hidden = {
                update: function(e, t) {
                    c.c.visible.update(e, function() {
                        return !c.a.f(t())
                    })
                }
            },
            function(e) {
                c.c[e] = {
                    init: function(t, n, s, o, i) {
                        return c.c.event.init.call(this, t, function() {
                            var t = {};
                            return t[e] = n(),
                            t
                        }, s, o, i)
                    }
                }
            }("click"),
            c.ca = function() {}
            ,
            c.ca.prototype.renderTemplateSource = function() {
                throw Error("Override renderTemplateSource")
            }
            ,
            c.ca.prototype.createJavaScriptEvaluatorBlock = function() {
                throw Error("Override createJavaScriptEvaluatorBlock")
            }
            ,
            c.ca.prototype.makeTemplateSource = function(e, t) {
                if ("string" == typeof e) {
                    t = t || n;
                    var s = t.getElementById(e);
                    if (!s)
                        throw Error("Cannot find template with ID " + e);
                    return new c.C.F(s)
                }
                if (1 == e.nodeType || 8 == e.nodeType)
                    return new c.C.ia(e);
                throw Error("Unknown template type: " + e)
            }
            ,
            c.ca.prototype.renderTemplate = function(e, t, n, s) {
                return e = this.makeTemplateSource(e, s),
                this.renderTemplateSource(e, t, n, s)
            }
            ,
            c.ca.prototype.isTemplateRewritten = function(e, t) {
                return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, t).data("isRewritten")
            }
            ,
            c.ca.prototype.rewriteTemplate = function(e, t, n) {
                e = this.makeTemplateSource(e, n),
                t = t(e.text()),
                e.text(t),
                e.data("isRewritten", !0)
            }
            ,
            c.b("templateEngine", c.ca),
            c.kc = function() {
                function e(e, t, n, s) {
                    e = c.m.ac(e);
                    for (var o, a, r = c.m.Ra, i = 0; i < e.length; i++)
                        if (o = e[i].key,
                        Object.prototype.hasOwnProperty.call(r, o))
                            if (a = r[o],
                            "function" == typeof a) {
                                if (o = a(e[i].value))
                                    throw Error(o)
                            } else if (!a)
                                throw Error("This template engine does not support the '" + o + "' binding within its templates");
                    return n = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + c.m.vb(e, {
                        valueAccessors: !0
                    }) + " } })()},'" + n.toLowerCase() + "')",
                    s.createJavaScriptEvaluatorBlock(n) + t
                }
                var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9-]+(?:=(?:"[^"]*"|'[^']*'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi
                  , n = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    xd: function(e, t, n) {
                        t.isTemplateRewritten(e, n) || t.rewriteTemplate(e, function(e) {
                            return c.kc.Ld(e, t)
                        }, n)
                    },
                    Ld: function(s, o) {
                        return s.replace(t, function(t, n, s, i, a) {
                            return e(a, n, s, o)
                        }).replace(n, function(t, n) {
                            return e(n, "<!-- ko -->", "#comment", o)
                        })
                    },
                    md: function(e, t) {
                        return c.aa.Xb(function(n, s) {
                            var o = n.nextSibling;
                            o && o.nodeName.toLowerCase() === t && c.ib(o, e, s)
                        })
                    }
                }
            }(),
            c.b("__tr_ambtns", c.kc.md),
            function() {
                c.C = {},
                c.C.F = function(e) {
                    if (this.F = e) {
                        var t = c.a.R(e);
                        this.ab = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && e.content && 11 === e.content.nodeType ? 3 : 4
                    }
                }
                ,
                c.C.F.prototype.text = function() {
                    var t, e = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                    if (0 == arguments.length)
                        return this.F[e];
                    t = arguments[0],
                    "innerHTML" === e ? c.a.fc(this.F, t) : this.F[e] = t
                }
                ;
                var t, n = c.a.g.Z() + "_";
                c.C.F.prototype.data = function(e) {
                    if (1 === arguments.length)
                        return c.a.g.get(this.F, n + e);
                    c.a.g.set(this.F, n + e, arguments[1])
                }
                ,
                t = c.a.g.Z(),
                c.C.F.prototype.nodes = function() {
                    if (n = this.F,
                    0 == arguments.length) {
                        var n, o, s = c.a.g.get(n, t) || {}, i = s.lb || (3 === this.ab ? n.content : 4 === this.ab ? n : e);
                        return (!i || s.jd) && (o = this.text(),
                        o && o !== s.bb && (i = c.a.Md(o, n.ownerDocument),
                        c.a.g.set(n, t, {
                            lb: i,
                            bb: o,
                            jd: !0
                        }))),
                        i
                    }
                    s = arguments[0],
                    this.ab !== e && this.text(""),
                    c.a.g.set(n, t, {
                        lb: s
                    })
                }
                ,
                c.C.ia = function(e) {
                    this.F = e
                }
                ,
                c.C.ia.prototype = new c.C.F,
                c.C.ia.prototype.constructor = c.C.ia,
                c.C.ia.prototype.text = function() {
                    if (0 == arguments.length) {
                        var n = c.a.g.get(this.F, t) || {};
                        return n.bb === e && n.lb && (n.bb = n.lb.innerHTML),
                        n.bb
                    }
                    c.a.g.set(this.F, t, {
                        bb: arguments[0]
                    })
                }
                ,
                c.b("templateSources", c.C),
                c.b("templateSources.domElement", c.C.F),
                c.b("templateSources.anonymousTemplate", c.C.ia)
            }(),
            function() {
                function t(e, t, n) {
                    var s;
                    for (t = c.h.nextSibling(t); e && (s = e) !== t; )
                        e = c.h.nextSibling(s),
                        n(s, e)
                }
                function o(e, n) {
                    if (e.length) {
                        var s = e[0]
                          , o = e[e.length - 1]
                          , i = s.parentNode
                          , a = c.ga.instance
                          , r = a.preprocessNode;
                        if (r) {
                            if (t(s, o, function(e, t) {
                                var i = e.previousSibling
                                  , n = r.call(a, e);
                                n && (e === s && (s = n[0] || t),
                                e === o && (o = n[n.length - 1] || i))
                            }),
                            e.length = 0,
                            !s)
                                return;
                            s === o ? e.push(s) : (e.push(s, o),
                            c.a.Ua(e, i))
                        }
                        t(s, o, function(e) {
                            1 !== e.nodeType && 8 !== e.nodeType || c.vc(n, e)
                        }),
                        t(s, o, function(e) {
                            1 !== e.nodeType && 8 !== e.nodeType || c.aa.cd(e, [n])
                        }),
                        c.a.Ua(e, i)
                    }
                }
                function n(e) {
                    return e.nodeType ? e : 0 < e.length ? e[0] : null
                }
                function i(e, t, i, a, r) {
                    r = r || {};
                    var l = (e && n(e) || i || {}).ownerDocument
                      , d = r.templateEngine || s;
                    if (c.kc.xd(i, d, l),
                    i = d.renderTemplate(i, a, r, l),
                    "number" != typeof i.length || 0 < i.length && "number" != typeof i[0].nodeType)
                        throw Error("Template engine must return an array of DOM nodes");
                    switch (l = !1,
                    t) {
                    case "replaceChildren":
                        c.h.va(e, i),
                        l = !0;
                        break;
                    case "replaceNode":
                        c.a.Xc(e, i),
                        l = !0;
                        break;
                    case "ignoreTargetNode":
                        break;
                    default:
                        throw Error("Unknown renderMode: " + t)
                    }
                    return l && (o(i, a),
                    r.afterRender && c.u.G(r.afterRender, null, [i, a[r.as || "$data"]]),
                    "replaceChildren" == t && c.i.ma(e, c.i.H)),
                    i
                }
                function a(e, t, n) {
                    return c.O(e) ? e() : "function" == typeof e ? e(t, n) : e
                }
                c.gc = function(t) {
                    if (t != e && !(t instanceof c.ca))
                        throw Error("templateEngine must inherit from ko.templateEngine");
                    s = t
                }
                ,
                c.dc = function(t, o, r, l, d) {
                    if (r = r || {},
                    (r.templateEngine || s) == e)
                        throw Error("Set a template engine before calling renderTemplate");
                    if (d = d || "replaceChildren",
                    l) {
                        var u = n(l);
                        return c.$(function() {
                            var e = o && o instanceof c.fa ? o : new c.fa(o,null,null,null,{
                                exportDependencies: !0
                            })
                              , s = a(t, e.$data, e)
                              , e = i(l, d, s, e, r);
                            "replaceNode" == d && (l = e,
                            u = n(l))
                        }, null, {
                            Sa: function() {
                                return !u || !c.a.Sb(u)
                            },
                            l: u && "replaceNode" == d ? u.parentNode : u
                        })
                    }
                    return c.aa.Xb(function(e) {
                        c.dc(t, o, r, e, "replaceNode")
                    })
                }
                ,
                c.Qd = function(t, n, s, r, l) {
                    function u(e, t) {
                        c.u.G(c.a.ec, null, [r, e, g, s, p, t]),
                        c.i.ma(r, c.i.H)
                    }
                    function p(e, t) {
                        o(t, d),
                        s.afterRender && s.afterRender(t, e),
                        d = null
                    }
                    function g(e, n) {
                        d = l.createChildContext(e, {
                            as: h,
                            noChildContext: s.noChildContext,
                            extend: function(e) {
                                e.$index = n,
                                h && (e[h + "Index"] = n)
                            }
                        });
                        var o = a(t, e, d);
                        return i(r, "ignoreTargetNode", o, d, s)
                    }
                    var d, m, h = s.as, f = !1 === s.includeDestroyed || c.options.foreachHidesDestroyed && !s.includeDestroyed;
                    return f || s.beforeRemove || !c.Pc(n) ? c.$(function() {
                        var t = c.a.f(n) || [];
                        "undefined" == typeof t.length && (t = [t]),
                        f && (t = c.a.jb(t, function(t) {
                            return t === e || null === t || !c.a.f(t._destroy)
                        })),
                        u(t)
                    }, null, {
                        l: r
                    }) : (u(n.v()),
                    m = n.subscribe(function(e) {
                        u(n(), e)
                    }, null, "arrayChange"),
                    m.l(r),
                    m)
                }
                ;
                var s, r = c.a.g.Z(), l = c.a.g.Z();
                c.c.template = {
                    init: function(e, t) {
                        var s, n = c.a.f(t());
                        if ("string" == typeof n || "name"in n)
                            c.h.Ea(e);
                        else if ("nodes"in n) {
                            if (n = n.nodes || [],
                            c.O(n))
                                throw Error('The "nodes" option must be a plain, non-observable array.');
                            s = n[0] && n[0].parentNode,
                            s && c.a.g.get(s, l) || (s = c.a.Yb(n),
                            c.a.g.set(s, l, !0)),
                            new c.C.ia(e).nodes(s)
                        } else if (n = c.h.childNodes(e),
                        0 < n.length)
                            s = c.a.Yb(n),
                            new c.C.ia(e).nodes(s);
                        else
                            throw Error("Anonymous template defined, but no template content was provided");
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(t, n, s, o, i) {
                        var a = n();
                        n = c.a.f(a),
                        s = !0,
                        o = null,
                        "string" == typeof n ? n = {} : (a = "name"in n ? n.name : t,
                        "if"in n && (s = c.a.f(n.if)),
                        s && "ifnot"in n && (s = !c.a.f(n.ifnot)),
                        s && !a && (s = !1)),
                        "foreach"in n ? o = c.Qd(a, s && n.foreach || [], n, t, i) : s ? (s = i,
                        "data"in n && (s = i.createChildContext(n.data, {
                            as: n.as,
                            noChildContext: n.noChildContext,
                            exportDependencies: !0
                        })),
                        o = c.dc(a, s, n, t)) : c.h.Ea(t),
                        i = o,
                        (n = c.a.g.get(t, r)) && "function" == typeof n.s && n.s(),
                        c.a.g.set(t, r, !i || i.ja && !i.ja() ? e : i)
                    }
                },
                c.m.Ra.template = function(e) {
                    return e = c.m.ac(e),
                    1 == e.length && e[0].unknown || c.m.Id(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                }
                ,
                c.h.ea.template = !0
            }(),
            c.b("setTemplateEngine", c.gc),
            c.b("renderTemplate", c.dc),
            c.a.Kc = function(e, t, n) {
                if (e.length && t.length) {
                    var s, o, i, a, r;
                    for (o = r = 0; (!n || o < n) && (i = e[r]); ++r) {
                        for (s = 0; a = t[s]; ++s)
                            if (i.value === a.value) {
                                i.moved = a.index,
                                a.moved = i.index,
                                t.splice(s, 1),
                                o = s = 0;
                                break
                            }
                        o += s
                    }
                }
            }
            ,
            c.a.Pb = function() {
                function e(e, t, n, s, o) {
                    var i, a, f, p, v, r = Math.min, u = Math.max, h = [], d = e.length, l = t.length, m = l - d || 1, g = d + l + 1;
                    for (a = 0; a <= d; a++)
                        for (p = f,
                        h.push(f = []),
                        v = r(l, a + m),
                        i = u(0, a - 1); i <= v; i++)
                            f[i] = i ? a ? e[a - 1] === t[i - 1] ? p[i - 1] : r(p[i] || g, f[i - 1] || g) + 1 : i + 1 : a + 1;
                    r = [],
                    u = [],
                    m = [],
                    a = d;
                    for (i = l; a || i; )
                        l = h[a][i] - 1,
                        i && l === h[a][i - 1] ? u.push(r[r.length] = {
                            status: n,
                            value: t[--i],
                            index: i
                        }) : a && l === h[a - 1][i] ? m.push(r[r.length] = {
                            status: s,
                            value: e[--a],
                            index: a
                        }) : (--i,
                        --a,
                        o.sparse || r.push({
                            status: "retained",
                            value: t[i]
                        }));
                    return c.a.Kc(m, u, !o.dontLimitMoves && 10 * d),
                    r.reverse()
                }
                return function(t, n, s) {
                    return s = "boolean" == typeof s ? {
                        dontLimitMoves: s
                    } : s || {},
                    t = t || [],
                    n = n || [],
                    t.length < n.length ? e(t, n, "added", "deleted", s) : e(n, t, "deleted", "added", s)
                }
            }(),
            c.b("utils.compareArrays", c.a.Pb),
            function() {
                function s(t, n, s, o, i) {
                    var a = []
                      , r = c.$(function() {
                        var e = n(s, i, c.a.Ua(a, t)) || [];
                        0 < a.length && (c.a.Xc(a, e),
                        o && c.u.G(o, null, [s, e, i])),
                        a.length = 0,
                        c.a.Nb(a, e)
                    }, null, {
                        l: t,
                        Sa: function() {
                            return !c.a.kd(a)
                        }
                    });
                    return {
                        Y: a,
                        $: r.ja() ? r : e
                    }
                }
                var t = c.a.g.Z()
                  , n = c.a.g.Z();
                c.a.ec = function(o, i, a, r, l, d) {
                    function T(e) {
                        u = {
                            Aa: e,
                            pb: c.ta(v++)
                        },
                        f.push(u),
                        F || M.push(u)
                    }
                    function j(e) {
                        u = g[e],
                        v !== u.pb.v() && E.push(u),
                        u.pb(v++),
                        c.a.Ua(u.Y, o),
                        f.push(u)
                    }
                    function x(e, t) {
                        if (e)
                            for (var n = 0, s = t.length; n < s; n++)
                                c.a.D(t[n].Y, function(s) {
                                    e(s, n, t[n].Aa)
                                })
                    }
                    i = i || [],
                    "undefined" == typeof i.length && (i = [i]),
                    r = r || {};
                    var u, h, p, b, y, _, O, k, g = c.a.g.get(o, t), F = !g, f = [], m = 0, v = 0, C = [], A = [], w = [], E = [], M = [], S = 0;
                    if (F)
                        c.a.D(i, T);
                    else {
                        (!d || g && g._countWaitingForRemove) && (h = c.a.Mb(g, function(e) {
                            return e.Aa
                        }),
                        d = c.a.Pb(h, i, {
                            dontLimitMoves: r.dontLimitMoves,
                            sparse: !0
                        }));
                        for (h = 0; b = d[h]; h++)
                            switch (O = b.moved,
                            k = b.index,
                            b.status) {
                            case "deleted":
                                for (; m < k; )
                                    j(m++);
                                O === e && (u = g[m],
                                u.$ && (u.$.s(),
                                u.$ = e),
                                c.a.Ua(u.Y, o).length && (r.beforeRemove && (f.push(u),
                                S++,
                                u.Aa === n ? u = null : w.push(u)),
                                u && C.push.apply(C, u.Y))),
                                m++;
                                break;
                            case "added":
                                for (; v < k; )
                                    j(m++);
                                O !== e ? (A.push(f.length),
                                j(O)) : T(b.value)
                            }
                        for (; v < i.length; )
                            j(m++);
                        f._countWaitingForRemove = S
                    }
                    c.a.g.set(o, t, f),
                    x(r.beforeMove, E),
                    c.a.D(C, r.beforeRemove ? c.oa : c.removeNode);
                    try {
                        y = o.ownerDocument.activeElement
                    } catch {}
                    if (A.length)
                        for (; (h = A.shift()) != e; ) {
                            u = f[h];
                            for (p = e; h; )
                                if ((_ = f[--h].Y) && _.length) {
                                    p = _[_.length - 1];
                                    break
                                }
                            for (i = 0; m = u.Y[i]; p = m,
                            i++)
                                c.h.Wb(o, m, p)
                        }
                    for (h = 0; u = f[h]; h++) {
                        u.Y || c.a.extend(u, s(o, a, u.Aa, l, u.pb));
                        for (i = 0; m = u.Y[i]; p = m,
                        i++)
                            c.h.Wb(o, m, p);
                        !u.Ed && l && (l(u.Aa, u.Y, u.pb),
                        u.Ed = !0,
                        p = u.Y[u.Y.length - 1])
                    }
                    y && o.ownerDocument.activeElement != y && y.focus(),
                    x(r.beforeRemove, w);
                    for (h = 0; h < w.length; ++h)
                        w[h].Aa = n;
                    x(r.afterMove, E),
                    x(r.afterAdd, M)
                }
            }(),
            c.b("utils.setDomNodeChildrenFromArrayMapping", c.a.ec),
            c.ba = function() {
                this.allowTemplateRewriting = !1
            }
            ,
            c.ba.prototype = new c.ca,
            c.ba.prototype.constructor = c.ba,
            c.ba.prototype.renderTemplateSource = function(e, t, n, s) {
                return (t = (9 > c.a.W ? 0 : e.nodes) ? e.nodes() : null) ? c.a.la(t.cloneNode(!0).childNodes) : (e = e.text(),
                c.a.ua(e, s))
            }
            ,
            c.ba.Ma = new c.ba,
            c.gc(c.ba.Ma),
            c.b("nativeTemplateEngine", c.ba),
            function() {
                c.$a = function() {
                    var e = this.Hd = function() {
                        if (!t || !t.tmpl)
                            return 0;
                        try {
                            if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__"))
                                return 2
                        } catch {}
                        return 1
                    }();
                    this.renderTemplateSource = function(s, o, i, a) {
                        if (a = a || n,
                        i = i || {},
                        2 > e)
                            throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var r = s.data("precompiled");
                        return r || (r = s.text() || "",
                        r = t.template(null, "{{ko_with $item.koBindingContext}}" + r + "{{/ko_with}}"),
                        s.data("precompiled", r)),
                        s = [o.$data],
                        o = t.extend({
                            koBindingContext: o
                        }, i.templateOptions),
                        o = t.tmpl(r, s, o),
                        o.appendTo(a.createElement("div")),
                        t.fragments = {},
                        o
                    }
                    ,
                    this.createJavaScriptEvaluatorBlock = function(e) {
                        return "{{ko_code ((function() { return " + e + " })()) }}"
                    }
                    ,
                    this.addTemplate = function(e, t) {
                        n.write("<script type='text/html' id='" + e + "'>" + t + "</script>")
                    }
                    ,
                    0 < e && (t.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    },
                    t.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    })
                }
                ,
                c.$a.prototype = new c.ca,
                c.$a.prototype.constructor = c.$a;
                var e = new c.$a;
                0 < e.Hd && c.gc(e),
                c.b("jqueryTmplTemplateEngine", c.$a)
            }()
        })
    }
    )()
}
)()
