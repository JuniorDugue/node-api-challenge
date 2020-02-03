const express = require('express');
const server = express();
//for my routes
const actionRouter = require('./data/routes/actionRouter');
const projectRouter = require('./data/routes/projectRouter');

server.use(express.json());
server.use(logger);
//for my routes 
server.use('/actions', actionRouter); //for postman, it'll allow you to use as a shortcut
server.use('/projects', projectRouter); //for postman, it'll allow you to use as a shortcut

server.get('/', (req, res, next) => {
  res.send(`<h2>NODE API SPRINT CHALLENGE!</h2>`);
});

//custom middleware
function logger(req, res, next) {
  req.time = Date.now();
  console.log(`${req.method} to ${req.originalUrl} made at ${req.requestTime}`);
  next();
}

module.exports = server;