'use strict';
(exports.id = 682),
    (exports.ids = [682]),
    (exports.modules = {
        5939: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'Image', {
                    enumerable: !0,
                    get: function () {
                        return b;
                    },
                });
            let n = r(4108),
                i = r(1328),
                o = r(2166),
                a = i._(r(1694)),
                l = n._(r(8736)),
                s = n._(r(3167)),
                d = r(8268),
                u = r(9519),
                c = r(2069);
            r(8110);
            let f = r(2344),
                p = n._(r(851)),
                g = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: '/_next/image',
                    loader: 'default',
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1,
                };
            function m(e, t, r, n, i, o, a) {
                let l = null == e ? void 0 : e.src;
                e &&
                    e['data-loaded-src'] !== l &&
                    ((e['data-loaded-src'] = l),
                    ('decode' in e ? e.decode() : Promise.resolve())
                        .catch(() => {})
                        .then(() => {
                            if (e.parentElement && e.isConnected) {
                                if (
                                    ('empty' !== t && i(!0),
                                    null == r ? void 0 : r.current)
                                ) {
                                    let t = new Event('load');
                                    Object.defineProperty(t, 'target', {
                                        writable: !1,
                                        value: e,
                                    });
                                    let n = !1,
                                        i = !1;
                                    r.current({
                                        ...t,
                                        nativeEvent: t,
                                        currentTarget: e,
                                        target: e,
                                        isDefaultPrevented: () => n,
                                        isPropagationStopped: () => i,
                                        persist: () => {},
                                        preventDefault: () => {
                                            (n = !0), t.preventDefault();
                                        },
                                        stopPropagation: () => {
                                            (i = !0), t.stopPropagation();
                                        },
                                    });
                                }
                                (null == n ? void 0 : n.current) &&
                                    n.current(e);
                            }
                        }));
            }
            function h(e) {
                let [t, r] = a.version.split('.', 2),
                    n = parseInt(t, 10),
                    i = parseInt(r, 10);
                return n > 18 || (18 === n && i >= 3) ?
                        { fetchPriority: e }
                    :   { fetchpriority: e };
            }
            globalThis.__NEXT_IMAGE_IMPORTED = !0;
            let v = (0, a.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: i,
                    height: l,
                    width: s,
                    decoding: d,
                    className: u,
                    style: c,
                    fetchPriority: f,
                    placeholder: p,
                    loading: g,
                    unoptimized: v,
                    fill: y,
                    onLoadRef: b,
                    onLoadingCompleteRef: w,
                    setBlurComplete: x,
                    setShowAltText: _,
                    sizesInput: S,
                    onLoad: A,
                    onError: j,
                    ...C
                } = e;
                return (0, o.jsx)('img', {
                    ...C,
                    ...h(f),
                    loading: g,
                    width: s,
                    height: l,
                    decoding: d,
                    'data-nimg': y ? 'fill' : '1',
                    className: u,
                    style: c,
                    sizes: i,
                    srcSet: n,
                    src: r,
                    ref: (0, a.useCallback)(
                        (e) => {
                            t &&
                                ('function' == typeof t ?
                                    t(e)
                                :   'object' == typeof t && (t.current = e)),
                                e &&
                                    (j && (e.src = e.src),
                                    e.complete && m(e, p, b, w, x, v, S));
                        },
                        [r, p, b, w, x, j, v, S, t]
                    ),
                    onLoad: (e) => {
                        m(e.currentTarget, p, b, w, x, v, S);
                    },
                    onError: (e) => {
                        _(!0), 'empty' !== p && x(!0), j && j(e);
                    },
                });
            });
            function y(e) {
                let { isAppRouter: t, imgAttributes: r } = e,
                    n = {
                        as: 'image',
                        imageSrcSet: r.srcSet,
                        imageSizes: r.sizes,
                        crossOrigin: r.crossOrigin,
                        referrerPolicy: r.referrerPolicy,
                        ...h(r.fetchPriority),
                    };
                return t && l.default.preload ?
                        (l.default.preload(r.src, n), null)
                    :   (0, o.jsx)(s.default, {
                            children: (0, o.jsx)(
                                'link',
                                {
                                    rel: 'preload',
                                    href: r.srcSet ? void 0 : r.src,
                                    ...n,
                                },
                                '__nimg-' + r.src + r.srcSet + r.sizes
                            ),
                        });
            }
            let b = (0, a.forwardRef)((e, t) => {
                let r = (0, a.useContext)(f.RouterContext),
                    n = (0, a.useContext)(c.ImageConfigContext),
                    i = (0, a.useMemo)(() => {
                        let e = g || n || u.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort(
                                (e, t) => e - t
                            ),
                            r = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e, allSizes: t, deviceSizes: r };
                    }, [n]),
                    { onLoad: l, onLoadingComplete: s } = e,
                    m = (0, a.useRef)(l);
                (0, a.useEffect)(() => {
                    m.current = l;
                }, [l]);
                let h = (0, a.useRef)(s);
                (0, a.useEffect)(() => {
                    h.current = s;
                }, [s]);
                let [b, w] = (0, a.useState)(!1),
                    [x, _] = (0, a.useState)(!1),
                    { props: S, meta: A } = (0, d.getImgProps)(e, {
                        defaultLoader: p.default,
                        imgConf: i,
                        blurComplete: b,
                        showAltText: x,
                    });
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(v, {
                            ...S,
                            unoptimized: A.unoptimized,
                            placeholder: A.placeholder,
                            fill: A.fill,
                            onLoadRef: m,
                            onLoadingCompleteRef: h,
                            setBlurComplete: w,
                            setShowAltText: _,
                            sizesInput: e.sizes,
                            ref: t,
                        }),
                        A.priority ?
                            (0, o.jsx)(y, { isAppRouter: !r, imgAttributes: S })
                        :   null,
                    ],
                });
            });
            ('function' == typeof t.default ||
                ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default));
        },
        194: (e, t, r) => {
            e.exports = r(1944).vendored.contexts.AmpContext;
        },
        4854: (e, t, r) => {
            e.exports = r(1944).vendored.contexts.HeadManagerContext;
        },
        2069: (e, t, r) => {
            e.exports = r(1944).vendored.contexts.ImageConfigContext;
        },
        2344: (e, t, r) => {
            e.exports = r(1944).vendored.contexts.RouterContext;
        },
        6890: (e, t) => {
            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1,
                } = void 0 === e ? {} : e;
                return t || (r && n);
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isInAmpMode', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
        },
        8268: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'getImgProps', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }),
                r(8110);
            let n = r(3425),
                i = r(9519);
            function o(e) {
                return void 0 !== e.default;
            }
            function a(e) {
                return (
                    void 0 === e ? e
                    : 'number' == typeof e ?
                        Number.isFinite(e) ?
                            e
                        :   NaN
                    : 'string' == typeof e && /^[0-9]+$/.test(e) ?
                        parseInt(e, 10)
                    :   NaN
                );
            }
            function l(e, t) {
                var r;
                let l,
                    s,
                    d,
                    {
                        src: u,
                        sizes: c,
                        unoptimized: f = !1,
                        priority: p = !1,
                        loading: g,
                        className: m,
                        quality: h,
                        width: v,
                        height: y,
                        fill: b = !1,
                        style: w,
                        overrideSrc: x,
                        onLoad: _,
                        onLoadingComplete: S,
                        placeholder: A = 'empty',
                        blurDataURL: j,
                        fetchPriority: C,
                        layout: P,
                        objectFit: E,
                        objectPosition: O,
                        lazyBoundary: z,
                        lazyRoot: I,
                        ...M
                    } = e,
                    {
                        imgConf: R,
                        showAltText: k,
                        blurComplete: D,
                        defaultLoader: U,
                    } = t,
                    B = R || i.imageConfigDefault;
                if ('allSizes' in B) l = B;
                else {
                    let e = [...B.deviceSizes, ...B.imageSizes].sort(
                            (e, t) => e - t
                        ),
                        t = B.deviceSizes.sort((e, t) => e - t);
                    l = { ...B, allSizes: e, deviceSizes: t };
                }
                if (void 0 === U)
                    throw Error(
                        'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
                    );
                let T = M.loader || U;
                delete M.loader, delete M.srcSet;
                let F = '__next_img_default' in T;
                if (F) {
                    if ('custom' === l.loader)
                        throw Error(
                            'Image with src "' +
                                u +
                                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
                        );
                } else {
                    let e = T;
                    T = (t) => {
                        let { config: r, ...n } = t;
                        return e(n);
                    };
                }
                if (P) {
                    'fill' === P && (b = !0);
                    let e = {
                        intrinsic: { maxWidth: '100%', height: 'auto' },
                        responsive: { width: '100%', height: 'auto' },
                    }[P];
                    e && (w = { ...w, ...e });
                    let t = { responsive: '100vw', fill: '100vw' }[P];
                    t && !c && (c = t);
                }
                let G = '',
                    L = a(v),
                    V = a(y);
                if ('object' == typeof (r = u) && (o(r) || void 0 !== r.src)) {
                    let e = o(u) ? u.default : u;
                    if (!e.src)
                        throw Error(
                            'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                                JSON.stringify(e)
                        );
                    if (!e.height || !e.width)
                        throw Error(
                            'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                                JSON.stringify(e)
                        );
                    if (
                        ((s = e.blurWidth),
                        (d = e.blurHeight),
                        (j = j || e.blurDataURL),
                        (G = e.src),
                        !b)
                    ) {
                        if (L || V) {
                            if (L && !V) {
                                let t = L / e.width;
                                V = Math.round(e.height * t);
                            } else if (!L && V) {
                                let t = V / e.height;
                                L = Math.round(e.width * t);
                            }
                        } else (L = e.width), (V = e.height);
                    }
                }
                let N = !p && ('lazy' === g || void 0 === g);
                (!(u = 'string' == typeof u ? u : G) ||
                    u.startsWith('data:') ||
                    u.startsWith('blob:')) &&
                    ((f = !0), (N = !1)),
                    l.unoptimized && (f = !0),
                    F &&
                        u.endsWith('.svg') &&
                        !l.dangerouslyAllowSVG &&
                        (f = !0),
                    p && (C = 'high');
                let H = a(h),
                    W = Object.assign(
                        b ?
                            {
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0,
                                objectFit: E,
                                objectPosition: O,
                            }
                        :   {},
                        k ? {} : { color: 'transparent' },
                        w
                    ),
                    Z =
                        D || 'empty' === A ? null
                        : 'blur' === A ?
                            'url("data:image/svg+xml;charset=utf-8,' +
                            (0, n.getImageBlurSvg)({
                                widthInt: L,
                                heightInt: V,
                                blurWidth: s,
                                blurHeight: d,
                                blurDataURL: j || '',
                                objectFit: W.objectFit,
                            }) +
                            '")'
                        :   'url("' + A + '")',
                    J =
                        Z ?
                            {
                                backgroundSize: W.objectFit || 'cover',
                                backgroundPosition:
                                    W.objectPosition || '50% 50%',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: Z,
                            }
                        :   {},
                    Y = (function (e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: n,
                            width: i,
                            quality: o,
                            sizes: a,
                            loader: l,
                        } = e;
                        if (n) return { src: r, srcSet: void 0, sizes: void 0 };
                        let { widths: s, kind: d } = (function (e, t, r) {
                                let { deviceSizes: n, allSizes: i } = e;
                                if (r) {
                                    let e = /(^|\s)(1?\d?\d)vw/g,
                                        t = [];
                                    for (let n; (n = e.exec(r)); n)
                                        t.push(parseInt(n[2]));
                                    if (t.length) {
                                        let e = 0.01 * Math.min(...t);
                                        return {
                                            widths: i.filter(
                                                (t) => t >= n[0] * e
                                            ),
                                            kind: 'w',
                                        };
                                    }
                                    return { widths: i, kind: 'w' };
                                }
                                return 'number' != typeof t ?
                                        { widths: n, kind: 'w' }
                                    :   {
                                            widths: [
                                                ...new Set(
                                                    [t, 2 * t].map(
                                                        (e) =>
                                                            i.find(
                                                                (t) => t >= e
                                                            ) || i[i.length - 1]
                                                    )
                                                ),
                                            ],
                                            kind: 'x',
                                        };
                            })(t, i, a),
                            u = s.length - 1;
                        return {
                            sizes: a || 'w' !== d ? a : '100vw',
                            srcSet: s
                                .map(
                                    (e, n) =>
                                        l({
                                            config: t,
                                            src: r,
                                            quality: o,
                                            width: e,
                                        }) +
                                        ' ' +
                                        ('w' === d ? e : n + 1) +
                                        d
                                )
                                .join(', '),
                            src: l({
                                config: t,
                                src: r,
                                quality: o,
                                width: s[u],
                            }),
                        };
                    })({
                        config: l,
                        src: u,
                        unoptimized: f,
                        width: L,
                        quality: H,
                        sizes: c,
                        loader: T,
                    });
                return {
                    props: {
                        ...M,
                        loading: N ? 'lazy' : g,
                        fetchPriority: C,
                        width: L,
                        height: V,
                        decoding: 'async',
                        className: m,
                        style: { ...W, ...J },
                        sizes: Y.sizes,
                        srcSet: Y.srcSet,
                        src: x || Y.src,
                    },
                    meta: {
                        unoptimized: f,
                        priority: p,
                        placeholder: A,
                        fill: b,
                    },
                };
            }
        },
        3167: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (function (e, t) {
                    for (var r in t)
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        });
                })(t, {
                    default: function () {
                        return m;
                    },
                    defaultHead: function () {
                        return c;
                    },
                });
            let n = r(4108),
                i = r(1328),
                o = r(2166),
                a = i._(r(1694)),
                l = n._(r(7838)),
                s = r(194),
                d = r(4854),
                u = r(6890);
            function c(e) {
                void 0 === e && (e = !1);
                let t = [(0, o.jsx)('meta', { charSet: 'utf-8' })];
                return (
                    e ||
                        t.push(
                            (0, o.jsx)('meta', {
                                name: 'viewport',
                                content: 'width=device-width',
                            })
                        ),
                    t
                );
            }
            function f(e, t) {
                return (
                    'string' == typeof t || 'number' == typeof t ? e
                    : t.type === a.default.Fragment ?
                        e.concat(
                            a.default.Children.toArray(t.props.children).reduce(
                                (e, t) =>
                                    (
                                        'string' == typeof t ||
                                        'number' == typeof t
                                    ) ?
                                        e
                                    :   e.concat(t),
                                []
                            )
                        )
                    :   e.concat(t)
                );
            }
            r(8110);
            let p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
            function g(e, t) {
                let { inAmpMode: r } = t;
                return e
                    .reduce(f, [])
                    .reverse()
                    .concat(c(r).reverse())
                    .filter(
                        (function () {
                            let e = new Set(),
                                t = new Set(),
                                r = new Set(),
                                n = {};
                            return (i) => {
                                let o = !0,
                                    a = !1;
                                if (
                                    i.key &&
                                    'number' != typeof i.key &&
                                    i.key.indexOf('$') > 0
                                ) {
                                    a = !0;
                                    let t = i.key.slice(i.key.indexOf('$') + 1);
                                    e.has(t) ? (o = !1) : e.add(t);
                                }
                                switch (i.type) {
                                    case 'title':
                                    case 'base':
                                        t.has(i.type) ?
                                            (o = !1)
                                        :   t.add(i.type);
                                        break;
                                    case 'meta':
                                        for (
                                            let e = 0, t = p.length;
                                            e < t;
                                            e++
                                        ) {
                                            let t = p[e];
                                            if (i.props.hasOwnProperty(t)) {
                                                if ('charSet' === t)
                                                    r.has(t) ?
                                                        (o = !1)
                                                    :   r.add(t);
                                                else {
                                                    let e = i.props[t],
                                                        r = n[t] || new Set();
                                                    (
                                                        ('name' !== t || !a) &&
                                                        r.has(e)
                                                    ) ?
                                                        (o = !1)
                                                    :   (r.add(e), (n[t] = r));
                                                }
                                            }
                                        }
                                }
                                return o;
                            };
                        })()
                    )
                    .reverse()
                    .map((e, t) => {
                        let n = e.key || t;
                        if (
                            !r &&
                            'link' === e.type &&
                            e.props.href &&
                            [
                                'https://fonts.googleapis.com/css',
                                'https://use.typekit.net/',
                            ].some((t) => e.props.href.startsWith(t))
                        ) {
                            let t = { ...(e.props || {}) };
                            return (
                                (t['data-href'] = t.href),
                                (t.href = void 0),
                                (t['data-optimized-fonts'] = !0),
                                a.default.cloneElement(e, t)
                            );
                        }
                        return a.default.cloneElement(e, { key: n });
                    });
            }
            let m = function (e) {
                let { children: t } = e,
                    r = (0, a.useContext)(s.AmpStateContext),
                    n = (0, a.useContext)(d.HeadManagerContext);
                return (0, o.jsx)(l.default, {
                    reduceComponentsToState: g,
                    headManager: n,
                    inAmpMode: (0, u.isInAmpMode)(r),
                    children: t,
                });
            };
            ('function' == typeof t.default ||
                ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default));
        },
        3425: (e, t) => {
            function r(e) {
                let {
                        widthInt: t,
                        heightInt: r,
                        blurWidth: n,
                        blurHeight: i,
                        blurDataURL: o,
                        objectFit: a,
                    } = e,
                    l = n ? 40 * n : t,
                    s = i ? 40 * i : r,
                    d = l && s ? "viewBox='0 0 " + l + ' ' + s + "'" : '';
                return (
                    "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
                    d +
                    "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
                    (d ? 'none'
                    : 'contain' === a ? 'xMidYMid'
                    : 'cover' === a ? 'xMidYMid slice'
                    : 'none') +
                    "' style='filter: url(%23b);' href='" +
                    o +
                    "'/%3E%3C/svg%3E"
                );
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'getImageBlurSvg', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
        },
        9519: (e, t) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (function (e, t) {
                    for (var r in t)
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        });
                })(t, {
                    VALID_LOADERS: function () {
                        return r;
                    },
                    imageConfigDefault: function () {
                        return n;
                    },
                });
            let r = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: '/_next/image',
                    loader: 'default',
                    loaderFile: '',
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ['image/webp'],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy:
                        "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: 'inline',
                    remotePatterns: [],
                    unoptimized: !1,
                };
        },
        9325: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (function (e, t) {
                    for (var r in t)
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        });
                })(t, {
                    default: function () {
                        return s;
                    },
                    getImageProps: function () {
                        return l;
                    },
                });
            let n = r(4108),
                i = r(8268),
                o = r(5939),
                a = n._(r(851));
            function l(e) {
                let { props: t } = (0, i.getImgProps)(e, {
                    defaultLoader: a.default,
                    imgConf: {
                        deviceSizes: [
                            640, 750, 828, 1080, 1200, 1920, 2048, 3840,
                        ],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: '/_next/image',
                        loader: 'default',
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1,
                    },
                });
                for (let [e, r] of Object.entries(t))
                    void 0 === r && delete t[e];
                return { props: t };
            }
            let s = o.Image;
        },
        851: (e, t) => {
            function r(e) {
                let { config: t, src: r, width: n, quality: i } = e;
                return (
                    t.path +
                    '?url=' +
                    encodeURIComponent(r) +
                    '&w=' +
                    n +
                    '&q=' +
                    (i || 75)
                );
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                (r.__next_img_default = !0);
            let n = r;
        },
        7838: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let n = r(1694),
                i = () => {},
                o = () => {};
            function a(e) {
                var t;
                let { headManager: r, reduceComponentsToState: a } = e;
                function l() {
                    if (r && r.mountedInstances) {
                        let t = n.Children.toArray(
                            Array.from(r.mountedInstances).filter(Boolean)
                        );
                        r.updateHead(a(t, e));
                    }
                }
                return (
                    null == r ||
                        null == (t = r.mountedInstances) ||
                        t.add(e.children),
                    l(),
                    i(() => {
                        var t;
                        return (
                            null == r ||
                                null == (t = r.mountedInstances) ||
                                t.add(e.children),
                            () => {
                                var t;
                                null == r ||
                                    null == (t = r.mountedInstances) ||
                                    t.delete(e.children);
                            }
                        );
                    }),
                    i(
                        () => (
                            r && (r._pendingUpdate = l),
                            () => {
                                r && (r._pendingUpdate = l);
                            }
                        )
                    ),
                    o(
                        () => (
                            r &&
                                r._pendingUpdate &&
                                (r._pendingUpdate(), (r._pendingUpdate = null)),
                            () => {
                                r &&
                                    r._pendingUpdate &&
                                    (r._pendingUpdate(),
                                    (r._pendingUpdate = null));
                            }
                        )
                    ),
                    null
                );
            }
        },
        1682: (e, t, r) => {
            r.r(t), r.d(t, { MainLogoView: () => s });
            var n = r(1694),
                i = r.n(n);
            let o = {
                src: '/_next/static/media/logo-future-eats-invert.79e3afe3.png',
                height: 58,
                width: 104,
                blurDataURL:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdklEQVR42mNgZGMIZJdkkZC0FlTgVeEwVw2U4mcTZ1ZkYGDQYWBk0GAAAk0gVgViUyDWBmIdILZi5mOyBtIuDHE73ZtjtruZx2x1847d4R4StdnVJemAlwADDERvdZ0as80tFYhnAHEOEHcDFesDNTHEbHdjAgDFTBuybjXP5gAAAABJRU5ErkJggg==',
                blurWidth: 8,
                blurHeight: 4,
            };
            var a = r(9325),
                l = r.n(a);
            let s = () => i().createElement(l(), { src: o, alt: '' });
        },
    });
