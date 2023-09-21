//export a module
const sayHi = (name) => {
    console.log(`Hello there ${name}`);
  };
module.exports = sayHi;

module.exports.items = ['hello','myname']