import { Router as h } from "../node_modules/@vaadin_router@1.7.5/node_modules/@vaadin/router/dist/vaadin-router.js";
import "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/reactive-element.js";
import { html as u } from "../node_modules/lit-html@2.7.2/node_modules/lit-html/lit-html.js";
import { LitElement as m } from "../node_modules/lit-element@3.3.1/node_modules/lit-element/lit-element.js";
import { customElement as c } from "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/decorators/custom-element.js";
import "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, i = (a, e, o, r) => {
  for (var t = r > 1 ? void 0 : r ? v(e, o) : e, n = a.length - 1, s; n >= 0; n--)
    (s = a[n]) && (t = (r ? s(e, o, t) : s(t)) || t);
  return r && t && f(e, o, t), t;
};
let l = class extends m {
  constructor() {
    super(...arguments), this.router = new h(void 0, { baseUrl: "/planner" }), this.routes = [
      {
        path: "/planner",
        component: "gate-planner-layout",
        children: [
          {
            path: "",
            component: "gate-planner-button",
            action: () => {
              import("./button.cmp.js");
            }
          }
        ]
      }
    ];
  }
  connectedCallback() {
    super.connectedCallback(), this.router.setRoutes(this.routes), this.router.setOutlet(this);
  }
  render() {
    return u`
		<slot></slot>
		`;
  }
};
l = i([
  c("gate-planner-app")
], l);
let p = class extends m {
  render() {
    return u`
		<slot></slot>
		`;
  }
};
p = i([
  c("gate-planner-layout")
], p);
export {
  l as GateApp,
  p as GateLayout
};
//# sourceMappingURL=app.cmp.js.map
