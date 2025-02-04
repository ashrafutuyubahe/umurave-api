const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');




router.post('/register', authController.registerAdmin);

router.post('/login', authController.loginAdmin);
router.post("/logout",authController.logOutAdmin);
router.get("/getGreetings",authController.getGreetings);

module.exports = router;    