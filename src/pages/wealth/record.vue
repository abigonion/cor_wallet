<template>
    <div class="record">
      <div class="goback-header">
        <van-icon name="arrow-left" class="goback" @click="goBack()"/>
        <h3 class="goback-title">转出记录</h3> 
      </div>
      <!-- 查询记录 -->
      <div class="nav-margin-top flex-column">
        <!-- 数据循环 -->
        <div class="record-card flex-row" v-for="item in recordData">
          <div class="card-container flex-row">
            <div class="card-left flex-row">
              <i></i>
              <div class="flex-column">
                <p>{{item.title}}</p>
                <span>{{item.time}}</span>
              </div>
            </div>
            <div class="card-right">
              <div class="flex-column">
                <p>{{item.recordSum}}</p>
                <span>{{item.balance}}</span>
              </div>
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
              {title:'发出BTC',time:'2019-09-09 15:30',recordSum:'+10',balance:'余额20'},
              {title:'收到BTC',time:'2019-09-09 15:30',recordSum:'+10',balance:'余额20'},
              {title:'发出BTC',time:'2019-09-09 15:30',recordSum:'+10',balance:'余额20'},
              {title:'发出BTC',time:'2019-09-09 15:30',recordSum:'+10',balance:'余额20'},
              {title:'收到BTC',time:'2019-09-09 15:30',recordSum:'+10',balance:'余额20'},
              {title:'收到BTC',time:'2019-09-09 15:30',recordSum:'+10',balance:'余额20'},
              {title:'收到BTC',time:'2019-09-09 15:30',recordSum:'+10',balance:'余额20'},
              {title:'收到BTC',time:'2019-09-09 15:30',recordSum:'+10',balance:'余额20'},
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
  .record{
    background: #F4F5F7;
  }

  .record-container .record-card:first-child{
    margin-top: 48px;
  }

  .record-card{
    width: 690px;
    height: 156px;
    background: #fff;
    margin-top: 28px;
    border-radius: 10px;
  }

  .card-container{
    margin: 0 44px 0 32px;
    width: 100%;
    justify-content: space-between;
  }
  
  .card-container p{
    color: #191A45;
    font-size: 32px;
    font-weight: bold;
  }

  .card-container span{
    display: inline-block;
    margin-top: 6px;
    color: #ACACBC;
    font-size: 24px;
  }

  .card-left i{
    display: inline-block;
    width: 56px;
    height: 56px;
    margin-right: 24px;
    background: url(/static/images/btc_icon.png) no-repeat center;
    background-size: 100% 100%;
  }

  .card-left .flex-column{
    align-items: flex-start;
  }

  .card-right .flex-column{
    align-items: flex-end;
  }

</style>
