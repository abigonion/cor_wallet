<template>
  <div class="personalInfo">
    <div class="goback-header">
      <van-icon name="arrow-left" class="goback" @click="goBack()"/>
      <h3 class="goback-title">账户与安全</h3>
    </div>
    <div class="nav-margin-top">
      <div class="shadow"><i></i></div>
      <!-- 菜单循环 -->
      <div class="common-cell-container">
        <div class="common-cell-wrap">
          <div class="left">
            <p>PIN码</p>
          </div>
          <div class="right">
            <i></i>
          </div>
        </div>
      </div>

      <div class="common-cell-container">
        <div class="common-cell-wrap">
          <div class="left">
            <p>支付密码</p>
          </div>
          <div class="right">
            <span>修改</span>
            <i></i>
          </div>
        </div>
      </div>

      <div class="common-cell-container">
        <div class="common-cell-wrap">
          <div class="left">
            <p>登录密码</p>
          </div>
          <div class="right">
            <span>修改</span>
            <i></i>
          </div>
        </div>
      </div>

      <!-- <div class="common-cell-container" @click="jumpSecurity()">
        <div class="common-cell-wrap">
          <div class="left">
            <p>身份认证</p>
          </div>
          <div class="right">
            <span>未审核</span>
            <i></i>
          </div>
        </div>
      </div> -->

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
        jumpSecurity(){
          this.$router.push({path:'/home/security'});
        }
      },
      components:{
      }
    }
</script>
