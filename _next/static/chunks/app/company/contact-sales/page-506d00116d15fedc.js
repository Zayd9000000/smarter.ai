(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1031], {
        88643: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 93866)), Promise.resolve().then(t.t.bind(t, 12160, 23)), Promise.resolve().then(t.t.bind(t, 43261, 23)), Promise.resolve().then(t.bind(t, 17453)), Promise.resolve().then(t.bind(t, 39927))
        },
        93866: function(e, s, t) {
            "use strict";
            t.d(s, {
                default: function() {
                    return S
                }
            });
            var r = t(57437),
                a = t(8616),
                i = t.n(a),
                l = e => {
                    let {
                        children: s
                    } = e;
                    return (0, r.jsx)("div", {
                        className: i().error,
                        children: s
                    })
                },
                n = t(12478),
                c = t(24764),
                o = t(4741),
                d = t.n(o),
                _ = t(63993),
                m = t(33145),
                u = t(99376),
                h = t(2265),
                p = t(34422);
            let b = (0, p.Ry)({
                    data__Name: (0, p.Z_)().min(2, "Name must be at least 2 characters").required("Name is required"),
                    data__email: (0, p.Z_)().email("Invalid email address").required("Email is required")
                }),
                y = [{
                    autoComplete: "name",
                    label: "Name",
                    name: "data__Name",
                    required: !0,
                    type: "text"
                }, {
                    autoComplete: "email",
                    label: "Work email",
                    name: "data__email",
                    required: !0,
                    type: "text"
                }, {
                    as: "textarea",
                    label: (0, r.jsxs)(r.Fragment, {
                        children: ["How can we help? ", (0, r.jsx)("em", {
                            children: "(optional)"
                        })]
                    }),
                    name: "data__details",
                    placeholder: "Tell us about your team and provide some details about how you'd like to use SMARTER.AI..."
                }],
                f = e => y.reduce((s, t) => {
                    let {
                        name: r
                    } = t;
                    return {
                        ...s,
                        [r]: e && e.get(r.replace(/^data__/, "").replace(/\s/, "-")) || ""
                    }
                }, {});
            var x = {
                    src: "/_next/static/media/macos-icon@89x89@2x.c2cf7456.webp",
                    height: 178,
                    width: 178,
                    blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDoAAAANYFTbtpLzDZnb2LvQjkRM/yIDIdy1RkQE+D7HBqUFVVmRAibpkADy4zbAI2ibgCkW/1L3+Aq+60UAVlA4IGAAAABwAgCdASoIAAgAAkA4JbACdLoB+AARB5V9ic6AAP7qVYl+WVCNXnW+/VtHT3tLwcNzB1mYKiiMTyxisrhF9bUG5/9DmKu2JImzHYc8jM6W4h/2ufOEMF4bYmv1jnMYAAA=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                g = t(64135),
                A = t.n(g);
            let j = d().bind(A()),
                N = (e, s, t) => {
                    let {
                        setStatus: a,
                        setSubmitting: i
                    } = t;
                    window.fetch("https://hooks.zapier.com/hooks/catch/8662302/3cbjetn/", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        mode: "no-cors",
                        body: JSON.stringify({
                            submittedAt: new Date().toISOString(),
                            name: "Contact",
                            ...s
                        })
                    }).then(s => {
                        i(!1), e(!0)
                    }).catch(e => {
                        console.log("Error!", e), a({
                            api: (0, r.jsxs)(r.Fragment, {
                                children: ["Sorry, something went wrong. Please try again, or email", " ", (0, r.jsx)("a", {
                                    href: "mailto:info@smarterai.com",
                                    children: "info@smarterai.com"
                                }), "."]
                            })
                        }), i(!1)
                    })
                },
                v = e => {
                    let {
                        getError: s,
                        ...t
                    } = e;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            className: A().formFieldWrapper,
                            children: (0, r.jsx)(n.U, {
                                ...t
                            })
                        })
                    })
                },
                k = e => {
                    let {
                        didSucceed: s,
                        formikProps: t
                    } = e, {
                        values: a,
                        errors: i,
                        status: n,
                        touched: o,
                        isSubmitting: d
                    } = t;
                    return (0, r.jsxs)(_.l0, {
                        className: A().form,
                        children: [(0, r.jsxs)("div", {
                            className: j({
                                formInner: !0,
                                isSubmitting: d,
                                didSucceed: s
                            }),
                            children: [(0, r.jsxs)("div", {
                                className: A().formContent,
                                children: [y.map(e => (0, r.jsx)(v, {
                                    values: a,
                                    errors: i,
                                    touched: o,
                                    ...e
                                }, e.name)), n && n.api && (0, r.jsx)(l, {
                                    children: n.api
                                }), (0, r.jsx)(c.Z, {
                                    className: A().submitBtn,
                                    invert: !0,
                                    type: "submit",
                                    disabled: d,
                                    children: "Contact"
                                }), (0, r.jsx)("p", {
                                    className: A().or,
                                    children: (0, r.jsx)("span", {
                                        children: "or"
                                    })
                                }), (0, r.jsx)(c.Z, {
                                    target: "_blank",
                                    tag: "a",
                                    href: "https://calendly.com/smarter-ai/30min",
                                    children: "Schedule a call"
                                })]
                            }), (0, r.jsx)("div", {
                                className: A().success,
                                children: (0, r.jsxs)("div", {
                                    className: A().successInner,
                                    children: [(0, r.jsx)(m.default, {
                        
                                    }), (0, r.jsx)("h3", {
                                        className: A().successHd,
                                        children: "Thank you!"
                                    }), (0, r.jsx)("p", {
                                        className: A().successSubHd,
                                        children: "Your submission has been received."
                                    }), (0, r.jsx)("p", {
                                        className: A().successDescription,
                                        children: "Someone from our team will reach out to you shortly."
                                    })]
                                })
                            })]
                        })]
                    })
                };
            var S = () => {
                let [e, s] = (0, h.useState)(!1), t = (0, u.useSearchParams)();
                return (0, r.jsx)(_.J9, {
                    initialValues: f(t),
                    validationSchema: b,
                    onSubmit: (e, t) => N(s, e, t),
                    children: s => (0, r.jsx)(k, {
                        formikProps: s,
                        didSucceed: e
                    })
                })
            }
        },
        12478: function(e, s, t) {
            "use strict";
            t.d(s, {
                U: function() {
                    return h
                },
                Z: function() {
                    return u
                }
            });
            var r = t(57437),
                a = t(4741),
                i = t.n(a),
                l = t(63993),
                n = t(33145),
                c = {
                    src: "/_next/static/media/error-corner.883a08a7.svg",
                    height: 10,
                    width: 10,
                    blurWidth: 0,
                    blurHeight: 0
                },
                o = t(52176),
                d = t.n(o);
            let _ = i().bind(d()),
                m = e => {
                    let {
                        label: s,
                        component: t,
                        children: a,
                        error: i,
                        value: l,
                        ...o
                    } = e, m = !!i, u = !!l, h = "select" === t || "select" === o.as;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(n.default, {
                            priority: !0,
                            alt: "",
                            src: c,
                            width: 1,
                            height: 1,
                            className: "visually-hidden"
                        }), (0, r.jsx)("div", {
                            className: _({
                                field: !0,
                                hasError: m
                            }),
                            children: (0, r.jsxs)("label", {
                                children: [s && (0, r.jsx)("div", {
                                    className: d().labelText,
                                    children: s
                                }), (0, r.jsx)("div", {
                                    className: _({
                                        inputWrapper: !0,
                                        hasError: m,
                                        isFilled: u,
                                        isSelect: h
                                    }),
                                    children: (0, r.jsx)(t || "input", {
                                        ...o,
                                        className: _(o.className, {
                                            isFilled: u,
                                            hasError: m
                                        }),
                                        children: a
                                    })
                                }), m && (0, r.jsx)("div", {
                                    className: d().error,
                                    children: i
                                })]
                            })
                        })]
                    })
                };
            var u = m;
            let h = e => {
                let {
                    errors: s,
                    touched: t,
                    values: a,
                    ...i
                } = e, {
                    name: n
                } = i, c = t[i.name] && s[n];
                return (0, r.jsx)(m, {
                    component: l.gN,
                    value: a[n],
                    error: c && s[n],
                    ...i
                })
            }
        },
        24764: function(e, s, t) {
            "use strict";
            var r = t(57437),
                a = t(4741),
                i = t.n(a),
                l = t(76849),
                n = t.n(l);
            let c = i().bind(n());
            s.Z = e => {
                let {
                    children: s,
                    className: t,
                    inline: a,
                    tag: i = "button",
                    theme: l,
                    invert: o,
                    ...d
                } = e;
                return (0, r.jsx)(i, {
                    "data-theme": l,
                    className: c(n().secondaryBtn, t, {
                        inline: a,
                        invert: o
                    }),
                    ...d,
                    children: (0, r.jsx)("span", {
                        className: n().inner,
                        children: s
                    })
                })
            }
        },
        64135: function(e) {
            e.exports = {
                form: "styles_form__Ld2wh",
                formInner: "styles_formInner__e_AUK",
                isSubmitting: "styles_isSubmitting__JzosW",
                didSucceed: "styles_didSucceed__1MxZ2",
                formContent: "styles_formContent__P8DsN",
                formFieldWrapper: "styles_formFieldWrapper__YXO2F",
                isLast: "styles_isLast__0K9d1",
                submitBtn: "styles_submitBtn__L4Nij",
                or: "styles_or__zkL7T",
                success: "styles_success__7QCII",
                successInner: "styles_successInner__KcPpQ",
                successLogo: "styles_successLogo__2jLI_",
                successHd: "styles_successHd__oOKHv",
                successSubHd: "styles_successSubHd__EAWQl",
                successDescription: "styles_successDescription__b94IH",
               
            }
        },
       
        43261: function(e) {
            e.exports = {
                mainContent: "styles_mainContent__7IDA2",
                mainContentInner: "styles_mainContentInner__DR_3T",
                intro: "styles_intro__NsgiF",
                hd: "styles_hd__b4pOX",
                subHd: "styles_subHd__H7Rtc",
                formWrapper: "styles_formWrapper__6Q_X6",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__gSSaj"
            }
        },
        8616: function(e) {
            e.exports = {
                error: "styles_error__PHiHy",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__V0tGd"
            }
        },
        52176: function(e) {
            e.exports = {
                field: "styles_field__ris8k",
                isFilled: "styles_isFilled__PgJf8",
                hasError: "styles_hasError__1tKwD",
                error: "styles_error__hQKYU",
                inputWrapper: "styles_inputWrapper__P5rGL",
                isSelect: "styles_isSelect__DfYSt",
                labelText: "styles_labelText__KhZWX",
                "slide-bg-back-and-forth": "styles_slide-bg-back-and-forth__jycSm"
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
        }
    },
    function(e) {
        e.O(0, [6143, 6451, 5187, 5359, 2707, 3993, 4422, 9927, 7453, 2971, 2117, 1744], function() {
            return e(e.s = 88643)
        }), _N_E = e.O()
    }
]);