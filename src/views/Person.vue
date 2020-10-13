<!--
 * @author: lujie
 * @Date: 2020-07-21 15:13:46
 * @LastEditTime: 2020-07-24 16:37:25
 * @FilePath: \official_website\src\views\Person.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div>
    <div
      class="per-img fx fx-v-c fx-h-c"
      :style="{ backgroundImage: `url(${$env.VUE_APP_IMG}person-banner.png)` }"
    >
      <img src="~@/assets/images/person-text.png" />
    </div>
    <!--列表-->

    <waterfall :data="list" :width="580" class="per-list" :gutterWidth="40">
      <template>
        <div
          :class="[
            'per-item',
            { 'per-item-l': i % 2 === 0 },
            { 'per-item-r': i % 2 !== 0 }
          ]"
          v-for="(item, i) in list"
          :key="item.id"
        >
          <div class="fx fx-h-sp">
            <div>
              <p class="f20 c-403 fw">{{ item.jobName }}</p>
              <p class="f14 c-999 mt15">
                <i class="el-icon-location-outline"></i>
                {{ item.jobAddress
                }}<span v-if="item.sex" class="per-left">{{ item.sex }}</span
                ><span v-if="item.ageRand" class="per-left">{{
                  item.ageRand
                }}</span
                ><span class="per-left">招聘{{ item.personNum }}人</span
                ><span class="per-left">{{ item.jobEducation }}</span
                ><span class="per-left">{{ item.workYear }}年以上工作经验</span>
              </p>
            </div>
            <a href="#contact" class="per-btn">投递职位</a>
          </div>
          <p class="mt30 f18 c-403 fw">任职要求</p>
          <p class="line-wrap lh22 mt10 f14 c-333">{{ item.jobRequest }}</p>
          <p class="mt30 f18 c-403 fw">岗位职责</p>
          <p class="line-wrap lh22 mt10 f14 c-333">{{ item.jobDuty }}</p>
        </div>
      </template>
    </waterfall>
    <div class="per-contact-wrap">
      <div id="contact" class="per-contact fx fx-h-sp fx-v-c">
        <div>
          <p class="f20 c-fff fw per-contact-title">应聘联系方式</p>
          <p class="f14 c-fff lh22"><span class="fw">HR</span>：沈女士</p>
          <p class="f14 c-fff lh22">
            <span class="fw">TEL</span>：0513-85925066
          </p>
          <p class="f14 c-fff lh22">
            <span class="fw">E-MAIL</span>：shenwenwen@greatwall.com.cn
          </p>
        </div>
        <img
          class="per-contact-img"
          src="~@/assets/images/person-foot.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
  methods: {
    getData() {
      this.$server.offcial.person(res => {
        this.list = res.list;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.per {
  &-img {
    height: 178px;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &-list {
    width: 1200px;
    padding: 40px 0 0 0;
    margin: 0 auto;
  }
  &-item {
    width: 565px;
    margin-top: 30px;
    border: solid 1px $border-3;
    padding: 30px 30px 40px 30px;
  }
  &-item-l {
    margin-left: 10px;
  }
  &-item-r {
    margin-right: 10px;
  }
  &-item:hover {
    box-shadow: 0px 0 10px 5px rgba(0, 0, 0, 0.1);
  }
  &-btn {
    text-decoration: none;
    display: block;
    width: 96px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    background-color: $txt-2;
    border-radius: 6px;
    color: $txt-fff;
  }
  &-left {
    margin-left: 15px;
  }
  &-contact {
    margin: 30px 0 0 10px;
    background-color: $bg-7;
    box-shadow: 0px 10px 20px 0px rgba(35, 5, 5, 0.1);
    border-radius: 20px;
    width: 565px;
    height: 155px;
    padding: 0 10px 0 34px;
    &-title {
      padding-bottom: 8px;
    }
    &-img {
      width: 204px;
      height: 137px;
    }
    &-wrap {
      width: 1200px;
      margin: 0 auto;
      padding-bottom: 120px;
    }
  }
}
</style>
