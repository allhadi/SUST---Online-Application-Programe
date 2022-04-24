const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
  userType:{
    type:String,
    required:[true,"Please add a userType"]
  },
  email:{
    type:String,
    required:[true,"Please add a email"],
    unique :true
  },
  password:{
    type:String,
    required:[true,"Please add a password"]
  },
},
{
  timestamps:true
})

module.exports = mongoose.model('User',userSchema)