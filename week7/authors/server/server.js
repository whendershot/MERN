require("./config/mongoose.config");

const API_SERVER_PORT = 8080;

const express = require("express");
const cors = require("cors");
const APIAuthorRoutes = require("./routes/author.routes");
const app = express();

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended: true})
);

APIAuthorRoutes(app);

app.listen(
    API_SERVER_PORT,
    () => {
        console.log("API server started on port: " + API_SERVER_PORT);
    }
);