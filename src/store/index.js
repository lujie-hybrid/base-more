import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pathname: "",
    navId: "",
    firstDir: []
  },
  mutations: {
    /**
     * 直接改变state的属性值的通用方法，逻辑简单
     * @param {状态} state
     * @param {载荷} 属性和值
     */
    changeState(state, { prop, val }) {
      state[prop] = val;
    }
  },
  actions: {},
  modules: {}
});
