/*!
 * Knockout Punches Additions
 * @version v0.1
 * @link https://github.com/low-res/ko-punches-additions
 * @author we.byte GmbH - http://www.webyte.org
 */

define("translator", [], function () {
    function e(e) {
        this.textbooklet = e
    }

    return e.prototype.translate = function (e) {
        var t = e;
        return this.textbooklet[e] ? t = this.textbooklet[e] : console.warn("No text found for " + e), t
    }, e
}), /*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
    function () {
        function e(e) {
            this._value = e
        }

        function t(e, t, r, n) {
            var a, i, o = Math.pow(10, t);
            return i = (r(e * o) / o).toFixed(t), n && (a = new RegExp("0{1," + n + "}$"), i = i.replace(a, "")), i
        }

        function r(e, t, r) {
            var n;
            return n = t.indexOf("$") > -1 ? a(e, t, r) : t.indexOf("%") > -1 ? i(e, t, r) : t.indexOf(":") > -1 ? o(e, t) : u(e._value, t, r)
        }

        function n(e, t) {
            var r, n, a, i, o, u = t, f = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], s = !1;
            if (t.indexOf(":") > -1)e._value = l(t); else if (t === v)e._value = 0; else {
                for ("." !== h[d].delimiters.decimal && (t = t.replace(/\./g, "").replace(h[d].delimiters.decimal, ".")), r = new RegExp("[^a-zA-Z]" + h[d].abbreviations.thousand + "(?:\\)|(\\" + h[d].currency.symbol + ")?(?:\\))?)?$"), n = new RegExp("[^a-zA-Z]" + h[d].abbreviations.million + "(?:\\)|(\\" + h[d].currency.symbol + ")?(?:\\))?)?$"), a = new RegExp("[^a-zA-Z]" + h[d].abbreviations.billion + "(?:\\)|(\\" + h[d].currency.symbol + ")?(?:\\))?)?$"), i = new RegExp("[^a-zA-Z]" + h[d].abbreviations.trillion + "(?:\\)|(\\" + h[d].currency.symbol + ")?(?:\\))?)?$"), o = 0; o <= f.length && !(s = t.indexOf(f[o]) > -1 ? Math.pow(1024, o + 1) : !1); o++);
                e._value = (s ? s : 1) * (u.match(r) ? Math.pow(10, 3) : 1) * (u.match(n) ? Math.pow(10, 6) : 1) * (u.match(a) ? Math.pow(10, 9) : 1) * (u.match(i) ? Math.pow(10, 12) : 1) * (t.indexOf("%") > -1 ? .01 : 1) * ((t.split("-").length + Math.min(t.split("(").length - 1, t.split(")").length - 1)) % 2 ? 1 : -1) * Number(t.replace(/[^0-9\.]+/g, "")), e._value = s ? Math.ceil(e._value) : e._value
            }
            return e._value
        }

        function a(e, t, r) {
            var n, a, i = t.indexOf("$"), o = t.indexOf("("), l = t.indexOf("-"), f = "";
            return t.indexOf(" $") > -1 ? (f = " ", t = t.replace(" $", "")) : t.indexOf("$ ") > -1 ? (f = " ", t = t.replace("$ ", "")) : t = t.replace("$", ""), a = u(e._value, t, r), 1 >= i ? a.indexOf("(") > -1 || a.indexOf("-") > -1 ? (a = a.split(""), n = 1, (o > i || l > i) && (n = 0), a.splice(n, 0, h[d].currency.symbol + f), a = a.join("")) : a = h[d].currency.symbol + f + a : a.indexOf(")") > -1 ? (a = a.split(""), a.splice(-1, 0, f + h[d].currency.symbol), a = a.join("")) : a = a + f + h[d].currency.symbol, a
        }

        function i(e, t, r) {
            var n, a = "", i = 100 * e._value;
            return t.indexOf(" %") > -1 ? (a = " ", t = t.replace(" %", "")) : t = t.replace("%", ""), n = u(i, t, r), n.indexOf(")") > -1 ? (n = n.split(""), n.splice(-1, 0, a + "%"), n = n.join("")) : n = n + a + "%", n
        }

        function o(e) {
            var t = Math.floor(e._value / 60 / 60), r = Math.floor((e._value - 60 * t * 60) / 60), n = Math.round(e._value - 60 * t * 60 - 60 * r);
            return t + ":" + (10 > r ? "0" + r : r) + ":" + (10 > n ? "0" + n : n)
        }

        function l(e) {
            var t = e.split(":"), r = 0;
            return 3 === t.length ? (r += 60 * Number(t[0]) * 60, r += 60 * Number(t[1]), r += Number(t[2])) : 2 === t.length && (r += 60 * Number(t[0]), r += Number(t[1])), Number(r)
        }

        function u(e, r, n) {
            var a, i, o, l, u, f, s = !1, c = !1, p = !1, m = "", b = !1, g = !1, y = !1, x = !1, w = !1, O = "", F = "", M = Math.abs(e), _ = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], T = "", k = !1;
            if (0 === e && null !== v)return v;
            if (r.indexOf("(") > -1 ? (s = !0, r = r.slice(1, -1)) : r.indexOf("+") > -1 && (c = !0, r = r.replace(/\+/g, "")), r.indexOf("a") > -1 && (b = r.indexOf("aK") >= 0, g = r.indexOf("aM") >= 0, y = r.indexOf("aB") >= 0, x = r.indexOf("aT") >= 0, w = b || g || y || x, r.indexOf(" a") > -1 ? (m = " ", r = r.replace(" a", "")) : r = r.replace("a", ""), M >= Math.pow(10, 12) && !w || x ? (m += h[d].abbreviations.trillion, e /= Math.pow(10, 12)) : M < Math.pow(10, 12) && M >= Math.pow(10, 9) && !w || y ? (m += h[d].abbreviations.billion, e /= Math.pow(10, 9)) : M < Math.pow(10, 9) && M >= Math.pow(10, 6) && !w || g ? (m += h[d].abbreviations.million, e /= Math.pow(10, 6)) : (M < Math.pow(10, 6) && M >= Math.pow(10, 3) && !w || b) && (m += h[d].abbreviations.thousand, e /= Math.pow(10, 3))), r.indexOf("b") > -1)for (r.indexOf(" b") > -1 ? (O = " ", r = r.replace(" b", "")) : r = r.replace("b", ""), o = 0; o <= _.length; o++)if (a = Math.pow(1024, o), i = Math.pow(1024, o + 1), e >= a && i > e) {
                O += _[o], a > 0 && (e /= a);
                break
            }
            return r.indexOf("o") > -1 && (r.indexOf(" o") > -1 ? (F = " ", r = r.replace(" o", "")) : r = r.replace("o", ""), F += h[d].ordinal(e)), r.indexOf("[.]") > -1 && (p = !0, r = r.replace("[.]", ".")), l = e.toString().split(".")[0], u = r.split(".")[1], f = r.indexOf(","), u ? (u.indexOf("[") > -1 ? (u = u.replace("]", ""), u = u.split("["), T = t(e, u[0].length + u[1].length, n, u[1].length)) : T = t(e, u.length, n), l = T.split(".")[0], T = T.split(".")[1].length ? h[d].delimiters.decimal + T.split(".")[1] : "", p && 0 === Number(T.slice(1)) && (T = "")) : l = t(e, null, n), l.indexOf("-") > -1 && (l = l.slice(1), k = !0), f > -1 && (l = l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + h[d].delimiters.thousands)), 0 === r.indexOf(".") && (l = ""), (s && k ? "(" : "") + (!s && k ? "-" : "") + (!k && c ? "+" : "") + l + T + (F ? F : "") + (m ? m : "") + (O ? O : "") + (s && k ? ")" : "")
        }

        function f(e, t) {
            h[e] = t
        }

        function s(e) {
            var t = e.toString().split(".");
            return t.length < 2 ? 1 : Math.pow(10, t[1].length)
        }

        function c() {
            var e = Array.prototype.slice.call(arguments);
            return e.reduce(function (e, t) {
                var r = s(e), n = s(t);
                return r > n ? r : n
            }, -(1 / 0))
        }

        var p, m = "1.5.3", h = {}, d = "en", v = null, b = "0,0", g = "undefined" != typeof module && module.exports;
        p = function (t) {
            return p.isNumeral(t) ? t = t.value() : 0 === t || "undefined" == typeof t ? t = 0 : Number(t) || (t = p.fn.unformat(t)), new e(Number(t))
        }, p.version = m, p.isNumeral = function (t) {
            return t instanceof e
        }, p.language = function (e, t) {
            if (!e)return d;
            if (e && !t) {
                if (!h[e])throw new Error("Unknown language : " + e);
                d = e
            }
            return (t || !h[e]) && f(e, t), p
        }, p.languageData = function (e) {
            if (!e)return h[d];
            if (!h[e])throw new Error("Unknown language : " + e);
            return h[e]
        }, p.language("en", {
            delimiters: {thousands: ",", decimal: "."},
            abbreviations: {thousand: "k", million: "m", billion: "b", trillion: "t"},
            ordinal: function (e) {
                var t = e % 10;
                return 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"
            },
            currency: {symbol: "$"}
        }), p.zeroFormat = function (e) {
            v = "string" == typeof e ? e : null
        }, p.defaultFormat = function (e) {
            b = "string" == typeof e ? e : "0.0"
        }, "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function (e, t) {
            if (null === this || "undefined" == typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof e)throw new TypeError(e + " is not a function");
            var r, n, a = this.length >>> 0, i = !1;
            for (1 < arguments.length && (n = t, i = !0), r = 0; a > r; ++r)this.hasOwnProperty(r) && (i ? n = e(n, this[r], r, this) : (n = this[r], i = !0));
            if (!i)throw new TypeError("Reduce of empty array with no initial value");
            return n
        }), p.fn = e.prototype = {
            clone: function () {
                return p(this)
            }, format: function (e, t) {
                return r(this, e ? e : b, void 0 !== t ? t : Math.round)
            }, unformat: function (e) {
                return "[object Number]" === Object.prototype.toString.call(e) ? e : n(this, e ? e : b)
            }, value: function () {
                return this._value
            }, valueOf: function () {
                return this._value
            }, set: function (e) {
                return this._value = Number(e), this
            }, add: function (e) {
                function t(e, t) {
                    return e + r * t
                }

                var r = c.call(null, this._value, e);
                return this._value = [this._value, e].reduce(t, 0) / r, this
            }, subtract: function (e) {
                function t(e, t) {
                    return e - r * t
                }

                var r = c.call(null, this._value, e);
                return this._value = [e].reduce(t, this._value * r) / r, this
            }, multiply: function (e) {
                function t(e, t) {
                    var r = c(e, t);
                    return e * r * t * r / (r * r)
                }

                return this._value = [this._value, e].reduce(t, 1), this
            }, divide: function (e) {
                function t(e, t) {
                    var r = c(e, t);
                    return e * r / (t * r)
                }

                return this._value = [this._value, e].reduce(t), this
            }, difference: function (e) {
                return Math.abs(p(this._value).subtract(e).value())
            }
        }, g && (module.exports = p), "undefined" == typeof ender && (this.numeral = p), "function" == typeof define && define.amd && define("numeral", [], function () {
            return p
        })
    }.call(this), define("formater", ["numeral"], function (e) {
    var t = {
        getFormatType: function (e) {
            var t = "", r = e.attr("class");
            return r && (r = r.split(/\s+/), $.each(r, function (e, r) {
                r.indexOf("format-") >= 0 && (t = r.split("format-")[1])
            })), t
        }
    }, r = {
        formatValue: function (e, r) {
            var n = t.getFormatType(r);
            return this.formatValueToType(e, n)
        }, formatValueToType: function (t, r) {
            var n = t;
            if ("" != t.toString())switch (r) {
                case"float":
                    t = this.stripCommaFromFloat(t), n = e(t).format("0,0.00");
                    break;
                case"float-1":
                    t = this.stripCommaFromFloat(t), n = e(t).format("0,0.0");
                    break;
                case"float-or-empty":
                    t = this.stripCommaFromFloat(t), n = e(t).format("0,0.00"), 0 == parseFloat(t) && (n = "");
                    break;
                case"float-or-emptysign":
                    t = this.stripCommaFromFloat(t), n = e(t).format("0,0.00"), 0 == parseFloat(t) && (n = "-,--");
                    break;
                case"int":
                    t = this.stripCommaFromFloat(t), n = e(t).format("0,0");
                    break;
                case"percent":
                    t = this.stripCommaFromFloat(t), n = e(t / 100).format("0.0 %");
                    break;
                case"percent-ceil":
                    t = this.stripCommaFromFloat(t), n = e(t / 100).format("0 %");
                    break;
                case"percent-or-empty":
                    t = this.stripCommaFromFloat(t), n = 0 == parseFloat(t) ? "" : e(t / 100).format("0.0 %");
                    break;
                case"time":
                    n = this.formatTime(t), "00:00" == n && (n = "");
                    break;
                case"date":
                    n = this.formatDbDateToGermanDate(t);
                    break;
                case"date-db":
                    n = this.formatDateObjectForDb(t);
                    break;
                case"":
                    n = t;
                    break;
                default:
                    console.log("unknown format type : " + r + ". In element:")
            }
            return n
        }, formatFloat: function (t) {
            if (t) {
                t = t.toString(), t.indexOf(",") > -1 && -1 == t.indexOf(".") && (t = t.replace(",", "."));
                var r = e().unformat(t);
                return parseFloat(r).toFixed(2)
            }
            return 0
        }, stripCommaFromFloat: function (e) {
            return e = e.toString(), e.indexOf(",") > -1 && -1 == e.indexOf(".") && (e = e.replace(",", ".")), e
        }, formatTime: function (e) {
            var t = e.split("");
            if (1 == t.length && t.unshift(0), t.length < 4)for (var r = t.length; 4 > r; r++)t.push(0);
            for (var n = "", r = 0; r < t.length; r++) {
                var a = t[r];
                2 == r && ":" != a && (n += ":"), n += a
            }
            return n
        }, extractDateFromPHPdate: function (e) {
            e = e || "";
            var t = e.split("T");
            return t[0]
        }, extractTimeFromPHPdate: function (e) {
            if (e) {
                var t = e.split("T"), r = t[1].split(":");
                return r[0] + ":" + r[1]
            }
            return e
        }, formatGermanDateToDbDate: function (e) {
            var t = e, r = e.split(".");
            return 3 == r.length && (t = r[2] + "-" + r[1] + "-" + r[0]), t
        }, formatDbDateToGermanDate: function (e) {
            var t = e, r = e.split("-");
            return 3 == r.length && (t = r[2] + "." + r[1] + "." + r[0]), t
        }, formatDateObjectForDb: function (e) {
            if (e instanceof Date) {
                var t = e.getDate() < 10 ? "0" + e.getDate() : e.getDate(), r = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1, n = e.getFullYear();
                return t + "." + r + "." + n
            }
            return e
        }
    };
    return r
}), define("app/main", ["translator", "formater"], function (e, t) {
    return {
        init: function (r, n) {
            r.punches.enableAll();
            var a = new e(n);
            r.filters.translate = function (e) {
                return a.translate(r.unwrap(e))
            }, r.filters.format = function (e, n) {
                var a = t.formatValueToType(r.unwrap(e), n);
                return a
            }
        }
    }
}), require(["app/main"]), require.config({bundles: {}});