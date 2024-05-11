// console.log("hello");
// // npm => node package manager
// npm init
// create a file 
// node filename.js 
// 

// let joke = require('give-me-a-joke')
// console.log(joke);

// joke.getRandomDadJoke((jokeee)=>{
// console.log(jokeee);

// })
// console.log('---------------------------');
// var vd = require('give-me-date');
// console.log(vd);
// vd.validate((date)=>{
//     console.log(date);
// })


// sysncronush

//  let fs = require('fs')


// create

// fs.writeFileSync('fsd7.txt','hello buddy')

// rename 
// fs.renameSync('fsd7.txt','fsd7.js')

// read 
// let data = fs.readFileSync('fsd7.js')
// console.log(data.toString());


//  delete 

// fs.unlinkSync('fsd7.js')

// update
// fs.writeFileSync('fsd7.js','hello buddy hii ')

// copy data

// fs.copyFileSync('index.html','fsd7.js')
//     console.log('copy succeed');


// Asynchronous way

//  hame dout na rahe ki hamari file main koi problem na ho  and second time check na karna pade isse bachne ke liye hum asynchronous ka use karte hain 

// fs.writeFile('index.html' , '<h1>hello world</h1>',(err)=>{
//   if(err) throw err
//   console.log('file has created');
// })

//  read the data
// fs.readFile('index.html',(err , data)=>{
//     if(err) throw err
//     console.log(data.toString());

// })

//  Copy data

// fs.copyFile('index.html','fsd7.js',(err)=>{
// if(err) throw err
// console.log('copy succeed');
// })


//  Create a server 

let http = require('http')

// console.log("hello friends ");

let server = http.createServer((req,res)=>{
console.log("hhhhhhhhh");
res.end('main aaa gaya ')
})

server.listen(5000,()=>{
    console.log("chal raha hu");
})


