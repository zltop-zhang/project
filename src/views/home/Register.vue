<template>
  <div class="loginBox">
    <div class="registerSpan">
      <span>欢 迎 注 册</span>
    </div>
    <el-form label-width="90px" :rules="registerRules" ref='registerForm' :model="registerForm">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" size="small" type="text" 
        v-model="registerForm.username" style="width:80%"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input placeholder="请输入手机号" size="small" type="text" 
        v-model="registerForm.phone" style="width:80%"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input placeholder="邮箱地址" size="small" type="text" 
        v-model="registerForm.email" style="width:80%"></el-input>
      </el-form-item>
      <el-form-item  label="密码" prop="upwd">
        <el-input placeholder="请输入密码" size="small" 
        v-model="registerForm.upwd" style="width:80%"></el-input>
      </el-form-item>
      <el-form-item  label="确认密码" prop="checkUpwd">
        <el-input placeholder="确认密码" size="small" 
        v-model="registerForm.checkUpwd" style="width:80%"></el-input>
      </el-form-item>
      <el-form-item style="text-align:center !important;" label-width="0">
        <el-button type="primary" @click.native="register(registerForm)">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {isvalidPhone,isvalidEmail,isvalidUpwd,isvalidUname} from 'common/utils.js'
import{getRegister} from 'network/home.js'
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
    var validPhone=(rule,value,callback)=>{//判断用户名(手机号是否正确)
      if(!value){
        callback(new Error("手机号不能为空"))
      }else if(!isvalidPhone(value)){
        callback(new Error("手机号格式错误"))
      }else{
        callback()
      }
    };
    var validEmail=(rule,value,callback)=>{//判断邮箱地址
      if(!value){
        callback(new Error("邮箱地址不能为空"))
      }else if(!isvalidEmail(value)){
        callback(new Error("邮箱格式错误"))
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
    var validCpwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.upwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm:{username:"",phone:"",upwd:"",checkUpwd:"",email:""},
      registerRules:{
        username:[{validator:validUname,trigger:"blur"}],
        phone:[{validator:validPhone,trigger:"blur"}],
        email:[{validator:validEmail,trigger:"blur"}],
        upwd:[{validator:validUpwd,trigger:"blur"}],
        checkUpwd:[{validator:validCpwd,trigger:"blur"}]
      }
    }
  },
  methods:{
    register(formName){
      console.log(formName)
      var uname=formName.username;
      var phone=formName.phone;
      var upwd=formName.upwd;
      var email=formName.email;
      getRegister(uname,upwd,email,phone).then(res=>{
        if(res===1){
          alert("注册成功")
          this.$router.push('/container')
        }
      })
    }
  }
}
</script>
<style scoped>
  .loginBox{
    width:400px;
    height:440px;
    position:fixed;
    left:50%;
    top:50%;
    margin-left:-200px;
    margin-top:-220px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3)
  }
  .registerSpan{
    font-size:24px;
    text-align: center;
    margin:15px 0;
  }
</style>