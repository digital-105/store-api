const ProductService = require('../services/products.service');

const getProducts = (req, res) => {
  const result = ProductService.getProducts();
  
  return res.json(result);
};

const getProductById = (req, res) => {
  const { productId } = req.params;

  const product = ProductService.getProductById(+productId);

  return res.json(product);
};


const createProduct = (req, res) => {
  const product = req.body;

  ProductService.addProduct(product);

  return res.sendStatus(201);
};


const updateProduct = (req, res) => {
  const { productId } = req.params;
  const payload = req.body;

  const product = ProductService.getProductById(productId);

  if(!product) {
    return res.json({
      message: 'PRODUCT_WITH_GIVEN_ID_DOES_NOT_EXIST'
    })
  };

  ProductService.updateProduct(productId, payload);

  return res.json({
    message: 'UPDATED'
  })
};

const deleteProduct = (req, res) => {
  const { productId } = req.params;

  const product = ProductService.getProductById(productId);

  if(!product) {
    return res.json({
      message: 'PRODUCT_WITH_GIVEN_ID_DOES_NOT_EXIST'
    })
  };

  ProductService.deleteProduct(productId);

  return res.json({
    message: 'DELETED',
  })

};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}