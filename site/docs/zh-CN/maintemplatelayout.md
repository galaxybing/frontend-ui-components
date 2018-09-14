[![npm317 version](https://img.shields.io/badge/npm317-1.0.3-green.svg)](http://npm.intra.317hu.com/package/@317hu/rangedatepicker)
## 双日期控件


:::demo 双日期，支持时间。

```js
render() {
  const demoProps = {
    env: 'prod',
    skin: 'ewell', // 未指定时，则为 default
    selectedModuleName: '护士培训', //
    // selectedModuleName: '护士培训',
    // tips: [{ name: '课件库', src: 'http://image.317hu.com/FksgHTLzsAkr03uyylle4nnQTV8t' }],
  };
  return (
    <div>
      <MainTemplateLayout
        {
          ...demoProps
        }
      />
    </div>
  )
}
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info,text |     —    |
| plain     | 是否朴素按钮   | Boolean    | true,false | false   |
| loading     | 是否加载中状态   | Boolean    | — | false   |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| nativeType | 原生 type 属性 | string | button,submit,reset | button |
