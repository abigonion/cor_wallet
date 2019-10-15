<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-header flex-row">
        <img src="/static/images/login_logo.png">
        <i @click="jumpIndex()"></i>
      </div>
      <h1>设置登录密码</h1>
      <div class="login-form flex-column">
        <span>验证码已发送至 +86 {{uphone}}</span>
        <div class="common-input-container">
          <van-field v-model="VerfyCode" placeholder="请输入验证码" name="VerfyCode" type="text" class="common-input flex-row"/>
        </div>
        <span>设置密码</span>
        <div class="common-input-container">
          <van-field v-model="firstPassword" placeholder="请输入密码" name="firstPassword" type="password" class="common-input flex-row"/>
        </div>
        <span>密码</span>
        <div class="common-input-container">
          <van-field v-model="lastPassword" placeholder="请再次输入密码" name="lastPassword" type="password" class="common-input flex-row"/>
        </div>
        <span>邀请码</span>
        <div class="common-input-container">
          <van-field v-model="inviCode" placeholder="请输入邀请码（选填）"  name="inviCode" type="text" class="common-input flex-row"/>
        </div>
      </div>
      <button id="captchaBox" class="bottomBtn" @click="register()">下一步</button>
    </div>
  </div>
</template>
<script>
  import geetest from "../../axios/geetest"
  import { Dialog } from 'vant'
  import md5 from 'js-md5'
  import { validateGee } from "../../actions/gtActions"
  import userApi from "../../axios/userApi.js"
    export default {
        data(){
          return{
            action:"REGISTER",
            VerfyCode:'',
            firstPassword: '',
            lastPassword:'',
            inviCode:'',
            uphone:'',
            username:null,
            firstgeetData:null,
            secondgeetData:null,
          }
        },
      created(){
        //路由取参数
        this.username = this.$route.params.uphone
        this.firstgeetData = this.$route.params.firstgeetData
        //手机号处理
        this.username != null ? this.uphone = this.username.substr(0, 3) + '****' + this.username.substr(this.username.length - 4) : this.uphone = '';
      },
      mounted(){
       
      },
      methods:{
        jumpIndex(){
          this.$router.push({path:'/index'});
        },
        //注册
        async register(){
          if(this.firstPassword != this.lastPassword){
            Dialog.alert({
              // title: '提示',
              message: '两次密码不一致，请重新输入',
              confirmButtonColor:"#4768F3",
            })
          }else{
            //极验
            // geetest.getGeetestGt({username:this.uphone,action:this.action}).then(res=>{
            //   this.firstgeetData = res;
            //   geetest.geetestConfig(this.firstgeetData,"#captchaBox").then(res=>{
            //     this.secondgeetData = res;
            //     //注册
            //     userApi.regist(
            //       {
            //         register_type:'TEL',                                  //注册类型(TEL:手机,EMAIL:emaill)
            //         challenge:this.secondgeetData.geetest_challenge,      //极验参数
            //         seccode:this.secondgeetData.geetest_seccode,          //极验参数
            //         status: this.firstgeetData.data.status,               //极验参数
            //         username: this.username,                              //邮箱或手机号
            //         validate: this.secondgeetData.geetest_validate,       //极验参数
            //         country_code: "+86",                                  //区号
            //         invitor_id: 0,                                        //邀请人uuid（可选）
            //         password:md5(this.firstPassword),                     //md5之后的密码
            //         re_password:md5(this.lastPassword),                   //md5之后的密码
            //         user_form:"pc",                                       //用户来源（可选）
            //         pass_code:this.VerfyCode,                             //注册验证码
            //       }
            //     ).then(res=>{
            //       console.log(res)
            //     })
            //   })
            // })
            let { validate, config } = await validateGee(this.uphone,this.action);
            await userApi.regist(
              {
                register_type:'TEL',                                  //注册类型(TEL:手机,EMAIL:emaill)
                challenge:validate.geetest_challenge,                 //极验参数
                seccode:validate.geetest_seccode,                     //极验参数
                status: 1,                                            //极验参数
                username: this.username,                              //邮箱或手机号
                validate: validate.geetest_validate,                  //极验参数
                country_code: "+86",                                  //区号
                invitor_id: 0,                                        //邀请人uuid（可选）
                password:md5(this.firstPassword),                     //md5之后的密码
                re_password:md5(this.lastPassword),                   //md5之后的密码
                user_form:"pc",                                       //用户来源（可选）
                pass_code:this.VerfyCode,                             //注册验证码
              }
            ).then(res=>{
                console.log(res);
                console.log("成功")
            })
          }
        },
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
