const asyncHandler = require('express-async-handler')

const Profile = require('../models/profileModel')
const User = require('../models/userModel')

// @desc    Set Profile
// @route   POST /api/profile
// @access  Private
const setProfile = asyncHandler(async (req, res) => {
 const{firstName, lastName} = req.body

  if (!firstName || !lastName) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const profile = await Profile.create({
    firstName,
    lastName,
    user: req.user.id,
  })

  res.status(200).json(profile)
})


module.exports = {
  setProfile,
}