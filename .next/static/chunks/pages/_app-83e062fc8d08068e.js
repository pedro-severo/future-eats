(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888, 996],
    {
        8996: function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let u = n(8754),
                o = n(5893),
                r = u._(n(7294)),
                l = n(7807);
            async function a(e) {
                let { Component: t, ctx: n } = e;
                return { pageProps: await (0, l.loadGetInitialProps)(t, n) };
            }
            class i extends r.default.Component {
                render() {
                    let { Component: e, pageProps: t } = this.props;
                    return (0, o.jsx)(e, { ...t });
                }
            }
            (i.origGetInitialProps = a),
                (i.getInitialProps = a),
                ('function' == typeof t.default ||
                    ('object' == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, '__esModule', {
                        value: !0,
                    }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
        },
        1597: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/_app',
                function () {
                    return n(8996);
                },
            ]);
        },
    },
    function (e) {
        var t = function (t) {
            return e((e.s = t));
        };
        e.O(0, [774, 179], function () {
            return t(1597), t(9420);
        }),
            (_N_E = e.O());
    },
]);
