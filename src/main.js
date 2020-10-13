import Vue from "vue";
//element-ui
import "element-ui/lib/theme-chalk/index.css";
import "./utils/elementui";
//全局组件
import GlobalComponent from "./components";
Vue.use(GlobalComponent);

import waterfall from "vue-waterfall2";
Vue.use(waterfall);

// api接口ajax配置
import server from "@/api";
Vue.use(server);

import store from "./store";
import router from "./router";

import App from "./Layout.vue";

Vue.prototype.$env = process.env;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
