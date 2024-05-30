 let express = require('express')
 let app = express()
 app.use(express.static( 'public'));

app.get('/',(req,res)=>{
console.log('hiii');
res.render('index')
})




 app.listen(3000,()=>{
    console.log("server start");
 })