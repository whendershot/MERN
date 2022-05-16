const Product = require('../models/product.model');

module.exports.findAll = (req, res) => {
    Product.find()
        .then(
            (result) => {
                res.json({products: result});
            }
        )
        .catch((err) => {
            res.json({message: err.message, error: err});
        });
};

module.exports.findOne = (req, res) => {
    Product.findOne(
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
            res.json({message: err.message, error:err});
        });
};

module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(
            (result) => {
                res.json(result);
            }
        )
        .catch(
            (err) => {
                res.json({message: err.message, error: err});
            }
        );
};

module.exports.updateById = (req, res) => {
    Product.findOneAndUpdate(
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
            res.json({message: err.message, error:err});
        });
};

module.exports.deleteById = (req, res) => {
    Product.deleteOne(
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
            res.json({message: err.message, error:err});
        });
};