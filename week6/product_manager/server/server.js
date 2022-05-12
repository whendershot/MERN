const express = require('express');
require('./config/mongoose.config');
const APIProductRoutes = require('./routes/product.routes');
const cors = require('cors');

const API_SERVER_PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json()), express.urlencoded({extended: true});

APIProductRoutes(app);

app.listen(API_SERVER_PORT, () => console.log('API server started on port: ' + API_SERVER_PORT));