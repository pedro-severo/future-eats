'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [996],
    {
        8996: function (e, t, l) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let n = l(8754),
                u = l(5893),
                a = n._(l(7294)),
                o = l(7807);
            async function r(e) {
                let { Component: t, ctx: l } = e;
                return { pageProps: await (0, o.loadGetInitialProps)(t, l) };
            }
            class s extends a.default.Component {
                render() {
                    let { Component: e, pageProps: t } = this.props;
                    return (0, u.jsx)(e, { ...t });
                }
            }
            (s.origGetInitialProps = r),
                (s.getInitialProps = r),
                ('function' == typeof t.default ||
                    ('object' == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, '__esModule', {
                        value: !0,
                    }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
        },
    },
]);
