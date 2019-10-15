<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-header flex-row">
        <img src="/static/images/login_logo.png" />
        <i @click="jumpIndex()"></i>
      </div>
      <h1>注册手机号</h1>
      <div class="login-form flex-column">
        <span>手机号</span>
        <div class="common-input-container">
          <van-field v-model="uphone" placeholder="请输入手机号" class="common-input flex-row" />
        </div>
      </div>
      <div class="agreement-container">
        <van-checkbox v-model="checked" class="agreement" checked-color="#00b3f3">
          注册即表示同意
          <i>《XXX服务条款》</i>
        </van-checkbox>
      </div>
      <button @click="getPhoneCode()" id="captchaBox" class="bottomBtn">发送验证码</button>
      <div class="registered" id>
        已有账号？
        <span @click="jumpLogin()">登录</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { Dialog } from 'vant';
  import { validateGee } from "../../actions/gtActions"
  import geetest from "../../axios/geetest.js"
  import userApi from "../../axios/userApi.js"
    export default {
        data(){
          return{
            uphone: '',
            checked: true,
            action:"REGISTER",
            firstgeetData:null,
            secondgeetData:null,
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
        jumpLogin(){
          this.$router.push({path:'/login/index'})
        },
        async getPhoneCode(){
          // userApi.getGeeConfig(this.uphone,this.action).then(res=>{
          //   console.log(res)
          // })
          //手机号验证
          var telReg = (/^1[3|4|5|6|7|8][0-9]\d{8,8}$/).test(this.uphone);
          if(this.uphone == ""){
            Dialog.alert({
              // title: '提示',
              message: '请输入手机号码',
              confirmButtonColor:"#4768F3",
            })
          }else if(!telReg){      //如果手机号码不能通过验证
            Dialog.alert({
              // title: '提示',
              message: '请输入正确的手机号码',
              confirmButtonColor:"#4768F3",
            })
          }else{
            // validateGee().then(data=>{ 
            //   console.log(res)
            // })

            //lin
            const { validate, config } = await validateGee(this.uphone,this.action);
            await userApi.sendCode(
              {
                    carrier:'TEL',
                    challenge: validate.geetest_challenge,
                    code_type: this.action,
                    seccode: validate.geetest_seccode,
                    status: 1,
                    username: this.uphone,
                    validate: validate.geetest_validate,
                    country_code: "+86",
              }
            ).then(res=>{
              console.log(res)
              console.log("请求短信")
              //跳转设置密码页面
              this.$router.push({name: 'setPassword',path:'/login/setPassword',params:{uphone:this.uphone}})
            });
            // geetest.getGeetestGt({username:this.uphone,action:this.action}).then(res=>{
            //   this.firstgeetData = res;
            //   geetest.geetestConfig(this.firstgeetData,"#captchaBox").then(res=>{
            //     this.secondgeetData = res;
            //     //请求验证码
            //     userApi.sendCode(
            //       {
            //         carrier:'TEL',
            //         challenge:this.secondgeetData.geetest_challenge,
            //         code_type: this.action,
            //         seccode:this.secondgeetData.geetest_seccode,
            //         status: this.firstgeetData.data.status,
            //         username: this.uphone,
            //         validate: this.secondgeetData.geetest_validate,
            //         country_code: "+86",
            //       }
            //     ).then(res=>{
            //       //跳转设置密码页面
            //       this.$router.push({name: 'setPassword',path:'/login/setPassword',params:{uphone:this.uphone}})
            //     })
            //   })
            // })
          }

        },
      },
      components:{
      }
    }
</script>
<style type="text/css">
body {
  background: #fff;
}
.login {
  background: #fff;
}
.login-header {
  padding-top: 136px;
  justify-content: space-between;
}
.login-header img {
  width: 88px;
  height: 88px;
}
.login-header i {
  display: inline-block;
  width: 38px;
  height: 38px;
  background: url(/static/images/cancel.png) no-repeat center;
  background-size: 100% 100%;
}
h1 {
  color: #344563;
  font-size: 56px;
  margin-top: 60px;
}

.login-form {
  width: 100%;
  align-items: flex-start;
}

.login-form span {
  display: block;
  color: #c1c7d0;
  font-size: 28px;
  padding-top: 48px;
  padding-bottom: 28px;
}

.login-form p {
  color: #4768f3;
  font-size: 26px;
  padding-top: 14px;
  align-self: flex-end;
}

.common-input-container {
  margin: 0;
}

.common-input-container .common-input {
  padding: 0;
}

.common-input-container .common-input input {
  text-indent: 32px;
}

button.bottomBtn {
  width: 100%;
  height: 88px;
  line-height: 88px;
  color: #fff;
  text-align: center;
  background: #4768f3;
  border-radius: 18px;
  margin-top: 130px;
  font-size: 32px;
}

.registered {
  margin-top: 54px;
  font-size: 28px;
  color: #7a869a;
  text-align: center;
}

.registered span {
  color: #4768f3;
}

.agreement-container {
  margin-top: 54px;
}

span.agreement {
  font-size: 24px;
  color: #7a869a;
}

.agreement i {
  color: #4768f3;
}
</style>
