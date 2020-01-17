import axios from 'axios'
import store from '../store'
import router from '../router'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:5050',
    // baseURL: 'http://106.54.54.237:8000/api/w1',
    timeout: 5000,
    withCredentials:true
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用——接口判断、加上请求头
  instance.interceptors.request.use(config => {
    if(config.url=='/users/islogin'){
    }else if(config.url=='/users/reg'){
    }else if(config.url=='/users/loginout'){
    }else if(config.url=='/product/'){
    }else{
      if(store.state.token){
        config.headers.Authorization=store.state.token
        console.log(config.headers.Authorization)
      }else{
        //跳转登录页
        window.location.href='/logint'
      }
    }
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    if(res.data.status==403 || res.data.status==401){
      alert(res.data.msg)
      window.location.href='/logint'
    }
    return res.data
  }, err => {
    // console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config) //返回的是一个promise
}
