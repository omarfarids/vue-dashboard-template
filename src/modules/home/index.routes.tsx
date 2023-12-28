import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/dashboard",
    component: () => import("./pages/Home.vue"),
    name: "Home",
    meta: {
      header: "Dashboard",
    },
  },
  {
    path: "/onboarding",
    component: () => import("./pages/Home.vue"),
    name: "Onboarding",
    meta: {
      header: "Onboarding",
    },
  },
  {
    path: "/users",
    component: () => import("./pages/Home.vue"),
    name: "Users",
    meta: {
      header: "Users",
    },
  },
  {
    path: "/transactions",
    component: () => import("./pages/Home.vue"),
    name: "Transactions",
    meta: {
      header: "Transactions",
    },
  },
  {
    path: "/reports",
    component: () => import("./pages/Home.vue"),
    name: "Reports",
    meta: {
      header: "Reports",
    },
  },
] as Array<RouteRecordRaw>;
