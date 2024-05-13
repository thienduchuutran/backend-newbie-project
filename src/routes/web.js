const {getHomepage, getABC, getHoiDanIT} = require('../controllers/homeController')
const express = require('express')
const router = express.Router()

//defining routes
router.get('/', getHomepage)
  
router.get('/abc',getABC)
  
router.get('/hoidanit', getHoiDanIT)

module.exports = router //export default