<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-header flex-row">
        <img src="/static/images/login_logo.png">
        <i @click="jumpIndex()"></i>
      </div>
      <h1>登陆XXX钱包</h1>
      <div class="login-form flex-column">
        <span>手机号</span>
        <div class="common-input-container">
          <van-field v-model="number" placeholder="手机号" class="common-input flex-row"/>
        </div>
        <span>密码</span>
        <div class="common-input-container">
          <van-field v-model="number" placeholder="请填写密码" class="common-input flex-row"/>
        </div>
        <p>忘记密码?</p>
      </div>
      <button class="bottomBtn">登录</button>
      <div class="registered">还没有账号？<span @click="jumpPhone()">注册</span></div>
    </div>
  </div>
</template>
<script>
  import html2canvas from 'html2canvas'
  import { findGoodsById } from "../../axios/api"
    export default {
        data(){
          return{
            number: '',
          }
        },
      created(){
      },
      mounted(){
      },
      methods:{
        jumpIndex(){
          this.$router.push({path:'/index'});
        },
        jumpPhone(){
          this.$router.push({path:'/login/phone'})
        }
      },
      components:{
      }
    }
</script>
<style type="text/css">
  body{
    background: #fff;
  }
  .login{
    background: #fff;
  }
  .login-header{
    padding-top: 136px;
    justify-content: space-between;
  }
  .login-header img{
    width: 88px;
    height: 88px;
  }
  .login-header i{
    display: inline-block;
    width: 38px;
    height: 38px;
    background: url(/static/images/cancel.png) no-repeat center;
    background-size: 100% 100%;
  }
  h1{
    color: #344563;
    font-size: 56px;
    margin-top: 60px;
  }

  .login-form{
    width: 100%;
    align-items: flex-start;
  }

  .login-form span{
    display: block;
    color: #C1C7D0;
    font-size: 28px;
    padding-top: 48px;
    padding-bottom: 28px;
  }

  .login-form p{
    color: #4768F3;
    font-size: 26px;
    padding-top: 14px;
    align-self: flex-end;
  }

  .common-input-container{
    margin: 0;
  }

  .common-input-container .common-input{
    padding: 0;
  }

  .common-input-container .common-input input{
    text-indent: 32px;
  }
  
  button.bottomBtn{
    width: 100%;
    height: 88px;
    line-height: 88px;
    color: #fff;
    text-align: center;
    background: #4768F3;
    border-radius: 18px;
    margin-top: 130px;
    font-size: 32px;
  }

  .registered{
    margin-top: 54px;
    font-size: 28px;
    color: #7A869A;
    text-align: center;
  }

  .registered span{
    color: #4768F3;
  }
</style>
