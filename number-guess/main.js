const prompt = require('prompt-sync')();
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var i = parseInt(prompt('1 to '))
var x = parseInt(prompt('what is your guess 1 to '+i))
var y = getRandomInt(i+1)
if(x == y) {
  console.log('correct')
}else{
  console.log(y)
}
process.exit(0);