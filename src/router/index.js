import Vue from "vue";
import VueRouter from "vue-router";

import SportsStore from "../components/SportsStore";
import ShoppingCart from "../components/ShoppingCart";
import CheckOut from "../components/CheckOut";
import OrderThanks from "../components/OrderThanks";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: SportsStore },
    { path: "/cart", component: ShoppingCart },
    { path: "/checkout", component: CheckOut},
    { path: "/thanks/:id", component: OrderThanks},
    { path: "*", redirect: "/" }
  ]
});
