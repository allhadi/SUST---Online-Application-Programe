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
    password: hashedPassword,
    firstName:"",
    lastName:"",
    department:"",
    course:"",
    admissionDate:"",
    nationalID:"",
    mobileNumber:"",
    birthDate:"",
    gender:"",
    nationality:"",
    religion:"",
    bloodGroup:"",
    presentAddress:"",
    parmanentAddress:"",
    fathersName:"",
    mothersName:"",
    fathersMobileNo:"",
    mothersMobileNo:"",
    localGurdianName:"",
    localGurdianMobileNo:"",
    localGurdianAddress:"",
    relationWithLocalGurdian:"",
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

//@desc   Update User
//@route  PUT /api/users/id
//@access Private

const updateUser = asyncHandler(async(req, res)=>{
  const user = await User.findById(req.params.id)

  if(!user){
    res.status(400)
    throw new Error('User not found')
  }

  res.status(200).json(user)
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
  getMe,
  updateUser
}