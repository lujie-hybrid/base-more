<!--
 * @author: lujie
 * @Date: 2020-07-20 09:47:07
 * @LastEditTime: 2020-07-20 16:26:22
 * @FilePath: \official_website\src\components\product\ProTab.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div class="rel">
    <div class="bread-wrap">
      <my-bread :bread="bread"></my-bread>
    </div>
    <el-tabs class="pro-tab" :value="activeIndex" @tab-click="tabClick">
      <el-tab-pane
        v-for="(item, i) in tabs"
        :key="item.id"
        :label="item.name"
        :name="item.id"
      >
        <slot :name="`stcont${i + 1}`"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: this.$store.state.firstDir[1].children
    };
  },
  computed: {
    activeIndex() {
      return this.$store.state.navId;
    },
    bread() {
      const id = this.$store.state.navId;
      let bread = ["产品中心"];
      this.$store.state.firstDir.forEach(ele => {
        if (ele.id === id) {
          bread.push(ele.name);
        }
        if (ele.children && ele.children.length > 0) {
          ele.children.forEach(chd => {
            if (chd.id === id) {
              bread.push(chd.name);
            }
          });
        }
      });
      return bread;
    }
  },
  methods: {
    tabClick(msg) {
      this.$store.commit("changeState", {
        prop: "navId",
        val: msg.name
      });
      this.$emit("tab", msg.index);
    }
  }
};
</script>

<style lang="scss" scoped>
.bread-wrap {
  position: absolute;
  top: 28px;
  left: 0;
  z-index: 500;
}
</style>
