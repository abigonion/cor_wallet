<template>
  <div class='index'>
      <div class="menu-tilte white">
        <div class="wrap">首页</div>
      </div>
      <!-- banner -->
      <div class="indexBanner white">
        <div class="wrap">
          <van-swipe :autoplay='3000'>
            <van-swipe-item v-for="(image, index) in bannerImages" :key="index">
              <img :src="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <!-- 公告 -->
      <div class="notice white">
        <div class="wrap">
          <van-notice-bar
            color="#4768F3"
            background="#f8f9fb"
            left-icon="volume-o"
            :speed="50"
            :scrollable="true"
          >
            <span>通知内容足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。通知内容足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</span>
          </van-notice-bar>
        </div>
      </div>
      <!-- 为你推荐 -->
      <div class="recommended white">
        <div class="wrap">
          <p class="two-level-title">为你推荐</p>
          <div class="recommended-container flex-row">
            <div class="recommended-info flex-column">
              <h3 class="nowrap">ETH活期理财</h3>
              <h1>5.1%</h1>
              <p class="nowrap">历史参考扣费后利率历史参考扣费后利率</p>
              <button>立即查看</button>
            </div>
            <div class="recommended-info flex-column">
              <h3 class="nowrap">ETH活期理财ETH活期理财</h3>
              <h1>5.1%</h1>
              <p class="nowrap">历史参考扣费后利率</p>
              <button>立即查看</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 快讯 -->
      <div class="alerts white">
        <div class="wrap"><p class="two-level-title">快讯</p></div>
          
        <div class="alerts-container">
          <div class="wrap flex-row alerts-info">
            <div class="alerts-left flex-column">
              <h3>标题一</h3>
              <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状。</p>
              <span>2019-9-20</span>
            </div>
            <div class="alerts-right">
              <img src="http://www.hejiaju.com/data/afficheimg/1568398402818617856.jpg">
            </div>
          </div>
        </div>
        <div class="alerts-container"> 
          <div class="wrap flex-row alerts-info">
            <div class="alerts-left flex-column">
              <h3>标题一</h3>
              <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状。</p>
              <span>2019-9-20</span>
            </div>
            <div class="alerts-right">
              <img src="http://www.hejiaju.com/data/afficheimg/1568398402818617856.jpg">
            </div>
          </div>
        </div>
        <div class="alerts-container">
          <div class="wrap flex-row alerts-info">
            <div class="alerts-left flex-column">
              <h3>标题一</h3>
              <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状。</p>
              <span>2019-9-20</span>
            </div>
            <div class="alerts-right">
              <img src="http://www.hejiaju.com/data/afficheimg/1568398402818617856.jpg">
            </div>
          </div>
        </div>
      </div>
      <!-- 底部菜单 -->
      <BottomNav></BottomNav>
      <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>


<script>
  import html2canvas from 'html2canvas'
  import { findGoodsById } from "../../axios/api"
  import BottomNav from '@/components/BottomNav'
    export default {
      data(){
        return{
          bannerImages: [
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'http://www.hejiaju.com/data/afficheimg/1568398402818617856.jpg',
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'http://www.hejiaju.com/data/afficheimg/1568398402818617856.jpg',
          ]
        }
      },
      mounted(){
      },
      methods:{
        
      },
      components:{
        BottomNav,
      }
    }
</script>

<style type="text/css">
  .indexBanner .van-swipe{
    width: 680px;
    height: 390px;
  }
  
  /* 下标 */
  .indexBanner .van-swipe .van-swipe__indicator{
    width: 12px;
    height: 12px;
    border-radius: 6px;
  }

  .indexBanner .van-swipe .van-swipe__indicator--active{
    width: 32px;
    border-radius: 6px;
    background: #4768F3;
  }

  .indexBanner .van-swipe img{
    width: 680px;
    height: 390px;
  }

  /* 公告 */
  .notice{
    padding:44px 0;
  }
  .notice .van-notice-bar{
    height: 80px;
    border-radius: 20px;
  }
  .notice .van-notice-bar__left-icon{
    min-width: 30px;
    font-size: 26px;
  }
  .notice span{
    color: #344563;
    font-size: 26px;
  }

  /* 为你推荐 */
  .recommended{
    margin-bottom: 24px;
    padding-bottom: 46px;
  }
  .recommended-container{
    margin-top: 18px;
    justify-content: space-between;
  }
  .recommended-container .recommended-info{
    /* border: 1px solid #344563; */
    width: 316px;
    height: 314px;
    border-radius: 30px;
  }
  .recommended-container .recommended-info h3{
    margin-top: 32px;
    font-size: 32px;
    color: #344563; 
  }
  .recommended-container .recommended-info h1{
    margin-top: 14px;
    font-size: 58px;
    color: #FB4D4F;
  }
  .recommended-container .recommended-info p{
    margin-top: 4px;
    font-size: 24px;
    color: #7A869A;
  }
  .recommended-container .recommended-info button{
    margin-top: 24px;
    width: 178px;
    height: 56px;
    border-radius: 28px;
    color: #fff;
    background: #4768F3;
    font-size: 24px;
  }

  /* 快讯 */
  .alerts-container{
    border-bottom: 1px solid #F2F2F2;
  }

  .alerts-container .alerts-info{
    padding:30px 0;
  }

  .alerts .alerts-container:last-child{
    border: 0;
  }

  .alerts-container .alerts-info .alerts-left{
    height: 208px;
    justify-content: space-between;
    align-items: flex-start;
  }

  .alerts-container .alerts-info .alerts-left h3{
    font-size: 32px;
    color: #344563;
  }

  .alerts-container .alerts-info .alerts-left p{
    font-size: 26px;
    color: #323232;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .alerts-container .alerts-info .alerts-left span{
    font-size: 24px;
    color: #C4C4C4
  }

  .alerts-container .alerts-info .alerts-right img{
    width: 208px;
    height: 208px;
    border-bottom: 1px solid #F2F2F2;
  }



</style>