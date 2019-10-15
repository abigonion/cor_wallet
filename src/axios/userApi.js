import axios from './request'

export default {
    /**
     *
     * 获取极验配置
     * @param {*} username
     * @param {*} action
     * @returns
     * challenge：String,gt：String,status: Integer
     */
    getGeeConfig(username, action) {
      return axios.post('/acct/api/gt/code', {
        username,
        action,
      }).then(res=>res);
    },

    /**
     *
     *发送短信
     * @param {*} data
     * @returns
     */

    sendCode(data) {
        return  axios.post('/acct/api/codeSend', data).then(res=>res);
      },

    /**
     *
     * 注册
     * @param {*} data
     * @returns
     */

    regist(data) {
        return axios.post('/acct/api/user/register/', data).then(res=>res);
    }
}

/*
登陆接口（登陆三步走）
登陆第一步
/api/user/prelogin/
登陆第二步之发送验证码
/api/user/login/sender/
登陆第二步之登陆
/api/user/login/
*/

