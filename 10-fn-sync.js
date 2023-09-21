const {readFileSync,writeFileSync} = require('fs')

const Fisrt = readFileSync('./content/first.txt','utf-8')
const Second = readFileSync('./content/second.txt','utf-8')
console.log(Second)

console.log(Fisrt)

writeFileSync('./content/result-sync.txt',`${Fisrt} ${Second}`,{flag:'a'})