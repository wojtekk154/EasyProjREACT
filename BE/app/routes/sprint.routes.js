const express = require('express');
const sprint = require('../controllers/sprint.controller');

const app = express();
const authCtrl = require('../controllers/auth.controller');
let router = express.Router();

router.use(authCtrl.checkToken);
router.get('/', sprint.query);
router.get('/:id', sprint.getSprint);
router.post('/', sprint.createSprint);
router.put('/:id', sprint.updateSprint);
router.delete('/:id', sprint.removeSprint);

module.exports = router;