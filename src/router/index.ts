import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Workshop from "../views/Workshop.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Workshop",
    component: Workshop,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
