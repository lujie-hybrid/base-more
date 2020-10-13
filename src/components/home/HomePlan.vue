<!--
 * @author: lujie
 * @Date: 2020-07-15 16:41:01
 * @LastEditTime: 2020-07-22 15:30:20
 * @FilePath: \official_website\src\components\home\HomePlan.vue
 * @descripttion: [desc]
 * @editor: [your git name]
-->
<template>
  <div class="home-plan">
    <ul class="hp-list fx">
      <li
        :class="['fx fx-v fx-v-c fx-h-c', { active: activeIndex === i }]"
        v-for="(item, i) in list"
        :key="i"
        @mouseover="changeCont(i)"
      >
        <img :src="item.img" alt="" />
        <p class="f20 fw">{{ item.title }}</p>
        <p class="f12 c-666">{{ item.sub }}</p>
      </li>
    </ul>
    <div class="hp-cont f16 c-666" v-if="contList && contList.length > 0">
      <p>
        <span v-if="activeCont[0].name">{{ activeCont[0].name }}：</span
        >{{ activeCont[0].desc }}
      </p>
      <p v-if="activeCont[1]">
        <span>{{ activeCont[1].name }}：</span>{{ activeCont[1].desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contList: [
        [
          {
            name: "安全隔离",
            desc:
              "整个数字平台提供多种网络功能实现管理网、数据网、存储网隔离，实现电子政务专网与外网隔离，充分保障数字平台网络安全性。"
          },
          {
            name: "智慧城市",
            desc:
              "实现互联网与政务服务的深度融合，打造多种模式的政务云，满足政务多样化需求，创新政府管理和服务模式。"
          }
        ],
        [
          {
            name: "技术先进",
            desc:
              "使用多种先进技术，保障数字平台灵活、安全、稳定，为实现智慧企业平台建设做有力支撑。"
          },
          {
            name: "量身定制",
            desc:
              "为企业客户量身定制合规安全、低成本、高性能、高可用的云服务。运用领先技术助力客户科技升级，打造云上企业，智创未来。"
          }
        ],
        [
          {
            name: "高效可靠",
            desc:
              "提供安全、可靠、弹性可扩展的云服务基础平台，支持混合云的灵活部署模式，满足金融机构多种应用场景下日益增长的业务发展需求。"
          },
          {
            name: "数字赋能",
            desc:
              "提供人工智能、大数据等丰富的PaaS能力，为金融机构的反欺诈、风控、智能营销等业务要求提供坚实的平台支撑。"
          }
        ],
        [
          {
            name: "自主知识产权",
            desc:
              "基于开源，自主研发，代码及知识产权自主安全；基于PKS体系，芯片级的国产化数字平台。"
          },
          {
            name: "安全合规",
            desc:
              "可按照国家等保2.0的各级要求建设，符合国家相关安全法规的要求，保障大数据应用合规合法。"
          }
        ],
        [
          {
            name: "",
            desc:
              "为医疗机构提供集IaaS、PaaS和SaaS为一体的综合云服务解决方案，具有高稳定性、统一管理、可视化运营等特点，助力医疗机构构建稳定安全的数字环境和健康的云生态。"
          }
        ]
      ],
      activeIndex: 0,
      activeCont: [],
      list: [
        {
          img: require("@/assets/images/home_plan1.png"),
          title: "政府机关",
          sub: "公安、出入境、各部委"
        },
        {
          img: require("@/assets/images/home_plan2.png"),
          title: "大型企业",
          sub: "信息科技、金融、制造"
        },
        {
          img: require("@/assets/images/home_plan3.png"),
          title: "金融事业",
          sub: "银行、证券交易、金融机构"
        },
        {
          img: require("@/assets/images/home_plan4.png"),
          title: "军工集团",
          sub: "国防领域的大型军工集团"
        },
        {
          img: require("@/assets/images/home_plan5.png"),
          title: "医疗行业",
          sub: "医疗机构"
        }
      ]
    };
  },
  created() {
    this.activeCont = this.contList[0];
  },
  methods: {
    changeCont(i) {
      this.activeCont = this.contList[i];
      this.activeIndex = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.hp-list {
  > li {
    width: 240px;
    height: 200px;
    border-right: 1px solid $border-2;
    background-color: $txt-fff;
    cursor: pointer;
    > img {
      width: 45px;
    }
    > p:nth-child(2) {
      color: $txt-5;
      margin: 20px 0 9px 0;
    }
  }
  > li:last-child {
    border-right: none;
  }
  > li.active {
    background-color: $bg-1;
  }
}
.hp-cont {
  background-color: $bg-1;
  padding: 30px 60px;
  width: 1200px;
  span {
    color: $txt-7;
    font-weight: bold;
  }
}
</style>
