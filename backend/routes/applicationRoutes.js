const express = require('express')
const router = express.Router()
const {
  getApplications,
  createApplications,
  updateApplications,
  deleteApplications 
  } = require('../controllers/applicationController')

const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect,getApplications).post(protect,createApplications)
router.route('/:id').put(protect,updateApplications).delete(protect,deleteApplications)

module.exports = router