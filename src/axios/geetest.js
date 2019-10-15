import axios from './request'
import userApi from './userApi.js'


export default {
  getGeetestGt(data) {
    return axios.get('/acct/api/gt/code', data).then(res => res);
  },

  geetestConfig(mustParams, captchaBox, configParams) {
    if (!configParams) {
    return new Promise((resolve, reject) => {
      initGeetest({
        //必须的配置参数
        gt: mustParams.data.gt,
        challenge: mustParams.data.challenge,
        offline: mustParams.data.success,
        new_captcha: true,

        //configParams参数
        product: 'bind',
        width: "100%",

      }, function(captchaObj) {
        captchaObj.onReady(function() {
          $(captchaBox).click(function() {
            // 调用之前先通过前端表单校验
            captchaObj.verify();
          });
        }).onSuccess(function() {
          var result = captchaObj.getValidate();
          // console.log(result)
          if (!result) {
            console.log('没有数据，请完成验证');
          } else {
            resolve(result);
          }
        }).onError(function(){
          console.log("错误")
        });
      });
    })
    } else {
      console.log("自定义参数配置")
    }
  },

}
