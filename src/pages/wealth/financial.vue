<template>
    <div class="financial">
      <div class="goback-header">
        <van-icon name="arrow-left" class="goback" @click="goBack()"/>
        <h3 class="goback-title">ETH理财</h3> 
      </div>
      <div class="financial-container flex-column">
        <div class="financial-wrap">
          <!-- 划入金额 -->
          <div class="delimit flex-column">
            <div class="cell-title">
              <h3>划入金额</h3>
            </div>
            <div class="delimit-info">
              <van-field v-model="value" placeholder="10000ETH起投" class="delimit-input flex-row"/>
              <span>ETH</span>
            </div>
            <div class="balance-container flex-row">
              <div class="balance flex-row">
                <i></i>
                <span>可支配: 12.290 ETH</span>
              </div>
              <button class="all-button">全部</button>
            </div>
          </div>
          <!-- 产品周期 -->
          <div class="financial-cycle flex-column">
            <div class="cell-title">
              <h3>产品周期</h3>
            </div>
            <div class="cell-card-container flex-column">
              <div class="cell-card flex-row">
                <p>开始计算时间</p>
                <span>2019-09-10</span>
              </div>
              <div class="cell-card flex-row">
                <p>产品周期</p>
                <span>30天</span>
              </div>
            </div>
          </div>

          <button class="bottomBtn" @click="jumpSuccess()">立即划入</button>
        </div>
      </div>
    </div>
</template>


<script>
  import html2canvas from 'html2canvas'
  import { findGoodsById } from "../../axios/api"
    export default {
        data(){
          return{
            value:''
          }
        },
      mounted(){
      },
      methods:{
        goBack(){
          this.$router.go(-1);
        },
        jumpSuccess(){
          this.$router.push({path:'/wealth/success'});
        } 
      },
      components:{
      }
    }
</script>

<style type="text/css">
  .financial{
    background: #F4F5F7;
  }
  
  .financial-container{
    margin-top: 98px;
  }
  .financial-wrap{
    margin-top: 30px;
    width: 670px;
  }

  .cell-title{
    width: 590px;
    margin: 44px 48px 0 32px;
    justify-content: space-between;
  }

  .cell-title h3{
    color: #002251;
    font-size: 36px;
  }

  /* 划入金额 */
  .delimit{
    width: 100%;
    background: #fff;
    height: 400px;
    border-radius: 16px;
  }

  .delimit .cell-title{
    margin-top: 72px;
  }

  .delimit-info{
    margin-top: 34px;
    position: relative;
  }

  .delimit-info .delimit-input{
    width: 610px;
    height: 88px;
    border-radius: 18px;
    text-indent: 22px;
    font-size: 32px;
    background: rgba(155,155,155, 0.1);
  }

  .delimit-info span{
    position: absolute;
    top: 22px;
    right: 42px;
    font-size: 32px;
    color: #344563;
  }
  
  .balance-container{
    margin-top: 34px;
    width: 618px;
    justify-content: space-between;
  }

  .balance-container .balance i{
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(/static/images/tishi.png) no-repeat center;
    background-size: 100% 100%;
  }

  .balance-container .balance span{
    display: inline-block;
    color: #7A869A;
    font-size: 30px;
    margin-left: 4px;
  }
  .balance-container .all-button{
    width: 92px;
    height: 56px;
    background: none;
    line-height: 56px;
    border: 2px solid #4768F3;
    text-align: center;
    color: #4768F3;
    font-size: 28px;
  }

  /* 产品周期 */
  .financial-cycle{
    width: 100%;
    height: 260px;
    background: #ffffff;
    margin-top: 30px;
    border-radius: 16px;
  }
  .cell-card-container{
    margin: 26px 48px 0 32px;
  }

  .cell-card{
    justify-content: space-between;
    width: 590px;
    font-size: 24px;
    margin-bottom: 24px;
  }

  .cell-card p{
   color: #002251;
  }
  
  .cell-card span{
   color: ##7A869A;
  }

  button.bottomBtn{
    width: 100%;
    height: 88px;
    line-height: 88px;
    color: #fff;
    text-align: center;
    background: #4768F3;
    border-radius: 18px;
    margin-top: 40px;
    font-size: 32px;
  }
</style>
