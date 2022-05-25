const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb://localhost/favorite_authors",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(
        () => {
            console.log("Connected to the MongoDb server.");
        }
    )
    .catch(
        (err) => {
            console.log("There was an error connecting to the server.");
            console.log(err);
            console.trace(err);
        }
    )