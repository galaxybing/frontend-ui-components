## 快速上手

### 安装
命令工具安装：npm --registry=http://registry.npm.intra.317hu.com/ install npm-317hu -g

然后，使用 npm317 的方式安装组件：

```bash
npm317 i @317hu/* --save
```

### 命名规则
1. （形式 + 作用）|操作
2. 由于publish时，包名称不支持？？中横杠字符，可以使用驼峰形式
3. README 内容（组件使用说明）简要规则：

<pre>
* 组件标题名 + 版本标识（版本链接）
* 组件概述文字（无抬头）
* 使用示例、演示
* API（表格形式）
* API注释说明段落
* 代码演示区，支持在线编辑、预览
</pre>

### 主题
引用组件开始之前, 你可能还需要一个主题样式包, 这里我们推荐使用`@317hu-theme-default`.

```shell
npm317 install @317hu-theme-default --save
```

### 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@317hu';

import '@317hu-theme-default';

ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));

```
