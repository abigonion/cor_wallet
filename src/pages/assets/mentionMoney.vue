<template>
    <div class="mention-money">
      <div class="goback-header">
        <van-icon name="arrow-left" class="goback" @click="goBack()"/>
        <h3 class="goback-title">ETH提币</h3>
        <p @click="jumpTransfet()">交易记录</p> 
      </div>
      <div class="mention-money-container flex-column">
        <!-- 可用余额 -->
        <div class="balance-container flex-row">
          <p>ETH</p>
          <span>可用： 0.12</span>
        </div>
        <div class="balance-btn-container white flex-row">
          <div class="flex-row balance-btn">
            <i></i>
            <p>提币</p>
          </div>
          <div class="flex-row balance-btn">
            <i></i>
            <p>内部转账</p>
          </div>
        </div>
        
        <div class="mention-money-wrap">
          <!-- 提币地址 -->
          <div class="mention-money-address flex-column">
            <div class="cell-card-container flex-column">
              <div class="cell-title">
                <h3>提币地址</h3>
              </div>
              <div class="common-input-container">
                <van-field v-model="value" placeholder="请输入提币地址" class="common-input flex-row"/>
                <span>ETH</span>
              </div>
              <div class="cell-title">
                <h3>数量（ETH）</h3>
              </div>
              <div class="common-input-container">
                <van-field v-model="value" placeholder="最小提币数量是0.1" class="common-input flex-row"/>
                <p>全部</p>
              </div>
            </div>
          </div>
          <!-- 提币提示 -->
          <div class="mention-money-prompt flex-column">
            <p>温馨提示：</p>
            <ul>
              <li>·最小体现金额0.01ETH。</li>
              <li>·为确保您的安全我们会对提币进行审核，请耐心等待，您可在记录跟踪中查看最新体现状况。</li>
              <li>·请务必确认电脑及浏览器安全，防止信息被篡改或泄漏。</li>
            </ul>
          </div>
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
        jumpTransfet(){
          this.$router.push({path:'/assets/transferRecord'});
        }
      },
      components:{
      }
    }
</script>

<style type="text/css">
  .mention-money{
    background: #F4F5F7;
  }
  
  .mention-money-container{
    margin-top: 98px;
  }
  .mention-money-wrap{
    margin-top: 18px;
    width: 670px;
  }
  
  /* 可用余额 */
  .balance-container{
    width: 100%;
    height: 176px;
    background: #4768F3;
    color: #fff;
    font-size: 32px;
  }

  .balance-container p{
    margin-left: 54px;
  }

  .balance-container span{
    margin-left: 46px;
  }

  .balance-btn-container {
    width: 100%;
    height: 128px;
  }

  .balance-btn-container .balance-btn{
    width: 50%;
    justify-content: center;
  }

  .balance-btn-container .balance-btn:first-child{
    border-right: 2px solid #C1C7D0;
  }

  .balance-btn-container .balance-btn:first-child i{
    display: inline-block;
    margin-right: 12px;
    width: 60px;
    height: 60px;
    background: url(/static/images/tibi.png) no-repeat center;
    background-size: 100% 100%
  }

  .balance-btn-container .balance-btn:last-child i{
    display: inline-block;
    margin-right: 12px;
    width: 60px;
    height: 60px;
    background: url(/static/images/zhuanzhang.png) no-repeat center;
    background-size: 100% 100%
  }

  .balance-btn-container .balance-btn p{
    color: #4768F3;
    font-size: 34px;
  }

  /* 提币地址 */
  .mention-money-address{
    width: 100%;
    height: 560px;
    background: #ffffff;
    border-radius: 16px;
  }

  .cell-card-container{
    margin: 18px 30px 0 30px;
  }

   .cell-title{
    width: 590px;
    margin-top: 54px;
  }

  .cell-title h3{
    color: #002251;
    font-size: 36px;
  }
  
  .common-input-container{
    margin-top: 34px;
    position: relative;
  }

  .common-input-container .common-input{
    width: 610px;
    height: 88px;
    border-radius: 18px;
    text-indent: 22px;
    font-size: 32px;
    background: rgba(155,155,155, 0.1);
  }

  .common-input-container span{
    position: absolute;
    top: 22px;
    right: 42px;
    font-size: 32px;
    color: #344563;
  }

  .common-input-container p{
    position: absolute;
    top: 22px;
    right: 42px;
    font-size: 32px;
    color: #4768F3;
    font-weight: normal;
  }

  .mention-money-prompt{
    width: 100%;
    margin-top: 30px;
  }

  .mention-money-prompt p{
    width: 100%;
    color: #002251;
    font-size: 32px;
  }

  .mention-money-prompt ul{
    width: 100%;
    margin-top: 18px;
    color: #969799;
    font-size: 24px;
    line-height: 50px;
  }

</style>
