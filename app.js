// var response = require('./method')

// response.data.updateData()

var fs = require('fs')
// var data = 'Praibool Namwong\nLearning NodeJs'
var reader = fs.createReadStream('code.txt')
var writer = fs.createWriteStream('output1.txt')

// writerStream.write(data, 'utf8')
// writerStream.on('finish', function(){
//     console.log('Write file Success.')
// })
reader.pipe(writer)
// console.log(ReadFile)
// fs.writeFileSync('test.txt', ReadFile)