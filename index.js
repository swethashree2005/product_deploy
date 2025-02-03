const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./routes/productroutes')
const accountRouter = require('./routes/accountroutes')

 app.use(express.json())
 app.use("", productRouter);
 app.use("",accountRouter);

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://swethasundaram:sweths2005@mycluster.0dm5a.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.get('/',(req,res)=>{res.send('server reacted...')})


    console.log("updated")


