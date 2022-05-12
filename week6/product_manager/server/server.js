const express = require('express');
const app = express();
const API_SERVER_PORT = 8080;

app.use(express.json()), express.urlencoded({extended: true});

app.listen(API_SERVER_PORT, () => console.log('API server started on port: ' + API_SERVER_PORT));