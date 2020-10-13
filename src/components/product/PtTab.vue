<!--
 * @author: lujie
 * @Date: 2020-07-20 16:59:50
 * @LastEditTime: 2020-07-21 13:41:35
 * @FilePath: \official_website\src\components\product\PtTab.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <ul class="pt-tab fx">
    <li
      @click="$emit('tabclick', i)"
      class="fx fx-v fx-h-c fx-v-c rel"
      v-for="(item, i) in list"
      :key="i"
    >
      <p class="pt-tab-line" v-show="item.active"></p>
      <img :src="item.img" alt="" />
      <p class="f18">{{ item.name }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array
  }
};
</script>

<style lang="scss" scoped>
.pt-tab {
  padding: 30px 0 50px 0;
  > li {
    width: 360px;
    height: 100px;
    box-shadow: 0px 16px 19px 1px rgba(0, 0, 0, 0.06);
    border: 1px solid $border-2;
    margin-left: 60px;
    cursor: pointer;
    > img {
      width: 36px;
    }
    > p {
      margin-top: 8px;
      color: $txt-4;
    }
  }

  > li:first-child {
    margin-left: 0;
  }
  &-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7px;
    background-color: $txt-7;
  }
}
</style>
