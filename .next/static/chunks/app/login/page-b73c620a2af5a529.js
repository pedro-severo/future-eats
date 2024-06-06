(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [626],
    {
        1423: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 790));
        },
        2224: function (e, t, n) {
            'use strict';
            n.d(t, {
                z: function () {
                    return l;
                },
            });
            var r = n(2265),
                i = n(7013);
            let a = (0, r.lazy)(() =>
                    Promise.all([n.e(315), n.e(967)])
                        .then(n.bind(n, 4967))
                        .then((e) => {
                            let { MainLogoView: t } = e;
                            return { default: t };
                        })
                ),
                l = () =>
                    r.createElement(
                        r.Suspense,
                        {
                            fallback: r.createElement(
                                i.Z.circularProgressIndeterminate,
                                {
                                    color: 'primary',
                                    dataTestId: 'main-logo-lazy-loading',
                                }
                            ),
                        },
                        r.createElement(a, null)
                    );
        },
        3602: function (e, t, n) {
            'use strict';
            n.d(t, {
                Q: function () {
                    return r;
                },
            });
            let r = {
                requiredField: 'Este \xe9 um campo obrigat\xf3rio',
                invalidPassword: 'Senha inv\xe1lida',
                invalidEmail: 'Email inv\xe1lido',
                unmatchedPasswordConfirmation:
                    'As senhas n\xe3o se correspondem',
                invalidName: 'Este n\xe3o \xe9 um nome v\xe1lido',
                invalidCPF: 'Este n\xe3o \xe9 um cpf v\xe1lido',
            };
        },
        7013: function (e, t, n) {
            'use strict';
            n.d(t, {
                Z: function () {
                    return x;
                },
            });
            var r,
                i,
                a,
                l = n(2265),
                o = n(3211);
            function c() {
                return (c =
                    Object.assign ?
                        Object.assign.bind()
                    :   function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }).apply(this, arguments);
            }
            let s = l.memo((e) => {
                let { ...t } = e;
                return l.createElement(o.Z, c({ id: 'mui-button-id' }, t));
            });
            var u = () => l.createElement('div', null),
                d = n(1437);
            function m() {
                return (m =
                    Object.assign ?
                        Object.assign.bind()
                    :   function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }).apply(this, arguments);
            }
            var p = n(1464);
            function f() {
                return (f =
                    Object.assign ?
                        Object.assign.bind()
                    :   function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }).apply(this, arguments);
            }
            let b = l.memo((e) => {
                let { id: t, ...n } = e;
                return l.createElement(
                    p.Z,
                    f({ variant: 'outlined', fullWidth: !0, id: t }, n)
                );
            });
            var E = n(3507),
                v = n(1788),
                y = n(3129),
                g = n(5103),
                h = n(5728);
            function S() {
                return (S =
                    Object.assign ?
                        Object.assign.bind()
                    :   function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }).apply(this, arguments);
            }
            let O = l.memo((e) => {
                let { ...t } = e;
                return l.createElement(h.Z, S({ id: 'mui-typography' }, t));
            });
            var I = n(1168),
                Z = n(655);
            function j() {
                return (j =
                    Object.assign ?
                        Object.assign.bind()
                    :   function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }).apply(this, arguments);
            }
            let w = (0, n(1923).ZP)(I.Z).withConfig({
                componentId: 'sc-42b59c1b-0',
            })(
                a ||
                    ((r = ['\n    position: absolute;\n    top: 36px;\n']),
                    i || (i = r.slice(0)),
                    (a = Object.freeze(
                        Object.defineProperties(r, {
                            raw: { value: Object.freeze(i) },
                        })
                    )))
            );
            var C = n(2707),
                P = n(1415),
                x = {
                    textFieldInput: b || u,
                    button: s || u,
                    arrowBackIcon: E.Z || u,
                    visibilityIcon: v.Z || u,
                    visibilityOffIcon: y.Z || u,
                    iconButton:
                        ((e) => {
                            let { ...t } = e;
                            return l.createElement(
                                d.Z,
                                m({ id: 'mui-icon-button-id' }, t)
                            );
                        }) || u,
                    inputAdornment: g.Z || u,
                    typography: O || u,
                    alert:
                        ((e) => {
                            let {
                                    isOpen: t,
                                    message: n,
                                    timeout: r = 3e3,
                                    ...i
                                } = e,
                                [a, o] = (0, l.useState)(t);
                            return (
                                (0, l.useEffect)(
                                    () => (
                                        o(t),
                                        () => {
                                            setTimeout(function () {
                                                o(!1);
                                            }, r);
                                        }
                                    ),
                                    [t]
                                ),
                                l.createElement(
                                    w,
                                    { in: a },
                                    n &&
                                        l.createElement(
                                            Z.Z,
                                            j({ id: 'mui-alert-id' }, i),
                                            n
                                        )
                                )
                            );
                        }) || u,
                    circularProgressIndeterminate:
                        ((e) => {
                            let {
                                color: t,
                                dataTestId:
                                    n = 'circular-progress-indeterminate',
                            } = e;
                            return l.createElement(
                                P.Z,
                                { sx: { display: 'flex' }, 'data-testid': n },
                                l.createElement(C.Z, { color: t })
                            );
                        }) || u,
                };
        },
        8821: function (e, t, n) {
            'use strict';
            n.d(t, {
                r: function () {
                    return r;
                },
            });
            let r = (0, n(7970).Z)({
                palette: {
                    primary: { main: '#5cb646' },
                    secondary: { main: '#b8b8b8' },
                    error: { main: '#e02020' },
                    text: { primary: '#000000', hint: '#419bf9' },
                },
                typography: {
                    fontFamily: 'Roboto, sans-serif',
                    h1: { fontSize: '2rem' },
                    h2: { fontSize: '16px' },
                    subtitle1: { fontSize: '16px' },
                },
            });
        },
        790: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, {
                    default: function () {
                        return U;
                    },
                });
            var r,
                i,
                a,
                l,
                o,
                c,
                s = n(2265),
                u = n(1923);
            function d(e, t) {
                return (
                    t || (t = e.slice(0)),
                    Object.freeze(
                        Object.defineProperties(e, {
                            raw: { value: Object.freeze(t) },
                        })
                    )
                );
            }
            let m = u.ZP.div.withConfig({ componentId: 'sc-fee55b0f-0' })(
                    l ||
                        (l = d([
                            '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    padding: 88px 16px 0;\n',
                        ]))
                ),
                p = u.ZP.form.withConfig({ componentId: 'sc-fee55b0f-1' })(
                    o ||
                        (o = d([
                            '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n    margin: 28px 0;\n',
                        ]))
                );
            var f = n(7013),
                b = n(2040),
                E = n(5564),
                v = n(3602);
            let y = (((r = {}).PASSWORD = 'password'), (r.EMAIL = 'email'), r),
                g = () => ({
                    schema: (0, s.useMemo)(
                        () =>
                            E.object().shape({
                                password: E.string()
                                    .required(v.Q.requiredField)
                                    .min(6, v.Q.invalidPassword),
                                email: E.string()
                                    .email(v.Q.invalidEmail)
                                    .required(v.Q.requiredField),
                            }),
                        [E]
                    ),
                });
            var h = n(8821),
                S = n(2224);
            let O = (e) => {
                    let { action: t, callToActionLinkColor: n } = e;
                    return s.createElement(
                        f.Z.typography,
                        { variant: 'subtitle1' },
                        'Nao possui cadastro?',
                        ' ',
                        s.createElement(
                            'span',
                            {
                                className: 'call-to-action-link',
                                style: { color: n },
                                onClick: t,
                            },
                            'Clique aqui'
                        )
                    );
                },
                I = s.memo((e) => {
                    let { action: t, callToActionLinkColor: n } = e;
                    return s.createElement(O, {
                        action: t,
                        callToActionLinkColor: n,
                    });
                });
            function Z() {
                return (Z =
                    Object.assign ?
                        Object.assign.bind()
                    :   function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }).apply(this, arguments);
            }
            let j = (e) => {
                let {
                        onSubmit: t,
                        control: n,
                        hasLoginError: r,
                        closeAlert: i,
                        alertMessage: a,
                    } = e,
                    [l, o] = (0, s.useState)(!1);
                return s.createElement(
                    m,
                    null,
                    s.createElement(f.Z.alert, {
                        severity: 'error',
                        isOpen: r,
                        message: a,
                        onClose: i,
                    }),
                    s.createElement(S.z, null),
                    s.createElement(
                        p,
                        { onSubmit: t },
                        s.createElement(
                            f.Z.typography,
                            { variant: 'h2' },
                            'Entrar'
                        ),
                        s.createElement(b.Qr, {
                            name: y.EMAIL,
                            control: n,
                            render: (e) => {
                                let {
                                    field: t,
                                    fieldState: { error: n },
                                } = e;
                                return s.createElement(
                                    f.Z.textFieldInput,
                                    Z({}, t, {
                                        placeholder: 'email@email.com',
                                        label: 'E-mail',
                                        error: !!n,
                                        helperText:
                                            null == n ? void 0 : n.message,
                                    })
                                );
                            },
                        }),
                        s.createElement(b.Qr, {
                            name: y.PASSWORD,
                            control: n,
                            render: (e) => {
                                let {
                                    field: t,
                                    fieldState: { error: n },
                                } = e;
                                return s.createElement(
                                    f.Z.textFieldInput,
                                    Z({}, t, {
                                        placeholder: 'M\xednimo 6 caracteres',
                                        type: l ? 'text' : 'password',
                                        label: 'Senha',
                                        error: !!n,
                                        helperText:
                                            null == n ? void 0 : n.message,
                                        InputProps: {
                                            endAdornment: s.createElement(
                                                f.Z.inputAdornment,
                                                { position: 'start' },
                                                s.createElement(
                                                    f.Z.iconButton,
                                                    {
                                                        'aria-label':
                                                            'toggle password visibility',
                                                        onClick: () => {
                                                            o(!l);
                                                        },
                                                        edge: 'end',
                                                        id: 'password-visibility-icon-button',
                                                    },
                                                    l ?
                                                        s.createElement(
                                                            f.Z
                                                                .visibilityOffIcon,
                                                            {
                                                                style: {
                                                                    color: ''.concat(
                                                                        h.r
                                                                            .palette
                                                                            .secondary
                                                                            .main
                                                                    ),
                                                                },
                                                            }
                                                        )
                                                    :   s.createElement(
                                                            f.Z.visibilityIcon,
                                                            {
                                                                style: {
                                                                    color: ''.concat(
                                                                        h.r
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
                        s.createElement(
                            f.Z.button,
                            {
                                type: 'submit',
                                color: 'primary',
                                variant: 'contained',
                                fullWidth: !0,
                            },
                            'Entrar'
                        )
                    ),
                    s.createElement(I, {
                        action: () => null,
                        callToActionLinkColor: h.r.palette.text.hint,
                    })
                );
            };
            var w = n(4677),
                C = n(9299),
                P = n(6680),
                x = n(2516);
            let L = (0, n(5501).Ps)(
                    c ||
                        ((i = [
                            '\n    mutation Login($email: String!, $password: String!) {\n        login(input: { email: $email, password: $password }) {\n            data {\n                token\n            }\n        }\n    }\n',
                        ]),
                        a || (a = i.slice(0)),
                        (c = Object.freeze(
                            Object.defineProperties(i, {
                                raw: { value: Object.freeze(a) },
                            })
                        )))
                ),
                A = () => {
                    let { userDispatch: e } = (0, C.e)(),
                        [t, { loading: n }] = (0, x.D)(L);
                    return (
                        (0, s.useEffect)(() => {
                            n && e({ type: P.L.USER_LOADING });
                        }, [n, e]),
                        {
                            handleLogin: (0, s.useCallback)(
                                async (n) => {
                                    try {
                                        var r;
                                        let { email: i, password: a } = n,
                                            l = await t({
                                                variables: {
                                                    email: i,
                                                    password: a,
                                                },
                                            });
                                        e({
                                            type: P.L.LOGIN_SUCCESS,
                                            payload:
                                                (
                                                    null == l ||
                                                    null === (r = l.data) ||
                                                    void 0 === r ||
                                                    null === (r = r.login) ||
                                                    void 0 === r ||
                                                    null === (r = r.data) ||
                                                    void 0 === r
                                                ) ?
                                                    void 0
                                                :   r.user,
                                        });
                                    } catch (t) {
                                        e({
                                            type: P.L.USER_FAILURE,
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
                    let { schema: e } = g(),
                        { control: t, handleSubmit: n } = (0, b.cI)({
                            resolver: (0, w.X)(e),
                        }),
                        { handleLogin: r } = A(),
                        {
                            userState: { hasError: i, alertMessage: a },
                            userDispatch: l,
                        } = (0, C.e)();
                    return {
                        onSubmitForm: async (e) => {
                            r(e);
                        },
                        control: t,
                        handleSubmit: n,
                        hasLoginError: i,
                        onCloseAlert: () => {
                            l({ type: P.L.RESET_STATE });
                        },
                        alertMessage: a,
                    };
                };
            var U = () => {
                let {
                    onSubmitForm: e,
                    control: t,
                    handleSubmit: n,
                    hasLoginError: r,
                    onCloseAlert: i,
                    alertMessage: a,
                } = _();
                return s.createElement(j, {
                    onSubmit: n(e),
                    control: t,
                    hasLoginError: r,
                    closeAlert: i,
                    alertMessage: a,
                });
            };
        },
        9299: function (e, t, n) {
            'use strict';
            n.d(t, {
                Z: function () {
                    return i;
                },
                e: function () {
                    return a;
                },
            });
            var r = n(2265);
            let i = (0, r.createContext)({}),
                a = () => (0, r.useContext)(i);
        },
        6680: function (e, t, n) {
            'use strict';
            var r;
            n.d(t, {
                L: function () {
                    return i;
                },
            });
            let i =
                (((r = {}).LOGIN_SUCCESS = 'LOGIN_SUCCESS'),
                (r.SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'),
                (r.USER_LOADING = 'USER_LOADING'),
                (r.USER_FAILURE = 'USER_FAILURE'),
                (r.RESET_STATE = 'RESET_STATE'),
                r);
        },
    },
    function (e) {
        e.O(0, [501, 336, 971, 165, 744], function () {
            return e((e.s = 1423));
        }),
            (_N_E = e.O());
    },
]);
