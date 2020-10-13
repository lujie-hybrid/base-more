<template>
  <div id="app">
    <home-header></home-header>
    <router-view />
    <home-foot></home-foot>
  </div>
</template>

<script>
import HomeHeader from "@/components/home/HomeHeader";
import HomeFoot from "@/components/home/HomeFoot";
export default {
  components: {
    HomeHeader,
    HomeFoot
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
@import "@/assets/scss/elementui.scss";
#app {
  min-width: 1200px;
}
</style>
