const {getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage} = require('../controllers/homeController')
const express = require('express')
const router = express.Router()

//defining routes
router.get('/', getHomepage)
  
router.get('/abc',getABC)
  
router.get('/hoidanit', getHoiDanIT)

router.get('/create', getCreatePage)


//needs to match anything in the action attribute of the form tag
router.post('/create-user', postCreateUser )


module.exports = router //export default