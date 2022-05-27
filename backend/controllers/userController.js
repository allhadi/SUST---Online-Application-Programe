const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { use } = require('../routes/userRoutes')

//@desc   Register User
//@route  POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res) => {
const{userType, email, password} = req.body
 
  if(!userType||!email||!password){
    res.status(400)
    throw new Error('Please add all fields')
  }

  //Check if User Exists
  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create User
  const user = await User.create({
    userType,
    email,
    password: hashedPassword
  })

if(user){
    res.status(201).json({
      _id : user.id,
      userType: user.userType,
      email: user.email,
      token: generateToken(user._id)
    })
  }else{
    res.status(400)
      throw new Error('Invalid user data')
  }
})


//@desc   Authenticate a User
//@route  POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
const {email,password} = req.body
//check for user email
const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id : user.id,
      userType: user.userType,
      email: user.email,
      token: generateToken(user._id)
    })
  }else{
    res.status(400)
    throw new Error('Invalid credentials')
  }
})


//Generate JWT
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET,{
     expiresIn : '30d',
  })
}

module.exports = {
  registerUser,
  loginUser
}