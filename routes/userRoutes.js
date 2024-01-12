const express = require('express')
const { loginController,
     registerController, 
     authController,  
     applyDoctorController, 
     getAllNotificationController,
     deleteAllNotificationController,
     getAllDoctorsController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

//router object
const router = express.Router();

// login || POST
router.post('/login', loginController);

// register || POST
router.post('/register', registerController);
//auth || post
router.post('/getUserData', authMiddleware, authController);


//Apply  Doctor|| post
router.post('/apply-doctor', authMiddleware, applyDoctorController);

//notification|| post
router.post('/get-all-notification', authMiddleware, getAllNotificationController);

//delete notification|| post
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController);

//get all doc
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)
module.exports = router;