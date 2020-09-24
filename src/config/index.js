// 根据环境引入不同配置process.env.NODE_ENV
const config = require('./env.' + process.env.NODE_ENV)
module.exports = config