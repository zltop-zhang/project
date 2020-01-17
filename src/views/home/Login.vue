<template>
  <div class="loginBox">
    <div class="loginSpan">
      <span>欢 迎 登 陆</span>
    </div>
    <el-form label-width="70px" :rules="loginRules" ref='loginForm' :model="loginForm">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" size="small" type="text" 
        v-model="loginForm.username" style="width:80%"></el-input>
      </el-form-item>
        <el-form-item  label="密码" prop="upwd">
          <el-input placeholder="请输入密码" size="small" 
          v-model="loginForm.upwd" style="width:80%"></el-input>
        </el-form-item>
      <el-form-item style="text-align:center !important;" label-width="0">
        <el-button type="primary" @click.native="login(loginForm)">登录</el-button>
      </el-form-item>
      <div class="span">
        <span>忘记密码</span>
        <span @click="jumpRehister">用户注册</span>
      </div>
    </el-form>
    
  </div>
</template>
<script>
import {isvalidPhone,isvalidEmail,isvalidUpwd,isvalidUname} from 'common/utils.js'
import {getLogin} from 'network/home.js'

export default {
  data(){
    var validUname=(rule,value,callback)=>{//判断用户名
      if(!value){
        callback(new Error("用户名不能为空"))
        }else if(!isvalidUname(value)){
          callback("用户名格式错误")
        }else{
          callback()
        }
    };
    var validUpwd=(rule,value,callback)=>{//判断密码
      if(!value){
        callback(new Error("密码不能为空"))
        }else if(!isvalidUpwd(value)){
          callback("密码格式错误")
        }else{
          callback()
        }
      };
    return {
      loginForm:{username:"",upwd:""},
      loginRules:{
        username:[{validator:validUname,trigger:"blur"}],
        upwd:[{validator:validUpwd,trigger:"blur"}]
      }
    }
  },
  methods:{
    login(formName){
      console.log(formName)
      var uname=formName.username;
      var upwd=formName.upwd;
      getLogin(uname,upwd).then(res=>{
        if(res===1){
          alert('登陆成功')
          this.$router.push('/home')
        }else{
          alert('登录失败')
          this.loginForm.username="";
          this.loginForm.upwd="";
        }
      })
      // console.log(this.$refs.loginForm.validate((valid) => {
      //   if (valid) {
      //   // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
      //   alert("登陆成功")
      //   this.$router.replace("/container");
      //     } else {
      //     return false;
      //   }
      //   })
      // )
    },
    jumpRehister(){
      this.$router.push('/register')
    }
  }
}
</script>
<style scoped>
 
  .loginBox{
    width:350px;
    height:260px;
    position:fixed;
    left:50%;
    top:50%;
    margin-left:-175px;
    margin-top:-130px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3)
  }
  .loginSpan{
    font-size:24px;
    text-align: center;
    margin:15px 0;
  }
  div.span{
    text-align: center;
    margin-top:-10px;}
  .span span{
    font-size:14px;
    color:#409EFF
  }
  .span span:nth-child(2){
    margin-left:10px;
  }
</style>