
module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({ // 把px单位换算成rem单位
              rootValue: 40, // 换算的基数(设计图750的根字体为32)
              rootValuePC: 192,
              selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
              propList: ['*']
            })
          ]
        }
      }
    },
      //vue-cli3.0 里面的 vue.config.js做配置
      devServer: {
        proxy:'http://192.168.40.104:8875'
        },
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
    
}