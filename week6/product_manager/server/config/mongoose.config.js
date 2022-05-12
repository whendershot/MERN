const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => console.log("Connected to the MongoDB server!")
).catch(
    (err) => console.log("There was an error with connecting:\n " + err)
);