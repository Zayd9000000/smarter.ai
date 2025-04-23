(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5789], {
        77284: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return y
                }
            });
            var r, C, n, c, i = t(94746);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function H() {
                return (H = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function h() {
                return (h = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function V() {
                return (V = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function p() {
                return (p = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function v() {
                return (v = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function m() {
                return (m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            
        },
        97143: function(e, l, t) {
            "use strict";
            var r = t(91219),
                C = t(58975),
                n = t(58279),
                c = t(2265);
            l.default = e => {
                let [l, t] = (0, r.Z)(), [i, o] = (0, C.Z)(), [a, s] = (0, c.useState)(0), [f, u] = (0, c.useState)(0);
                return (0, c.useEffect)(() => {
                    if (e.current) {
                        let l = e.current.getBoundingClientRect(),
                            r = l.top,
                            C = l.height,
                            c = r + t - o;
                        s((0, n.C2)((t - c) / (c + C - c))), u(-r / C)
                    }
                }, [t, e, o]), [a, f]
            }
        },
        58975: function(e, l, t) {
            "use strict";
            var r = t(2265);
            l.Z = () => {
                let [e, l] = (0, r.useState)([1, 1]);
                return (0, r.useLayoutEffect)(() => {
                    let e = () => l([window.innerWidth, window.innerHeight]);
                    return window.addEventListener("resize", e), l([window.innerWidth, window.innerHeight]), () => window.removeEventListener("resize", e)
                }, []), e
            }
        },
        58279: function(e, l, t) {
            "use strict";
            t.d(l, {
                Bu: function() {
                    return C
                },
                C2: function() {
                    return r
                },
                Q9: function() {
                    return n
                },
                rr: function() {
                    return i
                },
                t7: function() {
                    return o
                },
                uZ: function() {
                    return c
                }
            });
            let r = e => parseFloat((+(Math.ceil(+(e + "e3")) + "e-3")).toFixed(3)),
                C = (e, l) => String(e).padStart(l, "0"),
                n = e => e * e * e,
                c = (e, l, t) => Math.min(t, Math.max(e, l)),
                i = e => c(e, 0, 1),
                o = (e, l, t) => e + (l - e) * t
        },
        15789: function(e, l, t) {
            "use strict";
            t.d(l, {
                M: function() {
                    return H
                }
            });
            var r = t(57437),
                C = t(77284),
                n = t(97143),
                c = t(58279),
                i = t(4741),
                o = t.n(i),
                a = t(5570),
                s = t.n(a);
            let f = o().bind(s()),
                u = e => {
                    let {
                        className: l,
                        hasGradient: t,
                        isInset: n,
                        isWhite: c,
                        isPaused: i,
                        style: o,
                        rootRef: a
                    } = e, u = C.Z.map(e => {
                        let [l, t] = e;
                        return (0, r.jsx)(t, {}, l)
                    });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [n && (0, r.jsx)("svg", {
                            className: "visually-hidden",
                            children: (0, r.jsxs)("filter", {
                                id: "logo-inset-shadow",
                                children: [(0, r.jsx)("feComponentTransfer", {
                                    in: "SourceAlpha",
                                    children: (0, r.jsx)("feFuncA", {
                                        type: "table",
                                        tableValues: "1 0"
                                    })
                                }), (0, r.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.5"
                                }), (0, r.jsx)("feOffset", {
                                    dx: "0",
                                    dy: "1",
                                    result: "offsetblur"
                                }), (0, r.jsx)("feFlood", {
                                    floodColor: "rgb(0, 0, 0, 0.35)",
                                    result: "color"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "offsetblur",
                                    operator: "in"
                                }), (0, r.jsx)("feComposite", {
                                    in2: "SourceAlpha",
                                    operator: "in"
                                }), (0, r.jsxs)("feMerge", {
                                    children: [(0, r.jsx)("feMergeNode", {
                                        in: "SourceGraphic"
                                    }), (0, r.jsx)("feMergeNode", {})]
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: f({
                                logoTicker: !0,
                                hasGradient: t,
                                isInset: n,
                                isWhite: c,
                                isPaused: i
                            }, l),
                            ref: a,
                            style: o,
                            children: [(0, r.jsx)("div", {
                                className: s().set1,
                                children: u
                            }), (0, r.jsx)("div", {
                                className: s().set2,
                                children: u
                            })]
                        })]
                    })
                };
            l.Z = u;
            let H = e => {
                let {
                    rootRef: l,
                    amountMultiplier: t,
                    offsetMultiplier: C,
                    ...i
                } = e, [o, a] = (0, n.default)(l), s = (0, c.rr)(o * t);
                return (0, r.jsx)(u, {
                    rootRef: l,
                    style: {
                        marginLeft: "-".concat(1e3 * s * C, "px")
                    },
                    ...i
                })
            }
        },
        5570: function(e) {
            e.exports = {
                logoTicker: "styles_logoTicker__NolVK",
                hasGradient: "styles_hasGradient__2b1uF",
                isInset: "styles_isInset__OGE9X",
                isWhite: "styles_isWhite__H0nk_",
                set1: "styles_set1__TIC_X",
                set2: "styles_set2__gReAu",
                "animate-1": "styles_animate-1__yiMYT",
                "animate-2": "styles_animate-2__h_tKz",
                isPaused: "styles_isPaused__qBOe1",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__7jCvD"
            }
        }
    }
]);