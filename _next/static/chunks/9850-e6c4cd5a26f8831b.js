(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9850], {
        54999: function(e, t, a) {
            "use strict";
            var s = a(57437);
            t.Z = e => {
                let {
                    charWiseContentArray: t,
                    currentAmount: a,
                    amountStart: i,
                    amountEnd: n,
                    ImgComponent: A
                } = e, l = Math.max(0, a - i) / (n - i) * t.length;
                return (0, s.jsx)(s.Fragment, {
                    children: t.map((e, t) => {
                        let a = t < l;
                        return "string" == typeof e ? (0, s.jsx)("span", {
                            "data-active": a,
                            children: e
                        }, t) : A ? (0, s.jsx)(A, {
                            ...e,
                            isVisible: a
                        }, t) : void 0
                    })
                })
            }
        },
        24764: function(e, t, a) {
            "use strict";
            var s = a(57437),
                i = a(4741),
                n = a.n(i),
                A = a(76849),
                l = a.n(A);
            let r = n().bind(l());
            t.Z = e => {
                let {
                    children: t,
                    className: a,
                    inline: i,
                    tag: n = "button",
                    theme: A,
                    invert: d,
                    ...c
                } = e;
                return (0, s.jsx)(n, {
                    "data-theme": A,
                    className: r(l().secondaryBtn, a, {
                        inline: i,
                        invert: d
                    }),
                    ...c,
                    children: (0, s.jsx)("span", {
                        className: l().inner,
                        children: t
                    })
                })
            }
        },
        36976: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return b
                }
            });
            var s = a(57437),
                i = a(52779),
                n = a(92871),
                A = a(70354),
                l = a(31633),
                r = a(97143),
                d = a(58975),
                c = a(4741),
                o = a.n(c),
                m = a(33145),
                h = a(2265),
                g = a(25074),
                u = a.n(g);
            let _ = o().bind(u()),
                f = [{
                    Icon: l.Z,
                    title: "Asynchronous Interviews",
                    description: "AI-interviews for the entire first round.",
                    image: {
                        src: "_next/static/media/int.png",
                        height: 1230,
                        width: 2160,
                        blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAkA4JZQCdAEO/gLsAP78ifkPQHgIAhGTveQdUWxP+AAAAA==",
                        blurWidth: 8,
                        blurHeight: 5
                    },
                    theme: "mint"
                }, {
                    Icon: i.Z,
                    title: "Applicant Sorting",
                    description: "Automatic screening, scoring, and ranking.",
                    image: {
                        src: "_next/static/media/sorting.png",
                        height: 1230,
                        width: 2160,
                        blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAUAAkA4JagCdDXAAUO7kagA/vm0wDc+M5YJzwNixK5LA3bD4ToOutH6Lqe2q+oJ82j9/+rTDQvoA/k7kAAA",
                        blurWidth: 8,
                        blurHeight: 5
                    },
                    theme: "purple"
                }, {
                    Icon: n.Z,
                    title: "Personalized Dashboard",
                    description: "Complete oversight at your fingertips.",
                    image: {
                        src: "_next/static/media/Dashboard.png",
                        height: 1230,
                        width: 2160,
                        blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAABQAQCdASoIAAUAAkA4JZwABDOAAP76dyihRe0QTJOczveGws0dpZgA",
                        blurWidth: 8,
                        blurHeight: 5
                    },
                    theme: "teal"
                }, {
                    Icon: A.Z,
                    title: "Analysis and Consulting",
                    description: "Provides clear, guided analysis for every candidate",
                    image: {
                        src: "_next/static/media/interview.png",
                        height: 1230,
                        width: 2160,
                        blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoIAAUAAkA4JZQCdAEO/EhAAP78JTgZbDmKL+0dO95CCwDwrrf6wAAA",
                        blurWidth: 8,
                        blurHeight: 5
                    },
                    theme: "pink"
                }];
            var b = e => {
                let {
                    slides: t,
                    isOnLightBg: a,
                    navIsPadded: i
                } = e, n = (0, h.useRef)(null), [A, l] = (0, r.default)(n), c = t || f, [o, g] = (0, d.Z)(), b = (0, h.useRef)(null), [v, p] = (0, h.useState)([]);
                (0, h.useEffect)(() => {
                    p(e => Array(c.length).fill().map((t, a) => e[a] || (0, h.createRef)()))
                }, [c.length]);
                let [x, I] = (0, h.useState)(0), [w, y] = (0, h.useState)(!0), [C, j] = (0, h.useState)(!1), [R, k] = (0, h.useState)(null), S = () => {
                    clearTimeout(R), y(!1), k(null)
                }, U = (0, h.useCallback)(e => {
                    I(e);
                    let t = b.current.getBoundingClientRect(),
                        a = v[e].current,
                        s = a.getBoundingClientRect(),
                        i = t.left + t.width,
                        n = s.left + s.width,
                        A = t.left,
                        l = s.left,
                        r = !(t.bottom < 0 || t.top - g >= 0);
                    !(l >= A && n <= i) && r && a.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "nearest"
                    })
                }, [v, g]);
                return (0, h.useEffect)(() => {
                    if (w && v.length > 0) {
                        j(!0);
                        let e = (x + 1) % c.length;
                        k(setTimeout(() => U(e), 6e3))
                    }
                }, [x, w, v, U, c.length]), (0, h.useEffect)(() => {
                    !w && l > 1.1 && y(!0)
                }, [w, l]), (0, s.jsxs)("div", {
                    className: _({
                        root: !0,
                        isOnLightBg: a
                    }),
                    ref: n,
                    style: {
                        "--auto-advance-delay": "".concat(6e3, "ms")
                    },
                    children: [(0, s.jsx)("div", {
                        className: _({
                            nav: !0,
                            isPadded: i
                        }),
                        children: (0, s.jsxs)("div", {
                            className: u().navScrollableArea,
                            ref: b,
                            children: [(0, s.jsx)("div", {
                                className: u().navLeftSpacer
                            }), (0, s.jsx)("ol", {
                                className: u().navItems,
                                children: c.map((e, t) => {
                                    let {
                                        title: a,
                                        Icon: i,
                                        description: n,
                                        theme: A
                                    } = e, l = x === t;
                                    return (0, s.jsx)("li", {
                                        ref: v[t],
                                        children: (0, s.jsxs)("button", {
                                            className: _({
                                                navItemBtn: !0,
                                                isActive: l
                                            }),
                                            onClick: () => {
                                                S(), U(t)
                                            },
                                            children: [(0, s.jsxs)("span", {
                                                className: u().navItemHd,
                                                children: [(0, s.jsx)(i, {}), a]
                                            }), (0, s.jsx)("span", {
                                                className: u().navItemDescription,
                                                children: n
                                            }), (0, s.jsx)("span", {
                                                className: u().navItemSeenBar,
                                                children: (0, s.jsx)("span", {
                                                    className: _({
                                                        navItemSeenBarInner: !0,
                                                        isVisible: l && w && C
                                                    }),
                                                    "data-theme": A
                                                })
                                            })]
                                        })
                                    }, a)
                                })
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: u().framePadder,
                        children: (0, s.jsx)("div", {
                            className: u().frameInnerPadder,
                            children: (0, s.jsx)("div", {
                                className: u().frame,
                                children: (0, s.jsx)("ol", {
                                    className: u().frameSlides,
                                    children: c.map((e, t) => {
                                        let {
                                            title: a,
                                            image: i
                                        } = e;
                                        return (0, s.jsx)("li", {
                                            className: _({
                                                isVisible: x === t
                                            }),
                                            children: (0, s.jsx)(m.default, {
                                                src: i,
                                                alt: "",
                                                width: 1068,
                                                height: 608
                                            })
                                        }, a)
                                    })
                                })
                            })
                        })
                    })]
                })
            }
        },
        57377: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return I
                }
            });
            var s = a(57437),
                i = a(97143),
                n = a(58975),
                A = a(54999),
                l = a(17230),
                r = a(4741),
                d = a.n(r),
                c = a(33145),
                o = a(27648),
                m = a(2265),
                h = a(6702),
                g = a.n(h);
            let u = d().bind(g()),
                _ =


                [],
                f = [{
                    className: g().isLogo,
                    img: {
                        src: "/_next/static/media/macos-icon@2x.2fd60649.webp",
                        height: 128,
                        width: 128,
                        blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwAgCdASoIAAgAAkA4JbACdAYoBkxIQT4PQAD+8I+LyU6GoTAx9RzPkbfuHrv8PZ7fAp8Sj4eZpL3vv2+/eWenpFcivjLKjtdIuev1ctYMf8m/4J0dom8GRc5Ri3J45scLGyQfrAwAAA==",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    size: 64
                }],
                b = e => e.flatMap(e => "string" == typeof e ? e.split("") : [e]),
                v = b(_),
                p = b(f),
                x = e => {
                    let {
                        img: t,
                        size: a,
                        className: i,
                        isVisible: n
                    } = e, A = a || 100;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("span", {
                            className: u(g().imgContainer, i, {
                                isVisible: n
                            }),
                            children: (0, s.jsx)(c.default, {
                                src: t.src,
                                width: A,
                                height: A,
                                alt: ""
                            })
                        })
                    })
                };
            var I = () => {
                let [e, t] = (0, n.Z)(), a = (0, m.useRef)(null), r = (0, m.useRef)(null), [d, c] = (0, m.useState)(0), [h, _] = (0, m.useState)(!1);
                (0, l.Z)(r, () => {
                    c(r.current.getBoundingClientRect().height)
                }), (0, m.useEffect)(() => {
                    _(d <= t)
                }, [d, t, e]);
                let [f, b] = (0, i.default)(a), I = h ? Math.min(1, 1.5 * Math.max(0, Math.min(f, 1)) - .25) : 1;
                return (0, s.jsx)("div", {
                    translate: "no",
                    className: u({
                        root: !0,
                        isAnimated: h
                    }),
                    ref: a,
                    children: (0, s.jsx)("div", {
                        className: g().inner,
                        ref: r,
                        children: (0, s.jsxs)("div", {
                            className: g().textContainer,
                            children: [(0, s.jsx)("p", {
                                children: (0, s.jsx)(A.Z, {
                                    charWiseContentArray: v,
                                    currentAmount: I,
                                    amountStart: 0,
                                    amountEnd: .8,
                                    ImgComponent: x
                                })
                            }), (0, s.jsx)(o.default, {
                                href: "/whimsical-way",
                                children: (0, s.jsx)(A.Z, {
                                    charWiseContentArray: p,
                                    currentAmount: I,
                                    amountStart: .8,
                                    amountEnd: 1,
                                    ImgComponent: x
                                })
                            })]
                        })
                    })
                })
            }
        },
        76849: function(e) {
            e.exports = {
                secondaryBtn: "styles_secondaryBtn__pfK4r",
                inline: "styles_inline__Z1i2Q",
                inner: "styles_inner__9YgD4",
                invert: "styles_invert__8kmnp",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__Ga8gW"
            }
        },
        25074: function(e) {
            e.exports = {
                root: "styles_root__ZNimv",
                navScrollableArea: "styles_navScrollableArea__kTs58",
                navLeftSpacer: "styles_navLeftSpacer__H_tLs",
                navItems: "styles_navItems__7mrx8",
                nav: "styles_nav__V9MAM",
                isPadded: "styles_isPadded__7s65z",
                navItemBtn: "styles_navItemBtn__Rz6vg",
                isOnLightBg: "styles_isOnLightBg__yLQGY",
                isActive: "styles_isActive__KeaVJ",
                navItemHd: "styles_navItemHd__pUtIe",
                navItemDescription: "styles_navItemDescription__ql9Xg",
                navItemSeenBar: "styles_navItemSeenBar__hqNzv",
                navItemSeenBarInner: "styles_navItemSeenBarInner__pRfQj",
                isVisible: "styles_isVisible__5wIUJ",
                "fill-up": "styles_fill-up__rWJIg",
                framePadder: "styles_framePadder__ci_He",
                frameInnerPadder: "styles_frameInnerPadder__7WLkQ",
                frame: "styles_frame__y6lRZ",
                frameSlides: "styles_frameSlides__KUQ7N",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__K5xPt"
            }
        },
        6702: function(e) {
            e.exports = {
                root: "styles_root__wnIar",
                isAnimated: "styles_isAnimated__VI_zD",
                inner: "styles_inner__suYcB",
                textContainer: "styles_textContainer__ym5D9",
                imgContainer: "styles_imgContainer__UUHOS",
                isVisible: "styles_isVisible__CwzKq",
                isTiltedRight: "styles_isTiltedRight__aCpMC",
                isTiltedLeft: "styles_isTiltedLeft__tlRgP",
                isLogo: "styles_isLogo__eZLzr",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__LMRf3"
            }
        }
    }
]);