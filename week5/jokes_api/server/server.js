const express = require('express');
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const API_SERVER_PORT = 8080;

const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app);

app.listen(API_SERVER_PORT, () => console.log("API Server started on port: " + API_SERVER_PORT));
