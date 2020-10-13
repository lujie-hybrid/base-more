<!--
 * @author: lujie
 * @Date: 2020-07-20 16:59:08
 * @LastEditTime: 2020-07-23 13:36:37
 * @FilePath: \official_website\src\components\product\ProductTwo.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div>
    <pt-tab @tabclick="tabClick" :list="tabList"></pt-tab>
    <!--台式机-->
    <div class="pt-tsj" v-show="activeTabIndex === 0">
      <p class="pt-tsj-desc c-666 f12">
        长城电脑是指由中国长城计算机深圳股份有限公司生产的注册商标为“长城”的电脑产品，整机事业部经过二十几年的发展，已经成为集产品开发设计、生产制造、营销服务于一体的大型综合部门，产品包括台式电脑、笔记本电脑、服务器、数码冲印订单机、卡拉OK点歌机、酒店一体机等，业务范围覆盖自主品牌、ODM和OEM三大领域。长城台式电脑、长城笔记本电脑、长城服务器均被认定为“中国名牌产品”。
        2019年12月12日，《汇桔网•2019胡润品牌榜》发布，长城电脑以60亿元品牌价值排名第159。
      </p>
      <!--第一行-->
      <div class="fx mt30">
        <div class="pt-tsj-wrap1 fx-v-c fx-h-c fx">
          <pt-desc :cont="tsjCont1"></pt-desc>
        </div>
        <el-image
          class="pt-tsj-img"
          :src="tsjCont1.img"
          fit="cover"
          lazy
        ></el-image>
      </div>
      <!--第二行-->
      <div class="fx mt30">
        <div class="fx w600">
          <div class="pt-tsj-wrap2 fx-v-c fx-h-c fx fx-1">
            <pt-desc leftClass="ml10" :cont="tsjCont2"></pt-desc>
          </div>
          <el-image
            class="pt-tsj-img2 pt-tsj-bdHide"
            :src="tsjCont2.img"
            fit="cover"
            lazy
          ></el-image>
        </div>
        <div class="fx w600">
          <el-image
            class="pt-tsj-img2"
            :src="tsjCont3.img"
            fit="cover"
            lazy
          ></el-image>
          <div class="pt-tsj-wrap2 fx-v-c fx-h-c fx fx-1">
            <pt-desc leftClass="ml10" :cont="tsjCont3"></pt-desc>
          </div>
        </div>
      </div>
      <!--第三行-->
      <div class="fx mt30">
        <div class="pt-tsj-wrap1 fx-v-c fx-h-c fx">
          <pt-desc :cont="tsjCont4"></pt-desc>
        </div>
        <el-image
          class="pt-tsj-img pt-tsj-bd"
          :src="tsjCont4.img"
          fit="fill"
          lazy
        ></el-image>
      </div>
      <!--第四行-->
      <div class="fx mt30">
        <div class="fx w600">
          <div class="pt-tsj-wrap2 fx-v-c fx-h-c fx fx-1">
            <pt-desc leftClass="ml10" :cont="tsjCont5"></pt-desc>
          </div>
          <el-image
            class="pt-tsj-img2 pt-tsj-bdHide"
            :src="tsjCont5.img"
            fit="cover"
            lazy
          ></el-image>
        </div>
        <div class="fx w600">
          <el-image
            class="pt-tsj-img2"
            :src="tsjCont6.img"
            fit="cover"
            lazy
          ></el-image>
          <div class="pt-tsj-wrap2 fx-v-c fx-h-c fx fx-1">
            <pt-desc leftClass="ml10" :cont="tsjCont6"></pt-desc>
          </div>
        </div>
      </div>
    </div>
    <!--服务器-->
    <div class="pt-fwq" v-show="activeTabIndex === 1">
      <!--第一行-->
      <div class="fx pt-fwq-bg">
        <div class="pt-fwq-left w600">
          <p class="f22 c-403 fw">产品简介</p>
          <p class="pt-fwq-desc f12 c-666">
            擎天CF520是一款基于国产飞腾FT-1500A/16十六核处理器、国产中文固件和操作系统，定位于多用途市场的通用型服务器。该产品面向党政军和国家重点行业信息系统和业务系统应用需求，突破以往CPU、OS、基础软件及整机系统的设计技术难点，具有高吞吐率，单线程能力强，整数计算性能高，访问和I/O通道带宽高等特点。作为企业级应用及数据中心的服务器产品，擎天CF520提供高性能安全可靠的存储平台，支持多种阵列选择，并配置智能管理系统，支持丰富的数据保护功能，轻松实现远程数据管理和保护。
          </p>
          <p class="f22 c-403 fw mt30">产品特性</p>
          <p class="pt-fwq-desc f12 c-666">
            本机采用的飞腾FT-1500A/16处理器是64位通用CPU，兼容ARM
            V8指令集，集成16个FTC660处理器核，采用28nm工艺流片，工作主频1.5GHz，集成8MB二级cache和8MB三级cache，具有高性能、低功耗等特点，关键技术国内领先。广泛应用于政府办公和金融、税务等各行业信息化系统之中。FT-1500A/16处理器芯片面向服务器应用领域，集成4个DDR3-1600存储控制器，可提供51.2GB/s访存带宽，支持虚拟化功能，最大功耗35W，适用于构建网络前端接入服务器、事务处理服务器、邮件服务器、数据库服务器、存储服务器等产品。
          </p>
        </div>
        <el-image class="pt-fwq-img" :src="fwq1" fit="cover" lazy></el-image>
      </div>
      <div class="pt-fwq-bg pt-fwq-cont">
        <p class="f22 c-403 fw">整机特性</p>
        <div class="mt15 f12 c-666 lh20 tj line-wrap">
          {{
            `1.
          性能强劲：基于飞腾FT-1500A处理器，拥有16个内核，1.5GHz主频，可保障大部分多线程应用，整体算力性能强劲。最大支持64GB高性能DDR3内存。\n2.
          灵活扩展：拥有8×2.5寸、16×2.5寸、24×2.5寸等多种硬盘位机型，可灵活满足各类存储应用选择。\n3.
          高效节能：采用80PLUS高能效电源模块，支持高压直流HVDC技术，提供能源利用率。\n
          4. 冗余设计：采用智能冗余电源，多元化冗余散热方案。\n5.
          安全可控：采用国产自主安全中文固件和国产中文操作系统。\n6.
          智能管理：配置智能管理系统，用户可轻松实现远程监控和管。`
          }}
        </div>
      </div>
      <!--第二行-->
      <div class="fx pt-fwq-bg mt30">
        <el-image class="pt-fwq-img2" :src="fwq2" fit="cover" lazy></el-image>
        <div class="pt-fwq-left w600">
          <p class="f22 c-403 fw">产品简介</p>
          <p class="pt-fwq-desc f12 c-666">
            擎天DF720/723/726/729通用服务器基于国产飞腾FT-2000+/64高性能处理器，采用国产中文化BIOS固件和操作系统。产品突破以往CPU、OS、基础软件及整机系统的设计技术难点，具有核心多、吞吐率高、单线程能力强、整数计算性能高、访问和IO通道带宽高等特点。作为企业级应用及数据中心的通用型服务器产品，擎天DF720/723/726/729提供高性能安全的存储平台，支持多种阵列选择，并配置智能管理系统，提供丰富的数据保护功能，轻松实现远程的数据管理和保护，适用于包含云计算、虚拟化、分布式存储、业务处理等多种场景。
          </p>
          <p class="f22 c-403 fw mt30">产品特性</p>
          <p class="pt-fwq-desc f12 c-666 line-wrap">
            {{
              `本机采用的飞腾FT-2000+/64处理器采用了16nm工艺，片内集成64个自主设计的FTC662处理器核，核心运行频率可达2.2GHz，双精度浮点峰值计算性能可达501GFLOPS；每个处理器核拥有独立的一级数据Cache和一级指令Cache，每八个核共享4MB二级Cache，64个核通过两级异构片上网络进行互连，并由硬件实现Cache数据的一致性维护，集成8路DDR4内存控制器，最高支持512GB DDR4/3200 ECC内存。\nFT-2000+/64设计了数据亲和的多核处理器体系架构，突破了高效乱序超标量流水线、层次化片上并行存储结构、多级异构片上互连网络、高可用处理器设计等关键技术。通过集成高效处理器核心、大规模一性存储架构、层次式二维Mesh互连网络，优化存储访问延时，提供业界领先的计算性能、访存带宽和IO扩展能力。在ARMv8指令集兼容的现有产品中，FT-2000+/64在单核计算能力、单芯片并行性能、单芯片cache一致性规模、访存带宽等指标上处于国际先进水平。`
            }}
          </p>
        </div>
      </div>
      <div class="pt-fwq-bg pt-fwq-cont mt">
        <p class="f22 c-403 fw">整机特性</p>
        <div class="mt15 f12 c-666 lh20 tj line-wrap">
          {{
            `1. 高可靠：突破以往CPU、OS、基础软件及整机系统的设计技术难点，具备更强的兼容性、更高的稳定性和可靠性。\n2. 高性能：采用飞腾FT-2000+/64处理器，高达64个内核，具有多线程能力强，IO通道带宽高，通用性强，配置灵活，高效节能，易于管理等特点。\n3. 高扩展：支持多样的存储配置，灵活的IO扩展能力。\n4. 高效节能： \n 1) 采用80PLUS高能效电源模块，支持高压直流HVDC技术，提供能源利用率；\n 2) 支持智能风扇调速，节能的同时降低了噪音并提高风扇的可靠性。\n5. 易管理：\n 1) BMC全面监测系统健康，可实现核心部件的监测诊断；\n 2) 支持自动部署，固件升级，远程操作等功能，提升部署及运维的效率。\n6. 大容量：最大支持12块3.5寸SATA、SAS硬盘+2块2.5寸SATA、SAS硬盘。\n7. 冗余设计：采用智能冗余电源和多元化冗余散热方案。\n8. 自主安全：采用国产自主安全中文固件和国产中文操作系统`
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PtTab from "./PtTab";
import PtDesc from "./PtDesc";
export default {
  data() {
    return {
      activeTabIndex: 0,
      tabList: [
        {
          name: "台式机",
          img: require("@/assets/images/taishiji.png"),
          active: true
        },
        {
          name: "服务器",
          img: require("@/assets/images/fuwuqi.png"),
          active: false
        },
        {
          name: "打印机",
          img: require("@/assets/images/dayinji.png"),
          active: false
        }
      ],
      tsjCont1: {
        img: `${this.$env.VUE_APP_IMG}tsj1.png`,
        title: "世恒D712/F716",
        keys: [
          "中央处理器",
          "存储",
          "内存",
          "光驱",
          "显示器",
          "生物识别",
          "显卡",
          "扩展卡",
          "机箱",
          "电源",
          "操作系统",
          "固件",
          "按键",
          "外围接口",
          "插槽",
          "指示灯(前置)"
        ],
        values: [
          "飞腾FT-2000/4,4核 2.6GHz",
          "256G/512G",
          "双通道DDR4,标配8GB,最大支持64G",
          "SATA DVDRW",
          "21.5、23.8、旋转升降23.8、27英寸",
          "内置指纹模块和指静脉模块",
          "独立显卡 1GB显存",
          "支持千兆光纤网卡",
          "12L 高标准拓展微塔式机箱，顶置提手，时尚便捷",
          "输入：198-242V，49-51Hz  180W",
          "银河麒麟操作系统桌面版",
          "国产自主安全固件(BIOS/BMC)",
          "电源键，重启键",
          "6个USB3.0接口、1个VGA接口、1个HDMI接口、1个千兆网口、1个千兆网口、2组音频接口",
          "2个PCIE3.0 x16插槽,1个PCIE3.0 x8插槽、1个PCIE3.0 x4插槽",
          "2个指示灯"
        ]
      },
      tsjCont2: {
        img: `${this.$env.VUE_APP_IMG}tsj2.png`,
        title: "世恒TQ250",
        keys: [
          "中央处理器",
          "操作系统",
          "内存",
          "硬盘",
          "显示器",
          "主板",
          "显卡"
        ],
        values: [
          "Intel  i5-6500",
          "Win7 Pro",
          "4G  DDR",
          "SATA 1000GB",
          "19.5 LED",
          "H110 芯片组",
          "Intel 集成核芯显卡"
        ]
      },
      tsjCont3: {
        img: `${this.$env.VUE_APP_IMG}tsj3.png`,
        title: "世恒TQ250",
        keys: [
          "中央处理器",
          "操作系统",
          "内存",
          "硬盘",
          "显示器",
          "主板",
          "显卡"
        ],
        values: [
          "Intel  G3250",
          "预装Win7",
          "4G  DDR3",
          "SATA 500GB",
          "19.5 LED",
          "H81 芯片组",
          "Intel 集成核芯显卡"
        ]
      },
      tsjCont4: {
        img: `${this.$env.VUE_APP_IMG}tsj4.png`,
        title: "嘉翔H F716/HF726",
        keys: [
          "中央处理器",
          "存储",
          "内存",
          "光驱",
          "显示器",
          "显卡",
          "升降支架",
          "电源",
          "操作系统",
          "固件",
          "按键",
          "外围接口",
          "按键",
          "指示灯(前置)"
        ],
        values: [
          "飞腾FT-2000/4,4核 2.6GHz",
          "支持M.2 NVME 2280 SSD 512G/支持SATA3 2.5寸SSD硬盘",
          "双通道DDR4,标配8GB,最大支持64G",
          "SATA DVDRW",
          "23.8英寸全高清广视角，IPS显示屏，健康不闪屏",
          "独立显卡 2GB独立显卡",
          "支持单手操作，垂直升降、仰俯、水平加减45°旋转、垂直90° 旋转且自适应屏幕调整",
          "输入：交流100-242V/2A，输出：直流19V/4.73A",
          "银河麒麟操作系统桌面版",
          "国产BIOS自主安全固件、支持PKS可信计算",
          "电源键，重启键",
          "7个USB3.0接口、1个VGA接口、1个HDMI接口、1个千兆网口、1组音频接口、1个DC-IN接口",
          "亮度按键(+/-)，音量按键(+/-)，电源按键，复位按键，关屏按键",
          "2个指示灯"
        ]
      },
      tsjCont5: {
        img: `${this.$env.VUE_APP_IMG}tsj5.png`,
        title: "俊杰 BQ255",
        keys: ["中央处理器", "主板", "内存", "硬盘", "显示器", "光驱", "显卡"],
        values: [
          "英特尔®酷睿 I5-6500",
          "H110",
          "4G DDR4",
          "SATA 1000G",
          "19.5 WLED",
          "DVDRW",
          "G710 1g 独立显卡"
        ]
      },
      tsjCont6: {
        img: `${this.$env.VUE_APP_IMG}tsj6.png`,
        title: "俊杰 BQ255",
        keys: ["中央处理器", "主板", "内存", "硬盘", "显示器", "光驱", "显卡"],
        values: [
          "英特尔®酷睿 i5-7500",
          "Q270",
          "8G DDR4",
          "SATA 1000G",
          "21.5LED",
          "DVDRW",
          "G710 2G"
        ]
      },
      fwq1: `${this.$env.VUE_APP_IMG}fwq1.png`,
      fwq2: `${this.$env.VUE_APP_IMG}fwq2.png`
    };
  },
  components: {
    PtTab,
    PtDesc
  },
  methods: {
    tabClick(index) {
      if (index === 2) {
        this.$message({
          message: "该功能还在开发中，敬请期待"
        });
        return false;
      }
      this.activeTabIndex = index;
      this.tabList = this.tabList.map((item, i) => {
        item.active = i === index;
        return item;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.pt-tsj {
  padding-bottom: 125px;
  &-text {
    line-height: 20px;
    text-align: justify;
  }
  &-wrap1 {
    width: 600px;
    height: 520px;
    padding: 0 45px;
    background-color: $bg-5;
  }
  &-wrap2 {
    width: 260px;
    height: 264px;
    padding: 0 15px;
    background-color: $bg-5;
  }
  &-img {
    width: 600px;
    height: 520px;
  }
  &-img2 {
    width: 340px;
    height: 264px;
    border: 1px solid $border-2;
  }
  &-bd {
    border: 1px solid $border-2;
  }
  &-bdHide {
    border-right: none;
  }
}
.w600 {
  width: 600px;
}
.pt-fwq {
  padding: 50px 0 350px 0;
  &-bg {
    background-color: $bg-5;
  }
  &-left {
    padding: 30px 40px 0 40px;
    text-align: justify;
  }
  &-desc {
    line-height: 20px;
    margin-top: 15px;
  }
  &-img {
    width: 600px;
    height: 358px;
    border: 1px solid $border-2;
  }
  &-img2 {
    width: 600px;
    height: 435px;
    border: 1px solid $border-2;
  }
  &-cont {
    padding: 30px 40px 35px 40px;
  }
  .mt {
    margin-top: -10px;
  }
}
</style>
