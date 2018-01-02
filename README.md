# React组件库

[GitLab](http://gitlab.317hu.com/) 

# 特性

- [x] react + redux + fis3&webpack
- [x] typescript源码
- [x] sass模块化
- [x] 支持后端渲染

# 安装

````bash
$ npm install boz-[components]
````

# 用例

````jsx
import RichTextEditor from 'boz-rich-text-editor'
ReactDOM.render(<RichTextEditor date={new Date()}/>, reactNode)
````

样式是内置的,无需额外引用??

# 兼容性

IE9+

# 链接

- 组件库: https://github.com/frontend-ui-components

*** 

# 初始化项目：
- ./src/components/doc/readme.md
  - git clone 出来的 master 包大小为 30.4M，小于此时请注重
  
# 组件库管理系统的开发模式 - npm run start-dev
- 当访问 localhost:8081 (module.exports.localPort = 8081)时，需要等待 npm run start-dev ，出现：`webpack: Compiled successfully.`

# 组件库管理系统的生产环境：
- npm run build
- npm run start
