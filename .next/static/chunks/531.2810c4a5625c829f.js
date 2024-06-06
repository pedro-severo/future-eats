'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [531],
    {
        7531: function (e, n, r) {
            r.r(n),
                r.d(n, {
                    HeaderView: function () {
                        return u;
                    },
                });
            var t = r(2265),
                a = r(1271),
                l = r(294),
                c = r(7013);
            let u = () => {
                let { title: e, shouldRenderHeader: n } = (0, l.Q8)()
                    .navigationHeader;
                return t.createElement(
                    a.Pz,
                    { 'data-testid': 'HeaderWrapper', shouldRenderHeader: n },
                    t.createElement(
                        a.a1,
                        { onClick: () => null },
                        t.createElement(c.Z.arrowBackIcon, null)
                    ),
                    t.createElement(a.Gh, null, e)
                );
            };
        },
    },
]);
