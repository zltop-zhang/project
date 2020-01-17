import Vue from 'vue'
import VueRouter from 'vue-router'
//路由懒加载的方式
 const Home=()=>import('../views/home/Home.vue')
 const HomeToken=()=>import('../views/home/HomeToken.vue')
 const Detail=()=>import('../views/home/Detail.vue')
 const Product=()=>import('../views/home/Product.vue')
 const Login=()=>import('../views/home/Login.vue')
 const LoginToken=()=>import('../views/home/LoginToken.vue')
 const Register=()=>import('../views/home/Register.vue')
//1.安装路由
Vue.use(VueRouter)

//2.创建路由字典
const routes = [
  {path: '',redirect: '/home'},
  {path: '/home',component: Home},
  {path: '/homet',component: HomeToken},
  {path: '/detail/:lid',component: Detail},
  {path: '/product',component: Product},
  {path: '/login',component: Login},
  {path: '/logint',component: LoginToken},
  {path: '/register',component: Register}
]

//3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

