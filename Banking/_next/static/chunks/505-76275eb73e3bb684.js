"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [505], {
        25002: function(e, r, t) {
            t.d(r, {
                l: function() {
                    return a
                }
            });
            var n = t(49501),
                o = t(25169),
                s = t(68861),
                i = t(85893),
                a = function(e) {
                    var r = e.symbol,
                        t = e.currentMarket;
                    return (0, i.jsx)(n.cC, {
                        id: "Borrowing is disabled due to an DAI PROTOCOL community decision. <0>More details</0>",
                        components: {
                            0: (0, i.jsx)(s.rU, {
                                href: (0, o.E)(r, t),
                                sx: {
                                    textDecoration: "underline"
                                }
                            })
                        }
                    })
                }
        },
        64609: function(e, r, t) {
            t.d(r, {
                G: function() {
                    return b
                }
            });
            var n = t(49501),
                o = t(1279),
                s = t(61953),
                i = t(29630),
                a = t(41024),
                l = t(58771),
                c = t(81645),
                u = t(97563),
                d = t(81902),
                p = t(85893),
                m = function(e) {
                    var r = e.availableValue,
                        t = e.isUSD,
                        o = e.capType,
                        s = t ? "".concat(r, "$") : r,
                        i = void 0;
                    return r > 0 ? i = o === d.R.supplyCap ? (0, p.jsx)(n.cC, {
                        id: "This asset has almost reached its supply cap. There can only be {messageValue} supplied to this market.",
                        values: {
                            messageValue: s
                        }
                    }) : (0, p.jsx)(n.cC, {
                        id: "This asset has almost reached its borrow cap. There is only {messageValue} available to be borrowed from this market.",
                        values: {
                            messageValue: s
                        }
                    }) : r <= 0 && (i = o === d.R.supplyCap ? (0, p.jsx)(n.cC, {
                        id: "This asset has reached its supply cap. Nothing is available to be supplied from this market."
                    }) : (0, p.jsx)(n.cC, {
                        id: "This asset has reached its borrow cap. Nothing is available to be borrowed from this market."
                    })), (0, p.jsx)(u.a, {
                        tooltipContent: (0, p.jsx)(p.Fragment, {
                            children: i || ""
                        }),
                        children: (0, p.jsx)(c.Z, {
                            sx: {
                                fontSize: "14px",
                                color: "error.main"
                            },
                            children: (0, p.jsx)(l.Z, {})
                        })
                    })
                },
                b = function(e) {
                    var r = e.capType,
                        t = e.capAmount,
                        l = e.totalAmount,
                        c = e.isUSD,
                        u = e.withoutText,
                        b = Number(t);
                    if (b <= 0) return null;
                    var x = (0, o.hE)(l).dividedBy(b).toNumber(),
                        f = (0, o.hE)(b).minus(l).multipliedBy("0.995").toNumber(),
                        h = r === d.R.supplyCap ? (0, p.jsx)(n.cC, {
                            id: "Available to supply"
                        }) : (0, p.jsx)(n.cC, {
                            id: "Available to borrow"
                        });
                    return x < .99 ? null : (0, p.jsxs)(s.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            ml: u ? 1 : 0
                        },
                        children: [(0, p.jsx)(m, {
                            availableValue: f,
                            isUSD: c,
                            capType: r
                        }), !u && (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(i.Z, {
                                variant: "tooltip",
                                color: "text.secondary",
                                children: h
                            }), (0, p.jsx)(a.B, {
                                value: f >= 0 ? f : 0,
                                compact: !0,
                                symbol: c ? "USD" : void 0,
                                variant: "tooltip"
                            })]
                        })]
                    })
                }
        },
        52906: function(e, r, t) {
            t.d(r, {
                J: function() {
                    return l
                }
            });
            var n = t(61953),
                o = t(41024),
                s = t(14463),
                i = t(12349),
                a = t(85893),
                l = function(e) {
                    var r = e.symbol,
                        t = e.value,
                        l = e.incentives,
                        c = e.variant,
                        u = void 0 === c ? "secondary14" : c,
                        d = e.symbolsVariant,
                        p = e.align,
                        m = e.color;
                    return (0, a.jsxs)(n.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: p || {
                                xs: "flex-end",
                                xsm: "center"
                            },
                            justifyContent: "center",
                            textAlign: "center"
                        },
                        children: ["-1" !== t.toString() ? (0, a.jsx)(o.B, {
                            value: t,
                            percent: !0,
                            variant: u,
                            symbolsVariant: d,
                            color: m,
                            symbolsColor: m
                        }) : (0, a.jsx)(s.J, {
                            variant: u,
                            color: m || "text.secondary"
                        }), (0, a.jsx)(i.M, {
                            incentives: l,
                            symbol: r
                        })]
                    })
                }
        },
        35161: function(e, r, t) {
            t.d(r, {
                $: function() {
                    return c
                }
            });
            var n = t(58771),
                o = t(61953),
                s = t(81645),
                i = t(97563),
                a = t(84734),
                l = t(85893),
                c = function() {
                    return (0, l.jsx)(i.a, {
                        tooltipContent: (0, l.jsx)(o.Z, {
                            children: (0, l.jsx)(a.v, {})
                        }),
                        children: (0, l.jsx)(s.Z, {
                            sx: {
                                fontSize: "20px",
                                color: "warning.main",
                                ml: 2
                            },
                            children: (0, l.jsx)(n.Z, {})
                        })
                    })
                }
        },
        69507: function(e, r, t) {
            t.d(r, {
                w: function() {
                    return c
                }
            });
            var n = t(58771),
                o = t(61953),
                s = t(81645),
                i = t(97563),
                a = t(25002),
                l = t(85893),
                c = function(e) {
                    var r = e.symbol,
                        t = e.currentMarket;
                    return (0, l.jsx)(i.a, {
                        tooltipContent: (0, l.jsx)(o.Z, {
                            children: (0, l.jsx)(a.l, {
                                symbol: r,
                                currentMarket: t
                            })
                        }),
                        children: (0, l.jsx)(s.Z, {
                            sx: {
                                fontSize: "20px",
                                color: "error.main",
                                ml: 2
                            },
                            children: (0, l.jsx)(n.Z, {})
                        })
                    })
                }
        },
        25169: function(e, r, t) {
            t.d(r, {
                E: function() {
                    return u
                },
                Q: function() {
                    return d
                }
            });
            var n = t(49501),
                o = t(58771),
                s = t(61953),
                i = t(81645),
                a = t(97563),
                l = t(68861),
                c = t(85893),
                u = function(e, r) {
                    return "https://vote.makerdao.com/polling"
                },
                d = function(e) {
                    var r = e.symbol,
                        t = e.currentMarket;
                    return (0, c.jsx)(a.a, {
                        tooltipContent: (0, c.jsx)(s.Z, {
                            children: (0, c.jsx)(n.cC, {
                                id: "This asset is frozen due to an DAI Protocol Governance decision. <0>More details</0>",
                                components: {
                                    0: (0, c.jsx)(l.rU, {
                                        href: u(r, t),
                                        sx: {
                                            textDecoration: "underline"
                                        }
                                    })
                                }
                            })
                        }),
                        children: (0, c.jsx)(i.Z, {
                            sx: {
                                fontSize: "20px",
                                color: "error.main",
                                ml: 2
                            },
                            children: (0, c.jsx)(o.Z, {})
                        })
                    })
                }
        },
        42115: function(e, r, t) {
            t.d(r, {
                F: function() {
                    return u
                }
            });
            var n = t(49501),
                o = t(58771),
                s = t(61953),
                i = t(81645),
                a = t(97563),
                l = t(68861),
                c = t(85893),
                u = function() {
                    return (0, c.jsx)(a.a, {
                        tooltipContent: (0, c.jsx)(s.Z, {
                            children: (0, c.jsx)(n.cC, {
                                id: "This asset is frozen due to an DAI Protocol Governance decision. On the 20th of December 2022, renFIL will no longer be supported and cannot be bridged back to its native network. It is recommended to withdraw supply positions and repay borrow positions so that renFIL can be bridged back to FIL before the deadline. After this date, it will no longer be possible to convert renFIL to FIL. <0>More details</0>",
                                components: {
                                    0: (0, c.jsx)(l.rU, {
                                        href: "https://medium.com/",
                                        sx: {
                                            textDecoration: "underline"
                                        }
                                    })
                                }
                            })
                        }),
                        children: (0, c.jsx)(i.Z, {
                            sx: {
                                fontSize: "20px",
                                color: "error.main",
                                ml: 2
                            },
                            children: (0, c.jsx)(o.Z, {})
                        })
                    })
                }
        },
        14379: function(e, r, t) {
            t.d(r, {
                B: function() {
                    return u
                }
            });
            var n = t(59499),
                o = t(36864),
                s = t(49501),
                i = t(58527),
                a = t(85893);

            function l(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function c(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? l(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var u = function(e) {
                var r = (0, o.Z)({}, e);
                return (0, a.jsx)(i.G, c(c({}, r), {}, {
                    children: (0, a.jsx)(s.cC, {
                        id: "Variable interest rate will <0>fluctuate</0> based on the market conditions. Recommended for short-term positions.",
                        components: {
                            0: (0, a.jsx)("b", {})
                        }
                    })
                }))
            }
        },
        14463: function(e, r, t) {
            t.d(r, {
                J: function() {
                    return l
                }
            });
            var n = t(59499),
                o = t(29630),
                s = (t(67294), t(85893));

            function i(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function a(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? i(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var l = function(e) {
                return (0, s.jsx)(o.Z, a(a({}, e), {}, {
                    children: "\u2014"
                }))
            }
        },
        14795: function(e, r, t) {
            t.d(r, {
                C: function() {
                    return u
                }
            });
            var n = t(49501),
                o = t(29630),
                s = t(68346),
                i = t(19952),
                a = t(85893),
                l = function(e) {
                    var r = e.market;
                    return "Harmony" === r ? (0, a.jsx)(n.cC, {
                        id: "Due to the Horizon bridge exploit, certain assets on the Harmony network are not at parity with Ethereum, which affects the Aave V3 Harmony market."
                    }) : "Fantom" === r ? (0, a.jsx)(n.cC, {
                        id: "Per the community, the Fantom market has been frozen."
                    }) : (0, a.jsx)(a.Fragment, {})
                },
                c = function(e, r) {
                    return "Harmony" === e ? r ? "https://governance.aave.com/t/harmony-horizon-bridge-exploit-consequences-to-aave-v3-harmony/8614" : "https://snapshot.org/#/aave.eth/proposal/0x81a78109941e5e0ac6cb5ebf82597c839c20ad6821a8c3ff063dba39032533d4" : "Fantom" === e ? r ? "https://governance.aave.com/t/arc-aave-v3-fantom-freeze-reserves/9166" : "https://snapshot.org/#/aave.eth/proposal/0xeefcd76e523391a14cfd0a79b531ea0a3faf0eb4a058e255fac13a2d224cc647" : ""
                },
                u = function(e) {
                    var r = e.marketName,
                        t = e.forum;
                    return (0, a.jsx)(i.v, {
                        severity: "error",
                        children: (0, a.jsxs)(o.Z, {
                            variant: "caption",
                            children: [(0, a.jsx)(l, {
                                market: r
                            }), " ", (0, a.jsx)(s.Z, {
                                href: c(r, t),
                                target: "_blank",
                                children: t ? (0, a.jsx)(n.cC, {
                                    id: "Join the community discussion"
                                }) : (0, a.jsx)(n.cC, {
                                    id: "Learn more"
                                })
                            })]
                        })
                    })
                }
        },
        10366: function(e, r, t) {
            t.d(r, {
                S: function() {
                    return x
                },
                _: function() {
                    return f
                }
            });
            var n = t(49501),
                o = t(75084),
                s = t(8195),
                i = t(46930),
                a = t(64609),
                l = t(81902),
                c = t(68861),
                u = t(54148),
                d = t(95700),
                p = t(11332),
                m = t(87925),
                b = t(85893),
                x = function(e) {
                    var r = e.symbol,
                        t = e.iconSymbol,
                        x = e.name,
                        h = e.availableBorrows,
                        v = e.availableBorrowsInUSD,
                        y = e.borrowCap,
                        j = e.totalBorrows,
                        w = e.variableBorrowRate,
                        g = e.vIncentivesData,
                        C = e.underlyingAsset,
                        O = e.isFreezed,
                        T = (0, s.vR)().openBorrow,
                        Z = (0, i.f)().currentMarket,
                        k = O || Number(h) <= 0;
                    return (0, b.jsxs)(p.L, {
                        symbol: r,
                        iconSymbol: t,
                        name: x,
                        detailsAddress: C,
                        "data-cy": "dashboardBorrowListItem_".concat(r.toUpperCase()),
                        currentMarket: Z,
                        children: [(0, b.jsx)(m.k, {
                            symbol: r,
                            value: Number(h),
                            subValue: Number(v),
                            disabled: 0 === Number(h),
                            withTooltip: !0,
                            capsComponent: (0, b.jsx)(a.G, {
                                capType: l.R.borrowCap,
                                capAmount: y,
                                totalAmount: j,
                                withoutText: !0
                            })
                        }), (0, b.jsx)(u.h, {
                            value: Number(w),
                            incentives: g,
                            symbol: r,
                            tooltip: "DAI" === r ? (0, b.jsx)(n.cC, {
                                id: "This rate is set by MakerDAO Governance and will not change based on usage unless Maker needs to reclaim capital."
                            }) : null,
                            children: "DAI" === r && (0, b.jsx)(f, {})
                        }), (0, b.jsxs)(d.T, {
                            children: [(0, b.jsx)(o.Z, {
                                disabled: k,
                                variant: "contained",
                                onClick: function() {
                                    return T(C)
                                },
                                children: (0, b.jsx)(n.cC, {
                                    id: "Borrow"
                                })
                            }), (0, b.jsx)(o.Z, {
                                variant: "outlined",
                                component: c.rU,
                                href: c.Z6.reserveOverview(C, Z),
                                children: (0, b.jsx)(n.cC, {
                                    id: "Details"
                                })
                            })]
                        })]
                    })
                };

            function f() {
                return (0, b.jsx)("a", {
                    href: "https://#",
                    style: {
                        textDecoration: "none",
                        color: "inherit",
                        textAlign: "center"
                    },
                    target: "blank",
                    children: "\u26a1 Future Airdrop eligible"
                })
            }
        },
        54148: function(e, r, t) {
            t.d(r, {
                h: function() {
                    return l
                }
            });
            var n = t(72389),
                o = t(61953),
                s = t(52906),
                i = t(45884),
                a = t(85893),
                l = function(e) {
                    var r = e.value,
                        t = e.incentives,
                        l = e.symbol,
                        c = e.tooltip,
                        u = e.children;
                    return (0, a.jsxs)(i.h, {
                        children: [null != c ? (0, a.jsx)(n.Z, {
                            title: (0, a.jsx)(o.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: c
                            }),
                            arrow: !0,
                            placement: "top",
                            children: (0, a.jsxs)(o.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: [(0, a.jsx)(s.J, {
                                    value: r,
                                    incentives: t,
                                    symbol: l,
                                    "data-cy": "apyType"
                                }), (0, a.jsx)("div", {
                                    style: {
                                        paddingLeft: "3px"
                                    },
                                    children: "*"
                                })]
                            })
                        }) : (0, a.jsx)(s.J, {
                            value: r,
                            incentives: t,
                            symbol: l,
                            "data-cy": "apyType"
                        }), u]
                    })
                }
        },
        95700: function(e, r, t) {
            t.d(r, {
                T: function() {
                    return i
                }
            });
            var n = t(61953),
                o = t(4071),
                s = t(85893),
                i = function(e) {
                    var r = e.children;
                    e.isColumnHeader;
                    return (0, s.jsx)(n.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            maxWidth: o.r.BUTTONS,
                            minWidth: o.r.BUTTONS,
                            flex: 1,
                            ".MuiButton-root": {
                                ml: "6px"
                            }
                        },
                        children: r
                    })
                }
        },
        11332: function(e, r, t) {
            t.d(r, {
                L: function() {
                    return w
                }
            });
            var n = t(59499),
                o = t(4730),
                s = t(72389),
                i = t(29630),
                a = t(69507),
                l = t(43629),
                c = t(4071),
                u = t(35161),
                d = t(25169),
                p = t(42115),
                m = t(45884),
                b = t(32383),
                x = t(68861),
                f = t(35201),
                h = t(85893),
                v = ["symbol", "iconSymbol", "children", "name", "detailsAddress", "currentMarket", "frozen", "borrowEnabled", "showSupplyCapTooltips", "showBorrowCapTooltips", "showDebtCeilingTooltips"];

            function y(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function j(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? y(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var w = function(e) {
                var r = e.symbol,
                    t = e.iconSymbol,
                    n = e.children,
                    y = e.name,
                    w = e.detailsAddress,
                    g = e.currentMarket,
                    C = e.frozen,
                    O = e.borrowEnabled,
                    T = void 0 === O || O,
                    Z = e.showSupplyCapTooltips,
                    k = void 0 !== Z && Z,
                    S = e.showBorrowCapTooltips,
                    D = void 0 !== S && S,
                    P = e.showDebtCeilingTooltips,
                    A = void 0 !== P && P,
                    B = (0, o.Z)(e, v),
                    M = (0, l.o)(),
                    N = M.supplyCap,
                    I = M.borrowCap,
                    U = M.debtCeiling,
                    F = C && "renFIL" !== r,
                    E = C && "renFIL" === r,
                    L = !C && "AMPL" === r,
                    z = !C && !T;
                return (0, h.jsxs)(b.H, j(j({}, B), {}, {
                    children: [(0, h.jsxs)(m.h, {
                        maxWidth: c.r.CELL,
                        isRow: !0,
                        children: [(0, h.jsxs)(x.rU, {
                            href: x.Z6.reserveOverview(w, g),
                            noWrap: !0,
                            sx: {
                                display: "inline-flex",
                                alignItems: "center"
                            },
                            children: [(0, h.jsx)(f.T1, {
                                symbol: t,
                                fontSize: "large"
                            }), (0, h.jsx)(s.Z, {
                                title: "".concat(y, " (").concat(r, ")"),
                                arrow: !0,
                                placement: "top",
                                children: (0, h.jsx)(i.Z, {
                                    variant: "subheader1",
                                    sx: {
                                        ml: 3
                                    },
                                    noWrap: !0,
                                    "data-cy": "assetName",
                                    children: r
                                })
                            })]
                        }), F && (0, h.jsx)(d.Q, {
                            symbol: r,
                            currentMarket: g
                        }), E && (0, h.jsx)(p.F, {}), L && (0, h.jsx)(u.$, {}), z && (0, h.jsx)(a.w, {
                            symbol: r,
                            currentMarket: g
                        }), k && N.displayMaxedTooltip({
                            supplyCap: N
                        }), D && I.displayMaxedTooltip({
                            borrowCap: I
                        }), A && U.displayMaxedTooltip({
                            debtCeiling: U
                        })]
                    }), n]
                }))
            }
        },
        15880: function(e, r, t) {
            t.d(r, {
                o: function() {
                    return f
                }
            });
            var n = t(69507),
                o = t(35161),
                s = t(25169),
                i = t(42115),
                a = t(61953),
                l = t(44373),
                c = t(91655),
                u = t(29630),
                d = t(43629),
                p = t(68861),
                m = t(35201),
                b = t(85893),
                x = function(e) {
                    var r = e.children,
                        t = e.warningComponent,
                        n = e.symbol,
                        o = e.iconSymbol,
                        s = e.name,
                        i = e.underlyingAsset,
                        x = e.loading,
                        f = e.currentMarket,
                        h = e.showSupplyCapTooltips,
                        v = void 0 !== h && h,
                        y = e.showBorrowCapTooltips,
                        j = void 0 !== y && y,
                        w = e.showDebtCeilingTooltips,
                        g = void 0 !== w && w,
                        C = (0, d.o)(),
                        O = C.supplyCap,
                        T = C.borrowCap,
                        Z = C.debtCeiling;
                    return (0, b.jsxs)(a.Z, {
                        children: [(0, b.jsx)(l.Z, {}), (0, b.jsxs)(a.Z, {
                            sx: {
                                px: 4,
                                pt: 4,
                                pb: 6
                            },
                            children: [(0, b.jsxs)(a.Z, {
                                sx: {
                                    mb: 4,
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [x ? (0, b.jsxs)(a.Z, {
                                    sx: {
                                        display: "inline-flex",
                                        alignItems: "center"
                                    },
                                    children: [(0, b.jsx)(c.Z, {
                                        variant: "circular",
                                        width: 40,
                                        height: 40
                                    }), (0, b.jsx)(a.Z, {
                                        sx: {
                                            ml: 2
                                        },
                                        children: (0, b.jsx)(c.Z, {
                                            width: 100,
                                            height: 24
                                        })
                                    })]
                                }) : n && i && s && f && o && (0, b.jsxs)(p.rU, {
                                    href: p.Z6.reserveOverview(i, f),
                                    sx: {
                                        display: "inline-flex",
                                        alignItems: "center"
                                    },
                                    children: [(0, b.jsx)(m.T1, {
                                        symbol: o,
                                        sx: {
                                            fontSize: "40px"
                                        }
                                    }), (0, b.jsxs)(a.Z, {
                                        sx: {
                                            ml: 2
                                        },
                                        children: [(0, b.jsx)(u.Z, {
                                            variant: "h4",
                                            children: s
                                        }), (0, b.jsx)(u.Z, {
                                            variant: "subheader2",
                                            color: "text.muted",
                                            children: n
                                        })]
                                    }), v && O.displayMaxedTooltip({
                                        supplyCap: O
                                    }), j && T.displayMaxedTooltip({
                                        borrowCap: T
                                    }), g && Z.displayMaxedTooltip({
                                        debtCeiling: Z
                                    })]
                                }), t]
                            }), r]
                        })]
                    })
                },
                f = function(e) {
                    var r = e.symbol,
                        t = e.iconSymbol,
                        a = e.name,
                        l = e.children,
                        c = e.underlyingAsset,
                        u = e.loading,
                        d = e.currentMarket,
                        p = e.frozen,
                        m = e.borrowEnabled,
                        f = void 0 === m || m,
                        h = e.showSupplyCapTooltips,
                        v = void 0 !== h && h,
                        y = e.showBorrowCapTooltips,
                        j = void 0 !== y && y,
                        w = e.showDebtCeilingTooltips,
                        g = void 0 !== w && w,
                        C = function() {
                            var e = p && "renFIL" !== r,
                                t = p && "renFIL" === r,
                                a = !p && "AMPL" === r,
                                l = !p && !f;
                            return (0, b.jsxs)(b.Fragment, {
                                children: [e && (0, b.jsx)(s.Q, {
                                    symbol: r,
                                    currentMarket: d
                                }), t && (0, b.jsx)(i.F, {}), a && (0, b.jsx)(o.$, {}), l && r && d && (0, b.jsx)(n.w, {
                                    symbol: r,
                                    currentMarket: d
                                })]
                            })
                        };
                    return (0, b.jsx)(x, {
                        symbol: r,
                        iconSymbol: t,
                        name: a,
                        underlyingAsset: c,
                        warningComponent: (0, b.jsx)(C, {}),
                        loading: u,
                        currentMarket: d,
                        showSupplyCapTooltips: v,
                        showBorrowCapTooltips: j,
                        showDebtCeilingTooltips: g,
                        children: l
                    })
                }
        },
        87925: function(e, r, t) {
            t.d(r, {
                k: function() {
                    return c
                }
            });
            var n = t(61953),
                o = t(72389),
                s = t(45884),
                i = t(41024),
                a = t(85893),
                l = function(e) {
                    var r = e.value,
                        t = e.withTooltip,
                        o = e.subValue,
                        s = e.disabled,
                        l = e.capsComponent;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(n.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [(0, a.jsx)(i.B, {
                                value: r,
                                variant: "secondary14",
                                sx: {
                                    mb: !t && o ? "2px" : 0
                                },
                                color: s ? "text.disabled" : "text.main",
                                "data-cy": "nativeAmount"
                            }), l]
                        }), !t && !!o && !s && (0, a.jsx)(i.B, {
                            value: o,
                            symbol: "USD",
                            variant: "secondary12",
                            color: "text.secondary"
                        })]
                    })
                },
                c = function(e) {
                    var r = e.symbol,
                        t = e.value,
                        c = e.subValue,
                        u = e.withTooltip,
                        d = e.capsComponent,
                        p = e.disabled;
                    return (0, a.jsx)(s.h, {
                        children: u ? (0, a.jsx)(o.Z, {
                            title: (0, a.jsxs)(n.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: [(0, a.jsx)(i.B, {
                                    value: c || 0,
                                    symbol: "USD",
                                    variant: "secondary14",
                                    sx: {
                                        mb: "2px"
                                    },
                                    symbolsColor: "common.white",
                                    compact: !1
                                }), (0, a.jsx)(i.B, {
                                    value: t,
                                    variant: "secondary12",
                                    symbol: r,
                                    symbolsColor: "common.white",
                                    compact: !1
                                })]
                            }),
                            arrow: !0,
                            placement: "top",
                            children: (0, a.jsx)(n.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: (0, a.jsx)(l, {
                                    symbol: r,
                                    value: t,
                                    subValue: c,
                                    capsComponent: d,
                                    disabled: p,
                                    withTooltip: u
                                })
                            })
                        }) : (0, a.jsx)(l, {
                            symbol: r,
                            value: t,
                            subValue: c,
                            capsComponent: d,
                            disabled: p,
                            withTooltip: u
                        })
                    })
                }
        },
        4071: function(e, r, t) {
            t.d(r, {
                r: function() {
                    return n
                },
                A: function() {
                    return o
                }
            });
            var n = {
                    ASSET: 110,
                    BUTTONS: 160,
                    CELL: 110
                },
                o = function(e, r, t, n, o) {
                    return e ? s(r, t, n, o || !1) : i(r, t, n, o || !1)
                },
                s = function(e, r, t, n) {
                    return "symbol" === e ? a(!0, r, t) : "usageAsCollateralEnabledOnUser" === e || "debt" === e ? t.sort((function(r, t) {
                        return Number(r[e]) - Number(t[e])
                    })) : (n && t.sort((function(e, r) {
                        return "Variable" === e.borrowRateMode ? Number(r.reserve.variableBorrowAPY) - Number(e.reserve.variableBorrowAPY) : Number(r.reserve.stableBorrowAPY) - Number(e.reserve.stableBorrowAPY)
                    })), t.sort((function(r, t) {
                        return r[e] - t[e]
                    })))
                },
                i = function(e, r, t, n) {
                    return "symbol" === e ? a(!1, r, t) : "usageAsCollateralEnabledOnUser" === e || "debt" === e ? t.sort((function(r, t) {
                        return Number(t[e]) - Number(r[e])
                    })) : (n && t.sort((function(e, r) {
                        return "Variable" === e.borrowRateMode ? Number(e.reserve.variableBorrowAPY) - Number(r.reserve.variableBorrowAPY) : Number(e.reserve.stableBorrowAPY) - Number(r.reserve.stableBorrowAPY)
                    })), t.sort((function(r, t) {
                        return t[e] - r[e]
                    })))
                },
                a = function(e, r, t) {
                    return e ? "position" === r ? t.sort((function(e, r) {
                        return e.reserve.symbol.toUpperCase() < r.reserve.symbol.toUpperCase() ? -1 : 1
                    })) : t.sort((function(e, r) {
                        return e.symbol.toUpperCase() < r.symbol.toUpperCase() ? -1 : 1
                    })) : "position" === r ? t.sort((function(e, r) {
                        return r.reserve.symbol.toUpperCase() < e.reserve.symbol.toUpperCase() ? -1 : 1
                    })) : t.sort((function(e, r) {
                        return r.symbol.toUpperCase() < e.symbol.toUpperCase() ? -1 : 1
                    }))
                }
        }
    }
]);