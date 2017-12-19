const express = require('express');
const users = require('../controllers/user.controller');

const app = express();
const authCtrl = require('../controllers/auth.controller');
let router = express.Router();

router.use(authCtrl.checkToken);
router.get('/', users.getUserCollections);
router.get('/search', users.searchUser);

module.exports = router;