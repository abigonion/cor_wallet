<template>
    <div class="home">
      <div class="home-header">
        <div class="wrap">
          <div class="user-info flex-row">
            <img src="/static/images/user-head.png">
            <div class="user-info-cell flex-column">
              <h3 class="user-name" @click="jumpLogin()">1637384400</h3>
              <p class="user-id">UID:u717420B026</p>
            </div>
          </div>
          <van-icon name="weapp-nav" class="home-more"/>
        </div>
      </div>
      <div class="home-section">
        <!-- 邀请有礼 -->
        <div class="invite" @click="jumpInvite()"><img src="/static/images/my_yaoqing.png"></div>
        <!-- 菜单栏 -->
        <div class="wrap">
          <div class="flex-row user-menu" v-for="item in menuData" @click="roterJump(item.meunPush)">
            <img :src="item.menuIcon">
            <p>{{item.meunTitle}}</p>
            <span v-if="item.meunTitle == '版本'">v1.0.0</span>
            <i></i>
          </div>
        </div>
      </div>
      <BottomNav></BottomNav>
    </div>
</template>


<script>
  import html2canvas from 'html2canvas'
  import { findGoodsById } from "../../axios/api"
  import BottomNav from '@/components/BottomNav'
    export default {
        data(){
          return{
            menuData:[
              // {menuIcon:'/static/images/activity1.png',meunTitle:'任务中心',meunPush:'roterJumplujing'},
              {menuIcon:'/static/images/class1.png',meunTitle:'账户与安全',meunPush:'personalInfo'},
              // {menuIcon:'/static/images/home1.png',meunTitle:'分发记录',meunPush:'roterJumplujing'},
              {menuIcon:'/static/images/activity1.png',meunTitle:'通用设置',meunPush:'setting'},
              {menuIcon:'/static/images/home.png',meunTitle:'帮助与支持',meunPush:'help'},
              {menuIcon:'/static/images/activity.png',meunTitle:'加入社群',meunPush:'join'},
              {menuIcon:'/static/images/activity1.png',meunTitle:'版本',meunPush:'roterJumplujing'},
            ]
          }
        },
      mounted(){
      },
      methods:{
        jumpInvite(){
          this.$router.push({path:'/home/invite'});
        },
        roterJump(router){
          this.$router.push({path:"/home/"+router});
        },
        jumpLogin(){
          this.$router.push({path:'/login/index'})
        }
      },
      components:{
        BottomNav,
      }
    }
</script>

<style type="text/css">
  .wrap{
    width: 86.133333%;
  }

  .home{
    padding-bottom: 90px;
  }

  .home-header{
    background: #4768F3;
  }

  i.home-more{
    color: #fff;
    font-size: 36px;
    position: absolute;
    top: 68px;
    right: 50px;
  }

  .user-info{
    padding-top: 98px;
    padding-bottom: 74px;
  }

  .user-info img{
    width: 144px;
    height: 144px;
    border-radius: 100%;
  }

  .user-info-cell{
    margin-left: 44px;
    color: #FFFFFF;
    align-items: baseline;
  }

  .user-info-cell h3{
    font-size: 40px;
  }

  .user-info-cell p{
    margin-top: 12px;
    font-size: 28px;
  }

  .home-section{
    background: #fff;
  }
  
  .home .invite{
    padding: 36px 0 58px 0;
    width: 90.933333%;
    margin: 0 auto;
  }

  .home .invite img{
    width: 100%;
    height: 164px;
    border-radius: 100px;
  }

  /* 菜单 */
  .user-menu{
    height: 108px;
    position: relative;
    border-bottom: 2px solid #F5F7F9;
  }

  .user-menu img{
    width: 36px;
    height: 36px;
  }

  .user-menu p{
    margin-left: 18px;
    font-size: 32px;
    font-weight: bold;
    color: #002251;
  }
  
  .user-menu span{
    color: #7A869A;
    font-size: 32px;
    position: absolute;
    right: 40px;
  }

  .user-menu i{
    display: inline-block;
    width: 12px;
    height: 24px;
    position: absolute;
    right: 0;
    background: url(/static/images/right_arrow.png) no-repeat center;
    background-size: 100% 100%;
  }

</style>
