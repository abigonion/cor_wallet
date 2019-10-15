 <template>
    <div class="assets">
      <div class="assets-wrap">

        <div class="menu-tilte white">资产</div>

        <div class="assets-total" >
          <div class="assets-total-info">
            <p>我的资产</p>
            <h3>1000 ETH</h3>
            <span>≈150 USDT</span>
          </div>
        </div>
        
        <div class="assets-directory-container">

          <!-- <div class="assets-directory-info" v-for="item in directoryData">
            <div class="assets-cell-title flex-row">
              <h3>{{item.coinName}}</h3>
              <p>≈ 100 USDT</p>
              <i></i>
            </div>
            <div class="cell-value flex-row" v-for="cell in item.coinEntry">
              <h3>总额 <span>{{cell.total}}</span></h3>
              <p class="flex-row"><span>{{cell.freeze}}</span> 冻结</p>
            </div>
            <div class="cell-btn flex-row">
              <div class="btn-top-up"><i></i>充值</div>
              <div class="btn-withdrawal"><i></i>提现</div>
            </div>
          </div> -->

          <van-collapse v-model="activeName">
            <div v-for="(item,index) in directoryData">
              <van-collapse-item :title="item.coinName" :name="index" value="≈ 100 USDT" >
                <div class="assets-directory-info">
                  <div class="cell-value flex-row" v-for="cell in item.coinEntry">
                    <h3>总额 <span>{{cell.total}}</span></h3>
                    <p class="flex-row"><span>{{cell.freeze}}</span> 冻结</p>
                  </div>
                  <div class="cell-btn flex-row">
                    <div class="btn-top-up" @click="codeShow(item)"><i></i>充值</div>
                    <div class="btn-withdrawal" @click="jumpMentionMoney1()"><i></i>提现</div>
                  </div>
                  <div class="cell-bottom flex-row" v-if="item.show"><p>0x0a0053uuuurwrq953901f89</p><i @click="copy(item.coinName)">复制</i></div>
                </div>
              </van-collapse-item>
            </div>
          </van-collapse>

        </div>
      </div>
      <BottomNav></BottomNav>
    </div>
</template>


<script>
  import BottomNav from '@/components/BottomNav'
  import html2canvas from 'html2canvas'
    export default {
      data(){
        return{
          activeName:["0"],
          directoryData:[],
        }
      },
      created(){
        let data = [
            {
              coinName:'BTC',
              equal:'1000',
              coinEntry:[
                {total:'100',freeze:'0'},
                {total:'99',freeze:'520'}
              ],
            },
            {
              coinName:'ETH',
              equal:'1000',
              coinEntry:[
                {total:'100',freeze:'0'}
              ]
            },
            {
              coinName:'ETHconin',
              equal:'1000',
              coinEntry:[
                {total:'100',freeze:'0'}
              ]
            },
            {
              coinName:'conin',
              equal:'1000',
              coinEntry:[
                {total:'100',freeze:'0'}
              ]
            },
            ]
        data.forEach(item => {
          item.show = false
        })
        this.directoryData = data
      },
      mounted(){
      }, 
      methods:{
        jumpMentionMoney1(){
          this.$router.push({path:'/assets/mentionMoney'});
        },
        codeShow(item){
          item.show = true;
        },
        copy(code){
          var input = document.createElement("input");      // 直接构建input
          input.value = code;                               // 设置内容
          document.body.appendChild(input);                // 添加临时实例
          input.select();                                   // 选择实例内容
          document.execCommand("Copy");                     // 执行复制
          document.body.removeChild(input);                // 删除临时实例
          console.log("复制成功")
        }
      },
      components:{
        BottomNav,
      }
    }
</script>

<style type="text/css">
  .assets{
    background: #ffff;
  }
  .assets-wrap{
    margin-left: 50px;
  }

  /* 总计 */
  .assets-total{
    width: 660px;
    height: 300px;
    background: url(/static/images/zichan_bg2.jpg) no-repeat center;
    background-size: 100% 100%;
    border-radius: 30px;
    margin-top: 18px;
    box-shadow: 0px 10px 6px rgba(71,104,243, 0.5);
  }
  .assets-total .assets-total-info{
    margin-left: 40px;
    color: #fff;
  }
  .assets-total .assets-total-info p{
    font-size: 32px;
    padding-top: 54px;
  }
  .assets-total .assets-total-info h3{
    font-size: 56px;
    padding-top: 18px;
  }
  .assets-total .assets-total-info span{
    font-size: 36px;
    padding-top: 16px;
  }

  /* 目录 */
  .assets-directory-container{
    margin-top: 30px;
  }

  .assets-directory-container .assets-directory-info{
    padding-bottom: 26px;
    border-bottom: 2px solid #F2F2F2;
  }
  
  /* 目录标题 */
/*   .assets-cell-title{
    position: relative;
    padding: 10px 0;
    margin-top: 38px;
  }

  .assets-cell-title h3{
    color: #4768F3;
    font-size: 32px;
  }

  .assets-cell-title p{
    color: #002251;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    right: 80px;
  }

  .assets-cell-title i{
    display: inline-block;
    width: 12px;
    height: 24px;
    position: absolute;
    right: 52px;
    background: url(/static/images/right_arrow.png) no-repeat center;
    background-size: 100% 100%;
  } */
  
  /* 目录内容 */
  .cell-value{
    position: relative;
    padding: 10px 0;
    color: #7A869A;
  }

  .cell-value h3{
    font-size: 28px;
  }

  .cell-value h3 p{
    font-size: 26px;
  }

  .cell-value span{
    color: #002251;
    font-size: 28px;
    font-weight: bold;
    margin-right: 8px;
  }

  .cell-value p{
    position: absolute;
    right: 50px;
    font-size: 24px;
  }

  /* 目录按钮 */
  .cell-btn{
    padding: 10px;
    margin-right: 44px;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .cell-btn div{
    width: 300px;
    height: 72px;
    line-height: 72px;
    box-shadow: 0px 0px 10px #dedee4;
    color: #4768F3;
    font-size: 28px;
    text-align: center;
  }

  .cell-btn div i{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-size: 100% 100%;
    vertical-align: middle;
    margin-right: 14px;
  }

  .cell-btn div.btn-top-up i{
    background: url(/static/images/zichan_chongzhi.png) no-repeat center;
    
  }

  .cell-btn div.btn-withdrawal i{
    background: url(/static/images/zichan_tixian.png) no-repeat center;
  }
  
  /* 目录底部 */
  .cell-bottom{
    font-size: 24px;
    justify-content: space-between;
  }

  .cell-bottom i{
    display: inline-block;
    margin-right: 50px;
  }

  /* 手风琴 */
  .assets .van-cell{
    padding: 10px 52px 10px 0;
    margin-top: 38px;
  }

  .assets .van-cell__title{
    color: #4768F3;
    font-size: 32px;
    font-weight: bold;
  }

  .assets .van-cell__value{
    color: #002251;
    font-size: 28px;
    font-weight: bold;
    padding-right: 24px;
  }
  .assets .van-cell__right-icon{
    font-size: 24px;
  }

  .assets .van-collapse-item__content{
    padding: 0;
  }
</style>
