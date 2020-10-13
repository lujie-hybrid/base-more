<!--
 * @author: lujie
 * @Date: 2020-07-15 10:05:46
 * @LastEditTime: 2020-07-24 16:11:31
 * @FilePath: \official_website\src\views\Home.vue
 * @descripttion: [desc]
 * @editor: [your git name]
-->
<template>
  <div>
    <home-head-bg></home-head-bg>
    <div class="home-product fx fx-v fx-v-c">
      <div class="home-title">
        <p class="f16">PRODUCTS</p>
        <p>产品中心</p>
      </div>
      <home-pro></home-pro>
      <div class="hp-btn sy" @click="redirectPage('1')">查看更多</div>
    </div>
    <div class="home-plan-wrap fx fx-v fx-v-c">
      <div class="home-title">
        <p class="f16">SOLUTION</p>
        <p>行业解决方案</p>
      </div>
      <home-plan></home-plan>
      <div class="hp-btn sy" @click="redirectPage('2')">查看更多</div>
    </div>
    <div class="fx fx-v fx-v-c">
      <div class="home-title">
        <p class="f16">OUR ADVANTAGE</p>
        <p>我们的优势</p>
      </div>
      <home-good></home-good>
    </div>
  </div>
</template>

<script>
import HomeHeadBg from "@/components/home/HomeHeadBg";
import HomePro from "@/components/home/HomePro";
import HomePlan from "@/components/home/HomePlan";
import HomeGood from "@/components/home/HomeGood";
export default {
  components: {
    HomeHeadBg,
    HomePro,
    HomePlan,
    HomeGood
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
  methods: {
    redirectPage(types) {
      const page =
        types === "1"
          ? this.$store.state.firstDir[1]
          : this.$store.state.firstDir[2];
      this.$store.commit("changeState", {
        prop: "navId",
        val: page.children[0].id
      });
      this.$router.push({ path: page.to.path });
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-product {
  margin-top: 62px;
}
.home-title {
  background: url("~@/assets/images/title-bg.png") no-repeat left center;
  padding-left: 20px;
  margin: 58px 0;
  display: inline-block;
  > p:nth-child(1) {
    font-family: Arial;
    color: $txt-2;
    font-weight: bold;
  }
  > p:nth-child(2) {
    font-size: 30px;
    color: $txt-4;
    font-family: sy;
    /* margin-top: -10px; */
  }
}
.hp-btn {
  width: 162px;
  height: 46px;
  background-color: $bg-1;
  box-shadow: 0px 6px 20px 0px rgba(51, 102, 204, 0.1);
  border-radius: 23px;
  color: $txt-7;
  line-height: 46px;
  text-align: center;
  margin: 40px 0 62px 0;
  cursor: pointer;
}
.home-plan-wrap {
  background-color: $bg-2;
}
</style>
