# React组件库

[gitlab.317hu.com](http://gitlab.317hu.com/) 

# 特性

- [x] react + redux + fis3&webpack
- [x] typescript源码
- [x] sass模块化
- [x] 支持后端渲染

# 安装

````bash
$ npm install fit-[components]
````

# 用例

````jsx
import Timeago from 'fit-timeago'
ReactDOM.render(<Timeago date={new Date()}/>, reactNode)
````

样式是内置的,无需额外引用??

# 兼容性

IE9+

# 链接

- 组件库: https://github.com/fit-component

*** 

# 初始化项目：
- ./fit/src/components/doc/readme.md
  - git clone 出来的 master 包大小为 30.4M，小于此时请注重
  
# 组件库管理系统的开发模式：
- 当访问 localhost:8081 (module.exports.localPort = 8081)时，需要等待 npm run start-dev ，出现：`webpack: Compiled successfully.`

# 组件库管理系统的生产环境：
- npm run build
- npm run start
