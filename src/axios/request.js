import axios from "axios";
import qs from "qs";
// import { Toast , Indicator } from 'mint-ui';


// 自动获取url 域名
let currentUrl = window.location.hostname,url;
if (currentUrl == 'm.chaohaigou.com') {
  url = "https://m.chaohaigou.com/app/small-goods-web/"  // 线上打开自动使用正式域名
} else if (currentUrl == 'test.xtkjnet.com' || currentUrl == 'localhost' || currentUrl == '192.168.2.127') {
  url = "http://zioncoin.info"  // 本地打开自动使用测试域名

} else {
  url = "http://null.com/"
}

axios.defaults.baseURL = url
axios.defaults.timeout = 150000

axios.interceptors.request.use(config => {
  //  Loading方法
  // Indicator.open({text:'加载中...', spinnerType: 'fading-circle'});
  return config
}, error => {
  // Indicator.close();
  // Toast('加载超时');
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => {
  // 响应成功关闭loading
  // Indicator.close();
  return data
}, error => {
  // Indicator.close();
  // Toast('加载失败 请刷新页面~~~');
  return Promise.reject(error)
})

export default {
  // 封装post  get 方法
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url,data,{
        headers:{
          authorization_token:window.localStorage.getItem('CLIENT_TOKEN') || '',
          authorization_uid:window.localStorage.getItem('UID') || '',
          authorization_username:window.localStorage.getItem('USERNAME') || '',
          platform: "pc",
          lan: "zh",
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
}
