<template>
  <div class="goods" >
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>
<style scoped>
  .goods{
    padding:3px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around}
</style>