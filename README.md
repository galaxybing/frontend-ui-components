# [前端组件管理平台](http://monet.317hu.com/#/zh-CN/quick-start)

monet - 莫奈

# 操作指南

```bash
$ npm run start

$ npm run build

$ npm run prepubl¡sh # 预发布仓库

$ npm run postpublish
```

# 开发记录

### 管理平台的自带依赖包引入：
- moment
  - /src/index.js
    - export { default as moment } from 'moment';
- local
  - /src/index.js
    - export { default as i18n } from './locale';
- react - 这里要求移除掉子组件内部的 node_modules/* react和react-dom
- react-dom

## 切换至英文 文档描述 操作：

- this.setLocale.bind(this, 'en-US')
- /site/page.jsx

```
<li className="nav-item">
  <span className={classnames('nav-lang', { active: this.state.locale === 'zh-CN'})} onClick={this.setLocale.bind(this, 'zh-CN')}>中文</span>
  <span> / </span>
  <span className={classnames('nav-lang', { active: this.state.locale === 'en-US'})} onClick={this.setLocale.bind(this, 'en-US')}>En</span>
</li>
```

## ui.317hu.com ？？

- http://galaxyw.317hu.com:3001/#/zh-CN/rangedatepicker
- http://historyroute.317hu.com/#/zh-CN/rangedatepicker

## typescript 语法接入

- tsc配置接入
- 热更新
- `Unable to find node on an unmounted component.`
  - 要使用到 组件演示管理平台时，需要移除掉子组件包(frontend-ui-startkit)的 react + react-dom 的依赖引用（node_modules/）；

## Alogia静态点搜索支持

- 更新，并上传 docsearch-site-algolia.json 

## npm script 脚本 + python 流程控制，生成知识脑图；

- 拉取 @317hu 组件库包，集中构建 <- git clone
- npm run compile
- cnpm run publish


# 内容更新步聚

1. site/pages
  - ./index.jsx                                                    左侧导航菜单 + 显示配置
    - export default class MainTemplateLayout extends Markdown
      - this.constructor.name
        - demo-block demo-box demo-maintemplatelayout
  - /[`组件名称`]/style.scss                                        页面样式

2. site/locales/zh-CN.js                                           左侧导航菜单 + 标题文案

3. src/@317hu/[`组件名称`]/README.md                                markdown 内容
  - /site/assets/docsearch-site-algolia.json  [`Alogia`静态点搜索支持](http://noonteam.com/pages/viewpage.action?pageId=3473412)
  - [组件标识库](https://shields.io/#/)
    - [![npm317 version](https://img.shields.io/badge/npm317-1.0.3-green.svg)](http://npm.intra.317hu.com/package/@317hu/rangedatepicker)

4. src/@317hu/*    
                           
5. src/index.js                                                   声明组件名称
  - export { default as [`组件名称`] } from './[`组件名称`]/src/components'

# bisheng + ssr

# monet.317hu.com
