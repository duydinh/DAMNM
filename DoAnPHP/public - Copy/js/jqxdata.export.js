/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function (a) {
    var b = function () {
        function c(a, b, c, f, g, h, i) {
            return this.hierarchy = g, this.exportFormat = h, this.filename = i, a.beginFile(i), d(a), e(a), a.endFile(i), a.getFile()
        }

        function d(b) {
            var c = !0;
            a.each(n, function () {
                if (this.hidden) return c = !1, !1
            }), b.beginHeader(c);
            var d = 0;
            for (var e in n) {
                n[e].columnsDataFields && (e = n[e].columnsDataFields[d].displayfield);
                var f = g(e, n[e]);
                b.appendHeaderCell(n[e], e, f, c, d), d++
            }
            b.endHeader(c)
        }

        function e(a) {
            if (a.beginBody(), this.hierarchy) {
                var b = function (c) {
                    for (var d = 0; d < c.length; d += 1) void 0 !== c[d] && (a.beginRow(c[d].level), f(a, c[d], d, !0), c[d].records && (a.beginRows(c[d].level), b(c[d].records), a.endRows(c[d].level)), a.endRow(c[d].level))
                };
                return b(m), void a.endBody()
            }
            for (var c = 0; c < m.length; c += 1) void 0 !== m[c] && f(a, m[c], c);
            a.endBody()
        }

        function f(b, c, d, e) {
            var f;
            1 != e && b.beginRow();
            var g = 0;
            for (var h in n) {
                if (n[h].columnsDataFields && (h = n[h].columnsDataFields[g].displayfield), f = i(d, h)) {
                    if (void 0 != f.level && f.index - 1 > c.level && f.index - 1 < f.maxLevel) {
                        g++;
                        continue
                    }
                    void 0 != f.maxLevel && f.index - 1 == f.maxLevel && (f = a.extend({}, f), f.merge = f.maxLevel - c.level - 1)
                }
                if (void 0 != c.level && void 0 != c.label && ("xml" === this.exportFormat || "json" === this.exportFormat)) {
                    var j = {};
                    j.text = "group", b.appendBodyCell(c.label, j, f, c, g, "group");
                    break
                }
                c.hasOwnProperty(h) ? b.appendBodyCell(c[h], n[h], f, c, g) : b.appendBodyCell("", n[h], f, c, g), g++
            }
            1 != e && b.endRow()
        }

        function g(a, b) {
            if (b.style) return o[b.style];
            var c = h();
            return c.length > 0 ? c[0].style : null
        }

        function h() {
            return q || (q = new Array, a.each(o, function (a, b) {
                q[q.length] = {name: a, style: b}
            })), q
        }

        function i(a, b) {
            var c = n[b];
            if (c) {
                if (c.customCellStyles) {
                    var d = c.customCellStyles[a];
                    if (d) return o[d]
                }
                if (c.cellStyle) {
                    if (c.cellAltStyle) {
                        var e = a % 2;
                        return 0 == e ? o[c.cellStyle] : o[c.cellAltStyle]
                    }
                    return o[c.cellStyle]
                }
                var f = h();
                if (f.length > 0) {
                    var e = a % (f.length - 1);
                    return f[e + 1].style
                }
            }
            return null
        }

        function j(a, b, c) {
            var d = document.createElement("input");
            return d.name = b, d.value = a, d.type = "hidden", c.appendChild(d), d
        }

        function k(a, b, c) {
            var d = document.createElement("textarea");
            return d.name = b, d.value = a, c.appendChild(d), d
        }

        function l(a, b, c, d, e) {
            var f = document.createElement("form");
            return j(a, "filename", f), j(b, "format", f), k(c, "content", f), void 0 != d && "" != d || (d = window && window.location.toString().indexOf("jqwidgets.com") >= 0 ? "https://www.facebook.com/" : "https://www.facebook.com/"), f.action = d, f.method = "post", e && (f.acceptCharset = e), document.body.appendChild(f), f
        }

        var m, n, o, p, q, r = {};
        return p = function (d, e, f, g, h, i) {
            if (!(this instanceof b)) return new b(d, e, f, h, i);
            m = d, n = e, o = f, this.exportTo = function (b, d, e, f) {
                b = b.toString().toLowerCase();
                var g = r[b];
                if (void 0 === g) throw"You can't export to " + b + " format.";
                if ("pdf" === b && void 0 == f) {
                    var h = this.exportTo(b, d, b, "pdf");
                    a.jqx.pdfExport || (a.jqx.pdfExport = {orientation: "portrait", paperSize: "a4"});
                    var i = new pdfDataExport(a.jqx.pdfExport.orientation, "pt", a.jqx.pdfExport.paperSize);
                    i.cellInitialize();
                    var j = a(h).find("th"), k = a(h).find("tr"), l = 0;
                    i.setFontSize(9.75);
                    var p = 595;
                    switch (a.jqx.pdfExport.paperSize) {
                        case"legal":
                            var p = 612;
                            "portrait" !== a.jqx.pdfExport.orientation && (p = 1008);
                            break;
                        case"letter":
                            var p = 612;
                            "portrait" !== a.jqx.pdfExport.orientation && (p = 792);
                            break;
                        case"a3":
                            var p = 841;
                            "portrait" !== a.jqx.pdfExport.orientation && (p = 1190);
                            break;
                        case"a4":
                            var p = 595;
                            "portrait" !== a.jqx.pdfExport.orientation && (p = 842);
                            break;
                        case"a5":
                            var p = 420;
                            "portrait" !== a.jqx.pdfExport.orientation && (p = 595)
                    }
                    p -= 20;
                    var q = 0, s = [];
                    if (a.each(j, function (a) {
                            var b = parseInt(this.style.width);
                            isNaN(b) && (b = 25);
                            var c = 72 * b / 96;
                            s[a] = c, q += c
                        }), q > p && a.each(s, function (a) {
                            s[a] = s[a] / q * 100, s[a] = s[a] * p / 100
                        }), a.each(j, function (b) {
                            var c = s[b], d = i.getTextDimensions(a(this).html()), e = a(this).html();
                            if (d.w + 3 > c) {
                                var f = i.splitTextToSize(e, c - 3), g = f[0];
                                e = g.length > 3 ? g.substring(0, g.length - 3) + "..." : g.substring(0, 1) + "...";
                                var f = i.splitTextToSize(e, c - 3), g = f[0];
                                g != e && (e = g)
                            }
                            i.cell(10, 10, c, 18.75, e, l)
                        }), l++, a.each(k, function (b) {
                            if (0 === b) return !0;
                            var c = a(this).children();
                            if (c.length > j.length) {
                                for (var d = c.length - j.length, e = "", f = s[0], g = 18.75, h = 0; h <= d; h++) {
                                    var k = c[h].innerHTML;
                                    "+" !== k && "-" !== k || (k += " "), "&nbsp;" === k && (k = "   "), e += k
                                }
                                var m = i.getTextDimensions(e);
                                if (m.w + 3 > f) {
                                    var n = i.splitTextToSize(e, f - 3), o = n[0];
                                    e = o.length > 3 ? o.substring(0, o.length - 3) + "..." : o.substring(0, 1) + "...";
                                    var n = i.splitTextToSize(e, f - 3), o = n[0];
                                    o != e && (e = o)
                                }
                                i.cell(10, 10, f, g, e, l);
                                for (var h = d + 1; h < c.length; h++) {
                                    var b = h - d, f = s[b], g = 18.75, e = a(c[h]).html(),
                                        m = i.getTextDimensions(a(c[h]).html());
                                    if (m.w + 3 > f) {
                                        var n = i.splitTextToSize(e, f - 3), o = n[0];
                                        e = o.length > 3 ? o.substring(0, o.length - 3) + "..." : o.substring(0, 1) + "...";
                                        var n = i.splitTextToSize(e, f - 3), o = n[0];
                                        o != e && (e = o)
                                    }
                                    i.cell(10, 10, f, g, e, l)
                                }
                                return l++, !0
                            }
                            a.each(c, function (b) {
                                var c = s[b], d = a(this).html();
                                if (i.getTextDimensions(a(this).html()).w + 3 > c) {
                                    var e = i.splitTextToSize(d, c - 3), f = e[0];
                                    d = f.length > 3 ? f.substring(0, f.length - 3) + "..." : f.substring(0, 1) + "...";
                                    var e = i.splitTextToSize(d, c - 3), f = e[0];
                                    f != d && (d = f)
                                }
                                i.cell(10, 10, c, 18.75, d, l)
                            }), l++
                        }), a.jqx.browser.msie && a.jqx.browser.version < 10) throw new Error("PDF export requires a browser with HTML5 support");
                    return i
                }
                return c(g, m, n, o, d, e, f)
            }, this.exportToFile = function (b, c, d, e, f) {
                if ("pdf" === b) {
                    var g = this.exportTo(b, f, b, c);
                    a.jqx.pdfExport || (a.jqx.pdfExport = {orientation: "portrait", paperSize: "a4"});
                    var h = new pdfDataExport(a.jqx.pdfExport.orientation, "pt", a.jqx.pdfExport.paperSize);
                    "utf-8" != e && "UTF-8" != e || h.setFont("courier", "normal"), h.cellInitialize();
                    var i = a(g).find("th"), j = a(g).find("tr"), k = 0;
                    h.setFontSize(9.75);
                    var m = 595;
                    switch (a.jqx.pdfExport.paperSize) {
                        case"legal":
                            var m = 612;
                            "portrait" !== a.jqx.pdfExport.orientation && (m = 1008);
                            break;
                        case"letter":
                            var m = 612;
                            "portrait" !== a.jqx.pdfExport.orientation && (m = 792);
                            break;
                        case"a3":
                            var m = 841;
                            "portrait" !== a.jqx.pdfExport.orientation && (m = 1190);
                            break;
                        case"a4":
                            var m = 595;
                            "portrait" !== a.jqx.pdfExport.orientation && (m = 842);
                            break;
                        case"a5":
                            var m = 420;
                            "portrait" !== a.jqx.pdfExport.orientation && (m = 595)
                    }
                    m -= 20;
                    var n = 0, o = [];
                    if (a.each(i, function (a) {
                            var b = parseInt(this.style.width);
                            isNaN(b) && (b = 25);
                            var c = 72 * b / 96;
                            o[a] = c, n += c
                        }), n > m && a.each(o, function (a) {
                            o[a] = o[a] / n * 100, o[a] = o[a] * m / 100
                        }), a.each(i, function (b) {
                            var c = o[b], d = h.getTextDimensions(a(this).html()), e = a(this).html();
                            if (d.w + 3 > c) {
                                var f = h.splitTextToSize(e, c - 3), g = f[0];
                                e = g.length > 3 ? g.substring(0, g.length - 3) + "..." : g.substring(0, 1) + "...";
                                var f = h.splitTextToSize(e, c - 3), g = f[0];
                                g != e && (e = g)
                            }
                            h.cell(10, 10, c, 18.75, e, k)
                        }), k++, a.each(j, function (b) {
                            if (0 === b) return !0;
                            var c = a(this).children();
                            if (c.length > i.length) {
                                for (var d = c.length - i.length, e = "", f = o[0], g = 18.75, j = 0; j <= d; j++) {
                                    var l = c[j].innerHTML;
                                    "+" !== l && "-" !== l || (l += " "), "&nbsp;" === l && (l = "   "), e += l
                                }
                                var m = h.getTextDimensions(e);
                                if (m.w + 3 > f) {
                                    var n = h.splitTextToSize(e, f - 3), p = n[0];
                                    e = p.length > 3 ? p.substring(0, p.length - 3) + "..." : p.substring(0, 1) + "...";
                                    var n = h.splitTextToSize(e, f - 3), p = n[0];
                                    p != e && (e = p)
                                }
                                h.cell(10, 10, f, g, e, k);
                                for (var j = d + 1; j < c.length; j++) {
                                    var b = j - d, f = o[b], g = 18.75, e = a(c[j]).html();
                                    "&nbsp;" === e && (e = "   ");
                                    var m = h.getTextDimensions(a(c[j]).html());
                                    if (m.w + 3 > f) {
                                        var n = h.splitTextToSize(e, f - 3), p = n[0];
                                        e = p.length > 3 ? p.substring(0, p.length - 3) + "..." : p.substring(0, 1) + "...";
                                        var n = h.splitTextToSize(e, f - 3), p = n[0];
                                        p != e && (e = p)
                                    }
                                    h.cell(10, 10, f, g, e, k)
                                }
                                return k++, !0
                            }
                            a.each(c, function (b) {
                                var c = o[b], d = a(this).html();
                                if ("&nbsp;" === d && (d = "   "), h.getTextDimensions(a(this).html()).w + 3 > c) {
                                    var e = h.splitTextToSize(d, c - 3), f = e[0];
                                    d = f.length > 3 ? f.substring(0, f.length - 3) + "..." : f.substring(0, 1) + "...";
                                    var e = h.splitTextToSize(d, c - 3), f = e[0];
                                    f != d && (d = f)
                                }
                                h.cell(10, 10, c, 18.75, d, k)
                            }), k++
                        }), a.jqx.browser.msie && a.jqx.browser.version < 10) throw new Error("PDF export requires a browser with HTML5 support");
                    return void h.save(c + ".pdf")
                }
                var p = this.exportTo(b, f, b, c), q = l(c, b, p, d, e);
                q.submit(), document.body.removeChild(q)
            }, this.exportToLocalFile = function (a, b, c, d) {
                var e = this.exportTo(a, c, d);
                document.location.href = "data:application/octet-stream;filename=" + b + "," + encodeURIComponent(e)
            }
        }, p.extend = function (b, c) {
            if (!(c instanceof a.jqx.dataAdapter.DataExportModuleBase)) throw"The module " + b + " is not instance of DataExportModuleBase.";
            r[b] = c
        }, p
    }();
    a.jqx.dataAdapter.ArrayExporter = b
}(jqxBaseFramework), function (a) {
    var b = function () {
        this.formatData = function (b, c, d, e) {
            if ("date" === c) {
                var f = "";
                if ("string" == typeof b && (f = a.jqx.dataFormat.tryparsedate(b), b = f), "" === b || null === b) return "";
                if (f = a.jqx.dataFormat.formatdate(b, d, e), "NaN" == f.toString() || null == f) return "";
                b = f
            } else if ("number" === c || "float" === c || "int" === c || "integer" == c) {
                if ("" === b || null === b) return "";
                if (!isNaN(new Number(b))) {
                    var g = a.jqx.dataFormat.formatnumber(b, d, e);
                    if ("NaN" == g.toString()) return "";
                    b = g
                }
            } else b = b;
            return null === b ? "" : b
        }, this.getFormat = function (a) {
            var b = a ? a.formatString : "", c = a ? a.localization : "", d = "string";
            return d = a ? a.type : "string", "number" != d && "float" != d || b || (b = "f2"), "int" != d && "integer" != d || b || (b = "n0"), "date" == d && (b || (b = "d")), {
                type: d,
                formatString: b,
                localization: c
            }
        }, this.beginFile = function () {
            throw"Not implemented!"
        }, this.beginHeader = function () {
            throw"Not implemented!"
        }, this.appendHeaderCell = function () {
            throw"Not implemented!"
        }, this.endHeader = function () {
            throw"Not implemented!"
        }, this.beginBody = function () {
            throw"Not implemented!"
        }, this.beginRow = function () {
            throw"Not implemented!"
        }, this.beginRows = function () {
            throw"Not implemented!"
        }, this.endRows = function () {
            throw"Not implemented!"
        }, this.appendBodyCell = function () {
            throw"Not implemented!"
        }, this.endRow = function () {
            throw"Not implemented!"
        }, this.endBody = function () {
            throw"Not implemented!"
        }, this.endFile = function () {
            throw"Not implemented!"
        }, this.getFile = function () {
            throw"Not implemented!"
        }
    };
    a.jqx.dataAdapter.DataExportModuleBase = b
}(jqxBaseFramework), function (a) {
    var b = function (a) {
        function b(a, b) {
            if (b) {
                var c = g.getFormat(b);
                a = g.formatData(a, c.type, c.formatString, c.localization)
            }
            return a = '"' + a + '"'
        }

        function c(c, e) {
            c = b(c, e), d += c + a
        }

        var d, e, f = 0, g = this;
        this.beginFile = function () {
            d = ""
        }, this.beginHeader = function () {
        }, this.appendHeaderCell = function (a, b, d, f, g) {
            if (d && void 0 != d.level) {
                if (g < d.maxLevel) return;
                if (g === d.maxLevel) {
                    f && c(a.text);
                    for (var h = 0; h < d.maxLevel; h++) c("");
                    return
                }
            }
            e = f, f && c(a.text)
        }, this.endHeader = function () {
            this.endRow()
        }, this.beginBody = function () {
            f = 0
        }, this.beginRow = function () {
            (f > 0 || 0 == f && e) && (d += "\n"), f++
        }, this.appendBodyCell = function (a, b, d, e, f) {
            if (d && void 0 != d.maxLevel && f === d.maxLevel) {
                c(a, b);
                for (var g = 0; g < d.maxLevel - e.level - 1; g++) c("", b)
            } else c(a, b)
        }, this.endRow = function () {
            d = d.substring(0, d.length - 1)
        }, this.endBody = function () {
        }, this.endFile = function () {
        }, this.getFile = function () {
            return d
        }
    };
    b.prototype = new a.jqx.dataAdapter.DataExportModuleBase;
    var c = function () {
    };
    c.prototype = new b(",");
    var d = function () {
    };
    d.prototype = new b("\t"), a.jqx.dataAdapter.ArrayExporter.extend("csv", new c), a.jqx.dataAdapter.ArrayExporter.extend("tsv", new d)
}(jqxBaseFramework), function (a) {
    var b = function () {
        function a(a) {
            var b = "";
            for (var c in a) a.hasOwnProperty(c) && (d && "font-size" == c && (a[c] = "100%"), b += c + ":" + a[c] + ";");
            return b
        }

        var b, c, d = !1, e = 0;
        this.setPDF = function () {
            d = !0
        }, this.beginFile = function (a) {
            b = d || void 0 == a ? '<table style="empty-cells: show;" cellspacing="0" cellpadding="2">' : '<html>\n\t<head>\n\t\t<title></title>\n\t\t<meta http-equiv=Content-type content="text/html; charset=UTF-8">\n\t</head>\n\t<body>\n\t\t<table style="empty-cells: show;" cellspacing="0" cellpadding="2">'
        }, this.beginHeader = function () {
            b += d ? "\n\t<thead><tr>" : "\n\t\t\t<thead>"
        }, this.appendHeaderCell = function (e, f, g, h) {
            if (c = h, h) if (d) b += '\n\t\t\t\t<th style="' + a(g) + '">' + e.text + "</th>"; else {
                if (g.disabled) return;
                g.merge ? e.width ? b += "\n\t\t\t\t<th colspan=" + (1 + g.merge) + ' style="width: ' + e.width + "px; " + a(g) + '">' + e.text + "</th>" : b += "\n\t\t\t\t<th colspan=" + (1 + g.merge) + ' style="' + a(g) + '">' + e.text + "</th>" : e.width ? b += '\n\t\t\t\t<th style="width: ' + e.width + "px; " + a(g) + '">' + e.text + "</th>" : b += '\n\t\t\t\t<th style="' + a(g) + '">' + e.text + "</th>"
            }
        }, this.endHeader = function () {
            b += d ? "\n\t</tr></thead>" : "\n\t\t\t</thead>"
        }, this.beginBody = function () {
            b += d ? "\n\t<tbody>" : "\n\t\t\t<tbody>", e = 0
        }, this.beginRow = function () {
            b += d ? "\n\t<tr>" : "\n\t\t\t\t<tr>", e++
        }, this.appendBodyCell = function (f, g, h) {
            var i = this.getFormat(g);
            "" === f && (f = "&nbsp;"), d ? b += 1 != e || c ? '\n\t\t\t\t\t<td style="' + a(h) + '">' + this.formatData(f, i.type, i.formatString, i.localization) + "</td>" : '\n\t\t\t\t\t<td style="' + a(h) + ' border-top-width: 1px;">' + this.formatData(f, i.type, i.formatString, i.localization) + "</td>" : h.merge ? b += 1 != e || c ? "\n\t\t\t\t\t<td colspan=" + (1 + h.merge) + ' style="' + a(h) + '">' + this.formatData(f, i.type, i.formatString, i.localization) + "</td>" : "\n\t\t\t\t\t<td colspan=" + (1 + h.merge) + ' style="' + a(h) + ' border-top-width: 1px;">' + this.formatData(f, i.type, i.formatString, i.localization) + "</td>" : b += 1 != e || c ? '\n\t\t\t\t\t<td style="' + a(h) + '">' + this.formatData(f, i.type, i.formatString, i.localization) + "</td>" : '\n\t\t\t\t\t<td style="' + a(h) + ' border-top-width: 1px;">' + this.formatData(f, i.type, i.formatString, i.localization) + "</td>"
        }, this.endRow = function () {
            b += d ? "\n\t</tr>" : "\n\t\t\t\t</tr>"
        }, this.endBody = function () {
            b += d ? "\n\t</tbody>" : "\n\t\t\t</tbody>"
        }, this.endFile = function (a) {
            b += d || void 0 == a ? "\n</table>" : "\n\t\t</table>\n\t</body>\n</html>\n"
        }, this.getFile = function () {
            return b
        }
    };
    b.prototype = new a.jqx.dataAdapter.DataExportModuleBase;
    var c = function () {
    };
    c.prototype = new b;
    var d = function () {
    };
    d.prototype = new b;
    var e = new d;
    a.jqx.dataAdapter.ArrayExporter.extend("html", new c), a.jqx.dataAdapter.ArrayExporter.extend("pdf", e)
}(jqxBaseFramework), function (a) {
    var b = function () {
        function a(a, b, c, d) {
            var e = "String", g = this.getFormat(b);
            null != a && "_AG" == a.toString().substring(0, 3) ? (a = a.toString().substring(3), e = "String") : ("date" == g.type && (null !== (a = this.formatData(a, g.type, g.formatString, g.localization)) && "" !== a || (a = "", e = "String")), "string" == g.type && (null === a || void 0 === a ? a = "" : (a.toString().indexOf("&") >= 0 && (a = a.toString().replace(/&/g, "&amp;")), a.toString().indexOf(">") >= 0 && (a = a.toString().replace(/>/g, "&gt;")), a.toString().indexOf("<") >= 0 && (a = a.toString().replace(/</g, "&lt;")), a.toString().indexOf('"') >= 0 && (a = a.toString().replace(/"/g, "&quot;")), a.toString().indexOf("'") >= 0 && (a = a.toString().replace(/'/g, "&apos;")))), "number" != c.dataType && "float" != c.dataType && "int" != c.dataType && "integer" != c.dataType || (e = "Number", a = parseFloat(a), (null === a || isNaN(a) || "" === a) && (a = "", e = "String"), a && "String" != e && "" != a && b && b.formatString && b.formatString.indexOf("p") >= 0 && (a /= 100), c.currencysymbol = b.localization.currencysymbol));
            var i = f(c);
            c.merge ? h += '\n\t\t\t\t<Cell ss:MergeAcross="' + c.merge + '" ss:StyleID="' + i + '"><Data ss:Type="' + e + '">' + a + "</Data></Cell>" : h += '\n\t\t\t\t<Cell ss:StyleID="' + i + '"><Data ss:Type="' + e + '">' + a + "</Data></Cell>"
        }

        function b() {
            return "xls-style-" + (l += 1)
        }

        function c(a) {
            for (var b in k) if (d(a, k[b]) && d(k[b], a)) return b
        }

        function d(a, b) {
            var c = !0;
            for (var d in a) a[d] !== b[d] && (c = !1);
            return c
        }

        function e(a, b) {
            m.startStyle(a), m.buildAlignment(b), m.buildBorder(b), m.buildFont(b), m.buildInterior(b), m.buildFormat(b), m.closeStyle(), g += m.toString()
        }

        function f(a) {
            if (!a) return "";
            var d = c(a);
            return void 0 === d && (d = b(), k[d] = a, e(d, a)), d
        }

        var g, h, i, j, k, l, m = {
            style: "",
            stylesMap: {
                font: {
                    color: "Color",
                    "font-family": "FontName",
                    "font-style": "Italic",
                    "font-weight": "Bold"
                },
                interior: {"background-color": "Color", background: "Color"},
                alignment: {left: "Left", center: "Center", right: "Right"}
            },
            startStyle: function (a) {
                this.style += '\n\t\t<Style ss:ID="' + a + '" ss:Name="' + a + '">'
            },
            buildAlignment: function (a) {
                if (a["text-align"]) {
                    var b = this.stylesMap.alignment[a["text-align"]];
                    b || (b = "Left");
                    var c = '\n\t\t\t<Alignment ss:Vertical="Bottom" ss:Horizontal="' + b + '"/>';
                    this.style += c
                }
            },
            buildBorder: function (a) {
                if (a["border-color"]) {
                    var b = "\n\t\t\t<Borders>",
                        c = '\n\t\t\t\t<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + a["border-color"] + '"/>',
                        d = '\n\t\t\t\t<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + a["border-color"] + '"/>',
                        e = '\n\t\t\t\t<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + a["border-color"] + '"/>',
                        f = '\n\t\t\t\t<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + a["border-color"] + '"/>';
                    b += c, b += d, b += e, b += f, b += "\n\t\t\t</Borders>", this.style += b
                }
            },
            buildFont: function (a) {
                var b = this.stylesMap.font, c = "\n\t\t\t<Font ";
                for (var d in b) void 0 !== a[d] && ("font-style" === d && "italic" === a[d].toString().toLowerCase() ? c += 'ss:Italic="1" ' : "font-weight" === d && "bold" === a[d].toString().toLowerCase() ? c += 'ss:Bold="1" ' : "color" === d && (c += "ss:" + b[d] + '="' + a[d] + '" '));
                c += "/>", this.style += c
            },
            buildInterior: function (a) {
                var b = this.stylesMap.interior, c = "\n\t\t\t<Interior ", d = !1;
                for (var e in b) void 0 !== a[e] && (c += "ss:" + b[e] + '="' + a[e] + '" ', d = !0);
                d && (c += 'ss:Pattern="Solid"'), c += "/>", this.style += c
            },
            buildFormat: function (a) {
                if ("number" == a.dataType || "float" == a.dataType || "int" == a.dataType || "integer" == a.dataType) {
                    var b = a.formatString;
                    "" == b || -1 != b.indexOf("n") || -1 != b.indexOf("N") ? this.style += '\n\t\t\t<NumberFormat ss:Format="0"/>' : "f" == b || "F" == b || "D" == b || -1 != b.indexOf("d") ? this.style += '\n\t\t\t<NumberFormat ss:Format="#,##0.00_);[Red](#,##0.00)"/>' : -1 != b.indexOf("p") || -1 != b.indexOf("P") ? this.style += '\n\t\t\t<NumberFormat ss:Format="Percent"/>' : -1 == b.indexOf("c") && -1 == b.indexOf("C") || (8364 == parseInt(a.currencysymbol.charCodeAt(0)) ? this.style += '\n\t\t\t<NumberFormat ss:Format="Euro Currency"/>' : this.style += '\n\t\t\t<NumberFormat ss:Format="Currency"/>')
                } else "date" == a.dataType && (this.style += '\n\t\t\t<NumberFormat ss:Format="Short Date"/>')
            },
            closeStyle: function () {
                this.style += "\n\t\t</Style>"
            },
            toString: function () {
                var a = this.style;
                return this.style = "", a
            }
        };
        this.beginFile = function () {
            k = {}, l = 0, g = '<?xml version="1.0"?>\n\t<?mso-application progid="Excel.Sheet"?> \n\t<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:o="urn:schemas-microsoft-com:office:office" \n\txmlns:x="urn:schemas-microsoft-com:office:excel" \n\txmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:html="http://www.w3.org/TR/REC-html40"> \n\t<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"> \n\t<Version>12.00</Version> \n\t</DocumentProperties> \n\t<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> \n\t<WindowHeight>8130</WindowHeight> \n\t<WindowWidth>15135</WindowWidth> \n\t<WindowTopX>120</WindowTopX> \n\t<WindowTopY>45</WindowTopY> \n\t<ProtectStructure>False</ProtectStructure> \n\t<ProtectWindows>False</ProtectWindows> \n\t</ExcelWorkbook> \n\t<Styles>'
        }, this.beginHeader = function () {
            h = '\n\t<Worksheet ss:Name="Sheet1">\n\t\t<Table>', i = [], j = []
        }, this.appendHeaderCell = function (a, b, c) {
            var d = void 0 != a.width ? a.width : 10 * a.text.length;
            h += '\n\t\t\t<Column ss:Width="' + d + '"/>', i.push(a), j.push(c)
        }, this.endHeader = function (b) {
            if (b) {
                this.beginRow();
                for (var c = 0; c < i.length; c += 1) j[c].disabled || a.call(this, i[c].text, null, j[c]);
                this.endRow()
            }
        }, this.beginBody = function () {
        }, this.beginRow = function (a) {
            if (void 0 != a) {
                h += "\n\t\t\t";
                for (var b = 0; b < a; b++) h += "\t";
                return void(h += "<Row>")
            }
            h += "\n\t\t\t<Row>"
        }, this.beginRows = function (a) {
            h += "\n\t\t\t\t<Rows>"
        }, this.appendBodyCell = function (b, c, d, e) {
            a.call(this, b, c, d, e)
        }, this.endRow = function (a) {
            if (void 0 != a) {
                h += "\n\t\t\t";
                for (var b = 0; b < a; b++) h += "\t";
                return void(h += "</Row>")
            }
            h += "\n\t\t\t</Row>"
        }, this.endRows = function (a) {
            if (void 0 != a) {
                h += "\n\t\t\t";
                for (var b = 0; b < a; b++) h += "\t";
                return void(h += "</Rows>")
            }
        }, this.endBody = function () {
            h += "\n\t\t</Table>"
        }, this.endFile = function () {
            h += "\n\t</Worksheet>\n</Workbook>", g += "\n\t</Styles>"
        }, this.getFile = function () {
            return g + h
        }
    };
    b.prototype = new a.jqx.dataAdapter.DataExportModuleBase, a.jqx.dataAdapter.ArrayExporter.extend("xls", new b)
}(jqxBaseFramework), function (a) {
    var b = function () {
        var a, b, c;
        this.beginFile = function () {
            a = '<?xml version="1.0" encoding="UTF-8" ?>', a += "\n<table>"
        }, this.beginHeader = function () {
            b = []
        }, this.appendHeaderCell = function (a, c) {
            b.push(c)
        }, this.endHeader = function () {
        }, this.beginBody = function (a, b) {
        }, this.beginRow = function (b) {
            if (void 0 != b && this.hierarchy) {
                a += "\n\t";
                for (var d = 0; d < b; d++) a += "\t\t";
                return a += "<row>", void(c = 0)
            }
            a += "\n\t<row>", c = 0
        }, this.beginRows = function (b) {
            if (void 0 != b) {
                a += "\n\t\t";
                for (var d = 0; d < b; d++) a += "\t\t";
                return a += "<rows>", void(c = 0)
            }
            a += "\n\t\t<rows>"
        }, this.appendBodyCell = function (d, e, f, g, h, i) {
            var j = this.getFormat(e);
            if (d = this.formatData(d, j.type, j.formatString, j.localization), "string" == j.type && (d.toString().indexOf("&") >= 0 && (d = d.toString().replace(/&/g, "&amp;")), d.toString().indexOf(">") >= 0 && (d = d.toString().replace(/>/g, "&gt;")), d.toString().indexOf("<") >= 0 && (d = d.toString().replace(/</g, "&lt;")), d.toString().indexOf('"') >= 0 && (d = d.toString().replace(/"/g, "&quot;")), d.toString().indexOf("'") >= 0 && (d = d.toString().replace(/'/g, "&apos;"))), void 0 != g.level) if (this.hierarchy) {
                a += "\n\t\t";
                for (var k = 0; k < g.level; k++) a += "\t\t";
                a += void 0 === i ? "<" + b[c] + ">" + d + "</" + b[c] + ">" : "<" + i + ">" + d + "</" + i + ">"
            } else a += void 0 != i ? "\n\t\t<" + i + ">" + d + "</" + i + ">" : "\n\t\t<" + b[c] + ">" + d + "</" + b[c] + ">"; else a += "\n\t\t<" + b[c] + ">" + d + "</" + b[c] + ">";
            c++
        }, this.endRow = function (b) {
            if (void 0 != b && this.hierarchy) {
                a += "\n\t";
                for (var d = 0; d < b; d++) a += "\t\t";
                return a += "</row>", void(c = 0)
            }
            a += "\n\t</row>", c = 0
        }, this.endRows = function (b) {
            if (void 0 != b) {
                a += "\n\t\t";
                for (var d = 0; d < b; d++) a += "\t\t";
                return a += "</rows>", void(c = 0)
            }
            a += "\n\t\t</rows>"
        }, this.endBody = function () {
        }, this.endFile = function () {
            a += "\n</table>"
        }, this.getFile = function () {
            return a
        }
    };
    b.prototype = new a.jqx.dataAdapter.DataExportModuleBase, a.jqx.dataAdapter.ArrayExporter.extend("xml", new b)
}(jqxBaseFramework), function (a) {
    function b(a) {
        return '"' + a.replace(k, function (a) {
            var b = l[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"'
    }

    function c(a) {
        return a < 10 ? "0" + a : a
    }

    function d(a) {
        return isFinite(a.valueOf()) ? a.getUTCFullYear() + "-" + c(a.getUTCMonth() + 1) + "-" + c(a.getUTCDate()) + "T" + c(a.getUTCHours()) + ":" + c(a.getUTCMinutes()) + ":" + c(a.getUTCSeconds()) + 'Z"' : "null"
    }

    function e(a) {
        var b, c = a.length, d = [];
        for (b = 0; b < c; b++) d.push(i(b, a) || "null");
        return "[" + d.join(",") + "]"
    }

    function f(a) {
        var c, d, e = [];
        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (d = i(c, a)) && e.push(b(c) + ":" + d);
        return "{" + e.join(",") + "}"
    }

    function g(a) {
        switch (Object.prototype.toString.call(a)) {
            case"[object Date]":
                return d(a);
            case"[object Array]":
                return e(a)
        }
        return f(a)
    }

    function h(a, c) {
        switch (c) {
            case"string":
                return b(a);
            case"number":
            case"float":
            case"integer":
            case"int":
                return isFinite(a) ? a : "null";
            case"boolean":
                return a
        }
        return "null"
    }

    function i(a, b) {
        var c = b[a], d = typeof c;
        return c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(a), d = typeof c), /(number|float|int|integer|string|boolean)/.test(d) || !c && "object" === d ? h(c, d) : g(c)
    }

    function j(a) {
        return window.JSON && "function" == typeof window.JSON.stringify ? window.JSON.stringify(a) : i("", {"": a})
    }

    var k = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        l = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"},
        m = function () {
            var a = this;
            this.prepareData = function (b, c) {
                if (c) {
                    var d = a.getFormat(c);
                    b = a.formatData(b, d.type, d.formatString, d.localization)
                }
                return b
            };
            var b, c, d, e = [], f = 0;
            this.beginFile = function () {
                c = []
            }, this.beginHeader = function () {
            }, this.appendHeaderCell = function (a) {
            }, this.endHeader = function () {
            }, this.beginBody = function (a, b) {
            }, this.beginRow = function () {
                hierarchy ? e[f] = {} : d = {}
            }, this.beginRows = function () {
                e[f].rows = [], f++, e[f] = {}
            }, this.endRows = function () {
                f--
            }, this.appendBodyCell = function (a, b) {
                var c = this.prepareData(a, b);
                hierarchy ? e[f][b.text] = c : d[b.text] = c
            }, this.endRow = function () {
                hierarchy ? 0 == f ? c.push(e[f]) : e[f - 1].rows.push(e[f]) : c.push(d)
            }, this.endBody = function () {
            }, this.endFile = function () {
                b = j(c)
            }, this.getFile = function () {
                return b
            }
        };
    m.prototype = new a.jqx.dataAdapter.DataExportModuleBase, a.jqx.dataAdapter.ArrayExporter.extend("json", new m)
}(jqxBaseFramework);
var pdfDataExport = function () {
    "use strict";

    function a(d, e, f, g) {
        d = void 0 === d ? "p" : d.toString().toLowerCase(), void 0 === e && (e = "mm"), void 0 === f && (f = "a4"), void 0 === g && "undefined" == typeof zpipe && (g = !1);
        var h, i, j, k, l, m, n, o, p, q = f.toString().toLowerCase(), r = [], s = 0, t = g, u = {
                a3: [841.89, 1190.55],
                a4: [595.28, 841.89],
                a5: [420.94, 595.28],
                letter: [612, 792],
                legal: [612, 1008]
            }, v = "0 g", w = 0, x = [], y = 2, z = !1, A = [], B = {}, C = {}, D = 16,
            E = {title: "", subject: "", author: "", keywords: "", creator: ""}, F = 0, G = 0, H = {}, I = new c(H),
            J = function (a) {
                return a.toFixed(2)
            }, K = function (a) {
                return a.toFixed(3)
            }, L = function (a) {
                var b = a.toFixed(0);
                return a < 10 ? "0" + b : b
            }, M = function (a) {
                var b = a.toFixed(0);
                return b.length < 10 ? new Array(11 - b.length).join("0") + b : b
            }, N = function (a) {
                z ? x[w].push(a) : (r.push(a), s += a.length + 1)
            }, O = function () {
                return y++, A[y] = s, N(y + " 0 obj"), y
            }, P = function (a) {
                N("stream"), N(a), N("endstream")
            }, Q = function () {
                n = j * k, o = i * k;
                var a, b, c, d, e, f;
                for (a = 1; a <= w; a++) {
                    if (O(), N("<</Type /Page"), N("/Parent 1 0 R"), N("/Resources 2 0 R"), N("/Contents " + (y + 1) + " 0 R>>"), N("endobj"), b = x[a].join("\n"), O(), t) {
                        for (c = [], d = 0; d < b.length; ++d) c[d] = b.charCodeAt(d);
                        f = adler32cs.from(b), e = new Deflater(6), e.append(new Uint8Array(c)), b = e.flush(), c = [new Uint8Array([120, 156]), new Uint8Array(b), new Uint8Array([255 & f, f >> 8 & 255, f >> 16 & 255, f >> 24 & 255])], b = "";
                        for (d in c) c.hasOwnProperty(d) && (b += String.fromCharCode.apply(null, c[d]));
                        N("<</Length " + b.length + " /Filter [/FlateDecode]>>")
                    } else N("<</Length " + b.length + ">>");
                    P(b), N("endobj")
                }
                for (A[1] = s, N("1 0 obj"), N("<</Type /Pages"), p = "/Kids [", d = 0; d < w; d++) p += 3 + 2 * d + " 0 R ";
                N(p + "]"), N("/Count " + w), N("/MediaBox [0 0 " + J(n) + " " + J(o) + "]"), N(">>"), N("endobj")
            }, R = function (a) {
                a.objectNumber = O(), N("<</BaseFont/" + a.PostScriptName + "/Type/Font"), "string" == typeof a.encoding && N("/Encoding/" + a.encoding), N("/Subtype/Type1>>"), N("endobj")
            }, S = function () {
                var a;
                for (a in B) B.hasOwnProperty(a) && R(B[a])
            }, T = function () {
                I.publish("putXobjectDict")
            }, U = function () {
                N("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), N("/Font <<");
                var a;
                for (a in B) B.hasOwnProperty(a) && N("/" + a + " " + B[a].objectNumber + " 0 R");
                N(">>"), N("/XObject <<"), T(), N(">>")
            }, V = function () {
                S(), I.publish("putResources"), A[2] = s, N("2 0 obj"), N("<<"), U(), N(">>"), N("endobj"), I.publish("postPutResources")
            }, W = function (a, b, c) {
                void 0 === C[b] && (C[b] = {}), C[b][c] = a
            }, X = function (a, c, d, e) {
                var f = "F" + (b(B) + 1).toString(10),
                    g = B[f] = {id: f, PostScriptName: a, fontName: c, fontStyle: d, encoding: e, metadata: {}};
                return W(f, c, d), I.publish("addFont", g), f
            }, Y = function (a, b) {
                var c, d, e, f, g, i, j, k, l;
                if (void 0 === b && (b = {}), e = b.sourceEncoding ? e : "Unicode", g = b.outputEncoding, (b.autoencode || g) && B[h].metadata && B[h].metadata[e] && B[h].metadata[e].encoding && (f = B[h].metadata[e].encoding, !g && B[h].encoding && (g = B[h].encoding), !g && f.codePages && (g = f.codePages[0]), "string" == typeof g && (g = f[g]), g)) {
                    for (j = !1, i = [], c = 0, d = a.length; c < d; c++) k = g[a.charCodeAt(c)], k ? i.push(String.fromCharCode(k)) : i.push(a[c]), i[c].charCodeAt(0) >> 8 && (j = !0);
                    a = i.join("")
                }
                for (c = a.length; void 0 === j && 0 !== c;) a.charCodeAt(c - 1) >> 8 && (j = !0), c--;
                if (j) {
                    for (i = b.noBOM ? [] : [254, 255], c = 0, d = a.length; c < d; c++) {
                        if (k = a.charCodeAt(c), (l = k >> 8) >> 8) throw new Error("Character at position " + c.toString(10) + " of string '" + a + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                        i.push(l), i.push(k - (l << 8))
                    }
                    return String.fromCharCode.apply(void 0, i)
                }
                return a
            }, Z = function (a, b) {
                return Y(a, b).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
            }, $ = function () {
                N("/Producer (pdfDataExport 0.9.0rc2)"), E.title && N("/Title (" + Z(E.title) + ")"), E.subject && N("/Subject (" + Z(E.subject) + ")"), E.author && N("/Author (" + Z(E.author) + ")"), E.keywords && N("/Keywords (" + Z(E.keywords) + ")"), E.creator && N("/Creator (" + Z(E.creator) + ")");
                var a = new Date;
                N("/CreationDate (D:" + [a.getFullYear(), L(a.getMonth() + 1), L(a.getDate()), L(a.getHours()), L(a.getMinutes()), L(a.getSeconds())].join("") + ")")
            }, _ = function () {
                N("/Type /Catalog"), N("/Pages 1 0 R"), N("/OpenAction [3 0 R /FitH null]"), N("/PageLayout /OneColumn"), I.publish("putCatalog")
            }, aa = function () {
                N("/Size " + (y + 1)), N("/Root " + y + " 0 R"), N("/Info " + (y - 1) + " 0 R")
            }, ba = function () {
                w++, z = !0, x[w] = []
            }, ca = function () {
                ba(), N(J(.200025 * k) + " w"), N("0 G"), 0 !== F && N(F.toString(10) + " J"), 0 !== G && N(G.toString(10) + " j"), I.publish("addPage", {pageNumber: w})
            }, da = function (a, b) {
                var c;
                void 0 === a && (a = B[h].fontName), void 0 === b && (b = B[h].fontStyle);
                try {
                    c = C[a][b]
                } catch (a) {
                    c = void 0
                }
                if (!c) throw new Error("Unable to look up font label for font '" + a + "', '" + b + "'. Refer to getFontList() for available fonts.");
                return c
            }, ea = function () {
                z = !1, r = [], A = [], N("%PDF-1.3"), Q(), V(), O(), N("<<"), $(), N(">>"), N("endobj"), O(), N("<<"), _(), N(">>"), N("endobj");
                var a, b = s;
                for (N("xref"), N("0 " + (y + 1)), N("0000000000 65535 f "), a = 1; a <= y; a++) N(M(A[a]) + " 00000 n ");
                return N("trailer"), N("<<"), aa(), N(">>"), N("startxref"), N(b), N("%%EOF"), z = !0, r.join("\n")
            }, fa = function (a) {
                var b = "S";
                return "F" === a ? b = "f" : "FD" !== a && "DF" !== a || (b = "B"), b
            }, ga = function (a, b) {
                var c, d, e, f, g;
                switch (a) {
                    case void 0:
                        return ea();
                    case"save":
                        if (navigator.getUserMedia) {
                            if (void 0 === window.URL) return H.output("dataurlnewwindow");
                            if (void 0 === window.URL.createObjectURL) return H.output("dataurlnewwindow")
                        }
                        for (c = ea(), d = c.length, e = new Uint8Array(new ArrayBuffer(d)), f = 0; f < d; f++) e[f] = c.charCodeAt(f);
                        g = new Blob([e], {type: "application/pdf"}), saveAs(g, b);
                        break;
                    case"datauristring":
                    case"dataurlstring":
                        return "data:application/pdf;base64," + btoa(ea());
                    case"datauri":
                    case"dataurl":
                        document.location.href = "data:application/pdf;base64," + btoa(ea());
                        break;
                    case"dataurlnewwindow":
                        window.open("data:application/pdf;base64," + btoa(ea()));
                        break;
                    default:
                        throw new Error('Output type "' + a + '" is not supported.')
                }
            };
        if ("pt" === e) k = 1; else if ("mm" === e) k = 72 / 25.4; else if ("cm" === e) k = 72 / 2.54; else {
            if ("in" !== e) throw"Invalid unit: " + e;
            k = 72
        }
        if (u.hasOwnProperty(q)) i = u[q][1] / k, j = u[q][0] / k; else try {
            i = f[1], j = f[0]
        } catch (a) {
            throw"Invalid format: " + f
        }
        if ("p" === d || "portrait" === d) d = "p", j > i && (l = j, j = i, i = l); else {
            if ("l" !== d && "landscape" !== d) throw"Invalid orientation: " + d;
            d = "l", i > j && (l = j, j = i, i = l)
        }
        H.internal = {
            pdfEscape: Z,
            getStyle: fa,
            getFont: function () {
                return B[da.apply(H, arguments)]
            },
            getFontSize: function () {
                return D
            },
            btoa: btoa,
            write: function (a, b, c, d) {
                N(1 === arguments.length ? a : Array.prototype.join.call(arguments, " "))
            },
            getCoordinateString: function (a) {
                return J(a * k)
            },
            getVerticalCoordinateString: function (a) {
                return J((i - a) * k)
            },
            collections: {},
            newObject: O,
            putStream: P,
            events: I,
            scaleFactor: k,
            pageSize: {width: j, height: i},
            output: function (a, b) {
                return ga(a, b)
            }
        }, H.addPage = function () {
            return ca(), this
        };
        var ha = ["", "0", "00", "000", "0000"], ia = function (a, b) {
            for (var c, d = ["FEFF"], e = 0, f = a.length; e < f; ++e) c = a.charCodeAt(e).toString(16).toUpperCase(), d.push(ha[4 - c.length], c);
            return d.join("")
        };
        H.text16 = function (a, b, c, d) {
            var e, f, g, j, l, m;
            if ("number" == typeof a && (e = c, f = a, g = b, a = e, b = f, c = g), "string" == typeof a && a.match(/[\n\r]/) && (a = a.split(/\r\n|\r|\n/g)), void 0 === d ? d = {
                    noBOM: !0,
                    autoencode: !0
                } : (void 0 === d.noBOM && (d.noBOM = !0), void 0 === d.autoencode && (d.autoencode = !0)), d.autoencode = !1, "string" == typeof a) l = ia(a); else {
                if (!(a instanceof Array)) throw new Error('Type of text must be string or Array. "' + a + '" is not recognized.');
                for (j = a.concat(), m = j.length - 1; -1 !== m; m--) j[m] = ia(j[m]);
                l = j.join("> Tj\nT* <")
            }
            return N("BT\n/" + h + " " + D + " Tf\n" + D + " TL\n" + v + "\n" + J(b * k) + " " + J((i - c) * k) + " Td\n<" + l + "> Tj\nET"), this
        }, H.text = function (a, b, c, d) {
            var e, f, g, j, l, m;
            if ("number" == typeof a && (e = c, f = a, g = b, a = e, b = f, c = g), "string" == typeof a && a.match(/[\n\r]/) && (a = a.split(/\r\n|\r|\n/g)), void 0 === d ? d = {
                    noBOM: !0,
                    autoencode: !0
                } : (void 0 === d.noBOM && (d.noBOM = !0), void 0 === d.autoencode && (d.autoencode = !0)), "string" == typeof a) l = Z(a, d); else {
                if (!(a instanceof Array)) throw new Error('Type of text must be string or Array. "' + a + '" is not recognized.');
                for (j = a.concat(), m = j.length - 1; -1 !== m; m--) j[m] = Z(j[m], d);
                l = j.join(") Tj\nT* (")
            }
            return N("BT\n/" + h + " " + D + " Tf\n" + D + " TL\n" + v + "\n" + J(b * k) + " " + J((i - c) * k) + " Td\n(" + l + ") Tj\nET"), this
        }, H.line = function (a, b, c, d) {
            return N(J(a * k) + " " + J((i - b) * k) + " m " + J(c * k) + " " + J((i - d) * k) + " l S"), this
        }, H.lines = function (a, b, c, d, e) {
            var f, g, h, j, l, m, n, o, p, q, r, s, t, u;
            for ("number" == typeof a && (f = c, g = a, h = b, a = f, b = g, c = h), e = fa(e), d = void 0 === d ? [1, 1] : d, N(K(b * k) + " " + K((i - c) * k) + " m "), j = d[0], l = d[1], n = a.length, t = b, u = c, m = 0; m < n; m++) o = a[m], 2 === o.length ? (t = o[0] * j + t, u = o[1] * l + u, N(K(t * k) + " " + K((i - u) * k) + " l")) : (p = o[0] * j + t, q = o[1] * l + u, r = o[2] * j + t, s = o[3] * l + u, t = o[4] * j + t, u = o[5] * l + u, N(K(p * k) + " " + K((i - q) * k) + " " + K(r * k) + " " + K((i - s) * k) + " " + K(t * k) + " " + K((i - u) * k) + " c"));
            return N(e), this
        }, H.rect = function (a, b, c, d, e) {
            var f = fa(e);
            return N([J(a * k), J((i - b) * k), J(c * k), J(-d * k), "re", f].join(" ")), this
        }, H.triangle = function (a, b, c, d, e, f, g) {
            return this.lines([[c - a, d - b], [e - c, f - d], [a - e, b - f]], a, b, [1, 1], g), this
        },
            H.roundedRect = function (a, b, c, d, e, f, g) {
                var h = 4 / 3 * (Math.SQRT2 - 1);
                return this.lines([[c - 2 * e, 0], [e * h, 0, e, f - f * h, e, f], [0, d - 2 * f], [0, f * h, -e * h, f, -e, f], [2 * e - c, 0], [-e * h, 0, -e, -f * h, -e, -f], [0, 2 * f - d], [0, -f * h, e * h, -f, e, -f]], a + e, b, [1, 1], g), this
            }, H.ellipse = function (a, b, c, d, e) {
            var f = fa(e), g = 4 / 3 * (Math.SQRT2 - 1) * c, h = 4 / 3 * (Math.SQRT2 - 1) * d;
            return N([J((a + c) * k), J((i - b) * k), "m", J((a + c) * k), J((i - (b - h)) * k), J((a + g) * k), J((i - (b - d)) * k), J(a * k), J((i - (b - d)) * k), "c"].join(" ")), N([J((a - g) * k), J((i - (b - d)) * k), J((a - c) * k), J((i - (b - h)) * k), J((a - c) * k), J((i - b) * k), "c"].join(" ")), N([J((a - c) * k), J((i - (b + h)) * k), J((a - g) * k), J((i - (b + d)) * k), J(a * k), J((i - (b + d)) * k), "c"].join(" ")), N([J((a + g) * k), J((i - (b + d)) * k), J((a + c) * k), J((i - (b + h)) * k), J((a + c) * k), J((i - b) * k), "c", f].join(" ")), this
        }, H.circle = function (a, b, c, d) {
            return this.ellipse(a, b, c, c, d)
        }, H.setProperties = function (a) {
            var b;
            for (b in E) E.hasOwnProperty(b) && a[b] && (E[b] = a[b]);
            return this
        }, H.setFontSize = function (a) {
            return D = a, this
        }, H.setFont = function (a, b) {
            return h = da(a, b), this
        }, H.setFontStyle = H.setFontType = function (a) {
            return h = da(void 0, a), this
        }, H.getFontList = function () {
            var a, b, c, d = {};
            for (a in C) if (C.hasOwnProperty(a)) {
                d[a] = c = [];
                for (b in C[a]) C[a].hasOwnProperty(b) && c.push(b)
            }
            return d
        }, H.setLineWidth = function (a) {
            return N((a * k).toFixed(2) + " w"), this
        }, H.setDrawColor = function (a, b, c, d) {
            var e;
            return e = void 0 === b || void 0 === d && a === b === c ? "string" == typeof a ? a + " G" : J(a / 255) + " G" : void 0 === d ? "string" == typeof a ? [a, b, c, "RG"].join(" ") : [J(a / 255), J(b / 255), J(c / 255), "RG"].join(" ") : "string" == typeof a ? [a, b, c, d, "K"].join(" ") : [J(a), J(b), J(c), J(d), "K"].join(" "), N(e), this
        }, H.setFillColor = function (a, b, c, d) {
            var e;
            return e = void 0 === b || void 0 === d && a === b === c ? "string" == typeof a ? a + " g" : J(a / 255) + " g" : void 0 === d ? "string" == typeof a ? [a, b, c, "rg"].join(" ") : [J(a / 255), J(b / 255), J(c / 255), "rg"].join(" ") : "string" == typeof a ? [a, b, c, d, "k"].join(" ") : [J(a), J(b), J(c), J(d), "k"].join(" "), N(e), this
        }, H.setTextColor = function (a, b, c) {
            return v = 0 === a && 0 === b && 0 === c || void 0 === b ? K(a / 255) + " g" : [K(a / 255), K(b / 255), K(c / 255), "rg"].join(" "), this
        }, H.CapJoinStyles = {
            0: 0,
            butt: 0,
            but: 0,
            bevel: 0,
            1: 1,
            round: 1,
            rounded: 1,
            circle: 1,
            2: 2,
            projecting: 2,
            project: 2,
            square: 2,
            milter: 2
        }, H.setLineCap = function (a) {
            var b = this.CapJoinStyles[a];
            if (void 0 === b) throw new Error("Line cap style of '" + a + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return F = b, N(b.toString(10) + " J"), this
        }, H.setLineJoin = function (a) {
            var b = this.CapJoinStyles[a];
            if (void 0 === b) throw new Error("Line join style of '" + a + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return G = b, N(b.toString(10) + " j"), this
        }, H.output = ga, H.save = function (a) {
            H.output("save", a)
        };
        for (m in a.API) a.API.hasOwnProperty(m) && ("events" === m && a.API.events.length ? function (a, b) {
            var c, d, e;
            for (e = b.length - 1; -1 !== e; e--) c = b[e][0], d = b[e][1], a.subscribe.apply(a, [c].concat("function" == typeof d ? [d] : d))
        }(I, a.API.events) : H[m] = a.API[m]);
        return function () {
            var a, b, c, d,
                e = [["Helvetica", "helvetica", "normal"], ["Helvetica-Bold", "helvetica", "bold"], ["Helvetica-Oblique", "helvetica", "italic"], ["Helvetica-BoldOblique", "helvetica", "bolditalic"], ["Courier", "courier", "normal"], ["Courier-Bold", "courier", "bold"], ["Courier-Oblique", "courier", "italic"], ["Courier-BoldOblique", "courier", "bolditalic"], ["Times-Roman", "times", "normal"], ["Times-Bold", "times", "bold"], ["Times-Italic", "times", "italic"], ["Times-BoldItalic", "times", "bolditalic"]];
            for (a = 0, b = e.length; a < b; a++) {
                c = X(e[a][0], e[a][1], e[a][2], "StandardEncoding"), d = e[a][0].split("-"), W(c, d[0], d[1] || "")
            }
            I.publish("addFonts", {fonts: B, dictionary: C})
        }(), h = "F1", ca(), I.publish("initialized"), H
    }

    "undefined" == typeof btoa && (window.btoa = function (a) {
        var b, c, d, e, f, g, h, i, j, k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            l = k.split(""), m = 0, n = 0, o = "", p = [];
        do {
            b = a.charCodeAt(m++), c = a.charCodeAt(m++), d = a.charCodeAt(m++), i = b << 16 | c << 8 | d, e = i >> 18 & 63, f = i >> 12 & 63, g = i >> 6 & 63, h = 63 & i, p[n++] = l[e] + l[f] + l[g] + l[h]
        } while (m < a.length);
        return o = p.join(""), j = a.length % 3, (j ? o.slice(0, j - 3) : o) + "===".slice(j || 3)
    }), "undefined" == typeof atob && (window.atob = function (a) {
        var b, c, d, e, f, g, h, i, j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", k = 0,
            l = 0, m = [];
        if (!a) return a;
        a += "";
        do {
            e = j.indexOf(a.charAt(k++)), f = j.indexOf(a.charAt(k++)), g = j.indexOf(a.charAt(k++)), h = j.indexOf(a.charAt(k++)), i = e << 18 | f << 12 | g << 6 | h, b = i >> 16 & 255, c = i >> 8 & 255, d = 255 & i, m[l++] = 64 === g ? String.fromCharCode(b) : 64 === h ? String.fromCharCode(b, c) : String.fromCharCode(b, c, d)
        } while (k < a.length);
        return m.join("")
    });
    var b = "function" == typeof Object.keys ? function (a) {
        return Object.keys(a).length
    } : function (a) {
        var b, c = 0;
        for (b in a) a.hasOwnProperty(b) && c++;
        return c
    }, c = function (a) {
        this.topics = {}, this.context = a, this.publish = function (a, b) {
            if (this.topics[a]) {
                var c, d, e, f, g = this.topics[a], h = [], i = function () {
                };
                for (b = Array.prototype.slice.call(arguments, 1), d = 0, e = g.length; d < e; d++) f = g[d], c = f[0], f[1] && (f[0] = i, h.push(d)), c.apply(this.context, b);
                for (d = 0, e = h.length; d < e; d++) g.splice(h[d], 1)
            }
        }, this.subscribe = function (a, b, c) {
            return this.topics[a] ? this.topics[a].push([b, c]) : this.topics[a] = [[b, c]], {topic: a, callback: b}
        }, this.unsubscribe = function (a) {
            if (this.topics[a.topic]) {
                var b, c, d = this.topics[a.topic];
                for (b = 0, c = d.length; b < c; b++) d[b][0] === a.callback && d.splice(b, 1)
            }
        }
    };
    return a.API = {events: []}, a
}();
!function (a) {
    "use strict";
    var b, c, d, e = 0, f = 0, g = {x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0}, h = 1, i = !1,
        j = function (a, b, c, d, e) {
            g = {x: a, y: b, w: c, h: d, ln: e}
        }, k = function () {
            return g
        }, l = function (a) {
            e = a
        }, m = function () {
            return e
        }, n = function (a) {
            f = a
        }, o = function (a) {
            return f
        };
    a.getTextDimensions = function (a) {
        b = this.internal.getFont().fontName, c = this.internal.getFontSize(), d = this.internal.getFont().fontStyle;
        var e, f;
        return f = document.createElement("font"), f.id = "pdfDataExportCell", f.style.fontStyle = d, f.style.fontName = b, f.style.fontSize = c + "pt", f.innerHTML = a, document.body.appendChild(f), e = {
            w: (f.offsetWidth + 1) * (19.049976 / 25.4),
            h: (f.offsetHeight + 1) * (19.049976 / 25.4)
        }, document.body.removeChild(f), e
    }, a.cellAddPage = function () {
        this.addPage(), j(void 0, void 0, void 0, void 0, void 0), i = !0, h += 1, n(1)
    }, a.cellInitialize = function () {
        e = 0, g = {x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0}, h = 1, i = !1, n(0)
    }, a.cell = function (a, b, c, d, e, f) {
        this.lnMod = void 0 === this.lnMod ? 0 : this.lnMod, !0 !== this.printingHeaderRow && 0 !== this.lnMod && (f += this.lnMod), (f * d + b + 2 * d) / h >= this.internal.pageSize.height && 1 === h && !i ? (this.cellAddPage(), this.printHeaders && this.tableHeaderRow && (this.printHeaderRow(f), this.lnMod += 1, f += 1), 0 === m() && l(Math.round((this.internal.pageSize.height - 2 * d) / d))) : i && k().ln !== f && o() === m() && (this.cellAddPage(), this.printHeaders && this.tableHeaderRow && (this.printHeaderRow(f), this.lnMod += 1, f += 1));
        var g = k(), p = (this.getTextDimensions(e), 1);
        return void 0 !== g.x && g.ln === f && (a = g.x + g.w), void 0 !== g.y && g.y === b && (b = g.y), void 0 !== g.h && g.h === d && (d = g.h), void 0 !== g.ln && g.ln === f && (f = g.ln, p = 0), i ? b = d * (o() + p) : b += d * Math.abs(m() * h - f - m()), this.rect(a, b, c, d), /[а-яА-ЯЁё]/.test(e) ? this.text16(e, a + 3, b + d - 3) : this.text(e, a + 3, b + d - 3), n(o() + p), j(a, b, c, d, f), this
    }, a.getKeys = "function" == typeof Object.keys ? function (a) {
        return a ? Object.keys(a) : []
    } : function (a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c
    }, a.arrayMax = function (a, b) {
        var c, d, e, f = a[0];
        for (c = 0, d = a.length; c < d; c += 1) e = a[c], b ? -1 === b(f, e) && (f = e) : e > f && (f = e);
        return f
    }, a.table = function (b, c, d) {
        var e, f, g, h, i, j, k, l, m, n = [], o = [], p = {}, q = {}, r = [], s = [];
        if (this.lnMod = 0, d && (d.autoSize || !1, this.printHeaders = d.printHeaders || !0, d.autoStretch || !0), !b) throw"No data for PDF table";
        if (void 0 === c || null === c) n = this.getKeys(b[0]); else if (c[0] && "string" != typeof c[0]) for (f = 0, g = c.length; f < g; f += 1) e = c[f], n.push(e.name), o.push(e.prompt); else n = c;
        if (d.autoSize) for (m = function (a) {
            return a[e]
        }, f = 0, g = n.length; f < g; f += 1) {
            for (e = n[f], p[e] = b.map(m), r.push(this.getTextDimensions(o[f] || e).w), i = p[e], j = 0, g = i.length; j < g; j += 1) h = i[j], r.push(this.getTextDimensions(h).w);
            q[e] = a.arrayMax(r)
        }
        if (d.printHeaders) {
            for (f = 0, g = n.length; f < g; f += 1) e = n[f], s.push([10, 10, q[e], 25, String(o.length ? o[f] : e)]);
            this.setTableHeaderRow(s), this.printHeaderRow(1)
        }
        for (f = 0, g = b.length; f < g; f += 1) for (k = b[f], j = 0, l = n.length; j < l; j += 1) e = n[j], this.cell(10, 10, q[e], 25, String(k[e]), f + 2);
        return this
    }, a.setTableHeaderRow = function (a) {
        this.tableHeaderRow = a
    }, a.printHeaderRow = function (a) {
        if (!this.tableHeaderRow) throw"Property tableHeaderRow does not exist.";
        var b, c, d, e;
        for (this.printingHeaderRow = !0, d = 0, e = this.tableHeaderRow.length; d < e; d += 1) b = this.tableHeaderRow[d], c = [].concat(b), this.cell.apply(this, c.concat(a));
        this.printingHeaderRow = !1
    }
}(pdfDataExport.API), function (a) {
    "use strict";
    var b = a.getCharWidthsArray = function (a, b) {
        b || (b = {});
        var c, d, e, f = b.widths ? b.widths : this.internal.getFont().metadata.Unicode.widths, g = f.fof ? f.fof : 1,
            h = b.kerning ? b.kerning : this.internal.getFont().metadata.Unicode.kerning, i = h.fof ? h.fof : 1, j = 0,
            k = f[0] || g, l = [];
        for (c = 0, d = a.length; c < d; c++) e = a.charCodeAt(c), l.push((f[e] || k) / g + (h[e] && h[e][j] || 0) / i), j = e;
        return l
    }, c = function (a) {
        for (var b = a.length, c = 0; b;) b--, c += a[b];
        return c
    }, d = (a.getStringUnitWidth = function (a, d) {
        return c(b.call(this, a, d))
    }, function (a, b, c, d) {
        for (var e = [], f = 0, g = a.length, h = 0; f !== g && h + b[f] < c;) h += b[f], f++;
        e.push(a.slice(0, f));
        var i = f;
        for (h = 0; f !== g;) h + b[f] > d && (e.push(a.slice(i, f)), h = 0, i = f), h += b[f], f++;
        return i !== f && e.push(a.slice(i, f)), e
    }), e = function (a, e, f) {
        f || (f = {});
        var g, h, i, j, k, l = b(" ", f)[0], m = a.split(" "), n = [], o = [n], p = f.textIndent || 0, q = 0, r = 0;
        for (i = 0, j = m.length; i < j; i++) if (g = m[i], h = b(g, f), r = c(h), p + q + r > e) {
            if (r > e) {
                for (k = d(g, h, e - (p + q), e), n.push(k.shift()), n = [k.pop()]; k.length;) o.push([k.shift()]);
                r = c(h.slice(g.length - n[0].length))
            } else n = [g];
            o.push(n), p = r, q = l
        } else n.push(g), p += q + r, q = l;
        var s = [];
        for (i = 0, j = o.length; i < j; i++) s.push(o[i].join(" "));
        return s
    };
    a.splitTextToSize = function (a, b, c) {
        c || (c = {});
        var d, f = c.fontSize || this.internal.getFontSize(), g = function (a) {
            var b = {0: 1}, c = {};
            if (a.widths && a.kerning) return {widths: a.widths, kerning: a.kerning};
            var d = this.internal.getFont(a.fontName, a.fontStyle);
            return d.metadata.Unicode ? {
                widths: d.metadata.Unicode.widths || b,
                kerning: d.metadata.Unicode.kerning || c
            } : {widths: b, kerning: c}
        }.call(this, c);
        d = a.match(/[\n\r]/) ? a.split(/\r\n|\r|\n/g) : [a];
        var h = 1 * this.internal.scaleFactor * b / f;
        g.textIndent = c.textIndent ? 1 * c.textIndent * this.internal.scaleFactor / f : 0;
        var i, j, k = [];
        for (i = 0, j = d.length; i < j; i++) k = k.concat(e(d[i], h, g));
        return k
    }
}(pdfDataExport.API), function (a) {
    "use strict";
    var b = function (a) {
        var b, c;
        if (255 === !a.charCodeAt(0) || 216 === !a.charCodeAt(1) || 255 === !a.charCodeAt(2) || 224 === !a.charCodeAt(3) || !a.charCodeAt(6) === "J".charCodeAt(0) || !a.charCodeAt(7) === "F".charCodeAt(0) || !a.charCodeAt(8) === "I".charCodeAt(0) || !a.charCodeAt(9) === "F".charCodeAt(0) || 0 === !a.charCodeAt(10)) throw new Error("getJpegSize requires a binary jpeg file");
        for (var d = 256 * a.charCodeAt(4) + a.charCodeAt(5), e = 4, f = a.length; e < f;) {
            if (e += d, 255 !== a.charCodeAt(e)) throw new Error("getJpegSize could not find the size of the image");
            if (192 === a.charCodeAt(e + 1)) return c = 256 * a.charCodeAt(e + 5) + a.charCodeAt(e + 6), b = 256 * a.charCodeAt(e + 7) + a.charCodeAt(e + 8), [b, c];
            e += 2, d = 256 * a.charCodeAt(e) + a.charCodeAt(e + 1)
        }
    }, c = function (a) {
        var b = this.internal.newObject(), c = this.internal.write, d = this.internal.putStream;
        if (a.n = b, c("<</Type /XObject"), c("/Subtype /Image"), c("/Width " + a.w), c("/Height " + a.h), "Indexed" === a.cs ? c("/ColorSpace [/Indexed /DeviceRGB " + (a.pal.length / 3 - 1) + " " + (b + 1) + " 0 R]") : (c("/ColorSpace /" + a.cs), "DeviceCMYK" === a.cs && c("/Decode [1 0 1 0 1 0 1 0]")), c("/BitsPerComponent " + a.bpc), "f" in a && c("/Filter /" + a.f), "dp" in a && c("/DecodeParms <<" + a.dp + ">>"), "trns" in a && a.trns.constructor == Array) for (var e = "", f = 0; f < a.trns.length; f++) e += a[e][f] + " " + a.trns[f] + " ", c("/Mask [" + e + "]");
        "smask" in a && c("/SMask " + (b + 1) + " 0 R"), c("/Length " + a.data.length + ">>"), d(a.data), c("endobj")
    }, d = function () {
        var a = this.internal.collections.addImage_images;
        for (var b in a) c.call(this, a[b])
    }, e = function () {
        var a, b = this.internal.collections.addImage_images, c = this.internal.write;
        for (var d in b) a = b[d], c("/I" + a.i, a.n, "0", "R")
    };
    a.addImage = function (a, c, f, g, h, i) {
        if ("object" == typeof a && 1 === a.nodeType) {
            var j = document.createElement("canvas");
            j.width = a.clientWidth, j.height = a.clientHeight;
            var k = j.getContext("2d");
            if (!k) throw"addImage requires canvas to be supported by browser.";
            k.drawImage(a, 0, 0, j.width, j.height), a = j.toDataURL("image/jpeg"), c = "JPEG"
        }
        if ("JPEG" !== c.toUpperCase()) throw new Error("addImage currently only supports format 'JPEG', not '" + c + "'");
        var l, m = this.internal.collections.addImage_images, n = this.internal.getCoordinateString,
            o = this.internal.getVerticalCoordinateString;
        "data:image/jpeg;base64," === a.substring(0, 23) && (a = atob(a.replace("data:image/jpeg;base64,", ""))), m ? l = Object.keys ? Object.keys(m).length : function (a) {
            var b = 0;
            for (var c in a) a.hasOwnProperty(c) && b++;
            return b
        }(m) : (l = 0, this.internal.collections.addImage_images = m = {}, this.internal.events.subscribe("putResources", d), this.internal.events.subscribe("putXobjectDict", e));
        var p = b(a), q = {w: p[0], h: p[1], cs: "DeviceRGB", bpc: 8, f: "DCTDecode", i: l, data: a};
        return m[l] = q, h || i || (h = -96, i = -96), h < 0 && (h = -1 * q.w * 72 / h / this.internal.scaleFactor), i < 0 && (i = -1 * q.h * 72 / i / this.internal.scaleFactor), 0 === h && (h = i * q.w / q.h), 0 === i && (i = h * q.h / q.w), this.internal.write("q", n(h), "0 0", n(i), n(f), o(g + i), "cm /I" + q.i, "Do Q"), this
    }
}(pdfDataExport.API), function (a) {
    "use strict";
    var b = function (a) {
        for (var b = {}, c = 0; c < "klmnopqrstuvwxyz".length; c++) b["klmnopqrstuvwxyz"[c]] = "0123456789abcdef"[c];
        var d, e, f, g, h = {}, i = 1, j = h, k = [], l = "", m = "", n = a.length - 1;
        for (c = 1; c != n;) g = a[c], c += 1, "'" == g ? d ? (f = d.join(""), d = void 0) : d = [] : d ? d.push(g) : "{" == g ? (k.push([j, f]), j = {}, f = void 0) : "}" == g ? (e = k.pop(), e[0][e[1]] = j, f = void 0, j = e[0]) : "-" == g ? i = -1 : void 0 === f ? b.hasOwnProperty(g) ? (l += b[g], f = parseInt(l, 16) * i, i = 1, l = "") : l += g : b.hasOwnProperty(g) ? (m += b[g], j[f] = parseInt(m, 16) * i, i = 1, f = void 0, m = "") : m += g;
        return h
    }, c = {
        codePages: ["WinAnsiEncoding"],
        WinAnsiEncoding: b("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
    }, d = {
        Unicode: {
            Courier: c,
            "Courier-Bold": c,
            "Courier-BoldOblique": c,
            "Courier-Oblique": c,
            Helvetica: c,
            "Helvetica-Bold": c,
            "Helvetica-BoldOblique": c,
            "Helvetica-Oblique": c,
            "Times-Roman": c,
            "Times-Bold": c,
            "Times-BoldItalic": c,
            "Times-Italic": c
        }
    }, e = {
        Unicode: {
            "Courier-Oblique": b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-BoldItalic": b("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
            "Helvetica-Bold": b("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
            Courier: b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-BoldOblique": b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Bold": b("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
            Helvetica: b("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
            "Helvetica-BoldOblique": b("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
            "Courier-Bold": b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Italic": b("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
            "Times-Roman": b("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
            "Helvetica-Oblique": b("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
        }
    };
    a.events.push(["addFonts", function (a) {
        var b, c, f, g, h;
        for (c in a.fonts) a.fonts.hasOwnProperty(c) && (b = a.fonts[c], f = e.Unicode[b.PostScriptName], f && (g = b.metadata.Unicode ? b.metadata.Unicode : b.metadata.Unicode = {}, g.widths = f.widths, g.kerning = f.kerning), (h = d.Unicode[b.PostScriptName]) && (g = b.metadata.Unicode ? b.metadata.Unicode : b.metadata.Unicode = {}, g.encoding = h, h.codePages && h.codePages.length && (b.encoding = h.codePages[0])))
    }])
}(pdfDataExport.API);
var saveAs = saveAs || navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator) || function (a) {
    "use strict";
    var b = a.document, c = function () {
        return a.URL || a.webkitURL || a
    }, d = a.URL || a.webkitURL || a, e = $("<a></a>")[0], f = "download" in e, g = function (c) {
        var d = b.createEvent("MouseEvents");
        return d.initMouseEvent("click", !0, !1, a, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), c.dispatchEvent(d)
    }, h = a.webkitRequestFileSystem, i = a.requestFileSystem || h || a.mozRequestFileSystem, j = function (b) {
        (a.setImmediate || a.setTimeout)(function () {
            throw b
        }, 0)
    }, k = 0, l = [], m = function () {
        for (var a = l.length; a--;) {
            var b = l[a];
            "string" == typeof b ? d.revokeObjectURL(b) : b.remove()
        }
        l.length = 0
    }, n = function (a, b, c) {
        b = [].concat(b);
        for (var d = b.length; d--;) {
            var e = a["on" + b[d]];
            if ("function" == typeof e) try {
                e.call(a, c || a)
            } catch (a) {
                j(a)
            }
        }
    }, o = function (b, d) {
        var j, m, o, p = this, q = b.type, r = !1, s = function () {
            var a = c().createObjectURL(b);
            return l.push(a), a
        }, t = function () {
            n(p, "writestart progress write writeend".split(" "))
        }, u = function () {
            !r && j || (j = s()), m && (m.location.href = j), p.readyState = p.DONE, t()
        }, v = function (a) {
            return function () {
                if (p.readyState !== p.DONE) return a.apply(this, arguments)
            }
        }, w = {create: !0, exclusive: !1};
        return p.readyState = p.INIT, d || (d = "download"), f && (j = s(), e.href = j, e.download = d, g(e)) ? (p.readyState = p.DONE, void t()) : (a.chrome && q && "application/octet-stream" !== q && (o = b.slice || b.webkitSlice, b = o.call(b, 0, b.size, "application/octet-stream"), r = !0), h && "download" !== d && (d += ".download"), m = "application/octet-stream" === q || h ? a : a.open(), i ? (k += b.size, void i(a.TEMPORARY, k, v(function (a) {
            a.root.getDirectory("saved", w, v(function (a) {
                var c = function () {
                    a.getFile(d, w, v(function (a) {
                        a.createWriter(v(function (c) {
                            c.onwriteend = function (b) {
                                m.location.href = a.toURL(), l.push(a), p.readyState = p.DONE, n(p, "writeend", b)
                            }, c.onerror = function () {
                                var a = c.error;
                                a.code !== a.ABORT_ERR && u()
                            }, "writestart progress write abort".split(" ").forEach(function (a) {
                                c["on" + a] = p["on" + a]
                            }), c.write(b), p.abort = function () {
                                c.abort(), p.readyState = p.DONE
                            }, p.readyState = p.WRITING
                        }), u)
                    }), u)
                };
                a.getFile(d, {create: !1}, v(function (a) {
                    a.remove(), c()
                }), v(function (a) {
                    a.code === a.NOT_FOUND_ERR ? c() : u()
                }))
            }), u)
        }), u)) : void u())
    }, p = o.prototype, q = function (a, b) {
        return new o(a, b)
    };
    return p.abort = function () {
        var a = this;
        a.readyState = a.DONE, n(a, "abort")
    }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, a.addEventListener && a.addEventListener("unload", m, !1), q
}(self);
!function (a) {
    "use strict";
    a.output = function (a, b) {
        return this.internal.output(a, b)
    }
}(pdfDataExport.API);

