import "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/reactive-element.js";
import { html as s } from "../node_modules/lit-html@2.7.2/node_modules/lit-html/lit-html.js";
import { LitElement as a } from "../node_modules/lit-element@3.3.1/node_modules/lit-element/lit-element.js";
import { customElement as f } from "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/decorators/custom-element.js";
import "../node_modules/@lit_reactive-element@1.6.1/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
var u = Object.defineProperty, i = Object.getOwnPropertyDescriptor, v = (l, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? i(r, o) : r, n = l.length - 1, m; n >= 0; n--)
    (m = l[n]) && (e = (t ? m(r, o, e) : m(e)) || e);
  return t && e && u(r, o, e), e;
};
let p = class extends a {
  render() {
    return s`
		Hello I am button
		`;
  }
};
p = v([
  f("gate-planner-button")
], p);
export {
  p as GatePlannerButton
};
//# sourceMappingURL=button.cmp.js.map
