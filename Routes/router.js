const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const multerConfig = require('../Middleware/multerMiddleware')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const mailController = require('../Controller/mailController')
const impController= require('../Controller/impController')
const trashController = require('../Controller/trashController')

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
router.get('/sentmail/:id',jwtMiddleware,mailController.getsentmail)
 
// get al mail
router.get('/all/mail/:id',mailController.getallmail)

// get siinglemail
router.get('/get/mail/:id',jwtMiddleware,mailController.getSingleMail)

// add to importants
router.post('/add/important',jwtMiddleware,impController.addToImportantController)

// get impmails
router.get('/get/imp',jwtMiddleware,impController.getImportantMail)

// deleteMail
router.delete('/delete/mail/:id',mailController.deleteMailController)

// add to trash
router.post('/add/trash',jwtMiddleware,trashController.addToTrash)

// getsingleimp mail
router.get('/getimp/single/:id',impController.getsingleImpMail)

// remove imp
router.delete('/delete/imp/:id',impController.removeImp)

// get impmails
router.get('/get/trash',jwtMiddleware,trashController.getTrash )

// remove imp
router.delete('/delete/trash/:id',trashController.removeTrash)

// nboxMail
router.get('/inboxMail/:id',jwtMiddleware,mailController.getInboxController)


// update mail read stats

router.put('/update/stats',mailController.updatestatsController)


module.exports = router
