'use strict';
(() => {
    var e = {};
    (e.id = 409),
        (e.ids = [409]),
        (e.modules = {
            7849: (e) => {
                e.exports = require('next/dist/client/components/action-async-storage.external');
            },
            2934: (e) => {
                e.exports = require('next/dist/client/components/action-async-storage.external.js');
            },
            5403: (e) => {
                e.exports = require('next/dist/client/components/request-async-storage.external');
            },
            4580: (e) => {
                e.exports = require('next/dist/client/components/request-async-storage.external.js');
            },
            4749: (e) => {
                e.exports = require('next/dist/client/components/static-generation-async-storage.external');
            },
            5869: (e) => {
                e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
            },
            399: (e) => {
                e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
            },
            2781: (e) => {
                e.exports = require('stream');
            },
            8265: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        GlobalError: () => s.a,
                        __next_app__: () => p,
                        originalPathname: () => c,
                        pages: () => d,
                        routeModule: () => f,
                        tree: () => l,
                    }),
                    n(2860),
                    n(2593),
                    n(9862);
                var o = n(3826),
                    r = n(9930),
                    a = n(2049),
                    s = n.n(a),
                    i = n(8405),
                    u = {};
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
                        ].indexOf(e) && (u[e] = () => i[e]);
                n.d(t, u);
                let l = [
                        '',
                        {
                            children: [
                                '/_not-found',
                                {
                                    children: [
                                        '__PAGE__',
                                        {},
                                        {
                                            page: [
                                                () =>
                                                    Promise.resolve().then(
                                                        n.t.bind(n, 2593, 23)
                                                    ),
                                                'next/dist/client/components/not-found-error',
                                            ],
                                        },
                                    ],
                                },
                                {},
                            ],
                        },
                        {
                            layout: [
                                () => Promise.resolve().then(n.bind(n, 9862)),
                                '/Users/pedrosevero/Desktop/code/future-eats/src/app/layout.tsx',
                            ],
                            'not-found': [
                                () =>
                                    Promise.resolve().then(
                                        n.t.bind(n, 2593, 23)
                                    ),
                                'next/dist/client/components/not-found-error',
                            ],
                        },
                    ],
                    d = [],
                    c = '/_not-found/page',
                    p = { require: n, loadChunk: () => Promise.resolve() },
                    f = new o.AppPageRouteModule({
                        definition: {
                            kind: r.x.APP_PAGE,
                            page: '/_not-found/page',
                            pathname: '/_not-found',
                            bundlePath: '',
                            filename: '',
                            appPaths: [],
                        },
                        userland: { loaderTree: l },
                    });
            },
            7299: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (function (e, t) {
                        for (var n in t)
                            Object.defineProperty(e, n, {
                                enumerable: !0,
                                get: t[n],
                            });
                    })(t, {
                        isNotFoundError: function () {
                            return r;
                        },
                        notFound: function () {
                            return o;
                        },
                    });
                let n = 'NEXT_NOT_FOUND';
                function o() {
                    let e = Error(n);
                    throw ((e.digest = n), e);
                }
                function r(e) {
                    return (
                        'object' == typeof e &&
                        null !== e &&
                        'digest' in e &&
                        e.digest === n
                    );
                }
                ('function' == typeof t.default ||
                    ('object' == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, '__esModule', {
                        value: !0,
                    }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
            },
            2860: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (function (e, t) {
                        for (var n in t)
                            Object.defineProperty(e, n, {
                                enumerable: !0,
                                get: t[n],
                            });
                    })(t, {
                        PARALLEL_ROUTE_DEFAULT_PATH: function () {
                            return r;
                        },
                        default: function () {
                            return a;
                        },
                    });
                let o = n(7299),
                    r = 'next/dist/client/components/parallel-route-default.js';
                function a() {
                    (0, o.notFound)();
                }
                ('function' == typeof t.default ||
                    ('object' == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, '__esModule', {
                        value: !0,
                    }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
            },
        });
    var t = require('../../webpack-runtime.js');
    t.C(e);
    var n = (e) => t((t.s = e)),
        o = t.X(0, [567, 973], () => n(8265));
    module.exports = o;
})();
