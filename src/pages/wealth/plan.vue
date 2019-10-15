<template>
    <div class="plan">
      <div class="goback-header-white-themes">
        <van-icon name="arrow-left" class="goback" @click="goBack()"/>
        <h3 class="goback-title">ETH币计划</h3> 
      </div>
      <div class="nav-margin-top flex-column">
        <div class="plan-wrap">
          <!-- 产品风险 -->
          <div class="product-risk flex-column">
            <div class="risk-wrap flex-column">
              <h3>5.1%</h3>
              <span class="earnings-desc">预计年化收益</span>
              <div class="risk-tab flex-row">
                <span>低风险</span>
                <span>随取随存</span>
              </div>
              <div class="progress">
                <van-progress :percentage="56" :show-pivot='false' color='#4768F3' />
              </div>
              <div class="sum-time flex-row">
                <div class="sum-time-card flex-column">
                  <span>起投金额</span>
                  <h3>1000ETH</h3>
                </div>
                <div class="sum-time-card flex-column">
                  <span>产品期限</span>
                  <h3>无锁期限</h3>
                </div>
              </div>
            </div>
          </div>
          <!-- 产品周期 -->
          <div class="product-cycle flex-column">
            <div class="cell-title">
              <h3>产品周期</h3>
            </div>
            <div class="cycle-table flex-row">
              <div class="cycle-item flex-column">
                <i></i>
                <p>起息日</p>
                <span>今日</span>
              </div>
              <div class="cycle-line flex-row">
                <i></i>
                <span></span>
              </div>
              <div class="cycle-item flex-column">
                <i></i>
                <p>到期日</p>
                <span>今日</span>
              </div>
              <div class="cycle-line flex-row">
                <i></i>
                <span></span>
              </div>
              <div class="cycle-item flex-column">
                <i></i>
                <p>回款日</p>
                <span>今日</span>
              </div>
            </div>
          </div>
          <!-- 交易规则 -->
          <div class="product-trading flex-column">
            <div class="cell-title flex-row">
              <h3>交易规则</h3>
              <span>详细规则</span>
            </div>
            <ul class="trading-list">
              <li>· 购买后不可撤销，到期前不可取出。</li>
              <li>· 购买后不可撤销，到期前不可取出。</li>
              <li>· 购买后不可撤销，到期前不可取出。</li>
            </ul>
          </div>
          <!-- 点击购买 -->
          <button @click="jumpBuy()" class="bottomBtn">点击购买</button>  
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
        jumpBuy(){
          this.$router.push({path:'/wealth/financial'});
        }
      },
      components:{
      }
    }
</script>

<style type="text/css">
  .plan{
    background: #F4F5F7; 
  }
  .goback-header-white-themes{
    background: url(/static/images/plan_bg.png) no-repeat center;
    background-size: 100% 100%;
  }
  .plan-wrap{
    width: 670px;
  }
  /* 产品风险 */
  .product-risk{
    width: 100%;
    height: 440px;
    background: #ffffff;
    border-radius: 16px;
    margin-top: 28px;
  }
  .product-risk .risk-wrap{
    width: 606px;
  }

  .product-risk .risk-wrap h3{
    color: #FB4D4F;
    font-size: 86px;
    margin-top: 16px;
  }
  .product-risk .risk-wrap span.earnings-desc{
    color: #7A869A;
    font-size: 22px;
  }

  .product-risk .risk-wrap .risk-tab {
    margin-top: 18px;
  }
  
  .product-risk .risk-wrap .risk-tab span:not(:first-child){
  margin-left: 26px; 
  }

  .product-risk .risk-wrap .risk-tab span{
    width: 120px;
    height: 44px;
    line-height: 44px;
    color: #002251;
    font-size: 24px;
    text-align: center;
    background: #E8E9EA;
  }
  .product-risk .risk-wrap .progress{
    margin-top: 40px;
    width: 100%;
  }
  .product-risk .risk-wrap .progress .van-progress{
    height: 12px;
  }
  .product-risk .risk-wrap .sum-time{
    margin-top: 42px;
    width: 100%;
  }

  .product-risk .risk-wrap .sum-time .sum-time-card{
    width: 50%;
  }

  .product-risk .risk-wrap .sum-time .sum-time-card span{
    color: #7A869A;
    font-size: 28px;
  }

  .product-risk .risk-wrap .sum-time .sum-time-card h3{
    color: #191A45;
    font-size: 34px;
  }
  /* 产品周期  */
  .product-cycle{
    width: 100%;
    height: 296px;
    background: #ffffff;
    border-radius: 16px;
    margin-top: 24px;
  }
  .cell-title{
    width: 590px;
    margin: 36px 48px 0 32px;
    justify-content: space-between;
  }

  .cell-title h3{
    color: #002251;
    font-size: 36px;
  }

  .cell-title span{
    color: #4768F3;
    font-size: 24px;
  }

  .cycle-table{
    margin-top: 40px;
  }

  .cycle-table .cycle-item i{
    width: 40px;
    height: 40px;
  }

  .cycle-table .cycle-item:nth-child(1) i{
    background: url(/static/images/xiangqing_qixi.png) no-repeat center;
    background-size: 100% 100%;
  }
  .cycle-table .cycle-item:nth-child(3) i{
    background: url(/static/images/xiangqing_daoqi.png) no-repeat center;
    background-size: 100% 100%;
  }
  .cycle-table .cycle-item:nth-child(5) i{
    background: url(/static/images/xiangqing_huikuan.png) no-repeat center;
    background-size: 100% 100%;
  }

  .cycle-table .cycle-item p{
    color: #002251;
    font-size: 24px;
    margin-top: 8px;
  }

  .cycle-table .cycle-item span{
    color: #7A869A;
    font-size: 24px;
  }
  /* 周期线 */
  .cycle-line i{
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 2px solid #4768F3;
    margin-left: 16px;
  }

  .cycle-line span{
    display: inline-block;
    width: 92px;
    height: 1px;
    border: 1px dashed #4768F3;
    margin-left: 6px;
    margin-right: 54px;
  }

  /* 交易规则  */
  .product-trading{
    width: 100%;
    height: 296px;
    background: #ffffff;
    border-radius: 16px;
    margin-top: 24px;
  }
  .trading-list{
    margin-top: 20px;
    width: 620px;
    font-size: 24px;
    color: #7A869A;
    line-height: 48px;
  }

  button.bottomBtn{
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
