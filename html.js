var config = require('./config')

module.exports = function (args) {
    var bundleCss = ''
    var bundleJs = ''

    if (args[0] === 'production') {
        bundleCss = `<link rel="stylesheet" type="text/css" href="/static/style.css">`
        bundleJs = `<script src="/static/bundle.js"></script>`
    } else {
        bundleJs = `<script src="http://localhost:${config.localWebpackPort}/bundle.js"></script>`
    }

    return `
    <!DOCTYPE html>
    <html lang="zh-cn">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta name="format-detection"
          content="telephone=no">
    ${bundleCss}
    <title>伯仲信息科技-前端组件库</title>

    <body>
    <div id='react-dom'></div>
    </body>
    <script src="/static/dll/library.dll.js"></script>
    ${bundleJs}
    </html>
    `
}