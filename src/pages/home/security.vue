<template>
  <div class="security">
    <div class="goback-header">
      <van-icon name="arrow-left" class="goback" @click="goBack()"/>
      <h3 class="goback-title">账户与安全</h3>
    </div>
    <div class="certification-container flex-column">
      <div class="certification-header flex-column">
        <div class="flex-row"><i></i><h3>实名认证</h3><i class="right"></i></div>
      </div>
      <div class="certification-info">
        <div class="wrap-335">
          <div class="info-content flex-column">
            <div class="common-input-container">
                <van-field v-model="uname" placeholder="请输入真实姓名" class="common-input flex-row"/>
            </div>
            <div class="common-input-container">
                <van-field v-model="number" placeholder="有效身份证号" class="common-input flex-row"/>
            </div>
          </div>
          <div class="info-images flex-column">
            <div class="images-container flex-column">
              <p>身份证正面</p>
              <div class="upload">
                <img src="/static/images/shenfenzheng1.png">
                <i></i>
              </div>
              <span>只支持.jpg 格式</span>
            </div>
            <div class="images-container flex-column">
              <p>身份证反面</p>
              <div class="upload">
                <img src="/static/images/shenfenzheng2.png">
                <i></i>
              </div>
              <span>只支持.jpg 格式</span>
            </div>
            <div class="images-container flex-column">
              <p>手持身份证和个人签字</p>
              <div class="upload">
                <img src="/static/images/shenfenzheng3.png">
                <i></i>
              </div>
              <span>只支持.jpg 格式</span>
            </div>
          </div>
          <button class="bottomBtn">提交</button> 
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
            uname:'蓝忘机',
            number:''
          }
        },
      created(){
      },
      mounted(){
      },
      methods:{
        goBack(){
          this.$router.go(-1);
        },
      },
      components:{
      }
    }
</script>
<style type="text/css">
  .certification-container{
    margin-top: 98px;
    width: 750px;
    position: relative;
  }

  .certification-header{
    width: 100%;
    height: 220px;
    background: #4768F3;
  }

  .certification-header h3{
    font-size: 50px;
    color: #fff;
    text-shadow: 1px 1px 6px #000000;
    margin: 0 20px;
  }

  .certification-header>div{
    margin-top: 50px;
  }

  .certification-header i{
    display: inline-block;
    width: 108px;
    height: 2px;
    border-radius: 1px;
    background: linear-gradient(left, rgba(255, 255, 255, 0), #ffffff);
  }

  .certification-header i.right{
    background: linear-gradient(right, rgba(255, 255, 255, 0), #ffffff);
  }

  .certification-info{
    position: absolute;
    top: 148px;
  }

  .wrap-335{
    width: 670px;
  }
  .info-content{
    width: 100%;
    height: 360px;
    background: #fff;
    border-radius: 16px;
  }
  
  .info-content .common-input-container:first-child{
    margin-top: 72px;
  }

  .common-input-container .van-field__control{
    color: #002251;
    font-size: 28px;
  }

  .info-images{
    background: #fff;
    margin-top: 36px;
    padding-bottom: 78px;
    border-radius: 16px;
  }

  .images-container{
    width: 556px;
    border-bottom: 2px solid #EEEEEE;
  }
  
  .images-container p{
    margin-top: 50px;
    color: #344563;
    font-size: 28px;
  }
  
  .images-container .upload{
    margin-top: 26px;
    position: relative;
  }

  .images-container .upload img{
    width: 384px;
    height: 244px;
  }
  
  .images-container .upload i{

  }

  .images-container span{
    color: #7A869A;
    font-size: 24px;
    margin: 8px 0 24px 0;
  }

  .info-images .images-container:nth-child(3){
    border-bottom: 0;
  }
  
  button.bottomBtn{
    margin-top: 54px;
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
