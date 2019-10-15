<template>
    <div class="roll-out">
      <div class="goback-header">
        <van-icon name="arrow-left" class="goback" @click="goBack()"/>
        <h3 class="goback-title">转出</h3> 
        <p @click="jumpRecord()">转出记录</p>
      </div>
      <div class="roll-out-container flex-column">
        <div class="roll-out-wrap flex-column">
          <div class="roll-out-info flex-column">
            <div class="card-container flex-row">
              <h3>转出币种</h3>
              <div class="out-type">
                <van-field v-model="value" placeholder="ETH" class="out-type-input flex-row"/>
                <i></i>
              </div>
            </div>
            <div class="card-container flex-row">
              <h3>划入金额</h3>
              <div class="out-type">
                <van-field placeholder="最低转入10000" class="out-type-input flex-row"/>
                <span>全部</span>
              </div>
            </div>
          </div>
          <button class="bottomBtn">提交</button>  
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
            value:'ETh'
          }
        },
      mounted(){
      },
      methods:{
        goBack(){
          this.$router.go(-1);
        },
        jumpRecord(){
          this.$router.push({path:'/wealth/record'});
        } 
      },
      components:{
      }
    }
</script>

<style type="text/css">
  .roll-out{
    background: #F4F5F7;
  }
  
  .roll-out-container{
    margin-top: 98px;
  }
  .roll-out-wrap{
    margin-top: 30px;
    width: 670px;
  }
  
  .roll-out-info{
    width: 100%;
    background: #fff;
    height: 360px;
    border-radius: 16px;
  }

  .card-container{
    width: 606px;
    justify-content: space-between;
    margin-top: 48px;
  }

  .roll-out-info .card-container:first-child{
    margin-top: 72px;
  }

  .card-container h3{
    color: #002251;
    font-size: 36px;
  }
  
  .out-type{
    margin-left: 42px;
    position: relative;
  }

  .out-type .out-type-input{
    width: 420px;
    height: 80px;
    border-radius: 20px;
    text-indent: 44px;
    font-size: 30px;
    background: rgba(155,155,155, 0.1);
    color: #344563;
  }

  .out-type i{
    display: inline-block;
    width: 24px;
    height: 12px;
    position: absolute;
    top: 34px;
    right: 20px;
    background: url(/static/images/goback.png) no-repeat center;
    background-size: 100% 100%;
  }

  .out-type span{
    position: absolute;
    top: 22px;
    right: 28px;
    font-size: 32px;
    color: #344563;
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
