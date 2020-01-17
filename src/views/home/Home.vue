<template>
<!--container容器-->
  <el-container>
    <el-header style="padding:0px">
      <el-menu mode="horizontal" style="border:none;padding:0" background-color="#545c64" 
       text-color="#fff" active-text-color="#ffd04b" :default-active="activeIndex">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item> 
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        <el-menu-item class="login"  v-if="active==true">
          <span @click="jumpLogin">登录</span>
          <span style="margin-left:10px" @click="jumpReg">注册</span>
        </el-menu-item>
        <el-menu-item v-else class="hasLogined">
          <span>个人中心</span>
          <span style="margin-left:10px" @click="loginOut">退出登录</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <!--el-menu一级菜单-->
        <el-menu background-color="#545c64" style="border:none"  
          active-text-color="#ffd04b" text-color="#fff" :default-active="activeIndex">
          <!--二级菜单submenu-->
          <el-submenu index=1>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <!--二级菜单栏的子菜单栏-->
            <el-submenu index="1-1">
              <template slot="title">爱好</template>
              <el-menu-item index="1-1-1">吃饭</el-menu-item>
              <el-menu-item index="1-1-2">睡觉</el-menu-item>
              <el-menu-item index="1-1-3">打豆豆</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-2">选项二</el-menu-item>  
            <el-menu-item index="1-3">选项三</el-menu-item>  
            <el-menu-item index="1-4">选项四</el-menu-item>  
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-submenu index="2-1">
              <template slot="title">旅游</template>
              <el-menu-item index="2-1-1">美国</el-menu-item>
              <el-menu-item index="2-1-2">加拿大</el-menu-item>
              <el-menu-item index="2-1-3">英国</el-menu-item>
            </el-submenu>
            <el-menu-item index="2-2">选项二</el-menu-item>
            <el-menu-item index="2-3">选项三</el-menu-item>
            <el-menu-item index="2-4">选项四</el-menu-item>
          </el-submenu>
          <el-submenu index=3>
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </template>
          </el-submenu>
          <el-submenu index=4>
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-button type="primary" @click.native="jumpShopping">商品页</el-button>
          <h1>{{active}}</h1>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
<!--
  1.container容器：
  ①el-header标签：头部
  ②el-aside标签：侧边栏
  ③el-main标签：主内容
  ④el-footer标签：底部
  2.menu菜单：
  ①el-menu标签：一级菜单
  ②el-menu-item标签：菜单中的子选项
  ③el-submenu标签：二级菜单
  用法：<el-submenu index="2-1">
          <template slot="title">旅游</template>
          <el-menu-item index="2-1-1">美国</el-menu-item>
          <el-menu-item index="2-1-2">加拿大</el-menu-item>
          <el-menu-item index="2-1-3">英国</el-menu-item>
       </el-submenu>
  <template></template>这是二级菜单的名字
  ④属性：index
-->


  
</template>
<script>
import {islogin,isloginOut} from 'network/home.js'
export default {
  data(){
    return {
      activeIndex:"1",
      active:true
    }
  },
  methods:{
    jumpLogin(){
      this.$router.push('/login');
    },
    jumpShopping(){
      islogin().then(res=>{
        this.$router.push('/product')
      })  
    },
    loginOut(){//登出
      isloginOut().then(res=>{
        this.active=!this.active;
      })
    },
    jumpReg(){
      this.$router.push('/register')
    }
  },
  created(){
    islogin().then(res=>{//组件创建完成进行登录状态判断
      if(res===1){
        this.active=!this.active
      }
    })
  },
  beforeDestroy(){
    // this.$bus.$off('msg')
  }
}
</script>
<style scoped>
  .el-header,.el-footer{
    background-color: pink;
    height:200px;
  }
  .el-aside{
    background-color: purple;
    
  }
  .el-main{
    height:600px;
    background-color: gray;
  }
  .login{
    position: absolute;
    right:20px;
    background-color: transparent!important;
  }
 .hasLogined{
   position:absolute;
   right:20px;
   background-color: transparent!important;
 }

</style>