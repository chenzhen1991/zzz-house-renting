'use strict'
const path = require('path')
const defaultSettings = require('./src/config/index.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const resolve = dir => path.join(__dirname, dir)
// page title
const name = defaultSettings.title || '跩跩珍的租房APP'
// 生产环境，测试和正式
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
    publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
    //  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用
    outputDir: 'dist', //  生产环境构建文件的目录
    assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: !IS_PROD,
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    devServer: {
        port: 8080, // 端口
        open: true, // 启动后打开浏览器
        overlay: {
            //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
            warnings: false,
            errors: true
        },
        // proxy: {
        //     //配置跨域
        //     '/api': {
        //         target: 'https://test.xxx.com', // 接口的域名
        //         // ws: true, // 是否启用websockets
        //         changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        //         pathRewrite: {
        //             '^/api': '/'
        //         }
        //     }
        // }
    },
    css: {
        extract: IS_PROD, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
        sourceMap: false,
        loaderOptions: {
            scss: {
                // 之前参数是 predendData sass-loader9 以后就把
                // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
                // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
                additionalData: `
          @import "assets/css/mixin.scss";
          @import "assets/css/variables.scss";
          $cdn: "${defaultSettings.$cdn}";
          `
            }
        }
    },
    configureWebpack: config => {
        config.name = name

        // 为生产环境修改配置...
        // if (IS_PROD) {
        //   // externals
        //   config.externals = externals
        // }
    },
    chainWebpack: config => {
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test

        // 别名 alias
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('api', resolve('src/api'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
        // 打包分析
        if (IS_PROD) {
            config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
                {
                    analyzerMode: 'static'
                }
            ])
        }
    }
}