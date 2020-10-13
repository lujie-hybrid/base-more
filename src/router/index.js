import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { getFirstDir } from "./routeOperator";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: "/home/"
  }
];

// 路由的自动注入
const requireViews = require.context("@/views", true, /Layout.vue$/);

requireViews.keys().forEach(filename => {
  const view = filename.replace(/\.\//, "").replace(/\.\w+$/, "");
  const pos = view.lastIndexOf("/");
  const innerPath = view.slice(0, pos);
  const pathArr = innerPath.split("/");
  if (pathArr.length === 1) {
    routes.push({
      path: `/${view.toLowerCase()}/`,
      name: view.toLowerCase().replace(/\//g, "-"),
      component: () =>
        import(/* webpackChunkName: "about" */ `@/views/${view}.vue`),
      children: []
    });
  } else {
    pathArr.pop();
    const itemPath = routes.find(
      d => d.path === `/${pathArr.join("/")}/layout`
    );
    itemPath.children.push({
      path: `/${view.toLowerCase()}/`,
      name: view.toLowerCase().replace(/\//g, "-"),
      component: () =>
        import(/* webpackChunkName: "about" */ `@/views/${view}.vue`),
      children: []
    });
  }
});

function findRoute(target, paths, path) {
  paths.forEach(r => {
    if (r.path === path) {
      target.path = r;
    }
    if (r.children && r.children.length > 0) {
      findRoute(target, r.children, path);
    }
  });
}

const requirePageViews = require.context("@/views", true, /\.vue$/);
requirePageViews.keys().forEach(async filename => {
  const view = filename.replace(/\.\//, "").replace(/\.\w+$/, "");
  if (view.toLowerCase().split("/").length === 1) {
    routes.push({
      path: `/${view.toLowerCase()}/`,
      name: view.toLowerCase().replace(/\//g, "-"),
      component: () =>
        import(/* webpackChunkName: "about" */ `../views/${view}.vue`)
    });
  } else {
    const pos = view.lastIndexOf("/");
    const innerPath = view.slice(0, pos);
    if (!view.includes("Layout")) {
      let result = { path: {} };
      findRoute(result, routes, `/${innerPath}/layout`);
      result.path.children.push({
        path: `/${view.toLowerCase()}/`,
        name: view.toLowerCase().replace(/\//g, "-"),
        component: () =>
          import(/* webpackChunkName: "about" */ `../views/${view}.vue`)
      });
    }
  }
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  getFirstDir(store, next, to);
});

export default router;
