<!--
 * @author: lujie
 * @Date: 2020-07-20 09:02:06
 * @LastEditTime: 2020-07-24 16:24:15
 * @FilePath: \official_website\src\views\Product.vue
 * @descripttion: [desc]
 * @editor: [your git name]
-->
<template>
  <div class="pro">
    <div
      class="pro-img fx fx-v-c fx-h-c"
      :style="{ backgroundImage: `url(${$env.VUE_APP_IMG}product-banner.png)` }"
    >
      <img src="~@/assets/images/product-text.png" />
    </div>
    <div class="pro-inner">
      <pro-tab @tab="getTabMsg">
        <template v-slot:stcont1>
          <div class="fx">
            <pro-nav level="1" @navclick="navClick" :navList="st1Nav"></pro-nav>
            <div class="pro-cont fx-1">
              <div class="pro-cont-inner rel" v-loading="loading">
                <ul>
                  <li v-for="(c1, c) in contList1" :key="c">
                    <div v-if="c1.title" class="rich-title">{{ c1.title }}</div>
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
                  alt
                />
              </div>
            </div>
          </div>
        </template>
        <template v-slot:stcont2>
          <product-two></product-two>
        </template>
        <template v-slot:stcont3>
          <div class="fx">
            <pro-nav
              :width="240"
              :pd="50"
              level="3"
              @navclick="navClick"
              :navList="st3Nav"
            ></pro-nav>
            <div class="pro-cont fx-1">
              <div class="pro-cont-inner rel" v-loading="loading">
                <ul>
                  <li v-for="(c3, c) in contList3" :key="c">
                    <div v-if="c3.title" class="rich-title">{{ c3.title }}</div>
                    <div class="fx fx-h-c pt20" v-if="c3.imageUrl">
                      <el-image :src="c3.imageUrl" fit="cover" lazy></el-image>
                    </div>
                    <div v-if="c3.content" class="rich-text">
                      {{ c3.content }}
                    </div>
                  </li>
                </ul>
                <img
                  class="pro-cont-img"
                  src="~@/assets/images/product-foot.png"
                  alt
                />
              </div>
            </div>
          </div>
        </template>
      </pro-tab>
    </div>
  </div>
</template>

<script>
import ProTab from "@/components/product/ProTab";
import ProNav from "@/components/product/ProNav";
import ProductTwo from "@/components/product/ProductTwo";
export default {
  data() {
    return {
      st1Nav: [],
      st3Nav: [],
      st1NavId: "",
      st3NavId: "",
      contList1: [],
      loading: false,
      contList3: []
    };
  },
  created() {
    const id = this.$store.state.navId;
    const i = this.$store.state.firstDir[1].children.findIndex(
      d => d.id === id
    );
    this.getCont(i, () => {
      this.getRightMsg(i + 1);
    });
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
  components: {
    ProTab,
    ProNav,
    ProductTwo
  },
  watch: {
    "$store.state.navId": function(val) {
      const id1 = this.$store.state.firstDir[1].children[0].id;
      const id2 = this.$store.state.firstDir[1].children[2].id;
      if (val === id1) {
        this.getTabMsg("0");
      } else if (val === id2) {
        this.getTabMsg("2");
      }
    }
  },
  methods: {
    getTabMsg(num) {
      if (num !== "1") {
        this.getCont(parseInt(num), () => {
          this.getRightMsg(parseInt(num) + 1);
        });
      }
    },
    getCont(num = 0, fn) {
      const id = this.$store.state.navId;
      this.$server.offcial.subDir(
        res => {
          console.log(res);
          const list = res.list.map((item, i) => {
            item.active = this[`st${num + 1}NavId`]
              ? item.id === this[`st${num + 1}NavId`]
              : i === 0;
            return item;
          });
          this[`st${num + 1}Nav`] = list;
          fn();
        },
        { urlId: id }
      );
    },
    getRightMsg(level) {
      this.loading = true;
      console.log(this[`st${level}Nav]`]);
      const result = this[`st${level}Nav`].find(d => d.active);
      this.$server.offcial.cont(
        res => {
          this.loading = false;
          this[`contList${level}`] = res.list;
        },
        { urlId: result.id }
      );
    },
    navClick(msg, level) {
      let list = this[`st${level}Nav`];
      this[`st${level}Nav`] = list.map(item => {
        item.active = item.id === msg.id;
        return item;
      });
      this[`st${level}NavId`] = msg.id;
      this.getRightMsg(level);
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
</style>
