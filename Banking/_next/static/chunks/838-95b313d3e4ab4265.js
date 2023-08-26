"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [838], {
        25563: function(e, t, r) {
            r.d(t, {
                hu: function() {
                    return w
                },
                St: function() {
                    return Z
                },
                gO: function() {
                    return F
                },
                tF: function() {
                    return C
                }
            });
            var n = r(59499),
                i = r(49501),
                o = r(61782),
                a = r(61953),
                s = r(72389),
                c = r(62097),
                l = r(61225),
                d = r(82334),
                u = r(81645),
                p = r(29630),
                x = r(31538),
                h = r(61702),
                f = r(67294),
                m = r(46930),
                b = r(48638),
                g = r(34637),
                v = r(59379),
                j = r(85893);

            function k(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var O, w = function(e) {
                    var t = b.ei[e];
                    return {
                        market: t,
                        network: b.m5[t.chainId]
                    }
                },
                Z = function(e) {
                    var t = ["G\xf6rli", "Ropsten", "Mumbai", "Fuji", "Testnet", "Kovan", "Rinkeby"],
                        r = e.split(" "),
                        n = r.filter((function(e) {
                            return t.indexOf(e) > -1
                        }));
                    return {
                        name: r.filter((function(e) {
                            return !n.includes(e)
                        })).join(" "),
                        testChainName: n[0]
                    }
                },
                F = function(e) {
                    var t = e.size,
                        r = e.logo,
                        n = e.testChainName;
                    return (0, j.jsxs)(a.Z, {
                        sx: {
                            mr: 2,
                            width: t,
                            height: t,
                            position: "relative"
                        },
                        children: [(0, j.jsx)("img", {
                            src: r,
                            alt: "",
                            width: "100%",
                            height: "100%"
                        }), n && (0, j.jsx)(s.Z, {
                            title: n,
                            arrow: !0,
                            children: (0, j.jsx)(a.Z, {
                                sx: {
                                    bgcolor: "#29B6F6",
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%",
                                    color: "common.white",
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    right: "-2px",
                                    bottom: "-2px"
                                },
                                children: n.split("")[0]
                            })
                        })]
                    })
                };
            ! function(e) {
                e[e.V2 = 0] = "V2", e[e.V3 = 1] = "V3"
            }(O || (O = {}));
            var C = function() {
                var e = (0, m.f)(),
                    t = e.currentMarket,
                    r = e.setCurrentMarket,
                    n = (0, f.useState)(O.V3),
                    s = n[0],
                    k = n[1],
                    C = (0, c.Z)(),
                    P = (0, l.Z)(C.breakpoints.up("lg")),
                    S = (0, l.Z)(C.breakpoints.down("xsm")),
                    M = b.z2.map((function(e) {
                        return w(e).market.v3
                    })).some((function(e) {
                        return !!e
                    }));
                return (0, j.jsxs)(d.Z, {
                    select: !0,
                    "aria-label": "select market",
                    "data-cy": "marketSelector",
                    value: t,
                    onChange: function(e) {
                        return r(e.target.value)
                    },
                    sx: {
                        mr: 2,
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none"
                        }
                    },
                    SelectProps: {
                        native: !1,
                        className: "MarketSwitcher__select",
                        IconComponent: function(e) {
                            return (0, j.jsx)(u.Z, y(y({
                                fontSize: "medium"
                            }, e), {}, {
                                children: (0, j.jsx)(o.Z, {})
                            }))
                        },
                        renderValue: function(e) {
                            var t = w(e),
                                r = t.market,
                                n = t.network;
                            return (0, j.jsxs)(a.Z, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [(0, j.jsx)(F, {
                                    size: P ? 32 : 28,
                                    logo: n.networkLogoPath,
                                    testChainName: Z(r.marketTitle).testChainName
                                }), (0, j.jsxs)(a.Z, {
                                    sx: {
                                        mr: 1,
                                        display: "inline-flex",
                                        alignItems: "flex-start"
                                    },
                                    children: [(0, j.jsxs)(p.Z, {
                                        variant: P ? "display1" : "h1",
                                        sx: {
                                            fontSize: S ? "1.55rem" : void 0,
                                            color: "common.white",
                                            mr: 1
                                        },
                                        children: [Z(r.marketTitle).name, " ", r.isFork ? "Fork" : "", P && " Market"]
                                    }), r.v3 && (0, j.jsx)(a.Z, {
                                        sx: {
                                            color: "#fff",
                                            px: 2,
                                            borderRadius: "12px",
                                            background: function(e) {
                                                return e.palette.gradients.aaveGradient
                                            }
                                        },
                                        children: (0, j.jsx)(p.Z, {
                                            variant: "subheader2",
                                            children: "Version 3"
                                        })
                                    })]
                                })]
                            })
                        },
                        sx: {
                            "&.MarketSwitcher__select .MuiSelect-outlined": {
                                p: 0,
                                backgroundColor: "transparent !important"
                            },
                            ".MuiSelect-icon": {
                                color: "#F1F1F3"
                            }
                        },
                        MenuProps: {
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right"
                            },
                            PaperProps: {
                                style: {
                                    minWidth: 240
                                },
                                variant: "outlined",
                                elevation: 0
                            }
                        }
                    },
                    children: [(0, j.jsx)(a.Z, {
                        children: (0, j.jsx)(p.Z, {
                            variant: "subheader2",
                            color: "text.secondary",
                            sx: {
                                px: 4,
                                pt: 2
                            },
                            children: (0, j.jsx)(i.cC, {
                                id: "{0}",
                                values: {
                                    0: b.p8 || b.aV ? "Select Spark Testnet Market" : "Select Spark Market"
                                }
                            })
                        })
                    }), M && (0, j.jsx)(a.Z, {
                        sx: {
                            mx: "18px",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: (0, j.jsxs)(v.Z, {
                            value: s,
                            exclusive: !0,
                            onChange: function(e, t) {
                                null !== t && k(t)
                            },
                            sx: {
                                width: "100%",
                                height: "36px",
                                background: C.palette.primary.main,
                                border: "1px solid ".concat("dark" === C.palette.mode ? "rgba(235, 235, 237, 0.12)" : "#1B2030"),
                                borderRadius: "6px",
                                marginTop: "16px",
                                marginBottom: "12px",
                                padding: "2px"
                            },
                            children: [(0, j.jsx)(g.Z, {
                                value: O.V3,
                                "data-cy": "markets_switch_button_v3",
                                sx: {
                                    backgroundColor: "dark" === C.palette.mode ? "#EAEBEF" : "#383D51",
                                    "&.Mui-selected, &.Mui-selected:hover": {
                                        backgroundColor: "dark" === C.palette.mode ? "#292E41" : "#FFFFFF",
                                        boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)"
                                    },
                                    borderRadius: "4px"
                                },
                                children: (0, j.jsx)(p.Z, {
                                    variant: "buttonM",
                                    sx: s === O.V3 ? {
                                        backgroundImage: function(e) {
                                            return e.palette.gradients.aaveGradient
                                        },
                                        backgroundClip: "text",
                                        color: "transparent"
                                    } : {
                                        color: "dark" === C.palette.mode ? "#0F121D" : "#FFFFFF"
                                    },
                                    children: (0, j.jsx)(i.cC, {
                                        id: "Version 3"
                                    })
                                })
                            }), (0, j.jsx)(g.Z, {
                                value: O.V2,
                                "data-cy": "markets_switch_button_v2",
                                sx: {
                                    backgroundColor: "dark" === C.palette.mode ? "#EAEBEF" : "#383D51",
                                    "&.Mui-selected, &.Mui-selected:hover": {
                                        backgroundColor: "dark" === C.palette.mode ? "#292E41" : "#FFFFFF",
                                        boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)"
                                    },
                                    borderRadius: "4px"
                                },
                                children: (0, j.jsx)(p.Z, {
                                    variant: "buttonM",
                                    sx: s === O.V2 ? {
                                        backgroundImage: function(e) {
                                            return e.palette.gradients.aaveGradient
                                        },
                                        backgroundClip: "text",
                                        color: "transparent"
                                    } : {
                                        color: "dark" === C.palette.mode ? "#0F121D" : "#FFFFFF"
                                    },
                                    children: (0, j.jsx)(i.cC, {
                                        id: "Version 2"
                                    })
                                })
                            })]
                        })
                    }), b.z2.map((function(e) {
                        var t = w(e),
                            r = t.market,
                            n = t.network,
                            i = Z(r.marketTitle);
                        return (0, j.jsxs)(x.Z, {
                            "data-cy": "marketSelector_".concat(e),
                            value: e,
                            sx: {
                                ".MuiListItemIcon-root": {
                                    minWidth: "unset"
                                },
                                display: r.v3 && s === O.V2 || !r.v3 && s === O.V3 ? "none" : "flex"
                            },
                            children: [(0, j.jsx)(F, {
                                size: 32,
                                logo: n.networkLogoPath,
                                testChainName: i.testChainName
                            }), (0, j.jsxs)(h.Z, {
                                sx: {
                                    mr: 0
                                },
                                children: [i.name, " ", r.isFork ? "Fork" : ""]
                            }), (0, j.jsx)(h.Z, {
                                sx: {
                                    textAlign: "right"
                                },
                                children: (0, j.jsx)(p.Z, {
                                    color: "text.muted",
                                    variant: "description",
                                    children: i.testChainName
                                })
                            })]
                        }, e)
                    }))]
                })
            }
        },
        40535: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return h
                }
            });
            var n = r(49501),
                i = r(62097),
                o = r(61225),
                a = r(61953),
                s = r(29630),
                c = r(75084),
                l = r(72629),
                d = r(67728),
                u = r(25563),
                p = r(68861),
                x = r(85893),
                h = function(e) {
                    var t = e.pageTitle,
                        r = e.withMarketSwitcher,
                        h = e.withMigrateButton,
                        f = (0, l.Yh)((function(e) {
                            return (0, d.lY)(e)
                        })),
                        m = (0, i.Z)(),
                        b = (0, o.Z)(m.breakpoints.up("lg")),
                        g = (0, o.Z)(m.breakpoints.down("xsm"));
                    return (0, x.jsxs)(a.Z, {
                        sx: {
                            display: "flex",
                            alignItems: {
                                xs: "flex-start",
                                xsm: "center"
                            },
                            mb: t ? 4 : 0,
                            flexDirection: {
                                xs: "column",
                                xsm: "row"
                            }
                        },
                        children: [t && (g || !r) && (0, x.jsx)(a.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "flex-start"
                            },
                            children: (0, x.jsx)(s.Z, {
                                variant: g ? "h2" : b ? "display1" : "h1",
                                sx: {
                                    color: r ? "text.muted" : "text.white",
                                    mr: {
                                        xs: 5,
                                        xsm: 3
                                    },
                                    mb: {
                                        xs: 1,
                                        xsm: 0
                                    }
                                },
                                children: t
                            })
                        }), (0, x.jsxs)(a.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "flex-start",
                                flexWrap: "wrap",
                                mb: t ? 0 : 4
                            },
                            children: [r && (0, x.jsx)(u.tF, {}), f && h && (0, x.jsx)(p.rU, {
                                href: p.Z6.migrationTool,
                                sx: {
                                    mt: {
                                        xs: 2,
                                        xsm: 0
                                    }
                                },
                                children: (0, x.jsx)(c.Z, {
                                    variant: "gradient",
                                    size: "small",
                                    children: (0, x.jsx)(n.cC, {
                                        id: "Migrate to Spark Protocol"
                                    })
                                })
                            })]
                        })]
                    })
                }
        },
        45884: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return o
                }
            });
            var n = r(61953),
                i = r(85893),
                o = function(e) {
                    var t = e.isRow,
                        r = e.children,
                        o = e.minWidth,
                        a = e.maxWidth,
                        s = e.align,
                        c = void 0 === s ? "center" : s,
                        l = e.overFlow,
                        d = void 0 === l ? "visible" : l;
                    return (0, i.jsx)(n.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: t ? "row" : "column",
                            alignItems: t ? "center" : "left" === c ? "flex-start" : "right" === c ? "flex-end" : c,
                            justifyContent: t ? "flex-start" : "flex-end",
                            flex: 1,
                            minWidth: o || "70px",
                            maxWidth: a,
                            overflow: d,
                            p: 1
                        },
                        children: r
                    })
                }
        },
        99435: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return a
                }
            });
            var n = r(29630),
                i = r(61953),
                o = r(85893),
                a = function(e) {
                    var t = e.sortName,
                        r = e.sortDesc,
                        a = e.sortKey,
                        s = e.setSortName,
                        c = e.setSortDesc,
                        l = e.onClick,
                        d = e.children;
                    return (0, o.jsxs)(n.Z, {
                        component: "div",
                        variant: "subheader2",
                        color: "text.secondary",
                        noWrap: !0,
                        onClick: function() {
                            return l ? l() : !!a && (e = a, c && c(!1), s && s(e), void(t === e && c && c(!r)));
                            var e
                        },
                        sx: {
                            cursor: l || a ? "pointer" : "default",
                            display: "inline-flex",
                            alignItems: "center"
                        },
                        children: [d, !!a && (0, o.jsxs)(i.Z, {
                            sx: {
                                display: "inline-flex",
                                flexDirection: "column",
                                ml: 1
                            },
                            children: [(0, o.jsx)(i.Z, {
                                component: "span",
                                sx: function(e) {
                                    return {
                                        width: 0,
                                        height: 0,
                                        borderStyle: "solid",
                                        borderWidth: "0 4px 4px 4px",
                                        borderColor: "transparent transparent ".concat(t === a && r ? e.palette.text.secondary : e.palette.divider, " transparent"),
                                        mb: .5
                                    }
                                }
                            }), (0, o.jsx)(i.Z, {
                                component: "span",
                                sx: function(e) {
                                    return {
                                        width: 0,
                                        height: 0,
                                        borderStyle: "solid",
                                        borderWidth: "4px 4px 0 4px",
                                        borderColor: "".concat(t !== a || r ? e.palette.divider : e.palette.text.secondary, " transparent transparent transparent")
                                    }
                                }
                            })]
                        })]
                    })
                }
        },
        1475: function(e, t, r) {
            r.d(t, {
                u: function() {
                    return d
                }
            });
            var n = r(59499),
                i = r(4730),
                o = r(61953),
                a = r(85893),
                s = ["px", "children"];

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                var t = e.px,
                    r = void 0 === t ? 4 : t,
                    n = e.children,
                    c = (0, i.Z)(e, s);
                return (0, a.jsx)(o.Z, l(l({}, c), {}, {
                    sx: l({
                        display: "flex",
                        alignItems: "flex-end",
                        px: r,
                        pt: 4,
                        pb: 1,
                        top: 0,
                        zIndex: 100,
                        borderBottom: "1px solid",
                        borderColor: "divider"
                    }, c.sx),
                    children: n
                }))
            }
        },
        32383: function(e, t, r) {
            r.d(t, {
                H: function() {
                    return d
                }
            });
            var n = r(59499),
                i = r(4730),
                o = r(61953),
                a = r(85893),
                s = ["children", "minHeight", "px", "button"];

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                var t = e.children,
                    r = e.minHeight,
                    n = void 0 === r ? 71 : r,
                    c = e.px,
                    d = void 0 === c ? 4 : c,
                    u = e.button,
                    p = (0, i.Z)(e, s);
                return (0, a.jsx)(o.Z, l(l({}, p), {}, {
                    sx: l(l({
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "background.paper",
                        minHeight: n,
                        px: d
                    }, u ? {
                        "&:hover": {
                            bgcolor: "action.hover"
                        }
                    } : {}), {}, {
                        "&:not(:last-child)": {
                            borderBottom: "1px solid",
                            borderColor: "divider"
                        }
                    }, p.sx),
                    children: t
                }))
            }
        }
    }
]);