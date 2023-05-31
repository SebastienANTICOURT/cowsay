let userInfo = require('./information');

const cowsay = require('cowsay');
myInfoTab = Object.values(userInfo)
const sayMyInfo = myInfoTab.join(',')

console.log(cowsay.say({ 
    text: sayMyInfo,
    e:"oO",
    T:"U"
}));



