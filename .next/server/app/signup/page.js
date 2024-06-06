(() => {
    var e = {};
    (e.id = 966),
        (e.ids = [966]),
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
            964: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        GlobalError: () => s.a,
                        __next_app__: () => u,
                        originalPathname: () => d,
                        pages: () => p,
                        routeModule: () => m,
                        tree: () => c,
                    }),
                    r(4609),
                    r(9862),
                    r(2593);
                var n = r(3826),
                    a = r(9930),
                    l = r(2049),
                    s = r.n(l),
                    o = r(8405),
                    i = {};
                for (let e in o)
                    0 >
                        [
                            'default',
                            'tree',
                            'pages',
                            'GlobalError',
                            'originalPathname',
                            '__next_app__',
                            'routeModule',
                        ].indexOf(e) && (i[e] = () => o[e]);
                r.d(t, i);
                let c = [
                        '',
                        {
                            children: [
                                'signup',
                                {
                                    children: [
                                        '__PAGE__',
                                        {},
                                        {
                                            page: [
                                                () =>
                                                    Promise.resolve().then(
                                                        r.bind(r, 4609)
                                                    ),
                                                '/Users/pedrosevero/Desktop/code/future-eats/src/app/signup/page.tsx',
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
                    p = [
                        '/Users/pedrosevero/Desktop/code/future-eats/src/app/signup/page.tsx',
                    ],
                    d = '/signup/page',
                    u = { require: r, loadChunk: () => Promise.resolve() },
                    m = new n.AppPageRouteModule({
                        definition: {
                            kind: a.x.APP_PAGE,
                            page: '/signup/page',
                            pathname: '/signup',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: c },
                    });
            },
            117: (e, t, r) => {
                Promise.resolve().then(r.bind(r, 4050));
            },
            7590: (e, t, r) => {
                'use strict';
                r.d(t, { z: () => o });
                var n = r(1694),
                    a = r.n(n),
                    l = r(9951);
                let s = (0, n.lazy)(() =>
                        r
                            .e(682)
                            .then(r.bind(r, 1682))
                            .then((e) => {
                                let { MainLogoView: t } = e;
                                return { default: t };
                            })
                    ),
                    o = () =>
                        a().createElement(
                            n.Suspense,
                            {
                                fallback: a().createElement(
                                    l.Z.circularProgressIndeterminate,
                                    {
                                        color: 'primary',
                                        dataTestId: 'main-logo-lazy-loading',
                                    }
                                ),
                            },
                            a().createElement(s, null)
                        );
            },
            4050: (e, t, r) => {
                'use strict';
                r.r(t), r.d(t, { default: () => q });
                var n,
                    a,
                    l,
                    s = r(1694),
                    o = r.n(s),
                    i = r(8761);
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
                let p = i.ZP.div.withConfig({ componentId: 'sc-270d6114-0' })(
                        n ||
                            (n = c([
                                '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    padding: 88px 16px 0;\n',
                            ]))
                    ),
                    d = i.ZP.form.withConfig({ componentId: 'sc-270d6114-1' })(
                        a ||
                            (a = c([
                                '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n    margin: 28px 0;\n',
                            ]))
                    );
                var u = r(9951),
                    m = r(7787),
                    g = r(134),
                    f = r(9796);
                let h = (function (e) {
                        return (
                            (e.NAME = 'name'),
                            (e.EMAIL = 'email'),
                            (e.CPF = 'cpf'),
                            (e.PASSWORD = 'password'),
                            (e.PASSWORD_CONFIRMATION = 'passwordConfirmation'),
                            e
                        );
                    })({}),
                    x = () => ({
                        schema: (0, s.useMemo)(
                            () =>
                                g.object().shape({
                                    password: g
                                        .string()
                                        .required(f.Q.requiredField)
                                        .min(6, f.Q.invalidPassword),
                                    email: g
                                        .string()
                                        .email(f.Q.invalidEmail)
                                        .required(f.Q.requiredField),
                                    passwordConfirmation: g
                                        .string()
                                        .oneOf(
                                            [g.ref(h.PASSWORD), void 0],
                                            f.Q.unmatchedPasswordConfirmation
                                        )
                                        .required(f.Q.requiredField),
                                    name: g
                                        .string()
                                        .required(f.Q.requiredField)
                                        .matches(/^[a-z ,.'-]+$/i, {
                                            message: f.Q.invalidName,
                                        }),
                                    cpf: g.string().cpf(),
                                }),
                            [g]
                        ),
                    });
                var v = r(4793);
                let b = {
                    email: { label: 'E-mail', placeholder: '' },
                    name: { label: 'Nome', placeholder: '' },
                    cpf: { label: 'CPF', placeholder: '' },
                    password: {
                        label: 'Senha',
                        placeholder: 'M\xednimo 6 caracteres',
                    },
                    passwordConfirmation: {
                        label: 'Confirmar',
                        placeholder: 'Confirme a senha anterior',
                    },
                };
                var E = r(7590);
                function y() {
                    return (y =
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
                            hasSignupError: n,
                            closeAlert: a,
                            alertMessage: l,
                        } = e,
                        [i, c] = (0, s.useState)(!1),
                        [g, f] = (0, s.useState)(!1);
                    return o().createElement(
                        p,
                        null,
                        o().createElement(u.Z.alert, {
                            severity: 'error',
                            isOpen: n,
                            message: l,
                            onClose: a,
                        }),
                        o().createElement(E.z, null),
                        o().createElement(
                            d,
                            { onSubmit: t },
                            o().createElement(
                                u.Z.typography,
                                { variant: 'h2' },
                                'Cadastrar'
                            ),
                            o().createElement(m.Qr, {
                                name: h.NAME,
                                control: r,
                                render: (e) => {
                                    let {
                                        field: t,
                                        fieldState: { error: r },
                                    } = e;
                                    return o().createElement(
                                        u.Z.textFieldInput,
                                        y({}, t, {
                                            placeholder: b.name.placeholder,
                                            label: b.name.label,
                                            error: !!r,
                                            helperText:
                                                null == r ? void 0 : r.message,
                                        })
                                    );
                                },
                            }),
                            o().createElement(m.Qr, {
                                name: h.EMAIL,
                                control: r,
                                render: (e) => {
                                    let {
                                        field: t,
                                        fieldState: { error: r },
                                    } = e;
                                    return o().createElement(
                                        u.Z.textFieldInput,
                                        y({}, t, {
                                            placeholder: b.email.placeholder,
                                            label: b.email.label,
                                            error: !!r,
                                            helperText:
                                                null == r ? void 0 : r.message,
                                        })
                                    );
                                },
                            }),
                            o().createElement(m.Qr, {
                                name: h.CPF,
                                control: r,
                                render: (e) => {
                                    let {
                                        field: t,
                                        fieldState: { error: r },
                                    } = e;
                                    return o().createElement(
                                        u.Z.textFieldInput,
                                        y({}, t, {
                                            placeholder: b.cpf.placeholder,
                                            label: b.cpf.label,
                                            error: !!r,
                                            helperText:
                                                null == r ? void 0 : r.message,
                                        })
                                    );
                                },
                            }),
                            o().createElement(m.Qr, {
                                name: h.PASSWORD,
                                control: r,
                                render: (e) => {
                                    let {
                                        field: t,
                                        fieldState: { error: r },
                                    } = e;
                                    return o().createElement(
                                        u.Z.textFieldInput,
                                        y({}, t, {
                                            placeholder: b.password.placeholder,
                                            label: b.password.label,
                                            type: i ? 'text' : 'password',
                                            error: !!r,
                                            helperText:
                                                null == r ? void 0 : r.message,
                                            InputProps: {
                                                endAdornment: o().createElement(
                                                    u.Z.inputAdornment,
                                                    { position: 'start' },
                                                    o().createElement(
                                                        u.Z.iconButton,
                                                        {
                                                            'aria-label':
                                                                'toggle password visibility',
                                                            onClick: () =>
                                                                c(!i),
                                                            edge: 'end',
                                                        },
                                                        i ?
                                                            o().createElement(
                                                                u.Z
                                                                    .visibilityOffIcon,
                                                                {
                                                                    style: {
                                                                        color: ''.concat(
                                                                            v.r
                                                                                .palette
                                                                                .secondary
                                                                                .main
                                                                        ),
                                                                    },
                                                                }
                                                            )
                                                        :   o().createElement(
                                                                u.Z
                                                                    .visibilityIcon,
                                                                {
                                                                    style: {
                                                                        color: ''.concat(
                                                                            v.r
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
                            o().createElement(m.Qr, {
                                name: h.PASSWORD_CONFIRMATION,
                                control: r,
                                render: (e) => {
                                    let {
                                        field: t,
                                        fieldState: { error: r },
                                    } = e;
                                    return o().createElement(
                                        u.Z.textFieldInput,
                                        y({}, t, {
                                            placeholder:
                                                b.passwordConfirmation
                                                    .placeholder,
                                            label: b.passwordConfirmation.label,
                                            type: g ? 'text' : 'password',
                                            error: !!r,
                                            helperText:
                                                null == r ? void 0 : r.message,
                                            InputProps: {
                                                endAdornment: o().createElement(
                                                    u.Z.inputAdornment,
                                                    { position: 'start' },
                                                    o().createElement(
                                                        u.Z.iconButton,
                                                        {
                                                            'aria-label':
                                                                'toggle password visibility',
                                                            onClick: () =>
                                                                f(!g),
                                                            edge: 'end',
                                                        },
                                                        g ?
                                                            o().createElement(
                                                                u.Z
                                                                    .visibilityOffIcon,
                                                                {
                                                                    style: {
                                                                        color: ''.concat(
                                                                            v.r
                                                                                .palette
                                                                                .secondary
                                                                                .main
                                                                        ),
                                                                    },
                                                                }
                                                            )
                                                        :   o().createElement(
                                                                u.Z
                                                                    .visibilityIcon,
                                                                {
                                                                    style: {
                                                                        color: ''.concat(
                                                                            v.r
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
                            o().createElement(
                                u.Z.button,
                                {
                                    type: 'submit',
                                    color: 'primary',
                                    variant: 'contained',
                                    fullWidth: !0,
                                },
                                'Criar'
                            )
                        )
                    );
                };
                var P = r(2290),
                    w = r(9679),
                    C = r(3008);
                let I = (0, r(7623).Ps)(
                    l ||
                        (l = (function (e, t) {
                            return (
                                t || (t = e.slice(0)),
                                Object.freeze(
                                    Object.defineProperties(e, {
                                        raw: { value: Object.freeze(t) },
                                    })
                                )
                            );
                        })([
                            '\n    mutation Signup(\n        $email: String!\n        $password: String!\n        $name: String!\n        $cpf: String!\n    ) {\n        signup(\n            input: {\n                email: $email\n                password: $password\n                name: $name\n                cpf: $cpf\n            }\n        ) {\n            data {\n                token\n            }\n        }\n    }\n',
                        ]))
                );
                var O = r(238);
                let A = () => {
                        let { userDispatch: e } = (0, w.e)(),
                            [t, { loading: r }] = (0, O.D)(I);
                        return (
                            (0, s.useEffect)(() => {
                                r && e({ type: C.L.USER_LOADING });
                            }, [r, e]),
                            {
                                handleSignup: (0, s.useCallback)(
                                    async (r) => {
                                        try {
                                            var n;
                                            let {
                                                    email: a,
                                                    password: l,
                                                    cpf: s,
                                                    name: o,
                                                } = r,
                                                i = await t({
                                                    variables: {
                                                        email: a,
                                                        password: l,
                                                        cpf: s,
                                                        name: o,
                                                    },
                                                });
                                            e({
                                                type: C.L.SIGNUP_SUCCESS,
                                                payload:
                                                    (
                                                        null == i ||
                                                        null === (n = i.data) ||
                                                        void 0 === n ||
                                                        null ===
                                                            (n = n.signup) ||
                                                        void 0 === n ||
                                                        null === (n = n.data) ||
                                                        void 0 === n
                                                    ) ?
                                                        void 0
                                                    :   n.user,
                                            });
                                        } catch (t) {
                                            e({
                                                type: C.L.USER_FAILURE,
                                                alertMessage: t.message,
                                            });
                                        }
                                    },
                                    [e, t]
                                ),
                            }
                        );
                    },
                    _ = () => {
                        let { schema: e } = x(),
                            { control: t, handleSubmit: r } = (0, m.cI)({
                                resolver: (0, P.X)(e),
                            }),
                            { handleSignup: n } = A(),
                            {
                                userState: { hasError: a, alertMessage: l },
                                userDispatch: s,
                            } = (0, w.e)();
                        return {
                            onSubmitForm: (e) => {
                                n({
                                    name: e.name,
                                    email: e.email,
                                    password: e.password,
                                    cpf: e.cpf,
                                });
                            },
                            control: t,
                            handleSubmit: r,
                            hasSignupError: a,
                            alertMessage: l,
                            onCloseAlert: () => {
                                s({ type: C.L.RESET_STATE });
                            },
                        };
                    },
                    q = () => {
                        let {
                            handleSubmit: e,
                            onSubmitForm: t,
                            control: r,
                            hasSignupError: n,
                            onCloseAlert: a,
                            alertMessage: l,
                        } = _();
                        return o().createElement(S, {
                            onSubmit: e(t),
                            control: r,
                            hasSignupError: n,
                            closeAlert: a,
                            alertMessage: l,
                        });
                    };
            },
            4609: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        $$typeof: () => s,
                        __esModule: () => l,
                        default: () => o,
                    });
                var n = r(7866);
                let a = (0, n.createProxy)(
                        String.raw`/Users/pedrosevero/Desktop/code/future-eats/src/app/signup/page.tsx`
                    ),
                    { __esModule: l, $$typeof: s } = a;
                a.default;
                let o = (0, n.createProxy)(
                    String.raw`/Users/pedrosevero/Desktop/code/future-eats/src/app/signup/page.tsx#default`
                );
            },
        });
    var t = require('../../webpack-runtime.js');
    t.C(e);
    var r = (e) => t((t.s = e)),
        n = t.X(0, [567, 657, 973], () => r(964));
    module.exports = n;
})();
