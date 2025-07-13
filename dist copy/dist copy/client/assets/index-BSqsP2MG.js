(function () {
  const f = document.createElement('link').relList;
  if (f && f.supports && f.supports('modulepreload')) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) c(x);
  new MutationObserver((x) => {
    for (const m of x)
      if (m.type === 'childList')
        for (const j of m.addedNodes) j.tagName === 'LINK' && j.rel === 'modulepreload' && c(j);
  }).observe(document, { childList: !0, subtree: !0 });
  function y(x) {
    const m = {};
    return (
      x.integrity && (m.integrity = x.integrity),
      x.referrerPolicy && (m.referrerPolicy = x.referrerPolicy),
      x.crossOrigin === 'use-credentials' ? (m.credentials = 'include')
      : x.crossOrigin === 'anonymous' ? (m.credentials = 'omit')
      : (m.credentials = 'same-origin'),
      m
    );
  }
  function c(x) {
    if (x.ep) return;
    x.ep = !0;
    const m = y(x);
    fetch(x.href, m);
  }
})();
function Dd(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
var is = { exports: {} },
  An = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od;
function Ey() {
  if (od) return An;
  od = 1;
  var i = Symbol.for('react.transitional.element'),
    f = Symbol.for('react.fragment');
  function y(c, x, m) {
    var j = null;
    if ((m !== void 0 && (j = '' + m), x.key !== void 0 && (j = '' + x.key), 'key' in x)) {
      m = {};
      for (var L in x) L !== 'key' && (m[L] = x[L]);
    } else m = x;
    return ((x = m.ref), { $$typeof: i, type: c, key: j, ref: x !== void 0 ? x : null, props: m });
  }
  return ((An.Fragment = f), (An.jsx = y), (An.jsxs = y), An);
}
var fd;
function Ay() {
  return (fd || ((fd = 1), (is.exports = Ey())), is.exports);
}
var o = Ay(),
  rs = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd;
function _y() {
  if (dd) return re;
  dd = 1;
  var i = Symbol.for('react.transitional.element'),
    f = Symbol.for('react.portal'),
    y = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    x = Symbol.for('react.profiler'),
    m = Symbol.for('react.consumer'),
    j = Symbol.for('react.context'),
    L = Symbol.for('react.forward_ref'),
    _ = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    h = Symbol.for('react.lazy'),
    O = Symbol.iterator;
  function G(d) {
    return d === null || typeof d != 'object' ?
        null
      : ((d = (O && d[O]) || d['@@iterator']), typeof d == 'function' ? d : null);
  }
  var Q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    N = {};
  function R(d, k, V) {
    ((this.props = d), (this.context = k), (this.refs = N), (this.updater = V || Q));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (d, k) {
      if (typeof d != 'object' && typeof d != 'function' && d != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, d, k, 'setState');
    }),
    (R.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, 'forceUpdate');
    }));
  function E() {}
  E.prototype = R.prototype;
  function z(d, k, V) {
    ((this.props = d), (this.context = k), (this.refs = N), (this.updater = V || Q));
  }
  var v = (z.prototype = new E());
  ((v.constructor = z), S(v, R.prototype), (v.isPureReactComponent = !0));
  var X = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    Y = Object.prototype.hasOwnProperty;
  function W(d, k, V, Z, I, oe) {
    return (
      (V = oe.ref),
      { $$typeof: i, type: d, key: k, ref: V !== void 0 ? V : null, props: oe }
    );
  }
  function ae(d, k) {
    return W(d.type, k, void 0, void 0, void 0, d.props);
  }
  function ue(d) {
    return typeof d == 'object' && d !== null && d.$$typeof === i;
  }
  function Ce(d) {
    var k = { '=': '=0', ':': '=2' };
    return (
      '$' +
      d.replace(/[=:]/g, function (V) {
        return k[V];
      })
    );
  }
  var Ne = /\/+/g;
  function be(d, k) {
    return typeof d == 'object' && d !== null && d.key != null ? Ce('' + d.key) : k.toString(36);
  }
  function je() {}
  function ve(d) {
    switch (d.status) {
      case 'fulfilled':
        return d.value;
      case 'rejected':
        throw d.reason;
      default:
        switch (
          (typeof d.status == 'string' ?
            d.then(je, je)
          : ((d.status = 'pending'),
            d.then(
              function (k) {
                d.status === 'pending' && ((d.status = 'fulfilled'), (d.value = k));
              },
              function (k) {
                d.status === 'pending' && ((d.status = 'rejected'), (d.reason = k));
              }
            )),
          d.status)
        ) {
          case 'fulfilled':
            return d.value;
          case 'rejected':
            throw d.reason;
        }
    }
    throw d;
  }
  function pe(d, k, V, Z, I) {
    var oe = typeof d;
    (oe === 'undefined' || oe === 'boolean') && (d = null);
    var le = !1;
    if (d === null) le = !0;
    else
      switch (oe) {
        case 'bigint':
        case 'string':
        case 'number':
          le = !0;
          break;
        case 'object':
          switch (d.$$typeof) {
            case i:
            case f:
              le = !0;
              break;
            case h:
              return ((le = d._init), pe(le(d._payload), k, V, Z, I));
          }
      }
    if (le)
      return (
        (I = I(d)),
        (le = Z === '' ? '.' + be(d, 0) : Z),
        X(I) ?
          ((V = ''),
          le != null && (V = le.replace(Ne, '$&/') + '/'),
          pe(I, k, V, '', function (ht) {
            return ht;
          }))
        : I != null &&
          (ue(I) &&
            (I = ae(
              I,
              V +
                (I.key == null || (d && d.key === I.key) ?
                  ''
                : ('' + I.key).replace(Ne, '$&/') + '/') +
                le
            )),
          k.push(I)),
        1
      );
    le = 0;
    var Ye = Z === '' ? '.' : Z + ':';
    if (X(d))
      for (var we = 0; we < d.length; we++)
        ((Z = d[we]), (oe = Ye + be(Z, we)), (le += pe(Z, k, V, oe, I)));
    else if (((we = G(d)), typeof we == 'function'))
      for (d = we.call(d), we = 0; !(Z = d.next()).done; )
        ((Z = Z.value), (oe = Ye + be(Z, we++)), (le += pe(Z, k, V, oe, I)));
    else if (oe === 'object') {
      if (typeof d.then == 'function') return pe(ve(d), k, V, Z, I);
      throw (
        (k = String(d)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (k === '[object Object]' ? 'object with keys {' + Object.keys(d).join(', ') + '}' : k) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return le;
  }
  function M(d, k, V) {
    if (d == null) return d;
    var Z = [],
      I = 0;
    return (
      pe(d, Z, '', '', function (oe) {
        return k.call(V, oe, I++);
      }),
      Z
    );
  }
  function K(d) {
    if (d._status === -1) {
      var k = d._result;
      ((k = k()),
        k.then(
          function (V) {
            (d._status === 0 || d._status === -1) && ((d._status = 1), (d._result = V));
          },
          function (V) {
            (d._status === 0 || d._status === -1) && ((d._status = 2), (d._result = V));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = k)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var J =
    typeof reportError == 'function' ? reportError : (
      function (d) {
        if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
          var k = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof d == 'object' && d !== null && typeof d.message == 'string' ?
                String(d.message)
              : String(d),
            error: d,
          });
          if (!window.dispatchEvent(k)) return;
        } else if (typeof process == 'object' && typeof process.emit == 'function') {
          process.emit('uncaughtException', d);
          return;
        }
        console.error(d);
      }
    );
  function ye() {}
  return (
    (re.Children = {
      map: M,
      forEach: function (d, k, V) {
        M(
          d,
          function () {
            k.apply(this, arguments);
          },
          V
        );
      },
      count: function (d) {
        var k = 0;
        return (
          M(d, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (d) {
        return (
          M(d, function (k) {
            return k;
          }) || []
        );
      },
      only: function (d) {
        if (!ue(d))
          throw Error('React.Children.only expected to receive a single React element child.');
        return d;
      },
    }),
    (re.Component = R),
    (re.Fragment = y),
    (re.Profiler = x),
    (re.PureComponent = z),
    (re.StrictMode = c),
    (re.Suspense = _),
    (re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return F.H.useMemoCache(d);
      },
    }),
    (re.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (re.cloneElement = function (d, k, V) {
      if (d == null) throw Error('The argument must be a React element, but you passed ' + d + '.');
      var Z = S({}, d.props),
        I = d.key,
        oe = void 0;
      if (k != null)
        for (le in (k.ref !== void 0 && (oe = void 0), k.key !== void 0 && (I = '' + k.key), k))
          !Y.call(k, le) ||
            le === 'key' ||
            le === '__self' ||
            le === '__source' ||
            (le === 'ref' && k.ref === void 0) ||
            (Z[le] = k[le]);
      var le = arguments.length - 2;
      if (le === 1) Z.children = V;
      else if (1 < le) {
        for (var Ye = Array(le), we = 0; we < le; we++) Ye[we] = arguments[we + 2];
        Z.children = Ye;
      }
      return W(d.type, I, void 0, void 0, oe, Z);
    }),
    (re.createContext = function (d) {
      return (
        (d = {
          $$typeof: j,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: m, _context: d }),
        d
      );
    }),
    (re.createElement = function (d, k, V) {
      var Z,
        I = {},
        oe = null;
      if (k != null)
        for (Z in (k.key !== void 0 && (oe = '' + k.key), k))
          Y.call(k, Z) && Z !== 'key' && Z !== '__self' && Z !== '__source' && (I[Z] = k[Z]);
      var le = arguments.length - 2;
      if (le === 1) I.children = V;
      else if (1 < le) {
        for (var Ye = Array(le), we = 0; we < le; we++) Ye[we] = arguments[we + 2];
        I.children = Ye;
      }
      if (d && d.defaultProps)
        for (Z in ((le = d.defaultProps), le)) I[Z] === void 0 && (I[Z] = le[Z]);
      return W(d, oe, void 0, void 0, null, I);
    }),
    (re.createRef = function () {
      return { current: null };
    }),
    (re.forwardRef = function (d) {
      return { $$typeof: L, render: d };
    }),
    (re.isValidElement = ue),
    (re.lazy = function (d) {
      return { $$typeof: h, _payload: { _status: -1, _result: d }, _init: K };
    }),
    (re.memo = function (d, k) {
      return { $$typeof: g, type: d, compare: k === void 0 ? null : k };
    }),
    (re.startTransition = function (d) {
      var k = F.T,
        V = {};
      F.T = V;
      try {
        var Z = d(),
          I = F.S;
        (I !== null && I(V, Z),
          typeof Z == 'object' && Z !== null && typeof Z.then == 'function' && Z.then(ye, J));
      } catch (oe) {
        J(oe);
      } finally {
        F.T = k;
      }
    }),
    (re.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (re.use = function (d) {
      return F.H.use(d);
    }),
    (re.useActionState = function (d, k, V) {
      return F.H.useActionState(d, k, V);
    }),
    (re.useCallback = function (d, k) {
      return F.H.useCallback(d, k);
    }),
    (re.useContext = function (d) {
      return F.H.useContext(d);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (d, k) {
      return F.H.useDeferredValue(d, k);
    }),
    (re.useEffect = function (d, k, V) {
      var Z = F.H;
      if (typeof V == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return Z.useEffect(d, k);
    }),
    (re.useId = function () {
      return F.H.useId();
    }),
    (re.useImperativeHandle = function (d, k, V) {
      return F.H.useImperativeHandle(d, k, V);
    }),
    (re.useInsertionEffect = function (d, k) {
      return F.H.useInsertionEffect(d, k);
    }),
    (re.useLayoutEffect = function (d, k) {
      return F.H.useLayoutEffect(d, k);
    }),
    (re.useMemo = function (d, k) {
      return F.H.useMemo(d, k);
    }),
    (re.useOptimistic = function (d, k) {
      return F.H.useOptimistic(d, k);
    }),
    (re.useReducer = function (d, k, V) {
      return F.H.useReducer(d, k, V);
    }),
    (re.useRef = function (d) {
      return F.H.useRef(d);
    }),
    (re.useState = function (d) {
      return F.H.useState(d);
    }),
    (re.useSyncExternalStore = function (d, k, V) {
      return F.H.useSyncExternalStore(d, k, V);
    }),
    (re.useTransition = function () {
      return F.H.useTransition();
    }),
    (re.version = '19.1.0'),
    re
  );
}
var gd;
function gs() {
  return (gd || ((gd = 1), (rs.exports = _y())), rs.exports);
}
var te = gs();
const ps = Dd(te);
var ss = { exports: {} },
  _n = {},
  cs = { exports: {} },
  os = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function Ty() {
  return (
    pd ||
      ((pd = 1),
      (function (i) {
        function f(M, K) {
          var J = M.length;
          M.push(K);
          e: for (; 0 < J; ) {
            var ye = (J - 1) >>> 1,
              d = M[ye];
            if (0 < x(d, K)) ((M[ye] = K), (M[J] = d), (J = ye));
            else break e;
          }
        }
        function y(M) {
          return M.length === 0 ? null : M[0];
        }
        function c(M) {
          if (M.length === 0) return null;
          var K = M[0],
            J = M.pop();
          if (J !== K) {
            M[0] = J;
            e: for (var ye = 0, d = M.length, k = d >>> 1; ye < k; ) {
              var V = 2 * (ye + 1) - 1,
                Z = M[V],
                I = V + 1,
                oe = M[I];
              if (0 > x(Z, J))
                I < d && 0 > x(oe, Z) ?
                  ((M[ye] = oe), (M[I] = J), (ye = I))
                : ((M[ye] = Z), (M[V] = J), (ye = V));
              else if (I < d && 0 > x(oe, J)) ((M[ye] = oe), (M[I] = J), (ye = I));
              else break e;
            }
          }
          return K;
        }
        function x(M, K) {
          var J = M.sortIndex - K.sortIndex;
          return J !== 0 ? J : M.id - K.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var j = Date,
            L = j.now();
          i.unstable_now = function () {
            return j.now() - L;
          };
        }
        var _ = [],
          g = [],
          h = 1,
          O = null,
          G = 3,
          Q = !1,
          S = !1,
          N = !1,
          R = !1,
          E = typeof setTimeout == 'function' ? setTimeout : null,
          z = typeof clearTimeout == 'function' ? clearTimeout : null,
          v = typeof setImmediate < 'u' ? setImmediate : null;
        function X(M) {
          for (var K = y(g); K !== null; ) {
            if (K.callback === null) c(g);
            else if (K.startTime <= M) (c(g), (K.sortIndex = K.expirationTime), f(_, K));
            else break;
            K = y(g);
          }
        }
        function F(M) {
          if (((N = !1), X(M), !S))
            if (y(_) !== null) ((S = !0), Y || ((Y = !0), be()));
            else {
              var K = y(g);
              K !== null && pe(F, K.startTime - M);
            }
        }
        var Y = !1,
          W = -1,
          ae = 5,
          ue = -1;
        function Ce() {
          return R ? !0 : !(i.unstable_now() - ue < ae);
        }
        function Ne() {
          if (((R = !1), Y)) {
            var M = i.unstable_now();
            ue = M;
            var K = !0;
            try {
              e: {
                ((S = !1), N && ((N = !1), z(W), (W = -1)), (Q = !0));
                var J = G;
                try {
                  t: {
                    for (X(M), O = y(_); O !== null && !(O.expirationTime > M && Ce()); ) {
                      var ye = O.callback;
                      if (typeof ye == 'function') {
                        ((O.callback = null), (G = O.priorityLevel));
                        var d = ye(O.expirationTime <= M);
                        if (((M = i.unstable_now()), typeof d == 'function')) {
                          ((O.callback = d), X(M), (K = !0));
                          break t;
                        }
                        (O === y(_) && c(_), X(M));
                      } else c(_);
                      O = y(_);
                    }
                    if (O !== null) K = !0;
                    else {
                      var k = y(g);
                      (k !== null && pe(F, k.startTime - M), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((O = null), (G = J), (Q = !1));
                }
                K = void 0;
              }
            } finally {
              K ? be() : (Y = !1);
            }
          }
        }
        var be;
        if (typeof v == 'function')
          be = function () {
            v(Ne);
          };
        else if (typeof MessageChannel < 'u') {
          var je = new MessageChannel(),
            ve = je.port2;
          ((je.port1.onmessage = Ne),
            (be = function () {
              ve.postMessage(null);
            }));
        } else
          be = function () {
            E(Ne, 0);
          };
        function pe(M, K) {
          W = E(function () {
            M(i.unstable_now());
          }, K);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (i.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M ?
              console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
              )
            : (ae = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return G;
          }),
          (i.unstable_next = function (M) {
            switch (G) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = G;
            }
            var J = G;
            G = K;
            try {
              return M();
            } finally {
              G = J;
            }
          }),
          (i.unstable_requestPaint = function () {
            R = !0;
          }),
          (i.unstable_runWithPriority = function (M, K) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var J = G;
            G = M;
            try {
              return K();
            } finally {
              G = J;
            }
          }),
          (i.unstable_scheduleCallback = function (M, K, J) {
            var ye = i.unstable_now();
            switch (
              (typeof J == 'object' && J !== null ?
                ((J = J.delay), (J = typeof J == 'number' && 0 < J ? ye + J : ye))
              : (J = ye),
              M)
            ) {
              case 1:
                var d = -1;
                break;
              case 2:
                d = 250;
                break;
              case 5:
                d = 1073741823;
                break;
              case 4:
                d = 1e4;
                break;
              default:
                d = 5e3;
            }
            return (
              (d = J + d),
              (M = {
                id: h++,
                callback: K,
                priorityLevel: M,
                startTime: J,
                expirationTime: d,
                sortIndex: -1,
              }),
              J > ye ?
                ((M.sortIndex = J),
                f(g, M),
                y(_) === null && M === y(g) && (N ? (z(W), (W = -1)) : (N = !0), pe(F, J - ye)))
              : ((M.sortIndex = d), f(_, M), S || Q || ((S = !0), Y || ((Y = !0), be()))),
              M
            );
          }),
          (i.unstable_shouldYield = Ce),
          (i.unstable_wrapCallback = function (M) {
            var K = G;
            return function () {
              var J = G;
              G = K;
              try {
                return M.apply(this, arguments);
              } finally {
                G = J;
              }
            };
          }));
      })(os)),
    os
  );
}
var yd;
function Ny() {
  return (yd || ((yd = 1), (cs.exports = Ty())), cs.exports);
}
var fs = { exports: {} },
  Ie = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function wy() {
  if (hd) return Ie;
  hd = 1;
  var i = gs();
  function f(_) {
    var g = 'https://react.dev/errors/' + _;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var h = 2; h < arguments.length; h++) g += '&args[]=' + encodeURIComponent(arguments[h]);
    }
    return (
      'Minified React error #' +
      _ +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function y() {}
  var c = {
      d: {
        f: y,
        r: function () {
          throw Error(f(522));
        },
        D: y,
        C: y,
        L: y,
        m: y,
        X: y,
        S: y,
        M: y,
      },
      p: 0,
      findDOMNode: null,
    },
    x = Symbol.for('react.portal');
  function m(_, g, h) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: x,
      key: O == null ? null : '' + O,
      children: _,
      containerInfo: g,
      implementation: h,
    };
  }
  var j = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function L(_, g) {
    if (_ === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (Ie.createPortal = function (_, g) {
      var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(f(299));
      return m(_, g, null, h);
    }),
    (Ie.flushSync = function (_) {
      var g = j.T,
        h = c.p;
      try {
        if (((j.T = null), (c.p = 2), _)) return _();
      } finally {
        ((j.T = g), (c.p = h), c.d.f());
      }
    }),
    (Ie.preconnect = function (_, g) {
      typeof _ == 'string' &&
        (g ?
          ((g = g.crossOrigin),
          (g =
            typeof g == 'string' ?
              g === 'use-credentials' ?
                g
              : ''
            : void 0))
        : (g = null),
        c.d.C(_, g));
    }),
    (Ie.prefetchDNS = function (_) {
      typeof _ == 'string' && c.d.D(_);
    }),
    (Ie.preinit = function (_, g) {
      if (typeof _ == 'string' && g && typeof g.as == 'string') {
        var h = g.as,
          O = L(h, g.crossOrigin),
          G = typeof g.integrity == 'string' ? g.integrity : void 0,
          Q = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        h === 'style' ?
          c.d.S(_, typeof g.precedence == 'string' ? g.precedence : void 0, {
            crossOrigin: O,
            integrity: G,
            fetchPriority: Q,
          })
        : h === 'script' &&
          c.d.X(_, {
            crossOrigin: O,
            integrity: G,
            fetchPriority: Q,
            nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          });
      }
    }),
    (Ie.preinitModule = function (_, g) {
      if (typeof _ == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var h = L(g.as, g.crossOrigin);
            c.d.M(_, {
              crossOrigin: h,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && c.d.M(_);
    }),
    (Ie.preload = function (_, g) {
      if (typeof _ == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var h = g.as,
          O = L(h, g.crossOrigin);
        c.d.L(_, h, {
          crossOrigin: O,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        });
      }
    }),
    (Ie.preloadModule = function (_, g) {
      if (typeof _ == 'string')
        if (g) {
          var h = L(g.as, g.crossOrigin);
          c.d.m(_, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: h,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else c.d.m(_);
    }),
    (Ie.requestFormReset = function (_) {
      c.d.r(_);
    }),
    (Ie.unstable_batchedUpdates = function (_, g) {
      return _(g);
    }),
    (Ie.useFormState = function (_, g, h) {
      return j.H.useFormState(_, g, h);
    }),
    (Ie.useFormStatus = function () {
      return j.H.useHostTransitionStatus();
    }),
    (Ie.version = '19.1.0'),
    Ie
  );
}
var bd;
function Oy() {
  if (bd) return fs.exports;
  bd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return (i(), (fs.exports = wy()), fs.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function Cy() {
  if (md) return _n;
  md = 1;
  var i = Ny(),
    f = gs(),
    y = Oy();
  function c(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += '&args[]=' + encodeURIComponent(arguments[a]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function x(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function m(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function j(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function L(e) {
    if (m(e) !== e) throw Error(c(188));
  }
  function _(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((l = n.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === a) return (L(n), e);
          if (u === l) return (L(n), t);
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (a.return !== l.return) ((a = n), (l = u));
      else {
        for (var r = !1, s = n.child; s; ) {
          if (s === a) {
            ((r = !0), (a = n), (l = u));
            break;
          }
          if (s === l) {
            ((r = !0), (l = n), (a = u));
            break;
          }
          s = s.sibling;
        }
        if (!r) {
          for (s = u.child; s; ) {
            if (s === a) {
              ((r = !0), (a = u), (l = n));
              break;
            }
            if (s === l) {
              ((r = !0), (l = u), (a = n));
              break;
            }
            s = s.sibling;
          }
          if (!r) throw Error(c(189));
        }
      }
      if (a.alternate !== l) throw Error(c(190));
    }
    if (a.tag !== 3) throw Error(c(188));
    return a.stateNode.current === a ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = g(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var h = Object.assign,
    O = Symbol.for('react.element'),
    G = Symbol.for('react.transitional.element'),
    Q = Symbol.for('react.portal'),
    S = Symbol.for('react.fragment'),
    N = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    E = Symbol.for('react.provider'),
    z = Symbol.for('react.consumer'),
    v = Symbol.for('react.context'),
    X = Symbol.for('react.forward_ref'),
    F = Symbol.for('react.suspense'),
    Y = Symbol.for('react.suspense_list'),
    W = Symbol.for('react.memo'),
    ae = Symbol.for('react.lazy'),
    ue = Symbol.for('react.activity'),
    Ce = Symbol.for('react.memo_cache_sentinel'),
    Ne = Symbol.iterator;
  function be(e) {
    return e === null || typeof e != 'object' ?
        null
      : ((e = (Ne && e[Ne]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var je = Symbol.for('react.client.reference');
  function ve(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === je ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case S:
        return 'Fragment';
      case R:
        return 'Profiler';
      case N:
        return 'StrictMode';
      case F:
        return 'Suspense';
      case Y:
        return 'SuspenseList';
      case ue:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Q:
          return 'Portal';
        case v:
          return (e.displayName || 'Context') + '.Provider';
        case z:
          return (e._context.displayName || 'Context') + '.Consumer';
        case X:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case W:
          return ((t = e.displayName || null), t !== null ? t : ve(e.type) || 'Memo');
        case ae:
          ((t = e._payload), (e = e._init));
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  var pe = Array.isArray,
    M = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = { pending: !1, data: null, method: null, action: null },
    ye = [],
    d = -1;
  function k(e) {
    return { current: e };
  }
  function V(e) {
    0 > d || ((e.current = ye[d]), (ye[d] = null), d--);
  }
  function Z(e, t) {
    (d++, (ye[d] = e.current), (e.current = t));
  }
  var I = k(null),
    oe = k(null),
    le = k(null),
    Ye = k(null);
  function we(e, t) {
    switch ((Z(le, t), Z(oe, e), Z(I, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Bf(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Bf(t)), (e = Hf(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (V(I), Z(I, e));
  }
  function ht() {
    (V(I), V(oe), V(le));
  }
  function Vu(e) {
    e.memoizedState !== null && Z(Ye, e);
    var t = I.current,
      a = Hf(t, e.type);
    t !== a && (Z(oe, e), Z(I, a));
  }
  function Tn(e) {
    (oe.current === e && (V(I), V(oe)), Ye.current === e && (V(Ye), (mn._currentValue = J)));
  }
  var Qu = Object.prototype.hasOwnProperty,
    Fu = i.unstable_scheduleCallback,
    Ku = i.unstable_cancelCallback,
    eg = i.unstable_shouldYield,
    tg = i.unstable_requestPaint,
    zt = i.unstable_now,
    ag = i.unstable_getCurrentPriorityLevel,
    hs = i.unstable_ImmediatePriority,
    bs = i.unstable_UserBlockingPriority,
    Nn = i.unstable_NormalPriority,
    lg = i.unstable_LowPriority,
    ms = i.unstable_IdlePriority,
    ng = i.log,
    ug = i.unstable_setDisableYieldValue,
    Tl = null,
    ut = null;
  function It(e) {
    if ((typeof ng == 'function' && ug(e), ut && typeof ut.setStrictMode == 'function'))
      try {
        ut.setStrictMode(Tl, e);
      } catch {}
  }
  var it = Math.clz32 ? Math.clz32 : sg,
    ig = Math.log,
    rg = Math.LN2;
  function sg(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ig(e) / rg) | 0)) | 0);
  }
  var wn = 256,
    On = 4194304;
  function Ea(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Cn(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      r = e.pingedLanes;
    e = e.warmLanes;
    var s = l & 134217727;
    return (
      s !== 0 ?
        ((l = s & ~u),
        l !== 0 ?
          (n = Ea(l))
        : ((r &= s), r !== 0 ? (n = Ea(r)) : a || ((a = s & ~e), a !== 0 && (n = Ea(a)))))
      : ((s = l & ~u),
        s !== 0 ? (n = Ea(s))
        : r !== 0 ? (n = Ea(r))
        : a || ((a = l & ~e), a !== 0 && (n = Ea(a)))),
      n === 0 ? 0
      : (
        t !== 0 &&
        t !== n &&
        (t & u) === 0 &&
        ((u = n & -n), (a = t & -t), u >= a || (u === 32 && (a & 4194048) !== 0))
      ) ?
        t
      : n
    );
  }
  function Nl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function cg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vs() {
    var e = wn;
    return ((wn <<= 1), (wn & 4194048) === 0 && (wn = 256), e);
  }
  function xs() {
    var e = On;
    return ((On <<= 1), (On & 62914560) === 0 && (On = 4194304), e);
  }
  function $u(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function wl(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function og(e, t, a, l, n, u) {
    var r = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var s = e.entanglements,
      p = e.expirationTimes,
      w = e.hiddenUpdates;
    for (a = r & ~a; 0 < a; ) {
      var U = 31 - it(a),
        q = 1 << U;
      ((s[U] = 0), (p[U] = -1));
      var C = w[U];
      if (C !== null)
        for (w[U] = null, U = 0; U < C.length; U++) {
          var D = C[U];
          D !== null && (D.lane &= -536870913);
        }
      a &= ~q;
    }
    (l !== 0 && Ss(e, l, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(r & ~t)));
  }
  function Ss(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - it(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 4194090)));
  }
  function Es(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var l = 31 - it(a),
        n = 1 << l;
      ((n & t) | (e[l] & t) && (e[l] |= t), (a &= ~n));
    }
  }
  function Ju(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Wu(e) {
    return (
      (e &= -e),
      2 < e ?
        8 < e ?
          (e & 134217727) !== 0 ?
            32
          : 268435456
        : 8
      : 2
    );
  }
  function As() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : nd(e.type));
  }
  function fg(e, t) {
    var a = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = a;
    }
  }
  var Pt = Math.random().toString(36).slice(2),
    Je = '__reactFiber$' + Pt,
    et = '__reactProps$' + Pt,
    qa = '__reactContainer$' + Pt,
    Iu = '__reactEvents$' + Pt,
    dg = '__reactListeners$' + Pt,
    gg = '__reactHandles$' + Pt,
    _s = '__reactResources$' + Pt,
    Ol = '__reactMarker$' + Pt;
  function Pu(e) {
    (delete e[Je], delete e[et], delete e[Iu], delete e[dg], delete e[gg]);
  }
  function Ga(e) {
    var t = e[Je];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[qa] || a[Je])) {
        if (((a = t.alternate), t.child !== null || (a !== null && a.child !== null)))
          for (e = Zf(e); e !== null; ) {
            if ((a = e[Je])) return a;
            e = Zf(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Ya(e) {
    if ((e = e[Je] || e[qa])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Cl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Za(e) {
    var t = e[_s];
    return (t || (t = e[_s] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function Ze(e) {
    e[Ol] = !0;
  }
  var Ts = new Set(),
    Ns = {};
  function Aa(e, t) {
    (Xa(e, t), Xa(e + 'Capture', t));
  }
  function Xa(e, t) {
    for (Ns[e] = t, e = 0; e < t.length; e++) Ts.add(t[e]);
  }
  var pg = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    ws = {},
    Os = {};
  function yg(e) {
    return (
      Qu.call(Os, e) ? !0
      : Qu.call(ws, e) ? !1
      : pg.test(e) ? (Os[e] = !0)
      : ((ws[e] = !0), !1)
    );
  }
  function zn(e, t, a) {
    if (yg(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + a);
      }
  }
  function Dn(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + a);
    }
  }
  function Ut(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, '' + l);
    }
  }
  var ei, Cs;
  function Va(e) {
    if (ei === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((ei = (t && t[1]) || ''),
          (Cs =
            (
              -1 <
              a.stack.indexOf(`
    at`)
            ) ?
              ' (<anonymous>)'
            : -1 < a.stack.indexOf('@') ? '@unknown:0:0'
            : ''));
      }
    return (
      `
` +
      ei +
      e +
      Cs
    );
  }
  var ti = !1;
  function ai(e, t) {
    if (!e || ti) return '';
    ti = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (D) {
                  var C = D;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (D) {
                  C = D;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                C = D;
              }
              (q = e()) && typeof q.catch == 'function' && q.catch(function () {});
            }
          } catch (D) {
            if (D && C && typeof D.stack == 'string') return [D.stack, C.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var n = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      n &&
        n.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = l.DetermineComponentFrameRoot(),
        r = u[0],
        s = u[1];
      if (r && s) {
        var p = r.split(`
`),
          w = s.split(`
`);
        for (n = l = 0; l < p.length && !p[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; n < w.length && !w[n].includes('DetermineComponentFrameRoot'); ) n++;
        if (l === p.length || n === w.length)
          for (l = p.length - 1, n = w.length - 1; 1 <= l && 0 <= n && p[l] !== w[n]; ) n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (p[l] !== w[n]) {
            if (l !== 1 || n !== 1)
              do
                if ((l--, n--, 0 > n || p[l] !== w[n])) {
                  var U =
                    `
` + p[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      U.includes('<anonymous>') &&
                      (U = U.replace('<anonymous>', e.displayName)),
                    U
                  );
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      ((ti = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : '') ? Va(a) : '';
  }
  function hg(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Va(e.type);
      case 16:
        return Va('Lazy');
      case 13:
        return Va('Suspense');
      case 19:
        return Va('SuspenseList');
      case 0:
      case 15:
        return ai(e.type, !1);
      case 11:
        return ai(e.type.render, !1);
      case 1:
        return ai(e.type, !0);
      case 31:
        return Va('Activity');
      default:
        return '';
    }
  }
  function zs(e) {
    try {
      var t = '';
      do ((t += hg(e)), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function bt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Ds(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function bg(e) {
    var t = Ds(e) ? 'checked' : 'value',
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (r) {
            ((l = '' + r), u.call(this, r));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (r) {
            l = '' + r;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function jn(e) {
    e._valueTracker || (e._valueTracker = bg(e));
  }
  function js(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = '';
    return (
      e &&
        (l =
          Ds(e) ?
            e.checked ?
              'true'
            : 'false'
          : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Rn(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var mg = /[\n"\\]/g;
  function mt(e) {
    return e.replace(mg, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function li(e, t, a, l, n, u, r, s) {
    ((e.name = ''),
      r != null && typeof r != 'function' && typeof r != 'symbol' && typeof r != 'boolean' ?
        (e.type = r)
      : e.removeAttribute('type'),
      t != null ?
        r === 'number' ?
          ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + bt(t))
        : e.value !== '' + bt(t) && (e.value = '' + bt(t))
      : (r !== 'submit' && r !== 'reset') || e.removeAttribute('value'),
      t != null ? ni(e, r, bt(t))
      : a != null ? ni(e, r, bt(a))
      : l != null && e.removeAttribute('value'),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null && (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean' ?
        (e.name = '' + bt(s))
      : e.removeAttribute('name'));
  }
  function Rs(e, t, a, l, n, u, r, s) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || a != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) return;
      ((a = a != null ? '' + bt(a) : ''),
        (t = t != null ? '' + bt(t) : a),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? n),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = s ? e.checked : !!l),
      (e.defaultChecked = !!l),
      r != null &&
        typeof r != 'function' &&
        typeof r != 'symbol' &&
        typeof r != 'boolean' &&
        (e.name = r));
  }
  function ni(e, t, a) {
    (t === 'number' && Rn(e.ownerDocument) === e) ||
      e.defaultValue === '' + a ||
      (e.defaultValue = '' + a);
  }
  function Qa(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < a.length; n++) t['$' + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        ((n = t.hasOwnProperty('$' + e[a].value)),
          e[a].selected !== n && (e[a].selected = n),
          n && l && (e[a].defaultSelected = !0));
    } else {
      for (a = '' + bt(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          ((e[n].selected = !0), l && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ms(e, t, a) {
    if (t != null && ((t = '' + bt(t)), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? '' + bt(a) : '';
  }
  function ks(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(c(92));
        if (pe(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ''), (t = a));
    }
    ((a = bt(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== '' && l !== null && (e.value = l));
  }
  function Fa(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vg = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Ls(e, t, a) {
    var l = t.indexOf('--') === 0;
    a == null || typeof a == 'boolean' || a === '' ?
      l ? e.setProperty(t, '')
      : t === 'float' ? (e.cssFloat = '')
      : (e[t] = '')
    : l ? e.setProperty(t, a)
    : typeof a != 'number' || a === 0 || vg.has(t) ?
      t === 'float' ?
        (e.cssFloat = a)
      : (e[t] = ('' + a).trim())
    : (e[t] = a + 'px');
  }
  function Us(e, t, a) {
    if (t != null && typeof t != 'object') throw Error(c(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0 ? e.setProperty(l, '')
          : l === 'float' ? (e.cssFloat = '')
          : (e[l] = ''));
      for (var n in t) ((l = t[n]), t.hasOwnProperty(n) && a[n] !== l && Ls(e, n, l));
    } else for (var u in t) t.hasOwnProperty(u) && Ls(e, u, t[u]);
  }
  function ui(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var xg = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Sg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mn(e) {
    return Sg.test('' + e) ?
        "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var ii = null;
  function ri(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ka = null,
    $a = null;
  function Bs(e) {
    var t = Ya(e);
    if (t && (e = t.stateNode)) {
      var a = e[et] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (li(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === 'radio' && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll('input[name="' + mt('' + t) + '"][type="radio"]'), t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[et] || null;
                if (!n) throw Error(c(90));
                li(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < a.length; t++) ((l = a[t]), l.form === e.form && js(l));
          }
          break e;
        case 'textarea':
          Ms(e, a.value, a.defaultValue);
          break e;
        case 'select':
          ((t = a.value), t != null && Qa(e, !!a.multiple, t, !1));
      }
    }
  }
  var si = !1;
  function Hs(e, t, a) {
    if (si) return e(t, a);
    si = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((si = !1),
        (Ka !== null || $a !== null) &&
          (vu(), Ka && ((t = Ka), (e = $a), ($a = Ka = null), Bs(t), e)))
      )
        for (t = 0; t < e.length; t++) Bs(e[t]);
    }
  }
  function zl(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[et] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != 'function') throw Error(c(231, t, typeof a));
    return a;
  }
  var Bt = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    ci = !1;
  if (Bt)
    try {
      var Dl = {};
      (Object.defineProperty(Dl, 'passive', {
        get: function () {
          ci = !0;
        },
      }),
        window.addEventListener('test', Dl, Dl),
        window.removeEventListener('test', Dl, Dl));
    } catch {
      ci = !1;
    }
  var ea = null,
    oi = null,
    kn = null;
  function qs() {
    if (kn) return kn;
    var e,
      t = oi,
      a = t.length,
      l,
      n = 'value' in ea ? ea.value : ea.textContent,
      u = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++);
    var r = a - e;
    for (l = 1; l <= r && t[a - l] === n[u - l]; l++);
    return (kn = n.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Ln(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Un() {
    return !0;
  }
  function Gs() {
    return !1;
  }
  function tt(e) {
    function t(a, l, n, u, r) {
      ((this._reactName = a),
        (this._targetInst = n),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = r),
        (this.currentTarget = null));
      for (var s in e) e.hasOwnProperty(s) && ((a = e[s]), (this[s] = a ? a(u) : u[s]));
      return (
        (this.isDefaultPrevented =
          (
            u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
          ) ?
            Un
          : Gs),
        (this.isPropagationStopped = Gs),
        this
      );
    }
    return (
      h(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault ?
              a.preventDefault()
            : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
            (this.isDefaultPrevented = Un));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation ?
              a.stopPropagation()
            : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
            (this.isPropagationStopped = Un));
        },
        persist: function () {},
        isPersistent: Un,
      }),
      t
    );
  }
  var _a = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bn = tt(_a),
    jl = h({}, _a, { view: 0, detail: 0 }),
    Eg = tt(jl),
    fi,
    di,
    Rl,
    Hn = h({}, jl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return (
          e.relatedTarget === void 0 ?
            e.fromElement === e.srcElement ?
              e.toElement
            : e.fromElement
          : e.relatedTarget
        );
      },
      movementX: function (e) {
        return 'movementX' in e ?
            e.movementX
          : (e !== Rl &&
              (Rl && e.type === 'mousemove' ?
                ((fi = e.screenX - Rl.screenX), (di = e.screenY - Rl.screenY))
              : (di = fi = 0),
              (Rl = e)),
            fi);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : di;
      },
    }),
    Ys = tt(Hn),
    Ag = h({}, Hn, { dataTransfer: 0 }),
    _g = tt(Ag),
    Tg = h({}, jl, { relatedTarget: 0 }),
    gi = tt(Tg),
    Ng = h({}, _a, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wg = tt(Ng),
    Og = h({}, _a, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Cg = tt(Og),
    zg = h({}, _a, { data: 0 }),
    Zs = tt(zg),
    Dg = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    jg = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Rg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Mg(e) {
    var t = this.nativeEvent;
    return (
      t.getModifierState ? t.getModifierState(e)
      : (e = Rg[e]) ? !!t[e]
      : !1
    );
  }
  function pi() {
    return Mg;
  }
  var kg = h({}, jl, {
      key: function (e) {
        if (e.key) {
          var t = Dg[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return (
          e.type === 'keypress' ? ((e = Ln(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup' ? jg[e.keyCode] || 'Unidentified'
          : ''
        );
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pi,
      charCode: function (e) {
        return e.type === 'keypress' ? Ln(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return (
          e.type === 'keypress' ? Ln(e)
          : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode
          : 0
        );
      },
    }),
    Lg = tt(kg),
    Ug = h({}, Hn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xs = tt(Ug),
    Bg = h({}, jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pi,
    }),
    Hg = tt(Bg),
    qg = h({}, _a, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gg = tt(qg),
    Yg = h({}, Hn, {
      deltaX: function (e) {
        return (
          'deltaX' in e ? e.deltaX
          : 'wheelDeltaX' in e ? -e.wheelDeltaX
          : 0
        );
      },
      deltaY: function (e) {
        return (
          'deltaY' in e ? e.deltaY
          : 'wheelDeltaY' in e ? -e.wheelDeltaY
          : 'wheelDelta' in e ? -e.wheelDelta
          : 0
        );
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zg = tt(Yg),
    Xg = h({}, _a, { newState: 0, oldState: 0 }),
    Vg = tt(Xg),
    Qg = [9, 13, 27, 32],
    yi = Bt && 'CompositionEvent' in window,
    Ml = null;
  Bt && 'documentMode' in document && (Ml = document.documentMode);
  var Fg = Bt && 'TextEvent' in window && !Ml,
    Vs = Bt && (!yi || (Ml && 8 < Ml && 11 >= Ml)),
    Qs = ' ',
    Fs = !1;
  function Ks(e, t) {
    switch (e) {
      case 'keyup':
        return Qg.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function $s(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Ja = !1;
  function Kg(e, t) {
    switch (e) {
      case 'compositionend':
        return $s(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Fs = !0), Qs);
      case 'textInput':
        return ((e = t.data), e === Qs && Fs ? null : e);
      default:
        return null;
    }
  }
  function $g(e, t) {
    if (Ja)
      return e === 'compositionend' || (!yi && Ks(e, t)) ?
          ((e = qs()), (kn = oi = ea = null), (Ja = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Vs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Jg = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Jg[e.type] : t === 'textarea';
  }
  function Ws(e, t, a, l) {
    (Ka ?
      $a ? $a.push(l)
      : ($a = [l])
    : (Ka = l),
      (t = Tu(t, 'onChange')),
      0 < t.length &&
        ((a = new Bn('onChange', 'change', null, a, l)), e.push({ event: a, listeners: t })));
  }
  var kl = null,
    Ll = null;
  function Wg(e) {
    Rf(e, 0);
  }
  function qn(e) {
    var t = Cl(e);
    if (js(t)) return e;
  }
  function Is(e, t) {
    if (e === 'change') return t;
  }
  var Ps = !1;
  if (Bt) {
    var hi;
    if (Bt) {
      var bi = 'oninput' in document;
      if (!bi) {
        var ec = document.createElement('div');
        (ec.setAttribute('oninput', 'return;'), (bi = typeof ec.oninput == 'function'));
      }
      hi = bi;
    } else hi = !1;
    Ps = hi && (!document.documentMode || 9 < document.documentMode);
  }
  function tc() {
    kl && (kl.detachEvent('onpropertychange', ac), (Ll = kl = null));
  }
  function ac(e) {
    if (e.propertyName === 'value' && qn(Ll)) {
      var t = [];
      (Ws(t, Ll, e, ri(e)), Hs(Wg, t));
    }
  }
  function Ig(e, t, a) {
    e === 'focusin' ?
      (tc(), (kl = t), (Ll = a), kl.attachEvent('onpropertychange', ac))
    : e === 'focusout' && tc();
  }
  function Pg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return qn(Ll);
  }
  function ep(e, t) {
    if (e === 'click') return qn(t);
  }
  function tp(e, t) {
    if (e === 'input' || e === 'change') return qn(t);
  }
  function ap(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == 'function' ? Object.is : ap;
  function Ul(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Qu.call(t, n) || !rt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function lc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nc(e, t) {
    var a = lc(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t)) return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = lc(a);
    }
  }
  function uc(e, t) {
    return (
      e && t ?
        e === t ? !0
        : e && e.nodeType === 3 ? !1
        : t && t.nodeType === 3 ? uc(e, t.parentNode)
        : 'contains' in e ? e.contains(t)
        : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
    );
  }
  function ic(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ?
        e.ownerDocument.defaultView
      : window;
    for (var t = Rn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == 'string';
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Rn(e.document);
    }
    return t;
  }
  function mi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var lp = Bt && 'documentMode' in document && 11 >= document.documentMode,
    Wa = null,
    vi = null,
    Bl = null,
    xi = !1;
  function rc(e, t, a) {
    var l =
      a.window === a ? a.document
      : a.nodeType === 9 ? a
      : a.ownerDocument;
    xi ||
      Wa == null ||
      Wa !== Rn(l) ||
      ((l = Wa),
      'selectionStart' in l && mi(l) ?
        (l = { start: l.selectionStart, end: l.selectionEnd })
      : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
        (l = {
          anchorNode: l.anchorNode,
          anchorOffset: l.anchorOffset,
          focusNode: l.focusNode,
          focusOffset: l.focusOffset,
        })),
      (Bl && Ul(Bl, l)) ||
        ((Bl = l),
        (l = Tu(vi, 'onSelect')),
        0 < l.length &&
          ((t = new Bn('onSelect', 'select', null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = Wa))));
  }
  function Ta(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a['Webkit' + e] = 'webkit' + t),
      (a['Moz' + e] = 'moz' + t),
      a
    );
  }
  var Ia = {
      animationend: Ta('Animation', 'AnimationEnd'),
      animationiteration: Ta('Animation', 'AnimationIteration'),
      animationstart: Ta('Animation', 'AnimationStart'),
      transitionrun: Ta('Transition', 'TransitionRun'),
      transitionstart: Ta('Transition', 'TransitionStart'),
      transitioncancel: Ta('Transition', 'TransitionCancel'),
      transitionend: Ta('Transition', 'TransitionEnd'),
    },
    Si = {},
    sc = {};
  Bt &&
    ((sc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    'TransitionEvent' in window || delete Ia.transitionend.transition);
  function Na(e) {
    if (Si[e]) return Si[e];
    if (!Ia[e]) return e;
    var t = Ia[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in sc) return (Si[e] = t[a]);
    return e;
  }
  var cc = Na('animationend'),
    oc = Na('animationiteration'),
    fc = Na('animationstart'),
    np = Na('transitionrun'),
    up = Na('transitionstart'),
    ip = Na('transitioncancel'),
    dc = Na('transitionend'),
    gc = new Map(),
    Ei =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Ei.push('scrollEnd');
  function wt(e, t) {
    (gc.set(e, t), Aa(t, [e]));
  }
  var pc = new WeakMap();
  function vt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var a = pc.get(e);
      return a !== void 0 ? a : ((t = { value: e, source: t, stack: zs(t) }), pc.set(e, t), t);
    }
    return { value: e, source: t, stack: zs(t) };
  }
  var xt = [],
    Pa = 0,
    Ai = 0;
  function Gn() {
    for (var e = Pa, t = (Ai = Pa = 0); t < e; ) {
      var a = xt[t];
      xt[t++] = null;
      var l = xt[t];
      xt[t++] = null;
      var n = xt[t];
      xt[t++] = null;
      var u = xt[t];
      if (((xt[t++] = null), l !== null && n !== null)) {
        var r = l.pending;
        (r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)), (l.pending = n));
      }
      u !== 0 && yc(a, n, u);
    }
  }
  function Yn(e, t, a, l) {
    ((xt[Pa++] = e),
      (xt[Pa++] = t),
      (xt[Pa++] = a),
      (xt[Pa++] = l),
      (Ai |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function _i(e, t, a, l) {
    return (Yn(e, t, a, l), Zn(e));
  }
  function el(e, t) {
    return (Yn(e, null, null, t), Zn(e));
  }
  function yc(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, u = e.return; u !== null; )
      ((u.childLanes |= a),
        (l = u.alternate),
        l !== null && (l.childLanes |= a),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3 ?
        ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - it(a)),
          (e = u.hiddenUpdates),
          (l = e[n]),
          l === null ? (e[n] = [t]) : l.push(t),
          (t.lane = a | 536870912)),
        u)
      : null;
  }
  function Zn(e) {
    if (50 < on) throw ((on = 0), (zr = null), Error(c(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var tl = {};
  function rp(e, t, a, l) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function st(e, t, a, l) {
    return new rp(e, t, a, l);
  }
  function Ti(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ht(e, t) {
    var a = e.alternate;
    return (
      a === null ?
        ((a = st(e.tag, t, e.key, e.mode)),
        (a.elementType = e.elementType),
        (a.type = e.type),
        (a.stateNode = e.stateNode),
        (a.alternate = e),
        (e.alternate = a))
      : ((a.pendingProps = t),
        (a.type = e.type),
        (a.flags = 0),
        (a.subtreeFlags = 0),
        (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function hc(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null ?
        ((e.childLanes = 0),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = 0),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null))
      : ((e.childLanes = a.childLanes),
        (e.lanes = a.lanes),
        (e.child = a.child),
        (e.subtreeFlags = 0),
        (e.deletions = null),
        (e.memoizedProps = a.memoizedProps),
        (e.memoizedState = a.memoizedState),
        (e.updateQueue = a.updateQueue),
        (e.type = a.type),
        (t = a.dependencies),
        (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Xn(e, t, a, l, n, u) {
    var r = 0;
    if (((l = e), typeof e == 'function')) Ti(e) && (r = 1);
    else if (typeof e == 'string')
      r =
        cy(e, a, I.current) ? 26
        : e === 'html' || e === 'head' || e === 'body' ? 27
        : 5;
    else
      e: switch (e) {
        case ue:
          return ((e = st(31, a, t, n)), (e.elementType = ue), (e.lanes = u), e);
        case S:
          return wa(a.children, n, u, t);
        case N:
          ((r = 8), (n |= 24));
          break;
        case R:
          return ((e = st(12, a, t, n | 2)), (e.elementType = R), (e.lanes = u), e);
        case F:
          return ((e = st(13, a, t, n)), (e.elementType = F), (e.lanes = u), e);
        case Y:
          return ((e = st(19, a, t, n)), (e.elementType = Y), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case E:
              case v:
                r = 10;
                break e;
              case z:
                r = 9;
                break e;
              case X:
                r = 11;
                break e;
              case W:
                r = 14;
                break e;
              case ae:
                ((r = 16), (l = null));
                break e;
            }
          ((r = 29), (a = Error(c(130, e === null ? 'null' : typeof e, ''))), (l = null));
      }
    return ((t = st(r, a, t, n)), (t.elementType = e), (t.type = l), (t.lanes = u), t);
  }
  function wa(e, t, a, l) {
    return ((e = st(7, e, l, t)), (e.lanes = a), e);
  }
  function Ni(e, t, a) {
    return ((e = st(6, e, null, t)), (e.lanes = a), e);
  }
  function wi(e, t, a) {
    return (
      (t = st(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var al = [],
    ll = 0,
    Vn = null,
    Qn = 0,
    St = [],
    Et = 0,
    Oa = null,
    qt = 1,
    Gt = '';
  function Ca(e, t) {
    ((al[ll++] = Qn), (al[ll++] = Vn), (Vn = e), (Qn = t));
  }
  function bc(e, t, a) {
    ((St[Et++] = qt), (St[Et++] = Gt), (St[Et++] = Oa), (Oa = e));
    var l = qt;
    e = Gt;
    var n = 32 - it(l) - 1;
    ((l &= ~(1 << n)), (a += 1));
    var u = 32 - it(t) + n;
    if (30 < u) {
      var r = n - (n % 5);
      ((u = (l & ((1 << r) - 1)).toString(32)),
        (l >>= r),
        (n -= r),
        (qt = (1 << (32 - it(t) + n)) | (a << n) | l),
        (Gt = u + e));
    } else ((qt = (1 << u) | (a << n) | l), (Gt = e));
  }
  function Oi(e) {
    e.return !== null && (Ca(e, 1), bc(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Vn; ) ((Vn = al[--ll]), (al[ll] = null), (Qn = al[--ll]), (al[ll] = null));
    for (; e === Oa; )
      ((Oa = St[--Et]),
        (St[Et] = null),
        (Gt = St[--Et]),
        (St[Et] = null),
        (qt = St[--Et]),
        (St[Et] = null));
  }
  var Pe = null,
    Re = null,
    me = !1,
    za = null,
    Dt = !1,
    zi = Error(c(519));
  function Da(e) {
    var t = Error(c(418, ''));
    throw (Gl(vt(t, e)), zi);
  }
  function mc(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[Je] = e), (t[et] = l), a)) {
      case 'dialog':
        (de('cancel', t), de('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        de('load', t);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < dn.length; a++) de(dn[a], t);
        break;
      case 'source':
        de('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (de('error', t), de('load', t));
        break;
      case 'details':
        de('toggle', t);
        break;
      case 'input':
        (de('invalid', t),
          Rs(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
          jn(t));
        break;
      case 'select':
        de('invalid', t);
        break;
      case 'textarea':
        (de('invalid', t), ks(t, l.value, l.defaultValue, l.children), jn(t));
    }
    ((a = l.children),
      (
        (typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
        t.textContent === '' + a ||
        l.suppressHydrationWarning === !0 ||
        Uf(t.textContent, a)
      ) ?
        (l.popover != null && (de('beforetoggle', t), de('toggle', t)),
        l.onScroll != null && de('scroll', t),
        l.onScrollEnd != null && de('scrollend', t),
        l.onClick != null && (t.onclick = Nu),
        (t = !0))
      : (t = !1),
      t || Da(e));
  }
  function vc(e) {
    for (Pe = e.return; Pe; )
      switch (Pe.tag) {
        case 5:
        case 13:
          Dt = !1;
          return;
        case 27:
        case 3:
          Dt = !0;
          return;
        default:
          Pe = Pe.return;
      }
  }
  function Hl(e) {
    if (e !== Pe) return !1;
    if (!me) return (vc(e), (me = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type), (a = !(a !== 'form' && a !== 'button') || Qr(e.type, e.memoizedProps))),
        (a = !a)),
      a && Re && Da(e),
      vc(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === '/$')) {
              if (t === 0) {
                Re = Ct(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== '$' && a !== '$!' && a !== '$?') || t++;
          e = e.nextSibling;
        }
        Re = null;
      }
    } else
      t === 27 ?
        ((t = Re), ha(e.type) ? ((e = Jr), (Jr = null), (Re = e)) : (Re = t))
      : (Re = Pe ? Ct(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ql() {
    ((Re = Pe = null), (me = !1));
  }
  function xc() {
    var e = za;
    return (e !== null && (nt === null ? (nt = e) : nt.push.apply(nt, e), (za = null)), e);
  }
  function Gl(e) {
    za === null ? (za = [e]) : za.push(e);
  }
  var Di = k(null),
    ja = null,
    Yt = null;
  function ta(e, t, a) {
    (Z(Di, t._currentValue), (t._currentValue = a));
  }
  function Zt(e) {
    ((e._currentValue = Di.current), V(Di));
  }
  function ji(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t ?
          ((e.childLanes |= t), l !== null && (l.childLanes |= t))
        : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Ri(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var r = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var p = 0; p < t.length; p++)
            if (s.context === t[p]) {
              ((u.lanes |= a),
                (s = u.alternate),
                s !== null && (s.lanes |= a),
                ji(u.return, a, e),
                l || (r = null));
              break e;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((r = n.return), r === null)) throw Error(c(341));
        ((r.lanes |= a), (u = r.alternate), u !== null && (u.lanes |= a), ji(r, a, e), (r = null));
      } else r = n.child;
      if (r !== null) r.return = n;
      else
        for (r = n; r !== null; ) {
          if (r === e) {
            r = null;
            break;
          }
          if (((n = r.sibling), n !== null)) {
            ((n.return = r.return), (r = n));
            break;
          }
          r = r.return;
        }
      n = r;
    }
  }
  function Yl(e, t, a, l) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var r = n.alternate;
        if (r === null) throw Error(c(387));
        if (((r = r.memoizedProps), r !== null)) {
          var s = n.type;
          rt(n.pendingProps.value, r.value) || (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (n === Ye.current) {
        if (((r = n.alternate), r === null)) throw Error(c(387));
        r.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(mn) : (e = [mn]));
      }
      n = n.return;
    }
    (e !== null && Ri(t, e, a, l), (t.flags |= 262144));
  }
  function Fn(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!rt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ra(e) {
    ((ja = e), (Yt = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function We(e) {
    return Sc(ja, e);
  }
  function Kn(e, t) {
    return (ja === null && Ra(e), Sc(e, t));
  }
  function Sc(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Yt === null)) {
      if (e === null) throw Error(c(308));
      ((Yt = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Yt = Yt.next = t;
    return a;
  }
  var sp =
      typeof AbortController < 'u' ? AbortController : (
        function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (a, l) {
                e.push(l);
              },
            });
          this.abort = function () {
            ((t.aborted = !0),
              e.forEach(function (a) {
                return a();
              }));
          };
        }
      ),
    cp = i.unstable_scheduleCallback,
    op = i.unstable_NormalPriority,
    qe = {
      $$typeof: v,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Mi() {
    return { controller: new sp(), data: new Map(), refCount: 0 };
  }
  function Zl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        cp(op, function () {
          e.controller.abort();
        }));
  }
  var Xl = null,
    ki = 0,
    nl = 0,
    ul = null;
  function fp(e, t) {
    if (Xl === null) {
      var a = (Xl = []);
      ((ki = 0),
        (nl = Ur()),
        (ul = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (ki++, t.then(Ec, Ec), t);
  }
  function Ec() {
    if (--ki === 0 && Xl !== null) {
      ul !== null && (ul.status = 'fulfilled');
      var e = Xl;
      ((Xl = null), (nl = 0), (ul = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function dp(e, t) {
    var a = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          a.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = t));
          for (var n = 0; n < a.length; n++) (0, a[n])(t);
        },
        function (n) {
          for (l.status = 'rejected', l.reason = n, n = 0; n < a.length; n++) (0, a[n])(void 0);
        }
      ),
      l
    );
  }
  var Ac = M.S;
  M.S = function (e, t) {
    (typeof t == 'object' && t !== null && typeof t.then == 'function' && fp(e, t),
      Ac !== null && Ac(e, t));
  };
  var Ma = k(null);
  function Li() {
    var e = Ma.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function $n(e, t) {
    t === null ? Z(Ma, Ma.current) : Z(Ma, t.pool);
  }
  function _c() {
    var e = Li();
    return e === null ? null : { parent: qe._currentValue, pool: e };
  }
  var Vl = Error(c(460)),
    Tc = Error(c(474)),
    Jn = Error(c(542)),
    Ui = { then: function () {} };
  function Nc(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Wn() {}
  function wc(e, t, a) {
    switch (
      ((a = e[a]), a === void 0 ? e.push(t) : a !== t && (t.then(Wn, Wn), (t = a)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Cc(e), e);
      default:
        if (typeof t.status == 'string') t.then(Wn, Wn);
        else {
          if (((e = Oe), e !== null && 100 < e.shellSuspendCounter)) throw Error(c(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'fulfilled'), (n.value = l));
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'rejected'), (n.reason = l));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Cc(e), e);
        }
        throw ((Ql = t), Vl);
    }
  }
  var Ql = null;
  function Oc() {
    if (Ql === null) throw Error(c(459));
    var e = Ql;
    return ((Ql = null), e);
  }
  function Cc(e) {
    if (e === Vl || e === Jn) throw Error(c(483));
  }
  var aa = !1;
  function Bi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Hi(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function la(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function na(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (xe & 2) !== 0)) {
      var n = l.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (l.pending = t),
        (t = Zn(e)),
        yc(e, null, a),
        t
      );
    }
    return (Yn(e, l, t, a), Zn(e));
  }
  function Fl(e, t, a) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Es(e, a));
    }
  }
  function qi(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var n = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var r = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (u === null ? (n = u = r) : (u = u.next = r), (a = a.next));
        } while (a !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var Gi = !1;
  function Kl() {
    if (Gi) {
      var e = ul;
      if (e !== null) throw e;
    }
  }
  function $l(e, t, a, l) {
    Gi = !1;
    var n = e.updateQueue;
    aa = !1;
    var u = n.firstBaseUpdate,
      r = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var p = s,
        w = p.next;
      ((p.next = null), r === null ? (u = w) : (r.next = w), (r = p));
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (s = U.lastBaseUpdate),
        s !== r && (s === null ? (U.firstBaseUpdate = w) : (s.next = w), (U.lastBaseUpdate = p)));
    }
    if (u !== null) {
      var q = n.baseState;
      ((r = 0), (U = w = p = null), (s = u));
      do {
        var C = s.lane & -536870913,
          D = C !== s.lane;
        if (D ? (ge & C) === C : (l & C) === C) {
          (C !== 0 && C === nl && (Gi = !0),
            U !== null &&
              (U = U.next =
                { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
          e: {
            var ie = e,
              ee = s;
            C = t;
            var _e = a;
            switch (ee.tag) {
              case 1:
                if (((ie = ee.payload), typeof ie == 'function')) {
                  q = ie.call(_e, q, C);
                  break e;
                }
                q = ie;
                break e;
              case 3:
                ie.flags = (ie.flags & -65537) | 128;
              case 0:
                if (
                  ((ie = ee.payload),
                  (C = typeof ie == 'function' ? ie.call(_e, q, C) : ie),
                  C == null)
                )
                  break e;
                q = h({}, q, C);
                break e;
              case 2:
                aa = !0;
            }
          }
          ((C = s.callback),
            C !== null &&
              ((e.flags |= 64),
              D && (e.flags |= 8192),
              (D = n.callbacks),
              D === null ? (n.callbacks = [C]) : D.push(C)));
        } else
          ((D = { lane: C, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
            U === null ? ((w = U = D), (p = q)) : (U = U.next = D),
            (r |= C));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((D = s),
            (s = D.next),
            (D.next = null),
            (n.lastBaseUpdate = D),
            (n.shared.pending = null));
        }
      } while (!0);
      (U === null && (p = q),
        (n.baseState = p),
        (n.firstBaseUpdate = w),
        (n.lastBaseUpdate = U),
        u === null && (n.shared.lanes = 0),
        (da |= r),
        (e.lanes = r),
        (e.memoizedState = q));
    }
  }
  function zc(e, t) {
    if (typeof e != 'function') throw Error(c(191, e));
    e.call(t);
  }
  function Dc(e, t) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) zc(a[e], t);
  }
  var il = k(null),
    In = k(0);
  function jc(e, t) {
    ((e = Jt), Z(In, e), Z(il, t), (Jt = e | t.baseLanes));
  }
  function Yi() {
    (Z(In, Jt), Z(il, il.current));
  }
  function Zi() {
    ((Jt = In.current), V(il), V(In));
  }
  var ua = 0,
    se = null,
    Ee = null,
    Be = null,
    Pn = !1,
    rl = !1,
    ka = !1,
    eu = 0,
    Jl = 0,
    sl = null,
    gp = 0;
  function Le() {
    throw Error(c(321));
  }
  function Xi(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++) if (!rt(e[a], t[a])) return !1;
    return !0;
  }
  function Vi(e, t, a, l, n, u) {
    return (
      (ua = u),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? ho : bo),
      (ka = !1),
      (u = a(l, n)),
      (ka = !1),
      rl && (u = Mc(t, a, l, n)),
      Rc(e),
      u
    );
  }
  function Rc(e) {
    M.H = iu;
    var t = Ee !== null && Ee.next !== null;
    if (((ua = 0), (Be = Ee = se = null), (Pn = !1), (Jl = 0), (sl = null), t)) throw Error(c(300));
    e === null || Xe || ((e = e.dependencies), e !== null && Fn(e) && (Xe = !0));
  }
  function Mc(e, t, a, l) {
    se = e;
    var n = 0;
    do {
      if ((rl && (sl = null), (Jl = 0), (rl = !1), 25 <= n)) throw Error(c(301));
      if (((n += 1), (Be = Ee = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((M.H = xp), (u = t(a, l)));
    } while (rl);
    return u;
  }
  function pp() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? Wl(t) : t),
      (e = e.useState()[0]),
      (Ee !== null ? Ee.memoizedState : null) !== e && (se.flags |= 1024),
      t
    );
  }
  function Qi() {
    var e = eu !== 0;
    return ((eu = 0), e);
  }
  function Fi(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function Ki(e) {
    if (Pn) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Pn = !1;
    }
    ((ua = 0), (Be = Ee = se = null), (rl = !1), (Jl = eu = 0), (sl = null));
  }
  function at() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Be === null ? (se.memoizedState = Be = e) : (Be = Be.next = e), Be);
  }
  function He() {
    if (Ee === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Be === null ? se.memoizedState : Be.next;
    if (t !== null) ((Be = t), (Ee = e));
    else {
      if (e === null) throw se.alternate === null ? Error(c(467)) : Error(c(310));
      ((Ee = e),
        (e = {
          memoizedState: Ee.memoizedState,
          baseState: Ee.baseState,
          baseQueue: Ee.baseQueue,
          queue: Ee.queue,
          next: null,
        }),
        Be === null ? (se.memoizedState = Be = e) : (Be = Be.next = e));
    }
    return Be;
  }
  function $i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wl(e) {
    var t = Jl;
    return (
      (Jl += 1),
      sl === null && (sl = []),
      (e = wc(sl, e, t)),
      (t = se),
      (Be === null ? t.memoizedState : Be.next) === null &&
        ((t = t.alternate), (M.H = t === null || t.memoizedState === null ? ho : bo)),
      e
    );
  }
  function tu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Wl(e);
      if (e.$$typeof === v) return We(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ji(e) {
    var t = null,
      a = se.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = se.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = $i()), (se.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = Ce;
    return (t.index++, a);
  }
  function Xt(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function au(e) {
    var t = He();
    return Wi(t, Ee, e);
  }
  function Wi(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (n !== null) {
        var r = n.next;
        ((n.next = u.next), (u.next = r));
      }
      ((t.baseQueue = n = u), (l.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var s = (r = null),
        p = null,
        w = t,
        U = !1;
      do {
        var q = w.lane & -536870913;
        if (q !== w.lane ? (ge & q) === q : (ua & q) === q) {
          var C = w.revertLane;
          if (C === 0)
            (p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              q === nl && (U = !0));
          else if ((ua & C) === C) {
            ((w = w.next), C === nl && (U = !0));
            continue;
          } else
            ((q = {
              lane: 0,
              revertLane: w.revertLane,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              p === null ? ((s = p = q), (r = u)) : (p = p.next = q),
              (se.lanes |= C),
              (da |= C));
          ((q = w.action), ka && a(u, q), (u = w.hasEagerState ? w.eagerState : a(u, q)));
        } else
          ((C = {
            lane: q,
            revertLane: w.revertLane,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            p === null ? ((s = p = C), (r = u)) : (p = p.next = C),
            (se.lanes |= q),
            (da |= q));
        w = w.next;
      } while (w !== null && w !== t);
      if (
        (p === null ? (r = u) : (p.next = s),
        !rt(u, e.memoizedState) && ((Xe = !0), U && ((a = ul), a !== null)))
      )
        throw a;
      ((e.memoizedState = u), (e.baseState = r), (e.baseQueue = p), (l.lastRenderedState = u));
    }
    return (n === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Ii(e) {
    var t = He(),
      a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      n = a.pending,
      u = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var r = (n = n.next);
      do ((u = e(u, r.action)), (r = r.next));
      while (r !== n);
      (rt(u, t.memoizedState) || (Xe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (a.lastRenderedState = u));
    }
    return [u, l];
  }
  function kc(e, t, a) {
    var l = se,
      n = He(),
      u = me;
    if (u) {
      if (a === void 0) throw Error(c(407));
      a = a();
    } else a = t();
    var r = !rt((Ee || n).memoizedState, a);
    (r && ((n.memoizedState = a), (Xe = !0)), (n = n.queue));
    var s = Bc.bind(null, l, n, e);
    if (
      (Il(2048, 8, s, [e]), n.getSnapshot !== t || r || (Be !== null && Be.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), cl(9, lu(), Uc.bind(null, l, n, a, t), null), Oe === null))
        throw Error(c(349));
      u || (ua & 124) !== 0 || Lc(l, t, a);
    }
    return a;
  }
  function Lc(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = se.updateQueue),
      t === null ?
        ((t = $i()), (se.updateQueue = t), (t.stores = [e]))
      : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function Uc(e, t, a, l) {
    ((t.value = a), (t.getSnapshot = l), Hc(t) && qc(e));
  }
  function Bc(e, t, a) {
    return a(function () {
      Hc(t) && qc(e);
    });
  }
  function Hc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !rt(e, a);
    } catch {
      return !0;
    }
  }
  function qc(e) {
    var t = el(e, 2);
    t !== null && gt(t, e, 2);
  }
  function Pi(e) {
    var t = at();
    if (typeof e == 'function') {
      var a = e;
      if (((e = a()), ka)) {
        It(!0);
        try {
          a();
        } finally {
          It(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Gc(e, t, a, l) {
    return ((e.baseState = a), Wi(e, Ee, typeof l == 'function' ? l : Xt));
  }
  function yp(e, t, a, l, n) {
    if (uu(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (r) {
          u.listeners.push(r);
        },
      };
      (M.T !== null ? a(!0) : (u.isTransition = !1),
        l(u),
        (a = t.pending),
        a === null ?
          ((u.next = t.pending = u), Yc(t, u))
        : ((u.next = a.next), (t.pending = a.next = u)));
    }
  }
  function Yc(e, t) {
    var a = t.action,
      l = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = M.T,
        r = {};
      M.T = r;
      try {
        var s = a(n, l),
          p = M.S;
        (p !== null && p(r, s), Zc(e, t, s));
      } catch (w) {
        er(e, t, w);
      } finally {
        M.T = u;
      }
    } else
      try {
        ((u = a(n, l)), Zc(e, t, u));
      } catch (w) {
        er(e, t, w);
      }
  }
  function Zc(e, t, a) {
    a !== null && typeof a == 'object' && typeof a.then == 'function' ?
      a.then(
        function (l) {
          Xc(e, t, l);
        },
        function (l) {
          return er(e, t, l);
        }
      )
    : Xc(e, t, a);
  }
  function Xc(e, t, a) {
    ((t.status = 'fulfilled'),
      (t.value = a),
      Vc(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next), a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Yc(e, a))));
  }
  function er(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = a), Vc(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Vc(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Qc(e, t) {
    return t;
  }
  function Fc(e, t) {
    if (me) {
      var a = Oe.formState;
      if (a !== null) {
        e: {
          var l = se;
          if (me) {
            if (Re) {
              t: {
                for (var n = Re, u = Dt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Ct(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
              }
              if (n) {
                ((Re = Ct(n.nextSibling)), (l = n.data === 'F!'));
                break e;
              }
            }
            Da(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = at()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qc,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = go.bind(null, se, l)),
      (l.dispatch = a),
      (l = Pi(!1)),
      (u = ur.bind(null, se, !1, l.queue)),
      (l = at()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = n),
      (a = yp.bind(null, se, n, u, a)),
      (n.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function Kc(e) {
    var t = He();
    return $c(t, Ee, e);
  }
  function $c(e, t, a) {
    if (
      ((t = Wi(e, t, Qc)[0]),
      (e = au(Xt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = Wl(t);
      } catch (r) {
        throw r === Vl ? Jn : r;
      }
    else l = t;
    t = He();
    var n = t.queue,
      u = n.dispatch;
    return (
      a !== t.memoizedState && ((se.flags |= 2048), cl(9, lu(), hp.bind(null, n, a), null)),
      [l, u, e]
    );
  }
  function hp(e, t) {
    e.action = t;
  }
  function Jc(e) {
    var t = He(),
      a = Ee;
    if (a !== null) return $c(t, a, e);
    (He(), (t = t.memoizedState), (a = He()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = e), [t, l, !1]);
  }
  function cl(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = se.updateQueue),
      t === null && ((t = $i()), (se.updateQueue = t)),
      (a = t.lastEffect),
      a === null ?
        (t.lastEffect = e.next = e)
      : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function lu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Wc() {
    return He().memoizedState;
  }
  function nu(e, t, a, l) {
    var n = at();
    ((l = l === void 0 ? null : l), (se.flags |= e), (n.memoizedState = cl(1 | t, lu(), a, l)));
  }
  function Il(e, t, a, l) {
    var n = He();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    Ee !== null && l !== null && Xi(l, Ee.memoizedState.deps) ?
      (n.memoizedState = cl(t, u, a, l))
    : ((se.flags |= e), (n.memoizedState = cl(1 | t, u, a, l)));
  }
  function Ic(e, t) {
    nu(8390656, 8, e, t);
  }
  function Pc(e, t) {
    Il(2048, 8, e, t);
  }
  function eo(e, t) {
    return Il(4, 2, e, t);
  }
  function to(e, t) {
    return Il(4, 4, e, t);
  }
  function ao(e, t) {
    if (typeof t == 'function') {
      e = e();
      var a = t(e);
      return function () {
        typeof a == 'function' ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function lo(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), Il(4, 4, ao.bind(null, t, e), a));
  }
  function tr() {}
  function no(e, t) {
    var a = He();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Xi(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function uo(e, t) {
    var a = He();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Xi(t, l[1])) return l[0];
    if (((l = e()), ka)) {
      It(!0);
      try {
        e();
      } finally {
        It(!1);
      }
    }
    return ((a.memoizedState = [l, t]), l);
  }
  function ar(e, t, a) {
    return a === void 0 || (ua & 1073741824) !== 0 ?
        (e.memoizedState = t)
      : ((e.memoizedState = a), (e = of()), (se.lanes |= e), (da |= e), a);
  }
  function io(e, t, a, l) {
    return (
      rt(a, t) ? a
      : il.current !== null ? ((e = ar(e, a, l)), rt(e, t) || (Xe = !0), e)
      : (ua & 42) === 0 ? ((Xe = !0), (e.memoizedState = a))
      : ((e = of()), (se.lanes |= e), (da |= e), t)
    );
  }
  function ro(e, t, a, l, n) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var r = M.T,
      s = {};
    ((M.T = s), ur(e, !1, t, a));
    try {
      var p = n(),
        w = M.S;
      if (
        (w !== null && w(s, p), p !== null && typeof p == 'object' && typeof p.then == 'function')
      ) {
        var U = dp(p, l);
        Pl(e, t, U, dt(e));
      } else Pl(e, t, l, dt(e));
    } catch (q) {
      Pl(e, t, { then: function () {}, status: 'rejected', reason: q }, dt());
    } finally {
      ((K.p = u), (M.T = r));
    }
  }
  function bp() {}
  function lr(e, t, a, l) {
    if (e.tag !== 5) throw Error(c(476));
    var n = so(e).queue;
    ro(
      e,
      n,
      t,
      J,
      a === null ? bp : (
        function () {
          return (co(e), a(l));
        }
      )
    );
  }
  function so(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: J,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function co(e) {
    var t = so(e).next.queue;
    Pl(e, t, {}, dt());
  }
  function nr() {
    return We(mn);
  }
  function oo() {
    return He().memoizedState;
  }
  function fo() {
    return He().memoizedState;
  }
  function mp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = dt();
          e = la(a);
          var l = na(t, e, a);
          (l !== null && (gt(l, t, a), Fl(l, t, a)), (t = { cache: Mi() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function vp(e, t, a) {
    var l = dt();
    ((a = { lane: l, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null }),
      uu(e) ? po(t, a) : ((a = _i(e, t, a, l)), a !== null && (gt(a, e, l), yo(a, t, l))));
  }
  function go(e, t, a) {
    var l = dt();
    Pl(e, t, a, l);
  }
  function Pl(e, t, a, l) {
    var n = { lane: l, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (uu(e)) po(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var r = t.lastRenderedState,
            s = u(r, a);
          if (((n.hasEagerState = !0), (n.eagerState = s), rt(s, r)))
            return (Yn(e, t, n, 0), Oe === null && Gn(), !1);
        } catch {
        } finally {
        }
      if (((a = _i(e, t, n, l)), a !== null)) return (gt(a, e, l), yo(a, t, l), !0);
    }
    return !1;
  }
  function ur(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Ur(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      uu(e))
    ) {
      if (t) throw Error(c(479));
    } else ((t = _i(e, a, l, 2)), t !== null && gt(t, e, 2));
  }
  function uu(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function po(e, t) {
    rl = Pn = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (e.pending = t));
  }
  function yo(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Es(e, a));
    }
  }
  var iu = {
      readContext: We,
      use: tu,
      useCallback: Le,
      useContext: Le,
      useEffect: Le,
      useImperativeHandle: Le,
      useLayoutEffect: Le,
      useInsertionEffect: Le,
      useMemo: Le,
      useReducer: Le,
      useRef: Le,
      useState: Le,
      useDebugValue: Le,
      useDeferredValue: Le,
      useTransition: Le,
      useSyncExternalStore: Le,
      useId: Le,
      useHostTransitionStatus: Le,
      useFormState: Le,
      useActionState: Le,
      useOptimistic: Le,
      useMemoCache: Le,
      useCacheRefresh: Le,
    },
    ho = {
      readContext: We,
      use: tu,
      useCallback: function (e, t) {
        return ((at().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: We,
      useEffect: Ic,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null), nu(4194308, 4, ao.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return nu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        nu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = at();
        t = t === void 0 ? null : t;
        var l = e();
        if (ka) {
          It(!0);
          try {
            e();
          } finally {
            It(!1);
          }
        }
        return ((a.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, a) {
        var l = at();
        if (a !== void 0) {
          var n = a(t);
          if (ka) {
            It(!0);
            try {
              a(t);
            } finally {
              It(!1);
            }
          }
        } else n = t;
        return (
          (l.memoizedState = l.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (l.queue = e),
          (e = e.dispatch = vp.bind(null, se, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = at();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Pi(e);
        var t = e.queue,
          a = go.bind(null, se, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: tr,
      useDeferredValue: function (e, t) {
        var a = at();
        return ar(a, e, t);
      },
      useTransition: function () {
        var e = Pi(!1);
        return ((e = ro.bind(null, se, e.queue, !0, !1)), (at().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, a) {
        var l = se,
          n = at();
        if (me) {
          if (a === void 0) throw Error(c(407));
          a = a();
        } else {
          if (((a = t()), Oe === null)) throw Error(c(349));
          (ge & 124) !== 0 || Lc(l, t, a);
        }
        n.memoizedState = a;
        var u = { value: a, getSnapshot: t };
        return (
          (n.queue = u),
          Ic(Bc.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          cl(9, lu(), Uc.bind(null, l, u, a, t), null),
          a
        );
      },
      useId: function () {
        var e = at(),
          t = Oe.identifierPrefix;
        if (me) {
          var a = Gt,
            l = qt;
          ((a = (l & ~(1 << (32 - it(l) - 1))).toString(32) + a),
            (t = '«' + t + 'R' + a),
            (a = eu++),
            0 < a && (t += 'H' + a.toString(32)),
            (t += '»'));
        } else ((a = gp++), (t = '«' + t + 'r' + a.toString(32) + '»'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: nr,
      useFormState: Fc,
      useActionState: Fc,
      useOptimistic: function (e) {
        var t = at();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = a), (t = ur.bind(null, se, !0, a)), (a.dispatch = t), [e, t]);
      },
      useMemoCache: Ji,
      useCacheRefresh: function () {
        return (at().memoizedState = mp.bind(null, se));
      },
    },
    bo = {
      readContext: We,
      use: tu,
      useCallback: no,
      useContext: We,
      useEffect: Pc,
      useImperativeHandle: lo,
      useInsertionEffect: eo,
      useLayoutEffect: to,
      useMemo: uo,
      useReducer: au,
      useRef: Wc,
      useState: function () {
        return au(Xt);
      },
      useDebugValue: tr,
      useDeferredValue: function (e, t) {
        var a = He();
        return io(a, Ee.memoizedState, e, t);
      },
      useTransition: function () {
        var e = au(Xt)[0],
          t = He().memoizedState;
        return [typeof e == 'boolean' ? e : Wl(e), t];
      },
      useSyncExternalStore: kc,
      useId: oo,
      useHostTransitionStatus: nr,
      useFormState: Kc,
      useActionState: Kc,
      useOptimistic: function (e, t) {
        var a = He();
        return Gc(a, Ee, e, t);
      },
      useMemoCache: Ji,
      useCacheRefresh: fo,
    },
    xp = {
      readContext: We,
      use: tu,
      useCallback: no,
      useContext: We,
      useEffect: Pc,
      useImperativeHandle: lo,
      useInsertionEffect: eo,
      useLayoutEffect: to,
      useMemo: uo,
      useReducer: Ii,
      useRef: Wc,
      useState: function () {
        return Ii(Xt);
      },
      useDebugValue: tr,
      useDeferredValue: function (e, t) {
        var a = He();
        return Ee === null ? ar(a, e, t) : io(a, Ee.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ii(Xt)[0],
          t = He().memoizedState;
        return [typeof e == 'boolean' ? e : Wl(e), t];
      },
      useSyncExternalStore: kc,
      useId: oo,
      useHostTransitionStatus: nr,
      useFormState: Jc,
      useActionState: Jc,
      useOptimistic: function (e, t) {
        var a = He();
        return Ee !== null ? Gc(a, Ee, e, t) : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: Ji,
      useCacheRefresh: fo,
    },
    ol = null,
    en = 0;
  function ru(e) {
    var t = en;
    return ((en += 1), ol === null && (ol = []), wc(ol, e, t));
  }
  function tn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function su(e, t) {
    throw t.$$typeof === O ?
        Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function mo(e) {
    var t = e._init;
    return t(e._payload);
  }
  function vo(e) {
    function t(A, b) {
      if (e) {
        var T = A.deletions;
        T === null ? ((A.deletions = [b]), (A.flags |= 16)) : T.push(b);
      }
    }
    function a(A, b) {
      if (!e) return null;
      for (; b !== null; ) (t(A, b), (b = b.sibling));
      return null;
    }
    function l(A) {
      for (var b = new Map(); A !== null; )
        (A.key !== null ? b.set(A.key, A) : b.set(A.index, A), (A = A.sibling));
      return b;
    }
    function n(A, b) {
      return ((A = Ht(A, b)), (A.index = 0), (A.sibling = null), A);
    }
    function u(A, b, T) {
      return (
        (A.index = T),
        e ?
          ((T = A.alternate),
          T !== null ?
            ((T = T.index), T < b ? ((A.flags |= 67108866), b) : T)
          : ((A.flags |= 67108866), b))
        : ((A.flags |= 1048576), b)
      );
    }
    function r(A) {
      return (e && A.alternate === null && (A.flags |= 67108866), A);
    }
    function s(A, b, T, H) {
      return b === null || b.tag !== 6 ?
          ((b = Ni(T, A.mode, H)), (b.return = A), b)
        : ((b = n(b, T)), (b.return = A), b);
    }
    function p(A, b, T, H) {
      var $ = T.type;
      return (
        $ === S ? U(A, b, T.props.children, H, T.key)
        : (
          b !== null &&
          (b.elementType === $ ||
            (typeof $ == 'object' && $ !== null && $.$$typeof === ae && mo($) === b.type))
        ) ?
          ((b = n(b, T.props)), tn(b, T), (b.return = A), b)
        : ((b = Xn(T.type, T.key, T.props, null, A.mode, H)), tn(b, T), (b.return = A), b)
      );
    }
    function w(A, b, T, H) {
      return (
          b === null ||
            b.tag !== 4 ||
            b.stateNode.containerInfo !== T.containerInfo ||
            b.stateNode.implementation !== T.implementation
        ) ?
          ((b = wi(T, A.mode, H)), (b.return = A), b)
        : ((b = n(b, T.children || [])), (b.return = A), b);
    }
    function U(A, b, T, H, $) {
      return b === null || b.tag !== 7 ?
          ((b = wa(T, A.mode, H, $)), (b.return = A), b)
        : ((b = n(b, T)), (b.return = A), b);
    }
    function q(A, b, T) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number' || typeof b == 'bigint')
        return ((b = Ni('' + b, A.mode, T)), (b.return = A), b);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case G:
            return ((T = Xn(b.type, b.key, b.props, null, A.mode, T)), tn(T, b), (T.return = A), T);
          case Q:
            return ((b = wi(b, A.mode, T)), (b.return = A), b);
          case ae:
            var H = b._init;
            return ((b = H(b._payload)), q(A, b, T));
        }
        if (pe(b) || be(b)) return ((b = wa(b, A.mode, T, null)), (b.return = A), b);
        if (typeof b.then == 'function') return q(A, ru(b), T);
        if (b.$$typeof === v) return q(A, Kn(A, b), T);
        su(A, b);
      }
      return null;
    }
    function C(A, b, T, H) {
      var $ = b !== null ? b.key : null;
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return $ !== null ? null : s(A, b, '' + T, H);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case G:
            return T.key === $ ? p(A, b, T, H) : null;
          case Q:
            return T.key === $ ? w(A, b, T, H) : null;
          case ae:
            return (($ = T._init), (T = $(T._payload)), C(A, b, T, H));
        }
        if (pe(T) || be(T)) return $ !== null ? null : U(A, b, T, H, null);
        if (typeof T.then == 'function') return C(A, b, ru(T), H);
        if (T.$$typeof === v) return C(A, b, Kn(A, T), H);
        su(A, T);
      }
      return null;
    }
    function D(A, b, T, H, $) {
      if ((typeof H == 'string' && H !== '') || typeof H == 'number' || typeof H == 'bigint')
        return ((A = A.get(T) || null), s(b, A, '' + H, $));
      if (typeof H == 'object' && H !== null) {
        switch (H.$$typeof) {
          case G:
            return ((A = A.get(H.key === null ? T : H.key) || null), p(b, A, H, $));
          case Q:
            return ((A = A.get(H.key === null ? T : H.key) || null), w(b, A, H, $));
          case ae:
            var ce = H._init;
            return ((H = ce(H._payload)), D(A, b, T, H, $));
        }
        if (pe(H) || be(H)) return ((A = A.get(T) || null), U(b, A, H, $, null));
        if (typeof H.then == 'function') return D(A, b, T, ru(H), $);
        if (H.$$typeof === v) return D(A, b, T, Kn(b, H), $);
        su(b, H);
      }
      return null;
    }
    function ie(A, b, T, H) {
      for (
        var $ = null, ce = null, P = b, ne = (b = 0), Qe = null;
        P !== null && ne < T.length;
        ne++
      ) {
        P.index > ne ? ((Qe = P), (P = null)) : (Qe = P.sibling);
        var he = C(A, P, T[ne], H);
        if (he === null) {
          P === null && (P = Qe);
          break;
        }
        (e && P && he.alternate === null && t(A, P),
          (b = u(he, b, ne)),
          ce === null ? ($ = he) : (ce.sibling = he),
          (ce = he),
          (P = Qe));
      }
      if (ne === T.length) return (a(A, P), me && Ca(A, ne), $);
      if (P === null) {
        for (; ne < T.length; ne++)
          ((P = q(A, T[ne], H)),
            P !== null && ((b = u(P, b, ne)), ce === null ? ($ = P) : (ce.sibling = P), (ce = P)));
        return (me && Ca(A, ne), $);
      }
      for (P = l(P); ne < T.length; ne++)
        ((Qe = D(P, A, ne, T[ne], H)),
          Qe !== null &&
            (e && Qe.alternate !== null && P.delete(Qe.key === null ? ne : Qe.key),
            (b = u(Qe, b, ne)),
            ce === null ? ($ = Qe) : (ce.sibling = Qe),
            (ce = Qe)));
      return (
        e &&
          P.forEach(function (Sa) {
            return t(A, Sa);
          }),
        me && Ca(A, ne),
        $
      );
    }
    function ee(A, b, T, H) {
      if (T == null) throw Error(c(151));
      for (
        var $ = null, ce = null, P = b, ne = (b = 0), Qe = null, he = T.next();
        P !== null && !he.done;
        ne++, he = T.next()
      ) {
        P.index > ne ? ((Qe = P), (P = null)) : (Qe = P.sibling);
        var Sa = C(A, P, he.value, H);
        if (Sa === null) {
          P === null && (P = Qe);
          break;
        }
        (e && P && Sa.alternate === null && t(A, P),
          (b = u(Sa, b, ne)),
          ce === null ? ($ = Sa) : (ce.sibling = Sa),
          (ce = Sa),
          (P = Qe));
      }
      if (he.done) return (a(A, P), me && Ca(A, ne), $);
      if (P === null) {
        for (; !he.done; ne++, he = T.next())
          ((he = q(A, he.value, H)),
            he !== null &&
              ((b = u(he, b, ne)), ce === null ? ($ = he) : (ce.sibling = he), (ce = he)));
        return (me && Ca(A, ne), $);
      }
      for (P = l(P); !he.done; ne++, he = T.next())
        ((he = D(P, A, ne, he.value, H)),
          he !== null &&
            (e && he.alternate !== null && P.delete(he.key === null ? ne : he.key),
            (b = u(he, b, ne)),
            ce === null ? ($ = he) : (ce.sibling = he),
            (ce = he)));
      return (
        e &&
          P.forEach(function (Sy) {
            return t(A, Sy);
          }),
        me && Ca(A, ne),
        $
      );
    }
    function _e(A, b, T, H) {
      if (
        (typeof T == 'object' &&
          T !== null &&
          T.type === S &&
          T.key === null &&
          (T = T.props.children),
        typeof T == 'object' && T !== null)
      ) {
        switch (T.$$typeof) {
          case G:
            e: {
              for (var $ = T.key; b !== null; ) {
                if (b.key === $) {
                  if ((($ = T.type), $ === S)) {
                    if (b.tag === 7) {
                      (a(A, b.sibling), (H = n(b, T.props.children)), (H.return = A), (A = H));
                      break e;
                    }
                  } else if (
                    b.elementType === $ ||
                    (typeof $ == 'object' && $ !== null && $.$$typeof === ae && mo($) === b.type)
                  ) {
                    (a(A, b.sibling), (H = n(b, T.props)), tn(H, T), (H.return = A), (A = H));
                    break e;
                  }
                  a(A, b);
                  break;
                } else t(A, b);
                b = b.sibling;
              }
              T.type === S ?
                ((H = wa(T.props.children, A.mode, H, T.key)), (H.return = A), (A = H))
              : ((H = Xn(T.type, T.key, T.props, null, A.mode, H)),
                tn(H, T),
                (H.return = A),
                (A = H));
            }
            return r(A);
          case Q:
            e: {
              for ($ = T.key; b !== null; ) {
                if (b.key === $)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === T.containerInfo &&
                    b.stateNode.implementation === T.implementation
                  ) {
                    (a(A, b.sibling), (H = n(b, T.children || [])), (H.return = A), (A = H));
                    break e;
                  } else {
                    a(A, b);
                    break;
                  }
                else t(A, b);
                b = b.sibling;
              }
              ((H = wi(T, A.mode, H)), (H.return = A), (A = H));
            }
            return r(A);
          case ae:
            return (($ = T._init), (T = $(T._payload)), _e(A, b, T, H));
        }
        if (pe(T)) return ie(A, b, T, H);
        if (be(T)) {
          if ((($ = be(T)), typeof $ != 'function')) throw Error(c(150));
          return ((T = $.call(T)), ee(A, b, T, H));
        }
        if (typeof T.then == 'function') return _e(A, b, ru(T), H);
        if (T.$$typeof === v) return _e(A, b, Kn(A, T), H);
        su(A, T);
      }
      return (typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint' ?
          ((T = '' + T),
          b !== null && b.tag === 6 ?
            (a(A, b.sibling), (H = n(b, T)), (H.return = A), (A = H))
          : (a(A, b), (H = Ni(T, A.mode, H)), (H.return = A), (A = H)),
          r(A))
        : a(A, b);
    }
    return function (A, b, T, H) {
      try {
        en = 0;
        var $ = _e(A, b, T, H);
        return ((ol = null), $);
      } catch (P) {
        if (P === Vl || P === Jn) throw P;
        var ce = st(29, P, null, A.mode);
        return ((ce.lanes = H), (ce.return = A), ce);
      } finally {
      }
    };
  }
  var fl = vo(!0),
    xo = vo(!1),
    At = k(null),
    jt = null;
  function ia(e) {
    var t = e.alternate;
    (Z(Ge, Ge.current & 1),
      Z(At, e),
      jt === null && (t === null || il.current !== null || t.memoizedState !== null) && (jt = e));
  }
  function So(e) {
    if (e.tag === 22) {
      if ((Z(Ge, Ge.current), Z(At, e), jt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (jt = e);
      }
    } else ra();
  }
  function ra() {
    (Z(Ge, Ge.current), Z(At, At.current));
  }
  function Vt(e) {
    (V(At), jt === e && (jt = null), V(Ge));
  }
  var Ge = k(0);
  function cu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || a.data === '$?' || $r(a))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function ir(e, t, a, l) {
    ((t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : h({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var rr = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = dt(),
        n = la(l);
      ((n.payload = t),
        a != null && (n.callback = a),
        (t = na(e, n, l)),
        t !== null && (gt(t, e, l), Fl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = dt(),
        n = la(l);
      ((n.tag = 1),
        (n.payload = t),
        a != null && (n.callback = a),
        (t = na(e, n, l)),
        t !== null && (gt(t, e, l), Fl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = dt(),
        l = la(a);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = na(e, l, a)),
        t !== null && (gt(t, e, a), Fl(t, e, a)));
    },
  };
  function Eo(e, t, a, l, n, u, r) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function' ? e.shouldComponentUpdate(l, u, r)
      : t.prototype && t.prototype.isPureReactComponent ? !Ul(a, l) || !Ul(n, u)
      : !0
    );
  }
  function Ao(e, t, a, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && rr.enqueueReplaceState(t, t.state, null));
  }
  function La(e, t) {
    var a = t;
    if ('ref' in t) {
      a = {};
      for (var l in t) l !== 'ref' && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = h({}, a));
      for (var n in e) a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  var ou =
    typeof reportError == 'function' ? reportError : (
      function (e) {
        if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
          var t = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof e == 'object' && e !== null && typeof e.message == 'string' ?
                String(e.message)
              : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (typeof process == 'object' && typeof process.emit == 'function') {
          process.emit('uncaughtException', e);
          return;
        }
        console.error(e);
      }
    );
  function _o(e) {
    ou(e);
  }
  function To(e) {
    console.error(e);
  }
  function No(e) {
    ou(e);
  }
  function fu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function wo(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function sr(e, t, a) {
    return (
      (a = la(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        fu(e, t);
      }),
      a
    );
  }
  function Oo(e) {
    return ((e = la(e)), (e.tag = 3), e);
  }
  function Co(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = l.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          wo(t, a, l);
        }));
    }
    var r = a.stateNode;
    r !== null &&
      typeof r.componentDidCatch == 'function' &&
      (e.callback = function () {
        (wo(t, a, l),
          typeof n != 'function' && (ga === null ? (ga = new Set([this])) : ga.add(this)));
        var s = l.stack;
        this.componentDidCatch(l.value, { componentStack: s !== null ? s : '' });
      });
  }
  function Sp(e, t, a, l, n) {
    if (((a.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = a.alternate), t !== null && Yl(t, a, n, !0), (a = At.current), a !== null)) {
        switch (a.tag) {
          case 13:
            return (
              jt === null ? jr() : a.alternate === null && Me === 0 && (Me = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = n),
              l === Ui ?
                (a.flags |= 16384)
              : ((t = a.updateQueue),
                t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                Mr(e, l, n)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === Ui ?
                (a.flags |= 16384)
              : ((t = a.updateQueue),
                t === null ?
                  ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                  (a.updateQueue = t))
                : ((a = t.retryQueue), a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                Mr(e, l, n)),
              !1
            );
        }
        throw Error(c(435, a.tag));
      }
      return (Mr(e, l, n), jr(), !1);
    }
    if (me)
      return (
        (t = At.current),
        t !== null ?
          ((t.flags & 65536) === 0 && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = n),
          l !== zi && ((e = Error(c(422), { cause: l })), Gl(vt(e, a))))
        : (l !== zi && ((t = Error(c(423), { cause: l })), Gl(vt(t, a))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (n &= -n),
          (e.lanes |= n),
          (l = vt(l, a)),
          (n = sr(e.stateNode, l, n)),
          qi(e, n),
          Me !== 4 && (Me = 2)),
        !1
      );
    var u = Error(c(520), { cause: l });
    if (((u = vt(u, a)), cn === null ? (cn = [u]) : cn.push(u), Me !== 4 && (Me = 2), t === null))
      return !0;
    ((l = vt(l, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = n & -n),
            (a.lanes |= e),
            (e = sr(a.stateNode, l, e)),
            qi(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (ga === null || !ga.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (n &= -n),
              (a.lanes |= n),
              (n = Oo(n)),
              Co(n, e, a, l),
              qi(a, n),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var zo = Error(c(461)),
    Xe = !1;
  function Fe(e, t, a, l) {
    t.child = e === null ? xo(t, null, a, l) : fl(t, e.child, a, l);
  }
  function Do(e, t, a, l, n) {
    a = a.render;
    var u = t.ref;
    if ('ref' in l) {
      var r = {};
      for (var s in l) s !== 'ref' && (r[s] = l[s]);
    } else r = l;
    return (
      Ra(t),
      (l = Vi(e, t, a, r, u, n)),
      (s = Qi()),
      e !== null && !Xe ?
        (Fi(e, t, n), Qt(e, t, n))
      : (me && s && Oi(t), (t.flags |= 1), Fe(e, t, l, n), t.child)
    );
  }
  function jo(e, t, a, l, n) {
    if (e === null) {
      var u = a.type;
      return typeof u == 'function' && !Ti(u) && u.defaultProps === void 0 && a.compare === null ?
          ((t.tag = 15), (t.type = u), Ro(e, t, u, l, n))
        : ((e = Xn(a.type, null, l, t, t.mode, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !hr(e, n))) {
      var r = u.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : Ul), a(r, l) && e.ref === t.ref))
        return Qt(e, t, n);
    }
    return ((t.flags |= 1), (e = Ht(u, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ro(e, t, a, l, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ul(u, l) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = l = u), hr(e, n))) (e.flags & 131072) !== 0 && (Xe = !0);
        else return ((t.lanes = e.lanes), Qt(e, t, n));
    }
    return cr(e, t, a, l, n);
  }
  function Mo(e, t, a) {
    var l = t.pendingProps,
      n = l.children,
      u = e !== null ? e.memoizedState : null;
    if (l.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((l = u !== null ? u.baseLanes | a : a), e !== null)) {
          for (n = t.child = e.child, u = 0; n !== null; )
            ((u = u | n.lanes | n.childLanes), (n = n.sibling));
          t.childLanes = u & ~l;
        } else ((t.childLanes = 0), (t.child = null));
        return ko(e, t, l, a);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && $n(t, u !== null ? u.cachePool : null),
          u !== null ? jc(t, u) : Yi(),
          So(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          ko(e, t, u !== null ? u.baseLanes | a : a, a)
        );
    } else
      u !== null ?
        ($n(t, u.cachePool), jc(t, u), ra(), (t.memoizedState = null))
      : (e !== null && $n(t, null), Yi(), ra());
    return (Fe(e, t, n, a), t.child);
  }
  function ko(e, t, a, l) {
    var n = Li();
    return (
      (n = n === null ? null : { parent: qe._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      e !== null && $n(t, null),
      Yi(),
      So(t),
      e !== null && Yl(e, t, l, !0),
      null
    );
  }
  function du(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != 'function' && typeof a != 'object') throw Error(c(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function cr(e, t, a, l, n) {
    return (
      Ra(t),
      (a = Vi(e, t, a, l, void 0, n)),
      (l = Qi()),
      e !== null && !Xe ?
        (Fi(e, t, n), Qt(e, t, n))
      : (me && l && Oi(t), (t.flags |= 1), Fe(e, t, a, n), t.child)
    );
  }
  function Lo(e, t, a, l, n, u) {
    return (
      Ra(t),
      (t.updateQueue = null),
      (a = Mc(t, l, a, n)),
      Rc(e),
      (l = Qi()),
      e !== null && !Xe ?
        (Fi(e, t, u), Qt(e, t, u))
      : (me && l && Oi(t), (t.flags |= 1), Fe(e, t, a, u), t.child)
    );
  }
  function Uo(e, t, a, l, n) {
    if ((Ra(t), t.stateNode === null)) {
      var u = tl,
        r = a.contextType;
      (typeof r == 'object' && r !== null && (u = We(r)),
        (u = new a(l, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = rr),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Bi(t),
        (r = a.contextType),
        (u.context = typeof r == 'object' && r !== null ? We(r) : tl),
        (u.state = t.memoizedState),
        (r = a.getDerivedStateFromProps),
        typeof r == 'function' && (ir(t, a, r, l), (u.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((r = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          r !== u.state && rr.enqueueReplaceState(u, u.state, null),
          $l(t, l, u, n),
          Kl(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps,
        p = La(a, s);
      u.props = p;
      var w = u.context,
        U = a.contextType;
      ((r = tl), typeof U == 'object' && U !== null && (r = We(U)));
      var q = a.getDerivedStateFromProps;
      ((U = typeof q == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (s = t.pendingProps !== s),
        U ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((s || w !== r) && Ao(t, u, l, r)),
        (aa = !1));
      var C = t.memoizedState;
      ((u.state = C),
        $l(t, l, u, n),
        Kl(),
        (w = t.memoizedState),
        s || C !== w || aa ?
          (typeof q == 'function' && (ir(t, a, q, l), (w = t.memoizedState)),
          (p = aa || Eo(t, a, p, l, C, w, r)) ?
            (U ||
              (typeof u.UNSAFE_componentWillMount != 'function' &&
                typeof u.componentWillMount != 'function') ||
              (typeof u.componentWillMount == 'function' && u.componentWillMount(),
              typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
            (t.memoizedProps = l),
            (t.memoizedState = w)),
          (u.props = l),
          (u.state = w),
          (u.context = r),
          (l = p))
        : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1)));
    } else {
      ((u = t.stateNode),
        Hi(e, t),
        (r = t.memoizedProps),
        (U = La(a, r)),
        (u.props = U),
        (q = t.pendingProps),
        (C = u.context),
        (w = a.contextType),
        (p = tl),
        typeof w == 'object' && w !== null && (p = We(w)),
        (s = a.getDerivedStateFromProps),
        (w = typeof s == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((r !== q || C !== p) && Ao(t, u, l, p)),
        (aa = !1),
        (C = t.memoizedState),
        (u.state = C),
        $l(t, l, u, n),
        Kl());
      var D = t.memoizedState;
      r !== q || C !== D || aa || (e !== null && e.dependencies !== null && Fn(e.dependencies)) ?
        (typeof s == 'function' && (ir(t, a, s, l), (D = t.memoizedState)),
        (
          (U =
            aa ||
            Eo(t, a, U, l, C, D, p) ||
            (e !== null && e.dependencies !== null && Fn(e.dependencies)))
        ) ?
          (w ||
            (typeof u.UNSAFE_componentWillUpdate != 'function' &&
              typeof u.componentWillUpdate != 'function') ||
            (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(l, D, p),
            typeof u.UNSAFE_componentWillUpdate == 'function' &&
              u.UNSAFE_componentWillUpdate(l, D, p)),
          typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
        : (typeof u.componentDidUpdate != 'function' ||
            (r === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (r === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 1024),
          (t.memoizedProps = l),
          (t.memoizedState = D)),
        (u.props = l),
        (u.state = D),
        (u.context = p),
        (l = U))
      : (typeof u.componentDidUpdate != 'function' ||
          (r === e.memoizedProps && C === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (r === e.memoizedProps && C === e.memoizedState) ||
          (t.flags |= 1024),
        (l = !1));
    }
    return (
      (u = l),
      du(e, t),
      (l = (t.flags & 128) !== 0),
      u || l ?
        ((u = t.stateNode),
        (a = l && typeof a.getDerivedStateFromError != 'function' ? null : u.render()),
        (t.flags |= 1),
        e !== null && l ?
          ((t.child = fl(t, e.child, null, n)), (t.child = fl(t, null, a, n)))
        : Fe(e, t, a, n),
        (t.memoizedState = u.state),
        (e = t.child))
      : (e = Qt(e, t, n)),
      e
    );
  }
  function Bo(e, t, a, l) {
    return (ql(), (t.flags |= 256), Fe(e, t, a, l), t.child);
  }
  var or = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function fr(e) {
    return { baseLanes: e, cachePool: _c() };
  }
  function dr(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= _t), e);
  }
  function Ho(e, t, a) {
    var l = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      r;
    if (
      ((r = u) || (r = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
      r && ((n = !0), (t.flags &= -129)),
      (r = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (me) {
        if ((n ? ia(t) : ra(), me)) {
          var s = Re,
            p;
          if ((p = s)) {
            e: {
              for (p = s, s = Dt; p.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break e;
                }
                if (((p = Ct(p.nextSibling)), p === null)) {
                  s = null;
                  break e;
                }
              }
              s = p;
            }
            s !== null ?
              ((t.memoizedState = {
                dehydrated: s,
                treeContext: Oa !== null ? { id: qt, overflow: Gt } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (p = st(18, null, null, 0)),
              (p.stateNode = s),
              (p.return = t),
              (t.child = p),
              (Pe = t),
              (Re = null),
              (p = !0))
            : (p = !1);
          }
          p || Da(t);
        }
        if (((s = t.memoizedState), s !== null && ((s = s.dehydrated), s !== null)))
          return ($r(s) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        Vt(t);
      }
      return (
        (s = l.children),
        (l = l.fallback),
        n ?
          (ra(),
          (n = t.mode),
          (s = gu({ mode: 'hidden', children: s }, n)),
          (l = wa(l, n, a, null)),
          (s.return = t),
          (l.return = t),
          (s.sibling = l),
          (t.child = s),
          (n = t.child),
          (n.memoizedState = fr(a)),
          (n.childLanes = dr(e, r, a)),
          (t.memoizedState = or),
          l)
        : (ia(t), gr(t, s))
      );
    }
    if (((p = e.memoizedState), p !== null && ((s = p.dehydrated), s !== null))) {
      if (u)
        t.flags & 256 ? (ia(t), (t.flags &= -257), (t = pr(e, t, a)))
        : t.memoizedState !== null ? (ra(), (t.child = e.child), (t.flags |= 128), (t = null))
        : (ra(),
          (n = l.fallback),
          (s = t.mode),
          (l = gu({ mode: 'visible', children: l.children }, s)),
          (n = wa(n, s, a, null)),
          (n.flags |= 2),
          (l.return = t),
          (n.return = t),
          (l.sibling = n),
          (t.child = l),
          fl(t, e.child, null, a),
          (l = t.child),
          (l.memoizedState = fr(a)),
          (l.childLanes = dr(e, r, a)),
          (t.memoizedState = or),
          (t = n));
      else if ((ia(t), $r(s))) {
        if (((r = s.nextSibling && s.nextSibling.dataset), r)) var w = r.dgst;
        ((r = w),
          (l = Error(c(419))),
          (l.stack = ''),
          (l.digest = r),
          Gl({ value: l, source: null, stack: null }),
          (t = pr(e, t, a)));
      } else if ((Xe || Yl(e, t, a, !1), (r = (a & e.childLanes) !== 0), Xe || r)) {
        if (
          ((r = Oe),
          r !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : Ju(l)),
            (l = (l & (r.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== p.retryLane))
        )
          throw ((p.retryLane = l), el(e, l), gt(r, e, l), zo);
        (s.data === '$?' || jr(), (t = pr(e, t, a)));
      } else
        s.data === '$?' ?
          ((t.flags |= 192), (t.child = e.child), (t = null))
        : ((e = p.treeContext),
          (Re = Ct(s.nextSibling)),
          (Pe = t),
          (me = !0),
          (za = null),
          (Dt = !1),
          e !== null &&
            ((St[Et++] = qt),
            (St[Et++] = Gt),
            (St[Et++] = Oa),
            (qt = e.id),
            (Gt = e.overflow),
            (Oa = t)),
          (t = gr(t, l.children)),
          (t.flags |= 4096));
      return t;
    }
    return n ?
        (ra(),
        (n = l.fallback),
        (s = t.mode),
        (p = e.child),
        (w = p.sibling),
        (l = Ht(p, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = p.subtreeFlags & 65011712),
        w !== null ? (n = Ht(w, n)) : ((n = wa(n, s, a, null)), (n.flags |= 2)),
        (n.return = t),
        (l.return = t),
        (l.sibling = n),
        (t.child = l),
        (l = n),
        (n = t.child),
        (s = e.child.memoizedState),
        s === null ?
          (s = fr(a))
        : ((p = s.cachePool),
          p !== null ?
            ((w = qe._currentValue), (p = p.parent !== w ? { parent: w, pool: w } : p))
          : (p = _c()),
          (s = { baseLanes: s.baseLanes | a, cachePool: p })),
        (n.memoizedState = s),
        (n.childLanes = dr(e, r, a)),
        (t.memoizedState = or),
        l)
      : (ia(t),
        (a = e.child),
        (e = a.sibling),
        (a = Ht(a, { mode: 'visible', children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function gr(e, t) {
    return ((t = gu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function gu(e, t) {
    return (
      (e = st(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function pr(e, t, a) {
    return (
      fl(t, e.child, null, a),
      (e = gr(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function qo(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), ji(e.return, t, a));
  }
  function yr(e, t, a, l, n) {
    var u = e.memoizedState;
    u === null ?
      (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: a,
        tailMode: n,
      })
    : ((u.isBackwards = t),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = l),
      (u.tail = a),
      (u.tailMode = n));
  }
  function Go(e, t, a) {
    var l = t.pendingProps,
      n = l.revealOrder,
      u = l.tail;
    if ((Fe(e, t, l.children, a), (l = Ge.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && qo(e, a, t);
          else if (e.tag === 19) qo(e, a, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    switch ((Z(Ge, l), n)) {
      case 'forwards':
        for (a = t.child, n = null; a !== null; )
          ((e = a.alternate), e !== null && cu(e) === null && (n = a), (a = a.sibling));
        ((a = n),
          a === null ? ((n = t.child), (t.child = null)) : ((n = a.sibling), (a.sibling = null)),
          yr(t, !1, n, a, u));
        break;
      case 'backwards':
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && cu(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = a), (a = n), (n = e));
        }
        yr(t, !0, a, null, u);
        break;
      case 'together':
        yr(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qt(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (da |= t.lanes), (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Yl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, a = Ht(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        ((e = e.sibling), (a = a.sibling = Ht(e, e.pendingProps)), (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function hr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Fn(e)));
  }
  function Ep(e, t, a) {
    switch (t.tag) {
      case 3:
        (we(t, t.stateNode.containerInfo), ta(t, qe, e.memoizedState.cache), ql());
        break;
      case 27:
      case 5:
        Vu(t);
        break;
      case 4:
        we(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return (
            l.dehydrated !== null ? (ia(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0 ? Ho(e, t, a)
            : (ia(t), (e = Qt(e, t, a)), e !== null ? e.sibling : null)
          );
        ia(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((l = (a & t.childLanes) !== 0),
          l || (Yl(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          n)
        ) {
          if (l) return Go(e, t, a);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          Z(Ge, Ge.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Mo(e, t, a));
      case 24:
        ta(t, qe, e.memoizedState.cache);
    }
    return Qt(e, t, a);
  }
  function Yo(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Xe = !0;
      else {
        if (!hr(e, a) && (t.flags & 128) === 0) return ((Xe = !1), Ep(e, t, a));
        Xe = (e.flags & 131072) !== 0;
      }
    else ((Xe = !1), me && (t.flags & 1048576) !== 0 && bc(t, Qn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            n = l._init;
          if (((l = n(l._payload)), (t.type = l), typeof l == 'function'))
            Ti(l) ?
              ((e = La(l, e)), (t.tag = 1), (t = Uo(null, t, l, e, a)))
            : ((t.tag = 0), (t = cr(null, t, l, e, a)));
          else {
            if (l != null) {
              if (((n = l.$$typeof), n === X)) {
                ((t.tag = 11), (t = Do(null, t, l, e, a)));
                break e;
              } else if (n === W) {
                ((t.tag = 14), (t = jo(null, t, l, e, a)));
                break e;
              }
            }
            throw ((t = ve(l) || l), Error(c(306, t, '')));
          }
        }
        return t;
      case 0:
        return cr(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((l = t.type), (n = La(l, t.pendingProps)), Uo(e, t, l, n, a));
      case 3:
        e: {
          if ((we(t, t.stateNode.containerInfo), e === null)) throw Error(c(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), Hi(e, t), $l(t, l, null, a));
          var r = t.memoizedState;
          if (
            ((l = r.cache),
            ta(t, qe, l),
            l !== u.cache && Ri(t, [qe], a, !0),
            Kl(),
            (l = r.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: r.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Bo(e, t, l, a);
              break e;
            } else if (l !== n) {
              ((n = vt(Error(c(424)), t)), Gl(n), (t = Bo(e, t, l, a)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                Re = Ct(e.firstChild),
                  Pe = t,
                  me = !0,
                  za = null,
                  Dt = !0,
                  a = xo(t, null, l, a),
                  t.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((ql(), l === n)) {
              t = Qt(e, t, a);
              break e;
            }
            Fe(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          du(e, t),
          e === null ?
            (a = Ff(t.type, null, t.pendingProps, null)) ?
              (t.memoizedState = a)
            : me ||
              ((a = t.type),
              (e = t.pendingProps),
              (l = wu(le.current).createElement(a)),
              (l[Je] = t),
              (l[et] = e),
              $e(l, a, e),
              Ze(l),
              (t.stateNode = l))
          : (t.memoizedState = Ff(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Vu(t),
          e === null &&
            me &&
            ((l = t.stateNode = Xf(t.type, t.pendingProps, le.current)),
            (Pe = t),
            (Dt = !0),
            (n = Re),
            ha(t.type) ? ((Jr = n), (Re = Ct(l.firstChild))) : (Re = n)),
          Fe(e, t, t.pendingProps.children, a),
          du(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            me &&
            ((n = l = Re) &&
              ((l = Jp(l, t.type, t.pendingProps, Dt)),
              l !== null ?
                ((t.stateNode = l), (Pe = t), (Re = Ct(l.firstChild)), (Dt = !1), (n = !0))
              : (n = !1)),
            n || Da(t)),
          Vu(t),
          (n = t.type),
          (u = t.pendingProps),
          (r = e !== null ? e.memoizedProps : null),
          (l = u.children),
          Qr(n, u) ? (l = null) : r !== null && Qr(n, r) && (t.flags |= 32),
          t.memoizedState !== null && ((n = Vi(e, t, pp, null, null, a)), (mn._currentValue = n)),
          du(e, t),
          Fe(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            me &&
            ((e = a = Re) &&
              ((a = Wp(a, t.pendingProps, Dt)),
              a !== null ? ((t.stateNode = a), (Pe = t), (Re = null), (e = !0)) : (e = !1)),
            e || Da(t)),
          null
        );
      case 13:
        return Ho(e, t, a);
      case 4:
        return (
          we(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = fl(t, null, l, a)) : Fe(e, t, l, a),
          t.child
        );
      case 11:
        return Do(e, t, t.type, t.pendingProps, a);
      case 7:
        return (Fe(e, t, t.pendingProps, a), t.child);
      case 8:
        return (Fe(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Fe(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return ((l = t.pendingProps), ta(t, t.type, l.value), Fe(e, t, l.children, a), t.child);
      case 9:
        return (
          (n = t.type._context),
          (l = t.pendingProps.children),
          Ra(t),
          (n = We(n)),
          (l = l(n)),
          (t.flags |= 1),
          Fe(e, t, l, a),
          t.child
        );
      case 14:
        return jo(e, t, t.type, t.pendingProps, a);
      case 15:
        return Ro(e, t, t.type, t.pendingProps, a);
      case 19:
        return Go(e, t, a);
      case 31:
        return (
          (l = t.pendingProps),
          (a = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null ?
            ((a = gu(l, a)), (a.ref = t.ref), (t.child = a), (a.return = t), (t = a))
          : ((a = Ht(e.child, l)), (a.ref = t.ref), (t.child = a), (a.return = t), (t = a)),
          t
        );
      case 22:
        return Mo(e, t, a);
      case 24:
        return (
          Ra(t),
          (l = We(qe)),
          e === null ?
            ((n = Li()),
            n === null &&
              ((n = Oe),
              (u = Mi()),
              (n.pooledCache = u),
              u.refCount++,
              u !== null && (n.pooledCacheLanes |= a),
              (n = u)),
            (t.memoizedState = { parent: l, cache: n }),
            Bi(t),
            ta(t, qe, n))
          : ((e.lanes & a) !== 0 && (Hi(e, t), $l(t, null, null, a), Kl()),
            (n = e.memoizedState),
            (u = t.memoizedState),
            n.parent !== l ?
              ((n = { parent: l, cache: l }),
              (t.memoizedState = n),
              t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
              ta(t, qe, l))
            : ((l = u.cache), ta(t, qe, l), l !== n.cache && Ri(t, [qe], a, !0))),
          Fe(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Ft(e) {
    e.flags |= 4;
  }
  function Zo(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !If(t))) {
      if (
        ((t = At.current),
        t !== null &&
          ((ge & 4194048) === ge ?
            jt !== null
          : ((ge & 62914560) !== ge && (ge & 536870912) === 0) || t !== jt))
      )
        throw ((Ql = Ui), Tc);
      e.flags |= 8192;
    }
  }
  function pu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? xs() : 536870912), (e.lanes |= t), (yl |= t)));
  }
  function an(e, t) {
    if (!me)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var a = null; t !== null; ) (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case 'collapsed':
          a = e.tail;
          for (var l = null; a !== null; ) (a.alternate !== null && (l = a), (a = a.sibling));
          l === null ?
            t || e.tail === null ?
              (e.tail = null)
            : (e.tail.sibling = null)
          : (l.sibling = null);
      }
  }
  function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((a |= n.lanes | n.childLanes),
          (l |= n.subtreeFlags & 65011712),
          (l |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((a |= n.lanes | n.childLanes),
          (l |= n.subtreeFlags),
          (l |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = a), t);
  }
  function Ap(e, t, a) {
    var l = t.pendingProps;
    switch ((Ci(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (De(t), null);
      case 1:
        return (De(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Zt(qe),
          ht(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Hl(t) ?
              Ft(t)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), xc())),
          De(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          e === null ? (Ft(t), a !== null ? (De(t), Zo(t, a)) : (De(t), (t.flags &= -16777217)))
          : a ?
            a !== e.memoizedState ?
              (Ft(t), De(t), Zo(t, a))
            : (De(t), (t.flags &= -16777217))
          : (e.memoizedProps !== l && Ft(t), De(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Tn(t), (a = le.current));
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && Ft(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return (De(t), null);
          }
          ((e = I.current), Hl(t) ? mc(t) : ((e = Xf(n, l, a)), (t.stateNode = e), Ft(t)));
        }
        return (De(t), null);
      case 5:
        if ((Tn(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Ft(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return (De(t), null);
          }
          if (((e = I.current), Hl(t))) mc(t);
          else {
            switch (((n = wu(le.current)), e)) {
              case 1:
                e = n.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                e = n.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    e = n.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    e = n.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                    break;
                  case 'script':
                    ((e = n.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case 'select':
                    ((e =
                      typeof l.is == 'string' ?
                        n.createElement('select', { is: l.is })
                      : n.createElement('select')),
                      l.multiple ? (e.multiple = !0) : l.size && (e.size = l.size));
                    break;
                  default:
                    e =
                      typeof l.is == 'string' ?
                        n.createElement(a, { is: l.is })
                      : n.createElement(a);
                }
            }
            ((e[Je] = t), (e[et] = l));
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                ((n.child.return = n), (n = n.child));
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              ((n.sibling.return = n.return), (n = n.sibling));
            }
            t.stateNode = e;
            e: switch (($e(e, a, l), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!l.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ft(t);
          }
        }
        return (De(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Ft(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(c(166));
          if (((e = le.current), Hl(t))) {
            if (((e = t.stateNode), (a = t.memoizedProps), (l = null), (n = Pe), n !== null))
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            ((e[Je] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Uf(e.nodeValue, a)
              )),
              e || Da(t));
          } else ((e = wu(e).createTextNode(l)), (e[Je] = t), (t.stateNode = e));
        }
        return (De(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = Hl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(c(318));
              if (((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
                throw Error(c(317));
              n[Je] = t;
            } else (ql(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (De(t), (n = !1));
          } else
            ((n = xc()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
        }
        if ((Vt(t), (t.flags & 128) !== 0)) return ((t.lanes = a), t);
        if (((a = l !== null), (e = e !== null && e.memoizedState !== null), a)) {
          ((l = t.child),
            (n = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (n = l.alternate.memoizedState.cachePool.pool));
          var u = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
            u !== n && (l.flags |= 2048));
        }
        return (a !== e && a && (t.child.flags |= 8192), pu(t, t.updateQueue), De(t), null);
      case 4:
        return (ht(), e === null && Gr(t.stateNode.containerInfo), De(t), null);
      case 10:
        return (Zt(t.type), De(t), null);
      case 19:
        if ((V(Ge), (n = t.memoizedState), n === null)) return (De(t), null);
        if (((l = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (l) an(n, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = cu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      an(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      pu(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    (hc(a, e), (a = a.sibling));
                  return (Z(Ge, (Ge.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            n.tail !== null &&
              zt() > bu &&
              ((t.flags |= 128), (l = !0), an(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = cu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                pu(t, e),
                an(n, !0),
                n.tail === null && n.tailMode === 'hidden' && !u.alternate && !me)
              )
                return (De(t), null);
            } else
              2 * zt() - n.renderingStartTime > bu &&
                a !== 536870912 &&
                ((t.flags |= 128), (l = !0), an(n, !1), (t.lanes = 4194304));
          n.isBackwards ?
            ((u.sibling = t.child), (t.child = u))
          : ((e = n.last), e !== null ? (e.sibling = u) : (t.child = u), (n.last = u));
        }
        return n.tail !== null ?
            ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = zt()),
            (t.sibling = null),
            (e = Ge.current),
            Z(Ge, l ? (e & 1) | 2 : e & 1),
            t)
          : (De(t), null);
      case 22:
      case 23:
        return (
          Vt(t),
          Zi(),
          (l = t.memoizedState !== null),
          e !== null ?
            (e.memoizedState !== null) !== l && (t.flags |= 8192)
          : l && (t.flags |= 8192),
          l ?
            (a & 536870912) !== 0 &&
            (t.flags & 128) === 0 &&
            (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
          (a = t.updateQueue),
          a !== null && pu(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && V(Ma),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Zt(qe),
          De(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function _p(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Zt(qe),
          ht(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Tn(t), null);
      case 13:
        if ((Vt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(c(340));
          ql();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (V(Ge), null);
      case 4:
        return (ht(), null);
      case 10:
        return (Zt(t.type), null);
      case 22:
      case 23:
        return (
          Vt(t),
          Zi(),
          e !== null && V(Ma),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Zt(qe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xo(e, t) {
    switch ((Ci(t), t.tag)) {
      case 3:
        (Zt(qe), ht());
        break;
      case 26:
      case 27:
      case 5:
        Tn(t);
        break;
      case 4:
        ht();
        break;
      case 13:
        Vt(t);
        break;
      case 19:
        V(Ge);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        (Vt(t), Zi(), e !== null && V(Ma));
        break;
      case 24:
        Zt(qe);
    }
  }
  function ln(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var u = a.create,
              r = a.inst;
            ((l = u()), (r.destroy = l));
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (s) {
      Te(t, t.return, s);
    }
  }
  function sa(e, t, a) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var r = l.inst,
              s = r.destroy;
            if (s !== void 0) {
              ((r.destroy = void 0), (n = t));
              var p = a,
                w = s;
              try {
                w();
              } catch (U) {
                Te(n, p, U);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (U) {
      Te(t, t.return, U);
    }
  }
  function Vo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Dc(t, a);
      } catch (l) {
        Te(e, e.return, l);
      }
    }
  }
  function Qo(e, t, a) {
    ((a.props = La(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      Te(e, t, l);
    }
  }
  function nn(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == 'function' ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (n) {
      Te(e, t, n);
    }
  }
  function Rt(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (n) {
          Te(e, t, n);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof a == 'function')
        try {
          a(null);
        } catch (n) {
          Te(e, t, n);
        }
      else a.current = null;
  }
  function Fo(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          a.autoFocus && l.focus();
          break e;
        case 'img':
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      Te(e, e.return, n);
    }
  }
  function br(e, t, a) {
    try {
      var l = e.stateNode;
      (Vp(l, e.type, a, t), (l[et] = t));
    } catch (n) {
      Te(e, e.return, n);
    }
  }
  function Ko(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ha(e.type)) || e.tag === 4
    );
  }
  function mr(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ko(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && ha(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vr(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t ?
          (a.nodeType === 9 ? a.body
          : a.nodeName === 'HTML' ? a.ownerDocument.body
          : a
          ).insertBefore(e, t)
        : ((t =
            a.nodeType === 9 ? a.body
            : a.nodeName === 'HTML' ? a.ownerDocument.body
            : a),
          t.appendChild(e),
          (a = a._reactRootContainer),
          a != null || t.onclick !== null || (t.onclick = Nu)));
    else if (
      l !== 4 &&
      (l === 27 && ha(e.type) && ((a = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (vr(e, t, a), e = e.sibling; e !== null; ) (vr(e, t, a), (e = e.sibling));
  }
  function yu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (l !== 4 && (l === 27 && ha(e.type) && (a = e.stateNode), (e = e.child), e !== null))
      for (yu(e, t, a), e = e.sibling; e !== null; ) (yu(e, t, a), (e = e.sibling));
  }
  function $o(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      ($e(t, l, a), (t[Je] = e), (t[et] = a));
    } catch (u) {
      Te(e, e.return, u);
    }
  }
  var Kt = !1,
    Ue = !1,
    xr = !1,
    Jo = typeof WeakSet == 'function' ? WeakSet : Set,
    Ve = null;
  function Tp(e, t) {
    if (((e = e.containerInfo), (Xr = Ru), (e = ic(e)), mi(e))) {
      if ('selectionStart' in e) var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, u.nodeType);
            } catch {
              a = null;
              break e;
            }
            var r = 0,
              s = -1,
              p = -1,
              w = 0,
              U = 0,
              q = e,
              C = null;
            t: for (;;) {
              for (
                var D;
                q !== a || (n !== 0 && q.nodeType !== 3) || (s = r + n),
                  q !== u || (l !== 0 && q.nodeType !== 3) || (p = r + l),
                  q.nodeType === 3 && (r += q.nodeValue.length),
                  (D = q.firstChild) !== null;

              )
                ((C = q), (q = D));
              for (;;) {
                if (q === e) break t;
                if (
                  (C === a && ++w === n && (s = r),
                  C === u && ++U === l && (p = r),
                  (D = q.nextSibling) !== null)
                )
                  break;
                ((q = C), (C = q.parentNode));
              }
              q = D;
            }
            a = s === -1 || p === -1 ? null : { start: s, end: p };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Vr = { focusedElem: e, selectionRange: a }, Ru = !1, Ve = t; Ve !== null; )
      if (((t = Ve), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
        ((e.return = t), (Ve = e));
      else
        for (; Ve !== null; ) {
          switch (((t = Ve), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (a = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = a.stateNode));
                try {
                  var ie = La(a.type, n, a.elementType === a.type);
                  ((e = l.getSnapshotBeforeUpdate(ie, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ee) {
                  Te(a, a.return, ee);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)) Kr(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Kr(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Ve = e));
            break;
          }
          Ve = t.return;
        }
  }
  function Wo(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (ca(e, a), l & 4 && ln(5, a));
        break;
      case 1:
        if ((ca(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (r) {
              Te(a, a.return, r);
            }
          else {
            var n = La(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              Te(a, a.return, r);
            }
          }
        (l & 64 && Vo(a), l & 512 && nn(a, a.return));
        break;
      case 3:
        if ((ca(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Dc(e, t);
          } catch (r) {
            Te(a, a.return, r);
          }
        }
        break;
      case 27:
        t === null && l & 4 && $o(a);
      case 26:
      case 5:
        (ca(e, a), t === null && l & 4 && Fo(a), l & 512 && nn(a, a.return));
        break;
      case 12:
        ca(e, a);
        break;
      case 13:
        (ca(e, a),
          l & 4 && ef(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((a = Mp.bind(null, a)), Ip(e, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || Kt), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Ue), (n = Kt));
          var u = Ue;
          ((Kt = l),
            (Ue = t) && !u ? oa(e, a, (a.subtreeFlags & 8772) !== 0) : ca(e, a),
            (Kt = n),
            (Ue = u));
        }
        break;
      case 30:
        break;
      default:
        ca(e, a);
    }
  }
  function Io(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Io(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Pu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var ze = null,
    lt = !1;
  function $t(e, t, a) {
    for (a = a.child; a !== null; ) (Po(e, t, a), (a = a.sibling));
  }
  function Po(e, t, a) {
    if (ut && typeof ut.onCommitFiberUnmount == 'function')
      try {
        ut.onCommitFiberUnmount(Tl, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Ue || Rt(a, t),
          $t(e, t, a),
          a.memoizedState ?
            a.memoizedState.count--
          : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Ue || Rt(a, t);
        var l = ze,
          n = lt;
        (ha(a.type) && ((ze = a.stateNode), (lt = !1)),
          $t(e, t, a),
          pn(a.stateNode),
          (ze = l),
          (lt = n));
        break;
      case 5:
        Ue || Rt(a, t);
      case 6:
        if (((l = ze), (n = lt), (ze = null), $t(e, t, a), (ze = l), (lt = n), ze !== null))
          if (lt)
            try {
              (ze.nodeType === 9 ? ze.body
              : ze.nodeName === 'HTML' ? ze.ownerDocument.body
              : ze
              ).removeChild(a.stateNode);
            } catch (u) {
              Te(a, t, u);
            }
          else
            try {
              ze.removeChild(a.stateNode);
            } catch (u) {
              Te(a, t, u);
            }
        break;
      case 18:
        ze !== null &&
          (lt ?
            ((e = ze),
            Yf(
              e.nodeType === 9 ? e.body
              : e.nodeName === 'HTML' ? e.ownerDocument.body
              : e,
              a.stateNode
            ),
            En(e))
          : Yf(ze, a.stateNode));
        break;
      case 4:
        ((l = ze),
          (n = lt),
          (ze = a.stateNode.containerInfo),
          (lt = !0),
          $t(e, t, a),
          (ze = l),
          (lt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ue || sa(2, a, t), Ue || sa(4, a, t), $t(e, t, a));
        break;
      case 1:
        (Ue ||
          (Rt(a, t), (l = a.stateNode), typeof l.componentWillUnmount == 'function' && Qo(a, t, l)),
          $t(e, t, a));
        break;
      case 21:
        $t(e, t, a);
        break;
      case 22:
        ((Ue = (l = Ue) || a.memoizedState !== null), $t(e, t, a), (Ue = l));
        break;
      default:
        $t(e, t, a);
    }
  }
  function ef(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        En(e);
      } catch (a) {
        Te(t, t.return, a);
      }
  }
  function Np(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Jo()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Jo()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Sr(e, t) {
    var a = Np(e);
    t.forEach(function (l) {
      var n = kp.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(n, n));
    });
  }
  function ct(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l],
          u = e,
          r = t,
          s = r;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (ha(s.type)) {
                ((ze = s.stateNode), (lt = !1));
                break e;
              }
              break;
            case 5:
              ((ze = s.stateNode), (lt = !1));
              break e;
            case 3:
            case 4:
              ((ze = s.stateNode.containerInfo), (lt = !0));
              break e;
          }
          s = s.return;
        }
        if (ze === null) throw Error(c(160));
        (Po(u, r, n),
          (ze = null),
          (lt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) (tf(t, e), (t = t.sibling));
  }
  var Ot = null;
  function tf(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ct(t, e), ot(e), l & 4 && (sa(3, e, e.return), ln(3, e), sa(5, e, e.return)));
        break;
      case 1:
        (ct(t, e),
          ot(e),
          l & 512 && (Ue || a === null || Rt(a, a.return)),
          l & 64 &&
            Kt &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var n = Ot;
        if ((ct(t, e), ot(e), l & 512 && (Ue || a === null || Rt(a, a.return)), l & 4)) {
          var u = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type), (a = e.memoizedProps), (n = n.ownerDocument || n));
                  t: switch (l) {
                    case 'title':
                      ((u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[Ol] ||
                          u[Je] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(l)),
                          n.head.insertBefore(u, n.querySelector('head > title'))),
                        $e(u, l, a),
                        (u[Je] = e),
                        Ze(u),
                        (l = u));
                      break e;
                    case 'link':
                      var r = Jf('link', 'href', n).get(l + (a.href || ''));
                      if (r) {
                        for (var s = 0; s < r.length; s++)
                          if (
                            ((u = r[s]),
                            u.getAttribute('href') ===
                              (a.href == null || a.href === '' ? null : a.href) &&
                              u.getAttribute('rel') === (a.rel == null ? null : a.rel) &&
                              u.getAttribute('title') === (a.title == null ? null : a.title) &&
                              u.getAttribute('crossorigin') ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            r.splice(s, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(l)), $e(u, l, a), n.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((r = Jf('meta', 'content', n).get(l + (a.content || '')))) {
                        for (s = 0; s < r.length; s++)
                          if (
                            ((u = r[s]),
                            u.getAttribute('content') ===
                              (a.content == null ? null : '' + a.content) &&
                              u.getAttribute('name') === (a.name == null ? null : a.name) &&
                              u.getAttribute('property') ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute('http-equiv') ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute('charset') === (a.charSet == null ? null : a.charSet))
                          ) {
                            r.splice(s, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(l)), $e(u, l, a), n.head.appendChild(u));
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  ((u[Je] = e), Ze(u), (l = u));
                }
                e.stateNode = l;
              } else Wf(n, e.type, e.stateNode);
            else e.stateNode = $f(n, l, e.memoizedProps);
          else
            u !== l ?
              (u === null ?
                a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
              : u.count--,
              l === null ? Wf(n, e.type, e.stateNode) : $f(n, l, e.memoizedProps))
            : l === null && e.stateNode !== null && br(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ct(t, e),
          ot(e),
          l & 512 && (Ue || a === null || Rt(a, a.return)),
          a !== null && l & 4 && br(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((ct(t, e), ot(e), l & 512 && (Ue || a === null || Rt(a, a.return)), e.flags & 32)) {
          n = e.stateNode;
          try {
            Fa(n, '');
          } catch (D) {
            Te(e, e.return, D);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), br(e, n, a !== null ? a.memoizedProps : n)),
          l & 1024 && (xr = !0));
        break;
      case 6:
        if ((ct(t, e), ot(e), l & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((l = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = l;
          } catch (D) {
            Te(e, e.return, D);
          }
        }
        break;
      case 3:
        if (
          ((zu = null),
          (n = Ot),
          (Ot = Ou(t.containerInfo)),
          ct(t, e),
          (Ot = n),
          ot(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            En(t.containerInfo);
          } catch (D) {
            Te(e, e.return, D);
          }
        xr && ((xr = !1), af(e));
        break;
      case 4:
        ((l = Ot), (Ot = Ou(e.stateNode.containerInfo)), ct(t, e), ot(e), (Ot = l));
        break;
      case 12:
        (ct(t, e), ot(e));
        break;
      case 13:
        (ct(t, e),
          ot(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (wr = zt()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Sr(e, l))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var p = a !== null && a.memoizedState !== null,
          w = Kt,
          U = Ue;
        if (((Kt = w || n), (Ue = U || p), ct(t, e), (Ue = U), (Kt = w), ot(e), l & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (a === null || p || Kt || Ue || Ua(e)),
              a = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                p = a = t;
                try {
                  if (((u = p.stateNode), n))
                    ((r = u.style),
                      typeof r.setProperty == 'function' ?
                        r.setProperty('display', 'none', 'important')
                      : (r.display = 'none'));
                  else {
                    s = p.stateNode;
                    var q = p.memoizedProps.style,
                      C = q != null && q.hasOwnProperty('display') ? q.display : null;
                    s.style.display = C == null || typeof C == 'boolean' ? '' : ('' + C).trim();
                  }
                } catch (D) {
                  Te(p, p.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                p = t;
                try {
                  p.stateNode.nodeValue = n ? '' : p.memoizedProps;
                } catch (D) {
                  Te(p, p.return, D);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null && ((a = l.retryQueue), a !== null && ((l.retryQueue = null), Sr(e, a))));
        break;
      case 19:
        (ct(t, e),
          ot(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Sr(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ct(t, e), ot(e));
    }
  }
  function ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Ko(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(c(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode,
              u = mr(e);
            yu(e, u, n);
            break;
          case 5:
            var r = a.stateNode;
            a.flags & 32 && (Fa(r, ''), (a.flags &= -33));
            var s = mr(e);
            yu(e, s, r);
            break;
          case 3:
          case 4:
            var p = a.stateNode.containerInfo,
              w = mr(e);
            vr(e, w, p);
            break;
          default:
            throw Error(c(161));
        }
      } catch (U) {
        Te(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function af(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (af(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function ca(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Wo(e, t.alternate, t), (t = t.sibling));
  }
  function Ua(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (sa(4, t, t.return), Ua(t));
          break;
        case 1:
          Rt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == 'function' && Qo(t, t.return, a), Ua(t));
          break;
        case 27:
          pn(t.stateNode);
        case 26:
        case 5:
          (Rt(t, t.return), Ua(t));
          break;
        case 22:
          t.memoizedState === null && Ua(t);
          break;
        case 30:
          Ua(t);
          break;
        default:
          Ua(t);
      }
      e = e.sibling;
    }
  }
  function oa(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        n = e,
        u = t,
        r = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (oa(n, u, a), ln(4, u));
          break;
        case 1:
          if ((oa(n, u, a), (l = u), (n = l.stateNode), typeof n.componentDidMount == 'function'))
            try {
              n.componentDidMount();
            } catch (w) {
              Te(l, l.return, w);
            }
          if (((l = u), (n = l.updateQueue), n !== null)) {
            var s = l.stateNode;
            try {
              var p = n.shared.hiddenCallbacks;
              if (p !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < p.length; n++) zc(p[n], s);
            } catch (w) {
              Te(l, l.return, w);
            }
          }
          (a && r & 64 && Vo(u), nn(u, u.return));
          break;
        case 27:
          $o(u);
        case 26:
        case 5:
          (oa(n, u, a), a && l === null && r & 4 && Fo(u), nn(u, u.return));
          break;
        case 12:
          oa(n, u, a);
          break;
        case 13:
          (oa(n, u, a), a && r & 4 && ef(n, u));
          break;
        case 22:
          (u.memoizedState === null && oa(n, u, a), nn(u, u.return));
          break;
        case 30:
          break;
        default:
          oa(n, u, a);
      }
      t = t.sibling;
    }
  }
  function Er(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Zl(a)));
  }
  function Ar(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Zl(e)));
  }
  function Mt(e, t, a, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (lf(e, t, a, l), (t = t.sibling));
  }
  function lf(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Mt(e, t, a, l), n & 2048 && ln(9, t));
        break;
      case 1:
        Mt(e, t, a, l);
        break;
      case 3:
        (Mt(e, t, a, l),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Zl(e))));
        break;
      case 12:
        if (n & 2048) {
          (Mt(e, t, a, l), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              r = u.id,
              s = u.onPostCommit;
            typeof s == 'function' &&
              s(r, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (p) {
            Te(t, t.return, p);
          }
        } else Mt(e, t, a, l);
        break;
      case 13:
        Mt(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (r = t.alternate),
          t.memoizedState !== null ?
            u._visibility & 2 ?
              Mt(e, t, a, l)
            : un(e, t)
          : u._visibility & 2 ? Mt(e, t, a, l)
          : ((u._visibility |= 2), dl(e, t, a, l, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Er(r, t));
        break;
      case 24:
        (Mt(e, t, a, l), n & 2048 && Ar(t.alternate, t));
        break;
      default:
        Mt(e, t, a, l);
    }
  }
  function dl(e, t, a, l, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        r = t,
        s = a,
        p = l,
        w = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (dl(u, r, s, p, n), ln(8, r));
          break;
        case 23:
          break;
        case 22:
          var U = r.stateNode;
          (r.memoizedState !== null ?
            U._visibility & 2 ?
              dl(u, r, s, p, n)
            : un(u, r)
          : ((U._visibility |= 2), dl(u, r, s, p, n)),
            n && w & 2048 && Er(r.alternate, r));
          break;
        case 24:
          (dl(u, r, s, p, n), n && w & 2048 && Ar(r.alternate, r));
          break;
        default:
          dl(u, r, s, p, n);
      }
      t = t.sibling;
    }
  }
  function un(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          l = t,
          n = l.flags;
        switch (l.tag) {
          case 22:
            (un(a, l), n & 2048 && Er(l.alternate, l));
            break;
          case 24:
            (un(a, l), n & 2048 && Ar(l.alternate, l));
            break;
          default:
            un(a, l);
        }
        t = t.sibling;
      }
  }
  var rn = 8192;
  function gl(e) {
    if (e.subtreeFlags & rn) for (e = e.child; e !== null; ) (nf(e), (e = e.sibling));
  }
  function nf(e) {
    switch (e.tag) {
      case 26:
        (gl(e),
          e.flags & rn && e.memoizedState !== null && fy(Ot, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        gl(e);
        break;
      case 3:
      case 4:
        var t = Ot;
        ((Ot = Ou(e.stateNode.containerInfo)), gl(e), (Ot = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null ?
            ((t = rn), (rn = 16777216), gl(e), (rn = t))
          : gl(e));
        break;
      default:
        gl(e);
    }
  }
  function uf(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function sn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((Ve = l), sf(l, e));
        }
      uf(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (rf(e), (e = e.sibling));
  }
  function rf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (sn(e), e.flags & 2048 && sa(9, e, e.return));
        break;
      case 3:
        sn(e);
        break;
      case 12:
        sn(e);
        break;
      case 22:
        var t = e.stateNode;
        (
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
        ) ?
          ((t._visibility &= -3), hu(e))
        : sn(e);
        break;
      default:
        sn(e);
    }
  }
  function hu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((Ve = l), sf(l, e));
        }
      uf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (sa(8, t, t.return), hu(t));
          break;
        case 22:
          ((a = t.stateNode), a._visibility & 2 && ((a._visibility &= -3), hu(t)));
          break;
        default:
          hu(t);
      }
      e = e.sibling;
    }
  }
  function sf(e, t) {
    for (; Ve !== null; ) {
      var a = Ve;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          sa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Zl(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (Ve = l));
      else
        e: for (a = e; Ve !== null; ) {
          l = Ve;
          var n = l.sibling,
            u = l.return;
          if ((Io(l), l === a)) {
            Ve = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), (Ve = n));
            break e;
          }
          Ve = u;
        }
    }
  }
  var wp = {
      getCacheForType: function (e) {
        var t = We(qe),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
    },
    Op = typeof WeakMap == 'function' ? WeakMap : Map,
    xe = 0,
    Oe = null,
    fe = null,
    ge = 0,
    Se = 0,
    ft = null,
    fa = !1,
    pl = !1,
    _r = !1,
    Jt = 0,
    Me = 0,
    da = 0,
    Ba = 0,
    Tr = 0,
    _t = 0,
    yl = 0,
    cn = null,
    nt = null,
    Nr = !1,
    wr = 0,
    bu = 1 / 0,
    mu = null,
    ga = null,
    Ke = 0,
    pa = null,
    hl = null,
    bl = 0,
    Or = 0,
    Cr = null,
    cf = null,
    on = 0,
    zr = null;
  function dt() {
    if ((xe & 2) !== 0 && ge !== 0) return ge & -ge;
    if (M.T !== null) {
      var e = nl;
      return e !== 0 ? e : Ur();
    }
    return As();
  }
  function of() {
    _t === 0 && (_t = (ge & 536870912) === 0 || me ? vs() : 536870912);
    var e = At.current;
    return (e !== null && (e.flags |= 32), _t);
  }
  function gt(e, t, a) {
    (((e === Oe && (Se === 2 || Se === 9)) || e.cancelPendingCommit !== null) &&
      (ml(e, 0), ya(e, ge, _t, !1)),
      wl(e, a),
      ((xe & 2) === 0 || e !== Oe) &&
        (e === Oe && ((xe & 2) === 0 && (Ba |= a), Me === 4 && ya(e, ge, _t, !1)), kt(e)));
  }
  function ff(e, t, a) {
    if ((xe & 6) !== 0) throw Error(c(327));
    var l = (!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Nl(e, t),
      n = l ? Dp(e, t) : Rr(e, t, !0),
      u = l;
    do {
      if (n === 0) {
        pl && !l && ya(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), u && !Cp(a))) {
          ((n = Rr(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var r = 0;
          else
            ((r = e.pendingLanes & -536870913),
              (r =
                r !== 0 ? r
                : r & 536870912 ? 536870912
                : 0));
          if (r !== 0) {
            t = r;
            e: {
              var s = e;
              n = cn;
              var p = s.current.memoizedState.isDehydrated;
              if ((p && (ml(s, r).flags |= 256), (r = Rr(s, r, !1)), r !== 2)) {
                if (_r && !p) {
                  ((s.errorRecoveryDisabledLanes |= u), (Ba |= u), (n = 4));
                  break e;
                }
                ((u = nt), (nt = n), u !== null && (nt === null ? (nt = u) : nt.push.apply(nt, u)));
              }
              n = r;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (ml(e, 0), ya(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ya(l, t, _t, !fa);
              break e;
            case 2:
              nt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((n = wr + 300 - zt()), 10 < n)) {
            if ((ya(l, t, _t, !fa), Cn(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = qf(
              df.bind(null, l, a, nt, mu, Nr, t, _t, Ba, yl, fa, u, 2, -0, 0),
              n
            );
            break e;
          }
          df(l, a, nt, mu, Nr, t, _t, Ba, yl, fa, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    kt(e);
  }
  function df(e, t, a, l, n, u, r, s, p, w, U, q, C, D) {
    if (
      ((e.timeoutHandle = -1),
      (q = t.subtreeFlags),
      (q & 8192 || (q & 16785408) === 16785408) &&
        ((bn = { stylesheets: null, count: 0, unsuspend: oy }), nf(t), (q = dy()), q !== null))
    ) {
      ((e.cancelPendingCommit = q(vf.bind(null, e, t, u, a, l, n, r, s, p, U, 1, C, D))),
        ya(e, u, r, !w));
      return;
    }
    vf(e, t, u, a, l, n, r, s, p);
  }
  function Cp(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var n = a[l],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!rt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null)) ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ya(e, t, a, l) {
    ((t &= ~Tr),
      (t &= ~Ba),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - it(n),
        r = 1 << u;
      ((l[u] = -1), (n &= ~r));
    }
    a !== 0 && Ss(e, a, t);
  }
  function vu() {
    return (xe & 6) === 0 ? (fn(0), !1) : !0;
  }
  function Dr() {
    if (fe !== null) {
      if (Se === 0) var e = fe.return;
      else ((e = fe), (Yt = ja = null), Ki(e), (ol = null), (en = 0), (e = fe));
      for (; e !== null; ) (Xo(e.alternate, e), (e = e.return));
      fe = null;
    }
  }
  function ml(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Fp(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      Dr(),
      (Oe = e),
      (fe = a = Ht(e.current, null)),
      (ge = t),
      (Se = 0),
      (ft = null),
      (fa = !1),
      (pl = Nl(e, t)),
      (_r = !1),
      (yl = _t = Tr = Ba = da = Me = 0),
      (nt = cn = null),
      (Nr = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - it(l),
          u = 1 << n;
        ((t |= e[n]), (l &= ~u));
      }
    return ((Jt = t), Gn(), a);
  }
  function gf(e, t) {
    ((se = null),
      (M.H = iu),
      t === Vl || t === Jn ? ((t = Oc()), (Se = 3))
      : t === Tc ? ((t = Oc()), (Se = 4))
      : (Se =
          t === zo ? 8
          : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6
          : 1),
      (ft = t),
      fe === null && ((Me = 1), fu(e, vt(t, e.current))));
  }
  function pf() {
    var e = M.H;
    return ((M.H = iu), e === null ? iu : e);
  }
  function yf() {
    var e = M.A;
    return ((M.A = wp), e);
  }
  function jr() {
    ((Me = 4),
      fa || ((ge & 4194048) !== ge && At.current !== null) || (pl = !0),
      ((da & 134217727) === 0 && (Ba & 134217727) === 0) || Oe === null || ya(Oe, ge, _t, !1));
  }
  function Rr(e, t, a) {
    var l = xe;
    xe |= 2;
    var n = pf(),
      u = yf();
    ((Oe !== e || ge !== t) && ((mu = null), ml(e, t)), (t = !1));
    var r = Me;
    e: do
      try {
        if (Se !== 0 && fe !== null) {
          var s = fe,
            p = ft;
          switch (Se) {
            case 8:
              (Dr(), (r = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              At.current === null && (t = !0);
              var w = Se;
              if (((Se = 0), (ft = null), vl(e, s, p, w), a && pl)) {
                r = 0;
                break e;
              }
              break;
            default:
              ((w = Se), (Se = 0), (ft = null), vl(e, s, p, w));
          }
        }
        (zp(), (r = Me));
        break;
      } catch (U) {
        gf(e, U);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Yt = ja = null),
      (xe = l),
      (M.H = n),
      (M.A = u),
      fe === null && ((Oe = null), (ge = 0), Gn()),
      r
    );
  }
  function zp() {
    for (; fe !== null; ) hf(fe);
  }
  function Dp(e, t) {
    var a = xe;
    xe |= 2;
    var l = pf(),
      n = yf();
    Oe !== e || ge !== t ? ((mu = null), (bu = zt() + 500), ml(e, t)) : (pl = Nl(e, t));
    e: do
      try {
        if (Se !== 0 && fe !== null) {
          t = fe;
          var u = ft;
          t: switch (Se) {
            case 1:
              ((Se = 0), (ft = null), vl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Nc(u)) {
                ((Se = 0), (ft = null), bf(t));
                break;
              }
              ((t = function () {
                ((Se !== 2 && Se !== 9) || Oe !== e || (Se = 7), kt(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Se = 7;
              break e;
            case 4:
              Se = 5;
              break e;
            case 7:
              Nc(u) ? ((Se = 0), (ft = null), bf(t)) : ((Se = 0), (ft = null), vl(e, t, u, 7));
              break;
            case 5:
              var r = null;
              switch (fe.tag) {
                case 26:
                  r = fe.memoizedState;
                case 5:
                case 27:
                  var s = fe;
                  if (!r || If(r)) {
                    ((Se = 0), (ft = null));
                    var p = s.sibling;
                    if (p !== null) fe = p;
                    else {
                      var w = s.return;
                      w !== null ? ((fe = w), xu(w)) : (fe = null);
                    }
                    break t;
                  }
              }
              ((Se = 0), (ft = null), vl(e, t, u, 5));
              break;
            case 6:
              ((Se = 0), (ft = null), vl(e, t, u, 6));
              break;
            case 8:
              (Dr(), (Me = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        jp();
        break;
      } catch (U) {
        gf(e, U);
      }
    while (!0);
    return (
      (Yt = ja = null),
      (M.H = l),
      (M.A = n),
      (xe = a),
      fe !== null ? 0 : ((Oe = null), (ge = 0), Gn(), Me)
    );
  }
  function jp() {
    for (; fe !== null && !eg(); ) hf(fe);
  }
  function hf(e) {
    var t = Yo(e.alternate, e, Jt);
    ((e.memoizedProps = e.pendingProps), t === null ? xu(e) : (fe = t));
  }
  function bf(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Lo(a, t, t.pendingProps, t.type, void 0, ge);
        break;
      case 11:
        t = Lo(a, t, t.pendingProps, t.type.render, t.ref, ge);
        break;
      case 5:
        Ki(t);
      default:
        (Xo(a, t), (t = fe = hc(t, Jt)), (t = Yo(a, t, Jt)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? xu(e) : (fe = t));
  }
  function vl(e, t, a, l) {
    ((Yt = ja = null), Ki(t), (ol = null), (en = 0));
    var n = t.return;
    try {
      if (Sp(e, n, t, a, ge)) {
        ((Me = 1), fu(e, vt(a, e.current)), (fe = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((fe = n), u);
      ((Me = 1), fu(e, vt(a, e.current)), (fe = null));
      return;
    }
    t.flags & 32768 ?
      (me || l === 1 ? (e = !0)
      : pl || (ge & 536870912) !== 0 ? (e = !1)
      : ((fa = e = !0),
        (l === 2 || l === 9 || l === 3 || l === 6) &&
          ((l = At.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
      mf(t, e))
    : xu(t);
  }
  function xu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        mf(t, fa);
        return;
      }
      e = t.return;
      var a = Ap(t.alternate, t, Jt);
      if (a !== null) {
        fe = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function mf(e, t) {
    do {
      var a = _p(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (fe = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        fe = e;
        return;
      }
      fe = e = a;
    } while (e !== null);
    ((Me = 6), (fe = null));
  }
  function vf(e, t, a, l, n, u, r, s, p) {
    e.cancelPendingCommit = null;
    do Su();
    while (Ke !== 0);
    if ((xe & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Ai),
        og(e, a, u, r, s, p),
        e === Oe && ((fe = Oe = null), (ge = 0)),
        (hl = t),
        (pa = e),
        (bl = a),
        (Or = u),
        (Cr = n),
        (cf = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
          ((e.callbackNode = null),
          (e.callbackPriority = 0),
          Lp(Nn, function () {
            return (_f(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = M.T), (M.T = null), (n = K.p), (K.p = 2), (r = xe), (xe |= 4));
        try {
          Tp(e, t, a);
        } finally {
          ((xe = r), (K.p = n), (M.T = l));
        }
      }
      ((Ke = 1), xf(), Sf(), Ef());
    }
  }
  function xf() {
    if (Ke === 1) {
      Ke = 0;
      var e = pa,
        t = hl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = M.T), (M.T = null));
        var l = K.p;
        K.p = 2;
        var n = xe;
        xe |= 4;
        try {
          tf(t, e);
          var u = Vr,
            r = ic(e.containerInfo),
            s = u.focusedElem,
            p = u.selectionRange;
          if (r !== s && s && s.ownerDocument && uc(s.ownerDocument.documentElement, s)) {
            if (p !== null && mi(s)) {
              var w = p.start,
                U = p.end;
              if ((U === void 0 && (U = w), 'selectionStart' in s))
                ((s.selectionStart = w), (s.selectionEnd = Math.min(U, s.value.length)));
              else {
                var q = s.ownerDocument || document,
                  C = (q && q.defaultView) || window;
                if (C.getSelection) {
                  var D = C.getSelection(),
                    ie = s.textContent.length,
                    ee = Math.min(p.start, ie),
                    _e = p.end === void 0 ? ee : Math.min(p.end, ie);
                  !D.extend && ee > _e && ((r = _e), (_e = ee), (ee = r));
                  var A = nc(s, ee),
                    b = nc(s, _e);
                  if (
                    A &&
                    b &&
                    (D.rangeCount !== 1 ||
                      D.anchorNode !== A.node ||
                      D.anchorOffset !== A.offset ||
                      D.focusNode !== b.node ||
                      D.focusOffset !== b.offset)
                  ) {
                    var T = q.createRange();
                    (T.setStart(A.node, A.offset),
                      D.removeAllRanges(),
                      ee > _e ?
                        (D.addRange(T), D.extend(b.node, b.offset))
                      : (T.setEnd(b.node, b.offset), D.addRange(T)));
                  }
                }
              }
            }
            for (q = [], D = s; (D = D.parentNode); )
              D.nodeType === 1 && q.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (typeof s.focus == 'function' && s.focus(), s = 0; s < q.length; s++) {
              var H = q[s];
              ((H.element.scrollLeft = H.left), (H.element.scrollTop = H.top));
            }
          }
          ((Ru = !!Xr), (Vr = Xr = null));
        } finally {
          ((xe = n), (K.p = l), (M.T = a));
        }
      }
      ((e.current = t), (Ke = 2));
    }
  }
  function Sf() {
    if (Ke === 2) {
      Ke = 0;
      var e = pa,
        t = hl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = M.T), (M.T = null));
        var l = K.p;
        K.p = 2;
        var n = xe;
        xe |= 4;
        try {
          Wo(e, t.alternate, t);
        } finally {
          ((xe = n), (K.p = l), (M.T = a));
        }
      }
      Ke = 3;
    }
  }
  function Ef() {
    if (Ke === 4 || Ke === 3) {
      ((Ke = 0), tg());
      var e = pa,
        t = hl,
        a = bl,
        l = cf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ?
        (Ke = 5)
      : ((Ke = 0), (hl = pa = null), Af(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (ga = null),
        Wu(a),
        (t = t.stateNode),
        ut && typeof ut.onCommitFiberRoot == 'function')
      )
        try {
          ut.onCommitFiberRoot(Tl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = M.T), (n = K.p), (K.p = 2), (M.T = null));
        try {
          for (var u = e.onRecoverableError, r = 0; r < l.length; r++) {
            var s = l[r];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          ((M.T = t), (K.p = n));
        }
      }
      ((bl & 3) !== 0 && Su(),
        kt(e),
        (n = e.pendingLanes),
        (a & 4194090) !== 0 && (n & 42) !== 0 ?
          e === zr ?
            on++
          : ((on = 0), (zr = e))
        : (on = 0),
        fn(0));
    }
  }
  function Af(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Zl(t)));
  }
  function Su(e) {
    return (xf(), Sf(), Ef(), _f());
  }
  function _f() {
    if (Ke !== 5) return !1;
    var e = pa,
      t = Or;
    Or = 0;
    var a = Wu(bl),
      l = M.T,
      n = K.p;
    try {
      ((K.p = 32 > a ? 32 : a), (M.T = null), (a = Cr), (Cr = null));
      var u = pa,
        r = bl;
      if (((Ke = 0), (hl = pa = null), (bl = 0), (xe & 6) !== 0)) throw Error(c(331));
      var s = xe;
      if (
        ((xe |= 4),
        rf(u.current),
        lf(u, u.current, r, a),
        (xe = s),
        fn(0, !1),
        ut && typeof ut.onPostCommitFiberRoot == 'function')
      )
        try {
          ut.onPostCommitFiberRoot(Tl, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = n), (M.T = l), Af(e, t));
    }
  }
  function Tf(e, t, a) {
    ((t = vt(a, t)),
      (t = sr(e.stateNode, t, 2)),
      (e = na(e, t, 2)),
      e !== null && (wl(e, 2), kt(e)));
  }
  function Te(e, t, a) {
    if (e.tag === 3) Tf(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Tf(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (ga === null || !ga.has(l)))
          ) {
            ((e = vt(a, e)),
              (a = Oo(2)),
              (l = na(t, a, 2)),
              l !== null && (Co(a, l, t, e), wl(l, 2), kt(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mr(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Op();
      var n = new Set();
      l.set(t, n);
    } else ((n = l.get(t)), n === void 0 && ((n = new Set()), l.set(t, n)));
    n.has(a) || ((_r = !0), n.add(a), (e = Rp.bind(null, e, t, a)), t.then(e, e));
  }
  function Rp(e, t, a) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Oe === e &&
        (ge & a) === a &&
        (Me === 4 || (Me === 3 && (ge & 62914560) === ge && 300 > zt() - wr) ?
          (xe & 2) === 0 && ml(e, 0)
        : (Tr |= a),
        yl === ge && (yl = 0)),
      kt(e));
  }
  function Nf(e, t) {
    (t === 0 && (t = xs()), (e = el(e, t)), e !== null && (wl(e, t), kt(e)));
  }
  function Mp(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Nf(e, a));
  }
  function kp(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (l !== null && l.delete(t), Nf(e, a));
  }
  function Lp(e, t) {
    return Fu(e, t);
  }
  var Eu = null,
    xl = null,
    kr = !1,
    Au = !1,
    Lr = !1,
    Ha = 0;
  function kt(e) {
    (e !== xl && e.next === null && (xl === null ? (Eu = xl = e) : (xl = xl.next = e)),
      (Au = !0),
      kr || ((kr = !0), Bp()));
  }
  function fn(e, t) {
    if (!Lr && Au) {
      Lr = !0;
      do
        for (var a = !1, l = Eu; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var r = l.suspendedLanes,
                s = l.pingedLanes;
              ((u = (1 << (31 - it(42 | e) + 1)) - 1),
                (u &= n & ~(r & ~s)),
                (u =
                  u & 201326741 ? (u & 201326741) | 1
                  : u ? u | 2
                  : 0));
            }
            u !== 0 && ((a = !0), zf(l, u));
          } else
            ((u = ge),
              (u = Cn(
                l,
                l === Oe ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Nl(l, u) || ((a = !0), zf(l, u)));
          l = l.next;
        }
      while (a);
      Lr = !1;
    }
  }
  function Up() {
    wf();
  }
  function wf() {
    Au = kr = !1;
    var e = 0;
    Ha !== 0 && (Qp() && (e = Ha), (Ha = 0));
    for (var t = zt(), a = null, l = Eu; l !== null; ) {
      var n = l.next,
        u = Of(l, t);
      (u === 0 ?
        ((l.next = null), a === null ? (Eu = n) : (a.next = n), n === null && (xl = a))
      : ((a = l), (e !== 0 || (u & 3) !== 0) && (Au = !0)),
        (l = n));
    }
    fn(e);
  }
  function Of(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var r = 31 - it(u),
        s = 1 << r,
        p = n[r];
      (p === -1 ?
        ((s & a) === 0 || (s & l) !== 0) && (n[r] = cg(s, t))
      : p <= t && (e.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((t = Oe),
      (a = ge),
      (a = Cn(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      a === 0 || (e === t && (Se === 2 || Se === 9)) || e.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Ku(l), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((a & 3) === 0 || Nl(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && Ku(l), Wu(a))) {
        case 2:
        case 8:
          a = bs;
          break;
        case 32:
          a = Nn;
          break;
        case 268435456:
          a = ms;
          break;
        default:
          a = Nn;
      }
      return (
        (l = Cf.bind(null, e)),
        (a = Fu(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && Ku(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Cf(e, t) {
    if (Ke !== 0 && Ke !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (Su() && e.callbackNode !== a) return null;
    var l = ge;
    return (
      (l = Cn(e, e === Oe ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0 ? null : (
        (ff(e, l, t),
        Of(e, zt()),
        e.callbackNode != null && e.callbackNode === a ? Cf.bind(null, e) : null)
      )
    );
  }
  function zf(e, t) {
    if (Su()) return null;
    ff(e, t, !0);
  }
  function Bp() {
    Kp(function () {
      (xe & 6) !== 0 ? Fu(hs, Up) : wf();
    });
  }
  function Ur() {
    return (Ha === 0 && (Ha = vs()), Ha);
  }
  function Df(e) {
    return (
      e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null
      : typeof e == 'function' ? e
      : Mn('' + e)
    );
  }
  function jf(e, t) {
    var a = t.ownerDocument.createElement('input');
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute('form', e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Hp(e, t, a, l, n) {
    if (t === 'submit' && a && a.stateNode === n) {
      var u = Df((n[et] || null).action),
        r = l.submitter;
      r &&
        ((t = (t = r[et] || null) ? Df(t.formAction) : r.getAttribute('formAction')),
        t !== null && ((u = t), (r = null)));
      var s = new Bn('action', 'action', null, l, n);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ha !== 0) {
                  var p = r ? jf(n, r) : new FormData(n);
                  lr(a, { pending: !0, data: p, method: n.method, action: u }, null, p);
                }
              } else
                typeof u == 'function' &&
                  (s.preventDefault(),
                  (p = r ? jf(n, r) : new FormData(n)),
                  lr(a, { pending: !0, data: p, method: n.method, action: u }, u, p));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Br = 0; Br < Ei.length; Br++) {
    var Hr = Ei[Br],
      qp = Hr.toLowerCase(),
      Gp = Hr[0].toUpperCase() + Hr.slice(1);
    wt(qp, 'on' + Gp);
  }
  (wt(cc, 'onAnimationEnd'),
    wt(oc, 'onAnimationIteration'),
    wt(fc, 'onAnimationStart'),
    wt('dblclick', 'onDoubleClick'),
    wt('focusin', 'onFocus'),
    wt('focusout', 'onBlur'),
    wt(np, 'onTransitionRun'),
    wt(up, 'onTransitionStart'),
    wt(ip, 'onTransitionCancel'),
    wt(dc, 'onTransitionEnd'),
    Xa('onMouseEnter', ['mouseout', 'mouseover']),
    Xa('onMouseLeave', ['mouseout', 'mouseover']),
    Xa('onPointerEnter', ['pointerout', 'pointerover']),
    Xa('onPointerLeave', ['pointerout', 'pointerover']),
    Aa('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Aa(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Aa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Aa('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Aa(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Aa(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var dn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Yp = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(dn)
    );
  function Rf(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        n = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var r = l.length - 1; 0 <= r; r--) {
            var s = l[r],
              p = s.instance,
              w = s.currentTarget;
            if (((s = s.listener), p !== u && n.isPropagationStopped())) break e;
            ((u = s), (n.currentTarget = w));
            try {
              u(n);
            } catch (U) {
              ou(U);
            }
            ((n.currentTarget = null), (u = p));
          }
        else
          for (r = 0; r < l.length; r++) {
            if (
              ((s = l[r]),
              (p = s.instance),
              (w = s.currentTarget),
              (s = s.listener),
              p !== u && n.isPropagationStopped())
            )
              break e;
            ((u = s), (n.currentTarget = w));
            try {
              u(n);
            } catch (U) {
              ou(U);
            }
            ((n.currentTarget = null), (u = p));
          }
      }
    }
  }
  function de(e, t) {
    var a = t[Iu];
    a === void 0 && (a = t[Iu] = new Set());
    var l = e + '__bubble';
    a.has(l) || (Mf(t, e, 2, !1), a.add(l));
  }
  function qr(e, t, a) {
    var l = 0;
    (t && (l |= 4), Mf(a, e, l, t));
  }
  var _u = '_reactListening' + Math.random().toString(36).slice(2);
  function Gr(e) {
    if (!e[_u]) {
      ((e[_u] = !0),
        Ts.forEach(function (a) {
          a !== 'selectionchange' && (Yp.has(a) || qr(a, !1, e), qr(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_u] || ((t[_u] = !0), qr('selectionchange', !1, t));
    }
  }
  function Mf(e, t, a, l) {
    switch (nd(t)) {
      case 2:
        var n = yy;
        break;
      case 8:
        n = hy;
        break;
      default:
        n = ts;
    }
    ((a = n.bind(null, t, a, e)),
      (n = void 0),
      !ci || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (n = !0),
      l ?
        n !== void 0 ?
          e.addEventListener(t, a, { capture: !0, passive: n })
        : e.addEventListener(t, a, !0)
      : n !== void 0 ? e.addEventListener(t, a, { passive: n })
      : e.addEventListener(t, a, !1));
  }
  function Yr(e, t, a, l, n) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var r = l.tag;
        if (r === 3 || r === 4) {
          var s = l.stateNode.containerInfo;
          if (s === n) break;
          if (r === 4)
            for (r = l.return; r !== null; ) {
              var p = r.tag;
              if ((p === 3 || p === 4) && r.stateNode.containerInfo === n) return;
              r = r.return;
            }
          for (; s !== null; ) {
            if (((r = Ga(s)), r === null)) return;
            if (((p = r.tag), p === 5 || p === 6 || p === 26 || p === 27)) {
              l = u = r;
              continue e;
            }
            s = s.parentNode;
          }
        }
        l = l.return;
      }
    Hs(function () {
      var w = u,
        U = ri(a),
        q = [];
      e: {
        var C = gc.get(e);
        if (C !== void 0) {
          var D = Bn,
            ie = e;
          switch (e) {
            case 'keypress':
              if (Ln(a) === 0) break e;
            case 'keydown':
            case 'keyup':
              D = Lg;
              break;
            case 'focusin':
              ((ie = 'focus'), (D = gi));
              break;
            case 'focusout':
              ((ie = 'blur'), (D = gi));
              break;
            case 'beforeblur':
            case 'afterblur':
              D = gi;
              break;
            case 'click':
              if (a.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              D = Ys;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              D = _g;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              D = Hg;
              break;
            case cc:
            case oc:
            case fc:
              D = wg;
              break;
            case dc:
              D = Gg;
              break;
            case 'scroll':
            case 'scrollend':
              D = Eg;
              break;
            case 'wheel':
              D = Zg;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              D = Cg;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              D = Xs;
              break;
            case 'toggle':
            case 'beforetoggle':
              D = Vg;
          }
          var ee = (t & 4) !== 0,
            _e = !ee && (e === 'scroll' || e === 'scrollend'),
            A =
              ee ?
                C !== null ?
                  C + 'Capture'
                : null
              : C;
          ee = [];
          for (var b = w, T; b !== null; ) {
            var H = b;
            if (
              ((T = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                T === null ||
                A === null ||
                ((H = zl(b, A)), H != null && ee.push(gn(b, H, T))),
              _e)
            )
              break;
            b = b.return;
          }
          0 < ee.length && ((C = new D(C, ie, null, a, U)), q.push({ event: C, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === 'mouseover' || e === 'pointerover'),
            (D = e === 'mouseout' || e === 'pointerout'),
            C && a !== ii && (ie = a.relatedTarget || a.fromElement) && (Ga(ie) || ie[qa]))
          )
            break e;
          if (
            (D || C) &&
            ((C =
              U.window === U ? U
              : (C = U.ownerDocument) ? C.defaultView || C.parentWindow
              : window),
            D ?
              ((ie = a.relatedTarget || a.toElement),
              (D = w),
              (ie = ie ? Ga(ie) : null),
              ie !== null &&
                ((_e = m(ie)), (ee = ie.tag), ie !== _e || (ee !== 5 && ee !== 27 && ee !== 6)) &&
                (ie = null))
            : ((D = null), (ie = w)),
            D !== ie)
          ) {
            if (
              ((ee = Ys),
              (H = 'onMouseLeave'),
              (A = 'onMouseEnter'),
              (b = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ee = Xs), (H = 'onPointerLeave'), (A = 'onPointerEnter'), (b = 'pointer')),
              (_e = D == null ? C : Cl(D)),
              (T = ie == null ? C : Cl(ie)),
              (C = new ee(H, b + 'leave', D, a, U)),
              (C.target = _e),
              (C.relatedTarget = T),
              (H = null),
              Ga(U) === w &&
                ((ee = new ee(A, b + 'enter', ie, a, U)),
                (ee.target = T),
                (ee.relatedTarget = _e),
                (H = ee)),
              (_e = H),
              D && ie)
            )
              t: {
                for (ee = D, A = ie, b = 0, T = ee; T; T = Sl(T)) b++;
                for (T = 0, H = A; H; H = Sl(H)) T++;
                for (; 0 < b - T; ) ((ee = Sl(ee)), b--);
                for (; 0 < T - b; ) ((A = Sl(A)), T--);
                for (; b--; ) {
                  if (ee === A || (A !== null && ee === A.alternate)) break t;
                  ((ee = Sl(ee)), (A = Sl(A)));
                }
                ee = null;
              }
            else ee = null;
            (D !== null && kf(q, C, D, ee, !1),
              ie !== null && _e !== null && kf(q, _e, ie, ee, !0));
          }
        }
        e: {
          if (
            ((C = w ? Cl(w) : window),
            (D = C.nodeName && C.nodeName.toLowerCase()),
            D === 'select' || (D === 'input' && C.type === 'file'))
          )
            var $ = Is;
          else if (Js(C))
            if (Ps) $ = tp;
            else {
              $ = Pg;
              var ce = Ig;
            }
          else
            ((D = C.nodeName),
              !D || D.toLowerCase() !== 'input' || (C.type !== 'checkbox' && C.type !== 'radio') ?
                w && ui(w.elementType) && ($ = Is)
              : ($ = ep));
          if ($ && ($ = $(e, w))) {
            Ws(q, $, a, U);
            break e;
          }
          (ce && ce(e, C, w),
            e === 'focusout' &&
              w &&
              C.type === 'number' &&
              w.memoizedProps.value != null &&
              ni(C, 'number', C.value));
        }
        switch (((ce = w ? Cl(w) : window), e)) {
          case 'focusin':
            (Js(ce) || ce.contentEditable === 'true') && ((Wa = ce), (vi = w), (Bl = null));
            break;
          case 'focusout':
            Bl = vi = Wa = null;
            break;
          case 'mousedown':
            xi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((xi = !1), rc(q, a, U));
            break;
          case 'selectionchange':
            if (lp) break;
          case 'keydown':
          case 'keyup':
            rc(q, a, U);
        }
        var P;
        if (yi)
          e: {
            switch (e) {
              case 'compositionstart':
                var ne = 'onCompositionStart';
                break e;
              case 'compositionend':
                ne = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ne = 'onCompositionUpdate';
                break e;
            }
            ne = void 0;
          }
        else
          Ja ?
            Ks(e, a) && (ne = 'onCompositionEnd')
          : e === 'keydown' && a.keyCode === 229 && (ne = 'onCompositionStart');
        (ne &&
          (Vs &&
            a.locale !== 'ko' &&
            (Ja || ne !== 'onCompositionStart' ?
              ne === 'onCompositionEnd' && Ja && (P = qs())
            : ((ea = U), (oi = 'value' in ea ? ea.value : ea.textContent), (Ja = !0))),
          (ce = Tu(w, ne)),
          0 < ce.length &&
            ((ne = new Zs(ne, e, null, a, U)),
            q.push({ event: ne, listeners: ce }),
            P ? (ne.data = P) : ((P = $s(a)), P !== null && (ne.data = P)))),
          (P = Fg ? Kg(e, a) : $g(e, a)) &&
            ((ne = Tu(w, 'onBeforeInput')),
            0 < ne.length &&
              ((ce = new Zs('onBeforeInput', 'beforeinput', null, a, U)),
              q.push({ event: ce, listeners: ne }),
              (ce.data = P))),
          Hp(q, e, w, a, U));
      }
      Rf(q, t);
    });
  }
  function gn(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Tu(e, t) {
    for (var a = t + 'Capture', l = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = zl(e, a)),
          n != null && l.unshift(gn(e, n, u)),
          (n = zl(e, t)),
          n != null && l.push(gn(e, n, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Sl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function kf(e, t, a, l, n) {
    for (var u = t._reactName, r = []; a !== null && a !== l; ) {
      var s = a,
        p = s.alternate,
        w = s.stateNode;
      if (((s = s.tag), p !== null && p === l)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        w === null ||
        ((p = w),
        n ?
          ((w = zl(a, u)), w != null && r.unshift(gn(a, w, p)))
        : n || ((w = zl(a, u)), w != null && r.push(gn(a, w, p)))),
        (a = a.return));
    }
    r.length !== 0 && e.push({ event: t, listeners: r });
  }
  var Zp = /\r\n?/g,
    Xp = /\u0000|\uFFFD/g;
  function Lf(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Zp,
        `
`
      )
      .replace(Xp, '');
  }
  function Uf(e, t) {
    return ((t = Lf(t)), Lf(e) === t);
  }
  function Nu() {}
  function Ae(e, t, a, l, n, u) {
    switch (a) {
      case 'children':
        typeof l == 'string' ?
          t === 'body' || (t === 'textarea' && l === '') || Fa(e, l)
        : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && Fa(e, '' + l);
        break;
      case 'className':
        Dn(e, 'class', l);
        break;
      case 'tabIndex':
        Dn(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Dn(e, a, l);
        break;
      case 'style':
        Us(e, l, u);
        break;
      case 'data':
        if (t !== 'object') {
          Dn(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || a !== 'href')) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(a);
          break;
        }
        ((l = Mn('' + l)), e.setAttribute(a, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == 'function' &&
            (a === 'formAction' ?
              (t !== 'input' && Ae(e, t, 'name', n.name, n, null),
              Ae(e, t, 'formEncType', n.formEncType, n, null),
              Ae(e, t, 'formMethod', n.formMethod, n, null),
              Ae(e, t, 'formTarget', n.formTarget, n, null))
            : (Ae(e, t, 'encType', n.encType, n, null),
              Ae(e, t, 'method', n.method, n, null),
              Ae(e, t, 'target', n.target, n, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(a);
          break;
        }
        ((l = Mn('' + l)), e.setAttribute(a, l));
        break;
      case 'onClick':
        l != null && (e.onclick = Nu);
        break;
      case 'onScroll':
        l != null && de('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && de('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(c(61));
          if (((a = l.__html), a != null)) {
            if (n.children != null) throw Error(c(60));
            e.innerHTML = a;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        ((a = Mn('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol' ?
          e.setAttribute(a, '' + l)
        : e.removeAttribute(a);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol' ?
          e.setAttribute(a, '')
        : e.removeAttribute(a);
        break;
      case 'capture':
      case 'download':
        l === !0 ? e.setAttribute(a, '')
        : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol' ?
          e.setAttribute(a, l)
        : e.removeAttribute(a);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l ?
          e.setAttribute(a, l)
        : e.removeAttribute(a);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l) ?
          e.removeAttribute(a)
        : e.setAttribute(a, l);
        break;
      case 'popover':
        (de('beforetoggle', e), de('toggle', e), zn(e, 'popover', l));
        break;
      case 'xlinkActuate':
        Ut(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Ut(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Ut(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Ut(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Ut(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Ut(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Ut(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Ut(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Ut(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        zn(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < a.length) || (a[0] !== 'o' && a[0] !== 'O') || (a[1] !== 'n' && a[1] !== 'N')) &&
          ((a = xg.get(a) || a), zn(e, a, l));
    }
  }
  function Zr(e, t, a, l, n, u) {
    switch (a) {
      case 'style':
        Us(e, l, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(c(61));
          if (((a = l.__html), a != null)) {
            if (n.children != null) throw Error(c(60));
            e.innerHTML = a;
          }
        }
        break;
      case 'children':
        typeof l == 'string' ?
          Fa(e, l)
        : (typeof l == 'number' || typeof l == 'bigint') && Fa(e, '' + l);
        break;
      case 'onScroll':
        l != null && de('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && de('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = Nu);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Ns.hasOwnProperty(a))
          e: {
            if (
              a[0] === 'o' &&
              a[1] === 'n' &&
              ((n = a.endsWith('Capture')),
              (t = a.slice(2, n ? a.length - 7 : void 0)),
              (u = e[et] || null),
              (u = u != null ? u[a] : null),
              typeof u == 'function' && e.removeEventListener(t, u, n),
              typeof l == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (a in e ? (e[a] = null) : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, n));
              break e;
            }
            a in e ? (e[a] = l)
            : l === !0 ? e.setAttribute(a, '')
            : zn(e, a, l);
          }
    }
  }
  function $e(e, t, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (de('error', e), de('load', e));
        var l = !1,
          n = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var r = a[u];
            if (r != null)
              switch (u) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(c(137, t));
                default:
                  Ae(e, t, u, r, a, null);
              }
          }
        (n && Ae(e, t, 'srcSet', a.srcSet, a, null), l && Ae(e, t, 'src', a.src, a, null));
        return;
      case 'input':
        de('invalid', e);
        var s = (u = r = n = null),
          p = null,
          w = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var U = a[l];
            if (U != null)
              switch (l) {
                case 'name':
                  n = U;
                  break;
                case 'type':
                  r = U;
                  break;
                case 'checked':
                  p = U;
                  break;
                case 'defaultChecked':
                  w = U;
                  break;
                case 'value':
                  u = U;
                  break;
                case 'defaultValue':
                  s = U;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (U != null) throw Error(c(137, t));
                  break;
                default:
                  Ae(e, t, l, U, a, null);
              }
          }
        (Rs(e, u, s, p, w, r, n, !1), jn(e));
        return;
      case 'select':
        (de('invalid', e), (l = r = u = null));
        for (n in a)
          if (a.hasOwnProperty(n) && ((s = a[n]), s != null))
            switch (n) {
              case 'value':
                u = s;
                break;
              case 'defaultValue':
                r = s;
                break;
              case 'multiple':
                l = s;
              default:
                Ae(e, t, n, s, a, null);
            }
        ((t = u),
          (a = r),
          (e.multiple = !!l),
          t != null ? Qa(e, !!l, t, !1) : a != null && Qa(e, !!l, a, !0));
        return;
      case 'textarea':
        (de('invalid', e), (u = n = l = null));
        for (r in a)
          if (a.hasOwnProperty(r) && ((s = a[r]), s != null))
            switch (r) {
              case 'value':
                l = s;
                break;
              case 'defaultValue':
                n = s;
                break;
              case 'children':
                u = s;
                break;
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(c(91));
                break;
              default:
                Ae(e, t, r, s, a, null);
            }
        (ks(e, l, n, u), jn(e));
        return;
      case 'option':
        for (p in a)
          if (a.hasOwnProperty(p) && ((l = a[p]), l != null))
            switch (p) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Ae(e, t, p, l, a, null);
            }
        return;
      case 'dialog':
        (de('beforetoggle', e), de('toggle', e), de('cancel', e), de('close', e));
        break;
      case 'iframe':
      case 'object':
        de('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < dn.length; l++) de(dn[l], e);
        break;
      case 'image':
        (de('error', e), de('load', e));
        break;
      case 'details':
        de('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (de('error', e), de('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (w in a)
          if (a.hasOwnProperty(w) && ((l = a[w]), l != null))
            switch (w) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(c(137, t));
              default:
                Ae(e, t, w, l, a, null);
            }
        return;
      default:
        if (ui(t)) {
          for (U in a)
            a.hasOwnProperty(U) && ((l = a[U]), l !== void 0 && Zr(e, t, U, l, a, void 0));
          return;
        }
    }
    for (s in a) a.hasOwnProperty(s) && ((l = a[s]), l != null && Ae(e, t, s, l, a, null));
  }
  function Vp(e, t, a, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var n = null,
          u = null,
          r = null,
          s = null,
          p = null,
          w = null,
          U = null;
        for (D in a) {
          var q = a[D];
          if (a.hasOwnProperty(D) && q != null)
            switch (D) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                p = q;
              default:
                l.hasOwnProperty(D) || Ae(e, t, D, null, l, q);
            }
        }
        for (var C in l) {
          var D = l[C];
          if (((q = a[C]), l.hasOwnProperty(C) && (D != null || q != null)))
            switch (C) {
              case 'type':
                u = D;
                break;
              case 'name':
                n = D;
                break;
              case 'checked':
                w = D;
                break;
              case 'defaultChecked':
                U = D;
                break;
              case 'value':
                r = D;
                break;
              case 'defaultValue':
                s = D;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (D != null) throw Error(c(137, t));
                break;
              default:
                D !== q && Ae(e, t, C, D, l, q);
            }
        }
        li(e, r, s, p, w, U, u, n);
        return;
      case 'select':
        D = r = s = C = null;
        for (u in a)
          if (((p = a[u]), a.hasOwnProperty(u) && p != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                D = p;
              default:
                l.hasOwnProperty(u) || Ae(e, t, u, null, l, p);
            }
        for (n in l)
          if (((u = l[n]), (p = a[n]), l.hasOwnProperty(n) && (u != null || p != null)))
            switch (n) {
              case 'value':
                C = u;
                break;
              case 'defaultValue':
                s = u;
                break;
              case 'multiple':
                r = u;
              default:
                u !== p && Ae(e, t, n, u, l, p);
            }
        ((t = s),
          (a = r),
          (l = D),
          C != null ?
            Qa(e, !!a, C, !1)
          : !!l != !!a && (t != null ? Qa(e, !!a, t, !0) : Qa(e, !!a, a ? [] : '', !1)));
        return;
      case 'textarea':
        D = C = null;
        for (s in a)
          if (((n = a[s]), a.hasOwnProperty(s) && n != null && !l.hasOwnProperty(s)))
            switch (s) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ae(e, t, s, null, l, n);
            }
        for (r in l)
          if (((n = l[r]), (u = a[r]), l.hasOwnProperty(r) && (n != null || u != null)))
            switch (r) {
              case 'value':
                C = n;
                break;
              case 'defaultValue':
                D = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(c(91));
                break;
              default:
                n !== u && Ae(e, t, r, n, l, u);
            }
        Ms(e, C, D);
        return;
      case 'option':
        for (var ie in a)
          if (((C = a[ie]), a.hasOwnProperty(ie) && C != null && !l.hasOwnProperty(ie)))
            switch (ie) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Ae(e, t, ie, null, l, C);
            }
        for (p in l)
          if (((C = l[p]), (D = a[p]), l.hasOwnProperty(p) && C !== D && (C != null || D != null)))
            switch (p) {
              case 'selected':
                e.selected = C && typeof C != 'function' && typeof C != 'symbol';
                break;
              default:
                Ae(e, t, p, C, l, D);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var ee in a)
          ((C = a[ee]),
            a.hasOwnProperty(ee) && C != null && !l.hasOwnProperty(ee) && Ae(e, t, ee, null, l, C));
        for (w in l)
          if (((C = l[w]), (D = a[w]), l.hasOwnProperty(w) && C !== D && (C != null || D != null)))
            switch (w) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (C != null) throw Error(c(137, t));
                break;
              default:
                Ae(e, t, w, C, l, D);
            }
        return;
      default:
        if (ui(t)) {
          for (var _e in a)
            ((C = a[_e]),
              a.hasOwnProperty(_e) &&
                C !== void 0 &&
                !l.hasOwnProperty(_e) &&
                Zr(e, t, _e, void 0, l, C));
          for (U in l)
            ((C = l[U]),
              (D = a[U]),
              !l.hasOwnProperty(U) ||
                C === D ||
                (C === void 0 && D === void 0) ||
                Zr(e, t, U, C, l, D));
          return;
        }
    }
    for (var A in a)
      ((C = a[A]),
        a.hasOwnProperty(A) && C != null && !l.hasOwnProperty(A) && Ae(e, t, A, null, l, C));
    for (q in l)
      ((C = l[q]),
        (D = a[q]),
        !l.hasOwnProperty(q) || C === D || (C == null && D == null) || Ae(e, t, q, C, l, D));
  }
  var Xr = null,
    Vr = null;
  function wu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Bf(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Hf(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Qr(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Fr = null;
  function Qp() {
    var e = window.event;
    return (
      e && e.type === 'popstate' ?
        e === Fr ?
          !1
        : ((Fr = e), !0)
      : ((Fr = null), !1)
    );
  }
  var qf = typeof setTimeout == 'function' ? setTimeout : void 0,
    Fp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Gf = typeof Promise == 'function' ? Promise : void 0,
    Kp =
      typeof queueMicrotask == 'function' ? queueMicrotask
      : typeof Gf < 'u' ?
        function (e) {
          return Gf.resolve(null).then(e).catch($p);
        }
      : qf;
  function $p(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ha(e) {
    return e === 'head';
  }
  function Yf(e, t) {
    var a = t,
      l = 0,
      n = 0;
    do {
      var u = a.nextSibling;
      if ((e.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === '/$')) {
          if (0 < l && 8 > l) {
            a = l;
            var r = e.ownerDocument;
            if ((a & 1 && pn(r.documentElement), a & 2 && pn(r.body), a & 4))
              for (a = r.head, pn(a), r = a.firstChild; r; ) {
                var s = r.nextSibling,
                  p = r.nodeName;
                (r[Ol] ||
                  p === 'SCRIPT' ||
                  p === 'STYLE' ||
                  (p === 'LINK' && r.rel.toLowerCase() === 'stylesheet') ||
                  a.removeChild(r),
                  (r = s));
              }
          }
          if (n === 0) {
            (e.removeChild(u), En(t));
            return;
          }
          n--;
        } else a === '$' || a === '$?' || a === '$!' ? n++ : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = u;
    } while (a);
    En(t);
  }
  function Kr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Kr(a), Pu(a));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (a.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(a);
    }
  }
  function Jp(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Ol])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute('href') !== (n.href == null || n.href === '' ? null : n.href) ||
                e.getAttribute('crossorigin') !== (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = Ct(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Wp(e, t, a) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !a) ||
        ((e = Ct(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function $r(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function Ip(e, t) {
    var a = e.ownerDocument;
    if (e.data !== '$?' || a.readyState === 'complete') t();
    else {
      var l = function () {
        (t(), a.removeEventListener('DOMContentLoaded', l));
      };
      (a.addEventListener('DOMContentLoaded', l), (e._reactRetry = l));
    }
  }
  function Ct(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var Jr = null;
  function Zf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === '$' || a === '$!' || a === '$?') {
          if (t === 0) return e;
          t--;
        } else a === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Xf(e, t, a) {
    switch (((t = wu(a)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function pn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Pu(e);
  }
  var Tt = new Map(),
    Vf = new Set();
  function Ou(e) {
    return (
      typeof e.getRootNode == 'function' ? e.getRootNode()
      : e.nodeType === 9 ? e
      : e.ownerDocument
    );
  }
  var Wt = K.d;
  K.d = { f: Pp, r: ey, D: ty, C: ay, L: ly, m: ny, X: iy, S: uy, M: ry };
  function Pp() {
    var e = Wt.f(),
      t = vu();
    return e || t;
  }
  function ey(e) {
    var t = Ya(e);
    t !== null && t.tag === 5 && t.type === 'form' ? co(t) : Wt.r(e);
  }
  var El = typeof document > 'u' ? null : document;
  function Qf(e, t, a) {
    var l = El;
    if (l && typeof t == 'string' && t) {
      var n = mt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof a == 'string' && (n += '[crossorigin="' + a + '"]'),
        Vf.has(n) ||
          (Vf.add(n),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(n) === null &&
            ((t = l.createElement('link')), $e(t, 'link', e), Ze(t), l.head.appendChild(t))));
    }
  }
  function ty(e) {
    (Wt.D(e), Qf('dns-prefetch', e, null));
  }
  function ay(e, t) {
    (Wt.C(e, t), Qf('preconnect', e, t));
  }
  function ly(e, t, a) {
    Wt.L(e, t, a);
    var l = El;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + mt(t) + '"]';
      t === 'image' && a && a.imageSrcSet ?
        ((n += '[imagesrcset="' + mt(a.imageSrcSet) + '"]'),
        typeof a.imageSizes == 'string' && (n += '[imagesizes="' + mt(a.imageSizes) + '"]'))
      : (n += '[href="' + mt(e) + '"]');
      var u = n;
      switch (t) {
        case 'style':
          u = Al(e);
          break;
        case 'script':
          u = _l(e);
      }
      Tt.has(u) ||
        ((e = h(
          { rel: 'preload', href: t === 'image' && a && a.imageSrcSet ? void 0 : e, as: t },
          a
        )),
        Tt.set(u, e),
        l.querySelector(n) !== null ||
          (t === 'style' && l.querySelector(yn(u))) ||
          (t === 'script' && l.querySelector(hn(u))) ||
          ((t = l.createElement('link')), $e(t, 'link', e), Ze(t), l.head.appendChild(t)));
    }
  }
  function ny(e, t) {
    Wt.m(e, t);
    var a = El;
    if (a && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        n = 'link[rel="modulepreload"][as="' + mt(l) + '"][href="' + mt(e) + '"]',
        u = n;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = _l(e);
      }
      if (
        !Tt.has(u) &&
        ((e = h({ rel: 'modulepreload', href: e }, t)), Tt.set(u, e), a.querySelector(n) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (a.querySelector(hn(u))) return;
        }
        ((l = a.createElement('link')), $e(l, 'link', e), Ze(l), a.head.appendChild(l));
      }
    }
  }
  function uy(e, t, a) {
    Wt.S(e, t, a);
    var l = El;
    if (l && e) {
      var n = Za(l).hoistableStyles,
        u = Al(e);
      t = t || 'default';
      var r = n.get(u);
      if (!r) {
        var s = { loading: 0, preload: null };
        if ((r = l.querySelector(yn(u)))) s.loading = 5;
        else {
          ((e = h({ rel: 'stylesheet', href: e, 'data-precedence': t }, a)),
            (a = Tt.get(u)) && Wr(e, a));
          var p = (r = l.createElement('link'));
          (Ze(p),
            $e(p, 'link', e),
            (p._p = new Promise(function (w, U) {
              ((p.onload = w), (p.onerror = U));
            })),
            p.addEventListener('load', function () {
              s.loading |= 1;
            }),
            p.addEventListener('error', function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Cu(r, t, l));
        }
        ((r = { type: 'stylesheet', instance: r, count: 1, state: s }), n.set(u, r));
      }
    }
  }
  function iy(e, t) {
    Wt.X(e, t);
    var a = El;
    if (a && e) {
      var l = Za(a).hoistableScripts,
        n = _l(e),
        u = l.get(n);
      u ||
        ((u = a.querySelector(hn(n))),
        u ||
          ((e = h({ src: e, async: !0 }, t)),
          (t = Tt.get(n)) && Ir(e, t),
          (u = a.createElement('script')),
          Ze(u),
          $e(u, 'link', e),
          a.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(n, u));
    }
  }
  function ry(e, t) {
    Wt.M(e, t);
    var a = El;
    if (a && e) {
      var l = Za(a).hoistableScripts,
        n = _l(e),
        u = l.get(n);
      u ||
        ((u = a.querySelector(hn(n))),
        u ||
          ((e = h({ src: e, async: !0, type: 'module' }, t)),
          (t = Tt.get(n)) && Ir(e, t),
          (u = a.createElement('script')),
          Ze(u),
          $e(u, 'link', e),
          a.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(n, u));
    }
  }
  function Ff(e, t, a, l) {
    var n = (n = le.current) ? Ou(n) : null;
    if (!n) throw Error(c(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof a.precedence == 'string' && typeof a.href == 'string' ?
            ((t = Al(a.href)),
            (a = Za(n).hoistableStyles),
            (l = a.get(t)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), a.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          a.rel === 'stylesheet' &&
          typeof a.href == 'string' &&
          typeof a.precedence == 'string'
        ) {
          e = Al(a.href);
          var u = Za(n).hoistableStyles,
            r = u.get(e);
          if (
            (r ||
              ((n = n.ownerDocument || n),
              (r = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, r),
              (u = n.querySelector(yn(e))) && !u._p && ((r.instance = u), (r.state.loading = 5)),
              Tt.has(e) ||
                ((a = {
                  rel: 'preload',
                  as: 'style',
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Tt.set(e, a),
                u || sy(n, e, a, r.state))),
            t && l === null)
          )
            throw Error(c(528, ''));
          return r;
        }
        if (t && l !== null) throw Error(c(529, ''));
        return null;
      case 'script':
        return (
          (t = a.async),
          (a = a.src),
          typeof a == 'string' && t && typeof t != 'function' && typeof t != 'symbol' ?
            ((t = _l(a)),
            (a = Za(n).hoistableScripts),
            (l = a.get(t)),
            l || ((l = { type: 'script', instance: null, count: 0, state: null }), a.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function Al(e) {
    return 'href="' + mt(e) + '"';
  }
  function yn(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Kf(e) {
    return h({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function sy(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']') ?
      (l.loading = 1)
    : ((t = e.createElement('link')),
      (l.preload = t),
      t.addEventListener('load', function () {
        return (l.loading |= 1);
      }),
      t.addEventListener('error', function () {
        return (l.loading |= 2);
      }),
      $e(t, 'link', a),
      Ze(t),
      e.head.appendChild(t));
  }
  function _l(e) {
    return '[src="' + mt(e) + '"]';
  }
  function hn(e) {
    return 'script[async]' + e;
  }
  function $f(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + mt(a.href) + '"]');
          if (l) return ((t.instance = l), Ze(l), l);
          var n = h({}, a, {
            'data-href': a.href,
            'data-precedence': a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Ze(l),
            $e(l, 'style', n),
            Cu(l, a.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          n = Al(a.href);
          var u = e.querySelector(yn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Ze(u), u);
          ((l = Kf(a)),
            (n = Tt.get(n)) && Wr(l, n),
            (u = (e.ownerDocument || e).createElement('link')),
            Ze(u));
          var r = u;
          return (
            (r._p = new Promise(function (s, p) {
              ((r.onload = s), (r.onerror = p));
            })),
            $e(u, 'link', l),
            (t.state.loading |= 4),
            Cu(u, a.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = _l(a.src)),
            (n = e.querySelector(hn(u))) ?
              ((t.instance = n), Ze(n), n)
            : ((l = a),
              (n = Tt.get(u)) && ((l = h({}, a)), Ir(l, n)),
              (e = e.ownerDocument || e),
              (n = e.createElement('script')),
              Ze(n),
              $e(n, 'link', l),
              e.head.appendChild(n),
              (t.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Cu(l, a.precedence, e));
    return t.instance;
  }
  function Cu(e, t, a) {
    for (
      var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        n = l.length ? l[l.length - 1] : null,
        u = n,
        r = 0;
      r < l.length;
      r++
    ) {
      var s = l[r];
      if (s.dataset.precedence === t) u = s;
      else if (u !== n) break;
    }
    u ?
      u.parentNode.insertBefore(e, u.nextSibling)
    : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function Wr(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Ir(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var zu = null;
  function Jf(e, t, a) {
    if (zu === null) {
      var l = new Map(),
        n = (zu = new Map());
      n.set(a, l);
    } else ((n = zu), (l = n.get(a)), l || ((l = new Map()), n.set(a, l)));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var u = a[n];
      if (
        !(u[Ol] || u[Je] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var r = u.getAttribute(t) || '';
        r = e + r;
        var s = l.get(r);
        s ? s.push(u) : l.set(r, [u]);
      }
    }
    return l;
  }
  function Wf(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(a, t === 'title' ? e.querySelector('head > title') : null));
  }
  function cy(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return ((e = t.disabled), typeof t.precedence == 'string' && e == null);
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function If(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var bn = null;
  function oy() {}
  function fy(e, t, a) {
    if (bn === null) throw Error(c(475));
    var l = bn;
    if (
      t.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = Al(a.href),
          u = e.querySelector(yn(n));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = Du.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = u),
            Ze(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (a = Kf(a)),
          (n = Tt.get(n)) && Wr(a, n),
          (u = u.createElement('link')),
          Ze(u));
        var r = u;
        ((r._p = new Promise(function (s, p) {
          ((r.onload = s), (r.onerror = p));
        })),
          $e(u, 'link', a),
          (t.instance = u));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = Du.bind(l)),
          e.addEventListener('load', t),
          e.addEventListener('error', t)));
    }
  }
  function dy() {
    if (bn === null) throw Error(c(475));
    var e = bn;
    return (
      e.stylesheets && e.count === 0 && Pr(e, e.stylesheets),
      0 < e.count ?
        function (t) {
          var a = setTimeout(function () {
            if ((e.stylesheets && Pr(e, e.stylesheets), e.unsuspend)) {
              var l = e.unsuspend;
              ((e.unsuspend = null), l());
            }
          }, 6e4);
          return (
            (e.unsuspend = t),
            function () {
              ((e.unsuspend = null), clearTimeout(a));
            }
          );
        }
      : null
    );
  }
  function Du() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Pr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var ju = null;
  function Pr(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (ju = new Map()), t.forEach(gy, e), (ju = null), Du.call(e)));
  }
  function gy(e, t) {
    if (!(t.state.loading & 4)) {
      var a = ju.get(e);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), ju.set(e, a));
        for (
          var n = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < n.length;
          u++
        ) {
          var r = n[u];
          (r.nodeName === 'LINK' || r.getAttribute('media') !== 'not all') &&
            (a.set(r.dataset.precedence, r), (l = r));
        }
        l && a.set(null, l);
      }
      ((n = t.instance),
        (r = n.getAttribute('data-precedence')),
        (u = a.get(r) || l),
        u === l && a.set(null, n),
        a.set(r, n),
        this.count++,
        (l = Du.bind(this)),
        n.addEventListener('load', l),
        n.addEventListener('error', l),
        u ?
          u.parentNode.insertBefore(n, u.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var mn = {
    $$typeof: v,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0,
  };
  function py(e, t, a, l, n, u, r, s) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = $u(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $u(0)),
      (this.hiddenUpdates = $u(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = r),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function Pf(e, t, a, l, n, u, r, s, p, w, U, q) {
    return (
      (e = new py(e, t, a, r, s, p, w, q)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = st(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Mi()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: l, isDehydrated: a, cache: t }),
      Bi(u),
      e
    );
  }
  function ed(e) {
    return e ? ((e = tl), e) : tl;
  }
  function td(e, t, a, l, n, u) {
    ((n = ed(n)),
      l.context === null ? (l.context = n) : (l.pendingContext = n),
      (l = la(t)),
      (l.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (a = na(e, l, t)),
      a !== null && (gt(a, e, t), Fl(a, e, t)));
  }
  function ad(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function es(e, t) {
    (ad(e, t), (e = e.alternate) && ad(e, t));
  }
  function ld(e) {
    if (e.tag === 13) {
      var t = el(e, 67108864);
      (t !== null && gt(t, e, 67108864), es(e, 67108864));
    }
  }
  var Ru = !0;
  function yy(e, t, a, l) {
    var n = M.T;
    M.T = null;
    var u = K.p;
    try {
      ((K.p = 2), ts(e, t, a, l));
    } finally {
      ((K.p = u), (M.T = n));
    }
  }
  function hy(e, t, a, l) {
    var n = M.T;
    M.T = null;
    var u = K.p;
    try {
      ((K.p = 8), ts(e, t, a, l));
    } finally {
      ((K.p = u), (M.T = n));
    }
  }
  function ts(e, t, a, l) {
    if (Ru) {
      var n = as(l);
      if (n === null) (Yr(e, t, l, Mu, a), ud(e, l));
      else if (my(n, e, t, a, l)) l.stopPropagation();
      else if ((ud(e, l), t & 4 && -1 < by.indexOf(e))) {
        for (; n !== null; ) {
          var u = Ya(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var r = Ea(u.pendingLanes);
                  if (r !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; r; ) {
                      var p = 1 << (31 - it(r));
                      ((s.entanglements[1] |= p), (r &= ~p));
                    }
                    (kt(u), (xe & 6) === 0 && ((bu = zt() + 500), fn(0)));
                  }
                }
                break;
              case 13:
                ((s = el(u, 2)), s !== null && gt(s, u, 2), vu(), es(u, 2));
            }
          if (((u = as(l)), u === null && Yr(e, t, l, Mu, a), u === n)) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else Yr(e, t, l, null, a);
    }
  }
  function as(e) {
    return ((e = ri(e)), ls(e));
  }
  var Mu = null;
  function ls(e) {
    if (((Mu = null), (e = Ga(e)), e !== null)) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = j(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Mu = e), null);
  }
  function nd(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (ag()) {
          case hs:
            return 2;
          case bs:
            return 8;
          case Nn:
          case lg:
            return 32;
          case ms:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ns = !1,
    ba = null,
    ma = null,
    va = null,
    vn = new Map(),
    xn = new Map(),
    xa = [],
    by =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function ud(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        ba = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ma = null;
        break;
      case 'mouseover':
      case 'mouseout':
        va = null;
        break;
      case 'pointerover':
      case 'pointerout':
        vn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        xn.delete(t.pointerId);
    }
  }
  function Sn(e, t, a, l, n, u) {
    return e === null || e.nativeEvent !== u ?
        ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = Ya(t)), t !== null && ld(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function my(e, t, a, l, n) {
    switch (t) {
      case 'focusin':
        return ((ba = Sn(ba, e, t, a, l, n)), !0);
      case 'dragenter':
        return ((ma = Sn(ma, e, t, a, l, n)), !0);
      case 'mouseover':
        return ((va = Sn(va, e, t, a, l, n)), !0);
      case 'pointerover':
        var u = n.pointerId;
        return (vn.set(u, Sn(vn.get(u) || null, e, t, a, l, n)), !0);
      case 'gotpointercapture':
        return ((u = n.pointerId), xn.set(u, Sn(xn.get(u) || null, e, t, a, l, n)), !0);
    }
    return !1;
  }
  function id(e) {
    var t = Ga(e.target);
    if (t !== null) {
      var a = m(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = j(a)), t !== null)) {
            ((e.blockedOn = t),
              fg(e.priority, function () {
                if (a.tag === 13) {
                  var l = dt();
                  l = Ju(l);
                  var n = el(a, l);
                  (n !== null && gt(n, a, l), es(a, l));
                }
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ku(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = as(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((ii = l), a.target.dispatchEvent(l), (ii = null));
      } else return ((t = Ya(a)), t !== null && ld(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function rd(e, t, a) {
    ku(e) && a.delete(t);
  }
  function vy() {
    ((ns = !1),
      ba !== null && ku(ba) && (ba = null),
      ma !== null && ku(ma) && (ma = null),
      va !== null && ku(va) && (va = null),
      vn.forEach(rd),
      xn.forEach(rd));
  }
  function Lu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ns || ((ns = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, vy)));
  }
  var Uu = null;
  function sd(e) {
    Uu !== e &&
      ((Uu = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Uu === e && (Uu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            n = e[t + 2];
          if (typeof l != 'function') {
            if (ls(l || a) === null) continue;
            break;
          }
          var u = Ya(a);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            lr(u, { pending: !0, data: n, method: a.method, action: l }, l, n));
        }
      }));
  }
  function En(e) {
    function t(p) {
      return Lu(p, e);
    }
    (ba !== null && Lu(ba, e),
      ma !== null && Lu(ma, e),
      va !== null && Lu(va, e),
      vn.forEach(t),
      xn.forEach(t));
    for (var a = 0; a < xa.length; a++) {
      var l = xa[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < xa.length && ((a = xa[0]), a.blockedOn === null); )
      (id(a), a.blockedOn === null && xa.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var n = a[l],
          u = a[l + 1],
          r = n[et] || null;
        if (typeof u == 'function') r || sd(a);
        else if (r) {
          var s = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (r = u[et] || null))) s = r.formAction;
            else if (ls(n) !== null) continue;
          } else s = r.action;
          (typeof s == 'function' ? (a[l + 1] = s) : (a.splice(l, 3), (l -= 3)), sd(a));
        }
      }
  }
  function us(e) {
    this._internalRoot = e;
  }
  ((Bu.prototype.render = us.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var a = t.current,
        l = dt();
      td(a, l, e, t, null, null);
    }),
    (Bu.prototype.unmount = us.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (td(e.current, 2, null, e, null, null), vu(), (t[qa] = null));
        }
      }));
  function Bu(e) {
    this._internalRoot = e;
  }
  Bu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = As();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < xa.length && t !== 0 && t < xa[a].priority; a++);
      (xa.splice(a, 0, e), a === 0 && id(e));
    }
  };
  var cd = f.version;
  if (cd !== '19.1.0') throw Error(c(527, cd, '19.1.0'));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ?
          Error(c(188))
        : ((e = Object.keys(e).join(',')), Error(c(268, e)));
    return ((e = _(t)), (e = e !== null ? g(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var xy = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: M,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Hu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hu.isDisabled && Hu.supportsFiber)
      try {
        ((Tl = Hu.inject(xy)), (ut = Hu));
      } catch {}
  }
  return (
    (_n.createRoot = function (e, t) {
      if (!x(e)) throw Error(c(299));
      var a = !1,
        l = '',
        n = _o,
        u = To,
        r = No,
        s = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (r = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (s = t.unstable_transitionCallbacks)),
        (t = Pf(e, 1, !1, null, null, a, l, n, u, r, s, null)),
        (e[qa] = t.current),
        Gr(e),
        new us(t)
      );
    }),
    (_n.hydrateRoot = function (e, t, a) {
      if (!x(e)) throw Error(c(299));
      var l = !1,
        n = '',
        u = _o,
        r = To,
        s = No,
        p = null,
        w = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (n = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (r = a.onCaughtError),
          a.onRecoverableError !== void 0 && (s = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && (p = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (w = a.formState)),
        (t = Pf(e, 1, !0, t, a ?? null, l, n, u, r, s, p, w)),
        (t.context = ed(null)),
        (a = t.current),
        (l = dt()),
        (l = Ju(l)),
        (n = la(l)),
        (n.callback = null),
        na(a, n, l),
        (a = l),
        (t.current.lanes = a),
        wl(t, a),
        kt(t),
        (e[qa] = t.current),
        Gr(e),
        new Bu(t)
      );
    }),
    (_n.version = '19.1.0'),
    _n
  );
}
var vd;
function zy() {
  if (vd) return ss.exports;
  vd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return (i(), (ss.exports = Cy()), ss.exports);
}
var Dy = zy();
const jy = Dd(Dy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ry = (i) => i.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  My = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (f, y, c) => (c ? c.toUpperCase() : y.toLowerCase())),
  xd = (i) => {
    const f = My(i);
    return f.charAt(0).toUpperCase() + f.slice(1);
  },
  jd = (...i) =>
    i
      .filter((f, y, c) => !!f && f.trim() !== '' && c.indexOf(f) === y)
      .join(' ')
      .trim(),
  ky = (i) => {
    for (const f in i) if (f.startsWith('aria-') || f === 'role' || f === 'title') return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ly = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uy = te.forwardRef(
  (
    {
      color: i = 'currentColor',
      size: f = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: c,
      className: x = '',
      children: m,
      iconNode: j,
      ...L
    },
    _
  ) =>
    te.createElement(
      'svg',
      {
        ref: _,
        ...Ly,
        width: f,
        height: f,
        stroke: i,
        strokeWidth: c ? (Number(y) * 24) / Number(f) : y,
        className: jd('lucide', x),
        ...(!m && !ky(L) && { 'aria-hidden': 'true' }),
        ...L,
      },
      [...j.map(([g, h]) => te.createElement(g, h)), ...(Array.isArray(m) ? m : [m])]
    )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ke = (i, f) => {
  const y = te.forwardRef(({ className: c, ...x }, m) =>
    te.createElement(Uy, {
      ref: m,
      iconNode: f,
      className: jd(`lucide-${Ry(xd(i))}`, `lucide-${i}`, c),
      ...x,
    })
  );
  return ((y.displayName = xd(i)), y);
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const By = [
    ['path', { d: 'M15 12H3', key: '6jk70r' }],
    ['path', { d: 'M17 18H3', key: '1amg6g' }],
    ['path', { d: 'M21 6H3', key: '1jwq7v' }],
  ],
  Hy = ke('align-left', By);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qy = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  Gu = ke('check', qy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gy = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  Rd = ke('chevron-down', Gy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yy = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
  Md = ke('chevron-right', Yy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zy = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M12 3v18', key: '108xh3' }],
  ],
  Xy = ke('columns-2', Zy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vy = [
    ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
    ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
  ],
  kd = ke('copy', Vy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qy = [
    ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
    ['path', { d: 'M9 10h6', key: '9gxzsh' }],
    ['path', { d: 'M12 13V7', key: 'h0r20n' }],
    ['path', { d: 'M9 17h6', key: 'r8uit2' }],
  ],
  Ld = ke('file-diff', Qy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fy = [
    ['path', { d: 'M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5', key: '1couwa' }],
    ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
    [
      'path',
      {
        d: 'M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z',
        key: '1y4qbx',
      },
    ],
  ],
  Ud = ke('file-pen', Fy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ky = [
    ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
    ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
    ['path', { d: 'M9 15h6', key: 'cctwl0' }],
    ['path', { d: 'M12 18v-6', key: '17g6i2' }],
  ],
  Bd = ke('file-plus', Ky);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $y = [
    ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
    ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
    ['path', { d: 'm14.5 12.5-5 5', key: 'b62r18' }],
    ['path', { d: 'm9.5 12.5 5 5', key: '1rk7el' }],
  ],
  Hd = ke('file-x', $y);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jy = [
    [
      'path',
      {
        d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
        key: 'usdka0',
      },
    ],
  ],
  Wy = ke('folder-open', Jy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iy = [
    [
      'path',
      {
        d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
        key: '1kt360',
      },
    ],
  ],
  Py = ke('folder', Iy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = [
    [
      'path',
      {
        d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
        key: 'tonef',
      },
    ],
    ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
  ],
  th = ke('github', eh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ah = [
    ['path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', key: '1lielz' }],
  ],
  lh = ke('message-square', ah);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nh = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
    ['path', { d: 'm16 15-3-3 3-3', key: '14y99z' }],
  ],
  uh = ke('panel-left-close', nh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ih = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
  ],
  rh = ke('panel-left', ih);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sh = [
    [
      'path',
      {
        d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
        key: '1a8usu',
      },
    ],
  ],
  ch = ke('pen', sh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = [
    [
      'path',
      {
        d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
        key: '1c8476',
      },
    ],
    ['path', { d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', key: '1ydtos' }],
    ['path', { d: 'M7 3v4a1 1 0 0 0 1 1h7', key: 't51u73' }],
  ],
  fh = ke('save', oh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dh = [
    ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ],
  gh = ke('search', dh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ph = [
    [
      'path',
      {
        d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
        key: '1qme2f',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
  ],
  qd = ke('settings', ph);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yh = [['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }]],
  hh = ke('square', yh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bh = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  Gd = ke('x', bh);
function Yd({ checked: i, onChange: f, label: y, className: c = '', title: x }) {
  const m = (L) => {
      (L.stopPropagation(), f(!i));
    },
    j = (L) => {
      (L.key === 'Enter' || L.key === ' ') && (L.preventDefault(), L.stopPropagation(), f(!i));
    };
  return o.jsxs('div', {
    className: `flex items-center gap-2 text-xs text-github-text-primary cursor-pointer ${c}`,
    title: x,
    onClick: m,
    onKeyDown: j,
    role: 'checkbox',
    'aria-checked': i,
    tabIndex: 0,
    children: [
      o.jsx('div', {
        className: `w-4 h-4 rounded border flex items-center justify-center transition-all duration-200 cursor-pointer ${i ? 'bg-github-accent border-github-accent' : 'bg-github-bg-tertiary border-github-text-muted hover:border-github-accent/50'}`,
        children: i && o.jsx(Gu, { size: 10, className: 'text-white' }),
      }),
      y && o.jsx('span', { className: 'select-none', children: y }),
    ],
  });
}
function Zd(i) {
  return (i && i.split('.').pop()?.toLowerCase()) || null;
}
function mh(i) {
  return (i && i.split('/').pop()) || '';
}
const vh = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'svg',
  'webp',
  'ico',
  'tiff',
  'tif',
  'avif',
  'heic',
  'heif',
];
function xh(i) {
  if (!i) return !1;
  const f = Zd(i);
  return f ? vh.includes(f) : !1;
}
function Xd({ onSubmit: i, onCancel: f }) {
  const [y, c] = te.useState(''),
    [x, m] = te.useState(!1),
    j = async (_) => {
      if ((_.preventDefault(), !!y.trim())) {
        m(!0);
        try {
          (await i(y.trim()), c(''));
        } catch (g) {
          console.error('Failed to submit comment:', g);
        } finally {
          m(!1);
        }
      }
    },
    L = (_) => {
      _.key === 'Enter' && (_.metaKey || _.ctrlKey) ? j(_) : _.key === 'Escape' && f();
    };
  return o.jsxs('form', {
    className: 'm-2 mx-3 p-3 bg-github-bg-tertiary border border-github-border rounded-md',
    onSubmit: j,
    children: [
      o.jsxs('div', {
        className: 'flex items-center justify-between mb-2',
        children: [
          o.jsx('span', {
            className: 'text-sm font-medium text-github-text-primary',
            children: 'Add a comment',
          }),
          o.jsx('span', {
            className: 'text-xs text-github-text-muted',
            children: 'Cmd+Enter to submit • Escape to cancel',
          }),
        ],
      }),
      o.jsx('textarea', {
        className:
          'w-full min-h-[60px] mb-2 resize-y bg-github-bg-secondary border border-github-border rounded px-3 py-2 text-github-text-primary text-sm leading-6 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:min-h-[80px] disabled:opacity-50',
        value: y,
        onChange: (_) => c(_.target.value),
        onKeyDown: L,
        placeholder: 'Leave a comment...',
        rows: 3,
        autoFocus: !0,
        disabled: x,
      }),
      o.jsxs('div', {
        className: 'flex gap-2 justify-end',
        children: [
          o.jsx('button', {
            type: 'button',
            onClick: f,
            className:
              'text-xs px-3 py-1.5 bg-github-bg-tertiary text-github-text-primary border border-github-border rounded hover:opacity-80 transition-all disabled:opacity-50',
            disabled: x,
            children: 'Cancel',
          }),
          o.jsx('button', {
            type: 'submit',
            className:
              'text-xs px-3 py-1.5 bg-blue-600 text-white rounded hover:opacity-80 transition-all disabled:opacity-50',
            disabled: !y.trim() || x,
            children: x ? 'Adding...' : 'Add Comment',
          }),
        ],
      }),
    ],
  });
}
function Vd({ comment: i, onGeneratePrompt: f, onRemoveComment: y, onUpdateComment: c }) {
  const [x, m] = te.useState(!1),
    [j, L] = te.useState(!1),
    [_, g] = te.useState(i.body),
    h = async () => {
      try {
        const S = f(i);
        (await navigator.clipboard.writeText(S), m(!0), setTimeout(() => m(!1), 2e3));
      } catch (S) {
        console.error('Failed to copy prompt:', S);
      }
    },
    O = () => {
      (L(!0), g(i.body));
    },
    G = () => {
      (L(!1), g(i.body));
    },
    Q = () => {
      (_.trim() !== i.body && c(i.id, _.trim()), L(!1));
    };
  return o.jsxs('div', {
    className:
      'm-2 mx-4 p-3 bg-github-bg-tertiary border border-yellow-600/50 rounded-md border-l-4 border-l-yellow-400 shadow-sm',
    children: [
      o.jsxs('div', {
        className: 'flex items-center justify-between mb-2 gap-3',
        children: [
          o.jsx('div', {
            className: 'flex items-center gap-2 text-xs text-github-text-secondary flex-1 min-w-0',
            children: o.jsxs('span', {
              className:
                'font-mono px-1 py-0.5 rounded overflow-hidden text-ellipsis whitespace-nowrap',
              style: {
                backgroundColor: 'var(--color-yellow-path-bg)',
                color: 'var(--color-yellow-path-text)',
              },
              children: [i.file, ':', Array.isArray(i.line) ? `${i.line[0]}-${i.line[1]}` : i.line],
            }),
          }),
          o.jsxs('div', {
            className: 'flex items-center gap-2',
            children: [
              !j &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsx('button', {
                      onClick: h,
                      className: 'text-xs px-2 py-1 rounded transition-all whitespace-nowrap',
                      style: {
                        backgroundColor: 'var(--color-yellow-btn-bg)',
                        color: 'var(--color-yellow-btn-text)',
                        border: '1px solid var(--color-yellow-btn-border)',
                      },
                      onMouseEnter: (S) => {
                        ((S.currentTarget.style.backgroundColor =
                          'var(--color-yellow-btn-hover-bg)'),
                          (S.currentTarget.style.borderColor =
                            'var(--color-yellow-btn-hover-border)'));
                      },
                      onMouseLeave: (S) => {
                        ((S.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-bg)'),
                          (S.currentTarget.style.borderColor = 'var(--color-yellow-btn-border)'));
                      },
                      title: 'Copy prompt for AI coding agent',
                      children: x ? 'Copied!' : 'Copy Prompt',
                    }),
                    o.jsx('button', {
                      onClick: O,
                      className:
                        'text-xs p-1.5 bg-github-bg-tertiary text-github-text-secondary border border-github-border rounded hover:text-github-text-primary hover:bg-github-bg-primary transition-all',
                      title: 'Edit',
                      children: o.jsx(ch, { size: 12 }),
                    }),
                    o.jsx('button', {
                      onClick: () => y(i.id),
                      className:
                        'text-xs p-1.5 bg-github-bg-tertiary text-green-600 border border-github-border rounded hover:bg-green-500/10 hover:border-green-600 transition-all',
                      title: 'Resolve',
                      children: o.jsx(Gu, { size: 12 }),
                    }),
                  ],
                }),
              j &&
                o.jsxs(o.Fragment, {
                  children: [
                    o.jsx('button', {
                      onClick: Q,
                      className:
                        'text-xs p-1.5 bg-github-accent text-white border border-github-accent rounded hover:opacity-80 transition-all',
                      title: 'Save changes',
                      children: o.jsx(fh, { size: 12 }),
                    }),
                    o.jsx('button', {
                      onClick: G,
                      className:
                        'text-xs p-1.5 bg-github-bg-tertiary text-github-text-secondary border border-github-border rounded hover:text-github-text-primary hover:bg-github-bg-primary transition-all',
                      title: 'Cancel editing',
                      children: o.jsx(Gd, { size: 12 }),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      j ?
        o.jsx('textarea', {
          value: _,
          onChange: (S) => g(S.target.value),
          className:
            'w-full text-github-text-primary text-sm leading-6 bg-github-bg-secondary border border-github-border rounded px-2 py-1 resize-none focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30',
          rows: Math.max(
            2,
            _.split(`
`).length
          ),
          placeholder: 'Edit your comment...',
          autoFocus: !0,
        })
      : o.jsx('div', {
          className: 'text-github-text-primary text-sm leading-6 whitespace-pre-wrap',
          children: i.body,
        }),
    ],
  });
}
function Qd(i) {
  var f,
    y,
    c = '';
  if (typeof i == 'string' || typeof i == 'number') c += i;
  else if (typeof i == 'object')
    if (Array.isArray(i)) {
      var x = i.length;
      for (f = 0; f < x; f++) i[f] && (y = Qd(i[f])) && (c && (c += ' '), (c += y));
    } else for (y in i) i[y] && (c && (c += ' '), (c += y));
  return c;
}
function Fd() {
  for (var i, f, y = 0, c = '', x = arguments.length; y < x; y++)
    (i = arguments[y]) && (f = Qd(i)) && (c && (c += ' '), (c += f));
  return c;
}
var Sh = Object.create,
  Zu = Object.defineProperty,
  Eh = Object.defineProperties,
  Ah = Object.getOwnPropertyDescriptor,
  _h = Object.getOwnPropertyDescriptors,
  Kd = Object.getOwnPropertyNames,
  Yu = Object.getOwnPropertySymbols,
  Th = Object.getPrototypeOf,
  ys = Object.prototype.hasOwnProperty,
  $d = Object.prototype.propertyIsEnumerable,
  Sd = (i, f, y) =>
    f in i ? Zu(i, f, { enumerable: !0, configurable: !0, writable: !0, value: y }) : (i[f] = y),
  Lt = (i, f) => {
    for (var y in f || (f = {})) ys.call(f, y) && Sd(i, y, f[y]);
    if (Yu) for (var y of Yu(f)) $d.call(f, y) && Sd(i, y, f[y]);
    return i;
  },
  Xu = (i, f) => Eh(i, _h(f)),
  Jd = (i, f) => {
    var y = {};
    for (var c in i) ys.call(i, c) && f.indexOf(c) < 0 && (y[c] = i[c]);
    if (i != null && Yu) for (var c of Yu(i)) f.indexOf(c) < 0 && $d.call(i, c) && (y[c] = i[c]);
    return y;
  },
  Nh = (i, f) =>
    function () {
      return (f || (0, i[Kd(i)[0]])((f = { exports: {} }).exports, f), f.exports);
    },
  wh = (i, f) => {
    for (var y in f) Zu(i, y, { get: f[y], enumerable: !0 });
  },
  Oh = (i, f, y, c) => {
    if ((f && typeof f == 'object') || typeof f == 'function')
      for (let x of Kd(f))
        !ys.call(i, x) &&
          x !== y &&
          Zu(i, x, { get: () => f[x], enumerable: !(c = Ah(f, x)) || c.enumerable });
    return i;
  },
  Ch = (i, f, y) => (
    (y = i != null ? Sh(Th(i)) : {}),
    Oh(!i || !i.__esModule ? Zu(y, 'default', { value: i, enumerable: !0 }) : y, i)
  ),
  zh = Nh({
    '../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js'(
      i,
      f
    ) {
      var y = (function () {
        var c = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          x = 0,
          m = {},
          j = {
            util: {
              encode: function S(N) {
                return (
                  N instanceof L ? new L(N.type, S(N.content), N.alias)
                  : Array.isArray(N) ? N.map(S)
                  : N.replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ')
                );
              },
              type: function (S) {
                return Object.prototype.toString.call(S).slice(8, -1);
              },
              objId: function (S) {
                return (S.__id || Object.defineProperty(S, '__id', { value: ++x }), S.__id);
              },
              clone: function S(N, R) {
                R = R || {};
                var E, z;
                switch (j.util.type(N)) {
                  case 'Object':
                    if (((z = j.util.objId(N)), R[z])) return R[z];
                    ((E = {}), (R[z] = E));
                    for (var v in N) N.hasOwnProperty(v) && (E[v] = S(N[v], R));
                    return E;
                  case 'Array':
                    return (
                      (z = j.util.objId(N)),
                      R[z] ?
                        R[z]
                      : ((E = []),
                        (R[z] = E),
                        N.forEach(function (X, F) {
                          E[F] = S(X, R);
                        }),
                        E)
                    );
                  default:
                    return N;
                }
              },
              getLanguage: function (S) {
                for (; S; ) {
                  var N = c.exec(S.className);
                  if (N) return N[1].toLowerCase();
                  S = S.parentElement;
                }
                return 'none';
              },
              setLanguage: function (S, N) {
                ((S.className = S.className.replace(RegExp(c, 'gi'), '')),
                  S.classList.add('language-' + N));
              },
              isActive: function (S, N, R) {
                for (var E = 'no-' + N; S; ) {
                  var z = S.classList;
                  if (z.contains(N)) return !0;
                  if (z.contains(E)) return !1;
                  S = S.parentElement;
                }
                return !!R;
              },
            },
            languages: {
              plain: m,
              plaintext: m,
              text: m,
              txt: m,
              extend: function (S, N) {
                var R = j.util.clone(j.languages[S]);
                for (var E in N) R[E] = N[E];
                return R;
              },
              insertBefore: function (S, N, R, E) {
                E = E || j.languages;
                var z = E[S],
                  v = {};
                for (var X in z)
                  if (z.hasOwnProperty(X)) {
                    if (X == N) for (var F in R) R.hasOwnProperty(F) && (v[F] = R[F]);
                    R.hasOwnProperty(X) || (v[X] = z[X]);
                  }
                var Y = E[S];
                return (
                  (E[S] = v),
                  j.languages.DFS(j.languages, function (W, ae) {
                    ae === Y && W != S && (this[W] = v);
                  }),
                  v
                );
              },
              DFS: function S(N, R, E, z) {
                z = z || {};
                var v = j.util.objId;
                for (var X in N)
                  if (N.hasOwnProperty(X)) {
                    R.call(N, X, N[X], E || X);
                    var F = N[X],
                      Y = j.util.type(F);
                    Y === 'Object' && !z[v(F)] ?
                      ((z[v(F)] = !0), S(F, R, null, z))
                    : Y === 'Array' && !z[v(F)] && ((z[v(F)] = !0), S(F, R, X, z));
                  }
              },
            },
            plugins: {},
            highlight: function (S, N, R) {
              var E = { code: S, grammar: N, language: R };
              if ((j.hooks.run('before-tokenize', E), !E.grammar))
                throw new Error('The language "' + E.language + '" has no grammar.');
              return (
                (E.tokens = j.tokenize(E.code, E.grammar)),
                j.hooks.run('after-tokenize', E),
                L.stringify(j.util.encode(E.tokens), E.language)
              );
            },
            tokenize: function (S, N) {
              var R = N.rest;
              if (R) {
                for (var E in R) N[E] = R[E];
                delete N.rest;
              }
              var z = new h();
              return (O(z, z.head, S), g(S, z, N, z.head, 0), Q(z));
            },
            hooks: {
              all: {},
              add: function (S, N) {
                var R = j.hooks.all;
                ((R[S] = R[S] || []), R[S].push(N));
              },
              run: function (S, N) {
                var R = j.hooks.all[S];
                if (!(!R || !R.length)) for (var E = 0, z; (z = R[E++]); ) z(N);
              },
            },
            Token: L,
          };
        function L(S, N, R, E) {
          ((this.type = S),
            (this.content = N),
            (this.alias = R),
            (this.length = (E || '').length | 0));
        }
        L.stringify = function S(N, R) {
          if (typeof N == 'string') return N;
          if (Array.isArray(N)) {
            var E = '';
            return (
              N.forEach(function (Y) {
                E += S(Y, R);
              }),
              E
            );
          }
          var z = {
              type: N.type,
              content: S(N.content, R),
              tag: 'span',
              classes: ['token', N.type],
              attributes: {},
              language: R,
            },
            v = N.alias;
          (v && (Array.isArray(v) ? Array.prototype.push.apply(z.classes, v) : z.classes.push(v)),
            j.hooks.run('wrap', z));
          var X = '';
          for (var F in z.attributes)
            X += ' ' + F + '="' + (z.attributes[F] || '').replace(/"/g, '&quot;') + '"';
          return (
            '<' +
            z.tag +
            ' class="' +
            z.classes.join(' ') +
            '"' +
            X +
            '>' +
            z.content +
            '</' +
            z.tag +
            '>'
          );
        };
        function _(S, N, R, E) {
          S.lastIndex = N;
          var z = S.exec(R);
          if (z && E && z[1]) {
            var v = z[1].length;
            ((z.index += v), (z[0] = z[0].slice(v)));
          }
          return z;
        }
        function g(S, N, R, E, z, v) {
          for (var X in R)
            if (!(!R.hasOwnProperty(X) || !R[X])) {
              var F = R[X];
              F = Array.isArray(F) ? F : [F];
              for (var Y = 0; Y < F.length; ++Y) {
                if (v && v.cause == X + ',' + Y) return;
                var W = F[Y],
                  ae = W.inside,
                  ue = !!W.lookbehind,
                  Ce = !!W.greedy,
                  Ne = W.alias;
                if (Ce && !W.pattern.global) {
                  var be = W.pattern.toString().match(/[imsuy]*$/)[0];
                  W.pattern = RegExp(W.pattern.source, be + 'g');
                }
                for (
                  var je = W.pattern || W, ve = E.next, pe = z;
                  ve !== N.tail && !(v && pe >= v.reach);
                  pe += ve.value.length, ve = ve.next
                ) {
                  var M = ve.value;
                  if (N.length > S.length) return;
                  if (!(M instanceof L)) {
                    var K = 1,
                      J;
                    if (Ce) {
                      if (((J = _(je, pe, S, ue)), !J || J.index >= S.length)) break;
                      var V = J.index,
                        ye = J.index + J[0].length,
                        d = pe;
                      for (d += ve.value.length; V >= d; ) ((ve = ve.next), (d += ve.value.length));
                      if (((d -= ve.value.length), (pe = d), ve.value instanceof L)) continue;
                      for (
                        var k = ve;
                        k !== N.tail && (d < ye || typeof k.value == 'string');
                        k = k.next
                      )
                        (K++, (d += k.value.length));
                      (K--, (M = S.slice(pe, d)), (J.index -= pe));
                    } else if (((J = _(je, 0, M, ue)), !J)) continue;
                    var V = J.index,
                      Z = J[0],
                      I = M.slice(0, V),
                      oe = M.slice(V + Z.length),
                      le = pe + M.length;
                    v && le > v.reach && (v.reach = le);
                    var Ye = ve.prev;
                    (I && ((Ye = O(N, Ye, I)), (pe += I.length)), G(N, Ye, K));
                    var we = new L(X, ae ? j.tokenize(Z, ae) : Z, Ne, Z);
                    if (((ve = O(N, Ye, we)), oe && O(N, ve, oe), K > 1)) {
                      var ht = { cause: X + ',' + Y, reach: le };
                      (g(S, N, R, ve.prev, pe, ht),
                        v && ht.reach > v.reach && (v.reach = ht.reach));
                    }
                  }
                }
              }
            }
        }
        function h() {
          var S = { value: null, prev: null, next: null },
            N = { value: null, prev: S, next: null };
          ((S.next = N), (this.head = S), (this.tail = N), (this.length = 0));
        }
        function O(S, N, R) {
          var E = N.next,
            z = { value: R, prev: N, next: E };
          return ((N.next = z), (E.prev = z), S.length++, z);
        }
        function G(S, N, R) {
          for (var E = N.next, z = 0; z < R && E !== S.tail; z++) E = E.next;
          ((N.next = E), (E.prev = N), (S.length -= z));
        }
        function Q(S) {
          for (var N = [], R = S.head.next; R !== S.tail; ) (N.push(R.value), (R = R.next));
          return N;
        }
        return j;
      })();
      ((f.exports = y), (y.default = y));
    },
  }),
  B = Ch(zh());
((B.languages.markup = {
  comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
  prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            { pattern: /^=/, alias: 'attr-equals' },
            { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
          ],
        },
      },
      punctuation: /\/?>/,
      'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
    },
  },
  entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
}),
  (B.languages.markup.tag.inside['attr-value'].inside.entity = B.languages.markup.entity),
  (B.languages.markup.doctype.inside['internal-subset'].inside = B.languages.markup),
  B.hooks.add('wrap', function (i) {
    i.type === 'entity' && (i.attributes.title = i.content.replace(/&amp;/, '&'));
  }),
  Object.defineProperty(B.languages.markup.tag, 'addInlined', {
    value: function (i, c) {
      var y = {},
        y =
          ((y['language-' + c] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: B.languages[c],
          }),
          (y.cdata = /^<!\[CDATA\[|\]\]>$/i),
          { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: y } }),
        c = ((y['language-' + c] = { pattern: /[\s\S]+/, inside: B.languages[c] }), {});
      ((c[i] = {
        pattern: RegExp(
          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return i;
            }
          ),
          'i'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: y,
      }),
        B.languages.insertBefore('markup', 'cdata', c));
    },
  }),
  Object.defineProperty(B.languages.markup.tag, 'addAttribute', {
    value: function (i, f) {
      B.languages.markup.tag.inside['special-attr'].push({
        pattern: RegExp(
          /(^|["'\s])/.source +
            '(?:' +
            i +
            ')' +
            /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          'i'
        ),
        lookbehind: !0,
        inside: {
          'attr-name': /^[^\s=]+/,
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [f, 'language-' + f],
                inside: B.languages[f],
              },
              punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
            },
          },
        },
      });
    },
  }),
  (B.languages.html = B.languages.markup),
  (B.languages.mathml = B.languages.markup),
  (B.languages.svg = B.languages.markup),
  (B.languages.xml = B.languages.extend('markup', {})),
  (B.languages.ssml = B.languages.xml),
  (B.languages.atom = B.languages.xml),
  (B.languages.rss = B.languages.xml),
  (function (i) {
    var f = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: 'escape' },
      y =
        /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
      c = '(?:[^\\\\-]|' + y.source + ')',
      c = RegExp(c + '-' + c),
      x = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: 'variable' };
    i.languages.regex = {
      'char-class': {
        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
        lookbehind: !0,
        inside: {
          'char-class-negation': { pattern: /(^\[)\^/, lookbehind: !0, alias: 'operator' },
          'char-class-punctuation': { pattern: /^\[|\]$/, alias: 'punctuation' },
          range: {
            pattern: c,
            inside: { escape: y, 'range-punctuation': { pattern: /-/, alias: 'operator' } },
          },
          'special-escape': f,
          'char-set': { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: 'class-name' },
          escape: y,
        },
      },
      'special-escape': f,
      'char-set': { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: 'class-name' },
      backreference: [
        { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: 'keyword' },
        { pattern: /\\k<[^<>']+>/, alias: 'keyword', inside: { 'group-name': x } },
      ],
      anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: 'function' },
      escape: y,
      group: [
        {
          pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
          alias: 'punctuation',
          inside: { 'group-name': x },
        },
        { pattern: /\)/, alias: 'punctuation' },
      ],
      quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: 'number' },
      alternation: { pattern: /\|/, alias: 'keyword' },
    };
  })(B),
  (B.languages.clike = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  }),
  (B.languages.javascript = B.languages.extend('clike', {
    'class-name': [
      B.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          /NaN|Infinity/.source +
          '|' +
          /0[bB][01]+(?:_[01]+)*n?/.source +
          '|' +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
          '|' +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
          '|' +
          /\d+(?:_\d+)*n/.source +
          '|' +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
            .source +
          ')' +
          /(?![\w$])/.source
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
  (B.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
  B.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: RegExp(
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
          /\//.source +
          '(?:' +
          /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
          '|' +
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
            .source +
          ')' +
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: B.languages.regex,
        },
        'regex-delimiter': /^\/|\/$/,
        'regex-flags': /^[a-z]+$/,
      },
    },
    'function-variable': {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function',
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: B.languages.javascript,
      },
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: B.languages.javascript,
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: B.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: B.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  B.languages.insertBefore('javascript', 'string', {
    hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
    'template-string': {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
            rest: B.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
    'string-property': {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
    },
  }),
  B.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: 'property',
    },
  }),
  B.languages.markup &&
    (B.languages.markup.tag.addInlined('script', 'javascript'),
    B.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
        .source,
      'javascript'
    )),
  (B.languages.js = B.languages.javascript),
  (B.languages.actionscript = B.languages.extend('javascript', {
    keyword:
      /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
  })),
  (B.languages.actionscript['class-name'].alias = 'function'),
  delete B.languages.actionscript.parameter,
  delete B.languages.actionscript['literal-property'],
  B.languages.markup &&
    B.languages.insertBefore('actionscript', 'string', {
      xml: {
        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
        lookbehind: !0,
        inside: B.languages.markup,
      },
    }),
  (function (i) {
    var f = /#(?!\{).+/,
      y = { pattern: /#\{[^}]+\}/, alias: 'variable' };
    ((i.languages.coffeescript = i.languages.extend('javascript', {
      comment: f,
      string: [
        { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
        { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: y } },
      ],
      keyword:
        /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
      'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
    })),
      i.languages.insertBefore('coffeescript', 'comment', {
        'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
        'block-regex': {
          pattern: /\/{3}[\s\S]*?\/{3}/,
          alias: 'regex',
          inside: { comment: f, interpolation: y },
        },
      }),
      i.languages.insertBefore('coffeescript', 'string', {
        'inline-javascript': {
          pattern: /`(?:\\[\s\S]|[^\\`])*`/,
          inside: {
            delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
            script: {
              pattern: /[\s\S]+/,
              alias: 'language-javascript',
              inside: i.languages.javascript,
            },
          },
        },
        'multiline-string': [
          { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
          { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: 'string', inside: { interpolation: y } },
        ],
      }),
      i.languages.insertBefore('coffeescript', 'keyword', { property: /(?!\d)\w+(?=\s*:(?!:))/ }),
      delete i.languages.coffeescript['template-string'],
      (i.languages.coffee = i.languages.coffeescript));
  })(B),
  (function (i) {
    var f = (i.languages.javadoclike = {
      parameter: {
        pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
        lookbehind: !0,
      },
      keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 },
      punctuation: /[{}]/,
    });
    (Object.defineProperty(f, 'addSupport', {
      value: function (y, c) {
        (y = typeof y == 'string' ? [y] : y).forEach(function (x) {
          var m = function (O) {
              (O.inside || (O.inside = {}), (O.inside.rest = c));
            },
            j = 'doc-comment';
          if ((L = i.languages[x])) {
            var L,
              _ = L[j];
            if (
              ((_ =
                _ ||
                (L = i.languages.insertBefore(x, 'comment', {
                  'doc-comment': {
                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    alias: 'comment',
                  },
                }))[j]) instanceof RegExp && (_ = L[j] = { pattern: _ }),
              Array.isArray(_))
            )
              for (var g = 0, h = _.length; g < h; g++)
                (_[g] instanceof RegExp && (_[g] = { pattern: _[g] }), m(_[g]));
            else m(_);
          }
        });
      },
    }),
      f.addSupport(['java', 'javascript', 'php'], f));
  })(B),
  (function (i) {
    var f = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,
      f =
        ((i.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: RegExp(
              '@[\\w-](?:' +
                /[^;{\s"']|\s+(?!\s)/.source +
                '|' +
                f.source +
                ')*?' +
                /(?:;|(?=\s*\{))/.source
            ),
            inside: {
              rule: /^@[\w-]+/,
              'selector-function-argument': {
                pattern:
                  /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: 'selector',
              },
              keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
            },
          },
          url: {
            pattern: RegExp(
              '\\burl\\((?:' + f.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
              'i'
            ),
            greedy: !0,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: { pattern: RegExp('^' + f.source + '$'), alias: 'url' },
            },
          },
          selector: {
            pattern: RegExp(
              `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + f.source + ')*(?=\\s*\\{)'
            ),
            lookbehind: !0,
          },
          string: { pattern: f, greedy: !0 },
          property: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
          },
          important: /!important\b/i,
          function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
          punctuation: /[(){};:,]/,
        }),
        (i.languages.css.atrule.inside.rest = i.languages.css),
        i.languages.markup);
    f && (f.tag.addInlined('style', 'css'), f.tag.addAttribute('style', 'css'));
  })(B),
  (function (i) {
    var f = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      f =
        ((i.languages.css.selector = {
          pattern: i.languages.css.selector.pattern,
          lookbehind: !0,
          inside: (f = {
            'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            'pseudo-class': /:[-\w]+/,
            class: /\.[-\w]+/,
            id: /#[-\w]+/,
            attribute: {
              pattern: RegExp(`\\[(?:[^[\\]"']|` + f.source + ')*\\]'),
              greedy: !0,
              inside: {
                punctuation: /^\[|\]$/,
                'case-sensitivity': { pattern: /(\s)[si]$/i, lookbehind: !0, alias: 'keyword' },
                namespace: {
                  pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                  lookbehind: !0,
                  inside: { punctuation: /\|$/ },
                },
                'attr-name': { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 },
                'attr-value': [
                  f,
                  { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 },
                ],
                operator: /[|~*^$]?=/,
              },
            },
            'n-th': [
              {
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: { number: /[\dn]+/, operator: /[+-]/ },
              },
              { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
            ],
            combinator: />|\+|~|\|\|/,
            punctuation: /[(),]/,
          }),
        }),
        (i.languages.css.atrule.inside['selector-function-argument'].inside = f),
        i.languages.insertBefore('css', 'property', {
          variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
            lookbehind: !0,
          },
        }),
        { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }),
      y = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
    i.languages.insertBefore('css', 'function', {
      operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
      hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: 'color' },
      color: [
        {
          pattern:
            /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
          lookbehind: !0,
        },
        {
          pattern:
            /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: { unit: f, number: y, function: /[\w-]+(?=\()/, punctuation: /[(),]/ },
        },
      ],
      entity: /\\[\da-f]{1,8}/i,
      unit: f,
      number: y,
    });
  })(B),
  (function (i) {
    var f = /[*&][^\s[\]{},]+/,
      y = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      c = '(?:' + y.source + '(?:[ 	]+' + f.source + ')?|' + f.source + '(?:[ 	]+' + y.source + ')?)',
      x =
        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function () {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
              .source;
          }
        ),
      m = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function j(L, _) {
      _ = (_ || '').replace(/m/g, '') + 'm';
      var g =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return c;
          })
          .replace(/<<value>>/g, function () {
            return L;
          });
      return RegExp(g, _);
    }
    ((i.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return c;
            }
          )
        ),
        lookbehind: !0,
        alias: 'string',
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return c;
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + x + '|' + m + ')';
            })
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'atrule',
      },
      directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
      datetime: {
        pattern: j(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source
        ),
        lookbehind: !0,
        alias: 'number',
      },
      boolean: { pattern: j(/false|true/.source, 'i'), lookbehind: !0, alias: 'important' },
      null: { pattern: j(/null|~/.source, 'i'), lookbehind: !0, alias: 'important' },
      string: { pattern: j(m), lookbehind: !0, greedy: !0 },
      number: {
        pattern: j(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
          'i'
        ),
        lookbehind: !0,
      },
      tag: y,
      important: f,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
    }),
      (i.languages.yml = i.languages.yaml));
  })(B),
  (function (i) {
    var f = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function y(g) {
      return (
        (g = g.replace(/<inner>/g, function () {
          return f;
        })),
        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + g + ')')
      );
    }
    var c = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
      x = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
        return c;
      }),
      m = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
      j =
        ((i.languages.markdown = i.languages.extend('markup', {})),
        i.languages.insertBefore('markdown', 'prolog', {
          'front-matter-block': {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              punctuation: /^---|---$/,
              'front-matter': {
                pattern: /\S+(?:\s+\S+)*/,
                alias: ['yaml', 'language-yaml'],
                inside: i.languages.yaml,
              },
            },
          },
          blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
          table: {
            pattern: RegExp('^' + x + m + '(?:' + x + ')*', 'm'),
            inside: {
              'table-data-rows': {
                pattern: RegExp('^(' + x + m + ')(?:' + x + ')*$'),
                lookbehind: !0,
                inside: {
                  'table-data': { pattern: RegExp(c), inside: i.languages.markdown },
                  punctuation: /\|/,
                },
              },
              'table-line': {
                pattern: RegExp('^(' + x + ')' + m + '$'),
                lookbehind: !0,
                inside: { punctuation: /\||:?-{3,}:?/ },
              },
              'table-header-row': {
                pattern: RegExp('^' + x + '$'),
                inside: {
                  'table-header': {
                    pattern: RegExp(c),
                    alias: 'important',
                    inside: i.languages.markdown,
                  },
                  punctuation: /\|/,
                },
              },
            },
          },
          code: [
            {
              pattern:
                /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
              lookbehind: !0,
              alias: 'keyword',
            },
            {
              pattern: /^```[\s\S]*?^```$/m,
              greedy: !0,
              inside: {
                'code-block': {
                  pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                  lookbehind: !0,
                },
                'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                punctuation: /```/,
              },
            },
          ],
          title: [
            {
              pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
              alias: 'important',
              inside: { punctuation: /==+$|--+$/ },
            },
            {
              pattern: /(^\s*)#.+/m,
              lookbehind: !0,
              alias: 'important',
              inside: { punctuation: /^#+|#+$/ },
            },
          ],
          hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: 'punctuation',
          },
          list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: 'punctuation',
          },
          'url-reference': {
            pattern:
              /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
              variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
              string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
              punctuation: /^[\[\]!:]|[<>]/,
            },
            alias: 'url',
          },
          bold: {
            pattern: y(
              /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                .source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
              punctuation: /\*\*|__/,
            },
          },
          italic: {
            pattern: y(
              /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                .source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
              punctuation: /[*_]/,
            },
          },
          strike: {
            pattern: y(/(~~?)(?:(?!~)<inner>)+\2/.source),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} },
              punctuation: /~~?/,
            },
          },
          'code-snippet': {
            pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: !0,
            greedy: !0,
            alias: ['code', 'keyword'],
          },
          url: {
            pattern: y(
              /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                .source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              operator: /^!/,
              content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
              variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
              url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
              string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 },
            },
          },
        }),
        ['url', 'bold', 'italic', 'strike'].forEach(function (g) {
          ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (h) {
            g !== h && (i.languages.markdown[g].inside.content.inside[h] = i.languages.markdown[h]);
          });
        }),
        i.hooks.add('after-tokenize', function (g) {
          (g.language !== 'markdown' && g.language !== 'md') ||
            (function h(O) {
              if (O && typeof O != 'string')
                for (var G = 0, Q = O.length; G < Q; G++) {
                  var S,
                    N = O[G];
                  N.type !== 'code' ?
                    h(N.content)
                  : ((S = N.content[1]),
                    (N = N.content[3]),
                    S &&
                      N &&
                      S.type === 'code-language' &&
                      N.type === 'code-block' &&
                      typeof S.content == 'string' &&
                      ((S = S.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp')),
                      (S = 'language-' + (S = (/[a-z][\w-]*/i.exec(S) || [''])[0].toLowerCase())),
                      N.alias ?
                        typeof N.alias == 'string' ?
                          (N.alias = [N.alias, S])
                        : N.alias.push(S)
                      : (N.alias = [S])));
                }
            })(g.tokens);
        }),
        i.hooks.add('wrap', function (g) {
          if (g.type === 'code-block') {
            for (var h = '', O = 0, G = g.classes.length; O < G; O++) {
              var Q = g.classes[O],
                Q = /language-(.+)/.exec(Q);
              if (Q) {
                h = Q[1];
                break;
              }
            }
            var S,
              N = i.languages[h];
            N ?
              (g.content = i.highlight(
                (function (R) {
                  return (
                    (R = R.replace(j, '')),
                    (R = R.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (E, z) {
                      var v;
                      return (z = z.toLowerCase())[0] === '#' ?
                          ((v = z[1] === 'x' ? parseInt(z.slice(2), 16) : Number(z.slice(1))), _(v))
                        : L[z] || E;
                    }))
                  );
                })(g.content),
                N,
                h
              ))
            : h &&
              h !== 'none' &&
              i.plugins.autoloader &&
              ((S = 'md-' + new Date().valueOf() + '-' + Math.floor(1e16 * Math.random())),
              (g.attributes.id = S),
              i.plugins.autoloader.loadLanguages(h, function () {
                var R = document.getElementById(S);
                R && (R.innerHTML = i.highlight(R.textContent, i.languages[h], h));
              }));
          }
        }),
        RegExp(i.languages.markup.tag.pattern.source, 'gi')),
      L = { amp: '&', lt: '<', gt: '>', quot: '"' },
      _ = String.fromCodePoint || String.fromCharCode;
    i.languages.md = i.languages.markdown;
  })(B),
  (B.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: B.languages.markdown,
        },
      },
    },
    string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
    'attr-name': {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0,
    },
    'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    'class-name': {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0,
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-mutation': {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-query': { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
    keyword:
      /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    'property-query': /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/,
  }),
  B.hooks.add('after-tokenize', function (i) {
    if (i.language === 'graphql')
      for (
        var f = i.tokens.filter(function (S) {
            return typeof S != 'string' && S.type !== 'comment' && S.type !== 'scalar';
          }),
          y = 0;
        y < f.length;

      ) {
        var c = f[y++];
        if (c.type === 'keyword' && c.content === 'mutation') {
          var x = [];
          if (O(['definition-mutation', 'punctuation']) && h(1).content === '(') {
            y += 2;
            var m = G(/^\($/, /^\)$/);
            if (m === -1) continue;
            for (; y < m; y++) {
              var j = h(0);
              j.type === 'variable' && (Q(j, 'variable-input'), x.push(j.content));
            }
            y = m + 1;
          }
          if (
            O(['punctuation', 'property-query']) &&
            h(0).content === '{' &&
            (y++, Q(h(0), 'property-mutation'), 0 < x.length)
          ) {
            var L = G(/^\{$/, /^\}$/);
            if (L !== -1)
              for (var _ = y; _ < L; _++) {
                var g = f[_];
                g.type === 'variable' && 0 <= x.indexOf(g.content) && Q(g, 'variable-input');
              }
          }
        }
      }
    function h(S) {
      return f[y + S];
    }
    function O(S, N) {
      N = N || 0;
      for (var R = 0; R < S.length; R++) {
        var E = h(R + N);
        if (!E || E.type !== S[R]) return;
      }
      return 1;
    }
    function G(S, N) {
      for (var R = 1, E = y; E < f.length; E++) {
        var z = f[E],
          v = z.content;
        if (z.type === 'punctuation' && typeof v == 'string') {
          if (S.test(v)) R++;
          else if (N.test(v) && --R === 0) return E;
        }
      }
      return -1;
    }
    function Q(S, N) {
      var R = S.alias;
      (R ? Array.isArray(R) || (S.alias = R = [R]) : (S.alias = R = []), R.push(N));
    }
  }),
  (B.languages.sql = {
    comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 },
    variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/],
    string: {
      pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
      greedy: !0,
      lookbehind: !0,
    },
    identifier: {
      pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
      greedy: !0,
      lookbehind: !0,
      inside: { punctuation: /^`|`$/ },
    },
    function:
      /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword:
      /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator:
      /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/,
  }),
  (function (i) {
    var f = i.languages.javascript['template-string'],
      y = f.pattern.source,
      c = f.inside.interpolation,
      x = c.inside['interpolation-punctuation'],
      m = c.pattern.source;
    function j(O, G) {
      if (i.languages[O])
        return {
          pattern: RegExp('((?:' + G + ')\\s*)' + y),
          lookbehind: !0,
          greedy: !0,
          inside: {
            'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
            'embedded-code': { pattern: /[\s\S]+/, alias: O },
          },
        };
    }
    function L(O, G, Q) {
      return (
        (O = { code: O, grammar: G, language: Q }),
        i.hooks.run('before-tokenize', O),
        (O.tokens = i.tokenize(O.code, O.grammar)),
        i.hooks.run('after-tokenize', O),
        O.tokens
      );
    }
    function _(O, G, Q) {
      var R = i.tokenize(O, { interpolation: { pattern: RegExp(m), lookbehind: !0 } }),
        S = 0,
        N = {},
        R = L(
          R.map(function (z) {
            if (typeof z == 'string') return z;
            for (
              var v, X, z = z.content;
              O.indexOf(((X = S++), (v = '___' + Q.toUpperCase() + '_' + X + '___'))) !== -1;

            );
            return ((N[v] = z), v);
          }).join(''),
          G,
          Q
        ),
        E = Object.keys(N);
      return (
        (S = 0),
        (function z(v) {
          for (var X = 0; X < v.length; X++) {
            if (S >= E.length) return;
            var F,
              Y,
              W,
              ae,
              ue,
              Ce,
              Ne,
              be = v[X];
            typeof be == 'string' || typeof be.content == 'string' ?
              ((F = E[S]),
              (Ne = (Ce = typeof be == 'string' ? be : be.content).indexOf(F)) !== -1 &&
                (++S,
                (Y = Ce.substring(0, Ne)),
                (ue = N[F]),
                (W = void 0),
                ((ae = {})['interpolation-punctuation'] = x),
                (ae = i.tokenize(ue, ae)).length === 3 &&
                  ((W = [1, 1]).push.apply(W, L(ae[1], i.languages.javascript, 'javascript')),
                  ae.splice.apply(ae, W)),
                (W = new i.Token('interpolation', ae, c.alias, ue)),
                (ae = Ce.substring(Ne + F.length)),
                (ue = []),
                Y && ue.push(Y),
                ue.push(W),
                ae && (z((Ce = [ae])), ue.push.apply(ue, Ce)),
                typeof be == 'string' ?
                  (v.splice.apply(v, [X, 1].concat(ue)), (X += ue.length - 1))
                : (be.content = ue)))
            : ((Ne = be.content), Array.isArray(Ne) ? z(Ne) : z([Ne]));
          }
        })(R),
        new i.Token(Q, R, 'language-' + Q, O)
      );
    }
    i.languages.javascript['template-string'] = [
      j(
        'css',
        /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
          .source
      ),
      j('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
      j('svg', /\bsvg/.source),
      j('markdown', /\b(?:markdown|md)/.source),
      j('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
      j('sql', /\bsql/.source),
      f,
    ].filter(Boolean);
    var g = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
    function h(O) {
      return (
        typeof O == 'string' ? O
        : Array.isArray(O) ? O.map(h).join('')
        : h(O.content)
      );
    }
    i.hooks.add('after-tokenize', function (O) {
      O.language in g &&
        (function G(Q) {
          for (var S = 0, N = Q.length; S < N; S++) {
            var R,
              E,
              z,
              v = Q[S];
            typeof v != 'string' &&
              ((R = v.content),
              Array.isArray(R) ?
                v.type === 'template-string' ?
                  ((v = R[1]),
                  R.length === 3 &&
                    typeof v != 'string' &&
                    v.type === 'embedded-code' &&
                    ((E = h(v)),
                    (v = v.alias),
                    (v = Array.isArray(v) ? v[0] : v),
                    (z = i.languages[v])) &&
                    (R[1] = _(E, z, v)))
                : G(R)
              : typeof R != 'string' && G([R]));
          }
        })(O.tokens);
    });
  })(B),
  (function (i) {
    ((i.languages.typescript = i.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
      i.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/
      ),
      delete i.languages.typescript.parameter,
      delete i.languages.typescript['literal-property']);
    var f = i.languages.extend('typescript', {});
    (delete f['class-name'],
      (i.languages.typescript['class-name'].inside = f),
      i.languages.insertBefore('typescript', 'function', {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ },
        },
        'generic-function': {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: f },
          },
        },
      }),
      (i.languages.ts = i.languages.typescript));
  })(B),
  (function (i) {
    var f = i.languages.javascript,
      y = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
      c = '(@(?:arg|argument|param|property)\\s+(?:' + y + '\\s+)?)';
    ((i.languages.jsdoc = i.languages.extend('javadoclike', {
      parameter: {
        pattern: RegExp(c + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
    })),
      i.languages.insertBefore('jsdoc', 'keyword', {
        'optional-parameter': {
          pattern: RegExp(c + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
          lookbehind: !0,
          inside: {
            parameter: {
              pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
            code: {
              pattern: /(=)[\s\S]*(?=\]$)/,
              lookbehind: !0,
              inside: f,
              alias: 'language-javascript',
            },
            punctuation: /[=[\]]/,
          },
        },
        'class-name': [
          {
            pattern: RegExp(
              /(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(
                /<TYPE>/g,
                function () {
                  return y;
                }
              )
            ),
            lookbehind: !0,
            inside: { punctuation: /\./ },
          },
          {
            pattern: RegExp('(@[a-z]+\\s+)' + y),
            lookbehind: !0,
            inside: {
              string: f.string,
              number: f.number,
              boolean: f.boolean,
              keyword: i.languages.typescript.keyword,
              operator: /=>|\.\.\.|[&|?:*]/,
              punctuation: /[.,;=<>{}()[\]]/,
            },
          },
        ],
        example: {
          pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
          lookbehind: !0,
          inside: {
            code: {
              pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
              lookbehind: !0,
              inside: f,
              alias: 'language-javascript',
            },
          },
        },
      }),
      i.languages.javadoclike.addSupport('javascript', i.languages.jsdoc));
  })(B),
  (function (i) {
    ((i.languages.flow = i.languages.extend('javascript', {})),
      i.languages.insertBefore('flow', 'keyword', {
        type: [
          {
            pattern:
              /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
            alias: 'class-name',
          },
        ],
      }),
      (i.languages.flow['function-variable'].pattern =
        /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i),
      delete i.languages.flow.parameter,
      i.languages.insertBefore('flow', 'operator', {
        'flow-punctuation': { pattern: /\{\||\|\}/, alias: 'punctuation' },
      }),
      Array.isArray(i.languages.flow.keyword) ||
        (i.languages.flow.keyword = [i.languages.flow.keyword]),
      i.languages.flow.keyword.unshift(
        { pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 },
        {
          pattern:
            /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
          lookbehind: !0,
        }
      ));
  })(B),
  (B.languages.n4js = B.languages.extend('javascript', {
    keyword:
      /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
  })),
  B.languages.insertBefore('n4js', 'constant', {
    annotation: { pattern: /@+\w+/, alias: 'operator' },
  }),
  (B.languages.n4jsd = B.languages.n4js),
  (function (i) {
    function f(j, L) {
      return RegExp(
        j.replace(/<ID>/g, function () {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }),
        L
      );
    }
    (i.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp('(\\.\\s*)' + i.languages.javascript['function-variable'].pattern.source),
        lookbehind: !0,
        alias: ['function-variable', 'method', 'function', 'property-access'],
      },
    }),
      i.languages.insertBefore('javascript', 'function', {
        method: {
          pattern: RegExp('(\\.\\s*)' + i.languages.javascript.function.source),
          lookbehind: !0,
          alias: ['function', 'property-access'],
        },
      }),
      i.languages.insertBefore('javascript', 'constant', {
        'known-class-name': [
          {
            pattern:
              /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: 'class-name',
          },
          { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
        ],
      }),
      i.languages.insertBefore('javascript', 'keyword', {
        imports: {
          pattern: f(
            /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
              .source
          ),
          lookbehind: !0,
          inside: i.languages.javascript,
        },
        exports: {
          pattern: f(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
          lookbehind: !0,
          inside: i.languages.javascript,
        },
      }),
      i.languages.javascript.keyword.unshift(
        { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
        {
          pattern:
            /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: 'control-flow',
        },
        { pattern: /\bnull\b/, alias: ['null', 'nil'] },
        { pattern: /\bundefined\b/, alias: 'nil' }
      ),
      i.languages.insertBefore('javascript', 'operator', {
        spread: { pattern: /\.{3}/, alias: 'operator' },
        arrow: { pattern: /=>/, alias: 'operator' },
      }),
      i.languages.insertBefore('javascript', 'punctuation', {
        'property-access': { pattern: f(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
        'maybe-class-name': {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: !0,
        },
        dom: {
          pattern:
            /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: 'variable',
        },
        console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
      }));
    for (
      var y = ['function', 'function-variable', 'method', 'method-variable', 'property-access'],
        c = 0;
      c < y.length;
      c++
    ) {
      var m = y[c],
        x = i.languages.javascript[m],
        m =
          (x = i.util.type(x) === 'RegExp' ? (i.languages.javascript[m] = { pattern: x }) : x)
            .inside || {};
      (x.inside = m)['maybe-class-name'] = /^[A-Z][\s\S]*/;
    }
  })(B),
  (function (i) {
    var f = i.util.clone(i.languages.javascript),
      y = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
      c = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
      x = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function m(_, g) {
      return (
        (_ = _.replace(/<S>/g, function () {
          return y;
        })
          .replace(/<BRACES>/g, function () {
            return c;
          })
          .replace(/<SPREAD>/g, function () {
            return x;
          })),
        RegExp(_, g)
      );
    }
    ((x = m(x).source),
      (i.languages.jsx = i.languages.extend('markup', f)),
      (i.languages.jsx.tag.pattern = m(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
          .source
      )),
      (i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (i.languages.jsx.tag.inside['attr-value'].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (i.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (i.languages.jsx.tag.inside.comment = f.comment),
      i.languages.insertBefore(
        'inside',
        'attr-name',
        { spread: { pattern: m(/<SPREAD>/.source), inside: i.languages.jsx } },
        i.languages.jsx.tag
      ),
      i.languages.insertBefore(
        'inside',
        'special-attr',
        {
          script: {
            pattern: m(/=<BRACES>/.source),
            alias: 'language-javascript',
            inside: {
              'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' },
              rest: i.languages.jsx,
            },
          },
        },
        i.languages.jsx.tag
      ));
    function j(_) {
      for (var g = [], h = 0; h < _.length; h++) {
        var O = _[h],
          G = !1;
        (typeof O != 'string' &&
          (O.type === 'tag' && O.content[0] && O.content[0].type === 'tag' ?
            O.content[0].content[0].content === '</' ?
              0 < g.length && g[g.length - 1].tagName === L(O.content[0].content[1]) && g.pop()
            : O.content[O.content.length - 1].content !== '/>' &&
              g.push({ tagName: L(O.content[0].content[1]), openedBraces: 0 })
          : 0 < g.length && O.type === 'punctuation' && O.content === '{' ?
            g[g.length - 1].openedBraces++
          : (
            0 < g.length &&
            0 < g[g.length - 1].openedBraces &&
            O.type === 'punctuation' &&
            O.content === '}'
          ) ?
            g[g.length - 1].openedBraces--
          : (G = !0)),
          (G || typeof O == 'string') &&
            0 < g.length &&
            g[g.length - 1].openedBraces === 0 &&
            ((G = L(O)),
            h < _.length - 1 &&
              (typeof _[h + 1] == 'string' || _[h + 1].type === 'plain-text') &&
              ((G += L(_[h + 1])), _.splice(h + 1, 1)),
            0 < h &&
              (typeof _[h - 1] == 'string' || _[h - 1].type === 'plain-text') &&
              ((G = L(_[h - 1]) + G), _.splice(h - 1, 1), h--),
            (_[h] = new i.Token('plain-text', G, null, G))),
          O.content && typeof O.content != 'string' && j(O.content));
      }
    }
    var L = function (_) {
      return (
        _ ?
          typeof _ == 'string' ? _
          : typeof _.content == 'string' ? _.content
          : _.content.map(L).join('')
        : ''
      );
    };
    i.hooks.add('after-tokenize', function (_) {
      (_.language !== 'jsx' && _.language !== 'tsx') || j(_.tokens);
    });
  })(B),
  (function (i) {
    var f = i.util.clone(i.languages.typescript),
      f =
        ((i.languages.tsx = i.languages.extend('jsx', f)),
        delete i.languages.tsx.parameter,
        delete i.languages.tsx['literal-property'],
        i.languages.tsx.tag);
    ((f.pattern = RegExp(
      /(^|[^\w$]|(?=<\/))/.source + '(?:' + f.pattern.source + ')',
      f.pattern.flags
    )),
      (f.lookbehind = !0));
  })(B),
  (B.languages.swift = {
    comment: {
      pattern:
        /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
      lookbehind: !0,
      greedy: !0,
    },
    'string-literal': [
      {
        pattern: RegExp(
          /(^|[^"#])/.source +
            '(?:' +
            /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source +
            '|' +
            /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source +
            ')' +
            /(?!["#])/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: !0,
            inside: null,
          },
          'interpolation-punctuation': { pattern: /^\)|\\\($/, alias: 'punctuation' },
          punctuation: /\\(?=[\r\n])/,
          string: /[\s\S]+/,
        },
      },
      {
        pattern: RegExp(
          /(^|[^"#])(#+)/.source +
            '(?:' +
            /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source +
            '|' +
            /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source +
            ')\\2'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: !0,
            inside: null,
          },
          'interpolation-punctuation': { pattern: /^\)|\\#+\($/, alias: 'punctuation' },
          string: /[\s\S]+/,
        },
      },
    ],
    directive: {
      pattern: RegExp(
        /#/.source +
          '(?:' +
          /(?:elseif|if)\b/.source +
          '(?:[ 	]*' +
          /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/
            .source +
          ')+|' +
          /(?:else|endif)\b/.source +
          ')'
      ),
      alias: 'property',
      inside: {
        'directive-name': /^#\w+/,
        boolean: /\b(?:false|true)\b/,
        number: /\b\d+(?:\.\d+)*\b/,
        operator: /!|&&|\|\||[<>]=?/,
        punctuation: /[(),]/,
      },
    },
    literal: {
      pattern:
        /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
      alias: 'constant',
    },
    'other-directive': { pattern: /#\w+\b/, alias: 'property' },
    attribute: { pattern: /@\w+/, alias: 'atrule' },
    'function-definition': { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: 'function' },
    label: {
      pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
      lookbehind: !0,
      alias: 'important',
    },
    keyword:
      /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
    boolean: /\b(?:false|true)\b/,
    nil: { pattern: /\bnil\b/, alias: 'constant' },
    'short-argument': /\$\d+\b/,
    omit: { pattern: /\b_\b/, alias: 'keyword' },
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
    punctuation: /[{}[\]();,.:\\]/,
  }),
  B.languages.swift['string-literal'].forEach(function (i) {
    i.inside.interpolation.inside = B.languages.swift;
  }),
  (function (i) {
    ((i.languages.kotlin = i.languages.extend('clike', {
      keyword: {
        pattern:
          /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: !0,
      },
      function: [
        { pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
        { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 },
      ],
      number:
        /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator:
        /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
    })),
      delete i.languages.kotlin['class-name']);
    var f = {
      'interpolation-punctuation': { pattern: /^\$\{?|\}$/, alias: 'punctuation' },
      expression: { pattern: /[\s\S]+/, inside: i.languages.kotlin },
    };
    (i.languages.insertBefore('kotlin', 'string', {
      'string-literal': [
        {
          pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
          alias: 'multiline',
          inside: {
            interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: f },
            string: /[\s\S]+/,
          },
        },
        {
          pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
          alias: 'singleline',
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
              lookbehind: !0,
              inside: f,
            },
            string: /[\s\S]+/,
          },
        },
      ],
      char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 },
    }),
      delete i.languages.kotlin.string,
      i.languages.insertBefore('kotlin', 'keyword', {
        annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: 'builtin' },
      }),
      i.languages.insertBefore('kotlin', 'function', {
        label: { pattern: /\b\w+@|@\w+\b/, alias: 'symbol' },
      }),
      (i.languages.kt = i.languages.kotlin),
      (i.languages.kts = i.languages.kotlin));
  })(B),
  (B.languages.c = B.languages.extend('clike', {
    comment: {
      pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0,
    },
    string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
    'class-name': {
      pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
      lookbehind: !0,
    },
    keyword:
      /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number:
      /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  })),
  B.languages.insertBefore('c', 'string', {
    char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 },
  }),
  B.languages.insertBefore('c', 'string', {
    macro: {
      pattern:
        /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: 'property',
      inside: {
        string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, B.languages.c.string],
        char: B.languages.c.char,
        comment: B.languages.c.comment,
        'macro-name': [
          { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
          { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: 'function' },
        ],
        directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: 'keyword' },
        'directive-hash': /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: { pattern: /\S[\s\S]*/, inside: B.languages.c },
      },
    },
  }),
  B.languages.insertBefore('c', 'function', {
    constant:
      /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
  }),
  delete B.languages.c.boolean,
  (B.languages.objectivec = B.languages.extend('c', {
    string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
    keyword:
      /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
  })),
  delete B.languages.objectivec['class-name'],
  (B.languages.objc = B.languages.objectivec),
  (B.languages.reason = B.languages.extend('clike', {
    string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
    'class-name': /\b[A-Z]\w*/,
    keyword:
      /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
    operator:
      /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
  })),
  B.languages.insertBefore('reason', 'class-name', {
    char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 },
    constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
    label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
  }),
  delete B.languages.reason.function,
  (function (i) {
    for (var f = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, y = 0; y < 2; y++)
      f = f.replace(/<self>/g, function () {
        return f;
      });
    ((f = f.replace(/<self>/g, function () {
      return /[^\s\S]/.source;
    })),
      (i.languages.rust = {
        comment: [
          { pattern: RegExp(/(^|[^\\])/.source + f), lookbehind: !0, greedy: !0 },
          { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 },
        char: {
          pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
          greedy: !0,
        },
        attribute: {
          pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
          greedy: !0,
          alias: 'attr-name',
          inside: { string: null },
        },
        'closure-params': {
          pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            'closure-punctuation': { pattern: /^\||\|$/, alias: 'punctuation' },
            rest: null,
          },
        },
        'lifetime-annotation': { pattern: /'\w+/, alias: 'symbol' },
        'fragment-specifier': { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: 'punctuation' },
        variable: /\$\w+/,
        'function-definition': { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: 'function' },
        'type-definition': {
          pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
          lookbehind: !0,
          alias: 'class-name',
        },
        'module-declaration': [
          { pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: 'namespace' },
          {
            pattern:
              /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
            lookbehind: !0,
            alias: 'namespace',
            inside: { punctuation: /::/ },
          },
        ],
        keyword: [
          /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
          /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/,
        ],
        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
        macro: { pattern: /\b\w+!/, alias: 'property' },
        constant: /\b[A-Z_][A-Z_\d]+\b/,
        'class-name': /\b[A-Z]\w*\b/,
        namespace: {
          pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
          inside: { punctuation: /::/ },
        },
        number:
          /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
      }),
      (i.languages.rust['closure-params'].inside.rest = i.languages.rust),
      (i.languages.rust.attribute.inside.string = i.languages.rust.string));
  })(B),
  (B.languages.go = B.languages.extend('clike', {
    string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 },
    keyword:
      /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: [
      /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
      /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
      /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
    ],
    operator:
      /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin:
      /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
  })),
  B.languages.insertBefore('go', 'string', {
    char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
  }),
  delete B.languages.go['class-name'],
  (function (i) {
    var f =
        /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
      y = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
        return f.source;
      });
    ((i.languages.cpp = i.languages.extend('c', {
      'class-name': [
        {
          pattern: RegExp(
            /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
              /<keyword>/g,
              function () {
                return f.source;
              }
            )
          ),
          lookbehind: !0,
        },
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
      ],
      keyword: f,
      number: {
        pattern:
          /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0,
      },
      operator:
        />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/,
    })),
      i.languages.insertBefore('cpp', 'string', {
        module: {
          pattern: RegExp(
            /(\b(?:import|module)\s+)/.source +
              '(?:' +
              /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
              '|' +
              /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                /<mod-name>/g,
                function () {
                  return y;
                }
              ) +
              ')'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
        },
        'raw-string': { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: 'string', greedy: !0 },
      }),
      i.languages.insertBefore('cpp', 'keyword', {
        'generic-function': {
          pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
          inside: {
            function: /^\w+/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: i.languages.cpp },
          },
        },
      }),
      i.languages.insertBefore('cpp', 'operator', {
        'double-colon': { pattern: /::/, alias: 'punctuation' },
      }),
      i.languages.insertBefore('cpp', 'class-name', {
        'base-clause': {
          pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
          lookbehind: !0,
          greedy: !0,
          inside: i.languages.extend('cpp', {}),
        },
      }),
      i.languages.insertBefore(
        'inside',
        'double-colon',
        { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
        i.languages.cpp['base-clause']
      ));
  })(B),
  (B.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
    'string-interpolation': {
      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          pattern:
            /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            'format-spec': { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
            'conversion-option': { pattern: /![sra](?=[:}]$)/, alias: 'punctuation' },
            rest: null,
          },
        },
        string: /[\s\S]+/,
      },
    },
    'triple-quoted-string': {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: 'string',
    },
    string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 },
    function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
    'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ['annotation', 'punctuation'],
      inside: { punctuation: /\./ },
    },
    keyword:
      /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin:
      /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number:
      /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/,
  }),
  (B.languages.python['string-interpolation'].inside.interpolation.inside.rest =
    B.languages.python),
  (B.languages.py = B.languages.python),
  (B.languages.json = {
    property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
    string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' },
  }),
  (B.languages.webmanifest = B.languages.json));
var yt = {};
wh(yt, {
  dracula: () => jh,
  duotoneDark: () => Mh,
  duotoneLight: () => Lh,
  github: () => Bh,
  gruvboxMaterialDark: () => gb,
  gruvboxMaterialLight: () => yb,
  jettwaveDark: () => ub,
  jettwaveLight: () => rb,
  nightOwl: () => qh,
  nightOwlLight: () => Yh,
  oceanicNext: () => Xh,
  okaidia: () => Qh,
  oneDark: () => cb,
  oneLight: () => fb,
  palenight: () => Kh,
  shadesOfPurple: () => Jh,
  synthwave84: () => Ih,
  ultramin: () => eb,
  vsDark: () => Wd,
  vsLight: () => lb,
});
var Dh = {
    plain: { color: '#F8F8F2', backgroundColor: '#282A36' },
    styles: [
      { types: ['prolog', 'constant', 'builtin'], style: { color: 'rgb(189, 147, 249)' } },
      { types: ['inserted', 'function'], style: { color: 'rgb(80, 250, 123)' } },
      { types: ['deleted'], style: { color: 'rgb(255, 85, 85)' } },
      { types: ['changed'], style: { color: 'rgb(255, 184, 108)' } },
      { types: ['punctuation', 'symbol'], style: { color: 'rgb(248, 248, 242)' } },
      { types: ['string', 'char', 'tag', 'selector'], style: { color: 'rgb(255, 121, 198)' } },
      {
        types: ['keyword', 'variable'],
        style: { color: 'rgb(189, 147, 249)', fontStyle: 'italic' },
      },
      { types: ['comment'], style: { color: 'rgb(98, 114, 164)' } },
      { types: ['attr-name'], style: { color: 'rgb(241, 250, 140)' } },
    ],
  },
  jh = Dh,
  Rh = {
    plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
        style: { color: '#6c6783' },
      },
      { types: ['namespace'], style: { opacity: 0.7 } },
      { types: ['tag', 'operator', 'number'], style: { color: '#e09142' } },
      { types: ['property', 'function'], style: { color: '#9a86fd' } },
      { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#eeebff' } },
      { types: ['attr-name'], style: { color: '#c4b9fe' } },
      {
        types: [
          'boolean',
          'string',
          'entity',
          'url',
          'attr-value',
          'keyword',
          'control',
          'directive',
          'unit',
          'statement',
          'regex',
          'atrule',
          'placeholder',
          'variable',
        ],
        style: { color: '#ffcc99' },
      },
      { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
      { types: ['inserted'], style: { textDecorationLine: 'underline' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['important'], style: { color: '#c4b9fe' } },
    ],
  },
  Mh = Rh,
  kh = {
    plain: { backgroundColor: '#faf8f5', color: '#728fcb' },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
        style: { color: '#b6ad9a' },
      },
      { types: ['namespace'], style: { opacity: 0.7 } },
      { types: ['tag', 'operator', 'number'], style: { color: '#063289' } },
      { types: ['property', 'function'], style: { color: '#b29762' } },
      { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#2d2006' } },
      { types: ['attr-name'], style: { color: '#896724' } },
      {
        types: [
          'boolean',
          'string',
          'entity',
          'url',
          'attr-value',
          'keyword',
          'control',
          'directive',
          'unit',
          'statement',
          'regex',
          'atrule',
        ],
        style: { color: '#728fcb' },
      },
      { types: ['placeholder', 'variable'], style: { color: '#93abdc' } },
      { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
      { types: ['inserted'], style: { textDecorationLine: 'underline' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['important'], style: { color: '#896724' } },
    ],
  },
  Lh = kh,
  Uh = {
    plain: { color: '#393A34', backgroundColor: '#f6f8fa' },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: { color: '#999988', fontStyle: 'italic' },
      },
      { types: ['namespace'], style: { opacity: 0.7 } },
      { types: ['string', 'attr-value'], style: { color: '#e3116c' } },
      { types: ['punctuation', 'operator'], style: { color: '#393A34' } },
      {
        types: [
          'entity',
          'url',
          'symbol',
          'number',
          'boolean',
          'variable',
          'constant',
          'property',
          'regex',
          'inserted',
        ],
        style: { color: '#36acaa' },
      },
      { types: ['atrule', 'keyword', 'attr-name', 'selector'], style: { color: '#00a4db' } },
      { types: ['function', 'deleted', 'tag'], style: { color: '#d73a49' } },
      { types: ['function-variable'], style: { color: '#6f42c1' } },
      { types: ['tag', 'selector', 'keyword'], style: { color: '#00009f' } },
    ],
  },
  Bh = Uh,
  Hh = {
    plain: { color: '#d6deeb', backgroundColor: '#011627' },
    styles: [
      { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
      { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)', fontStyle: 'italic' } },
      {
        types: ['inserted', 'attr-name'],
        style: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' },
      },
      { types: ['comment'], style: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' } },
      { types: ['string', 'url'], style: { color: 'rgb(173, 219, 103)' } },
      { types: ['variable'], style: { color: 'rgb(214, 222, 235)' } },
      { types: ['number'], style: { color: 'rgb(247, 140, 108)' } },
      {
        types: ['builtin', 'char', 'constant', 'function'],
        style: { color: 'rgb(130, 170, 255)' },
      },
      { types: ['punctuation'], style: { color: 'rgb(199, 146, 234)' } },
      {
        types: ['selector', 'doctype'],
        style: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' },
      },
      { types: ['class-name'], style: { color: 'rgb(255, 203, 139)' } },
      { types: ['tag', 'operator', 'keyword'], style: { color: 'rgb(127, 219, 202)' } },
      { types: ['boolean'], style: { color: 'rgb(255, 88, 116)' } },
      { types: ['property'], style: { color: 'rgb(128, 203, 196)' } },
      { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
    ],
  },
  qh = Hh,
  Gh = {
    plain: { color: '#403f53', backgroundColor: '#FBFBFB' },
    styles: [
      { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
      { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)', fontStyle: 'italic' } },
      {
        types: ['inserted', 'attr-name'],
        style: { color: 'rgb(72, 118, 214)', fontStyle: 'italic' },
      },
      { types: ['comment'], style: { color: 'rgb(152, 159, 177)', fontStyle: 'italic' } },
      {
        types: ['string', 'builtin', 'char', 'constant', 'url'],
        style: { color: 'rgb(72, 118, 214)' },
      },
      { types: ['variable'], style: { color: 'rgb(201, 103, 101)' } },
      { types: ['number'], style: { color: 'rgb(170, 9, 130)' } },
      { types: ['punctuation'], style: { color: 'rgb(153, 76, 195)' } },
      {
        types: ['function', 'selector', 'doctype'],
        style: { color: 'rgb(153, 76, 195)', fontStyle: 'italic' },
      },
      { types: ['class-name'], style: { color: 'rgb(17, 17, 17)' } },
      { types: ['tag'], style: { color: 'rgb(153, 76, 195)' } },
      {
        types: ['operator', 'property', 'keyword', 'namespace'],
        style: { color: 'rgb(12, 150, 155)' },
      },
      { types: ['boolean'], style: { color: 'rgb(188, 84, 84)' } },
    ],
  },
  Yh = Gh,
  pt = {
    char: '#D8DEE9',
    comment: '#999999',
    keyword: '#c5a5c5',
    primitive: '#5a9bcf',
    string: '#8dc891',
    variable: '#d7deea',
    boolean: '#ff8b50',
    tag: '#fc929e',
    function: '#79b6f2',
    className: '#FAC863',
  },
  Zh = {
    plain: { backgroundColor: '#282c34', color: '#ffffff' },
    styles: [
      { types: ['attr-name'], style: { color: pt.keyword } },
      { types: ['attr-value'], style: { color: pt.string } },
      {
        types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata', 'shebang'],
        style: { color: pt.comment },
      },
      {
        types: ['property', 'number', 'function-name', 'constant', 'symbol', 'deleted'],
        style: { color: pt.primitive },
      },
      { types: ['boolean'], style: { color: pt.boolean } },
      { types: ['tag'], style: { color: pt.tag } },
      { types: ['string'], style: { color: pt.string } },
      { types: ['punctuation'], style: { color: pt.string } },
      { types: ['selector', 'char', 'builtin', 'inserted'], style: { color: pt.char } },
      { types: ['function'], style: { color: pt.function } },
      { types: ['operator', 'entity', 'url', 'variable'], style: { color: pt.variable } },
      { types: ['keyword'], style: { color: pt.keyword } },
      { types: ['atrule', 'class-name'], style: { color: pt.className } },
      { types: ['important'], style: { fontWeight: '400' } },
      { types: ['bold'], style: { fontWeight: 'bold' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['namespace'], style: { opacity: 0.7 } },
    ],
  },
  Xh = Zh,
  Vh = {
    plain: { color: '#f8f8f2', backgroundColor: '#272822' },
    styles: [
      { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
      { types: ['deleted'], style: { color: '#f92672', fontStyle: 'italic' } },
      { types: ['inserted'], style: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' } },
      { types: ['comment'], style: { color: '#8292a2', fontStyle: 'italic' } },
      { types: ['string', 'url'], style: { color: '#a6e22e' } },
      { types: ['variable'], style: { color: '#f8f8f2' } },
      { types: ['number'], style: { color: '#ae81ff' } },
      {
        types: ['builtin', 'char', 'constant', 'function', 'class-name'],
        style: { color: '#e6db74' },
      },
      { types: ['punctuation'], style: { color: '#f8f8f2' } },
      { types: ['selector', 'doctype'], style: { color: '#a6e22e', fontStyle: 'italic' } },
      { types: ['tag', 'operator', 'keyword'], style: { color: '#66d9ef' } },
      { types: ['boolean'], style: { color: '#ae81ff' } },
      { types: ['namespace'], style: { color: 'rgb(178, 204, 214)', opacity: 0.7 } },
      { types: ['tag', 'property'], style: { color: '#f92672' } },
      { types: ['attr-name'], style: { color: '#a6e22e !important' } },
      { types: ['doctype'], style: { color: '#8292a2' } },
      { types: ['rule'], style: { color: '#e6db74' } },
    ],
  },
  Qh = Vh,
  Fh = {
    plain: { color: '#bfc7d5', backgroundColor: '#292d3e' },
    styles: [
      { types: ['comment'], style: { color: 'rgb(105, 112, 152)', fontStyle: 'italic' } },
      { types: ['string', 'inserted'], style: { color: 'rgb(195, 232, 141)' } },
      { types: ['number'], style: { color: 'rgb(247, 140, 108)' } },
      {
        types: ['builtin', 'char', 'constant', 'function'],
        style: { color: 'rgb(130, 170, 255)' },
      },
      { types: ['punctuation', 'selector'], style: { color: 'rgb(199, 146, 234)' } },
      { types: ['variable'], style: { color: 'rgb(191, 199, 213)' } },
      { types: ['class-name', 'attr-name'], style: { color: 'rgb(255, 203, 107)' } },
      { types: ['tag', 'deleted'], style: { color: 'rgb(255, 85, 114)' } },
      { types: ['operator'], style: { color: 'rgb(137, 221, 255)' } },
      { types: ['boolean'], style: { color: 'rgb(255, 88, 116)' } },
      { types: ['keyword'], style: { fontStyle: 'italic' } },
      { types: ['doctype'], style: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' } },
      { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
      { types: ['url'], style: { color: 'rgb(221, 221, 221)' } },
    ],
  },
  Kh = Fh,
  $h = {
    plain: { color: '#9EFEFF', backgroundColor: '#2D2A55' },
    styles: [
      { types: ['changed'], style: { color: 'rgb(255, 238, 128)' } },
      { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)' } },
      { types: ['inserted'], style: { color: 'rgb(173, 219, 103)' } },
      { types: ['comment'], style: { color: 'rgb(179, 98, 255)', fontStyle: 'italic' } },
      { types: ['punctuation'], style: { color: 'rgb(255, 255, 255)' } },
      { types: ['constant'], style: { color: 'rgb(255, 98, 140)' } },
      { types: ['string', 'url'], style: { color: 'rgb(165, 255, 144)' } },
      { types: ['variable'], style: { color: 'rgb(255, 238, 128)' } },
      { types: ['number', 'boolean'], style: { color: 'rgb(255, 98, 140)' } },
      { types: ['attr-name'], style: { color: 'rgb(255, 180, 84)' } },
      {
        types: ['keyword', 'operator', 'property', 'namespace', 'tag', 'selector', 'doctype'],
        style: { color: 'rgb(255, 157, 0)' },
      },
      {
        types: ['builtin', 'char', 'constant', 'function', 'class-name'],
        style: { color: 'rgb(250, 208, 0)' },
      },
    ],
  },
  Jh = $h,
  Wh = {
    plain: {
      backgroundColor: 'linear-gradient(to bottom, #2a2139 75%, #34294f)',
      backgroundImage: '#34294f',
      color: '#f92aad',
      textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
    },
    styles: [
      {
        types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
        style: { color: '#495495', fontStyle: 'italic' },
      },
      { types: ['punctuation'], style: { color: '#ccc' } },
      {
        types: ['tag', 'attr-name', 'namespace', 'number', 'unit', 'hexcode', 'deleted'],
        style: { color: '#e2777a' },
      },
      {
        types: ['property', 'selector'],
        style: {
          color: '#72f1b8',
          textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475',
        },
      },
      { types: ['function-name'], style: { color: '#6196cc' } },
      {
        types: ['boolean', 'selector-id', 'function'],
        style: {
          color: '#fdfdfd',
          textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975',
        },
      },
      {
        types: ['class-name', 'maybe-class-name', 'builtin'],
        style: {
          color: '#fff5f6',
          textShadow: '0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75',
        },
      },
      {
        types: ['constant', 'symbol'],
        style: {
          color: '#f92aad',
          textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
        },
      },
      {
        types: ['important', 'atrule', 'keyword', 'selector-class'],
        style: {
          color: '#f4eee4',
          textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
        },
      },
      { types: ['string', 'char', 'attr-value', 'regex', 'variable'], style: { color: '#f87c32' } },
      { types: ['parameter'], style: { fontStyle: 'italic' } },
      { types: ['entity', 'url'], style: { color: '#67cdcc' } },
      { types: ['operator'], style: { color: 'ffffffee' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['entity'], style: { cursor: 'help' } },
      { types: ['inserted'], style: { color: 'green' } },
    ],
  },
  Ih = Wh,
  Ph = {
    plain: { color: '#282a2e', backgroundColor: '#ffffff' },
    styles: [
      { types: ['comment'], style: { color: 'rgb(197, 200, 198)' } },
      {
        types: ['string', 'number', 'builtin', 'variable'],
        style: { color: 'rgb(150, 152, 150)' },
      },
      {
        types: ['class-name', 'function', 'tag', 'attr-name'],
        style: { color: 'rgb(40, 42, 46)' },
      },
    ],
  },
  eb = Ph,
  tb = {
    plain: { color: '#9CDCFE', backgroundColor: '#1E1E1E' },
    styles: [
      { types: ['prolog'], style: { color: 'rgb(0, 0, 128)' } },
      { types: ['comment'], style: { color: 'rgb(106, 153, 85)' } },
      {
        types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
        style: { color: 'rgb(86, 156, 214)' },
      },
      { types: ['number', 'inserted'], style: { color: 'rgb(181, 206, 168)' } },
      { types: ['constant'], style: { color: 'rgb(100, 102, 149)' } },
      { types: ['attr-name', 'variable'], style: { color: 'rgb(156, 220, 254)' } },
      {
        types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
        style: { color: 'rgb(206, 145, 120)' },
      },
      { types: ['selector'], style: { color: 'rgb(215, 186, 125)' } },
      { types: ['tag'], style: { color: 'rgb(78, 201, 176)' } },
      { types: ['tag'], languages: ['markup'], style: { color: 'rgb(86, 156, 214)' } },
      { types: ['punctuation', 'operator'], style: { color: 'rgb(212, 212, 212)' } },
      { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
      { types: ['function'], style: { color: 'rgb(220, 220, 170)' } },
      { types: ['class-name'], style: { color: 'rgb(78, 201, 176)' } },
      { types: ['char'], style: { color: 'rgb(209, 105, 105)' } },
    ],
  },
  Wd = tb,
  ab = {
    plain: { color: '#000000', backgroundColor: '#ffffff' },
    styles: [
      { types: ['comment'], style: { color: 'rgb(0, 128, 0)' } },
      { types: ['builtin'], style: { color: 'rgb(0, 112, 193)' } },
      { types: ['number', 'variable', 'inserted'], style: { color: 'rgb(9, 134, 88)' } },
      { types: ['operator'], style: { color: 'rgb(0, 0, 0)' } },
      { types: ['constant', 'char'], style: { color: 'rgb(129, 31, 63)' } },
      { types: ['tag'], style: { color: 'rgb(128, 0, 0)' } },
      { types: ['attr-name'], style: { color: 'rgb(255, 0, 0)' } },
      { types: ['deleted', 'string'], style: { color: 'rgb(163, 21, 21)' } },
      { types: ['changed', 'punctuation'], style: { color: 'rgb(4, 81, 165)' } },
      { types: ['function', 'keyword'], style: { color: 'rgb(0, 0, 255)' } },
      { types: ['class-name'], style: { color: 'rgb(38, 127, 153)' } },
    ],
  },
  lb = ab,
  nb = {
    plain: { color: '#f8fafc', backgroundColor: '#011627' },
    styles: [
      { types: ['prolog'], style: { color: '#000080' } },
      { types: ['comment'], style: { color: '#6A9955' } },
      {
        types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
        style: { color: '#569CD6' },
      },
      { types: ['number', 'inserted'], style: { color: '#B5CEA8' } },
      { types: ['constant'], style: { color: '#f8fafc' } },
      { types: ['attr-name', 'variable'], style: { color: '#9CDCFE' } },
      {
        types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
        style: { color: '#cbd5e1' },
      },
      { types: ['selector'], style: { color: '#D7BA7D' } },
      { types: ['tag'], style: { color: '#0ea5e9' } },
      { types: ['tag'], languages: ['markup'], style: { color: '#0ea5e9' } },
      { types: ['punctuation', 'operator'], style: { color: '#D4D4D4' } },
      { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
      { types: ['function'], style: { color: '#7dd3fc' } },
      { types: ['class-name'], style: { color: '#0ea5e9' } },
      { types: ['char'], style: { color: '#D16969' } },
    ],
  },
  ub = nb,
  ib = {
    plain: { color: '#0f172a', backgroundColor: '#f1f5f9' },
    styles: [
      { types: ['prolog'], style: { color: '#000080' } },
      { types: ['comment'], style: { color: '#6A9955' } },
      {
        types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
        style: { color: '#0c4a6e' },
      },
      { types: ['number', 'inserted'], style: { color: '#B5CEA8' } },
      { types: ['constant'], style: { color: '#0f172a' } },
      { types: ['attr-name', 'variable'], style: { color: '#0c4a6e' } },
      {
        types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
        style: { color: '#64748b' },
      },
      { types: ['selector'], style: { color: '#D7BA7D' } },
      { types: ['tag'], style: { color: '#0ea5e9' } },
      { types: ['tag'], languages: ['markup'], style: { color: '#0ea5e9' } },
      { types: ['punctuation', 'operator'], style: { color: '#475569' } },
      { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
      { types: ['function'], style: { color: '#0e7490' } },
      { types: ['class-name'], style: { color: '#0ea5e9' } },
      { types: ['char'], style: { color: '#D16969' } },
    ],
  },
  rb = ib,
  sb = {
    plain: {
      backgroundColor: 'hsl(220, 13%, 18%)',
      color: 'hsl(220, 14%, 71%)',
      textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    },
    styles: [
      { types: ['comment', 'prolog', 'cdata'], style: { color: 'hsl(220, 10%, 40%)' } },
      { types: ['doctype', 'punctuation', 'entity'], style: { color: 'hsl(220, 14%, 71%)' } },
      {
        types: [
          'attr-name',
          'class-name',
          'maybe-class-name',
          'boolean',
          'constant',
          'number',
          'atrule',
        ],
        style: { color: 'hsl(29, 54%, 61%)' },
      },
      { types: ['keyword'], style: { color: 'hsl(286, 60%, 67%)' } },
      {
        types: ['property', 'tag', 'symbol', 'deleted', 'important'],
        style: { color: 'hsl(355, 65%, 65%)' },
      },
      {
        types: ['selector', 'string', 'char', 'builtin', 'inserted', 'regex', 'attr-value'],
        style: { color: 'hsl(95, 38%, 62%)' },
      },
      { types: ['variable', 'operator', 'function'], style: { color: 'hsl(207, 82%, 66%)' } },
      { types: ['url'], style: { color: 'hsl(187, 47%, 55%)' } },
      { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
      { types: ['inserted'], style: { textDecorationLine: 'underline' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['important'], style: { color: 'hsl(220, 14%, 71%)' } },
    ],
  },
  cb = sb,
  ob = {
    plain: { backgroundColor: 'hsl(230, 1%, 98%)', color: 'hsl(230, 8%, 24%)' },
    styles: [
      { types: ['comment', 'prolog', 'cdata'], style: { color: 'hsl(230, 4%, 64%)' } },
      { types: ['doctype', 'punctuation', 'entity'], style: { color: 'hsl(230, 8%, 24%)' } },
      {
        types: ['attr-name', 'class-name', 'boolean', 'constant', 'number', 'atrule'],
        style: { color: 'hsl(35, 99%, 36%)' },
      },
      { types: ['keyword'], style: { color: 'hsl(301, 63%, 40%)' } },
      {
        types: ['property', 'tag', 'symbol', 'deleted', 'important'],
        style: { color: 'hsl(5, 74%, 59%)' },
      },
      {
        types: [
          'selector',
          'string',
          'char',
          'builtin',
          'inserted',
          'regex',
          'attr-value',
          'punctuation',
        ],
        style: { color: 'hsl(119, 34%, 47%)' },
      },
      { types: ['variable', 'operator', 'function'], style: { color: 'hsl(221, 87%, 60%)' } },
      { types: ['url'], style: { color: 'hsl(198, 99%, 37%)' } },
      { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
      { types: ['inserted'], style: { textDecorationLine: 'underline' } },
      { types: ['italic'], style: { fontStyle: 'italic' } },
      { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
      { types: ['important'], style: { color: 'hsl(230, 8%, 24%)' } },
    ],
  },
  fb = ob,
  db = {
    plain: { color: '#ebdbb2', backgroundColor: '#292828' },
    styles: [
      {
        types: [
          'imports',
          'class-name',
          'maybe-class-name',
          'constant',
          'doctype',
          'builtin',
          'function',
        ],
        style: { color: '#d8a657' },
      },
      { types: ['property-access'], style: { color: '#7daea3' } },
      { types: ['tag'], style: { color: '#e78a4e' } },
      { types: ['attr-name', 'char', 'url', 'regex'], style: { color: '#a9b665' } },
      { types: ['attr-value', 'string'], style: { color: '#89b482' } },
      {
        types: ['comment', 'prolog', 'cdata', 'operator', 'inserted'],
        style: { color: '#a89984' },
      },
      {
        types: [
          'delimiter',
          'boolean',
          'keyword',
          'selector',
          'important',
          'atrule',
          'property',
          'variable',
          'deleted',
        ],
        style: { color: '#ea6962' },
      },
      { types: ['entity', 'number', 'symbol'], style: { color: '#d3869b' } },
    ],
  },
  gb = db,
  pb = {
    plain: { color: '#654735', backgroundColor: '#f9f5d7' },
    styles: [
      {
        types: [
          'delimiter',
          'boolean',
          'keyword',
          'selector',
          'important',
          'atrule',
          'property',
          'variable',
          'deleted',
        ],
        style: { color: '#af2528' },
      },
      {
        types: ['imports', 'class-name', 'maybe-class-name', 'constant', 'doctype', 'builtin'],
        style: { color: '#b4730e' },
      },
      { types: ['string', 'attr-value'], style: { color: '#477a5b' } },
      { types: ['property-access'], style: { color: '#266b79' } },
      { types: ['function', 'attr-name', 'char', 'url'], style: { color: '#72761e' } },
      { types: ['tag'], style: { color: '#b94c07' } },
      {
        types: ['comment', 'prolog', 'cdata', 'operator', 'inserted'],
        style: { color: '#a89984' },
      },
      { types: ['entity', 'number', 'symbol'], style: { color: '#924f79' } },
    ],
  },
  yb = pb,
  hb = (i) =>
    te.useCallback(
      (f) => {
        var y = f,
          { className: c, style: x, line: m } = y,
          j = Jd(y, ['className', 'style', 'line']);
        const L = Xu(Lt({}, j), { className: Fd('token-line', c) });
        return (
          typeof i == 'object' && 'plain' in i && (L.style = i.plain),
          typeof x == 'object' && (L.style = Lt(Lt({}, L.style || {}), x)),
          L
        );
      },
      [i]
    ),
  bb = (i) => {
    const f = te.useCallback(
      ({ types: y, empty: c }) => {
        if (i != null) {
          {
            if (y.length === 1 && y[0] === 'plain')
              return c != null ? { display: 'inline-block' } : void 0;
            if (y.length === 1 && c != null) return i[y[0]];
          }
          return Object.assign(c != null ? { display: 'inline-block' } : {}, ...y.map((x) => i[x]));
        }
      },
      [i]
    );
    return te.useCallback(
      (y) => {
        var c = y,
          { token: x, className: m, style: j } = c,
          L = Jd(c, ['token', 'className', 'style']);
        const _ = Xu(Lt({}, L), {
          className: Fd('token', ...x.types, m),
          children: x.content,
          style: f(x),
        });
        return (j != null && (_.style = Lt(Lt({}, _.style || {}), j)), _);
      },
      [f]
    );
  },
  mb = /\r\n|\r|\n/,
  Ed = (i) => {
    i.length === 0 ?
      i.push({
        types: ['plain'],
        content: `
`,
        empty: !0,
      })
    : i.length === 1 &&
      i[0].content === '' &&
      ((i[0].content = `
`),
      (i[0].empty = !0));
  },
  Ad = (i, f) => {
    const y = i.length;
    return y > 0 && i[y - 1] === f ? i : i.concat(f);
  },
  vb = (i) => {
    const f = [[]],
      y = [i],
      c = [0],
      x = [i.length];
    let m = 0,
      j = 0,
      L = [];
    const _ = [L];
    for (; j > -1; ) {
      for (; (m = c[j]++) < x[j]; ) {
        let g,
          h = f[j];
        const G = y[j][m];
        if (
          (typeof G == 'string' ?
            ((h = j > 0 ? h : ['plain']), (g = G))
          : ((h = Ad(h, G.type)), G.alias && (h = Ad(h, G.alias)), (g = G.content)),
          typeof g != 'string')
        ) {
          (j++, f.push(h), y.push(g), c.push(0), x.push(g.length));
          continue;
        }
        const Q = g.split(mb),
          S = Q.length;
        L.push({ types: h, content: Q[0] });
        for (let N = 1; N < S; N++) (Ed(L), _.push((L = [])), L.push({ types: h, content: Q[N] }));
      }
      (j--, f.pop(), y.pop(), c.pop(), x.pop());
    }
    return (Ed(L), _);
  },
  _d = vb,
  xb = ({ prism: i, code: f, grammar: y, language: c }) =>
    te.useMemo(() => {
      if (y == null) return _d([f]);
      const x = { code: f, grammar: y, language: c, tokens: [] };
      return (
        i.hooks.run('before-tokenize', x),
        (x.tokens = i.tokenize(f, y)),
        i.hooks.run('after-tokenize', x),
        _d(x.tokens)
      );
    }, [f, y, c, i]),
  Sb = (i, f) => {
    const { plain: y } = i,
      c = i.styles.reduce((x, m) => {
        const { languages: j, style: L } = m;
        return (
          (j && !j.includes(f)) ||
            m.types.forEach((_) => {
              const g = Lt(Lt({}, x[_]), L);
              x[_] = g;
            }),
          x
        );
      }, {});
    return ((c.root = y), (c.plain = Xu(Lt({}, y), { backgroundColor: void 0 })), c);
  },
  Eb = Sb,
  Ab = ({ children: i, language: f, code: y, theme: c, prism: x }) => {
    const m = f.toLowerCase(),
      j = Eb(c, m),
      L = hb(j),
      _ = bb(j),
      g = x.languages[m],
      h = xb({ prism: x, language: m, code: y, grammar: g });
    return i({
      tokens: h,
      className: `prism-code language-${m}`,
      style: j != null ? j.root : {},
      getLineProps: L,
      getTokenProps: _,
    });
  },
  _b = (i) =>
    te.createElement(
      Ab,
      Xu(Lt({}, i), {
        prism: i.prism || B,
        theme: i.theme || Wd,
        code: i.code,
        language: i.language,
      })
    );
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/ const Tb = 'modulepreload',
  Nb = function (i) {
    return '/' + i;
  },
  Td = {},
  Nt = function (f, y, c) {
    let x = Promise.resolve();
    if (y && y.length > 0) {
      let _ = function (g) {
        return Promise.all(
          g.map((h) =>
            Promise.resolve(h).then(
              (O) => ({ status: 'fulfilled', value: O }),
              (O) => ({ status: 'rejected', reason: O })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const j = document.querySelector('meta[property=csp-nonce]'),
        L = j?.nonce || j?.getAttribute('nonce');
      x = _(
        y.map((g) => {
          if (((g = Nb(g)), g in Td)) return;
          Td[g] = !0;
          const h = g.endsWith('.css'),
            O = h ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${O}`)) return;
          const G = document.createElement('link');
          if (
            ((G.rel = h ? 'stylesheet' : Tb),
            h || (G.as = 'script'),
            (G.crossOrigin = ''),
            (G.href = g),
            L && G.setAttribute('nonce', L),
            document.head.appendChild(G),
            h)
          )
            return new Promise((Q, S) => {
              (G.addEventListener('load', Q),
                G.addEventListener('error', () => S(new Error(`Unable to preload CSS for ${g}`))));
            });
        })
      );
    }
    function m(j) {
      const L = new Event('vite:preloadError', { cancelable: !0 });
      if (((L.payload = j), window.dispatchEvent(L), !L.defaultPrevented)) throw j;
    }
    return x.then((j) => {
      for (const L of j || []) L.status === 'rejected' && m(L.reason);
      return f().catch(m);
    });
  },
  qu = {};
function Id(i) {
  if (!qu[i]) {
    const y = {
      bash: () => Nt(() => import('./prism-bash-DTkDXsAh.js'), []),
      sh: () => Nt(() => import('./prism-bash-DTkDXsAh.js'), []),
      shell: () => Nt(() => import('./prism-bash-DTkDXsAh.js'), []),
      php: async () => (
        await Nt(() => import('./prism-markup-templating-Ct1xsyfA.js'), []),
        Nt(() => import('./prism-php-CBv2YAOW.js').then((c) => c.p), [])
      ),
      sql: () => Nt(() => import('./prism-sql-AgAyy5H_.js'), []),
      ruby: () => Nt(() => import('./prism-ruby-B_doAHxB.js').then((c) => c.p), []),
      java: () => Nt(() => import('./prism-java-B5XKK-Wk.js').then((c) => c.p), []),
      scala: async () => (await Id('java'), Nt(() => import('./prism-scala-BjNo2HkN.js'), [])),
      solidity: () => Nt(() => import('./prism-solidity-BS8eqhWx.js').then((c) => c.p), []),
      vim: () => Nt(() => import('./prism-vim-uciLQ2PQ.js'), []),
      dart: () => Nt(() => import('./prism-dart-MjriiaMt.js'), []),
    }[i];
    if (!y)
      return (
        console.warn(`No loader available for language: ${i}`),
        Promise.reject(new Error(`Unsupported language: ${i}`))
      );
    qu[i] = y()
      .then(() => {})
      .catch((c) => {
        throw (delete qu[i], console.warn(`Failed to load language: ${i}`, c), c);
      });
  }
  return qu[i];
}
typeof global < 'u' ? (global.Prism = B) : typeof window < 'u' && (window.Prism = B);
const Nd = [
  'markup',
  'html',
  'xml',
  'svg',
  'javascript',
  'js',
  'typescript',
  'ts',
  'jsx',
  'tsx',
  'css',
  'c',
  'cpp',
  'swift',
  'kotlin',
  'objectivec',
  'reason',
  'rust',
  'go',
  'graphql',
  'yaml',
  'yml',
  'json',
  'markdown',
  'md',
  'python',
  'py',
];
function wb(i, f) {
  const [y, c] = te.useState(() => Nd.includes(f) || !!B.languages[f]);
  return (
    te.useEffect(() => {
      if (!y) {
        if (Nd.includes(f)) {
          c(!0);
          return;
        }
        Id(f)
          .then(() => {
            c(!0);
          })
          .catch(() => {
            c(!1);
          });
      }
    }, [f, y]),
    { ready: y, actualLang: y ? f : 'text' }
  );
}
const wd = [
    { id: 'github', label: 'GitHub Light' },
    { id: 'vsLight', label: 'VS Light' },
    { id: 'oneLight', label: 'One Light' },
    { id: 'gruvboxMaterialLight', label: 'Gruvbox Material Light' },
    { id: 'nightOwlLight', label: 'Night Owl Light' },
  ],
  Od = [
    { id: 'vsDark', label: 'VS Dark' },
    { id: 'oneDark', label: 'One Dark' },
    { id: 'gruvboxMaterialDark', label: 'Gruvbox Material Dark' },
    { id: 'nightOwl', label: 'Night Owl' },
    { id: 'dracula', label: 'Dracula' },
    { id: 'okaidia', label: 'Okaidia' },
  ];
function Ob(i) {
  return {
    ...i,
    styles: i.styles.map((f) => ({
      ...f,
      style: { ...f.style, background: void 0, backgroundColor: void 0 },
    })),
  };
}
function Cb(i) {
  let f;
  switch (i) {
    case 'github':
      f = yt.github;
      break;
    case 'vsLight':
      f = yt.vsLight;
      break;
    case 'oneLight':
      f = yt.oneLight;
      break;
    case 'gruvboxMaterialLight':
      f = yt.gruvboxMaterialLight;
      break;
    case 'nightOwlLight':
      f = yt.nightOwlLight;
      break;
    case 'vsDark':
      f = yt.vsDark;
      break;
    case 'oneDark':
      f = yt.oneDark;
      break;
    case 'gruvboxMaterialDark':
      f = yt.gruvboxMaterialDark;
      break;
    case 'nightOwl':
      f = yt.nightOwl;
      break;
    case 'dracula':
      f = yt.dracula;
      break;
    case 'okaidia':
      f = yt.okaidia;
      break;
    default:
      f = yt.vsDark;
  }
  return Ob(f);
}
function zb(i) {
  const f = mh(i).toLowerCase(),
    y = Zd(i),
    c = {
      dockerfile: 'docker',
      makefile: 'makefile',
      '.gitignore': 'git',
      '.env': 'bash',
      '.bashrc': 'bash',
      '.zshrc': 'bash',
      '.bash_profile': 'bash',
      '.profile': 'bash',
    };
  return c[f] ?
      c[f]
    : {
        ts: 'typescript',
        tsx: 'tsx',
        js: 'javascript',
        jsx: 'jsx',
        json: 'json',
        css: 'css',
        scss: 'css',
        html: 'html',
        sh: 'bash',
        bash: 'bash',
        zsh: 'bash',
        fish: 'bash',
        yml: 'yaml',
        yaml: 'yaml',
        md: 'markdown',
        py: 'python',
        rb: 'ruby',
        go: 'go',
        rs: 'rust',
        java: 'java',
        cpp: 'cpp',
        c: 'c',
        php: 'php',
        sql: 'sql',
        xml: 'xml',
        swift: 'swift',
        kt: 'kotlin',
        scala: 'scala',
        r: 'r',
        lua: 'lua',
        perl: 'perl',
        dockerfile: 'docker',
        makefile: 'makefile',
        gitignore: 'git',
        env: 'bash',
        conf: 'nginx',
        ini: 'ini',
        toml: 'toml',
        sol: 'solidity',
        vim: 'vim',
        dart: 'dart',
      }[y || ''] || 'text';
}
let Pd = '';
function Db(i) {
  Pd = i;
}
function ds({ code: i, language: f, className: y, syntaxTheme: c = 'vsDark' }) {
  const x = f || zb(Pd),
    { actualLang: m } = wb(i, x),
    j = Cb(c);
  return o.jsx(_b, {
    code: i,
    language: m,
    theme: j,
    prism: B,
    children: ({ style: L, tokens: _, getLineProps: g, getTokenProps: h }) =>
      o.jsx('span', {
        className: y,
        style: { ...L, background: 'transparent', backgroundColor: 'transparent' },
        children: _.map((O, G) =>
          o.jsx(
            'span',
            {
              ...g({ line: O }),
              children: O.map((Q, S) => o.jsx('span', { ...h({ token: Q }) }, S)),
            },
            G
          )
        ),
      }),
  });
}
function jb({
  chunk: i,
  comments: f,
  onAddComment: y,
  onGeneratePrompt: c,
  onRemoveComment: x,
  onUpdateComment: m,
  syntaxTheme: j,
}) {
  const [L, _] = te.useState(null),
    [g, h] = te.useState(null),
    O = (v) => {
      h(g === v ? null : v);
    },
    G = () => {
      h(null);
    },
    Q = async (v) => {
      g !== null && (await y(g, v), h(null));
    },
    S = (v) => f.filter((X) => (Array.isArray(X.line) ? X.line[1] === v : X.line === v)),
    N = (v) =>
      v.oldLine?.type === 'delete' && v.newLine?.type === 'add' ?
        v.newLineNumber ?
          'right'
        : 'left'
      : v.oldLine?.type === 'delete' ? 'left'
      : v.newLine?.type === 'add' ? 'right'
      : 'full',
    R = (v, X) => {
      if (!g) return '';
      const F = Array.isArray(g) ? g[0] : g,
        Y = Array.isArray(g) ? g[1] : g;
      return (
          (v === 'old' &&
            X.oldLine?.type === 'delete' &&
            X.oldLineNumber &&
            X.oldLineNumber >= F &&
            X.oldLineNumber <= Y) ||
            (v === 'new' &&
              X.newLine?.type === 'add' &&
              X.newLineNumber &&
              X.newLineNumber >= F &&
              X.newLineNumber <= Y)
        ) ?
          'after:bg-diff-selected-bg after:absolute after:inset-0 after:border-l-5 after:border-l-diff-selected-border'
        : '';
    },
    z = ((v) => {
      const X = [];
      let F = i.oldStart,
        Y = i.newStart,
        W = 0;
      for (; W < v.length; ) {
        const ae = v[W];
        if (!ae) {
          W++;
          continue;
        }
        if (ae.type === 'normal')
          (X.push({ oldLine: ae, newLine: { ...ae }, oldLineNumber: F, newLineNumber: Y }),
            F++,
            Y++,
            W++);
        else if (ae.type === 'delete') {
          let ue = W + 1;
          for (; ue < v.length && v[ue]?.type === 'delete'; ) ue++;
          const Ce = v.slice(W, ue),
            Ne = [];
          for (; ue < v.length && v[ue]?.type === 'add'; ) {
            const je = v[ue];
            (je && Ne.push(je), ue++);
          }
          const be = Math.max(Ce.length, Ne.length);
          for (let je = 0; je < be; je++) {
            const ve = Ce[je],
              pe = Ne[je];
            X.push({
              oldLine: ve,
              newLine: pe,
              oldLineNumber: ve ? F + je : void 0,
              newLineNumber: pe ? Y + je : void 0,
            });
          }
          ((F += Ce.length), (Y += Ne.length), (W = ue));
        } else ae.type === 'add' && (X.push({ newLine: ae, newLineNumber: Y }), Y++, W++);
      }
      return X;
    })(i.lines);
  return o.jsx('div', {
    className: 'bg-github-bg-primary border border-github-border rounded-md overflow-hidden',
    children: o.jsx('table', {
      className: 'w-full border-collapse font-mono text-xs leading-5',
      children: o.jsx('tbody', {
        children: z.map((v, X) => {
          const F =
            v.newLineNumber ? S(v.newLineNumber)
            : v.oldLineNumber ? S(v.oldLineNumber)
            : [];
          return o.jsxs(
            ps.Fragment,
            {
              children: [
                o.jsxs('tr', {
                  className: 'group',
                  children: [
                    o.jsx('td', {
                      className:
                        'w-[60px] px-2 text-right text-github-text-muted bg-github-bg-secondary border-r border-github-border select-none align-top',
                      children: v.oldLineNumber || '',
                    }),
                    o.jsx('td', {
                      className: `w-1/2 p-0 align-top border-r border-github-border relative ${
                        v.oldLine?.type === 'delete' ? 'bg-diff-deletion-bg cursor-pointer'
                        : v.oldLine?.type === 'normal' ? 'bg-transparent'
                        : 'bg-github-bg-secondary'
                      } ${R('old', v)}`,
                      onMouseDown: () =>
                        v.oldLine?.type === 'delete' && v.oldLineNumber && _(v.oldLineNumber),
                      onMouseUp: () => {
                        if (!(v.oldLine?.type !== 'delete' || v.oldLineNumber === void 0)) {
                          if (!L || L === v.oldLineNumber) {
                            (O(v.oldLineNumber), _(null));
                            return;
                          }
                          (O([L, v.oldLineNumber]), _(null));
                        }
                      },
                      title:
                        v.oldLine?.type === 'delete' && v.oldLineNumber ?
                          'Click to add comment'
                        : '',
                      children:
                        v.oldLine &&
                        o.jsx('div', {
                          className: 'flex items-center relative min-h-[20px] px-3',
                          children: o.jsx(ds, {
                            code: v.oldLine.content,
                            className:
                              'flex-1 text-github-text-primary whitespace-pre-wrap break-all overflow-wrap-break-word [&_pre]:m-0 [&_pre]:p-0 [&_pre]:!bg-transparent [&_pre]:font-inherit [&_pre]:text-inherit [&_pre]:leading-inherit [&_code]:!bg-transparent [&_code]:font-inherit [&_code]:text-inherit [&_code]:leading-inherit',
                            syntaxTheme: j,
                          }),
                        }),
                    }),
                    o.jsx('td', {
                      className:
                        'w-[60px] px-2 text-right text-github-text-muted bg-github-bg-secondary border-r border-github-border select-none align-top',
                      children: v.newLineNumber || '',
                    }),
                    o.jsx('td', {
                      className: `w-1/2 p-0 align-top relative ${
                        v.newLine?.type === 'add' ? 'bg-diff-addition-bg cursor-pointer'
                        : v.newLine?.type === 'normal' ? 'bg-transparent cursor-pointer'
                        : 'bg-github-bg-secondary'
                      } ${R('new', v)}`,
                      onMouseDown: () =>
                        (v.newLine?.type === 'add' || v.newLine?.type === 'normal') &&
                        v.newLineNumber &&
                        _(v.newLineNumber),
                      onMouseUp: () => {
                        if (
                          !(
                            (v.newLine?.type !== 'add' && v.newLine?.type !== 'normal') ||
                            v.newLineNumber === void 0
                          )
                        ) {
                          if (!L || L === v.newLineNumber) {
                            (O(v.newLineNumber), _(null));
                            return;
                          }
                          (O([L, v.newLineNumber]), _(null));
                        }
                      },
                      title:
                        (
                          (v.newLine?.type === 'add' || v.newLine?.type === 'normal') &&
                          v.newLineNumber
                        ) ?
                          'Click to add comment'
                        : '',
                      children:
                        v.newLine &&
                        o.jsx('div', {
                          className: 'flex items-center relative min-h-[20px] px-3',
                          children: o.jsx(ds, {
                            code: v.newLine.content,
                            className:
                              'flex-1 text-github-text-primary whitespace-pre-wrap break-all overflow-wrap-break-word [&_pre]:m-0 [&_pre]:p-0 [&_pre]:!bg-transparent [&_pre]:font-inherit [&_pre]:text-inherit [&_pre]:leading-inherit [&_code]:!bg-transparent [&_code]:font-inherit [&_code]:text-inherit [&_code]:leading-inherit',
                            syntaxTheme: j,
                          }),
                        }),
                    }),
                  ],
                }),
                F.length > 0 &&
                  o.jsx('tr', {
                    className: 'bg-github-bg-secondary',
                    children: o.jsx('td', {
                      colSpan: 4,
                      className: 'p-0 border-t border-github-border',
                      children: F.map((Y) => {
                        const W = N(v);
                        return o.jsx(
                          'div',
                          {
                            className: `flex ${
                              W === 'left' ? 'justify-start'
                              : W === 'right' ? 'justify-end'
                              : 'justify-center'
                            }`,
                            children: o.jsx('div', {
                              className: `${W === 'full' ? 'w-full' : 'w-1/2'}`,
                              children: o.jsx(Vd, {
                                comment: Y,
                                onGeneratePrompt: c,
                                onRemoveComment: x,
                                onUpdateComment: m,
                              }),
                            }),
                          },
                          Y.id
                        );
                      }),
                    }),
                  }),
                g &&
                  ((g === v.oldLineNumber && v.oldLine?.type === 'delete') ||
                    (g === v.newLineNumber &&
                      (v.newLine?.type === 'add' || v.newLine?.type === 'normal')) ||
                    (Array.isArray(g) && (g[1] === v.newLineNumber || g[1] === v.oldLineNumber))) &&
                  o.jsx('tr', {
                    className: 'bg-github-bg-secondary',
                    children: o.jsx('td', {
                      colSpan: 4,
                      className: 'p-0 border-t border-github-border',
                      children: o.jsx('div', {
                        className: `flex ${
                          N(v) === 'left' ? 'justify-start'
                          : N(v) === 'right' ? 'justify-end'
                          : 'justify-center'
                        }`,
                        children: o.jsx('div', {
                          className: `${N(v) === 'full' ? 'w-full' : 'w-1/2'}`,
                          children: o.jsx(Xd, { onSubmit: Q, onCancel: G }),
                        }),
                      }),
                    }),
                  }),
              ],
            },
            X
          );
        }),
      }),
    }),
  });
}
function Rb({
  chunk: i,
  comments: f,
  onAddComment: y,
  onGeneratePrompt: c,
  onRemoveComment: x,
  onUpdateComment: m,
  mode: j = 'inline',
  syntaxTheme: L,
}) {
  const [_, g] = te.useState(null),
    [h, O] = te.useState(null),
    [G, Q] = te.useState(null),
    S = (Y) => {
      switch (Y.type) {
        case 'add':
          return 'bg-diff-addition-bg';
        case 'delete':
          return 'bg-diff-deletion-bg';
        default:
          return 'bg-transparent';
      }
    },
    N = (Y) => {
      switch (Y.type) {
        case 'add':
          return '+';
        case 'delete':
          return '-';
        default:
          return ' ';
      }
    },
    R = (Y, W) => {
      h === Y ? (O(null), Q(null)) : (O(Y), Q(W || null));
    },
    E = () => {
      (O(null), Q(null));
    },
    z = async (Y) => {
      h !== null && (await y(h, Y, G || void 0), O(null), Q(null));
    },
    v = (Y) => f.filter((W) => (Array.isArray(W.line) ? W.line[1] === Y : W.line === Y)),
    X = (Y) => {
      if (j === 'inline') return 'full';
      switch (Y.type) {
        case 'delete':
          return 'left';
        case 'add':
          return 'right';
        default:
          return 'full';
      }
    },
    F = (Y) => {
      if (!h || !Y) return '';
      const W = Array.isArray(h) ? h[0] : h,
        ae = Array.isArray(h) ? h[1] : h;
      return Y >= W && Y <= ae ?
          'after:bg-diff-selected-bg after:absolute after:inset-0 after:border-l-5 after:border-l-diff-selected-border'
        : '';
    };
  return j === 'side-by-side' ?
      o.jsx(jb, {
        chunk: i,
        comments: f,
        onAddComment: y,
        onGeneratePrompt: c,
        onRemoveComment: x,
        onUpdateComment: m,
        syntaxTheme: L,
      })
    : o.jsx('div', {
        className: 'bg-github-bg-primary',
        children: o.jsx('table', {
          className: 'w-full border-collapse font-mono text-xs leading-5',
          children: o.jsx('tbody', {
            children: i.lines.map((Y, W) => {
              const ae = v(Y.newLineNumber || Y.oldLineNumber || 0);
              return o.jsxs(
                ps.Fragment,
                {
                  children: [
                    o.jsxs('tr', {
                      className: `cursor-pointer group ${S(Y)} relative ${F(Y.newLineNumber || Y.oldLineNumber)}`,
                      onMouseDown: () => {
                        const ue = Y.newLineNumber || Y.oldLineNumber;
                        ue && g(ue);
                      },
                      onMouseUp: () => {
                        const ue = Y.newLineNumber || Y.oldLineNumber;
                        if (ue) {
                          if (!_ || _ === ue) {
                            (R(ue, Y.content), g(null));
                            return;
                          }
                          (R([_, ue]), g(null));
                        }
                      },
                      title: 'Click to add comment',
                      children: [
                        o.jsx('td', {
                          className:
                            'w-[50px] px-2 text-right text-github-text-muted bg-github-bg-secondary border-r border-github-border select-none align-top',
                          children: Y.oldLineNumber || '',
                        }),
                        o.jsx('td', {
                          className:
                            'w-[50px] px-2 text-right text-github-text-muted bg-github-bg-secondary border-r border-github-border select-none align-top',
                          children: Y.newLineNumber || '',
                        }),
                        o.jsx('td', {
                          className: 'p-0 w-full relative align-top',
                          children: o.jsxs('div', {
                            className: 'flex items-center relative min-h-[20px]',
                            children: [
                              o.jsx('span', {
                                className: `w-5 text-center text-github-text-muted flex-shrink-0 bg-github-bg-secondary border-r border-github-border ${
                                  Y.type === 'add' ? 'text-github-accent bg-diff-addition-bg'
                                  : Y.type === 'delete' ? 'text-github-danger bg-diff-deletion-bg'
                                  : ''
                                }`,
                                children: N(Y),
                              }),
                              o.jsx(ds, {
                                code: Y.content,
                                className:
                                  'flex-1 px-3 text-github-text-primary whitespace-pre-wrap break-all overflow-wrap-break-word [&_pre]:m-0 [&_pre]:p-0 [&_pre]:!bg-transparent [&_pre]:font-inherit [&_pre]:text-inherit [&_pre]:leading-inherit [&_code]:!bg-transparent [&_code]:font-inherit [&_code]:text-inherit [&_code]:leading-inherit',
                                syntaxTheme: L,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    ae.map((ue) => {
                      const Ce = X(Y);
                      return o.jsx(
                        'tr',
                        {
                          className: 'bg-github-bg-secondary',
                          children: o.jsx('td', {
                            colSpan: 3,
                            className: 'p-0 border-t border-github-border',
                            children: o.jsx('div', {
                              className: `flex ${
                                Ce === 'left' ? 'justify-start'
                                : Ce === 'right' ? 'justify-end'
                                : 'justify-center'
                              }`,
                              children: o.jsx('div', {
                                className: `${Ce === 'full' ? 'w-full' : 'w-1/2'}`,
                                children: o.jsx(Vd, {
                                  comment: ue,
                                  onGeneratePrompt: c,
                                  onRemoveComment: x,
                                  onUpdateComment: m,
                                }),
                              }),
                            }),
                          }),
                        },
                        ue.id
                      );
                    }),
                    h &&
                      (h === (Y.newLineNumber || Y.oldLineNumber) ||
                        (Array.isArray(h) && h[1] === (Y.newLineNumber || Y.oldLineNumber))) &&
                      o.jsx('tr', {
                        className: 'bg-[var(--bg-secondary)]',
                        children: o.jsx('td', {
                          colSpan: 3,
                          className: 'p-0 border-t border-[var(--border-muted)]',
                          children: o.jsx('div', {
                            className: `flex ${
                              X(Y) === 'left' ? 'justify-start'
                              : X(Y) === 'right' ? 'justify-end'
                              : 'justify-center'
                            }`,
                            children: o.jsx('div', {
                              className: `${X(Y) === 'full' ? 'w-full' : 'w-1/2'}`,
                              children: o.jsx(Xd, { onSubmit: z, onCancel: E }),
                            }),
                          }),
                        }),
                      }),
                  ],
                },
                W
              );
            }),
          }),
        }),
      });
}
function Mb({ file: i, mode: f = 'inline', baseCommitish: y, targetCommitish: c }) {
  const x = i.status === 'deleted',
    m = i.status === 'added',
    j = i.status === 'modified' || i.status === 'renamed',
    L = y || 'HEAD~1',
    _ = c || 'HEAD',
    [g, h] = te.useState({}),
    [O, G] = te.useState({}),
    Q = async (E, z) => {
      try {
        const v = E.naturalWidth,
          X = E.naturalHeight,
          W = (await (await fetch(E.src)).blob()).size;
        z({ width: v, height: X, size: W });
      } catch (v) {
        console.error('Failed to get image info:', v);
      }
    },
    S = (E) =>
      E ?
        E < 1024 ? `${E} B`
        : E < 1024 * 1024 ? `${(E / 1024).toFixed(1)} KB`
        : `${(E / (1024 * 1024)).toFixed(1)} MB`
      : '',
    N = (E) => (!E.width || !E.height ? '' : `W: ${E.width}px | H: ${E.height}px`),
    R = {
      backgroundImage: `
      linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%),
      linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%)
    `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 10px 10px',
      backgroundColor: 'white',
    };
  return (
    x ?
      o.jsx('div', {
        className: 'bg-github-bg-primary p-4',
        children: o.jsxs('div', {
          className: 'text-center',
          children: [
            o.jsx('div', {
              className: 'mb-2',
              children: o.jsx('span', {
                className: 'text-github-danger font-medium',
                children: 'Deleted Image',
              }),
            }),
            o.jsxs('div', {
              className:
                'inline-block border border-github-border rounded-md p-4 bg-github-bg-secondary',
              children: [
                o.jsx('div', {
                  className: 'text-github-text-muted mb-2',
                  style: { fontSize: '14px' },
                  children: 'Previous version:',
                }),
                o.jsx('img', {
                  src: `/api/blob/${i.oldPath || i.path}?ref=${L}`,
                  alt: `Previous version of ${i.oldPath || i.path}`,
                  className: 'max-w-full max-h-96 border border-github-border rounded mx-auto',
                  style: R,
                  onLoad: (E) => Q(E.currentTarget, h),
                  onError: (E) => {
                    const z = E.target;
                    ((z.style.display = 'none'), z.nextElementSibling?.classList.remove('hidden'));
                  },
                }),
                o.jsx('div', {
                  className: 'hidden text-github-text-muted text-sm mt-2',
                  children: 'Image could not be loaded',
                }),
                (g.width || g.size) &&
                  o.jsxs('div', {
                    className: 'text-github-text-muted mt-2',
                    style: { fontSize: '14px' },
                    children: [N(g), N(g) && S(g.size) && ' | ', S(g.size)],
                  }),
              ],
            }),
          ],
        }),
      })
    : m ?
      o.jsx('div', {
        className: 'bg-github-bg-primary p-4',
        children: o.jsxs('div', {
          className: 'text-center',
          children: [
            o.jsx('div', {
              className: 'mb-2',
              children: o.jsx('span', {
                className: 'text-github-accent font-medium',
                children: 'Added Image',
              }),
            }),
            o.jsxs('div', {
              className:
                'inline-block border border-github-border rounded-md p-4 bg-github-bg-secondary',
              children: [
                o.jsx('div', {
                  className: 'text-github-text-muted mb-2',
                  style: { fontSize: '14px' },
                  children: 'New file:',
                }),
                o.jsx('img', {
                  src: `/api/blob/${i.path}?ref=${_}`,
                  alt: `New image ${i.path}`,
                  className: 'max-w-full max-h-96 border border-github-border rounded mx-auto',
                  style: R,
                  onLoad: (E) => Q(E.currentTarget, G),
                  onError: (E) => {
                    const z = E.target;
                    ((z.style.display = 'none'), z.nextElementSibling?.classList.remove('hidden'));
                  },
                }),
                o.jsx('div', {
                  className: 'hidden text-github-text-muted text-sm mt-2',
                  children: 'Image could not be loaded',
                }),
                (O.width || O.size) &&
                  o.jsxs('div', {
                    className: 'text-github-text-muted mt-2',
                    style: { fontSize: '14px' },
                    children: [N(O), N(O) && S(O.size) && ' | ', S(O.size)],
                  }),
              ],
            }),
          ],
        }),
      })
    : j ?
      f === 'side-by-side' ?
        o.jsxs('div', {
          className: 'bg-github-bg-primary p-4',
          children: [
            o.jsx('div', {
              className: 'text-center mb-4',
              children: o.jsx('span', {
                className: 'text-github-text-primary font-medium',
                children: 'Modified Image',
              }),
            }),
            o.jsxs('div', {
              className: 'grid grid-cols-2 gap-4',
              children: [
                o.jsx('div', {
                  className: 'text-center',
                  children: o.jsxs('div', {
                    className: 'border border-github-border rounded-md p-4 bg-github-bg-secondary',
                    children: [
                      o.jsx('div', {
                        className: 'text-github-text-muted mb-2',
                        style: { fontSize: '14px' },
                        children: 'Previous version:',
                      }),
                      o.jsx('img', {
                        src: `/api/blob/${i.oldPath || i.path}?ref=${L}`,
                        alt: `Previous version of ${i.oldPath || i.path}`,
                        className:
                          'max-w-full max-h-96 border border-github-border rounded mx-auto',
                        style: R,
                        onLoad: (E) => Q(E.currentTarget, h),
                        onError: (E) => {
                          const z = E.target;
                          ((z.style.display = 'none'),
                            z.nextElementSibling?.classList.remove('hidden'));
                        },
                      }),
                      o.jsx('div', {
                        className: 'hidden text-github-text-muted text-sm mt-2',
                        children: 'Image could not be loaded',
                      }),
                      (g.width || g.size) &&
                        o.jsxs('div', {
                          className: 'text-github-text-muted mt-2',
                          style: { fontSize: '14px' },
                          children: [N(g), N(g) && S(g.size) && ' | ', S(g.size)],
                        }),
                    ],
                  }),
                }),
                o.jsx('div', {
                  className: 'text-center',
                  children: o.jsxs('div', {
                    className: 'border border-github-border rounded-md p-4 bg-github-bg-secondary',
                    children: [
                      o.jsx('div', {
                        className: 'text-github-text-muted mb-2',
                        style: { fontSize: '14px' },
                        children: 'Current version:',
                      }),
                      o.jsx('img', {
                        src: `/api/blob/${i.path}?ref=${_}`,
                        alt: `Current version of ${i.path}`,
                        className:
                          'max-w-full max-h-96 border border-github-border rounded mx-auto',
                        style: R,
                        onLoad: (E) => Q(E.currentTarget, G),
                        onError: (E) => {
                          const z = E.target;
                          ((z.style.display = 'none'),
                            z.nextElementSibling?.classList.remove('hidden'));
                        },
                      }),
                      o.jsx('div', {
                        className: 'hidden text-github-text-muted text-sm mt-2',
                        children: 'Image could not be loaded',
                      }),
                      (O.width || O.size) &&
                        o.jsxs('div', {
                          className: 'text-github-text-muted mt-2',
                          style: { fontSize: '14px' },
                          children: [N(O), N(O) && S(O.size) && ' | ', S(O.size)],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      : o.jsxs('div', {
          className: 'bg-github-bg-primary p-4',
          children: [
            o.jsx('div', {
              className: 'text-center mb-4',
              children: o.jsx('span', {
                className: 'text-github-text-primary font-medium',
                children: 'Modified Image',
              }),
            }),
            o.jsxs('div', {
              className: 'space-y-6',
              children: [
                o.jsx('div', {
                  className: 'text-center',
                  children: o.jsxs('div', {
                    className:
                      'border border-github-border rounded-md p-4 bg-github-bg-secondary inline-block',
                    children: [
                      o.jsx('div', {
                        className: 'text-github-text-muted mb-2',
                        style: { fontSize: '14px' },
                        children: 'Previous version:',
                      }),
                      o.jsx('img', {
                        src: `/api/blob/${i.oldPath || i.path}?ref=${L}`,
                        alt: `Previous version of ${i.oldPath || i.path}`,
                        className:
                          'max-w-full max-h-96 border border-github-border rounded mx-auto',
                        style: R,
                        onLoad: (E) => Q(E.currentTarget, h),
                        onError: (E) => {
                          const z = E.target;
                          ((z.style.display = 'none'),
                            z.nextElementSibling?.classList.remove('hidden'));
                        },
                      }),
                      o.jsx('div', {
                        className: 'hidden text-github-text-muted text-sm mt-2',
                        children: 'Image could not be loaded',
                      }),
                      (g.width || g.size) &&
                        o.jsxs('div', {
                          className: 'text-github-text-muted mt-2',
                          style: { fontSize: '14px' },
                          children: [N(g), N(g) && S(g.size) && ' | ', S(g.size)],
                        }),
                    ],
                  }),
                }),
                o.jsx('div', {
                  className: 'text-center',
                  children: o.jsxs('div', {
                    className:
                      'border border-github-border rounded-md p-4 bg-github-bg-secondary inline-block',
                    children: [
                      o.jsx('div', {
                        className: 'text-github-text-muted mb-2',
                        style: { fontSize: '14px' },
                        children: 'Current version:',
                      }),
                      o.jsx('img', {
                        src: `/api/blob/${i.path}?ref=${_}`,
                        alt: `Current version of ${i.path}`,
                        className:
                          'max-w-full max-h-96 border border-github-border rounded mx-auto',
                        style: R,
                        onLoad: (E) => Q(E.currentTarget, G),
                        onError: (E) => {
                          const z = E.target;
                          ((z.style.display = 'none'),
                            z.nextElementSibling?.classList.remove('hidden'));
                        },
                      }),
                      o.jsx('div', {
                        className: 'hidden text-github-text-muted text-sm mt-2',
                        children: 'Image could not be loaded',
                      }),
                      (O.width || O.size) &&
                        o.jsxs('div', {
                          className: 'text-github-text-muted mt-2',
                          style: { fontSize: '14px' },
                          children: [N(O), N(O) && S(O.size) && ' | ', S(O.size)],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
    : null
  );
}
function kb({
  file: i,
  comments: f,
  diffMode: y,
  reviewedFiles: c,
  onToggleReviewed: x,
  onAddComment: m,
  onGeneratePrompt: j,
  onRemoveComment: L,
  onUpdateComment: _,
  syntaxTheme: g,
  baseCommitish: h,
  targetCommitish: O,
}) {
  const G = c.has(i.path),
    [Q, S] = te.useState(!1);
  Db(i.path);
  const N = (E) => {
      switch (E) {
        case 'added':
          return o.jsx(Bd, { size: 16, className: 'text-github-accent' });
        case 'deleted':
          return o.jsx(Hd, { size: 16, className: 'text-github-danger' });
        case 'renamed':
          return o.jsx(Ud, { size: 16, className: 'text-github-warning' });
        default:
          return o.jsx(Ld, { size: 16, className: 'text-github-text-secondary' });
      }
    },
    R = async (E, z, v) => {
      try {
        await m(i.path, E, z, v);
      } catch (X) {
        console.error('Failed to add comment:', X);
      }
    };
  return o.jsxs('div', {
    className: 'bg-github-bg-primary',
    children: [
      o.jsxs('div', {
        className:
          'bg-github-bg-secondary border-t-2 border-t-github-accent border-b border-github-border px-5 py-4 flex items-center justify-between flex-wrap gap-3 sticky top-0 z-10',
        children: [
          o.jsxs('div', {
            className: 'flex items-center gap-2 flex-1 min-w-0',
            children: [
              o.jsx('button', {
                onClick: () => x(i.path),
                className:
                  'text-github-text-muted hover:text-github-text-primary transition-colors cursor-pointer',
                title: G ? 'Expand file' : 'Collapse file',
                children: G ? o.jsx(Md, { size: 16 }) : o.jsx(Rd, { size: 16 }),
              }),
              N(i.status),
              o.jsx('h2', {
                className:
                  'text-sm font-mono text-github-text-primary m-0 overflow-hidden text-ellipsis whitespace-nowrap',
                children: i.path,
              }),
              o.jsx('button', {
                className: `bg-transparent border-none cursor-pointer px-1.5 py-1 rounded text-sm transition-all hover:bg-github-bg-tertiary ${Q ? 'text-github-accent' : 'text-github-text-secondary hover:text-github-text-primary'}`,
                onClick: () => {
                  navigator.clipboard
                    .writeText(i.path)
                    .then(() => {
                      (console.log('File path copied to clipboard:', i.path),
                        S(!0),
                        setTimeout(() => S(!1), 2e3));
                    })
                    .catch((E) => {
                      console.error('Failed to copy file path:', E);
                    });
                },
                title: 'Copy file path',
                children: Q ? o.jsx(Gu, { size: 14 }) : o.jsx(kd, { size: 14 }),
              }),
              i.oldPath &&
                i.oldPath !== i.path &&
                o.jsxs('span', {
                  className: 'text-xs text-github-text-muted italic',
                  children: ['(renamed from ', i.oldPath, ')'],
                }),
            ],
          }),
          o.jsxs('div', {
            className: 'flex items-center gap-3',
            children: [
              o.jsxs('div', {
                className: 'flex items-center gap-2 text-xs',
                children: [
                  o.jsxs('span', {
                    className: 'font-medium px-1 py-0.5 rounded text-github-accent bg-green-100/10',
                    children: ['+', i.additions],
                  }),
                  o.jsxs('span', {
                    className: 'font-medium px-1 py-0.5 rounded text-github-danger bg-red-100/10',
                    children: ['-', i.deletions],
                  }),
                ],
              }),
              o.jsxs('button', {
                onClick: () => x(i.path),
                className: `flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${c.has(i.path) ? 'bg-github-accent text-white' : 'dark:bg-slate-600 dark:text-white dark:border-slate-500 dark:hover:bg-slate-500 dark:hover:border-slate-400 bg-github-bg-secondary text-github-text-primary border border-github-border hover:bg-github-bg-tertiary hover:border-github-text-muted'}`,
                title: c.has(i.path) ? 'Mark as not reviewed' : 'Mark as reviewed',
                children: [
                  c.has(i.path) ? o.jsx(Gu, { size: 14 }) : o.jsx(hh, { size: 14 }),
                  'Viewed',
                ],
              }),
            ],
          }),
        ],
      }),
      !G &&
        o.jsx('div', {
          className: 'overflow-y-auto',
          children:
            xh(i.path) ?
              o.jsx(Mb, { file: i, mode: y, baseCommitish: h, targetCommitish: O })
            : i.chunks.map((E, z) =>
                o.jsxs(
                  'div',
                  {
                    className: 'border-b border-github-border',
                    children: [
                      o.jsx('div', {
                        className: 'bg-github-bg-tertiary px-3 py-2 border-b border-github-border',
                        children: o.jsx('code', {
                          className: 'text-github-text-secondary text-xs font-mono',
                          children: E.header,
                        }),
                      }),
                      o.jsx(Rb, {
                        chunk: E,
                        comments: f,
                        onAddComment: R,
                        onGeneratePrompt: j,
                        onRemoveComment: L,
                        onUpdateComment: _,
                        mode: y,
                        syntaxTheme: g,
                      }),
                    ],
                  },
                  z
                )
              ),
        }),
    ],
  });
}
function Lb(i) {
  const f = { name: '', path: '', isDirectory: !0, children: [] };
  i.forEach((c) => {
    const x = c.path.split('/');
    let m = f;
    for (let j = 0; j < x.length; j++) {
      const L = x[j];
      if (!L) continue;
      const _ = j === x.length - 1,
        g = x.slice(0, j + 1).join('/');
      m.children || (m.children = []);
      let h = m.children.find((O) => O.name === L);
      (h ||
        ((h = {
          name: L,
          path: g,
          isDirectory: !_,
          children: _ ? void 0 : [],
          file: _ ? c : void 0,
        }),
        m.children.push(h)),
        (m = h));
    }
  });
  const y = (c) => {
    if (!c.isDirectory || !c.children) return c;
    if (
      ((c.children = c.children.map(y)),
      c.children.length === 1 && c.children[0]?.isDirectory && c.children[0]?.children)
    ) {
      const x = c.children[0];
      if (x)
        return {
          ...c,
          name: c.name ? `${c.name}/${x.name}` : x.name,
          path: x.path,
          children: x.children,
        };
    }
    return c;
  };
  return y(f);
}
function Ub({ files: i, onScrollToFile: f, comments: y, reviewedFiles: c, onToggleReviewed: x }) {
  const m = Lb(i),
    j = (E) => {
      if (!E.isDirectory || !E.children) return [];
      const z = [];
      return (
        E.path && z.push(E.path),
        E.children.forEach((v) => {
          z.push(...j(v));
        }),
        z
      );
    },
    [L, _] = te.useState(() => new Set(j(m))),
    [g, h] = te.useState(''),
    O = (E) => y.filter((z) => z.file === E).length,
    G = (E) => {
      if (!g.trim()) return E;
      if (E.isDirectory && E.children) {
        const z = E.children.map((v) => G(v)).filter((v) => v !== null);
        return z.length > 0 ? { ...E, children: z } : null;
      } else if (E.file) return E.file.path.toLowerCase().includes(g.toLowerCase()) ? E : null;
      return null;
    },
    Q = G(m) || { ...m, children: [] },
    S = (E) => {
      switch (E) {
        case 'added':
          return o.jsx(Bd, { size: 16, className: 'text-github-accent' });
        case 'deleted':
          return o.jsx(Hd, { size: 16, className: 'text-github-danger' });
        case 'renamed':
          return o.jsx(Ud, { size: 16, className: 'text-github-warning' });
        default:
          return o.jsx(Ld, { size: 16, className: 'text-github-text-secondary' });
      }
    },
    N = (E) => {
      _((z) => {
        const v = new Set(z);
        return (v.has(E) ? v.delete(E) : v.add(E), v);
      });
    },
    R = (E, z = 0) => {
      if (E.isDirectory && E.children) {
        const v = L.has(E.path);
        return o.jsxs(
          'div',
          {
            children: [
              E.name &&
                o.jsxs('div', {
                  className:
                    'flex items-center gap-2 px-4 py-2 hover:bg-github-bg-tertiary cursor-pointer',
                  style: { paddingLeft: `${z * 16 + 16}px` },
                  onClick: () => N(E.path),
                  children: [
                    v ? o.jsx(Rd, { size: 16 }) : o.jsx(Md, { size: 16 }),
                    v ?
                      o.jsx(Wy, { size: 16, className: 'text-github-text-secondary' })
                    : o.jsx(Py, { size: 16, className: 'text-github-text-secondary' }),
                    o.jsx('span', {
                      className:
                        'text-sm text-github-text-primary font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap',
                      title: E.name,
                      children: E.name,
                    }),
                  ],
                }),
              (v || !E.name) && E.children.map((X) => R(X, z + 1)),
            ],
          },
          E.path
        );
      } else if (E.file) {
        const v = O(E.file.path),
          X = c.has(E.file.path);
        return o.jsxs(
          'div',
          {
            className: `flex items-center gap-2 px-4 py-2 hover:bg-github-bg-tertiary cursor-pointer transition-colors ${X ? 'opacity-70' : ''}`,
            style: { paddingLeft: `${z * 16 + 16}px` },
            onClick: () => f(E.file.path),
            children: [
              o.jsx(Yd, {
                checked: X,
                onChange: () => {
                  x(E.file.path);
                },
                title: X ? 'Mark as not reviewed' : 'Mark as reviewed',
                className: 'z-10',
              }),
              S(E.file.status),
              o.jsx('span', {
                className: `text-sm text-github-text-primary flex-1 overflow-hidden text-ellipsis whitespace-nowrap ${X ? 'line-through text-github-text-muted' : ''}`,
                title: E.file.path,
                children: E.name,
              }),
              v > 0 &&
                o.jsxs('span', {
                  className:
                    'text-github-warning text-sm font-medium ml-auto flex items-center gap-1',
                  children: [o.jsx(lh, { size: 14 }), v],
                }),
            ],
          },
          E.file.path
        );
      }
      return null;
    };
  return o.jsxs('div', {
    className: 'h-full flex flex-col',
    children: [
      o.jsxs('div', {
        className: 'px-4 py-3 border-b border-github-border bg-github-bg-tertiary',
        children: [
          o.jsxs('h3', {
            className: 'text-sm font-semibold text-github-text-primary m-0 mb-3',
            children: ['Files changed (', i.length, ')'],
          }),
          o.jsxs('div', {
            className: 'relative',
            children: [
              o.jsx(gh, {
                size: 16,
                className:
                  'absolute left-3 top-1/2 transform -translate-y-1/2 text-github-text-muted',
              }),
              o.jsx('input', {
                type: 'text',
                placeholder: 'Filter files...',
                value: g,
                onChange: (E) => h(E.target.value),
                className:
                  'w-full pl-9 pr-3 py-2 text-sm bg-github-bg-primary border border-github-border rounded-md focus:outline-none focus:border-github-accent text-github-text-primary placeholder-github-text-muted',
              }),
            ],
          }),
        ],
      }),
      o.jsx('div', { className: 'flex-1 overflow-y-auto', children: Q.children?.map((E) => R(E)) }),
    ],
  });
}
function Bb({ style: i }) {
  return o.jsxs('svg', {
    style: i,
    viewBox: '0 0 720 190',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-label': 'difit',
    role: 'img',
    children: [
      o.jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M440.487 5.90627C432.164 9.01695 427.318 16.2817 427.318 25.649C427.318 35.9474 433.206 43.6458 442.714 45.7819C451.336 47.7188 459.606 44.3893 464.84 36.8737C466.923 33.8843 467.35 32.4073 467.606 27.3105C467.773 23.9957 467.492 20.0154 466.983 18.4654C465.699 14.5629 460.869 9.13088 456.854 7.07513C452.57 4.88086 444.73 4.32102 440.487 5.90627ZM596.658 6.653C588.927 9.55794 584.572 15.4908 583.887 24.0465C583.17 33.0212 586.83 39.8868 594.382 43.7278C603.739 48.4877 615.574 44.5081 620.482 34.9515C625.35 25.4728 622.15 13.4916 613.37 8.32678C608.986 5.74808 601.154 4.96365 596.658 6.653ZM368.585 7.68006C367.464 8.80629 367.302 12.903 367.302 40.2286V71.4878L363.832 68.1329C353.432 58.0787 335.595 52.668 319.246 54.6082C310.542 55.641 299.81 59.1369 293.3 63.0607C278.56 71.9427 266.453 89.5576 263.139 106.945C261.765 114.155 261.602 129.431 262.825 136.365C265.723 152.796 274.795 168.36 286.716 177.355C298.275 186.077 310.237 190 325.274 190C340.687 190 353.943 185.273 362.869 176.594L367.302 172.284V178.215C367.302 186.902 366.946 186.724 384.303 186.709C392.243 186.702 399.29 186.347 399.964 185.919C401.04 185.236 401.189 174.47 401.189 97.1224C401.189 23.7236 401.003 8.87842 400.068 7.74809C398.433 5.77021 370.547 5.71037 368.585 7.68006ZM526.937 7.94153C519.783 10.0325 515.359 12.5834 510.029 17.6867C501.959 25.4129 498.766 34.4597 498.766 49.5975V58.8517H490.659C484.378 58.8517 482.263 59.1418 481.268 60.1394C480.214 61.1976 479.986 63.6558 479.986 73.91C479.986 82.5264 480.289 86.6977 480.966 87.3764C481.601 88.0141 484.903 88.36 490.356 88.36H498.766V136.692C498.766 183.638 498.811 185.048 500.345 185.873C502.433 186.994 529.394 186.994 531.482 185.873C533.016 185.048 533.061 183.638 533.061 136.692V88.36H549.334C563.038 88.36 565.809 88.1568 566.89 87.0723C568.782 85.1723 568.782 62.0394 566.89 60.1394C565.808 59.0541 563.029 58.8517 549.231 58.8517H532.856L533.216 51.9721C533.604 44.5499 534.721 41.9147 538.546 39.3958C540.377 38.1901 543.049 37.904 554.661 37.6737C562.626 37.5155 569.018 37.0343 569.602 36.5483C570.892 35.4761 571.046 10.3579 569.777 7.9776C568.978 6.47923 567.918 6.39562 550.384 6.45054C535.269 6.49808 530.93 6.77431 526.937 7.94153ZM654.931 26.4834C653.136 27.7662 653.094 28.1572 653.094 43.3245V58.8517H644.567C633.342 58.8517 633.497 58.6443 633.497 73.6059C633.497 88.5674 633.342 88.36 644.567 88.36H653.094V122.636C653.094 159.998 653.439 163.935 657.362 171.354C661.848 179.838 669.111 184.99 680.857 188.022C687.996 189.866 707.647 189.269 714.309 187.007C719.756 185.158 719.86 184.87 719.969 171.298C720.082 157.364 720.441 157.791 709.174 158.48C695.386 159.324 689.341 156.938 687.388 149.883C686.927 148.214 686.58 134.435 686.577 117.663L686.572 88.36H702.068H717.564L718.87 86.3592C719.946 84.7108 720.129 82.3461 719.91 72.9575C719.719 64.8279 719.321 61.1689 718.522 60.2041C717.553 59.0345 715.315 58.8517 701.987 58.8517H686.572L686.546 43.8926C686.526 31.8556 686.28 28.613 685.288 27.2941C684.156 25.7884 682.945 25.6351 670.412 25.4129C658.94 25.2088 656.476 25.3793 654.931 26.4834ZM431.459 60.1394C430.316 61.2877 430.178 68.0001 430.188 121.82C430.197 168.838 430.429 182.667 431.232 184.262L432.264 186.311L446.657 186.535C458.941 186.725 461.242 186.567 462.353 185.452C463.521 184.279 463.655 177.845 463.655 122.786C463.655 68.0985 463.515 61.2877 462.372 60.1394C460.469 58.2287 433.362 58.2287 431.459 60.1394ZM587.799 60.4369C587.238 61.4894 586.954 82.56 586.954 123.084C586.954 177.502 587.093 184.285 588.236 185.434C590.138 187.342 616.431 187.342 618.333 185.434C619.476 184.285 619.615 177.447 619.615 122.482C619.615 75.6149 619.38 60.5828 618.636 59.8353C617.947 59.1443 613.344 58.8517 603.15 58.8517C589.644 58.8517 588.586 58.9607 587.799 60.4369ZM347.956 87.3469C362.023 93.9543 369.138 107.306 367.775 124.535C366.623 139.097 359.678 149.866 347.83 155.463C337.073 160.544 325.541 160.523 315.049 155.403C293.381 144.83 288.765 112.315 306.417 94.5961C313.92 87.0641 322.021 84.1412 334.301 84.5354C341.49 84.7666 343.224 85.124 347.956 87.3469Z',
        fill: 'currentColor',
      }),
      o.jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M9.42299 0.744751C4.61699 2.15275 2.03999 5.66375 0.956994 12.2768C-0.369006 20.3728 -0.294006 170.791 1.03899 176.572C2.29699 182.031 4.81699 185.308 9.65399 187.774C13.265 189.615 16.865 189.684 108.63 189.684C163.129 189.684 204.095 189.304 204.41 188.795C206 188.5 206 188.795 207.5 188C211.167 187.079 216.779 180.138 218.005 175.584C218.682 173.068 218.939 143.952 218.756 90.4718C218.487 11.7478 218.417 9.10275 216.535 6.62675C215.466 5.22075 213.441 3.19575 212.035 2.12675C209.546 0.23575 206.839 0.17975 110.978 0.0167504C55.373 -0.0782496 11.148 0.239751 9.42299 0.744751ZM203.778 14.8838C205.558 16.6638 205.509 172.577 203.728 175.005C202.577 176.574 198.865 176.688 156.978 176.446L111.478 176.184L111.226 138.684L110.974 101.184H84.059C69.255 101.184 56.808 101.52 56.397 101.931C55.986 102.343 60.674 107.82 66.814 114.104C72.954 120.388 77.978 126.202 77.978 127.026C77.978 129.577 74.769 134.267 71.896 135.916C69.609 137.229 68.75 137.278 66.704 136.217C63.533 134.572 28.705 99.1448 27.757 96.5998C27.36 95.5348 27.491 93.4308 28.049 91.9238C28.955 89.4768 68.498 49.6838 70.024 49.6838C70.366 49.6838 72.356 51.1627 74.447 52.9697C77.589 55.6867 78.118 56.6658 77.498 58.6198C77.086 59.9198 72.075 65.8308 66.363 71.7568C60.651 77.6818 55.978 83.0148 55.978 83.6068C55.978 84.3488 64.068 84.6838 81.952 84.6838H107.927H110.666C111.144 82.5 110.978 73.4537 110.978 46.2337V13.6838H156.778C191.067 13.6838 202.88 13.9858 203.778 14.8838ZM148.803 52.7217C146.51 54.0597 144.845 59.5997 145.74 62.9107C146.146 64.4107 150.657 69.9308 155.764 75.1788C161.411 80.9788 164.547 84.8988 163.764 85.1788C163.057 85.4318 151.549 85.7608 138.19 85.9108C117.896 86.1388 113.747 86.4308 112.956 87.6838C112.435 88.5088 112.002 91.7228 111.993 94.8268C111.982 99.0598 112.373 100.622 113.56 101.077C114.43 101.411 126.13 101.684 139.56 101.684C156.121 101.684 163.978 102.026 163.978 102.746C163.978 103.33 160.187 107.607 155.554 112.251C146.244 121.582 144.276 125.371 146.069 130.514C147.321 134.107 149.576 135.684 153.463 135.684C155.522 135.684 159.843 131.902 173.778 117.904C191.699 99.9008 194.978 96.0678 194.978 93.1208C194.978 91.1338 157.422 53.8238 154.163 52.5728C151.322 51.4818 150.908 51.4937 148.803 52.7217Z',
        fill: 'currentColor',
      }),
    ],
  });
}
const Hb = {
    fontSize: 14,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    theme: 'dark',
    syntaxTheme: 'vsDark',
  },
  qb = [
    {
      name: 'System Font',
      value:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    },
    { name: 'Menlo', value: 'Menlo, Monaco, "Courier New", monospace' },
    { name: 'SF Mono', value: 'SF Mono, Consolas, "Liberation Mono", monospace' },
    { name: 'Fira Code', value: '"Fira Code", "Courier New", monospace' },
    { name: 'JetBrains Mono', value: '"JetBrains Mono", "Courier New", monospace' },
  ];
function Gb({ isOpen: i, onClose: f, settings: y, onSettingsChange: c }) {
  const [x, m] = te.useState(y);
  (te.useEffect(() => {
    m(y);
  }, [y]),
    te.useEffect(() => {
      c(x);
    }, [x, c]));
  const j = () =>
      x.theme === 'auto' ?
        window.matchMedia('(prefers-color-scheme: dark)').matches ?
          'dark'
        : 'light'
      : x.theme,
    L = () => (j() === 'light' ? wd : Od),
    _ = (h) => {
      const O = { ...x, theme: h },
        Q =
          (
            (h === 'auto' ?
              window.matchMedia('(prefers-color-scheme: dark)').matches ?
                'dark'
              : 'light'
            : h) === 'light'
          ) ?
            wd
          : Od;
      if (!Q.some((N) => N.id === x.syntaxTheme) && Q.length > 0) {
        const N = Q[0];
        N && (O.syntaxTheme = N.id);
      }
      m(O);
    },
    g = () => {
      m(Hb);
    };
  return i ?
      o.jsx('div', {
        className: 'fixed inset-0 flex items-center justify-center z-50 pointer-events-none',
        children: o.jsxs('div', {
          className:
            'bg-github-bg-secondary border border-github-border rounded-lg w-full max-w-md mx-4 pointer-events-auto',
          children: [
            o.jsxs('div', {
              className: 'flex items-center justify-between p-4 border-b border-github-border',
              children: [
                o.jsxs('h2', {
                  className:
                    'text-lg font-semibold text-github-text-primary flex items-center gap-2',
                  children: [o.jsx(qd, { size: 20 }), 'Appearance Settings'],
                }),
                o.jsx('button', {
                  onClick: f,
                  className: 'text-github-text-secondary hover:text-github-text-primary p-1',
                  children: o.jsx(Gd, { size: 18 }),
                }),
              ],
            }),
            o.jsxs('div', {
              className: 'p-4 space-y-6',
              children: [
                o.jsxs('div', {
                  children: [
                    o.jsx('label', {
                      className: 'block text-sm font-medium text-github-text-primary mb-2',
                      children: 'Font Size',
                    }),
                    o.jsxs('div', {
                      className: 'flex items-center gap-3',
                      children: [
                        o.jsx('input', {
                          type: 'range',
                          min: '10',
                          max: '20',
                          step: '1',
                          value: x.fontSize,
                          onChange: (h) => m({ ...x, fontSize: parseInt(h.target.value) }),
                          className: 'flex-1 accent-github-accent',
                        }),
                        o.jsxs('span', {
                          className: 'text-sm text-github-text-secondary w-8 text-right',
                          children: [x.fontSize, 'px'],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs('div', {
                  children: [
                    o.jsx('label', {
                      className: 'block text-sm font-medium text-github-text-primary mb-2',
                      children: 'Font Family',
                    }),
                    o.jsx('select', {
                      value: x.fontFamily,
                      onChange: (h) => m({ ...x, fontFamily: h.target.value }),
                      className:
                        'w-full p-2 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary text-sm',
                      children: qb.map((h) =>
                        o.jsx('option', { value: h.value, children: h.name }, h.value)
                      ),
                    }),
                  ],
                }),
                o.jsxs('div', {
                  children: [
                    o.jsx('label', {
                      className: 'block text-sm font-medium text-github-text-primary mb-2',
                      children: 'Theme',
                    }),
                    o.jsx('div', {
                      className: 'flex gap-2',
                      children: ['light', 'dark', 'auto'].map((h) =>
                        o.jsx(
                          'button',
                          {
                            onClick: () => _(h),
                            className: `px-3 py-2 text-sm rounded border transition-colors ${x.theme === h ? 'bg-github-accent text-white border-github-accent' : 'bg-github-bg-tertiary text-github-text-secondary border-github-border hover:text-github-text-primary'}`,
                            children: h.charAt(0).toUpperCase() + h.slice(1),
                          },
                          h
                        )
                      ),
                    }),
                  ],
                }),
                o.jsxs('div', {
                  children: [
                    o.jsx('label', {
                      className: 'block text-sm font-medium text-github-text-primary mb-2',
                      children: 'Syntax Highlighting Theme',
                    }),
                    o.jsx('select', {
                      value: x.syntaxTheme,
                      onChange: (h) => m({ ...x, syntaxTheme: h.target.value }),
                      className:
                        'w-full p-2 bg-github-bg-tertiary border border-github-border rounded text-github-text-primary text-sm',
                      children: L().map((h) =>
                        o.jsx('option', { value: h.id, children: h.label }, h.id)
                      ),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs('div', {
              className: 'flex items-center justify-between p-4 border-t border-github-border',
              children: [
                o.jsx('button', {
                  onClick: g,
                  className:
                    'px-3 py-2 text-sm text-github-text-secondary hover:text-github-text-primary',
                  children: 'Reset to Default',
                }),
                o.jsx('button', {
                  onClick: f,
                  className:
                    'px-4 py-2 text-sm bg-github-accent text-white rounded hover:bg-green-600',
                  children: 'Close',
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
const Cd = {
    fontSize: 14,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    theme: 'dark',
    syntaxTheme: 'vsDark',
  },
  zd = 'reviewit-appearance-settings';
function Yb() {
  const [i, f] = te.useState(Cd);
  (te.useEffect(() => {
    try {
      const x = localStorage.getItem(zd);
      if (x) {
        const m = JSON.parse(x);
        f({ ...Cd, ...m });
      }
    } catch (x) {
      console.warn('Failed to load appearance settings from localStorage:', x);
    }
  }, []),
    te.useEffect(() => {
      const x = document.documentElement;
      if (
        (x.style.setProperty('--app-font-size', `${i.fontSize}px`),
        x.style.setProperty('--app-font-family', i.fontFamily),
        i.theme === 'auto')
      ) {
        const m = window.matchMedia('(prefers-color-scheme: dark)');
        y(m.matches ? 'dark' : 'light');
        const j = (L) => {
          y(L.matches ? 'dark' : 'light');
        };
        return (m.addEventListener('change', j), () => m.removeEventListener('change', j));
      } else {
        y(i.theme);
        return;
      }
    }, [i]));
  const y = (x) => {
    const m = document.documentElement;
    (x === 'light' ?
      (m.style.setProperty('--color-github-bg-primary', '#ffffff'),
      m.style.setProperty('--color-github-bg-secondary', '#f6f8fa'),
      m.style.setProperty('--color-github-bg-tertiary', '#f1f3f4'),
      m.style.setProperty('--color-github-border', '#d1d9e0'),
      m.style.setProperty('--color-github-text-primary', '#24292f'),
      m.style.setProperty('--color-github-text-secondary', '#656d76'),
      m.style.setProperty('--color-github-text-muted', '#8c959f'),
      m.style.setProperty('--color-github-accent', '#1f883d'),
      m.style.setProperty('--color-github-danger', '#cf222e'),
      m.style.setProperty('--color-github-warning', '#bf8700'),
      m.style.setProperty('--color-diff-addition-bg', '#d1f4cd'),
      m.style.setProperty('--color-diff-addition-border', '#1f883d'),
      m.style.setProperty('--color-diff-deletion-bg', '#ffd8d3'),
      m.style.setProperty('--color-diff-deletion-border', '#cf222e'),
      m.style.setProperty('--color-diff-neutral-bg', '#f1f3f4'),
      m.style.setProperty('--color-comment-bg', '#fff8e1'),
      m.style.setProperty('--color-comment-border', '#ffd54f'),
      m.style.setProperty('--color-comment-text', '#5d4037'),
      m.style.setProperty('--color-yellow-btn-bg', '#fef3c7'),
      m.style.setProperty('--color-yellow-btn-border', '#f59e0b'),
      m.style.setProperty('--color-yellow-btn-text', '#92400e'),
      m.style.setProperty('--color-yellow-btn-hover-bg', '#fde68a'),
      m.style.setProperty('--color-yellow-btn-hover-border', '#d97706'),
      m.style.setProperty('--color-yellow-path-bg', '#fde68a'),
      m.style.setProperty('--color-yellow-path-text', '#92400e'))
    : (m.style.setProperty('--color-github-bg-primary', '#0d1117'),
      m.style.setProperty('--color-github-bg-secondary', '#161b22'),
      m.style.setProperty('--color-github-bg-tertiary', '#21262d'),
      m.style.setProperty('--color-github-border', '#30363d'),
      m.style.setProperty('--color-github-text-primary', '#f0f6fc'),
      m.style.setProperty('--color-github-text-secondary', '#8b949e'),
      m.style.setProperty('--color-github-text-muted', '#6e7681'),
      m.style.setProperty('--color-github-accent', '#238636'),
      m.style.setProperty('--color-github-danger', '#da3633'),
      m.style.setProperty('--color-github-warning', '#d29922'),
      m.style.setProperty('--color-diff-addition-bg', '#0d4429'),
      m.style.setProperty('--color-diff-addition-border', '#1b7c3d'),
      m.style.setProperty('--color-diff-deletion-bg', '#67060c'),
      m.style.setProperty('--color-diff-deletion-border', '#da3633'),
      m.style.setProperty('--color-diff-neutral-bg', '#21262d'),
      m.style.setProperty('--color-comment-bg', '#1c2128'),
      m.style.setProperty('--color-comment-border', '#373e47'),
      m.style.setProperty('--color-comment-text', '#e6edf3'),
      m.style.setProperty('--color-yellow-btn-bg', 'rgba(180, 83, 9, 0.2)'),
      m.style.setProperty('--color-yellow-btn-border', 'rgba(217, 119, 6, 0.5)'),
      m.style.setProperty('--color-yellow-btn-text', '#fbbf24'),
      m.style.setProperty('--color-yellow-btn-hover-bg', 'rgba(180, 83, 9, 0.3)'),
      m.style.setProperty('--color-yellow-btn-hover-border', '#d97706'),
      m.style.setProperty('--color-yellow-path-bg', 'rgba(180, 83, 9, 0.3)'),
      m.style.setProperty('--color-yellow-path-text', '#fbbf24')),
      (document.body.style.backgroundColor = 'var(--color-github-bg-primary)'),
      (document.body.style.color = 'var(--color-github-text-primary)'));
  };
  return {
    settings: i,
    updateSettings: (x) => {
      f(x);
      try {
        localStorage.setItem(zd, JSON.stringify(x));
      } catch (m) {
        console.warn('Failed to save appearance settings to localStorage:', m);
      }
    },
  };
}
function Zb(i) {
  const [f, y] = te.useState([]),
    c = i ? `difit-comments-${i}` : 'difit-comments';
  (te.useEffect(() => {
    const h = localStorage.getItem(c);
    if (h)
      try {
        y(JSON.parse(h));
      } catch (O) {
        console.error('Failed to parse saved comments:', O);
      }
  }, [c]),
    te.useEffect(() => {
      localStorage.setItem(c, JSON.stringify(f));
    }, [f, c]));
  const x = (h, O, G, Q) => {
      console.log('Adding comment with codeContent:', Q);
      const S = {
        id: `${h}:${Array.isArray(O) ? `${O[0]}-${O[1]}` : O}:${Date.now()}`,
        file: h,
        line: O,
        body: G,
        timestamp: new Date().toISOString(),
        codeContent: Q,
      };
      return (y((N) => [...N, S]), S);
    },
    m = (h) => {
      y((O) => O.filter((G) => G.id !== h));
    },
    j = (h, O) => {
      y((G) => G.map((Q) => (Q.id === h ? { ...Q, body: O } : Q)));
    },
    L = () => {
      (y([]), localStorage.removeItem(c));
    },
    _ = (h) =>
      Array.isArray(h.line) ?
        `${h.file}:L${h.line[0]}-L${h.line[1]}
${h.body}`
      : `${h.file}:L${h.line}
${h.body}`;
  return {
    comments: f,
    addComment: x,
    removeComment: m,
    updateComment: j,
    clearAllComments: L,
    generatePrompt: _,
    generateAllCommentsPrompt: () =>
      f.length === 0 ?
        'No comments available.'
      : f.map(_).join(`
=====
`),
  };
}
function Xb() {
  const [i, f] = te.useState(null),
    [y, c] = te.useState(new Set()),
    [x, m] = te.useState('side-by-side'),
    [j, L] = te.useState(!0),
    [_, g] = te.useState(!0),
    [h, O] = te.useState(null),
    [G, Q] = te.useState(!1),
    [S, N] = te.useState(320),
    [R, E] = te.useState(!1),
    [z, v] = te.useState(!0),
    [X, F] = te.useState(!1),
    { settings: Y, updateSettings: W } = Yb(),
    {
      comments: ae,
      addComment: ue,
      removeComment: Ce,
      updateComment: Ne,
      generatePrompt: be,
      generateAllCommentsPrompt: je,
    } = Zb(i?.commit),
    ve = (d) => {
      (d.preventDefault(), F(!0));
      const k = d.clientX,
        V = S,
        Z = (oe) => {
          const le = Math.max(200, Math.min(600, V + (oe.clientX - k)));
          N(le);
        },
        I = () => {
          (F(!1),
            document.removeEventListener('mousemove', Z),
            document.removeEventListener('mouseup', I));
        };
      (document.addEventListener('mousemove', Z), document.addEventListener('mouseup', I));
    };
  (te.useEffect(() => {
    M();
  }, [j]),
    te.useEffect(() => {
      const d = () => {
        if (ae.length > 0) {
          const k = JSON.stringify({ comments: ae });
          navigator.sendBeacon('/api/comments', k);
        }
      };
      return (
        window.addEventListener('beforeunload', d),
        () => {
          (window.removeEventListener('beforeunload', d), d());
        }
      );
    }, [ae]),
    te.useEffect(() => {
      const d = new EventSource('/api/heartbeat');
      return (
        (d.onopen = () => {
          console.log('Connected to server heartbeat');
        }),
        (d.onerror = () => {
          (console.log('Server connection lost'), d.close());
        }),
        () => {
          d.close();
        }
      );
    }, []));
  const pe = (d) => {
      const k = [
          'pnpm-lock.yaml',
          'package-lock.json',
          'yarn.lock',
          'Cargo.lock',
          'Gemfile.lock',
          'composer.lock',
          'Pipfile.lock',
          'poetry.lock',
          'go.sum',
          'mix.lock',
        ],
        V = d.split('/').pop() || '';
      return k.includes(V);
    },
    M = async () => {
      try {
        const d = await fetch(`/api/diff?ignoreWhitespace=${j}`);
        if (!d.ok) throw new Error('Failed to fetch diff data');
        const k = await d.json();
        (f(k), k.mode && m(k.mode));
        const V = k.files.filter((Z) => pe(Z.path)).map((Z) => Z.path);
        V.length > 0 && c((Z) => new Set([...Z, ...V]));
      } catch (d) {
        O(d instanceof Error ? d.message : 'Unknown error');
      } finally {
        g(!1);
      }
    },
    K = (d, k, V, Z) => (ue(d, k, V, Z), Promise.resolve()),
    J = async () => {
      try {
        const d = je();
        (await navigator.clipboard.writeText(d), Q(!0), setTimeout(() => Q(!1), 2e3));
      } catch (d) {
        console.error('Failed to copy all comments prompt:', d);
      }
    },
    ye = (d) => {
      c((k) => {
        const V = new Set(k);
        return (
          V.has(d) ?
            V.delete(d)
          : (V.add(d),
            setTimeout(() => {
              const I = document.getElementById(`file-${d.replace(/[^a-zA-Z0-9]/g, '-')}`);
              I && I.scrollIntoView({ behavior: 'instant', block: 'start' });
            }, 100)),
          V
        );
      });
    };
  return (
    _ ?
      o.jsx('div', {
        className: 'flex items-center justify-center h-screen bg-github-bg-primary',
        children: o.jsx('div', {
          className: 'text-github-text-secondary text-base',
          children: 'Loading diff...',
        }),
      })
    : h ?
      o.jsxs('div', {
        className:
          'flex flex-col items-center justify-center h-screen bg-github-bg-primary text-center gap-2',
        children: [
          o.jsx('h2', { className: 'text-github-danger text-2xl mb-2', children: 'Error' }),
          o.jsx('p', { className: 'text-github-text-secondary text-base', children: h }),
        ],
      })
    : i ?
      o.jsxs('div', {
        className: 'h-screen flex flex-col',
        children: [
          o.jsxs('header', {
            className: 'bg-github-bg-secondary border-b border-github-border flex items-center',
            children: [
              o.jsxs('div', {
                className: `px-4 py-3 flex items-center justify-between gap-4 ${X ? '' : '!transition-all !duration-300 !ease-in-out'}`,
                style: {
                  width: z ? `${S}px` : 'auto',
                  minWidth: z ? '200px' : 'auto',
                  maxWidth: z ? '600px' : 'auto',
                },
                children: [
                  o.jsx('h1', {
                    children: o.jsx(Bb, {
                      style: { height: '18px', color: 'var(--color-github-text-secondary)' },
                    }),
                  }),
                  o.jsxs('div', {
                    className: 'flex items-center gap-1',
                    children: [
                      o.jsx('button', {
                        onClick: () => v(!z),
                        className:
                          'p-2 text-github-text-secondary hover:text-github-text-primary hover:bg-github-bg-tertiary rounded transition-colors',
                        title: z ? 'Collapse file tree' : 'Expand file tree',
                        'aria-expanded': z,
                        'aria-controls': 'file-tree-panel',
                        'aria-label': 'Toggle file tree panel',
                        children: z ? o.jsx(uh, { size: 18 }) : o.jsx(rh, { size: 18 }),
                      }),
                      o.jsx('button', {
                        onClick: () => E(!0),
                        className:
                          'p-2 text-github-text-secondary hover:text-github-text-primary hover:bg-github-bg-tertiary rounded transition-colors',
                        title: 'Appearance Settings',
                        children: o.jsx(qd, { size: 18 }),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsx('div', {
                className: `border-r border-github-border ${X ? '' : '!transition-all !duration-300 !ease-in-out'}`,
                style: {
                  width: z ? '4px' : '0px',
                  height: 'calc(100% - 16px)',
                  margin: '8px 0',
                  transform: 'translateX(-2px)',
                },
              }),
              o.jsxs('div', {
                className: 'flex-1 px-4 py-3 flex items-center justify-between gap-4',
                children: [
                  o.jsxs('div', {
                    className: 'flex items-center gap-3',
                    children: [
                      o.jsxs('div', {
                        className:
                          'flex bg-github-bg-tertiary border border-github-border rounded-md p-1',
                        children: [
                          o.jsxs('button', {
                            onClick: () => m('side-by-side'),
                            className: `px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${x === 'side-by-side' ? 'bg-github-bg-primary text-github-text-primary shadow-sm' : 'text-github-text-secondary hover:text-github-text-primary'}`,
                            children: [o.jsx(Xy, { size: 14 }), 'Side by Side'],
                          }),
                          o.jsxs('button', {
                            onClick: () => m('inline'),
                            className: `px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${x === 'inline' ? 'bg-github-bg-primary text-github-text-primary shadow-sm' : 'text-github-text-secondary hover:text-github-text-primary'}`,
                            children: [o.jsx(Hy, { size: 14 }), 'Inline'],
                          }),
                        ],
                      }),
                      o.jsx(Yd, {
                        checked: j,
                        onChange: L,
                        label: 'Ignore Whitespace',
                        title: j ? 'Show whitespace changes' : 'Ignore whitespace changes',
                      }),
                    ],
                  }),
                  o.jsxs('div', {
                    className: 'flex items-center gap-4 text-sm text-github-text-secondary',
                    children: [
                      ae.length > 0 &&
                        o.jsxs('button', {
                          onClick: J,
                          className:
                            'text-xs px-3 py-1.5 rounded transition-all whitespace-nowrap flex items-center gap-1.5',
                          style: {
                            backgroundColor: 'var(--color-yellow-btn-bg)',
                            color: 'var(--color-yellow-btn-text)',
                            border: '1px solid var(--color-yellow-btn-border)',
                          },
                          onMouseEnter: (d) => {
                            ((d.currentTarget.style.backgroundColor =
                              'var(--color-yellow-btn-hover-bg)'),
                              (d.currentTarget.style.borderColor =
                                'var(--color-yellow-btn-hover-border)'));
                          },
                          onMouseLeave: (d) => {
                            ((d.currentTarget.style.backgroundColor = 'var(--color-yellow-btn-bg)'),
                              (d.currentTarget.style.borderColor =
                                'var(--color-yellow-btn-border)'));
                          },
                          title: `Copy all ${ae.length} comments to AI coding agent`,
                          children: [
                            o.jsx(kd, { size: 12 }),
                            G ? 'Copied All!' : `Copy All Prompt (${ae.length})`,
                          ],
                        }),
                      o.jsxs('div', {
                        children: [
                          o.jsxs('div', {
                            children: [y.size, ' / ', i.files.length, ' files viewed'],
                          }),
                          o.jsx('progress', {
                            style: { width: '100%' },
                            max: i.files.length,
                            value: y.size,
                          }),
                        ],
                      }),
                      o.jsxs('span', {
                        children: [
                          'Reviewing:',
                          ' ',
                          o.jsx('code', {
                            className:
                              'bg-github-bg-tertiary px-1.5 py-0.5 rounded text-xs text-github-text-primary',
                            children:
                              i.commit.includes('...') ?
                                o.jsxs(o.Fragment, {
                                  children: [
                                    o.jsxs('span', {
                                      className: 'text-github-text-secondary font-medium',
                                      children: [i.commit.split('...')[0], '...'],
                                    }),
                                    o.jsx('span', {
                                      className: 'font-medium',
                                      children: i.commit.split('...')[1],
                                    }),
                                  ],
                                })
                              : i.commit,
                          }),
                        ],
                      }),
                      o.jsxs('span', {
                        children: [
                          i.files.length,
                          ' file',
                          i.files.length !== 1 ? 's' : '',
                          ' changed',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          o.jsxs('div', {
            className: 'flex flex-1 overflow-hidden',
            children: [
              o.jsx('div', {
                className: `relative overflow-hidden ${X ? '' : '!transition-all !duration-300 !ease-in-out'}`,
                style: { width: z ? `${S}px` : '0px' },
                children: o.jsxs('aside', {
                  id: 'file-tree-panel',
                  className:
                    'bg-github-bg-secondary border-r border-github-border overflow-y-auto flex flex-col',
                  style: { width: `${S}px`, minWidth: '200px', maxWidth: '600px', height: '100%' },
                  children: [
                    o.jsx('div', {
                      className: 'flex-1 overflow-y-auto',
                      children: o.jsx(Ub, {
                        files: i.files,
                        onScrollToFile: (d) => {
                          const k = document.getElementById(
                            `file-${d.replace(/[^a-zA-Z0-9]/g, '-')}`
                          );
                          k && k.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        },
                        comments: ae,
                        reviewedFiles: y,
                        onToggleReviewed: ye,
                      }),
                    }),
                    o.jsx('div', {
                      className: 'p-4 border-t border-github-border flex justify-end',
                      children: o.jsxs('a', {
                        href: 'https://github.com/yoshiko-pg/difit',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'flex items-center gap-2 text-github-text-secondary hover:text-github-text-primary transition-colors',
                        title: 'View on GitHub',
                        children: [
                          o.jsx('span', { className: 'text-sm', children: 'Star on GitHub' }),
                          o.jsx(th, { size: 18 }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              o.jsx('div', {
                className: `bg-github-border hover:bg-github-text-muted cursor-col-resize ${X ? '' : '!transition-all !duration-300 !ease-in-out'}`,
                style: { width: z ? '4px' : '0px' },
                onMouseDown: ve,
                title: 'Drag to resize file list',
              }),
              o.jsx('main', {
                className: 'flex-1 overflow-y-auto',
                children: i.files.map((d) =>
                  o.jsx(
                    'div',
                    {
                      id: `file-${d.path.replace(/[^a-zA-Z0-9]/g, '-')}`,
                      className: 'mb-6',
                      children: o.jsx(kb, {
                        file: d,
                        comments: ae.filter((k) => k.file === d.path),
                        diffMode: x,
                        reviewedFiles: y,
                        onToggleReviewed: ye,
                        onAddComment: K,
                        onGeneratePrompt: be,
                        onRemoveComment: Ce,
                        onUpdateComment: Ne,
                        syntaxTheme: Y.syntaxTheme,
                        baseCommitish: i.baseCommitish,
                        targetCommitish: i.targetCommitish,
                      }),
                    },
                    d.path
                  )
                ),
              }),
            ],
          }),
          o.jsx(Gb, { isOpen: R, onClose: () => E(!1), settings: Y, onSettingsChange: W }),
        ],
      })
    : o.jsxs('div', {
        className:
          'flex flex-col items-center justify-center h-screen bg-github-bg-primary text-center gap-2',
        children: [
          o.jsx('h2', { className: 'text-github-danger text-2xl mb-2', children: 'No data' }),
          o.jsx('p', {
            className: 'text-github-text-secondary text-base',
            children: 'No diff data available',
          }),
        ],
      })
  );
}
jy.createRoot(document.getElementById('root')).render(
  o.jsx(ps.StrictMode, { children: o.jsx(Xb, {}) })
);
export { Dd as g };
