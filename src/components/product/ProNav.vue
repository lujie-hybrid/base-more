<!--
 * @author: lujie
 * @Date: 2020-07-20 10:27:48
 * @LastEditTime: 2020-07-24 16:23:57
 * @FilePath: \official_website\src\components\product\ProNav.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <ul class="pro-nav">
    <li
      :style="{ width: width + 'px', paddingRight: pd + 'px' }"
      @click="$emit('navclick', item, level)"
      :class="['f20 rel cur', { active: item.active }]"
      v-for="item in navList"
      :key="item.id"
    >
      <div v-show="item.active" class="pro-nav-arrow"></div>
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 290
    },
    pd: {
      type: Number,
      default: 40
    },
    level: String,
    navList: Array
  }
};
</script>

<style lang="scss" scoped>
.pro-nav {
  > li {
    height: 120px;
    background-color: $bg-4;
    color: $txt-5;
    text-align: right;
    line-height: 120px;
    font-weight: bold;
  }
  > :hover {
    background-color: $bg-1;
  }
  > li.active {
    background-color: $bg-1;
  }
  &-arrow {
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translate(0, -50%);
    width: 0;
    height: 0;
    border-width: 15px;
    border-style: solid;
    border-color: transparent;
    border-left-color: $bg-1;
    z-index: 100;
  }
}
</style>
