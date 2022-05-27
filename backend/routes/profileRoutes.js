const express = require('express')
const router = express.Router()
const {
  setProfile
} = require('../controllers/profileController')
const {protect} = require('../middleware/authMiddleware')

router.post('/',protect, setProfile)

module.exports = router