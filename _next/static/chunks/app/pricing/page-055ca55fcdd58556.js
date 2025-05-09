(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9979], {
        51825: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 2776))
        },
        2776: function(e, t, s) {
            "use strict";
            s.d(t, {
                default: function() {
                    return eH
                }
            });
            var r, n, i, l = s(57437),
                a = s(17453),
                o = s(39927),
                c = s(24764),
                d = s(2031),
                h = s(27648),
                m = s(2265),
                x = s(5760),
                j = s(94746);

            function g() {
                return (g = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s)({}).hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            var p = function(e) {
                    return j.createElement("svg", g({
                        width: 16,
                        height: 16,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), r || (r = j.createElement("path", {
                        d: "M3 8.5L6 11.5L13 4.5",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })))
                },
                u = s(90415),
                _ = s(56724),
                f = s(4741),
                y = s.n(f),
                F = s(19502),
                b = s.n(F);
            let v = y().bind(b());
            var k = e => {
                    let {
                        className: t,
                        onClick: s,
                        isActive: r
                    } = e;
                    return (0, l.jsxs)("button", {
                        onClick: s,
                        className: v(b().toggle, t, {
                            isActive: r
                        }),
                        children: [(0, l.jsx)("span", {
                            className: b().dot
                        }), (0, l.jsx)("span", {
                            className: "visually-hidden",
                            children: r ? "Disable" : "Enable"
                        })]
                    })
                },
                w = s(91219),
                N = s(54887),
                A = s(52241),
                P = s.n(A);
            let C = y().bind(P()),
                T = "RIGHT",
                S = {
                    TOP: 216,
                    RIGHT: 240
                };
            var I = e => {
                    let {
                        className: t,
                        tooltipContent: s,
                        children: r,
                        direction: n
                    } = e, i = n || "TOP", a = S[i], [o, c] = (0, m.useState)(null), [d, h] = (0, m.useState)(null), [x, j] = (0, m.useState)(!1), [g, p] = (0, m.useState)(!1), [{
                        bottom: u,
                        left: _,
                        top: f
                    }, y] = (0, m.useState)({
                        bottom: 0,
                        left: 0
                    }), [F, b] = (0, w.Z)(), v = (0, m.useRef)(null), k = () => {
                        clearTimeout(d), clearTimeout(o), j(!0);
                        let e = v.current.getBoundingClientRect();
                        "TOP" === i && y({
                            bottom: window.innerHeight - e.top + 4,
                            left: Math.min(Math.max(20, e.left + e.width / 2 - a / 2), window.innerWidth - 20 - a)
                        }), i === T && y({
                            top: e.top + e.height / 2,
                            left: e.left + e.width + 8
                        })
                    }, A = () => {
                        clearTimeout(d), clearTimeout(o), h(window.setTimeout(() => {
                            p(!1)
                        }, 200)), c(window.setTimeout(() => {
                            j(!1)
                        }, 400))
                    };
                    return (0, m.useEffect)(() => {
                        clearTimeout(d), clearTimeout(o), j(!1), p(!1)
                    }, [b]), (0, m.useEffect)(() => {
                        !0 === x && setTimeout(() => p(!0), 20)
                    }, [x]), (0, l.jsxs)("span", {
                        ref: v,
                        className: C(P().wrapper, t),
                        onMouseEnter: k,
                        onMouseLeave: A,
                        children: [r, x && (0, N.createPortal)((0, l.jsxs)("span", {
                            className: C(P().tooltip, {
                                isRight: i === T,
                                isTop: "TOP" === i,
                                isVisible: g
                            }),
                            onMouseEnter: k,
                            onMouseLeave: A,
                            style: {
                                bottom: u,
                                left: _,
                                top: f,
                                width: a
                            },
                            children: [s, (0, l.jsx)("span", {
                                className: P().tooltipNotch
                            })]
                        }), document.getElementById("tooltip-portal"))]
                    })
                },
                H = s(36760),
                D = s.n(H),
                U = s(80408),
                B = s.n(U),
                E = e => {
                    let {
                        className: t,
                        theme: s,
                        children: r
                    } = e;
                    return (0, l.jsx)("p", {
                        className: D()(B().cardKicker, t),
                        "data-theme": s,
                        children: r
                    })
                };

            function q(e) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function L() {
                return (L = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s)({}).hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(null, arguments)
            }

            function O(e, t, s) {
                var r;
                return (r = function(e, t) {
                    if ("object" != q(e) || !e) return e;
                    var s = e[Symbol.toPrimitive];
                    if (void 0 !== s) {
                        var r = s.call(e, t || "default");
                        if ("object" != q(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" == q(r) ? r : r + "") in e) ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            var M = function(e) {
                    return j.createElement("svg", L({
                        width: 16,
                        height: 16,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), j.createElement("path", {
                        d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",
                        stroke: "currentColor",
                        style: O(O({
                            stroke: "currentColor"
                        }, "stroke", "color(display-p3 0.7255 0.6902 0.7490)"), "strokeOpacity", 1),
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), n || (n = j.createElement("path", {
                        d: "M8 4.5V5",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round"
                    })), i || (i = j.createElement("path", {
                        d: "M8 7.5V11.5",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round"
                    })))
                },
                W = s(92756),
                R = s(17230),
                K = s(35356),
                Z = s.n(K),
                V = e => {
                    let {
                        children: t
                    } = e, [s, r] = (0, m.useState)(null), n = (0, m.useRef)(null), i = () => {
                        r(n.current.getBoundingClientRect().width)
                    };
                    return (0, m.useEffect)(() => {
                        n.current && i()
                    }, [n]), (0, R.Z)(n, () => {
                        i()
                    }), (0, l.jsx)("span", {
                        className: Z().outer,
                        style: {
                            width: null !== s ? s : null
                        },
                        children: (0, l.jsx)("span", {
                            className: Z().inner,
                            ref: n,
                            children: t
                        })
                    })
                },
                G = e => {
                    let {
                        firstNumber: t,
                        secondNumber: s,
                        isSecondNumber: r
                    } = e, n = 800 / (s - t), i = !!r, [a, o] = (0, m.useState)(!!i), [c, d] = (0, m.useState)(i ? s : t), [h, x] = (0, m.useState)(c), [j, g] = (0, m.useState)(!1);
                    return (0, m.useEffect)(() => {
                        i !== a && (o(i), d(i ? s : t), g(!0))
                    }, [t, s, i, a]), (0, m.useEffect)(() => {
                        let e;
                        return j ? e = setInterval(() => {
                            h === c ? g(!1) : c > h ? x(h + 1) : x(h - 1)
                        }, n) : clearInterval(e), () => clearInterval(e)
                    }, [j, c, h, n]), (0, l.jsx)(V, {
                        children: h
                    })
                },
                Q = s(16113),
                z = s.n(Q);
            let Y = y().bind(z()),
                J = e => {
                    let {
                        title: t,
                        rows: s
                    } = e, [r, n] = (0, m.useState)(!0);
                    return (0, l.jsxs)("li", {
                        className: Y({
                            card: !0,
                            isExpanded: r
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: z().cardHeader,
                            children: [(0, l.jsx)("h3", {
                                className: z().cardTitle,
                                children: t
                            }), (0, l.jsxs)("button", {
                                onClick: () => n(!r),
                                className: z().cardToggle,
                                children: [(0, l.jsx)("span", {
                                    className: "visually-hidden",
                                    children: r ? "Collapse" : "Expanded"
                                }), (0, l.jsx)(u.Z, {})]
                            })]
                        }), (0, l.jsx)("div", {
                            className: z().cardBody,
                            children: (0, l.jsx)("table", {
                                className: z().cardTable,
                                cellSpacing: "0",
                                children: (0, l.jsxs)("tbody", {
                                    children: [(0, l.jsxs)("tr", {
                                        className: "visually-hidden",
                                        children: [(0, l.jsx)("td", {}), (0, l.jsx)("th", {
                                            children: "Free"
                                        }), (0, l.jsx)("th", {
                                            children: "Pro"
                                        }), (0, l.jsx)("td", {
                                            children: "Business"
                                        }), (0, l.jsx)("td", {
                                            children: "Enterprise"
                                        })]
                                    }), s.map(e => {
                                        let {
                                            title: t,
                                            tooltip: s,
                                            cells: r
                                        } = e;
                                        return (0, l.jsxs)("tr", {
                                            children: [(0, l.jsxs)("th", {
                                                children: [t, (0, l.jsx)(I, {
                                                    className: z().cardTooltip,
                                                    tooltipContent: s,
                                                    direction: T,
                                                    children: (0, l.jsx)(M, {})
                                                })]
                                            }), r.map((e, t) => (0, l.jsx)("td", {
                                                children: e
                                            }, t))]
                                        }, t)
                                    })]
                                })
                            })
                        })]
                    })
                },
                X = () => (0, l.jsx)("div", {
                    className: z().dash,
                    children: (0, l.jsx)("span", {
                        className: "visually-hidden",
                        children: "Not included"
                    })
                }),
                $ = e => {
                    let {
                        theme: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: z().check,
                        "data-theme": t,
                        children: [(0, l.jsx)(p, {}), (0, l.jsx)("span", {
                            className: "visually-hidden",
                            children: "Included"
                        })]
                    })
                };
            var ee = e => {
                    let {
                        isMonthlyBilling: t,
                        setIsMonthlyBilling: s
                    } = e, {
                        isHidden: r
                    } = (0, m.useContext)(W.p);
                    return (0, l.jsxs)("div", {
                        className: z().grid,
                        children: [(0, l.jsxs)("div", {
                            className: z().gridContent,
                            children: [(0, l.jsx)("div", {
                                className: Y({
                                    planChooser: !0,
                                    isNavHidden: r
                                }),
                                children: (0, l.jsxs)("div", {
                                    className: Y({
                                        planChooserInner: !0,
                                        isNavHidden: r
                                    }),
                                    children: [(0, l.jsx)("p", {
                                        className: z().planChooserTitle,
                                        children: "Choose the perfect plan"
                                    }), (0, l.jsxs)("ol", {
                                        className: z().planChooserOptions,
                                        children: [(0, l.jsx)("li", {
                                            children: (0, l.jsx)(c.Z, {
                                                tag: "a",
                                                href: "/signup",
                                                theme: "teal",
                                                children: "Free"
                                            })
                                        }), (0, l.jsx)("li", {
                                            children: (0, l.jsx)(c.Z, {
                                                tag: "a",
                                                href: "/signup",
                                                theme: "blue",
                                                children: "Pro"
                                            })
                                        }), (0, l.jsx)("li", {
                                            children: (0, l.jsx)(c.Z, {
                                                tag: "a",
                                                href: "/signup",
                                                theme: "purple",
                                                children: "Business"
                                            })
                                        }), (0, l.jsx)("li", {
                                            children: (0, l.jsx)(c.Z, {
                                                tag: h.default,
                                                href: "/company/contact-sales",
                                                theme: "pink",
                                                children: "Enterprise"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: z().cards,
                                children: (0, l.jsxs)("ol", {
                                    className: z().cardsList,
                                    children: [(0, l.jsx)(J, {
                                        title: "Create and build",
                                        rows: [{
                                            title: "Boards",
                                            tooltip: "File type for diagramming, wireframing and other visual thinking.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "3"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Docs",
                                            tooltip: "File type for text editing with embeds and tables.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Projects",
                                            tooltip: "File type for organizing tasks, documentation, and posts.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Tasks",
                                            tooltip: "Action item in a project with status, assignee, and tags.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "100 (excludes archive)"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Nested files",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["Create ", (0, l.jsx)(_.A, {}), " files inside other ", (0, l.jsx)(_.A, {}), " files to organize and share important related information."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Version history",
                                            tooltip: "Version history enables you to track changes to a file and revert to previous versions.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "7 days"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "90 days"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "1 year"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Custom themes",
                                            tooltip: "Use themes to customize the colors of your entire workspace or individual files.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Custom templates",
                                            tooltip: "Templates are files created with reusable content you can add to another file or use as a starting point when creating a new file.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "100"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Backlinks",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["When you link to or mention another file from somewhere in", " ", (0, l.jsx)(_.A, {
                                                    noSpace: !0
                                                }), ", that file will display a backlink to the file where it was linked from."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Voting",
                                            tooltip: "Add votes to cards and sticky notes with your team in real time.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Timer",
                                            tooltip: "Set a time limit for certain activities, like brainstorming or voting.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Export options",
                                            tooltip: "Advanced export options enable you to export a whole board, selection, or frame at 2x resolution with a transparent background and no watermark.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsxs)("ul", {
                                                    children: [(0, l.jsx)("li", {
                                                        children: "1x resolution only"
                                                    }), (0, l.jsx)("li", {
                                                        children: "Whole board only"
                                                    }), (0, l.jsx)("li", {
                                                        children: "Includes background"
                                                    }), (0, l.jsxs)("li", {
                                                        children: [(0, l.jsx)(_.A, {
                                                            noSpace: !0
                                                        }), " watermark"]
                                                    })]
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Advanced export options"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Advanced export options"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Advanced export options"
                                            })]
                                        }, {
                                            title: "AI actions",
                                            tooltip: "Use AI to generate diagrams, sticky notes, and tasks in seconds.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "100 / editor"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "500 / editor / month"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "1000 / editor / month"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "2000 / editor / month"
                                            })]
                                        }, {
                                            title: "Desktop app",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["Download ", (0, l.jsx)(_.A, {}), " for macOS ", (0, l.jsx)(h.default, {
                                                    href: "/download",
                                                    children: "here"
                                                }), "."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, l.jsx)(J, {
                                        title: "Collaboration",
                                        rows: [{
                                            title: "Real-time collaboration",
                                            tooltip: "Work together in the same file at the same time with other collaborators.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Editors",
                                            tooltip: "Can access, comment on, and edit all shared files in a workspace. Can also create new files and folders. This is a paid role (except for Free plans).",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Viewers",
                                            tooltip: "Can access and comment on all shared files in a workspace. Viewers are free. Viewers can request to be upgraded to Editors.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Guests",
                                            tooltip: "Invite individuals who need limited or temporary access to certain folders or files, such as external collaborators (contractors, clients, etc.) or co-workers who only need occasional access. Guests are free.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "10"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "50"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "100"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Starting at 200"
                                            })]
                                        }, {
                                            title: "Teams",
                                            tooltip: "Teams allow you to organize different groups of people and information. Teams are visible to everyone in the workspace and all workspace members can join.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "3"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "6"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Unlimited"
                                            })]
                                        }, {
                                            title: "Private teams",
                                            tooltip: "A private team is a team that is only visible to members and can only be joined by invitation.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Public share link access",
                                            tooltip: "Allow people outside of your workspace to view, comment, or edit a specific file.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "View only and comment"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "View, comment, and edit"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "View, comment, and edit"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "View, comment, and edit"
                                            })]
                                        }, {
                                            title: "Password protected files",
                                            tooltip: "Allows you to protect a file or folder with a password.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Notification inbox",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["View @-mentions, comments, replies, file access requests, and more—all within", " ", (0, l.jsx)(_.A, {
                                                    noSpace: !0
                                                }), "."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Posts",
                                            tooltip: "Keep team members informed on project progress, share team check-ins, request feedback, and more. Automatically share posts to Slack for greater visibility.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Custom post templates",
                                            tooltip: "Create reusable post templates with writing prompts or other info to streamline your workflow in Posts.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, l.jsx)(J, {
                                        title: "Integrations",
                                        rows: [{
                                            title: "Task importer (CSV format)",
                                            tooltip: "Upload a CSV file to import tasks from other tools, including Asana, ClickUp, Jira, Notion, ClickUp, Trello, and more.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: (0, l.jsxs)(l.Fragment, {
                                                children: ["Live ", (0, l.jsx)(_.A, {}), " embeds"]
                                            }),
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["Embed live ", (0, l.jsx)(_.A, {}), " files where you need them in other tools. Learn more", " ", (0, l.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/imports-exports",
                                                    children: "here."
                                                })]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "Public and private"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Public and private"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Public and private"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Public and private"
                                            })]
                                        }, {
                                            title: "Third-party embeds",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["Embed live views from your other tools into ", (0, l.jsx)(_.A, {}), " files."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Slack integration",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["With the ", (0, l.jsx)(_.A, {}), " integration for Slack, you can create tasks, receive notifications, see rich previews, and more—all within Slack. Learn more", " ", (0, l.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/integrations/slack",
                                                    children: "here."
                                                })]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "GitHub integration",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["Show GitHub backlinks when you integrate your ", (0, l.jsx)(_.A, {}), " account with GitHub. Learn more", " ", (0, l.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/integrations/github",
                                                    children: "here."
                                                })]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Front integration",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["Link customer conversations in Front to ", (0, l.jsx)(_.A, {}), " tasks. Quickly search, link, or create tasks directly from Front. Learn more", " ", (0, l.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/integrations/front-integration",
                                                    children: "here."
                                                })]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, l.jsx)(J, {
                                        title: "Admin",
                                        rows: [{
                                            title: "Admin role",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "Admins can change workspace member roles and other workspace settings."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "Every member is an admin"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Ability to choose who has admin access"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Ability to choose who has admin access"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Ability to choose who has admin access"
                                            })]
                                        }, {
                                            title: "Role management",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "Admins are able to set workspace members to editors or viewers."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "teal"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "blue"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "User offboarding file transfers",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "When offboarding a user, an admin is able to move all the user’s “My Files” to a new destination."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Flexible licensing",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "Purchase the amount of licenses you think you’ll need based on a good faith estimate. Additional editors added during the contract term will not increase total cost of your contract."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Payment method",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "Annual contracts greater than $10K USD are eligible for payment by invoice."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "Credit card only"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Credit card only"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Credit card only"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Credit card or invoicing"
                                            })]
                                        }, {
                                            title: "Flexible payment terms",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "Select quarterly or semi-annual payments. Requires an annual contract greater than $10K USD."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Negotiable Master Service Agreement",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "Negotiate changes or additions to the Master Service Agreement. Requires an annual contract greater than $25K USD."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, l.jsx)(J, {
                                        title: "Security",
                                        rows: [{
                                            title: "SAML Single Sign-On (SSO)",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: [(0, l.jsx)(_.A, {}), " offers SSO based on SAML. Learn more about our supported SAML providers", " ", (0, l.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/security/saml-sso",
                                                    children: "here"
                                                }), "."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "SCIM",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["System for cross-domain identity management. Automatically provision members in and out of your workspace via your identity provider. Learn more", " ", (0, l.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://help.whimsical.com/security",
                                                    children: "here"
                                                }), "."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Domain management",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "Allow people with matching email domains to automatically join your company’s workspace. Also allows admins to block new workspace creation."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: "Auto-join workspace based on domain matching"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Auto-join workspace based on domain matching"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Auto-join workspace based on domain matching"
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: "Auto-join workspace based on domain matching and ability for admins to block creation of new workspaces"
                                            })]
                                        }, {
                                            title: "Content security lock",
                                            tooltip: (0, l.jsx)(l.Fragment, {
                                                children: "Enhanced controls locking down sharing on a workspace, team, or file level."
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Custom security reviews",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["If you cannot find what you need in our", " ", (0, l.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://trust.whimsical.com",
                                                    children: "trust center"
                                                }), ", we will provide additional security-related information and documentation in for procurement on an as needed basis. Requires an annual contract greater than $25K USD."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    }), (0, l.jsx)(J, {
                                        title: "Support",
                                        rows: [{
                                            title: "Priority support",
                                            tooltip: "Faster replies to support questions.",
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "purple"
                                                })
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }, {
                                            title: "Dedicated success manager",
                                            tooltip: (0, l.jsxs)(l.Fragment, {
                                                children: ["Our team of customer success managers are here to help you get the most out of", " ", (0, l.jsx)(_.A, {}), "."]
                                            }),
                                            cells: [(0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)(X, {})
                                            }), (0, l.jsx)(l.Fragment, {
                                                children: (0, l.jsx)($, {
                                                    theme: "pink"
                                                })
                                            })]
                                        }]
                                    })]
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: z().gridFooter,
                            children: (0, l.jsxs)("div", {
                                className: z().gridFooterInner,
                                children: [(0, l.jsx)("div", {
                                    className: z().gridFooterHeader,
                                    children: (0, l.jsxs)("div", {
                                        className: z().gridFooterAnnualBilling,
                                        children: ["Annual billing", (0, l.jsx)(k, {
                                            className: z().gridFooterToggle,
                                            isActive: !t,
                                            onClick: () => s(!t)
                                        })]
                                    })
                                }), (0, l.jsxs)("ol", {
                                    className: z().gridFooterPlans,
                                    children: [(0, l.jsxs)("li", {
                                        children: [(0, l.jsx)(E, {
                                            className: z().gridFooterPlanCardKicker,
                                            theme: "teal",
                                            children: "Free"
                                        }), (0, l.jsxs)("p", {
                                            className: z().gridFooterPlanPrice,
                                            children: [(0, l.jsx)("b", {
                                                children: "$0"
                                            }), " / Month / Editor"]
                                        }), (0, l.jsx)("p", {
                                            className: z().gridFooterPlanDescription,
                                            children: "For personal projects and flexible collaboration"
                                        }), (0, l.jsx)(c.Z, {
                                            className: z().gridFooterPlanBtn,
                                            invert: !0,
                                            href: "/signup",
                                            tag: "a",
                                            children: "Get started"
                                        })]
                                    }), (0, l.jsxs)("li", {
                                        children: [(0, l.jsx)(E, {
                                            className: z().gridFooterPlanCardKicker,
                                            theme: "blue",
                                            children: "Pro"
                                        }), (0, l.jsxs)("p", {
                                            className: z().gridFooterPlanPrice,
                                            children: [(0, l.jsxs)("b", {
                                                children: ["$", (0, l.jsx)(G, {
                                                    firstNumber: 10,
                                                    secondNumber: 12,
                                                    isSecondNumber: t
                                                })]
                                            }), " ", "/ Month / Editor"]
                                        }), (0, l.jsx)("p", {
                                            className: z().gridFooterPlanDescription,
                                            children: "For small-but-mighty teams or individuals"
                                        }), (0, l.jsx)(c.Z, {
                                            className: z().gridFooterPlanBtn,
                                            invert: !0,
                                            href: "/signup",
                                            tag: "a",
                                            children: "Start free trial"
                                        })]
                                    }), (0, l.jsxs)("li", {
                                        children: [(0, l.jsx)(E, {
                                            className: z().gridFooterPlanCardKicker,
                                            theme: "purple",
                                            children: "Business"
                                        }), (0, l.jsxs)("p", {
                                            className: z().gridFooterPlanPrice,
                                            children: [(0, l.jsxs)("b", {
                                                children: ["$", (0, l.jsx)(G, {
                                                    firstNumber: 15,
                                                    secondNumber: 18,
                                                    isSecondNumber: t
                                                })]
                                            }), " ", "/ Month / Editor"]
                                        }), (0, l.jsx)("p", {
                                            className: z().gridFooterPlanDescription,
                                            children: "For large teams or entire organizations"
                                        }), (0, l.jsx)(c.Z, {
                                            className: z().gridFooterPlanBtn,
                                            invert: !0,
                                            href: "/signup",
                                            tag: "a",
                                            children: "Start free trial"
                                        })]
                                    }), (0, l.jsxs)("li", {
                                        children: [(0, l.jsx)(E, {
                                            className: z().gridFooterPlanCardKicker,
                                            theme: "pink",
                                            children: "Enterprise"
                                        }), (0, l.jsxs)("p", {
                                            className: z().gridFooterPlanPrice,
                                            children: [(0, l.jsx)("b", {
                                                children: "$20"
                                            }), " / Month / Editor"]
                                        }), (0, l.jsx)("p", {
                                            className: z().gridFooterPlanDescription,
                                            children: "For organizations who need advanced controls"
                                        }), (0, l.jsx)(c.Z, {
                                            className: z().gridFooterPlanBtn,
                                            invert: !0,
                                            href: "/company/contact-sales",
                                            tag: h.default,
                                            children: "Contact"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                et = s(71335),
                es = s.n(et),
                er = e => {
                    let {
                        isMonthlyBilling: t,
                        setIsMonthlyBilling: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: es().compare,
                        id: "compare",
                        children: [(0, l.jsx)("div", {
                            className: es().intro,
                            children: (0, l.jsxs)("div", {
                                className: es().introInner,
                                children: [(0, l.jsx)(x.Z, {
                                    children: "For teams of 1 to 1000+"
                                }), (0, l.jsx)("h2", {
                                    className: es().hd,
                                    children: "Compare plans and features"
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: es().content,
                            children: (0, l.jsx)(ee, {
                                isMonthlyBilling: t,
                                setIsMonthlyBilling: s
                            })
                        })]
                    })
                },
                en = s(8408),
                ei = s.n(en);
            let el = y().bind(ei()),
                ea = [{
                    q: (0, l.jsxs)(l.Fragment, {
                        children: ["Can I use ", (0, l.jsx)(_.A, {}), " for free?"]
                    }),
                    a: "Yes! With our free Starter plan, you get unlimited private files, unlimited shared docs, 3 team boards for collaborating, and 100 AI actions."
                }, {
                    q: "What types of payment do you accept?",
                    a: "We accept all major credit and debit cards. For Enterprise plans, we also accept wire and ACH transfers."
                }, {
                    q: "How many free workspaces can I create?",
                    a: "You can create 2 free workspaces and switch between them seamlessly."
                }, {
                    q: "Do you offer discounts for non-profits?",
                    a: (0, l.jsxs)(l.Fragment, {
                        children: ["Yes, we gladly offer a 20% discount to non-profit organizations.", " ", (0, l.jsx)("a", {
                            href: "mailto:help@whimsical.com",
                            children: "Contact us"
                        }), " to learn more."]
                    })
                }, {
                    q: "Do you offer discounts for students and teachers?",
                    a: (0, l.jsxs)(l.Fragment, {
                        children: ["Yes, students and teachers can use ", (0, l.jsx)(_.A, {}), " free of charge. Sign up and", " ", (0, l.jsx)("a", {
                            href: "https://whimsicalpowers.typeform.com/to/oK8ZTz?typeform-source=whimsical.com",
                            children: "fill out this form"
                        }), " ", "to apply."]
                    })
                }, {
                    q: "Can I collaborate with people outside my organization?",
                    a: "Yes, you can share files with people outside your workspace or invite them into your workspace as guests. On our free Starter plan, guests have view and comment access, while on the Pro plan, you have the flexibility to invite them as editors, commenters, or viewers."
                }],
                eo = e => {
                    let {
                        question: t
                    } = e, [s, r] = (0, m.useState)(!1), [n, i] = (0, m.useState)(!1);
                    return (0, l.jsx)("li", {
                        className: el({
                            question: !0,
                            isOpen: s,
                            isHovered: n
                        }),
                        children: (0, l.jsxs)("div", {
                            className: ei().questionInner,
                            children: [(0, l.jsx)("button", {
                                className: ei().questionQ,
                                onClick: () => r(!s),
                                onMouseEnter: () => i(!0),
                                onMouseLeave: () => i(!1),
                                children: t.q
                            }), (0, l.jsx)("p", {
                                className: ei().questionA,
                                children: t.a
                            })]
                        })
                    })
                };
            var ec = () => (0, l.jsxs)("div", {
                    id: "faqs",
                    className: ei().faq,
                    children: [(0, l.jsx)("h2", {
                        className: ei().faqHd,
                        children: "Frequently asked questions"
                    }), (0, l.jsx)("ul", {
                        className: ei().questions,
                        children: ea.map(e => (0, l.jsx)(eo, {
                            question: e
                        }, e.q))
                    })]
                }),
                ed = s(77284),
                eh = s(33145),
                em = {
                    src: "/_next/static/media/carbon-removal-icon.fb6cc718.svg",
                    height: 36,
                    width: 37,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ex = s(61362),
                ej = s(50080),
                eg = s(70942),
                ep = s.n(eg);
            let eu = e => {
                    let {
                        btnHref: t,
                        btnText: s,
                        description: r,
                        features: n,
                        featuresHd: i,
                        isAnnualOnly: a,
                        kicker: o,
                        price: d,
                        theme: m
                    } = e;
                    return (0, l.jsxs)("li", {
                        className: ep().card,
                        children: [(0, l.jsxs)("div", {
                            className: ep().cardKickerWrapper,
                            children: [(0, l.jsx)(E, {
                                theme: m,
                                children: o
                            }), a && (0, l.jsx)(E, {
                                className: ep().cardKickerAddendum,
                                children: "Billed annually"
                            })]
                        }), (0, l.jsxs)("h2", {
                            className: ep().cardPrice,
                            children: [(0, l.jsxs)("span", {
                                className: ep().cardPriceAmount,
                                children: ["$", d]
                            }), (0, l.jsx)("span", {
                                className: ep().cardPricePer,
                                children: "/ Month / Editor"
                            })]
                        }), (0, l.jsx)("div", {
                            className: ep().cardPriceDivider
                        }), (0, l.jsx)("p", {
                            className: ep().cardDescription,
                            children: r
                        }), (0, l.jsx)(c.Z, {
                            invert: !0,
                            theme: m,
                            tag: "/signup" === t ? "a" : h.default,
                            href: t,
                            children: s
                        }), (0, l.jsx)("h3", {
                            className: ep().cardFeaturesHd,
                            children: i
                        }), (0, l.jsx)("ul", {
                            className: ep().cardFeaturesList,
                            children: n && n.map((e, t) => (0, l.jsx)("li", {
                                children: e
                            }, t))
                        })]
                    })
                },
                e_ = e => {
                    let {
                        id: t,
                        className: s,
                        children: r
                    } = e;
                    return (0, l.jsxs)("a", {
                        href: "#" + t,
                        className: s,
                        onClick: e => (0, ej.D)(e, t),
                        children: [r, (0, l.jsx)("span", {
                            children: (0, l.jsx)(ex.Z, {})
                        })]
                    })
                };
            var ef = e => {
                    let {
                        isMonthlyBilling: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: ep().cards,
                        children: [(0, l.jsxs)("ol", {
                            className: ep().cardList,
                            children: [(0, l.jsx)(eu, {
                                btnHref: "/signup",
                                btnText: "Get started",
                                description: "For personal projects and flexible collaboration",
                                kicker: "Free",
                                price: 0,
                                theme: "teal",
                                featuresHd: "Free includes:",
                                features: [(0, l.jsxs)(l.Fragment, {
                                    children: ["Unlimited", " ", (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Workspace members are able to access your workspace as editors or viewers.",
                                        children: "workspace members"
                                    })]
                                }), (0, l.jsxs)(l.Fragment, {
                                    children: ["All ", (0, l.jsx)(_.A, {}), (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: (0, l.jsxs)(l.Fragment, {
                                            children: ["Projects, docs, and boards are different types of files in ", (0, l.jsx)(_.A, {}), "."]
                                        }),
                                        children: "file types"
                                    })]
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "3 team boards"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "100 team tasks"
                                }), (0, l.jsxs)(l.Fragment, {
                                    children: ["3", " ", (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Teams allow you to organize different groups of people and information.",
                                        children: "teams"
                                    })]
                                }), (0, l.jsxs)(l.Fragment, {
                                    children: ["10", " ", (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Invite individuals who need limited or temporary access to certain folders or files.",
                                        children: "guests"
                                    })]
                                }), (0, l.jsxs)(l.Fragment, {
                                    children: ["7-day", " ", (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Use version history to view previous versions of any file and restore it to any earlier state.",
                                        children: "version history"
                                    })]
                                }), (0, l.jsxs)(l.Fragment, {
                                    children: ["100", " ", (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Use AI to generate diagrams, sticky notes, and tasks in seconds.",
                                        children: "AI actions"
                                    }), " ", "/ editor"]
                                })]
                            }), (0, l.jsx)(eu, {
                                btnHref: "/signup",
                                btnText: "Start free trial",
                                description: "For small-but-mighty teams or individuals",
                                kicker: "Pro",
                                price: (0, l.jsx)(G, {
                                    firstNumber: 10,
                                    secondNumber: 12,
                                    isSecondNumber: t
                                }),
                                theme: "blue",
                                featuresHd: "Everything in Free, and:",
                                features: [(0, l.jsx)(l.Fragment, {
                                    children: "Unlimited team files and tasks"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "100 custom templates"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "A private team is only visible to invited members within the workspace.",
                                        children: "Private teams"
                                    })
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "6 teams"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "50 guests"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "90-day version history"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "500 AI actions / editor / month"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Assign admin access to specific users. Admins can change workspace member roles and other workspace settings.",
                                        children: "Admin roles"
                                    })
                                })]
                            }), (0, l.jsx)(eu, {
                                btnHref: "/signup",
                                btnText: "Start free trial",
                                description: "For large teams or entire organizations",
                                featuresHd: "Everything in Pro, and:",
                                kicker: "Business",
                                price: (0, l.jsx)(G, {
                                    firstNumber: 15,
                                    secondNumber: 18,
                                    isSecondNumber: t
                                }),
                                theme: "purple",
                                features: [(0, l.jsx)(l.Fragment, {
                                    children: "Unlimited teams"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "Unlimited custom templates"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "100 guests"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "1-year version history"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "1000 AI actions / editor / month"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Set up SSO based on SAML for your workspace.",
                                        children: "SSO / SAML"
                                    })
                                })]
                            }), (0, l.jsx)(eu, {
                                btnHref: "/company/contact-sales",
                                btnText: "Contact",
                                description: "For organizations who need advanced controls and support",
                                featuresHd: "Everything in Business, and:",
                                isAnnualOnly: !0,
                                kicker: "Enterprise",
                                price: 20,
                                theme: "pink",
                                features: [(0, l.jsx)(l.Fragment, {
                                    children: "Starting at 200 guests"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "Unlimited version history"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: "2000 AI actions / editor / month"
                                }), (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Automatically provision members in and out of your workspace via your identity provider.",
                                        children: "SCIM"
                                    })
                                }), (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Block creation of new workspaces for your email domain, access and move files of offboarded users, and more.",
                                        children: "Advanced security controls"
                                    })
                                }), (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: "Your help requests are answered before customers with Free, Pro, or Business plans.",
                                        children: "Priority support"
                                    })
                                }), (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(I, {
                                        className: ep().cardTooltipText,
                                        tooltipContent: (0, l.jsxs)(l.Fragment, {
                                            children: ["Our team of customer success managers are here to help you get the most out of", " ", (0, l.jsx)(_.A, {}), "."]
                                        }),
                                        children: "Dedicated success manager"
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: ep().readMoreLinks,
                            children: [(0, l.jsx)(e_, {
                                className: ep().hideOnMobile,
                                id: "compare",
                                children: "See feature comparison"
                            }), (0, l.jsx)(e_, {
                                id: "faqs",
                                children: "Explore our FAQs"
                            })]
                        })]
                    })
                },
                ey = s(38014),
                eF = s.n(ey);
            let eb = y().bind(eF()),
                ev = () => (0, l.jsx)("span", {
                    className: "visually-hidden",
                    children: "(Currently viewing)"
                });
            var ek = e => {
                    let {
                        isMonthlyBilling: t,
                        setIsMonthlyBilling: s
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: eF().hero,
                            children: (0, l.jsxs)("div", {
                                className: eF().heroInner,
                                children: [(0, l.jsxs)("div", {
                                    className: eF().heroHeader,
                                    children: [(0, l.jsx)("h1", {
                                        className: eF().heroHd,
                                        children: "Pricing"
                                    }), (0, l.jsxs)("p", {
                                        className: eF().heroDescription,
                                        children: ["Use ", (0, l.jsx)(_.A, {}), " for free, or upgrade for advanced features and controls. Viewers are always free."]
                                    }), (0, l.jsxs)("button", {
                                        className: eF().toggle,
                                        onClick: () => s(!t),
                                        children: [(0, l.jsxs)("span", {
                                            className: eb({
                                                togglePill: !0,
                                                isActive: !t
                                            }),
                                            children: [!t && (0, l.jsx)(ev, {}), (0, l.jsxs)("span", {
                                                children: ["Annual ", (0, l.jsx)("span", {
                                                    className: eF().toggleBillingText,
                                                    children: "billing"
                                                })]
                                            }), (0, l.jsx)("span", {
                                                className: eF().toggleDiscount,
                                                children: "Save 17%"
                                            })]
                                        }), (0, l.jsxs)("span", {
                                            className: eb({
                                                togglePill: !0,
                                                isActive: t
                                            }),
                                            children: [t && (0, l.jsx)(ev, {}), (0, l.jsxs)("span", {
                                                children: ["Monthly ", (0, l.jsx)("span", {
                                                    className: eF().toggleBillingText,
                                                    children: "billing"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, l.jsx)(ef, {
                                    isMonthlyBilling: t
                                }), (0, l.jsxs)("div", {
                                    className: eF().socialProof,
                                   
                                })]
                            })
                        }), (0, l.jsxs)("p", {
                            className: eF().carbonRemoval,
                            children: [(0, l.jsx)(eh.default, {
                                src: em,
                                alt: "",
                                width: 38,
                                height: 38
                            }), (0, l.jsxs)("span", {
                                children: ["We ", (0, l.jsx)(h.default, {
                                    href: "/blog/investing-in-a-sustainable-future",
                                    children: "contribute 1% of purchases"
                                }), " to fund next-generation carbon removal."]
                            })]
                        })]
                    })
                },
                ew = {
                    src: "/_next/static/media/ccpa.e2166a6a.svg",
                    height: 65,
                    width: 57,
                    blurWidth: 0,
                    blurHeight: 0
                },
                eN = {
                    src: "/_next/static/media/gdpr.e9bf93da.svg",
                    height: 71,
                    width: 72,
                    blurWidth: 0,
                    blurHeight: 0
                },
                eA = {
                    src: "/_next/static/media/soc2@2x.a614b7da.webp",
                    height: 144,
                    width: 144,
                    blurDataURL: "data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLQ0ldq0aERG4HwpsI9lqKymigMPlPvcdkCPTAFJE/2PnXyx4LRwFTkGxcBa8e34CAFZQOCBeAAAAcAIAnQEqCAAIAAJAOCWwAnS6AfgBM/wJ8u+qAAD+g9y1xMMxf8fnSR8T6IPHSiqeIyL6iWlDjrm5+iiQXup6oEPsU9n/xvIO6m0V9eA//mCk9QroVN4ZAk3xS2AAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                eP = s(70375),
                eC = s.n(eP),
                eT = () => (0, l.jsx)("div", {
                    className: eC().security,
                    children: (0, l.jsxs)("div", {
                        className: eC().securityInner,
                        children: [(0, l.jsxs)("div", {
                            className: eC().securityContent,
                            children: [(0, l.jsx)("h2", {
                                className: eC().securityHd,
                                children: "Safe and secure"
                            }), (0, l.jsxs)("p", {
                                className: eC().securityDescription,
                                children: [(0, l.jsx)(_.A, {}), " is committed to helping customers comply with their GDPR and CCPA requirements, and are SOC 2 Type 2 compliant."]
                            }), (0, l.jsx)(c.Z, {
                                tag: "a",
                                invert: !0,
                                href: "https://trust.whimsical.com/",
                                children: "View compliance"
                            })]
                        }), (0, l.jsxs)("ul", {
                            className: eC().logos,
                            children: [(0, l.jsxs)("li", {
                                children: [(0, l.jsx)("div", {
                                    className: eC().logoImgWrapper,
                                    children: (0, l.jsx)(eh.default, {
                                        src: eN,
                                        width: 72,
                                        height: 71,
                                        alt: ""
                                    })
                                }), (0, l.jsx)("abbr", {
                                    className: eC().logoTitle,
                                    title: "General Data Protection Regulation",
                                    children: "GDPR"
                                })]
                            }), (0, l.jsxs)("li", {
                                children: [(0, l.jsx)("div", {
                                    className: eC().logoImgWrapper,
                                    children: (0, l.jsx)(eh.default, {
                                        src: ew,
                                        width: 57,
                                        height: 65,
                                        alt: ""
                                    })
                                }), (0, l.jsx)("abbr", {
                                    className: eC().logoTitle,
                                    title: "California Consumer Privacy Act",
                                    children: "CCPA"
                                })]
                            }), (0, l.jsxs)("li", {
                                children: [(0, l.jsx)("div", {
                                    className: eC().logoImgWrapper,
                                    children: (0, l.jsx)(eh.default, {
                                        src: eA,
                                        width: 72,
                                        height: 72,
                                        alt: ""
                                    })
                                }), (0, l.jsx)("abbr", {
                                    className: eC().logoTitle,
                                    title: "Service Organization Control Type 2",
                                    children: "SOC 2"
                                })]
                            })]
                        })]
                    })
                }),
                eS = s(20918),
                eI = s.n(eS),
                eH = () => {
                    let [e, t] = (0, m.useState)();
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(o.default, {}), (0, l.jsxs)("main", {
                            children: [(0, l.jsx)(ek, {
                                isMonthlyBilling: e,
                                setIsMonthlyBilling: t
                            }), (0, l.jsx)(er, {
                                isMonthlyBilling: e,
                                setIsMonthlyBilling: t
                            }), (0, l.jsx)(d.default, {
                                introDescription: "Apply to Whimsical for Startups and get 12 months of our Pro plan free with no future commitment.",
                                ctaComponent: h.default,
                                children: (0, l.jsx)(c.Z, {
                                    tag: h.default,
                                    invert: !0,
                                    className: eI().startupLearnMoreBtn,
                                    href: "/startups",
                                    children: "Learn more"
                                })
                            }), (0, l.jsx)(eT, {}), (0, l.jsx)(ec, {})]
                        }), (0, l.jsx)(a.default, {
                            includeCallout: !0
                        })]
                    })
                }
        },
        50080: function(e, t, s) {
            "use strict";
            s.d(t, {
                D: function() {
                    return r
                }
            });
            let r = function(e, t) {
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                e.preventDefault(), history.pushState({}, "", "#".concat(t));
                let r = document.querySelector("#".concat(t)),
                    n = window.scrollY + r.getBoundingClientRect().top + s;
                window.scrollTo({
                    left: 0,
                    top: n,
                    behavior: "smooth"
                })
            }
        },
        24764: function(e, t, s) {
            "use strict";
            var r = s(57437),
                n = s(4741),
                i = s.n(n),
                l = s(76849),
                a = s.n(l);
            let o = i().bind(a());
            t.Z = e => {
                let {
                    children: t,
                    className: s,
                    inline: n,
                    tag: i = "button",
                    theme: l,
                    invert: c,
                    ...d
                } = e;
                return (0, r.jsx)(i, {
                    "data-theme": l,
                    className: o(a().secondaryBtn, s, {
                        inline: n,
                        invert: c
                    }),
                    ...d,
                    children: (0, r.jsx)("span", {
                        className: a().inner,
                        children: t
                    })
                })
            }
        },
        5760: function(e, t, s) {
            "use strict";
            var r = s(57437),
                n = s(22139),
                i = s.n(n);
            t.Z = e => {
                let {
                    children: t
                } = e;
                return (0, r.jsx)("p", {
                    className: i().sectionKicker,
                    children: t
                })
            }
        },
        2031: function(e, t, s) {
            "use strict";
            var r = s(57437),
                n = s(15789),
                i = s(24764),
                l = s(5760),
                a = s(52189),
                o = s.n(a);
            t.default = e => {
                let {
                    introDescription: t,
                    ctaComponent: s,
                    ctaHref: a,
                    children: c
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: o().startups,
                        children: (0, r.jsxs)("div", {
                            className: o().inner,
                            children: [(0, r.jsxs)("div", {
                                className: o().content,
                                children: [(0, r.jsx)(l.Z, {
                                    children: "Whimsical for Startups"
                                }), (0, r.jsx)("h2", {
                                    className: o().hd,
                                    children: "NIgga distraction, more traction"
                                }), (0, r.jsx)("p", {
                                    className: o().description,
                                    children: t
                                }), c]
                            }), (0, r.jsx)("div", {
                                className: o().callout,
                                children: (0, r.jsxs)("div", {
                                    className: o().calloutInner,
                                    children: [(0, r.jsx)("p", {
                                        className: o().calloutKicker,
                                        children: "Get Whimsical Pro"
                                    }), (0, r.jsxs)("h3", {
                                        className: o().calloutHd,
                                        children: ["One year", (0, r.jsx)("br", {}), "for free"]
                                    }), (0, r.jsx)("p", {
                                        className: o().calloutDescription,
                                        children: "Get 12 months of our Pro plan for free with no future commitment. Open to all startups, regardless of funding or accelerator affiliation."
                                    }), (0, r.jsxs)("ul", {
                                        className: o().calloutFeatures,
                                        children: [(0, r.jsx)("li", {
                                            children: "New Whimsical customer"
                                        }), (0, r.jsx)("li", {
                                            children: "Fewer than 50 employees"
                                        }), (0, r.jsx)("li", {
                                            children: "Revenue under $1M gets 12 months free"
                                        }), (0, r.jsx)("li", {
                                            children: "Revenue over $1M gets 6 months free"
                                        })]
                                    }), (0, r.jsx)(i.Z, {
                                        tag: s,
                                        href: "https://whimsicalpowers.typeform.com/to/UlZ4xwmj",
                                        children: "Apply now"
                                    })]
                                })
                            })]
                        })
                    }), (0, r.jsx)(n.Z, {
                        isInset: !0
                    })]
                })
            }
        },
        80408: function(e) {
            e.exports = {
                cardKicker: "styles_cardKicker__6vBdH",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__uDUi2"
            }
        },
        16113: function(e) {
            e.exports = {
                grid: "styles_grid__6FB4v",
                planChooser: "styles_planChooser__aEODG",
                isNavHidden: "styles_isNavHidden__h02ID",
                planChooserInner: "styles_planChooserInner__gnoJl",
                planChooserTitle: "styles_planChooserTitle__GKGB6",
                planChooserOptions: "styles_planChooserOptions__1yh18",
                cards: "styles_cards__rbVyr",
                cardsList: "styles_cardsList__eJo_U",
                card: "styles_card__Zy4BK",
                cardHeader: "styles_cardHeader__FaJpK",
                cardTitle: "styles_cardTitle__OxFFe",
                cardToggle: "styles_cardToggle__X6Yr1",
                isExpanded: "styles_isExpanded__kQKUx",
                cardBody: "styles_cardBody__Ns2GZ",
                cardTooltip: "styles_cardTooltip__g5Wle",
                cardTable: "styles_cardTable__wPnDc",
                dash: "styles_dash__g8_wB",
                check: "styles_check__rA6lW",
                gridFooter: "styles_gridFooter__a07i_",
                gridFooterInner: "styles_gridFooterInner__iQtJR",
                gridFooterHeader: "styles_gridFooterHeader__2kLO4",
                gridFooterAnnualBilling: "styles_gridFooterAnnualBilling__OmURQ",
                gridFooterToggle: "styles_gridFooterToggle__go4JD",
                gridFooterPlans: "styles_gridFooterPlans__Z84Y6",
                gridFooterPlanCardKicker: "styles_gridFooterPlanCardKicker__yMZw5",
                gridFooterPlanPrice: "styles_gridFooterPlanPrice__K_Nn_",
                gridFooterPlanDescription: "styles_gridFooterPlanDescription__nppRl",
                gridFooterPlanBtn: "styles_gridFooterPlanBtn__A8iYP",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__pLcfA"
            }
        },
        71335: function(e) {
            e.exports = {
                compare: "styles_compare__PPqeP",
                intro: "styles_intro__del_m",
                introInner: "styles_introInner___RtG_",
                hd: "styles_hd__u8KVY",
                content: "styles_content__VLIjm",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__gY7PL"
            }
        },
        8408: function(e) {
            e.exports = {
                faq: "styles_faq__5MWIg",
                faqHd: "styles_faqHd__Fja7w",
                questions: "styles_questions__zV9Tu",
                question: "styles_question__0AtEz",
                questionInner: "styles_questionInner__l_Vwi",
                isOpen: "styles_isOpen__usAkT",
                isHovered: "styles_isHovered__rViWZ",
                questionQ: "styles_questionQ__e7tLm",
                questionA: "styles_questionA__El5a6",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__wegwI"
            }
        },
        70942: function(e) {
            e.exports = {
                cards: "styles_cards__aE_J_",
                cardList: "styles_cardList__TnlZX",
                card: "styles_card__ayXl_",
                cardKickerWrapper: "styles_cardKickerWrapper__w0_mT",
                cardKickerAddendum: "styles_cardKickerAddendum__2Lcyo",
                cardPrice: "styles_cardPrice__vFZx7",
                cardPriceAmount: "styles_cardPriceAmount__ivkTM",
                cardPricePer: "styles_cardPricePer__8fPmg",
                cardPriceDivider: "styles_cardPriceDivider__FmewX",
                cardDescription: "styles_cardDescription__9dFQf",
                cardFeaturesHd: "styles_cardFeaturesHd__6FDFF",
                cardFeaturesList: "styles_cardFeaturesList__Kfuqc",
                cardTooltipText: "styles_cardTooltipText__1EUWW",
                readMoreLinks: "styles_readMoreLinks__aD8uw",
                hideOnMobile: "styles_hideOnMobile__sE9Yt",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__UgtSl"
            }
        },
        38014: function(e) {
            e.exports = {
                hero: "styles_hero__g7a4c",
                heroInner: "styles_heroInner__rkF5x",
                heroHeader: "styles_heroHeader__GtXr6",
                heroHd: "styles_heroHd__Cbwu5",
                heroDescription: "styles_heroDescription__efyQ9",
                toggle: "styles_toggle__DBCn9",
                togglePill: "styles_togglePill__Jlmar",
                isActive: "styles_isActive__5RPrG",
                toggleBillingText: "styles_toggleBillingText__JIdlR",
                toggleDiscount: "styles_toggleDiscount___1yEn",
                carbonRemoval: "styles_carbonRemoval__QGuHA",
                socialProof: "styles_socialProof__malBc",
                socialProofHd: "styles_socialProofHd__rlaRd",
                socialProofLogos: "styles_socialProofLogos__XgVm3",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__fVHRF"
            }
        },
        70375: function(e) {
            e.exports = {
                security: "styles_security__OVsSQ",
                securityInner: "styles_securityInner__j2atG",
                securityContent: "styles_securityContent__ygDde",
                securityHd: "styles_securityHd__xW8uo",
                securityDescription: "styles_securityDescription__HHJB7",
                logos: "styles_logos__T9_85",
                logoImgWrapper: "styles_logoImgWrapper__4cj1l",
                logoTitle: "styles_logoTitle__D4XlH",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__SR99o"
            }
        },
        20918: function(e) {
            e.exports = {
                startupLearnMoreBtn: "styles_startupLearnMoreBtn__KHLc4",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__Qffyg"
            }
        },
        35356: function(e) {
            e.exports = {
                outer: "styles_outer__81esB",
                inner: "styles_inner__AKRh7",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__kFeUi"
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
        22139: function(e) {
            e.exports = {
                sectionKicker: "styles_sectionKicker__iYx9O",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__tXouv"
            }
        },
        52189: function(e) {
            e.exports = {
                startups: "styles_startups__wPyEU",
                inner: "styles_inner__GHXew",
                content: "styles_content__8d8VF",
                hd: "styles_hd__1Fjc4",
                description: "styles_description__ZomNr",
                callout: "styles_callout__szj4R",
                calloutInner: "styles_calloutInner__3FV7J",
                calloutKicker: "styles_calloutKicker__VRl0B",
                calloutHd: "styles_calloutHd__1xvP3",
                calloutDescription: "styles_calloutDescription__ajNZ6",
                calloutFeatures: "styles_calloutFeatures__973l8",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__PQrio"
            }
        },
        19502: function(e) {
            e.exports = {
                toggle: "styles_toggle__r31nd",
                isActive: "styles_isActive__NMB3l",
                dot: "styles_dot__OSeYy",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__nbQw1"
            }
        },
        52241: function(e) {
            e.exports = {
                wrapper: "styles_wrapper__c47wR",
                tooltip: "styles_tooltip__tq5mY",
                isVisible: "styles_isVisible___9TuC",
                isTop: "styles_isTop__tFiU2",
                isRight: "styles_isRight__F6zEM",
                tooltipNotch: "styles_tooltipNotch__P3WPi",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__jIDrF"
            }
        },
        36760: function(e, t) {
            var s;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function n() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var s = arguments[t];
                        s && (e = i(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return n.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var s in e) r.call(e, s) && e[s] && (t = i(t, s));
                            return t
                        }(s)))
                    }
                    return e
                }

                function i(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (n.default = n, e.exports = n) : void 0 !== (s = (function() {
                    return n
                }).apply(t, [])) && (e.exports = s)
            }()
        }
    },
    function(e) {
        e.O(0, [6451, 1003, 1742, 2614, 5359, 2707, 9927, 7453, 5789, 2971, 2117, 1744], function() {
            return e(e.s = 51825)
        }), _N_E = e.O()
    }
]);