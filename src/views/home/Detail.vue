<template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
  </div>
</template>
<script>
import {getDetail} from 'network/detail.js' 
export default {
  data(){
    return {
      lid:null,
      title:'',
      subtitle:''
    }
  },
  created(){
    console.log(this.$store.state.user_name)
    if(this.$store.state.user_name){
      //保存url中的lid
      this.lid=this.$route.params.lid
      //通过lid来请求该编号的数据信息
      getDetail(this.lid).then(res=>{
        console.log(res)
        this.title=res[0].title;
        this.subtitle=res[0].subtitle;
      })
    }else{
      this.$router.replace('/logint')
    }
  }

}
</script>
