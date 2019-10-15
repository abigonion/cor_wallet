

## [DAPP API文档]<http://rap2.taobao.org/repository/editor?id=14174>

## [设计图] <https://lanhuapp.com/web/#/item/project/board?pid=fad6071f-627a-4f1d-9d72-6bc3592bf6e0>

## [原型图] <https://org.modao.cc/app/pbw0dv4q44k0dgvzrhxbky7eg589n#screen=sk0dgvzutwtiie3m9>

## 主要功能:
* 账户
	* 注册
	* 登陆
	
* 资产
	* 充值资产
	* 提现资产
	* 资产预估（USDT）
* 充值提现
	* 充值
	* 提现
	* 历史记录查询
* 理财
	* 购买理财
	* 查看收益
	* 交易历史
* 安全
	* PIN
	* 密码
	* 数据保存在本地
* 多语言


## 开发
```
# 可以使用cnpm代替npm

# 需要安装cordova7.x的版本
npm i -g cordova@7.1.0
npm install -g cordova-hot-code-push-cli
git clone https://github.com/stellarcn/firelfy.git
cd firefly
npm i
# 打包
npm run build # 生成js css等文件
npm run chcp  # 生成运态更新文件
npm run cordova # 下载android和ios及相关插件

# 使用android studio打开firefly/platforms/android，即可远行android项目

# 使用xcode打开firefly/platforms/ios，即可运行ios项目

```

  - 技术栈
     - 框架 (具体参考 package.json)
        - Vue
        - Cordova
        - 

  - 项目结构

      ```
      ├── build                         打包文件夹
      ├── static                        静态资
      ├── ├── css
      ├── ├── images
      ├── ├── swiper
      ├── src
      │   ├── gt.js                     极验验证
      │   ├── axios                     接口
      │   ├── components                公用组件
      │   ├── locales                   国际化语
      │   ├── pages                     页面
      │   ├── router                    路由
      │   ├── actions                   公用action
	  │   ├── store		
	  │   ├── platforms					各个平台编译后文件	
	  │   ├── config					配置目录			
      ├── package.json
      ```

      ```
     v-touch使用：
       <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper"></v-touch>
      
      swiperleft: function() {
      this.$router.push({ path: "/home/setting" });
    },

      swiperright: function() {
      this.$router.push({ path: "/home/setting" });
    },

      ```

