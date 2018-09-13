"colorful": "^2.1.0",

"gulp": "^3.9.1",

"gulp-typescript": "^3.1.6",

"through2": "^2.0.1",

"rimraf": "^2.6.1",


"babel-plugin-add-module-exports": "^0.2.1",
"babel-plugin-import": "^1.1.1",
"babel-plugin-transform-es3-member-expression-literals": "^6.22.0",
"babel-plugin-transform-es3-property-literals": "^6.22.0",
"babel-plugin-transform-object-assign": "^6.22.0",
"babel-plugin-transform-runtime": "~6.23.0",
"babel-preset-es2015": "^6.24.1",

"babel-preset-react": "^6.16.0",
"babel-preset-stage-0": "^6.16.0",


npm package 转化 compile-tools

package.json 配置移除 babel:

```json
"babel": {
  "presets": [
    "react-app"
  ]
},
```

tslint.json

"tslint-eslint-rules": "^4.1.0",





