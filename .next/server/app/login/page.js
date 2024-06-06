(() => {
    var e = {};
    (e.id = 626),
        (e.ids = [626]),
        (e.modules = {
            7849: (e) => {
                'use strict';
                e.exports = require('next/dist/client/components/action-async-storage.external');
            },
            2934: (e) => {
                'use strict';
                e.exports = require('next/dist/client/components/action-async-storage.external.js');
            },
            5403: (e) => {
                'use strict';
                e.exports = require('next/dist/client/components/request-async-storage.external');
            },
            4580: (e) => {
                'use strict';
                e.exports = require('next/dist/client/components/request-async-storage.external.js');
            },
            4749: (e) => {
                'use strict';
                e.exports = require('next/dist/client/components/static-generation-async-storage.external');
            },
            5869: (e) => {
                'use strict';
                e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
            },
            399: (e) => {
                'use strict';
                e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
            },
            2781: (e) => {
                'use strict';
                e.exports = require('stream');
            },
            6530: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        GlobalError: () => l.a,
                        __next_app__: () => p,
                        originalPathname: () => d,
                        pages: () => u,
                        routeModule: () => m,
                        tree: () => c,
                    }),
                    r(8476),
                    r(9862),
                    r(2593);
                var n = r(3826),
                    a = r(9930),
                    o = r(2049),
                    l = r.n(o),
                    i = r(8405),
                    s = {};
                for (let e in i)
                    0 >
                        [
                            'default',
                            'tree',
                            'pages',
                            'GlobalError',
                            'originalPathname',
                            '__next_app__',
                            'routeModule',
                        ].indexOf(e) && (s[e] = () => i[e]);
                r.d(t, s);
                let c = [
                        '',
                        {
                            children: [
                                'login',
                                {
                                    children: [
                                        '__PAGE__',
                                        {},
                                        {
                                            page: [
                                                () =>
                                                    Promise.resolve().then(
                                                        r.bind(r, 8476)
                                                    ),
                                                '/Users/pedrosevero/Desktop/code/future-eats/src/app/login/page.tsx',
                                            ],
                                        },
                                    ],
                                },
                                {},
                            ],
                        },
                        {
                            layout: [
                                () => Promise.resolve().then(r.bind(r, 9862)),
                                '/Users/pedrosevero/Desktop/code/future-eats/src/app/layout.tsx',
                            ],
                            'not-found': [
                                () =>
                                    Promise.resolve().then(
                                        r.t.bind(r, 2593, 23)
                                    ),
                                'next/dist/client/components/not-found-error',
                            ],
                        },
                    ],
                    u = [
                        '/Users/pedrosevero/Desktop/code/future-eats/src/app/login/page.tsx',
                    ],
                    d = '/login/page',
                    p = { require: r, loadChunk: () => Promise.resolve() },
                    m = new n.AppPageRouteModule({
                        definition: {
                            kind: a.x.APP_PAGE,
                            page: '/login/page',
                            pathname: '/login',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: c },
                    });
            },
            9856: (e, t, r) => {
                Promise.resolve().then(r.bind(r, 1813));
            },
            7590: (e, t, r) => {
                'use strict';
                r.d(t, { z: () => i });
                var n = r(1694),
                    a = r.n(n),
                    o = r(9951);
                let l = (0, n.lazy)(() =>
                        r
                            .e(682)
                            .then(r.bind(r, 1682))
                            .then((e) => {
                                let { MainLogoView: t } = e;
                                return { default: t };
                            })
                    ),
                    i = () =>
                        a().createElement(
                            n.Suspense,
                            {
                                fallback: a().createElement(
                                    o.Z.circularProgressIndeterminate,
                                    {
                                        color: 'primary',
                                        dataTestId: 'main-logo-lazy-loading',
                                    }
                                ),
                            },
                            a().createElement(l, null)
                        );
            },
            1813: (e, t, r) => {
                'use strict';
                r.r(t), r.d(t, { default: () => I });
                var n,
                    a,
                    o,
                    l = r(1694),
                    i = r.n(l),
                    s = r(8761);
                function c(e, t) {
                    return (
                        t || (t = e.slice(0)),
                        Object.freeze(
                            Object.defineProperties(e, {
                                raw: { value: Object.freeze(t) },
                            })
                        )
                    );
                }
                let u = s.ZP.div.withConfig({ componentId: 'sc-fee55b0f-0' })(
                        n ||
                            (n = c([
                                '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    padding: 88px 16px 0;\n',
                            ]))
                    ),
                    d = s.ZP.form.withConfig({ componentId: 'sc-fee55b0f-1' })(
                        a ||
                            (a = c([
                                '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n    margin: 28px 0;\n',
                            ]))
                    );
                var p = r(9951),
                    m = r(7787),
                    g = r(134),
                    f = r(9796);
                let x = (function (e) {
                        return (
                            (e.PASSWORD = 'password'), (e.EMAIL = 'email'), e
                        );
                    })({}),
                    v = () => ({
                        schema: (0, l.useMemo)(
                            () =>
                                g
                                    .object()
                                    .shape({
                                        password: g
                                            .string()
                                            .required(f.Q.requiredField)
                                            .min(6, f.Q.invalidPassword),
                                        email: g
                                            .string()
                                            .email(f.Q.invalidEmail)
                                            .required(f.Q.requiredField),
                                    }),
                            [g]
                        ),
                    });
                var y = r(4793),
                    E = r(7590);
                let b = (e) => {
                        let { action: t, callToActionLinkColor: r } = e;
                        return i().createElement(
                            p.Z.typography,
                            { variant: 'subtitle1' },
                            'Nao possui cadastro?',
                            ' ',
                            i().createElement(
                                'span',
                                {
                                    className: 'call-to-action-link',
                                    style: { color: r },
                                    onClick: t,
                                },
                                'Clique aqui'
                            )
                        );
                    },
                    h = i().memo((e) => {
                        let { action: t, callToActionLinkColor: r } = e;
                        return i().createElement(b, {
                            action: t,
                            callToActionLinkColor: r,
                        });
                    });
                function P() {
                    return (P =
                        Object.assign ?
                            Object.assign.bind()
                        :   function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r)
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            n
                                        ) && (e[n] = r[n]);
                                }
                                return e;
                            }).apply(this, arguments);
                }
                let S = (e) => {
                    let {
                            onSubmit: t,
                            control: r,
                            hasLoginError: n,
                            closeAlert: a,
                            alertMessage: o,
                        } = e,
                        [s, c] = (0, l.useState)(!1);
                    return i().createElement(
                        u,
                        null,
                        i().createElement(p.Z.alert, {
                            severity: 'error',
                            isOpen: n,
                            message: o,
                            onClose: a,
                        }),
                        i().createElement(E.z, null),
                        i().createElement(
                            d,
                            { onSubmit: t },
                            i().createElement(
                                p.Z.typography,
                                { variant: 'h2' },
                                'Entrar'
                            ),
                            i().createElement(m.Qr, {
                                name: x.EMAIL,
                                control: r,
                                render: (e) => {
                                    let {
                                        field: t,
                                        fieldState: { error: r },
                                    } = e;
                                    return i().createElement(
                                        p.Z.textFieldInput,
                                        P({}, t, {
                                            placeholder: 'email@email.com',
                                            label: 'E-mail',
                                            error: !!r,
                                            helperText:
                                                null == r ? void 0 : r.message,
                                        })
                                    );
                                },
                            }),
                            i().createElement(m.Qr, {
                                name: x.PASSWORD,
                                control: r,
                                render: (e) => {
                                    let {
                                        field: t,
                                        fieldState: { error: r },
                                    } = e;
                                    return i().createElement(
                                        p.Z.textFieldInput,
                                        P({}, t, {
                                            placeholder:
                                                'M\xednimo 6 caracteres',
                                            type: s ? 'text' : 'password',
                                            label: 'Senha',
                                            error: !!r,
                                            helperText:
                                                null == r ? void 0 : r.message,
                                            InputProps: {
                                                endAdornment: i().createElement(
                                                    p.Z.inputAdornment,
                                                    { position: 'start' },
                                                    i().createElement(
                                                        p.Z.iconButton,
                                                        {
                                                            'aria-label':
                                                                'toggle password visibility',
                                                            onClick: () => {
                                                                c(!s);
                                                            },
                                                            edge: 'end',
                                                            id: 'password-visibility-icon-button',
                                                        },
                                                        s ?
                                                            i().createElement(
                                                                p.Z
                                                                    .visibilityOffIcon,
                                                                {
                                                                    style: {
                                                                        color: ''.concat(
                                                                            y.r
                                                                                .palette
                                                                                .secondary
                                                                                .main
                                                                        ),
                                                                    },
                                                                }
                                                            )
                                                        :   i().createElement(
                                                                p.Z
                                                                    .visibilityIcon,
                                                                {
                                                                    style: {
                                                                        color: ''.concat(
                                                                            y.r
                                                                                .palette
                                                                                .secondary
                                                                                .main
                                                                        ),
                                                                    },
                                                                }
                                                            )
                                                    )
                                                ),
                                            },
                                        })
                                    );
                                },
                            }),
                            i().createElement(
                                p.Z.button,
                                {
                                    type: 'submit',
                                    color: 'primary',
                                    variant: 'contained',
                                    fullWidth: !0,
                                },
                                'Entrar'
                            )
                        ),
                        i().createElement(h, {
                            action: () => null,
                            callToActionLinkColor: y.r.palette.text.hint,
                        })
                    );
                };
                var _ = r(2290),
                    w = r(9679),
                    q = r(3008),
                    A = r(238);
                let O = (0, r(7623).Ps)(
                        o ||
                            (o = (function (e, t) {
                                return (
                                    t || (t = e.slice(0)),
                                    Object.freeze(
                                        Object.defineProperties(e, {
                                            raw: { value: Object.freeze(t) },
                                        })
                                    )
                                );
                            })([
                                '\n    mutation Login($email: String!, $password: String!) {\n        login(input: { email: $email, password: $password }) {\n            data {\n                token\n            }\n        }\n    }\n',
                            ]))
                    ),
                    k = () => {
                        let { userDispatch: e } = (0, w.e)(),
                            [t, { loading: r }] = (0, A.D)(O);
                        return (
                            (0, l.useEffect)(() => {
                                r && e({ type: q.L.USER_LOADING });
                            }, [r, e]),
                            {
                                handleLogin: (0, l.useCallback)(
                                    async (r) => {
                                        try {
                                            var n;
                                            let { email: a, password: o } = r,
                                                l = await t({
                                                    variables: {
                                                        email: a,
                                                        password: o,
                                                    },
                                                });
                                            e({
                                                type: q.L.LOGIN_SUCCESS,
                                                payload:
                                                    (
                                                        null == l ||
                                                        null === (n = l.data) ||
                                                        void 0 === n ||
                                                        null ===
                                                            (n = n.login) ||
                                                        void 0 === n ||
                                                        null === (n = n.data) ||
                                                        void 0 === n
                                                    ) ?
                                                        void 0
                                                    :   n.user,
                                            });
                                        } catch (t) {
                                            e({
                                                type: q.L.USER_FAILURE,
                                                alertMessage: t.message,
                                            });
                                        }
                                    },
                                    [e, t]
                                ),
                            }
                        );
                    },
                    j = () => {
                        let { schema: e } = v(),
                            { control: t, handleSubmit: r } = (0, m.cI)({
                                resolver: (0, _.X)(e),
                            }),
                            { handleLogin: n } = k(),
                            {
                                userState: { hasError: a, alertMessage: o },
                                userDispatch: l,
                            } = (0, w.e)();
                        return {
                            onSubmitForm: async (e) => {
                                n(e);
                            },
                            control: t,
                            handleSubmit: r,
                            hasLoginError: a,
                            onCloseAlert: () => {
                                l({ type: q.L.RESET_STATE });
                            },
                            alertMessage: o,
                        };
                    },
                    I = () => {
                        let {
                            onSubmitForm: e,
                            control: t,
                            handleSubmit: r,
                            hasLoginError: n,
                            onCloseAlert: a,
                            alertMessage: o,
                        } = j();
                        return i().createElement(S, {
                            onSubmit: r(e),
                            control: t,
                            hasLoginError: n,
                            closeAlert: a,
                            alertMessage: o,
                        });
                    };
            },
            8476: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        $$typeof: () => l,
                        __esModule: () => o,
                        default: () => i,
                    });
                var n = r(7866);
                let a = (0, n.createProxy)(
                        String.raw`/Users/pedrosevero/Desktop/code/future-eats/src/app/login/page.tsx`
                    ),
                    { __esModule: o, $$typeof: l } = a;
                a.default;
                let i = (0, n.createProxy)(
                    String.raw`/Users/pedrosevero/Desktop/code/future-eats/src/app/login/page.tsx#default`
                );
            },
        });
    var t = require('../../webpack-runtime.js');
    t.C(e);
    var r = (e) => t((t.s = e)),
        n = t.X(0, [567, 657, 973], () => r(6530));
    module.exports = n;
})();
