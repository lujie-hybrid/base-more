<!--
 * @author: lujie
 * @Date: 2020-07-21 16:16:31
 * @LastEditTime: 2020-07-23 13:29:43
 * @FilePath: \official_website\src\views\About.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div>
    <div
      class="about-img fx fx-v-c fx-h-c"
      :style="{ backgroundImage: `url(${$env.VUE_APP_IMG}about-banner.png)` }"
    >
      <img src="~@/assets/images/about-text.png" />
    </div>
    <div class="about-wrap">
      <img class="about-t1" src="~@/assets/images/about-t1.png" alt="" />
      <div class="about-desc rel">
        <el-image
          class="about-desc-img"
          :src="`${$env.VUE_APP_IMG}about-t2.png`"
          fit="cover"
          lazy
        ></el-image>
        <div class="about-desc-cont about-desc-abs1 fx fx-v-c fx-h-c">
          <p class="about-desc-line"></p>
          <p class="line-wrap tj f14 lh24">
            {{
              `江苏长城计算机系统有限公司成立于2020年，是中国电子旗下中国长城的全资子公司。2020年1月，中国长城（江苏）自主创新基地落户江苏省南通市港闸区，通过打造自主创新计算机制造基地、适配中心，快速提升江苏省乃至长三角地区自主安全迭代升级综合能力，推动信创产业全面发展。\n打造以江苏长城为中心、国内一流的信创产业园，通过信创产业集聚，提升南通信创产业在江苏省乃至长三角地区的影响力、竞争力。`
            }}
          </p>
        </div>
      </div>
      <div class="about-desc rel fx fx-h-end about-desc-mt">
        <el-image
          class="about-desc-img"
          :src="`${$env.VUE_APP_IMG}about-t3.png`"
          fit="cover"
          lazy
        ></el-image>
        <div class="about-desc-cont about-desc-abs2 fx fx-v-c fx-h-c">
          <p class="about-desc-line2"></p>
          <p class="line-wrap tj f14 lh24">
            {{
              `为加强信创产业科技攻关、成果转化、人才培养等领域合作，江苏长城与东南大学网络空间安全学院成立自主安全联合实验室。\n为积极探索信息技术与网络安全产学研结合新途径，拓展应用基础研究、产品开发、技术转化、学术交流与人才培养等合作，江苏长城与南通大学联合设立信息创新工程研究中心。`
            }}
          </p>
        </div>
      </div>
      <img class="about-t4" src="~@/assets/images/about-t4.png" alt="" />
      <div class="about-company fx fx-v-c">
        <el-image
          class="about-company-img"
          :src="`${$env.VUE_APP_IMG}about-t5.png`"
          fit="cover"
          lazy
        ></el-image>
        <ul class="about-company-list">
          <li class="fx fx-v-c" v-for="(com, c) in companyList" :key="c">
            <div class="about-company-wrap"><img :src="com.img" /></div>
            <div class="ml40">
              <p class="f24 c-403 fw">{{ com.title }}</p>
              <p class="f16 c-333 mt15 line-wrap">{{ com.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
      <img class="about-t4" src="~@/assets/images/about-t9.png" alt="" />
      <ul class="about-our fx">
        <li class="fx-v fx fx-1" v-for="(our, o) in ourList" :key="o">
          <img :src="our.img" alt="" />
          <p class="f24 c-403 fw mt40">{{ our.title }}</p>
          <p class="f14 c-666 fx-1 fx-v-c fx tj">
            {{ our.desc }}
          </p>
        </li>
      </ul>
    </div>
    <div id="container" class="about-map"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapObj: null,
      geolocation: null,
      companyList: [
        {
          title: "企业愿景",
          desc: "成为网信产业引领者",
          img: require("@/assets/images/about-t6.png")
        },
        {
          title: "企业使命",
          desc: "铸造网安长城，链接幸福世界",
          img: require("@/assets/images/about-t7.png")
        },
        {
          title: "发展战略",
          desc: `专注一类市场\n提供两种服务\n契合三方需求\n强调四个结合`,
          img: require("@/assets/images/about-t8.png")
        }
      ],
      ourList: [
        {
          img: require("@/assets/images/about-t10.png"),
          title: "品牌价值",
          desc:
            "中国长城是相关行业技术创新龙头企业，研发出中国第一台具有自主知识产权的微型计算机、第一块计算机硬盘、第一款终端ASIC芯片等，掌握可信计算技术、安全存储技术、计算机底层安全防护技术以及虚拟化等核心技术，具备整机研发、BIOS固件研发、主板设计、BMC和服务器管理软件等自主可控产品关键技术的开发能力。"
        },
        {
          img: require("@/assets/images/about-t11.png"),
          title: "技术实力",
          desc:
            "公司坚持自主创新，拥有3063项专利，其中包括1208项发明专利。相关创新成果获国家科技进步奖一等奖两项、二等奖一项，省部级奖项百余项，十余项科技成果通过鉴定评价为国际先进。"
        },
        {
          img: require("@/assets/images/about-t12.png"),
          title: "安全可靠",
          desc:
            "软硬件一体开发、适配、部署，掌握核心技术，围绕“芯-端-云”生态链丰富、完善、闭合，核心自主安全技术的迭代发展。筑牢网信产业安全底座，打造成为具有鲜明特色的央企典范，重现王者归来，积极为加快建设网络强国贡献力量。"
        },
        {
          img: require("@/assets/images/about-t13.png"),
          title: "资源优势",
          desc:
            "公司客户主要为国家部委、地方政府部门、军工企业、金融机构、大中型企事业单位，这些优质的客户资源有利于促进公司的持续快速发展。"
        }
      ]
    };
  },
  mounted() {
    this.getLocation();
    document.dispatchEvent(new Event("render-event"));
  },
  methods: {
    getLocation() {
      const lng = 120.82148;
      const lat = 32.07864;
      this.mapObj = new window.AMap.Map("container", {
        zoom: 16,
        center: [lng, lat]
      });
      var marker = new window.AMap.Marker({
        position: new window.AMap.LngLat(lng, lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "江苏长城计算机系统有限公司"
      });

      // 将创建的点标记添加到已有的地图实例：
      this.mapObj.add(marker);

      var position = new window.AMap.LngLat(lng, lat);
      // 引入高级信息窗体组件
      var advancedInfoWindow = new window.AMap.InfoWindow({
        isCustom: true,
        content: this.createWindowCont(marker),
        offset: new window.AMap.Pixel(190, 0)
      });

      // 打开信息窗体
      advancedInfoWindow.open(this.mapObj, position);
    },
    createWindowCont(marker) {
      var info = document.createElement("div");
      info.className = "about-info";
      const html = `<p class="c-333 f14 fw">江苏长城计算机系统有限公司</p><p class="f12 c-666 mt5 fw">售前电话：13801258598</p><p class="f12 c-666 mt5 fw">联系人：柏志强</p><p class="f12 c-666 mt5 fw">公司地址：江苏省南通市港闸区新康路33号云院10号楼</p>`;
      info.innerHTML = html;
      info.onclick = () => {
        marker.markOnAMAP({
          name: "江苏长城计算机系统有限公司",
          position: marker.getPosition()
        });
      };
      return info;
    },
    onError() {}
  }
};
</script>

<style lang="scss" scoped>
.about {
  &-img {
    height: 178px;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &-wrap {
    width: 1200px;
    margin: 0 auto;
  }
  &-t1 {
    width: 385px;
    margin: 40px 0 35px 0;
  }
  &-t4 {
    width: 850px;
    margin-top: 120px;
  }
  &-desc {
    &-mt {
      margin-top: -30px;
    }
    &-img {
      width: 580px;
      height: 440px;
    }
    &-cont {
      width: 681px;
      height: 220px;
      background-color: $bg-2;
      box-shadow: 0px 10px 20px 0px rgba(35, 5, 5, 0.1);
      border-radius: 6px;
      padding: 0 60px 0 75px;
      color: $txt-9;
    }
    &-abs1 {
      position: absolute;
      top: 80px;
      left: 520px;
      z-index: 50;
    }
    &-abs2 {
      position: absolute;
      top: 130px;
      right: 520px;
      z-index: 50;
    }
    &-line {
      position: absolute;
      left: 20px;
      top: 45px;
      width: 32px;
      height: 8px;
      background-color: $txt-2;
      border-radius: 4px;
    }
    &-line2 {
      position: absolute;
      left: 40px;
      top: 60px;
      width: 8px;
      height: 32px;
      background-color: $txt-7;
      border-radius: 4px;
    }
  }
  &-company {
    &-list {
      margin-left: 100px;
      > li {
        margin-top: 90px;
      }
    }
    &-img {
      width: 760px;
      height: 805px;
    }
    &-wrap {
      width: 84px;
    }
  }
  &-our {
    margin-bottom: 120px;
    > li {
      padding: 20px 30px 0 30px;
      height: 430px;
      border-right: 1px solid $border-3;
    }
    > li:nth-child(1) img {
      width: 53px;
    }
    > li:nth-child(2) img {
      width: 50px;
    }
    > li:nth-child(3) img {
      width: 46px;
    }
    > li:nth-child(4) img {
      width: 56px;
    }
    > li:last-child {
      border-right: none;
    }
  }
}
.about-map {
  height: 360px;
  width: 100%;
}
</style>
