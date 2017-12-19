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

app.use('/api/auth', require('./app/routes/auth.routes'));
// app.use('*', authController.checkToken);

app.use('/api/projects', require('./app/routes/project.routes'));
app.use('/api/sprints', require('./app/routes/sprint.routes'));
app.use('/api/tasks', require('./app/routes/task.routes'));
app.use('/api/users', require('./app/routes/user.routes'));


// seeds if db is empty
// app.get('/projects', (req, res) => {
//     res.sendfile('./public/index.html');
// });

app.listen(port);

