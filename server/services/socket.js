const socketIO = require("socket.io");

const initializeSocket = (server) => {
    const io = socketIO(server);

    io.on("connection", (socket) => {
        console.log("~~~ New listner connected. ~~~");
        socket.on("disconnect", () => {
            console.log("~~~ A new user has disconnected. ~~~");
        });
    });
};

module.exports = initializeSocket;
