const express = require('express')
const router = express.Router()
const {
  getApplications,
  createApplications,
  updateApplications,
  deleteApplications 
  } = require('../controllers/applicationController')

router.route('/').get(getApplications).post(createApplications)
router.route('/:id').put(updateApplications).delete(deleteApplications)

module.exports = router