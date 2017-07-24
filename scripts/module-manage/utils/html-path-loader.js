import fs from 'fs'
import parsePath from './html-css-path-parse'

export default (filePath, info) => {
    let source = fs.readFileSync(filePath).toString()
    const name = parsePath(filePath, info)

    // 忽略 @babel ignore 模块
    if (source.indexOf('@babel ignore') > -1) {
        return
    }

    if (name === '') return

    source = source.replace(/_namespace/g, name)
    fs.writeFileSync(filePath, source)
}