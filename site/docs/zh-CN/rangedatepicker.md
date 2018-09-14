[![npm317 version](https://img.shields.io/badge/npm317-1.0.3-green.svg)](http://npm.intra.317hu.com/package/@317hu/rangedatepicker)
## 双日期控件


:::demo 双日期，支持时间。

```js

constructor(props) {
  super(props)
  this.state = {}
}

render() {
  const nowTime = Moment(new Date()).format('HH:mm');
  return (
    <div className="markdown-inner">
      <RangeDatePicker
        disabledTime={() => {}}
        showTime={{
          defaultValue: [Moment(nowTime, 'HH:mm'), Moment('23:59', 'HH:mm')],
          format: 'HH:mm',
        }}
        placeholder={['开始时间', '结束时间']}
        format="YYYY-MM-DD HH:mm"
        disabledDate={(current) => {// disabledDate: (current: moment.Moment) => boolean; 是函数 且需要返回
          return current && Moment(current).format('YYYY-MM-DD') < Moment(new Date()).format('YYYY-MM-DD');
        }}
        onChange={() => {}}
        disabledDateTimeNow
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
