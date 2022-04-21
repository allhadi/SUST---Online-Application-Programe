const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel')
const { use } = require('../routes/studentRoutes')

//@desc   Register Student
//@route  POST /api/students
//@access Public
const registerStudent = asyncHandler(async(req, res) => {
const{registrationNo} = req.body
  if(!registrationNo){
    res.status(400)
    throw new Error('Please add a registration Number')
  }

  const getPass = registrationNo
  //Check if Student Exists
  const studentExists = await Student.findOne({registrationNo})

  if(studentExists){
    res.status(400)
    throw new Error('Student already exists')
  }

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(getPass, salt)

  //Create Student
  const student = await Student.create({
    registrationNo,
    password: hashedPassword
  })

if(student){
    res.status(201).json({
      _id : student.id,
      registrationNo: student.registrationNo,
      token: generateToken(student._id)
    })
    
    console.log(token)
  }else{
    res.status(400)
      throw new Error('Invalid student data')
  }
  
})


//@desc   Authenticate a Student
//@route  POST /api/students/login
//@access Public
const loginStudent = asyncHandler(async (req, res) => {
const {registrationNo,password} = req.body
//check for student email
const student = await Student.findOne({registrationNo})

  if(student && (await bcrypt.compare(password, student.password))){
    res.json({
      _id : student.id,
      token: generateToken(student._id),
      message:"you are logged in"
    })
  }else{
    res.status(400)
    throw new Error('Invalid credentials')
  }
})


//@desc  Get Student
//@route  GET /api/students/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.student)
})


//Generate JWT
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET,{
     expiresIn : '30d',
  })
}

module.exports = {
  registerStudent,
  loginStudent,
  getMe
}