const express = require('express');
const router = express.Router();
const ProductController = require('../controller/products.controller');

router.get('/', ProductController.getProducts);
router.get('/:productId', ProductController.getProductById);
router.post('/', ProductController.createProduct);
router.patch('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;
