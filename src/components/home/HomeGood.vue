<!--
 * @author: lujie
 * @Date: 2020-07-15 17:27:38
 * @LastEditTime: 2020-07-23 10:15:09
 * @FilePath: \official_website\src\components\home\HomeGood.vue
 * @descripttion: [desc]
 * @editor: [your git name]
-->
<template>
  <div class="pb120">
    <ul class="fx">
      <li class="home-good-item" v-for="(item, i) in list1" :key="i">
        <p class="f28 rel">
          {{ item.title }}
          <img class="home-good-img" src="@/assets/images/yy.png" />
        </p>
        <p class="f14">
          {{ item.cont }}
        </p>
      </li>
    </ul>
    <ul class="fx mt30">
      <li class="home-good-item" v-for="(item, i) in list2" :key="i">
        <p class="f28 rel">
          {{ item.title }}
          <img class="home-good-img" src="@/assets/images/yy.png" />
        </p>
        <p class="f14">{{ item.cont }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        {
          title: "品牌价值",
          cont:
            "中国长城是相关行业技术创新龙头企业，研发出中国第一台具有自主知识产权的微型计算机、第一块计算机硬盘、第一款终端ASIC芯片等，掌握可信计算技术、安全存储技术、计算机底层安全防护技术以及虚拟化等核心技术，具备整机研发、BIOS固件研发、主板设计、BMC和服务器管理软件等自主可控产品关键技术的开发能力"
        },
        {
          title: "技术实力",
          cont:
            "公司坚持自主创新，拥有3063项专利，其中包括1208项发明专利。相关创新成果获国家科技进步奖一等奖两项、二等奖一项，省部级奖项百余项，十余项科技成果通过鉴定评价为国际先进"
        }
      ],
      list2: [
        {
          title: "安全可靠",
          cont:
            "软硬件一体开发、适配、部署，掌握核心技术，围绕“芯-端-云”生态链丰富、完善、闭合，核心自主安全技术的迭代发展。筑牢网信产业安全底座，打造成为具有鲜明特色的央企典范，重现王者归来，积极为加快建设网络强国贡献力量"
        },
        {
          title: "资源优势",
          cont:
            "公司客户主要为国家部委、地方政府部门、军工企业、金融机构、大中型企事业单位，这些优质的客户资源有利于促进公司的持续快速发展"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home-good {
  width: 1200px;
  &-item {
    width: 582px;
    height: 216px;
    padding: 20px 30px;
    box-shadow: 0px 0px 10px 0px rgba(32, 28, 12, 0.1);
    > p:nth-child(1) {
      color: $txt-5;
      text-align: center;
      font-family: "sy";
    }
    > p:nth-child(2) {
      color: $txt-4;
      margin-top: 25px;
      text-align: justify;
    }
  }
  &-item:nth-child(2) {
    margin-left: 35px;
  }
  &-img {
    position: absolute;
    left: 34%;
    top: 0;
  }
}
</style>
