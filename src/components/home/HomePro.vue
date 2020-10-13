<!--
 * @author: lujie
 * @Date: 2020-07-15 15:59:31
 * @LastEditTime: 2020-08-14 15:28:01
 * @FilePath: \official_website\src\components\home\HomePro.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <ul class="fx">
    <li
      v-for="(item, i) in list"
      :key="i"
      class="fx-v fx fx-v-c home-pro-item rel"
    >
      <img :class="`home-pro-img${i + 1}`" :src="item.img" />
      <a
        href="javascript:void(0)"
        @click="redirectPage(i)"
        class="home-pro-title f20"
      >
        {{ item.title }}
      </a>
      <p class="home-pro-cont c-666 f12">{{ item.cont }}</p>
      <img
        class="home-pro-icon"
        v-show="i === 0"
        src="~@/assets/images/home-icon.png"
        alt=""
      />
      <img
        class="home-pro-icon"
        v-show="i === 1"
        src="~@/assets/images/home-icon.png"
        alt=""
      />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "长城信创档案系统",
          cont:
            "依托数字档案馆建设项目，可实现对系统产生的电子文件的前端控制和文档一体化管理，保证档案信息收集齐全、完整、系统和可用；实现档案信息智能交换、跟踪与互联互通，并实现档案信息分层次多渠道“一站式”检索利用，保障实体档案、电子档案安全存储，全面提高档案信息风险管理能力。建设全国档案综合管理系统及标准规范建设，档案管理业务流程覆盖不同厅局委办多门类综合档案管理，实现电子档案的“收、管、存、用”的需要",
          img: require("../../assets/images/home_pro1.png")
        },
        {
          title: "长城信创档案一体机",
          cont:
            "搭配国产自主固件，并可自主选择国产操作系统，面向党、政、军系统、金融、能源、电信等重点信息化领域的计算机和服务器，满足用户日常办公需要，为国家信息安全提供保障",
          img: require("@/assets/images/home_pro2.png")
        },
        {
          title: "长城信创数字平台",
          cont:
            "以新一代信息技术为支撑，结合云计算、物联网、大数据等前沿理念，以全面透彻的感知、互动协同的互联、智能融合的应用以及以人为本的可持续创新为主要建设内容，对传统信息进行异构采集、智能管理、安全保存，并通过数字平台提供公共信息主动服务和共享互动利用的信息集成系统，实现对资料等信息的集中统一管理、安全保护和综合开发利用",
          img: require("@/assets/images/home_pro3.png")
        }
      ]
    };
  },
  methods: {
    redirectPage(index) {
      const nav = this.$store.state.firstDir[1].children;
      this.$store.commit("changeState", {
        prop: "navId",
        val: nav[index].id
      });
      this.$router.push({ path: nav[index].to.path });
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-pro {
  &-item {
    width: 390px;
    height: 360px;
    margin-left: 15px;
    border-radius: 10px;
    padding-top: 35px;
    box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.16);
  }
  &-img1 {
    width: 100px;
    height: 98px;
  }
  &-img2 {
    width: 121px;
    height: 97px;
  }
  &-img3 {
    width: 123px;
    height: 94px;
  }
  &-title {
    font-weight: bold;
    color: $txt-5;
    margin: 20px 0 17px 0;
    text-decoration: none;
  }
  &-cont {
    width: 300px;
    text-align: justify;
  }
  > li:first-child {
    margin-left: 0;
  }
  &-icon {
    position: absolute;
    right: -30.5px;
    top: 172px;
  }
}
</style>
