const os = require('os');

//info about current user 
const user = os.userInfo()
console.log(user); 

//methode return system uptime in seconds

console.log('System uptime is ', os.uptime())

const currentOS = {
    name:os.type(), 
    version:os.version(), 
    totalMem:os.totalmem(),
    freeMem:os.freemem(), 


}
console.log(currentOS.totalMem, currentOS.freeMem)
console.log('the OS is ',currentOS.name ,'running on', currentOS.version )