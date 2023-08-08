/*! For license information please see 101.bf6f01b7.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [101],
  {
    1087: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = [
        {
          title: "Dashboard",
          TabName: [{ title: "Dashboard", permission: ["View"] }],
        },
        {
          title: "Accounts",
          TabName: [
            {
              title: "Create Account",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "User List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Create Role",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Role List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
          ],
        },
        {
          title: "Product",
          TabName: [
            {
              title: "Product List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Add Product",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            { title: "Type", permission: ["View", "Create", "Edit", "Delete"] },
            {
              title: "Assign To Client",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Assigned List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Rate Master",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Inventory",
              permission: ["View", "Create", "Edit", "Delete"],
            },
          ],
        },
        {
          title: "Brand",
          TabName: [
            {
              title: "Brand List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Category List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
          ],
        },
        {
          title: "Transaction",
          TabName: [
            {
              title: "Place Order",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Order Raise List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Order Received List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Completed Order List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
          ],
        },
        {
          title: "BILLINGS",
          TabName: [
            {
              title: "Purchase Order",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Bills",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "invoice Generator",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "invoice Re-Generator",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "invoices",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Payment Status",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Payment completed",
              permission: ["View", "Create", "Edit", "Delete"],
            },
          ],
        },
        {
          title: "Budget",
          TabName: [
            {
              title: "Budget List",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Budget Assignment",
              permission: ["View", "Create", "Edit", "Delete"],
            },
          ],
        },
        {
          title: "Reports",
          TabName: [
            {
              title: "Date Wise",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Client Wise",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Branch Wise",
              permission: ["View", "Create", "Edit", "Delete"],
            },
            {
              title: "Product Wise",
              permission: ["View", "Create", "Edit", "Delete"],
            },
          ],
        },
        {
          title: "Unique Code",
          TabName: [
            {
              title: "Unique Code",
              permission: ["View", "Create", "Edit", "Delete"],
            },
          ],
        },
        {
          title: "Logs",
          TabName: [
            { title: "Logs", permission: ["View", "Create", "Edit", "Delete"] },
          ],
        },
      ];
    },
    1209: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = [
        { pagename: "Dashboard", permission: ["parentPermit", "View"] },
        { pagename: "Accounts", permission: ["parentPermit"] },
        { pagename: "Create Account", permission: ["View", "Create", "Edit"] },
        { pagename: "User List", permission: ["View", "Edit"] },
        {
          pagename: "Client Account",
          permission: ["View", "Create", "Delete"],
        },
        { pagename: "Accountant Account", permission: ["View", "Create"] },
        { pagename: "Create Role", permission: ["View", "Create"] },
        { pagename: "Role List", permission: ["View"] },
        { pagename: "Product", permission: ["parentPermit"] },
        { pagename: "Product List", permission: ["View", "Create"] },
        { pagename: "Add Product", permission: ["View", "Create"] },
        { pagename: "Type", permission: ["View", "Create"] },
        { pagename: "Assign To Client", permission: ["View"] },
        { pagename: "Rate Master", permission: ["View"] },
      ];
    },
    2382: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return N;
        });
      var a = n(841),
        r = n(80),
        i = n(31),
        o = n(39),
        l = n(1),
        s = n.n(l),
        c = n(820),
        u = n(197),
        d = n(821),
        m = n(822),
        f = n(839),
        p = n(838),
        h = n(835),
        v = n(1087),
        g = (n(45), n(833)),
        y = n(62),
        b = n(842),
        E = n.n(b),
        w = n(1209);
      n(22);
      function x() {
        x = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = "function" == typeof Symbol ? Symbol : {},
          i = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          l = r.toStringTag || "@@toStringTag";
        function s(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (D) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var i = t && t.prototype instanceof m ? t : m,
            o = Object.create(i.prototype),
            l = new C(r || []);
          return a(o, "_invoke", { value: w(e, n, l) }), o;
        }
        function u(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (D) {
            return { type: "throw", arg: D };
          }
        }
        e.wrap = c;
        var d = {};
        function m() {}
        function f() {}
        function p() {}
        var h = {};
        s(h, i, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(L([])));
        g && g !== t && n.call(g, i) && (h = g);
        var y = (p.prototype = m.prototype = Object.create(h));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var r;
          a(this, "_invoke", {
            value: function (a, i) {
              function o() {
                return new t(function (r, o) {
                  !(function a(r, i, o, l) {
                    var s = u(e[r], e, i);
                    if ("throw" !== s.type) {
                      var c = s.arg,
                        d = c.value;
                      return d && "object" == typeof d && n.call(d, "__await")
                        ? t.resolve(d.__await).then(
                            function (e) {
                              a("next", e, o, l);
                            },
                            function (e) {
                              a("throw", e, o, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (c.value = e), o(c);
                            },
                            function (e) {
                              return a("throw", e, o, l);
                            }
                          );
                    }
                    l(s.arg);
                  })(a, i, r, o);
                });
              }
              return (r = r ? r.then(o, o) : o());
            },
          });
        }
        function w(e, t, n) {
          var a = "suspendedStart";
          return function (r, i) {
            if ("executing" === a)
              throw new Error("Generator is already running");
            if ("completed" === a) {
              if ("throw" === r) throw i;
              return V();
            }
            for (n.method = r, n.arg = i; ; ) {
              var o = n.delegate;
              if (o) {
                var l = N(o, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === a) throw ((a = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              a = "executing";
              var s = u(e, t, n);
              if ("normal" === s.type) {
                if (
                  ((a = n.done ? "completed" : "suspendedYield"), s.arg === d)
                )
                  continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((a = "completed"), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function N(e, t) {
          var n = t.method,
            a = e.iterator[n];
          if (void 0 === a)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                N(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var r = u(a, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), d
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function C(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function L(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                r = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: V };
        }
        function V() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = p),
          a(y, "constructor", { value: p, configurable: !0 }),
          a(p, "constructor", { value: f, configurable: !0 }),
          (f.displayName = s(p, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(E.prototype),
          s(E.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, a, r, i) {
            void 0 === i && (i = Promise);
            var o = new E(c(t, n, a, r), i);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          b(y),
          s(y, l, "Generator"),
          s(y, i, function () {
            return this;
          }),
          s(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var a in t) n.push(a);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var a = n.pop();
                  if (a in t) return (e.value = a), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = L),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function a(n, a) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  o = i.completion;
                if ("root" === i.tryLoc) return a("end");
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, "catchLoc"),
                    s = n.call(i, "finallyLoc");
                  if (l && s) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var r = this.tryEntries[a];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), j(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var r = a.arg;
                    j(n);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: L(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function N() {
        var e = Object(l.useState)(""),
          t = Object(o.a)(e, 2),
          n = t[0],
          b = t[1],
          N = Object(l.useState)(""),
          O = Object(o.a)(N, 2),
          j = O[0],
          C = O[1],
          L = Object(l.useState)([]),
          V = Object(o.a)(L, 2),
          D = V[0],
          T = V[1],
          k = Object(l.useState)(""),
          P = Object(o.a)(k, 2),
          R = (P[0], P[1]),
          S = Object(l.useState)(!1),
          _ = Object(o.a)(S, 2),
          z = (_[0], _[1]),
          A = Object(l.useState)({}),
          M = Object(o.a)(A, 2),
          F = (M[0], M[1]),
          G = Object(l.useState)(Object(i.a)(w.a)),
          I = Object(o.a)(G, 2),
          B = (I[0], I[1], Object(y.h)());
        Object(l.useEffect)(
          Object(r.a)(
            x().mark(function e() {
              var t;
              return x().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = new FormData()).append("role_name", B.id),
                        (e.next = 4),
                        g.a
                          .post("/editroleview", t)
                          .then(function (e) {
                            var t, n, a, r, i, o, l, s, c, u, d;
                            T(
                              null === e ||
                                void 0 === e ||
                                null === (t = e.data) ||
                                void 0 === t ||
                                null === (n = t.data) ||
                                void 0 === n
                                ? void 0
                                : n.permissioninfo
                            ),
                              console.log(
                                "origional permission",
                                null === e ||
                                  void 0 === e ||
                                  null === (a = e.data) ||
                                  void 0 === a ||
                                  null === (r = a.data) ||
                                  void 0 === r
                                  ? void 0
                                  : r.permissioninfo
                              ),
                              C(
                                null === e ||
                                  void 0 === e ||
                                  null === (i = e.data) ||
                                  void 0 === i ||
                                  null === (o = i.data) ||
                                  void 0 === o ||
                                  null === (l = o.roleinfo) ||
                                  void 0 === l
                                  ? void 0
                                  : l.role_name
                              ),
                              b(
                                null === e ||
                                  void 0 === e ||
                                  null === (s = e.data) ||
                                  void 0 === s ||
                                  null === (c = s.data) ||
                                  void 0 === c ||
                                  null === (u = c.roleinfo) ||
                                  void 0 === u
                                  ? void 0
                                  : u.description
                              ),
                              F(
                                null === e ||
                                  void 0 === e ||
                                  null === (d = e.data) ||
                                  void 0 === d
                                  ? void 0
                                  : d.data
                              );
                          })
                          .catch(function (e) {
                            console.log(e);
                          })
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          []
        ),
          console.log(D);
        return s.a.createElement(
          s.a.Fragment,
          null,
          D && D.length
            ? s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(
                  c.a,
                  { className: "" },
                  s.a.createElement(
                    c.a,
                    { className: "m-2" },
                    s.a.createElement(y.b, {
                      render: function (e) {
                        var t = e.history;
                        return s.a.createElement(
                          u.a,
                          {
                            className: " btn btn-danger float-right",
                            onClick: function () {
                              return t.push("/app/freshlist/house/userlist");
                            },
                          },
                          " ",
                          "Back",
                          " "
                        );
                      },
                    })
                  ),
                  s.a.createElement(
                    d.a,
                    { xl: 12 },
                    s.a.createElement(
                      m.a,
                      null,
                      s.a.createElement("div", { className: "container" }),
                      s.a.createElement(
                        c.a,
                        null,
                        s.a.createElement(
                          d.a,
                          null,
                          s.a.createElement(
                            "div",
                            { className: "d-flex justify-content-center" },
                            s.a.createElement(
                              "h3",
                              { className: "py-3" },
                              "Existing Given Permissions"
                            )
                          )
                        )
                      ),
                      s.a.createElement(
                        f.a,
                        {
                          onSubmit: function (e) {
                            var t, r;
                            e.preventDefault();
                            var i = JSON.parse(
                              localStorage.getItem("userData")
                            );
                            console.log(
                              null === i ||
                                void 0 === i ||
                                null === (t = i.Userinfo) ||
                                void 0 === t
                                ? void 0
                                : t.id
                            );
                            var o = new FormData();
                            o.set(
                              "user_id",
                              null === i ||
                                void 0 === i ||
                                null === (r = i.Userinfo) ||
                                void 0 === r
                                ? void 0
                                : r.id
                            ),
                              o.set("role_name", j),
                              o.set("description", n),
                              o.set("selectedarray", JSON.stringify(D)),
                              g.a
                                .post("/editrolesubmit_post", o)
                                .then(function (e) {
                                  console.log(e),
                                    E()("Success", "Role Created"),
                                    T(""),
                                    b(""),
                                    C("");
                                  var t,
                                    n = document.getElementsByName("check"),
                                    r = Object(a.a)(n);
                                  try {
                                    for (r.s(); !(t = r.n()).done; ) {
                                      t.value.checked = !1;
                                    }
                                  } catch (i) {
                                    r.e(i);
                                  } finally {
                                    r.f();
                                  }
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                          },
                        },
                        s.a.createElement(
                          "div",
                          { className: "container mt-5" },
                          s.a.createElement(
                            c.a,
                            { className: "mb-3 container" },
                            s.a.createElement(
                              d.a,
                              null,
                              s.a.createElement(p.a, null, "Existing Role *"),
                              s.a.createElement(h.a, {
                                disabled: !0,
                                value: j,
                                onChange: function (e) {
                                  return C(e.target.value);
                                },
                                type: "text",
                                placeholder: "Enter Role",
                                className: "form-control",
                              })
                            ),
                            s.a.createElement(
                              d.a,
                              null,
                              s.a.createElement(
                                p.a,
                                null,
                                "Existing Role Description * "
                              ),
                              s.a.createElement(h.a, {
                                disabled: !0,
                                value: n,
                                onChange: function (e) {
                                  return b(e.target.value);
                                },
                                type: "text",
                                placeholder: "Enter Role Desc..",
                              })
                            )
                          )
                        ),
                        s.a.createElement(
                          "section",
                          { className: "mt-5 container" },
                          s.a.createElement(
                            c.a,
                            { className: "gy-0 container" },
                            v.a &&
                              (null === v.a || void 0 === v.a
                                ? void 0
                                : v.a.map(function (e, t) {
                                    var n;
                                    return s.a.createElement(
                                      d.a,
                                      {
                                        key: t,
                                        style: {
                                          borderRadius: "12px",
                                          height: "".concat(
                                            (
                                              null === D || void 0 === D
                                                ? void 0
                                                : D.some(function (t) {
                                                    return (
                                                      t.pagename ===
                                                        (null === e ||
                                                        void 0 === e
                                                          ? void 0
                                                          : e.title) &&
                                                      t.permission.includes(
                                                        "parentPermit"
                                                      )
                                                    );
                                                  })
                                            )
                                              ? "340px"
                                              : "40px"
                                          ),
                                        },
                                        className: "customcol gy-0 mb-2 ",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                      },
                                      s.a.createElement(
                                        c.a,
                                        {
                                          style: {
                                            lineHeight: "44px",
                                            borderRadius: "6px",
                                            background: "#f7f7f8",
                                          },
                                          className: "roleheading",
                                        },
                                        s.a.createElement(
                                          d.a,
                                          {
                                            className: "gy-2",
                                            lg: "4",
                                            sm: "4",
                                            md: "4",
                                          },
                                          s.a.createElement(
                                            "div",
                                            { className: "align-item-center" },
                                            s.a.createElement("input", {
                                              checked:
                                                null === D || void 0 === D
                                                  ? void 0
                                                  : D.some(function (t) {
                                                      return (
                                                        t.pagename ===
                                                          (null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.title) &&
                                                        t.permission.includes(
                                                          "parentPermit"
                                                        )
                                                      );
                                                    }),
                                              className: "mt-1",
                                              name: "check",
                                              id: "head_".concat(
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.title
                                              ),
                                              onClick: function (n) {
                                                !(function (e, t) {
                                                  z(e), R(t);
                                                })(n.target.checked, t),
                                                  handleSelectPage(
                                                    n.target.value,
                                                    n.target.checked,
                                                    "parentPermit",
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.title,
                                                    t
                                                  );
                                              },
                                              style: {
                                                height: "19px",
                                                width: "26px",
                                              },
                                              type: "checkbox",
                                            }),
                                            s.a.createElement(
                                              "span",
                                              { className: "mx-3 gy-0" },
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.title
                                            )
                                          )
                                        ),
                                        s.a.createElement(
                                          d.a,
                                          { className: "gy-2" },
                                          s.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "d-flex justify-content-center",
                                            },
                                            s.a.createElement(
                                              "span",
                                              { className: "mx-3" },
                                              " View"
                                            )
                                          )
                                        ),
                                        s.a.createElement(
                                          d.a,
                                          { className: "gy-2" },
                                          s.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "d-flex justify-content-center",
                                            },
                                            s.a.createElement(
                                              "span",
                                              { className: "mx-3" },
                                              " Create"
                                            )
                                          )
                                        ),
                                        s.a.createElement(
                                          d.a,
                                          { className: "gy-2" },
                                          s.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "d-flex justify-content-center",
                                            },
                                            s.a.createElement(
                                              "span",
                                              { className: "mx-3" },
                                              " Edit"
                                            )
                                          )
                                        ),
                                        s.a.createElement(
                                          d.a,
                                          { className: "gy-2" },
                                          s.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "d-flex justify-content-center",
                                            },
                                            s.a.createElement(
                                              "span",
                                              { className: "mx-3" },
                                              " Delete"
                                            )
                                          )
                                        )
                                      ),
                                      (
                                        null === D || void 0 === D
                                          ? void 0
                                          : D.some(function (t) {
                                              return (
                                                t.pagename ===
                                                  (null === e || void 0 === e
                                                    ? void 0
                                                    : e.title) &&
                                                t.permission.includes(
                                                  "parentPermit"
                                                )
                                              );
                                            })
                                      )
                                        ? s.a.createElement(
                                            s.a.Fragment,
                                            null,
                                            s.a.createElement(
                                              s.a.Fragment,
                                              null,
                                              s.a.createElement(
                                                "div",
                                                { className: "container" },
                                                s.a.createElement(
                                                  "div",
                                                  { className: "gy-2 mt-2" },
                                                  null === e ||
                                                    void 0 === e ||
                                                    null === (n = e.TabName) ||
                                                    void 0 === n
                                                    ? void 0
                                                    : n.map(function (e, t) {
                                                        var n;
                                                        return s.a.createElement(
                                                          s.a.Fragment,
                                                          null,
                                                          s.a.createElement(
                                                            c.a,
                                                            {
                                                              key: t,
                                                              className: "",
                                                            },
                                                            s.a.createElement(
                                                              d.a,
                                                              {
                                                                lg: "4",
                                                                sm: "4",
                                                                md: "4",
                                                              },
                                                              s.a.createElement(
                                                                "h6",
                                                                {
                                                                  className:
                                                                    "mt-1",
                                                                },
                                                                " ",
                                                                null === e ||
                                                                  void 0 === e
                                                                  ? void 0
                                                                  : e.title
                                                              )
                                                            ),
                                                            null === e ||
                                                              void 0 === e ||
                                                              null ===
                                                                (n =
                                                                  e.permission) ||
                                                              void 0 === n
                                                              ? void 0
                                                              : n.map(function (
                                                                  t,
                                                                  n
                                                                ) {
                                                                  var a =
                                                                    null ===
                                                                      D ||
                                                                    void 0 === D
                                                                      ? void 0
                                                                      : D.some(
                                                                          function (
                                                                            n
                                                                          ) {
                                                                            return (
                                                                              n.pagename ===
                                                                                e.title &&
                                                                              n.permission.includes(
                                                                                t
                                                                              )
                                                                            );
                                                                          }
                                                                        );
                                                                  return s.a.createElement(
                                                                    d.a,
                                                                    {
                                                                      key: n,
                                                                      lg: "2",
                                                                      md: "2",
                                                                      sm: "2",
                                                                    },
                                                                    s.a.createElement(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "d-flex justify-content-center",
                                                                      },
                                                                      s.a.createElement(
                                                                        "input",
                                                                        {
                                                                          checked:
                                                                            a,
                                                                          name: "check",
                                                                          id: "item_".concat(
                                                                            t
                                                                          ),
                                                                          onClick:
                                                                            function (
                                                                              a
                                                                            ) {
                                                                              handleSelectPage(
                                                                                a
                                                                                  .target
                                                                                  .value,
                                                                                a
                                                                                  .target
                                                                                  .checked,
                                                                                t,
                                                                                e.title,
                                                                                n
                                                                              );
                                                                            },
                                                                          style:
                                                                            {
                                                                              height:
                                                                                "19px",
                                                                              width:
                                                                                "26px",
                                                                            },
                                                                          type: "checkbox",
                                                                        }
                                                                      )
                                                                    )
                                                                  );
                                                                })
                                                          )
                                                        );
                                                      })
                                                )
                                              )
                                            )
                                          )
                                        : null
                                    );
                                  }))
                          )
                        )
                      )
                    )
                  )
                )
              )
            : s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(
                  c.a,
                  null,
                  s.a.createElement(
                    d.a,
                    null,
                    s.a.createElement(
                      "div",
                      {
                        className:
                          "d-flex justify-content-center align-item-center mt-5",
                      },
                      s.a.createElement("h2", null, "Loading...")
                    )
                  )
                )
              )
        );
      }
    },
    833: function (e, t, n) {
      "use strict";
      var a = n(45),
        r = n
          .n(a)
          .a.create({
            baseURL: "https://invoice-o.com/Infinity/api/ApiCommonController",
          });
      t.a = r;
    },
    835: function (e, t, n) {
      "use strict";
      var a = n(6),
        r = n(7),
        i = n(16),
        o = n(19),
        l = n(1),
        s = n.n(l),
        c = n(2),
        u = n.n(c),
        d = n(5),
        m = n.n(d),
        f = n(4),
        p = [
          "className",
          "cssModule",
          "type",
          "bsSize",
          "valid",
          "invalid",
          "tag",
          "addon",
          "plaintext",
          "innerRef",
        ],
        h = {
          children: u.a.node,
          type: u.a.string,
          size: u.a.oneOfType([u.a.number, u.a.string]),
          bsSize: u.a.string,
          valid: u.a.bool,
          invalid: u.a.bool,
          tag: f.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          plaintext: u.a.bool,
          addon: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
        },
        v = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).getRef = n.getRef.bind(
                Object(i.a)(n)
              )),
              (n.focus = n.focus.bind(Object(i.a)(n))),
              n
            );
          }
          Object(o.a)(t, e);
          var n = t.prototype;
          return (
            (n.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (n.focus = function () {
              this.ref && this.ref.focus();
            }),
            (n.render = function () {
              var e = this.props,
                t = e.className,
                n = e.cssModule,
                i = e.type,
                o = e.bsSize,
                l = e.valid,
                c = e.invalid,
                u = e.tag,
                d = e.addon,
                h = e.plaintext,
                v = e.innerRef,
                g = Object(r.a)(e, p),
                y = ["radio", "checkbox"].indexOf(i) > -1,
                b = new RegExp("\\D", "g"),
                E = u || ("select" === i || "textarea" === i ? i : "input"),
                w = "form-control";
              h
                ? ((w += "-plaintext"), (E = u || "input"))
                : "file" === i
                ? (w += "-file")
                : "range" === i
                ? (w += "-range")
                : y && (w = d ? null : "form-check-input"),
                g.size &&
                  b.test(g.size) &&
                  (Object(f.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (o = g.size),
                  delete g.size);
              var x = Object(f.mapToCssModules)(
                m()(
                  t,
                  c && "is-invalid",
                  l && "is-valid",
                  !!o && "form-control-" + o,
                  w
                ),
                n
              );
              return (
                ("input" === E || (u && "function" === typeof u)) &&
                  (g.type = i),
                g.children &&
                  !h &&
                  "select" !== i &&
                  "string" === typeof E &&
                  "select" !== E &&
                  (Object(f.warnOnce)(
                    'Input with a type of "' +
                      i +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete g.children),
                s.a.createElement(
                  E,
                  Object(a.a)({}, g, {
                    ref: v,
                    className: x,
                    "aria-invalid": c,
                  })
                )
              );
            }),
            t
          );
        })(s.a.Component);
      (v.propTypes = h), (v.defaultProps = { type: "text" }), (t.a = v);
    },
    838: function (e, t, n) {
      "use strict";
      var a = n(6),
        r = n(7),
        i = n(1),
        o = n.n(i),
        l = n(2),
        s = n.n(l),
        c = n(5),
        u = n.n(c),
        d = n(4),
        m = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        f = s.a.oneOfType([s.a.number, s.a.string]),
        p = s.a.oneOfType([
          s.a.bool,
          s.a.string,
          s.a.number,
          s.a.shape({ size: f, order: f, offset: f }),
        ]),
        h = {
          children: s.a.node,
          hidden: s.a.bool,
          check: s.a.bool,
          size: s.a.string,
          for: s.a.string,
          tag: d.tagPropType,
          className: s.a.string,
          cssModule: s.a.object,
          xs: p,
          sm: p,
          md: p,
          lg: p,
          xl: p,
          widths: s.a.array,
        },
        v = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        g = function (e, t, n) {
          return !0 === n || "" === n
            ? e
              ? "col"
              : "col-" + t
            : "auto" === n
            ? e
              ? "col-auto"
              : "col-" + t + "-auto"
            : e
            ? "col-" + n
            : "col-" + t + "-" + n;
        },
        y = function (e) {
          var t = e.className,
            n = e.cssModule,
            i = e.hidden,
            l = e.widths,
            s = e.tag,
            c = e.check,
            f = e.size,
            p = e.for,
            h = Object(r.a)(e, m),
            v = [];
          l.forEach(function (t, a) {
            var r = e[t];
            if ((delete h[t], r || "" === r)) {
              var i,
                o = !a;
              if (Object(d.isObject)(r)) {
                var l,
                  s = o ? "-" : "-" + t + "-";
                (i = g(o, t, r.size)),
                  v.push(
                    Object(d.mapToCssModules)(
                      u()(
                        (((l = {})[i] = r.size || "" === r.size),
                        (l["order" + s + r.order] = r.order || 0 === r.order),
                        (l["offset" + s + r.offset] =
                          r.offset || 0 === r.offset),
                        l)
                      )
                    ),
                    n
                  );
              } else (i = g(o, t, r)), v.push(i);
            }
          });
          var y = Object(d.mapToCssModules)(
            u()(
              t,
              !!i && "sr-only",
              !!c && "form-check-label",
              !!f && "col-form-label-" + f,
              v,
              !!v.length && "col-form-label"
            ),
            n
          );
          return o.a.createElement(
            s,
            Object(a.a)({ htmlFor: p }, h, { className: y })
          );
        };
      (y.propTypes = h), (y.defaultProps = v), (t.a = y);
    },
    839: function (e, t, n) {
      "use strict";
      var a = n(6),
        r = n(7),
        i = n(16),
        o = n(19),
        l = n(1),
        s = n.n(l),
        c = n(2),
        u = n.n(c),
        d = n(5),
        m = n.n(d),
        f = n(4),
        p = ["className", "cssModule", "inline", "tag", "innerRef"],
        h = {
          children: u.a.node,
          inline: u.a.bool,
          tag: f.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        v = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).getRef = n.getRef.bind(
                Object(i.a)(n)
              )),
              (n.submit = n.submit.bind(Object(i.a)(n))),
              n
            );
          }
          Object(o.a)(t, e);
          var n = t.prototype;
          return (
            (n.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (n.submit = function () {
              this.ref && this.ref.submit();
            }),
            (n.render = function () {
              var e = this.props,
                t = e.className,
                n = e.cssModule,
                i = e.inline,
                o = e.tag,
                l = e.innerRef,
                c = Object(r.a)(e, p),
                u = Object(f.mapToCssModules)(m()(t, !!i && "form-inline"), n);
              return s.a.createElement(
                o,
                Object(a.a)({}, c, { ref: l, className: u })
              );
            }),
            t
          );
        })(l.Component);
      (v.propTypes = h), (v.defaultProps = { tag: "form" }), (t.a = v);
    },
    841: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = n(105);
      function r(e) {
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (e = Object(a.a)(e))) {
            var t = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          i,
          o = !0,
          l = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              o || null == r.return || r.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=101.bf6f01b7.chunk.js.map
