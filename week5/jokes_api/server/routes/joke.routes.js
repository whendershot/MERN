const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAll);
    app.get("/api/jokes/:id", JokeController.findOne);
    app.put("/api/jokes/:id", JokeController.updateById);
    app.post("/api/jokes", JokeController.create);
    app.delete("/api/jokes/:id", JokeController.deleteById);
};