const {getHomepage, getABC, getHoiDanIT, postCreateUser, } = require('../controllers/homeController')
const express = require('express')
const router = express.Router()

//defining routes
router.get('/', getHomepage)
  
router.get('/abc',getABC)
  
router.get('/hoidanit', getHoiDanIT)

//needs to match anything in the action attribute of the form tag
router.post('/create-user', postCreateUser )


module.exports = router //export default