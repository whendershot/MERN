const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => console.log("Connected to the MongoDB server!")
).catch(
    (err) => console.log("There was an erro with connecting:\n " + err)
);