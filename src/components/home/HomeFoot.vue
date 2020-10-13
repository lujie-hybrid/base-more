<!--
 * @author: lujie
 * @Date: 2020-07-16 09:09:58
 * @LastEditTime: 2020-07-23 10:39:24
 * @FilePath: \official_website\src\components\home\HomeFoot.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <div class="fx-v fx fx-v-c fx-h-c home-foot">
    <ul class="home-foot-link f14  fx">
      <li v-for="(item, i) in links" :key="i">
        <a :href="item.url" target="_blank" class="c-fff">{{ item.name }}</a>
      </li>
    </ul>
    <p class="home-foot-tip f12 mt40">
      Copyright©2018-2020湖南长城计算机系统有限公司<span
        >湘ICP备18017782号-1</span
      >
    </p>
    <p class="home-foot-tip f12 mt10">
      地址: 湖南省株洲市天元区湘芸中路天易科技城<span>电话:0731-22153999</span
      ><span>邮箱:xiachan@GreatWall.com.cn(HR)</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "中国电子",
          url: "https://www.cec.com.cn"
        },
        {
          name: "中国长城",
          url: "http://www.greatwall.cn"
        },
        {
          name: "长城医疗",
          url: "http://www.hngwmt.com"
        },
        {
          name: "长城金融",
          url: "http://financial.gwi.com.cn"
        },
        {
          name: "长城PKS",
          url: "https://www.ccyunchina.com/#/"
        },
        {
          name: "天猫长城官方旗舰店",
          url: "https://greatwall.tmall.com"
        },
        {
          name: "京东长城自营旗舰店",
          url: "https://mall.jd.com/index-1000007264.html"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home-foot {
  height: 180px;
  background-color: $bg-3;
  &-tip {
    color: $bg-2;
    > span {
      margin-left: 20px;
    }
  }
  &-link {
    a {
      text-decoration: none;
    }
    a:hover {
      color: $txt-5;
      font-weight: bold;
    }
    > li {
      padding: 0 20px;
      border-right: 1px solid $txt-8;
    }
    > li:last-child {
      border-right: none;
    }
  }
}
</style>
