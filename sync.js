const textfile = require('textfile')

const jsPath = '/Users/guoshengqiang/Documents/uni-app/packages/uni-h5/dist/index.umd.js'
const jsTopath = '/Users/guoshengqiang/Downloads/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/uni-h5/dist/index.umd.min.js'
const cssPath = '/Users/guoshengqiang/Documents/uni-app/packages/uni-h5/dist/index.css'
const cssToPath = '/Users/guoshengqiang/Downloads/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/uni-h5/dist/index.css'

textfile.read(jsPath, 'string').then(str => {
    return textfile.write(jsTopath, str, 'string')
})
textfile.read(cssPath, 'string').then(str => {
    return textfile.write(cssToPath, str, 'string')
})