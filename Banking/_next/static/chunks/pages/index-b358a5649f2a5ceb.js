(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        9144: function(e, t, r) {
            "use strict";
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                s = r(95408),
                a = r(98700),
                l = r(39707),
                c = r(59766),
                d = r(81719),
                u = r(78884),
                p = r(85893);
            const x = ["component", "direction", "spacing", "divider", "children"];

            function h(e, t) {
                const r = i.Children.toArray(e).filter(Boolean);
                return r.reduce(((e, n, o) => (e.push(n), o < r.length - 1 && e.push(i.cloneElement(t, {
                    key: `separator-${o}`
                })), e)), [])
            }
            const b = (0, d.ZP)("div", {
                    name: "MuiStack",
                    slot: "Root",
                    overridesResolver: (e, t) => [t.root]
                })((({
                    ownerState: e,
                    theme: t
                }) => {
                    let r = (0, o.Z)({
                        display: "flex",
                        flexDirection: "column"
                    }, (0, s.k9)({
                        theme: t
                    }, (0, s.P$)({
                        values: e.direction,
                        breakpoints: t.breakpoints.values
                    }), (e => ({
                        flexDirection: e
                    }))));
                    if (e.spacing) {
                        const n = (0, a.hB)(t),
                            o = Object.keys(t.breakpoints.values).reduce(((t, r) => (("object" === typeof e.spacing && null != e.spacing[r] || "object" === typeof e.direction && null != e.direction[r]) && (t[r] = !0), t)), {}),
                            i = (0, s.P$)({
                                values: e.direction,
                                base: o
                            }),
                            l = (0, s.P$)({
                                values: e.spacing,
                                base: o
                            });
                        "object" === typeof i && Object.keys(i).forEach(((e, t, r) => {
                            if (!i[e]) {
                                const n = t > 0 ? i[r[t - 1]] : "column";
                                i[e] = n
                            }
                        }));
                        const d = (t, r) => {
                            return {
                                "& > :not(style) + :not(style)": {
                                    margin: 0,
                                    [`margin${o=r?i[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]: (0, a.NA)(n, t)
                                }
                            };
                            var o
                        };
                        r = (0, c.Z)(r, (0, s.k9)({
                            theme: t
                        }, l, d))
                    }
                    return r = (0, s.dt)(t.breakpoints, r), r
                })),
                m = i.forwardRef((function(e, t) {
                    const r = (0, u.Z)({
                            props: e,
                            name: "MuiStack"
                        }),
                        i = (0, l.Z)(r),
                        {
                            component: s = "div",
                            direction: a = "column",
                            spacing: c = 0,
                            divider: d,
                            children: m
                        } = i,
                        j = (0, n.Z)(i, x),
                        f = {
                            direction: a,
                            spacing: c
                        };
                    return (0, p.jsx)(b, (0, o.Z)({
                        as: s,
                        ownerState: f,
                        ref: t
                    }, j, {
                        children: d ? h(m, d) : m
                    }))
                }));
            t.Z = m
        },
        99926: function(e, t, r) {
            "use strict";
            var n, o = r(67294);

            function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            t.Z = function(e) {
                return o.createElement("svg", i({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img"
                }, e), n || (n = o.createElement("path", {
                    d: "M8.667 19.778V13.11a2.222 2.222 0 0 0-2.223-2.222H4.222A2.222 2.222 0 0 0 2 13.11v6.667A2.222 2.222 0 0 0 4.222 22h2.222a2.222 2.222 0 0 0 2.223-2.222Zm0 0V8.667a2.222 2.222 0 0 1 2.222-2.223h2.222a2.222 2.222 0 0 1 2.222 2.223v11.11m-6.666 0A2.222 2.222 0 0 0 10.889 22h2.222a2.222 2.222 0 0 0 2.222-2.222m0 0V4.222A2.222 2.222 0 0 1 17.556 2h2.222A2.222 2.222 0 0 1 22 4.222v15.556A2.222 2.222 0 0 1 19.778 22h-2.222a2.222 2.222 0 0 1-2.223-2.222Z",
                    stroke: "#A5A8B6",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })))
            }
        },
        69895: function(e, t, r) {
            "use strict";
            var n, o, i, s = r(67294);

            function a() {
                return a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, a.apply(this, arguments)
            }
            t.Z = function(e) {
                return s.createElement("svg", a({
                    width: 20,
                    height: 19,
                    viewBox: "0 0 20 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img"
                }, e), n || (n = s.createElement("path", {
                    d: "M17 17.398H3a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z",
                    stroke: "#A5A8B6",
                    strokeWidth: 1.5
                })), o || (o = s.createElement("path", {
                    d: "M14.5 11.398a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
                    stroke: "#A5A8B6",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })), i || (i = s.createElement("path", {
                    d: "M16 4.398V3a2 2 0 0 0-2.515-1.932l-11 2.933A2 2 0 0 0 1 5.934v.464",
                    stroke: "#A5A8B6",
                    strokeWidth: 1.5
                })))
            }
        },
        98819: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return Er
                }
            });
            var n = r(49501),
                o = r(62097),
                i = r(61225),
                s = r(61953),
                a = r(29630),
                l = r(67294),
                c = r(34637),
                d = r(59379),
                u = r(90452),
                p = r(46930),
                x = r(57014),
                h = r(81654),
                b = r(15446),
                m = r(71312),
                j = r(77537),
                f = r(59499),
                v = r(75331),
                y = r(80854),
                g = r(1279),
                w = r(82403),
                C = r(14379),
                O = r(45884),
                Z = r(99435),
                A = r(1475),
                S = r(19952),
                k = r(14795),
                D = r(43629),
                P = r(41551),
                B = r(81902),
                E = r(25049),
                I = r(45556),
                T = r(68861),
                M = r(46839),
                N = r(4071),
                R = r(59286),
                U = r(95700),
                L = r(85893),
                _ = function(e) {
                    var t = e.head;
                    return (0, L.jsxs)(A.u, {
                        children: [(0, L.jsx)(O.h, {
                            maxWidth: 160,
                            isRow: !0,
                            children: (0, L.jsx)(Z.M, {
                                children: (0, L.jsx)(n.cC, {
                                    id: "Assets"
                                })
                            })
                        }), t.map((function(e, t) {
                            return (0, L.jsx)(O.h, {
                                overFlow: "visible",
                                children: (0, L.jsx)(Z.M, {
                                    children: e
                                })
                            }, t)
                        })), (0, L.jsx)(U.T, {})]
                    })
                },
                Y = r(91655),
                F = r(32383),
                V = function() {
                    return (0, L.jsxs)(F.H, {
                        children: [(0, L.jsx)(O.h, {
                            maxWidth: 160,
                            isRow: !0,
                            children: (0, L.jsxs)(s.Z, {
                                sx: {
                                    display: "inline-flex",
                                    alignItems: "center"
                                },
                                children: [(0, L.jsx)(Y.Z, {
                                    variant: "circular",
                                    width: 32,
                                    height: 32
                                }), (0, L.jsx)(Y.Z, {
                                    sx: {
                                        ml: 3
                                    },
                                    width: 39,
                                    height: 20
                                })]
                            })
                        }), (0, L.jsx)(O.h, {
                            children: (0, L.jsx)(Y.Z, {
                                width: 70,
                                height: 20
                            })
                        }), (0, L.jsx)(O.h, {
                            children: (0, L.jsx)(Y.Z, {
                                width: 70,
                                height: 20
                            })
                        }), (0, L.jsx)(O.h, {
                            children: (0, L.jsx)(Y.Z, {
                                width: 70,
                                height: 20
                            })
                        }), (0, L.jsxs)(U.T, {
                            children: [(0, L.jsx)(Y.Z, {
                                height: 38,
                                width: 74
                            }), (0, L.jsx)(Y.Z, {
                                height: 38,
                                width: 74,
                                sx: {
                                    ml: "6px"
                                }
                            })]
                        })]
                    })
                },
                W = r(92391),
                H = r(15880),
                z = function() {
                    return (0, L.jsxs)(H.o, {
                        loading: !0,
                        children: [(0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(Y.Z, {
                                width: 100,
                                height: 20
                            }),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)(Y.Z, {
                                width: 70,
                                height: 20
                            })
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(Y.Z, {
                                width: 100,
                                height: 20
                            }),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)(Y.Z, {
                                width: 70,
                                height: 20
                            })
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(Y.Z, {
                                width: 100,
                                height: 20
                            }),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)(Y.Z, {
                                width: 70,
                                height: 20
                            })
                        }), (0, L.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mt: 5
                            },
                            children: [(0, L.jsx)(Y.Z, {
                                width: "100%",
                                height: 36,
                                sx: {
                                    mr: 1.5
                                }
                            }), (0, L.jsx)(Y.Z, {
                                width: "100%",
                                height: 36
                            })]
                        })]
                    })
                },
                K = function(e) {
                    var t = e.title,
                        r = e.withTopMargin,
                        n = e.head,
                        s = (0, o.Z)(),
                        l = (0, i.Z)(s.breakpoints.down("xsm"));
                    return (0, L.jsx)(I.l, {
                        titleComponent: (0, L.jsx)(a.Z, {
                            component: "div",
                            variant: "h3",
                            sx: {
                                mr: 4
                            },
                            children: t
                        }),
                        withTopMargin: r,
                        children: (0, L.jsxs)(L.Fragment, {
                            children: [!l && (0, L.jsx)(_, {
                                head: n
                            }), l ? (0, L.jsx)(z, {}) : (0, L.jsxs)(L.Fragment, {
                                children: [(0, L.jsx)(V, {}), (0, L.jsx)(V, {})]
                            })]
                        })
                    })
                },
                q = r(10366),
                X = r(75084),
                G = r(7775),
                J = r(64609),
                $ = r(52906),
                Q = r(8195),
                ee = r(41024),
                te = function(e) {
                    var t = e.title,
                        r = e.capsComponent,
                        n = e.value,
                        o = e.subValue,
                        i = e.disabled;
                    return (0, L.jsx)(W.X, {
                        caption: t,
                        captionVariant: "description",
                        align: "flex-start",
                        mb: 2,
                        children: (0, L.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end"
                            },
                            children: [(0, L.jsxs)(s.Z, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    mb: .5
                                },
                                children: [(0, L.jsx)(ee.B, {
                                    value: n,
                                    variant: "secondary14",
                                    color: i ? "text.disabled" : "text.primary"
                                }), r]
                            }), !i && (0, L.jsx)(ee.B, {
                                value: o,
                                variant: "secondary12",
                                color: "text.secondary",
                                symbol: "USD",
                                mb: .5
                            })]
                        })
                    })
                },
                re = function(e) {
                    var t = e.symbol,
                        r = e.iconSymbol,
                        o = e.name,
                        i = e.availableBorrows,
                        a = e.availableBorrowsInUSD,
                        l = e.borrowCap,
                        c = e.totalBorrows,
                        d = e.variableBorrowRate,
                        u = e.stableBorrowRate,
                        x = e.sIncentivesData,
                        h = e.vIncentivesData,
                        b = e.underlyingAsset,
                        m = e.isFreezed,
                        j = (0, Q.vR)().openBorrow,
                        f = (0, p.f)().currentMarket,
                        v = m || Number(i) <= 0;
                    return (0, L.jsxs)(H.o, {
                        symbol: t,
                        iconSymbol: r,
                        name: o,
                        underlyingAsset: b,
                        currentMarket: f,
                        children: [(0, L.jsx)(te, {
                            title: (0, L.jsx)(n.cC, {
                                id: "Available to borrow"
                            }),
                            value: Number(i),
                            subValue: Number(a),
                            disabled: 0 === Number(i),
                            capsComponent: (0, L.jsx)(J.G, {
                                capType: B.R.borrowCap,
                                capAmount: l,
                                totalAmount: c,
                                withoutText: !0
                            })
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(C.B, {
                                text: (0, L.jsx)(n.cC, {
                                    id: "APY, variable"
                                }),
                                variant: "description"
                            }, "APY_dash_mob_variable_ type"),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)($.J, {
                                value: Number(d),
                                incentives: h,
                                symbol: t,
                                variant: "secondary14"
                            })
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(G.s, {
                                text: (0, L.jsx)(n.cC, {
                                    id: "APY, stable"
                                }),
                                variant: "description"
                            }, "APY_dash_mob_stable_ type"),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)($.J, {
                                value: Number(u),
                                incentives: x,
                                symbol: t,
                                variant: "secondary14"
                            })
                        }), (0, L.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mt: 5
                            },
                            children: [(0, L.jsx)(X.Z, {
                                disabled: v,
                                variant: "contained",
                                onClick: function() {
                                    return j(b)
                                },
                                sx: {
                                    mr: 1.5
                                },
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Borrow"
                                })
                            }), (0, L.jsx)(X.Z, {
                                variant: "outlined",
                                component: T.rU,
                                href: T.Z6.reserveOverview(b, f),
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Details"
                                })
                            })]
                        })]
                    })
                };

            function ne(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ie = [{
                    title: (0, L.jsx)(n.cC, {
                        id: "Asset"
                    }),
                    sortKey: "symbol"
                }, {
                    title: (0, L.jsx)(E.Y, {
                        capType: B.R.borrowCap,
                        text: (0, L.jsx)(n.cC, {
                            id: "Available"
                        }),
                        variant: "subheader2"
                    }, "availableBorrows"),
                    sortKey: "availableBorrows"
                }, {
                    title: (0, L.jsx)(C.B, {
                        text: (0, L.jsx)(n.cC, {
                            id: "Borrow APY"
                        }),
                        variant: "subheader2"
                    }, "variableBorrowAPY"),
                    sortKey: "variableBorrowAPY"
                }],
                se = function() {
                    var e = (0, p.f)().currentNetworkConfig,
                        t = (0, M.HT)(),
                        r = t.user,
                        c = t.reserves,
                        d = t.marketReferencePriceInUsd,
                        u = t.loading,
                        x = (0, o.Z)(),
                        h = (0, i.Z)(x.breakpoints.down("xsm")),
                        b = (0, l.useState)(""),
                        m = b[0],
                        j = b[1],
                        f = (0, l.useState)(!1),
                        C = f[0],
                        B = f[1],
                        E = e.baseAssetSymbol,
                        _ = c.filter((function(e) {
                            return (0, R.h)(e, r)
                        })).map((function(e) {
                            var t = r ? (0, R.n)(e, r, v.tk.Variable).toNumber() : 0,
                                n = (0, g.hE)(t).multipliedBy(e.formattedPriceInMarketReferenceCurrency).multipliedBy(d).shiftedBy(-w.$3).toFixed(2);
                            return oe(oe({}, e), {}, {
                                reserve: e,
                                totalBorrows: e.totalDebt,
                                availableBorrows: t,
                                availableBorrowsInUSD: n,
                                stableBorrowRate: e.stableBorrowRateEnabled && e.borrowingEnabled ? Number(e.stableBorrowAPY) : -1,
                                variableBorrowRate: e.borrowingEnabled ? Number(e.variableBorrowAPY) : -1,
                                iconSymbol: e.iconSymbol
                            }, e.isWrappedBaseAsset ? (0, P.QD)({
                                symbol: E,
                                underlyingAsset: y.hP.toLowerCase()
                            }) : {})
                        })),
                        Y = (0, g.hE)((null === r || void 0 === r ? void 0 : r.totalBorrowsMarketReferenceCurrency) || "0").plus((null === r || void 0 === r ? void 0 : r.availableBorrowsMarketReferenceCurrency) || "0"),
                        F = Y.eq(0) ? "0" : (0, g.hE)((null === r || void 0 === r ? void 0 : r.totalBorrowsMarketReferenceCurrency) || "0").div(Y).toFixed(),
                        V = "0" === (null === r || void 0 === r ? void 0 : r.totalCollateralMarketReferenceCurrency) || +F >= .98 ? _ : _.filter((function(e) {
                            var t = e.availableBorrowsInUSD,
                                r = e.totalLiquidityUSD;
                            return "0.00" !== t && "0" !== r
                        })),
                        W = (0, N.A)(C, m, "asset", V),
                        H = !W.length,
                        z = function() {
                            return (0, L.jsxs)(A.u, {
                                children: [ie.map((function(e) {
                                    return (0, L.jsx)(O.h, {
                                        isRow: "symbol" === e.sortKey,
                                        maxWidth: "symbol" === e.sortKey ? N.r.ASSET : void 0,
                                        children: (0, L.jsx)(Z.M, {
                                            sortName: m,
                                            sortDesc: C,
                                            setSortName: j,
                                            setSortDesc: B,
                                            sortKey: e.sortKey,
                                            children: e.title
                                        })
                                    }, e.sortKey)
                                })), (0, L.jsx)(U.T, {
                                    isColumnHeader: !0
                                })]
                            })
                        };
                    return u ? (0, L.jsx)(K, {
                        title: (0, L.jsx)(n.cC, {
                            id: "Assets to Borrow"
                        }),
                        head: ie.map((function(e) {
                            return e.title
                        })),
                        withTopMargin: !0
                    }) : (0, L.jsx)(I.l, {
                        titleComponent: (0, L.jsx)(a.Z, {
                            component: "div",
                            variant: "h3",
                            sx: {
                                mr: 4
                            },
                            children: (0, L.jsx)(n.cC, {
                                id: "Assets to Borrow"
                            })
                        }),
                        localStorageName: "borrowAssetsDashboardTableCollapse",
                        withTopMargin: !0,
                        noData: H,
                        subChildrenComponent: (0, L.jsxs)(s.Z, {
                            sx: {
                                px: 6,
                                pb: 4
                            },
                            children: [H && "Harmony" === e.name && (0, L.jsx)(k.C, {
                                marketName: "Harmony"
                            }), H && "Fantom" === e.name && (0, L.jsx)(k.C, {
                                marketName: "Fantom"
                            }), +F >= .98 && (0, L.jsx)(S.v, {
                                severity: "error",
                                children: (0, L.jsx)(n.cC, {
                                    id: "Be careful - You are very close to liquidation. Consider depositing more collateral or paying down some of your borrowed positions"
                                })
                            }), !H && (0, L.jsxs)(L.Fragment, {
                                children: [(null === r || void 0 === r ? void 0 : r.isInIsolationMode) && (0, L.jsxs)(S.v, {
                                    severity: "warning",
                                    children: [(0, L.jsx)(n.cC, {
                                        id: "Borrowing power and assets are limited due to Isolation mode."
                                    }), (0, L.jsx)(T.rU, {
                                        href: "https://docs.sparkprotocol.io/faq/",
                                        target: "_blank",
                                        rel: "noopener",
                                        children: "Learn More"
                                    })]
                                }), (null === r || void 0 === r ? void 0 : r.isInEmode) && (0, L.jsx)(S.v, {
                                    severity: "warning",
                                    children: (0, L.jsx)(n.cC, {
                                        id: "In E-Mode some assets are not borrowable. Exit E-Mode to get access to all assets"
                                    })
                                }), "0" === (null === r || void 0 === r ? void 0 : r.totalCollateralMarketReferenceCurrency) && (0, L.jsx)(S.v, {
                                    severity: "info",
                                    children: (0, L.jsx)(n.cC, {
                                        id: "To borrow you need to supply any asset to be used as collateral."
                                    })
                                })]
                            })]
                        }),
                        children: (0, L.jsxs)(L.Fragment, {
                            children: [!h && !!W.length && (0, L.jsx)(z, {}), null === W || void 0 === W ? void 0 : W.map((function(e) {
                                return (0, L.jsx)(l.Fragment, {
                                    children: (0, L.jsx)(D.h, {
                                        asset: e.reserve,
                                        children: h ? (0, L.jsx)(re, oe({}, e)) : (0, L.jsx)(q.S, oe({}, e))
                                    })
                                }, e.underlyingAsset)
                            }))]
                        })
                    })
                },
                ae = r(36864),
                le = r(58527);

            function ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function de(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ce(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ce(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ue = function(e) {
                var t = (0, ae.Z)({}, e);
                return (0, L.jsx)(le.G, de(de({}, t), {}, {
                    children: (0, L.jsx)(n.cC, {
                        id: "The % of your total borrowing power used. This is based on the amount of your collateral supplied and the total amount that you can borrow."
                    })
                }))
            };

            function pe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pe(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var he = function(e) {
                    var t = (0, ae.Z)({}, e);
                    return (0, L.jsx)(le.G, xe(xe({}, t), {}, {
                        children: (0, L.jsx)(n.cC, {
                            id: "The weighted average of APY for all borrowed assets, including incentives."
                        })
                    }))
                },
                be = r(26079);
            var me = l.forwardRef((function(e, t) {
                    return l.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: t
                    }, e), l.createElement("path", {
                        fillRule: "evenodd",
                        d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                        clipRule: "evenodd"
                    }))
                })),
                je = r(22659),
                fe = r(81645),
                ve = r(73812),
                ye = r(60008),
                ge = r(76920);

            function we(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? we(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : we(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Oe = function(e) {
                    var t = (0, ae.Z)({}, e);
                    return (0, L.jsx)(a.Z, Ce(Ce({
                        sx: function(e) {
                            return {
                                color: "transparent",
                                backgroundClip: "text !important",
                                webkitTextFillColor: "transparent",
                                background: e.palette.gradients.aaveGradient
                            }
                        }
                    }, t), {}, {
                        children: t.children
                    }))
                },
                Ze = r(32667),
                Ae = function(e) {
                    var t = e.userEmodeCategoryId,
                        r = (0, Q.vR)().openEmode,
                        o = (0, M.HT)().eModes,
                        i = (0, l.useState)(null),
                        c = i[0],
                        d = i[1],
                        u = Boolean(c),
                        p = function() {
                            d(null)
                        },
                        x = 0 === t,
                        h = function() {
                            return (0, L.jsx)(n.cC, {
                                id: "{0}",
                                values: {
                                    0: (0, Ze.U)(o[t].label)
                                }
                            })
                        },
                        b = Object.keys(o).length;
                    return (0, L.jsxs)(s.Z, {
                        sx: {
                            display: "inline-flex",
                            alignItems: "center"
                        },
                        onClick: function(e) {
                            e.stopPropagation()
                        },
                        children: [(0, L.jsx)(a.Z, {
                            mr: 1,
                            variant: "description",
                            color: "text.secondary",
                            children: (0, L.jsx)(n.cC, {
                                id: "E-Mode"
                            })
                        }), (0, L.jsx)(X.Z, {
                            onClick: function(e) {
                                e.stopPropagation(), d(e.currentTarget)
                            },
                            "data-cy": "emode-open",
                            size: "small",
                            variant: "outlined",
                            sx: function(e) {
                                return {
                                    ml: 1,
                                    borderRadius: "4px",
                                    p: 0,
                                    "&:after": {
                                        content: "''",
                                        position: "absolute",
                                        left: -1,
                                        right: -1,
                                        bottom: -1,
                                        top: -1,
                                        background: x ? "transparent" : e.palette.gradients.aaveGradient,
                                        borderRadius: "4px"
                                    }
                                }
                            },
                            children: (0, L.jsxs)(s.Z, {
                                sx: function(e) {
                                    return {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        position: "relative",
                                        zIndex: 1,
                                        bgcolor: x ? u ? e.palette.background.disabled : e.palette.background.surface : e.palette.background.paper,
                                        px: "4px",
                                        borderRadius: "4px"
                                    }
                                },
                                children: [(0, L.jsx)(fe.Z, {
                                    sx: {
                                        fontSize: 12,
                                        mr: "4px",
                                        color: x ? "text.muted" : "text.primary"
                                    },
                                    children: x ? (0, L.jsx)(me, {}) : (0, L.jsx)(ge.Z, {})
                                }), x ? (0, L.jsx)(a.Z, {
                                    variant: "buttonS",
                                    color: "text.secondary",
                                    children: (0, L.jsx)(h, {})
                                }) : (0, L.jsx)(Oe, {
                                    variant: "buttonS",
                                    children: (0, L.jsx)(h, {})
                                }), (0, L.jsx)(fe.Z, {
                                    sx: {
                                        fontSize: 12,
                                        ml: "4px",
                                        color: "primary.light"
                                    },
                                    children: (0, L.jsx)(je.Z, {})
                                })]
                            })
                        }), (0, L.jsx)(ve.Z, {
                            open: u,
                            anchorEl: c,
                            sx: {
                                ".MuiMenu-paper": {
                                    maxWidth: "280px"
                                }
                            },
                            onClose: p,
                            keepMounted: !0,
                            children: (0, L.jsxs)(s.Z, {
                                sx: {
                                    px: 4,
                                    pt: 2,
                                    pb: 3
                                },
                                children: [(0, L.jsx)(a.Z, {
                                    variant: "subheader1",
                                    mb: x ? 1 : 3,
                                    children: (0, L.jsx)(n.cC, {
                                        id: "Efficiency mode (E-Mode)"
                                    })
                                }), !x && (0, L.jsxs)(s.Z, {
                                    children: [(0, L.jsx)(a.Z, {
                                        mb: 1,
                                        variant: "caption",
                                        color: "text.secondary",
                                        children: (0, L.jsx)(n.cC, {
                                            id: "Asset category"
                                        })
                                    }), (0, L.jsx)(s.Z, {
                                        sx: function(e) {
                                            return {
                                                p: 2,
                                                mb: 3,
                                                borderRadius: "6px",
                                                border: "1px solid ".concat(e.palette.divider)
                                            }
                                        },
                                        children: (0, L.jsx)(W.X, {
                                            caption: (0, L.jsxs)(s.Z, {
                                                sx: {
                                                    display: "inline-flex",
                                                    alignItems: "center"
                                                },
                                                children: [(0, L.jsx)(fe.Z, {
                                                    sx: {
                                                        fontSize: 12,
                                                        mr: 1
                                                    },
                                                    children: (0, L.jsx)(ge.Z, {})
                                                }), (0, L.jsx)(a.Z, {
                                                    variant: "subheader2",
                                                    color: "text.primary",
                                                    children: (0, L.jsx)(h, {})
                                                })]
                                            }),
                                            children: (0, L.jsxs)(s.Z, {
                                                sx: {
                                                    display: "inline-flex",
                                                    alignItems: "center"
                                                },
                                                children: [(0, L.jsx)(s.Z, {
                                                    sx: {
                                                        width: "6px",
                                                        height: "6px",
                                                        borderRadius: "50%",
                                                        bgcolor: "success.main",
                                                        boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",
                                                        mr: "5px"
                                                    }
                                                }), (0, L.jsx)(a.Z, {
                                                    variant: "subheader2",
                                                    color: "success.main",
                                                    children: (0, L.jsx)(n.cC, {
                                                        id: "Enabled"
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                }), (0, L.jsx)(a.Z, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    mb: 4,
                                    children: (0, L.jsx)(n.cC, {
                                        id: "E-Mode increases your LTV for a selected category of assets up to 97%. <0>Learn more</0>",
                                        components: {
                                            0: (0, L.jsx)(T.rU, {
                                                href: "https://docs.sparkprotocol.io/faq/spark-lend-features#high-efficiency-mode-e-mode",
                                                sx: {
                                                    textDecoration: "underline"
                                                },
                                                variant: "caption",
                                                color: "text.secondary"
                                            })
                                        }
                                    })
                                }), x ? (0, L.jsx)(X.Z, {
                                    fullWidth: !0,
                                    variant: "gradient",
                                    onClick: function() {
                                        r(ye._h.ENABLE), p()
                                    },
                                    "data-cy": "emode-enable",
                                    children: (0, L.jsx)(n.cC, {
                                        id: "Enable E-Mode"
                                    })
                                }) : (0, L.jsxs)(L.Fragment, {
                                    children: [b > 2 && (0, L.jsx)(X.Z, {
                                        fullWidth: !0,
                                        sx: {
                                            mb: "6px"
                                        },
                                        variant: "outlined",
                                        onClick: function() {
                                            r(ye._h.SWITCH), p()
                                        },
                                        "data-cy": "emode-switch",
                                        children: (0, L.jsx)(n.cC, {
                                            id: "Switch E-Mode category"
                                        })
                                    }), (0, L.jsx)(X.Z, {
                                        fullWidth: !0,
                                        variant: "outlined",
                                        onClick: function() {
                                            r(ye._h.DISABLE), p()
                                        },
                                        "data-cy": "emode-disable",
                                        children: (0, L.jsx)(n.cC, {
                                            id: "Disable E-Mode"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                Se = r(70918),
                ke = function(e) {
                    var t = e.title,
                        r = e.value,
                        n = e.percent,
                        o = e.tooltip;
                    return (0, L.jsxs)(Se.Z, {
                        variant: "outlined",
                        sx: {
                            mr: 2,
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            boxShadow: "none",
                            bgcolor: "transparent"
                        },
                        children: [(0, L.jsx)(a.Z, {
                            color: "text.secondary",
                            sx: {
                                mr: 1
                            },
                            noWrap: !0,
                            children: t
                        }), (0, L.jsx)(ee.B, {
                            value: r,
                            percent: n,
                            variant: "secondary14",
                            symbol: "USD"
                        }), o]
                    })
                },
                De = r(54148),
                Pe = r(11332),
                Be = r(87925),
                Ee = function(e) {
                    var t = e.reserve,
                        r = e.variableBorrows,
                        o = e.variableBorrowsUSD,
                        i = e.stableBorrows,
                        s = e.stableBorrowsUSD,
                        a = e.borrowRateMode,
                        l = e.stableBorrowAPY,
                        c = (0, Q.vR)(),
                        d = c.openBorrow,
                        u = c.openRepay,
                        x = (0, p.f)().currentMarket,
                        h = (0, D.o)().borrowCap,
                        b = t.isActive,
                        m = t.isFrozen,
                        j = t.borrowingEnabled,
                        f = t.sIncentivesData,
                        y = t.vIncentivesData,
                        g = t.variableBorrowAPY;
                    return (0, L.jsxs)(Pe.L, {
                        symbol: t.symbol,
                        iconSymbol: t.iconSymbol,
                        name: t.name,
                        detailsAddress: t.underlyingAsset,
                        currentMarket: x,
                        frozen: t.isFrozen,
                        borrowEnabled: t.borrowingEnabled,
                        "data-cy": "dashboardBorrowedListItem_".concat(t.symbol.toUpperCase(), "_").concat(a),
                        showBorrowCapTooltips: !0,
                        children: [(0, L.jsx)(Be.k, {
                            symbol: t.symbol,
                            value: Number(a === v.tk.Variable ? r : i),
                            subValue: Number(a === v.tk.Variable ? o : s)
                        }), (0, L.jsx)(De.h, {
                            value: Number(a === v.tk.Variable ? g : l),
                            incentives: a === v.tk.Variable ? y : f,
                            symbol: t.symbol,
                            tooltip: "DAI" === t.symbol ? (0, L.jsx)(n.cC, {
                                id: "This rate is set by MakerDAO Governance and will not change based on usage unless Maker needs to reclaim capital."
                            }) : null,
                            children: "DAI" === t.symbol && (0, L.jsx)(q._, {})
                        }), (0, L.jsxs)(U.T, {
                            children: [(0, L.jsx)(X.Z, {
                                disabled: !b,
                                variant: "contained",
                                onClick: function() {
                                    return u(t.underlyingAsset, a, m)
                                },
                                children: (0, L.jsx)(n.cC, {
                                    id: "Repay"
                                })
                            }), (0, L.jsx)(X.Z, {
                                disabled: !b || !j || m || h.isMaxed,
                                variant: "outlined",
                                onClick: function() {
                                    return d(t.underlyingAsset)
                                },
                                children: (0, L.jsx)(n.cC, {
                                    id: "Borrow"
                                })
                            })]
                        })]
                    })
                },
                Ie = r(10766),
                Te = r(17674),
                Me = r(10822),
                Ne = r(61782),
                Re = r(64343),
                Ue = r(56365),
                Le = r(31538),
                _e = r(29894),
                Ye = r(61702),
                Fe = r(44373),
                Ve = function(e) {
                    var t = e.stableBorrowRateEnabled,
                        r = e.borrowRateMode,
                        o = e.disabled,
                        i = e.onClick,
                        c = e.stableBorrowAPY,
                        d = e.variableBorrowAPY,
                        u = e.underlyingAsset,
                        p = e.currentMarket,
                        x = l.useState(null),
                        h = (0, Te.Z)(x, 2),
                        b = h[0],
                        m = h[1],
                        j = Boolean(b),
                        f = function() {
                            m(null)
                        };
                    return (0, L.jsxs)(L.Fragment, {
                        children: [(0, L.jsx)(X.Z, {
                            variant: "outlined",
                            onClick: function(e) {
                                m(e.currentTarget)
                            },
                            size: "small",
                            endIcon: t && (0, L.jsx)(fe.Z, {
                                sx: {
                                    fontSize: "14px !important"
                                },
                                children: j ? (0, L.jsx)(Me.Z, {}) : (0, L.jsx)(Ne.Z, {})
                            }),
                            disabled: o,
                            "data-cy": "apyButton_".concat(r),
                            children: r
                        }), (0, L.jsxs)(ve.Z, {
                            anchorEl: b,
                            open: j,
                            onClose: f,
                            MenuListProps: {
                                "aria-labelledby": "basic-button"
                            },
                            keepMounted: !0,
                            "data-cy": "apyMenu_".concat(r),
                            children: [(0, L.jsx)(a.Z, {
                                variant: "subheader2",
                                sx: {
                                    px: 4,
                                    py: 3
                                },
                                children: (0, L.jsx)(n.cC, {
                                    id: "Select APY type to switch"
                                })
                            }), (0, L.jsxs)(Le.Z, {
                                selected: r === v.tk.Variable,
                                value: v.tk.Variable,
                                onClick: function() {
                                    r === v.tk.Stable && i(), f()
                                },
                                children: [(0, L.jsx)(_e.Z, {
                                    children: (0, L.jsx)(fe.Z, {
                                        children: r === v.tk.Variable && (0, L.jsx)(Re.Z, {})
                                    })
                                }), (0, L.jsx)(Ye.Z, {
                                    primaryTypographyProps: {
                                        variant: "description"
                                    },
                                    children: (0, L.jsx)(n.cC, {
                                        id: "APY, variable"
                                    })
                                }), (0, L.jsx)(ee.B, {
                                    value: Number(d),
                                    percent: !0,
                                    variant: "description"
                                })]
                            }), (0, L.jsxs)(Le.Z, {
                                selected: r === v.tk.Stable,
                                value: v.tk.Stable,
                                onClick: function() {
                                    r === v.tk.Variable && i(), f()
                                },
                                children: [(0, L.jsx)(_e.Z, {
                                    children: (0, L.jsx)(fe.Z, {
                                        children: r === v.tk.Stable && (0, L.jsx)(Re.Z, {})
                                    })
                                }), (0, L.jsx)(Ye.Z, {
                                    primaryTypographyProps: {
                                        variant: "description"
                                    },
                                    children: (0, L.jsx)(n.cC, {
                                        id: "APY, stable"
                                    })
                                }), (0, L.jsx)(ee.B, {
                                    value: Number(c),
                                    percent: !0,
                                    variant: "description"
                                })]
                            }), (0, L.jsx)(Fe.Z, {}), (0, L.jsx)(s.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row"
                                },
                                children: (0, L.jsx)(X.Z, {
                                    sx: {
                                        my: 2,
                                        ml: 4
                                    },
                                    size: "small",
                                    component: T.rU,
                                    target: "_blank",
                                    href: T.Z6.reserveOverview(u, p),
                                    endIcon: (0, L.jsx)(fe.Z, {
                                        children: (0, L.jsx)(Ue.Z, {})
                                    }),
                                    children: (0, L.jsx)(n.cC, {
                                        id: "SEE CHARTS"
                                    })
                                })
                            })]
                        })]
                    })
                },
                We = function(e) {
                    var t = e.reserve,
                        r = e.totalBorrows,
                        o = e.totalBorrowsUSD,
                        i = e.borrowRateMode,
                        a = e.stableBorrowAPY,
                        l = (0, p.f)().currentMarket,
                        c = (0, Q.vR)(),
                        d = c.openBorrow,
                        u = c.openRepay,
                        x = c.openRateSwitch,
                        h = (0, D.o)().borrowCap,
                        b = t.symbol,
                        m = t.iconSymbol,
                        j = t.name,
                        f = t.isActive,
                        y = t.isFrozen,
                        g = t.borrowingEnabled,
                        w = t.stableBorrowRateEnabled,
                        C = t.sIncentivesData,
                        O = t.vIncentivesData,
                        Z = t.variableBorrowAPY,
                        A = t.underlyingAsset;
                    return (0, L.jsxs)(H.o, {
                        symbol: b,
                        iconSymbol: m,
                        name: j,
                        underlyingAsset: t.underlyingAsset,
                        currentMarket: l,
                        frozen: t.isFrozen,
                        borrowEnabled: t.borrowingEnabled,
                        showBorrowCapTooltips: !0,
                        children: [(0, L.jsx)(te, {
                            title: (0, L.jsx)(n.cC, {
                                id: "Debt"
                            }),
                            value: Number(r),
                            subValue: Number(o),
                            disabled: 0 === Number(r)
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(n.cC, {
                                id: "APY"
                            }),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)($.J, {
                                value: Number(i === v.tk.Variable ? Z : a),
                                incentives: i === v.tk.Variable ? O : C,
                                symbol: b,
                                variant: "secondary14"
                            })
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(Ie.Z, {
                                text: (0, L.jsx)(n.cC, {
                                    id: "APY type"
                                }),
                                variant: "description"
                            }, "APY type"),
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)(Ve, {
                                stableBorrowRateEnabled: w,
                                borrowRateMode: i,
                                disabled: !w || y || !f,
                                onClick: function() {
                                    return x(A, i)
                                },
                                stableBorrowAPY: a,
                                variableBorrowAPY: Z,
                                underlyingAsset: A,
                                currentMarket: l
                            })
                        }), (0, L.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mt: 5
                            },
                            children: [(0, L.jsx)(X.Z, {
                                disabled: !f,
                                variant: "contained",
                                onClick: function() {
                                    return u(A, i, y)
                                },
                                sx: {
                                    mr: 1.5
                                },
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Repay"
                                })
                            }), (0, L.jsx)(X.Z, {
                                disabled: !f || !g || y || h.isMaxed,
                                variant: "outlined",
                                onClick: function() {
                                    return d(A)
                                },
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Borrow"
                                })
                            })]
                        })]
                    })
                };

            function He(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? He(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : He(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ke = [{
                    title: (0, L.jsx)(n.cC, {
                        id: "Asset"
                    }),
                    sortKey: "symbol"
                }, {
                    title: (0, L.jsx)(n.cC, {
                        id: "Debt"
                    }, "Debt"),
                    sortKey: "variableBorrows"
                }, {
                    title: (0, L.jsx)(n.cC, {
                        id: "APY"
                    }, "APY"),
                    sortKey: "borrowAPY"
                }],
                qe = function() {
                    var e = (0, M.HT)(),
                        t = e.user,
                        r = e.loading,
                        s = (0, p.f)(),
                        c = s.currentMarketData,
                        d = s.currentNetworkConfig,
                        u = (0, o.Z)(),
                        x = (0, i.Z)(u.breakpoints.down("xsm")),
                        h = (0, l.useState)(""),
                        b = h[0],
                        m = h[1],
                        j = (0, l.useState)(!1),
                        f = j[0],
                        w = j[1],
                        C = (null === t || void 0 === t ? void 0 : t.userReservesData.reduce((function(e, t) {
                            return "0" !== t.variableBorrows && e.push(ze(ze({}, t), {}, {
                                borrowRateMode: v.tk.Variable,
                                reserve: ze(ze({}, t.reserve), t.reserve.isWrappedBaseAsset ? (0, P.QD)({
                                    symbol: d.baseAssetSymbol,
                                    underlyingAsset: y.hP.toLowerCase()
                                }) : {})
                            })), "0" !== t.stableBorrows && e.push(ze(ze({}, t), {}, {
                                borrowRateMode: v.tk.Stable,
                                reserve: ze(ze({}, t.reserve), t.reserve.isWrappedBaseAsset ? (0, P.QD)({
                                    symbol: d.baseAssetSymbol,
                                    underlyingAsset: y.hP.toLowerCase()
                                }) : {})
                            })), e
                        }), [])) || [],
                        S = (0, g.hE)((null === t || void 0 === t ? void 0 : t.totalBorrowsMarketReferenceCurrency) || "0").plus((null === t || void 0 === t ? void 0 : t.availableBorrowsMarketReferenceCurrency) || "0"),
                        k = S.eq(0) ? "0" : (0, g.hE)((null === t || void 0 === t ? void 0 : t.totalBorrowsMarketReferenceCurrency) || "0").div(S).toFixed(),
                        B = C,
                        E = (0, N.A)(f, b, "position", B, !0),
                        T = function() {
                            return (0, L.jsxs)(A.u, {
                                children: [Ke.map((function(e) {
                                    return (0, L.jsx)(O.h, {
                                        isRow: "symbol" === e.sortKey,
                                        maxWidth: "symbol" === e.sortKey ? N.r.ASSET : void 0,
                                        children: (0, L.jsx)(Z.M, {
                                            sortName: b,
                                            sortDesc: f,
                                            setSortName: m,
                                            setSortDesc: w,
                                            sortKey: e.sortKey,
                                            children: e.title
                                        })
                                    }, e.sortKey)
                                })), (0, L.jsx)(U.T, {
                                    isColumnHeader: !0
                                })]
                            })
                        };
                    return r ? (0, L.jsx)(K, {
                        title: (0, L.jsx)(n.cC, {
                            id: "Your Borrows"
                        }),
                        head: Ke.map((function(e) {
                            return e.title
                        }))
                    }) : (0, L.jsx)(I.l, {
                        titleComponent: (0, L.jsx)(a.Z, {
                            component: "div",
                            variant: "h3",
                            sx: {
                                mr: 4
                            },
                            children: (0, L.jsx)(n.cC, {
                                id: "Your Borrows"
                            })
                        }),
                        localStorageName: "borrowedAssetsDashboardTableCollapse",
                        subTitleComponent: c.v3 ? (0, L.jsx)(Ae, {
                            userEmodeCategoryId: t.userEmodeCategoryId
                        }) : void 0,
                        noData: !E.length,
                        topInfo: (0, L.jsx)(L.Fragment, {
                            children: !!E.length && (0, L.jsxs)(L.Fragment, {
                                children: [(0, L.jsx)(ke, {
                                    title: (0, L.jsx)(n.cC, {
                                        id: "Balance"
                                    }),
                                    value: (null === t || void 0 === t ? void 0 : t.totalBorrowsUSD) || 0
                                }), (0, L.jsx)(ke, {
                                    title: (0, L.jsx)(n.cC, {
                                        id: "APY"
                                    }),
                                    value: (null === t || void 0 === t ? void 0 : t.debtAPY) || 0,
                                    percent: !0,
                                    tooltip: (0, L.jsx)(he, {})
                                }), (0, L.jsx)(ke, {
                                    title: (0, L.jsx)(n.cC, {
                                        id: "Borrow power used"
                                    }),
                                    value: k || 0,
                                    percent: !0,
                                    tooltip: (0, L.jsx)(ue, {})
                                })]
                            })
                        }),
                        children: E.length ? (0, L.jsxs)(L.Fragment, {
                            children: [!x && (0, L.jsx)(T, {}), E.map((function(e) {
                                return (0, L.jsx)(l.Fragment, {
                                    children: (0, L.jsx)(D.h, {
                                        asset: e.reserve,
                                        children: x ? (0, L.jsx)(We, ze({}, e)) : (0, l.createElement)(Ee, ze(ze({}, e), {}, {
                                            key: e.underlyingAsset + e.borrowRateMode
                                        }))
                                    })
                                }, e.underlyingAsset + e.borrowRateMode)
                            }))]
                        }) : (0, L.jsx)(be.N, {
                            text: (0, L.jsx)(n.cC, {
                                id: "Nothing borrowed yet"
                            })
                        })
                    })
                };

            function Xe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Xe(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Je = function(e) {
                var t = (0, ae.Z)({}, e);
                return (0, L.jsx)(le.G, Ge(Ge({}, t), {}, {
                    children: (0, L.jsx)(n.cC, {
                        id: "Allows you to decide whether to use a supplied asset as collateral. An asset used as collateral will affect your borrowing power and health factor."
                    })
                }))
            };

            function $e(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $e(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var et = function(e) {
                var t = (0, ae.Z)({}, e);
                return (0, L.jsx)(le.G, Qe(Qe({}, t), {}, {
                    children: (0, L.jsx)(n.cC, {
                        id: "The total amount of your assets denominated in USD that can be used as collateral for borrowing assets."
                    })
                }))
            };

            function tt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function rt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tt(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var nt = function(e) {
                    var t = (0, ae.Z)({}, e);
                    return (0, L.jsx)(le.G, rt(rt({}, t), {}, {
                        children: (0, L.jsx)(n.cC, {
                            id: "The weighted average of APY for all supplied assets, including incentives."
                        })
                    }))
                },
                ot = r(48638),
                it = r(54181),
                st = r(54411),
                at = function(e) {
                    var t = e.children;
                    return (0, L.jsxs)(s.Z, {
                        sx: {
                            display: "flex",
                            alignItems: {
                                xs: "flex-end",
                                xsm: "center"
                            },
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        children: [t, (0, L.jsx)(st.I, {})]
                    })
                },
                lt = function(e) {
                    var t = e.isIsolated,
                        r = e.usageAsCollateralEnabledOnUser,
                        n = e.canBeEnabledAsCollateral,
                        o = e.onToggleSwitch,
                        i = e.disabled,
                        s = r && n;
                    return (0, L.jsx)(L.Fragment, {
                        children: t ? (0, L.jsx)(at, {
                            children: (0, L.jsx)(it.Z, {
                                onClick: o,
                                disableRipple: !0,
                                checked: s,
                                disabled: !n || i
                            })
                        }) : (0, L.jsx)(it.Z, {
                            onClick: o,
                            disableRipple: !0,
                            checked: s,
                            disabled: !n || i
                        })
                    })
                },
                ct = function(e) {
                    var t, r = e.reserve,
                        o = e.underlyingBalance,
                        i = e.underlyingBalanceUSD,
                        s = e.usageAsCollateralEnabledOnUser,
                        a = e.underlyingAsset,
                        l = (0, M.HT)(),
                        c = l.user,
                        d = l.dsr,
                        u = r.isIsolated,
                        x = r.aIncentivesData,
                        h = r.isFrozen,
                        b = r.isActive,
                        m = (0, p.f)(),
                        j = m.currentMarketData,
                        f = m.currentMarket,
                        v = (0, Q.vR)(),
                        y = v.openSupply,
                        g = v.openWithdraw,
                        w = v.openCollateralChange,
                        C = v.openSwap,
                        Z = (0, D.o)().debtCeiling,
                        A = ot.cr.liquiditySwap(j),
                        S = !Z.isMaxed && "0" !== r.reserveLiquidationThreshold && (!r.isIsolated && !c.isInIsolationMode || (null === (t = c.isolatedReserve) || void 0 === t ? void 0 : t.underlyingAsset) === r.underlyingAsset || r.isIsolated && "0" === c.totalCollateralMarketReferenceCurrency);
                    return (0, L.jsxs)(Pe.L, {
                        symbol: r.symbol,
                        iconSymbol: r.iconSymbol,
                        name: r.name,
                        detailsAddress: a,
                        currentMarket: f,
                        frozen: r.isFrozen,
                        "data-cy": "dashboardSuppliedListItem_".concat(r.symbol.toUpperCase(), "_").concat(S && s ? "Collateral" : "NoCollateral"),
                        showSupplyCapTooltips: !0,
                        showDebtCeilingTooltips: !0,
                        children: [(0, L.jsx)(Be.k, {
                            symbol: r.iconSymbol,
                            value: Number(o),
                            subValue: Number(i),
                            disabled: 0 === Number(o)
                        }), (0, L.jsx)(De.h, {
                            value: "sDAI" === r.symbol && null != d ? d.toNumber() : Number(r.supplyAPY),
                            incentives: x,
                            symbol: r.symbol,
                            tooltip: "sDAI" === r.symbol && null != d ? (0, L.jsx)(n.cC, {
                                id: "This is the Dai Savings Rate, and not the supply rate. You earn this automatically when converting your DAI to sDAI."
                            }) : null
                        }), (0, L.jsx)(O.h, {
                            children: (0, L.jsx)(lt, {
                                isIsolated: u,
                                usageAsCollateralEnabledOnUser: s,
                                canBeEnabledAsCollateral: S,
                                onToggleSwitch: function() {
                                    return w(a)
                                },
                                "data-cy": "collateralStatus"
                            })
                        }), (0, L.jsxs)(U.T, {
                            children: [(0, L.jsx)(X.Z, {
                                disabled: !b,
                                variant: "contained",
                                onClick: function() {
                                    return g(a)
                                },
                                children: (0, L.jsx)(n.cC, {
                                    id: "Withdraw"
                                })
                            }), A ? (0, L.jsx)(X.Z, {
                                disabled: !b || h,
                                variant: "outlined",
                                onClick: function() {
                                    return C(a)
                                },
                                "data-cy": "swapButton",
                                children: (0, L.jsx)(n.cC, {
                                    id: "Swap"
                                })
                            }) : (0, L.jsx)(X.Z, {
                                disabled: !b || h,
                                variant: "outlined",
                                onClick: function() {
                                    return y(a)
                                },
                                children: (0, L.jsx)(n.cC, {
                                    id: "Deposit"
                                })
                            })]
                        })]
                    })
                },
                dt = function(e) {
                    var t, r = e.reserve,
                        o = e.underlyingBalance,
                        i = e.underlyingBalanceUSD,
                        a = e.usageAsCollateralEnabledOnUser,
                        l = e.underlyingAsset,
                        c = (0, M.HT)().user,
                        d = (0, p.f)(),
                        u = d.currentMarketData,
                        x = d.currentMarket,
                        h = (0, Q.vR)(),
                        b = h.openSupply,
                        m = h.openSwap,
                        j = h.openWithdraw,
                        f = h.openCollateralChange,
                        v = (0, D.o)().debtCeiling,
                        y = ot.cr.liquiditySwap(u),
                        g = r.symbol,
                        w = r.iconSymbol,
                        C = r.name,
                        O = r.supplyAPY,
                        Z = r.isIsolated,
                        A = r.aIncentivesData,
                        S = r.isFrozen,
                        k = r.isActive,
                        P = !v.isMaxed && "0" !== r.reserveLiquidationThreshold && (!r.isIsolated && !c.isInIsolationMode || (null === (t = c.isolatedReserve) || void 0 === t ? void 0 : t.underlyingAsset) === r.underlyingAsset || r.isIsolated && "0" === c.totalCollateralMarketReferenceCurrency);
                    return (0, L.jsxs)(H.o, {
                        symbol: g,
                        iconSymbol: w,
                        name: C,
                        underlyingAsset: l,
                        currentMarket: x,
                        frozen: r.isFrozen,
                        showSupplyCapTooltips: !0,
                        showDebtCeilingTooltips: !0,
                        children: [(0, L.jsx)(te, {
                            title: (0, L.jsx)(n.cC, {
                                id: "Deposit balance"
                            }),
                            value: Number(o),
                            subValue: Number(i),
                            disabled: 0 === Number(o)
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(n.cC, {
                                id: "Deposit APY"
                            }),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)($.J, {
                                value: Number(O),
                                incentives: A,
                                symbol: g,
                                variant: "secondary14"
                            })
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(n.cC, {
                                id: "Used as collateral"
                            }),
                            align: Z ? "flex-start" : "center",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)(lt, {
                                isIsolated: Z,
                                usageAsCollateralEnabledOnUser: a,
                                canBeEnabledAsCollateral: P,
                                onToggleSwitch: function() {
                                    return f(l)
                                }
                            })
                        }), (0, L.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mt: 5
                            },
                            children: [(0, L.jsx)(X.Z, {
                                disabled: !k,
                                variant: "contained",
                                onClick: function() {
                                    return j(l)
                                },
                                sx: {
                                    mr: 1.5
                                },
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Withdraw"
                                })
                            }), y ? (0, L.jsx)(X.Z, {
                                disabled: !k || S,
                                variant: "outlined",
                                onClick: function() {
                                    return m(l)
                                },
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Swap"
                                })
                            }) : (0, L.jsx)(X.Z, {
                                disabled: !k || S,
                                variant: "outlined",
                                onClick: function() {
                                    return b(l)
                                },
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Deposit"
                                })
                            })]
                        })]
                    })
                };

            function ut(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ut(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ut(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var xt = [{
                    title: (0, L.jsx)(n.cC, {
                        id: "Asset"
                    }),
                    sortKey: "symbol"
                }, {
                    title: (0, L.jsx)(n.cC, {
                        id: "Balance"
                    }, "Balance"),
                    sortKey: "underlyingBalance"
                }, {
                    title: (0, L.jsx)(n.cC, {
                        id: "APY"
                    }, "APY"),
                    sortKey: "supplyAPY"
                }, {
                    title: (0, L.jsx)(Je, {
                        text: (0, L.jsx)(n.cC, {
                            id: "Collateral"
                        }),
                        variant: "subheader2"
                    }, "Collateral"),
                    sortKey: "usageAsCollateralEnabledOnUser"
                }],
                ht = function() {
                    var e = (0, M.HT)(),
                        t = e.user,
                        r = e.loading,
                        s = (0, p.f)().currentNetworkConfig,
                        c = (0, o.Z)(),
                        d = (0, i.Z)(c.breakpoints.down("xsm")),
                        u = (0, l.useState)(""),
                        x = u[0],
                        h = u[1],
                        b = (0, l.useState)(!1),
                        m = b[0],
                        j = b[1],
                        f = (null === t || void 0 === t ? void 0 : t.userReservesData.filter((function(e) {
                            return "0" !== e.underlyingBalance
                        })).map((function(e) {
                            return pt(pt({}, e), {}, {
                                supplyAPY: e.reserve.supplyAPY,
                                reserve: pt(pt({}, e.reserve), e.reserve.isWrappedBaseAsset ? (0, P.QD)({
                                    symbol: s.baseAssetSymbol,
                                    underlyingAsset: y.hP.toLowerCase()
                                }) : {})
                            })
                        }))) || [],
                        v = (0, N.A)(m, x, "position", f),
                        g = function() {
                            return (0, L.jsxs)(A.u, {
                                children: [xt.map((function(e) {
                                    return (0, L.jsx)(O.h, {
                                        isRow: "symbol" === e.sortKey,
                                        maxWidth: "symbol" === e.sortKey ? N.r.ASSET : void 0,
                                        children: (0, L.jsx)(Z.M, {
                                            sortName: x,
                                            sortDesc: m,
                                            setSortName: h,
                                            setSortDesc: j,
                                            sortKey: e.sortKey,
                                            children: e.title
                                        })
                                    }, e.sortKey)
                                })), (0, L.jsx)(U.T, {
                                    isColumnHeader: !0
                                })]
                            })
                        };
                    return r ? (0, L.jsx)(K, {
                        title: (0, L.jsx)(n.cC, {
                            id: "Your Deposits"
                        }),
                        head: xt.map((function(e) {
                            return e.title
                        }))
                    }) : (0, L.jsx)(I.l, {
                        titleComponent: (0, L.jsx)(a.Z, {
                            component: "div",
                            variant: "h3",
                            sx: {
                                mr: 4
                            },
                            children: (0, L.jsx)(n.cC, {
                                id: "Your Deposits"
                            })
                        }),
                        localStorageName: "suppliedAssetsDashboardTableCollapse",
                        noData: !v.length,
                        topInfo: (0, L.jsx)(L.Fragment, {
                            children: !!v.length && (0, L.jsxs)(L.Fragment, {
                                children: [(0, L.jsx)(ke, {
                                    title: (0, L.jsx)(n.cC, {
                                        id: "Balance"
                                    }),
                                    value: (null === t || void 0 === t ? void 0 : t.totalLiquidityUSD) || 0
                                }), (0, L.jsx)(ke, {
                                    title: (0, L.jsx)(n.cC, {
                                        id: "APY"
                                    }),
                                    value: (null === t || void 0 === t ? void 0 : t.earnedAPY) || 0,
                                    percent: !0,
                                    tooltip: (0, L.jsx)(nt, {})
                                }), (0, L.jsx)(ke, {
                                    title: (0, L.jsx)(n.cC, {
                                        id: "Collateral"
                                    }),
                                    value: (null === t || void 0 === t ? void 0 : t.totalCollateralUSD) || 0,
                                    tooltip: (0, L.jsx)(et, {})
                                })]
                            })
                        }),
                        children: v.length ? (0, L.jsxs)(L.Fragment, {
                            children: [!d && (0, L.jsx)(g, {}), v.map((function(e) {
                                return (0, L.jsx)(l.Fragment, {
                                    children: (0, L.jsx)(D.h, {
                                        asset: e.reserve,
                                        children: d ? (0, L.jsx)(dt, pt({}, e)) : (0, L.jsx)(ct, pt({}, e))
                                    })
                                }, e.underlyingAsset)
                            }))]
                        }) : (0, L.jsx)(be.N, {
                            text: (0, L.jsx)(n.cC, {
                                id: "Nothing supplied yet"
                            })
                        })
                    })
                },
                bt = r(44431),
                mt = r.n(bt),
                jt = r(27184),
                ft = r(22841),
                vt = r(75158),
                yt = r(41528),
                gt = function() {
                    var e = (0, p.f)().currentNetworkConfig;
                    return (0, L.jsx)(yt.y, {
                        title: "Get free assets to test Spark Protocol",
                        children: (0, L.jsx)(X.Z, {
                            startIcon: (0, L.jsx)("img", {
                                src: e.networkLogoPath,
                                alt: e.name,
                                style: {
                                    width: 14,
                                    height: 14
                                }
                            }),
                            endIcon: (0, L.jsx)(fe.Z, {
                                sx: {
                                    width: 14,
                                    height: 14
                                },
                                children: (0, L.jsx)(Ue.Z, {})
                            }),
                            component: T.rU,
                            href: T.Z6.faucet,
                            variant: "outlined",
                            size: "small",
                            children: (0, L.jsx)(a.Z, {
                                variant: "buttonS",
                                children: (0, L.jsx)(n.cC, {
                                    id: "{0} Faucet",
                                    values: {
                                        0: e.name
                                    }
                                })
                            })
                        })
                    })
                },
                wt = function(e) {
                    var t = e.bridge;
                    return t ? (0, L.jsx)(X.Z, {
                        startIcon: (0, L.jsx)("img", {
                            src: t.icon,
                            alt: t.name,
                            style: {
                                width: 14,
                                height: 14
                            }
                        }),
                        endIcon: (0, L.jsx)(fe.Z, {
                            sx: {
                                width: 14,
                                height: 14
                            },
                            children: (0, L.jsx)(Ue.Z, {})
                        }),
                        component: T.rU,
                        size: "small",
                        variant: "outlined",
                        href: t.url || "",
                        children: (0, L.jsx)(a.Z, {
                            variant: "buttonS",
                            children: t.name
                        })
                    }) : null
                },
                Ct = r(92381),
                Ot = function(e) {
                    var t = e.value,
                        r = e.onClick,
                        o = e.localStorageName,
                        i = e.bridge;
                    return (0, L.jsxs)(s.Z, {
                        sx: {
                            display: "flex",
                            alignItems: {
                                xs: "flex-start",
                                xsm: "center"
                            },
                            justifyContent: "space-between",
                            flexDirection: {
                                xs: "column-reverse",
                                xsm: "row"
                            },
                            px: {
                                xs: 4,
                                xsm: 6
                            },
                            py: 2,
                            pl: {
                                xs: "18px",
                                xsm: "27px"
                            }
                        },
                        children: [(0, L.jsx)(ft.Z, {
                            sx: {
                                mt: {
                                    xs: i ? 2 : 0,
                                    xsm: 0
                                }
                            },
                            control: (0, L.jsx)(vt.Z, {
                                sx: {
                                    p: "6px"
                                }
                            }),
                            checked: t,
                            onChange: function() {
                                return (0, Ct.e)(t, r, o)
                            },
                            label: (0, L.jsx)(n.cC, {
                                id: "Show assets with 0 balance"
                            })
                        }), (ot.aV || ot.p8) && (0, L.jsx)(gt, {}), !ot.p8 && (0, L.jsx)(wt, {
                            bridge: i
                        })]
                    })
                },
                Zt = function(e) {
                    var t = e.symbol,
                        r = e.iconSymbol,
                        o = e.name,
                        i = e.walletBalance,
                        s = e.walletBalanceUSD,
                        a = e.supplyCap,
                        l = e.totalLiquidity,
                        c = e.supplyAPY,
                        d = e.aIncentivesData,
                        u = e.underlyingAsset,
                        x = e.isActive,
                        h = e.isFreezed,
                        b = e.detailsAddress,
                        m = e.showSwap,
                        j = e.hideSupply,
                        f = (0, p.f)().currentMarket,
                        v = (0, M.HT)().dsr,
                        y = (0, Q.vR)(),
                        g = y.openSupply,
                        w = y.openPSMSwap;
                    return (0, D.o)().supplyCap.isMaxed ? null : (0, L.jsxs)(Pe.L, {
                        symbol: t,
                        iconSymbol: r,
                        name: o,
                        detailsAddress: b,
                        "data-cy": "dashboardSupplyListItem_".concat(t.toUpperCase()),
                        currentMarket: f,
                        showDebtCeilingTooltips: !0,
                        children: [(0, L.jsx)(Be.k, {
                            symbol: t,
                            value: Number(i),
                            subValue: s,
                            withTooltip: !1,
                            disabled: 0 === Number(i),
                            capsComponent: (0, L.jsx)(J.G, {
                                capType: B.R.supplyCap,
                                capAmount: a,
                                totalAmount: l,
                                withoutText: !0
                            })
                        }), (0, L.jsx)(De.h, {
                            value: "sDAI" === t && null != v ? v.toNumber() : Number(c),
                            incentives: d,
                            symbol: t,
                            tooltip: "sDAI" === t && null != v ? (0, L.jsx)(n.cC, {
                                id: "This is the Dai Savings Rate, and not the supply rate. You earn this automatically when converting your DAI to sDAI."
                            }) : null
                        }), (0, L.jsxs)(U.T, {
                            children: [!j && (0, L.jsx)(X.Z, {
                                sx: function(e) {
                                    return {
                                        color: e.palette.common.white,
                                        background: "#4caf50",
                                        "&:hover, &.Mui-focusVisible": {
                                            background: "#8bc34a"
                                        }
                                    }
                                },
                                disabled: !x || h || Number(i) <= 0,
                                variant: "contained",
                                onClick: function() {
                                    return g(u)
                                },
                                children: (0, L.jsx)(n.cC, {
                                    id: "Deposit"
                                })
                            }), m && (0, L.jsx)(X.Z, {
                                variant: "contained",
                                onClick: function() {
                                    return w(u)
                                },
                                children: (0, L.jsx)(n.cC, {
                                    id: "Swap"
                                })
                            }), !(m && !j) && (0, L.jsx)(X.Z, {
                                variant: "outlined",
                                component: T.rU,
                                href: T.Z6.reserveOverview(b, f),
                                children: (0, L.jsx)(n.cC, {
                                    id: "Details"
                                })
                            })]
                        })]
                    })
                },
                At = r(13902),
                St = r(14463),
                kt = function(e) {
                    var t = e.isIsolated,
                        r = e.usageAsCollateralEnabled,
                        n = function() {
                            return r && !t ? (0, L.jsx)(fe.Z, {
                                sx: {
                                    color: "success.main",
                                    fontSize: {
                                        xs: "20px",
                                        xsm: "24px"
                                    }
                                },
                                children: (0, L.jsx)(Re.Z, {})
                            }) : r && t ? (0, L.jsx)(fe.Z, {
                                sx: {
                                    color: "warning.main",
                                    fontSize: {
                                        xs: "20px",
                                        xsm: "24px"
                                    }
                                },
                                children: (0, L.jsx)(At.Z, {})
                            }) : (0, L.jsx)(St.J, {
                                variant: "main14",
                                color: "text.secondary"
                            })
                        };
                    return (0, L.jsx)(s.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: t ? (0, L.jsx)(at, {
                            children: (0, L.jsx)(n, {})
                        }) : (0, L.jsx)(n, {})
                    })
                },
                Dt = function(e) {
                    var t = e.symbol,
                        r = e.iconSymbol,
                        o = e.name,
                        i = e.walletBalance,
                        a = e.walletBalanceUSD,
                        l = e.supplyCap,
                        c = e.totalLiquidity,
                        d = e.supplyAPY,
                        u = e.aIncentivesData,
                        x = e.isIsolated,
                        h = e.usageAsCollateralEnabledOnUser,
                        b = e.isActive,
                        m = e.isFreezed,
                        j = e.underlyingAsset,
                        f = e.detailsAddress,
                        v = e.showSwap,
                        y = e.hideSupply,
                        g = (0, p.f)().currentMarket,
                        w = (0, M.HT)().dsr,
                        C = (0, Q.vR)(),
                        O = C.openSupply,
                        Z = C.openPSMSwap;
                    return (0, D.o)().supplyCap.isMaxed ? null : (0, L.jsxs)(H.o, {
                        symbol: t,
                        iconSymbol: r,
                        name: o,
                        underlyingAsset: j,
                        currentMarket: g,
                        showDebtCeilingTooltips: !0,
                        children: [(0, L.jsx)(te, {
                            title: (0, L.jsx)(n.cC, {
                                id: "Deposit balance"
                            }),
                            value: Number(i),
                            subValue: a,
                            disabled: 0 === Number(i),
                            capsComponent: (0, L.jsx)(J.G, {
                                capType: B.R.supplyCap,
                                capAmount: l,
                                totalAmount: c,
                                withoutText: !0
                            })
                        }), (0, L.jsx)(W.X, {
                            caption: "sDAI" === t && null != w ? (0, L.jsx)(n.cC, {
                                id: "Dai Savings Rate APY"
                            }) : (0, L.jsx)(n.cC, {
                                id: "Deposit APY"
                            }),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)($.J, {
                                value: "sDAI" === t && null != w ? w.toNumber() : Number(d),
                                incentives: u,
                                symbol: t,
                                variant: "secondary14"
                            })
                        }), (0, L.jsx)(W.X, {
                            caption: (0, L.jsx)(n.cC, {
                                id: "Can be collateral"
                            }),
                            align: "flex-start",
                            captionVariant: "description",
                            mb: 2,
                            children: (0, L.jsx)(kt, {
                                isIsolated: x,
                                usageAsCollateralEnabled: h
                            })
                        }), (0, L.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mt: 5
                            },
                            children: [!y && (0, L.jsx)(X.Z, {
                                sx: function(e) {
                                    return {
                                        color: e.palette.common.white,
                                        background: "#4caf50",
                                        "&:hover, &.Mui-focusVisible": {
                                            background: "#8bc34a"
                                        },
                                        mr: 1.5
                                    }
                                },
                                disabled: !b || m || Number(i) <= 0,
                                variant: "contained",
                                onClick: function() {
                                    return O(j)
                                },
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Deposit"
                                })
                            }), v && (0, L.jsx)(X.Z, {
                                variant: "contained",
                                onClick: function() {
                                    return Z(j)
                                },
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Swap"
                                })
                            }), !(v && !y) && (0, L.jsx)(X.Z, {
                                variant: "outlined",
                                component: T.rU,
                                href: T.Z6.reserveOverview(f, g),
                                fullWidth: !0,
                                children: (0, L.jsx)(n.cC, {
                                    id: "Details"
                                })
                            })]
                        })]
                    })
                },
                Pt = r(54373);

            function Bt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Bt(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var It = [{
                    title: (0, L.jsx)(n.cC, {
                        id: "Assets"
                    }, "assets"),
                    sortKey: "symbol"
                }, {
                    title: (0, L.jsx)(n.cC, {
                        id: "Wallet balance"
                    }, "Wallet balance"),
                    sortKey: "walletBalance"
                }, {
                    title: (0, L.jsx)(n.cC, {
                        id: "APY"
                    }, "APY"),
                    sortKey: "supplyAPY"
                }],
                Tt = function() {
                    var e = (0, p.f)(),
                        t = e.currentNetworkConfig,
                        r = e.currentChainId,
                        c = (0, M.HT)(),
                        d = c.user,
                        u = c.reserves,
                        x = c.marketReferencePriceInUsd,
                        h = c.loading,
                        b = (0, jt.P)(),
                        m = b.walletBalances,
                        j = b.loading,
                        f = (0, o.Z)(),
                        v = (0, i.Z)(f.breakpoints.down("xsm")),
                        C = (0, l.useState)(""),
                        B = C[0],
                        E = C[1],
                        R = (0, l.useState)(!1),
                        _ = R[0],
                        Y = R[1],
                        F = t.bridge,
                        V = t.isTestnet,
                        W = t.baseAssetSymbol,
                        H = t.name,
                        z = "showSupplyZeroAssets",
                        q = (0, l.useState)(null == localStorage.getItem(z) || "true" === localStorage.getItem(z)),
                        X = q[0],
                        G = q[1],
                        J = u.filter((function(e) {
                            return !e.isFrozen
                        })).map((function(e) {
                            var t, r, n = null === (t = m[e.underlyingAsset]) || void 0 === t ? void 0 : t.amount,
                                o = null === (r = m[e.underlyingAsset]) || void 0 === r ? void 0 : r.amountUSD,
                                i = (0, g.hE)(n);
                            "0" !== e.supplyCap && (i = mt().min(i, new(mt())(e.supplyCap).minus(e.totalLiquidity).multipliedBy("0.995")));
                            var s = (0, g.hE)(i).multipliedBy(e.priceInMarketReferenceCurrency).multipliedBy(x).shiftedBy(-w.$3).toString(),
                                a = e.isIsolated,
                                l = null === d || void 0 === d ? void 0 : d.userReservesData.find((function(t) {
                                    return t.usageAsCollateralEnabledOnUser && t.reserve.id !== e.id
                                })),
                                c = null !== d && void 0 !== d && d.isInIsolationMode ? !!a && !l : "0" !== e.reserveLiquidationThreshold && (!a || a && !l);
                            if (e.isWrappedBaseAsset) {
                                var u, p, h, b = (0, g.hE)(null === (u = m[y.hP.toLowerCase()]) || void 0 === u ? void 0 : u.amount);
                                "0" !== e.supplyCap && (b = mt().min(b, new(mt())(e.supplyCap).minus(e.totalLiquidity).multipliedBy("0.995")));
                                var j = (0, g.hE)(b).multipliedBy(e.priceInMarketReferenceCurrency).multipliedBy(x).shiftedBy(-w.$3).toString();
                                return [Et(Et(Et({}, e), {}, {
                                    reserve: e,
                                    underlyingAsset: y.hP.toLowerCase()
                                }, (0, P.QD)({
                                    symbol: W,
                                    underlyingAsset: y.hP.toLowerCase()
                                })), {}, {
                                    walletBalance: null === (p = m[y.hP.toLowerCase()]) || void 0 === p ? void 0 : p.amount,
                                    walletBalanceUSD: null === (h = m[y.hP.toLowerCase()]) || void 0 === h ? void 0 : h.amountUSD,
                                    availableToDeposit: b.toString(),
                                    availableToDepositUSD: j,
                                    usageAsCollateralEnabledOnUser: c,
                                    detailsAddress: e.underlyingAsset,
                                    id: e.id + "base",
                                    showSwap: !1,
                                    hideSupply: !1
                                }), Et(Et({}, e), {}, {
                                    reserve: e,
                                    walletBalance: n,
                                    walletBalanceUSD: o,
                                    availableToDeposit: i.toNumber() <= 0 ? "0" : i.toString(),
                                    availableToDepositUSD: Number(s) <= 0 ? "0" : s.toString(),
                                    usageAsCollateralEnabledOnUser: c,
                                    detailsAddress: e.underlyingAsset,
                                    showSwap: "DAI" === e.symbol || "USDC" === e.symbol || "sDAI" === e.symbol,
                                    hideSupply: "DAI" === e.symbol || "USDC" === e.symbol || "sDAI" === e.symbol
                                })]
                            }
                            return Et(Et({}, e), {}, {
                                reserve: e,
                                walletBalance: n,
                                walletBalanceUSD: o,
                                availableToDeposit: i.toNumber() <= 0 ? "0" : i.toString(),
                                availableToDepositUSD: Number(s) <= 0 ? "0" : s.toString(),
                                usageAsCollateralEnabledOnUser: c,
                                detailsAddress: e.underlyingAsset,
                                showSwap: "DAI" === e.symbol || "USDC" === e.symbol || "sDAI" === e.symbol,
                                hideSupply: "DAI" === e.symbol || "USDC" === e.symbol || "sDAI" === e.symbol
                            })
                        })).flat(),
                        $ = J.sort((function(e, t) {
                            return +e.walletBalanceUSD > +t.walletBalanceUSD ? -1 : 1
                        })),
                        Q = $.filter((function(e) {
                            return "0" !== e.availableToDepositUSD
                        })),
                        ee = X ? $ : Q.length >= 1 ? Q : $,
                        te = (0, N.A)(_, B, "assets", ee),
                        re = function() {
                            return (0, L.jsxs)(A.u, {
                                children: [It.map((function(e) {
                                    return (0, L.jsx)(O.h, {
                                        isRow: "symbol" === e.sortKey,
                                        maxWidth: "symbol" === e.sortKey ? N.r.ASSET : void 0,
                                        overFlow: "visible",
                                        children: (0, L.jsx)(Z.M, {
                                            sortName: B,
                                            sortDesc: _,
                                            setSortName: E,
                                            setSortDesc: Y,
                                            sortKey: e.sortKey,
                                            children: e.title
                                        })
                                    }, e.sortKey)
                                })), (0, L.jsx)(U.T, {
                                    isColumnHeader: !0
                                })]
                            })
                        };
                    if (h || j) return (0, L.jsx)(K, {
                        head: It.map((function(e) {
                            return e.title
                        })),
                        title: (0, L.jsx)(n.cC, {
                            id: "Your Wallet"
                        }),
                        withTopMargin: !0
                    });
                    var ne = !J.length;
                    return (0, L.jsx)(I.l, {
                        titleComponent: (0, L.jsx)(a.Z, {
                            component: "div",
                            variant: "h3",
                            sx: {
                                mr: 4
                            },
                            children: (0, L.jsx)(n.cC, {
                                id: "Your Wallet"
                            })
                        }),
                        localStorageName: "supplyAssetsDashboardTableCollapse",
                        withTopMargin: !0,
                        noData: ne,
                        subChildrenComponent: (0, L.jsxs)(L.Fragment, {
                            children: [(0, L.jsx)(s.Z, {
                                sx: {
                                    px: 6
                                },
                                children: ne && "Harmony" === t.name ? (0, L.jsx)(k.C, {
                                    marketName: "Harmony"
                                }) : ne && "Fantom" === t.name ? (0, L.jsx)(k.C, {
                                    marketName: "Fantom"
                                }) : null !== d && void 0 !== d && d.isInIsolationMode ? (0, L.jsx)(S.v, {
                                    severity: "warning",
                                    children: (0, L.jsx)(n.cC, {
                                        id: "Collateral usage is limited because of isolation mode. <0>Learn More</0>",
                                        components: {
                                            0: (0, L.jsx)(T.rU, {
                                                href: "https://docs.sparkprotocol.io/faq/",
                                                target: "_blank",
                                                rel: "noopener"
                                            })
                                        }
                                    })
                                }) : 0 === Q.length && (V ? (0, L.jsxs)(S.v, {
                                    severity: "info",
                                    children: [(0, L.jsx)(n.cC, {
                                        id: "Your {networkName} wallet is empty. Get free test assets at",
                                        values: {
                                            networkName: H
                                        }
                                    }), " ", (0, L.jsx)(T.rU, {
                                        href: T.Z6.faucet,
                                        style: {
                                            fontWeight: 400
                                        },
                                        children: (0, L.jsx)(n.cC, {
                                            id: "{networkName} Faucet",
                                            values: {
                                                networkName: H
                                            }
                                        })
                                    })]
                                }) : (0, L.jsx)(Pt.K, {
                                    name: H,
                                    bridge: F,
                                    chainId: r
                                }))
                            }), Q.length >= 1 && (0, L.jsx)(Ot, {
                                value: X,
                                onClick: G,
                                localStorageName: z,
                                bridge: F
                            })]
                        }),
                        children: (0, L.jsxs)(L.Fragment, {
                            children: [!v && !!te && !ne && (0, L.jsx)(re, {}), te.map((function(e) {
                                return (0, L.jsx)(l.Fragment, {
                                    children: (0, L.jsx)(D.h, {
                                        asset: e.reserve,
                                        children: v ? (0, l.createElement)(Dt, Et(Et({}, e), {}, {
                                            key: e.id
                                        })) : (0, l.createElement)(Zt, Et(Et({}, e), {}, {
                                            key: e.id
                                        }))
                                    })
                                }, e.underlyingAsset)
                            }))]
                        })
                    })
                },
                Mt = function(e) {
                    var t = e.isBorrow,
                        r = (0, o.Z)().breakpoints,
                        n = (0, i.Z)(r.up("lg")),
                        a = n ? "calc(50% - 8px)" : "100%";
                    return (0, L.jsxs)(s.Z, {
                        sx: {
                            display: n ? "flex" : "block",
                            justifyContent: "space-between",
                            alignItems: "flex-start"
                        },
                        children: [(0, L.jsxs)(s.Z, {
                            sx: {
                                display: {
                                    xs: t ? "none" : "block",
                                    lg: "block"
                                },
                                width: a
                            },
                            children: [(0, L.jsx)(ht, {}), (0, L.jsx)(Tt, {})]
                        }), (0, L.jsxs)(s.Z, {
                            sx: {
                                display: {
                                    xs: t ? "block" : "none",
                                    lg: "block"
                                },
                                width: a
                            },
                            children: [(0, L.jsx)(qe, {}), (0, L.jsx)(se, {})]
                        })]
                    })
                },
                Nt = r(41664);

            function Rt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rt(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Lt, _t = function(e) {
                    var t = (0, ae.Z)({}, e);
                    return (0, L.jsx)(le.G, Ut(Ut({}, t), {}, {
                        children: (0, L.jsx)(n.cC, {
                            id: "Net APY is the combined effect of all supply and borrow positions on net worth, including incentives. It is possible to have a negative net APY if debt APY is higher than supply APY."
                        })
                    }))
                },
                Yt = r(40535),
                Ft = r(83601),
                Vt = r(72629),
                Wt = r(67728);

            function Ht() {
                return Ht = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, Ht.apply(this, arguments)
            }
            var zt, Kt = function(e) {
                return l.createElement("svg", Ht({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img"
                }, e), Lt || (Lt = l.createElement("path", {
                    d: "M4.222 12v7.778A2.222 2.222 0 0 0 6.444 22h11.112a2.222 2.222 0 0 0 2.222-2.222V12M12 7.556V22 7.556Zm0 0V5.333a2.222 2.222 0 1 1 2.222 2.223H12Zm0 0V4.778a2.778 2.778 0 1 0-2.778 2.778H12ZM4.222 12h15.556H4.222Zm0 0a2.222 2.222 0 1 1 0-4.444h15.556a2.222 2.222 0 0 1 0 4.444H4.222Z",
                    stroke: "#A5A8B6",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })))
            };

            function qt() {
                return qt = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, qt.apply(this, arguments)
            }
            var Xt, Gt, Jt, $t, Qt, er = function(e) {
                    return l.createElement("svg", qt({
                        width: 22,
                        height: 19,
                        viewBox: "0 0 22 19",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        role: "img"
                    }, e), zt || (zt = l.createElement("path", {
                        d: "M2.464 2.458A4.978 4.978 0 0 0 1 5.98 4.961 4.961 0 0 0 2.464 9.5L11 18l8.535-8.5a4.969 4.969 0 0 0 0-7.042 5.01 5.01 0 0 0-7.071 0L11 3.917 9.536 2.458A5.001 5.001 0 0 0 6 1a5.018 5.018 0 0 0-3.536 1.458v0Z",
                        stroke: "#A5A8B6",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })))
                },
                tr = r(99926),
                rr = r(69895),
                nr = r(81719),
                or = r(58402),
                ir = r(20525),
                sr = r(72389),
                ar = r(9144),
                lr = r(68346);

            function cr() {
                return cr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, cr.apply(this, arguments)
            }
            var dr, ur, pr, xr, hr, br = function(e) {
                return l.createElement("svg", cr({
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img"
                }, e), Xt || (Xt = l.createElement("path", {
                    d: "M8.05 6.283a1.21 1.21 0 1 0 0-2.42 1.21 1.21 0 0 0 0 2.42Z",
                    fill: "#A5A8B6"
                })), Gt || (Gt = l.createElement("path", {
                    d: "M0 3.258v3.644c0 .465.478.76.887.577l4.137-1.885A.634.634 0 0 0 5.01 4.44L.887 2.667a.64.64 0 0 0-.887.59Z",
                    fill: "url(#HAL_svg__a)"
                })), Jt || (Jt = l.createElement("path", {
                    d: "M16 6.902V3.258a.63.63 0 0 0-.887-.577l-4.137 1.885a.633.633 0 0 0 .014 1.154l4.137 1.773a.638.638 0 0 0 .873-.59Z",
                    fill: "url(#HAL_svg__b)"
                })), $t || ($t = l.createElement("path", {
                    d: "M9.935 2.582c.38 0 .619-.31.506-.675C10.131.837 9.175.063 8.035.063c-1.14 0-2.097.774-2.406 1.844-.113.366.126.675.506.675h3.8ZM5.263 8.225l-1.238 6.74a.818.818 0 0 0 .802.972h6.43a.812.812 0 0 0 .803-.971L10.78 8.21a.815.815 0 0 0-.803-.675l-3.926.014a.811.811 0 0 0-.788.675Z",
                    fill: "#A5A8B6"
                })), Qt || (Qt = l.createElement("defs", null, l.createElement("linearGradient", {
                    id: "HAL_svg__a",
                    x1: 0,
                    y1: 5.077,
                    x2: 5.403,
                    y2: 5.077,
                    gradientUnits: "userSpaceOnUse"
                }, l.createElement("stop", {
                    stopColor: "#A5A8B6",
                    stopOpacity: 0
                }), l.createElement("stop", {
                    offset: 1,
                    stopColor: "#A5A8B6"
                })), l.createElement("linearGradient", {
                    id: "HAL_svg__b",
                    x1: 16,
                    y1: 5.083,
                    x2: 10.597,
                    y2: 5.083,
                    gradientUnits: "userSpaceOnUse"
                }, l.createElement("stop", {
                    stopColor: "#A5A8B6",
                    stopOpacity: 0
                }), l.createElement("stop", {
                    offset: 1,
                    stopColor: "#A5A8B6"
                })))))
            };

            function mr() {
                return mr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, mr.apply(this, arguments)
            }
            var jr = function(e) {
                return l.createElement("svg", mr({
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img"
                }, e), dr || (dr = l.createElement("path", {
                    d: "M8.05 6.283a1.21 1.21 0 1 0 0-2.42 1.21 1.21 0 0 0 0 2.42Z",
                    fill: "#FFFEFF"
                })), ur || (ur = l.createElement("path", {
                    d: "M0 3.258v3.644c0 .465.478.76.887.577l4.137-1.885A.634.634 0 0 0 5.01 4.44L.887 2.667a.64.64 0 0 0-.887.59Z",
                    fill: "url(#HALHover_svg__a)"
                })), pr || (pr = l.createElement("path", {
                    d: "M16 6.902V3.258a.63.63 0 0 0-.887-.577l-4.137 1.885a.633.633 0 0 0 .014 1.154l4.137 1.773a.638.638 0 0 0 .873-.59Z",
                    fill: "url(#HALHover_svg__b)"
                })), xr || (xr = l.createElement("path", {
                    d: "M9.935 2.582c.38 0 .619-.31.506-.675C10.131.837 9.175.063 8.035.063c-1.14 0-2.097.774-2.406 1.844-.113.366.126.675.506.675h3.8ZM5.263 8.225l-1.238 6.74a.818.818 0 0 0 .802.972h6.43a.812.812 0 0 0 .803-.971L10.78 8.21a.814.814 0 0 0-.803-.675l-3.926.014a.811.811 0 0 0-.788.675Z",
                    fill: "#FEFF3D"
                })), hr || (hr = l.createElement("defs", null, l.createElement("linearGradient", {
                    id: "HALHover_svg__a",
                    x1: 0,
                    y1: 5.077,
                    x2: 5.403,
                    y2: 5.077,
                    gradientUnits: "userSpaceOnUse"
                }, l.createElement("stop", {
                    stopColor: "#fff",
                    stopOpacity: 0
                }), l.createElement("stop", {
                    offset: 1,
                    stopColor: "#fff"
                })), l.createElement("linearGradient", {
                    id: "HALHover_svg__b",
                    x1: 16,
                    y1: 5.083,
                    x2: 10.597,
                    y2: 5.083,
                    gradientUnits: "userSpaceOnUse"
                }, l.createElement("stop", {
                    stopColor: "#fff",
                    stopOpacity: 0
                }), l.createElement("stop", {
                    offset: 1,
                    stopColor: "#fff"
                })))))
            };

            function fr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function vr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fr(Object(r), !0).forEach((function(t) {
                        (0, f.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fr(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var yr = (0, nr.ZP)(or.Z)((0, ir.Z)({
                    ".MuiTooltip-tooltip": {
                        color: "text.primary",
                        backgroundColor: "background.paper",
                        p: 0,
                        borderRadius: "6px",
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)",
                        maxWidth: "300px"
                    },
                    ".MuiTooltip-arrow": {
                        color: "background.paper",
                        "&:before": {
                            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)"
                        }
                    }
                })),
                gr = {
                    fontSize: "14px",
                    zIndex: 2,
                    position: "absolute",
                    left: 5,
                    transition: "all 0.2s easy"
                };

            function wr(e) {
                var t = e.healthFactor,
                    r = e.marketName,
                    o = e.integrationURL,
                    i = (0, j.Z)().currentAccount,
                    s = (0, l.useMemo)((function() {
                        var e = (0, g.hE)(t).toFixed(2, mt().ROUND_DOWN),
                            n = new URL(o);
                        return n.searchParams.set("user", i), n.searchParams.set("healthfactor", e), n.searchParams.set("chain", r), n.searchParams.set("aaveversion", r), n.searchParams.set("utm_source", "aave-integration"), n.toString()
                    }), [i, t, r, o]);
                return (0, L.jsx)(sr.Z, {
                    arrow: !0,
                    placement: "top",
                    PopperComponent: yr,
                    title: (0, L.jsxs)(ar.Z, {
                        sx: {
                            py: 4,
                            px: 6
                        },
                        spacing: 1,
                        children: [(0, L.jsx)(a.Z, {
                            variant: "tooltip",
                            color: "text.secondary",
                            fontWeight: 500,
                            children: (0, L.jsx)(n.cC, {
                                id: "Setup notifications about your Health Factor using the Hal app."
                            })
                        }), (0, L.jsx)(a.Z, {
                            variant: "tooltip",
                            color: "text.secondary",
                            fontWeight: 500,
                            children: (0, L.jsx)(n.cC, {
                                id: "This integration was<0>proposed and approved</0>by the community.",
                                components: {
                                    0: (0, L.jsx)(lr.Z, {
                                        mx: 1,
                                        variant: "tooltip",
                                        color: "text.secondary",
                                        fontWeight: 500,
                                        target: "_blank",
                                        rel: "noopener",
                                        href: "https://snapshot.org/#/aave.eth/proposal/0xa730caeec3c28e014ff456b454186ef41c6c1f382cf0a7caa3d99c4ae16c8318"
                                    })
                                }
                            })
                        })]
                    }),
                    children: (0, L.jsxs)(X.Z, {
                        href: s,
                        variant: "surface",
                        size: "small",
                        target: "_blank",
                        rel: "noopener",
                        component: lr.Z,
                        sx: {
                            pl: 6,
                            position: "relative",
                            "&:hover": {
                                ".HALTooltip__icon": {
                                    opacity: 0
                                },
                                ".HALTooltip__hoverIcon": {
                                    opacity: 1
                                }
                            }
                        },
                        children: [(0, L.jsx)(fe.Z, {
                            sx: vr({
                                opacity: 1
                            }, gr),
                            className: "HALTooltip__icon",
                            children: (0, L.jsx)(br, {})
                        }), (0, L.jsx)(fe.Z, {
                            sx: vr({
                                opacity: 0
                            }, gr),
                            className: "HALTooltip__hoverIcon",
                            children: (0, L.jsx)(jr, {})
                        }), (0, L.jsx)(n.cC, {
                            id: "Notify"
                        })]
                    })
                })
            }
            var Cr = r(96875),
                Or = r(74815),
                Zr = r(87369),
                Ar = r(31959),
                Sr = function(e) {
                    var t = e.healthFactor,
                        r = Number((0, g.hE)(t).toFixed(2, mt().ROUND_DOWN)),
                        o = +t > 10 ? 100 : 10 * +t;
                    return (0, L.jsxs)(s.Z, {
                        sx: {
                            position: "relative",
                            mt: "33px",
                            mb: 4
                        },
                        children: [(0, L.jsx)(s.Z, {
                            sx: {
                                height: "4px",
                                background: "linear-gradient(90deg, #46BC4B 0%, #F89F1A 52.08%, #BC0000 100%)",
                                borderRadius: "1px",
                                transform: "matrix(-1, 0, 0, 1, 0, 0)"
                            }
                        }), (0, L.jsx)(s.Z, {
                            sx: {
                                position: "absolute",
                                bottom: "calc(100% + 6px)",
                                left: "".concat(o > 100 ? 100 : o, "%"),
                                zIndex: 3
                            },
                            children: (0, L.jsx)(s.Z, {
                                sx: function(e) {
                                    return {
                                        position: "relative",
                                        whiteSpace: "nowrap",
                                        "&:after": {
                                            width: 0,
                                            height: 0,
                                            borderStyle: "solid",
                                            borderWidth: "6px 4px 0 4px",
                                            borderColor: "".concat(e.palette.primary.main, " transparent transparent transparent"),
                                            content: "''",
                                            position: "absolute",
                                            left: o > 75 ? "auto" : "50%",
                                            right: o > 75 ? 0 : "auto",
                                            transform: o > 75 ? "translateX(0)" : "translateX(-50%)"
                                        }
                                    }
                                },
                                children: (0, L.jsx)(s.Z, {
                                    sx: {
                                        display: "flex",
                                        position: "absolute",
                                        left: o > 75 ? "auto" : o < 15 ? "0" : "50%",
                                        transform: o > 75 || o < 15 ? "translateX(0)" : "translateX(-50%)",
                                        right: o > 75 ? 0 : "auto",
                                        flexDirection: "column",
                                        alignItems: o > 75 ? "flex-end" : o < 15 ? "flex-start" : "center",
                                        textAlign: o > 75 ? "right" : o < 15 ? "left" : "center",
                                        bottom: "calc(100% + 2px)"
                                    },
                                    children: (0, L.jsx)(ee.B, {
                                        value: r,
                                        variant: "main12",
                                        visibleDecimals: 2
                                    })
                                })
                            })
                        }), (0, L.jsxs)(s.Z, {
                            sx: {
                                maxWidth: "20%",
                                textAlign: "center",
                                pt: 1.5,
                                "&:after": {
                                    content: "''",
                                    position: "absolute",
                                    bottom: "85%",
                                    left: "10%",
                                    transform: "translateX(-50%)",
                                    height: "10px",
                                    width: "2px",
                                    bgcolor: "error.main"
                                }
                            },
                            children: [(0, L.jsx)(ee.B, {
                                value: 1,
                                visibleDecimals: 2,
                                color: "error.main",
                                variant: "subheader2"
                            }), (0, L.jsx)(a.Z, {
                                sx: {
                                    display: "flex"
                                },
                                variant: "helperText",
                                lineHeight: "12px",
                                color: "error.main",
                                children: (0, L.jsx)(n.cC, {
                                    id: "Liquidation value"
                                })
                            })]
                        })]
                    })
                },
                kr = function(e) {
                    var t = e.topValue,
                        r = e.topTitle,
                        n = e.topDescription,
                        o = e.children,
                        i = e.bottomText,
                        l = e.color;
                    return (0, L.jsxs)(s.Z, {
                        sx: function(e) {
                            return {
                                border: "1px solid ".concat(e.palette.divider),
                                mb: 6,
                                borderRadius: "6px",
                                px: 4,
                                pt: 4,
                                pb: 6,
                                "&:last-of-type": {
                                    mb: 0
                                }
                            }
                        },
                        children: [(0, L.jsxs)(s.Z, {
                            sx: {
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [(0, L.jsxs)(s.Z, {
                                sx: {
                                    width: "calc(100% - 72px)"
                                },
                                children: [(0, L.jsx)(a.Z, {
                                    variant: "subheader1",
                                    mb: 1,
                                    children: r
                                }), (0, L.jsx)(a.Z, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: n
                                })]
                            }), (0, L.jsx)(s.Z, {
                                sx: {
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: "".concat(l, ".main")
                                },
                                children: t
                            })]
                        }), (0, L.jsx)(s.Z, {
                            children: o
                        }), (0, L.jsx)(a.Z, {
                            variant: "secondary12",
                            color: "text.secondary",
                            textAlign: "left",
                            children: i
                        })]
                    })
                },
                Dr = function(e) {
                    var t = e.loanToValue,
                        r = e.currentLoanToValue,
                        i = e.currentLiquidationThreshold,
                        l = e.color,
                        c = (0, o.Z)().palette,
                        d = (0, g.hE)(t).multipliedBy(100).precision(20, mt().ROUND_UP).toNumber(),
                        u = (0, g.hE)(r).multipliedBy(100).precision(20, mt().ROUND_UP).toNumber(),
                        p = (0, g.hE)(i).multipliedBy(100).precision(20, mt().ROUND_UP).toNumber(),
                        x = 100 * Number(i);
                    return (0, L.jsxs)(s.Z, {
                        sx: {
                            position: "relative",
                            margin: "45px 0 55px"
                        },
                        children: [(0, L.jsx)(s.Z, {
                            sx: {
                                position: "absolute",
                                top: "calc(100% + 6px)",
                                left: "".concat(p > 100 ? 100 : p, "%"),
                                zIndex: 2
                            },
                            children: (0, L.jsx)(s.Z, {
                                sx: {
                                    position: "relative",
                                    whiteSpace: "nowrap",
                                    "&:after": {
                                        content: "''",
                                        position: "absolute",
                                        left: x > 75 ? "auto" : "50%",
                                        transform: x > 75 ? "translateX(0)" : "translateX(-50%)",
                                        right: x > 75 ? 0 : "auto",
                                        bottom: "100%",
                                        height: "10px",
                                        width: "2px",
                                        bgcolor: "error.main"
                                    }
                                },
                                children: (0, L.jsxs)(s.Z, {
                                    sx: {
                                        display: "flex",
                                        position: "absolute",
                                        left: x > 75 ? "auto" : "50%",
                                        transform: x > 75 ? "translateX(0)" : "translateX(-50%)",
                                        right: x > 75 ? 0 : "auto",
                                        flexDirection: "column",
                                        alignItems: x > 75 ? "flex-end" : "center",
                                        textAlign: x > 75 ? "right" : "center"
                                    },
                                    children: [(0, L.jsx)(ee.B, {
                                        value: i,
                                        visibleDecimals: 2,
                                        color: "error.main",
                                        variant: "subheader2",
                                        percent: !0,
                                        symbolsColor: "error.main"
                                    }), (0, L.jsx)(a.Z, {
                                        sx: {
                                            display: "flex"
                                        },
                                        variant: "helperText",
                                        lineHeight: "12px",
                                        color: "error.main",
                                        children: (0, L.jsx)(n.cC, {
                                            id: "Liquidation <0/> threshold",
                                            components: {
                                                0: (0, L.jsx)("br", {})
                                            }
                                        })
                                    })]
                                })
                            })
                        }), (0, L.jsx)(s.Z, {
                            sx: {
                                position: "absolute",
                                bottom: "calc(100% + 6px)",
                                left: "".concat(d > 100 ? 100 : d, "%"),
                                zIndex: 3
                            },
                            children: (0, L.jsx)(s.Z, {
                                sx: function(e) {
                                    return {
                                        position: "relative",
                                        whiteSpace: "nowrap",
                                        "&:after": {
                                            width: 0,
                                            height: 0,
                                            borderStyle: "solid",
                                            borderWidth: "6px 4px 0 4px",
                                            borderColor: "".concat(e.palette.primary.main, " transparent transparent transparent"),
                                            content: "''",
                                            position: "absolute",
                                            left: d > 75 ? "auto" : "50%",
                                            right: d > 75 ? 0 : "auto",
                                            transform: d > 75 ? "translateX(0)" : "translateX(-50%)"
                                        }
                                    }
                                },
                                children: (0, L.jsxs)(s.Z, {
                                    sx: {
                                        display: "flex",
                                        position: "absolute",
                                        left: d > 75 ? "auto" : d < 15 ? "0" : "50%",
                                        transform: d > 75 || d < 15 ? "translateX(0)" : "translateX(-50%)",
                                        right: d > 75 ? 0 : "auto",
                                        flexDirection: "column",
                                        alignItems: d > 75 ? "flex-end" : d < 15 ? "flex-start" : "center",
                                        textAlign: d > 75 ? "right" : d < 15 ? "left" : "center",
                                        bottom: "calc(100% + 2px)"
                                    },
                                    children: [(0, L.jsx)(ee.B, {
                                        value: t,
                                        percent: !0,
                                        visibleDecimals: 2,
                                        variant: "main12"
                                    }), (0, L.jsxs)(s.Z, {
                                        sx: {
                                            display: "inline-flex",
                                            alignItems: "center"
                                        },
                                        children: [(0, L.jsx)(a.Z, {
                                            variant: "helperText",
                                            color: "text.muted",
                                            mr: .5,
                                            children: (0, L.jsx)(n.cC, {
                                                id: "MAX"
                                            })
                                        }), (0, L.jsx)(ee.B, {
                                            value: r,
                                            percent: !0,
                                            visibleDecimals: 2,
                                            variant: "helperText",
                                            color: "text.muted",
                                            symbolsColor: "text.muted"
                                        })]
                                    })]
                                })
                            })
                        }), (0, L.jsxs)(s.Z, {
                            sx: {
                                height: "4px",
                                width: "100%",
                                borderRadius: "1px",
                                position: "relative",
                                bgcolor: "divider"
                            },
                            children: [(0, L.jsx)(s.Z, {
                                sx: {
                                    position: "absolute",
                                    left: 0,
                                    height: "4px",
                                    borderRadius: "1px",
                                    width: "".concat(d > 100 ? 100 : d, "%"),
                                    maxWidth: "100%",
                                    bgcolor: "".concat(l, ".main"),
                                    zIndex: 2
                                }
                            }), d < u && (0, L.jsx)(s.Z, {
                                sx: {
                                    position: "absolute",
                                    left: 0,
                                    height: "4px",
                                    borderRadius: "1px",
                                    width: "".concat(u > 100 ? 100 : u, "%"),
                                    maxWidth: "100%",
                                    background: "repeating-linear-gradient(-45deg, ".concat(c.divider, ", ").concat(c.divider, " 4px, ").concat(c[l].main, " 4px, ").concat(c[l].main, " 7px)")
                                }
                            })]
                        })]
                    })
                },
                Pr = function(e) {
                    var t = e.open,
                        r = e.setOpen,
                        o = e.healthFactor,
                        i = e.loanToValue,
                        s = e.currentLoanToValue,
                        l = e.currentLiquidationThreshold,
                        c = "success",
                        d = Number(o);
                    d > 1.1 && d <= 3 ? c = "warning" : d <= 1.1 && (c = "error");
                    var u = "success",
                        p = 100 * Number(i),
                        x = 100 * Number(s),
                        h = 100 * Number(l);
                    return p >= Math.min(x, h) ? u = "error" : p > x / 2 && p < x && (u = "warning"), (0, L.jsxs)(Ar.P, {
                        open: t,
                        setOpen: r,
                        children: [(0, L.jsx)(a.Z, {
                            variant: "h2",
                            mb: 6,
                            children: (0, L.jsx)(n.cC, {
                                id: "Liquidation risk parameters"
                            })
                        }), (0, L.jsxs)(a.Z, {
                            mb: 6,
                            children: [(0, L.jsx)(n.cC, {
                                id: "Your health factor and loan to value determine the assurance of your collateral. To avoid liquidations you can supply more collateral or repay borrow positions."
                            }), " ", (0, L.jsx)(T.rU, {
                                href: "https://docs.sparkprotocol.io/faq/",
                                sx: {
                                    textDecoration: "underline"
                                },
                                color: "text.primary",
                                variant: "description",
                                children: (0, L.jsx)(n.cC, {
                                    id: "Learn more"
                                })
                            })]
                        }), (0, L.jsx)(kr, {
                            topTitle: (0, L.jsx)(n.cC, {
                                id: "Health factor"
                            }),
                            topDescription: (0, L.jsx)(n.cC, {
                                id: "Safety of your deposited collateral against the borrowed assets and its underlying value."
                            }),
                            topValue: (0, L.jsx)(Cr.o, {
                                value: o,
                                variant: "main12",
                                sx: {
                                    color: "common.white"
                                }
                            }),
                            bottomText: (0, L.jsx)(n.cC, {
                                id: "If the health factor goes below 1, the liquidation of your collateral might be triggered."
                            }),
                            color: c,
                            children: (0, L.jsx)(Sr, {
                                healthFactor: o
                            })
                        }), (0, L.jsx)(kr, {
                            topTitle: (0, L.jsx)(n.cC, {
                                id: "Current LTV"
                            }),
                            topDescription: (0, L.jsx)(n.cC, {
                                id: "Your current loan to value based on your collateral supplied."
                            }),
                            topValue: (0, L.jsx)(ee.B, {
                                value: i,
                                percent: !0,
                                variant: "main12",
                                color: "common.white",
                                symbolsColor: "common.white"
                            }),
                            bottomText: (0, L.jsx)(n.cC, {
                                id: "If your loan to value goes above the liquidation threshold your collateral supplied may be liquidated."
                            }),
                            color: u,
                            children: (0, L.jsx)(Dr, {
                                loanToValue: i,
                                currentLoanToValue: s,
                                currentLiquidationThreshold: l,
                                color: u
                            })
                        })]
                    })
                },
                Br = function() {
                    var e;
                    (0, Vt.G2)();
                    var t = (0, p.f)(),
                        r = t.currentNetworkConfig,
                        c = t.currentMarketData,
                        d = (0, M.HT)(),
                        u = d.user,
                        x = d.reserves,
                        h = d.loading,
                        b = (0, j.Z)().currentAccount,
                        m = (0, l.useState)(!1),
                        f = m[0],
                        y = m[1],
                        w = (0, Q.vR)().openClaimRewards,
                        C = (0, Vt.Yh)((function(e) {
                            return (0, Wt.lY)(e)
                        })),
                        O = (0, Vt.Yh)((function(e) {
                            return (0, Ft.qY)(e)
                        })),
                        Z = null === O || void 0 === O || null === (e = O.userReserves) || void 0 === e ? void 0 : e.some((function(e) {
                            return "0" !== e.scaledATokenBalance || "0" !== e.scaledVariableDebt
                        })),
                        A = C && "" !== b && Z,
                        S = (0, o.Z)(),
                        k = (0, i.Z)(S.breakpoints.down("sm")),
                        D = Object.keys(u.calculatedUserIncentives).reduce((function(e, t) {
                            var n = u.calculatedUserIncentives[t],
                                o = (0, g.Fv)(n.claimableRewards, n.rewardTokenDecimals),
                                i = 0;
                            if (!c.v3 && Number(o) > 0)
                                if (c.chainId === v.a_.mainnet) {
                                    var s = x.find((function(e) {
                                        return "AAVE" === e.symbol
                                    }));
                                    i = s ? Number(s.priceInUSD) : 0
                                } else x.forEach((function(e) {
                                    e.symbol === r.wrappedBaseAssetSymbol && (i = Number(e.priceInUSD))
                                }));
                            else i = Number(n.rewardPriceFeed);
                            var a = Number(o) * i;
                            return a > 0 && (-1 === e.assets.indexOf(n.rewardTokenSymbol) && e.assets.push(n.rewardTokenSymbol), e.claimableRewardsUsd += Number(a)), e
                        }), {
                            claimableRewardsUsd: 0,
                            assets: []
                        }).claimableRewardsUsd,
                        P = "0" === (null === u || void 0 === u ? void 0 : u.totalCollateralMarketReferenceCurrency) ? "0" : (0, g.hE)((null === u || void 0 === u ? void 0 : u.totalBorrowsMarketReferenceCurrency) || "0").dividedBy((null === u || void 0 === u ? void 0 : u.totalCollateralMarketReferenceCurrency) || "1").toFixed(),
                        B = k ? "main16" : "main21",
                        E = k ? "secondary16" : "secondary21";
                    return (0, L.jsxs)(L.Fragment, {
                        children: [A && (0, L.jsx)(s.Z, {
                            sx: {
                                width: "100%"
                            },
                            children: (0, L.jsx)(Nt.default, {
                                href: T.Z6.migrationTool,
                                children: (0, L.jsx)(X.Z, {
                                    variant: "gradient",
                                    sx: {
                                        height: "40px",
                                        width: "100%"
                                    },
                                    children: (0, L.jsx)(a.Z, {
                                        variant: "buttonM",
                                        children: (0, L.jsx)(n.cC, {
                                            id: "Migrate Your Aave V2 Position to Spark Protocol"
                                        })
                                    })
                                })
                            })
                        }), (0, L.jsxs)(Or.f, {
                            titleComponent: (0, L.jsxs)(s.Z, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [(0, L.jsx)(Yt.V, {
                                    pageTitle: (0, L.jsx)(n.cC, {
                                        id: "Dashboard"
                                    }),
                                    withMarketSwitcher: !0,
                                    bridge: r.bridge
                                }), A && !k && (0, L.jsx)(s.Z, {
                                    sx: {
                                        alignSelf: "center",
                                        mb: 4,
                                        width: "100%"
                                    },
                                    children: (0, L.jsx)(Nt.default, {
                                        href: T.Z6.migrationTool,
                                        children: (0, L.jsx)(X.Z, {
                                            variant: "gradient",
                                            sx: {
                                                height: "20px"
                                            },
                                            children: (0, L.jsx)(a.Z, {
                                                variant: "buttonS",
                                                "data-cy": "migration-button",
                                                children: (0, L.jsx)(n.cC, {
                                                    id: "Migrate to Spark Protocol"
                                                })
                                            })
                                        })
                                    })
                                })]
                            }),
                            children: [(0, L.jsx)(Zr.d, {
                                icon: (0, L.jsx)(rr.Z, {}),
                                title: (0, L.jsx)(n.cC, {
                                    id: "Net worth"
                                }),
                                loading: h,
                                children: b ? (0, L.jsx)(ee.B, {
                                    value: Number((null === u || void 0 === u ? void 0 : u.netWorthUSD) || 0),
                                    symbol: "USD",
                                    variant: B,
                                    visibleDecimals: 2,
                                    compact: !0,
                                    symbolsColor: "#A5A8B6",
                                    symbolsVariant: E
                                }) : (0, L.jsx)(St.J, {
                                    variant: E,
                                    sx: {
                                        opacity: "0.7"
                                    }
                                })
                            }), (0, L.jsx)(Zr.d, {
                                icon: (0, L.jsx)(tr.Z, {}),
                                title: (0, L.jsxs)("div", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [(0, L.jsx)(n.cC, {
                                        id: "Net APY"
                                    }), (0, L.jsx)(_t, {})]
                                }),
                                loading: h,
                                children: b && Number(null === u || void 0 === u ? void 0 : u.netWorthUSD) > 0 ? (0, L.jsx)(ee.B, {
                                    value: u.netAPY,
                                    variant: B,
                                    visibleDecimals: 2,
                                    percent: !0,
                                    symbolsColor: "#A5A8B6",
                                    symbolsVariant: E
                                }) : (0, L.jsx)(St.J, {
                                    variant: E,
                                    sx: {
                                        opacity: "0.7"
                                    }
                                })
                            }), b && "-1" !== (null === u || void 0 === u ? void 0 : u.healthFactor) && (0, L.jsx)(Zr.d, {
                                icon: (0, L.jsx)(er, {}),
                                title: (0, L.jsx)(s.Z, {
                                    sx: {
                                        display: "inline-flex",
                                        alignItems: "center"
                                    },
                                    children: (0, L.jsx)(n.cC, {
                                        id: "Health factor"
                                    })
                                }),
                                loading: h,
                                children: (0, L.jsx)(Cr.o, {
                                    value: (null === u || void 0 === u ? void 0 : u.healthFactor) || "-1",
                                    variant: B,
                                    onInfoClick: function() {
                                        return y(!0)
                                    },
                                    HALIntegrationComponent: c.halIntegration && (0, L.jsx)(wr, {
                                        healthFactor: (null === u || void 0 === u ? void 0 : u.healthFactor) || "-1",
                                        marketName: c.halIntegration.marketName,
                                        integrationURL: c.halIntegration.URL
                                    })
                                })
                            }), b && D > 0 && (0, L.jsx)(Zr.d, {
                                title: (0, L.jsx)(n.cC, {
                                    id: "Available rewards"
                                }),
                                icon: (0, L.jsx)(Kt, {}),
                                loading: h,
                                children: (0, L.jsxs)(s.Z, {
                                    sx: {
                                        display: "flex",
                                        alignItems: {
                                            xs: "flex-start",
                                            xsm: "center"
                                        },
                                        flexDirection: {
                                            xs: "column",
                                            xsm: "row"
                                        }
                                    },
                                    children: [(0, L.jsx)(s.Z, {
                                        sx: {
                                            display: "inline-flex",
                                            alignItems: "center"
                                        },
                                        "data-cy": "Claim_Box",
                                        children: (0, L.jsx)(ee.B, {
                                            value: D,
                                            variant: B,
                                            visibleDecimals: 2,
                                            compact: !0,
                                            symbol: "USD",
                                            symbolsColor: "#A5A8B6",
                                            symbolsVariant: E,
                                            "data-cy": "Claim_Value"
                                        })
                                    }), (0, L.jsx)(X.Z, {
                                        variant: "gradient",
                                        size: "small",
                                        onClick: function() {
                                            return w()
                                        },
                                        sx: {
                                            minWidth: "unset",
                                            ml: {
                                                xs: 0,
                                                xsm: 2
                                            }
                                        },
                                        "data-cy": "Dashboard_Claim_Button",
                                        children: (0, L.jsx)(n.cC, {
                                            id: "Claim"
                                        })
                                    })]
                                })
                            })]
                        }), (0, L.jsx)(Pr, {
                            open: f,
                            setOpen: y,
                            healthFactor: (null === u || void 0 === u ? void 0 : u.healthFactor) || "-1",
                            loanToValue: P,
                            currentLoanToValue: (null === u || void 0 === u ? void 0 : u.currentLoanToValue) || "0",
                            currentLiquidationThreshold: (null === u || void 0 === u ? void 0 : u.currentLiquidationThreshold) || "0"
                        })]
                    })
                };

            function Er() {
                var e = (0, p.f)(),
                    t = e.currentMarket,
                    r = e.setCurrentMarket,
                    m = (0, o.Z)().breakpoints,
                    f = (0, i.Z)(m.up("lg")),
                    v = (0, j.Z)(),
                    y = v.currentAccount,
                    g = v.loading,
                    w = (0, u.T)().isPermissionsLoading,
                    C = (0, l.useState)(""),
                    O = C[0],
                    Z = C[1];
                return (0, l.useEffect)((function() {
                    O || Z("supply")
                }), [f]), (0, l.useEffect)((function() {
                    t === x.e.proto_mainnet && r(x.e.proto_spark_v3)
                }), [r, t]), (0, L.jsxs)(L.Fragment, {
                    children: [(0, L.jsx)(Br, {}), (0, L.jsxs)(b.O, {
                        children: [y && !w && (0, L.jsx)(s.Z, {
                            sx: {
                                display: {
                                    xs: "flex",
                                    lg: "none"
                                },
                                justifyContent: {
                                    xs: "center",
                                    xsm: "flex-start"
                                },
                                mb: {
                                    xs: 3,
                                    xsm: 4
                                }
                            },
                            children: (0, L.jsxs)(d.Z, {
                                color: "primary",
                                value: O,
                                exclusive: !0,
                                onChange: function(e, t) {
                                    return Z(t)
                                },
                                sx: {
                                    width: {
                                        xs: "100%",
                                        xsm: "359px"
                                    },
                                    height: "44px"
                                },
                                children: [(0, L.jsx)(c.Z, {
                                    value: "supply",
                                    disabled: "supply" === O,
                                    children: (0, L.jsx)(a.Z, {
                                        variant: "subheader1",
                                        children: (0, L.jsx)(n.cC, {
                                            id: "Supply"
                                        })
                                    })
                                }), (0, L.jsx)(c.Z, {
                                    value: "borrow",
                                    disabled: "borrow" === O,
                                    children: (0, L.jsx)(a.Z, {
                                        variant: "subheader1",
                                        children: (0, L.jsx)(n.cC, {
                                            id: "Borrow"
                                        })
                                    })
                                })]
                            })
                        }), y && !w ? (0, L.jsx)(Mt, {
                            isBorrow: "borrow" === O
                        }) : (0, L.jsx)(h.w, {
                            loading: g
                        })]
                    })]
                })
            }
            Er.getLayout = function(e) {
                return (0, L.jsx)(m.Z, {
                    children: e
                })
            }
        },
        41528: function(e, t, r) {
            "use strict";
            r.d(t, {
                y: function() {
                    return s
                }
            });
            var n = r(72389),
                o = r(61953),
                i = r(85893),
                s = function(e) {
                    var t = e.title,
                        r = e.children;
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)(n.Z, {
                            placement: "top",
                            componentsProps: {
                                tooltip: {
                                    sx: {
                                        bgcolor: "rgba(15, 18, 29, 0.8)",
                                        "& .MuiTooltip-arrow": {
                                            color: "rgba(15, 18, 29, 0.8)"
                                        }
                                    }
                                },
                                popper: {
                                    modifiers: [{
                                        name: "offset",
                                        options: {
                                            offset: [0, -8]
                                        }
                                    }]
                                }
                            },
                            title: (0, i.jsx)(o.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: t
                            }),
                            children: r
                        })
                    })
                }
        },
        7775: function(e, t, r) {
            "use strict";
            r.d(t, {
                s: function() {
                    return d
                }
            });
            var n = r(59499),
                o = r(36864),
                i = r(49501),
                s = r(58527),
                a = r(85893);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                var t = (0, o.Z)({}, e);
                return (0, a.jsx)(s.G, c(c({}, t), {}, {
                    children: (0, a.jsx)(i.cC, {
                        id: "Stable interest rate will <0>stay the same</0> for the duration of your loan. Recommended for long-term loan periods and for users who prefer predictability.",
                        components: {
                            0: (0, a.jsx)("b", {})
                        }
                    })
                }))
            }
        },
        54411: function(e, t, r) {
            "use strict";
            r.d(t, {
                I: function() {
                    return p
                }
            });
            var n = r(49501),
                o = r(38264),
                i = r(61953),
                s = r(29630),
                a = r(81645),
                l = r(97563),
                c = r(68861),
                d = r(85893),
                u = function() {
                    return (0, d.jsxs)(i.Z, {
                        children: [(0, d.jsx)(i.Z, {
                            sx: {
                                mb: 4
                            },
                            children: (0, d.jsx)(s.Z, {
                                children: (0, d.jsx)(n.cC, {
                                    id: "Isolated assets have limited borrowing power and other assets cannot be used as collateral."
                                })
                            })
                        }), (0, d.jsx)(s.Z, {
                            variant: "subheader2",
                            color: "text.secondary",
                            children: (0, d.jsx)(n.cC, {
                                id: "Learn more in our <0>FAQ guide</0>",
                                components: {
                                    0: (0, d.jsx)(c.rU, {
                                        href: "https://docs.sparkprotocol.io/faq/spark-lend-features#isolation-mode",
                                        fontWeight: 500
                                    })
                                }
                            })
                        })]
                    })
                },
                p = function() {
                    return (0, d.jsx)(l.a, {
                        tooltipContent: (0, d.jsx)(u, {}),
                        withoutHover: !0,
                        children: (0, d.jsxs)(i.Z, {
                            sx: {
                                display: "inline-flex",
                                alignItems: "center",
                                p: "2px",
                                mt: "2px",
                                cursor: "pointer",
                                transition: "all 0.2s easy",
                                "&:hover": {
                                    opacity: .6
                                }
                            },
                            children: [(0, d.jsx)(s.Z, {
                                variant: "secondary12",
                                color: "text.secondary",
                                children: (0, d.jsx)(n.cC, {
                                    id: "Isolated"
                                })
                            }), (0, d.jsx)(a.Z, {
                                sx: {
                                    ml: "3px",
                                    color: "text.muted",
                                    fontSize: "".concat(14, "px")
                                },
                                children: (0, d.jsx)(o.Z, {})
                            })]
                        })
                    })
                }
        },
        26079: function(e, t, r) {
            "use strict";
            r.d(t, {
                N: function() {
                    return s
                }
            });
            var n = r(61953),
                o = r(29630),
                i = r(85893),
                s = function(e) {
                    var t = e.text;
                    return (0, i.jsx)(n.Z, {
                        sx: {
                            px: {
                                xs: 4,
                                xsm: 6
                            },
                            pt: {
                                xs: 3.5,
                                xsm: 5.5
                            },
                            pb: {
                                xs: 6,
                                sxm: 7
                            }
                        },
                        children: (0, i.jsx)(o.Z, {
                            color: "text.secondary",
                            children: t
                        })
                    })
                }
        },
        54373: function(e, t, r) {
            "use strict";
            r.d(t, {
                K: function() {
                    return l
                }
            });
            var n = r(49501),
                o = r(75331),
                i = r(19952),
                s = r(68861),
                a = r(85893);

            function l(e) {
                var t = e.bridge,
                    r = e.chainId,
                    l = e.icon,
                    c = e.sx,
                    d = e.symbol,
                    u = [o.a_.avalanche].includes(r) ? "Ethereum & Bitcoin" : "Ethereum";
                return (0, a.jsx)(i.v, {
                    severity: "info",
                    icon: l,
                    sx: c,
                    children: t ? (0, a.jsx)(n.cC, {
                        id: "Your wallet is empty. Purchase or transfer assets or use <0>{0}</0> to transfer your {network} assets.",
                        values: {
                            0: t.name,
                            network: u
                        },
                        components: {
                            0: (0, a.jsx)(s.rU, {
                                href: t.url
                            })
                        }
                    }) : (0, a.jsx)(n.cC, {
                        id: "Your wallet is empty. Purchase or transfer assets. {0}",
                        values: {
                            0: "wstETH" === d ? (0, a.jsx)(s.rU, {
                                href: "https://stake.lido.fi/wrap",
                                children: "Wrap your Lido stETH here."
                            }) : null
                        }
                    })
                })
            }
        },
        86057: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(98819)
            }])
        }
    },
    function(e) {
        e.O(0, [249, 597, 838, 505, 774, 888, 179], (function() {
            return t = 86057, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);