(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7453], {
        81970: function(e, l, s) {
            "use strict";
            s.d(l, {
                p: function() {
                    return i
                },
                z: function() {
                    return r
                }
            });
            var t = s(98807),
                n = s(64014);
            let r = new Date().getFullYear(),
                i = function(e) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "MMMM d, yyyy";
                    return (0, n.WU)(new t.e(e), l)
                }
        },
        91219: function(e, l, s) {
            "use strict";
            var t = s(2265);
            l.Z = () => {
                let [e, l] = (0, t.useState)([0, 0]);
                return (0, t.useLayoutEffect)(() => {
                    let e = () => l([window.scrollX, window.scrollY]);
                    return l([window.scrollX, window.scrollY]), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, []), e
            }
        },
        56724: function(e, l, s) {
            "use strict";
            s.d(l, {
                A: function() {
                    return n
                },
                H: function() {
                    return r
                }
            });
            var t = s(57437);
            let n = e => {
                    let {
                        noSpace: l
                    } = e;
                    return (0, t.jsxs)("span", {
                        translate: "no",
                        children: [!l && " ", "Whimsical", !l && " "]
                    })
                },
                r = e => {
                    let {
                        noSpace: l
                    } = e;
                    return (0, t.jsxs)("span", {
                        translate: "no",
                        children: [!l && " ", "Whimsical AI", !l && " "]
                    })
                }
        },
        17453: function(e, l, s) {
            "use strict";
            s.d(l, {
                default: function() {
                    return Y
                }
            });
            var t, n, r, i, a, c, d, o, h, p = s(57437),
                u = s(34589),
                _ = s(94746);

            function x() {
                return (x = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var s = arguments[l];
                        for (var t in s)({}).hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(null, arguments)
            }
            var f = function(e) {
                return _.createElement("svg", x({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), t || (t = _.createElement("g", {
                    clipPath: "url(#clip0_266_21838)"
                }, _.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 9.83821C9.50208 8.80473 8.14547 6.87887 6.88442 5.92891C5.97452 5.24365 4.5 4.71324 4.5 6.40071C4.5 6.73759 4.6925 9.23184 4.80559 9.63677C5.19816 11.0444 6.62902 11.4035 7.90175 11.1862C5.677 11.5661 5.11119 12.8242 6.33339 14.0823C8.65456 16.4719 9.66966 13.4828 9.92953 12.7169C9.97766 12.5755 10 12.5098 10 12.5679C10 12.5098 10.0223 12.5755 10.0705 12.7169C10.3303 13.4828 11.3454 16.4719 13.6666 14.0823C14.8888 12.8242 14.323 11.5661 12.0983 11.1862C13.371 11.4035 14.8018 11.0444 15.1944 9.63677C15.3075 9.23184 15.5 6.73759 15.5 6.40071C15.5 4.71324 14.0257 5.24365 13.1156 5.92891C11.8545 6.87887 10.4979 8.80473 10 9.83821Z",
                    fill: "currentColor"
                }))), n || (n = _.createElement("defs", null, _.createElement("clipPath", {
                    id: "clip0_266_21838"
                }, _.createElement("rect", {
                    width: 18,
                    height: 18,
                    fill: "white",
                    transform: "translate(1 1)"
                })))))
            };

            function j() {
                return (j = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var s = arguments[l];
                        for (var t in s)({}).hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(null, arguments)
            }
            var m = function(e) {
                return _.createElement("svg", j({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = _.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25ZM7.8866 6.0575C7.8866 6.64159 7.38032 7.11509 6.7558 7.11509C6.13128 7.11509 5.625 6.64159 5.625 6.0575C5.625 5.47341 6.13128 4.99991 6.7558 4.99991C7.38032 4.99991 7.8866 5.47341 7.8866 6.0575ZM5.77964 7.89247H7.71263V13.7499H5.77964V7.89247ZM8.89175 7.89247H10.8247V8.64397C11.1492 8.2312 11.7721 7.77496 12.7771 7.77496C14.4693 7.77496 14.9836 8.68452 15 10.6585V13.7499H13.067C13.067 13.3679 13.0644 12.9839 13.0617 12.5999V12.5999V12.5998C13.0579 12.0553 13.0542 11.5109 13.058 10.9731C13.063 10.2715 13.0694 9.36587 12.0039 9.36587C11.061 9.36587 10.8247 10.0609 10.8247 10.7529V13.7499H8.89175V7.89247Z",
                    fill: "currentColor"
                })))
            };

            function w() {
                return (w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var s = arguments[l];
                        for (var t in s)({}).hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(null, arguments)
            }
            var v = function(e) {
                return _.createElement("svg", w({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), i || (i = _.createElement("g", {
                    clipPath: "url(#clip0_350_4556)"
                }, _.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.5373 8.45527C13.8653 8.20278 14.2759 8.05247 14.7217 8.05247V8.05377C15.796 8.05377 16.6667 8.92444 16.6667 9.99878C16.6667 10.7738 16.2125 11.4434 15.5559 11.7557C15.4947 14.0157 13.0311 15.8338 10.0046 15.8338C6.97804 15.8338 4.51765 14.0177 4.45323 11.7596C3.79144 11.4492 3.33333 10.7777 3.33333 9.99813C3.33333 8.92379 4.204 8.05312 5.27835 8.05312C5.72605 8.05312 6.1386 8.20474 6.46722 8.45917C7.3522 7.91061 8.46689 7.56312 9.68765 7.51172V7.50456C9.68765 6.35082 10.5642 5.39881 11.6867 5.27843C11.8168 4.64658 12.3758 4.17155 13.046 4.17155C13.8126 4.17155 14.434 4.79299 14.434 5.55954C14.434 6.3261 13.8126 6.94754 13.046 6.94754C12.3895 6.94754 11.8396 6.49138 11.6951 5.87905C10.8987 5.99162 10.2844 6.67749 10.2844 7.50391V7.50911C11.5175 7.55531 12.6445 7.9028 13.5373 8.45527Z",
                    fill: "currentColor"
                }))), a || (a = _.createElement("defs", null, _.createElement("clipPath", {
                    id: "clip0_350_4556"
                }, _.createElement("rect", {
                    width: 20,
                    height: 20,
                    fill: "currentColor"
                })))))
            };

            function g() {
                return (g = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var s = arguments[l];
                        for (var t in s)({}).hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(null, arguments)
            }
            var C = function(e) {
                return _.createElement("svg", g({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), c || (c = _.createElement("g", {
                    clipPath: "url(#clip0_1252_944)"
                }, _.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM14.2067 5.5L10.8562 9.31089L14.5 14.5H11.82L9.36617 11.0057L6.294 14.5H5.5L9.01369 10.5037L5.5 5.5H8.17995L10.5035 8.80894L13.4127 5.5H14.2067ZM9.41273 10.0495L9.76874 10.5478L12.1936 13.9418H13.4131L10.4416 9.78274L10.0856 9.28448L7.79961 6.08487H6.58009L9.41273 10.0495Z",
                    fill: "currentColor"
                }))), d || (d = _.createElement("defs", null, _.createElement("clipPath", {
                    id: "clip0_1252_944"
                }, _.createElement("rect", {
                    width: 18,
                    height: 18,
                    fill: "white",
                    transform: "translate(1 1)"
                })))))
            };

            function y() {
                return (y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var s = arguments[l];
                        for (var t in s)({}).hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(null, arguments)
            }
            var k = function(e) {
                    return _.createElement("svg", y({
                        width: 20,
                        height: 20,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), o || (o = _.createElement("g", {
                        clipPath: "url(#clip0_266_21833)"
                    }, _.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM8.97727 8.49041V11.4641L11.5909 9.97734L8.97727 8.49041ZM13.9069 6.66489C14.3372 6.78062 14.676 7.12165 14.791 7.55472C15 8.33962 15 9.97727 15 9.97727C15 9.97727 15 11.6149 14.791 12.3998C14.676 12.8329 14.3372 13.1739 13.9069 13.2897C13.1271 13.5 10 13.5 10 13.5C10 13.5 6.87291 13.5 6.09306 13.2897C5.66282 13.1739 5.32395 12.8329 5.20896 12.3998C5 11.6149 5 9.97727 5 9.97727C5 9.97727 5 8.33962 5.20896 7.55472C5.32395 7.12165 5.66282 6.78062 6.09306 6.66489C6.87291 6.45455 10 6.45455C13.1271 6.45455 13.9069 6.66489Z",
                        fill: "currentColor"
                    }))), h || (h = _.createElement("defs", null, _.createElement("clipPath", {
                        id: "clip0_266_21833"
                    }, _.createElement("rect", {
                        width: 18,
                        height: 18,
                        fill: "white",
                        transform: "translate(1 1)"
                    })))))
                },
                b = s(81970),
                N = s(56724),
                L = s(4741),
                E = s.n(L),
                B = s(33145),
                H = s(27648),
                M = s(91219),
                D = s(98479),
                P = s(17230),
                Z = s(2265),
                T = s(6223),
                R = s.n(T);
            let O = E().bind(R()),
                G = [{
                    id: "Design",
                    color: "var(--purple-400)",
                    relativeXY: [.62, .72],
                    parallaxMultiplier: 1
                }, {
                    id: "Engineering",
                    color: "var(--pink-500)",
                    relativeXY: [.1, .8],
                    parallaxMultiplier: 4
                }, {
                    id: "Marketing",
                    color: "var(--blue-400)",
                    relativeXY: [.48, .085],
                    parallaxMultiplier: 7
                }],
                I = e => {
                    let {
                        color: l
                    } = e;
                    return (0, p.jsx)("svg", {
                        className: R().pointerIcon,
                        width: "26",
                        height: "28",
                        viewBox: "0 0 26 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, p.jsx)("path", {
                            d: "M1.02811 3.32583L4.72023 25.3327C5.01593 27.0952 7.2925 27.5993 8.32556 26.1682L14.1112 18.1534C14.1114 18.1533 14.1122 18.1527 14.1138 18.1522L23.5976 15.1786C25.2994 14.6451 25.5093 12.3228 23.9154 11.5032L3.92555 1.22474C2.47814 0.480499 0.752661 1.68403 1.02811 3.32583Z",
                            fill: l,
                            stroke: "white",
                            strokeWidth: 2
                        })
                    })
                },
                V = e => {
                    let {
                        index: l,
                        pointer: s,
                        scrollOffsetAmount: t,
                        containerDimensions: n
                    } = e, [r, i] = (0, Z.useState)(!1), {
                        id: a,
                        color: c,
                        relativeXY: d,
                        parallaxMultiplier: o
                    } = s, {
                        height: h,
                        width: u
                    } = n, _ = d[0] * u, x = d[1] * h;
                    x += -1 * (30 * o * t - 15 * o);
                    let f = "translate(".concat(_, "px, ").concat(x, "px)");
                    return (0, p.jsx)("div", {
                        className: O(R().pointer, {
                            hasRendered: r
                        }),
                        style: {
                            transform: f
                        },
                        children: (0, p.jsxs)("div", {
                            className: R().pointerPadder,
                            children: [(0, p.jsx)(I, {
                                color: c
                            }), (0, p.jsx)("div", {
                                className: R().pointerText,
                                style: {
                                    background: c
                                },
                                children: a
                            })]
                        })
                    })
                };
            var W = e => {
                    let {
                        isInverted: l
                    } = e, [s, t] = (0, M.Z)(), [{
                        fromWindowTop: n,
                        height: r,
                        width: i
                    }, a] = (0, Z.useState)({
                        fromWindowTop: 0,
                        width: 0,
                        height: 0
                    }), c = (0, Z.useRef)(null), d = () => {
                        if (c.current) {
                            let {
                                top: e,
                                height: l,
                                width: s
                            } = c.current.getBoundingClientRect();
                            a({
                                fromWindowTop: e,
                                height: l,
                                width: s
                            })
                        }
                    };
                    (0, Z.useEffect)(d, [c, t]), (0, P.Z)(c, d);
                    let o = 1 - (n + r / 2) / window.innerHeight;
                    return (0, p.jsxs)("div", {
                        className: O({
                            callout: !0,
                            isInverted: l
                        }),
                        ref: c,
                        children: [(0, p.jsx)("div", {
                            className: R().pointers,
                            children: c.current && G.map((e, l) => (0, p.jsx)(V, {
                                containerRef: c,
                                index: l,
                                pointer: e,
                                scrollOffsetAmount: o,
                                containerDimensions: {
                                    fromWindowTop: n,
                                    height: r,
                                    width: i
                                }
                            }, e.id))
                        }), (0, p.jsxs)("div", {
                            className: R().calloutContent,
                            children: [(0, p.jsx)("h2", {
                                className: R().calloutHd,
                                children: "It's time to interview differently."
                            }), (0, p.jsx)(D.default, {
                                tag: "a",
                                href: "/signup",
                                isDark: l,
                                children: "Get started free"
                            })]
                        })]
                    })
                },
                A = {
                    src: "/_next/static/media/logo.c1e57e2d.svg",
                    height: 30,
                    width: 150,
                    blurWidth: 0,
                    blurHeight: 0
                },
                S = s(6411),
                X = s.n(S);
            let z = E().bind(X());
            var Y = e => {
                let {
                    bgKey: l,
                    includeCallout: s,
                    isCalloutInverted: t,
                    isBgDarkened: n,
                    noPadTop: r
                } = e;
                return (0, p.jsx)("footer", {
                    className: z({
                        footer: !0,
                        noPadTop: r
                    }),
                    children: (0, p.jsxs)("div", {
                        className: z({
                            wrapper: !0,
                            includeCallout: s,
                            isBgDarkened: n
                        }),
                        style: {
                            backgroundImage: "url('/_next/static/media/fluid.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            backdropFilter: "blur(100px)",
                            WebkitBackdropFilter: "blur(100px)",
                        },
                        children: [(0, p.jsxs)("div", {
                            className: X().ctaSection,
                            children: [(0, p.jsx)("h2", {
                                className: R().calloutHd,
                                children: "Experience Adam. Rethink Hiring."
                            }), (0, p.jsx)(D.default, {
                                tag: "a",
                                href: "/contact.html",
                                isDark: t,
                                children: "Request a Demo"
                            })]
                        }), (0, p.jsxs)("div", {
                            className: X().content,
                            children: [(0, p.jsx)("div", {
                                className: X().contentHeader,
                                children: (0, p.jsxs)("div", {
                                    className: X().aboutSection,
                                    children: [(0, p.jsx)("h3", {
                                        children: "About Us"
                                    }), (0, p.jsxs)("p", {
                                        children: ["We're an AI company reimagining enterprise work. We build AI employees trained on data from elite practitioners – giving you real team members that think, act, and deliver like superstar team players. Our team brings deep expertise in consulting, strategy, AI and workforce innovation."]
                                    })]
                                })
                            }), (0, p.jsxs)("div", {
                                className: X().contentFooter,
                                children: [(0, p.jsxs)("div", {
                                    className: X().termsLinks,
                                    children: [(0, p.jsx)(H.default, {
                                        href: "/privacy",
                                        children: "Privacy"
                                    }), (0, p.jsx)(H.default, {
                                        href: "/terms",
                                        children: "Terms"
                                    })]
                                }), (0, p.jsxs)("div", {
                                    className: X().socialAndCopyright,
                                    children: [(0, p.jsx)("p", {
                                        children: "© Smarter.ai 2025. All rights reserved."
                                    }), (0, p.jsx)("p", {
                                        children: "Email: info@smarter.ai"
                                    }), (0, p.jsxs)("ul", {
                                        className: X().socialLinks,
                                        children: [(0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://www.linkedin.com/company/smarter-ai",
                                                target: "_blank",
                                                children: (0, p.jsx)(m, {})
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://x.com/smarter-ai",
                                                target: "_blank",
                                                children: (0, p.jsx)(C, {})
                                            })
                                        }), (0, p.jsx)("li", {
                                            children: (0, p.jsx)("a", {
                                                href: "https://www.youtube.com/@smarter-ai",
                                                target: "_blank",
                                                children: (0, p.jsx)(k, {})
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        98479: function(e, l, s) {
            "use strict";
            s.r(l);
            var t = s(57437),
                n = s(61362),
                r = s(4741),
                i = s.n(r),
                a = s(33145),
                c = s(24984),
                d = s.n(c);
            let o = i().bind(d());
            l.default = e => {
                let {
                    className: l,
                    children: s,
                    iconSrc: r,
                    isDark: i,
                    gradient: c = !1,
                    accent: h = null,
                    down: p = !1,
                    up: u = !1,
                    tag: _ = "button",
                    ...x
                } = e;
                return (0, t.jsx)("div", {
                    className: o(d().wrapper, l),
                    children: (0, t.jsxs)(_, {
                        className: o(d().primaryBtn, d()[h], {
                            [d().gradient]: c,
                            [d().isDark]: i
                        }),
                        ...x,
                        children: [(0, t.jsx)("div", {
                            className: d().btnContent,
                            children: s
                        }), (0, t.jsx)("div", {
                            className: o({
                                iconWrapper: !0,
                                down: p,
                                up: u
                            }),
                            children: r ? (0, t.jsx)(a.default, {
                                className: d().icon,
                                src: r,
                                alt: ""
                            }) : (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    className: o(d().arrow, d().first),
                                    children: (0, t.jsx)(n.Z, {})
                                }), (0, t.jsx)("span", {
                                    className: o(d().arrow, d().last),
                                    children: (0, t.jsx)(n.Z, {})
                                })]
                            })
                        })]
                    })
                })
            }
        },
        6223: function(e) {
            e.exports = {
                callout: "styles_callout__x6_ga",
                calloutContent: "styles_calloutContent__7T4vS",
                calloutHd: "styles_calloutHd__umTux",
                isInverted: "styles_isInverted__KsHs_",
                pointers: "styles_pointers__Xv_la",
                pointer: "styles_pointer__Lrr2A",
                hasRendered: "styles_hasRendered__fpM20",
                pointerPadder: "styles_pointerPadder__q9Gt_",
                pointerText: "styles_pointerText__z5wEf",
                pointerIcon: "styles_pointerIcon__7dp98",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__Mqt6p"
            }
        },
        6411: function(e) {
            e.exports = {
                footer: "styles_footer__VhI4k",
                noPadTop: "styles_noPadTop__ze1Xx",
                wrapper: "styles_wrapper__5wI5z",
                includeCallout: "styles_includeCallout__kAoex",
                isBgDarkened: "styles_isBgDarkened__AkxU3",
                content: "styles_content__Zkrjr",
                contentHeader: "styles_contentHeader__7p4Di",
                logoLink: "styles_logoLink__tBKWa",
                downloadBtn: "styles_downloadBtn__oFCpR",
                "bounce-up-and-down": "styles_bounce-up-and-down__JsvCd",
                downloadBtnTooltip: "styles_downloadBtnTooltip__npYfx",
                downloadBtnTooltipTip: "styles_downloadBtnTooltipTip__05mB7",
                contentBody: "styles_contentBody__0E07J",
                linkGroup: "styles_linkGroup__hCbx5",
                linkGroupHd: "styles_linkGroupHd__ViBni",
                contentFooter: "styles_contentFooter__RAh77",
                termsLinks: "styles_termsLinks__EZ462",
                termsLinksDivider: "styles_termsLinksDivider__7CwsN",
                socialAndCopyright: "styles_socialAndCopyright___w2vN",
                socialLinks: "styles_socialLinks__AypGr",
                copyright: "styles_copyright__SJtSn",
                copyrightDivider: "styles_copyrightDivider__HMGZW",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__kJmBa"
            }
        },
        24984: function(e) {
            e.exports = {
                wrapper: "styles_wrapper__TwzZk",
                primaryBtn: "styles_primaryBtn__6yxCh",
                btnContent: "styles_btnContent__9IKRH",
                iconWrapper: "styles_iconWrapper__075uX",
                up: "styles_up__jJQuI",
                down: "styles_down__FLg7U",
                icon: "styles_icon__5FE82",
                arrow: "styles_arrow__ULqDf",
                last: "styles_last__e9DXz",
                first: "styles_first__qs3BI",
                isDark: "styles_isDark__970Ba",
                gradient: "styles_gradient__KqNIX",
                purple: "styles_purple__zDh5I",
                blue: "styles_blue__KvaXB",
                teal: "styles_teal__SVzO0",
                pink: "styles_pink__tHPNQ",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__WYwY7"
            }
        }
    }
]);