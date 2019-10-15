<template>
  <div class="box">
    <h1>测试极验</h1>
    <form id="form">
        <div>
            <label for="username">手机号：</label>
            <input class="inp" id="username" type="text" value="手机号">
        </div>
        <br>
        <div id="btn" class="btn">提交</div>
    </form>
  </div>
</template>
<script>
import BottomNav from '@/components/BottomNav'
export default {
  data() {
    return {
      
    }
  },
  created() {

  },
  mounted(){
        var handler = function (captchaObj) {
        captchaObj.onReady(function () {
            $("#wait").hide();
        }).onSuccess(function () {
            var result = captchaObj.getValidate();
            if (!result) {
                return alert('请完成验证');
            }else{
                console.log(result);
            }
            $.ajax({
                url: 'http://zioncoin.info/acct/api/codeSend',
                type: 'POST',
                dataType: 'json',
                headers: {
                    Accept: "application/json, text/plain, */*",
                    platform: "pc",
                    lan: "zh"
                 },
                contentType: "application/json;",
                data:JSON.stringify({
                    "carrier":"TEL",
                    "code_type": "REGISTER",
                    "status": 1,
                    "country_code":"+86",
                    username: $('#username').val(),
                    challenge: result.geetest_challenge,
                    validate: result.geetest_validate,
                    seccode: result.geetest_seccode
                }),
                success: function (data) {
                    if (data.status === 'success') {
                        setTimeout(function () {
                            alert('登录成功');
                        }, 1500);
                    } else if (data.status === 'fail') {
                        setTimeout(function () {
                            alert('登录失败，请完成验证');
                            captchaObj.reset();
                        }, 1500);
                    }
                }
            });
        });
        $('#btn').click(function () {
            // 调用之前先通过前端表单校验

            captchaObj.verify();
        });
        // 更多接口说明请参见：http://docs.geetest.com/install/client/web-front/
    };


    $.ajax({
        url: "http://zioncoin.info/acct/api/gt/code" ,//+ (new Date()).getTime(), // 加随机数防止缓存
        type: "GET",
        dataType: "json",
        success: function (data) {

            // 调用 initGeetest 进行初始化
            // 参数1：配置参数
            // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
            initGeetest({
                // 以下 4 个配置参数为必须，不能缺少
                gt: data.data.gt,
                challenge: data.data.challenge,
                offline: !data.data.status, // 表示用户后台检测极验服务器是否宕机
                new_captcha: true, // 用于宕机时表示是新验证码的宕机

                product: "bind", // 产品形式，包括：float，popup
                width: "300px",
                //https: true

                // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
            }, handler);
        }
    });
  },
  methods: {
    //sweiper
    bannerSwiper() {
      this.$nextTick(() => { //页面完全加载成功
        this.bannerSwiper = new Swiper("#bannerSwiper", {
          autoplay: 3000,
          pagination: '.bannderPagination',
          loop: true,
          autoplayDisableOnInteraction: false,
          effect: 'fade',
          fade: {
            crossFade: true,
          },
        })
      })
    },
  },
  components: {
  }
}

</script>

<style type="text/css">
  .test{
    width: 750px;
    height: 614px;
    background: url(/static/images/zichan_bg2.jpg) no-repeat center;
    background-size: 100% 100%;
  }
</style>
