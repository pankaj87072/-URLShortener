const mongoose=require('mongoose');
const Schema=new mongoose.Schema({
    shortid:{
        type:String,
        unique:true,
        required:true,
    },
    RedirectUrl:{
        type:String,
        required:true,
    },
    Noofclicks:{
        type:Number,
    },
    // ValidateClick:[
    //     {
    //         Noofclick:{}
    //     }
    // ]
})
const URL=mongoose.model('urlshortener',Schema);
module.exports=URL;