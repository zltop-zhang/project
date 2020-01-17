<template>
  <div>
    <h1>{{title}}</h1>
    <el-button @click.native="jumpDetail" type="info">详情页</el-button>
  </div>
</template>
<script>
import {getProduct} from 'network/product.js'
export default {
  data(){
    return {
      title:""
    }
  },
  methods:{
    jumpDetail(){
      this.$router.push('/detail/'+1)
    },
  },
  created(){
    getProduct().then(res=>{
      console.log(res);
      this.title=res;
    })
  }
}
</script>
<style scoped>
   .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: pink;
  }
  .bg-purple-light {
    background: blueviolet;
  }
 .el-row{
   margin-bottom: 10px;
 }
 .layout .el-row:last-child{
   margin-bottom: 0;
 }
</style>