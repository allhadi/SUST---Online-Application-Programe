const mongoose = require ('mongoose')

const studentSchema = mongoose.Schema({
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

module.exports = mongoose.model('Student',studentSchema)