const express = require('express');
const server = express();

server.use(express.json());

server.use(logger);

//for my routes
const actionRouter = require('./data/routes/actionRouter');
const projectRouter = require('./data/routes/projectRouter');

server.use('/actions', actionRouter);
server.use('/projects', projectRouter);


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