<template>
    <div class="my-wealth">
      <div class="my-wealth-header">
        <div class="goback-header-white-themes">
          <van-icon name="arrow-left" class="goback" @click="goBack()"/>
          <h3 class="goback-title">我的财富</h3> 
          <p @click="jumpQurey()">交易查询</p>
        </div>
        <div class="my-wealth-details flex-column">
          <h3>0.000ETH</h3>
          <p>≈ ￥402230.32</p>
          <span @click="jumpRollOut()">转出</span>
        </div>
        <div class="my-wealth-earnings white flex-row">
          <div class="flex-column earnings-info">
            <span>昨日收益</span>
            <p>2.00</p>
          </div>
          <div class="flex-column earnings-info">
            <span>昨日收益</span>
            <p>2.00</p>
          </div>
        </div>
      </div>
      <div class="my-wealth-section">
        <van-tabs v-model="activeName">
          <van-tab title="活期" name="current">
            <!-- 数据循环 -->
            <div class="wealth-cell-container">
              <div class="cell-wrap">
                <van-cell :title="'+'+item.earnings" :value="item.time" v-for='item in currentData'/>
              </div>
            </div>
          </van-tab>
          <van-tab title="定期" name="uncurrent">
            <!-- 数据循环 -->
            <div class="wealth-cell-container">
              <div class="cell-wrap">
                <van-cell :title="'+'+item.earnings" :value="item.time" v-for='item in uncurrentData'/>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
</template>


<script>
  import html2canvas from 'html2canvas'
  import { findGoodsById } from "../../axios/api"
    export default {
        data(){
          return{
            activeName: 'current',
            currentData:[
              {earnings:'1.01',time:'2019/10/9'},
              {earnings:'0.31',time:'2018/10/10'},
              {earnings:'0.21',time:'2016/10/10'},
              {earnings:'0.01',time:'2009/10/10'},
            ],
            uncurrentData:[
              {earnings:'2.01',time:'2019/10/9'},
              {earnings:'1.31',time:'2018/10/10'},
              {earnings:'3.21',time:'2016/10/10'},
              {earnings:'4.01',time:'2009/10/10'},
            ],
          }
        },
      mounted(){
      },
      methods:{
        goBack(){
          this.$router.go(-1);
        },
        jumpQurey(){
          this.$router.push({path:'/wealth/tradingQuery'});
        },
        jumpRollOut(){
          this.$router.push({path:'/wealth/rollOut'});
        }
      },
      components:{
      }
    }
</script>

<style type="text/css">
  .my-wealth{
    background: #F4F5F7;
  }
  
  .my-wealth-header{
    width: 100%;
    height: 600px;
    background: url(/static/images/my_wealth_bg.png) no-repeat center;
    background-size: 100% 100%;
  }
  /* 头部 */
  .my-wealth-details{
    padding-top: 198px;
    color: #fff;
  }
  .my-wealth-details h3{
    font-size: 78px;
  }
  .my-wealth-details p{
    font-size: 28px;
    margin-top: 26px;
  }
  .my-wealth-details span{
    display: inline-block;
    width: 240px;
    height: 74px;
    line-height: 74px;
    text-align: center;
    font-size: 36px;
    margin-top: 32px;
    border: 2px solid #FFF;
    border-radius: 16px;
  }

  .my-wealth-earnings{
    width: 690px;
    height: 156px;
    border-radius: 12px;
    margin-top: 58px;
    margin-left: 36px;
  }

  .my-wealth-earnings .earnings-info{
    width: 50%;
  }

  .my-wealth-earnings .earnings-info:not(:first-child){
    border-left: 2px solid #C1C7D0;
  }

  .my-wealth-earnings .earnings-info span{
    color: #7A869A;
    font-size: 28px;
  }

  .my-wealth-earnings .earnings-info p{
    color: #191A45;
    font-size: 40px;
  }

  /* Tab导航 */
  .my-wealth .van-tab{
    line-height: 88px;
    font-size: 32px;
    color: #7A869A;
  }

  .my-wealth .van-tabs__nav{
    background: none;
  }

  .my-wealth .van-tabs--line .van-tabs__wrap{
    height: 88px;
  }
  
  /* 选中状态 */
  .my-wealth .van-tab--active{
    color: #002251;
    font-size: 42px;
    font-weight: bold;
  }
  .my-wealth .van-tabs__line{
    width: 36px !important;
    height: 6px;
    background-color: #3A3BBE;
  }

  .wealth-section .flex-column{
    padding-top: 38px;
  }

  .my-wealth-section{
    margin-top: 118px
  }
  
  .my-wealth-section .wealth-cell-container{
    margin-top: 26px;
    background: #fff;
  }
  
  .my-wealth-section .wealth-cell-container .cell-wrap{
    margin-left: 24px;
  }

  .my-wealth-section .wealth-cell-container .cell-wrap .van-cell{
    line-height: 104px;
    padding: 0 20px;
    border-bottom: 2px solid #F5F7F9;
  }
  
  .my-wealth-section .wealth-cell-container .cell-wrap .van-cell .van-cell__title{
    color: #002251;
    font-size: 36px;
  }
  .my-wealth-section .wealth-cell-container .cell-wrap .van-cell .van-cell__value{
    color: #7A869A;
    font-size: 28px;
  }
</style>
