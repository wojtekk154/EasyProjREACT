const express = require('express');
const task = require('../controllers/task.controller');

const app = express();
const authCtrl = require('../controllers/auth.controller');
let router = express.Router();

router.use(authCtrl.checkToken);
router.get('/', task.query);
router.get('/:id', task.getTask);
router.post('/', task.createTask);
router.put('/:id', task.updateTask);
router.delete('/:id', task.removeTask);

module.exports = router;