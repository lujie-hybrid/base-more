<!--
 * @author: lujie
 * @Date: 2020-07-20 17:05:29
 * @LastEditTime: 2020-07-24 16:24:55
 * @FilePath: \official_website\src\views\Solution.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div class="pro">
    <div
      class="pro-img fx fx-v-c fx-h-c"
      :style="{
        backgroundImage: `url(${$env.VUE_APP_IMG}solution-banner.png)`
      }"
    >
      <img src="~@/assets/images/solution-text.png" />
    </div>
    <div class="pro-inner">
      <div class="bread-wrap"><my-bread :bread="bread"></my-bread></div>
      <div class="fx">
        <pro-nav
          :width="270"
          :pd="50"
          level="1"
          @navclick="navClick"
          :navList="stNavResult"
        ></pro-nav>
        <div class="pro-cont fx-1">
          <div class="pro-cont-inner rel" v-loading="loading">
            <ul>
              <li v-for="(c1, c) in contList" :key="c">
                <div v-if="c1.title" class="rich-title">
                  {{ c1.title }}
                </div>
                <div class="fx fx-h-c pt20" v-if="c1.imageUrl">
                  <el-image :src="c1.imageUrl" fit="cover" lazy></el-image>
                </div>
                <div v-if="c1.content" class="rich-text">
                  {{ `${c1.content}` }}
                </div>
              </li>
            </ul>
            <img
              class="pro-cont-img"
              src="~@/assets/images/product-foot.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProNav from "@/components/product/ProNav";
export default {
  data() {
    return {
      stNav: this.$store.state.firstDir[2].children,
      contList: [],
      loading: false
    };
  },
  computed: {
    stNavResult() {
      const id = this.$store.state.navId;
      return this.stNav.map(item => {
        item.active = id === item.id;
        return item;
      });
    },
    bread() {
      const id = this.$store.state.navId;
      let bread = ["解决方案"];
      this.$store.state.firstDir[2].children.forEach(ele => {
        if (ele.id === id) {
          bread.push(ele.name);
        }
      });
      return bread;
    }
  },
  components: {
    ProNav
  },
  created() {
    this.getRightMsg();
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
  methods: {
    getRightMsg() {
      this.loading = true;
      const id = this.$store.state.navId;
      this.$server.offcial.cont(
        res => {
          this.loading = false;
          this.contList = res.list;
        },
        { urlId: id }
      );
    },
    navClick(msg) {
      this.$store.commit("changeState", {
        prop: "navId",
        val: msg.id
      });
      this.getRightMsg();
    }
  }
};
</script>

<style lang="scss" scoped>
.pro {
  &-img {
    height: 178px;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &-inner {
    width: 1200px;
    margin: 0 auto;
  }
  &-cont {
    background-color: $bg-5;
    padding: 40px;
    &-inner {
      background-color: $txt-fff;
      min-height: 100%;
      padding: 0 40px 280px 40px;
    }
    &-img {
      right: 25px;
      bottom: 25px;
      position: absolute;
      width: 390px;
      height: 252px;
    }
  }
}
.rich-title {
  font-size: 16px;
  color: $txt-4;
  font-weight: bold;
  padding-top: 30px;
}
.rich-title-margin {
  margin-top: 0;
}
.rich-text {
  white-space: pre-line;
  font-size: 12px;
  color: $txt-6;
  line-height: 20px;
  padding-top: 15px;
}
.bread-wrap {
  padding: 25px 0 20px 0;
  border-bottom: 1px solid $border-3;
  margin-bottom: 30px;
}
</style>
