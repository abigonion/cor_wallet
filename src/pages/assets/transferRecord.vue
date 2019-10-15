<template>
  <div class="transferRecord">
    <div class="goback-header">
      <van-icon name="arrow-left" class="goback" @click="goBack()"/>
      <h3 class="goback-title">转出记录</h3>
    </div>
    <!-- 查询记录 -->
    <div class="nav-margin-top flex-column">
      <van-tabs v-model="activeName" class="flex-column common-tab">

        <van-tab title="充值记录" name="topUp">
          <!-- 数据循环 -->
          <div class="no-data-container flex-column" v-if="topUpData.length == 0">
            <img src="/static/images/zanwu.png">
            <p>暂无充提记录</p>
          </div>
          <div class="record-card flex-row" v-for="item in topUpData" v-else>
            <div class="record-card-container flex-row">
              <div class="record-card-left flex-column">
                <h3>{{item.sum}}</h3>
                <span>{{item.time}}</span>
              </div>
              <div class="record-card-right">
                <p class="success" v-if="item.state == '已到账'">{{item.state}}</p>
                <p class="confirm" v-else-if="item.state == '确认中'">{{item.state}}</p>
                <p class="failure" v-else-if="item.state == '审核失败'">{{item.state}}</p>
                <p class="undo" v-else="item.state == '已撤销'">{{item.state}}</p>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title="提现记录" name="withdrawal">
          <!-- 数据循环 -->
          <div class="no-data-container flex-column" v-if="withdrawalData.length == 0">
            <img src="/static/images/zanwu.png">
            <p>暂无提现记录</p>
          </div>
          <div class="record-card flex-row" v-for="item in withdrawalData">
            <div class="record-card-container flex-row">
              <div class="record-card-left flex-column">
                <h3>{{item.sum}}</h3>
                <span>{{item.time}}</span>
              </div>
              <div class="record-card-right">
                <p class="success" v-if="item.state == '已到账'">{{item.state}}</p>
                <p class="confirm" v-else-if="item.state == '确认中'">{{item.state}}</p>
                <p class="failure" v-else-if="item.state == '审核失败'">{{item.state}}</p>
                <p class="undo" v-else="item.state == '已撤销'">{{item.state}}</p>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title="站内记录" name="onSite">
          <!-- 数据循环 -->
          <div class="no-data-container flex-column" v-if="onSiteData.length == 0">
            <img src="/static/images/zanwu.png">
            <p>暂无站内记录</p>
          </div>
          <div class="record-card flex-row" v-for="item in onSiteData">
            <div class="record-card-container flex-row">
              <div class="record-card-left flex-column">
                <h3>{{item.sum}}</h3>
                <span>{{item.time}}</span>
              </div>
              <div class="record-card-right">
                <p class="success" v-if="item.state == '已到账'">{{item.state}}</p>
                <p class="confirm" v-else-if="item.state == '确认中'">{{item.state}}</p>
                <p class="failure" v-else-if="item.state == '审核失败'">{{item.state}}</p>
                <p class="undo" v-else="item.state == '已撤销'">{{item.state}}</p>
              </div>
            </div>
          </div>
        </van-tab>

      </van-tabs>
    </div>
  </div>
</template>
<script>
  import html2canvas from 'html2canvas'
  import { findGoodsById } from "../../axios/api"
    export default {
        data(){
          return{
            activeName: 'topUp',
            topUpData:[
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'确认中',},
              {sum:'100ETH',time:'2019-09-09 15:30',state:'已到账',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'审核失败',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'已撤销',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'确认中',},
              {sum:'100ETH',time:'2019-09-09 15:30',state:'已到账',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'审核失败',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'已撤销',},
            ],
            withdrawalData:[
              // {sum:'100ETH',time:'2019-09-09 15:30',state:'已到账',},
              // {sum:'0.5ETH',time:'2019-09-09 15:30',state:'确认中',},
              // {sum:'0.5ETH',time:'2019-09-09 15:30',state:'审核失败',},
              // {sum:'0.5ETH',time:'2019-09-09 15:30',state:'已撤销',},
              // {sum:'100ETH',time:'2019-09-09 15:30',state:'已到账',},
              // {sum:'0.5ETH',time:'2019-09-09 15:30',state:'已撤销',},
            ],
            onSiteData:[
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'审核失败',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'已撤销',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'确认中',},
              {sum:'100ETH',time:'2019-09-09 15:30',state:'已到账',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'审核失败',},
              {sum:'0.5ETH',time:'2019-09-09 15:30',state:'已撤销',},
            ],
          }
        },
      created(){
        console.log(this.topUpData.length)
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
body{
  background: #F4F5F7 !important;
}
/* Tab通用样式 */
.common-tab .van-tabs__wrap {
  width: 750px;
  padding: 20px 30px 0 30px;
  height: 88px;
  background: #fff;
  margin-bottom: 12px;
}

/* 选中底部 */
.transferRecord .common-tab .van-tabs__line {
  width: 168px !important;
  height: 6px;
  background: #4768F3;
}

/* 选中字体 */
.transferRecord .common-tab .van-tab--active .van-ellipsis {
  font-size: 36px;
  color: #4768F3 !important;
}

/* 默认字体 */
.transferRecord .common-tab .van-ellipsis {
  font-size: 32px;
  color: #191A45 !important;
}

.transferRecord .record-card {
  width: 690px;
  height: 156px;
  background: #fff;
  margin-top: 24px;
  border-radius: 12px;
}

.record-card-container {
  margin: 0 44px 0 32px;
  width: 100%;
  justify-content: space-between;
}

.record-card-left{
  align-items: flex-start;
}

.record-card-left h3{
  color: #191A45;
  font-size: 44px;
}

.record-card-left span {
  color: #ACACBC;
  font-size: 24px;
  margin-top: 2px;
}

.record-card-right p{
  font-size: 30px;
}

/* 已到账 */
.record-card-right p.success{
  color: #4768F3;
}

/* 确认中 */
.record-card-right p.confirm{
  color: #00B3F3;
}

/* 审核失败 */
.record-card-right p.failure{
  color: #FB4D4F;
}

/* 已撤销 */
.record-card-right p.undo{
  color: #7A869A;
}

/* 无数据样式 */
.no-data-container img{
  margin-top: 84px;
  width: 172px;
  height: 172px;
}

.no-data-container p{
  color: #7A869A;
  font-size: 36px;
  margin-top: 30px;
}
</style>
