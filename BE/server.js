const express = require('express');
const mongose = require('mongoose');
const config = require('./config');
const authController = require('./app/controllers/auth.controller');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
let port = process.env.PORT || 1337;

mongose.connect(config.database, { useMongoClient: true });
app.set('superSecret', config.secret); // secret variable
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev')); //logs in console

app.use('/auth', require('./app/routes/auth.routes'));
// app.use('*', authController.checkToken);

app.use('/projects', require('./app/routes/project.routes'));
app.use('/sprints', require('./app/routes/sprint.routes'));
app.use('/tasks', require('./app/routes/task.routes'));

// seeds if db is empty

app.listen(port);

