//配置别名
const path = require('path');//引入path模块
 function resolve(dir){
     return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
 }
module.exports={
  lintOnSave: true,
  chainWebpack:(config)=>{
    config.resolve.alias
    //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@',resolve('src'))
      .set('common',resolve('src/common'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('views',resolve('src/components'))
      .set('network',resolve('src/network'))
    //注意 store 和 router 没必要配置　　
    }
 }