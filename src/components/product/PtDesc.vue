<!--
 * @author: lujie
 * @Date: 2020-07-21 11:01:24
 * @LastEditTime: 2020-07-23 13:32:44
 * @FilePath: \official_website\src\components\product\PtDesc.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div class="pt-desc">
    <p class="pt-desc-title f22">{{ cont.title }}</p>
    <div class="fx fx-h-sp">
      <ul class="pt-desc-left f14 pt-desc-lh">
        <li v-for="(ky, k) in cont.keys" :key="k">{{ ky }}</li>
      </ul>
      <ul :class="['f14 c-666 ml30 pt-desc-lh fx-1', leftClass]">
        <li v-for="(val, v) in cont.values" :key="v">{{ val }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftClass: String,
    cont: Object
  }
};
</script>

<style lang="scss" scoped>
.pt-desc {
  width: 100%;
  &-title {
    color: $txt-4;
    margin-bottom: 15px;
    font-weight: bold;
  }
  &-left {
    color: $txt-4;
  }
  &-lh {
    line-height: 23px;
  }
}
</style>
