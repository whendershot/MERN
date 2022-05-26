const express = require("express");
const cors = require("cors");
const socket = require("socket.io");

const API_PORT = 8080;

const app = express();
app.use(cors());

const server = app.listen(
    API_PORT,
    () => {
        console.log("API Server start on port " + API_PORT);
    }
);

const io = socket(
    server,
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            allowHeaders: ["*"],
            credentials: true
        }
    }
);

io.on(
    "connection",
    (socket) => {
        console.log(`Someone has opened a socket: ${socket.id}`);

        socket.emit(
            "Welcome",
            (data) => {
                return {myMessage: `Welcome to the bone zone ${socket.id}!`, data: data};
            }
        );

        socket.broadcast.emit(
            "Welcome",
            (data) => {
                return {myMesage: `Please welcome ${socket.id} to the zone!`, data: data}
            }
        );

        socket.on(
            "Welcome",
            (data) => {
                socket.broadcast.emit("Welcome", data);
            }
        );

    }
);