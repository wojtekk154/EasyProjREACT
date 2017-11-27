const express = require('express');
const project = require('../controllers/projects.controller');

const app = express();
const authCtrl = require('../controllers/auth.controller');
let router = express.Router();

router.use(authCtrl.checkToken);
router.get('/', project.queryProjects);
router.get('/:id', project.getProject);
router.post('/', project.createProject);
router.put('/:id', project.updateProject);
router.delete('/:id', project.removeProject);

module.exports = router;