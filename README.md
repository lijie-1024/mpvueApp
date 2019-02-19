# lijie-project-time

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report

# 文档
小程序
一、功能介绍
定位实用性小程序
主要功能：计时器、计时闹钟提示、手账（记事簿）、家庭相册（情侣专区）、小游戏专区
二、细节操作-页面设计
1、无需登录，微信授权即可。
2、首页-图标跳转
    2.1 日历 (待定)
        2.1.1 点击可以设置备注
        2.1.2 添加闹钟提示
    2.2 计时器-倒计时功能，纪念日2017年1月1日--距今多少日。（一期）
        操作：点击出现日历，选择起始结束日期，确认出现时间。
3、详情页（1）-手账页
    3.1 便签功能
        3.1.1 文字记录
        3.1.2 录音功能
        3.1.3 画图功能
    3.2 手账功能
        3.2.1 字体--排版、字体样式多变
        3.2.2 小图标--粘贴 
        3.2.3 添加图片功能--缩放旋转、放置
4、详情页（2）-相册页
    4.1 便签手账页中的图片-另存单独相册，上传图片保存后，手账功能可以选择相册页的图片。
    4.2 生成家庭相册，h5相册
        4.2.1 相册可分享 编辑音乐
5、详情页（3）-小游戏专区（广告页）
    小游戏链接推荐
三、原型
    选择皮肤功能：男生版-颜色基调：白蓝灰   女生版-颜色基调：白粉灰吧  自定义-白灰自定义（插件）
四、周期
    一期任务：
        1.原型图
        2.倒计时-日历
        3.其他基础功能
    按模块开发

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
