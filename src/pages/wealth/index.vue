<template>
    <div class="wealth white">
      <div class="wealth-header">
        <div class="wrap">
          <div class="menu-tilte">财富</div>
          <p class="flex-row">累计收益 <van-icon name="eye" /></p>
          <h3 class="flex-row" @click="jumpMyWealth()">+ 0.00USDT <van-icon name="play" /></h3>
        </div>
      </div>
      <div class="wealth-section white">
        <div class="wrap">
          <van-tabs v-model="activeName">

            <!-- 活期 -->
            <van-tab title="活期" name="current">
              <div class="flex-column">
                <!-- 数据循环 -->
                <div class="wealth-card" v-for='item in currentData'>
                  <div class="card-title flex-row">
                    <i></i>
                    <h3>{{item.title}}</h3>
                    <span>{{item.risk}}</span>
                  </div>
                  <div class="card-value flex-row">
                    <div class="flex-column"><h3>{{item.rate}}%</h3><span>历史参考扣费后利率</span></div>
                    <div class="flex-column"><p>{{item.time}}天</p><span>期限</span></div>
                    <button @click="jumpPlan()">立即查看</button>
                  </div>
                  <div class="card-progress">
                    <van-progress :percentage="item.progress"  stroke-width="8" :show-pivot='false' color='#4768F3' />
                  </div>
                  <div class="card-residue flex-row">
                    <h3>剩余金额{{item.residue}}万</h3>
                    <p>{{item.progress}}%</p>
                  </div>
                </div>

              </div>
            </van-tab>

            <!-- 定期 -->
            <van-tab title="定期" name="uncurrent">
              <div class="flex-column">
                <!-- 数据循环 -->
                <div class="wealth-card" v-for='item in uncurrentData'>
                  <div class="card-title flex-row">
                    <i></i>
                    <h3>{{item.title}}</h3>
                    <span>{{item.risk}}</span>
                  </div>
                  <div class="card-value flex-row">
                    <div class="flex-column"><h3>{{item.rate}}%</h3><span>历史参考扣费后利率</span></div>
                    <div class="flex-column"><p>{{item.time}}天</p><span>期限</span></div>
                    <button>立即查看</button>
                  </div>
                  <div class="card-progress">
                    <van-progress :percentage="item.progress"  stroke-width="8" :show-pivot='false' color='#4768F3' />
                  </div>
                  <div class="card-residue flex-row">
                    <h3>剩余金额{{item.residue}}万</h3>
                    <p>{{item.progress}}%</p>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <router-view></router-view>
      <BottomNav></BottomNav>
    </div>
</template>


<script>
  import html2canvas from 'html2canvas'
  import { findGoodsById } from "../../axios/api"
  import BottomNav from '@/components/BottomNav'
    export default {
        data(){
          return{
            activeName: 'current',
            currentData:[
              {title:'ETH活期理财',risk:'低风险',rate:'5.1',time:'180',residue:'87',progress:80},
              {title:'ETH活期理财2',risk:'0风险',rate:'6.1',time:'190',residue:'17',progress:35},
              {title:'ETH活期理财8',risk:'低风险',rate:'5.1',time:'110',residue:'87',progress:50},
              {title:'ETH活期理财9',risk:'高风险',rate:'59.1',time:'120',residue:'207',progress:90},
              {title:'ETH活期理财4',risk:'中风险',rate:'1.1',time:'100',residue:'87',progress:99},
              {title:'ETH活期理财1',risk:'低风险',rate:'5.1',time:'80',residue:'367',progress:10},
            ],
            uncurrentData:[
              {title:'ETH活期理财2',risk:'0风险',rate:'6.1',time:'170',residue:'17',progress:35},
              {title:'ETH活期理财',risk:'低风险',rate:'5.1',time:'120',residue:'87',progress:20},
              {title:'ETH活期理财8',risk:'低风险',rate:'5.1',time:'120',residue:'87',progress:50},
              {title:'ETH活期理财9',risk:'高风险',rate:'59.1',time:'150',residue:'207',progress:10},
              {title:'ETH活期理财4',risk:'中风险',rate:'1.1',time:'110',residue:'87',progress:99},
              {title:'ETH活期理财1',risk:'低风险',rate:'5.1',time:'10',residue:'367',progress:10},
            ],
          }
        },
      mounted(){
      },
      methods:{
        jumpMyWealth(){
          this.$router.push({path:'/wealth/myWealth'});
        },
        jumpPlan(){
          this.$router.push({path:'/wealth/plan'});
        }
      },
      components:{
        BottomNav,
      }
    }
</script>

<style type="text/css">

  body{
    background: #fff;
  }

  .wealth .menu-tilte{
    color: #fff;
  }

  .wealth-header{
    color: #fff;
    height: 626px;
    background: url(/static/images/caifu_bg.png) no-repeat center;
    background-size: 100% 100%;
  }

  .wealth-header p{
    color: #FEFEFE;
    font-size: 32px;
    margin-top: 10px;
  }

  .wealth-header p i{
    margin-left: 12px;
  }

  .wealth-header h3{
    font-size: 56px;
    padding-top: 6px;
  }

  .wealth-header h3 i{
    margin-left: 12px;
    font-size: 28px;
    opacity: 0.49;
  }

  .wealth-section{
    width: 100%;
    margin-top: -276px;
    border-radius:30px 30px 0 0;
  }

  /* Tab导航 */
  .wealth .van-tab{
    line-height: 88px;
    font-size: 32px;
    color: #7A869A;
  }

  .wealth .van-tabs--line .van-tabs__wrap{
    height: 88px;
  }
  
  /* 选中状态 */
  .wealth .van-tab--active{
    color: #002251;
    font-size: 42px;
    font-weight: bold;
  }
  .wealth .van-tabs__line{
    width: 36px !important;
    height: 6px;
    background-color: #3A3BBE;
  }

  .wealth-section .flex-column{
    padding-top: 38px;
  }
  
  /* 卡片 */
  .wealth-card .flex-column{
    padding-top: 0;
  }

  .wealth-card{
    margin-top: 28px;
    width: 670px;
    height: 336px;
    border-radius:30px;
    box-shadow: 0 0 0.133333rem #dedee4;
    color: #002251;
  }

  .wealth-card .card-title{
    margin-left: 40px;
    margin-top: 32px;
  }
  
  .wealth-card .card-title i{
    display: inline-block;
    width: 42px;
    height: 42px;
    background: url(/static/images/tick_icon.png) no-repeat center;
    background-size: 100% 100%;
    margin-right: 22px;
  }

  .wealth-card .card-title h3{
    font-size: 36px;
    margin-right: 14px;
    color: #344563;
  }

  .wealth-card .card-title span{
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 24px;
    color: #4768F3;
    border: 1px solid #4768F3;
  }

  .wealth-card .card-value{
    margin-left: 40px;
    margin-top: 16px;
    position: relative;
    align-items: flex-end;
  }

  .wealth-card .card-value div{
    align-items: baseline;
  }

  .wealth-card .card-value div:nth-child(1){
    margin-right: 50px;
  }

  .wealth-card .card-value h3{
    color: #FB4D4F;
    font-size: 52px;
  }
  
  /* .wealth-card .card-value div:nth-child(2){
    margin-right: 82px;
  } */

  .wealth-card .card-value p{
    font-size: 48px;
  }

  .wealth-card .card-value span{
    color: #7A869A;
    font-size: 22px;
  }

  .wealth-card .card-value button{
    width: 168px;
    height: 68px;
    background: rgba(71,104,243,0.1);
    line-height: 68px;
    text-align: center;
    font-size: 28px;
    color: #4768F3;
    border: 2px solid #4768F3;
    position: absolute;
    right: 24px;
    top: 2px;
    border-radius: 34px;
  }

  .wealth-card .card-progress{
    margin-top: 32px;
    margin: 32px 36px 0 28px;
  }
 
  .wealth-card .card-residue{
    margin: 34px 36px 0 34px;
    font-size: 24px;
    justify-content: space-between;
  }
</style>
