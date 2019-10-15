import api from '@/axios/userApi';

export const initGeetest = (config) => {
  let lang;
  if (window.lan === 'en') {
    lang = 'en';
  } else if (window.lan === 'zh') {
    lang = 'zh';
  } else {
    lang = 'en';
  }
  console.log(config.data.gt);
  return new Promise((resolve, reject) => {
    window.initGeetest(
      {
        gt:config.data.gt,
        challenge: config.data.challenge,
        offline: !config.data.status, // 表示用户后台检测极验服务器是否宕机
        new_captcha: true, // 用于宕机时表示是新验证码的宕机 
        product: 'bind',  //产品形式，包括：float，popup
        width:"100%",
        lang,
      },
      gee => {
        gee.onReady(() => {
          gee.verify();
          resolve(gee);
        })
      }
    );
  });
};

export const validateGeetest = async (gee)=> {
  return new Promise((resolve, reject) => {
    gee.onSuccess(() => {
      resolve(gee.getValidate());
    });
    gee.onError(() => {
      reject({ message: null });
      // reject({ message: window.locale('验证失败') });
    });
    gee.onClose(() => {
      reject({ message: null });
      // reject({ message: window.locale('已取消此次验证') });
    });
  });
};

export const validateGee = async (username,action) =>{
    const config = await api.getGeeConfig(username,action);
    const gee = await initGeetest(config);
    const validate = await validateGeetest(gee);
    return { validate, config};
    //return config ;
}