import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//初始化数据
    //将用户名存入公共管理状态中,逻辑与存储，这样刷新页面的时候，页面仍然保存着用户名 
    user_name:'' || localStorage.getItem('user_name'),
    //将token保存进公共管理状态
    token:
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  },
  mutations: {
    //修改user_name用户名
    handleUserName (state, uname) {
      state.user_name = uname;
      localStorage.setItem('user_name',uname);
    },
    //修改token
    settoken(state,a){
      state.token=a
    }
  },
  getters:{
    //相当于计算属性，他的返回值会根据它的依赖被缓存起来，只有当依赖发生变化时，会重新计算
    //用于过滤和计算的状态
    getUserName(state){//在主页用计算属性获取
      return state.user_name
    }
  },
  actions: {
  },
  modules: {
  }
})
