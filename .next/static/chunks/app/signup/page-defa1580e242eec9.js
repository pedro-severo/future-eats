(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [966],
    {
        6478: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 6727));
        },
        2224: function (e, t, n) {
            'use strict';
            n.d(t, {
                z: function () {
                    return l;
                },
            });
            var r = n(2265),
                a = n(7013);
            let i = (0, r.lazy)(() =>
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
                                a.Z.circularProgressIndeterminate,
                                {
                                    color: 'primary',
                                    dataTestId: 'main-logo-lazy-loading',
                                }
                            ),
                        },
                        r.createElement(i, null)
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
                    return j;
                },
            });
            var r,
                a,
                i,
                l = n(2265),
                o = n(3211);
            function s() {
                return (s =
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
            let c = l.memo((e) => {
                let { ...t } = e;
                return l.createElement(o.Z, s({ id: 'mui-button-id' }, t));
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
            let E = l.memo((e) => {
                let { id: t, ...n } = e;
                return l.createElement(
                    p.Z,
                    f({ variant: 'outlined', fullWidth: !0, id: t }, n)
                );
            });
            var b = n(3507),
                v = n(1788),
                g = n(3129),
                S = n(5103),
                y = n(5728);
            function h() {
                return (h =
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
                return l.createElement(y.Z, h({ id: 'mui-typography' }, t));
            });
            var I = n(1168),
                C = n(655);
            function P() {
                return (P =
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
            let Z = (0, n(1923).ZP)(I.Z).withConfig({
                componentId: 'sc-42b59c1b-0',
            })(
                i ||
                    ((r = ['\n    position: absolute;\n    top: 36px;\n']),
                    a || (a = r.slice(0)),
                    (i = Object.freeze(
                        Object.defineProperties(r, {
                            raw: { value: Object.freeze(a) },
                        })
                    )))
            );
            var w = n(2707),
                x = n(1415),
                j = {
                    textFieldInput: E || u,
                    button: c || u,
                    arrowBackIcon: b.Z || u,
                    visibilityIcon: v.Z || u,
                    visibilityOffIcon: g.Z || u,
                    iconButton:
                        ((e) => {
                            let { ...t } = e;
                            return l.createElement(
                                d.Z,
                                m({ id: 'mui-icon-button-id' }, t)
                            );
                        }) || u,
                    inputAdornment: S.Z || u,
                    typography: O || u,
                    alert:
                        ((e) => {
                            let {
                                    isOpen: t,
                                    message: n,
                                    timeout: r = 3e3,
                                    ...a
                                } = e,
                                [i, o] = (0, l.useState)(t);
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
                                    Z,
                                    { in: i },
                                    n &&
                                        l.createElement(
                                            C.Z,
                                            P({ id: 'mui-alert-id' }, a),
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
                                x.Z,
                                { sx: { display: 'flex' }, 'data-testid': n },
                                l.createElement(w.Z, { color: t })
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
        6727: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, {
                    default: function () {
                        return F;
                    },
                });
            var r,
                a,
                i,
                l,
                o,
                s,
                c = n(2265),
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
            let m = u.ZP.div.withConfig({ componentId: 'sc-270d6114-0' })(
                    l ||
                        (l = d([
                            '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    padding: 88px 16px 0;\n',
                        ]))
                ),
                p = u.ZP.form.withConfig({ componentId: 'sc-270d6114-1' })(
                    o ||
                        (o = d([
                            '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n    margin: 28px 0;\n',
                        ]))
                );
            var f = n(7013),
                E = n(2040),
                b = n(5564),
                v = n(3602);
            let g =
                    (((r = {}).NAME = 'name'),
                    (r.EMAIL = 'email'),
                    (r.CPF = 'cpf'),
                    (r.PASSWORD = 'password'),
                    (r.PASSWORD_CONFIRMATION = 'passwordConfirmation'),
                    r),
                S = () => ({
                    schema: (0, c.useMemo)(
                        () =>
                            b.object().shape({
                                password: b
                                    .string()
                                    .required(v.Q.requiredField)
                                    .min(6, v.Q.invalidPassword),
                                email: b
                                    .string()
                                    .email(v.Q.invalidEmail)
                                    .required(v.Q.requiredField),
                                passwordConfirmation: b
                                    .string()
                                    .oneOf(
                                        [b.ref(g.PASSWORD), void 0],
                                        v.Q.unmatchedPasswordConfirmation
                                    )
                                    .required(v.Q.requiredField),
                                name: b
                                    .string()
                                    .required(v.Q.requiredField)
                                    .matches(/^[a-z ,.'-]+$/i, {
                                        message: v.Q.invalidName,
                                    }),
                                cpf: b.string().cpf(),
                            }),
                        [b]
                    ),
                });
            var y = n(8821),
                h = n(2224);
            function O() {
                return (O =
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
            let I = (e) => {
                let {
                        onSubmit: t,
                        control: n,
                        hasSignupError: r,
                        closeAlert: a,
                        alertMessage: i,
                    } = e,
                    [l, o] = (0, c.useState)(!1),
                    [s, u] = (0, c.useState)(!1);
                return c.createElement(
                    m,
                    null,
                    c.createElement(f.Z.alert, {
                        severity: 'error',
                        isOpen: r,
                        message: i,
                        onClose: a,
                    }),
                    c.createElement(h.z, null),
                    c.createElement(
                        p,
                        { onSubmit: t },
                        c.createElement(
                            f.Z.typography,
                            { variant: 'h2' },
                            'Cadastrar'
                        ),
                        c.createElement(E.Qr, {
                            name: g.NAME,
                            control: n,
                            render: (e) => {
                                let {
                                    field: t,
                                    fieldState: { error: n },
                                } = e;
                                return c.createElement(
                                    f.Z.textFieldInput,
                                    O({}, t, {
                                        placeholder: '',
                                        label: 'Nome',
                                        error: !!n,
                                        helperText:
                                            null == n ? void 0 : n.message,
                                    })
                                );
                            },
                        }),
                        c.createElement(E.Qr, {
                            name: g.EMAIL,
                            control: n,
                            render: (e) => {
                                let {
                                    field: t,
                                    fieldState: { error: n },
                                } = e;
                                return c.createElement(
                                    f.Z.textFieldInput,
                                    O({}, t, {
                                        placeholder: '',
                                        label: 'E-mail',
                                        error: !!n,
                                        helperText:
                                            null == n ? void 0 : n.message,
                                    })
                                );
                            },
                        }),
                        c.createElement(E.Qr, {
                            name: g.CPF,
                            control: n,
                            render: (e) => {
                                let {
                                    field: t,
                                    fieldState: { error: n },
                                } = e;
                                return c.createElement(
                                    f.Z.textFieldInput,
                                    O({}, t, {
                                        placeholder: '',
                                        label: 'CPF',
                                        error: !!n,
                                        helperText:
                                            null == n ? void 0 : n.message,
                                    })
                                );
                            },
                        }),
                        c.createElement(E.Qr, {
                            name: g.PASSWORD,
                            control: n,
                            render: (e) => {
                                let {
                                    field: t,
                                    fieldState: { error: n },
                                } = e;
                                return c.createElement(
                                    f.Z.textFieldInput,
                                    O({}, t, {
                                        placeholder: 'M\xednimo 6 caracteres',
                                        label: 'Senha',
                                        type: l ? 'text' : 'password',
                                        error: !!n,
                                        helperText:
                                            null == n ? void 0 : n.message,
                                        InputProps: {
                                            endAdornment: c.createElement(
                                                f.Z.inputAdornment,
                                                { position: 'start' },
                                                c.createElement(
                                                    f.Z.iconButton,
                                                    {
                                                        'aria-label':
                                                            'toggle password visibility',
                                                        onClick: () => o(!l),
                                                        edge: 'end',
                                                    },
                                                    l ?
                                                        c.createElement(
                                                            f.Z
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
                                                    :   c.createElement(
                                                            f.Z.visibilityIcon,
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
                        c.createElement(E.Qr, {
                            name: g.PASSWORD_CONFIRMATION,
                            control: n,
                            render: (e) => {
                                let {
                                    field: t,
                                    fieldState: { error: n },
                                } = e;
                                return c.createElement(
                                    f.Z.textFieldInput,
                                    O({}, t, {
                                        placeholder:
                                            'Confirme a senha anterior',
                                        label: 'Confirmar',
                                        type: s ? 'text' : 'password',
                                        error: !!n,
                                        helperText:
                                            null == n ? void 0 : n.message,
                                        InputProps: {
                                            endAdornment: c.createElement(
                                                f.Z.inputAdornment,
                                                { position: 'start' },
                                                c.createElement(
                                                    f.Z.iconButton,
                                                    {
                                                        'aria-label':
                                                            'toggle password visibility',
                                                        onClick: () => u(!s),
                                                        edge: 'end',
                                                    },
                                                    s ?
                                                        c.createElement(
                                                            f.Z
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
                                                    :   c.createElement(
                                                            f.Z.visibilityIcon,
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
                        c.createElement(
                            f.Z.button,
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
            var C = n(4677),
                P = n(9299),
                Z = n(6680);
            let w = (0, n(5501).Ps)(
                s ||
                    ((a = [
                        '\n    mutation Signup(\n        $email: String!\n        $password: String!\n        $name: String!\n        $cpf: String!\n    ) {\n        signup(\n            input: {\n                email: $email\n                password: $password\n                name: $name\n                cpf: $cpf\n            }\n        ) {\n            data {\n                token\n            }\n        }\n    }\n',
                    ]),
                    i || (i = a.slice(0)),
                    (s = Object.freeze(
                        Object.defineProperties(a, {
                            raw: { value: Object.freeze(i) },
                        })
                    )))
            );
            var x = n(2516);
            let j = () => {
                    let { userDispatch: e } = (0, P.e)(),
                        [t, { loading: n }] = (0, x.D)(w);
                    return (
                        (0, c.useEffect)(() => {
                            n && e({ type: Z.L.USER_LOADING });
                        }, [n, e]),
                        {
                            handleSignup: (0, c.useCallback)(
                                async (n) => {
                                    try {
                                        var r;
                                        let {
                                                email: a,
                                                password: i,
                                                cpf: l,
                                                name: o,
                                            } = n,
                                            s = await t({
                                                variables: {
                                                    email: a,
                                                    password: i,
                                                    cpf: l,
                                                    name: o,
                                                },
                                            });
                                        e({
                                            type: Z.L.SIGNUP_SUCCESS,
                                            payload:
                                                (
                                                    null == s ||
                                                    null === (r = s.data) ||
                                                    void 0 === r ||
                                                    null === (r = r.signup) ||
                                                    void 0 === r ||
                                                    null === (r = r.data) ||
                                                    void 0 === r
                                                ) ?
                                                    void 0
                                                :   r.user,
                                        });
                                    } catch (t) {
                                        e({
                                            type: Z.L.USER_FAILURE,
                                            alertMessage: t.message,
                                        });
                                    }
                                },
                                [e, t]
                            ),
                        }
                    );
                },
                A = () => {
                    let { schema: e } = S(),
                        { control: t, handleSubmit: n } = (0, E.cI)({
                            resolver: (0, C.X)(e),
                        }),
                        { handleSignup: r } = j(),
                        {
                            userState: { hasError: a, alertMessage: i },
                            userDispatch: l,
                        } = (0, P.e)();
                    return {
                        onSubmitForm: (e) => {
                            r({
                                name: e.name,
                                email: e.email,
                                password: e.password,
                                cpf: e.cpf,
                            });
                        },
                        control: t,
                        handleSubmit: n,
                        hasSignupError: a,
                        alertMessage: i,
                        onCloseAlert: () => {
                            l({ type: Z.L.RESET_STATE });
                        },
                    };
                };
            var F = () => {
                let {
                    handleSubmit: e,
                    onSubmitForm: t,
                    control: n,
                    hasSignupError: r,
                    onCloseAlert: a,
                    alertMessage: i,
                } = A();
                return c.createElement(I, {
                    onSubmit: e(t),
                    control: n,
                    hasSignupError: r,
                    closeAlert: a,
                    alertMessage: i,
                });
            };
        },
        9299: function (e, t, n) {
            'use strict';
            n.d(t, {
                Z: function () {
                    return a;
                },
                e: function () {
                    return i;
                },
            });
            var r = n(2265);
            let a = (0, r.createContext)({}),
                i = () => (0, r.useContext)(a);
        },
        6680: function (e, t, n) {
            'use strict';
            var r;
            n.d(t, {
                L: function () {
                    return a;
                },
            });
            let a =
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
            return e((e.s = 6478));
        }),
            (_N_E = e.O());
    },
]);
