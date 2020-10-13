const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
module.exports = {
  devServer: {
    proxy: "http://10.168.1.186:22011",
    port: "8848"
  },
  publicPath: "/inner",
  productionSourceMap: false,
  parallel: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `@import "@/assets/scss/variable.scss"`
      },
      scss: {
        prependData: `@import "@/assets/scss/variable.scss";`
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") return;
    config.optimization.splitChunks.cacheGroups.mineVendor = {
      name: "mineV",
      test: /[\\/]node_modules[\\/](element-ui|axios|vue-waterfall2)[\\/]/,
      priority: -5,
      chunks: "initial",
      reuseExistingChunk: true
    };
    // config.plugins.push(
    //   new PrerenderSPAPlugin({
    //     staticDir: path.join(__dirname, "dist"),
    //     routes: ["/", "/home", "/about", "/person", "/product", "/solution"],
    //     renderer: new Renderer({
    //       renderAfterDocumentEvent: "render-event",
    //       headless: false
    //     })
    //   })
    // );
  }
};
