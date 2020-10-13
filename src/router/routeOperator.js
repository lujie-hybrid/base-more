import Vue from "vue";
export const getFirstDir = (store, next, to) => {
  if (store.state.firstDir.length === 0) {
    Vue.prototype.$server.offcial.firstDir(res => {
      const redirectPath = [
        "/home/",
        "/product/",
        "/solution/",
        "/person/",
        "/about/"
      ];
      const list = res.list.map((item, i) => {
        item.to = { path: redirectPath[i] };
        if (
          item.children &&
          item.children.length > 0 &&
          !store.state.navId &&
          to.path === item.to.path
        ) {
          store.commit("changeState", {
            prop: "navId",
            val: item.children[0].id
          });
        }
        if (item.children && item.children.length > 0) {
          item.children.forEach(chd => {
            chd.to = { path: redirectPath[i] };
          });
        }
        return item;
      });
      store.commit("changeState", {
        prop: "firstDir",
        val: list
      });
      next();
    });
  } else {
    next();
  }
};
