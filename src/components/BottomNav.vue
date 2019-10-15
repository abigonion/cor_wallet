<template>
  <!-- 底部菜单 -->
  <div class="bottom-menu">
    <ul class="flex-row">
      <li v-for="item in bottomMenu">
        <div class="flex-column" @click="routeSwitch(item.route)">
          <img :src="item.route == selectMenu ? item.img1 : item.img">
          <p :class="item.route == selectMenu ? 'cur' : ''">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'BottomNav',
  data() {
    return {
      selectMenu:'/index',
      bottomMenu: [
        { text: '首页', img: '../../static/images/home.png', img1: '../../static/images/home1.png', route:'/index'},
        { text: '财富', img: '../../static/images/class.png', img1: '../../static/images/class1.png', route:'/wealth/index'},
        { text: '资产', img: '../../static/images/shop_cart.png', img1: '../../static/images/shop_cart1.png', route:'/assets/index'},
        { text: '我的', img: '../../static/images/my.png', img1: '../../static/images/my1.png', route:'/home/index'},
      ],
    }
  },
  created(){
    this.selectMenu = this.$route.path;
  },
  methods:{
    routeSwitch(route){
      this.$router.push({path:route});
    },
  },
}

</script>
<style>
  .bottom-menu {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 1.173333rem;
      background: #ffffff;
      z-index: 100;
  }

  .bottom-menu ul{
      width: 100%;
      height: 1.173333rem;
      align-items: center;
      justify-content: space-around;
  }

  .bottom-menu ul p{
      font-size: 0.32rem;
      color: #333333;
  }

  .bottom-menu ul p.cur{
      color: #ef603e;
  }

  .bottom-menu ul img{
      width: 0.666667rem;
      height: 0.666667rem;
  }
</style>
