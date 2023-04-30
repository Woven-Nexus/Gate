import { Router as m } from "../node_modules/@vaadin_router@1.7.5/node_modules/@vaadin/router/dist/vaadin-router.js";
import "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/reactive-element.js";
import { html as h } from "../node_modules/lit-html@2.7.2/node_modules/lit-html/lit-html.js";
import { LitElement as i } from "../node_modules/lit-element@3.3.1/node_modules/lit-element/lit-element.js";
import { customElement as u } from "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/decorators/custom-element.js";
import "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
var f = Object.defineProperty, d = Object.getOwnPropertyDescriptor, c = (o, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? d(e, s) : e, n = o.length - 1, p; n >= 0; n--)
    (p = o[n]) && (t = (r ? p(e, s, t) : p(t)) || t);
  return r && t && f(e, s, t), t;
};
let a = class extends i {
  constructor() {
    super(...arguments), this.router = new m(), this.routes = [
      {
        path: "/",
        component: "gate-layout",
        children: [
          {
            path: "planner",
            component: "gate-planner-app",
            action: () => {
              import("/planner/index.js");
            }
          }
        ]
      }
    ];
  }
  connectedCallback() {
    super.connectedCallback(), this.router.setRoutes(this.routes), this.router.setOutlet(this.shadowRoot);
  }
};
a = c([
  u("gate-app")
], a);
let l = class extends i {
  render() {
    return h`
		<slot></slot>
		`;
  }
};
l = c([
  u("gate-layout")
], l);
export {
  a as GateApp,
  l as GateLayout
};
//# sourceMappingURL=app.cmp.js.map
