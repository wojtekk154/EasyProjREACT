const express = require('express');
var multer = require('multer');
const authController = require('../controllers/auth.controller');
const dropboxController = require('../controllers/dropbox.controller');
const app = express();
let router = express.Router();
var upload = multer({ dest: './tmp/'});
router.post('/sign_in', authController.loginAuth);
router.post('/sign_up', authController.register);
router.post('/upload', upload.single('image'), dropboxController.uploadToDropbox);
router.use(authController.checkToken);


// router.get('/auth/password_reset', authController.resetPassword);

module.exports = router;