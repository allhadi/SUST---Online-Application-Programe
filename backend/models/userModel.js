const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
  userType:{
    type:String,
    required:[true,"Please add a userType"]
  },
  email:{
    type:String,
    unique :true
  },
  password:{
    type:String,
    required:[true,"Please add a password"]
  },
  firstName:{
    type:String,
  },
  lastName:{
    type:String,
  },
  department:{
    type:String,
  },
  course:{
    type:String,
  },
  admissionDate:{
    type:String,
  },
  nationalID:{
    type:String,
  },
  mobileNumber:{
    type:String,
  },
  birthDate:{
    type:String,
  },
  gender:{
    type:String,
  },
  nationality:{
    type:String,
  },
  religion:{
    type:String,
  },
  bloodGroup:{
    type:String,
  },
  presentAddress:{
    type:String,
  },
  parmanentAddress:{
    type:String,
  },
  fathersName:{
    type:String,
  },
  mothersName:{
    type:String,
  },
  fathersMobileNo:{
    type:String,
  },
  mothersMobileNo:{
    type:String,
  },
  localGurdianName:{
    type:String,
  },
  localGurdianMobileNo:{
    type:String,
  },
  localGurdianAddress:{
    type:String,
  },
  relationWithLocalGurdian:{
    type:String,
  },
},
{
  timestamps:true
})

module.exports = mongoose.model('User',userSchema)