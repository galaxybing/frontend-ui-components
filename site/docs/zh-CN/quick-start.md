## 快速上手

### 安装
推荐使用 npm 的方式安装，它能更好地和`webpack`打包工具配合使用。

```shell
npm317 i @317hu --save
```

### 主题
开始前, 你还需要一个主题包, 这里我们推荐使用`@317hu-theme-default`.

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
