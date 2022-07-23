/*!
 Name : Anti-addiction
 author : Yefengbar.com
 date : 2020-06-24 17:54:09
 */
! function(e) {
  //防沉迷
  window.onload = function (){
    try {
      if(window.jQuery){

      }else {
        window.jQuery = jquery
      }
      var myScript =document.createElement('script')
      myScript.type = "text/javascript";
      myScript.src='//n.7k7kimg.cn/uploads/cdn/api/loginPlus/js/built.a9a938cb.202201122026.js';
      document.body.appendChild(myScript);
    }catch (e){
      console.log(e)
      console.log('Anti加载失败')
    }
  }
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(i, o, function(t) {
        return e[t]
      }.bind(null, o));
    return i
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 3)
}([function(e, t, n) {
  var i;
  ! function(t, n) {
    "use strict";
    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, (function(n, o) {
    "use strict";

    function r(e) {
      return null != e && e === e.window
    }
    var a = [],
      s = n.document,
      l = Object.getPrototypeOf,
      u = a.slice,
      c = a.concat,
      d = a.push,
      p = a.indexOf,
      f = {},
      h = f.toString,
      m = f.hasOwnProperty,
      g = m.toString,
      v = g.call(Object),
      x = {},
      b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      y = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

    function w(e, t, n) {
      var i, o, r = (n = n || s).createElement("script");
      if (r.text = e, t)
        for (i in y)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
      n.head.appendChild(r).parentNode.removeChild(r)
    }

    function T(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[h.call(e)] || "object" : typeof e
    }
    var k = "3.4.1",
      _ = function(e, t) {
        return new _.fn.init(e, t)
      },
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function A(e) {
      var t = !!e && "length" in e && e.length,
        n = T(e);
      return !b(e) && !r(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    _.fn = _.prototype = {
      jquery: k,
      constructor: _,
      length: 0,
      toArray: function() {
        return u.call(this)
      },
      get: function(e) {
        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
        var t = _.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function(e) {
        return _.each(this, e)
      },
      map: function(e) {
        return this.pushStack(_.map(this, (function(t, n) {
          return e.call(t, n, t)
        })))
      },
      slice: function() {
        return this.pushStack(u.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: d,
      sort: a.sort,
      splice: a.splice
    }, _.extend = _.fn.extend = function() {
      var e, t, n, i, o, r, a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;
      for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
        if (null != (e = arguments[s]))
          for (t in e) i = e[t], "__proto__" !== t && a !== i && (u && i && (_.isPlainObject(i) || (o = Array.isArray(i))) ? (n = a[t], r = o && !Array.isArray(n) ? [] : o || _.isPlainObject(n) ? n : {}, o = !1, a[t] = _.extend(u, r, i)) : void 0 !== i && (a[t] = i));
      return a
    }, _.extend({
      expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(!e || "[object Object]" !== h.call(e) || (t = l(e)) && ("function" != typeof(n = m.call(t, "constructor") && t.constructor) || g.call(n) !== v))
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function(e, t) {
        w(e, {
          nonce: t && t.nonce
        })
      },
      each: function(e, t) {
        var n, i = 0;
        if (A(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(C, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (A(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : p.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return e.length = o, e
      },
      grep: function(e, t, n) {
        for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) != a && i.push(e[o]);
        return i
      },
      map: function(e, t, n) {
        var i, o, r = 0,
          a = [];
        if (A(e))
          for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
        else
          for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
        return c.apply([], a)
      },
      guid: 1,
      support: x
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = a[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
      f["[object " + t + "]"] = t.toLowerCase()
    }));
    var S = function(e) {
      function t(e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }

      function n() {
        h()
      }
      var i, o, r, a, s, l, u, c, d, p, f, h, m, g, v, x, b, y, w, T = "sizzle" + +new Date,
        k = e.document,
        _ = 0,
        C = 0,
        A = le(),
        S = le(),
        N = le(),
        j = le(),
        E = function(e, t) {
          return e === t && (f = !0), 0
        },
        D = {}.hasOwnProperty,
        I = [],
        L = I.pop,
        q = I.push,
        $ = I.push,
        O = I.slice,
        R = function(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1
        },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        B = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
        U = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
        z = new RegExp(P + "+", "g"),
        F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        W = new RegExp("^" + P + "*," + P + "*"),
        G = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = new RegExp(P + "|>"),
        X = new RegExp(U),
        J = new RegExp("^" + M + "$"),
        K = {
          ID: new RegExp("^#(" + M + ")"),
          CLASS: new RegExp("^\\.(" + M + ")"),
          TAG: new RegExp("^(" + M + "|[*])"),
          ATTR: new RegExp("^" + B),
          PSEUDO: new RegExp("^" + U),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        },
        Q = /HTML$/i,
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        ee = /^[^{]+\{\s*\[native \w/,
        te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ne = /[+~]/,
        ie = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        re = function(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        ae = ye((function(e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }), {
          dir: "parentNode",
          next: "legend"
        });
      try {
        $.apply(I = O.call(k.childNodes), k.childNodes), I[k.childNodes.length].nodeType
      } catch (i) {
        $ = {
          apply: I.length ? function(e, t) {
            q.apply(e, O.call(t))
          } : function(e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }

      function se(e, t, n, i) {
        var r, a, s, u, d, p, f, g = t && t.ownerDocument,
          b = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== b && 9 !== b && 11 !== b) return n;
        if (!i && ((t ? t.ownerDocument || t : k) !== m && h(t), t = t || m, v)) {
          if (11 !== b && (d = te.exec(e)))
            if (r = d[1]) {
              if (9 === b) {
                if (!(s = t.getElementById(r))) return n;
                if (s.id === r) return n.push(s), n
              } else if (g && (s = g.getElementById(r)) && w(t, s) && s.id === r) return n.push(s), n
            } else {
              if (d[2]) return $.apply(n, t.getElementsByTagName(e)), n;
              if ((r = d[3]) && o.getElementsByClassName && t.getElementsByClassName) return $.apply(n, t.getElementsByClassName(r)), n
            } if (o.qsa && !j[e + " "] && (!x || !x.test(e)) && (1 !== b || "object" !== t.nodeName.toLowerCase())) {
            if (f = e, g = t, 1 === b && V.test(e)) {
              for ((u = t.getAttribute("id")) ? u = u.replace(oe, re) : t.setAttribute("id", u = T), a = (p = l(e)).length; a--;) p[a] = "#" + u + " " + be(p[a]);
              f = p.join(","), g = ne.test(e) && ve(t.parentNode) || t
            }
            try {
              return $.apply(n, g.querySelectorAll(f)), n
            } catch (t) {
              j(e, !0)
            } finally {
              u === T && t.removeAttribute("id")
            }
          }
        }
        return c(e.replace(F, "$1"), t, n, i)
      }

      function le() {
        var e = [];
        return function t(n, i) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
        }
      }

      function ue(e) {
        return e[T] = !0, e
      }

      function ce(e) {
        var t = m.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function de(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
      }

      function pe(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function fe(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }

      function he(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function me(e) {
        return function(t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function ge(e) {
        return ue((function(t) {
          return t = +t, ue((function(n, i) {
            for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
          }))
        }))
      }

      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }
      for (i in o = se.support = {}, s = se.isXML = function(e) {
          var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
          return !Q.test(t || n && n.nodeName || "HTML")
        }, h = se.setDocument = function(e) {
          var i, a, l = e ? e.ownerDocument || e : k;
          return l !== m && 9 === l.nodeType && l.documentElement && (g = (m = l).documentElement, v = !s(m), k !== m && (a = m.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", n, !1) : a.attachEvent && a.attachEvent("onunload", n)), o.attributes = ce((function(e) {
            return e.className = "i", !e.getAttribute("className")
          })), o.getElementsByTagName = ce((function(e) {
            return e.appendChild(m.createComment("")), !e.getElementsByTagName("*").length
          })), o.getElementsByClassName = ee.test(m.getElementsByClassName), o.getById = ce((function(e) {
            return g.appendChild(e).id = T, !m.getElementsByName || !m.getElementsByName(T).length
          })), o.getById ? (r.filter.ID = function(e) {
            var n = e.replace(ie, t);
            return function(e) {
              return e.getAttribute("id") === n
            }
          }, r.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && v) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }) : (r.filter.ID = function(e) {
            var n = e.replace(ie, t);
            return function(e) {
              var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return t && t.value === n
            }
          }, r.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && v) {
              var n, i, o, r = t.getElementById(e);
              if (r) {
                if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                  if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
              }
              return []
            }
          }), r.find.TAG = o.getElementsByTagName ? function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : o.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, i = [],
              o = 0,
              r = t.getElementsByTagName(e);
            if ("*" !== e) return r;
            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
            return i
          }, r.find.CLASS = o.getElementsByClassName && function(e, t) {
            if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
          }, b = [], x = [], (o.qsa = ee.test(m.querySelectorAll)) && (ce((function(e) {
            g.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && x.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || x.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + T + "-]").length || x.push("~="), e.querySelectorAll(":checked").length || x.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || x.push(".#.+[+~]")
          })), ce((function(e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = m.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && x.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && x.push(":enabled", ":disabled"), g.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && x.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), x.push(",.*:")
          }))), (o.matchesSelector = ee.test(y = g.matches || g.webkitMatchesSelector || g.mozMatchesSelector || g.oMatchesSelector || g.msMatchesSelector)) && ce((function(e) {
            o.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), b.push("!=", U)
          })), x = x.length && new RegExp(x.join("|")), b = b.length && new RegExp(b.join("|")), i = ee.test(g.compareDocumentPosition), w = i || ee.test(g.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              i = t && t.parentNode;
            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, E = i ? function(e, t) {
            if (e === t) return f = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !o.sortDetached && t.compareDocumentPosition(e) === n ? e === m || e.ownerDocument === k && w(k, e) ? -1 : t === m || t.ownerDocument === k && w(k, t) ? 1 : p ? R(p, e) - R(p, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
            if (e === t) return f = !0, 0;
            var n, i = 0,
              o = e.parentNode,
              r = t.parentNode,
              a = [e],
              s = [t];
            if (!o || !r) return e === m ? -1 : t === m ? 1 : o ? -1 : r ? 1 : p ? R(p, e) - R(p, t) : 0;
            if (o === r) return pe(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) s.unshift(n);
            for (; a[i] === s[i];) i++;
            return i ? pe(a[i], s[i]) : a[i] === k ? -1 : s[i] === k ? 1 : 0
          }), m
        }, se.matches = function(e, t) {
          return se(e, null, null, t)
        }, se.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== m && h(e), o.matchesSelector && v && !j[t + " "] && (!b || !b.test(t)) && (!x || !x.test(t))) try {
            var n = y.call(e, t);
            if (n || o.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
          } catch (e) {
            j(t, !0)
          }
          return 0 < se(t, m, null, [e]).length
        }, se.contains = function(e, t) {
          return (e.ownerDocument || e) !== m && h(e), w(e, t)
        }, se.attr = function(e, t) {
          (e.ownerDocument || e) !== m && h(e);
          var n = r.attrHandle[t.toLowerCase()],
            i = n && D.call(r.attrHandle, t.toLowerCase()) ? n(e, t, !v) : void 0;
          return void 0 !== i ? i : o.attributes || !v ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, se.escape = function(e) {
          return (e + "").replace(oe, re)
        }, se.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function(e) {
          var t, n = [],
            i = 0,
            r = 0;
          if (f = !o.detectDuplicates, p = !o.sortStable && e.slice(0), e.sort(E), f) {
            for (; t = e[r++];) t === e[r] && (i = n.push(r));
            for (; i--;) e.splice(n[i], 1)
          }
          return p = null, e
        }, a = se.getText = function(e) {
          var t, n = "",
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
            } else if (3 === o || 4 === o) return e.nodeValue
          } else
            for (; t = e[i++];) n += a(t);
          return n
        }, (r = se.selectors = {
          cacheLength: 50,
          createPseudo: ue,
          match: K,
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
              return e[1] = e[1].replace(ie, t), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = l(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var n = e.replace(ie, t).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === n
              }
            },
            CLASS: function(e) {
              var t = A[e + " "];
              return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && A(e, (function(e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              }))
            },
            ATTR: function(e, t, n) {
              return function(i) {
                var o = se.attr(i, e);
                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(z, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
              }
            },
            CHILD: function(e, t, n, i, o) {
              var r = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === i && 0 === o ? function(e) {
                return !!e.parentNode
              } : function(t, n, l) {
                var u, c, d, p, f, h, m = r != a ? "nextSibling" : "previousSibling",
                  g = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  x = !l && !s,
                  b = !1;
                if (g) {
                  if (r) {
                    for (; m;) {
                      for (p = t; p = p[m];)
                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                      h = m = "only" === e && !h && "nextSibling"
                    }
                    return !0
                  }
                  if (h = [a ? g.firstChild : g.lastChild], a && x) {
                    for (b = (f = (u = (c = (d = (p = g)[T] || (p[T] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === _ && u[1]) && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                      if (1 === p.nodeType && ++b && p === t) {
                        c[e] = [_, f, b];
                        break
                      }
                  } else if (x && (b = f = (u = (c = (d = (p = t)[T] || (p[T] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === _ && u[1]), !1 === b)
                    for (;
                      (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (x && ((c = (d = p[T] || (p[T] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [_, b]), p !== t)););
                  return (b -= o) === i || b % i == 0 && 0 <= b / i
                }
              }
            },
            PSEUDO: function(e, t) {
              var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
              return i[T] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                for (var o, r = i(e, t), a = r.length; a--;) e[o = R(e, r[a])] = !(n[o] = r[a])
              })) : function(e) {
                return i(e, 0, n)
              }) : i
            }
          },
          pseudos: {
            not: ue((function(e) {
              var t = [],
                n = [],
                i = u(e.replace(F, "$1"));
              return i[T] ? ue((function(e, t, n, o) {
                for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
              })) : function(e, o, r) {
                return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
              }
            })),
            has: ue((function(e) {
              return function(t) {
                return 0 < se(e, t).length
              }
            })),
            contains: ue((function(e) {
              return e = e.replace(ie, t),
                function(t) {
                  return -1 < (t.textContent || a(t)).indexOf(e)
                }
            })),
            lang: ue((function(e) {
              return J.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(ie, t).toLowerCase(),
                function(t) {
                  var n;
                  do {
                    if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            })),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            },
            root: function(e) {
              return e === g
            },
            focus: function(e) {
              return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: me(!1),
            disabled: me(!0),
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !r.pseudos.empty(e)
            },
            header: function(e) {
              return Z.test(e.nodeName)
            },
            input: function(e) {
              return Y.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: ge((function() {
              return [0]
            })),
            last: ge((function(e, t) {
              return [t - 1]
            })),
            eq: ge((function(e, t, n) {
              return [n < 0 ? n + t : n]
            })),
            even: ge((function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            })),
            odd: ge((function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            })),
            lt: ge((function(e, t, n) {
              for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
              return e
            })),
            gt: ge((function(e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
              return e
            }))
          }
        }).pseudos.nth = r.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) r.pseudos[i] = fe(i);
      for (i in {
          submit: !0,
          reset: !0
        }) r.pseudos[i] = he(i);

      function xe() {}

      function be(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function ye(e, t, n) {
        var i = t.dir,
          o = t.next,
          r = o || i,
          a = n && "parentNode" === r,
          s = C++;
        return t.first ? function(t, n, o) {
          for (; t = t[i];)
            if (1 === t.nodeType || a) return e(t, n, o);
          return !1
        } : function(t, n, l) {
          var u, c, d, p = [_, s];
          if (l) {
            for (; t = t[i];)
              if ((1 === t.nodeType || a) && e(t, n, l)) return !0
          } else
            for (; t = t[i];)
              if (1 === t.nodeType || a)
                if (c = (d = t[T] || (t[T] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                else {
                  if ((u = c[r]) && u[0] === _ && u[1] === s) return p[2] = u[2];
                  if ((c[r] = p)[2] = e(t, n, l)) return !0
                } return !1
        }
      }

      function we(e) {
        return 1 < e.length ? function(t, n, i) {
          for (var o = e.length; o--;)
            if (!e[o](t, n, i)) return !1;
          return !0
        } : e[0]
      }

      function Te(e, t, n, i, o) {
        for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
        return a
      }

      function ke(e, t, n, i, o, r) {
        return i && !i[T] && (i = ke(i)), o && !o[T] && (o = ke(o, r)), ue((function(r, a, s, l) {
          var u, c, d, p = [],
            f = [],
            h = a.length,
            m = r || function(e, t, n) {
              for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n);
              return n
            }(t || "*", s.nodeType ? [s] : s, []),
            g = !e || !r && t ? m : Te(m, p, e, s, l),
            v = n ? o || (r ? e : h || i) ? [] : a : g;
          if (n && n(g, v, s, l), i)
            for (u = Te(v, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(g[f[c]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (u = [], c = v.length; c--;)(d = v[c]) && u.push(g[c] = d);
                o(null, v = [], u, l)
              }
              for (c = v.length; c--;)(d = v[c]) && -1 < (u = o ? R(r, d) : p[c]) && (r[u] = !(a[u] = d))
            }
          } else v = Te(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, l) : $.apply(a, v)
        }))
      }

      function _e(e) {
        for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, u = ye((function(e) {
            return e === t
          }), s, !0), c = ye((function(e) {
            return -1 < R(t, e)
          }), s, !0), p = [function(e, n, i) {
            var o = !a && (i || n !== d) || ((t = n).nodeType ? u : c)(e, n, i);
            return t = null, o
          }]; l < o; l++)
          if (n = r.relative[e[l].type]) p = [ye(we(p), n)];
          else {
            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[T]) {
              for (i = ++l; i < o && !r.relative[e[i].type]; i++);
              return ke(1 < l && we(p), 1 < l && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(F, "$1"), n, l < i && _e(e.slice(l, i)), i < o && _e(e = e.slice(i)), i < o && be(e))
            }
            p.push(n)
          } return we(p)
      }
      return xe.prototype = r.filters = r.pseudos, r.setFilters = new xe, l = se.tokenize = function(e, t) {
        var n, i, o, a, s, l, u, c = S[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, l = [], u = r.preFilter; s;) {
          for (a in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = G.exec(s)) && (n = i.shift(), o.push({
              value: n,
              type: i[0].replace(F, " ")
            }), s = s.slice(n.length)), r.filter) !(i = K[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
          if (!n) break
        }
        return t ? s.length : s ? se.error(e) : S(e, l).slice(0)
      }, u = se.compile = function(e, t) {
        var n, i = [],
          o = [],
          a = N[e + " "];
        if (!a) {
          for (n = (t = t || l(e)).length; n--;)(a = _e(t[n]))[T] ? i.push(a) : o.push(a);
          (a = N(e, function(e, t) {
            function n(n, a, s, l, u) {
              var c, p, f, g = 0,
                x = "0",
                b = n && [],
                y = [],
                w = d,
                T = n || o && r.find.TAG("*", u),
                k = _ += null == w ? 1 : Math.random() || .1,
                C = T.length;
              for (u && (d = a === m || a || u); x !== C && null != (c = T[x]); x++) {
                if (o && c) {
                  for (p = 0, a || c.ownerDocument === m || (h(c), s = !v); f = e[p++];)
                    if (f(c, a || m, s)) {
                      l.push(c);
                      break
                    } u && (_ = k)
                }
                i && ((c = !f && c) && g--, n && b.push(c))
              }
              if (g += x, i && x !== g) {
                for (p = 0; f = t[p++];) f(b, y, a, s);
                if (n) {
                  if (0 < g)
                    for (; x--;) b[x] || y[x] || (y[x] = L.call(l));
                  y = Te(y)
                }
                $.apply(l, y), u && !n && 0 < y.length && 1 < g + t.length && se.uniqueSort(l)
              }
              return u && (_ = k, d = w), b
            }
            var i = 0 < t.length,
              o = 0 < e.length;
            return i ? ue(n) : n
          }(o, i))).selector = e
        }
        return a
      }, c = se.select = function(e, n, i, o) {
        var a, s, c, d, p, f = "function" == typeof e && e,
          h = !o && l(e = f.selector || e);
        if (i = i || [], 1 === h.length) {
          if (2 < (s = h[0] = h[0].slice(0)).length && "ID" === (c = s[0]).type && 9 === n.nodeType && v && r.relative[s[1].type]) {
            if (!(n = (r.find.ID(c.matches[0].replace(ie, t), n) || [])[0])) return i;
            f && (n = n.parentNode), e = e.slice(s.shift().value.length)
          }
          for (a = K.needsContext.test(e) ? 0 : s.length; a-- && (c = s[a], !r.relative[d = c.type]);)
            if ((p = r.find[d]) && (o = p(c.matches[0].replace(ie, t), ne.test(s[0].type) && ve(n.parentNode) || n))) {
              if (s.splice(a, 1), !(e = o.length && be(s))) return $.apply(i, o), i;
              break
            }
        }
        return (f || u(e, h))(o, n, !v, i, !n || ne.test(e) && ve(n.parentNode) || n), i
      }, o.sortStable = T.split("").sort(E).join("") === T, o.detectDuplicates = !!f, h(), o.sortDetached = ce((function(e) {
        return 1 & e.compareDocumentPosition(m.createElement("fieldset"))
      })), ce((function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      })) || de("type|href|height|width", (function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      })), o.attributes && ce((function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      })) || de("value", (function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      })), ce((function(e) {
        return null == e.getAttribute("disabled")
      })) || de(H, (function(e, t, n) {
        var i;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      })), se
    }(n);

    function N(e, t, n) {
      for (var i = [], o = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (o && _(e).is(n)) break;
          i.push(e)
        } return i
    }

    function j(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
    _.find = S, _.expr = S.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = S.uniqueSort, _.text = S.getText, _.isXMLDoc = S.isXML, _.contains = S.contains, _.escapeSelector = S.escape;
    var E = _.expr.match.needsContext;

    function D(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(e, t, n) {
      return b(t) ? _.grep(e, (function(e, i) {
        return !!t.call(e, i, e) !== n
      })) : t.nodeType ? _.grep(e, (function(e) {
        return e === t !== n
      })) : "string" != typeof t ? _.grep(e, (function(e) {
        return -1 < p.call(t, e) !== n
      })) : _.filter(t, e, n)
    }
    _.filter = function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, (function(e) {
        return 1 === e.nodeType
      })))
    }, _.fn.extend({
      find: function(e) {
        var t, n, i = this.length,
          o = this;
        if ("string" != typeof e) return this.pushStack(_(e).filter((function() {
          for (t = 0; t < i; t++)
            if (_.contains(o[t], this)) return !0
        })));
        for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, o[t], n);
        return 1 < i ? _.uniqueSort(n) : n
      },
      filter: function(e) {
        return this.pushStack(L(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(L(this, e || [], !0))
      },
      is: function(e) {
        return !!L(this, "string" == typeof e && E.test(e) ? _(e) : e || [], !1).length
      }
    });
    var q, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
      var i, o;
      if (!e) return this;
      if (n = n || q, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this);
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : $.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), I.test(i[1]) && _.isPlainObject(t))
          for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (o = s.getElementById(i[2])) && (this[0] = o, this.length = 1), this
    }).prototype = _.fn, q = _(s);
    var O = /^(?:parents|prev(?:Until|All))/,
      R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function H(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    _.fn.extend({
      has: function(e) {
        var t = _(e, this),
          n = t.length;
        return this.filter((function() {
          for (var e = 0; e < n; e++)
            if (_.contains(this, t[e])) return !0
        }))
      },
      closest: function(e, t) {
        var n, i = 0,
          o = this.length,
          r = [],
          a = "string" != typeof e && _(e);
        if (!E.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                r.push(n);
                break
              } return this.pushStack(1 < r.length ? _.uniqueSort(r) : r)
      },
      index: function(e) {
        return e ? "string" == typeof e ? p.call(_(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), _.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return N(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return N(e, "parentNode", n)
      },
      next: function(e) {
        return H(e, "nextSibling")
      },
      prev: function(e) {
        return H(e, "previousSibling")
      },
      nextAll: function(e) {
        return N(e, "nextSibling")
      },
      prevAll: function(e) {
        return N(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return N(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return N(e, "previousSibling", n)
      },
      siblings: function(e) {
        return j((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return j(e.firstChild)
      },
      contents: function(e) {
        return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
      }
    }, (function(e, t) {
      _.fn[e] = function(n, i) {
        var o = _.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = _.filter(i, o)), 1 < this.length && (R[e] || _.uniqueSort(o), O.test(e) && o.reverse()), this.pushStack(o)
      }
    }));
    var P = /[^\x20\t\r\n\f]+/g;

    function M(e) {
      return e
    }

    function B(e) {
      throw e
    }

    function U(e, t, n, i) {
      var o;
      try {
        e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }
    _.Callbacks = function(e) {
      var t, n;

      function i() {
        for (s = s || e.once, a = o = !0; u.length; c = -1)
          for (r = u.shift(); ++c < l.length;) !1 === l[c].apply(r[0], r[1]) && e.stopOnFalse && (c = l.length, r = !1);
        e.memory || (r = !1), o = !1, s && (l = r ? [] : "")
      }
      e = "string" == typeof e ? (t = e, n = {}, _.each(t.match(P) || [], (function(e, t) {
        n[t] = !0
      })), n) : _.extend({}, e);
      var o, r, a, s, l = [],
        u = [],
        c = -1,
        d = {
          add: function() {
            return l && (r && !o && (c = l.length - 1, u.push(r)), function t(n) {
              _.each(n, (function(n, i) {
                b(i) ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== T(i) && t(i)
              }))
            }(arguments), r && !o && i()), this
          },
          remove: function() {
            return _.each(arguments, (function(e, t) {
              for (var n; - 1 < (n = _.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
            })), this
          },
          has: function(e) {
            return e ? -1 < _.inArray(e, l) : 0 < l.length
          },
          empty: function() {
            return l = l && [], this
          },
          disable: function() {
            return s = u = [], l = r = "", this
          },
          disabled: function() {
            return !l
          },
          lock: function() {
            return s = u = [], r || o || (l = r = ""), this
          },
          locked: function() {
            return !!s
          },
          fireWith: function(e, t) {
            return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o || i()), this
          },
          fire: function() {
            return d.fireWith(this, arguments), this
          },
          fired: function() {
            return !!a
          }
        };
      return d
    }, _.extend({
      Deferred: function(e) {
        var t = [
            ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
            ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          o = {
            state: function() {
              return i
            },
            always: function() {
              return r.done(arguments).fail(arguments), this
            },
            catch: function(e) {
              return o.then(null, e)
            },
            pipe: function() {
              var e = arguments;
              return _.Deferred((function(n) {
                _.each(t, (function(t, i) {
                  var o = b(e[i[4]]) && e[i[4]];
                  r[i[1]]((function() {
                    var e = o && o.apply(this, arguments);
                    e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                  }))
                })), e = null
              })).promise()
            },
            then: function(e, i, o) {
              var r = 0;

              function a(e, t, i, o) {
                return function() {
                  function s() {
                    var n, s;
                    if (!(e < r)) {
                      if ((n = i.apply(l, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                      s = n && ("object" == typeof n || "function" == typeof n) && n.then, b(s) ? o ? s.call(n, a(r, t, M, o), a(r, t, B, o)) : (r++, s.call(n, a(r, t, M, o), a(r, t, B, o), a(r, t, M, t.notifyWith))) : (i !== M && (l = void 0, u = [n]), (o || t.resolveWith)(l, u))
                    }
                  }
                  var l = this,
                    u = arguments,
                    c = o ? s : function() {
                      try {
                        s()
                      } catch (n) {
                        _.Deferred.exceptionHook && _.Deferred.exceptionHook(n, c.stackTrace), r <= e + 1 && (i !== B && (l = void 0, u = [n]), t.rejectWith(l, u))
                      }
                    };
                  e ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), n.setTimeout(c))
                }
              }
              return _.Deferred((function(n) {
                t[0][3].add(a(0, n, b(o) ? o : M, n.notifyWith)), t[1][3].add(a(0, n, b(e) ? e : M)), t[2][3].add(a(0, n, b(i) ? i : B))
              })).promise()
            },
            promise: function(e) {
              return null != e ? _.extend(e, o) : o
            }
          },
          r = {};
        return _.each(t, (function(e, n) {
          var a = n[2],
            s = n[5];
          o[n[1]] = a.add, s && a.add((function() {
            i = s
          }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), r[n[0]] = function() {
            return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
          }, r[n[0] + "With"] = a.fireWith
        })), o.promise(r), e && e.call(r, r), r
      },
      when: function(e) {
        function t(e) {
          return function(t) {
            o[e] = this, r[e] = 1 < arguments.length ? u.call(arguments) : t, --n || a.resolveWith(o, r)
          }
        }
        var n = arguments.length,
          i = n,
          o = Array(i),
          r = u.call(arguments),
          a = _.Deferred();
        if (n <= 1 && (U(e, a.done(t(i)).resolve, a.reject, !n), "pending" === a.state() || b(r[i] && r[i].then))) return a.then();
        for (; i--;) U(r[i], t(i), a.reject);
        return a.promise()
      }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(e, t) {
      n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, _.readyException = function(e) {
      n.setTimeout((function() {
        throw e
      }))
    };
    var F = _.Deferred();

    function W() {
      s.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), _.ready()
    }
    _.fn.ready = function(e) {
      return F.then(e).catch((function(e) {
        _.readyException(e)
      })), this
    }, _.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || F.resolveWith(s, [_])
      }
    }), _.ready.then = F.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(_.ready) : (s.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));
    var G = function(e, t, n, i, o, r, a) {
        var s = 0,
          l = e.length,
          u = null == n;
        if ("object" === T(n))
          for (s in o = !0, n) G(e, t, s, n[s], !0, r, a);
        else if (void 0 !== i && (o = !0, b(i) || (a = !0), u && (t = a ? (t.call(e, i), null) : (u = t, function(e, t, n) {
            return u.call(_(e), n)
          })), t))
          for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
      },
      V = /^-ms-/,
      X = /-([a-z])/g;

    function J(e, t) {
      return t.toUpperCase()
    }

    function K(e) {
      return e.replace(V, "ms-").replace(X, J)
    }

    function Q(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Y() {
      this.expando = _.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var i, o = this.cache(e);
        if ("string" == typeof t) o[K(t)] = n;
        else
          for (i in t) o[K(i)] = t[i];
        return o
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
      },
      access: function(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(P) || []).length;
            for (; n--;) delete i[t[n]]
          }
          void 0 !== t && !_.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !_.isEmptyObject(t)
      }
    };
    var Z = new Y,
      ee = new Y,
      te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ne = /[A-Z]/g;

    function ie(e, t, n) {
      var i, o;
      if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
          try {
            n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : te.test(o) ? JSON.parse(o) : o)
          } catch (e) {}
          ee.set(e, t, n)
        } else n = void 0;
      return n
    }
    _.extend({
      hasData: function(e) {
        return ee.hasData(e) || Z.hasData(e)
      },
      data: function(e, t, n) {
        return ee.access(e, t, n)
      },
      removeData: function(e, t) {
        ee.remove(e, t)
      },
      _data: function(e, t, n) {
        return Z.access(e, t, n)
      },
      _removeData: function(e, t) {
        Z.remove(e, t)
      }
    }), _.fn.extend({
      data: function(e, t) {
        var n, i, o, r = this[0],
          a = r && r.attributes;
        if (void 0 !== e) return "object" == typeof e ? this.each((function() {
          ee.set(this, e)
        })) : G(this, (function(t) {
          var n;
          if (r && void 0 === t) return void 0 !== (n = ee.get(r, e)) || void 0 !== (n = ie(r, e)) ? n : void 0;
          this.each((function() {
            ee.set(this, e, t)
          }))
        }), null, t, 1 < arguments.length, null, !0);
        if (this.length && (o = ee.get(r), 1 === r.nodeType && !Z.get(r, "hasDataAttrs"))) {
          for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = K(i.slice(5)), ie(r, i, o[i]));
          Z.set(r, "hasDataAttrs", !0)
        }
        return o
      },
      removeData: function(e) {
        return this.each((function() {
          ee.remove(this, e)
        }))
      }
    }), _.extend({
      queue: function(e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = Z.get(e, t), n && (!i || Array.isArray(n) ? i = Z.access(e, t, _.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = _.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = _._queueHooks(e, t);
        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function() {
          _.dequeue(e, t)
        }), r)), !i && r && r.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return Z.get(e, n) || Z.access(e, n, {
          empty: _.Callbacks("once memory").add((function() {
            Z.remove(e, [t + "queue", n])
          }))
        })
      }
    }), _.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each((function() {
          var n = _.queue(this, e, t);
          _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
        }))
      },
      dequeue: function(e) {
        return this.each((function() {
          _.dequeue(this, e)
        }))
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        function n() {
          --o || r.resolveWith(a, [a])
        }
        var i, o = 1,
          r = _.Deferred(),
          a = this,
          s = this.length;
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = Z.get(a[s], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
        return n(), r.promise(t)
      }
    });
    var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      re = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"),
      ae = ["Top", "Right", "Bottom", "Left"],
      se = s.documentElement,
      le = function(e) {
        return _.contains(e.ownerDocument, e)
      },
      ue = {
        composed: !0
      };

    function ce(e, t, n, i) {
      var o, r, a = {};
      for (r in t) a[r] = e.style[r], e.style[r] = t[r];
      for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
      return o
    }
    se.getRootNode && (le = function(e) {
      return _.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
    });
    var de = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && le(e) && "none" === _.css(e, "display")
    };

    function pe(e, t, n, i) {
      var o, r, a = 20,
        s = i ? function() {
          return i.cur()
        } : function() {
          return _.css(e, t, "")
        },
        l = s(),
        u = n && n[3] || (_.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (_.cssNumber[t] || "px" !== u && +l) && re.exec(_.css(e, t));
      if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; a--;) _.style(e, t, c + u), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), c /= r;
        c *= 2, _.style(e, t, c + u), n = n || []
      }
      return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }
    var fe = {};

    function he(e, t) {
      for (var n, i, o, r, a, s, l, u = [], c = 0, d = e.length; c < d; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (u[c] = Z.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && de(i) && (u[c] = (l = a = r = void 0, a = (o = i).ownerDocument, s = o.nodeName, (l = fe[s]) || (r = a.body.appendChild(a.createElement(s)), l = _.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), fe[s] = l)))) : "none" !== n && (u[c] = "none", Z.set(i, "display", n)));
      for (c = 0; c < d; c++) null != u[c] && (e[c].style.display = u[c]);
      return e
    }
    _.fn.extend({
      show: function() {
        return he(this, !0)
      },
      hide: function() {
        return he(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
          de(this) ? _(this).show() : _(this).hide()
        }))
      }
    });
    var me = /^(?:checkbox|radio)$/i,
      ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ve = /^$|^module$|\/(?:java|ecma)script/i,
      xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function be(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? _.merge([e], n) : n
    }

    function ye(e, t) {
      for (var n = 0, i = e.length; n < i; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
    }
    xe.optgroup = xe.option, xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead, xe.th = xe.td;
    var we, Te, ke = /<|&#?\w+;/;

    function _e(e, t, n, i, o) {
      for (var r, a, s, l, u, c, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
        if ((r = e[f]) || 0 === r)
          if ("object" === T(r)) _.merge(p, r.nodeType ? [r] : r);
          else if (ke.test(r)) {
        for (a = a || d.appendChild(t.createElement("div")), s = (ge.exec(r) || ["", ""])[1].toLowerCase(), l = xe[s] || xe._default, a.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
        _.merge(p, a.childNodes), (a = d.firstChild).textContent = ""
      } else p.push(t.createTextNode(r));
      for (d.textContent = "", f = 0; r = p[f++];)
        if (i && -1 < _.inArray(r, i)) o && o.push(r);
        else if (u = le(r), a = be(d.appendChild(r), "script"), u && ye(a), n)
        for (c = 0; r = a[c++];) ve.test(r.type || "") && n.push(r);
      return d
    }
    we = s.createDocumentFragment().appendChild(s.createElement("div")), (Te = s.createElement("input")).setAttribute("type", "radio"), Te.setAttribute("checked", "checked"), Te.setAttribute("name", "t"), we.appendChild(Te), x.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", x.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
    var Ce = /^key/,
      Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Se = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
      return !0
    }

    function je() {
      return !1
    }

    function Ee(e, t) {
      return e === function() {
        try {
          return s.activeElement
        } catch (e) {}
      }() == ("focus" === t)
    }

    function De(e, t, n, i, o, r) {
      var a, s;
      if ("object" == typeof t) {
        for (s in "string" != typeof n && (i = i || n, n = void 0), t) De(e, s, n, i, t[s], r);
        return e
      }
      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = je;
      else if (!o) return e;
      return 1 === r && (a = o, (o = function(e) {
        return _().off(e), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = _.guid++)), e.each((function() {
        _.event.add(this, t, o, i, n)
      }))
    }

    function Ie(e, t, n) {
      n ? (Z.set(e, t, !1), _.event.add(e, t, {
        namespace: !1,
        handler: function(e) {
          var i, o, r = Z.get(this, t);
          if (1 & e.isTrigger && this[t]) {
            if (r.length)(_.event.special[t] || {}).delegateType && e.stopPropagation();
            else if (r = u.call(arguments), Z.set(this, t, r), i = n(this, t), this[t](), r !== (o = Z.get(this, t)) || i ? Z.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
          } else r.length && (Z.set(this, t, {
            value: _.event.trigger(_.extend(r[0], _.Event.prototype), r.slice(1), this)
          }), e.stopImmediatePropagation())
        }
      })) : void 0 === Z.get(e, t) && _.event.add(e, t, Ne)
    }
    _.event = {
      global: {},
      add: function(e, t, n, i, o) {
        var r, a, s, l, u, c, d, p, f, h, m, g = Z.get(e);
        if (g)
          for (n.handler && (n = (r = n).handler, o = r.selector), o && _.find.matchesSelector(se, o), n.guid || (n.guid = _.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
              return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
            }), u = (t = (t || "").match(P) || [""]).length; u--;) f = m = (s = Se.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), f && (d = _.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = _.event.special[f] || {}, c = _.extend({
            type: f,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && _.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), _.event.global[f] = !0)
      },
      remove: function(e, t, n, i, o) {
        var r, a, s, l, u, c, d, p, f, h, m, g = Z.hasData(e) && Z.get(e);
        if (g && (l = g.events)) {
          for (u = (t = (t || "").match(P) || [""]).length; u--;)
            if (f = m = (s = Se.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
              for (d = _.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;) c = p[r], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
              a && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || _.removeEvent(e, f, g.handle), delete l[f])
            } else
              for (f in l) _.event.remove(e, f + t[u], n, i, !0);
          _.isEmptyObject(l) && Z.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        var t, n, i, o, r, a, s = _.event.fix(e),
          l = new Array(arguments.length),
          u = (Z.get(this, "events") || {})[s.type] || [],
          c = _.event.special[s.type] || {};
        for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
          for (a = _.event.handlers.call(this, s, u), t = 0;
            (o = a[t++]) && !s.isPropagationStopped();)
            for (s.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== r.namespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((_.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, s), s.result
        }
      },
      handlers: function(e, t) {
        var n, i, o, r, a, s = [],
          l = t.delegateCount,
          u = e.target;
        if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
              for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < _(o, this).index(u) : _.find(o, this, null, [u]).length), a[o] && r.push(i);
              r.length && s.push({
                elem: u,
                handlers: r
              })
            } return u = this, l < t.length && s.push({
          elem: u,
          handlers: t.slice(l)
        }), s
      },
      addProp: function(e, t) {
        Object.defineProperty(_.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: b(t) ? function() {
            if (this.originalEvent) return t(this.originalEvent)
          } : function() {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function(e) {
        return e[_.expando] ? e : new _.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function(e) {
            var t = this || e;
            return me.test(t.type) && t.click && D(t, "input") && Ie(t, "click", Ne), !1
          },
          trigger: function(e) {
            var t = this || e;
            return me.test(t.type) && t.click && D(t, "input") && Ie(t, "click"), !0
          },
          _default: function(e) {
            var t = e.target;
            return me.test(t.type) && t.click && D(t, "input") && Z.get(t, "click") || D(t, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, _.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function(e, t) {
      if (!(this instanceof _.Event)) return new _.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : je, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
      constructor: _.Event,
      isDefaultPrevented: je,
      isPropagationStopped: je,
      isImmediatePropagationStopped: je,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, _.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
        var t = e.button;
        return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ae.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, _.event.addProp), _.each({
      focus: "focusin",
      blur: "focusout"
    }, (function(e, t) {
      _.event.special[e] = {
        setup: function() {
          return Ie(this, e, Ee), !1
        },
        trigger: function() {
          return Ie(this, e), !0
        },
        delegateType: t
      }
    })), _.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, (function(e, t) {
      _.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, i = e.relatedTarget,
            o = e.handleObj;
          return i && (i === this || _.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }
      }
    })), _.fn.extend({
      on: function(e, t, n, i) {
        return De(this, e, t, n, i)
      },
      one: function(e, t, n, i) {
        return De(this, e, t, n, i, 1)
      },
      off: function(e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = je), this.each((function() {
          _.event.remove(this, e, n, t)
        }));
        for (o in e) this.off(o, t, e[o]);
        return this
      }
    });
    var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Re(e, t) {
      return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function He(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
      var n, i, o, r, a, s, l, u;
      if (1 === t.nodeType) {
        if (Z.hasData(e) && (r = Z.access(e), a = Z.set(t, r), u = r.events))
          for (o in delete a.handle, a.events = {}, u)
            for (n = 0, i = u[o].length; n < i; n++) _.event.add(t, o, u[o][n]);
        ee.hasData(e) && (s = ee.access(e), l = _.extend({}, s), ee.set(t, l))
      }
    }

    function Be(e, t, n, i) {
      t = c.apply([], t);
      var o, r, a, s, l, u, d = 0,
        p = e.length,
        f = p - 1,
        h = t[0],
        m = b(h);
      if (m || 1 < p && "string" == typeof h && !x.checkClone && $e.test(h)) return e.each((function(o) {
        var r = e.eq(o);
        m && (t[0] = h.call(this, o, r.html())), Be(r, t, n, i)
      }));
      if (p && (r = (o = _e(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
        for (s = (a = _.map(be(o, "script"), He)).length; d < p; d++) l = o, d !== f && (l = _.clone(l, !0, !0), s && _.merge(a, be(l, "script"))), n.call(e[d], l, d);
        if (s)
          for (u = a[a.length - 1].ownerDocument, _.map(a, Pe), d = 0; d < s; d++) l = a[d], ve.test(l.type || "") && !Z.access(l, "globalEval") && _.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && !l.noModule && _._evalUrl(l.src, {
            nonce: l.nonce || l.getAttribute("nonce")
          }) : w(l.textContent.replace(Oe, ""), l, u))
      }
      return e
    }

    function Ue(e, t, n) {
      for (var i, o = t ? _.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || _.cleanData(be(i)), i.parentNode && (n && le(i) && ye(be(i, "script")), i.parentNode.removeChild(i));
      return e
    }
    _.extend({
      htmlPrefilter: function(e) {
        return e.replace(Le, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var i, o, r, a, s, l, u, c = e.cloneNode(!0),
          d = le(e);
        if (!(x.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
          for (a = be(c), i = 0, o = (r = be(e)).length; i < o; i++) s = r[i], "input" === (u = (l = a[i]).nodeName.toLowerCase()) && me.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (r = r || be(e), a = a || be(c), i = 0, o = r.length; i < o; i++) Me(r[i], a[i]);
          else Me(e, c);
        return 0 < (a = be(c, "script")).length && ye(a, !d && be(e, "script")), c
      },
      cleanData: function(e) {
        for (var t, n, i, o = _.event.special, r = 0; void 0 !== (n = e[r]); r++)
          if (Q(n)) {
            if (t = n[Z.expando]) {
              if (t.events)
                for (i in t.events) o[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
              n[Z.expando] = void 0
            }
            n[ee.expando] && (n[ee.expando] = void 0)
          }
      }
    }), _.fn.extend({
      detach: function(e) {
        return Ue(this, e, !0)
      },
      remove: function(e) {
        return Ue(this, e)
      },
      text: function(e) {
        return G(this, (function(e) {
          return void 0 === e ? _.text(this) : this.empty().each((function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          }))
        }), null, e, arguments.length)
      },
      append: function() {
        return Be(this, arguments, (function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
        }))
      },
      prepend: function() {
        return Be(this, arguments, (function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild)
          }
        }))
      },
      before: function() {
        return Be(this, arguments, (function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        }))
      },
      after: function() {
        return Be(this, arguments, (function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        }))
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(be(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map((function() {
          return _.clone(this, e, t)
        }))
      },
      html: function(e) {
        return G(this, (function(e) {
          var t = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !qe.test(e) && !xe[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = _.htmlPrefilter(e);
            try {
              for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(be(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }), null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return Be(this, arguments, (function(t) {
          var n = this.parentNode;
          _.inArray(this, e) < 0 && (_.cleanData(be(this)), n && n.replaceChild(t, this))
        }), e)
      }
    }), _.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, (function(e, t) {
      _.fn[e] = function(e) {
        for (var n, i = [], o = _(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), _(o[a])[t](n), d.apply(i, n.get());
        return this.pushStack(i)
      }
    }));
    var ze, Fe, We, Ge, Ve, Xe, Je, Ke = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"),
      Qe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      },
      Ye = new RegExp(ae.join("|"), "i");

    function Ze() {
      if (Je) {
        Xe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Je.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(Xe).appendChild(Je);
        var e = n.getComputedStyle(Je);
        ze = "1%" !== e.top, Ve = 12 === et(e.marginLeft), Je.style.right = "60%", Ge = 36 === et(e.right), Fe = 36 === et(e.width), Je.style.position = "absolute", We = 12 === et(Je.offsetWidth / 3), se.removeChild(Xe), Je = null
      }
    }

    function et(e) {
      return Math.round(parseFloat(e))
    }

    function tt(e, t, n) {
      var i, o, r, a, s = e.style;
      return (n = n || Qe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || le(e) || (a = _.style(e, t)), !x.pixelBoxStyles() && Ke.test(a) && Ye.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function nt(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }
    Xe = s.createElement("div"), (Je = s.createElement("div")).style && (Je.style.backgroundClip = "content-box", Je.cloneNode(!0).style.backgroundClip = "", x.clearCloneStyle = "content-box" === Je.style.backgroundClip, _.extend(x, {
      boxSizingReliable: function() {
        return Ze(), Fe
      },
      pixelBoxStyles: function() {
        return Ze(), Ge
      },
      pixelPosition: function() {
        return Ze(), ze
      },
      reliableMarginLeft: function() {
        return Ze(), Ve
      },
      scrollboxSize: function() {
        return Ze(), We
      }
    }));
    var it = ["Webkit", "Moz", "ms"],
      ot = s.createElement("div").style,
      rt = {};

    function at(e) {
      return _.cssProps[e] || rt[e] || (e in ot ? e : rt[e] = function(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--;)
          if ((e = it[n] + t) in ot) return e
      }(e) || e)
    }
    var st = /^(none|table(?!-c[ea]).+)/,
      lt = /^--/,
      ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      ct = {
        letterSpacing: "0",
        fontWeight: "400"
      };

    function dt(e, t, n) {
      var i = re.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function pt(e, t, n, i, o, r) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (l += _.css(e, n + ae[a], !0, o)), i ? ("content" === n && (l -= _.css(e, "padding" + ae[a], !0, o)), "margin" !== n && (l -= _.css(e, "border" + ae[a] + "Width", !0, o))) : (l += _.css(e, "padding" + ae[a], !0, o), "padding" !== n ? l += _.css(e, "border" + ae[a] + "Width", !0, o) : s += _.css(e, "border" + ae[a] + "Width", !0, o));
      return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0), l
    }

    function ft(e, t, n) {
      var i = Qe(e),
        o = (!x.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, i),
        r = o,
        a = tt(e, t, i),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Ke.test(a)) {
        if (!n) return a;
        a = "auto"
      }
      return (!x.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === _.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === _.css(e, "boxSizing", !1, i), (r = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + pt(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
    }

    function ht(e, t, n, i, o) {
      return new ht.prototype.init(e, t, n, i, o)
    }
    _.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = tt(e, "opacity");
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
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, r, a, s = K(t),
            l = lt.test(t),
            u = e.style;
          if (l || (t = at(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t];
          "string" == (r = typeof n) && (o = re.exec(n)) && o[1] && (n = pe(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (_.cssNumber[s] ? "" : "px")), x.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
        }
      },
      css: function(e, t, n, i) {
        var o, r, a, s = K(t);
        return lt.test(t) || (t = at(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in ct && (o = ct[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
      }
    }), _.each(["height", "width"], (function(e, t) {
      _.cssHooks[t] = {
        get: function(e, n, i) {
          if (n) return !st.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ft(e, t, i) : ce(e, ut, (function() {
            return ft(e, t, i)
          }))
        },
        set: function(e, n, i) {
          var o, r = Qe(e),
            a = !x.scrollboxSize() && "absolute" === r.position,
            s = (a || i) && "border-box" === _.css(e, "boxSizing", !1, r),
            l = i ? pt(e, t, i, s, r) : 0;
          return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - pt(e, t, "border", !1, r) - .5)), l && (o = re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = _.css(e, t)), dt(0, n, l)
        }
      }
    })), _.cssHooks.marginLeft = nt(x.reliableMarginLeft, (function(e, t) {
      if (t) return (parseFloat(tt(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
        marginLeft: 0
      }, (function() {
        return e.getBoundingClientRect().left
      }))) + "px"
    })), _.each({
      margin: "",
      padding: "",
      border: "Width"
    }, (function(e, t) {
      _.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ae[i] + t] = r[i] || r[i - 2] || r[0];
          return o
        }
      }, "margin" !== e && (_.cssHooks[e + t].set = dt)
    })), _.fn.extend({
      css: function(e, t) {
        return G(this, (function(e, t, n) {
          var i, o, r = {},
            a = 0;
          if (Array.isArray(t)) {
            for (i = Qe(e), o = t.length; a < o; a++) r[t[a]] = _.css(e, t[a], !1, i);
            return r
          }
          return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
        }), e, t, 1 < arguments.length)
      }
    }), ((_.Tween = ht).prototype = {
      constructor: ht,
      init: function(e, t, n, i, o, r) {
        this.elem = e, this.prop = n, this.easing = o || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (_.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = ht.propHooks[this.prop];
        return e && e.get ? e.get(this) : ht.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = ht.propHooks[this.prop];
        return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ht.propHooks._default.set(this), this
      }
    }).init.prototype = ht.prototype, (ht.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
          _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[at(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }).scrollTop = ht.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, _.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, _.fx = ht.prototype.init, _.fx.step = {};
    var mt, gt, vt, xt, bt = /^(?:toggle|show|hide)$/,
      yt = /queueHooks$/;

    function wt() {
      gt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(wt) : n.setTimeout(wt, _.fx.interval), _.fx.tick())
    }

    function Tt() {
      return n.setTimeout((function() {
        mt = void 0
      })), mt = Date.now()
    }

    function kt(e, t) {
      var n, i = 0,
        o = {
          height: e
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ae[i])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o
    }

    function _t(e, t, n) {
      for (var i, o = (Ct.tweeners[t] || []).concat(Ct.tweeners["*"]), r = 0, a = o.length; r < a; r++)
        if (i = o[r].call(n, t, e)) return i
    }

    function Ct(e, t, n) {
      var i, o, r = 0,
        a = Ct.prefilters.length,
        s = _.Deferred().always((function() {
          delete l.elem
        })),
        l = function() {
          if (o) return !1;
          for (var t = mt || Tt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, a = u.tweens.length; r < a; r++) u.tweens[r].run(i);
          return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
        },
        u = s.promise({
          elem: e,
          props: _.extend({}, t),
          opts: _.extend(!0, {
            specialEasing: {},
            easing: _.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: mt || Tt(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var i = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(i), i
          },
          stop: function(t) {
            var n = 0,
              i = t ? u.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) u.tweens[n].run(1);
            return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
          }
        }),
        c = u.props;
      for (function(e, t) {
          var n, i, o, r, a;
          for (n in e)
            if (o = t[i = K(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = _.cssHooks[i]) && "expand" in a)
              for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
            else t[i] = o
        }(c, u.opts.specialEasing); r < a; r++)
        if (i = Ct.prefilters[r].call(u, e, c, u.opts)) return b(i.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
      return _.map(c, _t, u), b(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u
    }
    _.Animation = _.extend(Ct, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return pe(n.elem, e, re.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        for (var n, i = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(P)).length; i < o; i++) n = e[i], Ct.tweeners[n] = Ct.tweeners[n] || [], Ct.tweeners[n].unshift(t)
      },
      prefilters: [function(e, t, n) {
        var i, o, r, a, s, l, u, c, d = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          m = e.nodeType && de(e),
          g = Z.get(e, "fxshow");
        for (i in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
          }), a.unqueued++, p.always((function() {
            p.always((function() {
              a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
            }))
          }))), t)
          if (o = t[i], bt.test(o)) {
            if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
              if ("show" !== o || !g || void 0 === g[i]) continue;
              m = !0
            }
            f[i] = g && g[i] || _.style(e, i)
          } if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
          for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = g && g.display) && (u = Z.get(e, "display")), "none" === (c = _.css(e, "display")) && (u ? c = u : (he([e], !0), u = e.style.display || u, c = _.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(e, "float") && (l || (p.done((function() {
              h.display = u
            })), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }))), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = Z.access(e, "fxshow", {
            display: u
          }), r && (g.hidden = !m), m && he([e], !0), p.done((function() {
            for (i in m || he([e]), Z.remove(e, "fxshow"), f) _.style(e, i, f[i])
          }))), l = _t(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
      }],
      prefilter: function(e, t) {
        t ? Ct.prefilters.unshift(e) : Ct.prefilters.push(e)
      }
    }), _.speed = function(e, t, n) {
      var i = e && "object" == typeof e ? _.extend({}, e) : {
        complete: n || !n && t || b(e) && e,
        duration: e,
        easing: n && t || t && !b(t) && t
      };
      return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
        b(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
      }, i
    }, _.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(de).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i)
      },
      animate: function(e, t, n, i) {
        function o() {
          var t = Ct(this, _.extend({}, e), a);
          (r || Z.get(this, "finish")) && t.stop(!0)
        }
        var r = _.isEmptyObject(e),
          a = _.speed(t, n, i);
        return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
      },
      stop: function(e, t, n) {
        function i(e) {
          var t = e.stop;
          delete e.stop, t(n)
        }
        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
          var t = !0,
            o = null != e && e + "queueHooks",
            r = _.timers,
            a = Z.get(this);
          if (o) a[o] && a[o].stop && i(a[o]);
          else
            for (o in a) a[o] && a[o].stop && yt.test(o) && i(a[o]);
          for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
          !t && n || _.dequeue(this, e)
        }))
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each((function() {
          var t, n = Z.get(this),
            i = n[e + "queue"],
            o = n[e + "queueHooks"],
            r = _.timers,
            a = i ? i.length : 0;
          for (n.finish = !0, _.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
          for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        }))
      }
    }), _.each(["toggle", "show", "hide"], (function(e, t) {
      var n = _.fn[t];
      _.fn[t] = function(e, i, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(kt(t, !0), e, i, o)
      }
    })), _.each({
      slideDown: kt("show"),
      slideUp: kt("hide"),
      slideToggle: kt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, (function(e, t) {
      _.fn[e] = function(e, n, i) {
        return this.animate(t, e, n, i)
      }
    })), _.timers = [], _.fx.tick = function() {
      var e, t = 0,
        n = _.timers;
      for (mt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || _.fx.stop(), mt = void 0
    }, _.fx.timer = function(e) {
      _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
      gt || (gt = !0, wt())
    }, _.fx.stop = function() {
      gt = null
    }, _.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, _.fn.delay = function(e, t) {
      return e = _.fx && _.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, i) {
        var o = n.setTimeout(t, e);
        i.stop = function() {
          n.clearTimeout(o)
        }
      }))
    }, vt = s.createElement("input"), xt = s.createElement("select").appendChild(s.createElement("option")), vt.type = "checkbox", x.checkOn = "" !== vt.value, x.optSelected = xt.selected, (vt = s.createElement("input")).value = "t", vt.type = "radio", x.radioValue = "t" === vt.value;
    var At, St = _.expr.attrHandle;
    _.fn.extend({
      attr: function(e, t) {
        return G(this, _.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {
        return this.each((function() {
          _.removeAttr(this, e)
        }))
      }
    }), _.extend({
      attr: function(e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === r && _.isXMLDoc(e) || (o = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? At : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!x.radioValue && "radio" === t && D(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, i = 0,
          o = t && t.match(P);
        if (o && 1 === e.nodeType)
          for (; n = o[i++];) e.removeAttribute(n)
      }
    }), At = {
      set: function(e, t, n) {
        return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), (function(e, t) {
      var n = St[t] || _.find.attr;
      St[t] = function(e, t, i) {
        var o, r, a = t.toLowerCase();
        return i || (r = St[a], St[a] = o, o = null != n(e, t, i) ? a : null, St[a] = r), o
      }
    }));
    var Nt = /^(?:input|select|textarea|button)$/i,
      jt = /^(?:a|area)$/i;

    function Et(e) {
      return (e.match(P) || []).join(" ")
    }

    function Dt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function It(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    _.fn.extend({
      prop: function(e, t) {
        return G(this, _.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(e) {
        return this.each((function() {
          delete this[_.propFix[e] || e]
        }))
      }
    }), _.extend({
      prop: function(e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && _.isXMLDoc(e) || (t = _.propFix[t] || t, o = _.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = _.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Nt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), x.optSelected || (_.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
      _.propFix[this.toLowerCase()] = this
    })), _.fn.extend({
      addClass: function(e) {
        var t, n, i, o, r, a, s, l = 0;
        if (b(e)) return this.each((function(t) {
          _(this).addClass(e.call(this, t, Dt(this)))
        }));
        if ((t = It(e)).length)
          for (; n = this[l++];)
            if (o = Dt(n), i = 1 === n.nodeType && " " + Et(o) + " ") {
              for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (s = Et(i)) && n.setAttribute("class", s)
            } return this
      },
      removeClass: function(e) {
        var t, n, i, o, r, a, s, l = 0;
        if (b(e)) return this.each((function(t) {
          _(this).removeClass(e.call(this, t, Dt(this)))
        }));
        if (!arguments.length) return this.attr("class", "");
        if ((t = It(e)).length)
          for (; n = this[l++];)
            if (o = Dt(n), i = 1 === n.nodeType && " " + Et(o) + " ") {
              for (a = 0; r = t[a++];)
                for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
              o !== (s = Et(i)) && n.setAttribute("class", s)
            } return this
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          i = "string" == n || Array.isArray(e);
        return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each((function(n) {
          _(this).toggleClass(e.call(this, n, Dt(this), t), t)
        })) : this.each((function() {
          var t, o, r, a;
          if (i)
            for (o = 0, r = _(this), a = It(e); t = a[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
          else void 0 !== e && "boolean" != n || ((t = Dt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
        }))
      },
      hasClass: function(e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];)
          if (1 === n.nodeType && -1 < (" " + Et(Dt(n)) + " ").indexOf(t)) return !0;
        return !1
      }
    });
    var Lt = /\r/g;

    function qt(e) {
      e.stopPropagation()
    }
    _.fn.extend({
      val: function(e) {
        var t, n, i, o = this[0];
        return arguments.length ? (i = b(e), this.each((function(n) {
          var o;
          1 === this.nodeType && (null == (o = i ? e.call(this, n, _(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = _.map(o, (function(e) {
            return null == e ? "" : e + ""
          }))), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
        }))) : o ? (t = _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(Lt, "") : null == n ? "" : n : void 0
      }
    }), _.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = _.find.attr(e, "value");
            return null != t ? t : Et(_.text(e))
          }
        },
        select: {
          get: function(e) {
            var t, n, i, o = e.options,
              r = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              l = a ? r + 1 : o.length;
            for (i = r < 0 ? l : a ? r : 0; i < l; i++)
              if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                if (t = _(n).val(), a) return t;
                s.push(t)
              } return s
          },
          set: function(e, t) {
            for (var n, i, o = e.options, r = _.makeArray(t), a = o.length; a--;)((i = o[a]).selected = -1 < _.inArray(_.valHooks.option.get(i), r)) && (n = !0);
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }), _.each(["radio", "checkbox"], (function() {
      _.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return e.checked = -1 < _.inArray(_(e).val(), t)
        }
      }, x.checkOn || (_.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    })), x.focusin = "onfocusin" in n;
    var $t = /^(?:focusinfocus|focusoutblur)$/;
    _.extend(_.event, {
      trigger: function(e, t, i, o) {
        var a, l, u, c, d, p, f, h, g = [i || s],
          v = m.call(e, "type") ? e.type : e,
          x = m.call(e, "namespace") ? e.namespace.split(".") : [];
        if (l = h = u = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !$t.test(v + _.event.triggered) && (-1 < v.indexOf(".") && (v = (x = v.split(".")).shift(), x.sort()), d = v.indexOf(":") < 0 && "on" + v, (e = e[_.expando] ? e : new _.Event(v, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : _.makeArray(t, [e]), f = _.event.special[v] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, t))) {
          if (!o && !f.noBubble && !r(i)) {
            for (c = f.delegateType || v, $t.test(c + v) || (l = l.parentNode); l; l = l.parentNode) g.push(l), u = l;
            u === (i.ownerDocument || s) && g.push(u.defaultView || u.parentWindow || n)
          }
          for (a = 0;
            (l = g[a++]) && !e.isPropagationStopped();) h = l, e.type = 1 < a ? c : f.bindType || v, (p = (Z.get(l, "events") || {})[e.type] && Z.get(l, "handle")) && p.apply(l, t), (p = d && l[d]) && p.apply && Q(l) && (e.result = p.apply(l, t), !1 === e.result && e.preventDefault());
          return e.type = v, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), t) || !Q(i) || d && b(i[v]) && !r(i) && ((u = i[d]) && (i[d] = null), _.event.triggered = v, e.isPropagationStopped() && h.addEventListener(v, qt), i[v](), e.isPropagationStopped() && h.removeEventListener(v, qt), _.event.triggered = void 0, u && (i[d] = u)), e.result
        }
      },
      simulate: function(e, t, n) {
        var i = _.extend(new _.Event, n, {
          type: e,
          isSimulated: !0
        });
        _.event.trigger(i, null, t)
      }
    }), _.fn.extend({
      trigger: function(e, t) {
        return this.each((function() {
          _.event.trigger(e, t, this)
        }))
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return _.event.trigger(e, t, n, !0)
      }
    }), x.focusin || _.each({
      focus: "focusin",
      blur: "focusout"
    }, (function(e, t) {
      function n(e) {
        _.event.simulate(t, e.target, _.event.fix(e))
      }
      _.event.special[t] = {
        setup: function() {
          var i = this.ownerDocument || this,
            o = Z.access(i, t);
          o || i.addEventListener(e, n, !0), Z.access(i, t, (o || 0) + 1)
        },
        teardown: function() {
          var i = this.ownerDocument || this,
            o = Z.access(i, t) - 1;
          o ? Z.access(i, t, o) : (i.removeEventListener(e, n, !0), Z.remove(i, t))
        }
      }
    }));
    var Ot = n.location,
      Rt = Date.now(),
      Ht = /\?/;
    _.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), t
    };
    var Pt = /\[\]$/,
      Mt = /\r?\n/g,
      Bt = /^(?:submit|button|image|reset|file)$/i,
      Ut = /^(?:input|select|textarea|keygen)/i;

    function zt(e, t, n, i) {
      var o;
      if (Array.isArray(t)) _.each(t, (function(t, o) {
        n || Pt.test(e) ? i(e, o) : zt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
      }));
      else if (n || "object" !== T(t)) i(e, t);
      else
        for (o in t) zt(e + "[" + o + "]", t[o], n, i)
    }
    _.param = function(e, t) {
      function n(e, t) {
        var n = b(t) ? t() : t;
        o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      }
      var i, o = [];
      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, (function() {
        n(this.name, this.value)
      }));
      else
        for (i in e) zt(i, e[i], t, n);
      return o.join("&")
    }, _.fn.extend({
      serialize: function() {
        return _.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map((function() {
          var e = _.prop(this, "elements");
          return e ? _.makeArray(e) : this
        })).filter((function() {
          var e = this.type;
          return this.name && !_(this).is(":disabled") && Ut.test(this.nodeName) && !Bt.test(e) && (this.checked || !me.test(e))
        })).map((function(e, t) {
          var n = _(this).val();
          return null == n ? null : Array.isArray(n) ? _.map(n, (function(e) {
            return {
              name: t.name,
              value: e.replace(Mt, "\r\n")
            }
          })) : {
            name: t.name,
            value: n.replace(Mt, "\r\n")
          }
        })).get()
      }
    });
    var Ft = /%20/g,
      Wt = /#.*$/,
      Gt = /([?&])_=[^&]*/,
      Vt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Xt = /^(?:GET|HEAD)$/,
      Jt = /^\/\//,
      Kt = {},
      Qt = {},
      Yt = "*/".concat("*"),
      Zt = s.createElement("a");

    function en(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, o = 0,
          r = t.toLowerCase().match(P) || [];
        if (b(n))
          for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function tn(e, t, n, i) {
      var o = {},
        r = e === Qt;

      function a(s) {
        var l;
        return o[s] = !0, _.each(e[s] || [], (function(e, s) {
          var u = s(t, n, i);
          return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
        })), l
      }
      return a(t.dataTypes[0]) || !o["*"] && a("*")
    }

    function nn(e, t) {
      var n, i, o = _.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
      return i && _.extend(!0, e, i), e
    }
    Zt.href = Ot.href, _.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ot.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ot.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Yt,
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
          "text json": JSON.parse,
          "text xml": _.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? nn(nn(e, _.ajaxSettings), t) : nn(_.ajaxSettings, e)
      },
      ajaxPrefilter: en(Kt),
      ajaxTransport: en(Qt),
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var i, o, r, a, l, u, c, d, p, f, h = _.ajaxSetup({}, t),
          m = h.context || h,
          g = h.context && (m.nodeType || m.jquery) ? _(m) : _.event,
          v = _.Deferred(),
          x = _.Callbacks("once memory"),
          b = h.statusCode || {},
          y = {},
          w = {},
          T = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (c) {
                if (!a)
                  for (a = {}; t = Vt.exec(r);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                t = a[e.toLowerCase() + " "]
              }
              return null == t ? null : t.join(", ")
            },
            getAllResponseHeaders: function() {
              return c ? r : null
            },
            setRequestHeader: function(e, t) {
              return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, y[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == c && (h.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (c) k.always(e[k.status]);
                else
                  for (t in e) b[t] = [b[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || T;
              return i && i.abort(t), C(0, t), this
            }
          };
        if (v.promise(k), h.url = ((e || h.url || Ot.href) + "").replace(Jt, Ot.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
          u = s.createElement("a");
          try {
            u.href = h.url, u.href = u.href, h.crossDomain = Zt.protocol + "//" + Zt.host != u.protocol + "//" + u.host
          } catch (e) {
            h.crossDomain = !0
          }
        }
        if (h.data && h.processData && "string" != typeof h.data && (h.data = _.param(h.data, h.traditional)), tn(Kt, h, t, k), c) return k;
        for (p in (d = _.event && h.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Xt.test(h.type), o = h.url.replace(Wt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+")) : (f = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ht.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Gt, "$1"), f = (Ht.test(o) ? "&" : "?") + "_=" + Rt++ + f), h.url = o + f), h.ifModified && (_.lastModified[o] && k.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && k.setRequestHeader("If-None-Match", _.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || c)) return k.abort();
        if (T = "abort", x.add(h.complete), k.done(h.success), k.fail(h.error), i = tn(Qt, h, t, k)) {
          if (k.readyState = 1, d && g.trigger("ajaxSend", [k, h]), c) return k;
          h.async && 0 < h.timeout && (l = n.setTimeout((function() {
            k.abort("timeout")
          }), h.timeout));
          try {
            c = !1, i.send(y, C)
          } catch (e) {
            if (c) throw e;
            C(-1, e)
          }
        } else C(-1, "No Transport");

        function C(e, t, a, s) {
          var u, p, f, y, w, T = t;
          c || (c = !0, l && n.clearTimeout(l), i = void 0, r = s || "", k.readyState = 0 < e ? 4 : 0, u = 200 <= e && e < 300 || 304 === e, a && (y = function(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
              "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
              for (o in s)
                if (s[o] && s[o].test(i)) {
                  l.unshift(o);
                  break
                } if (l[0] in n) r = l[0];
            else {
              for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                  r = o;
                  break
                }
                a = a || o
              }
              r = r || a
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
          }(h, k, a)), y = function(e, t, n, i) {
            var o, r, a, s, l, u = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (r = c.shift(); r;)
              if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
              if (!(a = u[l + " " + r] || u["* " + r]))
                for (o in u)
                  if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                    !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
                    break
                  } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                  t = a(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + l + " to " + r
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(h, y, k, u), u ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (_.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (_.etag[o] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, p = y.data, u = !(f = y.error))) : (f = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", u ? v.resolveWith(m, [p, T, k]) : v.rejectWith(m, [k, T, f]), k.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? p : f]), x.fireWith(m, [k, T]), d && (g.trigger("ajaxComplete", [k, h]), --_.active || _.event.trigger("ajaxStop")))
        }
        return k
      },
      getJSON: function(e, t, n) {
        return _.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return _.get(e, void 0, t, "script")
      }
    }), _.each(["get", "post"], (function(e, t) {
      _[t] = function(e, n, i, o) {
        return b(n) && (o = o || i, i = n, n = void 0), _.ajax(_.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: i
        }, _.isPlainObject(e) && e))
      }
    })), _._evalUrl = function(e, t) {
      return _.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function() {}
        },
        dataFilter: function(e) {
          _.globalEval(e, t)
        }
      })
    }, _.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (b(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        })).append(this)), this
      },
      wrapInner: function(e) {
        return b(e) ? this.each((function(t) {
          _(this).wrapInner(e.call(this, t))
        })) : this.each((function() {
          var t = _(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        }))
      },
      wrap: function(e) {
        var t = b(e);
        return this.each((function(n) {
          _(this).wrapAll(t ? e.call(this, n) : e)
        }))
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each((function() {
          _(this).replaceWith(this.childNodes)
        })), this
      }
    }), _.expr.pseudos.hidden = function(e) {
      return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var on = {
        0: 200,
        1223: 204
      },
      rn = _.ajaxSettings.xhr();
    x.cors = !!rn && "withCredentials" in rn, x.ajax = rn = !!rn, _.ajaxTransport((function(e) {
      var t, i;
      if (x.cors || rn && !e.crossDomain) return {
        send: function(o, r) {
          var a, s = e.xhr();
          if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (a in e.xhrFields) s[a] = e.xhrFields[a];
          for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
          t = function(e) {
            return function() {
              t && (t = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(on[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()))
            }
          }, s.onload = t(), i = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
            4 === s.readyState && n.setTimeout((function() {
              t && i()
            }))
          }, t = t("abort");
          try {
            s.send(e.hasContent && e.data || null)
          } catch (o) {
            if (t) throw o
          }
        },
        abort: function() {
          t && t()
        }
      }
    })), _.ajaxPrefilter((function(e) {
      e.crossDomain && (e.contents.script = !1)
    })), _.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return _.globalEval(e), e
        }
      }
    }), _.ajaxPrefilter("script", (function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), _.ajaxTransport("script", (function(e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs) return {
        send: function(i, o) {
          t = _("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function(e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
          }), s.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    }));
    var an, sn = [],
      ln = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = sn.pop() || _.expando + "_" + Rt++;
        return this[e] = !0, e
      }
    }), _.ajaxPrefilter("json jsonp", (function(e, t, i) {
      var o, r, a, s = !1 !== e.jsonp && (ln.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ln.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ln, "$1" + o) : !1 !== e.jsonp && (e.url += (Ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
        return a || _.error(o + " was not called"), a[0]
      }, e.dataTypes[0] = "json", r = n[o], n[o] = function() {
        a = arguments
      }, i.always((function() {
        void 0 === r ? _(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, sn.push(o)), a && b(r) && r(a[0]), a = r = void 0
      })), "script"
    })), x.createHTMLDocument = ((an = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === an.childNodes.length), _.parseHTML = function(e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (x.createHTMLDocument ? ((i = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(i)) : t = s), r = !n && [], (o = I.exec(e)) ? [t.createElement(o[1])] : (o = _e([e], t, r), r && r.length && _(r).remove(), _.merge([], o.childNodes)));
      var i, o, r
    }, _.fn.load = function(e, t, n) {
      var i, o, r, a = this,
        s = e.indexOf(" ");
      return -1 < s && (i = Et(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && _.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done((function(e) {
        r = arguments, a.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
      })).always(n && function(e, t) {
        a.each((function() {
          n.apply(this, r || [e.responseText, t, e])
        }))
      }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
      _.fn[t] = function(e) {
        return this.on(t, e)
      }
    })), _.expr.pseudos.animated = function(e) {
      return _.grep(_.timers, (function(t) {
        return e === t.elem
      })).length
    }, _.offset = {
      setOffset: function(e, t, n) {
        var i, o, r, a, s, l, u = _.css(e, "position"),
          c = _(e),
          d = {};
        "static" === u && (e.style.position = "relative"), s = c.offset(), r = _.css(e, "top"), l = _.css(e, "left"), o = ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (a = (i = c.position()).top, i.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
      }
    }, _.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each((function(t) {
          _.offset.setOffset(this, e, t)
        }));
        var t, n, i = this[0];
        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, n, i = this[0],
            o = {
              top: 0,
              left: 0
            };
          if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
            e && e !== i && 1 === e.nodeType && ((o = _(e).offset()).top += _.css(e, "borderTopWidth", !0), o.left += _.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - o.top - _.css(i, "marginTop", !0),
            left: t.left - o.left - _.css(i, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map((function() {
          for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
          return e || se
        }))
      }
    }), _.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, (function(e, t) {
      var n = "pageYOffset" === t;
      _.fn[e] = function(i) {
        return G(this, (function(e, i, o) {
          var a;
          if (r(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === o) return a ? a[t] : e[i];
          a ? a.scrollTo(n ? a.pageXOffset : o, n ? o : a.pageYOffset) : e[i] = o
        }), e, i, arguments.length)
      }
    })), _.each(["top", "left"], (function(e, t) {
      _.cssHooks[t] = nt(x.pixelPosition, (function(e, n) {
        if (n) return n = tt(e, t), Ke.test(n) ? _(e).position()[t] + "px" : n
      }))
    })), _.each({
      Height: "height",
      Width: "width"
    }, (function(e, t) {
      _.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, (function(n, i) {
        _.fn[i] = function(o, a) {
          var s = arguments.length && (n || "boolean" != typeof o),
            l = n || (!0 === o || !0 === a ? "margin" : "border");
          return G(this, (function(t, n, o) {
            var a;
            return r(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === o ? _.css(t, n, l) : _.style(t, n, o, l)
          }), t, s ? o : void 0, s)
        }
      }))
    })), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
      _.fn[t] = function(e, n) {
        return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
      }
    })), _.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), _.fn.extend({
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
      }
    }), _.proxy = function(e, t) {
      var n, i, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = u.call(arguments, 2), (o = function() {
        return e.apply(t || this, i.concat(u.call(arguments)))
      }).guid = e.guid = e.guid || _.guid++, o
    }, _.holdReady = function(e) {
      e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = D, _.isFunction = b, _.isWindow = r, _.camelCase = K, _.type = T, _.now = Date.now, _.isNumeric = function(e) {
      var t = _.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, void 0 === (i = function() {
      return _
    }.apply(t, [])) || (e.exports = i);
    var un = n.jQuery,
      cn = n.$;
    return _.noConflict = function(e) {
      return n.$ === _ && (n.$ = cn), e && n.jQuery === _ && (n.jQuery = un), _
    }, o || (n.jQuery = n.$ = _), _
  }))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  n(2), t.default = {
    getCookie: function(e) {
      var t = void 0,
        n = void 0;
      return "string" == typeof e && "" !== e && (n = String(document.cookie).match(new RegExp("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)"))) && (t = n[1] ? decodeURIComponent(n[1]) : ""), t
    },
    setCookie: function(e, t) {
      var n = new Date(this.getNowFormatDate());
      n.setTime(n.getTime()), document.cookie = e + "=" + escape(t) + ";path=/;domain=.7k7k.com;expires=" + n.toGMTString()
    },
    getNowFormatDate: function(e) {
      var t = new Date(e);
      return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
    },
    setLS: function(e, t) {
      window.localStorage.setItem(e, t)
    },
    getLS: function(e) {
      return window.localStorage.getItem(e)
    },
    delLS: function(e) {
      window.localStorage.removeItem(e)
    },
    getTimes: function() {
      return Math.ceil((new Date).getTime() / 1e3)
    },
    getDevice: function() {
      var e = window.navigator.userAgent.toLowerCase(),
        t = /MicroMessenger/i.test(e),
        n = /(iPhone|iPad|iPod)/i.test(e),
        i = /(android|nexus)/i.test(e),
        o = /(Windows Phone|windows[\s+]phone)/i.test(e),
        r = /BlackBerry/i.test(e),
        a = !1;
      return t || n || i || o || r || (a = 0 < e.indexOf("mac") ? "mac" : "window"), {
        ios: n,
        android: i,
        windows: o,
        wx: t,
        pc: a
      }
    },
    isPC: function() {
      for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], n = !0, i = "", o = 0; o < t.length; o++)
        if (0 < e.indexOf(t[o])) {
          n = !1, i = t[o];
          break
        } return n && (i = "pc"), i
    },
    asyncJs: function(e, t) {
      var n = document.createElement("script");
      n.type = "text/javascript", n.async = !0, t && (n.id = t), n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
    },
    asyncCss: function(e, t) {
      var n = document.createElement("link");
      n.rel = "stylesheet", n.type = "text/css", n.async = !0, t && (n.id = t), n.href = e, document.getElementsByTagName("head")[0].appendChild(n)
    },
    GetPars: function(e) {
      var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
        n = window.location.search.substr(1).match(t);
      return null != n ? decodeURI(n[2]) : null
    },
    delChild: function(e) {
      var t = e.parentNode;
      t && t.removeChild(e)
    },
    addChild: function(e, t) {
      e.appendChild(t)
    },
    html_encode: function(e) {
      return 0 === e.length ? "" : e.replace(/&/g, "&gt;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/'/g, "&#39;").replace(/"/g, "&quot;").replace(/\n/g, "<br>")
    },
    getScrollHeight: function() {
      var e = 0,
        t = 0;
      return document.body && (e = document.body.scrollHeight), document.documentElement && (t = document.documentElement.scrollHeight), 0 < e - t ? e : t
    },
    getWindowHeight: function() {
      return "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight
    },
    isTandalone: function() {
      return !!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && !!navigator.standalone
    },
    checkIdcard: function(e) {
      var t, n = new Array("验证通过!", "身份证号码位数不对", "身份证号码中出生日期非法!", "身份证号码校验错误!", "身份证地区非法!"),
        i = new Array;
      if (i = e.split(""), null == {
          11: "北京",
          12: "天津",
          13: "河北",
          14: "山西",
          15: "内蒙古",
          21: "辽宁",
          22: "吉林",
          23: "黑龙江",
          31: "上海",
          32: "江苏",
          33: "浙江",
          34: "安徽",
          35: "福建",
          36: "江西",
          37: "山东",
          41: "河南",
          42: "湖北",
          43: "湖南",
          44: "广东",
          45: "广西",
          46: "海南",
          50: "重庆",
          51: "四川",
          52: "贵州",
          53: "云南",
          54: "西藏",
          61: "陕西",
          62: "甘肃",
          63: "青海",
          64: "宁夏",
          65: "新疆",
          71: "台湾",
          81: "香港",
          82: "澳门",
          91: "国外"
        } [parseInt(e.substr(0, 2))]) return {
        status: 0,
        info: n[4]
      };
      switch (e.length) {
        case 15:
          return ((parseInt(e.substr(6, 2)) + 1900) % 4 == 0 || (parseInt(e.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(e.substr(6, 2)) + 1900) % 4 == 0 ? /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/ : /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/).test(e) ? {
            status: 1,
            info: n[0]
          } : {
            status: 0,
            info: n[2]
          };
        case 18:
          return (parseInt(e.substr(6, 4)) % 4 == 0 || parseInt(e.substr(6, 4)) % 100 == 0 && parseInt(e.substr(6, 4)) % 4 == 0 ? /^[1-9][0-9]{5}19||20[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ : /^[1-9][0-9]{5}19||20[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/).test(e) ? (t = 7 * (parseInt(i[0]) + parseInt(i[10])) + 9 * (parseInt(i[1]) + parseInt(i[11])) + 10 * (parseInt(i[2]) + parseInt(i[12])) + 5 * (parseInt(i[3]) + parseInt(i[13])) + 8 * (parseInt(i[4]) + parseInt(i[14])) + 4 * (parseInt(i[5]) + parseInt(i[15])) + 2 * (parseInt(i[6]) + parseInt(i[16])) + +parseInt(i[7]) + 6 * parseInt(i[8]) + 3 * parseInt(i[9]), "10X98765432".substr(t % 11, 1) == i[17] ? {
            status: 1,
            info: n[0]
          } : {
            status: 0,
            info: n[3]
          }) : {
            status: 0,
            info: n[2]
          };
        default:
          return {
            status: 0, info: n[1]
          }
      }
    },
    serialize: function(e) {
      if ("object" === (void 0 === e ? "undefined" : i(e))) {
        var t = [];
        for (var n in e) t.push(n + "=" + e[n]);
        return t.join("&")
      }
      console.log("Error! param isnot a object type!")
    },
    timers: function(e, t) {
      clearInterval(window.timer);
      var n = 0,
        i = 0,
        o = e,
        r = e,
        a = window.localStorage.getItem("age");
      window.timer = setInterval((function() {
        if (0 <= r) {
          var e = Math.floor(r / 3600),
            s = Math.floor(r % 3600 / 60),
            l = Math.floor(r % 3600 % 60),
            u = e + ":" + (s < 10 ? "0" + s : s) + ":" + (l < 10 ? "0" + l : l);
          try {
            document.all[t].innerHTML = u
          } catch (e) {
            clearInterval(window.timer)
          }
          AntiSDK.userReal((function(e) {
            1 == e.status && "1" == e.status || (++i, ++n % 10 == 0 && (console.log("count: " + n), console.log("开始用时：" + (o - r)), console.log("initTime" + i), AntiSDK.addRecordTime(10)))
          })), a && a < 18 && (++i, ++n % 10 == 0 && (console.log("count: " + n), console.log("开始用时：" + (o - r)), console.log("initTime" + i), AntiSDK.addRecordTime(10))), r <= 0 && (AntiSDK.timerVaild((function() {
            switch (AntiOption.platform) {
              case "k7_main":
              case "k7_m":
                location.href = location.origin;
                break;
              case "7k_avg":
                location.href = location.origin + "/avg";
                break;
              case "k7_web":
              case "k7_h5":
                location.href = location.origin
            }
          })), clearInterval(window.timer)), --r, window.localStorage.setItem(t, r)
        } else clearInterval(window.timer), AntiSDK.timerVaild()
      }), 1e5)
    },
    _console: function(e) {
      return e && console.log("%c[防沉迷]: %c " + e, "color:#159957;font-weight:bold", "color:#ffb658")
    },
    _ajax: function(e, t, n) {
      if (null == e || "" == e) return "请求地址不能为空";
      null != t && "" != t || (t = "GET"), $.ajax({
        url: e,
        type: t,
        async: !0,
        dataType: "jsonp",
        success: n,
        error: function(e) {
          console.error(e)
        }
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.UIbox = void 0;
  var i, o = ((i = n(0)) && i.__esModule ? i : {
      default: i
    }).default,
    r = {
      type: 0,
      mask: !0,
      maskClose: !1,
      closeBtn: !0,
      btns: ["确认"],
      title: "提示",
      titleShow: !0,
      texts: "",
      className: "",
      hideTime: 0
    };
  t.UIbox = function e(t) {
    Object.assign(r, t),
      function(e) {
        o(".Anti-UIbox").remove();
        var t = "Anti" + (new Date).getTime(),
          n = "Anti-UIbox",
          i = "<div class='Anti-UIbox-cont " + r.className + "' id ='Anti-UIbox-cont' ><div class='Anti-title'>" + e.title + "</div><div class='Anti-cont'>" + e.texts + "</div></div>";
        switch (r.type) {
          case 0:
            r.mask = !1, n += " nomask", i = "<div  class='Anti-UIbox-cont type0 " + r.className + "'><div class='Anti-cont'>" + e.texts + "</div></div>", r.hideTime && setTimeout((function() {
              o("#" + t).hide()
            }), 1e3 * r.hideTime);
            break;
          default:
            r.mask = !0
        }
        var a = document.createElement("div");
        a.className = n, a.id = t, a.innerHTML = i, document.body.appendChild(a)
      }(r), r.mask && (o(".min").on("click", (function(t) {
        "min" == t.target.id && (e({
          type: 1
        }), o(".uibox-startTime-title").hide(), o(".uibox-startTime-bottomBtns").hide(), o(".uibox-startTime-tipsTxt").hide(), o(".uibox-startTime-title").css({
          height: "auto",
          width: "30%",
          position: "relative"
        }), o(".uibox-startTime-mainTxt p").css({
          position: "fixed",
          right: "5px",
          top: "15%",
          width: "100px",
          background: "#fff",
          padding: "2px 20px",
          borderRadius: "20px",
          lineHeight: "35px",
          height: "auto"
        }), o("<span class='max-h'></span>").prependTo(".uibox-startTime-mainTxt p"), o("<span class='max-he'></span>").prependTo(".max-h"), o("<div class='add-min'></div>").prependTo(".uibox-startTime-mainTxt p"), o(".uibox-startTime-con").css({
          background: "transparent"
        }), o(".logoa").hide(), o(".text").hide(), o(".min").hide(), o(".Anti-UIbox").css({
          background: "none",
          left: "100%"
        })), o(".uibox-startTime-mainTxt p").on("click", (function() {
          o(".uibox-startTime-mainTxt p").css({
            width: "340px",
            height: "68px",
            background: "#f5fafc",
            border: "#e1e1e1",
            borderRadius: "1px",
            textAlign: "center",
            lineHeight: "68px",
            margin: "0 auto",
            fontSize: "20px",
            color: "#1c90ff"
          }), o(".uibox-startTime-title").show(), o(".uibox-startTime-bottomBtns").show(), o(".uibox-startTime-tipsTxt").show(), o(".uibox-startTime-con").css({
            background: "#fff"
          }), o(".uibox-startTime-con").css({
            paddingTop: "20px"
          }), o(".logoa").show(), o(".text").show(), o(".min").show(), o(".max-h").remove(), o(".max-he").remove(), o(".add-min").remove(), e({
            type: 1
          })
        }))
      })), o(".youke").on("click", (function(e) {
        o.ajax({
          url: "http://web.7k7k.com/source/Temp_bind.php?action=logintemp",
          async: !0,
          dataType: "jsonp",
          success: function(e) {
            1 != e.status && "1" != e.status || o(".Anti-UIbox").remove()
          }
        })
      })))
  }
}, function(e, t, n) {
  "use strict";
  var i = l(n(4)),
    o = l(n(1)),
    r = n(2),
    a = n(5),
    s = l(n(0));

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  n(6), window.jquery = s.default;
  var u = {
      platform: "",
      isLogin: "",
      userDatas: "",
      uid: "",
      gameid: "",
      isListen: !1,
      foo: "",
      switchAllStatus: {
        temp_time: "",
        user_real: "",
        allow_time: "",
        nonage_time: "",
        nonage_pay: "",
        avg_pay_real: "",
        h5_pay_real: ""
      }
    },
    c = {
      Init: function(e, t) {
        try {
          e.platform && (u.platform = e.platform, o.default.setLS("plat", u.platform), o.default._console("平台信息:" + e.platform)), e.gameid && "k7_h5" == e.platform && (u.gameid = e.gameid, o.default._console("查看游戏id"), o.default._console(u.gameid)), e.uid && (u.uid = e.uid, o.default._console(u.uid)), "k7_m" == u.platform && (u.uid || (o.default._console("用户没有登录"), c.autoLoginType())), o.default._console("初始化完成")
        } catch (e) {
          return o.default._console("请务必准确配置平台信息！", r.UIbox), o.default._console("初始化失败！"), !1
        }
        c.switchAll((function(e) {
          c.isSuccess(e.status) && (u.switchAllStatus = e.data, o.default._console("switch_all:" + JSON.stringify(u.switchAllStatus)), "function" == typeof t && t())
        }))
      },
      userState: function() {
        var e = i.default.isLogin();
        e.userid ? o.default._console("老用户，您登陆") : e.lastac ? o.default._console("老用户，未登陆") : o.default._console("新用户，未登陆")
      },
      deviceType: function() {
        var e = o.default.getDevice();
        for (var t in e) e[t];
        o.default._console("gdname")
      },
      autoLoginType: function() {
        switch (u.platform) {
          case "k7_main":
            qike.loginDialog.open();
            break;
          case "k7_m":
          case "7k_avg":
            Union.logFn.open();
            break;
          case "k7_web":
            nion.logFn.open();
            break;
          case "k7_h5":
            $(".index-head-photo").click()
        }
      },
      jumpHome: function() {
        switch (u.platform) {
          case "k7_main":
          case "k7_m":
            location.href = location.origin;
            break;
          case "7k_avg":
            location.href = location.origin + "/avg";
            break;
          case "k7_web":
          case "k7_h5":
            location.href = location.origin
        }
      },
      isBeginGames: function() {
        window.foo = "2"
      },
      limitTempTime: function() {
        var e = {
          action: "limit_temp_time",
          uid: o.default.getCookie("temp_uid"),
          platform: u.platform
        };
        "" != u.gameid && (e.gid = u.gameid);
        var t = "https://web.7k7k.com/source/limit_main.php?" + o.default.serialize(e);
        o.default._ajax(t, "GET", (function(e) {
          o.default._console("请求游客限制时长接口[limit_temp_time]:" + JSON.stringify(e)), c.isSuccess(e.limit_code) ? (o.default.setLS(u.platform, e.time), c.touristsCountdown(), 0 == e.time && alert("游客超时")) : o.default._console("获取时长失败")
        }))
      },
      m_limitNonageTime: function() {
        var e = {
            action: "limit_nonage_time",
            uid: u.uid,
            platform: u.platform
          },
          t = "https://web.7k7k.com/source/limit_main.php?" + o.default.serialize(e);
        o.default._ajax(t, "GET", (function(e) {
          o.default._console("limit_nonage_time:" + JSON.stringify(e)), c.isNonageTime() && (1 == e.limit_code || "1" == e.limit_code ? (o.default._console("返回状态为1,时间可用。"), window.foo = "2") : 0 == e.limit_code || "0" == e.limit_code ? (o.default._console("返回状态为0，时长已到。"), c.timerVaild(), foo = "1", o.default._console("时长到了的时候赋值foo为1  body可以滚动")) : -1 != e.limit_code && "-1" != e.limit_code || (o.default._console("返回状态为 -1，时间为22：00 —— 8：00"), c.isAllowTime() ? (c.banVaild(), foo = "1") : o.default._console("区间关闭")))
        }))
      },
      limitNonageTime: function(e) {
        var t = {
          action: "limit_nonage_time",
          uid: u.uid,
          platform: u.platform
        };
        "" != u.gameid && (t.gid = u.gameid), u.gameid && (t.gid = u.gameid);
        var n = "https://web.7k7k.com/source/limit_main.php?" + o.default.serialize(t);
        o.default._ajax(n, "GET", (function(t) {
          o.default._console("limit_nonage_time:" + JSON.stringify(t)), c.isNonageTime() && (1 == t.limit_code || "1" == t.limit_code ? (o.default._console("返回状态为1,时间可用。"), o.default.timers(t.time, u.platform), "function" == typeof e && e(t), c.children()) : 0 == t.limit_code || "0" == t.limit_code ? (o.default._console("返回状态为0，时长已到。"), c.timerVaild(), o.default._console("时长到了的时候赋值foo为1  body可以滚动")) : -1 != t.limit_code && "-1" != t.limit_code || (o.default._console("返回状态为 -1，时间为22：00 —— 8：00"), c.isAllowTime() ? c.banVaild() : o.default._console("区间关闭")))
        }))
      },
      limitNonageTimeCeshi: function() {
        var e = {
          action: "limit_temp_time",
          uid: u.uid,
          platform: u.platform
        };
        u.gameid && (e.gid = u.gameid, o.default._console(e.gid));
        var t = "https://web.7k7k.com/source/limit_main_new.php?" + o.default.serialize(e);
        o.default._ajax(t, "GET", (function(e) {
          o.default._console("limit_nonage_time:" + JSON.stringify(e)), 1 == e.limit_code || "1" == e.limit_code ? (o.default._console("返回状态为1,时间可用。"), c.nouserReal(), o.default.timers(e.time, u.platform)) : c.realNameVaild()
        }))
      },
      loginTemp: function(e) {
        o.default._ajax("https://web.7k7k.com/source/Temp_bind.php?action=login_temp", "GET", (function(t) {
          o.default._console("login_temp:" + JSON.stringify(t)), "function" == typeof e && e(t)
        }))
      },
      isTempTime: function() {
        return 1 == u.switchAllStatus.temp_time || "1" == u.switchAllStatus.temp_time
      },
      isUserReal: function() {
        return 1 == u.switchAllStatus.user_real || "1" == u.switchAllStatus.user_real
      },
      isAllowTime: function() {
        return 1 == u.switchAllStatus.allow_time || "1" == u.switchAllStatus.allow_time
      },
      isNonageTime: function() {
        return 1 == u.switchAllStatus.nonage_time || "1" == u.switchAllStatus.nonage_time
      },
      isNonagePay: function() {
        return 1 == u.switchAllStatus.nonage_pay || "1" == u.switchAllStatus.nonage_pay
      },
      isAvgPayReal: function() {
        return !!/(7k_avg)?/.test(u.platform) && (1 == u.switchAllStatus.avg_pay_real || "1" == u.switchAllStatus.avg_pay_real)
      },
      isH5PayReal: function() {
        return !!/^(k7_h5)$/.test(u.platform) && (1 == u.switchAllStatus.h5_pay_real || "1" == u.switchAllStatus.h5_pay_real)
      },
      isSuccess: function(e) {
        return 1 == e || "1" == e
      },
      getRecordTimes: function(e) {
        c.userReal((function(t) {
          if (1 != t.status || "1" != t.status) {
            o.default._console("-----------没有实名--------"), o.default._console("判断玩家游戏时间");
            var n = {
              action: "over_action_request",
              uid: u.uid,
              platform: u.platform
            };
            "" != u.gameid && (n.gid = u.gameid);
            var i = "https://web.7k7k.com/source/limit_main_new.php?" + o.default.serialize(n);
            o.default._ajax(i, "GET", (function(t) {
              o.default._console("limit_temp_time:" + JSON.stringify(t)), 0 != t.limit_code && "0" != t.limit_code || (o.default._console("------------------"), o.default._console("返回状态为0，时长已到。"), c.realNameVaild()), "function" == typeof e && e(t)
            }))
          }
        }))
      },
      getRecordTime: function(e) {
        var t = {
          action: "get_record_time",
          uid: u.uid,
          platform: u.platform
        };
        "" != u.gameid && (t.gid = u.gameid);
        var n = "https://web.7k7k.com/source/Temp_bind.php?" + o.default.serialize(t);
        o.default._ajax(n, "GET", (function(t) {
          o.default._console("get_record_time:" + JSON.stringify(t)), "function" == typeof e && e(t)
        }))
      },
      userReal: function(e) {
        var t = "//web.7k7k.com/source/Temp_bind.php?action=check_real&uid=" + u.uid+'&gid='+u.gameid;
        o.default._ajax(t, "GET", (function(t) {
          o.default._console("check_real:" + JSON.stringify(t)), "function" == typeof e && e(t)
        }))
      },
      toGames: function() {

      },
      switchAll: function(e) {
        $.ajax({
          url: "https://web.7k7k.com/source/limit_main.php?",
          type: "GET",
          data: {
            action: "switch_all",
            gid: u.gameid,
            platform: "k7_h5"
          },
          async: !1,
          dataType: "jsonp",
          success: e,
          error: function(e) {
            o.default._console("开关失败：" + e)
          }
        })
      },
      addRecordTime: function(e) {
        var t = {
          action: "add_record_time",
          uid: u.uid,
          platform: u.platform,
          time: e
        };
        "" != u.gameid && (t.gid = u.gameid);
        var n = "https://web.7k7k.com/source/Temp_bind.php?" + o.default.serialize(t);
        o.default._ajax(n, "GET", (function(t) {
          c.isSuccess(t.status) ? (o.default._console("上报时间成功"), o.default._console("上报的秒数" + JSON.stringify(e))) : o.default._console("上报时间失败")
        }))
      },
      toPay: function(e) {
        return new Promise((function(t, n) {
          o.default._console(u.platform), "7k_avg" != u.platform && "k7_h5" != u.platform || (c.isNonagePay() && (c.isAvgPayReal() || c.isH5PayReal()) ? c.userReal((function(n) {
            if (1 != n.status || "1" != n.status) o.default._console("-----------没有实名--------"), c.realNameVaild();
            else {
              o.default._console("-----------已经实名--------"), e && o.default._console("金额" + e), "" == u.platform && (u.platform = "k7_h5");
              var i = {
                action: "limit_nonage_pay",
                money: e,
                uid: u.uid,
                platform: u.platform
              };
              "" != u.gameid && (i.gid = u.gameid);
              var r = "https://web.7k7k.com/source/limit_main.php?" + o.default.serialize(i);
              o.default._ajax(r, "GET", (function(e) {
                o.default._console("limit_nonage_pay" + JSON.stringify(e)), c.isSuccess(e.status) ? t(!0) : (c.superPay(e), t(!1))
              }))
            }
          })) : (o.default._console("关闭充值限制开关，默认充值不受限制"), t(!0)), o.default._console("[isAvgPayReal]充值金额开关开启"))
        }))
      },
      realNameVaild: function() {
        c.actualName();
        var e = {
          name: !1,
          idcard: !1,
          phone: !0,
          qq: !0,
          email: !0
        };
        $(".uibox-vaild-name").on("input", "input", (function(t) {
          $(".uibox-vaild-name .rn-vaild").removeClass("right error");
          var n = $(t.target).val();
          /[\u4e00-\u9fa5]{2,8}/.test(n) ? $.ajax({
            url: "http://web.7k7k.com/source/Temp_bind.php?action=valid&realname=" + encodeURIComponent(n),
            async: !0,
            dataType: "jsonp",
            success: function(t) {
              1 == t.status || "1" == t.status ? (e.name = !0, $(".uibox-vaild-name .rn-vaild").addClass("right"), $(".uibox-error p").text("")) : (e.name = !1, $(".uibox-vaild-name .rn-vaild").addClass("error"), $(".uibox-error p").text("真实姓名不能包含敏感字！"))
            }
          }) : (e.name = !1, $(".uibox-vaild-name .rn-vaild").addClass("error"), $(".uibox-error p").text("真实姓名为2-8个汉字！"))
        })), $(".uibox-vaild-idcard").on("input", "input", (function(t) {
          $(".uibox-vaild-idcard .rn-vaild").removeClass("right error");
          var n = o.default.checkIdcard($(t.target).val());
          1 == n.status ? (e.idcard = !0, $(".uibox-vaild-idcard .rn-vaild").addClass("right"), $(".uibox-error p").text("")) : (e.idcard = !1, $(".uibox-vaild-idcard .rn-vaild").addClass("error"), $(".uibox-error p").text(n.info))
        })), $(".uibox-vaild-phone").on("input", "input", (function(t) {
          $(".uibox-vaild-phone .rn-vaild").removeClass("right error"), /^1[34578]\d{9}$/.test($(t.target).val()) ? (e.phone = !0, $(".uibox-vaild-phone .rn-vaild").addClass("right"), $(".uibox-error p").text("")) : (e.phone = !1, $(".uibox-vaild-phone .rn-vaild").addClass("error"), $(".uibox-error p").text("手机号为12位纯数字！"))
        })), $(".uibox-vaild-qq").on("input", "input", (function(t) {
          $(".uibox-vaild-qq .rn-vaild").removeClass("right error"), /^[1-9]\d{4,11}$/.test($(t.target).val()) ? (e.qq = !0, $(".uibox-vaild-qq .rn-vaild").addClass("right"), $(".uibox-error p").text("")) : (e.qq = !1, $(".uibox-vaild-qq .rn-vaild").addClass("error"), $(".uibox-error p").text("QQ号为5-12个数字！"))
        })), $(".uibox-vaild-email").on("input", "input", (function(t) {
          $(".uibox-vaild-email .rn-vaild").removeClass("right error"), /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test($(t.target).val()) ? (e.email = !0, $(".uibox-vaild-email .rn-vaild").addClass("right"), $(".uibox-error p").text("")) : (e.email = !1, $(".uibox-vaild-email .rn-vaild").addClass("error"), $(".uibox-error p").text("微信号为6-20个子母,数字,下划线和减号,以字母开头,非中文"))
        })), $(".uibox-realName-bottomBtns").on("click", "span", (function(t) {
          for (var n in e) {
            var i = e[n];
            console.log(n, i), i ? $(".uibox-vaild-" + n).removeClass("error") : $(".uibox-vaild-" + n).addClass("error")
          }
          if (e.name && e.idcard) {
            $(".uibox-error p").text("正在验证，请稍后···");
            var r = {
              cname: encodeURIComponent($(".uibox-vaild-name input").val()),
              cardid: $(".uibox-vaild-idcard input").val(),
              phone: $(".uibox-vaild-phone input").val(),
              qq: $(".uibox-vaild-qq input").val(),
              wx: $(".uibox-vaild-email input").val()
            };
            window.setreal = "", $.ajax({
              url: "http://web.7k7k.com/source/Temp_bind.php?action=set_real&" + o.default.serialize(r),
              async: !0,
              dataType: "jsonp",
              success: function(e) {
                1 == e.status || "1" == e.status ? ($(".uibox-error p").text("认证通过，开始游戏之旅吧！"), window.location.reload(), setTimeout((function() {
                  $(".Anti-UIbox").remove()
                }), 1e3)) : $(".uibox-error p").text(e.info)
              }
            })
          } else $(".uibox-error p").text("带*号的为必填项，请完成必要信息后重试！")
        }))
      },
      refresh: function() {
        window.location.reload()
      },
      touristsCountdown: function() {
        var e = u.platform,
          t = o.default.getLS(e) || 180,
          n = '<div class="uiboxs-com uibox-startTime">            <div class="uibox-startTime-logo"><span class="logoa"></span></div>           <div class="uibox-startTime-con">           <div class="uibox-startTime-topBtns">               <span class="min" id="min"></span>           </div>           <div class="uibox-startTime-title">               温馨提示           </div>           <div class="uibox-startTime-mainTxt">               <p><span class="text">试玩倒计时：</span><span id="' + e + '"></span></p>           </div>         <div class="uibox-startTime-tipsTxt">               <p>【实名系统】游客模式15天以内，只提供1小时试玩时长，为了不影响您的游戏体验，请尽快登录平台。                   <a target="_blank" href="http://www.7k7k.com/avg/js/Announce.html">查看详情</a>               </p>           </div>           <div class="uibox-startTime-bottomBtns">                <span class="min" id="min" style="background: #e1e1e1;color: #fff;">游客访问</span>                <span class="logins" onclick="AntiSDK.autoLoginType()">登录/注册</span>           </div>           </div>       </div>';
        (0, r.UIbox)({
          type: 1,
          texts: n,
          className: "startTime"
        }), o.default.timers(t, e)
      },
      children: function() {
        var e = '';
        (0, r.UIbox)({
          type: 1,
          texts: e,
          className: "startTime"
        })
      },
      nouserReal: function() {
        var e = '<div class="uiboxs-com uibox-startTime" >            <div class="uibox-startTime-logo"><span class="logoa"></span></div>           <div class="uibox-startTime-con">           <div class="uibox-startTime-topBtns">               <span class="min" id="min"></span>           </div>           <div class="uibox-startTime-title">               温馨提示           </div>           <div class="uibox-startTime-mainTxt">               <p><span class="text">未成年倒计时：</span><span id="' + u.platform + '"></span></p>           </div>         <div class="uibox-startTime-tipsTxt">               <p>【实名系统】根据国家《关于防止未成年人沉迷网络游戏的通知》的相关要求，未成年人平日提供1.5小时游戏时长,周末节假日提供3小时游戏时长，为了您的身心健康，请合理安排游戏时间                   <a target="_blank" href="http://www.7k7k.com/avg/js/Announce.html">查看详情</a>               </p>           </div>           <div class="uibox-startTime-bottomBtns">                <span class="min" id="min" style="background: #1c90ff;color: #fff;">我知道啦</span>           </div>           </div>       </div>';
        (0, a.UIboxRealname)({
          type: 1,
          texts: e,
          className: "aa"
        })
      },
      actualName: function() {
        (0, r.UIbox)({
          type: 1,
          texts: '<div class="uiboxs-com uibox-realName">           <div class="uibox-realName-con">           <div class="uibox-realName-title">               实名认证           </div>           <div class="uibox-realname-mainTxt">               <p>填写实名认证信息<span>(*号必填)</span></p>           </div>           <div class="uibox-realName-tipsTxt uibox-vaild-name">               <p><span class="rn-mask">*</span><span class="rn-name">真实姓名:</span><span class="rn-input"><input type="text"></span><span class="rn-vaild"></span></p>           </div>           <div class="uibox-realName-tipsTxt uibox-vaild-idcard">               <p><span class="rn-mask">*</span><span class="rn-name">身份证号:</span><span class="rn-input"><input type="text"></span><span class="rn-vaild"></span></p>           </div>           <div class="uibox-realName-tipsTxt uibox-vaild-phone">               <p><span class="rn-mask"></span><span class="rn-name">手  机  号:</span><span class="rn-input"><input type="text"></span><span class="rn-vaild"></span></p>           </div>           <div class="uibox-realName-tipsTxt uibox-vaild-qq">               <p><span class="rn-mask"></span><span class="rn-name">Q  Q  号:</span><span class="rn-input"><input type="text"></span><span class="rn-vaild"></span></p>           </div>           <div class="uibox-realName-tipsTxt uibox-vaild-email">               <p><span class="rn-mask"></span><span class="rn-name">微  信  号:</span><span class="rn-input"><input type="text"></span><span class="rn-vaild"></span></p>           </div>           <div class="uibox-realName-tipsTxt uibox-error">               <p>您输入的身份信息有误，请重新输入！</p>           </div>           <div class="uibox-realName-tipsTxt uibox-boTips">               <p>您的游戏账号尚未实名认证，根据国家《关于防止未成年人沉迷网络游戏的通知》的相关要求，网络游戏用户需要使用有效身份证件进行实名认证！</p>           </div>           <div class="uibox-realName-bottomBtns">               <span class="logins">立即认证</span>           </div>           </div>       </div>',
          className: "realName"
        })
      },
      timerVaild: function() {
        (c.getRecordTime() || c.isNonageTime()) && (0, r.UIbox)({
          type: 1,
          texts: null != o.default.getCookie("userid") ? '<div class="uiboxs-com uibox-startTime">            <div class="uibox-startTime-logo"><span class="logo"></span></div>           <div class="uibox-startTime-con">           <div class="uibox-startTime-topBtns">           </div>           <div class="uibox-startTime-title">               温馨提示           </div>           <div class="uibox-startTime-mainTxt">               <p>您的累计游戏时长已超时！</p>           </div>         <div class="uibox-startTime-tipsTxt">               <p>【实名系统】您的今日累计游戏时长已达到上限，已不能进行游戏，请注意休息，合理安排时间                    <a target="_blank" href="http://www.7k7k.com/avg/js/Announce.html">查看详情</a>               </p>           </div>           <div class="uibox-startTime-bottomBtns">               <span class="logins"  onclick="AntiSDK.jumpHome()">我知道了</span>           </div>           </div>       </div>' : '<div class="uiboxs-com uibox-startTime">            <div class="uibox-startTime-logo"><span class="logo"></span></div>           <div class="uibox-startTime-con">           <div class="uibox-startTime-topBtns">           </div>           <div class="uibox-startTime-title">               温馨提示           </div>           <div class="uibox-startTime-mainTxt">               <p>您的试玩时间已到！</p>           </div>         <div class="uibox-startTime-tipsTxt">               <p>【实名系统】您今日试玩时长已达到上限，不能进行游戏，请尽快登陆，完成实名认证                    <a target="_blank" href="http://www.7k7k.com/avg/js/Announce.html">查看详情</a>               </p>           </div>           <div class="uibox-startTime-bottomBtns">               <span class="logins"  onclick="AntiSDK.autoLoginType()">立即登陆</span>           </div>           </div>       </div>',
          className: "startTime"
        }), c.getRecordTimes()
      },
      superPay: function() {
        (0, r.UIbox)({
          type: 1,
          texts: '<div class="uiboxs-com uibox-startTime">            <div class="uibox-startTime-logo"><span class="logo"></span></div>           <div class="uibox-startTime-con" style="height: 490px">           <div class="uibox-startTime-topBtns">               <span class="close" onclick="javascript:$(\'.Anti-UIbox\').remove();"></span>           </div>           <div class="uibox-startTime-title">               温馨提示           </div>           <div class="uibox-startTime-mainTxt">               <p>您已触发充值限制规范！</p>           </div>         <div class="uibox-startTime-tipsTxt" style="padding-top: 20px!important;">                   <div>                       <div style="padding: 0 0 10px 25px;font-size: 13px; color:#757c8a;">【实名系统】根据国家相关要求，未成年人充值限制如下：</div>               <div style="padding: 0px 0 0 34px;font-size: 13px;line-height: 30px;color:#757c8a">一、8周岁以下玩家，平台不提供任何充值服务;<div/>               <div style="color:#757c8a;font-size: 13px">二、8~16周岁，单次充值不得超过50元人民币,</div>                       <div style="color:#757c8a;font-size: 13px;padding: 0px 0 0 26px;">每月累计不得超过200元人民币;</div>               <div style="color:#757c8a;font-size: 13px;">三、16~18周岁，单次充值不得超过100元人民币，                       <div style="color:#757c8a;font-size: 13px;padding: 0 0 0 26px;">每月累计不得超过400元人民币；</div>                   </div>           </div>           <div class="uibox-startTime-bottomBtns" style="padding-top: 10px;!important;">               <span class="logins" style="margin: 20px -3px;" onclick="javascript:$(\'.Anti-UIbox\').remove();">我知道了</span>           </div>           </div>       </div>',
          className: "startTime"
        })
      },
      banVaild: function() {
        (0, r.UIbox)({
          type: 1,
          texts: '<div class="uiboxs-com uibox-startTime">            <div class="uibox-startTime-logo"><span class="logo"></span></div>           <div class="uibox-startTime-con">           <div class="uibox-startTime-topBtns">           </div>           <div class="uibox-startTime-title">               温馨提示           </div>           <div class="uibox-startTime-mainTxt">               <p>22:00-8:00网站不能进行游戏哦～</p>           </div>         <div class="uibox-startTime-tipsTxt">               <p>【实名系统】根据国家《关于防止未成年人沉迷网络游戏的通知》的相关要求,每天22:00-8:00平台对未成年人玩家不提供游戏服务，适度游戏，注意休息哦！                   <a target="_blank" href="http://www.7k7k.com/avg/js/Announce.html">查看详情</a>               </p>           </div>           <div class="uibox-startTime-bottomBtns">               <span class="logins"  onclick="AntiSDK.jumpHome()">我知道了</span>           </div>           </div>       </div>',
          className: "startTime"
        })
      }
    };
  window.AntiOption = u, window.AntiSDK = c
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = o(n(1));

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  o(n(0)), t.default = {
    isLogin: function(e) {
      var t = "",
        n = "",
        o = "";
      try {
        t = i.default.getCookie("uesername"), n = i.default.getCookie("userid"), o = i.default.getCookie("lastac")
      } catch (e) {
        i.default._console("未检测到cookie，判断为新用户。")
      }
      if (e) {
        var r = window.location.href,
          a = "";
        switch (e) {
          case "k7_main":
            a = /(swf\/)(\d+)(\.htm)$/;
            break;
          case "k7_m":
            a = /(flash\/)(\d+)(\.html)$/;
            break;
          case "7k_avg":
            a = /(play\/)(\d+)$/;
            break;
          case "k7_web":
            break;
          case "k7_h5":
            a = /(game\/)(\w+)$/
        }
        AntiOption.isListen = a.test(r)
      }
      return {
        uesername: t || "",
        userid: n || "",
        lastac: o || "",
        isRealName: ""
      }
    },
    modName: "detection"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.UIboxRealname = void 0;
  var i, o = ((i = n(0)) && i.__esModule ? i : {
      default: i
    }).default,
    r = {
      type: 0,
      mask: !0,
      maskClose: !1,
      closeBtn: !0,
      btns: ["确认"],
      title: "提示",
      titleShow: !0,
      texts: "",
      className: "",
      hideTime: 0
    };
  t.UIboxRealname = function(e) {
    Object.assign(r, e),
      function(e) {
        o(".Anti-UIboxa").remove();
        var t = "Anti" + (new Date).getTime(),
          n = "Anti-UIboxa",
          i = "<div class='Anti-UIbox-cont " + r.className + "' id ='Anti-UIbox-cont' ><div class='Anti-title'>" + e.title + "</div><div class='Anti-cont'>" + e.texts + "</div></div>";
        switch (r.type) {
          case 0:
            r.mask = !1, n += " nomask", i = "<div  class='Anti-UIbox-cont type0 " + r.className + "'><div class='Anti-cont'>" + e.texts + "</div></div>", r.hideTime && setTimeout((function() {
              o("#" + t).hide()
            }), 1e3 * r.hideTime);
            break;
          default:
            r.mask = !0
        }
        var a = document.createElement("div");
        a.className = n, a.id = t, a.innerHTML = i, document.body.appendChild(a)
      }(r), r.mask && (o(".min").on("click", (function(e) {
        "min" == e.target.id && (UIbox({
          type: 1
        }), o(".uibox-startTime-title").hide(), o(".uibox-startTime-bottomBtns").hide(), o(".uibox-startTime-tipsTxt").hide(), o(".uibox-startTime-title").css({
          height: "auto",
          width: "30%",
          position: "relative"
        }), o(".uibox-startTime-mainTxt p").css({
          position: "fixed",
          right: "5px",
          top: "15%",
          width: "100px",
          background: "#fff",
          padding: "2px 20px",
          borderRadius: "20px",
          lineHeight: "35px",
          height: "auto"
        }), o("<span class='max-h'></span>").prependTo(".uibox-startTime-mainTxt p"), o("<span class='max-he'></span>").prependTo(".max-h"), o("<div class='add-min'></div>").prependTo(".uibox-startTime-mainTxt p"), o(".uibox-startTime-con").css({
          background: "transparent"
        }), o(".logoa").hide(), o(".text").hide(), o(".min").hide(), o(".Anti-UIbox").css({
          background: "none",
          left: "100%"
        })), o(".uibox-startTime-mainTxt p").on("click", (function() {
          o(".uibox-startTime-mainTxt p").css({
            width: "340px",
            height: "68px",
            background: "#f5fafc",
            border: "#e1e1e1",
            borderRadius: "1px",
            textAlign: "center",
            lineHeight: "68px",
            margin: "0 auto",
            fontSize: "20px",
            color: "#1c90ff"
          }), o(".uibox-startTime-title").show(), o(".uibox-startTime-bottomBtns").show(), o(".uibox-startTime-tipsTxt").show(), o(".uibox-startTime-con").css({
            background: "#fff"
          }), o(".uibox-startTime-con").css({
            paddingTop: "20px"
          }), o(".logoa").show(), o(".text").show(), o(".min").show(), o(".max-h").remove(), o(".max-he").remove(), o(".add-min").remove(), UIbox({
            type: 1
          })
        }))
      })), o(".youke").on("click", (function(e) {
        o.ajax({
          url: "http://web.7k7k.com/source/Temp_bind.php?action=logintemp",
          async: !0,
          dataType: "jsonp",
          success: function(e) {
            1 != e.status && "1" != e.status || o(".Anti-UIboxa").remove()
          }
        })
      })))
  }
}, function(e, t, n) {
  var i = n(7),
    o = n(8);
  "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
    [e.i, o, ""]
  ]);
  var r = (i(e.i, o, {
    insert: "head",
    singleton: !1
  }), o.locals ? o.locals : {});
  e.exports = r
}, function(e, t, n) {
  "use strict";
  var i, o, r = function() {
      return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i
    },
    a = (o = {}, function(e) {
      if (void 0 === o[e]) {
        var t = document.querySelector(e);
        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
          t = t.contentDocument.head
        } catch (e) {
          t = null
        }
        o[e] = t
      }
      return o[e]
    }),
    s = {};

  function l(e, t, n) {
    for (var i = 0; i < t.length; i++) {
      var o = {
        css: t[i][1],
        media: t[i][2],
        sourceMap: t[i][3]
      };
      s[e][i] ? s[e][i](o) : s[e].push(m(o, n))
    }
  }

  function u(e) {
    var t = document.createElement("style"),
      i = e.attributes || {};
    if (void 0 === i.nonce) {
      var o = n.nc;
      o && (i.nonce = o)
    }
    if (Object.keys(i).forEach((function(e) {
        t.setAttribute(e, i[e])
      })), "function" == typeof e.insert) e.insert(t);
    else {
      var r = a(e.insert || "head");
      if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      r.appendChild(t)
    }
    return t
  }
  var c, d = (c = [], function(e, t) {
    return c[e] = t, c.filter(Boolean).join("\n")
  });

  function p(e, t, n, i) {
    var o = n ? "" : i.css;
    if (e.styleSheet) e.styleSheet.cssText = d(t, o);
    else {
      var r = document.createTextNode(o),
        a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
    }
  }
  var f = null,
    h = 0;

  function m(e, t) {
    var n, i, o;
    if (t.singleton) {
      var r = h++;
      n = f = f || u(t), i = p.bind(null, n, r, !1), o = p.bind(null, n, r, !0)
    } else n = u(t), i = function(e, t, n) {
      var i = n.css,
        o = n.media,
        r = n.sourceMap;
      if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), r && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleSheet) e.styleSheet.cssText = i;
      else {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(i))
      }
    }.bind(null, n, t), o = function() {
      var e;
      null !== (e = n).parentNode && e.parentNode.removeChild(e)
    };
    return i(e),
      function(t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          i(e = t)
        } else o()
      }
  }
  e.exports = function(e, t, n) {
    return (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = r()), e = n.base ? e + n.base : e, t = t || [], s[e] || (s[e] = []), l(e, t, n),
      function(t) {
        if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
          s[e] || (s[e] = []), l(e, t, n);
          for (var i = t.length; i < s[e].length; i++) s[e][i]();
          s[e].length = t.length, 0 === s[e].length && delete s[e]
        }
      }
  }
}, function(e, t, n) {
  (t = n(9)(!1)).push([e.i, "/* reset style */\n\np {\n    margin:0;\n    padding:0\n}\nul,li {\n    list-style: none\n}\n\n/* main style */\n\n.Anti-UIbox {\n    position: fixed;\n       left:0;\n    top:0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 999;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n/* 30分钟后弹起未实名弹框 */\n.Anti-UIboxa {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    left:0;\n    top:0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 999;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    display:none;\n}\n.Anti-UIbox .Anti-UIbox-cont {\n    max-width: 285px;\n    max-height: 305px;\n    height: 100%;\n    width: 100%;\n    background: #ffffff;\n    border: rgba(0, 0, 0, 0.8);\n    border-radius: 5px;\n    display:flex;\n\n}\n.Anti-UIbox .Anti-UIbox-cont.type0 {\n    max-width: 285px;\n    max-height: 35px;\n    height: 100%;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    border: rgba(0, 0, 0, 0.8);\n    border-radius: 10px;\n    display:flex;\n    color: #ffffff;\n    text-align: center;\n    line-height: 35px;\n    font-size: 12px;\n}\n.Anti-UIbox .Anti-UIbox-cont.type0 .Anti-cont {\n    flex: 1;\n    width: 100%;\n    color: #ffffff;\n    text-align: center;\n    line-height: 35px;\n    font-size: 12px;\n}\n\n.Anti-UIbox .Anti-UIbox-cont .Anti-cont {\n    width: 100%;\n}\n.Anti-UIbox.nomask {\n    background: none\n}\n.aa.Anti-UIbox-cont {\n    /* max-width: 400px; */\n    max-width:90%;\n    max-height: 455px;\n    background: none;\n    border-radius: 8px;\n    display:none;\n}\n\n/* 开始计时弹框 */\n.startTime.Anti-UIbox-cont {\n    /* max-width: 400px; */\n    max-width:90%;\n    max-height: 455px;\n    background: none;\n    border-radius: 8px;\n}\n.startTime.Anti-UIbox-cont .Anti-title {\n    display: none;\n}\n.startTime.Anti-UIbox-cont .uibox-startTime {\n    position: relative;\n}\n\n.uibox-startTime-logo {\n    width: 100%;\n    height: 50px;\n    background: none;\n}\n.uibox-startTime-logo .logo {\n    position: absolute;\n    left: 50%;\n    margin-left: -51px;\n    display: block;\n    width: 103px;\n    height: 95px;\n    background: url(http://www.7k7k.com/avg/img/logo.png) no-repeat center center;\n}\n.uibox-startTime-logo .logoa {\n    position: absolute;\n    left: 50%;\n    margin-left: -51px;\n    display: block;\n    width: 103px;\n    height: 95px;\n    background: url(http://www.7k7k.com/avg/img/logo.png) no-repeat center center;\n}\n\n.add-min{\n    position:absolute;\n    top:-75px;\n    right:15px;\n    width:99px;\n    height:0;\n    padding-top:109%;\n    background-size: contain;\n    background: url(http://www.7k7k.com/avg/img/logo.png) no-repeat 0  0;\n    transform: scale(0.5);\n}\n\n\n.uibox-startTime-topBtns {\n    width: 100%;\n    height: 50px;\n    background: none;\n}\n.uibox-startTime-topBtns span{\n    position: absolute;\n    top: 70px;\n    display: block;\n    width: 14px;\n    height: 14px;\n    cursor: pointer;\n}\n.uibox-startTime-topBtns .min {\n\n    right: 45px;\n    /*background-color: #757c8a;*/\n    background: url(http://www.7k7k.com/avg/img/mini.png) no-repeat center center !important;\n}\n.uibox-startTime-topBtns .close{\n\n    right: 15px;\n\n    background: url(http://www.7k7k.com/avg/img/close.png) no-repeat center center;\n}\n.uibox-startTime-con {\n    background: #ffffff;\n    border-radius: 8px;\n    height: 405px;\n}\n\n.uibox-startTime-title{\n    text-align: center;\n    font-size: 30px;\n    line-height: 50px;\n    color: #757c8a;\n}\n\n.uibox-startTime-mainTxt {\n    padding-top: 20px;\n}\n.uibox-startTime-mainTxt p{\n    /* width: 340px; */\n    width:90%;\n    height: 68px;\n    background: #f5fafc;\n    border: #e1e1e1;\n    border-radius: 1px;\n    text-align: center;\n    line-height: 68px;\n    margin: 0 auto;\n    font-size: 20px;\n    color: #1c90ff;\n}\n.add-timebox{\n    position:fixed;\n    right:1em;\n    top:1.8em;\n    width:auto;\n    background:#ebfa;\n    padding:2px 20px;\n    border-radius:12px;\n    line-height:35px;\n    height:auto;\n\n}\n\n.uibox-startTime-tipsTxt {\n    /* padding-top: 30px; */\n    padding:30px 20px 30px 20px;\n}\n.uibox-startTime-tipsTxt p{\n    font-size: 13px;\n    color: #848ca0;\n    /* width: 340px; */\n    width:100%;\n    height: 68px;\n    margin: 0 auto;\n    text-align: justify;\n    line-height: 22px;\n}\n.uibox-startTime-tipsTxt p a {\n    font-size: 13px;\n    color: #1c90ff;\n}\n.uibox-startTime-bottomBtns {\n    display: flex;\n    /* padding-top: 25px; */\n    padding-top:8px;\n    margin:0 auto;\n    width:100%;\n}\n.uibox-startTime-bottomBtns span {\n    /*flex: 1;*/\n    /* 新添加 */\n    width:90%;\n    /* width: 156px; */\n    height: 45px;\n    background: #ebebeb;\n    color: #848ca0;\n    margin: 0 30px;\n    text-align: center;\n    line-height: 45px;\n    font-size: 18px;\n    border-radius: 5px;\n    cursor: pointer;\n    \n}\n\n.uibox-startTime-bottomBtns .logins{\n    background: #1c90ff;\n    color: #ffffff;\n    /* 新加 */\n    margin:0 auto;\n}\n\n/* realName */\n.uibox-realName {\n    position: relative;\n}\n.realName.Anti-UIbox-cont {\n    max-width: 475px;\n    max-height: 600px;\n    background: #ffffff;\n    border-radius: 8px;\n    width: 90%;\n    height: 95%;\n    padding-bottom:10px;\n}\n.realName .Anti-title {\n    display: none\n}\n.uibox-realName-topBtns {\n    width: 100%;\n    height: 20px;\n    background: none;\n}\n.uibox-realName-topBtns span{\n    position: absolute;\n    top: 15px;\n    display: block;\n    width: 14px;\n    height: 14px;\n    cursor: pointer;\n}\n.uibox-realName-topBtns .min {\n\n    right: 45px;\n\n    background: url(http://www.7k7k.com/avg/img/mini.png) no-repeat center center;\n}\n.uibox-realName-topBtns .close{\n\n    right: 15px;\n\n    background: url(http://www.7k7k.com/avg/img/close.png) no-repeat center center;\n}\n.uibox-realName .uibox-realName-title{\n    text-align: center;\n    font-size: 23px;\n    color: #848ca0;\n    padding: 15px 0;\n    border-bottom: 1px solid #77bcff;\n}\n.uibox-realname-mainTxt {\n    text-align: center;\n    font-size: 14px;\n    color: #54abff;\n    padding:10px 0\n}\n.uibox-realname-mainTxt span {\n    font-size: 12px;\n    color: #ef0000;\n}\n.uibox-realName-tipsTxt {\n    padding: 0 35px 3px 25px;\n\n    /* height: 45px; */\n}\n.uibox-realName-tipsTxt p {\n    display: flex;\n    padding:0;margin:0;\n    flex:1;\n    height: 45px;\n}\n.uibox-realName-tipsTxt p span{\n    display: inline-block;\n    height: 45px;\n    line-height: 45px;\n    border-bottom: 1px dashed #eff0f2;\n    color:#848ca0;\n    font-size: 14px;\n}\n.uibox-realName-tipsTxt.error p span+span{\n    border-bottom: 1px dashed #ef0000;\n}\n.uibox-realName-tipsTxt p .rn-mask {\n    width: 10px;\n    border-bottom: 0px dashed #e3e3e3;\n    color:#ef0000;\n    font-size: 12px\n}\n.uibox-realName-tipsTxt p .rn-name {\n    width: 70px;\n\n}\n.uibox-realName-tipsTxt p .rn-input {\n    flex:1\n}\n.uibox-realName-tipsTxt p .rn-input input {\n    width: 100%;\n    height: 100%;\n    border:none;\n    outline:none;\n    line-height: 45px;\n    background: none\n}\n.uibox-realName-tipsTxt p .rn-vaild {\n    width: 30px\n}\n.uibox-error p {\n    font-size: 12px;\n    color:#ef0000;\n    text-align: center;\n    display: block;\n    line-height: 45px;\n}\n.uibox-realName-tipsTxt.uibox-boTips p {\n    font-size: 14px;\n    color:#848ca0;\n    line-height: 18px;\n    padding: 0 15px 10px 15px;\n    height: auto;\n}\n.uibox-realName-bottomBtns {\n    display: flex;\n    /* padding-top: 25px; */\n}\n.uibox-realName-bottomBtns span {\n    flex: 1;\n    width: 156px;\n    height: 45px;\n    background: #54abff;\n    color: #fff;\n    margin: 0 30px;\n    text-align: center;\n    line-height: 45px;\n    font-size: 18px;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.uibox-realName-tipsTxt .rn-vaild.right {\n    background: url(http://www.7k7k.com/avg/img/right.png) no-repeat center center\n}\n.uibox-realName-tipsTxt .rn-vaild.error {\n    background: url(http://www.7k7k.com/avg/img/error.png) no-repeat center center\n}\n.max-h{\n    display: none;\n    position: absolute;\n    top: 2px;\n    right: 12px;\n    border-right: 1px solid #a7abb2;\n    width: 10px;\n    height: 8px;\n}\n\n.max-he{\n    position: absolute;\n    width: 10px;\n    top: 3.42px;\n    right: -5px;\n    border-top: 1px solid #a7abb2;\n\n}\n\n\n", ""]), e.exports = t
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    var t = [];
    return t.toString = function() {
      return this.map((function(t) {
        var n = function(e, t) {
          var n = e[1] || "",
            i = e[3];
          if (!i) return n;
          if (t && "function" == typeof btoa) {
            var o = function(e) {
                var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
                  n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);
                return "/*# ".concat(n, " */")
              }(i),
              r = i.sources.map((function(e) {
                return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */")
              }));
            return [n].concat(r).concat([o]).join("\n")
          }
          return [n].join("\n")
        }(t, e);
        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
      })).join("")
    }, t.i = function(e, n) {
      "string" == typeof e && (e = [
        [null, e, ""]
      ]);
      for (var i = 0; i < e.length; i++) {
        var o = [].concat(e[i]);
        n && (o[2] ? o[2] = "".concat(n, " and ").concat(o[2]) : o[2] = n), t.push(o)
      }
    }, t
  }
}]);
