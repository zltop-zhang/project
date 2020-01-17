<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <!--组件间里面放插槽(具名插槽),则在另一个文件应用时，可以动态添加内容-->
    <!--App.vue中的内容会将插槽的取代,所以插槽外面包裹div，用于绑定指令，-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!--动态的绑定样式，从父组件传参过来，类型是字符串-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'salmon' //如果不传参，默认是salmon
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        //this.$route.path表示当前活跃的路径，暂时用/home表示
        //查找当前活跃的路由中是否有item传过来的/link
        //当前活跃的路径和父组件传过来的路径比较
        return this.$route.path.indexOf(this.link) !== -1 //true or false
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
