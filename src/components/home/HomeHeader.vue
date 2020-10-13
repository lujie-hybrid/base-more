<!--
 * @author: lujie
 * @Date: 2020-07-15 13:12:58
 * @LastEditTime: 2020-07-23 10:11:27
 * @FilePath: \official_website\src\components\home\HomeHeader.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div class="home-header fx fx-v-c fx-h-c">
    <img src="@/assets/images/logo.png" alt />
    <ul class="fx hh-menu">
      <a
        href="javascript:void(0)"
        @click="jumpTo('1', item)"
        :class="['f18', { 'active fw': item.checked }]"
        v-for="item in menuList"
        :key="item.id"
      >
        {{ item.name }}
        <div class="sub-menu animate__animated animate__slideInDown fwm">
          <span class="sub-line"></span>
          <a
            @click.stop="jumpTo('2', sub)"
            href="javascript:void(0)"
            :class="['f16 c-333', { active: sub.checked }]"
            v-for="(sub, s) in item.children"
            :key="s"
          >
            {{ sub.name }}
          </a>
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1
    };
  },
  computed: {
    menuList() {
      const path = this.$route.path;
      const list = this.$store.state.firstDir.map(item => {
        item.checked = path === item.to.path;
        if (item.children && item.children.length > 0) {
          item.children.forEach(sub => {
            sub.checked = this.$store.state.navId === sub.id;
          });
        }
        return item;
      });
      return list;
    }
  },
  methods: {
    jumpTo(level, item) {
      if (level === "2") {
        this.$store.commit("changeState", {
          prop: "navId",
          val: item.id
        });
      } else {
        this.$store.commit("changeState", {
          prop: "navId",
          val:
            item.children && item.children.length > 0 ? item.children[0].id : ""
        });
      }
      this.$route.path !== item.to.path &&
        this.$router.push({ path: item.to.path });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-header {
  height: 80px;
  > img {
    height: 58px;
  }
}
.hh-menu {
  margin-left: 108px;
  > a {
    display: block;
    text-decoration: none;
    width: 120px;
    height: 80px;
    color: $txt-1;
    text-align: center;
    line-height: 80px;
    cursor: pointer;
    position: relative;
    .sub-menu {
      .sub-line {
        display: block;
        height: 3px;
        background-color: $txt-2;
      }
      display: none;
      /* height: 0;
      transition: height 0.4s ease-out; */
      overflow: hidden;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      top: 77px;
      z-index: 100;
      width: auto;
      /* border-top: 2px solid $txt-2; */
      background-color: $txt-fff;
      > a {
        display: block;
        text-decoration: none;
        height: 48px;
        line-height: 48px;
        padding: 0 30px;
        white-space: nowrap;
        text-align: center;
        border-bottom: 1px solid $border-3;
      }
      > a:last-child {
        border-bottom: none;
      }
      > a:hover,
      > a.active {
        color: $txt-fff;
        font-weight: bold;
        background-color: $txt-2;
      }
    }
  }
  > a:hover {
    color: $txt-2;
    font-weight: bold;
    .sub-menu {
      display: block;
      /* height: 144px; */
    }
  }
  /* > li:nth-child(2):hover {
    .sub-menu {
      height: 95px;
    }
  } */
  > a.active {
    color: $txt-2;
  }
}
</style>
