//获取 VUE_APP_ENV 非 NODE_ENV，测试环境依然 console
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
// const defaultSettings = require('./src/config/index.js')
const plugins = [
  [
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    },
    'vant'
  ]
]
// 去除 console.log
if (IS_PROD) {
  plugins.push('transform-remove-console')
}
module.exports = {
  presets: [['@vue/cli-plugin-babel/preset', {useBuiltIns: 'entry'}]],
  plugins,
  // css: {
  //   extract: IS_PROD,
  //   sourceMap: false,
  //   loaderOptions: {
  //     // 给 scss-loader 传递选项
  //     scss: {
  //       // 注入 `sass` 的 `mixin` `variables` 到全局, $cdn可以配置图片cdn
  //       // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
  //       prependData: `
  //       @import "assets/css/mixin.scss";
  //       @import "assets/css/variables.scss";
  //       $cdn: "${defaultSettings.$cdn}";
  //        `,
  //     },
  //   },
  // },
};
