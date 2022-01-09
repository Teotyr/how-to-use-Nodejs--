let names = ['selda','taha','özlem']
let ages = [41,21,40]

//console.log(names);
//console.log(ages);
//exports.names = names
//exports.ages = ages

let greeting = (name) => {
return `Merhaba, ${name}`  
}


module.exports = {
    isim: names,
    yas: ages,
    selamla: greeting
}
