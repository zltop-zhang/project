import {debounce} from './utils.js'

//混入
export const itemListenerMixin={
  //1.将这里的内容混入组件的data中
  data(){
    return {
      itemImageListener:null
    }
  },
  //将这里的钩子函数混入组件中的钩子函数中
  mounted(){
    let newRefresh=debounce(this.$refs.scroll.refresh,100);
    this.itemImgListener=()=>{
      newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener);
    console.log('混入');
  }
}