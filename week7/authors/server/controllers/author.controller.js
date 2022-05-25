const Author = require("../models/author.model");

module.exports.findAll = (req, res) => {
    Author
        .find()
        .then(
            (result) => {
                res.json({authors: result});
            }
        )
        .catch(
            (err) => {
                res.status(400).json(err);
            }
        )
};

module.exports.findOne = (req, res) => {
    Author.findOne(
            {
                _id: req.params.id
            }
        )
        .then(
            (result) => {
                res.json(result);
            }
        )
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(
            (result) => {
                res.json(result);
            }
        )
        .catch(
            (err) => {
                res.status(400).json(err);
            }
        );
};

module.exports.updateById = (req, res) => {
    Author.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        .then(
            (result) => {
                res.json(result);
            }
        )
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports.deleteById = (req, res) => {
    Author.deleteOne(
            {
                _id: req.params.id,
            }
        )
        .then(
            (result) => {
                res.json({result: result});
            }
        )
        .catch((err) => {
            res.status(400).json(err);
        });
};