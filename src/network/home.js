//为了是Home.vue主页里面代码简洁，将请求全部放在home.js文件里面，做一个中间层

//导入request文件，导入方法或函数用{}
import { request } from "./request.js";

//导出请求方法或函数
 export function getLogin(uname,upwd){//登录
   return request({
     //用户名和密码
     url:"/users/login",
     params:{
       uname:uname,
       upwd:upwd
     }
   })
 }

 export function islogin(){//session验证用户是否登录
   return request({
     url:'/users/islogin',
   })
 }

 export function checkLogin(){//token验证用户是否登录
  return request({
    url:'/users/checkLogin'
  })
}

 export function isloginOut(){//退出登录
  return request({
    url:'/users/loginout'
  })
 }

 export function getRegister(uname,upwd,email,phone){//注册
  return request({
    url:'/users/reg',
    params:{
      uname:uname,
      upwd:upwd,
      email:email,
      phone:phone
    }
  })
 }