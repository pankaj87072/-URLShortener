const express=require('express');
const app=express();
const port=8080;
const userrouter=require('./router/Route');
const Connection=require('./DBconnection/Connection');
const path=require('path');
const cors=require('cors');
//setting cors for network hindnerence
app.use(cors());
//Connecting Database 
Connection('mongodb://localhost:27017').then(()=>{
    console.log('Database is connected');
}).catch((err)=>{
    console.log("An error is occured:"+err);
})
//setting ejs engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/',userrouter);
app.listen(port,()=>{
    console.log(`SERVER STARTED AT PORT NO:${port}`);
});
