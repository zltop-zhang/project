<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>
  <script>
  //引入第三方scroll模块better-scroll,是屏幕在上拉或者下拉时效果很好
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        bscroll:null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted(){//1.创建监听对象(组件挂载完之后才能拿到bscroll对象)
      this.bscroll=new BScroll(this.$refs.wrapper,{
        click:true,//设置在scroll中的元素可以点击
        probeType: this.probeType,//动态的绑定probetype，只有在为3的时候才会监听位置
        pullUpLoad:this.pullUpLoad//动态的绑定pullUpLoad
      })
      //2.监听滚动
      this.bscroll.on('scroll',(position)=>{//scroll是bscroll对象中的方法
        this.$emit('scroll',position)//字传父，传参
      })
      /*解决better-scroll滚动卡顿问题：
      ①刚开始bscroll对象计算的高度是子组件的内容，没有讲图片计算在内，scrollHeight小(1300)
      ②后来图片加载完成后有了新高度，但是scrollHeight还未更新，所以滚动会出问题
      解决：监听商品列表的每一张图片，图片加载完重新计算scrollheight高度
      */
      
      //3.监听上拉事件
      this.bscroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods:{
      back(x,y,time=300){//封装一个方法,scrollTo是bscroll对象中的方法
        this.bscroll.scrollTo(x,y,time)
      },
      finishPullUp(){//封装一个方法,finishPullUp是bscroll对象中的方法
        this.bscroll.finishPullUp()
      },
      refresh(){//封装一个方法,refresh是bscroll对象中的方法
        this.bscroll.refresh()
        console.log("---")//测试refresh函数的调用次数
      },
      getScrollY(){//获取scroll对象y的值
        return this.bscroll ? this.bscroll.y : 0
      }
    }
  }
  </script>
 <style scoped>
   
 </style>