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
    <title>Boz Design</title>

    <body>
    <div id='react-dom'></div>
    </body>
    <script src="/static/dll/library.dll.js"></script>
    ${bundleJs}
    <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?9e6356ee54313747e9bbdb40ecdfa809";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
    </html>
    `
}