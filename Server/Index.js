// console.log("hello");
// // npm => node package manager

let joke = require('give-me-a-joke')
// console.log(joke);

joke.getRandomDadJoke((jokeee)=>{
console.log(jokeee);

})
console.log('---------------------------');
var vd = require('give-me-date');
console.log(vd);
vd.validate((date)=>{
    console.log(date);
})