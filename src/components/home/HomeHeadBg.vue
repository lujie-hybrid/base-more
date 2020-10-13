<!--
 * @author: lujie
 * @Date: 2020-07-15 13:47:07
 * @LastEditTime: 2020-07-23 13:23:48
 * @FilePath: \official_website\src\components\home\HomeHeadBg.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div class="home-bg">
    <el-image
      class="home-bg-image"
      :src="`${$env.VUE_APP_IMG}home_head_bg.jpg`"
      lazy
      :style="{ height: `${imgHeight}px` }"
    ></el-image>
    <p class="c-fff f28 home-bg-text">
      产品设计开发/整机组装测试/物流及客户服务/PCBA
    </p>
    <img class="home-bg-txtimg" src="@/assets/images/home_head_text.png" />
    <img
      class="home-bg-move animate__pulse animate__animated"
      :src="`${$env.VUE_APP_IMG}bg-move.png`"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgHeight: (900 * window.innerWidth) / 1920
    };
  }
};
</script>

<style lang="scss" scoped>
.home-bg {
  position: relative;
  overflow: hidden;
  &-image {
    width: 100%;
  }
  &-text {
    position: absolute;
    left: 19%;
    top: 383px;
  }
  &-txtimg {
    height: 152px;
    top: 190px;
    left: 19%;
    position: absolute;
  }
  &-move {
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.01, 1.01, 1.01);
    transform: scale3d(1.01, 1.01, 1.01);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__pulse {
  animation-name: pulse;
  animation-timing-function: ease-in-out;
}
.animate__animated {
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
</style>
