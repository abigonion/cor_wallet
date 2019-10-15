<template>
    <div class="success">
      <div class="goback-header">
        <van-icon name="arrow-left" class="goback" @click="goBack()"/>
        <h3 class="goback-title">转出</h3> 
        <p @click="jumpRecord()">转出记录</p>
      </div>
      <div class="success-container flex-column">
        <div class="shadow"></div>
        <div class="success-wrap flex-column">
          <div class='success-mark flex-column'>
            <img src="/static/images/Icon_sucdess.png">
            <p>划入成功</p>
          </div>
          <button class="bottomBtn">确定</button>
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
        jumpRecord(){
          this.$router.push({path:'/wealth/record'});
        } 
      },
      components:{
      }
    }
</script>

<style type="text/css">
  body{
    background: #ffffff;
  }
  
  .success-container{
    margin-top: 98px;
  }

  .shadow{
    width: 100%;
    height: 10px;
    box-shadow: 0 10px 6px #F4F5F7;
  }

  .success-wrap{
    margin-top: 30px;
    width: 670px;
  }

  .success-mark{
    width: 100%;
    margin-top: 118px;
  }

  .success-mark img{
    width: 172px;
    height: 172px;
  }
  
  .success-mark p{
    color: #7A869A;
    font-size: 36px;
    margin-top: 36px;
  }

  button.bottomBtn{
    width: 100%;
    height: 88px;
    line-height: 88px;
    color: #fff;
    text-align: center;
    background: #4768F3;
    border-radius: 18px;
    margin-top: 140px;
    font-size: 32px;
  }

  
</style>