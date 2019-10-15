<template>
    <div class="trading-query">
      <div class="goback-header">
        <van-icon name="arrow-left" class="goback" @click="goBack()"/>
        <h3 class="goback-title">交易查询</h3> 
      </div>
      <!-- 查询记录 -->
      <div class="nav-margin-top flex-column">
        <!-- 数据循环 -->
        <div class="trading-query-card flex-row" v-for="item in recordData">
          <div class="trading-card-container flex-row">
            <div class="card-left">
              <p>{{item.title}}</p>
              <span>{{item.desc}}</span>
            </div>
            <div class="card-right">
              <p>{{item.time}}</p>
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
            recordData:[
              {title:'标题',desc:'描述',time:'2019-09-09'},
              {title:'Two line item',desc:'Secondary text',time:'2019-09-09'},
              {title:'标题',desc:'描述',time:'2019-09-09'},
              {title:'标题',desc:'描述',time:'2019-09-09'},
              {title:'Two line item',desc:'Secondary text',time:'2019-09-09'},
              {title:'Two line item',desc:'Secondary text',time:'2019-09-09'},
              {title:'Two line item',desc:'Secondary text',time:'2019-09-09'},
              {title:'Two line item',desc:'Secondary text',time:'2019-09-09'},
            ],
          }
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
  .trading-query{
    background: #F4F5F7;
  }

  .trading-query-container .trading-query-card:first-child{
    margin-top: 48px;
  }

  .trading-query-card{
    width: 690px;
    height: 156px;
    background: #fff;
    margin-top: 28px;
    border-radius: 10px;
  }

  .trading-card-container{
    margin: 0 20px 0 42px;
    width: 100%;
    justify-content: space-between;
  }
  
  .trading-card-container .card-left p{
    color: #191A45;
    font-size: 30px;
  }

  .trading-card-container .card-left span{
    color: #344563;
    font-size: 30px;
  }

  .trading-card-container .card-left .right{
    color: #C1C7D0;
    font-size: 24px;
  }
</style>
