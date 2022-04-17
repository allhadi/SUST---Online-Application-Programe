const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { use } = require('../routes/userRoutes')

//@desc   Register User
//@route  POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res) => {
const{registrationNo} = req.body
  if(!registrationNo){
    res.status(400)
    throw new Error('Please add a registration Number')
  }

  const getPass = registrationNo
  //Check if User Exists
  const userExists = await User.findOne({registrationNo})

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(getPass, salt)

  //Create User
  const user = await User.create({
    registrationNo,
    password: hashedPassword
  })

if(user){
    res.status(201).json({
      _id : user.id,
      registrationNo: user.registrationNo,
      token: generateToken(user._id)
    })
    
    console.log(token)
  }else{
    res.status(400)
      throw new Error('Invalid user data')
  }
  
})


//@desc   Authenticate a User
//@route  POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
const {regiNo,password} = req.body
//check for user email
const user = await User.findOne({regiNo})

  if(user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id : user.id,
      token: generateToken(user._id),
      message:"you are logged in"
    })
  }else{
    res.status(400)
    throw new Error('Invalid credentials')
  }
})


//@desc  Get User
//@route  GET /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})


//Generate JWT
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET,{
     expiresIn : '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}