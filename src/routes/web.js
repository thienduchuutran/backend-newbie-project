const {getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHanldeRemoveUser} = require('../controllers/homeController')
const express = require('express')
const router = express.Router()

//defining routes
router.get('/', getHomepage)
  
router.get('/abc',getABC)
  
router.get('/hoidanit', getHoiDanIT)

router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)



//needs to match anything in the action attribute of the form tag
router.post('/create-user', postCreateUser )

router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)     //for accessing the correct deleting page of a particular user
router.post('/delete-user', postHanldeRemoveUser)         //for the form: after clicking the button "delete"

module.exports = router //export default