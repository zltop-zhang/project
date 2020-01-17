<template>
  <div class="goods-item">
    <img :src="showImage" @load="imageLoad" @click="goodsItemClick">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showImage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  methods:{
    imageLoad(){//图片加载完触发事件
      this.$bus.$emit("itemImageLoad")
    },
    goodsItemClick(){//通过发送新的detail加参数的方式访问新的详情页，并传过去商品编号iid
      this.$router.push('/detail/'+this.goodsitem.iid)//获取详情页商品数据
    }
  }
}
</script>
<style scoped>
  .goods-item{
    padding-bottom:10px;
    width:48%;
  }
  .goods-item img{
    width:100%;
    border-radius:5px;
  }
  .goods-info{
   font-size:12px;
   text-align: center;
   overflow: hidden;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-info .price{
    color:var(--color-high-text);
    margin-right:10px;
  }

  .goods-info .collect::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg");
    background-repeat:no-repeat;
    background-size: 14px 14px; 
    background-position:0 1px;   
  }
 
</style>