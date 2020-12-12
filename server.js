const express = require('express');

const actionsRouter = require('./data/actions/actionsRouter');
const projectsRouter = require('./data/projects/projectsRouter');

const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
    res.status(200).json({message: "The serveris online"})
})

server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

module.exports = server;