<template>
  <div class="invite">
    <div class="goback-header">
      <van-icon name="arrow-left" class="goback" @click="goBack()"/>
      <h3 class="goback-title">邀请好友</h3>
    </div>
    <div class="invite-container flex-column">
      <div class="invite-code-container flex-column">
        <h1>3000</h1>
        <h3>我的邀请码：GHJWK</h3>
        <span></span>
      </div>
    </div>
    <div class="invite-bottom flex-column">
      <div class="invite-wrap">
        <div class="invite-process flex-column wi">
          <div class="process-title flex-row">
            <i></i><h3>邀请流程</h3><i></i>
          </div>
          <div class="process-content flex-row">
            <div class="flex-column">
              <img src="/static/images/yaoqing_icon.png">
              <p>邀请好友 </p>
              <p>下载XXX钱包 </p>
            </div>
            <van-icon name="weapp-nav" class="content-icon"/>
            <div class="flex-column">
              <img src="/static/images/cunbi.png">
              <p>好友存币 </p>
              <p>获得XXX奖励 </p>
            </div>
          </div>
        </div>

        <div class="invite-skills flex-column wi">
          <div class="process-title flex-row">
            <i></i><h3>邀请小技巧</h3><i></i>
          </div>
          <ul class="skills-list">
            <li>1.邀请您的家人/朋友/同学同事等熟人亲朋好友等 成功率最高 </li>
            <li>2.分享到5个以上的微信群/QQ群，成功邀请的几率 提升200%。 </li>
            <li>3.分享后在群内说：XXX官方钱包，现在注册就送， 未来潜力无限！也会大幅度提升邀请几率。 </li>
            <li>4.好友注册可领最高500XXX，存币再送1000XXX。</li>
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
  .invite-container{
    margin-top: 98px;
  }
  .invite-code-container{
    width: 100%;
    height: 1334px;
    background: url(/static/images/yaoqing_bg.png) no-repeat center;
    background-size: 100% 100%;
    color: #fff;
  }

  .invite-code-container h1{
    font-size: 104px;
    margin-top: 300px;
  }

  .invite-code-container h3{
    font-size: 32px;
    margin-top: 8px;
  }

  .invite-code-container span{
    display: inline-block;
    margin-top: 14px;
    width: 306px;
    height: 130px;
    background: url(/static/images/btn_uaoqing.png) no-repeat center;
    background-size: 100% 100%;
  }

  .invite-bottom{
    width: 100%;
    height: 962px;
    background: #161BB8;
    position: absolute;
    top: 960px;
  }
  .invite-wrap{
    margin-top: 76px;
    width: 602px;
  }

  .invite-process{
    width: 100%;
    background: #ffffff;
    height: 358px;
    border-radius: 16px;
  }

  .process-title{
    margin-top: 34px;
  }

  .process-title h3{
    color: #000000;
    font-size: 38px;
    margin: 0 16px;
  }
  
  .process-title i{
    display: inline-block;
    margin-top: 14px;
    width: 54px;
    height: 34px;
    background: url(/static/images/icon_yaoqin.png) no-repeat center;
    background-size: 100% 100%;
  }

  .process-content{
    margin-top: 20px;
    align-items: flex-start;
  }

  .process-content .content-icon{
    color: #9C98FD;
    font-size: 36px;
    margin: 0 82px;
    margin-top: 38px;
  }
  .process-content img{
    width: 100px;
    height: 100px;
  }
  .process-content p{
    color: #000000;
    font-size: 24px;
    margin-top: 4px;
  }

  .invite-skills {
    margin-top: 26px;
    background: #ffffff;
    width: 100%;
    height: 402px;
    border-radius: 16px;
  }

  .skills-list{
    margin: 44px 44px 0 34px;
    font-size: 22px;
    color: #7A869A;
    line-height: 32px;
  }
</style>
