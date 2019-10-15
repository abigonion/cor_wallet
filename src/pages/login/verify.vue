<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-header flex-row">
        <img src="/static/images/login_logo.png">
        <i @click="jumpLogin()"></i>
      </div>
      <h1>输入验证码</h1>
      <div class="login-form flex-column">
        <span>验证码已发送至 +86 177****9032</span>
        <div class="code-input-container">
          <van-password-input :value="value" :mask="false" :focused="showKeyboard"  @focus="showKeyboard = true" />
        </div>
        <!-- 数字键盘 -->
        <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" class="flex-column"/>
      </div>
      <div class="restart flex-row">
        <p>没收到验证码？</p><span>重新发送</span>
      </div>
      <button @click="jumpSetPassword()">下一步</button>
    </div>
  </div>
</template>
<script>
  import html2canvas from 'html2canvas'
  import { findGoodsById } from "../../axios/api"
    export default {
        data(){
          return{
            value: '',
            showKeyboard: true
          }
        },
      created(){
      },
      mounted(){
      },
      methods:{
        onInput(key) {
          this.value = (this.value + key).slice(0, 6);
        },
        onDelete() {
          this.value = this.value.slice(0, this.value.length - 1);
        },
        jumpLogin(){
          this.$router.push({path:'/login/index'})
        },
        jumpSetPassword(){
          this.$router.push({path:'/login/setPassword'})
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
    padding-top: 8px;
    padding-bottom: 46px;
  }

  .login-form p{
    color: #4768F3;
    font-size: 26px;
    padding-top: 14px;
  }

  .code-input-container{
    width: 100%;
  }

  .code-input-container .van-password-input{
    margin: 0;
  }

  .van-password-input__security{
    height: 80px;
  }

  .van-password-input__security li{
    width: 80px;
    line-height: 80px;
    font-size: 42px;
    color: #002251;
    margin-right: 26px;
    border-bottom: 2px solid #4768F3;
  }

  .van-password-input__security li:last-child{
    margin-right: 0;
  }

  .code-input-container [class*=van-hairline]::after{
    border: 0;
  }

  /* 数字键盘 */
  .van-number-keyboard{
    background: #D2D5DB;
    padding: 0 8px;
  }
  
  .van-key{
    width: 234px;
    height: 92px;
    line-height: 92px;
    font-size: 50px;
    color: #030303;
    background: #fff;
    margin:8px 4px;
    border-radius: 10px;
  }
  
  .restart{
    margin-top: 96px;
    color: #7A869A;
    font-size: 28px;
  }

  .restart span{
    color: #4768F3;
  }

  button{
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

  .agreement-container{
    margin-top: 54px;
  } 

  span.agreement {
    font-size: 24px;
    color: #7A869A;
  }

  .agreement i{
    color: #4768F3;
  }
</style>
