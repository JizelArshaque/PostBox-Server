const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const multerConfig = require('../Middleware/multerMiddleware')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const mailController = require('../Controller/mailController')

// register
router.post('/register/user',userController.adduserController)
// login
router.post('/login/user',userController.userloginController)
// getdets
router.get('/get/details/:id',userController.getdetailsController)
// update user w image
router.put('/update/user',multerConfig.single('image'),userController.updateuserController)
// update user only dets
router.put('/update/user2',userController.updateuserController2)


// send mailw image
router.post('/send/mail1',jwtMiddleware,multerConfig.single('image'),mailController.sendmailController2)

// send mailw image
router.post('/send/mail2',jwtMiddleware,mailController.sendmailController1)

// getsentmail
router.get('/sentmail/:id',mailController.getsentmail)

module.exports = router