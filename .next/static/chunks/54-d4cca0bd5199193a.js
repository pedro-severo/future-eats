'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54],
    {
        7326: function (e, t, r) {
            var n = r(2433),
                i = r(2265),
                o = r(7783),
                a = r(2276),
                s = r(1135);
            t.Z = function (e) {
                var t = e.children,
                    r = e.theme,
                    u = (0, a.Z)(),
                    c = i.useMemo(
                        function () {
                            var e =
                                null === u ? r
                                : 'function' == typeof r ? r(u)
                                : (0, n.Z)({}, u, r);
                            return null != e && (e[s.Z] = null !== u), e;
                        },
                        [r, u]
                    );
                return i.createElement(o.Z.Provider, { value: c }, t);
            };
        },
        4979: function (e, t, r) {
            var n = r(4674);
            r.o(n, 'useServerInsertedHTML') &&
                r.d(t, {
                    useServerInsertedHTML: function () {
                        return n.useServerInsertedHTML;
                    },
                });
        },
        8522: function (e, t, r) {
            r.d(t, {
                h: function () {
                    return eS;
                },
            });
            var n,
                i,
                o = r(6936),
                a = r(6920),
                s = r(3268),
                u = r(7333),
                c = r(6696),
                l = r(7456),
                f = r(4659),
                h = r(283),
                p = (function () {
                    function e() {
                        (this.assumeImmutableResults = !1),
                            (this.getFragmentDoc = (0, s.re)(c.Yk, {
                                max: l.Q['cache.fragmentQueryDocuments'] || 1e3,
                                cache: f.k,
                            }));
                    }
                    return (
                        (e.prototype.batch = function (e) {
                            var t,
                                r = this,
                                n =
                                    'string' == typeof e.optimistic ?
                                        e.optimistic
                                    : !1 === e.optimistic ? null
                                    : void 0;
                            return (
                                this.performTransaction(function () {
                                    return (t = e.update(r));
                                }, n),
                                t
                            );
                        }),
                        (e.prototype.recordOptimisticTransaction = function (
                            e,
                            t
                        ) {
                            this.performTransaction(e, t);
                        }),
                        (e.prototype.transformDocument = function (e) {
                            return e;
                        }),
                        (e.prototype.transformForLink = function (e) {
                            return e;
                        }),
                        (e.prototype.identify = function (e) {}),
                        (e.prototype.gc = function () {
                            return [];
                        }),
                        (e.prototype.modify = function (e) {
                            return !1;
                        }),
                        (e.prototype.readQuery = function (e, t) {
                            return (
                                void 0 === t && (t = !!e.optimistic),
                                this.read(
                                    (0, o.pi)((0, o.pi)({}, e), {
                                        rootId: e.id || 'ROOT_QUERY',
                                        optimistic: t,
                                    })
                                )
                            );
                        }),
                        (e.prototype.readFragment = function (e, t) {
                            return (
                                void 0 === t && (t = !!e.optimistic),
                                this.read(
                                    (0, o.pi)((0, o.pi)({}, e), {
                                        query: this.getFragmentDoc(
                                            e.fragment,
                                            e.fragmentName
                                        ),
                                        rootId: e.id,
                                        optimistic: t,
                                    })
                                )
                            );
                        }),
                        (e.prototype.writeQuery = function (e) {
                            var t = e.id,
                                r = e.data,
                                n = (0, o._T)(e, ['id', 'data']);
                            return this.write(
                                Object.assign(n, {
                                    dataId: t || 'ROOT_QUERY',
                                    result: r,
                                })
                            );
                        }),
                        (e.prototype.writeFragment = function (e) {
                            var t = e.id,
                                r = e.data,
                                n = e.fragment,
                                i = e.fragmentName,
                                a = (0, o._T)(e, [
                                    'id',
                                    'data',
                                    'fragment',
                                    'fragmentName',
                                ]);
                            return this.write(
                                Object.assign(a, {
                                    query: this.getFragmentDoc(n, i),
                                    dataId: t,
                                    result: r,
                                })
                            );
                        }),
                        (e.prototype.updateQuery = function (e, t) {
                            return this.batch({
                                update: function (r) {
                                    var n = r.readQuery(e),
                                        i = t(n);
                                    return null == i ? n : (
                                            (r.writeQuery(
                                                (0, o.pi)((0, o.pi)({}, e), {
                                                    data: i,
                                                })
                                            ),
                                            i)
                                        );
                                },
                            });
                        }),
                        (e.prototype.updateFragment = function (e, t) {
                            return this.batch({
                                update: function (r) {
                                    var n = r.readFragment(e),
                                        i = t(n);
                                    return null == i ? n : (
                                            (r.writeFragment(
                                                (0, o.pi)((0, o.pi)({}, e), {
                                                    data: i,
                                                })
                                            ),
                                            i)
                                        );
                                },
                            });
                        }),
                        e
                    );
                })();
            !1 !== globalThis.__DEV__ &&
                (p.prototype.getMemoryInternals = h.Kb);
            var d = (function (e) {
                    function t(r, n, i, o) {
                        var a,
                            s = e.call(this, r) || this;
                        if (
                            ((s.message = r),
                            (s.path = n),
                            (s.query = i),
                            (s.variables = o),
                            Array.isArray(s.path))
                        ) {
                            s.missing = s.message;
                            for (var u = s.path.length - 1; u >= 0; --u)
                                s.missing =
                                    (((a = {})[s.path[u]] = s.missing), a);
                        } else s.missing = s.path;
                        return (s.__proto__ = t.prototype), s;
                    }
                    return (0, o.ZT)(t, e), t;
                })(Error),
                v = r(3984),
                y = r(661),
                m = r(3530),
                b = r(3631),
                g = r(4727),
                k = r(9648),
                w = r(6877),
                _ = r(1801),
                O = r(2965),
                S = r(3246),
                E = r(247),
                D = r(1884);
            function T(e) {
                if (!1 !== globalThis.__DEV__) {
                    var t;
                    (t = new Set([e])).forEach(function (e) {
                        (0, D.s)(e) &&
                            (function (e) {
                                if (
                                    !1 !== globalThis.__DEV__ &&
                                    !Object.isFrozen(e)
                                )
                                    try {
                                        Object.freeze(e);
                                    } catch (e) {
                                        if (e instanceof TypeError) return null;
                                        throw e;
                                    }
                                return e;
                            })(e) === e &&
                            Object.getOwnPropertyNames(e).forEach(function (r) {
                                (0, D.s)(e[r]) && t.add(e[r]);
                            });
                    });
                }
                return e;
            }
            var x = r(9925),
                q = r(6027),
                F = Object.prototype.hasOwnProperty;
            function R(e) {
                return null == e;
            }
            function I(e, t) {
                var r = e.__typename,
                    n = e.id,
                    i = e._id;
                if (
                    'string' == typeof r &&
                    (t &&
                        (t.keyObject =
                            R(n) ?
                                R(i) ? void 0
                                :   { _id: i }
                            :   { id: n }),
                    R(n) && !R(i) && (n = i),
                    !R(n))
                )
                    return ''
                        .concat(r, ':')
                        .concat(
                            'number' == typeof n || 'string' == typeof n ?
                                n
                            :   JSON.stringify(n)
                        );
            }
            var P = {
                dataIdFromObject: I,
                addTypename: !0,
                resultCaching: !0,
                canonizeResults: !1,
            };
            function j(e) {
                var t = e.canonizeResults;
                return void 0 === t ? P.canonizeResults : t;
            }
            var Q = /^[_a-z][_0-9a-z]*/i;
            function C(e) {
                var t = e.match(Q);
                return t ? t[0] : e;
            }
            function M(e) {
                return (0, D.s)(e) && !(0, g.Yk)(e) && !(0, q.k)(e);
            }
            function A(e, t) {
                var r = (0, c.F)((0, O.kU)(e));
                return {
                    fragmentMap: r,
                    lookupFragment: function (e) {
                        var n = r[e];
                        return !n && t && (n = t.lookup(e)), n || null;
                    },
                };
            }
            var N = Object.create(null),
                V = function () {
                    return N;
                },
                L = Object.create(null),
                z = (function () {
                    function e(e, t) {
                        var r = this;
                        (this.policies = e),
                            (this.group = t),
                            (this.data = Object.create(null)),
                            (this.rootIds = Object.create(null)),
                            (this.refs = Object.create(null)),
                            (this.getFieldValue = function (e, t) {
                                return T(
                                    (0, g.Yk)(e) ? r.get(e.__ref, t) : e && e[t]
                                );
                            }),
                            (this.canRead = function (e) {
                                return (0, g.Yk)(e) ?
                                        r.has(e.__ref)
                                    :   'object' == typeof e;
                            }),
                            (this.toReference = function (e, t) {
                                if ('string' == typeof e) return (0, g.kQ)(e);
                                if ((0, g.Yk)(e)) return e;
                                var n = r.policies.identify(e)[0];
                                if (n) {
                                    var i = (0, g.kQ)(n);
                                    return t && r.merge(n, e), i;
                                }
                            });
                    }
                    return (
                        (e.prototype.toObject = function () {
                            return (0, o.pi)({}, this.data);
                        }),
                        (e.prototype.has = function (e) {
                            return void 0 !== this.lookup(e, !0);
                        }),
                        (e.prototype.get = function (e, t) {
                            if (
                                (this.group.depend(e, t), F.call(this.data, e))
                            ) {
                                var r = this.data[e];
                                if (r && F.call(r, t)) return r[t];
                            }
                            return (
                                (
                                    '__typename' === t &&
                                        F.call(
                                            this.policies.rootTypenamesById,
                                            e
                                        )
                                ) ?
                                    this.policies.rootTypenamesById[e]
                                : this instanceof W ? this.parent.get(e, t)
                                : void 0
                            );
                        }),
                        (e.prototype.lookup = function (e, t) {
                            return (
                                (
                                    (t && this.group.depend(e, '__exists'),
                                    F.call(this.data, e))
                                ) ?
                                    this.data[e]
                                : this instanceof W ? this.parent.lookup(e, t)
                                : this.policies.rootTypenamesById[e] ?
                                    Object.create(null)
                                :   void 0
                            );
                        }),
                        (e.prototype.merge = function (e, t) {
                            var r,
                                n = this;
                            (0, g.Yk)(e) && (e = e.__ref),
                                (0, g.Yk)(t) && (t = t.__ref);
                            var i =
                                    'string' == typeof e ?
                                        this.lookup((r = e))
                                    :   e,
                                o =
                                    'string' == typeof t ?
                                        this.lookup((r = t))
                                    :   t;
                            if (o) {
                                (0, a.kG)('string' == typeof r, 1);
                                var s = new S.w0(U).merge(i, o);
                                if (
                                    ((this.data[r] = s),
                                    s !== i &&
                                        (delete this.refs[r],
                                        this.group.caching))
                                ) {
                                    var u = Object.create(null);
                                    i || (u.__exists = 1),
                                        Object.keys(o).forEach(function (e) {
                                            if (!i || i[e] !== s[e]) {
                                                u[e] = 1;
                                                var t = C(e);
                                                t === e ||
                                                    n.policies.hasKeyArgs(
                                                        s.__typename,
                                                        t
                                                    ) ||
                                                    (u[t] = 1),
                                                    void 0 !== s[e] ||
                                                        n instanceof W ||
                                                        delete s[e];
                                            }
                                        }),
                                        u.__typename &&
                                            !(i && i.__typename) &&
                                            this.policies.rootTypenamesById[
                                                r
                                            ] === s.__typename &&
                                            delete u.__typename,
                                        Object.keys(u).forEach(function (e) {
                                            return n.group.dirty(r, e);
                                        });
                                }
                            }
                        }),
                        (e.prototype.modify = function (e, t) {
                            var r = this,
                                n = this.lookup(e);
                            if (n) {
                                var i = Object.create(null),
                                    s = !1,
                                    u = !0,
                                    c = {
                                        DELETE: N,
                                        INVALIDATE: L,
                                        isReference: g.Yk,
                                        toReference: this.toReference,
                                        canRead: this.canRead,
                                        readField: function (t, n) {
                                            return r.policies.readField(
                                                'string' == typeof t ?
                                                    {
                                                        fieldName: t,
                                                        from: n || (0, g.kQ)(e),
                                                    }
                                                :   t,
                                                { store: r }
                                            );
                                        },
                                    };
                                if (
                                    (Object.keys(n).forEach(function (l) {
                                        var f = C(l),
                                            h = n[l];
                                        if (void 0 !== h) {
                                            var p =
                                                'function' == typeof t ? t : (
                                                    t[l] || t[f]
                                                );
                                            if (p) {
                                                var d =
                                                    p === V ? N : (
                                                        p(
                                                            T(h),
                                                            (0, o.pi)(
                                                                (0, o.pi)(
                                                                    {},
                                                                    c
                                                                ),
                                                                {
                                                                    fieldName:
                                                                        f,
                                                                    storeFieldName:
                                                                        l,
                                                                    storage:
                                                                        r.getStorage(
                                                                            e,
                                                                            l
                                                                        ),
                                                                }
                                                            )
                                                        )
                                                    );
                                                if (d === L)
                                                    r.group.dirty(e, l);
                                                else if (
                                                    (d === N && (d = void 0),
                                                    d !== h &&
                                                        ((i[l] = d),
                                                        (s = !0),
                                                        (h = d),
                                                        !1 !==
                                                            globalThis.__DEV__))
                                                ) {
                                                    var v = function (e) {
                                                        if (
                                                            void 0 ===
                                                            r.lookup(e.__ref)
                                                        )
                                                            return (
                                                                !1 !==
                                                                    globalThis.__DEV__ &&
                                                                    a.kG.warn(
                                                                        2,
                                                                        e
                                                                    ),
                                                                !0
                                                            );
                                                    };
                                                    if ((0, g.Yk)(d)) v(d);
                                                    else if (Array.isArray(d))
                                                        for (
                                                            var y = !1,
                                                                m = void 0,
                                                                b = 0,
                                                                k = d;
                                                            b < k.length;
                                                            b++
                                                        ) {
                                                            var w = k[b];
                                                            if ((0, g.Yk)(w)) {
                                                                if (
                                                                    ((y = !0),
                                                                    v(w))
                                                                )
                                                                    break;
                                                            } else
                                                                'object' ==
                                                                    typeof w &&
                                                                    w &&
                                                                    r.policies.identify(
                                                                        w
                                                                    )[0] &&
                                                                    (m = w);
                                                            if (
                                                                y &&
                                                                void 0 !== m
                                                            ) {
                                                                !1 !==
                                                                    globalThis.__DEV__ &&
                                                                    a.kG.warn(
                                                                        3,
                                                                        m
                                                                    );
                                                                break;
                                                            }
                                                        }
                                                }
                                            }
                                            void 0 !== h && (u = !1);
                                        }
                                    }),
                                    s)
                                )
                                    return (
                                        this.merge(e, i),
                                        u &&
                                            (this instanceof W ?
                                                (this.data[e] = void 0)
                                            :   delete this.data[e],
                                            this.group.dirty(e, '__exists')),
                                        !0
                                    );
                            }
                            return !1;
                        }),
                        (e.prototype.delete = function (e, t, r) {
                            var n,
                                i = this.lookup(e);
                            if (i) {
                                var o = this.getFieldValue(i, '__typename'),
                                    a =
                                        t && r ?
                                            this.policies.getStoreFieldName({
                                                typename: o,
                                                fieldName: t,
                                                args: r,
                                            })
                                        :   t;
                                return this.modify(
                                    e,
                                    a ? (((n = {})[a] = V), n) : V
                                );
                            }
                            return !1;
                        }),
                        (e.prototype.evict = function (e, t) {
                            var r = !1;
                            return (
                                e.id &&
                                    (F.call(this.data, e.id) &&
                                        (r = this.delete(
                                            e.id,
                                            e.fieldName,
                                            e.args
                                        )),
                                    this instanceof W &&
                                        this !== t &&
                                        (r = this.parent.evict(e, t) || r),
                                    (e.fieldName || r) &&
                                        this.group.dirty(
                                            e.id,
                                            e.fieldName || '__exists'
                                        )),
                                r
                            );
                        }),
                        (e.prototype.clear = function () {
                            this.replace(null);
                        }),
                        (e.prototype.extract = function () {
                            var e = this,
                                t = this.toObject(),
                                r = [];
                            return (
                                this.getRootIdSet().forEach(function (t) {
                                    F.call(e.policies.rootTypenamesById, t) ||
                                        r.push(t);
                                }),
                                r.length &&
                                    (t.__META = { extraRootIds: r.sort() }),
                                t
                            );
                        }),
                        (e.prototype.replace = function (e) {
                            var t = this;
                            if (
                                (Object.keys(this.data).forEach(function (r) {
                                    (e && F.call(e, r)) || t.delete(r);
                                }),
                                e)
                            ) {
                                var r = e.__META,
                                    n = (0, o._T)(e, ['__META']);
                                Object.keys(n).forEach(function (e) {
                                    t.merge(e, n[e]);
                                }),
                                    r &&
                                        r.extraRootIds.forEach(
                                            this.retain,
                                            this
                                        );
                            }
                        }),
                        (e.prototype.retain = function (e) {
                            return (this.rootIds[e] =
                                (this.rootIds[e] || 0) + 1);
                        }),
                        (e.prototype.release = function (e) {
                            if (this.rootIds[e] > 0) {
                                var t = --this.rootIds[e];
                                return t || delete this.rootIds[e], t;
                            }
                            return 0;
                        }),
                        (e.prototype.getRootIdSet = function (e) {
                            return (
                                void 0 === e && (e = new Set()),
                                Object.keys(this.rootIds).forEach(e.add, e),
                                this instanceof W ?
                                    this.parent.getRootIdSet(e)
                                :   Object.keys(
                                        this.policies.rootTypenamesById
                                    ).forEach(e.add, e),
                                e
                            );
                        }),
                        (e.prototype.gc = function () {
                            var e = this,
                                t = this.getRootIdSet(),
                                r = this.toObject();
                            t.forEach(function (n) {
                                F.call(r, n) &&
                                    (Object.keys(e.findChildRefIds(n)).forEach(
                                        t.add,
                                        t
                                    ),
                                    delete r[n]);
                            });
                            var n = Object.keys(r);
                            if (n.length) {
                                for (var i = this; i instanceof W; )
                                    i = i.parent;
                                n.forEach(function (e) {
                                    return i.delete(e);
                                });
                            }
                            return n;
                        }),
                        (e.prototype.findChildRefIds = function (e) {
                            if (!F.call(this.refs, e)) {
                                var t = (this.refs[e] = Object.create(null)),
                                    r = this.data[e];
                                if (!r) return t;
                                var n = new Set([r]);
                                n.forEach(function (e) {
                                    (0, g.Yk)(e) && (t[e.__ref] = !0),
                                        (0, D.s)(e) &&
                                            Object.keys(e).forEach(
                                                function (t) {
                                                    var r = e[t];
                                                    (0, D.s)(r) && n.add(r);
                                                }
                                            );
                                });
                            }
                            return this.refs[e];
                        }),
                        (e.prototype.makeCacheKey = function () {
                            return this.group.keyMaker.lookupArray(arguments);
                        }),
                        e
                    );
                })(),
                G = (function () {
                    function e(e, t) {
                        void 0 === t && (t = null),
                            (this.caching = e),
                            (this.parent = t),
                            (this.d = null),
                            this.resetCaching();
                    }
                    return (
                        (e.prototype.resetCaching = function () {
                            (this.d = this.caching ? (0, s.dP)() : null),
                                (this.keyMaker = new x.B(w.mr));
                        }),
                        (e.prototype.depend = function (e, t) {
                            if (this.d) {
                                this.d(t + '#' + e);
                                var r = C(t);
                                r !== t && this.d(r + '#' + e),
                                    this.parent && this.parent.depend(e, t);
                            }
                        }),
                        (e.prototype.dirty = function (e, t) {
                            this.d &&
                                this.d.dirty(
                                    t + '#' + e,
                                    '__exists' === t ? 'forget' : 'setDirty'
                                );
                        }),
                        e
                    );
                })();
            function B(e, t) {
                K(e) && e.group.depend(t, '__exists');
            }
            (i = (function (e) {
                function t(t) {
                    var r = t.policies,
                        n = t.resultCaching,
                        i = t.seed,
                        o = e.call(this, r, new G(void 0 === n || n)) || this;
                    return (
                        (o.stump = new Y(o)),
                        (o.storageTrie = new x.B(w.mr)),
                        i && o.replace(i),
                        o
                    );
                }
                return (
                    (0, o.ZT)(t, e),
                    (t.prototype.addLayer = function (e, t) {
                        return this.stump.addLayer(e, t);
                    }),
                    (t.prototype.removeLayer = function () {
                        return this;
                    }),
                    (t.prototype.getStorage = function () {
                        return this.storageTrie.lookupArray(arguments);
                    }),
                    t
                );
            })((n = z || (z = {})))),
                (n.Root = i);
            var W = (function (e) {
                    function t(t, r, n, i) {
                        var o = e.call(this, r.policies, i) || this;
                        return (
                            (o.id = t),
                            (o.parent = r),
                            (o.replay = n),
                            (o.group = i),
                            n(o),
                            o
                        );
                    }
                    return (
                        (0, o.ZT)(t, e),
                        (t.prototype.addLayer = function (e, r) {
                            return new t(e, this, r, this.group);
                        }),
                        (t.prototype.removeLayer = function (e) {
                            var t = this,
                                r = this.parent.removeLayer(e);
                            return (
                                e === this.id ?
                                    (this.group.caching &&
                                        Object.keys(this.data).forEach(
                                            function (e) {
                                                var n = t.data[e],
                                                    i = r.lookup(e);
                                                i ?
                                                    n ?
                                                        n !== i &&
                                                        Object.keys(n).forEach(
                                                            function (r) {
                                                                (0, u.D)(
                                                                    n[r],
                                                                    i[r]
                                                                ) ||
                                                                    t.group.dirty(
                                                                        e,
                                                                        r
                                                                    );
                                                            }
                                                        )
                                                    :   (t.group.dirty(
                                                            e,
                                                            '__exists'
                                                        ),
                                                        Object.keys(i).forEach(
                                                            function (r) {
                                                                t.group.dirty(
                                                                    e,
                                                                    r
                                                                );
                                                            }
                                                        ))
                                                :   t.delete(e);
                                            }
                                        ),
                                    r)
                                : r === this.parent ? this
                                : r.addLayer(this.id, this.replay)
                            );
                        }),
                        (t.prototype.toObject = function () {
                            return (0, o.pi)(
                                (0, o.pi)({}, this.parent.toObject()),
                                this.data
                            );
                        }),
                        (t.prototype.findChildRefIds = function (t) {
                            var r = this.parent.findChildRefIds(t);
                            return F.call(this.data, t) ?
                                    (0, o.pi)(
                                        (0, o.pi)({}, r),
                                        e.prototype.findChildRefIds.call(
                                            this,
                                            t
                                        )
                                    )
                                :   r;
                        }),
                        (t.prototype.getStorage = function () {
                            for (var e = this.parent; e.parent; ) e = e.parent;
                            return e.getStorage.apply(e, arguments);
                        }),
                        t
                    );
                })(z),
                Y = (function (e) {
                    function t(t) {
                        return (
                            e.call(
                                this,
                                'EntityStore.Stump',
                                t,
                                function () {},
                                new G(t.group.caching, t.group)
                            ) || this
                        );
                    }
                    return (
                        (0, o.ZT)(t, e),
                        (t.prototype.removeLayer = function () {
                            return this;
                        }),
                        (t.prototype.merge = function (e, t) {
                            return this.parent.merge(e, t);
                        }),
                        t
                    );
                })(W);
            function U(e, t, r) {
                var n = e[r],
                    i = t[r];
                return (0, u.D)(n, i) ? n : i;
            }
            function K(e) {
                return !!(e instanceof z && e.group.caching);
            }
            var J = (function () {
                function e() {
                    (this.known = new (w.sy ? WeakSet : Set)()),
                        (this.pool = new x.B(w.mr)),
                        (this.passes = new WeakMap()),
                        (this.keysByJSON = new Map()),
                        (this.empty = this.admit({}));
                }
                return (
                    (e.prototype.isKnown = function (e) {
                        return (0, D.s)(e) && this.known.has(e);
                    }),
                    (e.prototype.pass = function (e) {
                        if ((0, D.s)(e)) {
                            var t =
                                (0, D.s)(e) ?
                                    (0, q.k)(e) ? e.slice(0)
                                    :   (0, o.pi)(
                                            {
                                                __proto__:
                                                    Object.getPrototypeOf(e),
                                            },
                                            e
                                        )
                                :   e;
                            return this.passes.set(t, e), t;
                        }
                        return e;
                    }),
                    (e.prototype.admit = function (e) {
                        var t = this;
                        if ((0, D.s)(e)) {
                            var r = this.passes.get(e);
                            if (r) return r;
                            switch (Object.getPrototypeOf(e)) {
                                case Array.prototype:
                                    if (this.known.has(e)) break;
                                    var n = e.map(this.admit, this),
                                        i = this.pool.lookupArray(n);
                                    return (
                                        i.array ||
                                            (this.known.add((i.array = n)),
                                            !1 !== globalThis.__DEV__ &&
                                                Object.freeze(n)),
                                        i.array
                                    );
                                case null:
                                case Object.prototype:
                                    if (this.known.has(e)) break;
                                    var o = Object.getPrototypeOf(e),
                                        a = [o],
                                        s = this.sortedKeys(e);
                                    a.push(s.json);
                                    var u = a.length;
                                    s.sorted.forEach(function (r) {
                                        a.push(t.admit(e[r]));
                                    });
                                    var i = this.pool.lookupArray(a);
                                    if (!i.object) {
                                        var c = (i.object = Object.create(o));
                                        this.known.add(c),
                                            s.sorted.forEach(function (e, t) {
                                                c[e] = a[u + t];
                                            }),
                                            !1 !== globalThis.__DEV__ &&
                                                Object.freeze(c);
                                    }
                                    return i.object;
                            }
                        }
                        return e;
                    }),
                    (e.prototype.sortedKeys = function (e) {
                        var t = Object.keys(e),
                            r = this.pool.lookupArray(t);
                        if (!r.keys) {
                            t.sort();
                            var n = JSON.stringify(t);
                            (r.keys = this.keysByJSON.get(n)) ||
                                this.keysByJSON.set(
                                    n,
                                    (r.keys = { sorted: t, json: n })
                                );
                        }
                        return r.keys;
                    }),
                    e
                );
            })();
            function Z(e) {
                return [
                    e.selectionSet,
                    e.objectOrReference,
                    e.context,
                    e.context.canonizeResults,
                ];
            }
            var $ = (function () {
                    function e(e) {
                        var t = this;
                        (this.knownResults = new (w.mr ? WeakMap : Map)()),
                            (this.config = (0, _.o)(e, {
                                addTypename: !1 !== e.addTypename,
                                canonizeResults: j(e),
                            })),
                            (this.canon = e.canon || new J()),
                            (this.executeSelectionSet = (0, s.re)(
                                function (e) {
                                    var r,
                                        n = e.context.canonizeResults,
                                        i = Z(e);
                                    i[3] = !n;
                                    var a = (r =
                                        t.executeSelectionSet).peek.apply(r, i);
                                    return (
                                        a ?
                                            n ?
                                                (0, o.pi)((0, o.pi)({}, a), {
                                                    result: t.canon.admit(
                                                        a.result
                                                    ),
                                                })
                                            :   a
                                        :   (B(
                                                e.context.store,
                                                e.enclosingRef.__ref
                                            ),
                                            t.execSelectionSetImpl(e))
                                    );
                                },
                                {
                                    max:
                                        this.config.resultCacheMaxSize ||
                                        l.Q[
                                            'inMemoryCache.executeSelectionSet'
                                        ] ||
                                        5e4,
                                    keyArgs: Z,
                                    makeCacheKey: function (e, t, r, n) {
                                        if (K(r.store))
                                            return r.store.makeCacheKey(
                                                e,
                                                (0, g.Yk)(t) ? t.__ref : t,
                                                r.varString,
                                                n
                                            );
                                    },
                                }
                            )),
                            (this.executeSubSelectedArray = (0, s.re)(
                                function (e) {
                                    return (
                                        B(
                                            e.context.store,
                                            e.enclosingRef.__ref
                                        ),
                                        t.execSubSelectedArrayImpl(e)
                                    );
                                },
                                {
                                    max:
                                        this.config.resultCacheMaxSize ||
                                        l.Q[
                                            'inMemoryCache.executeSubSelectedArray'
                                        ] ||
                                        1e4,
                                    makeCacheKey: function (e) {
                                        var t = e.field,
                                            r = e.array,
                                            n = e.context;
                                        if (K(n.store))
                                            return n.store.makeCacheKey(
                                                t,
                                                r,
                                                n.varString
                                            );
                                    },
                                }
                            ));
                    }
                    return (
                        (e.prototype.resetCanon = function () {
                            this.canon = new J();
                        }),
                        (e.prototype.diffQueryAgainstStore = function (e) {
                            var t,
                                r = e.store,
                                n = e.query,
                                i = e.rootId,
                                a = e.variables,
                                s = e.returnPartialData,
                                u = e.canonizeResults,
                                c =
                                    void 0 === u ?
                                        this.config.canonizeResults
                                    :   u,
                                l = this.config.cache.policies;
                            a = (0, o.pi)(
                                (0, o.pi)({}, (0, O.O4)((0, O.iW)(n))),
                                a
                            );
                            var f = (0, g.kQ)(void 0 === i ? 'ROOT_QUERY' : i),
                                h = this.executeSelectionSet({
                                    selectionSet: (0, O.p$)(n).selectionSet,
                                    objectOrReference: f,
                                    enclosingRef: f,
                                    context: (0, o.pi)(
                                        {
                                            store: r,
                                            query: n,
                                            policies: l,
                                            variables: a,
                                            varString: (0, m.B)(a),
                                            canonizeResults: c,
                                        },
                                        A(n, this.config.fragments)
                                    ),
                                });
                            if (
                                h.missing &&
                                ((t = [
                                    new d(
                                        (function (e) {
                                            try {
                                                JSON.stringify(
                                                    e,
                                                    function (e, t) {
                                                        if (
                                                            'string' == typeof t
                                                        )
                                                            throw t;
                                                        return t;
                                                    }
                                                );
                                            } catch (e) {
                                                return e;
                                            }
                                        })(h.missing),
                                        h.missing,
                                        n,
                                        a
                                    ),
                                ]),
                                !(void 0 === s || s))
                            )
                                throw t[0];
                            return {
                                result: h.result,
                                complete: !t,
                                missing: t,
                            };
                        }),
                        (e.prototype.isFresh = function (e, t, r, n) {
                            if (K(n.store) && this.knownResults.get(e) === r) {
                                var i = this.executeSelectionSet.peek(
                                    r,
                                    t,
                                    n,
                                    this.canon.isKnown(e)
                                );
                                if (i && e === i.result) return !0;
                            }
                            return !1;
                        }),
                        (e.prototype.execSelectionSetImpl = function (e) {
                            var t,
                                r = this,
                                n = e.selectionSet,
                                i = e.objectOrReference,
                                o = e.enclosingRef,
                                s = e.context;
                            if (
                                (0, g.Yk)(i) &&
                                !s.policies.rootTypenamesById[i.__ref] &&
                                !s.store.has(i.__ref)
                            )
                                return {
                                    result: this.canon.empty,
                                    missing:
                                        'Dangling reference to missing '.concat(
                                            i.__ref,
                                            ' object'
                                        ),
                                };
                            var u = s.variables,
                                l = s.policies,
                                f = s.store.getFieldValue(i, '__typename'),
                                h = [],
                                p = new S.w0();
                            function d(e, r) {
                                var n;
                                return (
                                    e.missing &&
                                        (t = p.merge(
                                            t,
                                            (((n = {})[r] = e.missing), n)
                                        )),
                                    e.result
                                );
                            }
                            this.config.addTypename &&
                                'string' == typeof f &&
                                !l.rootIdsByTypename[f] &&
                                h.push({ __typename: f });
                            var v = new Set(n.selections);
                            v.forEach(function (e) {
                                var n, m;
                                if ((0, E.LZ)(e, u)) {
                                    if ((0, g.My)(e)) {
                                        var b = l.readField(
                                                {
                                                    fieldName: e.name.value,
                                                    field: e,
                                                    variables: s.variables,
                                                    from: i,
                                                },
                                                s
                                            ),
                                            w = (0, g.u2)(e);
                                        void 0 === b ?
                                            y.Gw.added(e) ||
                                            (t = p.merge(
                                                t,
                                                (((n = {})[w] =
                                                    "Can't find field '"
                                                        .concat(
                                                            e.name.value,
                                                            "' on "
                                                        )
                                                        .concat(
                                                            (0, g.Yk)(i) ?
                                                                i.__ref +
                                                                    ' object'
                                                            :   'object ' +
                                                                    JSON.stringify(
                                                                        i,
                                                                        null,
                                                                        2
                                                                    )
                                                        )),
                                                n)
                                            ))
                                        : (0, q.k)(b) ?
                                            (b = d(
                                                r.executeSubSelectedArray({
                                                    field: e,
                                                    array: b,
                                                    enclosingRef: o,
                                                    context: s,
                                                }),
                                                w
                                            ))
                                        : e.selectionSet ?
                                            null != b &&
                                            (b = d(
                                                r.executeSelectionSet({
                                                    selectionSet:
                                                        e.selectionSet,
                                                    objectOrReference: b,
                                                    enclosingRef:
                                                        (0, g.Yk)(b) ? b : o,
                                                    context: s,
                                                }),
                                                w
                                            ))
                                        :   s.canonizeResults &&
                                            (b = r.canon.pass(b)),
                                            void 0 !== b &&
                                                h.push((((m = {})[w] = b), m));
                                    } else {
                                        var _ = (0, c.hi)(e, s.lookupFragment);
                                        if (
                                            !_ &&
                                            e.kind === k.h.FRAGMENT_SPREAD
                                        )
                                            throw (0, a._K)(9, e.name.value);
                                        _ &&
                                            l.fragmentMatches(_, f) &&
                                            _.selectionSet.selections.forEach(
                                                v.add,
                                                v
                                            );
                                    }
                                }
                            });
                            var m = { result: (0, S.bw)(h), missing: t },
                                b =
                                    s.canonizeResults ?
                                        this.canon.admit(m)
                                    :   T(m);
                            return (
                                b.result && this.knownResults.set(b.result, n),
                                b
                            );
                        }),
                        (e.prototype.execSubSelectedArrayImpl = function (e) {
                            var t,
                                r = this,
                                n = e.field,
                                i = e.array,
                                o = e.enclosingRef,
                                s = e.context,
                                u = new S.w0();
                            function c(e, r) {
                                var n;
                                return (
                                    e.missing &&
                                        (t = u.merge(
                                            t,
                                            (((n = {})[r] = e.missing), n)
                                        )),
                                    e.result
                                );
                            }
                            return (
                                n.selectionSet &&
                                    (i = i.filter(s.store.canRead)),
                                (i = i.map(function (e, t) {
                                    return (
                                        null === e ? null
                                        : (0, q.k)(e) ?
                                            c(
                                                r.executeSubSelectedArray({
                                                    field: n,
                                                    array: e,
                                                    enclosingRef: o,
                                                    context: s,
                                                }),
                                                t
                                            )
                                        : n.selectionSet ?
                                            c(
                                                r.executeSelectionSet({
                                                    selectionSet:
                                                        n.selectionSet,
                                                    objectOrReference: e,
                                                    enclosingRef:
                                                        (0, g.Yk)(e) ? e : o,
                                                    context: s,
                                                }),
                                                t
                                            )
                                        :   (!1 !== globalThis.__DEV__ &&
                                                (function (e, t, r) {
                                                    if (!t.selectionSet) {
                                                        var n = new Set([r]);
                                                        n.forEach(function (r) {
                                                            (0, D.s)(r) &&
                                                                ((0, a.kG)(
                                                                    !(0, g.Yk)(
                                                                        r
                                                                    ),
                                                                    10,
                                                                    (
                                                                        (0,
                                                                        g.Yk)(r)
                                                                    ) ?
                                                                        e.get(
                                                                            r.__ref,
                                                                            '__typename'
                                                                        )
                                                                    :   r &&
                                                                            r.__typename,
                                                                    t.name.value
                                                                ),
                                                                Object.values(
                                                                    r
                                                                ).forEach(
                                                                    n.add,
                                                                    n
                                                                ));
                                                        });
                                                    }
                                                })(s.store, n, e),
                                            e)
                                    );
                                })),
                                {
                                    result:
                                        s.canonizeResults ?
                                            this.canon.admit(i)
                                        :   i,
                                    missing: t,
                                }
                            );
                        }),
                        e
                    );
                })(),
                H = r(9362),
                X = r(568),
                ee = r(7321),
                et = Object.create(null);
            function er(e) {
                var t = JSON.stringify(e);
                return et[t] || (et[t] = Object.create(null));
            }
            function en(e) {
                var t = er(e);
                return (
                    t.keyFieldsFn ||
                    (t.keyFieldsFn = function (t, r) {
                        var n = function (e, t) {
                                return r.readField(t, e);
                            },
                            i = (r.keyObject = eo(e, function (e) {
                                var i = es(r.storeObject, e, n);
                                return (
                                    void 0 === i &&
                                        t !== r.storeObject &&
                                        F.call(t, e[0]) &&
                                        (i = es(t, e, ea)),
                                    (0, a.kG)(void 0 !== i, 4, e.join('.'), t),
                                    i
                                );
                            }));
                        return ''
                            .concat(r.typename, ':')
                            .concat(JSON.stringify(i));
                    })
                );
            }
            function ei(e) {
                var t = er(e);
                return (
                    t.keyArgsFn ||
                    (t.keyArgsFn = function (t, r) {
                        var n = r.field,
                            i = r.variables,
                            o = r.fieldName,
                            a = JSON.stringify(
                                eo(e, function (e) {
                                    var r = e[0],
                                        o = r.charAt(0);
                                    if ('@' === o) {
                                        if (n && (0, q.O)(n.directives)) {
                                            var a = r.slice(1),
                                                s = n.directives.find(
                                                    function (e) {
                                                        return (
                                                            e.name.value === a
                                                        );
                                                    }
                                                ),
                                                u = s && (0, g.NC)(s, i);
                                            return u && es(u, e.slice(1));
                                        }
                                        return;
                                    }
                                    if ('$' === o) {
                                        var c = r.slice(1);
                                        if (i && F.call(i, c)) {
                                            var l = e.slice(0);
                                            return (l[0] = c), es(i, l);
                                        }
                                        return;
                                    }
                                    if (t) return es(t, e);
                                })
                            );
                        return (t || '{}' !== a) && (o += ':' + a), o;
                    })
                );
            }
            function eo(e, t) {
                var r = new S.w0();
                return (function e(t) {
                    var r = er(t);
                    if (!r.paths) {
                        var n = (r.paths = []),
                            i = [];
                        t.forEach(function (r, o) {
                            (0, q.k)(r) ?
                                (e(r).forEach(function (e) {
                                    return n.push(i.concat(e));
                                }),
                                (i.length = 0))
                            :   (i.push(r),
                                (0, q.k)(t[o + 1]) ||
                                    (n.push(i.slice(0)), (i.length = 0)));
                        });
                    }
                    return r.paths;
                })(e).reduce(function (e, n) {
                    var i,
                        o = t(n);
                    if (void 0 !== o) {
                        for (var a = n.length - 1; a >= 0; --a)
                            ((i = {})[n[a]] = o), (o = i);
                        e = r.merge(e, o);
                    }
                    return e;
                }, Object.create(null));
            }
            function ea(e, t) {
                return e[t];
            }
            function es(e, t, r) {
                return (
                    (r = r || ea),
                    (function e(t) {
                        return (
                            (0, D.s)(t) ?
                                (0, q.k)(t) ? t.map(e)
                                :   eo(Object.keys(t).sort(), function (e) {
                                        return es(t, e);
                                    })
                            :   t
                        );
                    })(
                        t.reduce(function e(t, n) {
                            return (0, q.k)(t) ?
                                    t.map(function (t) {
                                        return e(t, n);
                                    })
                                :   t && r(t, n);
                        }, e)
                    )
                );
            }
            function eu(e) {
                return (
                    void 0 !== e.args ? e.args
                    : e.field ? (0, g.NC)(e.field, e.variables)
                    : null
                );
            }
            var ec = function () {},
                el = function (e, t) {
                    return t.fieldName;
                },
                ef = function (e, t, r) {
                    return (0, r.mergeObjects)(e, t);
                },
                eh = function (e, t) {
                    return t;
                },
                ep = (function () {
                    function e(e) {
                        (this.config = e),
                            (this.typePolicies = Object.create(null)),
                            (this.toBeAdded = Object.create(null)),
                            (this.supertypeMap = new Map()),
                            (this.fuzzySubtypes = new Map()),
                            (this.rootIdsByTypename = Object.create(null)),
                            (this.rootTypenamesById = Object.create(null)),
                            (this.usingPossibleTypes = !1),
                            (this.config = (0, o.pi)(
                                { dataIdFromObject: I },
                                e
                            )),
                            (this.cache = this.config.cache),
                            this.setRootTypename('Query'),
                            this.setRootTypename('Mutation'),
                            this.setRootTypename('Subscription'),
                            e.possibleTypes &&
                                this.addPossibleTypes(e.possibleTypes),
                            e.typePolicies &&
                                this.addTypePolicies(e.typePolicies);
                    }
                    return (
                        (e.prototype.identify = function (e, t) {
                            var r,
                                n,
                                i = this,
                                a =
                                    (t &&
                                        (t.typename ||
                                            ((
                                                null === (r = t.storeObject) ||
                                                void 0 === r
                                            ) ?
                                                void 0
                                            :   r.__typename))) ||
                                    e.__typename;
                            if (a === this.rootTypenamesById.ROOT_QUERY)
                                return ['ROOT_QUERY'];
                            for (
                                var s = (t && t.storeObject) || e,
                                    u = (0, o.pi)((0, o.pi)({}, t), {
                                        typename: a,
                                        storeObject: s,
                                        readField:
                                            (t && t.readField) ||
                                            function () {
                                                var e = ev(arguments, s);
                                                return i.readField(e, {
                                                    store: i.cache.data,
                                                    variables: e.variables,
                                                });
                                            },
                                    }),
                                    c = a && this.getTypePolicy(a),
                                    l =
                                        (c && c.keyFn) ||
                                        this.config.dataIdFromObject;
                                l;

                            ) {
                                var f = l((0, o.pi)((0, o.pi)({}, e), s), u);
                                if ((0, q.k)(f)) l = en(f);
                                else {
                                    n = f;
                                    break;
                                }
                            }
                            return (
                                (n = n ? String(n) : void 0),
                                u.keyObject ? [n, u.keyObject] : [n]
                            );
                        }),
                        (e.prototype.addTypePolicies = function (e) {
                            var t = this;
                            Object.keys(e).forEach(function (r) {
                                var n = e[r],
                                    i = n.queryType,
                                    a = n.mutationType,
                                    s = n.subscriptionType,
                                    u = (0, o._T)(n, [
                                        'queryType',
                                        'mutationType',
                                        'subscriptionType',
                                    ]);
                                i && t.setRootTypename('Query', r),
                                    a && t.setRootTypename('Mutation', r),
                                    s && t.setRootTypename('Subscription', r),
                                    F.call(t.toBeAdded, r) ?
                                        t.toBeAdded[r].push(u)
                                    :   (t.toBeAdded[r] = [u]);
                            });
                        }),
                        (e.prototype.updateTypePolicy = function (e, t) {
                            var r = this,
                                n = this.getTypePolicy(e),
                                i = t.keyFields,
                                o = t.fields;
                            function a(e, t) {
                                e.merge =
                                    'function' == typeof t ? t
                                    : !0 === t ? ef
                                    : !1 === t ? eh
                                    : e.merge;
                            }
                            a(n, t.merge),
                                (n.keyFn =
                                    !1 === i ? ec
                                    : (0, q.k)(i) ? en(i)
                                    : 'function' == typeof i ? i
                                    : n.keyFn),
                                o &&
                                    Object.keys(o).forEach(function (t) {
                                        var n = r.getFieldPolicy(e, t, !0),
                                            i = o[t];
                                        if ('function' == typeof i) n.read = i;
                                        else {
                                            var s = i.keyArgs,
                                                u = i.read,
                                                c = i.merge;
                                            (n.keyFn =
                                                !1 === s ? el
                                                : (0, q.k)(s) ? ei(s)
                                                : 'function' == typeof s ? s
                                                : n.keyFn),
                                                'function' == typeof u &&
                                                    (n.read = u),
                                                a(n, c);
                                        }
                                        n.read &&
                                            n.merge &&
                                            (n.keyFn = n.keyFn || el);
                                    });
                        }),
                        (e.prototype.setRootTypename = function (e, t) {
                            void 0 === t && (t = e);
                            var r = 'ROOT_' + e.toUpperCase(),
                                n = this.rootTypenamesById[r];
                            t !== n &&
                                ((0, a.kG)(!n || n === e, 5, e),
                                n && delete this.rootIdsByTypename[n],
                                (this.rootIdsByTypename[t] = r),
                                (this.rootTypenamesById[r] = t));
                        }),
                        (e.prototype.addPossibleTypes = function (e) {
                            var t = this;
                            (this.usingPossibleTypes = !0),
                                Object.keys(e).forEach(function (r) {
                                    t.getSupertypeSet(r, !0),
                                        e[r].forEach(function (e) {
                                            t.getSupertypeSet(e, !0).add(r);
                                            var n = e.match(Q);
                                            (n && n[0] === e) ||
                                                t.fuzzySubtypes.set(
                                                    e,
                                                    new RegExp(e)
                                                );
                                        });
                                });
                        }),
                        (e.prototype.getTypePolicy = function (e) {
                            var t = this;
                            if (!F.call(this.typePolicies, e)) {
                                var r = (this.typePolicies[e] =
                                    Object.create(null));
                                r.fields = Object.create(null);
                                var n = this.supertypeMap.get(e);
                                !n &&
                                    this.fuzzySubtypes.size &&
                                    ((n = this.getSupertypeSet(e, !0)),
                                    this.fuzzySubtypes.forEach(function (r, i) {
                                        if (r.test(e)) {
                                            var o = t.supertypeMap.get(i);
                                            o &&
                                                o.forEach(function (e) {
                                                    return n.add(e);
                                                });
                                        }
                                    })),
                                    n &&
                                        n.size &&
                                        n.forEach(function (e) {
                                            var n = t.getTypePolicy(e),
                                                i = n.fields;
                                            Object.assign(
                                                r,
                                                (0, o._T)(n, ['fields'])
                                            ),
                                                Object.assign(r.fields, i);
                                        });
                            }
                            var i = this.toBeAdded[e];
                            return (
                                i &&
                                    i.length &&
                                    i.splice(0).forEach(function (r) {
                                        t.updateTypePolicy(e, r);
                                    }),
                                this.typePolicies[e]
                            );
                        }),
                        (e.prototype.getFieldPolicy = function (e, t, r) {
                            if (e) {
                                var n = this.getTypePolicy(e).fields;
                                return (
                                    n[t] || (r && (n[t] = Object.create(null)))
                                );
                            }
                        }),
                        (e.prototype.getSupertypeSet = function (e, t) {
                            var r = this.supertypeMap.get(e);
                            return (
                                !r &&
                                    t &&
                                    this.supertypeMap.set(e, (r = new Set())),
                                r
                            );
                        }),
                        (e.prototype.fragmentMatches = function (e, t, r, n) {
                            var i = this;
                            if (!e.typeCondition) return !0;
                            if (!t) return !1;
                            var o = e.typeCondition.name.value;
                            if (t === o) return !0;
                            if (
                                this.usingPossibleTypes &&
                                this.supertypeMap.has(o)
                            )
                                for (
                                    var s = this.getSupertypeSet(t, !0),
                                        u = [s],
                                        c = function (e) {
                                            var t = i.getSupertypeSet(e, !1);
                                            t &&
                                                t.size &&
                                                0 > u.indexOf(t) &&
                                                u.push(t);
                                        },
                                        l = !!(r && this.fuzzySubtypes.size),
                                        f = !1,
                                        h = 0;
                                    h < u.length;
                                    ++h
                                ) {
                                    var p = u[h];
                                    if (p.has(o))
                                        return (
                                            s.has(o) ||
                                                (f &&
                                                    !1 !== globalThis.__DEV__ &&
                                                    a.kG.warn(6, t, o),
                                                s.add(o)),
                                            !0
                                        );
                                    p.forEach(c),
                                        l &&
                                            h === u.length - 1 &&
                                            (function e(t, r, n) {
                                                return (
                                                    !!(0, D.s)(r) &&
                                                    ((0, q.k)(r) ?
                                                        r.every(function (r) {
                                                            return e(t, r, n);
                                                        })
                                                    :   t.selections.every(
                                                            function (t) {
                                                                if (
                                                                    (0, g.My)(
                                                                        t
                                                                    ) &&
                                                                    (0, E.LZ)(
                                                                        t,
                                                                        n
                                                                    )
                                                                ) {
                                                                    var i = (0,
                                                                    g.u2)(t);
                                                                    return (
                                                                        F.call(
                                                                            r,
                                                                            i
                                                                        ) &&
                                                                        (!t.selectionSet ||
                                                                            e(
                                                                                t.selectionSet,
                                                                                r[
                                                                                    i
                                                                                ],
                                                                                n
                                                                            ))
                                                                    );
                                                                }
                                                                return !0;
                                                            }
                                                        ))
                                                );
                                            })(e.selectionSet, r, n) &&
                                            ((l = !1),
                                            (f = !0),
                                            this.fuzzySubtypes.forEach(
                                                function (e, r) {
                                                    var n = t.match(e);
                                                    n && n[0] === t && c(r);
                                                }
                                            ));
                                }
                            return !1;
                        }),
                        (e.prototype.hasKeyArgs = function (e, t) {
                            var r = this.getFieldPolicy(e, t, !1);
                            return !!(r && r.keyFn);
                        }),
                        (e.prototype.getStoreFieldName = function (e) {
                            var t,
                                r = e.typename,
                                n = e.fieldName,
                                i = this.getFieldPolicy(r, n, !1),
                                o = i && i.keyFn;
                            if (o && r)
                                for (
                                    var a = {
                                            typename: r,
                                            fieldName: n,
                                            field: e.field || null,
                                            variables: e.variables,
                                        },
                                        s = eu(e);
                                    o;

                                ) {
                                    var u = o(s, a);
                                    if ((0, q.k)(u)) o = ei(u);
                                    else {
                                        t = u || n;
                                        break;
                                    }
                                }
                            return (
                                (
                                    (void 0 === t &&
                                        (t =
                                            e.field ?
                                                (0, g.vf)(e.field, e.variables)
                                            :   (0, g.PT)(n, eu(e))),
                                    !1 === t)
                                ) ?
                                    n
                                : n === C(t) ? t
                                : n + ':' + t
                            );
                        }),
                        (e.prototype.readField = function (e, t) {
                            var r = e.from;
                            if (r && (e.field || e.fieldName)) {
                                if (void 0 === e.typename) {
                                    var n = t.store.getFieldValue(
                                        r,
                                        '__typename'
                                    );
                                    n && (e.typename = n);
                                }
                                var i = this.getStoreFieldName(e),
                                    o = C(i),
                                    a = t.store.getFieldValue(r, i),
                                    s = this.getFieldPolicy(e.typename, o, !1),
                                    u = s && s.read;
                                if (u) {
                                    var c = ed(
                                        this,
                                        r,
                                        e,
                                        t,
                                        t.store.getStorage(
                                            (0, g.Yk)(r) ? r.__ref : r,
                                            i
                                        )
                                    );
                                    return ee.ab.withValue(this.cache, u, [
                                        a,
                                        c,
                                    ]);
                                }
                                return a;
                            }
                        }),
                        (e.prototype.getReadFunction = function (e, t) {
                            var r = this.getFieldPolicy(e, t, !1);
                            return r && r.read;
                        }),
                        (e.prototype.getMergeFunction = function (e, t, r) {
                            var n = this.getFieldPolicy(e, t, !1),
                                i = n && n.merge;
                            return (
                                !i &&
                                    r &&
                                    (i =
                                        (n = this.getTypePolicy(r)) && n.merge),
                                i
                            );
                        }),
                        (e.prototype.runMergeFunction = function (
                            e,
                            t,
                            r,
                            n,
                            i
                        ) {
                            var o = r.field,
                                a = r.typename,
                                s = r.merge;
                            return (
                                s === ef ? ey(n.store)(e, t)
                                : s === eh ? t
                                : (n.overwrite && (e = void 0),
                                    s(
                                        e,
                                        t,
                                        ed(
                                            this,
                                            void 0,
                                            {
                                                typename: a,
                                                fieldName: o.name.value,
                                                field: o,
                                                variables: n.variables,
                                            },
                                            n,
                                            i || Object.create(null)
                                        )
                                    ))
                            );
                        }),
                        e
                    );
                })();
            function ed(e, t, r, n, i) {
                var o = e.getStoreFieldName(r),
                    a = C(o),
                    s = r.variables || n.variables,
                    u = n.store,
                    c = u.toReference,
                    l = u.canRead;
                return {
                    args: eu(r),
                    field: r.field || null,
                    fieldName: a,
                    storeFieldName: o,
                    variables: s,
                    isReference: g.Yk,
                    toReference: c,
                    storage: i,
                    cache: e.cache,
                    canRead: l,
                    readField: function () {
                        return e.readField(ev(arguments, t, s), n);
                    },
                    mergeObjects: ey(n.store),
                };
            }
            function ev(e, t, r) {
                var n,
                    i = e[0],
                    s = e[1],
                    u = e.length;
                return (
                    'string' == typeof i ?
                        (n = { fieldName: i, from: u > 1 ? s : t })
                    :   ((n = (0, o.pi)({}, i)),
                        F.call(n, 'from') || (n.from = t)),
                    !1 !== globalThis.__DEV__ &&
                        void 0 === n.from &&
                        !1 !== globalThis.__DEV__ &&
                        a.kG.warn(7, (0, X.v)(Array.from(e))),
                    void 0 === n.variables && (n.variables = r),
                    n
                );
            }
            function ey(e) {
                return function (t, r) {
                    if ((0, q.k)(t) || (0, q.k)(r)) throw (0, a._K)(8);
                    if ((0, D.s)(t) && (0, D.s)(r)) {
                        var n = e.getFieldValue(t, '__typename'),
                            i = e.getFieldValue(r, '__typename');
                        if (n && i && n !== i) return r;
                        if ((0, g.Yk)(t) && M(r)) return e.merge(t.__ref, r), t;
                        if (M(t) && (0, g.Yk)(r)) return e.merge(t, r.__ref), r;
                        if (M(t) && M(r)) return (0, o.pi)((0, o.pi)({}, t), r);
                    }
                    return r;
                };
            }
            function em(e, t, r) {
                var n = ''.concat(t).concat(r),
                    i = e.flavors.get(n);
                return (
                    i ||
                        e.flavors.set(
                            n,
                            (i =
                                e.clientOnly === t && e.deferred === r ?
                                    e
                                :   (0, o.pi)((0, o.pi)({}, e), {
                                        clientOnly: t,
                                        deferred: r,
                                    }))
                        ),
                    i
                );
            }
            var eb = (function () {
                    function e(e, t, r) {
                        (this.cache = e),
                            (this.reader = t),
                            (this.fragments = r);
                    }
                    return (
                        (e.prototype.writeToStore = function (e, t) {
                            var r = this,
                                n = t.query,
                                i = t.result,
                                s = t.dataId,
                                c = t.variables,
                                l = t.overwrite,
                                f = (0, O.$H)(n),
                                h = new S.w0();
                            c = (0, o.pi)((0, o.pi)({}, (0, O.O4)(f)), c);
                            var p = (0, o.pi)(
                                    (0, o.pi)(
                                        {
                                            store: e,
                                            written: Object.create(null),
                                            merge: function (e, t) {
                                                return h.merge(e, t);
                                            },
                                            variables: c,
                                            varString: (0, m.B)(c),
                                        },
                                        A(n, this.fragments)
                                    ),
                                    {
                                        overwrite: !!l,
                                        incomingById: new Map(),
                                        clientOnly: !1,
                                        deferred: !1,
                                        flavors: new Map(),
                                    }
                                ),
                                d = this.processSelectionSet({
                                    result: i || Object.create(null),
                                    dataId: s,
                                    selectionSet: f.selectionSet,
                                    mergeTree: { map: new Map() },
                                    context: p,
                                });
                            if (!(0, g.Yk)(d)) throw (0, a._K)(11, i);
                            return (
                                p.incomingById.forEach(function (t, n) {
                                    var i = t.storeObject,
                                        o = t.mergeTree,
                                        s = t.fieldNodeSet,
                                        c = (0, g.kQ)(n);
                                    if (o && o.map.size) {
                                        var l = r.applyMerges(o, c, i, p);
                                        if ((0, g.Yk)(l)) return;
                                        i = l;
                                    }
                                    if (
                                        !1 !== globalThis.__DEV__ &&
                                        !p.overwrite
                                    ) {
                                        var f = Object.create(null);
                                        s.forEach(function (e) {
                                            e.selectionSet &&
                                                (f[e.name.value] = !0);
                                        });
                                        var h = function (e) {
                                            var t = o && o.map.get(e);
                                            return !!(
                                                t &&
                                                t.info &&
                                                t.info.merge
                                            );
                                        };
                                        Object.keys(i).forEach(function (e) {
                                            !0 !== f[C(e)] ||
                                                h(e) ||
                                                (function (e, t, r, n) {
                                                    var i = function (e) {
                                                            var t =
                                                                n.getFieldValue(
                                                                    e,
                                                                    r
                                                                );
                                                            return (
                                                                'object' ==
                                                                    typeof t &&
                                                                t
                                                            );
                                                        },
                                                        o = i(e);
                                                    if (o) {
                                                        var s = i(t);
                                                        if (
                                                            !(
                                                                !s ||
                                                                (0, g.Yk)(o) ||
                                                                (0, u.D)(
                                                                    o,
                                                                    s
                                                                ) ||
                                                                Object.keys(
                                                                    o
                                                                ).every(
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return (
                                                                            void 0 !==
                                                                            n.getFieldValue(
                                                                                s,
                                                                                e
                                                                            )
                                                                        );
                                                                    }
                                                                )
                                                            )
                                                        ) {
                                                            var c =
                                                                    n.getFieldValue(
                                                                        e,
                                                                        '__typename'
                                                                    ) ||
                                                                    n.getFieldValue(
                                                                        t,
                                                                        '__typename'
                                                                    ),
                                                                l = C(r),
                                                                f = ''
                                                                    .concat(
                                                                        c,
                                                                        '.'
                                                                    )
                                                                    .concat(l);
                                                            if (!eO.has(f)) {
                                                                eO.add(f);
                                                                var h = [];
                                                                (0, q.k)(o) ||
                                                                    (0, q.k)(
                                                                        s
                                                                    ) ||
                                                                    [
                                                                        o,
                                                                        s,
                                                                    ].forEach(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            var t =
                                                                                n.getFieldValue(
                                                                                    e,
                                                                                    '__typename'
                                                                                );
                                                                            'string' !=
                                                                                typeof t ||
                                                                                h.includes(
                                                                                    t
                                                                                ) ||
                                                                                h.push(
                                                                                    t
                                                                                );
                                                                        }
                                                                    ),
                                                                    !1 !==
                                                                        globalThis.__DEV__ &&
                                                                        a.kG.warn(
                                                                            14,
                                                                            l,
                                                                            c,
                                                                            (
                                                                                h.length
                                                                            ) ?
                                                                                'either ensure all objects of type ' +
                                                                                    h.join(
                                                                                        ' and '
                                                                                    ) +
                                                                                    ' have an ID or a custom merge function, or '
                                                                            :   '',
                                                                            f,
                                                                            o,
                                                                            s
                                                                        );
                                                            }
                                                        }
                                                    }
                                                })(c, i, e, p.store);
                                        });
                                    }
                                    e.merge(n, i);
                                }),
                                e.retain(d.__ref),
                                d
                            );
                        }),
                        (e.prototype.processSelectionSet = function (e) {
                            var t = this,
                                r = e.dataId,
                                n = e.result,
                                i = e.selectionSet,
                                s = e.context,
                                u = e.mergeTree,
                                c = this.cache.policies,
                                l = Object.create(null),
                                f =
                                    (r && c.rootTypenamesById[r]) ||
                                    (0, g.qw)(n, i, s.fragmentMap) ||
                                    (r && s.store.get(r, '__typename'));
                            'string' == typeof f && (l.__typename = f);
                            var h = function () {
                                    var e = ev(arguments, l, s.variables);
                                    if ((0, g.Yk)(e.from)) {
                                        var t = s.incomingById.get(
                                            e.from.__ref
                                        );
                                        if (t) {
                                            var r = c.readField(
                                                (0, o.pi)((0, o.pi)({}, e), {
                                                    from: t.storeObject,
                                                }),
                                                s
                                            );
                                            if (void 0 !== r) return r;
                                        }
                                    }
                                    return c.readField(e, s);
                                },
                                p = new Set();
                            this.flattenFields(i, n, s, f).forEach(
                                function (e, r) {
                                    var i,
                                        o = n[(0, g.u2)(r)];
                                    if ((p.add(r), void 0 !== o)) {
                                        var s = c.getStoreFieldName({
                                                typename: f,
                                                fieldName: r.name.value,
                                                field: r,
                                                variables: e.variables,
                                            }),
                                            d = ek(u, s),
                                            v = t.processFieldValue(
                                                o,
                                                r,
                                                r.selectionSet ?
                                                    em(e, !1, !1)
                                                :   e,
                                                d
                                            ),
                                            m = void 0;
                                        r.selectionSet &&
                                            ((0, g.Yk)(v) || M(v)) &&
                                            (m = h('__typename', v));
                                        var b = c.getMergeFunction(
                                            f,
                                            r.name.value,
                                            m
                                        );
                                        b ?
                                            (d.info = {
                                                field: r,
                                                typename: f,
                                                merge: b,
                                            })
                                        :   e_(u, s),
                                            (l = e.merge(
                                                l,
                                                (((i = {})[s] = v), i)
                                            ));
                                    } else
                                        !1 === globalThis.__DEV__ ||
                                            e.clientOnly ||
                                            e.deferred ||
                                            y.Gw.added(r) ||
                                            c.getReadFunction(
                                                f,
                                                r.name.value
                                            ) ||
                                            !1 === globalThis.__DEV__ ||
                                            a.kG.error(12, (0, g.u2)(r), n);
                                }
                            );
                            try {
                                var d = c.identify(n, {
                                        typename: f,
                                        selectionSet: i,
                                        fragmentMap: s.fragmentMap,
                                        storeObject: l,
                                        readField: h,
                                    }),
                                    v = d[0],
                                    m = d[1];
                                (r = r || v), m && (l = s.merge(l, m));
                            } catch (e) {
                                if (!r) throw e;
                            }
                            if ('string' == typeof r) {
                                var b = (0, g.kQ)(r),
                                    k = s.written[r] || (s.written[r] = []);
                                if (
                                    k.indexOf(i) >= 0 ||
                                    (k.push(i),
                                    this.reader &&
                                        this.reader.isFresh(n, b, i, s))
                                )
                                    return b;
                                var w = s.incomingById.get(r);
                                return (
                                    w ?
                                        ((w.storeObject = s.merge(
                                            w.storeObject,
                                            l
                                        )),
                                        (w.mergeTree = (function e(t, r) {
                                            if (t === r || !r || ew(r))
                                                return t;
                                            if (!t || ew(t)) return r;
                                            var n =
                                                    t.info && r.info ?
                                                        (0, o.pi)(
                                                            (0, o.pi)(
                                                                {},
                                                                t.info
                                                            ),
                                                            r.info
                                                        )
                                                    :   t.info || r.info,
                                                i = t.map.size && r.map.size,
                                                a = {
                                                    info: n,
                                                    map:
                                                        i ? new Map()
                                                        : t.map.size ? t.map
                                                        : r.map,
                                                };
                                            if (i) {
                                                var s = new Set(r.map.keys());
                                                t.map.forEach(function (t, n) {
                                                    a.map.set(
                                                        n,
                                                        e(t, r.map.get(n))
                                                    ),
                                                        s.delete(n);
                                                }),
                                                    s.forEach(function (n) {
                                                        a.map.set(
                                                            n,
                                                            e(
                                                                r.map.get(n),
                                                                t.map.get(n)
                                                            )
                                                        );
                                                    });
                                            }
                                            return a;
                                        })(w.mergeTree, u)),
                                        p.forEach(function (e) {
                                            return w.fieldNodeSet.add(e);
                                        }))
                                    :   s.incomingById.set(r, {
                                            storeObject: l,
                                            mergeTree: ew(u) ? void 0 : u,
                                            fieldNodeSet: p,
                                        }),
                                    b
                                );
                            }
                            return l;
                        }),
                        (e.prototype.processFieldValue = function (e, t, r, n) {
                            var i = this;
                            return (
                                t.selectionSet && null !== e ?
                                    (0, q.k)(e) ?
                                        e.map(function (e, o) {
                                            var a = i.processFieldValue(
                                                e,
                                                t,
                                                r,
                                                ek(n, o)
                                            );
                                            return e_(n, o), a;
                                        })
                                    :   this.processSelectionSet({
                                            result: e,
                                            selectionSet: t.selectionSet,
                                            context: r,
                                            mergeTree: n,
                                        })
                                : !1 !== globalThis.__DEV__ ? (0, H.X)(e)
                                : e
                            );
                        }),
                        (e.prototype.flattenFields = function (e, t, r, n) {
                            void 0 === n &&
                                (n = (0, g.qw)(t, e, r.fragmentMap));
                            var i = new Map(),
                                o = this.cache.policies,
                                s = new x.B(!1);
                            return (
                                (function e(u, l) {
                                    var f = s.lookup(
                                        u,
                                        l.clientOnly,
                                        l.deferred
                                    );
                                    f.visited ||
                                        ((f.visited = !0),
                                        u.selections.forEach(function (s) {
                                            if ((0, E.LZ)(s, r.variables)) {
                                                var u = l.clientOnly,
                                                    f = l.deferred;
                                                if (
                                                    (!(u && f) &&
                                                        (0, q.O)(
                                                            s.directives
                                                        ) &&
                                                        s.directives.forEach(
                                                            function (e) {
                                                                var t =
                                                                    e.name
                                                                        .value;
                                                                if (
                                                                    ('client' ===
                                                                        t &&
                                                                        (u =
                                                                            !0),
                                                                    'defer' ===
                                                                        t)
                                                                ) {
                                                                    var n = (0,
                                                                    g.NC)(
                                                                        e,
                                                                        r.variables
                                                                    );
                                                                    (n &&
                                                                        !1 ===
                                                                            n.if) ||
                                                                        (f =
                                                                            !0);
                                                                }
                                                            }
                                                        ),
                                                    (0, g.My)(s))
                                                ) {
                                                    var h = i.get(s);
                                                    h &&
                                                        ((u =
                                                            u && h.clientOnly),
                                                        (f = f && h.deferred)),
                                                        i.set(s, em(r, u, f));
                                                } else {
                                                    var p = (0, c.hi)(
                                                        s,
                                                        r.lookupFragment
                                                    );
                                                    if (
                                                        !p &&
                                                        s.kind ===
                                                            k.h.FRAGMENT_SPREAD
                                                    )
                                                        throw (0, a._K)(
                                                            13,
                                                            s.name.value
                                                        );
                                                    p &&
                                                        o.fragmentMatches(
                                                            p,
                                                            n,
                                                            t,
                                                            r.variables
                                                        ) &&
                                                        e(
                                                            p.selectionSet,
                                                            em(r, u, f)
                                                        );
                                                }
                                            }
                                        }));
                                })(e, r),
                                i
                            );
                        }),
                        (e.prototype.applyMerges = function (e, t, r, n, i) {
                            var s = this;
                            if (e.map.size && !(0, g.Yk)(r)) {
                                var u,
                                    c,
                                    l =
                                        !(0, q.k)(r) && ((0, g.Yk)(t) || M(t)) ?
                                            t
                                        :   void 0,
                                    f = r;
                                l && !i && (i = [(0, g.Yk)(l) ? l.__ref : l]);
                                var h = function (e, t) {
                                    return (
                                        (0, q.k)(e) ?
                                            'number' == typeof t ?
                                                e[t]
                                            :   void 0
                                        :   n.store.getFieldValue(e, String(t))
                                    );
                                };
                                e.map.forEach(function (e, t) {
                                    var r = h(l, t),
                                        o = h(f, t);
                                    if (void 0 !== o) {
                                        i && i.push(t);
                                        var u = s.applyMerges(e, r, o, n, i);
                                        u !== o &&
                                            (c = c || new Map()).set(t, u),
                                            i && (0, a.kG)(i.pop() === t);
                                    }
                                }),
                                    c &&
                                        ((r =
                                            (0, q.k)(f) ?
                                                f.slice(0)
                                            :   (0, o.pi)({}, f)),
                                        c.forEach(function (e, t) {
                                            r[t] = e;
                                        }));
                            }
                            return e.info ?
                                    this.cache.policies.runMergeFunction(
                                        t,
                                        r,
                                        e.info,
                                        n,
                                        i &&
                                            (u = n.store).getStorage.apply(u, i)
                                    )
                                :   r;
                        }),
                        e
                    );
                })(),
                eg = [];
            function ek(e, t) {
                var r = e.map;
                return (
                    r.has(t) || r.set(t, eg.pop() || { map: new Map() }),
                    r.get(t)
                );
            }
            function ew(e) {
                return !e || !(e.info || e.map.size);
            }
            function e_(e, t) {
                var r = e.map,
                    n = r.get(t);
                n && ew(n) && (eg.push(n), r.delete(t));
            }
            var eO = new Set(),
                eS = (function (e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var r,
                            n = e.call(this) || this;
                        return (
                            (n.watches = new Set()),
                            (n.addTypenameTransform = new v.A(y.Gw)),
                            (n.assumeImmutableResults = !0),
                            (n.makeVar = ee.QS),
                            (n.txCount = 0),
                            (n.config = ((r = t), (0, _.o)(P, r))),
                            (n.addTypename = !!n.config.addTypename),
                            (n.policies = new ep({
                                cache: n,
                                dataIdFromObject: n.config.dataIdFromObject,
                                possibleTypes: n.config.possibleTypes,
                                typePolicies: n.config.typePolicies,
                            })),
                            n.init(),
                            n
                        );
                    }
                    return (
                        (0, o.ZT)(t, e),
                        (t.prototype.init = function () {
                            var e = (this.data = new z.Root({
                                policies: this.policies,
                                resultCaching: this.config.resultCaching,
                            }));
                            (this.optimisticData = e.stump),
                                this.resetResultCache();
                        }),
                        (t.prototype.resetResultCache = function (e) {
                            var t = this,
                                r = this.storeReader,
                                n = this.config.fragments;
                            (this.storeWriter = new eb(
                                this,
                                (this.storeReader = new $({
                                    cache: this,
                                    addTypename: this.addTypename,
                                    resultCacheMaxSize:
                                        this.config.resultCacheMaxSize,
                                    canonizeResults: j(this.config),
                                    canon: e ? void 0 : r && r.canon,
                                    fragments: n,
                                })),
                                n
                            )),
                                (this.maybeBroadcastWatch = (0, s.re)(
                                    function (e, r) {
                                        return t.broadcastWatch(e, r);
                                    },
                                    {
                                        max:
                                            this.config.resultCacheMaxSize ||
                                            l.Q[
                                                'inMemoryCache.maybeBroadcastWatch'
                                            ] ||
                                            5e3,
                                        makeCacheKey: function (e) {
                                            var r =
                                                e.optimistic ?
                                                    t.optimisticData
                                                :   t.data;
                                            if (K(r)) {
                                                var n = e.optimistic,
                                                    i = e.id,
                                                    o = e.variables;
                                                return r.makeCacheKey(
                                                    e.query,
                                                    e.callback,
                                                    (0, m.B)({
                                                        optimistic: n,
                                                        id: i,
                                                        variables: o,
                                                    })
                                                );
                                            }
                                        },
                                    }
                                )),
                                new Set([
                                    this.data.group,
                                    this.optimisticData.group,
                                ]).forEach(function (e) {
                                    return e.resetCaching();
                                });
                        }),
                        (t.prototype.restore = function (e) {
                            return this.init(), e && this.data.replace(e), this;
                        }),
                        (t.prototype.extract = function (e) {
                            return (
                                void 0 === e && (e = !1),
                                (e ? this.optimisticData : this.data).extract()
                            );
                        }),
                        (t.prototype.read = function (e) {
                            var t = e.returnPartialData;
                            try {
                                return (
                                    this.storeReader.diffQueryAgainstStore(
                                        (0, o.pi)((0, o.pi)({}, e), {
                                            store:
                                                e.optimistic ?
                                                    this.optimisticData
                                                :   this.data,
                                            config: this.config,
                                            returnPartialData:
                                                void 0 !== t && t,
                                        })
                                    ).result || null
                                );
                            } catch (e) {
                                if (e instanceof d) return null;
                                throw e;
                            }
                        }),
                        (t.prototype.write = function (e) {
                            try {
                                return (
                                    ++this.txCount,
                                    this.storeWriter.writeToStore(this.data, e)
                                );
                            } finally {
                                --this.txCount ||
                                    !1 === e.broadcast ||
                                    this.broadcastWatches();
                            }
                        }),
                        (t.prototype.modify = function (e) {
                            if (F.call(e, 'id') && !e.id) return !1;
                            var t =
                                e.optimistic ? this.optimisticData : this.data;
                            try {
                                return (
                                    ++this.txCount,
                                    t.modify(e.id || 'ROOT_QUERY', e.fields)
                                );
                            } finally {
                                --this.txCount ||
                                    !1 === e.broadcast ||
                                    this.broadcastWatches();
                            }
                        }),
                        (t.prototype.diff = function (e) {
                            return this.storeReader.diffQueryAgainstStore(
                                (0, o.pi)((0, o.pi)({}, e), {
                                    store:
                                        e.optimistic ?
                                            this.optimisticData
                                        :   this.data,
                                    rootId: e.id || 'ROOT_QUERY',
                                    config: this.config,
                                })
                            );
                        }),
                        (t.prototype.watch = function (e) {
                            var t = this;
                            return (
                                this.watches.size || (0, ee._v)(this),
                                this.watches.add(e),
                                e.immediate && this.maybeBroadcastWatch(e),
                                function () {
                                    t.watches.delete(e) &&
                                        !t.watches.size &&
                                        (0, ee.li)(t),
                                        t.maybeBroadcastWatch.forget(e);
                                }
                            );
                        }),
                        (t.prototype.gc = function (e) {
                            m.B.reset(),
                                b.S.reset(),
                                this.addTypenameTransform.resetCache(),
                                null === (t = this.config.fragments) ||
                                    void 0 === t ||
                                    t.resetCaches();
                            var t,
                                r = this.optimisticData.gc();
                            return (
                                e &&
                                    !this.txCount &&
                                    (e.resetResultCache ?
                                        this.resetResultCache(
                                            e.resetResultIdentities
                                        )
                                    :   e.resetResultIdentities &&
                                        this.storeReader.resetCanon()),
                                r
                            );
                        }),
                        (t.prototype.retain = function (e, t) {
                            return (t ? this.optimisticData : this.data).retain(
                                e
                            );
                        }),
                        (t.prototype.release = function (e, t) {
                            return (
                                t ?
                                    this.optimisticData
                                :   this.data).release(e);
                        }),
                        (t.prototype.identify = function (e) {
                            if ((0, g.Yk)(e)) return e.__ref;
                            try {
                                return this.policies.identify(e)[0];
                            } catch (e) {
                                !1 !== globalThis.__DEV__ && a.kG.warn(e);
                            }
                        }),
                        (t.prototype.evict = function (e) {
                            if (!e.id) {
                                if (F.call(e, 'id')) return !1;
                                e = (0, o.pi)((0, o.pi)({}, e), {
                                    id: 'ROOT_QUERY',
                                });
                            }
                            try {
                                return (
                                    ++this.txCount,
                                    this.optimisticData.evict(e, this.data)
                                );
                            } finally {
                                --this.txCount ||
                                    !1 === e.broadcast ||
                                    this.broadcastWatches();
                            }
                        }),
                        (t.prototype.reset = function (e) {
                            var t = this;
                            return (
                                this.init(),
                                m.B.reset(),
                                e && e.discardWatches ?
                                    (this.watches.forEach(function (e) {
                                        return t.maybeBroadcastWatch.forget(e);
                                    }),
                                    this.watches.clear(),
                                    (0, ee.li)(this))
                                :   this.broadcastWatches(),
                                Promise.resolve()
                            );
                        }),
                        (t.prototype.removeOptimistic = function (e) {
                            var t = this.optimisticData.removeLayer(e);
                            t !== this.optimisticData &&
                                ((this.optimisticData = t),
                                this.broadcastWatches());
                        }),
                        (t.prototype.batch = function (e) {
                            var t,
                                r = this,
                                n = e.update,
                                i = e.optimistic,
                                a = void 0 === i || i,
                                s = e.removeOptimistic,
                                u = e.onWatchUpdated,
                                c = function (e) {
                                    var i = r.data,
                                        o = r.optimisticData;
                                    ++r.txCount,
                                        e && (r.data = r.optimisticData = e);
                                    try {
                                        return (t = n(r));
                                    } finally {
                                        --r.txCount,
                                            (r.data = i),
                                            (r.optimisticData = o);
                                    }
                                },
                                l = new Set();
                            return (
                                u &&
                                    !this.txCount &&
                                    this.broadcastWatches(
                                        (0, o.pi)((0, o.pi)({}, e), {
                                            onWatchUpdated: function (e) {
                                                return l.add(e), !1;
                                            },
                                        })
                                    ),
                                'string' == typeof a ?
                                    (this.optimisticData =
                                        this.optimisticData.addLayer(a, c))
                                : !1 === a ? c(this.data)
                                : c(),
                                'string' == typeof s &&
                                    (this.optimisticData =
                                        this.optimisticData.removeLayer(s)),
                                u && l.size ?
                                    (this.broadcastWatches(
                                        (0, o.pi)((0, o.pi)({}, e), {
                                            onWatchUpdated: function (e, t) {
                                                var r = u.call(this, e, t);
                                                return (
                                                    !1 !== r && l.delete(e), r
                                                );
                                            },
                                        })
                                    ),
                                    l.size &&
                                        l.forEach(function (e) {
                                            return r.maybeBroadcastWatch.dirty(
                                                e
                                            );
                                        }))
                                :   this.broadcastWatches(e),
                                t
                            );
                        }),
                        (t.prototype.performTransaction = function (e, t) {
                            return this.batch({
                                update: e,
                                optimistic: t || null !== t,
                            });
                        }),
                        (t.prototype.transformDocument = function (e) {
                            return this.addTypenameToDocument(
                                this.addFragmentsToDocument(e)
                            );
                        }),
                        (t.prototype.broadcastWatches = function (e) {
                            var t = this;
                            this.txCount ||
                                this.watches.forEach(function (r) {
                                    return t.maybeBroadcastWatch(r, e);
                                });
                        }),
                        (t.prototype.addFragmentsToDocument = function (e) {
                            var t = this.config.fragments;
                            return t ? t.transform(e) : e;
                        }),
                        (t.prototype.addTypenameToDocument = function (e) {
                            return this.addTypename ?
                                    this.addTypenameTransform.transformDocument(
                                        e
                                    )
                                :   e;
                        }),
                        (t.prototype.broadcastWatch = function (e, t) {
                            var r = e.lastDiff,
                                n = this.diff(e);
                            (!t ||
                                (e.optimistic &&
                                    'string' == typeof t.optimistic &&
                                    (n.fromOptimisticTransaction = !0),
                                !t.onWatchUpdated ||
                                    !1 !==
                                        t.onWatchUpdated.call(
                                            this,
                                            e,
                                            n,
                                            r
                                        ))) &&
                                ((r && (0, u.D)(r.result, n.result)) ||
                                    e.callback((e.lastDiff = n), r));
                        }),
                        t
                    );
                })(p);
            !1 !== globalThis.__DEV__ &&
                (eS.prototype.getMemoryInternals = h.q4);
        },
        7321: function (e, t, r) {
            r.d(t, {
                QS: function () {
                    return c;
                },
                _v: function () {
                    return u;
                },
                ab: function () {
                    return i;
                },
                li: function () {
                    return s;
                },
            });
            var n = r(3268),
                i = new n.g7(),
                o = new WeakMap();
            function a(e) {
                var t = o.get(e);
                return (
                    t || o.set(e, (t = { vars: new Set(), dep: (0, n.dP)() })),
                    t
                );
            }
            function s(e) {
                a(e).vars.forEach(function (t) {
                    return t.forgetCache(e);
                });
            }
            function u(e) {
                a(e).vars.forEach(function (t) {
                    return t.attachCache(e);
                });
            }
            function c(e) {
                var t = new Set(),
                    r = new Set(),
                    n = function (s) {
                        if (arguments.length > 0) {
                            if (e !== s) {
                                (e = s),
                                    t.forEach(function (e) {
                                        a(e).dep.dirty(n),
                                            e.broadcastWatches &&
                                                e.broadcastWatches();
                                    });
                                var u = Array.from(r);
                                r.clear(),
                                    u.forEach(function (t) {
                                        return t(e);
                                    });
                            }
                        } else {
                            var c = i.getValue();
                            c && (o(c), a(c).dep(n));
                        }
                        return e;
                    };
                n.onNextChange = function (e) {
                    return (
                        r.add(e),
                        function () {
                            r.delete(e);
                        }
                    );
                };
                var o = (n.attachCache = function (e) {
                    return t.add(e), a(e).vars.add(n), n;
                });
                return (
                    (n.forgetCache = function (e) {
                        return t.delete(e);
                    }),
                    n
                );
            }
        },
        5950: function (e, t, r) {
            r.d(t, {
                f: function () {
                    return eY;
                },
            });
            var n,
                i,
                o = r(6936),
                a = r(6920);
            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function u(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function c(e, t, r) {
                return (
                    t && u(e.prototype, t),
                    r && u(e, r),
                    Object.defineProperty(e, 'prototype', { writable: !1 }),
                    e
                );
            }
            var l = function () {
                    return 'function' == typeof Symbol;
                },
                f = function (e) {
                    return l() && !!Symbol[e];
                },
                h = function (e) {
                    return f(e) ? Symbol[e] : '@@' + e;
                };
            l() &&
                !f('observable') &&
                (Symbol.observable = Symbol('observable'));
            var p = h('iterator'),
                d = h('observable'),
                v = h('species');
            function y(e, t) {
                var r = e[t];
                if (null != r) {
                    if ('function' != typeof r)
                        throw TypeError(r + ' is not a function');
                    return r;
                }
            }
            function m(e) {
                var t = e.constructor;
                return (
                    void 0 !== t && null === (t = t[v]) && (t = void 0),
                    void 0 !== t ? t : D
                );
            }
            function b(e) {
                b.log ?
                    b.log(e)
                :   setTimeout(function () {
                        throw e;
                    });
            }
            function g(e) {
                Promise.resolve().then(function () {
                    try {
                        e();
                    } catch (e) {
                        b(e);
                    }
                });
            }
            function k(e) {
                var t = e._cleanup;
                if (void 0 !== t) {
                    if (((e._cleanup = void 0), !t)) return;
                    try {
                        if ('function' == typeof t) t();
                        else {
                            var r = y(t, 'unsubscribe');
                            r && r.call(t);
                        }
                    } catch (e) {
                        b(e);
                    }
                }
            }
            function w(e) {
                (e._observer = void 0),
                    (e._queue = void 0),
                    (e._state = 'closed');
            }
            function _(e, t, r) {
                e._state = 'running';
                var n = e._observer;
                try {
                    var i = y(n, t);
                    switch (t) {
                        case 'next':
                            i && i.call(n, r);
                            break;
                        case 'error':
                            if ((w(e), i)) i.call(n, r);
                            else throw r;
                            break;
                        case 'complete':
                            w(e), i && i.call(n);
                    }
                } catch (e) {
                    b(e);
                }
                'closed' === e._state ?
                    k(e)
                :   'running' === e._state && (e._state = 'ready');
            }
            function O(e, t, r) {
                if ('closed' !== e._state) {
                    if ('buffering' === e._state) {
                        e._queue.push({ type: t, value: r });
                        return;
                    }
                    if ('ready' !== e._state) {
                        (e._state = 'buffering'),
                            (e._queue = [{ type: t, value: r }]),
                            g(function () {
                                return (function (e) {
                                    var t = e._queue;
                                    if (t) {
                                        (e._queue = void 0),
                                            (e._state = 'ready');
                                        for (
                                            var r = 0;
                                            r < t.length &&
                                            (_(e, t[r].type, t[r].value),
                                            'closed' !== e._state);
                                            ++r
                                        );
                                    }
                                })(e);
                            });
                        return;
                    }
                    _(e, t, r);
                }
            }
            var S = (function () {
                    function e(e, t) {
                        (this._cleanup = void 0),
                            (this._observer = e),
                            (this._queue = void 0),
                            (this._state = 'initializing');
                        var r = new E(this);
                        try {
                            this._cleanup = t.call(void 0, r);
                        } catch (e) {
                            r.error(e);
                        }
                        'initializing' === this._state &&
                            (this._state = 'ready');
                    }
                    return (
                        (e.prototype.unsubscribe = function () {
                            'closed' !== this._state && (w(this), k(this));
                        }),
                        c(e, [
                            {
                                key: 'closed',
                                get: function () {
                                    return 'closed' === this._state;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                E = (function () {
                    function e(e) {
                        this._subscription = e;
                    }
                    var t = e.prototype;
                    return (
                        (t.next = function (e) {
                            O(this._subscription, 'next', e);
                        }),
                        (t.error = function (e) {
                            O(this._subscription, 'error', e);
                        }),
                        (t.complete = function () {
                            O(this._subscription, 'complete');
                        }),
                        c(e, [
                            {
                                key: 'closed',
                                get: function () {
                                    return (
                                        'closed' === this._subscription._state
                                    );
                                },
                            },
                        ]),
                        e
                    );
                })(),
                D = (function () {
                    function e(t) {
                        if (!(this instanceof e))
                            throw TypeError(
                                'Observable cannot be called as a function'
                            );
                        if ('function' != typeof t)
                            throw TypeError(
                                'Observable initializer must be a function'
                            );
                        this._subscriber = t;
                    }
                    var t = e.prototype;
                    return (
                        (t.subscribe = function (e) {
                            return (
                                ('object' != typeof e || null === e) &&
                                    (e = {
                                        next: e,
                                        error: arguments[1],
                                        complete: arguments[2],
                                    }),
                                new S(e, this._subscriber)
                            );
                        }),
                        (t.forEach = function (e) {
                            var t = this;
                            return new Promise(function (r, n) {
                                if ('function' != typeof e) {
                                    n(TypeError(e + ' is not a function'));
                                    return;
                                }
                                function i() {
                                    o.unsubscribe(), r();
                                }
                                var o = t.subscribe({
                                    next: function (t) {
                                        try {
                                            e(t, i);
                                        } catch (e) {
                                            n(e), o.unsubscribe();
                                        }
                                    },
                                    error: n,
                                    complete: r,
                                });
                            });
                        }),
                        (t.map = function (e) {
                            var t = this;
                            if ('function' != typeof e)
                                throw TypeError(e + ' is not a function');
                            return new (m(this))(function (r) {
                                return t.subscribe({
                                    next: function (t) {
                                        try {
                                            t = e(t);
                                        } catch (e) {
                                            return r.error(e);
                                        }
                                        r.next(t);
                                    },
                                    error: function (e) {
                                        r.error(e);
                                    },
                                    complete: function () {
                                        r.complete();
                                    },
                                });
                            });
                        }),
                        (t.filter = function (e) {
                            var t = this;
                            if ('function' != typeof e)
                                throw TypeError(e + ' is not a function');
                            return new (m(this))(function (r) {
                                return t.subscribe({
                                    next: function (t) {
                                        try {
                                            if (!e(t)) return;
                                        } catch (e) {
                                            return r.error(e);
                                        }
                                        r.next(t);
                                    },
                                    error: function (e) {
                                        r.error(e);
                                    },
                                    complete: function () {
                                        r.complete();
                                    },
                                });
                            });
                        }),
                        (t.reduce = function (e) {
                            var t = this;
                            if ('function' != typeof e)
                                throw TypeError(e + ' is not a function');
                            var r = m(this),
                                n = arguments.length > 1,
                                i = !1,
                                o = arguments[1],
                                a = o;
                            return new r(function (r) {
                                return t.subscribe({
                                    next: function (t) {
                                        var o = !i;
                                        if (((i = !0), !o || n))
                                            try {
                                                a = e(a, t);
                                            } catch (e) {
                                                return r.error(e);
                                            }
                                        else a = t;
                                    },
                                    error: function (e) {
                                        r.error(e);
                                    },
                                    complete: function () {
                                        if (!i && !n)
                                            return r.error(
                                                TypeError(
                                                    'Cannot reduce an empty sequence'
                                                )
                                            );
                                        r.next(a), r.complete();
                                    },
                                });
                            });
                        }),
                        (t.concat = function () {
                            for (
                                var e = this,
                                    t = arguments.length,
                                    r = Array(t),
                                    n = 0;
                                n < t;
                                n++
                            )
                                r[n] = arguments[n];
                            var i = m(this);
                            return new i(function (t) {
                                var n,
                                    o = 0;
                                return (
                                    (function e(a) {
                                        n = a.subscribe({
                                            next: function (e) {
                                                t.next(e);
                                            },
                                            error: function (e) {
                                                t.error(e);
                                            },
                                            complete: function () {
                                                o === r.length ?
                                                    ((n = void 0), t.complete())
                                                :   e(i.from(r[o++]));
                                            },
                                        });
                                    })(e),
                                    function () {
                                        n && (n.unsubscribe(), (n = void 0));
                                    }
                                );
                            });
                        }),
                        (t.flatMap = function (e) {
                            var t = this;
                            if ('function' != typeof e)
                                throw TypeError(e + ' is not a function');
                            var r = m(this);
                            return new r(function (n) {
                                var i = [],
                                    o = t.subscribe({
                                        next: function (t) {
                                            if (e)
                                                try {
                                                    t = e(t);
                                                } catch (e) {
                                                    return n.error(e);
                                                }
                                            var o = r.from(t).subscribe({
                                                next: function (e) {
                                                    n.next(e);
                                                },
                                                error: function (e) {
                                                    n.error(e);
                                                },
                                                complete: function () {
                                                    var e = i.indexOf(o);
                                                    e >= 0 && i.splice(e, 1),
                                                        a();
                                                },
                                            });
                                            i.push(o);
                                        },
                                        error: function (e) {
                                            n.error(e);
                                        },
                                        complete: function () {
                                            a();
                                        },
                                    });
                                function a() {
                                    o.closed && 0 === i.length && n.complete();
                                }
                                return function () {
                                    i.forEach(function (e) {
                                        return e.unsubscribe();
                                    }),
                                        o.unsubscribe();
                                };
                            });
                        }),
                        (t[d] = function () {
                            return this;
                        }),
                        (e.from = function (t) {
                            var r = 'function' == typeof this ? this : e;
                            if (null == t)
                                throw TypeError(t + ' is not an object');
                            var n = y(t, d);
                            if (n) {
                                var i = n.call(t);
                                if (Object(i) !== i)
                                    throw TypeError(i + ' is not an object');
                                return i instanceof D && i.constructor === r ?
                                        i
                                    :   new r(function (e) {
                                            return i.subscribe(e);
                                        });
                            }
                            if (f('iterator') && (n = y(t, p)))
                                return new r(function (e) {
                                    g(function () {
                                        if (!e.closed) {
                                            for (
                                                var r,
                                                    i = (function (e, t) {
                                                        var r =
                                                            ('undefined' !=
                                                                typeof Symbol &&
                                                                e[
                                                                    Symbol
                                                                        .iterator
                                                                ]) ||
                                                            e['@@iterator'];
                                                        if (r)
                                                            return (r =
                                                                r.call(
                                                                    e
                                                                )).next.bind(r);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (r = (function (
                                                                e,
                                                                t
                                                            ) {
                                                                if (e) {
                                                                    if (
                                                                        'string' ==
                                                                        typeof e
                                                                    )
                                                                        return s(
                                                                            e,
                                                                            void 0
                                                                        );
                                                                    var r =
                                                                        Object.prototype.toString
                                                                            .call(
                                                                                e
                                                                            )
                                                                            .slice(
                                                                                8,
                                                                                -1
                                                                            );
                                                                    if (
                                                                        ('Object' ===
                                                                            r &&
                                                                            e.constructor &&
                                                                            (r =
                                                                                e
                                                                                    .constructor
                                                                                    .name),
                                                                        'Map' ===
                                                                            r ||
                                                                            'Set' ===
                                                                                r)
                                                                    )
                                                                        return Array.from(
                                                                            e
                                                                        );
                                                                    if (
                                                                        'Arguments' ===
                                                                            r ||
                                                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                            r
                                                                        )
                                                                    )
                                                                        return s(
                                                                            e,
                                                                            void 0
                                                                        );
                                                                }
                                                            })(e))
                                                        ) {
                                                            r && (e = r);
                                                            var n = 0;
                                                            return function () {
                                                                return (
                                                                        n >=
                                                                            e.length
                                                                    ) ?
                                                                        {
                                                                            done: !0,
                                                                        }
                                                                    :   {
                                                                            done: !1,
                                                                            value: e[
                                                                                n++
                                                                            ],
                                                                        };
                                                            };
                                                        }
                                                        throw TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                        );
                                                    })(n.call(t));
                                                !(r = i()).done;

                                            ) {
                                                var o = r.value;
                                                if ((e.next(o), e.closed))
                                                    return;
                                            }
                                            e.complete();
                                        }
                                    });
                                });
                            if (Array.isArray(t))
                                return new r(function (e) {
                                    g(function () {
                                        if (!e.closed) {
                                            for (var r = 0; r < t.length; ++r)
                                                if ((e.next(t[r]), e.closed))
                                                    return;
                                            e.complete();
                                        }
                                    });
                                });
                            throw TypeError(t + ' is not observable');
                        }),
                        (e.of = function () {
                            for (
                                var t = arguments.length, r = Array(t), n = 0;
                                n < t;
                                n++
                            )
                                r[n] = arguments[n];
                            return new ('function' == typeof this ? this : e)(
                                function (e) {
                                    g(function () {
                                        if (!e.closed) {
                                            for (var t = 0; t < r.length; ++t)
                                                if ((e.next(r[t]), e.closed))
                                                    return;
                                            e.complete();
                                        }
                                    });
                                }
                            );
                        }),
                        c(e, null, [
                            {
                                key: v,
                                get: function () {
                                    return this;
                                },
                            },
                        ]),
                        e
                    );
                })();
            l() &&
                Object.defineProperty(D, Symbol('extensions'), {
                    value: { symbol: d, hostReportError: b },
                    configurable: !0,
                });
            var T = r(2965);
            function x(e, t) {
                return t ? t(e) : D.of();
            }
            function q(e) {
                return 'function' == typeof e ? new R(e) : e;
            }
            function F(e) {
                return e.request.length <= 1;
            }
            var R = (function () {
                    function e(e) {
                        e && (this.request = e);
                    }
                    return (
                        (e.empty = function () {
                            return new e(function () {
                                return D.of();
                            });
                        }),
                        (e.from = function (t) {
                            return 0 === t.length ?
                                    e.empty()
                                :   t.map(q).reduce(function (e, t) {
                                        return e.concat(t);
                                    });
                        }),
                        (e.split = function (t, r, n) {
                            var i = q(r),
                                o = q(n || new e(x));
                            return Object.assign(
                                new e(
                                    F(i) && F(o) ?
                                        function (e) {
                                            return t(e) ?
                                                    i.request(e) || D.of()
                                                :   o.request(e) || D.of();
                                        }
                                    :   function (e, r) {
                                            return t(e) ?
                                                    i.request(e, r) || D.of()
                                                :   o.request(e, r) || D.of();
                                        }
                                ),
                                { left: i, right: o }
                            );
                        }),
                        (e.execute = function (e, t) {
                            var r, n, i, s;
                            return (
                                e.request(
                                    ((i = t.context),
                                    (n = {
                                        variables:
                                            (r = (function (e) {
                                                for (
                                                    var t = [
                                                            'query',
                                                            'operationName',
                                                            'variables',
                                                            'extensions',
                                                            'context',
                                                        ],
                                                        r = 0,
                                                        n = Object.keys(e);
                                                    r < n.length;
                                                    r++
                                                ) {
                                                    var i = n[r];
                                                    if (0 > t.indexOf(i))
                                                        throw (0, a._K)(43, i);
                                                }
                                                return e;
                                            })(t)).variables || {},
                                        extensions: r.extensions || {},
                                        operationName: r.operationName,
                                        query: r.query,
                                    }).operationName ||
                                        (n.operationName =
                                            'string' != typeof n.query ?
                                                (0, T.rY)(n.query) || void 0
                                            :   ''),
                                    (s = (0, o.pi)({}, i)),
                                    Object.defineProperty(n, 'setContext', {
                                        enumerable: !1,
                                        value: function (e) {
                                            s =
                                                'function' == typeof e ?
                                                    (0, o.pi)(
                                                        (0, o.pi)({}, s),
                                                        e(s)
                                                    )
                                                :   (0, o.pi)(
                                                        (0, o.pi)({}, s),
                                                        e
                                                    );
                                        },
                                    }),
                                    Object.defineProperty(n, 'getContext', {
                                        enumerable: !1,
                                        value: function () {
                                            return (0, o.pi)({}, s);
                                        },
                                    }),
                                    n)
                                ) || D.of()
                            );
                        }),
                        (e.concat = function (t, r) {
                            var n = q(t);
                            if (F(n))
                                return (
                                    !1 !== globalThis.__DEV__ &&
                                        a.kG.warn(35, n),
                                    n
                                );
                            var i = q(r);
                            return Object.assign(
                                new e(
                                    F(i) ?
                                        function (e) {
                                            return (
                                                n.request(e, function (e) {
                                                    return (
                                                        i.request(e) || D.of()
                                                    );
                                                }) || D.of()
                                            );
                                        }
                                    :   function (e, t) {
                                            return (
                                                n.request(e, function (e) {
                                                    return (
                                                        i.request(e, t) ||
                                                        D.of()
                                                    );
                                                }) || D.of()
                                            );
                                        }
                                ),
                                { left: n, right: i }
                            );
                        }),
                        (e.prototype.split = function (t, r, n) {
                            return this.concat(e.split(t, r, n || new e(x)));
                        }),
                        (e.prototype.concat = function (t) {
                            return e.concat(this, t);
                        }),
                        (e.prototype.request = function (e, t) {
                            throw (0, a._K)(36);
                        }),
                        (e.prototype.onError = function (e, t) {
                            if (t && t.error) return t.error(e), !1;
                            throw e;
                        }),
                        (e.prototype.setOnError = function (e) {
                            return (this.onError = e), this;
                        }),
                        e
                    );
                })(),
                I = R.execute,
                P = r(7852),
                j = r(247),
                Q = function (e, t) {
                    var r;
                    try {
                        r = JSON.stringify(e);
                    } catch (e) {
                        var n = (0, a._K)(39, t, e.message);
                        throw ((n.parseError = e), n);
                    }
                    return r;
                },
                C = r(6877);
            function M(e) {
                var t = {
                    next: function () {
                        return e.read();
                    },
                };
                return (
                    C.DN &&
                        (t[Symbol.asyncIterator] = function () {
                            return this;
                        }),
                    t
                );
            }
            var A = function (e, t, r) {
                    var n = Error(r);
                    throw (
                        ((n.name = 'ServerError'),
                        (n.response = e),
                        (n.statusCode = e.status),
                        (n.result = t),
                        n)
                    );
                },
                N = r(1306),
                V = r(1884),
                L = r(6027),
                z = r(3246);
            function G(e) {
                return 'incremental' in e;
            }
            function B(e, t) {
                var r = e,
                    n = new z.w0();
                return (
                    G(t) &&
                        (0, L.O)(t.incremental) &&
                        t.incremental.forEach(function (e) {
                            for (
                                var t = e.data, i = e.path, o = i.length - 1;
                                o >= 0;
                                --o
                            ) {
                                var a = i[o],
                                    s = isNaN(+a) ? {} : [];
                                (s[a] = t), (t = s);
                            }
                            r = n.merge(r, t);
                        }),
                    r
                );
            }
            var W = Object.prototype.hasOwnProperty;
            function Y(e, t) {
                e.status >= 300 &&
                    A(
                        e,
                        (function () {
                            try {
                                return JSON.parse(t);
                            } catch (e) {
                                return t;
                            }
                        })(),
                        'Response not successful: Received status code '.concat(
                            e.status
                        )
                    );
                try {
                    return JSON.parse(t);
                } catch (r) {
                    throw (
                        ((r.name = 'ServerParseError'),
                        (r.response = e),
                        (r.statusCode = e.status),
                        (r.bodyText = t),
                        r)
                    );
                }
            }
            var U = function (e) {
                    if (!e && 'undefined' == typeof fetch) throw (0, a._K)(37);
                },
                K = r(3631),
                J = {
                    http: {
                        includeQuery: !0,
                        includeExtensions: !1,
                        preserveHeaderCase: !1,
                    },
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                    },
                    options: { method: 'POST' },
                },
                Z = function (e, t) {
                    return t(e);
                };
            function $(e) {
                return new D(function (t) {
                    t.error(e);
                });
            }
            var H = r(5537),
                X = r(661),
                ee = (0, a.wY)(function () {
                    return fetch;
                }),
                et = function (e) {
                    void 0 === e && (e = {});
                    var t = e.uri,
                        r = void 0 === t ? '/graphql' : t,
                        n = e.fetch,
                        i = e.print,
                        s = void 0 === i ? Z : i,
                        u = e.includeExtensions,
                        c = e.preserveHeaderCase,
                        l = e.useGETForQueries,
                        f = e.includeUnusedVariables,
                        h = void 0 !== f && f,
                        p = (0, o._T)(e, [
                            'uri',
                            'fetch',
                            'print',
                            'includeExtensions',
                            'preserveHeaderCase',
                            'useGETForQueries',
                            'includeUnusedVariables',
                        ]);
                    !1 !== globalThis.__DEV__ && U(n || ee);
                    var d = {
                        http: { includeExtensions: u, preserveHeaderCase: c },
                        options: p.fetchOptions,
                        credentials: p.credentials,
                        headers: p.headers,
                    };
                    return new R(function (e) {
                        var t,
                            i,
                            u,
                            c,
                            f,
                            p,
                            v,
                            y,
                            m =
                                ((t = e),
                                (i = r),
                                t.getContext().uri ||
                                    ('function' == typeof i ?
                                        i(t)
                                    :   i || '/graphql')),
                            b = e.getContext(),
                            g = {};
                        if (b.clientAwareness) {
                            var k = b.clientAwareness,
                                w = k.name,
                                _ = k.version;
                            w && (g['apollographql-client-name'] = w),
                                _ && (g['apollographql-client-version'] = _);
                        }
                        var O = (0, o.pi)((0, o.pi)({}, g), b.headers),
                            S = {
                                http: b.http,
                                options: b.fetchOptions,
                                credentials: b.credentials,
                                headers: O,
                            };
                        if ((0, j.FS)(['client'], e.query)) {
                            var E = (0, X.ob)(e.query);
                            if (!E)
                                return $(
                                    Error(
                                        'HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`.'
                                    )
                                );
                            e.query = E;
                        }
                        var x = (function (e, t) {
                                for (
                                    var r = [], n = 2;
                                    n < arguments.length;
                                    n++
                                )
                                    r[n - 2] = arguments[n];
                                var i = {},
                                    a = {};
                                r.forEach(function (e) {
                                    (i = (0, o.pi)(
                                        (0, o.pi)((0, o.pi)({}, i), e.options),
                                        {
                                            headers: (0, o.pi)(
                                                (0, o.pi)({}, i.headers),
                                                e.headers
                                            ),
                                        }
                                    )),
                                        e.credentials &&
                                            (i.credentials = e.credentials),
                                        (a = (0, o.pi)(
                                            (0, o.pi)({}, a),
                                            e.http
                                        ));
                                }),
                                    i.headers &&
                                        (i.headers = (function (e, t) {
                                            if (!t) {
                                                var r = Object.create(null);
                                                return (
                                                    Object.keys(
                                                        Object(e)
                                                    ).forEach(function (t) {
                                                        r[t.toLowerCase()] =
                                                            e[t];
                                                    }),
                                                    r
                                                );
                                            }
                                            var n = Object.create(null);
                                            Object.keys(Object(e)).forEach(
                                                function (t) {
                                                    n[t.toLowerCase()] = {
                                                        originalName: t,
                                                        value: e[t],
                                                    };
                                                }
                                            );
                                            var i = Object.create(null);
                                            return (
                                                Object.keys(n).forEach(
                                                    function (e) {
                                                        i[n[e].originalName] =
                                                            n[e].value;
                                                    }
                                                ),
                                                i
                                            );
                                        })(i.headers, a.preserveHeaderCase));
                                var s = e.operationName,
                                    u = e.extensions,
                                    c = e.variables,
                                    l = e.query,
                                    f = { operationName: s, variables: c };
                                return (
                                    a.includeExtensions && (f.extensions = u),
                                    a.includeQuery && (f.query = t(l, K.S)),
                                    { options: i, body: f }
                                );
                            })(e, s, J, d, S),
                            q = x.options,
                            F = x.body;
                        F.variables &&
                            !h &&
                            (F.variables =
                                ((u = F.variables),
                                (c = e.query),
                                (f = (0, o.pi)({}, u)),
                                (p = new Set(Object.keys(u))),
                                (0, H.Vn)(c, {
                                    Variable: function (e, t, r) {
                                        r &&
                                            'VariableDefinition' !== r.kind &&
                                            p.delete(e.name.value);
                                    },
                                }),
                                p.forEach(function (e) {
                                    delete f[e];
                                }),
                                f)),
                            q.signal ||
                                'undefined' == typeof AbortController ||
                                ((y = new AbortController()),
                                (q.signal = y.signal));
                        var R =
                                'OperationDefinition' ===
                                    (v = (0, T.p$)(e.query)).kind &&
                                'subscription' === v.operation,
                            I = (0, j.FS)(['defer'], e.query);
                        if (
                            (l &&
                                !e.query.definitions.some(function (e) {
                                    return (
                                        'OperationDefinition' === e.kind &&
                                        'mutation' === e.operation
                                    );
                                }) &&
                                (q.method = 'GET'),
                            I || R)
                        ) {
                            q.headers = q.headers || {};
                            var P = 'multipart/mixed;';
                            R &&
                                I &&
                                !1 !== globalThis.__DEV__ &&
                                a.kG.warn(38),
                                R ?
                                    (P +=
                                        'boundary=graphql;subscriptionSpec=1.0,application/json')
                                :   I &&
                                    (P +=
                                        'deferSpec=20220824,application/json'),
                                (q.headers.accept = P);
                        }
                        if ('GET' === q.method) {
                            var L = (function (e, t) {
                                    var r = [],
                                        n = function (e, t) {
                                            r.push(
                                                ''
                                                    .concat(e, '=')
                                                    .concat(
                                                        encodeURIComponent(t)
                                                    )
                                            );
                                        };
                                    if (
                                        ('query' in t && n('query', t.query),
                                        t.operationName &&
                                            n('operationName', t.operationName),
                                        t.variables)
                                    ) {
                                        var i = void 0;
                                        try {
                                            i = Q(t.variables, 'Variables map');
                                        } catch (e) {
                                            return { parseError: e };
                                        }
                                        n('variables', i);
                                    }
                                    if (t.extensions) {
                                        var o = void 0;
                                        try {
                                            o = Q(
                                                t.extensions,
                                                'Extensions map'
                                            );
                                        } catch (e) {
                                            return { parseError: e };
                                        }
                                        n('extensions', o);
                                    }
                                    var a = '',
                                        s = e,
                                        u = e.indexOf('#');
                                    -1 !== u &&
                                        ((a = e.substr(u)),
                                        (s = e.substr(0, u)));
                                    var c = -1 === s.indexOf('?') ? '?' : '&';
                                    return { newURI: s + c + r.join('&') + a };
                                })(m, F),
                                z = L.newURI,
                                G = L.parseError;
                            if (G) return $(G);
                            m = z;
                        } else
                            try {
                                q.body = Q(F, 'Payload');
                            } catch (e) {
                                return $(e);
                            }
                        return new D(function (t) {
                            var r =
                                    n ||
                                    (0, a.wY)(function () {
                                        return fetch;
                                    }) ||
                                    ee,
                                i = t.next.bind(t);
                            return (
                                r(m, q)
                                    .then(function (t) {
                                        e.setContext({ response: t });
                                        var r,
                                            n =
                                                (
                                                    null === (r = t.headers) ||
                                                    void 0 === r
                                                ) ?
                                                    void 0
                                                :   r.get('content-type');
                                        return (
                                                null !== n &&
                                                    /^multipart\/mixed/i.test(n)
                                            ) ?
                                                (function (e, t) {
                                                    var r;
                                                    return (0, o.mG)(
                                                        this,
                                                        void 0,
                                                        void 0,
                                                        function () {
                                                            var n,
                                                                i,
                                                                a,
                                                                s,
                                                                u,
                                                                c,
                                                                l,
                                                                f,
                                                                h,
                                                                p,
                                                                d,
                                                                v,
                                                                y,
                                                                m,
                                                                b,
                                                                g,
                                                                k,
                                                                w,
                                                                _,
                                                                O,
                                                                S,
                                                                E;
                                                            return (0, o.Jh)(
                                                                this,
                                                                function (D) {
                                                                    switch (
                                                                        D.label
                                                                    ) {
                                                                        case 0:
                                                                            if (
                                                                                void 0 ===
                                                                                TextDecoder
                                                                            )
                                                                                throw Error(
                                                                                    'TextDecoder must be defined in the environment: please import a polyfill.'
                                                                                );
                                                                            (n =
                                                                                new TextDecoder(
                                                                                    'utf-8'
                                                                                )),
                                                                                (i =

                                                                                        (
                                                                                            null ===
                                                                                                (r =
                                                                                                    e.headers) ||
                                                                                            void 0 ===
                                                                                                r
                                                                                        ) ?
                                                                                            void 0
                                                                                        :   r.get(
                                                                                                'content-type'
                                                                                            )),
                                                                                (a =
                                                                                    'boundary='),
                                                                                (s =
                                                                                    (
                                                                                        (
                                                                                            null ==
                                                                                            i
                                                                                        ) ?
                                                                                            void 0
                                                                                        :   i.includes(
                                                                                                a
                                                                                            )
                                                                                    ) ?
                                                                                        (
                                                                                            null ==
                                                                                            i
                                                                                        ) ?
                                                                                            void 0
                                                                                        :   i
                                                                                                .substring(
                                                                                                    ((
                                                                                                        null ==
                                                                                                        i
                                                                                                    ) ?
                                                                                                        void 0
                                                                                                    :   i.indexOf(
                                                                                                            a
                                                                                                        )) +
                                                                                                        a.length
                                                                                                )
                                                                                                .replace(
                                                                                                    /['"]/g,
                                                                                                    ''
                                                                                                )
                                                                                                .replace(
                                                                                                    /\;(.*)/gm,
                                                                                                    ''
                                                                                                )
                                                                                                .trim()
                                                                                    :   '-'),
                                                                                (u =
                                                                                    '\r\n--'.concat(
                                                                                        s
                                                                                    )),
                                                                                (c =
                                                                                    ''),
                                                                                (l =
                                                                                    (function (
                                                                                        e
                                                                                    ) {
                                                                                        var t,
                                                                                            r,
                                                                                            n,
                                                                                            i,
                                                                                            o,
                                                                                            a,
                                                                                            s =
                                                                                                e;
                                                                                        if (
                                                                                            (e.body &&
                                                                                                (s =
                                                                                                    e.body),
                                                                                            (t =
                                                                                                s),
                                                                                            C.DN &&
                                                                                                t[
                                                                                                    Symbol
                                                                                                        .asyncIterator
                                                                                                ])
                                                                                        )
                                                                                            return (
                                                                                                (n =
                                                                                                    s[
                                                                                                        Symbol
                                                                                                            .asyncIterator
                                                                                                    ]()),
                                                                                                ((r =
                                                                                                    {
                                                                                                        next: function () {
                                                                                                            return n.next();
                                                                                                        },
                                                                                                    })[
                                                                                                    Symbol.asyncIterator
                                                                                                ] =
                                                                                                    function () {
                                                                                                        return this;
                                                                                                    }),
                                                                                                r
                                                                                            );
                                                                                        if (
                                                                                            s.getReader
                                                                                        )
                                                                                            return M(
                                                                                                s.getReader()
                                                                                            );
                                                                                        if (
                                                                                            s.stream
                                                                                        )
                                                                                            return M(
                                                                                                s
                                                                                                    .stream()
                                                                                                    .getReader()
                                                                                            );
                                                                                        if (
                                                                                            s.arrayBuffer
                                                                                        )
                                                                                            return (
                                                                                                (i =
                                                                                                    s.arrayBuffer()),
                                                                                                (o =
                                                                                                    !1),
                                                                                                (a =
                                                                                                    {
                                                                                                        next: function () {
                                                                                                            return (
                                                                                                                    o
                                                                                                                ) ?
                                                                                                                    Promise.resolve(
                                                                                                                        {
                                                                                                                            value: void 0,
                                                                                                                            done: !0,
                                                                                                                        }
                                                                                                                    )
                                                                                                                :   ((o =
                                                                                                                        !0),
                                                                                                                    new Promise(
                                                                                                                        function (
                                                                                                                            e,
                                                                                                                            t
                                                                                                                        ) {
                                                                                                                            i.then(
                                                                                                                                function (
                                                                                                                                    t
                                                                                                                                ) {
                                                                                                                                    e(
                                                                                                                                        {
                                                                                                                                            value: t,
                                                                                                                                            done: !1,
                                                                                                                                        }
                                                                                                                                    );
                                                                                                                                }
                                                                                                                            ).catch(
                                                                                                                                t
                                                                                                                            );
                                                                                                                        }
                                                                                                                    ));
                                                                                                        },
                                                                                                    }),
                                                                                                C.DN &&
                                                                                                    (a[
                                                                                                        Symbol.asyncIterator
                                                                                                    ] =
                                                                                                        function () {
                                                                                                            return this;
                                                                                                        }),
                                                                                                a
                                                                                            );
                                                                                        if (
                                                                                            s.pipe
                                                                                        )
                                                                                            return (function (
                                                                                                e
                                                                                            ) {
                                                                                                var t =
                                                                                                        null,
                                                                                                    r =
                                                                                                        null,
                                                                                                    n =
                                                                                                        !1,
                                                                                                    i =
                                                                                                        [],
                                                                                                    o =
                                                                                                        [];
                                                                                                function a(
                                                                                                    e
                                                                                                ) {
                                                                                                    if (
                                                                                                        !r
                                                                                                    ) {
                                                                                                        if (
                                                                                                            o.length
                                                                                                        ) {
                                                                                                            var t =
                                                                                                                o.shift();
                                                                                                            if (
                                                                                                                Array.isArray(
                                                                                                                    t
                                                                                                                ) &&
                                                                                                                t[0]
                                                                                                            )
                                                                                                                return t[0](
                                                                                                                    {
                                                                                                                        value: e,
                                                                                                                        done: !1,
                                                                                                                    }
                                                                                                                );
                                                                                                        }
                                                                                                        i.push(
                                                                                                            e
                                                                                                        );
                                                                                                    }
                                                                                                }
                                                                                                function s(
                                                                                                    e
                                                                                                ) {
                                                                                                    (r =
                                                                                                        e),
                                                                                                        o
                                                                                                            .slice()
                                                                                                            .forEach(
                                                                                                                function (
                                                                                                                    t
                                                                                                                ) {
                                                                                                                    t[1](
                                                                                                                        e
                                                                                                                    );
                                                                                                                }
                                                                                                            ),
                                                                                                        t &&
                                                                                                            t();
                                                                                                }
                                                                                                function u() {
                                                                                                    (n =
                                                                                                        !0),
                                                                                                        o
                                                                                                            .slice()
                                                                                                            .forEach(
                                                                                                                function (
                                                                                                                    e
                                                                                                                ) {
                                                                                                                    e[0](
                                                                                                                        {
                                                                                                                            value: void 0,
                                                                                                                            done: !0,
                                                                                                                        }
                                                                                                                    );
                                                                                                                }
                                                                                                            ),
                                                                                                        t &&
                                                                                                            t();
                                                                                                }
                                                                                                (t =
                                                                                                    function () {
                                                                                                        (t =
                                                                                                            null),
                                                                                                            e.removeListener(
                                                                                                                'data',
                                                                                                                a
                                                                                                            ),
                                                                                                            e.removeListener(
                                                                                                                'error',
                                                                                                                s
                                                                                                            ),
                                                                                                            e.removeListener(
                                                                                                                'end',
                                                                                                                u
                                                                                                            ),
                                                                                                            e.removeListener(
                                                                                                                'finish',
                                                                                                                u
                                                                                                            ),
                                                                                                            e.removeListener(
                                                                                                                'close',
                                                                                                                u
                                                                                                            );
                                                                                                    }),
                                                                                                    e.on(
                                                                                                        'data',
                                                                                                        a
                                                                                                    ),
                                                                                                    e.on(
                                                                                                        'error',
                                                                                                        s
                                                                                                    ),
                                                                                                    e.on(
                                                                                                        'end',
                                                                                                        u
                                                                                                    ),
                                                                                                    e.on(
                                                                                                        'finish',
                                                                                                        u
                                                                                                    ),
                                                                                                    e.on(
                                                                                                        'close',
                                                                                                        u
                                                                                                    );
                                                                                                var c =
                                                                                                    {
                                                                                                        next: function () {
                                                                                                            return new Promise(
                                                                                                                function (
                                                                                                                    e,
                                                                                                                    t
                                                                                                                ) {
                                                                                                                    return (
                                                                                                                        (
                                                                                                                            r
                                                                                                                        ) ?
                                                                                                                            t(
                                                                                                                                r
                                                                                                                            )
                                                                                                                        : (
                                                                                                                            i.length
                                                                                                                        ) ?
                                                                                                                            e(
                                                                                                                                {
                                                                                                                                    value: i.shift(),
                                                                                                                                    done: !1,
                                                                                                                                }
                                                                                                                            )
                                                                                                                        : (
                                                                                                                            n
                                                                                                                        ) ?
                                                                                                                            e(
                                                                                                                                {
                                                                                                                                    value: void 0,
                                                                                                                                    done: !0,
                                                                                                                                }
                                                                                                                            )
                                                                                                                        :   void o.push(
                                                                                                                                [
                                                                                                                                    e,
                                                                                                                                    t,
                                                                                                                                ]
                                                                                                                            )
                                                                                                                    );
                                                                                                                }
                                                                                                            );
                                                                                                        },
                                                                                                    };
                                                                                                return (
                                                                                                    C.DN &&
                                                                                                        (c[
                                                                                                            Symbol.asyncIterator
                                                                                                        ] =
                                                                                                            function () {
                                                                                                                return this;
                                                                                                            }),
                                                                                                    c
                                                                                                );
                                                                                            })(
                                                                                                s
                                                                                            );
                                                                                        throw Error(
                                                                                            'Unknown body type for responseIterator. Please pass a streamable response.'
                                                                                        );
                                                                                    })(
                                                                                        e
                                                                                    )),
                                                                                (f =
                                                                                    !0),
                                                                                (D.label = 1);
                                                                        case 1:
                                                                            if (
                                                                                !f
                                                                            )
                                                                                return [
                                                                                    3,
                                                                                    3,
                                                                                ];
                                                                            return [
                                                                                4,
                                                                                l.next(),
                                                                            ];
                                                                        case 2:
                                                                            for (
                                                                                p =
                                                                                    (h =
                                                                                        D.sent())
                                                                                        .value,
                                                                                    d =
                                                                                        h.done,
                                                                                    v =

                                                                                            (
                                                                                                'string' ==
                                                                                                typeof p
                                                                                            ) ?
                                                                                                p
                                                                                            :   n.decode(
                                                                                                    p
                                                                                                ),
                                                                                    y =
                                                                                        c.length -
                                                                                        u.length +
                                                                                        1,
                                                                                    f =
                                                                                        !d,
                                                                                    c +=
                                                                                        v,
                                                                                    m =
                                                                                        c.indexOf(
                                                                                            u,
                                                                                            y
                                                                                        );
                                                                                m >
                                                                                -1;

                                                                            ) {
                                                                                if (
                                                                                    ((b =
                                                                                        void 0),
                                                                                    (b =
                                                                                        (S =
                                                                                            [
                                                                                                c.slice(
                                                                                                    0,
                                                                                                    m
                                                                                                ),
                                                                                                c.slice(
                                                                                                    m +
                                                                                                        u.length
                                                                                                ),
                                                                                            ])[0]),
                                                                                    (c =
                                                                                        S[1]),
                                                                                    (g =
                                                                                        b.indexOf(
                                                                                            '\r\n\r\n'
                                                                                        )),
                                                                                    (k =
                                                                                        (function (
                                                                                            e
                                                                                        ) {
                                                                                            var t =
                                                                                                {};
                                                                                            return (
                                                                                                e
                                                                                                    .split(
                                                                                                        '\n'
                                                                                                    )
                                                                                                    .forEach(
                                                                                                        function (
                                                                                                            e
                                                                                                        ) {
                                                                                                            var r =
                                                                                                                e.indexOf(
                                                                                                                    ':'
                                                                                                                );
                                                                                                            if (
                                                                                                                r >
                                                                                                                -1
                                                                                                            ) {
                                                                                                                var n =
                                                                                                                        e
                                                                                                                            .slice(
                                                                                                                                0,
                                                                                                                                r
                                                                                                                            )
                                                                                                                            .trim()
                                                                                                                            .toLowerCase(),
                                                                                                                    i =
                                                                                                                        e
                                                                                                                            .slice(
                                                                                                                                r +
                                                                                                                                    1
                                                                                                                            )
                                                                                                                            .trim();
                                                                                                                t[
                                                                                                                    n
                                                                                                                ] =
                                                                                                                    i;
                                                                                                            }
                                                                                                        }
                                                                                                    ),
                                                                                                t
                                                                                            );
                                                                                        })(
                                                                                            b.slice(
                                                                                                0,
                                                                                                g
                                                                                            )
                                                                                        )[
                                                                                            'content-type'
                                                                                        ]) &&
                                                                                        -1 ===
                                                                                            k
                                                                                                .toLowerCase()
                                                                                                .indexOf(
                                                                                                    'application/json'
                                                                                                ))
                                                                                )
                                                                                    throw Error(
                                                                                        'Unsupported patch content type: application/json is required.'
                                                                                    );
                                                                                if (
                                                                                    (w =
                                                                                        b.slice(
                                                                                            g
                                                                                        ))
                                                                                ) {
                                                                                    if (
                                                                                        Object.keys(
                                                                                            (_ =
                                                                                                Y(
                                                                                                    e,
                                                                                                    w
                                                                                                ))
                                                                                        )
                                                                                            .length >
                                                                                            1 ||
                                                                                        'data' in
                                                                                            _ ||
                                                                                        'incremental' in
                                                                                            _ ||
                                                                                        'errors' in
                                                                                            _ ||
                                                                                        'payload' in
                                                                                            _
                                                                                    )
                                                                                        (
                                                                                            (0,
                                                                                            V.s)(
                                                                                                _
                                                                                            ) &&
                                                                                            'payload' in
                                                                                                _
                                                                                        ) ?
                                                                                            ((O =
                                                                                                {}),
                                                                                            'payload' in
                                                                                                _ &&
                                                                                                (O =
                                                                                                    (0,
                                                                                                    o.pi)(
                                                                                                        {},
                                                                                                        _.payload
                                                                                                    )),
                                                                                            'errors' in
                                                                                                _ &&
                                                                                                (O =
                                                                                                    (0,
                                                                                                    o.pi)(
                                                                                                        (0,
                                                                                                        o.pi)(
                                                                                                            {},
                                                                                                            O
                                                                                                        ),
                                                                                                        {
                                                                                                            extensions:
                                                                                                                (0,
                                                                                                                o.pi)(
                                                                                                                    (0,
                                                                                                                    o.pi)(
                                                                                                                        {},
                                                                                                                        (
                                                                                                                            'extensions' in
                                                                                                                                O
                                                                                                                        ) ?
                                                                                                                            O.extensions
                                                                                                                        :   null
                                                                                                                    ),
                                                                                                                    (((E =
                                                                                                                        {})[
                                                                                                                        N.YG
                                                                                                                    ] =
                                                                                                                        _.errors),
                                                                                                                    E)
                                                                                                                ),
                                                                                                        }
                                                                                                    )),
                                                                                            t(
                                                                                                O
                                                                                            ))
                                                                                        :   t(
                                                                                                _
                                                                                            );
                                                                                    else if (
                                                                                        1 ===
                                                                                            Object.keys(
                                                                                                _
                                                                                            )
                                                                                                .length &&
                                                                                        'hasNext' in
                                                                                            _ &&
                                                                                        !_.hasNext
                                                                                    )
                                                                                        return [
                                                                                            2,
                                                                                        ];
                                                                                }
                                                                                m =
                                                                                    c.indexOf(
                                                                                        u
                                                                                    );
                                                                            }
                                                                            return [
                                                                                3,
                                                                                1,
                                                                            ];
                                                                        case 3:
                                                                            return [
                                                                                2,
                                                                            ];
                                                                    }
                                                                }
                                                            );
                                                        }
                                                    );
                                                })(t, i)
                                            :   t
                                                    .text()
                                                    .then(function (e) {
                                                        return Y(t, e);
                                                    })
                                                    .then(function (r) {
                                                        return (
                                                            Array.isArray(r) ||
                                                                W.call(
                                                                    r,
                                                                    'data'
                                                                ) ||
                                                                W.call(
                                                                    r,
                                                                    'errors'
                                                                ) ||
                                                                A(
                                                                    t,
                                                                    r,
                                                                    "Server response was missing for query '".concat(
                                                                        (
                                                                            Array.isArray(
                                                                                e
                                                                            )
                                                                        ) ?
                                                                            e.map(
                                                                                function (
                                                                                    e
                                                                                ) {
                                                                                    return e.operationName;
                                                                                }
                                                                            )
                                                                        :   e.operationName,
                                                                        "'."
                                                                    )
                                                                ),
                                                            r
                                                        );
                                                    })
                                                    .then(i);
                                    })
                                    .then(function () {
                                        (y = void 0), t.complete();
                                    })
                                    .catch(function (e) {
                                        (y = void 0),
                                            e.result &&
                                                e.result.errors &&
                                                e.result.data &&
                                                t.next(e.result),
                                            t.error(e);
                                    }),
                                function () {
                                    y && y.abort();
                                }
                            );
                        });
                    });
                },
                er = (function (e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var r = e.call(this, et(t).request) || this;
                        return (r.options = t), r;
                    }
                    return (0, o.ZT)(t, e), t;
                })(R),
                en = r(7333),
                ei = r(3530),
                eo = r(3984);
            function ea(e, t, r) {
                return new D(function (n) {
                    var i = {
                        then: function (e) {
                            return new Promise(function (t) {
                                return t(e());
                            });
                        },
                    };
                    function o(e, t) {
                        return function (r) {
                            if (e) {
                                var o = function () {
                                    return n.closed ? 0 : e(r);
                                };
                                i = i.then(o, o).then(
                                    function (e) {
                                        return n.next(e);
                                    },
                                    function (e) {
                                        return n.error(e);
                                    }
                                );
                            } else n[t](r);
                        };
                    }
                    var a = {
                            next: o(t, 'next'),
                            error: o(r, 'error'),
                            complete: function () {
                                i.then(function () {
                                    return n.complete();
                                });
                            },
                        },
                        s = e.subscribe(a);
                    return function () {
                        return s.unsubscribe();
                    };
                });
            }
            function es(e) {
                var t = eu(e);
                return (0, L.O)(t);
            }
            function eu(e) {
                var t = (0, L.O)(e.errors) ? e.errors.slice(0) : [];
                return (
                    G(e) &&
                        (0, L.O)(e.incremental) &&
                        e.incremental.forEach(function (e) {
                            e.errors && t.push.apply(t, e.errors);
                        }),
                    t
                );
            }
            var ec = r(4727),
                el = r(7899);
            function ef(e, t, r) {
                var n = [];
                e.forEach(function (e) {
                    return e[t] && n.push(e);
                }),
                    n.forEach(function (e) {
                        return e[t](r);
                    });
            }
            function eh(e) {
                function t(t) {
                    Object.defineProperty(e, t, { value: D });
                }
                return (
                    C.aS && Symbol.species && t(Symbol.species),
                    t('@@species'),
                    e
                );
            }
            function ep(e) {
                return e && 'function' == typeof e.then;
            }
            var ed = (function (e) {
                function t(t) {
                    var r =
                        e.call(this, function (e) {
                            return (
                                r.addObserver(e),
                                function () {
                                    return r.removeObserver(e);
                                }
                            );
                        }) || this;
                    return (
                        (r.observers = new Set()),
                        (r.promise = new Promise(function (e, t) {
                            (r.resolve = e), (r.reject = t);
                        })),
                        (r.handlers = {
                            next: function (e) {
                                null !== r.sub &&
                                    ((r.latest = ['next', e]),
                                    r.notify('next', e),
                                    ef(r.observers, 'next', e));
                            },
                            error: function (e) {
                                var t = r.sub;
                                null !== t &&
                                    (t &&
                                        setTimeout(function () {
                                            return t.unsubscribe();
                                        }),
                                    (r.sub = null),
                                    (r.latest = ['error', e]),
                                    r.reject(e),
                                    r.notify('error', e),
                                    ef(r.observers, 'error', e));
                            },
                            complete: function () {
                                var e = r.sub,
                                    t = r.sources;
                                if (null !== e) {
                                    var n = (void 0 === t ? [] : t).shift();
                                    n ?
                                        ep(n) ?
                                            n.then(function (e) {
                                                return (r.sub = e.subscribe(
                                                    r.handlers
                                                ));
                                            }, r.handlers.error)
                                        :   (r.sub = n.subscribe(r.handlers))
                                    :   (e &&
                                            setTimeout(function () {
                                                return e.unsubscribe();
                                            }),
                                        (r.sub = null),
                                        r.latest && 'next' === r.latest[0] ?
                                            r.resolve(r.latest[1])
                                        :   r.resolve(),
                                        r.notify('complete'),
                                        ef(r.observers, 'complete'));
                                }
                            },
                        }),
                        (r.nextResultListeners = new Set()),
                        (r.cancel = function (e) {
                            r.reject(e),
                                (r.sources = []),
                                r.handlers.complete();
                        }),
                        r.promise.catch(function (e) {}),
                        'function' == typeof t && (t = [new D(t)]),
                        ep(t) ?
                            t.then(function (e) {
                                return r.start(e);
                            }, r.handlers.error)
                        :   r.start(t),
                        r
                    );
                }
                return (
                    (0, o.ZT)(t, e),
                    (t.prototype.start = function (e) {
                        void 0 === this.sub &&
                            ((this.sources = Array.from(e)),
                            this.handlers.complete());
                    }),
                    (t.prototype.deliverLastMessage = function (e) {
                        if (this.latest) {
                            var t = this.latest[0],
                                r = e[t];
                            r && r.call(e, this.latest[1]),
                                null === this.sub &&
                                    'next' === t &&
                                    e.complete &&
                                    e.complete();
                        }
                    }),
                    (t.prototype.addObserver = function (e) {
                        this.observers.has(e) ||
                            (this.deliverLastMessage(e), this.observers.add(e));
                    }),
                    (t.prototype.removeObserver = function (e) {
                        this.observers.delete(e) &&
                            this.observers.size < 1 &&
                            this.handlers.complete();
                    }),
                    (t.prototype.notify = function (e, t) {
                        var r = this.nextResultListeners;
                        r.size &&
                            ((this.nextResultListeners = new Set()),
                            r.forEach(function (r) {
                                return r(e, t);
                            }));
                    }),
                    (t.prototype.beforeNext = function (e) {
                        var t = !1;
                        this.nextResultListeners.add(function (r, n) {
                            t || ((t = !0), e(r, n));
                        });
                    }),
                    t
                );
            })(D);
            function ev(e) {
                return !!e && e < 7;
            }
            eh(ed),
                ((n = i || (i = {}))[(n.loading = 1)] = 'loading'),
                (n[(n.setVariables = 2)] = 'setVariables'),
                (n[(n.fetchMore = 3)] = 'fetchMore'),
                (n[(n.refetch = 4)] = 'refetch'),
                (n[(n.poll = 6)] = 'poll'),
                (n[(n.ready = 7)] = 'ready'),
                (n[(n.error = 8)] = 'error');
            var ey = r(1801),
                em = r(9362),
                eb = r(6696);
            function eg(e) {
                return !!e.directives && e.directives.some(ek);
            }
            function ek(e) {
                return 'nonreactive' === e.name.value;
            }
            var ew = Object.assign,
                e_ = Object.hasOwnProperty,
                eO = (function (e) {
                    function t(t) {
                        var r = t.queryManager,
                            n = t.queryInfo,
                            i = t.options,
                            a =
                                e.call(this, function (e) {
                                    try {
                                        var t = e._subscription._observer;
                                        t && !t.error && (t.error = eE);
                                    } catch (e) {}
                                    var r = !a.observers.size;
                                    a.observers.add(e);
                                    var n = a.last;
                                    return (
                                        n && n.error ?
                                            e.error && e.error(n.error)
                                        :   n &&
                                            n.result &&
                                            e.next &&
                                            e.next(n.result),
                                        r &&
                                            a.reobserve().catch(function () {}),
                                        function () {
                                            a.observers.delete(e) &&
                                                !a.observers.size &&
                                                a.tearDownQuery();
                                        }
                                    );
                                }) || this;
                        (a.observers = new Set()),
                            (a.subscriptions = new Set()),
                            (a.queryInfo = n),
                            (a.queryManager = r),
                            (a.waitForOwnResult = eT(i.fetchPolicy)),
                            (a.isTornDown = !1);
                        var s = r.defaultOptions.watchQuery,
                            u = (void 0 === s ? {} : s).fetchPolicy,
                            c = void 0 === u ? 'cache-first' : u,
                            l = i.fetchPolicy,
                            f = void 0 === l ? c : l,
                            h = i.initialFetchPolicy,
                            p =
                                void 0 === h ?
                                    'standby' === f ?
                                        c
                                    :   f
                                :   h;
                        (a.options = (0, o.pi)((0, o.pi)({}, i), {
                            initialFetchPolicy: p,
                            fetchPolicy: f,
                        })),
                            (a.queryId = n.queryId || r.generateQueryId());
                        var d = (0, T.$H)(a.query);
                        return (a.queryName = d && d.name && d.name.value), a;
                    }
                    return (
                        (0, o.ZT)(t, e),
                        Object.defineProperty(t.prototype, 'query', {
                            get: function () {
                                return this.lastQuery || this.options.query;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'variables', {
                            get: function () {
                                return this.options.variables;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.result = function () {
                            var e = this;
                            return new Promise(function (t, r) {
                                var n = {
                                        next: function (r) {
                                            t(r),
                                                e.observers.delete(n),
                                                e.observers.size ||
                                                    e.queryManager.removeQuery(
                                                        e.queryId
                                                    ),
                                                setTimeout(function () {
                                                    i.unsubscribe();
                                                }, 0);
                                        },
                                        error: r,
                                    },
                                    i = e.subscribe(n);
                            });
                        }),
                        (t.prototype.resetDiff = function () {
                            this.queryInfo.resetDiff();
                        }),
                        (t.prototype.getCurrentResult = function (e) {
                            void 0 === e && (e = !0);
                            var t = this.getLastResult(!0),
                                r =
                                    this.queryInfo.networkStatus ||
                                    (t && t.networkStatus) ||
                                    i.ready,
                                n = (0, o.pi)((0, o.pi)({}, t), {
                                    loading: ev(r),
                                    networkStatus: r,
                                }),
                                a = this.options.fetchPolicy,
                                s = void 0 === a ? 'cache-first' : a;
                            if (
                                eT(s) ||
                                this.queryManager.getDocumentInfo(this.query)
                                    .hasForcedResolvers
                            );
                            else if (this.waitForOwnResult)
                                this.queryInfo.updateWatch();
                            else {
                                var u = this.queryInfo.getDiff();
                                (u.complete ||
                                    this.options.returnPartialData) &&
                                    (n.data = u.result),
                                    (0, en.D)(n.data, {}) && (n.data = void 0),
                                    u.complete ?
                                        (delete n.partial,
                                        u.complete &&
                                            n.networkStatus === i.loading &&
                                            ('cache-first' === s ||
                                                'cache-only' === s) &&
                                            ((n.networkStatus = i.ready),
                                            (n.loading = !1)))
                                    :   (n.partial = !0),
                                    !1 === globalThis.__DEV__ ||
                                        u.complete ||
                                        this.options.partialRefetch ||
                                        n.loading ||
                                        n.data ||
                                        n.error ||
                                        eD(u.missing);
                            }
                            return e && this.updateLastResult(n), n;
                        }),
                        (t.prototype.isDifferentFromLastResult = function (
                            e,
                            t
                        ) {
                            var r, n, i, a, s, u, c;
                            return (
                                !this.last ||
                                ((
                                    this.queryManager.getDocumentInfo(
                                        this.query
                                    ).hasNonreactiveDirective
                                ) ?
                                    ((r = this.query),
                                    (n = this.last.result),
                                    (i = this.variables),
                                    (a = n.data),
                                    (s = (0, o._T)(n, ['data'])),
                                    (u = e.data),
                                    (c = (0, o._T)(e, ['data'])),
                                    !(
                                        (0, en.Z)(s, c) &&
                                        (function e(t, r, n, i) {
                                            if (r === n) return !0;
                                            var o = new Set();
                                            return t.selections.every(
                                                function (t) {
                                                    if (
                                                        o.has(t) ||
                                                        (o.add(t),
                                                        !(0, j.LZ)(
                                                            t,
                                                            i.variables
                                                        ) || eg(t))
                                                    )
                                                        return !0;
                                                    if ((0, ec.My)(t)) {
                                                        var a = (0, ec.u2)(t),
                                                            s = r && r[a],
                                                            u = n && n[a],
                                                            c = t.selectionSet;
                                                        if (!c)
                                                            return (0, en.Z)(
                                                                s,
                                                                u
                                                            );
                                                        var l =
                                                                Array.isArray(
                                                                    s
                                                                ),
                                                            f =
                                                                Array.isArray(
                                                                    u
                                                                );
                                                        if (l !== f) return !1;
                                                        if (l && f) {
                                                            var h = s.length;
                                                            if (u.length !== h)
                                                                return !1;
                                                            for (
                                                                var p = 0;
                                                                p < h;
                                                                ++p
                                                            )
                                                                if (
                                                                    !e(
                                                                        c,
                                                                        s[p],
                                                                        u[p],
                                                                        i
                                                                    )
                                                                )
                                                                    return !1;
                                                            return !0;
                                                        }
                                                        return e(c, s, u, i);
                                                    }
                                                    var d = (0, eb.hi)(
                                                        t,
                                                        i.fragmentMap
                                                    );
                                                    if (d)
                                                        return (
                                                            !!eg(d) ||
                                                            e(
                                                                d.selectionSet,
                                                                r,
                                                                n,
                                                                i
                                                            )
                                                        );
                                                }
                                            );
                                        })((0, T.p$)(r).selectionSet, a, u, {
                                            fragmentMap: (0, eb.F)(
                                                (0, T.kU)(r)
                                            ),
                                            variables: i,
                                        })
                                    ))
                                :   !(0, en.D)(this.last.result, e)) ||
                                (t && !(0, en.D)(this.last.variables, t))
                            );
                        }),
                        (t.prototype.getLast = function (e, t) {
                            var r = this.last;
                            if (
                                r &&
                                r[e] &&
                                (!t || (0, en.D)(r.variables, this.variables))
                            )
                                return r[e];
                        }),
                        (t.prototype.getLastResult = function (e) {
                            return this.getLast('result', e);
                        }),
                        (t.prototype.getLastError = function (e) {
                            return this.getLast('error', e);
                        }),
                        (t.prototype.resetLastResults = function () {
                            delete this.last, (this.isTornDown = !1);
                        }),
                        (t.prototype.resetQueryStoreErrors = function () {
                            this.queryManager.resetErrors(this.queryId);
                        }),
                        (t.prototype.refetch = function (e) {
                            var t,
                                r = { pollInterval: 0 },
                                n = this.options.fetchPolicy;
                            if (
                                ('cache-and-network' === n ? (r.fetchPolicy = n)
                                : 'no-cache' === n ?
                                    (r.fetchPolicy = 'no-cache')
                                :   (r.fetchPolicy = 'network-only'),
                                !1 !== globalThis.__DEV__ &&
                                    e &&
                                    e_.call(e, 'variables'))
                            ) {
                                var s = (0, T.iW)(this.query),
                                    u = s.variableDefinitions;
                                (u &&
                                    u.some(function (e) {
                                        return (
                                            'variables' ===
                                            e.variable.name.value
                                        );
                                    })) ||
                                    !1 === globalThis.__DEV__ ||
                                    a.kG.warn(
                                        20,
                                        e,
                                        (null === (t = s.name) || void 0 === t ?
                                            void 0
                                        :   t.value) || s
                                    );
                            }
                            return (
                                e &&
                                    !(0, en.D)(this.options.variables, e) &&
                                    (r.variables = this.options.variables =
                                        (0, o.pi)(
                                            (0, o.pi)(
                                                {},
                                                this.options.variables
                                            ),
                                            e
                                        )),
                                this.queryInfo.resetLastWrite(),
                                this.reobserve(r, i.refetch)
                            );
                        }),
                        (t.prototype.fetchMore = function (e) {
                            var t = this,
                                r = (0, o.pi)(
                                    (0, o.pi)(
                                        {},
                                        e.query ? e : (
                                            (0, o.pi)(
                                                (0, o.pi)(
                                                    (0, o.pi)(
                                                        (0, o.pi)(
                                                            {},
                                                            this.options
                                                        ),
                                                        {
                                                            query: this.options
                                                                .query,
                                                        }
                                                    ),
                                                    e
                                                ),
                                                {
                                                    variables: (0, o.pi)(
                                                        (0, o.pi)(
                                                            {},
                                                            this.options
                                                                .variables
                                                        ),
                                                        e.variables
                                                    ),
                                                }
                                            )
                                        )
                                    ),
                                    { fetchPolicy: 'no-cache' }
                                );
                            r.query = this.transformDocument(r.query);
                            var n = this.queryManager.generateQueryId();
                            this.lastQuery =
                                e.query ?
                                    this.transformDocument(this.options.query)
                                :   r.query;
                            var a = this.queryInfo,
                                s = a.networkStatus;
                            (a.networkStatus = i.fetchMore),
                                r.notifyOnNetworkStatusChange && this.observe();
                            var u = new Set();
                            return this.queryManager
                                .fetchQuery(n, r, i.fetchMore)
                                .then(function (o) {
                                    return (
                                        t.queryManager.removeQuery(n),
                                        a.networkStatus === i.fetchMore &&
                                            (a.networkStatus = s),
                                        t.queryManager.cache.batch({
                                            update: function (n) {
                                                var i = e.updateQuery;
                                                i ?
                                                    n.updateQuery(
                                                        {
                                                            query: t.query,
                                                            variables:
                                                                t.variables,
                                                            returnPartialData:
                                                                !0,
                                                            optimistic: !1,
                                                        },
                                                        function (e) {
                                                            return i(e, {
                                                                fetchMoreResult:
                                                                    o.data,
                                                                variables:
                                                                    r.variables,
                                                            });
                                                        }
                                                    )
                                                :   n.writeQuery({
                                                        query: r.query,
                                                        variables: r.variables,
                                                        data: o.data,
                                                    });
                                            },
                                            onWatchUpdated: function (e) {
                                                u.add(e.query);
                                            },
                                        }),
                                        o
                                    );
                                })
                                .finally(function () {
                                    u.has(t.query) || eS(t);
                                });
                        }),
                        (t.prototype.subscribeToMore = function (e) {
                            var t = this,
                                r = this.queryManager
                                    .startGraphQLSubscription({
                                        query: e.document,
                                        variables: e.variables,
                                        context: e.context,
                                    })
                                    .subscribe({
                                        next: function (r) {
                                            var n = e.updateQuery;
                                            n &&
                                                t.updateQuery(function (e, t) {
                                                    return n(e, {
                                                        subscriptionData: r,
                                                        variables: t.variables,
                                                    });
                                                });
                                        },
                                        error: function (t) {
                                            if (e.onError) {
                                                e.onError(t);
                                                return;
                                            }
                                            !1 !== globalThis.__DEV__ &&
                                                a.kG.error(21, t);
                                        },
                                    });
                            return (
                                this.subscriptions.add(r),
                                function () {
                                    t.subscriptions.delete(r) &&
                                        r.unsubscribe();
                                }
                            );
                        }),
                        (t.prototype.setOptions = function (e) {
                            return this.reobserve(e);
                        }),
                        (t.prototype.silentSetOptions = function (e) {
                            var t = (0, ey.o)(this.options, e || {});
                            ew(this.options, t);
                        }),
                        (t.prototype.setVariables = function (e) {
                            return (
                                (0, en.D)(this.variables, e) ?
                                    this.observers.size ?
                                        this.result()
                                    :   Promise.resolve()
                                : (
                                    ((this.options.variables = e),
                                    this.observers.size)
                                ) ?
                                    this.reobserve(
                                        {
                                            fetchPolicy:
                                                this.options.initialFetchPolicy,
                                            variables: e,
                                        },
                                        i.setVariables
                                    )
                                :   Promise.resolve()
                            );
                        }),
                        (t.prototype.updateQuery = function (e) {
                            var t = this.queryManager,
                                r = e(
                                    t.cache.diff({
                                        query: this.options.query,
                                        variables: this.variables,
                                        returnPartialData: !0,
                                        optimistic: !1,
                                    }).result,
                                    { variables: this.variables }
                                );
                            r &&
                                (t.cache.writeQuery({
                                    query: this.options.query,
                                    data: r,
                                    variables: this.variables,
                                }),
                                t.broadcastQueries());
                        }),
                        (t.prototype.startPolling = function (e) {
                            (this.options.pollInterval = e),
                                this.updatePolling();
                        }),
                        (t.prototype.stopPolling = function () {
                            (this.options.pollInterval = 0),
                                this.updatePolling();
                        }),
                        (t.prototype.applyNextFetchPolicy = function (e, t) {
                            if (t.nextFetchPolicy) {
                                var r = t.fetchPolicy,
                                    n = void 0 === r ? 'cache-first' : r,
                                    i = t.initialFetchPolicy,
                                    o = void 0 === i ? n : i;
                                'standby' === n ||
                                    ('function' == typeof t.nextFetchPolicy ?
                                        (t.fetchPolicy = t.nextFetchPolicy(n, {
                                            reason: e,
                                            options: t,
                                            observable: this,
                                            initialFetchPolicy: o,
                                        }))
                                    : 'variables-changed' === e ?
                                        (t.fetchPolicy = o)
                                    :   (t.fetchPolicy = t.nextFetchPolicy));
                            }
                            return t.fetchPolicy;
                        }),
                        (t.prototype.fetch = function (e, t, r) {
                            return (
                                this.queryManager.setObservableQuery(this),
                                this.queryManager.fetchConcastWithInfo(
                                    this.queryId,
                                    e,
                                    t,
                                    r
                                )
                            );
                        }),
                        (t.prototype.updatePolling = function () {
                            var e = this;
                            if (!this.queryManager.ssrMode) {
                                var t = this.pollingInfo,
                                    r = this.options.pollInterval;
                                if (!r) {
                                    t &&
                                        (clearTimeout(t.timeout),
                                        delete this.pollingInfo);
                                    return;
                                }
                                if (!t || t.interval !== r) {
                                    (0, a.kG)(r, 22),
                                        ((
                                            t || (this.pollingInfo = {})
                                        ).interval = r);
                                    var n = function () {
                                            var t, r;
                                            e.pollingInfo &&
                                                ((
                                                    ev(
                                                        e.queryInfo
                                                            .networkStatus
                                                    ) ||
                                                    ((
                                                        null ===
                                                            (r = (t = e.options)
                                                                .skipPollAttempt) ||
                                                        void 0 === r
                                                    ) ?
                                                        void 0
                                                    :   r.call(t))
                                                ) ?
                                                    o()
                                                :   e
                                                        .reobserve(
                                                            {
                                                                fetchPolicy:
                                                                    (
                                                                        'no-cache' ===
                                                                        e
                                                                            .options
                                                                            .initialFetchPolicy
                                                                    ) ?
                                                                        'no-cache'
                                                                    :   'network-only',
                                                            },
                                                            i.poll
                                                        )
                                                        .then(o, o));
                                        },
                                        o = function () {
                                            var t = e.pollingInfo;
                                            t &&
                                                (clearTimeout(t.timeout),
                                                (t.timeout = setTimeout(
                                                    n,
                                                    t.interval
                                                )));
                                        };
                                    o();
                                }
                            }
                        }),
                        (t.prototype.updateLastResult = function (e, t) {
                            void 0 === t && (t = this.variables);
                            var r = this.getLastError();
                            return (
                                r &&
                                    this.last &&
                                    !(0, en.D)(t, this.last.variables) &&
                                    (r = void 0),
                                (this.last = (0, o.pi)(
                                    {
                                        result:
                                            (
                                                this.queryManager
                                                    .assumeImmutableResults
                                            ) ?
                                                e
                                            :   (0, em.X)(e),
                                        variables: t,
                                    },
                                    r ? { error: r } : null
                                ))
                            );
                        }),
                        (t.prototype.reobserveAsConcast = function (e, t) {
                            var r = this;
                            this.isTornDown = !1;
                            var n =
                                    t === i.refetch ||
                                    t === i.fetchMore ||
                                    t === i.poll,
                                a = this.options.variables,
                                s = this.options.fetchPolicy,
                                u = (0, ey.o)(this.options, e || {}),
                                c = n ? u : ew(this.options, u),
                                l = this.transformDocument(c.query);
                            (this.lastQuery = l),
                                !n &&
                                    (this.updatePolling(),
                                    e &&
                                        e.variables &&
                                        !(0, en.D)(e.variables, a) &&
                                        'standby' !== c.fetchPolicy &&
                                        c.fetchPolicy === s &&
                                        (this.applyNextFetchPolicy(
                                            'variables-changed',
                                            c
                                        ),
                                        void 0 === t && (t = i.setVariables))),
                                this.waitForOwnResult &&
                                    (this.waitForOwnResult = eT(c.fetchPolicy));
                            var f = function () {
                                    r.concast === d &&
                                        (r.waitForOwnResult = !1);
                                },
                                h = c.variables && (0, o.pi)({}, c.variables),
                                p = this.fetch(c, t, l),
                                d = p.concast,
                                v = p.fromLink,
                                y = {
                                    next: function (e) {
                                        (0, en.D)(r.variables, h) &&
                                            (f(), r.reportResult(e, h));
                                    },
                                    error: function (e) {
                                        (0, en.D)(r.variables, h) &&
                                            (f(), r.reportError(e, h));
                                    },
                                };
                            return (
                                n ||
                                    (!v && this.concast) ||
                                    (this.concast &&
                                        this.observer &&
                                        this.concast.removeObserver(
                                            this.observer
                                        ),
                                    (this.concast = d),
                                    (this.observer = y)),
                                d.addObserver(y),
                                d
                            );
                        }),
                        (t.prototype.reobserve = function (e, t) {
                            return this.reobserveAsConcast(e, t).promise;
                        }),
                        (t.prototype.resubscribeAfterError = function () {
                            for (var e = [], t = 0; t < arguments.length; t++)
                                e[t] = arguments[t];
                            var r = this.last;
                            this.resetLastResults();
                            var n = this.subscribe.apply(this, e);
                            return (this.last = r), n;
                        }),
                        (t.prototype.observe = function () {
                            this.reportResult(
                                this.getCurrentResult(!1),
                                this.variables
                            );
                        }),
                        (t.prototype.reportResult = function (e, t) {
                            var r = this.getLastError(),
                                n = this.isDifferentFromLastResult(e, t);
                            (r ||
                                !e.partial ||
                                this.options.returnPartialData) &&
                                this.updateLastResult(e, t),
                                (r || n) && ef(this.observers, 'next', e);
                        }),
                        (t.prototype.reportError = function (e, t) {
                            var r = (0, o.pi)(
                                (0, o.pi)({}, this.getLastResult()),
                                {
                                    error: e,
                                    errors: e.graphQLErrors,
                                    networkStatus: i.error,
                                    loading: !1,
                                }
                            );
                            this.updateLastResult(r, t),
                                ef(
                                    this.observers,
                                    'error',
                                    (this.last.error = e)
                                );
                        }),
                        (t.prototype.hasObservers = function () {
                            return this.observers.size > 0;
                        }),
                        (t.prototype.tearDownQuery = function () {
                            this.isTornDown ||
                                (this.concast &&
                                    this.observer &&
                                    (this.concast.removeObserver(this.observer),
                                    delete this.concast,
                                    delete this.observer),
                                this.stopPolling(),
                                this.subscriptions.forEach(function (e) {
                                    return e.unsubscribe();
                                }),
                                this.subscriptions.clear(),
                                this.queryManager.stopQuery(this.queryId),
                                this.observers.clear(),
                                (this.isTornDown = !0));
                        }),
                        (t.prototype.transformDocument = function (e) {
                            return this.queryManager.transform(e);
                        }),
                        t
                    );
                })(D);
            function eS(e) {
                var t = e.options,
                    r = t.fetchPolicy,
                    n = t.nextFetchPolicy;
                return 'cache-and-network' === r || 'network-only' === r ?
                        e.reobserve({
                            fetchPolicy: 'cache-first',
                            nextFetchPolicy: function (e, t) {
                                return (
                                        ((this.nextFetchPolicy = n),
                                        'function' ==
                                            typeof this.nextFetchPolicy)
                                    ) ?
                                        this.nextFetchPolicy(e, t)
                                    :   r;
                            },
                        })
                    :   e.reobserve();
            }
            function eE(e) {
                !1 !== globalThis.__DEV__ && a.kG.error(23, e.message, e.stack);
            }
            function eD(e) {
                !1 !== globalThis.__DEV__ &&
                    e &&
                    !1 !== globalThis.__DEV__ &&
                    a.kG.debug(24, e);
            }
            function eT(e) {
                return (
                    'network-only' === e || 'no-cache' === e || 'standby' === e
                );
            }
            eh(eO);
            var ex = r(9648);
            function eq(e) {
                return (
                    e.kind === ex.h.FIELD ||
                    e.kind === ex.h.FRAGMENT_SPREAD ||
                    e.kind === ex.h.INLINE_FRAGMENT
                );
            }
            var eF = r(7321),
                eR = (function () {
                    function e(e) {
                        var t = e.cache,
                            r = e.client,
                            n = e.resolvers,
                            i = e.fragmentMatcher;
                        (this.selectionsToResolveCache = new WeakMap()),
                            (this.cache = t),
                            r && (this.client = r),
                            n && this.addResolvers(n),
                            i && this.setFragmentMatcher(i);
                    }
                    return (
                        (e.prototype.addResolvers = function (e) {
                            var t = this;
                            (this.resolvers = this.resolvers || {}),
                                Array.isArray(e) ?
                                    e.forEach(function (e) {
                                        t.resolvers = (0, z.Ee)(t.resolvers, e);
                                    })
                                :   (this.resolvers = (0, z.Ee)(
                                        this.resolvers,
                                        e
                                    ));
                        }),
                        (e.prototype.setResolvers = function (e) {
                            (this.resolvers = {}), this.addResolvers(e);
                        }),
                        (e.prototype.getResolvers = function () {
                            return this.resolvers || {};
                        }),
                        (e.prototype.runResolvers = function (e) {
                            var t = e.document,
                                r = e.remoteResult,
                                n = e.context,
                                i = e.variables,
                                a = e.onlyRunForcedResolvers,
                                s = void 0 !== a && a;
                            return (0, o.mG)(this, void 0, void 0, function () {
                                return (0, o.Jh)(this, function (e) {
                                    return t ?
                                            [
                                                2,
                                                this.resolveDocument(
                                                    t,
                                                    r.data,
                                                    n,
                                                    i,
                                                    this.fragmentMatcher,
                                                    s
                                                ).then(function (e) {
                                                    return (0, o.pi)(
                                                        (0, o.pi)({}, r),
                                                        { data: e.result }
                                                    );
                                                }),
                                            ]
                                        :   [2, r];
                                });
                            });
                        }),
                        (e.prototype.setFragmentMatcher = function (e) {
                            this.fragmentMatcher = e;
                        }),
                        (e.prototype.getFragmentMatcher = function () {
                            return this.fragmentMatcher;
                        }),
                        (e.prototype.clientQuery = function (e) {
                            return (0, j.FS)(['client'], e) && this.resolvers ?
                                    e
                                :   null;
                        }),
                        (e.prototype.serverQuery = function (e) {
                            return (0, X.ob)(e);
                        }),
                        (e.prototype.prepareContext = function (e) {
                            var t = this.cache;
                            return (0, o.pi)((0, o.pi)({}, e), {
                                cache: t,
                                getCacheKey: function (e) {
                                    return t.identify(e);
                                },
                            });
                        }),
                        (e.prototype.addExportedVariables = function (e, t, r) {
                            return (
                                void 0 === t && (t = {}),
                                void 0 === r && (r = {}),
                                (0, o.mG)(this, void 0, void 0, function () {
                                    return (0, o.Jh)(this, function (n) {
                                        return e ?
                                                [
                                                    2,
                                                    this.resolveDocument(
                                                        e,
                                                        this.buildRootValueFromCache(
                                                            e,
                                                            t
                                                        ) || {},
                                                        this.prepareContext(r),
                                                        t
                                                    ).then(function (e) {
                                                        return (0, o.pi)(
                                                            (0, o.pi)({}, t),
                                                            e.exportedVariables
                                                        );
                                                    }),
                                                ]
                                            :   [2, (0, o.pi)({}, t)];
                                    });
                                })
                            );
                        }),
                        (e.prototype.shouldForceResolvers = function (e) {
                            var t = !1;
                            return (
                                (0, H.Vn)(e, {
                                    Directive: {
                                        enter: function (e) {
                                            if (
                                                'client' === e.name.value &&
                                                e.arguments &&
                                                (t = e.arguments.some(
                                                    function (e) {
                                                        return (
                                                            'always' ===
                                                                e.name.value &&
                                                            'BooleanValue' ===
                                                                e.value.kind &&
                                                            !0 === e.value.value
                                                        );
                                                    }
                                                ))
                                            )
                                                return H.$_;
                                        },
                                    },
                                }),
                                t
                            );
                        }),
                        (e.prototype.buildRootValueFromCache = function (e, t) {
                            return this.cache.diff({
                                query: (0, X.aL)(e),
                                variables: t,
                                returnPartialData: !0,
                                optimistic: !1,
                            }).result;
                        }),
                        (e.prototype.resolveDocument = function (
                            e,
                            t,
                            r,
                            n,
                            i,
                            a
                        ) {
                            return (
                                void 0 === r && (r = {}),
                                void 0 === n && (n = {}),
                                void 0 === i &&
                                    (i = function () {
                                        return !0;
                                    }),
                                void 0 === a && (a = !1),
                                (0, o.mG)(this, void 0, void 0, function () {
                                    var s, u, c, l, f, h, p, d, v, y;
                                    return (0, o.Jh)(this, function (m) {
                                        return (
                                            (s = (0, T.p$)(e)),
                                            (u = (0, T.kU)(e)),
                                            (c = (0, eb.F)(u)),
                                            (l =
                                                this.collectSelectionsToResolve(
                                                    s,
                                                    c
                                                )),
                                            (h =
                                                (f = s.operation) ?
                                                    f.charAt(0).toUpperCase() +
                                                    f.slice(1)
                                                :   'Query'),
                                            (p = this),
                                            (d = p.cache),
                                            (v = p.client),
                                            (y = {
                                                fragmentMap: c,
                                                context: (0, o.pi)(
                                                    (0, o.pi)({}, r),
                                                    { cache: d, client: v }
                                                ),
                                                variables: n,
                                                fragmentMatcher: i,
                                                defaultOperationType: h,
                                                exportedVariables: {},
                                                selectionsToResolve: l,
                                                onlyRunForcedResolvers: a,
                                            }),
                                            [
                                                2,
                                                this.resolveSelectionSet(
                                                    s.selectionSet,
                                                    !1,
                                                    t,
                                                    y
                                                ).then(function (e) {
                                                    return {
                                                        result: e,
                                                        exportedVariables:
                                                            y.exportedVariables,
                                                    };
                                                }),
                                            ]
                                        );
                                    });
                                })
                            );
                        }),
                        (e.prototype.resolveSelectionSet = function (
                            e,
                            t,
                            r,
                            n
                        ) {
                            return (0, o.mG)(this, void 0, void 0, function () {
                                var i,
                                    s,
                                    u,
                                    c,
                                    l,
                                    f = this;
                                return (0, o.Jh)(this, function (h) {
                                    return (
                                        (i = n.fragmentMap),
                                        (s = n.context),
                                        (u = n.variables),
                                        (c = [r]),
                                        (l = function (e) {
                                            return (0, o.mG)(
                                                f,
                                                void 0,
                                                void 0,
                                                function () {
                                                    var l, f;
                                                    return (0, o.Jh)(
                                                        this,
                                                        function (o) {
                                                            return (
                                                                (
                                                                    (t ||
                                                                        n.selectionsToResolve.has(
                                                                            e
                                                                        )) &&
                                                                        (0,
                                                                        j.LZ)(
                                                                            e,
                                                                            u
                                                                        )
                                                                ) ?
                                                                    (
                                                                        (0,
                                                                        ec.My)(
                                                                            e
                                                                        )
                                                                    ) ?
                                                                        [
                                                                            2,
                                                                            this.resolveField(
                                                                                e,
                                                                                t,
                                                                                r,
                                                                                n
                                                                            ).then(
                                                                                function (
                                                                                    t
                                                                                ) {
                                                                                    var r;
                                                                                    void 0 !==
                                                                                        t &&
                                                                                        c.push(
                                                                                            (((r =
                                                                                                {})[
                                                                                                (0,
                                                                                                ec.u2)(
                                                                                                    e
                                                                                                )
                                                                                            ] =
                                                                                                t),
                                                                                            r)
                                                                                        );
                                                                                }
                                                                            ),
                                                                        ]
                                                                    : (
                                                                        ((
                                                                            (0,
                                                                            ec.Ao)(
                                                                                e
                                                                            )
                                                                        ) ?
                                                                            (l =
                                                                                e)
                                                                        :   ((l =
                                                                                i[
                                                                                    e
                                                                                        .name
                                                                                        .value
                                                                                ]),
                                                                            (0,
                                                                            a.kG)(
                                                                                l,
                                                                                18,
                                                                                e
                                                                                    .name
                                                                                    .value
                                                                            )),
                                                                        l &&
                                                                            l.typeCondition &&
                                                                            ((f =
                                                                                l
                                                                                    .typeCondition
                                                                                    .name
                                                                                    .value),
                                                                            n.fragmentMatcher(
                                                                                r,
                                                                                f,
                                                                                s
                                                                            )))
                                                                    ) ?
                                                                        [
                                                                            2,
                                                                            this.resolveSelectionSet(
                                                                                l.selectionSet,
                                                                                t,
                                                                                r,
                                                                                n
                                                                            ).then(
                                                                                function (
                                                                                    e
                                                                                ) {
                                                                                    c.push(
                                                                                        e
                                                                                    );
                                                                                }
                                                                            ),
                                                                        ]
                                                                    :   [2]
                                                                :   [2]
                                                            );
                                                        }
                                                    );
                                                }
                                            );
                                        }),
                                        [
                                            2,
                                            Promise.all(
                                                e.selections.map(l)
                                            ).then(function () {
                                                return (0, z.bw)(c);
                                            }),
                                        ]
                                    );
                                });
                            });
                        }),
                        (e.prototype.resolveField = function (e, t, r, n) {
                            return (0, o.mG)(this, void 0, void 0, function () {
                                var i,
                                    a,
                                    s,
                                    u,
                                    c,
                                    l,
                                    f,
                                    h,
                                    p,
                                    d = this;
                                return (0, o.Jh)(this, function (o) {
                                    return r ?
                                            ((i = n.variables),
                                            (u =
                                                (a = e.name.value) !==
                                                (s = (0, ec.u2)(e))),
                                            (l = Promise.resolve(
                                                (c = r[s] || r[a])
                                            )),
                                            (!n.onlyRunForcedResolvers ||
                                                this.shouldForceResolvers(e)) &&
                                                ((f =
                                                    r.__typename ||
                                                    n.defaultOperationType),
                                                (h =
                                                    this.resolvers &&
                                                    this.resolvers[f]) &&
                                                    (p = h[u ? a : s]) &&
                                                    (l = Promise.resolve(
                                                        eF.ab.withValue(
                                                            this.cache,
                                                            p,
                                                            [
                                                                r,
                                                                (0, ec.NC)(
                                                                    e,
                                                                    i
                                                                ),
                                                                n.context,
                                                                {
                                                                    field: e,
                                                                    fragmentMap:
                                                                        n.fragmentMap,
                                                                },
                                                            ]
                                                        )
                                                    ))),
                                            [
                                                2,
                                                l.then(function (r) {
                                                    if (
                                                        (void 0 === r &&
                                                            (r = c),
                                                        e.directives &&
                                                            e.directives.forEach(
                                                                function (e) {
                                                                    'export' ===
                                                                        e.name
                                                                            .value &&
                                                                        e.arguments &&
                                                                        e.arguments.forEach(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                'as' ===
                                                                                    e
                                                                                        .name
                                                                                        .value &&
                                                                                    'StringValue' ===
                                                                                        e
                                                                                            .value
                                                                                            .kind &&
                                                                                    (n.exportedVariables[
                                                                                        e.value.value
                                                                                    ] =
                                                                                        r);
                                                                            }
                                                                        );
                                                                }
                                                            ),
                                                        !e.selectionSet ||
                                                            null == r)
                                                    )
                                                        return r;
                                                    var i,
                                                        o,
                                                        a =
                                                            null !==
                                                                (o =
                                                                    (
                                                                        null ===
                                                                            (i =
                                                                                e.directives) ||
                                                                        void 0 ===
                                                                            i
                                                                    ) ?
                                                                        void 0
                                                                    :   i.some(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                return (
                                                                                    'client' ===
                                                                                    e
                                                                                        .name
                                                                                        .value
                                                                                );
                                                                            }
                                                                        )) &&
                                                            void 0 !== o &&
                                                            o;
                                                    return (
                                                        Array.isArray(r) ?
                                                            d.resolveSubSelectedArray(
                                                                e,
                                                                t || a,
                                                                r,
                                                                n
                                                            )
                                                        : e.selectionSet ?
                                                            d.resolveSelectionSet(
                                                                e.selectionSet,
                                                                t || a,
                                                                r,
                                                                n
                                                            )
                                                        :   void 0
                                                    );
                                                }),
                                            ])
                                        :   [2, null];
                                });
                            });
                        }),
                        (e.prototype.resolveSubSelectedArray = function (
                            e,
                            t,
                            r,
                            n
                        ) {
                            var i = this;
                            return Promise.all(
                                r.map(function (r) {
                                    return (
                                        null === r ? null
                                        : Array.isArray(r) ?
                                            i.resolveSubSelectedArray(
                                                e,
                                                t,
                                                r,
                                                n
                                            )
                                        : e.selectionSet ?
                                            i.resolveSelectionSet(
                                                e.selectionSet,
                                                t,
                                                r,
                                                n
                                            )
                                        :   void 0
                                    );
                                })
                            );
                        }),
                        (e.prototype.collectSelectionsToResolve = function (
                            e,
                            t
                        ) {
                            var r = function (e) {
                                    return !Array.isArray(e);
                                },
                                n = this.selectionsToResolveCache;
                            return (function e(i) {
                                if (!n.has(i)) {
                                    var o = new Set();
                                    n.set(i, o),
                                        (0, H.Vn)(i, {
                                            Directive: function (
                                                e,
                                                t,
                                                n,
                                                i,
                                                a
                                            ) {
                                                'client' === e.name.value &&
                                                    a.forEach(function (e) {
                                                        r(e) &&
                                                            eq(e) &&
                                                            o.add(e);
                                                    });
                                            },
                                            FragmentSpread: function (
                                                n,
                                                i,
                                                s,
                                                u,
                                                c
                                            ) {
                                                var l = t[n.name.value];
                                                (0, a.kG)(l, 19, n.name.value);
                                                var f = e(l);
                                                f.size > 0 &&
                                                    (c.forEach(function (e) {
                                                        r(e) &&
                                                            eq(e) &&
                                                            o.add(e);
                                                    }),
                                                    o.add(n),
                                                    f.forEach(function (e) {
                                                        o.add(e);
                                                    }));
                                            },
                                        });
                                }
                                return n.get(i);
                            })(e);
                        }),
                        e
                    );
                })(),
                eI = new (C.mr ? WeakMap : Map)();
            function eP(e, t) {
                var r = e[t];
                'function' == typeof r &&
                    (e[t] = function () {
                        return (
                            eI.set(e, (eI.get(e) + 1) % 1e15),
                            r.apply(this, arguments)
                        );
                    });
            }
            function ej(e) {
                e.notifyTimeout &&
                    (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
            }
            var eQ = (function () {
                function e(e, t) {
                    void 0 === t && (t = e.generateQueryId()),
                        (this.queryId = t),
                        (this.listeners = new Set()),
                        (this.document = null),
                        (this.lastRequestId = 1),
                        (this.stopped = !1),
                        (this.dirty = !1),
                        (this.observableQuery = null);
                    var r = (this.cache = e.cache);
                    eI.has(r) ||
                        (eI.set(r, 0),
                        eP(r, 'evict'),
                        eP(r, 'modify'),
                        eP(r, 'reset'));
                }
                return (
                    (e.prototype.init = function (e) {
                        var t = e.networkStatus || i.loading;
                        return (
                            this.variables &&
                                this.networkStatus !== i.loading &&
                                !(0, en.D)(this.variables, e.variables) &&
                                (t = i.setVariables),
                            (0, en.D)(e.variables, this.variables) ||
                                (this.lastDiff = void 0),
                            Object.assign(this, {
                                document: e.document,
                                variables: e.variables,
                                networkError: null,
                                graphQLErrors: this.graphQLErrors || [],
                                networkStatus: t,
                            }),
                            e.observableQuery &&
                                this.setObservableQuery(e.observableQuery),
                            e.lastRequestId &&
                                (this.lastRequestId = e.lastRequestId),
                            this
                        );
                    }),
                    (e.prototype.reset = function () {
                        ej(this), (this.dirty = !1);
                    }),
                    (e.prototype.resetDiff = function () {
                        this.lastDiff = void 0;
                    }),
                    (e.prototype.getDiff = function () {
                        var e = this.getDiffOptions();
                        if (
                            this.lastDiff &&
                            (0, en.D)(e, this.lastDiff.options)
                        )
                            return this.lastDiff.diff;
                        this.updateWatch(this.variables);
                        var t = this.observableQuery;
                        if (t && 'no-cache' === t.options.fetchPolicy)
                            return { complete: !1 };
                        var r = this.cache.diff(e);
                        return this.updateLastDiff(r, e), r;
                    }),
                    (e.prototype.updateLastDiff = function (e, t) {
                        this.lastDiff =
                            e ?
                                { diff: e, options: t || this.getDiffOptions() }
                            :   void 0;
                    }),
                    (e.prototype.getDiffOptions = function (e) {
                        var t;
                        return (
                            void 0 === e && (e = this.variables),
                            {
                                query: this.document,
                                variables: e,
                                returnPartialData: !0,
                                optimistic: !0,
                                canonizeResults:
                                    (
                                        null === (t = this.observableQuery) ||
                                        void 0 === t
                                    ) ?
                                        void 0
                                    :   t.options.canonizeResults,
                            }
                        );
                    }),
                    (e.prototype.setDiff = function (e) {
                        var t,
                            r = this,
                            n = this.lastDiff && this.lastDiff.diff;
                        (!e ||
                            e.complete ||
                            ((
                                null === (t = this.observableQuery) ||
                                void 0 === t
                            ) ?
                                void 0
                            :   t.options.returnPartialData) ||
                            (n && n.complete)) &&
                            (this.updateLastDiff(e),
                            this.dirty ||
                                (0, en.D)(n && n.result, e && e.result) ||
                                ((this.dirty = !0),
                                this.notifyTimeout ||
                                    (this.notifyTimeout = setTimeout(
                                        function () {
                                            return r.notify();
                                        },
                                        0
                                    ))));
                    }),
                    (e.prototype.setObservableQuery = function (e) {
                        var t = this;
                        e !== this.observableQuery &&
                            (this.oqListener &&
                                this.listeners.delete(this.oqListener),
                            (this.observableQuery = e),
                            e ?
                                ((e.queryInfo = this),
                                this.listeners.add(
                                    (this.oqListener = function () {
                                        t.getDiff().fromOptimisticTransaction ?
                                            e.observe()
                                        :   eS(e);
                                    })
                                ))
                            :   delete this.oqListener);
                    }),
                    (e.prototype.notify = function () {
                        var e = this;
                        ej(this),
                            this.shouldNotify() &&
                                this.listeners.forEach(function (t) {
                                    return t(e);
                                }),
                            (this.dirty = !1);
                    }),
                    (e.prototype.shouldNotify = function () {
                        if (!this.dirty || !this.listeners.size) return !1;
                        if (ev(this.networkStatus) && this.observableQuery) {
                            var e = this.observableQuery.options.fetchPolicy;
                            if ('cache-only' !== e && 'cache-and-network' !== e)
                                return !1;
                        }
                        return !0;
                    }),
                    (e.prototype.stop = function () {
                        if (!this.stopped) {
                            (this.stopped = !0),
                                this.reset(),
                                this.cancel(),
                                (this.cancel = e.prototype.cancel);
                            var t = this.observableQuery;
                            t && t.stopPolling();
                        }
                    }),
                    (e.prototype.cancel = function () {}),
                    (e.prototype.updateWatch = function (e) {
                        var t = this;
                        void 0 === e && (e = this.variables);
                        var r = this.observableQuery;
                        if (!r || 'no-cache' !== r.options.fetchPolicy) {
                            var n = (0, o.pi)(
                                (0, o.pi)({}, this.getDiffOptions(e)),
                                {
                                    watcher: this,
                                    callback: function (e) {
                                        return t.setDiff(e);
                                    },
                                }
                            );
                            (this.lastWatch && (0, en.D)(n, this.lastWatch)) ||
                                (this.cancel(),
                                (this.cancel = this.cache.watch(
                                    (this.lastWatch = n)
                                )));
                        }
                    }),
                    (e.prototype.resetLastWrite = function () {
                        this.lastWrite = void 0;
                    }),
                    (e.prototype.shouldWrite = function (e, t) {
                        var r = this.lastWrite;
                        return !(
                            r &&
                            r.dmCount === eI.get(this.cache) &&
                            (0, en.D)(t, r.variables) &&
                            (0, en.D)(e.data, r.result.data)
                        );
                    }),
                    (e.prototype.markResult = function (e, t, r, n) {
                        var i = this,
                            o = new z.w0(),
                            a = (0, L.O)(e.errors) ? e.errors.slice(0) : [];
                        if (
                            (this.reset(),
                            'incremental' in e && (0, L.O)(e.incremental))
                        ) {
                            var s = B(this.getDiff().result, e);
                            e.data = s;
                        } else if ('hasNext' in e && e.hasNext) {
                            var u = this.getDiff();
                            e.data = o.merge(u.result, e.data);
                        }
                        (this.graphQLErrors = a),
                            'no-cache' === r.fetchPolicy ?
                                this.updateLastDiff(
                                    { result: e.data, complete: !0 },
                                    this.getDiffOptions(r.variables)
                                )
                            :   0 !== n &&
                                (eC(e, r.errorPolicy) ?
                                    this.cache.performTransaction(function (o) {
                                        if (i.shouldWrite(e, r.variables))
                                            o.writeQuery({
                                                query: t,
                                                data: e.data,
                                                variables: r.variables,
                                                overwrite: 1 === n,
                                            }),
                                                (i.lastWrite = {
                                                    result: e,
                                                    variables: r.variables,
                                                    dmCount: eI.get(i.cache),
                                                });
                                        else if (
                                            i.lastDiff &&
                                            i.lastDiff.diff.complete
                                        ) {
                                            e.data = i.lastDiff.diff.result;
                                            return;
                                        }
                                        var a = i.getDiffOptions(r.variables),
                                            s = o.diff(a);
                                        !i.stopped &&
                                            (0, en.D)(
                                                i.variables,
                                                r.variables
                                            ) &&
                                            i.updateWatch(r.variables),
                                            i.updateLastDiff(s, a),
                                            s.complete && (e.data = s.result);
                                    })
                                :   (this.lastWrite = void 0));
                    }),
                    (e.prototype.markReady = function () {
                        return (
                            (this.networkError = null),
                            (this.networkStatus = i.ready)
                        );
                    }),
                    (e.prototype.markError = function (e) {
                        return (
                            (this.networkStatus = i.error),
                            (this.lastWrite = void 0),
                            this.reset(),
                            e.graphQLErrors &&
                                (this.graphQLErrors = e.graphQLErrors),
                            e.networkError &&
                                (this.networkError = e.networkError),
                            e
                        );
                    }),
                    e
                );
            })();
            function eC(e, t) {
                void 0 === t && (t = 'none');
                var r = 'ignore' === t || 'all' === t,
                    n = !es(e);
                return !n && r && e.data && (n = !0), n;
            }
            var eM = r(9925),
                eA = r(442),
                eN = r(7456),
                eV = Object.prototype.hasOwnProperty,
                eL = Object.create(null),
                ez = (function () {
                    function e(e) {
                        var t = e.cache,
                            r = e.link,
                            n = e.defaultOptions,
                            i = e.documentTransform,
                            o = e.queryDeduplication,
                            a = e.onBroadcast,
                            s = e.ssrMode,
                            u = e.clientAwareness,
                            c = e.localState,
                            l = e.assumeImmutableResults,
                            f = void 0 === l ? !!t.assumeImmutableResults : l,
                            h = e.defaultContext,
                            p = this;
                        (this.clientAwareness = {}),
                            (this.queries = new Map()),
                            (this.fetchCancelFns = new Map()),
                            (this.transformCache = new eA.s(
                                eN.Q['queryManager.getDocumentInfo'] || 2e3
                            )),
                            (this.queryIdCounter = 1),
                            (this.requestIdCounter = 1),
                            (this.mutationIdCounter = 1),
                            (this.inFlightLinkObservables = new eM.B(!1));
                        var d = new eo.A(
                            function (e) {
                                return p.cache.transformDocument(e);
                            },
                            { cache: !1 }
                        );
                        (this.cache = t),
                            (this.link = r),
                            (this.defaultOptions = n || Object.create(null)),
                            (this.queryDeduplication = void 0 !== o && o),
                            (this.clientAwareness = void 0 === u ? {} : u),
                            (this.localState = c || new eR({ cache: t })),
                            (this.ssrMode = void 0 !== s && s),
                            (this.assumeImmutableResults = f),
                            (this.documentTransform =
                                i ? d.concat(i).concat(d) : d),
                            (this.defaultContext = h || Object.create(null)),
                            (this.onBroadcast = a) &&
                                (this.mutationStore = Object.create(null));
                    }
                    return (
                        (e.prototype.stop = function () {
                            var e = this;
                            this.queries.forEach(function (t, r) {
                                e.stopQueryNoBroadcast(r);
                            }),
                                this.cancelPendingFetches((0, a._K)(25));
                        }),
                        (e.prototype.cancelPendingFetches = function (e) {
                            this.fetchCancelFns.forEach(function (t) {
                                return t(e);
                            }),
                                this.fetchCancelFns.clear();
                        }),
                        (e.prototype.mutate = function (e) {
                            var t,
                                r,
                                n = e.mutation,
                                i = e.variables,
                                s = e.optimisticResponse,
                                u = e.updateQueries,
                                c = e.refetchQueries,
                                l = void 0 === c ? [] : c,
                                f = e.awaitRefetchQueries,
                                h = void 0 !== f && f,
                                p = e.update,
                                d = e.onQueryUpdated,
                                v = e.fetchPolicy,
                                y =
                                    void 0 === v ?
                                        ((
                                            null ===
                                                (t =
                                                    this.defaultOptions
                                                        .mutate) || void 0 === t
                                        ) ?
                                            void 0
                                        :   t.fetchPolicy) || 'network-only'
                                    :   v,
                                m = e.errorPolicy,
                                b =
                                    void 0 === m ?
                                        ((
                                            null ===
                                                (r =
                                                    this.defaultOptions
                                                        .mutate) || void 0 === r
                                        ) ?
                                            void 0
                                        :   r.errorPolicy) || 'none'
                                    :   m,
                                g = e.keepRootFields,
                                k = e.context;
                            return (0, o.mG)(this, void 0, void 0, function () {
                                var e, t, r, c, f;
                                return (0, o.Jh)(this, function (v) {
                                    switch (v.label) {
                                        case 0:
                                            if (
                                                ((0, a.kG)(n, 26),
                                                (0, a.kG)(
                                                    'network-only' === y ||
                                                        'no-cache' === y,
                                                    27
                                                ),
                                                (e = this.generateMutationId()),
                                                (n =
                                                    this.cache.transformForLink(
                                                        this.transform(n)
                                                    )),
                                                (t =
                                                    this.getDocumentInfo(
                                                        n
                                                    ).hasClientExports),
                                                (i = this.getVariables(n, i)),
                                                !t)
                                            )
                                                return [3, 2];
                                            return [
                                                4,
                                                this.localState.addExportedVariables(
                                                    n,
                                                    i,
                                                    k
                                                ),
                                            ];
                                        case 1:
                                            (i = v.sent()), (v.label = 2);
                                        case 2:
                                            return (
                                                (r =
                                                    this.mutationStore &&
                                                    (this.mutationStore[e] = {
                                                        mutation: n,
                                                        variables: i,
                                                        loading: !0,
                                                        error: null,
                                                    })),
                                                (c =
                                                    s &&
                                                    this.markMutationOptimistic(
                                                        s,
                                                        {
                                                            mutationId: e,
                                                            document: n,
                                                            variables: i,
                                                            fetchPolicy: y,
                                                            errorPolicy: b,
                                                            context: k,
                                                            updateQueries: u,
                                                            update: p,
                                                            keepRootFields: g,
                                                        }
                                                    )),
                                                this.broadcastQueries(),
                                                (f = this),
                                                [
                                                    2,
                                                    new Promise(function (
                                                        t,
                                                        a
                                                    ) {
                                                        return ea(
                                                            f.getObservableFromLink(
                                                                n,
                                                                (0, o.pi)(
                                                                    (0, o.pi)(
                                                                        {},
                                                                        k
                                                                    ),
                                                                    {
                                                                        optimisticResponse:

                                                                                (
                                                                                    c
                                                                                ) ?
                                                                                    s
                                                                                :   void 0,
                                                                    }
                                                                ),
                                                                i,
                                                                !1
                                                            ),
                                                            function (t) {
                                                                if (
                                                                    es(t) &&
                                                                    'none' === b
                                                                )
                                                                    throw new N.cA(
                                                                        {
                                                                            graphQLErrors:
                                                                                eu(
                                                                                    t
                                                                                ),
                                                                        }
                                                                    );
                                                                r &&
                                                                    ((r.loading =
                                                                        !1),
                                                                    (r.error =
                                                                        null));
                                                                var a = (0,
                                                                o.pi)({}, t);
                                                                return (
                                                                    'function' ==
                                                                        typeof l &&
                                                                        (l =
                                                                            l(
                                                                                a
                                                                            )),
                                                                    'ignore' ===
                                                                        b &&
                                                                        es(a) &&
                                                                        delete a.errors,
                                                                    f.markMutationResult(
                                                                        {
                                                                            mutationId:
                                                                                e,
                                                                            result: a,
                                                                            document:
                                                                                n,
                                                                            variables:
                                                                                i,
                                                                            fetchPolicy:
                                                                                y,
                                                                            errorPolicy:
                                                                                b,
                                                                            context:
                                                                                k,
                                                                            update: p,
                                                                            updateQueries:
                                                                                u,
                                                                            awaitRefetchQueries:
                                                                                h,
                                                                            refetchQueries:
                                                                                l,
                                                                            removeOptimistic:

                                                                                    (
                                                                                        c
                                                                                    ) ?
                                                                                        e
                                                                                    :   void 0,
                                                                            onQueryUpdated:
                                                                                d,
                                                                            keepRootFields:
                                                                                g,
                                                                        }
                                                                    )
                                                                );
                                                            }
                                                        ).subscribe({
                                                            next: function (e) {
                                                                f.broadcastQueries(),
                                                                    ('hasNext' in
                                                                        e &&
                                                                        !1 !==
                                                                            e.hasNext) ||
                                                                        t(e);
                                                            },
                                                            error: function (
                                                                t
                                                            ) {
                                                                r &&
                                                                    ((r.loading =
                                                                        !1),
                                                                    (r.error =
                                                                        t)),
                                                                    c &&
                                                                        f.cache.removeOptimistic(
                                                                            e
                                                                        ),
                                                                    f.broadcastQueries(),
                                                                    a(
                                                                        (
                                                                            t instanceof
                                                                                N.cA
                                                                        ) ?
                                                                            t
                                                                        :   new N.cA(
                                                                                {
                                                                                    networkError:
                                                                                        t,
                                                                                }
                                                                            )
                                                                    );
                                                            },
                                                        });
                                                    }),
                                                ]
                                            );
                                    }
                                });
                            });
                        }),
                        (e.prototype.markMutationResult = function (e, t) {
                            var r = this;
                            void 0 === t && (t = this.cache);
                            var n = e.result,
                                i = [],
                                a = 'no-cache' === e.fetchPolicy;
                            if (!a && eC(n, e.errorPolicy)) {
                                if (
                                    (G(n) ||
                                        i.push({
                                            result: n.data,
                                            dataId: 'ROOT_MUTATION',
                                            query: e.document,
                                            variables: e.variables,
                                        }),
                                    G(n) && (0, L.O)(n.incremental))
                                ) {
                                    var s = t.diff({
                                            id: 'ROOT_MUTATION',
                                            query: this.getDocumentInfo(
                                                e.document
                                            ).asQuery,
                                            variables: e.variables,
                                            optimistic: !1,
                                            returnPartialData: !0,
                                        }),
                                        u = void 0;
                                    s.result && (u = B(s.result, n)),
                                        void 0 !== u &&
                                            ((n.data = u),
                                            i.push({
                                                result: u,
                                                dataId: 'ROOT_MUTATION',
                                                query: e.document,
                                                variables: e.variables,
                                            }));
                                }
                                var c = e.updateQueries;
                                c &&
                                    this.queries.forEach(function (e, o) {
                                        var a = e.observableQuery,
                                            s = a && a.queryName;
                                        if (s && eV.call(c, s)) {
                                            var u = c[s],
                                                l = r.queries.get(o),
                                                f = l.document,
                                                h = l.variables,
                                                p = t.diff({
                                                    query: f,
                                                    variables: h,
                                                    returnPartialData: !0,
                                                    optimistic: !1,
                                                }),
                                                d = p.result;
                                            if (p.complete && d) {
                                                var v = u(d, {
                                                    mutationResult: n,
                                                    queryName:
                                                        (f && (0, T.rY)(f)) ||
                                                        void 0,
                                                    queryVariables: h,
                                                });
                                                v &&
                                                    i.push({
                                                        result: v,
                                                        dataId: 'ROOT_QUERY',
                                                        query: f,
                                                        variables: h,
                                                    });
                                            }
                                        }
                                    });
                            }
                            if (
                                i.length > 0 ||
                                (e.refetchQueries || '').length > 0 ||
                                e.update ||
                                e.onQueryUpdated ||
                                e.removeOptimistic
                            ) {
                                var l = [];
                                if (
                                    (this.refetchQueries({
                                        updateCache: function (t) {
                                            a ||
                                                i.forEach(function (e) {
                                                    return t.write(e);
                                                });
                                            var s,
                                                u = e.update,
                                                c =
                                                    !(
                                                        G((s = n)) ||
                                                        ('hasNext' in s &&
                                                            'data' in s)
                                                    ) ||
                                                    (G(n) && !n.hasNext);
                                            if (u) {
                                                if (!a) {
                                                    var l = t.diff({
                                                        id: 'ROOT_MUTATION',
                                                        query: r.getDocumentInfo(
                                                            e.document
                                                        ).asQuery,
                                                        variables: e.variables,
                                                        optimistic: !1,
                                                        returnPartialData: !0,
                                                    });
                                                    l.complete &&
                                                        ('incremental' in
                                                            (n = (0, o.pi)(
                                                                (0, o.pi)(
                                                                    {},
                                                                    n
                                                                ),
                                                                {
                                                                    data: l.result,
                                                                }
                                                            )) &&
                                                            delete n.incremental,
                                                        'hasNext' in n &&
                                                            delete n.hasNext);
                                                }
                                                c &&
                                                    u(t, n, {
                                                        context: e.context,
                                                        variables: e.variables,
                                                    });
                                            }
                                            a ||
                                                e.keepRootFields ||
                                                !c ||
                                                t.modify({
                                                    id: 'ROOT_MUTATION',
                                                    fields: function (e, t) {
                                                        var r = t.fieldName,
                                                            n = t.DELETE;
                                                        return (
                                                                '__typename' ===
                                                                    r
                                                            ) ?
                                                                e
                                                            :   n;
                                                    },
                                                });
                                        },
                                        include: e.refetchQueries,
                                        optimistic: !1,
                                        removeOptimistic: e.removeOptimistic,
                                        onQueryUpdated:
                                            e.onQueryUpdated || null,
                                    }).forEach(function (e) {
                                        return l.push(e);
                                    }),
                                    e.awaitRefetchQueries || e.onQueryUpdated)
                                )
                                    return Promise.all(l).then(function () {
                                        return n;
                                    });
                            }
                            return Promise.resolve(n);
                        }),
                        (e.prototype.markMutationOptimistic = function (e, t) {
                            var r = this,
                                n =
                                    'function' == typeof e ?
                                        e(t.variables, { IGNORE: eL })
                                    :   e;
                            return (
                                n !== eL &&
                                (this.cache.recordOptimisticTransaction(
                                    function (e) {
                                        try {
                                            r.markMutationResult(
                                                (0, o.pi)((0, o.pi)({}, t), {
                                                    result: { data: n },
                                                }),
                                                e
                                            );
                                        } catch (e) {
                                            !1 !== globalThis.__DEV__ &&
                                                a.kG.error(e);
                                        }
                                    },
                                    t.mutationId
                                ),
                                !0)
                            );
                        }),
                        (e.prototype.fetchQuery = function (e, t, r) {
                            return this.fetchConcastWithInfo(e, t, r).concast
                                .promise;
                        }),
                        (e.prototype.getQueryStore = function () {
                            var e = Object.create(null);
                            return (
                                this.queries.forEach(function (t, r) {
                                    e[r] = {
                                        variables: t.variables,
                                        networkStatus: t.networkStatus,
                                        networkError: t.networkError,
                                        graphQLErrors: t.graphQLErrors,
                                    };
                                }),
                                e
                            );
                        }),
                        (e.prototype.resetErrors = function (e) {
                            var t = this.queries.get(e);
                            t &&
                                ((t.networkError = void 0),
                                (t.graphQLErrors = []));
                        }),
                        (e.prototype.transform = function (e) {
                            return this.documentTransform.transformDocument(e);
                        }),
                        (e.prototype.getDocumentInfo = function (e) {
                            var t = this.transformCache;
                            if (!t.has(e)) {
                                var r = {
                                    hasClientExports: (0, j.mj)(e),
                                    hasForcedResolvers:
                                        this.localState.shouldForceResolvers(e),
                                    hasNonreactiveDirective: (0, j.FS)(
                                        ['nonreactive'],
                                        e
                                    ),
                                    clientQuery: this.localState.clientQuery(e),
                                    serverQuery: (0, X.bi)(
                                        [
                                            { name: 'client', remove: !0 },
                                            { name: 'connection' },
                                            { name: 'nonreactive' },
                                        ],
                                        e
                                    ),
                                    defaultVars: (0, T.O4)((0, T.$H)(e)),
                                    asQuery: (0, o.pi)((0, o.pi)({}, e), {
                                        definitions: e.definitions.map(
                                            function (e) {
                                                return (
                                                        'OperationDefinition' ===
                                                            e.kind &&
                                                            'query' !==
                                                                e.operation
                                                    ) ?
                                                        (0, o.pi)(
                                                            (0, o.pi)({}, e),
                                                            {
                                                                operation:
                                                                    'query',
                                                            }
                                                        )
                                                    :   e;
                                            }
                                        ),
                                    }),
                                };
                                t.set(e, r);
                            }
                            return t.get(e);
                        }),
                        (e.prototype.getVariables = function (e, t) {
                            return (0, o.pi)(
                                (0, o.pi)(
                                    {},
                                    this.getDocumentInfo(e).defaultVars
                                ),
                                t
                            );
                        }),
                        (e.prototype.watchQuery = function (e) {
                            var t = this.transform(e.query);
                            void 0 ===
                                (e = (0, o.pi)((0, o.pi)({}, e), {
                                    variables: this.getVariables(
                                        t,
                                        e.variables
                                    ),
                                })).notifyOnNetworkStatusChange &&
                                (e.notifyOnNetworkStatusChange = !1);
                            var r = new eQ(this),
                                n = new eO({
                                    queryManager: this,
                                    queryInfo: r,
                                    options: e,
                                });
                            return (
                                (n.lastQuery = t),
                                this.queries.set(n.queryId, r),
                                r.init({
                                    document: t,
                                    observableQuery: n,
                                    variables: n.variables,
                                }),
                                n
                            );
                        }),
                        (e.prototype.query = function (e, t) {
                            var r = this;
                            return (
                                void 0 === t && (t = this.generateQueryId()),
                                (0, a.kG)(e.query, 28),
                                (0, a.kG)('Document' === e.query.kind, 29),
                                (0, a.kG)(!e.returnPartialData, 30),
                                (0, a.kG)(!e.pollInterval, 31),
                                this.fetchQuery(
                                    t,
                                    (0, o.pi)((0, o.pi)({}, e), {
                                        query: this.transform(e.query),
                                    })
                                ).finally(function () {
                                    return r.stopQuery(t);
                                })
                            );
                        }),
                        (e.prototype.generateQueryId = function () {
                            return String(this.queryIdCounter++);
                        }),
                        (e.prototype.generateRequestId = function () {
                            return this.requestIdCounter++;
                        }),
                        (e.prototype.generateMutationId = function () {
                            return String(this.mutationIdCounter++);
                        }),
                        (e.prototype.stopQueryInStore = function (e) {
                            this.stopQueryInStoreNoBroadcast(e),
                                this.broadcastQueries();
                        }),
                        (e.prototype.stopQueryInStoreNoBroadcast = function (
                            e
                        ) {
                            var t = this.queries.get(e);
                            t && t.stop();
                        }),
                        (e.prototype.clearStore = function (e) {
                            return (
                                void 0 === e && (e = { discardWatches: !0 }),
                                this.cancelPendingFetches((0, a._K)(32)),
                                this.queries.forEach(function (e) {
                                    e.observableQuery ?
                                        (e.networkStatus = i.loading)
                                    :   e.stop();
                                }),
                                this.mutationStore &&
                                    (this.mutationStore = Object.create(null)),
                                this.cache.reset(e)
                            );
                        }),
                        (e.prototype.getObservableQueries = function (e) {
                            var t = this;
                            void 0 === e && (e = 'active');
                            var r = new Map(),
                                n = new Map(),
                                i = new Set();
                            return (
                                Array.isArray(e) &&
                                    e.forEach(function (e) {
                                        'string' == typeof e ? n.set(e, !1)
                                        : (0, ec.JW)(e) ?
                                            n.set(t.transform(e), !1)
                                        :   (0, V.s)(e) && e.query && i.add(e);
                                    }),
                                this.queries.forEach(function (t, i) {
                                    var o = t.observableQuery,
                                        a = t.document;
                                    if (o) {
                                        if ('all' === e) {
                                            r.set(i, o);
                                            return;
                                        }
                                        var s = o.queryName;
                                        if (
                                            'standby' ===
                                                o.options.fetchPolicy ||
                                            ('active' === e &&
                                                !o.hasObservers())
                                        )
                                            return;
                                        ('active' === e ||
                                            (s && n.has(s)) ||
                                            (a && n.has(a))) &&
                                            (r.set(i, o),
                                            s && n.set(s, !0),
                                            a && n.set(a, !0));
                                    }
                                }),
                                i.size &&
                                    i.forEach(function (e) {
                                        var n = (0, el.X)('legacyOneTimeQuery'),
                                            i = t
                                                .getQuery(n)
                                                .init({
                                                    document: e.query,
                                                    variables: e.variables,
                                                }),
                                            s = new eO({
                                                queryManager: t,
                                                queryInfo: i,
                                                options: (0, o.pi)(
                                                    (0, o.pi)({}, e),
                                                    {
                                                        fetchPolicy:
                                                            'network-only',
                                                    }
                                                ),
                                            });
                                        (0, a.kG)(s.queryId === n),
                                            i.setObservableQuery(s),
                                            r.set(n, s);
                                    }),
                                !1 !== globalThis.__DEV__ &&
                                    n.size &&
                                    n.forEach(function (e, t) {
                                        e ||
                                            !1 === globalThis.__DEV__ ||
                                            a.kG.warn(
                                                'string' == typeof t ? 33 : 34,
                                                t
                                            );
                                    }),
                                r
                            );
                        }),
                        (e.prototype.reFetchObservableQueries = function (e) {
                            var t = this;
                            void 0 === e && (e = !1);
                            var r = [];
                            return (
                                this.getObservableQueries(
                                    e ? 'all' : 'active'
                                ).forEach(function (n, i) {
                                    var o = n.options.fetchPolicy;
                                    n.resetLastResults(),
                                        (e ||
                                            ('standby' !== o &&
                                                'cache-only' !== o)) &&
                                            r.push(n.refetch()),
                                        t.getQuery(i).setDiff(null);
                                }),
                                this.broadcastQueries(),
                                Promise.all(r)
                            );
                        }),
                        (e.prototype.setObservableQuery = function (e) {
                            this.getQuery(e.queryId).setObservableQuery(e);
                        }),
                        (e.prototype.startGraphQLSubscription = function (e) {
                            var t = this,
                                r = e.query,
                                n = e.fetchPolicy,
                                i = e.errorPolicy,
                                o = void 0 === i ? 'none' : i,
                                a = e.variables,
                                s = e.context,
                                u = void 0 === s ? {} : s;
                            (r = this.transform(r)),
                                (a = this.getVariables(r, a));
                            var c = function (e) {
                                return t
                                    .getObservableFromLink(r, u, e)
                                    .map(function (i) {
                                        'no-cache' !== n &&
                                            (eC(i, o) &&
                                                t.cache.write({
                                                    query: r,
                                                    result: i.data,
                                                    dataId: 'ROOT_SUBSCRIPTION',
                                                    variables: e,
                                                }),
                                            t.broadcastQueries());
                                        var a = es(i),
                                            s = (0, N.ls)(i);
                                        if (a || s) {
                                            var u = {};
                                            if (
                                                (a &&
                                                    (u.graphQLErrors =
                                                        i.errors),
                                                s &&
                                                    (u.protocolErrors =
                                                        i.extensions[N.YG]),
                                                'none' === o || s)
                                            )
                                                throw new N.cA(u);
                                        }
                                        return (
                                            'ignore' === o && delete i.errors, i
                                        );
                                    });
                            };
                            if (this.getDocumentInfo(r).hasClientExports) {
                                var l = this.localState
                                    .addExportedVariables(r, a, u)
                                    .then(c);
                                return new D(function (e) {
                                    var t = null;
                                    return (
                                        l.then(function (r) {
                                            return (t = r.subscribe(e));
                                        }, e.error),
                                        function () {
                                            return t && t.unsubscribe();
                                        }
                                    );
                                });
                            }
                            return c(a);
                        }),
                        (e.prototype.stopQuery = function (e) {
                            this.stopQueryNoBroadcast(e),
                                this.broadcastQueries();
                        }),
                        (e.prototype.stopQueryNoBroadcast = function (e) {
                            this.stopQueryInStoreNoBroadcast(e),
                                this.removeQuery(e);
                        }),
                        (e.prototype.removeQuery = function (e) {
                            this.fetchCancelFns.delete(e),
                                this.queries.has(e) &&
                                    (this.getQuery(e).stop(),
                                    this.queries.delete(e));
                        }),
                        (e.prototype.broadcastQueries = function () {
                            this.onBroadcast && this.onBroadcast(),
                                this.queries.forEach(function (e) {
                                    return e.notify();
                                });
                        }),
                        (e.prototype.getLocalState = function () {
                            return this.localState;
                        }),
                        (e.prototype.getObservableFromLink = function (
                            e,
                            t,
                            r,
                            n
                        ) {
                            var i,
                                a,
                                s = this;
                            void 0 === n &&
                                (n =
                                    (
                                        null !==
                                            (i =
                                                null == t ? void 0 : (
                                                    t.queryDeduplication
                                                )) && void 0 !== i
                                    ) ?
                                        i
                                    :   this.queryDeduplication);
                            var u = this.getDocumentInfo(e),
                                c = u.serverQuery,
                                l = u.clientQuery;
                            if (c) {
                                var f = this.inFlightLinkObservables,
                                    h = this.link,
                                    p = {
                                        query: c,
                                        variables: r,
                                        operationName: (0, T.rY)(c) || void 0,
                                        context: this.prepareContext(
                                            (0, o.pi)((0, o.pi)({}, t), {
                                                forceFetch: !n,
                                            })
                                        ),
                                    };
                                if (((t = p.context), n)) {
                                    var d = (0, K.S)(c),
                                        v = (0, ei.B)(r),
                                        y = f.lookup(d, v);
                                    if (!(a = y.observable)) {
                                        var m = new ed([I(h, p)]);
                                        (a = y.observable = m),
                                            m.beforeNext(function () {
                                                f.remove(d, v);
                                            });
                                    }
                                } else a = new ed([I(h, p)]);
                            } else
                                (a = new ed([D.of({ data: {} })])),
                                    (t = this.prepareContext(t));
                            return (
                                l &&
                                    (a = ea(a, function (e) {
                                        return s.localState.runResolvers({
                                            document: l,
                                            remoteResult: e,
                                            context: t,
                                            variables: r,
                                        });
                                    })),
                                a
                            );
                        }),
                        (e.prototype.getResultsFromLink = function (e, t, r) {
                            var n = (e.lastRequestId =
                                    this.generateRequestId()),
                                o = this.cache.transformForLink(r.query);
                            return ea(
                                this.getObservableFromLink(
                                    o,
                                    r.context,
                                    r.variables
                                ),
                                function (a) {
                                    var s = eu(a),
                                        u = s.length > 0;
                                    if (n >= e.lastRequestId) {
                                        if (u && 'none' === r.errorPolicy)
                                            throw e.markError(
                                                new N.cA({ graphQLErrors: s })
                                            );
                                        e.markResult(a, o, r, t), e.markReady();
                                    }
                                    var c = {
                                        data: a.data,
                                        loading: !1,
                                        networkStatus: i.ready,
                                    };
                                    return (
                                        u &&
                                            'ignore' !== r.errorPolicy &&
                                            ((c.errors = s),
                                            (c.networkStatus = i.error)),
                                        c
                                    );
                                },
                                function (t) {
                                    var r =
                                        (0, N.MS)(t) ? t : (
                                            new N.cA({ networkError: t })
                                        );
                                    throw (
                                        (n >= e.lastRequestId && e.markError(r),
                                        r)
                                    );
                                }
                            );
                        }),
                        (e.prototype.fetchConcastWithInfo = function (
                            e,
                            t,
                            r,
                            n
                        ) {
                            var o,
                                a,
                                s = this;
                            void 0 === r && (r = i.loading),
                                void 0 === n && (n = t.query);
                            var u = this.getVariables(n, t.variables),
                                c = this.getQuery(e),
                                l = this.defaultOptions.watchQuery,
                                f = t.fetchPolicy,
                                h =
                                    void 0 === f ?
                                        (l && l.fetchPolicy) || 'cache-first'
                                    :   f,
                                p = t.errorPolicy,
                                d =
                                    void 0 === p ?
                                        (l && l.errorPolicy) || 'none'
                                    :   p,
                                v = t.returnPartialData,
                                y = t.notifyOnNetworkStatusChange,
                                m = t.context,
                                b = Object.assign({}, t, {
                                    query: n,
                                    variables: u,
                                    fetchPolicy: h,
                                    errorPolicy: d,
                                    returnPartialData: void 0 !== v && v,
                                    notifyOnNetworkStatusChange:
                                        void 0 !== y && y,
                                    context: void 0 === m ? {} : m,
                                }),
                                g = function (e) {
                                    b.variables = e;
                                    var n = s.fetchQueryByPolicy(c, b, r);
                                    return (
                                        'standby' !== b.fetchPolicy &&
                                            n.sources.length > 0 &&
                                            c.observableQuery &&
                                            c.observableQuery.applyNextFetchPolicy(
                                                'after-fetch',
                                                t
                                            ),
                                        n
                                    );
                                },
                                k = function () {
                                    return s.fetchCancelFns.delete(e);
                                };
                            if (
                                (this.fetchCancelFns.set(e, function (e) {
                                    k(),
                                        setTimeout(function () {
                                            return o.cancel(e);
                                        });
                                }),
                                this.getDocumentInfo(b.query).hasClientExports)
                            )
                                (o = new ed(
                                    this.localState
                                        .addExportedVariables(
                                            b.query,
                                            b.variables,
                                            b.context
                                        )
                                        .then(g)
                                        .then(function (e) {
                                            return e.sources;
                                        })
                                )),
                                    (a = !0);
                            else {
                                var w = g(b.variables);
                                (a = w.fromLink), (o = new ed(w.sources));
                            }
                            return (
                                o.promise.then(k, k),
                                { concast: o, fromLink: a }
                            );
                        }),
                        (e.prototype.refetchQueries = function (e) {
                            var t = this,
                                r = e.updateCache,
                                n = e.include,
                                i = e.optimistic,
                                o = void 0 !== i && i,
                                a = e.removeOptimistic,
                                s =
                                    void 0 === a ?
                                        o ? (0, el.X)('refetchQueries')
                                        :   void 0
                                    :   a,
                                u = e.onQueryUpdated,
                                c = new Map();
                            n &&
                                this.getObservableQueries(n).forEach(
                                    function (e, r) {
                                        c.set(r, {
                                            oq: e,
                                            lastDiff: t.getQuery(r).getDiff(),
                                        });
                                    }
                                );
                            var l = new Map();
                            return (
                                r &&
                                    this.cache.batch({
                                        update: r,
                                        optimistic: (o && s) || !1,
                                        removeOptimistic: s,
                                        onWatchUpdated: function (e, t, r) {
                                            var n =
                                                e.watcher instanceof eQ &&
                                                e.watcher.observableQuery;
                                            if (n) {
                                                if (u) {
                                                    c.delete(n.queryId);
                                                    var i = u(n, t, r);
                                                    return (
                                                        !0 === i &&
                                                            (i = n.refetch()),
                                                        !1 !== i && l.set(n, i),
                                                        i
                                                    );
                                                }
                                                null !== u &&
                                                    c.set(n.queryId, {
                                                        oq: n,
                                                        lastDiff: r,
                                                        diff: t,
                                                    });
                                            }
                                        },
                                    }),
                                c.size &&
                                    c.forEach(function (e, r) {
                                        var n,
                                            i = e.oq,
                                            o = e.lastDiff,
                                            a = e.diff;
                                        if (u) {
                                            if (!a) {
                                                var s = i.queryInfo;
                                                s.reset(), (a = s.getDiff());
                                            }
                                            n = u(i, a, o);
                                        }
                                        (u && !0 !== n) || (n = i.refetch()),
                                            !1 !== n && l.set(i, n),
                                            r.indexOf('legacyOneTimeQuery') >=
                                                0 && t.stopQueryNoBroadcast(r);
                                    }),
                                s && this.cache.removeOptimistic(s),
                                l
                            );
                        }),
                        (e.prototype.fetchQueryByPolicy = function (e, t, r) {
                            var n = this,
                                a = t.query,
                                s = t.variables,
                                u = t.fetchPolicy,
                                c = t.refetchWritePolicy,
                                l = t.errorPolicy,
                                f = t.returnPartialData,
                                h = t.context,
                                p = t.notifyOnNetworkStatusChange,
                                d = e.networkStatus;
                            e.init({
                                document: a,
                                variables: s,
                                networkStatus: r,
                            });
                            var v = function () {
                                    return e.getDiff();
                                },
                                y = function (t, r) {
                                    void 0 === r &&
                                        (r = e.networkStatus || i.loading);
                                    var u = t.result;
                                    !1 === globalThis.__DEV__ ||
                                        f ||
                                        (0, en.D)(u, {}) ||
                                        eD(t.missing);
                                    var c = function (e) {
                                        return D.of(
                                            (0, o.pi)(
                                                {
                                                    data: e,
                                                    loading: ev(r),
                                                    networkStatus: r,
                                                },
                                                t.complete ? null : (
                                                    { partial: !0 }
                                                )
                                            )
                                        );
                                    };
                                    return (
                                        (
                                            u &&
                                                n.getDocumentInfo(a)
                                                    .hasForcedResolvers
                                        ) ?
                                            n.localState
                                                .runResolvers({
                                                    document: a,
                                                    remoteResult: { data: u },
                                                    context: h,
                                                    variables: s,
                                                    onlyRunForcedResolvers: !0,
                                                })
                                                .then(function (e) {
                                                    return c(e.data || void 0);
                                                })
                                        : (
                                            'none' === l &&
                                            r === i.refetch &&
                                            Array.isArray(t.missing)
                                        ) ?
                                            c(void 0)
                                        :   c(u)
                                    );
                                },
                                m =
                                    'no-cache' === u ? 0
                                    : r === i.refetch && 'merge' !== c ? 1
                                    : 2,
                                b = function () {
                                    return n.getResultsFromLink(e, m, {
                                        query: a,
                                        variables: s,
                                        context: h,
                                        fetchPolicy: u,
                                        errorPolicy: l,
                                    });
                                },
                                g =
                                    p &&
                                    'number' == typeof d &&
                                    d !== r &&
                                    ev(r);
                            switch (u) {
                                default:
                                case 'cache-first':
                                    var k = v();
                                    if (k.complete)
                                        return {
                                            fromLink: !1,
                                            sources: [y(k, e.markReady())],
                                        };
                                    if (f || g)
                                        return {
                                            fromLink: !0,
                                            sources: [y(k), b()],
                                        };
                                    return { fromLink: !0, sources: [b()] };
                                case 'cache-and-network':
                                    var k = v();
                                    if (k.complete || f || g)
                                        return {
                                            fromLink: !0,
                                            sources: [y(k), b()],
                                        };
                                    return { fromLink: !0, sources: [b()] };
                                case 'cache-only':
                                    return {
                                        fromLink: !1,
                                        sources: [y(v(), e.markReady())],
                                    };
                                case 'network-only':
                                    if (g)
                                        return {
                                            fromLink: !0,
                                            sources: [y(v()), b()],
                                        };
                                    return { fromLink: !0, sources: [b()] };
                                case 'no-cache':
                                    if (g)
                                        return {
                                            fromLink: !0,
                                            sources: [y(e.getDiff()), b()],
                                        };
                                    return { fromLink: !0, sources: [b()] };
                                case 'standby':
                                    return { fromLink: !1, sources: [] };
                            }
                        }),
                        (e.prototype.getQuery = function (e) {
                            return (
                                e &&
                                    !this.queries.has(e) &&
                                    this.queries.set(e, new eQ(this, e)),
                                this.queries.get(e)
                            );
                        }),
                        (e.prototype.prepareContext = function (e) {
                            void 0 === e && (e = {});
                            var t = this.localState.prepareContext(e);
                            return (0, o.pi)(
                                (0, o.pi)(
                                    (0, o.pi)({}, this.defaultContext),
                                    t
                                ),
                                { clientAwareness: this.clientAwareness }
                            );
                        }),
                        e
                    );
                })(),
                eG = r(9479),
                eB = r(283),
                eW = !1,
                eY = (function () {
                    function e(e) {
                        var t = this;
                        if (
                            ((this.resetStoreCallbacks = []),
                            (this.clearStoreCallbacks = []),
                            !e.cache)
                        )
                            throw (0, a._K)(15);
                        var r = e.uri,
                            n = e.credentials,
                            i = e.headers,
                            o = e.cache,
                            s = e.documentTransform,
                            u = e.ssrMode,
                            c = void 0 !== u && u,
                            l = e.ssrForceFetchDelay,
                            f = void 0 === l ? 0 : l,
                            h = e.connectToDevTools,
                            p =
                                void 0 === h ?
                                    !window.__APOLLO_CLIENT__ &&
                                    !1 !== globalThis.__DEV__
                                :   h,
                            d = e.queryDeduplication,
                            v = void 0 === d || d,
                            y = e.defaultOptions,
                            m = e.defaultContext,
                            b = e.assumeImmutableResults,
                            g = void 0 === b ? o.assumeImmutableResults : b,
                            k = e.resolvers,
                            w = e.typeDefs,
                            _ = e.fragmentMatcher,
                            O = e.name,
                            S = e.version,
                            E = e.link;
                        E ||
                            (E =
                                r ?
                                    new er({
                                        uri: r,
                                        credentials: n,
                                        headers: i,
                                    })
                                :   R.empty()),
                            (this.link = E),
                            (this.cache = o),
                            (this.disableNetworkFetches = c || f > 0),
                            (this.queryDeduplication = v),
                            (this.defaultOptions = y || Object.create(null)),
                            (this.typeDefs = w),
                            f &&
                                setTimeout(function () {
                                    return (t.disableNetworkFetches = !1);
                                }, f),
                            (this.watchQuery = this.watchQuery.bind(this)),
                            (this.query = this.query.bind(this)),
                            (this.mutate = this.mutate.bind(this)),
                            (this.resetStore = this.resetStore.bind(this)),
                            (this.reFetchObservableQueries =
                                this.reFetchObservableQueries.bind(this)),
                            (this.version = P.i),
                            (this.localState = new eR({
                                cache: o,
                                client: this,
                                resolvers: k,
                                fragmentMatcher: _,
                            })),
                            (this.queryManager = new ez({
                                cache: this.cache,
                                link: this.link,
                                defaultOptions: this.defaultOptions,
                                defaultContext: m,
                                documentTransform: s,
                                queryDeduplication: v,
                                ssrMode: c,
                                clientAwareness: { name: O, version: S },
                                localState: this.localState,
                                assumeImmutableResults: g,
                                onBroadcast:
                                    p ?
                                        function () {
                                            t.devToolsHookCb &&
                                                t.devToolsHookCb({
                                                    action: {},
                                                    state: {
                                                        queries:
                                                            t.queryManager.getQueryStore(),
                                                        mutations:
                                                            t.queryManager
                                                                .mutationStore ||
                                                            {},
                                                    },
                                                    dataWithOptimisticResults:
                                                        t.cache.extract(!0),
                                                });
                                        }
                                    :   void 0,
                            })),
                            p && this.connectToDevTools();
                    }
                    return (
                        (e.prototype.connectToDevTools = function () {
                            var e = window,
                                t = Symbol.for('apollo.devtools');
                            (e[t] = e[t] || []).push(this),
                                (e.__APOLLO_CLIENT__ = this),
                                eW ||
                                    !1 === globalThis.__DEV__ ||
                                    ((eW = !0),
                                    setTimeout(function () {
                                        if (
                                            window.document &&
                                            window.top === window.self &&
                                            !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__
                                        ) {
                                            var e = window.navigator,
                                                t = e && e.userAgent,
                                                r = void 0;
                                            'string' == typeof t &&
                                                (t.indexOf('Chrome/') > -1 ?
                                                    (r =
                                                        'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm')
                                                :   t.indexOf('Firefox/') >
                                                        -1 &&
                                                    (r =
                                                        'https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/')),
                                                r &&
                                                    !1 !== globalThis.__DEV__ &&
                                                    a.kG.log(
                                                        'Download the Apollo DevTools for a better development experience: %s',
                                                        r
                                                    );
                                        }
                                    }, 1e4));
                        }),
                        Object.defineProperty(
                            e.prototype,
                            'documentTransform',
                            {
                                get: function () {
                                    return this.queryManager.documentTransform;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }
                        ),
                        (e.prototype.stop = function () {
                            this.queryManager.stop();
                        }),
                        (e.prototype.watchQuery = function (e) {
                            return (
                                this.defaultOptions.watchQuery &&
                                    (e = (0, eG.J)(
                                        this.defaultOptions.watchQuery,
                                        e
                                    )),
                                this.disableNetworkFetches &&
                                    ('network-only' === e.fetchPolicy ||
                                        'cache-and-network' ===
                                            e.fetchPolicy) &&
                                    (e = (0, o.pi)((0, o.pi)({}, e), {
                                        fetchPolicy: 'cache-first',
                                    })),
                                this.queryManager.watchQuery(e)
                            );
                        }),
                        (e.prototype.query = function (e) {
                            return (
                                this.defaultOptions.query &&
                                    (e = (0, eG.J)(
                                        this.defaultOptions.query,
                                        e
                                    )),
                                (0, a.kG)(
                                    'cache-and-network' !== e.fetchPolicy,
                                    16
                                ),
                                this.disableNetworkFetches &&
                                    'network-only' === e.fetchPolicy &&
                                    (e = (0, o.pi)((0, o.pi)({}, e), {
                                        fetchPolicy: 'cache-first',
                                    })),
                                this.queryManager.query(e)
                            );
                        }),
                        (e.prototype.mutate = function (e) {
                            return (
                                this.defaultOptions.mutate &&
                                    (e = (0, eG.J)(
                                        this.defaultOptions.mutate,
                                        e
                                    )),
                                this.queryManager.mutate(e)
                            );
                        }),
                        (e.prototype.subscribe = function (e) {
                            return this.queryManager.startGraphQLSubscription(
                                e
                            );
                        }),
                        (e.prototype.readQuery = function (e, t) {
                            return (
                                void 0 === t && (t = !1),
                                this.cache.readQuery(e, t)
                            );
                        }),
                        (e.prototype.readFragment = function (e, t) {
                            return (
                                void 0 === t && (t = !1),
                                this.cache.readFragment(e, t)
                            );
                        }),
                        (e.prototype.writeQuery = function (e) {
                            var t = this.cache.writeQuery(e);
                            return (
                                !1 !== e.broadcast &&
                                    this.queryManager.broadcastQueries(),
                                t
                            );
                        }),
                        (e.prototype.writeFragment = function (e) {
                            var t = this.cache.writeFragment(e);
                            return (
                                !1 !== e.broadcast &&
                                    this.queryManager.broadcastQueries(),
                                t
                            );
                        }),
                        (e.prototype.__actionHookForDevTools = function (e) {
                            this.devToolsHookCb = e;
                        }),
                        (e.prototype.__requestRaw = function (e) {
                            return I(this.link, e);
                        }),
                        (e.prototype.resetStore = function () {
                            var e = this;
                            return Promise.resolve()
                                .then(function () {
                                    return e.queryManager.clearStore({
                                        discardWatches: !1,
                                    });
                                })
                                .then(function () {
                                    return Promise.all(
                                        e.resetStoreCallbacks.map(function (e) {
                                            return e();
                                        })
                                    );
                                })
                                .then(function () {
                                    return e.reFetchObservableQueries();
                                });
                        }),
                        (e.prototype.clearStore = function () {
                            var e = this;
                            return Promise.resolve()
                                .then(function () {
                                    return e.queryManager.clearStore({
                                        discardWatches: !0,
                                    });
                                })
                                .then(function () {
                                    return Promise.all(
                                        e.clearStoreCallbacks.map(function (e) {
                                            return e();
                                        })
                                    );
                                });
                        }),
                        (e.prototype.onResetStore = function (e) {
                            var t = this;
                            return (
                                this.resetStoreCallbacks.push(e),
                                function () {
                                    t.resetStoreCallbacks =
                                        t.resetStoreCallbacks.filter(
                                            function (t) {
                                                return t !== e;
                                            }
                                        );
                                }
                            );
                        }),
                        (e.prototype.onClearStore = function (e) {
                            var t = this;
                            return (
                                this.clearStoreCallbacks.push(e),
                                function () {
                                    t.clearStoreCallbacks =
                                        t.clearStoreCallbacks.filter(
                                            function (t) {
                                                return t !== e;
                                            }
                                        );
                                }
                            );
                        }),
                        (e.prototype.reFetchObservableQueries = function (e) {
                            return this.queryManager.reFetchObservableQueries(
                                e
                            );
                        }),
                        (e.prototype.refetchQueries = function (e) {
                            var t = this.queryManager.refetchQueries(e),
                                r = [],
                                n = [];
                            t.forEach(function (e, t) {
                                r.push(t), n.push(e);
                            });
                            var i = Promise.all(n);
                            return (
                                (i.queries = r),
                                (i.results = n),
                                i.catch(function (e) {
                                    !1 !== globalThis.__DEV__ &&
                                        a.kG.debug(17, e);
                                }),
                                i
                            );
                        }),
                        (e.prototype.getObservableQueries = function (e) {
                            return (
                                void 0 === e && (e = 'active'),
                                this.queryManager.getObservableQueries(e)
                            );
                        }),
                        (e.prototype.extract = function (e) {
                            return this.cache.extract(e);
                        }),
                        (e.prototype.restore = function (e) {
                            return this.cache.restore(e);
                        }),
                        (e.prototype.addResolvers = function (e) {
                            this.localState.addResolvers(e);
                        }),
                        (e.prototype.setResolvers = function (e) {
                            this.localState.setResolvers(e);
                        }),
                        (e.prototype.getResolvers = function () {
                            return this.localState.getResolvers();
                        }),
                        (e.prototype.setLocalStateFragmentMatcher = function (
                            e
                        ) {
                            this.localState.setFragmentMatcher(e);
                        }),
                        (e.prototype.setLink = function (e) {
                            this.link = this.queryManager.link = e;
                        }),
                        Object.defineProperty(e.prototype, 'defaultContext', {
                            get: function () {
                                return this.queryManager.defaultContext;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            !1 !== globalThis.__DEV__ &&
                (eY.prototype.getMemoryInternals = eB.su);
        },
        1816: function (e, t, r) {
            r.d(t, {
                e: function () {
                    return s;
                },
            });
            var n = r(6936),
                i = r(6920),
                o = r(209),
                a = r(2360),
                s = function (e) {
                    var t = e.client,
                        r = e.children,
                        s = (0, a.K)(),
                        u = o.useContext(s),
                        c = o.useMemo(
                            function () {
                                return (0, n.pi)((0, n.pi)({}, u), {
                                    client: t || u.client,
                                });
                            },
                            [u, t]
                        );
                    return (
                        (0, i.kG)(c.client, 46),
                        o.createElement(s.Provider, { value: c }, r)
                    );
                };
        },
        6027: function (e, t, r) {
            r.d(t, {
                O: function () {
                    return i;
                },
                k: function () {
                    return n;
                },
            });
            var n = Array.isArray;
            function i(e) {
                return Array.isArray(e) && e.length > 0;
            }
        },
        3530: function (e, t, r) {
            r.d(t, {
                B: function () {
                    return s;
                },
            });
            var n,
                i = r(442),
                o = r(7456),
                a = r(283),
                s = Object.assign(
                    function (e) {
                        return JSON.stringify(e, u);
                    },
                    {
                        reset: function () {
                            n = new i.L(o.Q.canonicalStringify || 1e3);
                        },
                    }
                );
            function u(e, t) {
                if (t && 'object' == typeof t) {
                    var r = Object.getPrototypeOf(t);
                    if (r === Object.prototype || null === r) {
                        var i = Object.keys(t);
                        if (i.every(c)) return t;
                        var o = JSON.stringify(i),
                            a = n.get(o);
                        if (!a) {
                            i.sort();
                            var s = JSON.stringify(i);
                            (a = n.get(s) || i), n.set(o, a), n.set(s, a);
                        }
                        var u = Object.create(r);
                        return (
                            a.forEach(function (e) {
                                u[e] = t[e];
                            }),
                            u
                        );
                    }
                }
                return t;
            }
            function c(e, t, r) {
                return 0 === t || r[t - 1] <= e;
            }
            !1 !== globalThis.__DEV__ &&
                (0, a.zP)('canonicalStringify', function () {
                    return n.size;
                }),
                s.reset();
        },
        9362: function (e, t, r) {
            r.d(t, {
                X: function () {
                    return i;
                },
            });
            var n = Object.prototype.toString;
            function i(e) {
                return (function e(t, r) {
                    switch (n.call(t)) {
                        case '[object Array]':
                            if ((r = r || new Map()).has(t)) return r.get(t);
                            var i = t.slice(0);
                            return (
                                r.set(t, i),
                                i.forEach(function (t, n) {
                                    i[n] = e(t, r);
                                }),
                                i
                            );
                        case '[object Object]':
                            if ((r = r || new Map()).has(t)) return r.get(t);
                            var o = Object.create(Object.getPrototypeOf(t));
                            return (
                                r.set(t, o),
                                Object.keys(t).forEach(function (n) {
                                    o[n] = e(t[n], r);
                                }),
                                o
                            );
                        default:
                            return t;
                    }
                })(e);
            }
        },
        3246: function (e, t, r) {
            r.d(t, {
                Ee: function () {
                    return a;
                },
                bw: function () {
                    return s;
                },
                w0: function () {
                    return c;
                },
            });
            var n = r(6936),
                i = r(1884),
                o = Object.prototype.hasOwnProperty;
            function a() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return s(e);
            }
            function s(e) {
                var t = e[0] || {},
                    r = e.length;
                if (r > 1)
                    for (var n = new c(), i = 1; i < r; ++i)
                        t = n.merge(t, e[i]);
                return t;
            }
            var u = function (e, t, r) {
                    return this.merge(e[r], t[r]);
                },
                c = (function () {
                    function e(e) {
                        void 0 === e && (e = u),
                            (this.reconciler = e),
                            (this.isObject = i.s),
                            (this.pastCopies = new Set());
                    }
                    return (
                        (e.prototype.merge = function (e, t) {
                            for (
                                var r = this, a = [], s = 2;
                                s < arguments.length;
                                s++
                            )
                                a[s - 2] = arguments[s];
                            return (0, i.s)(t) && (0, i.s)(e) ?
                                    (Object.keys(t).forEach(function (i) {
                                        if (o.call(e, i)) {
                                            var s = e[i];
                                            if (t[i] !== s) {
                                                var u = r.reconciler.apply(
                                                    r,
                                                    (0, n.ev)([e, t, i], a, !1)
                                                );
                                                u !== s &&
                                                    ((e =
                                                        r.shallowCopyForMerge(
                                                            e
                                                        ))[i] = u);
                                            }
                                        } else
                                            (e = r.shallowCopyForMerge(e))[i] =
                                                t[i];
                                    }),
                                    e)
                                :   t;
                        }),
                        (e.prototype.shallowCopyForMerge = function (e) {
                            return (
                                (0, i.s)(e) &&
                                    !this.pastCopies.has(e) &&
                                    ((e =
                                        Array.isArray(e) ?
                                            e.slice(0)
                                        :   (0, n.pi)(
                                                {
                                                    __proto__:
                                                        Object.getPrototypeOf(
                                                            e
                                                        ),
                                                },
                                                e
                                            )),
                                    this.pastCopies.add(e)),
                                e
                            );
                        }),
                        e
                    );
                })();
        },
        3984: function (e, t, r) {
            r.d(t, {
                A: function () {
                    return f;
                },
            });
            var n = r(9925),
                i = r(6877),
                o = r(2965),
                a = r(6920),
                s = r(4659),
                u = r(3268),
                c = r(7456);
            function l(e) {
                return e;
            }
            var f = (function () {
                function e(e, t) {
                    void 0 === t && (t = Object.create(null)),
                        (this.resultCache = i.sy ? new WeakSet() : new Set()),
                        (this.transform = e),
                        t.getCacheKey && (this.getCacheKey = t.getCacheKey),
                        (this.cached = !1 !== t.cache),
                        this.resetCache();
                }
                return (
                    (e.prototype.getCacheKey = function (e) {
                        return [e];
                    }),
                    (e.identity = function () {
                        return new e(l, { cache: !1 });
                    }),
                    (e.split = function (t, r, n) {
                        return (
                            void 0 === n && (n = e.identity()),
                            Object.assign(
                                new e(
                                    function (e) {
                                        return (t(e) ? r : n).transformDocument(
                                            e
                                        );
                                    },
                                    { cache: !1 }
                                ),
                                { left: r, right: n }
                            )
                        );
                    }),
                    (e.prototype.resetCache = function () {
                        var t = this;
                        if (this.cached) {
                            var r = new n.B(i.mr);
                            this.performWork = (0, u.re)(
                                e.prototype.performWork.bind(this),
                                {
                                    makeCacheKey: function (e) {
                                        var n = t.getCacheKey(e);
                                        if (n)
                                            return (
                                                (0, a.kG)(Array.isArray(n), 66),
                                                r.lookupArray(n)
                                            );
                                    },
                                    max: c.Q['documentTransform.cache'],
                                    cache: s.k,
                                }
                            );
                        }
                    }),
                    (e.prototype.performWork = function (e) {
                        return (0, o.A$)(e), this.transform(e);
                    }),
                    (e.prototype.transformDocument = function (e) {
                        if (this.resultCache.has(e)) return e;
                        var t = this.performWork(e);
                        return this.resultCache.add(t), t;
                    }),
                    (e.prototype.concat = function (t) {
                        var r = this;
                        return Object.assign(
                            new e(
                                function (e) {
                                    return t.transformDocument(
                                        r.transformDocument(e)
                                    );
                                },
                                { cache: !1 }
                            ),
                            { left: this, right: t }
                        );
                    }),
                    e
                );
            })();
        },
        247: function (e, t, r) {
            r.d(t, {
                FS: function () {
                    return a;
                },
                LZ: function () {
                    return o;
                },
                mj: function () {
                    return s;
                },
            });
            var n = r(6920),
                i = r(5537);
            function o(e, t) {
                var r,
                    i = e.directives;
                return (
                    !i ||
                    !i.length ||
                    ((r = []),
                    i &&
                        i.length &&
                        i.forEach(function (e) {
                            var t;
                            if (
                                !(
                                    'skip' !== (t = e.name.value) &&
                                    'include' !== t
                                )
                            ) {
                                var i = e.arguments,
                                    o = e.name.value;
                                (0, n.kG)(i && 1 === i.length, 68, o);
                                var a = i[0];
                                (0, n.kG)(
                                    a.name && 'if' === a.name.value,
                                    69,
                                    o
                                );
                                var s = a.value;
                                (0, n.kG)(
                                    s &&
                                        ('Variable' === s.kind ||
                                            'BooleanValue' === s.kind),
                                    70,
                                    o
                                ),
                                    r.push({ directive: e, ifArgument: a });
                            }
                        }),
                    r).every(function (e) {
                        var r = e.directive,
                            i = e.ifArgument,
                            o = !1;
                        return (
                            'Variable' === i.value.kind ?
                                ((o = t && t[i.value.name.value]),
                                (0, n.kG)(void 0 !== o, 67, r.name.value))
                            :   (o = i.value.value),
                            'skip' === r.name.value ? !o : o
                        );
                    })
                );
            }
            function a(e, t, r) {
                var n = new Set(e),
                    o = n.size;
                return (
                    (0, i.Vn)(t, {
                        Directive: function (e) {
                            if (n.delete(e.name.value) && (!r || !n.size))
                                return i.$_;
                        },
                    }),
                    r ? !n.size : n.size < o
                );
            }
            function s(e) {
                return e && a(['client', 'export'], e, !0);
            }
        },
        6696: function (e, t, r) {
            r.d(t, {
                F: function () {
                    return a;
                },
                Yk: function () {
                    return o;
                },
                hi: function () {
                    return s;
                },
            });
            var n = r(6936),
                i = r(6920);
            function o(e, t) {
                var r = t,
                    o = [];
                return (
                    e.definitions.forEach(function (e) {
                        if ('OperationDefinition' === e.kind)
                            throw (0, i._K)(
                                71,
                                e.operation,
                                e.name ?
                                    " named '".concat(e.name.value, "'")
                                :   ''
                            );
                        'FragmentDefinition' === e.kind && o.push(e);
                    }),
                    void 0 === r &&
                        ((0, i.kG)(1 === o.length, 72, o.length),
                        (r = o[0].name.value)),
                    (0, n.pi)((0, n.pi)({}, e), {
                        definitions: (0, n.ev)(
                            [
                                {
                                    kind: 'OperationDefinition',
                                    operation: 'query',
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {
                                                    kind: 'Name',
                                                    value: r,
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                            e.definitions,
                            !0
                        ),
                    })
                );
            }
            function a(e) {
                void 0 === e && (e = []);
                var t = {};
                return (
                    e.forEach(function (e) {
                        t[e.name.value] = e;
                    }),
                    t
                );
            }
            function s(e, t) {
                switch (e.kind) {
                    case 'InlineFragment':
                        return e;
                    case 'FragmentSpread':
                        var r = e.name.value;
                        if ('function' == typeof t) return t(r);
                        var n = t && t[r];
                        return (0, i.kG)(n, 73, r), n || null;
                    default:
                        return null;
                }
            }
        },
        2965: function (e, t, r) {
            r.d(t, {
                $H: function () {
                    return a;
                },
                A$: function () {
                    return o;
                },
                O4: function () {
                    return h;
                },
                iW: function () {
                    return c;
                },
                kU: function () {
                    return u;
                },
                p$: function () {
                    return f;
                },
                pD: function () {
                    return l;
                },
                rY: function () {
                    return s;
                },
            });
            var n = r(6920),
                i = r(4727);
            function o(e) {
                (0, n.kG)(e && 'Document' === e.kind, 74);
                var t = e.definitions
                    .filter(function (e) {
                        return 'FragmentDefinition' !== e.kind;
                    })
                    .map(function (e) {
                        if ('OperationDefinition' !== e.kind)
                            throw (0, n._K)(75, e.kind);
                        return e;
                    });
                return (0, n.kG)(t.length <= 1, 76, t.length), e;
            }
            function a(e) {
                return (
                    o(e),
                    e.definitions.filter(function (e) {
                        return 'OperationDefinition' === e.kind;
                    })[0]
                );
            }
            function s(e) {
                return (
                    e.definitions
                        .filter(function (e) {
                            return 'OperationDefinition' === e.kind && !!e.name;
                        })
                        .map(function (e) {
                            return e.name.value;
                        })[0] || null
                );
            }
            function u(e) {
                return e.definitions.filter(function (e) {
                    return 'FragmentDefinition' === e.kind;
                });
            }
            function c(e) {
                var t = a(e);
                return (0, n.kG)(t && 'query' === t.operation, 77), t;
            }
            function l(e) {
                (0, n.kG)('Document' === e.kind, 78),
                    (0, n.kG)(e.definitions.length <= 1, 79);
                var t = e.definitions[0];
                return (0, n.kG)('FragmentDefinition' === t.kind, 80), t;
            }
            function f(e) {
                o(e);
                for (var t, r = 0, i = e.definitions; r < i.length; r++) {
                    var a = i[r];
                    if ('OperationDefinition' === a.kind) {
                        var s = a.operation;
                        if (
                            'query' === s ||
                            'mutation' === s ||
                            'subscription' === s
                        )
                            return a;
                    }
                    'FragmentDefinition' !== a.kind || t || (t = a);
                }
                if (t) return t;
                throw (0, n._K)(81);
            }
            function h(e) {
                var t = Object.create(null),
                    r = e && e.variableDefinitions;
                return (
                    r &&
                        r.length &&
                        r.forEach(function (e) {
                            e.defaultValue &&
                                (0, i.vb)(t, e.variable.name, e.defaultValue);
                        }),
                    t
                );
            }
        },
        3631: function (e, t, r) {
            r.d(t, {
                S: function () {
                    return b;
                },
            });
            var n,
                i = r(4854);
            let o = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
            function a(e) {
                return s[e.charCodeAt(0)];
            }
            let s = [
                '\\u0000',
                '\\u0001',
                '\\u0002',
                '\\u0003',
                '\\u0004',
                '\\u0005',
                '\\u0006',
                '\\u0007',
                '\\b',
                '\\t',
                '\\n',
                '\\u000B',
                '\\f',
                '\\r',
                '\\u000E',
                '\\u000F',
                '\\u0010',
                '\\u0011',
                '\\u0012',
                '\\u0013',
                '\\u0014',
                '\\u0015',
                '\\u0016',
                '\\u0017',
                '\\u0018',
                '\\u0019',
                '\\u001A',
                '\\u001B',
                '\\u001C',
                '\\u001D',
                '\\u001E',
                '\\u001F',
                '',
                '',
                '\\"',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '\\\\',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '\\u007F',
                '\\u0080',
                '\\u0081',
                '\\u0082',
                '\\u0083',
                '\\u0084',
                '\\u0085',
                '\\u0086',
                '\\u0087',
                '\\u0088',
                '\\u0089',
                '\\u008A',
                '\\u008B',
                '\\u008C',
                '\\u008D',
                '\\u008E',
                '\\u008F',
                '\\u0090',
                '\\u0091',
                '\\u0092',
                '\\u0093',
                '\\u0094',
                '\\u0095',
                '\\u0096',
                '\\u0097',
                '\\u0098',
                '\\u0099',
                '\\u009A',
                '\\u009B',
                '\\u009C',
                '\\u009D',
                '\\u009E',
                '\\u009F',
            ];
            var u = r(5537);
            let c = {
                Name: { leave: (e) => e.value },
                Variable: { leave: (e) => '$' + e.name },
                Document: { leave: (e) => l(e.definitions, '\n\n') },
                OperationDefinition: {
                    leave(e) {
                        let t = h('(', l(e.variableDefinitions, ', '), ')'),
                            r = l(
                                [
                                    e.operation,
                                    l([e.name, t]),
                                    l(e.directives, ' '),
                                ],
                                ' '
                            );
                        return ('query' === r ? '' : r + ' ') + e.selectionSet;
                    },
                },
                VariableDefinition: {
                    leave: (e) => {
                        let {
                            variable: t,
                            type: r,
                            defaultValue: n,
                            directives: i,
                        } = e;
                        return t + ': ' + r + h(' = ', n) + h(' ', l(i, ' '));
                    },
                },
                SelectionSet: {
                    leave: (e) => {
                        let { selections: t } = e;
                        return f(t);
                    },
                },
                Field: {
                    leave(e) {
                        let {
                                alias: t,
                                name: r,
                                arguments: n,
                                directives: i,
                                selectionSet: o,
                            } = e,
                            a = h('', t, ': ') + r,
                            s = a + h('(', l(n, ', '), ')');
                        return (
                            s.length > 80 &&
                                (s = a + h('(\n', p(l(n, '\n')), '\n)')),
                            l([s, l(i, ' '), o], ' ')
                        );
                    },
                },
                Argument: {
                    leave: (e) => {
                        let { name: t, value: r } = e;
                        return t + ': ' + r;
                    },
                },
                FragmentSpread: {
                    leave: (e) => {
                        let { name: t, directives: r } = e;
                        return '...' + t + h(' ', l(r, ' '));
                    },
                },
                InlineFragment: {
                    leave: (e) => {
                        let {
                            typeCondition: t,
                            directives: r,
                            selectionSet: n,
                        } = e;
                        return l(['...', h('on ', t), l(r, ' '), n], ' ');
                    },
                },
                FragmentDefinition: {
                    leave: (e) => {
                        let {
                            name: t,
                            typeCondition: r,
                            variableDefinitions: n,
                            directives: i,
                            selectionSet: o,
                        } = e;
                        return (
                            'fragment '
                                .concat(t)
                                .concat(h('(', l(n, ', '), ')'), ' ') +
                            'on '.concat(r, ' ').concat(h('', l(i, ' '), ' ')) +
                            o
                        );
                    },
                },
                IntValue: {
                    leave: (e) => {
                        let { value: t } = e;
                        return t;
                    },
                },
                FloatValue: {
                    leave: (e) => {
                        let { value: t } = e;
                        return t;
                    },
                },
                StringValue: {
                    leave: (e) => {
                        let { value: t, block: r } = e;
                        return r ?
                                (0, i.LZ)(t)
                            :   '"'.concat(t.replace(o, a), '"');
                    },
                },
                BooleanValue: {
                    leave: (e) => {
                        let { value: t } = e;
                        return t ? 'true' : 'false';
                    },
                },
                NullValue: { leave: () => 'null' },
                EnumValue: {
                    leave: (e) => {
                        let { value: t } = e;
                        return t;
                    },
                },
                ListValue: {
                    leave: (e) => {
                        let { values: t } = e;
                        return '[' + l(t, ', ') + ']';
                    },
                },
                ObjectValue: {
                    leave: (e) => {
                        let { fields: t } = e;
                        return '{' + l(t, ', ') + '}';
                    },
                },
                ObjectField: {
                    leave: (e) => {
                        let { name: t, value: r } = e;
                        return t + ': ' + r;
                    },
                },
                Directive: {
                    leave: (e) => {
                        let { name: t, arguments: r } = e;
                        return '@' + t + h('(', l(r, ', '), ')');
                    },
                },
                NamedType: {
                    leave: (e) => {
                        let { name: t } = e;
                        return t;
                    },
                },
                ListType: {
                    leave: (e) => {
                        let { type: t } = e;
                        return '[' + t + ']';
                    },
                },
                NonNullType: {
                    leave: (e) => {
                        let { type: t } = e;
                        return t + '!';
                    },
                },
                SchemaDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            directives: r,
                            operationTypes: n,
                        } = e;
                        return (
                            h('', t, '\n') + l(['schema', l(r, ' '), f(n)], ' ')
                        );
                    },
                },
                OperationTypeDefinition: {
                    leave: (e) => {
                        let { operation: t, type: r } = e;
                        return t + ': ' + r;
                    },
                },
                ScalarTypeDefinition: {
                    leave: (e) => {
                        let { description: t, name: r, directives: n } = e;
                        return (
                            h('', t, '\n') + l(['scalar', r, l(n, ' ')], ' ')
                        );
                    },
                },
                ObjectTypeDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            name: r,
                            interfaces: n,
                            directives: i,
                            fields: o,
                        } = e;
                        return (
                            h('', t, '\n') +
                            l(
                                [
                                    'type',
                                    r,
                                    h('implements ', l(n, ' & ')),
                                    l(i, ' '),
                                    f(o),
                                ],
                                ' '
                            )
                        );
                    },
                },
                FieldDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            name: r,
                            arguments: n,
                            type: i,
                            directives: o,
                        } = e;
                        return (
                            h('', t, '\n') +
                            r +
                            (d(n) ?
                                h('(\n', p(l(n, '\n')), '\n)')
                            :   h('(', l(n, ', '), ')')) +
                            ': ' +
                            i +
                            h(' ', l(o, ' '))
                        );
                    },
                },
                InputValueDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            name: r,
                            type: n,
                            defaultValue: i,
                            directives: o,
                        } = e;
                        return (
                            h('', t, '\n') +
                            l([r + ': ' + n, h('= ', i), l(o, ' ')], ' ')
                        );
                    },
                },
                InterfaceTypeDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            name: r,
                            interfaces: n,
                            directives: i,
                            fields: o,
                        } = e;
                        return (
                            h('', t, '\n') +
                            l(
                                [
                                    'interface',
                                    r,
                                    h('implements ', l(n, ' & ')),
                                    l(i, ' '),
                                    f(o),
                                ],
                                ' '
                            )
                        );
                    },
                },
                UnionTypeDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            name: r,
                            directives: n,
                            types: i,
                        } = e;
                        return (
                            h('', t, '\n') +
                            l(
                                ['union', r, l(n, ' '), h('= ', l(i, ' | '))],
                                ' '
                            )
                        );
                    },
                },
                EnumTypeDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            name: r,
                            directives: n,
                            values: i,
                        } = e;
                        return (
                            h('', t, '\n') +
                            l(['enum', r, l(n, ' '), f(i)], ' ')
                        );
                    },
                },
                EnumValueDefinition: {
                    leave: (e) => {
                        let { description: t, name: r, directives: n } = e;
                        return h('', t, '\n') + l([r, l(n, ' ')], ' ');
                    },
                },
                InputObjectTypeDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            name: r,
                            directives: n,
                            fields: i,
                        } = e;
                        return (
                            h('', t, '\n') +
                            l(['input', r, l(n, ' '), f(i)], ' ')
                        );
                    },
                },
                DirectiveDefinition: {
                    leave: (e) => {
                        let {
                            description: t,
                            name: r,
                            arguments: n,
                            repeatable: i,
                            locations: o,
                        } = e;
                        return (
                            h('', t, '\n') +
                            'directive @' +
                            r +
                            (d(n) ?
                                h('(\n', p(l(n, '\n')), '\n)')
                            :   h('(', l(n, ', '), ')')) +
                            (i ? ' repeatable' : '') +
                            ' on ' +
                            l(o, ' | ')
                        );
                    },
                },
                SchemaExtension: {
                    leave: (e) => {
                        let { directives: t, operationTypes: r } = e;
                        return l(['extend schema', l(t, ' '), f(r)], ' ');
                    },
                },
                ScalarTypeExtension: {
                    leave: (e) => {
                        let { name: t, directives: r } = e;
                        return l(['extend scalar', t, l(r, ' ')], ' ');
                    },
                },
                ObjectTypeExtension: {
                    leave: (e) => {
                        let {
                            name: t,
                            interfaces: r,
                            directives: n,
                            fields: i,
                        } = e;
                        return l(
                            [
                                'extend type',
                                t,
                                h('implements ', l(r, ' & ')),
                                l(n, ' '),
                                f(i),
                            ],
                            ' '
                        );
                    },
                },
                InterfaceTypeExtension: {
                    leave: (e) => {
                        let {
                            name: t,
                            interfaces: r,
                            directives: n,
                            fields: i,
                        } = e;
                        return l(
                            [
                                'extend interface',
                                t,
                                h('implements ', l(r, ' & ')),
                                l(n, ' '),
                                f(i),
                            ],
                            ' '
                        );
                    },
                },
                UnionTypeExtension: {
                    leave: (e) => {
                        let { name: t, directives: r, types: n } = e;
                        return l(
                            [
                                'extend union',
                                t,
                                l(r, ' '),
                                h('= ', l(n, ' | ')),
                            ],
                            ' '
                        );
                    },
                },
                EnumTypeExtension: {
                    leave: (e) => {
                        let { name: t, directives: r, values: n } = e;
                        return l(['extend enum', t, l(r, ' '), f(n)], ' ');
                    },
                },
                InputObjectTypeExtension: {
                    leave: (e) => {
                        let { name: t, directives: r, fields: n } = e;
                        return l(['extend input', t, l(r, ' '), f(n)], ' ');
                    },
                },
            };
            function l(e) {
                var t;
                let r =
                    arguments.length > 1 && void 0 !== arguments[1] ?
                        arguments[1]
                    :   '';
                return (
                        null !==
                            (t =
                                null == e ? void 0 : (
                                    e.filter((e) => e).join(r)
                                )) && void 0 !== t
                    ) ?
                        t
                    :   '';
            }
            function f(e) {
                return h('{\n', p(l(e, '\n')), '\n}');
            }
            function h(e, t) {
                let r =
                    arguments.length > 2 && void 0 !== arguments[2] ?
                        arguments[2]
                    :   '';
                return null != t && '' !== t ? e + t + r : '';
            }
            function p(e) {
                return h('  ', e.replace(/\n/g, '\n  '));
            }
            function d(e) {
                var t;
                return (
                    null !==
                        (t =
                            null == e ? void 0 : (
                                e.some((e) => e.includes('\n'))
                            )) &&
                    void 0 !== t &&
                    t
                );
            }
            var v = r(442),
                y = r(7456),
                m = r(283),
                b = Object.assign(
                    function (e) {
                        var t = n.get(e);
                        return t || ((t = (0, u.Vn)(e, c)), n.set(e, t)), t;
                    },
                    {
                        reset: function () {
                            n = new v.s(y.Q.print || 2e3);
                        },
                    }
                );
            b.reset(),
                !1 !== globalThis.__DEV__ &&
                    (0, m.zP)('print', function () {
                        return n ? n.size : 0;
                    });
        },
        4727: function (e, t, r) {
            r.d(t, {
                Ao: function () {
                    return b;
                },
                JW: function () {
                    return c;
                },
                My: function () {
                    return m;
                },
                NC: function () {
                    return v;
                },
                PT: function () {
                    return d;
                },
                Yk: function () {
                    return u;
                },
                kQ: function () {
                    return s;
                },
                qw: function () {
                    return function e(t, r, n) {
                        for (
                            var i, a = 0, s = r.selections;
                            a < s.length;
                            a++
                        ) {
                            var u = s[a];
                            if (m(u)) {
                                if ('__typename' === u.name.value)
                                    return t[y(u)];
                            } else i ? i.push(u) : (i = [u]);
                        }
                        if ('string' == typeof t.__typename)
                            return t.__typename;
                        if (i)
                            for (var c = 0, l = i; c < l.length; c++) {
                                var u = l[c],
                                    f = e(t, (0, o.hi)(u, n).selectionSet, n);
                                if ('string' == typeof f) return f;
                            }
                    };
                },
                u2: function () {
                    return y;
                },
                vb: function () {
                    return l;
                },
                vf: function () {
                    return f;
                },
            });
            var n = r(6920),
                i = r(1884),
                o = r(6696),
                a = r(3530);
            function s(e) {
                return { __ref: String(e) };
            }
            function u(e) {
                return !!(
                    e &&
                    'object' == typeof e &&
                    'string' == typeof e.__ref
                );
            }
            function c(e) {
                return (
                    (0, i.s)(e) &&
                    'Document' === e.kind &&
                    Array.isArray(e.definitions)
                );
            }
            function l(e, t, r, i) {
                if ('IntValue' === r.kind || 'FloatValue' === r.kind)
                    e[t.value] = Number(r.value);
                else if ('BooleanValue' === r.kind || 'StringValue' === r.kind)
                    e[t.value] = r.value;
                else if ('ObjectValue' === r.kind) {
                    var o = {};
                    r.fields.map(function (e) {
                        return l(o, e.name, e.value, i);
                    }),
                        (e[t.value] = o);
                } else if ('Variable' === r.kind) {
                    var a = (i || {})[r.name.value];
                    e[t.value] = a;
                } else if ('ListValue' === r.kind)
                    e[t.value] = r.values.map(function (e) {
                        var r = {};
                        return l(r, t, e, i), r[t.value];
                    });
                else if ('EnumValue' === r.kind) e[t.value] = r.value;
                else if ('NullValue' === r.kind) e[t.value] = null;
                else throw (0, n._K)(82, t.value, r.kind);
            }
            function f(e, t) {
                var r = null;
                e.directives &&
                    ((r = {}),
                    e.directives.forEach(function (e) {
                        (r[e.name.value] = {}),
                            e.arguments &&
                                e.arguments.forEach(function (n) {
                                    var i = n.name,
                                        o = n.value;
                                    return l(r[e.name.value], i, o, t);
                                });
                    }));
                var n = null;
                return (
                    e.arguments &&
                        e.arguments.length &&
                        ((n = {}),
                        e.arguments.forEach(function (e) {
                            var r = e.name,
                                i = e.value;
                            return l(n, r, i, t);
                        })),
                    d(e.name.value, n, r)
                );
            }
            var h = [
                    'connection',
                    'include',
                    'skip',
                    'client',
                    'rest',
                    'export',
                    'nonreactive',
                ],
                p = a.B,
                d = Object.assign(
                    function (e, t, r) {
                        if (t && r && r.connection && r.connection.key) {
                            if (
                                !r.connection.filter ||
                                !(r.connection.filter.length > 0)
                            )
                                return r.connection.key;
                            var n =
                                r.connection.filter ? r.connection.filter : [];
                            n.sort();
                            var i = {};
                            return (
                                n.forEach(function (e) {
                                    i[e] = t[e];
                                }),
                                ''
                                    .concat(r.connection.key, '(')
                                    .concat(p(i), ')')
                            );
                        }
                        var o = e;
                        if (t) {
                            var a = p(t);
                            o += '('.concat(a, ')');
                        }
                        return (
                            r &&
                                Object.keys(r).forEach(function (e) {
                                    -1 === h.indexOf(e) &&
                                        (r[e] && Object.keys(r[e]).length ?
                                            (o += '@'
                                                .concat(e, '(')
                                                .concat(p(r[e]), ')'))
                                        :   (o += '@'.concat(e)));
                                }),
                            o
                        );
                    },
                    {
                        setStringify: function (e) {
                            var t = p;
                            return (p = e), t;
                        },
                    }
                );
            function v(e, t) {
                if (e.arguments && e.arguments.length) {
                    var r = {};
                    return (
                        e.arguments.forEach(function (e) {
                            return l(r, e.name, e.value, t);
                        }),
                        r
                    );
                }
                return null;
            }
            function y(e) {
                return e.alias ? e.alias.value : e.name.value;
            }
            function m(e) {
                return 'Field' === e.kind;
            }
            function b(e) {
                return 'InlineFragment' === e.kind;
            }
        },
        661: function (e, t, r) {
            r.d(t, {
                Gw: function () {
                    return d;
                },
                aL: function () {
                    return v;
                },
                bi: function () {
                    return p;
                },
                ob: function () {
                    return y;
                },
            });
            var n = r(6936),
                i = r(6920),
                o = r(9648),
                a = r(5537),
                s = r(2965),
                u = r(4727),
                c = r(6696),
                l = r(6027),
                f = {
                    kind: o.h.FIELD,
                    name: { kind: o.h.NAME, value: '__typename' },
                };
            function h(e) {
                var t = new Map();
                return function (r) {
                    void 0 === r && (r = e);
                    var n = t.get(r);
                    return (
                        n ||
                            t.set(
                                r,
                                (n = {
                                    variables: new Set(),
                                    fragmentSpreads: new Set(),
                                })
                            ),
                        n
                    );
                };
            }
            function p(e, t) {
                (0, s.A$)(t);
                for (
                    var r,
                        u,
                        f,
                        p = h(''),
                        d = h(''),
                        v = function (e) {
                            for (
                                var t = 0, r = void 0;
                                t < e.length && (r = e[t]);
                                ++t
                            )
                                if (!(0, l.k)(r)) {
                                    if (r.kind === o.h.OPERATION_DEFINITION)
                                        return p(r.name && r.name.value);
                                    if (r.kind === o.h.FRAGMENT_DEFINITION)
                                        return d(r.name.value);
                                }
                            return (
                                !1 !== globalThis.__DEV__ && i.kG.error(83),
                                null
                            );
                        },
                        y = 0,
                        m = t.definitions.length - 1;
                    m >= 0;
                    --m
                )
                    t.definitions[m].kind === o.h.OPERATION_DEFINITION && ++y;
                var b =
                        ((r = new Map()),
                        (u = new Map()),
                        e.forEach(function (e) {
                            e &&
                                (e.name ?
                                    r.set(e.name, e)
                                :   e.test && u.set(e.test, e));
                        }),
                        function (e) {
                            var t = r.get(e.name.value);
                            return (
                                !t &&
                                    u.size &&
                                    u.forEach(function (r, n) {
                                        n(e) && (t = r);
                                    }),
                                t
                            );
                        }),
                    g = function (e) {
                        return (
                            (0, l.O)(e) &&
                            e.map(b).some(function (e) {
                                return e && e.remove;
                            })
                        );
                    },
                    k = new Map(),
                    w = !1,
                    _ = {
                        enter: function (e) {
                            if (g(e.directives)) return (w = !0), null;
                        },
                    },
                    O = (0, a.Vn)(t, {
                        Field: _,
                        InlineFragment: _,
                        VariableDefinition: {
                            enter: function () {
                                return !1;
                            },
                        },
                        Variable: {
                            enter: function (e, t, r, n, i) {
                                var o = v(i);
                                o && o.variables.add(e.name.value);
                            },
                        },
                        FragmentSpread: {
                            enter: function (e, t, r, n, i) {
                                if (g(e.directives)) return (w = !0), null;
                                var o = v(i);
                                o && o.fragmentSpreads.add(e.name.value);
                            },
                        },
                        FragmentDefinition: {
                            enter: function (e, t, r, n) {
                                k.set(JSON.stringify(n), e);
                            },
                            leave: function (e, t, r, n) {
                                return (
                                    e === k.get(JSON.stringify(n)) ? e
                                    : (
                                        y > 0 &&
                                        e.selectionSet.selections.every(
                                            function (e) {
                                                return (
                                                    e.kind === o.h.FIELD &&
                                                    '__typename' ===
                                                        e.name.value
                                                );
                                            }
                                        )
                                    ) ?
                                        ((d(e.name.value).removed = !0),
                                        (w = !0),
                                        null)
                                    :   void 0
                                );
                            },
                        },
                        Directive: {
                            leave: function (e) {
                                if (b(e)) return (w = !0), null;
                            },
                        },
                    });
                if (!w) return t;
                var S = function (e) {
                        return (
                            e.transitiveVars ||
                                ((e.transitiveVars = new Set(e.variables)),
                                e.removed ||
                                    e.fragmentSpreads.forEach(function (t) {
                                        S(d(t)).transitiveVars.forEach(
                                            function (t) {
                                                e.transitiveVars.add(t);
                                            }
                                        );
                                    })),
                            e
                        );
                    },
                    E = new Set();
                O.definitions.forEach(function (e) {
                    e.kind === o.h.OPERATION_DEFINITION ?
                        S(p(e.name && e.name.value)).fragmentSpreads.forEach(
                            function (e) {
                                E.add(e);
                            }
                        )
                    :   e.kind !== o.h.FRAGMENT_DEFINITION ||
                        0 !== y ||
                        d(e.name.value).removed ||
                        E.add(e.name.value);
                }),
                    E.forEach(function (e) {
                        S(d(e)).fragmentSpreads.forEach(function (e) {
                            E.add(e);
                        });
                    });
                var D = {
                    enter: function (e) {
                        var t;
                        if (((t = e.name.value), !E.has(t) || d(t).removed))
                            return null;
                    },
                };
                return (
                    (f = (0, a.Vn)(O, {
                        FragmentSpread: D,
                        FragmentDefinition: D,
                        OperationDefinition: {
                            leave: function (e) {
                                if (e.variableDefinitions) {
                                    var t = S(
                                        p(e.name && e.name.value)
                                    ).transitiveVars;
                                    if (t.size < e.variableDefinitions.length)
                                        return (0, n.pi)((0, n.pi)({}, e), {
                                            variableDefinitions:
                                                e.variableDefinitions.filter(
                                                    function (e) {
                                                        return t.has(
                                                            e.variable.name
                                                                .value
                                                        );
                                                    }
                                                ),
                                        });
                                }
                            },
                        },
                    })),
                    (
                        !(function e(t, r) {
                            return (
                                !t ||
                                t.selectionSet.selections.every(function (t) {
                                    return (
                                        t.kind === o.h.FRAGMENT_SPREAD &&
                                        e(r[t.name.value], r)
                                    );
                                })
                            );
                        })((0, s.$H)(f) || (0, s.pD)(f), (0, c.F)((0, s.kU)(f)))
                    ) ?
                        f
                    :   null
                );
            }
            var d = Object.assign(
                function (e) {
                    return (0, a.Vn)(e, {
                        SelectionSet: {
                            enter: function (e, t, r) {
                                if (!r || r.kind !== o.h.OPERATION_DEFINITION) {
                                    var i = e.selections;
                                    if (
                                        !(
                                            !i ||
                                            i.some(function (e) {
                                                return (
                                                    (0, u.My)(e) &&
                                                    ('__typename' ===
                                                        e.name.value ||
                                                        0 ===
                                                            e.name.value.lastIndexOf(
                                                                '__',
                                                                0
                                                            ))
                                                );
                                            })
                                        ) &&
                                        !(
                                            (0, u.My)(r) &&
                                            r.directives &&
                                            r.directives.some(function (e) {
                                                return (
                                                    'export' === e.name.value
                                                );
                                            })
                                        )
                                    )
                                        return (0, n.pi)((0, n.pi)({}, e), {
                                            selections: (0, n.ev)(
                                                (0, n.ev)([], i, !0),
                                                [f],
                                                !1
                                            ),
                                        });
                                }
                            },
                        },
                    });
                },
                {
                    added: function (e) {
                        return e === f;
                    },
                }
            );
            function v(e) {
                return 'query' === (0, s.p$)(e).operation ?
                        e
                    :   (0, a.Vn)(e, {
                            OperationDefinition: {
                                enter: function (e) {
                                    return (0, n.pi)((0, n.pi)({}, e), {
                                        operation: 'query',
                                    });
                                },
                            },
                        });
            }
            function y(e) {
                return (
                    (0, s.A$)(e),
                    p(
                        [
                            {
                                test: function (e) {
                                    return 'client' === e.name.value;
                                },
                                remove: !0,
                            },
                        ],
                        e
                    )
                );
            }
        },
        9925: function (e, t, r) {
            r.d(t, {
                B: function () {
                    return s;
                },
            });
            let n = () => Object.create(null),
                { forEach: i, slice: o } = Array.prototype,
                { hasOwnProperty: a } = Object.prototype;
            class s {
                constructor() {
                    let e =
                            !(arguments.length > 0) ||
                            void 0 === arguments[0] ||
                            arguments[0],
                        t =
                            arguments.length > 1 && void 0 !== arguments[1] ?
                                arguments[1]
                            :   n;
                    (this.weakness = e), (this.makeData = t);
                }
                lookup() {
                    return this.lookupArray(arguments);
                }
                lookupArray(e) {
                    let t = this;
                    return (
                        i.call(e, (e) => (t = t.getChildTrie(e))),
                        a.call(t, 'data') ?
                            t.data
                        :   (t.data = this.makeData(o.call(e)))
                    );
                }
                peek() {
                    return this.peekArray(arguments);
                }
                peekArray(e) {
                    let t = this;
                    for (let r = 0, n = e.length; t && r < n; ++r) {
                        let n = t.mapFor(e[r], !1);
                        t = n && n.get(e[r]);
                    }
                    return t && t.data;
                }
                remove() {
                    return this.removeArray(arguments);
                }
                removeArray(e) {
                    let t;
                    if (e.length) {
                        let r = e[0],
                            n = this.mapFor(r, !1),
                            i = n && n.get(r);
                        !i ||
                            ((t = i.removeArray(o.call(e, 1))),
                            i.data ||
                                i.weak ||
                                (i.strong && i.strong.size) ||
                                n.delete(r));
                    } else (t = this.data), delete this.data;
                    return t;
                }
                getChildTrie(e) {
                    let t = this.mapFor(e, !0),
                        r = t.get(e);
                    return (
                        r ||
                            t.set(e, (r = new s(this.weakness, this.makeData))),
                        r
                    );
                }
                mapFor(e, t) {
                    return (
                            this.weakness &&
                                (function (e) {
                                    switch (typeof e) {
                                        case 'object':
                                            if (null === e) break;
                                        case 'function':
                                            return !0;
                                    }
                                    return !1;
                                })(e)
                        ) ?
                            this.weak ||
                                (t ? (this.weak = new WeakMap()) : void 0)
                        :   this.strong ||
                                (t ? (this.strong = new Map()) : void 0);
                }
            }
        },
        5537: function (e, t, r) {
            r.d(t, {
                $_: function () {
                    return s;
                },
                Vn: function () {
                    return u;
                },
            });
            var n = r(2906),
                i = r(2833),
                o = r(7498),
                a = r(9648);
            let s = Object.freeze({});
            function u(e, t) {
                let r,
                    u,
                    c,
                    l =
                        arguments.length > 2 && void 0 !== arguments[2] ?
                            arguments[2]
                        :   o.h8,
                    f = new Map();
                for (let e of Object.values(a.h))
                    f.set(
                        e,
                        (function (e, t) {
                            let r = e[t];
                            return (
                                'object' == typeof r ? r
                                : 'function' == typeof r ?
                                    { enter: r, leave: void 0 }
                                :   { enter: e.enter, leave: e.leave }
                            );
                        })(t, e)
                    );
                let h = Array.isArray(e),
                    p = [e],
                    d = -1,
                    v = [],
                    y = e,
                    m = [],
                    b = [];
                do {
                    var g, k, w;
                    let e;
                    let a = ++d === p.length,
                        _ = a && 0 !== v.length;
                    if (a) {
                        if (
                            ((u = 0 === b.length ? void 0 : m[m.length - 1]),
                            (y = c),
                            (c = b.pop()),
                            _)
                        ) {
                            if (h) {
                                y = y.slice();
                                let e = 0;
                                for (let [t, r] of v) {
                                    let n = t - e;
                                    null === r ?
                                        (y.splice(n, 1), e++)
                                    :   (y[n] = r);
                                }
                            } else
                                for (let [e, t] of ((y =
                                    Object.defineProperties(
                                        {},
                                        Object.getOwnPropertyDescriptors(y)
                                    )),
                                v))
                                    y[e] = t;
                        }
                        (d = r.index),
                            (p = r.keys),
                            (v = r.edits),
                            (h = r.inArray),
                            (r = r.prev);
                    } else if (c) {
                        if (null == (y = c[(u = h ? d : p[d])])) continue;
                        m.push(u);
                    }
                    if (!Array.isArray(y)) {
                        (0, o.UG)(y) ||
                            (0, n.a)(
                                !1,
                                'Invalid AST Node: '.concat((0, i.X)(y), '.')
                            );
                        let r =
                            a ?
                                null === (g = f.get(y.kind)) || void 0 === g ?
                                    void 0
                                :   g.leave
                            : null === (k = f.get(y.kind)) || void 0 === k ?
                                void 0
                            :   k.enter;
                        if (
                            (e =
                                null == r ? void 0 : (
                                    r.call(t, y, u, c, m, b)
                                )) === s
                        )
                            break;
                        if (!1 === e) {
                            if (!a) {
                                m.pop();
                                continue;
                            }
                        } else if (void 0 !== e && (v.push([u, e]), !a)) {
                            if ((0, o.UG)(e)) y = e;
                            else {
                                m.pop();
                                continue;
                            }
                        }
                    }
                    void 0 === e && _ && v.push([u, y]),
                        a ?
                            m.pop()
                        :   ((r = {
                                inArray: h,
                                index: d,
                                keys: p,
                                edits: v,
                                prev: r,
                            }),
                            (p =
                                (h = Array.isArray(y)) ? y
                                : null !== (w = l[y.kind]) && void 0 !== w ? w
                                : []),
                            (d = -1),
                            (v = []),
                            c && b.push(c),
                            (c = y));
                } while (void 0 !== r);
                return 0 !== v.length ? v[v.length - 1][1] : e;
            }
        },
        3268: function (e, t, r) {
            let n;
            r.d(t, {
                g7: function () {
                    return m;
                },
                dP: function () {
                    return N;
                },
                re: function () {
                    return z;
                },
            });
            let i = () => Object.create(null),
                { forEach: o, slice: a } = Array.prototype,
                { hasOwnProperty: s } = Object.prototype;
            class u {
                constructor() {
                    let e =
                            !(arguments.length > 0) ||
                            void 0 === arguments[0] ||
                            arguments[0],
                        t =
                            arguments.length > 1 && void 0 !== arguments[1] ?
                                arguments[1]
                            :   i;
                    (this.weakness = e), (this.makeData = t);
                }
                lookup() {
                    for (
                        var e = arguments.length, t = Array(e), r = 0;
                        r < e;
                        r++
                    )
                        t[r] = arguments[r];
                    return this.lookupArray(t);
                }
                lookupArray(e) {
                    let t = this;
                    return (
                        o.call(e, (e) => (t = t.getChildTrie(e))),
                        s.call(t, 'data') ?
                            t.data
                        :   (t.data = this.makeData(a.call(e)))
                    );
                }
                peek() {
                    for (
                        var e = arguments.length, t = Array(e), r = 0;
                        r < e;
                        r++
                    )
                        t[r] = arguments[r];
                    return this.peekArray(t);
                }
                peekArray(e) {
                    let t = this;
                    for (let r = 0, n = e.length; t && r < n; ++r) {
                        let n = this.weakness && c(e[r]) ? t.weak : t.strong;
                        t = n && n.get(e[r]);
                    }
                    return t && t.data;
                }
                getChildTrie(e) {
                    let t =
                            this.weakness && c(e) ?
                                this.weak || (this.weak = new WeakMap())
                            :   this.strong || (this.strong = new Map()),
                        r = t.get(e);
                    return (
                        r ||
                            t.set(e, (r = new u(this.weakness, this.makeData))),
                        r
                    );
                }
            }
            function c(e) {
                switch (typeof e) {
                    case 'object':
                        if (null === e) break;
                    case 'function':
                        return !0;
                }
                return !1;
            }
            var l = r(5266);
            let f = null,
                h = {},
                p = 1;
            function d(e) {
                try {
                    return e();
                } catch (e) {}
            }
            let v = '@wry/context:Slot',
                y =
                    d(() => globalThis) ||
                    d(() => global) ||
                    Object.create(null),
                m =
                    y[v] ||
                    Array[v] ||
                    (function (e) {
                        try {
                            Object.defineProperty(y, v, {
                                value: e,
                                enumerable: !1,
                                writable: !1,
                                configurable: !0,
                            });
                        } finally {
                            return e;
                        }
                    })(
                        class {
                            constructor() {
                                this.id = [
                                    'slot',
                                    p++,
                                    Date.now(),
                                    Math.random().toString(36).slice(2),
                                ].join(':');
                            }
                            hasValue() {
                                for (let e = f; e; e = e.parent)
                                    if (this.id in e.slots) {
                                        let t = e.slots[this.id];
                                        if (t === h) break;
                                        return (
                                            e !== f && (f.slots[this.id] = t),
                                            !0
                                        );
                                    }
                                return f && (f.slots[this.id] = h), !1;
                            }
                            getValue() {
                                if (this.hasValue()) return f.slots[this.id];
                            }
                            withValue(e, t, r, n) {
                                let i = { __proto__: null, [this.id]: e },
                                    o = f;
                                f = { parent: o, slots: i };
                                try {
                                    return t.apply(n, r);
                                } finally {
                                    f = o;
                                }
                            }
                            static bind(e) {
                                let t = f;
                                return function () {
                                    let r = f;
                                    try {
                                        return (
                                            (f = t), e.apply(this, arguments)
                                        );
                                    } finally {
                                        f = r;
                                    }
                                };
                            }
                            static noContext(e, t, r) {
                                if (!f) return e.apply(r, t);
                                {
                                    let n = f;
                                    try {
                                        return (f = null), e.apply(r, t);
                                    } finally {
                                        f = n;
                                    }
                                }
                            }
                        }
                    ),
                { bind: b, noContext: g } = m,
                k = new m(),
                { hasOwnProperty: w } = Object.prototype,
                _ =
                    Array.from ||
                    function (e) {
                        let t = [];
                        return e.forEach((e) => t.push(e)), t;
                    };
            function O(e) {
                let { unsubscribe: t } = e;
                'function' == typeof t && ((e.unsubscribe = void 0), t());
            }
            let S = [];
            function E(e, t) {
                if (!e) throw Error(t || 'assertion failure');
            }
            function D(e, t) {
                let r = e.length;
                return r > 0 && r === t.length && e[r - 1] === t[r - 1];
            }
            function T(e) {
                switch (e.length) {
                    case 0:
                        throw Error('unknown value');
                    case 1:
                        return e[0];
                    case 2:
                        throw e[1];
                }
            }
            class x {
                constructor(e) {
                    (this.fn = e),
                        (this.parents = new Set()),
                        (this.childValues = new Map()),
                        (this.dirtyChildren = null),
                        (this.dirty = !0),
                        (this.recomputing = !1),
                        (this.value = []),
                        (this.deps = null),
                        ++x.count;
                }
                peek() {
                    if (1 === this.value.length && !R(this))
                        return q(this), this.value[0];
                }
                recompute(e) {
                    var t;
                    return (
                        E(!this.recomputing, 'already recomputing'),
                        q(this),
                        R(this) &&
                            (C(this),
                            k.withValue(this, F, [this, e]),
                            (function (e, t) {
                                if ('function' == typeof e.subscribe)
                                    try {
                                        O(e),
                                            (e.unsubscribe = e.subscribe.apply(
                                                null,
                                                t
                                            ));
                                    } catch (t) {
                                        return e.setDirty(), !1;
                                    }
                                return !0;
                            })(this, e) &&
                                ((this.dirty = !1),
                                R(this) || ((t = this), I(t, j)))),
                        T(this.value)
                    );
                }
                setDirty() {
                    this.dirty || ((this.dirty = !0), I(this, P), O(this));
                }
                dispose() {
                    this.setDirty(),
                        C(this),
                        I(this, (e, t) => {
                            e.setDirty(), M(e, this);
                        });
                }
                forget() {
                    this.dispose();
                }
                dependOn(e) {
                    e.add(this),
                        this.deps || (this.deps = S.pop() || new Set()),
                        this.deps.add(e);
                }
                forgetDeps() {
                    this.deps &&
                        (_(this.deps).forEach((e) => e.delete(this)),
                        this.deps.clear(),
                        S.push(this.deps),
                        (this.deps = null));
                }
            }
            function q(e) {
                let t = k.getValue();
                if (t)
                    return (
                        e.parents.add(t),
                        t.childValues.has(e) || t.childValues.set(e, []),
                        R(e) ? P(t, e) : j(t, e),
                        t
                    );
            }
            function F(e, t) {
                let r;
                e.recomputing = !0;
                let { normalizeResult: n } = e;
                n && 1 === e.value.length && (r = e.value.slice(0)),
                    (e.value.length = 0);
                try {
                    if (
                        ((e.value[0] = e.fn.apply(null, t)),
                        n && r && !D(r, e.value))
                    )
                        try {
                            e.value[0] = n(e.value[0], r[0]);
                        } catch (e) {}
                } catch (t) {
                    e.value[1] = t;
                }
                e.recomputing = !1;
            }
            function R(e) {
                return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
            }
            function I(e, t) {
                let r = e.parents.size;
                if (r) {
                    let n = _(e.parents);
                    for (let i = 0; i < r; ++i) t(n[i], e);
                }
            }
            function P(e, t) {
                E(e.childValues.has(t)), E(R(t));
                let r = !R(e);
                if (e.dirtyChildren) {
                    if (e.dirtyChildren.has(t)) return;
                } else e.dirtyChildren = S.pop() || new Set();
                e.dirtyChildren.add(t), r && I(e, P);
            }
            function j(e, t) {
                E(e.childValues.has(t)), E(!R(t));
                let r = e.childValues.get(t);
                0 === r.length ?
                    e.childValues.set(t, t.value.slice(0))
                :   D(r, t.value) || e.setDirty(),
                    Q(e, t),
                    R(e) || I(e, j);
            }
            function Q(e, t) {
                let r = e.dirtyChildren;
                r &&
                    (r.delete(t),
                    0 === r.size &&
                        (S.length < 100 && S.push(r),
                        (e.dirtyChildren = null)));
            }
            function C(e) {
                e.childValues.size > 0 &&
                    e.childValues.forEach((t, r) => {
                        M(e, r);
                    }),
                    e.forgetDeps(),
                    E(null === e.dirtyChildren);
            }
            function M(e, t) {
                t.parents.delete(e), e.childValues.delete(t), Q(e, t);
            }
            x.count = 0;
            let A = { setDirty: !0, dispose: !0, forget: !0 };
            function N(e) {
                let t = new Map(),
                    r = e && e.subscribe;
                function n(e) {
                    let n = k.getValue();
                    if (n) {
                        let i = t.get(e);
                        i || t.set(e, (i = new Set())),
                            n.dependOn(i),
                            'function' == typeof r &&
                                (O(i), (i.unsubscribe = r(e)));
                    }
                }
                return (
                    (n.dirty = function (e, r) {
                        let n = t.get(e);
                        if (n) {
                            let i = r && w.call(A, r) ? r : 'setDirty';
                            _(n).forEach((e) => e[i]()), t.delete(e), O(n);
                        }
                    }),
                    n
                );
            }
            function V() {
                let e = n || (n = new u('function' == typeof WeakMap));
                for (var t = arguments.length, r = Array(t), i = 0; i < t; i++)
                    r[i] = arguments[i];
                return e.lookupArray(r);
            }
            let L = new Set();
            function z(e) {
                let {
                        max: t = 65536,
                        keyArgs: r,
                        makeCacheKey: n = V,
                        normalizeResult: i,
                        subscribe: o,
                        cache: a = l.e,
                    } =
                        arguments.length > 1 && void 0 !== arguments[1] ?
                            arguments[1]
                        :   Object.create(null),
                    s =
                        'function' == typeof a ?
                            new a(t, (e) => e.dispose())
                        :   a,
                    u = function () {
                        let t = n.apply(
                            null,
                            r ? r.apply(null, arguments) : arguments
                        );
                        if (void 0 === t) return e.apply(null, arguments);
                        let a = s.get(t);
                        a ||
                            (s.set(t, (a = new x(e))),
                            (a.normalizeResult = i),
                            (a.subscribe = o),
                            (a.forget = () => s.delete(t)));
                        let u = a.recompute(
                            Array.prototype.slice.call(arguments)
                        );
                        return (
                            s.set(t, a),
                            L.add(s),
                            k.hasValue() ||
                                (L.forEach((e) => e.clean()), L.clear()),
                            u
                        );
                    };
                function c(e) {
                    let t = e && s.get(e);
                    t && t.setDirty();
                }
                function f(e) {
                    let t = e && s.get(e);
                    if (t) return t.peek();
                }
                function h(e) {
                    return !!e && s.delete(e);
                }
                return (
                    Object.defineProperty(u, 'size', {
                        get: () => s.size,
                        configurable: !1,
                        enumerable: !1,
                    }),
                    Object.freeze(
                        (u.options = {
                            max: t,
                            keyArgs: r,
                            makeCacheKey: n,
                            normalizeResult: i,
                            subscribe: o,
                            cache: s,
                        })
                    ),
                    (u.dirtyKey = c),
                    (u.dirty = function () {
                        c(n.apply(null, arguments));
                    }),
                    (u.peekKey = f),
                    (u.peek = function () {
                        return f(n.apply(null, arguments));
                    }),
                    (u.forgetKey = h),
                    (u.forget = function () {
                        return h(n.apply(null, arguments));
                    }),
                    (u.makeCacheKey = n),
                    (u.getKey =
                        r ?
                            function () {
                                return n.apply(null, r.apply(null, arguments));
                            }
                        :   n),
                    Object.freeze(u)
                );
            }
        },
    },
]);
