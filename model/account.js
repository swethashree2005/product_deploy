const mongoose = require('mongoose')

const accountSchema=
{
userId:{type:Number,required:true},
password:{type:String,required:true}
}
module.exports=mongoose.model("Account",accountSchema)

