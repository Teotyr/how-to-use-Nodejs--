const fs = require('fs')
let readStream = fs.createReadStream('./docs/test.txt',{encoding: 'UTF-8'})
let writeStream = fs.createWriteStream('./docs/test.txt3')


//readStream.on('data', (chunk)=>{
//    console.log('----------------------------------------------------------------------YENI CHUNK-------------------------------------------------------');
//console.log(chunk);
//writeStream.write(chunk)
//})

readStream.pipe(writeStream)