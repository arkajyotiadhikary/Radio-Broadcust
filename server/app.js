const express = require("express");
const config = require("./config");
const initializeSocket = require("./services/socket");
const http = require("http");
const port = config.PORT;

const app = express();
const server = http.createServer(app);

const { stream } = require("./controllers/stream");

app.use("/stream", stream);

// Initialize Socket
initializeSocket(server);

server.listen(port, () => {
    console.log(`~~~ Listining on port ${port}. ~~~`);
});
