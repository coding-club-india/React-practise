// console.log("hello");
// // npm install=> node package manager
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

// let http = require('http')

// console.log("hello friends ");

// let server = http.createServer((req,res)=>{
// console.log("hhhhhhhhh");
// res.end('main aaa gaya ')
// })

// server.listen(5000,()=>{
//     console.log("chal raha hu");
// })


//  express start

// let expres= require('express')

// let app = expres()




// app.get('/',(req,res)=>{
// res.send('hello')
// })


// app.get('/cat',(req,res)=>{
//     res.send('yyyyyyyyyy')
//     })

    
// app.get('*',(req,res)=>{
//     res.send('hjkhjh')
//     })    
    


// // port 

// app. listen(4000,()=>{
//     console.log('server run');
// })



// let expres= require('express')

// let app = expres()




// app.get('/',(req,res)=>{

// res.send('vikashhhh')

// })

//   : then after write is a variable type works
//  this is a path patameter  fetch data / ke bad likha jata hain

// app.get('/:r/:a',(req,res)=>{
//   let {r,a} = req.params

//     res.send(`${r} and chjkl;vlbjgdfv ${a}`)
//     console.log('runnnnnnnnnnn');

    // })

    // -------------------

    //  if write a ? after this inside of querry params

    // app.get('/search',(req,res)=>{
    //     let {r,a} = req.params
    //      console.log('my friend');

    //      console.log(req.query);
    //      let {firstName,lastName} = req.query

    //      res.send(`${firstName}    ${lastName}`)

        //   console.log(`${firstName},${lastName}`);
      
          // res.send('yyyyyyyyyy')
        //   })
    
// app.get('*',(req,res)=>{
//     res.send('hjkhjh')
//     })    



// let expres= require('express')

// let app = expres()

//     app.set('view engine','ejs')
//     app.use(expres.static('public'))

// app.get('/',(req,res)=>{
//         res.render('index')
//         }) 
        
//     //     app.get('/random',(req,res)=>{
//     // let a = Math.random()*100

//     //         res.render('random',{a})
//     //         }) 

//     app.get('/random',(req,res)=>{
//         let {data} = req.params
//         let variable = req.query
//         let a = Math.floor(Math.random()*100)
//         let arr = ['hii','heelo','vks','A','B','C','A','B']
//         let arr1 = ['a','b','c','d','a','b']
//         let count =0;
        //   for(let i=0;i<arr1.length;i++){
        //     if (arr1[i]==variable) {
        //       count+=1   
        //     }
        //   }
     

    
                // res.render('random',{arr,count})
                // }) 


// port 

// app. listen(5000,()=>{
//     console.log('server run on 5000');
// })

//   likhna hain




// restful architecture/RESTFUL API

// CRUD OPERATIONS 

let comments = [
    {
        id:0,
        username:"Sam",
        comment:"chitkara is a nice university 0"
    },
    {
        id:1,
        username:"g2",
        comment:"chitkara is a nice university 1"
    },
    {
        id:2,
        username:"vohra",
        comment:"chitkara is a nice university 2"
    }
  ]


// let express =require('express')

// let override = require('method-override')

// let app = express();

// css tag throgh link the server

// app.use(express.static('public'))

// app.use(override('_method'));

// app.get('/',(req,res)=>{

//     res.send('hii')
// })
//  this is a show read operation perform
// app.set('view engine','ejs')
// app.set('view engine','ejs')

// app.use(express.urlencoded({extended:true}))

// app.get('/blogs',(req,res)=>{
    
//     res.render('index',{comments})
    
// })


//  this is a send data processs of your backend


// app.get('/blogs/new',(req,res)=>{
    

//     res.render('form')
   
// })

// push data  in a array  // add data in a array

// app.post('/blogs',(req,res)=>{
//     console.log(req.body,'yes');
//     let {username,comment} =req.body
//     comments.push({username,comment,id:comments.length})
//     // res.send('sssssssssssssssss')
//     // res.send(`${username} and ${comment} `)
//     res.redirect('/blogs')
// })



// edit operation

// app.get('/blogs/:id',(req,res)=>{
//     let {id} = req.params
//     console.log(id , 'idididi');

//     let data = comments.find((data)=>{
//     return data.id==id
//     })
//     // console.log(data,'dataaaaaaaa');

//     res.render('EditForm',{data})

// })

// //  recive update data

// app.patch('/blogs/:id',(req,res)=>{
//  console.log(req.body);
//  let {id} = req.params
 
//  console.log(id,'eje');
//  let {username,comment}=req.body

//  let data=  comments.find((data)=>{return data.id==id})
//  console.log(data,"datata");

//  data.comment=comment
//  data.username=username
//  res.redirect('/blogs')
// //  res.send('corrrecttttttttt')
// }) 




// delete operation perform

// app.delete('/blogs/:id' ,(req,res)=>{
//   let {id} =req.params
//   console.log(id);
//    let arr= comments.filter((data)=>{
//    return data.id!=id
//   })
//   comments = arr
//   res.redirect('/blogs')
// })




// app.listen(5000,(req,res)=>{
  
//     console.log('server is running');
// })



// CSR VS 

let express =require('express')


let override = require('method-override')

let app = express();
app.use(express.urlencoded({extended:true}))


let arr = [1,2,3,4,5]


app.use('/home',express.static('public'))

app.use(override('_method'));

app.get('/',(req,res)=>{

    res.send('hii')

})

app.get('/todo',(req,res)=>{
   res.json(arr)
})

app.post('/todo',(req,res)=>{
    
    console.log(req.body);

  let  {data} =  req.body
  let data1 = parseInt(data)  
  arr.push(data1)
  
    res.send('yess')

 })

app.listen(5000,(req,res)=>{
  
    console.log('server is running');
})




