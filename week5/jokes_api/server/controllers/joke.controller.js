const Joke = require('../models/joke.model');

module.exports.findAll = (req, res) => {
    Joke.find()
        .then(
            (results) => {
                res.json({jokes: results});
            }
        )
        .catch( 
            (err) => {
                res.json({message: "There was an error", error: err});
        });
};

module.exports.findOne = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(
            (result) => {
                res.json({joke: result})
            }
        )
        .catch(
            (err) => {
                res.json({message: "There was an error", error: err});
            }
        );
};

module.exports.create = (req, res) => {
    Joke.create(req.body)
        .then(
            (result) => {
                res.json({joke: result});
            }
        )
        .catch(
            (err) => {
                res.json({message: "There was an error", error: err});
            }
        );
};

module.exports.updateById = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id},
        req.body,
        { new: true, runValidators: true}
        )
        .then(
            (result) => {
                res.json({joke: result})
            }
        )
        .catch(
            (err) => {
                res.json({message: "There was an error", error: err});
            }
        );
};

module.exports.deleteById = (req, res) => {
    Joke.deleteOne(
        { _id: req.params.id}
        )
        .then(
            (result) => {
                res.json({result: result})
            }
        )
        .catch(
            (err) => {
                res.json({message: "There was an error", error: err});
            }
        );
};