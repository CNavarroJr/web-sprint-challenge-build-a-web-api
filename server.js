const express = require('express');

// Next line import the action and project folders.
const actionsRouter = require('./data/actions/actionsRouter');
const projectsRouter = require('./data/projects/projectsRouter');

const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ message: "The server is online!" })
})

// Next line reference the project and action folders
server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

module.exports = server;
