import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Kyc",
    name: "Kyc",
    component: () => import("../views/Kyc.vue"),
  },
  // {
  //   path: "/ESignature",
  //   name: "ESignature",
  //   component: () => import("../views/ESignature.vue"),
  // },
  // {
  //   path: "/ISignSecure",
  //   name: "ISignSecure",
  //   component: () => import("../views/ISignSecure.vue"),
  // },
  // {
  //   path: "/Contact",
  //   name: "Contact",
  //   component: () => import("../views/Contact.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
