const asyncHandler = require('express-async-handler')

const Application = require('../models/applicationModel')

//@desc   Get Applications
//@route  GET /api/applications
//@access Private

const getApplications = asyncHandler(async(req, res)=>{
  const applications = await Application.find()
  res.status(200).json(applications)
})

//@desc   Create Applications
//@route  POST /api/applications
//@access Private

const createApplications = asyncHandler(async(req, res)=>{
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
 }

 const application = await Application.create({
  text: req.body.text,
})

 res.status(200).json(application)
})

//@desc   Update Applications
//@route  PUT /api/applications
//@access Private

const updateApplications = asyncHandler(async(req, res)=>{
  const application = await Application.findById(req.params.id)

  if(!application){
    res.status(400)
    throw new Error('Application not found')
  }

  const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
  })

  res.status(200).json(updatedApplication)
})

//@desc   Delete Applications
//@route  DELETE /api/applications
//@access Private

const deleteApplications = asyncHandler(async(req, res)=>{
  const application = await Application.findById(req.params.id)

  if(!application){
    res.status(400)
    throw new Error('Application not found')
  }

 await application.remove()

  res.status(200).json({id:req.params.id})
})

module.exports = {
  getApplications,
  createApplications,
  updateApplications,
  deleteApplications
}