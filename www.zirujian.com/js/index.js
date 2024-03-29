/*! fe-common/utopia-core@0.2.13 | gebilaoxiong <gebilaoxiong@gmail.com> | powered by Tomoko@0.1.11 */
this.utopia = function(e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var i = t[r] = {
			exports: {},
			id: r,
			loaded: !1
		};
		return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
	}
	return n.m = e, n.c = t, n.p = "./", n(0)
}([function(e, t, n) {
	var r = n(1),
		i = n(2),
		o;
	r.extend(window, {
		$: r,
		jQuery: r
	}, i), n(3), n(6), o = n(7), n(12), n(13), e.exports = o
},


function(e, t, n) {
	var r, i;
	!
	function(t, n) {
		"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return n(e)
		} : n(t)
	}("undefined" != typeof window ? window : this, function(n, o) {
		var a = [],
			s = n.document,
			u = a.slice,
			l = a.concat,
			c = a.push,
			d = a.indexOf,
			f = {},
			p = f.toString,
			h = f.hasOwnProperty,
			v = {},
			g = "1.12.4",
			m = function(e, t) {
				return new m.fn.init(e, t)
			},
			y = /^[\s﻿ ]+|[\s﻿ ]+$/g,
			x = /^-ms-/,
			b = /-([\da-z])/gi,
			w = function(e, t) {
				return t.toUpperCase()
			};
		m.fn = m.prototype = {
			jquery: g,
			constructor: m,
			selector: "",
			length: 0,
			toArray: function() {
				return u.call(this)
			},
			get: function(e) {
				return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
			},
			pushStack: function(e) {
				var t = m.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e) {
				return m.each(this, e)
			},
			map: function(e) {
				return this.pushStack(m.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
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
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor()
			},
			push: c,
			sort: a.sort,
			splice: a.splice
		}, m.extend = m.fn.extend = function() {
			var e, t, n, r, i, o, a = arguments[0] || {},
				s = 1,
				u = arguments.length,
				l = !1;
			for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], n = i[r], a !== n && (l && n && (m.isPlainObject(n) || (t = m.isArray(n))) ? (t ? (t = !1, o = e && m.isArray(e) ? e : []) : o = e && m.isPlainObject(e) ? e : {}, a[r] = m.extend(l, o, n)) : void 0 !== n && (a[r] = n));
			return a
		}, m.extend({
			expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return "function" === m.type(e)
			},
			isArray: Array.isArray ||
			function(e) {
				return "array" === m.type(e)
			},
			isWindow: function(e) {
				return null != e && e == e.window
			},
			isNumeric: function(e) {
				var t = e && e.toString();
				return !m.isArray(e) && t - parseFloat(t) + 1 >= 0
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			isPlainObject: function(e) {
				var t;
				if (!e || "object" !== m.type(e) || e.nodeType || m.isWindow(e)) return !1;
				try {
					if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (n) {
					return !1
				}
				if (!v.ownFirst) for (t in e) return h.call(e, t);
				for (t in e);
				return void 0 === t || h.call(e, t)
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				e && m.trim(e) && (n.execScript ||
				function(e) {
					n.eval.call(n, e)
				})(e)
			},
			camelCase: function(e) {
				return e.replace(x, "ms-").replace(b, w)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t) {
				var n, r = 0;
				if (T(e)) {
					for (n = e.length; r < n; r++) if (t.call(e[r], r, e[r]) === !1) break
				} else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
				return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(y, "")
			},
			makeArray: function(e, t) {
				var n = t || [];
				return null != e && (T(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
			},
			inArray: function(e, t, n) {
				var r;
				if (t) {
					if (d) return d.call(t, e, n);
					for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function(e, t) {
				var n = +t.length,
					r = 0,
					i = e.length;
				while (r < n) e[i++] = t[r++];
				if (n !== n) while (void 0 !== t[r]) e[i++] = t[r++];
				return e.length = i, e
			},
			grep: function(e, t, n) {
				for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
				return i
			},
			map: function(e, t, n) {
				var r, i, o = 0,
					a = [];
				if (T(e)) for (r = e.length; o < r; o++) i = t(e[o], o, n), null != i && a.push(i);
				else for (o in e) i = t(e[o], o, n), null != i && a.push(i);
				return l.apply([], a)
			},
			guid: 1,
			proxy: function(e, t) {
				var n, r, i;
				if ("string" == typeof t && (i = e[t], t = e, e = i), m.isFunction(e)) return n = u.call(arguments, 2), r = function() {
					return e.apply(t || this, n.concat(u.call(arguments)))
				}, r.guid = e.guid = e.guid || m.guid++, r
			},
			now: function() {
				return +new Date
			},
			support: v
		}), "function" == typeof Symbol && (m.fn[Symbol.iterator] = a[Symbol.iterator]), m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
			f["[object " + t + "]"] = t.toLowerCase()
		});

		function T(e) {
			var t = !! e && "length" in e && e.length,
				n = m.type(e);
			return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}
		var C = function(e) {
				var t, n, r, i, o, a, s, u, l, c, d, f, p, h, v, g, m, y, x, b = "sizzle" + 1 * new Date,
					w = e.document,
					T = 0,
					C = 0,
					E = ae(),
					N = ae(),
					S = ae(),
					k = function(e, t) {
						return e === t && (d = !0), 0
					},
					A = 1 << 31,
					j = {}.hasOwnProperty,
					D = [],
					L = D.pop,
					_ = D.push,
					H = D.push,
					q = D.slice,
					O = function(e, t) {
						for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
						return -1
					},
					R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					M = "[\ \\t\\r\\n\\f]",
					I = "(?:\\\\.|[\\w-]|[^\ -\ ])+",
					F = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
					P = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
					B = new RegExp(M + "+", "g"),
					$ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
					W = new RegExp("^" + M + "*," + M + "*"),
					z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
					U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
					X = new RegExp(P),
					V = new RegExp("^" + I + "$"),
					G = {
						"ID": new RegExp("^#(" + I + ")"),
						"CLASS": new RegExp("^\\.(" + I + ")"),
						"TAG": new RegExp("^(" + I + "|[*])"),
						"ATTR": new RegExp("^" + F),
						"PSEUDO": new RegExp("^" + P),
						"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
						"bool": new RegExp("^(?:" + R + ")$", "i"),
						"needsContext": new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
					},
					Y = /^(?:input|select|textarea|button)$/i,
					J = /^h\d$/i,
					K = /^[^{]+\{\s*\[native \w/,
					Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					Q = /[+~]/,
					ee = /'|\\/g,
					te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
					ne = function(e, t, n) {
						var r = "0x" + t - 65536;
						return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
					},
					re = function() {
						f()
					};
				try {
					H.apply(D = q.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
				} catch (ie) {
					H = {
						apply: D.length ?
						function(e, t) {
							_.apply(e, q.call(t))
						} : function(e, t) {
							var n = e.length,
								r = 0;
							while (e[n++] = t[r++]);
							e.length = n - 1
						}
					}
				}

				function oe(e, t, r, i) {
					var o, s, l, c, d, h, m, y, T = t && t.ownerDocument,
						C = t ? t.nodeType : 9;
					if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;
					if (!i && ((t ? t.ownerDocument || t : w) !== p && f(t), t = t || p, v)) {
						if (11 !== C && (h = Z.exec(e))) if (o = h[1]) {
							if (9 === C) {
								if (!(l = t.getElementById(o))) return r;
								if (l.id === o) return r.push(l), r
							} else if (T && (l = T.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
						} else {
							if (h[2]) return H.apply(r, t.getElementsByTagName(e)), r;
							if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
						}
						if (n.qsa && !S[e + " "] && (!g || !g.test(e))) {
							if (1 !== C) T = t, y = e;
							else if ("object" !== t.nodeName.toLowerCase()) {
								(c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = b), m = a(e), s = m.length, d = V.test(c) ? "#" + c : "[id='" + c + "']";
								while (s--) m[s] = d + " " + ge(m[s]);
								y = m.join(","), T = Q.test(e) && he(t.parentNode) || t
							}
							if (y) try {
								return H.apply(r, T.querySelectorAll(y)), r
							} catch (E) {} finally {
								c === b && t.removeAttribute("id")
							}
						}
					}
					return u(e.replace($, "$1"), t, r, i)
				}

				function ae() {
					var e = [];

					function t(n, i) {
						return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
					}
					return t
				}

				function se(e) {
					return e[b] = !0, e
				}

				function ue(e) {
					var t = p.createElement("div");
					try {
						return !!e(t)
					} catch (n) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}

				function le(e, t) {
					var n = e.split("|"),
						i = n.length;
					while (i--) r.attrHandle[n[i]] = t
				}

				function ce(e, t) {
					var n = t && e,
						r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);
					if (r) return r;
					if (n) while (n = n.nextSibling) if (n === t) return -1;
					return e ? 1 : -1
				}

				function de(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return "input" === n && t.type === e
					}
				}

				function fe(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}

				function pe(e) {
					return se(function(t) {
						return t = +t, se(function(n, r) {
							var i, o = e([], n.length, t),
								a = o.length;
							while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
						})
					})
				}

				function he(e) {
					return e && "undefined" != typeof e.getElementsByTagName && e
				}
				n = oe.support = {}, o = oe.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !!t && "HTML" !== t.nodeName
				}, f = oe.setDocument = function(e) {
					var t, i, a = e ? e.ownerDocument || e : w;
					return a !== p && 9 === a.nodeType && a.documentElement ? (p = a, h = p.documentElement, v = !o(p), (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), n.getElementsByTagName = ue(function(e) {
						return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
					}), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ue(function(e) {
						return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
					}), n.getById ? (r.find.ID = function(e, t) {
						if ("undefined" != typeof t.getElementById && v) {
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}, r.filter.ID = function(e) {
						var t = e.replace(te, ne);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}) : (delete r.find.ID, r.filter.ID = function(e) {
						var t = e.replace(te, ne);
						return function(e) {
							var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return n && n.value === t
						}
					}), r.find.TAG = n.getElementsByTagName ?
					function(e, t) {
						return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							while (n = o[i++]) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, r.find.CLASS = n.getElementsByClassName &&
					function(e, t) {
						if ("undefined" != typeof t.getElementsByClassName && v) return t.getElementsByClassName(e)
					}, m = [], g = [], (n.qsa = K.test(p.querySelectorAll)) && (ue(function(e) {
						h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
					}), ue(function(e) {
						var t = p.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
					})), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
						n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", P)
					}), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ?
					function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function(e, t) {
						if (t) while (t = t.parentNode) if (t === e) return !0;
						return !1
					}, k = t ?
					function(e, t) {
						if (e === t) return d = !0, 0;
						var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
					} : function(e, t) {
						if (e === t) return d = !0, 0;
						var n, r = 0,
							i = e.parentNode,
							o = t.parentNode,
							a = [e],
							s = [t];
						if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
						if (i === o) return ce(e, t);
						n = e;
						while (n = n.parentNode) a.unshift(n);
						n = t;
						while (n = n.parentNode) s.unshift(n);
						while (a[r] === s[r]) r++;
						return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
					}, p) : p
				}, oe.matches = function(e, t) {
					return oe(e, null, null, t)
				}, oe.matchesSelector = function(e, t) {
					if ((e.ownerDocument || e) !== p && f(e), t = t.replace(U, "='$1']"), n.matchesSelector && v && !S[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try {
						var r = y.call(e, t);
						if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
					} catch (i) {}
					return oe(t, p, null, [e]).length > 0
				}, oe.contains = function(e, t) {
					return (e.ownerDocument || e) !== p && f(e), x(e, t)
				}, oe.attr = function(e, t) {
					(e.ownerDocument || e) !== p && f(e);
					var i = r.attrHandle[t.toLowerCase()],
						o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
					return void 0 !== o ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
				}, oe.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, oe.uniqueSort = function(e) {
					var t, r = [],
						i = 0,
						o = 0;
					if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(k), d) {
						while (t = e[o++]) t === e[o] && (i = r.push(o));
						while (i--) e.splice(r[i], 1)
					}
					return c = null, e
				}, i = oe.getText = function(e) {
					var t, n = "",
						r = 0,
						o = e.nodeType;
					if (o) {
						if (1 === o || 9 === o || 11 === o) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
						} else if (3 === o || 4 === o) return e.nodeValue
					} else while (t = e[r++]) n += i(t);
					return n
				}, r = oe.selectors = {
					cacheLength: 50,
					createPseudo: se,
					match: G,
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
						"ATTR": function(e) {
							return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						"CHILD": function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
						},
						"PSEUDO": function(e) {
							var t, n = !e[6] && e[2];
							return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						"TAG": function(e) {
							var t = e.replace(te, ne).toLowerCase();
							return "*" === e ?
							function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						"CLASS": function(e) {
							var t = E[e + " "];
							return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
								return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
							})
						},
						"ATTR": function(e, t, n) {
							return function(r) {
								var i = oe.attr(r, e);
								return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
							}
						},
						"CHILD": function(e, t, n, r, i) {
							var o = "nth" !== e.slice(0, 3),
								a = "last" !== e.slice(-4),
								s = "of-type" === t;
							return 1 === r && 0 === i ?
							function(e) {
								return !!e.parentNode
							} : function(t, n, u) {
								var l, c, d, f, p, h, v = o !== a ? "nextSibling" : "previousSibling",
									g = t.parentNode,
									m = s && t.nodeName.toLowerCase(),
									y = !u && !s,
									x = !1;
								if (g) {
									if (o) {
										while (v) {
											f = t;
											while (f = f[v]) if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
											h = v = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if (h = [a ? g.firstChild : g.lastChild], a && y) {
										f = g, d = f[b] || (f[b] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === T && l[1], x = p && l[2], f = p && g.childNodes[p];
										while (f = ++p && f && f[v] || (x = p = 0) || h.pop()) if (1 === f.nodeType && ++x && f === t) {
											c[e] = [T, p, x];
											break
										}
									} else if (y && (f = t, d = f[b] || (f[b] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === T && l[1], x = p), x === !1) while (f = ++p && f && f[v] || (x = p = 0) || h.pop()) if ((s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) && ++x && (y && (d = f[b] || (f[b] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [T, x]), f === t)) break;
									return x -= i, x === r || x % r === 0 && x / r >= 0
								}
							}
						},
						"PSEUDO": function(e, t) {
							var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
							return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
								var r, o = i(e, t),
									a = o.length;
								while (a--) r = O(e, o[a]), e[r] = !(n[r] = o[a])
							}) : function(e) {
								return i(e, 0, n)
							}) : i
						}
					},
					pseudos: {
						"not": se(function(e) {
							var t = [],
								n = [],
								r = s(e.replace($, "$1"));
							return r[b] ? se(function(e, t, n, i) {
								var o, a = r(e, null, i, []),
									s = e.length;
								while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
							}) : function(e, i, o) {
								return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
							}
						}),
						"has": se(function(e) {
							return function(t) {
								return oe(e, t).length > 0
							}
						}),
						"contains": se(function(e) {
							return e = e.replace(te, ne),


							function(t) {
								return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
							}
						}),
						"lang": se(function(e) {
							return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),


							function(t) {
								var n;
								do
								if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
						}),
						"target": function(t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						"root": function(e) {
							return e === h
						},
						"focus": function(e) {
							return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
						},
						"enabled": function(e) {
							return e.disabled === !1
						},
						"disabled": function(e) {
							return e.disabled === !0
						},
						"checked": function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !! e.checked || "option" === t && !! e.selected
						},
						"selected": function(e) {
							return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
						},
						"empty": function(e) {
							for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
							return !0
						},
						"parent": function(e) {
							return !r.pseudos.empty(e)
						},
						"header": function(e) {
							return J.test(e.nodeName)
						},
						"input": function(e) {
							return Y.test(e.nodeName)
						},
						"button": function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						"text": function(e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						"first": pe(function() {
							return [0]
						}),
						"last": pe(function(e, t) {
							return [t - 1]
						}),
						"eq": pe(function(e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						"even": pe(function(e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						"odd": pe(function(e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						"lt": pe(function(e, t, n) {
							for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
							return e
						}),
						"gt": pe(function(e, t, n) {
							for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				}, r.pseudos.nth = r.pseudos.eq;
				for (t in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) r.pseudos[t] = de(t);
				for (t in {
					submit: !0,
					reset: !0
				}) r.pseudos[t] = fe(t);

				function ve() {}
				ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = oe.tokenize = function(e, t) {
					var n, i, o, a, s, u, l, c = N[e + " "];
					if (c) return t ? 0 : c.slice(0);
					s = e, u = [], l = r.preFilter;
					while (s) {
						n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
							value: n,
							type: i[0].replace($, " ")
						}), s = s.slice(n.length));
						for (a in r.filter)!(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
							value: n,
							type: a,
							matches: i
						}), s = s.slice(n.length));
						if (!n) break
					}
					return t ? s.length : s ? oe.error(e) : N(e, u).slice(0)
				};

				function ge(e) {
					for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
					return r
				}

				function me(e, t, n) {
					var r = t.dir,
						i = n && "parentNode" === r,
						o = C++;
					return t.first ?
					function(t, n, o) {
						while (t = t[r]) if (1 === t.nodeType || i) return e(t, n, o)
					} : function(t, n, a) {
						var s, u, l, c = [T, o];
						if (a) {
							while (t = t[r]) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
						} else while (t = t[r]) if (1 === t.nodeType || i) {
							if (l = t[b] || (t[b] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === T && s[1] === o) return c[2] = s[2];
							if (u[r] = c, c[2] = e(t, n, a)) return !0
						}
					}
				}

				function ye(e) {
					return e.length > 1 ?
					function(t, n, r) {
						var i = e.length;
						while (i--) if (!e[i](t, n, r)) return !1;
						return !0
					} : e[0]
				}

				function xe(e, t, n) {
					for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
					return n
				}

				function be(e, t, n, r, i) {
					for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
					return a
				}

				function we(e, t, n, r, i, o) {
					return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), se(function(o, a, s, u) {
						var l, c, d, f = [],
							p = [],
							h = a.length,
							v = o || xe(t || "*", s.nodeType ? [s] : s, []),
							g = !e || !o && t ? v : be(v, f, e, s, u),
							m = n ? i || (o ? e : h || r) ? [] : a : g;
						if (n && n(g, m, s, u), r) {
							l = be(m, p), r(l, [], s, u), c = l.length;
							while (c--)(d = l[c]) && (m[p[c]] = !(g[p[c]] = d))
						}
						if (o) {
							if (i || e) {
								if (i) {
									l = [], c = m.length;
									while (c--)(d = m[c]) && l.push(g[c] = d);
									i(null, m = [], l, u)
								}
								c = m.length;
								while (c--)(d = m[c]) && (l = i ? O(o, d) : f[c]) > -1 && (o[l] = !(a[l] = d))
							}
						} else m = be(m === a ? m.splice(h, m.length) : m), i ? i(null, a, m, u) : H.apply(a, m)
					})
				}

				function Te(e) {
					for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
						return e === t
					}, s, !0), d = me(function(e) {
						return O(t, e) > -1
					}, s, !0), f = [function(e, n, r) {
						var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
						return t = null, i
					}]; u < o; u++) if (n = r.relative[e[u].type]) f = [me(ye(f), n)];
					else {
						if (n = r.filter[e[u].type].apply(null, e[u].matches), n[b]) {
							for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
							return we(u > 1 && ye(f), u > 1 && ge(e.slice(0, u - 1).concat({
								value: " " === e[u - 2].type ? "*" : ""
							})).replace($, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && ge(e))
						}
						f.push(n)
					}
					return ye(f)
				}

				function Ce(e, t) {
					var n = t.length > 0,
						i = e.length > 0,
						o = function(o, a, s, u, c) {
							var d, h, g, m = 0,
								y = "0",
								x = o && [],
								b = [],
								w = l,
								C = o || i && r.find.TAG("*", c),
								E = T += null == w ? 1 : Math.random() || .1,
								N = C.length;
							for (c && (l = a === p || a || c); y !== N && null != (d = C[y]); y++) {
								if (i && d) {
									h = 0, a || d.ownerDocument === p || (f(d), s = !v);
									while (g = e[h++]) if (g(d, a || p, s)) {
										u.push(d);
										break
									}
									c && (T = E)
								}
								n && ((d = !g && d) && m--, o && x.push(d))
							}
							if (m += y, n && y !== m) {
								h = 0;
								while (g = t[h++]) g(x, b, a, s);
								if (o) {
									if (m > 0) while (y--) x[y] || b[y] || (b[y] = L.call(u));
									b = be(b)
								}
								H.apply(u, b), c && !o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(u)
							}
							return c && (T = E, l = w), x
						};
					return n ? se(o) : o
				}
				return s = oe.compile = function(e, t) {
					var n, r = [],
						i = [],
						o = S[e + " "];
					if (!o) {
						t || (t = a(e)), n = t.length;
						while (n--) o = Te(t[n]), o[b] ? r.push(o) : i.push(o);
						o = S(e, Ce(i, r)), o.selector = e
					}
					return o
				}, u = oe.select = function(e, t, i, o) {
					var u, l, c, d, f, p = "function" == typeof e && e,
						h = !o && a(e = p.selector || e);
					if (i = i || [], 1 === h.length) {
						if (l = h[0] = h[0].slice(0), l.length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && v && r.relative[l[1].type]) {
							if (t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0], !t) return i;
							p && (t = t.parentNode), e = e.slice(l.shift().value.length)
						}
						u = G.needsContext.test(e) ? 0 : l.length;
						while (u--) {
							if (c = l[u], r.relative[d = c.type]) break;
							if ((f = r.find[d]) && (o = f(c.matches[0].replace(te, ne), Q.test(l[0].type) && he(t.parentNode) || t))) {
								if (l.splice(u, 1), e = o.length && ge(l), !e) return H.apply(i, o), i;
								break
							}
						}
					}
					return (p || s(e, h))(o, t, !v, i, !t || Q.test(e) && he(t.parentNode) || t), i
				}, n.sortStable = b.split("").sort(k).join("") === b, n.detectDuplicates = !! d, f(), n.sortDetached = ue(function(e) {
					return 1 & e.compareDocumentPosition(p.createElement("div"))
				}), ue(function(e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || le("type|href|height|width", function(e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), n.attributes && ue(function(e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}) || le("value", function(e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), ue(function(e) {
					return null == e.getAttribute("disabled")
				}) || le(R, function(e, t, n) {
					var r;
					if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
				}), oe
			}(n);
		m.find = C, m.expr = C.selectors, m.expr[":"] = m.expr.pseudos, m.uniqueSort = m.unique = C.uniqueSort, m.text = C.getText, m.isXMLDoc = C.isXML, m.contains = C.contains;
		var E = function(e, t, n) {
				var r = [],
					i = void 0 !== n;
				while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
					if (i && m(e).is(n)) break;
					r.push(e)
				}
				return r
			},
			N = function(e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			S = m.expr.match.needsContext,
			k = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			A = /^.[^:#\[\.,]*$/;

		function j(e, t, n) {
			if (m.isFunction(t)) return m.grep(e, function(e, r) {
				return !!t.call(e, r, e) !== n
			});
			if (t.nodeType) return m.grep(e, function(e) {
				return e === t !== n
			});
			if ("string" == typeof t) {
				if (A.test(t)) return m.filter(t, e, n);
				t = m.filter(t, e)
			}
			return m.grep(e, function(e) {
				return m.inArray(e, t) > -1 !== n
			})
		}
		m.filter = function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, m.fn.extend({
			find: function(e) {
				var t, n = [],
					r = this,
					i = r.length;
				if ("string" != typeof e) return this.pushStack(m(e).filter(function() {
					for (t = 0; t < i; t++) if (m.contains(r[t], this)) return !0
				}));
				for (t = 0; t < i; t++) m.find(e, r[t], n);
				return n = this.pushStack(i > 1 ? m.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
			},
			filter: function(e) {
				return this.pushStack(j(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(j(this, e || [], !0))
			},
			is: function(e) {
				return !!j(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length
			}
		});
		var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			_ = m.fn.init = function(e, t, n) {
				var r, i;
				if (!e) return this;
				if (n = n || D, "string" == typeof e) {
					if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : L.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
					if (r[1]) {
						if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), k.test(r[1]) && m.isPlainObject(t)) for (r in t) m.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
						return this
					}
					if (i = s.getElementById(r[2]), i && i.parentNode) {
						if (i.id !== r[2]) return D.find(e);
						this.length = 1, this[0] = i
					}
					return this.context = s, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : m.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(m) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), m.makeArray(e, this))
			};
		_.prototype = m.fn, D = m(s);
		var H = /^(?:parents|prev(?:Until|All))/,
			q = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		m.fn.extend({
			has: function(e) {
				var t, n = m(e, this),
					r = n.length;
				return this.filter(function() {
					for (t = 0; t < r; t++) if (m.contains(this, n[t])) return !0
				})
			},
			closest: function(e, t) {
				for (var n, r = 0, i = this.length, o = [], a = S.test(e) || "string" != typeof e ? m(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
					o.push(n);
					break
				}
				return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o)
			},
			index: function(e) {
				return e ? "string" == typeof e ? m.inArray(this[0], m(e)) : m.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		});

		function O(e, t) {
			do e = e[t];
			while (e && 1 !== e.nodeType);
			return e
		}
		m.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return E(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return E(e, "parentNode", n)
			},
			next: function(e) {
				return O(e, "nextSibling")
			},
			prev: function(e) {
				return O(e, "previousSibling")
			},
			nextAll: function(e) {
				return E(e, "nextSibling")
			},
			prevAll: function(e) {
				return E(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return E(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return E(e, "previousSibling", n)
			},
			siblings: function(e) {
				return N((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return N(e.firstChild)
			},
			contents: function(e) {
				return m.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : m.merge([], e.childNodes)
			}
		}, function(e, t) {
			m.fn[e] = function(n, r) {
				var i = m.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = m.filter(r, i)), this.length > 1 && (q[e] || (i = m.uniqueSort(i)), H.test(e) && (i = i.reverse())), this.pushStack(i)
			}
		});
		var R = /\S+/g;

		function M(e) {
			var t = {};
			return m.each(e.match(R) || [], function(e, n) {
				t[n] = !0
			}), t
		}
		m.Callbacks = function(e) {
			e = "string" == typeof e ? M(e) : m.extend({}, e);
			var t, n, r, i, o = [],
				a = [],
				s = -1,
				u = function() {
					for (i = e.once, r = t = !0; a.length; s = -1) {
						n = a.shift();
						while (++s < o.length) o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1)
					}
					e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
				},
				l = {
					add: function() {
						return o && (n && !t && (s = o.length - 1, a.push(n)), function r(t) {
							m.each(t, function(t, n) {
								m.isFunction(n) ? e.unique && l.has(n) || o.push(n) : n && n.length && "string" !== m.type(n) && r(n)
							})
						}(arguments), n && !t && u()), this
					},
					remove: function() {
						return m.each(arguments, function(e, t) {
							var n;
							while ((n = m.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
						}), this
					},
					has: function(e) {
						return e ? m.inArray(e, o) > -1 : o.length > 0
					},
					empty: function() {
						return o && (o = []), this
					},
					disable: function() {
						return i = a = [], o = n = "", this
					},
					disabled: function() {
						return !o
					},
					lock: function() {
						return i = !0, n || l.disable(), this
					},
					locked: function() {
						return !!i
					},
					fireWith: function(e, n) {
						return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
					},
					fire: function() {
						return l.fireWith(this, arguments), this
					},
					fired: function() {
						return !!r
					}
				};
			return l
		}, m.extend({
			Deferred: function(e) {
				var t = [
					["resolve", "done", m.Callbacks("once memory"), "resolved"],
					["reject", "fail", m.Callbacks("once memory"), "rejected"],
					["notify", "progress", m.Callbacks("memory")]
				],
					n = "pending",
					r = {
						state: function() {
							return n
						},
						always: function() {
							return i.done(arguments).fail(arguments), this
						},
						then: function() {
							var e = arguments;
							return m.Deferred(function(n) {
								m.each(t, function(t, o) {
									var a = m.isFunction(e[t]) && e[t];
									i[o[1]](function() {
										var e = a && a.apply(this, arguments);
										e && m.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? m.extend(e, r) : r
						}
					},
					i = {};
				return r.pipe = r.then, m.each(t, function(e, o) {
					var a = o[2],
						s = o[3];
					r[o[1]] = a.add, s && a.add(function() {
						n = s
					}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
						return i[o[0] + "With"](this === i ? r : this, arguments), this
					}, i[o[0] + "With"] = a.fireWith
				}), r.promise(i), e && e.call(i, i), i
			},
			when: function(e) {
				var t = 0,
					n = u.call(arguments),
					r = n.length,
					i = 1 !== r || e && m.isFunction(e.promise) ? r : 0,
					o = 1 === i ? e : m.Deferred(),
					a = function(e, t, n) {
						return function(r) {
							t[e] = this, n[e] = arguments.length > 1 ? u.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
						}
					},
					s, l, c;
				if (r > 1) for (s = new Array(r), l = new Array(r), c = new Array(r); t < r; t++) n[t] && m.isFunction(n[t].promise) ? n[t].promise().progress(a(t, l, s)).done(a(t, c, n)).fail(o.reject) : --i;
				return i || o.resolveWith(c, n), o.promise()
			}
		});
		var I;
		m.fn.ready = function(e) {
			return m.ready.promise().done(e), this
		}, m.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? m.readyWait++ : m.ready(!0)
			},
			ready: function(e) {
				(e === !0 ? --m.readyWait : m.isReady) || (m.isReady = !0, e !== !0 && --m.readyWait > 0 || (I.resolveWith(s, [m]), m.fn.triggerHandler && (m(s).triggerHandler("ready"), m(s).off("ready"))))
			}
		});

		function F() {
			s.addEventListener ? (s.removeEventListener("DOMContentLoaded", P), n.removeEventListener("load", P)) : (s.detachEvent("onreadystatechange", P), n.detachEvent("onload", P))
		}

		function P() {
			(s.addEventListener || "load" === n.event.type || "complete" === s.readyState) && (F(), m.ready())
		}
		m.ready.promise = function(e) {
			if (!I) if (I = m.Deferred(), "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll) n.setTimeout(m.ready);
			else if (s.addEventListener) s.addEventListener("DOMContentLoaded", P), n.addEventListener("load", P);
			else {
				s.attachEvent("onreadystatechange", P), n.attachEvent("onload", P);
				var t = !1;
				try {
					t = null == n.frameElement && s.documentElement
				} catch (r) {}
				t && t.doScroll && !
				function i() {
					if (!m.isReady) {
						try {
							t.doScroll("left")
						} catch (e) {
							return n.setTimeout(i, 50)
						}
						F(), m.ready()
					}
				}()
			}
			return I.promise(e)
		}, m.ready.promise();
		var B;
		for (B in m(v)) break;
		v.ownFirst = "0" === B, v.inlineBlockNeedsLayout = !1, m(function() {
			var e, t, n, r;
			n = s.getElementsByTagName("body")[0], n && n.style && (t = s.createElement("div"), r = s.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
		}),


		function() {
			var e = s.createElement("div");
			v.deleteExpando = !0;
			try {
				delete e.test
			} catch (t) {
				v.deleteExpando = !1
			}
			e = null
		}();
		var $ = function(e) {
				var t = m.noData[(e.nodeName + " ").toLowerCase()],
					n = +e.nodeType || 1;
				return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
			},
			W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			z = /([A-Z])/g;

		function U(e, t, n) {
			if (void 0 === n && 1 === e.nodeType) {
				var r = "data-" + t.replace(z, "-$1").toLowerCase();
				if (n = e.getAttribute(r), "string" == typeof n) {
					try {
						n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : W.test(n) ? m.parseJSON(n) : n)
					} catch (i) {}
					m.data(e, t, n)
				} else n = void 0
			}
			return n
		}

		function X(e) {
			var t;
			for (t in e) if (("data" !== t || !m.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
			return !0
		}

		function V(e, t, n, r) {
			if ($(e)) {
				var i, o, s = m.expando,
					u = e.nodeType,
					l = u ? m.cache : e,
					c = u ? e[s] : e[s] && s;
				if (c && l[c] && (r || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = u ? e[s] = a.pop() || m.guid++ : s), l[c] || (l[c] = u ? {} : {
					toJSON: m.noop
				}), "object" != typeof t && "function" != typeof t || (r ? l[c] = m.extend(l[c], t) : l[c].data = m.extend(l[c].data, t)), o = l[c], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[m.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[m.camelCase(t)])) : i = o, i
			}
		}

		function G(e, t, n) {
			if ($(e)) {
				var r, i, o = e.nodeType,
					a = o ? m.cache : e,
					s = o ? e[m.expando] : m.expando;
				if (a[s]) {
					if (t && (r = n ? a[s] : a[s].data)) {
						m.isArray(t) ? t = t.concat(m.map(t, m.camelCase)) : t in r ? t = [t] : (t = m.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
						while (i--) delete r[t[i]];
						if (n ? !X(r) : !m.isEmptyObject(r)) return
					}(n || (delete a[s].data, X(a[s]))) && (o ? m.cleanData([e], !0) : v.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
				}
			}
		}
		m.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(e) {
				return e = e.nodeType ? m.cache[e[m.expando]] : e[m.expando], !! e && !X(e)
			},
			data: function(e, t, n) {
				return V(e, t, n)
			},
			removeData: function(e, t) {
				return G(e, t)
			},
			_data: function(e, t, n) {
				return V(e, t, n, !0)
			},
			_removeData: function(e, t) {
				return G(e, t, !0)
			}
		}), m.fn.extend({
			data: function(e, t) {
				var n, r, i, o = this[0],
					a = o && o.attributes;
				if (void 0 === e) {
					if (this.length && (i = m.data(o), 1 === o.nodeType && !m._data(o, "parsedAttrs"))) {
						n = a.length;
						while (n--) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = m.camelCase(r.slice(5)), U(o, r, i[r])));
						m._data(o, "parsedAttrs", !0)
					}
					return i
				}
				return "object" == typeof e ? this.each(function() {
					m.data(this, e)
				}) : arguments.length > 1 ? this.each(function() {
					m.data(this, e, t)
				}) : o ? U(o, e, m.data(o, e)) : void 0
			},
			removeData: function(e) {
				return this.each(function() {
					m.removeData(this, e)
				})
			}
		}), m.extend({
			queue: function(e, t, n) {
				var r;
				if (e) return t = (t || "fx") + "queue", r = m._data(e, t), n && (!r || m.isArray(n) ? r = m._data(e, t, m.makeArray(n)) : r.push(n)), r || []
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = m.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = m._queueHooks(e, t),
					a = function() {
						m.dequeue(e, t)
					};
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return m._data(e, n) || m._data(e, n, {
					empty: m.Callbacks("once memory").add(function() {
						m._removeData(e, t + "queue"), m._removeData(e, n)
					})
				})
			}
		}), m.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = m.queue(this, e, t);
					m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					m.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var n, r = 1,
					i = m.Deferred(),
					o = this,
					a = this.length,
					s = function() {
						--r || i.resolveWith(o, [o])
					};
				"string" != typeof e && (t = e, e = void 0), e = e || "fx";
				while (a--) n = m._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t)
			}
		}),


		function() {
			var e;
			v.shrinkWrapBlocks = function() {
				if (null != e) return e;
				e = !1;
				var t, n, r;
				return n = s.getElementsByTagName("body")[0], n && n.style ? (t = s.createElement("div"), r = s.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(s.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
			}
		}();
		var Y = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			J = new RegExp("^(?:([+-])=|)(" + Y + ")([a-z%]*)$", "i"),
			K = ["Top", "Right", "Bottom", "Left"],
			Z = function(e, t) {
				return e = t || e, "none" === m.css(e, "display") || !m.contains(e.ownerDocument, e)
			};

		function Q(e, t, n, r) {
			var i, o = 1,
				a = 20,
				s = r ?
			function() {
				return r.cur()
			} : function() {
				return m.css(e, t, "")
			}, u = s(), l = n && n[3] || (m.cssNumber[t] ? "" : "px"), c = (m.cssNumber[t] || "px" !== l && +u) && J.exec(m.css(e, t));
			if (c && c[3] !== l) {
				l = l || c[3], n = n || [], c = +u || 1;
				do o = o || ".5", c /= o, m.style(e, t, c + l);
				while (o !== (o = s() / u) && 1 !== o && --a)
			}
			return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
		}
		var ee = function(e, t, n, r, i, o, a) {
				var s = 0,
					u = e.length,
					l = null == n;
				if ("object" === m.type(n)) {
					i = !0;
					for (s in n) ee(e, t, s, n[s], !0, o, a)
				} else if (void 0 !== r && (i = !0, m.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(m(e), n)
				})), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
				return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
			},
			te = /^(?:checkbox|radio)$/i,
			ne = /<([\w:-]+)/,
			re = /^$|\/(?:java|ecma)script/i,
			ie = /^\s+/,
			oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

		function ae(e) {
			var t = oe.split("|"),
				n = e.createDocumentFragment();
			if (n.createElement) while (t.length) n.createElement(t.pop());
			return n
		}!
		function() {
			var e = s.createElement("div"),
				t = s.createDocumentFragment(),
				n = s.createElement("input");
			e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === e.firstChild.nodeType, v.tbody = !e.getElementsByTagName("tbody").length, v.htmlSerialize = !! e.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), v.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = s.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !! e.addEventListener, e[m.expando] = 1, v.attributes = !e.getAttribute(m.expando)
		}();
		var se = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		};
		se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td;

		function ue(e, t) {
			var n, r, i = 0,
				o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
			if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || m.nodeName(r, t) ? o.push(r) : m.merge(o, ue(r, t));
			return void 0 === t || t && m.nodeName(e, t) ? m.merge([e], o) : o
		}

		function le(e, t) {
			for (var n, r = 0; null != (n = e[r]); r++) m._data(n, "globalEval", !t || m._data(t[r], "globalEval"))
		}
		var ce = /<|&#?\w+;/,
			de = /<tbody/i;

		function fe(e) {
			te.test(e.type) && (e.defaultChecked = e.checked)
		}

		function pe(e, t, n, r, i) {
			for (var o, a, s, u, l, c, d, f = e.length, p = ae(t), h = [], g = 0; g < f; g++) if (a = e[g], a || 0 === a) if ("object" === m.type(a)) m.merge(h, a.nodeType ? [a] : a);
			else if (ce.test(a)) {
				u = u || p.appendChild(t.createElement("div")), l = (ne.exec(a) || ["", ""])[1].toLowerCase(), d = se[l] || se._default, u.innerHTML = d[1] + m.htmlPrefilter(a) + d[2], o = d[0];
				while (o--) u = u.lastChild;
				if (!v.leadingWhitespace && ie.test(a) && h.push(t.createTextNode(ie.exec(a)[0])), !v.tbody) {
					a = "table" !== l || de.test(a) ? "<table>" !== d[1] || de.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length;
					while (o--) m.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c)
				}
				m.merge(h, u.childNodes), u.textContent = "";
				while (u.firstChild) u.removeChild(u.firstChild);
				u = p.lastChild
			} else h.push(t.createTextNode(a));
			u && p.removeChild(u), v.appendChecked || m.grep(ue(h, "input"), fe), g = 0;
			while (a = h[g++]) if (r && m.inArray(a, r) > -1) i && i.push(a);
			else if (s = m.contains(a.ownerDocument, a), u = ue(p.appendChild(a), "script"), s && le(u), n) {
				o = 0;
				while (a = u[o++]) re.test(a.type || "") && n.push(a)
			}
			return u = null, p
		}!
		function() {
			var e, t, r = s.createElement("div");
			for (e in {
				submit: !0,
				change: !0,
				focusin: !0
			}) t = "on" + e, (v[e] = t in n) || (r.setAttribute(t, "t"), v[e] = r.attributes[t].expando === !1);
			r = null
		}();
		var he = /^(?:input|select|textarea)$/i,
			ve = /^key/,
			ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			me = /^(?:focusinfocus|focusoutblur)$/,
			ye = /^([^.]*)(?:\.(.+)|)/;

		function xe() {
			return !0
		}

		function be() {
			return !1
		}

		function we() {
			try {
				return s.activeElement
			} catch (e) {}
		}

		function Te(e, t, n, r, i, o) {
			var a, s;
			if ("object" == typeof t) {
				"string" != typeof n && (r = r || n, n = void 0);
				for (s in t) Te(e, s, n, r, t[s], o);
				return e
			}
			if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = be;
			else if (!i) return e;
			return 1 === o && (a = i, i = function(e) {
				return m().off(e), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = m.guid++)), e.each(function() {
				m.event.add(this, t, i, r, n)
			})
		}
		m.event = {
			global: {},
			add: function(e, t, n, r, i) {
				var o, a, s, u, l, c, d, f, p, h, v, g = m._data(e);
				if (g) {
					n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = m.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
						return "undefined" == typeof m || e && m.event.triggered === e.type ? void 0 : m.event.dispatch.apply(c.elem, arguments)
					}, c.elem = e), t = (t || "").match(R) || [""], s = t.length;
					while (s--) o = ye.exec(t[s]) || [], p = v = o[1], h = (o[2] || "").split(".").sort(), p && (l = m.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = m.event.special[p] || {}, d = m.extend({
						type: p,
						origType: v,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && m.expr.match.needsContext.test(i),
						namespace: h.join(".")
					}, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), m.event.global[p] = !0);
					e = null
				}
			},
			remove: function(e, t, n, r, i) {
				var o, a, s, u, l, c, d, f, p, h, v, g = m.hasData(e) && m._data(e);
				if (g && (c = g.events)) {
					t = (t || "").match(R) || [""], l = t.length;
					while (l--) if (s = ye.exec(t[l]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p) {
						d = m.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
						while (o--) a = f[o], !i && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
						u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || m.removeEvent(e, p, g.handle), delete c[p])
					} else for (p in c) m.event.remove(e, p + t[l], n, r, !0);
					m.isEmptyObject(c) && (delete g.handle, m._removeData(e, "events"))
				}
			},
			trigger: function(e, t, r, i) {
				var o, a, u, l, c, d, f, p = [r || s],
					v = h.call(e, "type") ? e.type : e,
					g = h.call(e, "namespace") ? e.namespace.split(".") : [];
				if (u = d = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !me.test(v + m.event.triggered) && (v.indexOf(".") > -1 && (g = v.split("."), v = g.shift(), g.sort()), a = v.indexOf(":") < 0 && "on" + v, e = e[m.expando] ? e : new m.Event(v, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : m.makeArray(t, [e]), c = m.event.special[v] || {}, i || !c.trigger || c.trigger.apply(r, t) !== !1)) {
					if (!i && !c.noBubble && !m.isWindow(r)) {
						for (l = c.delegateType || v, me.test(l + v) || (u = u.parentNode); u; u = u.parentNode) p.push(u), d = u;
						d === (r.ownerDocument || s) && p.push(d.defaultView || d.parentWindow || n)
					}
					f = 0;
					while ((u = p[f++]) && !e.isPropagationStopped()) e.type = f > 1 ? l : c.bindType || v, o = (m._data(u, "events") || {})[e.type] && m._data(u, "handle"), o && o.apply(u, t), o = a && u[a], o && o.apply && $(u) && (e.result = o.apply(u, t), e.result === !1 && e.preventDefault());
					if (e.type = v, !i && !e.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), t) === !1) && $(r) && a && r[v] && !m.isWindow(r)) {
						d = r[a], d && (r[a] = null), m.event.triggered = v;
						try {
							r[v]()
						} catch (y) {}
						m.event.triggered = void 0, d && (r[a] = d)
					}
					return e.result
				}
			},
			dispatch: function(e) {
				e = m.event.fix(e);
				var t, n, r, i, o, a = [],
					s = u.call(arguments),
					l = (m._data(this, "events") || {})[e.type] || [],
					c = m.event.special[e.type] || {};
				if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
					a = m.event.handlers.call(this, e, l), t = 0;
					while ((i = a[t++]) && !e.isPropagationStopped()) {
						e.currentTarget = i.elem, n = 0;
						while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped()) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
					}
					return c.postDispatch && c.postDispatch.call(this, e), e.result
				}
			},
			handlers: function(e, t) {
				var n, r, i, o, a = [],
					s = t.delegateCount,
					u = e.target;
				if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
					for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? m(i, this).index(u) > -1 : m.find(i, this, null, [u]).length), r[i] && r.push(o);
					r.length && a.push({
						elem: u,
						handlers: r
					})
				}
				return s < t.length && a.push({
					elem: this,
					handlers: t.slice(s)
				}), a
			},
			fix: function(e) {
				if (e[m.expando]) return e;
				var t, n, r, i = e.type,
					o = e,
					a = this.fixHooks[i];
				a || (this.fixHooks[i] = a = ge.test(i) ? this.mouseHooks : ve.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new m.Event(o), t = r.length;
				while (t--) n = r[t], e[n] = o[n];
				return e.target || (e.target = o.srcElement || s), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
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
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(e, t) {
					var n, r, i, o = t.button,
						a = t.fromElement;
					return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || s, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if (this !== we() && this.focus) try {
							return this.focus(), !1
						} catch (e) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if (this === we() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						if (m.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
					},
					_default: function(e) {
						return m.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function(e, t, n) {
				var r = m.extend(new m.Event, n, {
					type: e,
					isSimulated: !0
				});
				m.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
			}
		}, m.removeEvent = s.removeEventListener ?
		function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		} : function(e, t, n) {
			var r = "on" + t;
			e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
		}, m.Event = function(e, t) {
			return this instanceof m.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? xe : be) : this.type = e, t && m.extend(this, t), this.timeStamp = e && e.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(e, t)
		}, m.Event.prototype = {
			constructor: m.Event,
			isDefaultPrevented: be,
			isPropagationStopped: be,
			isImmediatePropagationStopped: be,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = xe, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = xe, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = xe, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, m.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			m.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, r = this,
						i = e.relatedTarget,
						o = e.handleObj;
					return i && (i === r || m.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), v.submit || (m.event.special.submit = {
			setup: function() {
				return !m.nodeName(this, "form") && void m.event.add(this, "click._submit keypress._submit", function(e) {
					var t = e.target,
						n = m.nodeName(t, "input") || m.nodeName(t, "button") ? m.prop(t, "form") : void 0;
					n && !m._data(n, "submit") && (m.event.add(n, "submit._submit", function(e) {
						e._submitBubble = !0
					}), m._data(n, "submit", !0))
				})
			},
			postDispatch: function(e) {
				e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && m.event.simulate("submit", this.parentNode, e))
			},
			teardown: function() {
				return !m.nodeName(this, "form") && void m.event.remove(this, "._submit")
			}
		}), v.change || (m.event.special.change = {
			setup: function() {
				return he.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (m.event.add(this, "propertychange._change", function(e) {
					"checked" === e.originalEvent.propertyName && (this._justChanged = !0)
				}), m.event.add(this, "click._change", function(e) {
					this._justChanged && !e.isTrigger && (this._justChanged = !1), m.event.simulate("change", this, e)
				})), !1) : void m.event.add(this, "beforeactivate._change", function(e) {
					var t = e.target;
					he.test(t.nodeName) && !m._data(t, "change") && (m.event.add(t, "change._change", function(e) {
						!this.parentNode || e.isSimulated || e.isTrigger || m.event.simulate("change", this.parentNode, e)
					}), m._data(t, "change", !0))
				})
			},
			handle: function(e) {
				var t = e.target;
				if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
			},
			teardown: function() {
				return m.event.remove(this, "._change"), !he.test(this.nodeName)
			}
		}), v.focusin || m.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = function(e) {
					m.event.simulate(t, e.target, m.event.fix(e))
				};
			m.event.special[t] = {
				setup: function() {
					var r = this.ownerDocument || this,
						i = m._data(r, t);
					i || r.addEventListener(e, n, !0), m._data(r, t, (i || 0) + 1)
				},
				teardown: function() {
					var r = this.ownerDocument || this,
						i = m._data(r, t) - 1;
					i ? m._data(r, t, i) : (r.removeEventListener(e, n, !0), m._removeData(r, t))
				}
			}
		}), m.fn.extend({
			on: function(e, t, n, r) {
				return Te(this, e, t, n, r)
			},
			one: function(e, t, n, r) {
				return Te(this, e, t, n, r, 1)
			},
			off: function(e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, m(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (i in e) this.off(i, t, e[i]);
					return this
				}
				return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = be), this.each(function() {
					m.event.remove(this, e, n, t)
				})
			},
			trigger: function(e, t) {
				return this.each(function() {
					m.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				if (n) return m.event.trigger(e, t, n, !0)
			}
		});
		var Ce = / jQuery\d+="(?:null|\d+)"/g,
			Ee = new RegExp("<(?:" + oe + ")[\\s/>]", "i"),
			Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			Se = /<script|<style|<link/i,
			ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ae = /^true\/(.*)/,
			je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			De = ae(s),
			Le = De.appendChild(s.createElement("div"));

		function _e(e, t) {
			return m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function He(e) {
			return e.type = (null !== m.find.attr(e, "type")) + "/" + e.type, e
		}

		function qe(e) {
			var t = Ae.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function Oe(e, t) {
			if (1 === t.nodeType && m.hasData(e)) {
				var n, r, i, o = m._data(e),
					a = m._data(t, o),
					s = o.events;
				if (s) {
					delete a.handle, a.events = {};
					for (n in s) for (r = 0, i = s[n].length; r < i; r++) m.event.add(t, n, s[n][r])
				}
				a.data && (a.data = m.extend({}, a.data))
			}
		}

		function Re(e, t) {
			var n, r, i;
			if (1 === t.nodeType) {
				if (n = t.nodeName.toLowerCase(), !v.noCloneEvent && t[m.expando]) {
					i = m._data(t);
					for (r in i.events) m.removeEvent(t, r, i.handle);
					t.removeAttribute(m.expando)
				}
				"script" === n && t.text !== e.text ? (He(t).text = e.text, qe(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !m.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && te.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
			}
		}

		function Me(e, t, n, r) {
			t = l.apply([], t);
			var i, o, a, s, u, c, d = 0,
				f = e.length,
				p = f - 1,
				h = t[0],
				g = m.isFunction(h);
			if (g || f > 1 && "string" == typeof h && !v.checkClone && ke.test(h)) return e.each(function(i) {
				var o = e.eq(i);
				g && (t[0] = h.call(this, i, o.html())), Me(o, t, n, r)
			});
			if (f && (c = pe(t, e[0].ownerDocument, !1, e, r), i = c.firstChild, 1 === c.childNodes.length && (c = i), i || r)) {
				for (s = m.map(ue(c, "script"), He), a = s.length; d < f; d++) o = c, d !== p && (o = m.clone(o, !0, !0), a && m.merge(s, ue(o, "script"))), n.call(e[d], o, d);
				if (a) for (u = s[s.length - 1].ownerDocument, m.map(s, qe), d = 0; d < a; d++) o = s[d], re.test(o.type || "") && !m._data(o, "globalEval") && m.contains(u, o) && (o.src ? m._evalUrl && m._evalUrl(o.src) : m.globalEval((o.text || o.textContent || o.innerHTML || "").replace(je, "")));
				c = i = null
			}
			return e
		}

		function Ie(e, t, n) {
			for (var r, i = t ? m.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || m.cleanData(ue(r)), r.parentNode && (n && m.contains(r.ownerDocument, r) && le(ue(r, "script")), r.parentNode.removeChild(r));
			return e
		}
		m.extend({
			htmlPrefilter: function(e) {
				return e.replace(Ne, "<$1></$2>")
			},
			clone: function(e, t, n) {
				var r, i, o, a, s, u = m.contains(e.ownerDocument, e);
				if (v.html5Clone || m.isXMLDoc(e) || !Ee.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Le.innerHTML = e.outerHTML, Le.removeChild(o = Le.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e))) for (r = ue(o), s = ue(e), a = 0; null != (i = s[a]); ++a) r[a] && Re(i, r[a]);
				if (t) if (n) for (s = s || ue(e), r = r || ue(o), a = 0; null != (i = s[a]); a++) Oe(i, r[a]);
				else Oe(e, o);
				return r = ue(o, "script"), r.length > 0 && le(r, !u && ue(e, "script")), r = s = i = null, o
			},
			cleanData: function(e, t) {
				for (var n, r, i, o, s = 0, u = m.expando, l = m.cache, c = v.attributes, d = m.event.special; null != (n = e[s]); s++) if ((t || $(n)) && (i = n[u], o = i && l[i])) {
					if (o.events) for (r in o.events) d[r] ? m.event.remove(n, r) : m.removeEvent(n, r, o.handle);
					l[i] && (delete l[i], c || "undefined" == typeof n.removeAttribute ? n[u] = void 0 : n.removeAttribute(u), a.push(i))
				}
			}
		}), m.fn.extend({
			domManip: Me,
			detach: function(e) {
				return Ie(this, e, !0)
			},
			remove: function(e) {
				return Ie(this, e)
			},
			text: function(e) {
				return ee(this, function(e) {
					return void 0 === e ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
				}, null, e, arguments.length)
			},
			append: function() {
				return Me(this, arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = _e(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function() {
				return Me(this, arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = _e(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return Me(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return Me(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function() {
				for (var e, t = 0; null != (e = this[t]); t++) {
					1 === e.nodeType && m.cleanData(ue(e, !1));
					while (e.firstChild) e.removeChild(e.firstChild);
					e.options && m.nodeName(e, "select") && (e.options.length = 0)
				}
				return this
			},
			clone: function(e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function() {
					return m.clone(this, e, t)
				})
			},
			html: function(e) {
				return ee(this, function(e) {
					var t = this[0] || {},
						n = 0,
						r = this.length;
					if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ce, "") : void 0;
					if ("string" == typeof e && !Se.test(e) && (v.htmlSerialize || !Ee.test(e)) && (v.leadingWhitespace || !ie.test(e)) && !se[(ne.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = m.htmlPrefilter(e);
						try {
							for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (m.cleanData(ue(t, !1)), t.innerHTML = e);
							t = 0
						} catch (i) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = [];
				return Me(this, arguments, function(t) {
					var n = this.parentNode;
					m.inArray(this, e) < 0 && (m.cleanData(ue(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}), m.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			m.fn[e] = function(e) {
				for (var n, r = 0, i = [], o = m(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), m(o[r])[t](n), c.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var Fe, Pe = {
			HTML: "block",
			BODY: "block"
		};

		function Be(e, t) {
			var n = m(t.createElement(e)).appendTo(t.body),
				r = m.css(n[0], "display");
			return n.detach(), r
		}

		function $e(e) {
			var t = s,
				n = Pe[e];
			return n || (n = Be(e, t), "none" !== n && n || (Fe = (Fe || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Fe[0].contentWindow || Fe[0].contentDocument).document, t.write(), t.close(), n = Be(e, t), Fe.detach()), Pe[e] = n), n
		}
		var We = /^margin/,
			ze = new RegExp("^(" + Y + ")(?!px)[a-z%]+$", "i"),
			Ue = function(e, t, n, r) {
				var i, o, a = {};
				for (o in t) a[o] = e.style[o], e.style[o] = t[o];
				i = n.apply(e, r || []);
				for (o in t) e.style[o] = a[o];
				return i
			},
			Xe = s.documentElement;
		!
		function() {
			var e, t, r, i, o, a, u = s.createElement("div"),
				l = s.createElement("div");

			function c() {
				var c, d, f = s.documentElement;
				f.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", e = r = a = !1, t = o = !0, n.getComputedStyle && (d = n.getComputedStyle(l), e = "1%" !== (d || {}).top, a = "2px" === (d || {}).marginLeft, r = "4px" === (d || {
					width: "4px"
				}).width, l.style.marginRight = "50%", t = "4px" === (d || {
					marginRight: "4px"
				}).marginRight, c = l.appendChild(s.createElement("div")), c.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", l.style.width = "1px", o = !parseFloat((n.getComputedStyle(c) || {}).marginRight), l.removeChild(c)), l.style.display = "none", i = 0 === l.getClientRects().length, i && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", c = l.getElementsByTagName("td"), c[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === c[0].offsetHeight, i && (c[0].style.display = "", c[1].style.display = "none", i = 0 === c[0].offsetHeight)), f.removeChild(u)
			}
			l.style && (l.style.cssText = "float:left;opacity:.5", v.opacity = "0.5" === l.style.opacity, v.cssFloat = !! l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, u = s.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), v.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, m.extend(v, {
				reliableHiddenOffsets: function() {
					return null == e && c(), i
				},
				boxSizingReliable: function() {
					return null == e && c(), r
				},
				pixelMarginRight: function() {
					return null == e && c(), t
				},
				pixelPosition: function() {
					return null == e && c(), e
				},
				reliableMarginRight: function() {
					return null == e && c(), o
				},
				reliableMarginLeft: function() {
					return null == e && c(), a
				}
			}))
		}();
		var Ve, Ge, Ye = /^(top|right|bottom|left)$/;
		n.getComputedStyle ? (Ve = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = n), t.getComputedStyle(e)
		}, Ge = function(e, t, n) {
			var r, i, o, a, s = e.style;
			return n = n || Ve(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || m.contains(e.ownerDocument, e) || (a = m.style(e, t)), n && !v.pixelMarginRight() && ze.test(a) && We.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
		}) : Xe.currentStyle && (Ve = function(e) {
			return e.currentStyle
		}, Ge = function(e, t, n) {
			var r, i, o, a, s = e.style;
			return n = n || Ve(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ze.test(a) && !Ye.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
		});

		function Je(e, t) {
			return {
				get: function() {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}
		var Ke = /alpha\([^)]*\)/i,
			Ze = /opacity\s*=\s*([^)]*)/i,
			Qe = /^(none|table(?!-c[ea]).+)/,
			et = new RegExp("^(" + Y + ")(.*)$", "i"),
			tt = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			nt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			rt = ["Webkit", "O", "Moz", "ms"],
			it = s.createElement("div").style;

		function ot(e) {
			if (e in it) return e;
			var t = e.charAt(0).toUpperCase() + e.slice(1),
				n = rt.length;
			while (n--) if (e = rt[n] + t, e in it) return e
		}

		function at(e, t) {
			for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = m._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Z(r) && (o[a] = m._data(r, "olddisplay", $e(r.nodeName)))) : (i = Z(r), (n && "none" !== n || !i) && m._data(r, "olddisplay", i ? n : m.css(r, "display"))));
			for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
			return e
		}

		function st(e, t, n) {
			var r = et.exec(t);
			return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
		}

		function ut(e, t, n, r, i) {
			for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += m.css(e, n + K[o], !0, i)), r ? ("content" === n && (a -= m.css(e, "padding" + K[o], !0, i)), "margin" !== n && (a -= m.css(e, "border" + K[o] + "Width", !0, i))) : (a += m.css(e, "padding" + K[o], !0, i), "padding" !== n && (a += m.css(e, "border" + K[o] + "Width", !0, i)));
			return a
		}

		function lt(e, t, n) {
			var r = !0,
				i = "width" === t ? e.offsetWidth : e.offsetHeight,
				o = Ve(e),
				a = v.boxSizing && "border-box" === m.css(e, "boxSizing", !1, o);
			if (i <= 0 || null == i) {
				if (i = Ge(e, t, o), (i < 0 || null == i) && (i = e.style[t]), ze.test(i)) return i;
				r = a && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
			}
			return i + ut(e, t, n || (a ? "border" : "content"), r, o) + "px"
		}
		m.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if (t) {
							var n = Ge(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				"animationIterationCount": !0,
				"columnCount": !0,
				"fillOpacity": !0,
				"flexGrow": !0,
				"flexShrink": !0,
				"fontWeight": !0,
				"lineHeight": !0,
				"opacity": !0,
				"order": !0,
				"orphans": !0,
				"widows": !0,
				"zIndex": !0,
				"zoom": !0
			},
			cssProps: {
				"float": v.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i, o, a, s = m.camelCase(t),
						u = e.style;
					if (t = m.cssProps[s] || (m.cssProps[s] = ot(s) || s), a = m.cssHooks[t] || m.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
					if (o = typeof n, "string" === o && (i = J.exec(n)) && i[1] && (n = Q(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (m.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
						u[t] = n
					} catch (l) {}
				}
			},
			css: function(e, t, n, r) {
				var i, o, a, s = m.camelCase(t);
				return t = m.cssProps[s] || (m.cssProps[s] = ot(s) || s), a = m.cssHooks[t] || m.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ge(e, t, r)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
			}
		}), m.each(["height", "width"], function(e, t) {
			m.cssHooks[t] = {
				get: function(e, n, r) {
					if (n) return Qe.test(m.css(e, "display")) && 0 === e.offsetWidth ? Ue(e, tt, function() {
						return lt(e, t, r)
					}) : lt(e, t, r)
				},
				set: function(e, n, r) {
					var i = r && Ve(e);
					return st(e, n, r ? ut(e, t, r, v.boxSizing && "border-box" === m.css(e, "boxSizing", !1, i), i) : 0)
				}
			}
		}), v.opacity || (m.cssHooks.opacity = {
			get: function(e, t) {
				return Ze.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set: function(e, t) {
				var n = e.style,
					r = e.currentStyle,
					i = m.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					o = r && r.filter || n.filter || "";
				n.zoom = 1, (t >= 1 || "" === t) && "" === m.trim(o.replace(Ke, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ke.test(o) ? o.replace(Ke, i) : o + " " + i)
			}
		}), m.cssHooks.marginRight = Je(v.reliableMarginRight, function(e, t) {
			if (t) return Ue(e, {
				"display": "inline-block"
			}, Ge, [e, "marginRight"])
		}), m.cssHooks.marginLeft = Je(v.reliableMarginLeft, function(e, t) {
			if (t) return (parseFloat(Ge(e, "marginLeft")) || (m.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Ue(e, {
				marginLeft: 0
			}, function() {
				return e.getBoundingClientRect().left
			}) : 0)) + "px"
		}), m.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			m.cssHooks[e + t] = {
				expand: function(n) {
					for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + K[r] + t] = o[r] || o[r - 2] || o[0];
					return i
				}
			}, We.test(e) || (m.cssHooks[e + t].set = st)
		}), m.fn.extend({
			css: function(e, t) {
				return ee(this, function(e, t, n) {
					var r, i, o = {},
						a = 0;
					if (m.isArray(t)) {
						for (r = Ve(e), i = t.length; a < i; a++) o[t[a]] = m.css(e, t[a], !1, r);
						return o
					}
					return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function() {
				return at(this, !0)
			},
			hide: function() {
				return at(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					Z(this) ? m(this).show() : m(this).hide()
				})
			}
		});

		function ct(e, t, n, r, i) {
			return new ct.prototype.init(e, t, n, r, i)
		}
		m.Tween = ct, ct.prototype = {
			constructor: ct,
			init: function(e, t, n, r, i, o) {
				this.elem = e, this.prop = n, this.easing = i || m.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (m.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = ct.propHooks[this.prop];
				return e && e.get ? e.get(this) : ct.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = ct.propHooks[this.prop];
				return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ct.propHooks._default.set(this), this
			}
		}, ct.prototype.init.prototype = ct.prototype, ct.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function(e) {
					m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, ct.propHooks.scrollTop = ct.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, m.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, m.fx = ct.prototype.init, m.fx.step = {};
		var dt, ft, pt = /^(?:toggle|show|hide)$/,
			ht = /queueHooks$/;

		function vt() {
			return n.setTimeout(function() {
				dt = void 0
			}), dt = m.now()
		}

		function gt(e, t) {
			var n, r = {
				height: e
			},
				i = 0;
			for (t = t ? 1 : 0; i < 4; i += 2 - t) n = K[i], r["margin" + n] = r["padding" + n] = e;
			return t && (r.opacity = r.width = e), r
		}

		function mt(e, t, n) {
			for (var r, i = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
		}

		function yt(e, t, n) {
			var r, i, o, a, s, u, l, c, d = this,
				f = {},
				p = e.style,
				h = e.nodeType && Z(e),
				g = m._data(e, "fxshow");
			n.queue || (s = m._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
				s.unqueued || u()
			}), s.unqueued++, d.always(function() {
				d.always(function() {
					s.unqueued--, m.queue(e, "fx").length || s.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = m.css(e, "display"), c = "none" === l ? m._data(e, "olddisplay") || $e(e.nodeName) : l, "inline" === c && "none" === m.css(e, "float") && (v.inlineBlockNeedsLayout && "inline" !== $e(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", v.shrinkWrapBlocks() || d.always(function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for (r in t) if (i = t[r], pt.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
					if ("show" !== i || !g || void 0 === g[r]) continue;
					h = !0
				}
				f[r] = g && g[r] || m.style(e, r)
			} else l = void 0;
			if (m.isEmptyObject(f))"inline" === ("none" === l ? $e(e.nodeName) : l) && (p.display = l);
			else {
				g ? "hidden" in g && (h = g.hidden) : g = m._data(e, "fxshow", {}), o && (g.hidden = !h), h ? m(e).show() : d.done(function() {
					m(e).hide()
				}), d.done(function() {
					var t;
					m._removeData(e, "fxshow");
					for (t in f) m.style(e, t, f[t])
				});
				for (r in f) a = mt(h ? g[r] : 0, r, d), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
			}
		}

		function xt(e, t) {
			var n, r, i, o, a;
			for (n in e) if (r = m.camelCase(n), i = t[r], o = e[n], m.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = m.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
		}

		function bt(e, t, n) {
			var r, i, o = 0,
				a = bt.prefilters.length,
				s = m.Deferred().always(function() {
					delete u.elem
				}),
				u = function() {
					if (i) return !1;
					for (var t = dt || vt(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
					return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
				},
				l = s.promise({
					elem: e,
					props: m.extend({}, t),
					opts: m.extend(!0, {
						specialEasing: {},
						easing: m.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: dt || vt(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var r = m.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(r), r
					},
					stop: function(t) {
						var n = 0,
							r = t ? l.tweens.length : 0;
						if (i) return this;
						for (i = !0; n < r; n++) l.tweens[n].run(1);
						return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
					}
				}),
				c = l.props;
			for (xt(c, l.opts.specialEasing); o < a; o++) if (r = bt.prefilters[o].call(l, e, c, l.opts)) return m.isFunction(r.stop) && (m._queueHooks(l.elem, l.opts.queue).stop = m.proxy(r.stop, r)), r;
			return m.map(c, mt, l), m.isFunction(l.opts.start) && l.opts.start.call(e, l), m.fx.timer(m.extend(u, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
		}
		m.Animation = m.extend(bt, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return Q(n.elem, e, J.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				m.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(R);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], bt.tweeners[n] = bt.tweeners[n] || [], bt.tweeners[n].unshift(t)
			},
			prefilters: [yt],
			prefilter: function(e, t) {
				t ? bt.prefilters.unshift(e) : bt.prefilters.push(e)
			}
		}), m.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? m.extend({}, e) : {
				complete: n || !n && t || m.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !m.isFunction(t) && t
			};
			return r.duration = m.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in m.fx.speeds ? m.fx.speeds[r.duration] : m.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				m.isFunction(r.old) && r.old.call(this), r.queue && m.dequeue(this, r.queue)
			}, r
		}, m.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(Z).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = m.isEmptyObject(e),
					o = m.speed(t, n, r),
					a = function() {
						var t = bt(this, m.extend({}, e), o);
						(i || m._data(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, t, n) {
				var r = function(e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						o = m.timers,
						a = m._data(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else for (i in a) a[i] && a[i].stop && ht.test(i) && r(a[i]);
					for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					!t && n || m.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = m._data(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = m.timers,
						a = r ? r.length : 0;
					for (n.finish = !0, m.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), m.each(["toggle", "show", "hide"], function(e, t) {
			var n = m.fn[t];
			m.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(gt(t, !0), e, r, i)
			}
		}), m.each({
			slideDown: gt("show"),
			slideUp: gt("hide"),
			slideToggle: gt("toggle"),
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
			m.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), m.timers = [], m.fx.tick = function() {
			var e, t = m.timers,
				n = 0;
			for (dt = m.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || m.fx.stop(), dt = void 0
		}, m.fx.timer = function(e) {
			m.timers.push(e), e() ? m.fx.start() : m.timers.pop()
		}, m.fx.interval = 13, m.fx.start = function() {
			ft || (ft = n.setInterval(m.fx.tick, m.fx.interval))
		}, m.fx.stop = function() {
			n.clearInterval(ft), ft = null
		}, m.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, m.fn.delay = function(e, t) {
			return e = m.fx ? m.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, r) {
				var i = n.setTimeout(t, e);
				r.stop = function() {
					n.clearTimeout(i)
				}
			})
		},


		function() {
			var e, t = s.createElement("input"),
				n = s.createElement("div"),
				r = s.createElement("select"),
				i = r.appendChild(s.createElement("option"));
			n = s.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", v.getSetAttribute = "t" !== n.className, v.style = /top/.test(e.getAttribute("style")), v.hrefNormalized = "/a" === e.getAttribute("href"), v.checkOn = !! t.value, v.optSelected = i.selected, v.enctype = !! s.createElement("form").enctype, r.disabled = !0, v.optDisabled = !i.disabled, t = s.createElement("input"), t.setAttribute("value", ""), v.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), v.radioValue = "t" === t.value
		}();
		var wt = /\r/g,
			Tt = /[ \t\r\n\f]+/g;
		m.fn.extend({
			val: function(e) {
				var t, n, r, i = this[0]; {
					if (arguments.length) return r = m.isFunction(e), this.each(function(n) {
						var i;
						1 === this.nodeType && (i = r ? e.call(this, n, m(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : m.isArray(i) && (i = m.map(i, function(e) {
							return null == e ? "" : e + ""
						})), t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
					});
					if (i) return t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
				}
			}
		}), m.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = m.find.attr(e, "value");
						return null != t ? t : m.trim(m.text(e)).replace(Tt, " ")
					}
				},
				select: {
					get: function(e) {
						for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) if (n = r[u], (n.selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
							if (t = m(n).val(), o) return t;
							a.push(t)
						}
						return a
					},
					set: function(e, t) {
						var n, r, i = e.options,
							o = m.makeArray(t),
							a = i.length;
						while (a--) if (r = i[a], m.inArray(m.valHooks.option.get(r), o) > -1) try {
							r.selected = n = !0
						} catch (s) {
							r.scrollHeight
						} else r.selected = !1;
						return n || (e.selectedIndex = -1), i
					}
				}
			}
		}), m.each(["radio", "checkbox"], function() {
			m.valHooks[this] = {
				set: function(e, t) {
					if (m.isArray(t)) return e.checked = m.inArray(m(e).val(), t) > -1
				}
			}, v.checkOn || (m.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var Ct, Et, Nt = m.expr.attrHandle,
			St = /^(?:checked|selected)$/i,
			kt = v.getSetAttribute,
			At = v.input;
		m.fn.extend({
			attr: function(e, t) {
				return ee(this, m.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					m.removeAttr(this, e)
				})
			}
		}), m.extend({
			attr: function(e, t, n) {
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (t = t.toLowerCase(), i = m.attrHooks[t] || (m.expr.match.bool.test(t) ? Et : Ct)), void 0 !== n ? null === n ? void m.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = m.find.attr(e, t), null == r ? void 0 : r))
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if (!v.radioValue && "radio" === t && m.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function(e, t) {
				var n, r, i = 0,
					o = t && t.match(R);
				if (o && 1 === e.nodeType) while (n = o[i++]) r = m.propFix[n] || n, m.expr.match.bool.test(n) ? At && kt || !St.test(n) ? e[r] = !1 : e[m.camelCase("default-" + n)] = e[r] = !1 : m.attr(e, n, ""), e.removeAttribute(kt ? n : r)
			}
		}), Et = {
			set: function(e, t, n) {
				return t === !1 ? m.removeAttr(e, n) : At && kt || !St.test(n) ? e.setAttribute(!kt && m.propFix[n] || n, n) : e[m.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, m.each(m.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = Nt[t] || m.find.attr;
			At && kt || !St.test(t) ? Nt[t] = function(e, t, r) {
				var i, o;
				return r || (o = Nt[t], Nt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Nt[t] = o), i
			} : Nt[t] = function(e, t, n) {
				if (!n) return e[m.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), At && kt || (m.attrHooks.value = {
			set: function(e, t, n) {
				return m.nodeName(e, "input") ? void(e.defaultValue = t) : Ct && Ct.set(e, t, n)
			}
		}), kt || (Ct = {
			set: function(e, t, n) {
				var r = e.getAttributeNode(n);
				if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
			}
		}, Nt.id = Nt.name = Nt.coords = function(e, t, n) {
			var r;
			if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
		}, m.valHooks.button = {
			get: function(e, t) {
				var n = e.getAttributeNode(t);
				if (n && n.specified) return n.value
			},
			set: Ct.set
		}, m.attrHooks.contenteditable = {
			set: function(e, t, n) {
				Ct.set(e, "" !== t && t, n)
			}
		}, m.each(["width", "height"], function(e, t) {
			m.attrHooks[t] = {
				set: function(e, n) {
					if ("" === n) return e.setAttribute(t, "auto"), n
				}
			}
		})), v.style || (m.attrHooks.style = {
			get: function(e) {
				return e.style.cssText || void 0
			},
			set: function(e, t) {
				return e.style.cssText = t + ""
			}
		});
		var jt = /^(?:input|select|textarea|button|object)$/i,
			Dt = /^(?:a|area)$/i;
		m.fn.extend({
			prop: function(e, t) {
				return ee(this, m.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return e = m.propFix[e] || e, this.each(function() {
					try {
						this[e] = void 0, delete this[e]
					} catch (t) {}
				})
			}
		}), m.extend({
			prop: function(e, t, n) {
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t, i = m.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var t = m.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : jt.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		}), v.hrefNormalized || m.each(["href", "src"], function(e, t) {
			m.propHooks[t] = {
				get: function(e) {
					return e.getAttribute(t, 4)
				}
			}
		}), v.optSelected || (m.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			},
			set: function(e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			m.propFix[this.toLowerCase()] = this
		}), v.enctype || (m.propFix.enctype = "encoding");
		var Lt = /[\t\r\n\f]/g;

		function _t(e) {
			return m.attr(e, "class") || ""
		}
		m.fn.extend({
			addClass: function(e) {
				var t, n, r, i, o, a, s, u = 0;
				if (m.isFunction(e)) return this.each(function(t) {
					m(this).addClass(e.call(this, t, _t(this)))
				});
				if ("string" == typeof e && e) {
					t = e.match(R) || [];
					while (n = this[u++]) if (i = _t(n), r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " ")) {
						a = 0;
						while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						s = m.trim(r), i !== s && m.attr(n, "class", s)
					}
				}
				return this
			},
			removeClass: function(e) {
				var t, n, r, i, o, a, s, u = 0;
				if (m.isFunction(e)) return this.each(function(t) {
					m(this).removeClass(e.call(this, t, _t(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof e && e) {
					t = e.match(R) || [];
					while (n = this[u++]) if (i = _t(n), r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " ")) {
						a = 0;
						while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
						s = m.trim(r), i !== s && m.attr(n, "class", s)
					}
				}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function(n) {
					m(this).toggleClass(e.call(this, n, _t(this), t), t)
				}) : this.each(function() {
					var t, r, i, o;
					if ("string" === n) {
						r = 0, i = m(this), o = e.match(R) || [];
						while (t = o[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
					} else void 0 !== e && "boolean" !== n || (t = _t(this), t && m._data(this, "__className__", t), m.attr(this, "class", t || e === !1 ? "" : m._data(this, "__className__") || ""))
				})
			},
			hasClass: function(e) {
				var t, n, r = 0;
				t = " " + e + " ";
				while (n = this[r++]) if (1 === n.nodeType && (" " + _t(n) + " ").replace(Lt, " ").indexOf(t) > -1) return !0;
				return !1
			}
		}), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
			m.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), m.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		});
		var Ht = n.location,
			qt = m.now(),
			Ot = /\?/,
			Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		m.parseJSON = function(e) {
			if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
			var t, r = null,
				i = m.trim(e + "");
			return i && !m.trim(i.replace(Rt, function(e, n, i, o) {
				return t && n && (r = 0), 0 === r ? e : (t = i || n, r += !o - !i, "")
			})) ? Function("return " + i)() : m.error("Invalid JSON: " + e)
		}, m.parseXML = function(e) {
			var t, r;
			if (!e || "string" != typeof e) return null;
			try {
				n.DOMParser ? (r = new n.DOMParser, t = r.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
			} catch (i) {
				t = void 0
			}
			return t && t.documentElement && !t.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + e), t
		};
		var Mt = /#.*$/,
			It = /([?&])_=[^&]*/,
			Ft = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Bt = /^(?:GET|HEAD)$/,
			$t = /^\/\//,
			Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			zt = {},
			Ut = {},
			Xt = "*/".concat("*"),
			Vt = Ht.href,
			Gt = Wt.exec(Vt.toLowerCase()) || [];

		function Yt(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, i = 0,
					o = t.toLowerCase().match(R) || [];
				if (m.isFunction(n)) while (r = o[i++])"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}

		function Jt(e, t, n, r) {
			var i = {},
				o = e === Ut;

			function a(s) {
				var u;
				return i[s] = !0, m.each(e[s] || [], function(e, s) {
					var l = s(t, n, r);
					return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
				}), u
			}
			return a(t.dataTypes[0]) || !i["*"] && a("*")
		}

		function Kt(e, t) {
			var n, r, i = m.ajaxSettings.flatOptions || {};
			for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
			return n && m.extend(!0, e, n), e
		}

		function Zt(e, t, n) {
			var r, i, o, a, s = e.contents,
				u = e.dataTypes;
			while ("*" === u[0]) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i) for (a in s) if (s[a] && s[a].test(i)) {
				u.unshift(a);
				break
			}
			if (u[0] in n) o = u[0];
			else {
				for (a in n) {
					if (!u[0] || e.converters[a + " " + u[0]]) {
						o = a;
						break
					}
					r || (r = a)
				}
				o = o || r
			}
			if (o) return o !== u[0] && u.unshift(o), n[o]
		}

		function Qt(e, t, n, r) {
			var i, o, a, s, u, l = {},
				c = e.dataTypes.slice();
			if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
			o = c.shift();
			while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
			else if ("*" !== u && u !== o) {
				if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
					a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
					break
				}
				if (a !== !0) if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (d) {
					return {
						state: "parsererror",
						error: a ? d : "No conversion from " + u + " to " + o
					}
				}
			}
			return {
				state: "success",
				data: t
			}
		}
		m.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Vt,
				type: "GET",
				isLocal: Pt.test(Gt[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Xt,
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
					"text json": m.parseJSON,
					"text xml": m.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? Kt(Kt(e, m.ajaxSettings), t) : Kt(m.ajaxSettings, e)
			},
			ajaxPrefilter: Yt(zt),
			ajaxTransport: Yt(Ut),
			ajax: function(e, t) {
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var r, i, o, a, s, u, l, c, d = m.ajaxSetup({}, t),
					f = d.context || d,
					p = d.context && (f.nodeType || f.jquery) ? m(f) : m.event,
					h = m.Deferred(),
					v = m.Callbacks("once memory"),
					g = d.statusCode || {},
					y = {},
					x = {},
					b = 0,
					w = "canceled",
					T = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if (2 === b) {
								if (!c) {
									c = {};
									while (t = Ft.exec(a)) c[t[1].toLowerCase()] = t[2]
								}
								t = c[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === b ? a : null
						},
						setRequestHeader: function(e, t) {
							var n = e.toLowerCase();
							return b || (e = x[n] = x[n] || e, y[e] = t), this
						},
						overrideMimeType: function(e) {
							return b || (d.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if (e) if (b < 2) for (t in e) g[t] = [g[t], e[t]];
							else T.always(e[T.status]);
							return this
						},
						abort: function(e) {
							var t = e || w;
							return l && l.abort(t), E(0, t), this
						}
					};
				if (h.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || Vt) + "").replace(Mt, "").replace($t, Gt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = m.trim(d.dataType || "*").toLowerCase().match(R) || [""], null == d.crossDomain && (r = Wt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Gt[1] && r[2] === Gt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Gt[3] || ("http:" === Gt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = m.param(d.data, d.traditional)), Jt(zt, d, t, T), 2 === b) return T;
				u = m.event && d.global, u && 0 === m.active++ && m.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Ot.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = It.test(o) ? o.replace(It, "$1_=" + qt++) : o + (Ot.test(o) ? "&" : "?") + "_=" + qt++)), d.ifModified && (m.lastModified[o] && T.setRequestHeader("If-Modified-Since", m.lastModified[o]), m.etag[o] && T.setRequestHeader("If-None-Match", m.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : d.accepts["*"]);
				for (i in d.headers) T.setRequestHeader(i, d.headers[i]);
				if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === b)) return T.abort();
				w = "abort";
				for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) T[i](d[i]);
				if (l = Jt(Ut, d, t, T)) {
					if (T.readyState = 1, u && p.trigger("ajaxSend", [T, d]), 2 === b) return T;
					d.async && d.timeout > 0 && (s = n.setTimeout(function() {
						T.abort("timeout")
					}, d.timeout));
					try {
						b = 1, l.send(y, E)
					} catch (C) {
						if (!(b < 2)) throw C;
						E(-1, C)
					}
				} else E(-1, "No Transport");

				function E(e, t, r, i) {
					var c, y, x, w, C, E = t;
					2 !== b && (b = 2, s && n.clearTimeout(s), l = void 0, a = i || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (w = Zt(d, T, r)), w = Qt(d, w, T, c), c ? (d.ifModified && (C = T.getResponseHeader("Last-Modified"), C && (m.lastModified[o] = C), C = T.getResponseHeader("etag"), C && (m.etag[o] = C)), 204 === e || "HEAD" === d.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, y = w.data, x = w.error, c = !x)) : (x = E, !e && E || (E = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || E) + "", c ? h.resolveWith(f, [y, E, T]) : h.rejectWith(f, [T, E, x]), T.statusCode(g), g = void 0, u && p.trigger(c ? "ajaxSuccess" : "ajaxError", [T, d, c ? y : x]), v.fireWith(f, [T, E]), u && (p.trigger("ajaxComplete", [T, d]), --m.active || m.event.trigger("ajaxStop")))
				}
				return T
			},
			getJSON: function(e, t, n) {
				return m.get(e, t, n, "json")
			},
			getScript: function(e, t) {
				return m.get(e, void 0, t, "script")
			}
		}), m.each(["get", "post"], function(e, t) {
			m[t] = function(e, n, r, i) {
				return m.isFunction(n) && (i = i || r, r = n, n = void 0), m.ajax(m.extend({
					url: e,
					type: t,
					dataType: i,
					data: n,
					success: r
				}, m.isPlainObject(e) && e))
			}
		}), m._evalUrl = function(e) {
			return m.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				"throws": !0
			})
		}, m.fn.extend({
			wrapAll: function(e) {
				if (m.isFunction(e)) return this.each(function(t) {
					m(this).wrapAll(e.call(this, t))
				});
				if (this[0]) {
					var t = m(e, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						var e = this;
						while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
						return e
					}).append(this)
				}
				return this
			},
			wrapInner: function(e) {
				return m.isFunction(e) ? this.each(function(t) {
					m(this).wrapInner(e.call(this, t))
				}) : this.each(function() {
					var t = m(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = m.isFunction(e);
				return this.each(function(n) {
					m(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
				}).end()
			}
		});

		function en(e) {
			return e.style && e.style.display || m.css(e, "display")
		}

		function tn(e) {
			if (!m.contains(e.ownerDocument || s, e)) return !0;
			while (e && 1 === e.nodeType) {
				if ("none" === en(e) || "hidden" === e.type) return !0;
				e = e.parentNode
			}
			return !1
		}
		m.expr.filters.hidden = function(e) {
			return v.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : tn(e)
		}, m.expr.filters.visible = function(e) {
			return !m.expr.filters.hidden(e)
		};
		var nn = /%20/g,
			rn = /\[\]$/,
			on = /\r?\n/g,
			an = /^(?:submit|button|image|reset|file)$/i,
			sn = /^(?:input|select|textarea|keygen)/i;

		function un(e, t, n, r) {
			var i;
			if (m.isArray(t)) m.each(t, function(t, i) {
				n || rn.test(e) ? r(e, i) : un(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
			});
			else if (n || "object" !== m.type(t)) r(e, t);
			else for (i in t) un(e + "[" + i + "]", t[i], n, r)
		}
		m.param = function(e, t) {
			var n, r = [],
				i = function(e, t) {
					t = m.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (void 0 === t && (t = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(e) || e.jquery && !m.isPlainObject(e)) m.each(e, function() {
				i(this.name, this.value)
			});
			else for (n in e) un(n, e[n], t, i);
			return r.join("&").replace(nn, "+")
		}, m.fn.extend({
			serialize: function() {
				return m.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = m.prop(this, "elements");
					return e ? m.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !m(this).is(":disabled") && sn.test(this.nodeName) && !an.test(e) && (this.checked || !te.test(e))
				}).map(function(e, t) {
					var n = m(this).val();
					return null == n ? null : m.isArray(n) ? m.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(on, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(on, "\r\n")
					}
				}).get()
			}
		}), m.ajaxSettings.xhr = void 0 !== n.ActiveXObject ?
		function() {
			return this.isLocal ? pn() : s.documentMode > 8 ? fn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && fn() || pn()
		} : fn;
		var ln = 0,
			cn = {},
			dn = m.ajaxSettings.xhr();
		n.attachEvent && n.attachEvent("onunload", function() {
			for (var e in cn) cn[e](void 0, !0)
		}), v.cors = !! dn && "withCredentials" in dn, dn = v.ajax = !! dn, dn && m.ajaxTransport(function(e) {
			if (!e.crossDomain || v.cors) {
				var t;
				return {
					send: function(r, i) {
						var o, a = e.xhr(),
							s = ++ln;
						if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) a[o] = e.xhrFields[o];
						e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
						for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
						a.send(e.hasContent && e.data || null), t = function(n, r) {
							var o, u, l;
							if (t && (r || 4 === a.readyState)) if (delete cn[s], t = void 0, a.onreadystatechange = m.noop, r) 4 !== a.readyState && a.abort();
							else {
								l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
								try {
									u = a.statusText
								} catch (c) {
									u = ""
								}
								o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
							}
							l && i(o, u, l, a.getAllResponseHeaders())
						}, e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = cn[s] = t : t()
					},
					abort: function() {
						t && t(void 0, !0)
					}
				}
			}
		});

		function fn() {
			try {
				return new n.XMLHttpRequest
			} catch (e) {}
		}

		function pn() {
			try {
				return new n.ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {}
		}
		m.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function(e) {
					return m.globalEval(e), e
				}
			}
		}), m.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
		}), m.ajaxTransport("script", function(e) {
			if (e.crossDomain) {
				var t, n = s.head || m("head")[0] || s.documentElement;
				return {
					send: function(r, i) {
						t = s.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
							(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
						}, n.insertBefore(t, n.firstChild)
					},
					abort: function() {
						t && t.onload(void 0, !0)
					}
				}
			}
		});
		var hn = [],
			vn = /(=)\?(?=&|$)|\?\?/;
		m.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = hn.pop() || m.expando + "_" + qt++;
				return this[e] = !0, e
			}
		}), m.ajaxPrefilter("json jsonp", function(e, t, r) {
			var i, o, a, s = e.jsonp !== !1 && (vn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && vn.test(e.data) && "data");
			if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = m.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(vn, "$1" + i) : e.jsonp !== !1 && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
				return a || m.error(i + " was not called"), a[0]
			}, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
				a = arguments
			}, r.always(function() {
				void 0 === o ? m(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, hn.push(i)), a && m.isFunction(o) && o(a[0]), a = o = void 0
			}), "script"
		}), m.parseHTML = function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || s;
			var r = k.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = pe([e], t, i), i && i.length && m(i).remove(), m.merge([], r.childNodes))
		};
		var gn = m.fn.load;
		m.fn.load = function(e, t, n) {
			if ("string" != typeof e && gn) return gn.apply(this, arguments);
			var r, i, o, a = this,
				s = e.indexOf(" ");
			return s > -1 && (r = m.trim(e.slice(s, e.length)), e = e.slice(0, s)), m.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && m.ajax({
				url: e,
				type: i || "GET",
				dataType: "html",
				data: t
			}).done(function(e) {
				o = arguments, a.html(r ? m("<div>").append(m.parseHTML(e)).find(r) : e)
			}).always(n &&
			function(e, t) {
				a.each(function() {
					n.apply(this, o || [e.responseText, t, e])
				})
			}), this
		}, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			m.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), m.expr.filters.animated = function(e) {
			return m.grep(m.timers, function(t) {
				return e === t.elem
			}).length
		};

		function mn(e) {
			return m.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
		}
		m.offset = {
			setOffset: function(e, t, n) {
				var r, i, o, a, s, u, l, c = m.css(e, "position"),
					d = m(e),
					f = {};
				"static" === c && (e.style.position = "relative"), s = d.offset(), o = m.css(e, "top"), u = m.css(e, "left"), l = ("absolute" === c || "fixed" === c) && m.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m.isFunction(t) && (t = t.call(e, n, m.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
			}
		}, m.fn.extend({
			offset: function(e) {
				if (arguments.length) return void 0 === e ? this : this.each(function(t) {
					m.offset.setOffset(this, e, t)
				});
				var t, n, r = {
					top: 0,
					left: 0
				},
					i = this[0],
					o = i && i.ownerDocument;
				if (o) return t = o.documentElement, m.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = mn(o), {
					top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
				}) : r
			},
			position: function() {
				if (this[0]) {
					var e, t, n = {
						top: 0,
						left: 0
					},
						r = this[0];
					return "fixed" === m.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), m.nodeName(e[0], "html") || (n = e.offset()), n.top += m.css(e[0], "borderTopWidth", !0), n.left += m.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - n.top - m.css(r, "marginTop", !0),
						left: t.left - n.left - m.css(r, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var e = this.offsetParent;
					while (e && !m.nodeName(e, "html") && "static" === m.css(e, "position")) e = e.offsetParent;
					return e || Xe
				})
			}
		}), m.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, t) {
			var n = /Y/.test(t);
			m.fn[e] = function(r) {
				return ee(this, function(e, r, i) {
					var o = mn(e);
					return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? m(o).scrollLeft() : i, n ? i : m(o).scrollTop()) : e[r] = i)
				}, e, r, arguments.length, null)
			}
		}), m.each(["top", "left"], function(e, t) {
			m.cssHooks[t] = Je(v.pixelPosition, function(e, n) {
				if (n) return n = Ge(e, t), ze.test(n) ? m(e).position()[t] + "px" : n
			})
		}), m.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			m.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, r) {
				m.fn[r] = function(r, i) {
					var o = arguments.length && (n || "boolean" != typeof r),
						a = n || (r === !0 || i === !0 ? "margin" : "border");
					return ee(this, function(t, n, r) {
						var i;
						return m.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? m.css(t, n, a) : m.style(t, n, r, a)
					}, t, o ? r : void 0, o, null)
				}
			})
		}), m.fn.extend({
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		}), m.fn.size = function() {
			return this.length
		}, m.fn.andSelf = m.fn.addBack, r = [], i = function() {
			return m
		}.apply(t, r), !(void 0 !== i && (e.exports = i));
		var yn = n.jQuery,
			xn = n.$;
		return m.noConflict = function(e) {
			return n.$ === m && (n.$ = xn), e && n.jQuery === m && (n.jQuery = yn), m
		}, o || (n.jQuery = n.$ = m), m
	})
},


function(e, t) {
	!
	function(e, t) {
		function n(e) {
			return function(t) {
				return Object.prototype.toString.call(t) === "[object " + e + "]"
			}
		}

		function r() {
			return S++
		}

		function i(e) {
			return e.match(j)[0]
		}

		function o(e) {
			e = e.replace(D, "/");
			while (e.match(L)) e = e.replace(L, "/");
			return e
		}

		function a(e) {
			var t = e.length - 1,
				n = e.charAt(t);
			if ("#" === n) return e.substring(0, t);
			var r = e.substring(e.lastIndexOf(".") + 1);
			return "tmpl" == r || "less" == r ? e : ".js" === e.substring(t - 2) || e.indexOf("?") > 0 || ".css" === e.substring(t - 3) || "/" === n ? e : e + ".js"
		}

		function s(e) {
			var t = w.alias;
			return t && C(t[e]) ? t[e] : e
		}

		function u(e) {
			var t = w.paths,
				n;
			return t && (n = e.match(_)) && C(t[n[1]]) && (e = t[n[1]] + n[2]), e
		}

		function l(e) {
			var t = w.vars;
			return t && e.indexOf("{") > -1 && (e = e.replace(H, function(e, n) {
				return C(t[n]) ? t[n] : e
			})), e
		}

		function c(e) {
			var t = w.map,
				n = e;
			if (t) for (var r = 0, i = t.length; r < i; r++) {
				var o = t[r];
				if (n = N(o) ? o(e) || e : e.replace(o[0], o[1]), n !== e) break
			}
			return n
		}

		function d(e, t) {
			var n, r = e.charAt(0);
			if (q.test(e)) n = e;
			else if ("." === r) n = o((t ? i(t) : w.cwd) + e);
			else if ("/" === r) {
				var a = w.cwd.match(O);
				n = a ? a[0] + e.substring(1) : e
			} else n = w.base + e;
			return n
		}

		function f(e, t) {
			if (!e) return "";
			e = s(e), e = u(e), e = l(e), e = a(e);
			var n = d(e, t);
			return n = c(n)
		}

		function p(e) {
			return e.hasAttribute ? e.src : e.getAttribute("src", 4)
		}

		function h(e, t, n) {
			var r = z.test(e),
				i = R.createElement(r ? "link" : "script");
			if (n) {
				var o = N(n) ? n(e) : n;
				o && (i.charset = o)
			}
			v(i, t, r), r ? (i.rel = "stylesheet", i.href = e) : (i.async = !0, i.src = e), X = i, W ? $.insertBefore(i, W) : $.appendChild(i), X = null
		}

		function v(e, t, n) {
			var r = n && (G || !("onload" in e));
			return r ? void setTimeout(function() {
				g(e, t)
			}, 1) : void(e.onload = e.onerror = e.onreadystatechange = function() {
				U.test(e.readyState) && (e.onload = e.onerror = e.onreadystatechange = null, n || w.debug || $.removeChild(e), e = null, t())
			})
		}

		function g(e, t) {
			var n = e.sheet,
				r;
			if (G) n && (r = !0);
			else if (n) try {
				n.cssRules && (r = !0)
			} catch (i) {
				"NS_ERROR_DOM_SECURITY_ERR" === i.name && (r = !0)
			}
			setTimeout(function() {
				r ? t() : g(e, t)
			}, 20)
		}

		function m() {
			if (X) return X;
			if (V && "interactive" === V.readyState) return V;
			for (var e = $.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
				var n = e[t];
				if ("interactive" === n.readyState) return V = n
			}
		}

		function y(e) {
			var t = [];
			return e.replace(J, "").replace(Y, function(e, n, r) {
				r && t.push(r)
			}), t
		}

		function x(e, t) {
			this.uri = e, this.dependencies = t || [], this.exports = null, this.status = 0, this._waitings = {}, this._remain = 0
		}
		if (!e.seajs) {
			var b = e.seajs = {
				version: "2.1.1"
			},
				w = b.data = {},
				T = n("Object"),
				C = n("String"),
				E = Array.isArray || n("Array"),
				N = n("Function"),
				S = 0,
				k = w.events = {};
			b.on = function(e, t) {
				var n = k[e] || (k[e] = []);
				return n.push(t), b
			}, b.off = function(e, t) {
				if (!e && !t) return k = w.events = {}, b;
				var n = k[e];
				if (n) if (t) for (var r = n.length - 1; r >= 0; r--) n[r] === t && n.splice(r, 1);
				else delete k[e];
				return b
			};
			var A = b.emit = function(e, t) {
					var n = k[e],
						r;
					if (n) {
						n = n.slice();
						while (r = n.shift()) r(t)
					}
					return b
				},
				j = /[^?#]*\//,
				D = /\/\.\//g,
				L = /\/[^\/]+\/\.\.\//,
				_ = /^([^\/]+)(\/.+)$/,
				H = /{([^{]+)}/g,
				q = /^\/\/.|:\//,
				O = /^.*?\/\/.*?\//,
				R = document,
				M = location,
				I = i(M.href),
				F = R.getElementsByTagName("script"),
				P = R.getElementById("seajsnode") || F[F.length - 1],
				B = i(p(P) || I),
				$ = R.getElementsByTagName("head")[0] || R.documentElement,
				W = $.getElementsByTagName("base")[0],
				z = /\.css(?:\?|$)/i,
				U = /^(?:loaded|complete|undefined)$/,
				X, V, G = 1 * navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1") < 536,
				Y = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
				J = /\\\\/g,
				K = b.cache = {},
				Z, Q = {},
				ee = {},
				te = {},
				ne = x.STATUS = {
					FETCHING: 1,
					SAVED: 2,
					LOADING: 3,
					LOADED: 4,
					EXECUTING: 5,
					EXECUTED: 6
				};
			x.prototype.resolve = function() {
				for (var e = this, t = e.dependencies, n = [], r = 0, i = t.length; r < i; r++) n[r] = x.resolve(t[r], e.uri);
				return n
			}, x.prototype.load = function() {
				var e = this;
				if (!(e.status >= ne.LOADING)) {
					e.status = ne.LOADING;
					var t = e.resolve();
					A("load", t);
					for (var n = e._remain = t.length, r, i = 0; i < n; i++) r = x.get(t[i]), r.status < ne.LOADED ? r._waitings[e.uri] = (r._waitings[e.uri] || 0) + 1 : e._remain--;
					if (0 === e._remain) return void e.onload();
					var o = {};
					for (i = 0; i < n; i++) r = K[t[i]], r.status < ne.FETCHING ? r.fetch(o) : r.status === ne.SAVED && r.load();
					for (var a in o) o.hasOwnProperty(a) && o[a]()
				}
			}, x.prototype.onload = function() {
				var e = this;
				e.status = ne.LOADED, e.callback && e.callback();
				var t = e._waitings,
					n, r;
				for (n in t) t.hasOwnProperty(n) && (r = K[n], r._remain -= t[n], 0 === r._remain && r.onload());
				delete e._waitings, delete e._remain
			}, x.prototype.fetch = function(e) {
				var t = this,
					n = t.uri;
				t.status = ne.FETCHING;
				var r = {
					uri: n
				};
				A("fetch", r);
				var i = r.requestUri || n;
				if (!i || ee[i]) return void t.load();
				if (Q[i]) return void te[i].push(t);
				Q[i] = !0, te[i] = [t], A("request", r = {
					uri: n,
					requestUri: i,
					onRequest: a,
					charset: w.charset
				}), r.requested || (e ? e[r.requestUri] = o : o());

				function o() {
					h(r.requestUri, r.onRequest, r.charset)
				}

				function a() {
					delete Q[i], ee[i] = !0, Z && (x.save(n, Z), Z = null);
					var e, t = te[i];
					delete te[i];
					while (e = t.shift()) e.load()
				}
			}, x.prototype.exec = function() {
				var e = this;
				if (e.status >= ne.EXECUTING) return e.exports;
				e.status = ne.EXECUTING;
				var n = e.uri;

				function i(e) {
					return x.get(i.resolve(e)).exec()
				}
				i.resolve = function(e) {
					return x.resolve(e, n)
				}, i.async = function(e, t) {
					return x.use(e, t, n + "_async_" + r()), i
				};
				var o = e.factory,
					a = N(o) ? o(i, e.exports = {}, e) : o;
				return a === t && (a = e.exports), null !== a || z.test(n) || A("error", e), delete e.factory, e.exports = a, e.status = ne.EXECUTED, A("exec", e), a
			}, x.resolve = function(e, t) {
				var n = {
					id: e,
					refUri: t
				};
				return A("resolve", n), n.uri || f(n.id, t)
			}, x.define = function(e, n, r) {
				var i = arguments.length;
				1 === i ? (r = e, e = t) : 2 === i && (r = n, E(e) ? (n = e, e = t) : n = t), !E(n) && N(r) && (n = y(r.toString()));
				var o = {
					id: e,
					uri: x.resolve(e),
					deps: n,
					factory: r
				};
				if (!o.uri && R.attachEvent) {
					var a = m();
					a && (o.uri = a.src)
				}
				A("define", o), o.uri ? x.save(o.uri, o) : Z = o
			}, x.save = function(e, t) {
				var n = x.get(e);
				n.status < ne.SAVED && (n.id = t.id || e, n.dependencies = t.deps || [], n.factory = t.factory, n.status = ne.SAVED)
			}, x.get = function(e, t) {
				return K[e] || (K[e] = new x(e, t))
			}, x.use = function(t, n, r) {
				var i = x.get(r, E(t) ? t : [t]);
				i.callback = function() {
					for (var t = [], r = i.resolve(), o = 0, a = r.length; o < a; o++) t[o] = K[r[o]].exec();
					n && n.apply(e, t), delete i.callback
				}, i.load()
			}, x.preload = function(e) {
				var t = w.preload,
					n = t.length;
				n ? x.use(t, function() {
					t.splice(0, n), x.preload(e)
				}, w.cwd + "_preload_" + r()) : e()
			}, b.use = function(e, t) {
				return x.preload(function() {
					x.use(e, t, w.cwd + "_use_" + r())
				}), b
			}, x.define.cmd = {}, e.define = x.define, b.Module = x, w.fetchedList = ee, w.cid = r, b.resolve = f, b.require = function(e) {
				return (K[x.resolve(e)] || {}).exports
			};
			var re = /^(.+?\/)(\?\?)?(seajs\/)+/;
			w.base = (B.match(re) || ["", B])[1], w.dir = B, w.cwd = I, w.charset = "utf-8", w.preload = function() {
				var e = [],
					t = M.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2");
				return t += " " + R.cookie, t.replace(/(seajs-\w+)=1/g, function(t, n) {
					e.push(n)
				}), e
			}(), b.config = function(e) {
				for (var t in e) {
					var n = e[t],
						r = w[t];
					if (r && T(r)) for (var i in n) r[i] = n[i];
					else E(r) ? n = r.concat(n) : "base" === t && ("/" === n.slice(-1) || (n += "/"), n = d(n)), w[t] = n
				}
				return A("config", e), b
			}
		}
	}(this)
},


function(e, t, n) {
	n(4), n(5)
},


function(e, t, n) {
	!
	function() {
		var t = seajs.Module,
			n = t.STATUS.FETCHING,
			r = seajs.data,
			i = r.comboHash = {},
			o = ["??", ","],
			a = 2e3,
			s;
		seajs.on("load", u), seajs.on("fetch", l);

		function u(e) {
			var u = e.length;
			if (!(u < 2)) {
				r.comboSyntax && (o = r.comboSyntax), r.comboMaxLength && (a = r.comboMaxLength), s = r.comboExcludes;
				for (var l = [], d = 0; d < u; d++) {
					var f = e[d];
					if (!i[f]) {
						var p = t.get(f);
						p.status < n && !x(f) && !b(f) && l.push(f)
					}
				}
				l.length > 1 && h(c(l))
			}
		}

		function l(e) {
			e.requestUri = i[e.uri] || e.uri
		}

		function c(e) {
			return f(d(e))
		}

		function d(e) {
			for (var t = {
				__KEYS: []
			}, n = 0, r = e.length; n < r; n++) for (var i = e[n].replace("://", "__").split("/"), o = t, a = 0, s = i.length; a < s; a++) {
				var u = i[a];
				o[u] || (o[u] = {
					__KEYS: []
				}, o.__KEYS.push(u)), o = o[u]
			}
			return t
		}

		function f(e) {
			for (var t = [], n = e.__KEYS, r = 0, i = n.length; r < i; r++) {
				var o = n[r],
					a = o,
					s = e[o],
					u = s.__KEYS;
				while (1 === u.length) a += "/" + u[0], s = s[u[0]], u = s.__KEYS;
				u.length && t.push([a.replace("__", "://"), p(s)])
			}
			return t
		}

		function p(e) {
			for (var t = [], n = e.__KEYS, r = 0, i = n.length; r < i; r++) {
				var o = n[r],
					a = p(e[o]),
					s = a.length;
				if (s) for (var u = 0; u < s; u++) t.push(o + "/" + a[u]);
				else t.push(o)
			}
			return t
		}

		function h(e) {
			for (var t = 0, n = e.length; t < n; t++) for (var r = e[t], o = r[0] + "/", a = m(r[1]), s = 0, u = a.length; s < u; s++) v(o, a[s]);
			return i
		}

		function v(e, t) {
			var n = e + o[0] + t.join(o[1]),
				r = n.length > a;
			if (t.length > 1 && r) {
				var s = g(t, a - (e + o[0]).length);
				v(e, s[0]), v(e, s[1])
			} else {
				if (r) throw new Error("The combo url is too long: " + n);
				for (var u = 0, l = t.length; u < l; u++) i[e + t[u]] = n
			}
		}

		function g(e, t) {
			for (var n = o[1], r = e[0], i = 1, a = e.length; i < a; i++) if (r += n + e[i], r.length > t) return [e.splice(0, i), e]
		}

		function m(e) {
			for (var t = [], n = {}, r = 0, i = e.length; r < i; r++) {
				var o = e[r],
					a = y(o);
				a && (n[a] || (n[a] = [])).push(o)
			}
			for (var s in n) n.hasOwnProperty(s) && t.push(n[s]);
			return t
		}

		function y(e) {
			var t = e.lastIndexOf(".");
			return e.substring(t).replace(/\?.*|#.*/, "")
		}

		function x(e) {
			if (s) return s.test ? s.test(e) : s(e)
		}

		function b(e) {
			var t = r.comboSyntax || ["??", ","],
				n = t[0],
				i = t[1];
			return n && e.indexOf(n) > 0 || i && e.indexOf(i) > 0
		}
		if (r.test) {
			var w = seajs.test || (seajs.test = {});
			w.uris2paths = c, w.paths2hash = h
		}!(e.exports = {})
	}()
},


function(e, t) {
	!
	function() {
		var e = /\W/g,
			t = document,
			n = document.getElementsByTagName("head")[0] || document.documentElement,
			r;
		seajs.importStyle = function(i, o) {
			if (!o || (o = o.replace(e, "-"), !t.getElementById(o))) {
				var a;
				if (!r || o ? (a = t.createElement("style"), o && (a.id = o), n.appendChild(a)) : a = r, a.styleSheet) {
					if (t.getElementsByTagName("style").length > 31) throw new Error("Exceed the maximal count of style tags in IE");
					a.styleSheet.cssText += i
				} else a.appendChild(t.createTextNode(i));
				o || (r = a)
			}
		}
	}()
},


function(e, t) {
	seajs.data.base = "", "product" !== ZBJInfo.runtime && "test" !== ZBJInfo.runtime && (seajs.data.comboExcludes = /.*/);
	var n = /^([a-zA-Z][a-zA-Z0-9\-\_]+\/[a-zA-Z0-9\-\_]+)([@\^])(\d+\.\d+\.\d+)(?:\/(.+))?$/,
		r = /^@([a-zA-Z][a-zA-Z0-9\-\_]+\/[a-zA-Z0-9\-\_]+)(?:\/(.+))?$/,
		i = ZBJInfo.staticLibURI + "/rake-component";
	seajs.on("resolve", function(e) {
		var t = e.id,
			o, a;
		t && ((o = t.match(n)) ? a = [i, o[1], o[3], o[4] || "index.js"] : (o = t.match(r)) && (a = [i, o[1], o[2] || "index.js"]), a && (e.uri = a.join("/")))
	});
	var o = seajs.config;
	seajs.config = function(e) {
		e.map && (seajs.data.map = e.map.concat(seajs.data.map || []), delete e.map), o(e)
	}
},


function(e, t, n) {
	var r = n(8),
		i = Array.prototype.slice,
		o = {},
		a = o.events = {};
	o.version = "0.0.1", o.on = function(e, t, n) {
		var r = a[e] || (a[e] = []);
		r.push({
			handler: t,
			context: n || this
		})
	}, o.off = function(e, t, n) {
		arguments.length || (a = {});
		var r = a[e];
		if (r) {
			var i, o;
			for (i = r.length - 1; i >= 0; i--) o = r[i], n && n !== o.context || t !== o.handler || r.splice(i, 1)
		}
	}, o.emit = function(e) {
		var t = a[e];
		if (t) for (var n = i.call(arguments, 1), r, o = 0, s = t.length; o < s; o++) r = t[o], r.handler.apply(r.context, n)
	}, $.extend(o, r), $.each(["preload", "render"], function(e, t) {
		o.on("pagelet." + t, function(e) {
			var n = o.get(e);
			n[t]()
		})
	}), seajs.Module.define("utopia", [], function(e, t, n) {
		n.exports = o
	}), e.exports = o
},


function(e, t, n) {
	var r = n(9),
		i = {};
	t.arrived = function(e, n) {
		var r = e.uid,
			i;
		void 0 !== r && (i = t.get(r), i.arrived(e, n))
	}, t.get = function(e) {
		return i[e] || (i[e] = new r(e)), i[e]
	}
},


function(e, t, n) {
	var r = n(10),
		i = n(11),
		o = $(window);

	function a(e) {
		this.init(e)
	}
	$.extend(a.prototype, {
		uid: void 0,
		js: void 0,
		css: void 0,
		content: void 0,
		entry: void 0,
		isPreloaded: !1,
		isImmediatePreload: !1,
		isRendered: !1,
		isImmediateRender: !1,
		threshold: Math.max(300, .75 * o.height()),
		init: function(e) {
			var t = this;
			t.uid = e, t.setStatus("init")
		},
		setStatus: function(e) {
			var t = this;
			e in r && (t.status = r[e])
		},
		arrived: function(e, t) {
			var n = this;
			$.extend(n, e), n.setStatus("arrived"), t ? n.isVisible() && (n.preloadAsync(), i.push(n)) : (n.collectData(), n.preload(), n.render())
		},
		collectData: function() {
			var e = document.getElementById(this.uid),
				t = $.find("img", e),
				n = 0,
				r;
			if (!t.length) return void s();
			while (r = t[n++]) r.height || $.event.add(r, "load", s)
		},
		preloadAsync: function() {
			var e = this;
			setTimeout(function() {
				e.preload()
			}, 0)
		},
		preload: function() {
			var e = this,
				t = e.status;
			t.invoke("preload", e)
		},
		doPreload: function() {
			var e = this,
				t;
			t = e.getModule(), t.load()
		},
		afterPreload: function() {
			var e = this;
			e.setStatus("preloaded"), e.isImmediateRender && e.render()
		},
		renderAsync: function() {
			var e = this;
			setTimeout(function() {
				e.render()
			}, 0)
		},
		render: function() {
			var e = this,
				t = e.status;
			t.invoke("render", e)
		},
		doRender: function(e) {
			var t = this,
				n;
			t.content && (e.removeAttr("data-lazy"), e.html(t.content)), n = t.getModule(), n.exec()
		},
		getAssets: function() {
			var e = this,
				t = [];
			return $.each(["js", "css"], function(n, r) {
				e[r] && (t = t.concat(e[r]))
			}), t
		},
		isVisible: function() {
			var e = this,
				t = e.getContainer();
			return t.is(":visible")
		},
		isInViewport: function(e) {
			var t = this,
				n = t.getContainer(),
				r = n.offset(),
				i = n.height(),
				o = n.width(),
				a = t.threshold;
			return e.right >= r.left - a && e.left <= r.left + o + a && e.bottom >= r.top - a && e.top <= r.top + i + a
		},
		getModule: function() {
			var e = this,
				t = e.mod,
				n, r, i;
			return t ? t : (i = e.getAssets(), "function" == typeof e.entry ? r = e.entry : (r = function(t) {
				t(e.entry)
			}, i.unshift(e.entry)), n = seajs.data.cwd + "_uid_" + e.uid, t = seajs.Module.get(n, i), t.factory = r, t.callback = function() {
				e.afterPreload()
			}, e.mod = t)
		},
		getContainer: function() {
			return $("#" + this.uid)
		}
	});

	function s() {
		var e;
		window.bees && window.bees.getFirstScreen && (e = Number(new Date), bees.getFirstScreen(e))
	}
	e.exports = a
},


function(e, t) {
	var n = Array.prototype.slice;

	function r(e) {
		this.init(e)
	}
	$.extend(r.prototype, {
		name: void 0,
		preload: void 0,
		render: void 0,
		init: function(e) {
			var t = this;
			$.extend(t, e)
		},
		invoke: function(e, t) {
			var r = this,
				i, o;
			return i = n.call(arguments, 2), o = r[e], o.apply(t || r, i)
		}
	});

	function i(e, t, n) {
		return new r({
			name: e,
			preload: t,
			render: n
		})
	}

	function o() {
		var e = this;
		e.isPreloaded || (e.isPreloaded = !0, e.doPreload())
	}

	function a() {
		var e = this,
			t;
		e.isRendered || (e.isPreloaded = !0, t = e.getContainer(), e.doRender(t))
	}

	function s() {
		this.isImmediatePreload = !0
	}

	function u() {
		var e = this;
		e.isPreloaded || e.preload(), e.isImmediateRender = !0
	}
	t.init = i("init", s, u), t.arrived = i("arrived", o, u), t.preloaded = i("preloaded", s, a), t.rendered = i("rendered", $.noop, $.noop)
},


function(e, t) {
	var n = [],
		r = $(document),
		i = $(window);
	t.push = function(e) {
		n.push(e)
	};

	function o() {
		for (var e = a(), t, r = n.length - 1; r >= 0; r--) t = n[r], t.isInViewport(e) && (n.splice(r, 1), t.renderAsync())
	}

	function a() {
		var e = i.scrollTop(),
			t = i.height() + e,
			n = i.scrollLeft(),
			r = i.width() + n;
		return {
			top: e,
			bottom: t,
			left: n,
			right: r
		}
	}

	function s(e, t) {
		var n = 0,
			r, i, o, a;
		return a = function() {
			n = (new Date).valueOf(), r = void 0, e.apply(i, o)
		},


		function() {
			var s = (new Date).valueOf(),
				u = t - (s - n);
			i = this, o = arguments, u <= 0 ? (r && (clearTimeout(r), r = null), n = s, e.apply(i, o)) : r || (r = setTimeout(a, u))
		}
	}

	function u() {
		window.scroll(0, 0)
	}
	var l = s(o, 120);
	i.on("beforeunload", u).on("resize scroll", l), r.ready(l)
},


function(e, t) {
	seajs.use(["fe-common/utopia-refer-statistics@0.0.2"], function(e) {
		var t = window.ZBJInfo;
		e.init({
			mode: "write",
			domain: t.pageDomain,
			proxyUrl: n(t)
		})
	});

	function n(e) {
		return e.isTianpengSite ? "//www." + (e.tpBaseURI || e.baseURI) + "/union/index" : location.protocol + "//api." + e.baseURI + "/union/index"
	}
},


function(e, t) {
	seajs.use(["fe-common/fe-data-refer-res@0.0.54"], function(e) {
		var t = window.ZBJInfo;
		try {
			e.init({
				domain: t.pageDomain,
				proxyUrl: n(t)
			}, null)
		} catch (r) {}
	});

	function n(e) {
		return e.isTianpengSite ? "//statistics." + (e.tpBaseURI || e.baseURI) : location.protocol + "//statistics." + e.baseURI
	}
}]);