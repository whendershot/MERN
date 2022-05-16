const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.findAll),
    app.get('/api/products/:id', ProductController.findOne),
    app.put('/api/products/:id', ProductController.updateById),
    app.post('/api/products', ProductController.create),
    app.delete('/api/products/:id', ProductController.deleteById)
};