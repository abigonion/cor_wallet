import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/Index'
// import Main from '@/pages/Main'
// import Wallet from '@/pages/Wallet'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// import mysettings from './mysettings'
// import assets from './assets'
// import trade from './trade'
// import contacts from './contacts'
// import addresses from './addresses'
// import account from './account'

// import Picklanguage from '@/pages/Picklanguage'
// import Guidepage from '@/pages/Guidepage'
// import Funding from '@/pages/Funding.vue'
// import PinLock from '@/pages/PinLock'
//首页
import index from '@/pages/index/index'
// const index = () => import('@/pages/index/index')
//财富
const wealth = () => import('@/pages/wealth/index')
const myWealth = () => import('@/pages/wealth/myWealth')
const tradingQuery = () => import('@/pages/wealth/tradingQuery')
const plan = () => import('@/pages/wealth/plan')
const financial = () => import('@/pages/wealth/financial')
const rollOut = () => import('@/pages/wealth/rollOut')
const success = () => import('@/pages/wealth/success')
const record = () => import('@/pages/wealth/record')

//资产
const assets = () => import('@/pages/assets/index')
const mentionMoney = () => import('@/pages/assets/mentionMoney')
const transferRecord = () => import('@/pages/assets/transferRecord')

//我的
const home = () => import('@/pages/home/index')
const invite = () => import('@/pages/home/invite')
const security = () => import('@/pages/home/security')
const personalInfo = () => import('@/pages/home/personalInfo')
const setting = () => import('@/pages/home/setting')
const join = () => import('@/pages/home/join')
const language = () => import('@/pages/home/language')
const help = () => import('../pages/home/help')

//登录
const login = () => import('@/pages/login/index')
const phone = () => import('@/pages/login/phone')
const verify = () => import('@/pages/login/verify')
const setPassword = () => import('@/pages/login/setPassword')

//new
//test
const dome = () => import('@/pages/dome/index')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: "/index",
    },
    {
      title:'首页',
      name: 'index',
      path: '/index',
      component: index
    },

    //财富路由
    {
      title:'财富',
      name: 'wealth',
      path: '/wealth/index',
      component: wealth,
      //子路由构建未完成
      // children:[
      //   {name: 'myWealth',path: 'myWealth',component: myWealth,},
      // ]
    },
    {
      title:'我的财富',
      name: 'myWealth',
      path: '/wealth/myWealth',
      component: myWealth,
    },
    {
      title:'交易查询',
      name: 'tradingQuery',
      path: '/wealth/tradingQuery',
      component: tradingQuery,
    },
    {
      title:'计划',
      name: 'plan',
      path: '/wealth/plan',
      component: plan,
    },
    {
      title:'理财',
      name: 'financial',
      path: '/wealth/financial',
      component: financial,
    },
    {
      title:'转出',
      name: 'rollOut',
      path: '/wealth/rollOut',
      component: rollOut,
    },
    {
      title:'转出成功',
      name: 'success',
      path: '/wealth/success',
      component: success,
    },
    {
      title:'转出记录',
      name: 'record',
      path: '/wealth/record',
      component: record,
    },

    //资产路由
    {
      title:'资产',
      name: 'assets',
      path: '/assets/index',
      component: assets
    },
    {
      title:'提出',
      name: 'mentionMoney',
      path: '/assets/mentionMoney',
      component: mentionMoney,
    },
    {
      title:'转出记录',
      name: 'transferRecord',
      path: '/assets/transferRecord',
      component: transferRecord,
    },
    


    //我的路由
    {
      title:'我的',
      name: 'home',
      path: '/home/index',
      component: home
    },
    {
      title:'邀请',
      name: 'invite',
      path: '/home/invite',
      component: invite
    },
    {
      title:'账户与安全',
      name: 'security',
      path: '/home/security',
      component: security
    },
    {
      title:'个人信息',
      name: 'personalInfo',
      path: '/home/personalInfo',
      component: personalInfo
    },
    {
      title:'设置',
      name: 'setting',
      path: '/home/setting',
      component: setting
    },
    {
      title:'语言',
      name: 'language',
      path: '/home/language',
      component: language
    },
    {
      title:'加入社群',
      name: 'join',
      path: '/home/join',
      component: join,
    },

    //登录
    {
      title:'登录',
      name: 'login',
      path: '/login/index',
      component: login
    },
    {
      title:'手机号',
      name: 'phone',
      path: '/login/phone',
      component: phone
    },
    {
      title:'验证码',
      name: 'verify',
      path: '/login/verify',
      component: verify
    },
    {
      title:'设置登录密码',
      name: 'setPassword',
      path: '/login/setPassword',
      component: setPassword
    },
    {
      title:'帮助与支持',
      name: 'help',
      path: '/home/help',
      component: help,
    },

    //测试路由
    {
      title:'测试',
      name: 'dome',
      path: '/dome',
      component: dome
    }
  ]
})

router.beforeEach((to,from,next) => {
  NProgress.start();
  next()
})

router.afterEach((to,from)=>{
  NProgress.done();
})

export default router
