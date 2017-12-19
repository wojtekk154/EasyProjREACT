const express = require('express');
const authController = require('../controllers/auth.controller');

const app = express();

let router = express.Router();

router.post('/sign_in', authController.loginAuth);
router.post('/sign_up', authController.register);

router.use(authController.checkToken);



// router.get('/auth/password_reset', authController.resetPassword);

module.exports = router;