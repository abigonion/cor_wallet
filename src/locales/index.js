import Vue from 'vue'
import VueI18n from 'vue-i18n'
let endata = require('./en.json')
let zhcndata = require('./zh-cn.json')
// let hkdata = require('./zh-hk')

Vue.use(VueI18n)

// language const variable
export const ZH_CN = {
  key: 'zh_cn',
  label: '简体中文'
}
export const EN = {
  key: 'en',
  label: 'English'
}

export const LANGUAGES = [
  EN,
  ZH_CN,
]

export const MOMENT_LANGUAGES = {
  'zh_cn': 'zh-cn',
  'en': 'en',
}

export function getDeviceLanguage(){
  return new Promise((resolve,reject) => {
    navigator.globalization.getLocaleName(locale=>{
        let val = locale.value
        if (['zh','zh-CN'].includes(val)) {
          resolve(ZH_CN)
        }else{
          resolve(EN)
        }
      },()=>{
        resolve(ZH_CN)
      }
    );
  })
}

export const i18n = new VueI18n({
  locale: ZH_CN.key,
  messages: {
    [EN.key]: endata,
    [ZH_CN.key]: zhcndata,
  }
})

export const RandomPlanetsCount = 2
export const RandomColorsCount = 9

