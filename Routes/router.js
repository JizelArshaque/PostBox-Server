const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const multerConfig = require('../Middleware/multerMiddleware')

// register
router.post('/register/user',userController.adduserController)

// login
router.post('/login/user',userController.userloginController)

// getdets
router.get('/get/details/:id',userController.getdetailsController)

// update user
router.put('/update/user',userController.updateuserController)

// ,multerConfig.single('image')

module.exports = router