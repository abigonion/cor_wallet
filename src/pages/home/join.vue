<template>
  <div class="join">
    <div class="goback-header">
      <van-icon name="arrow-left" class="goback" @click="goBack()"/>
      <h3 class="goback-title">加入社群</h3>
    </div>
    <div class="nav-margin-top">
      <div class="shadow"><i></i></div>
      <!-- 循环 -->
      <div class="wechat-container flex-column">
        <div class="wechat-wrap">
          <div class="wechat-header flex-row">
            <img src="/static/images/Icon_sucdess.png">
            <h3>微信</h3>
          </div>
          <div class="wechat-cell flex-row">
            <p>官方微信群秘：</p>
            <span>XXXXXXX</span>
          </div>
          <div class="wechat-cell flex-row">
            <p>官方微信群秘：</p>
            <span>XXXXXXX</span>
          </div>
        </div>
      </div>      
      <div class="wechat-container flex-column">
        <div class="wechat-wrap">
          <div class="wechat-header flex-row">
            <img src="/static/images/Icon_sucdess.png">
            <h3>微信</h3>
          </div>
          <div class="wechat-cell flex-row">
            <p>官方微信群秘：</p>
            <span>XXXXXXX</span>
          </div>
          <div class="wechat-cell flex-row">
            <p>官方微信群秘：</p>
            <span>XXXXXXX</span>
          </div>
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
            checked: true,
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
  .wechat-container {
    background: #ffffff;
    width: 100%;
    border-bottom: 2px solid #F4F5F7;
    padding: 36px 0 42px 0;
  }

  .wechat-wrap {
    padding: 0 44px;
    width: 100%;
  }

  .wechat-header img{
    width: 72px;
    height: 72px;
  }

  .wechat-header h3{
    margin-left: ;
    color: #002251;
    font-size: 36px;
    margin-left: 22px;
  }

  .wechat-cell{
    margin-top: 16px;
    justify-content: space-between;
  }

  .wechat-cell p{
    color: #002251;
    font-size: 24px;
  }

  .wechat-cell span{
    color: #7A869A;
    font-size: 24px;
  }
</style>
