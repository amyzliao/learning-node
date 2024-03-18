const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve('content', 'subfolder', 'test.txt')
const absolute2 = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log('pig')
console.log(absolute)
console.log('pig2')
console.log(absolute2)
console.log(__dirname)