'use strict';
(exports.id = 472),
    (exports.ids = [472]),
    (exports.modules = {
        472: (e, r, t) => {
            t.r(r), t.d(r, { HeaderView: () => s });
            var a = t(1694),
                l = t.n(a),
                n = t(3604),
                d = t(6492),
                o = t(9951);
            let s = () => {
                let { title: e, shouldRenderHeader: r } = (0, d.Q8)()
                    .navigationHeader;
                return l().createElement(
                    n.Pz,
                    { 'data-testid': 'HeaderWrapper', shouldRenderHeader: r },
                    l().createElement(
                        n.a1,
                        { onClick: () => null },
                        l().createElement(o.Z.arrowBackIcon, null)
                    ),
                    l().createElement(n.Gh, null, e)
                );
            };
        },
    });
