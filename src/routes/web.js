
const express = require('express')
const router = express.Router()

//defining routes
router.get('/', (req, res) => {
    res.send('Hello World')
  })
  
router.get('/abc', (req, res) => {
    res.send('checking')
  })
  
router.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
  })

  module.exports = router //export default