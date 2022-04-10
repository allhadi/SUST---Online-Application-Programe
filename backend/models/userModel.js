const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
  registrationNo:{
    type:String,
    required:[true,"Please add a registration no"]
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