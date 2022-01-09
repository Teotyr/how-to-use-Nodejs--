//let os = require('os')
//console.log(os.platform(),os.homedir());

let fs = require('fs')
//console.log(fs);
//fs.readFile('./docs/test.txt','UTF-8',(err, data)=>{
//if(err) throw err
//console.log(data);
//})


//fs.writeFile('./docs/test2.txt','merhaba tekrar',(err)=>{
//    if(err) throw err
//    console.log('yazma basarili');
//})

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err) throw err
        console.log('klasor olustu');
    })

}else{
    fs.rmdir('./assets',(err)=>{
        if(err) throw err
        console.log('klasor silindi');
        })
}










fs.unlink('./docs/test2.txt',(err)=>{
    if(err) throw err
    console.log('dosya silindi');

})
