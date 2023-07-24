const ProductService = require('../services/products.service');

const getProducts = async (req, res) => {
  const result = await ProductService.getProducts();
  
  return res.json(result);
};

const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await ProductService.getProductById(+productId);

  return res.json(product);
};

const getUserProducts = async (req, res) => {
  const authUserId = req.authUserId;

  const products = await ProductService.getUserProducts(authUserId);

  return res.json(products)
}


const createProduct =  async (req, res) => {
  const product = req.body;
  const authUserId = req.authUserId;

  await ProductService.addProduct(authUserId, product);

  return res.sendStatus(201);
};


const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const payload = req.body;

  await ProductService.updateProduct(productId, payload);

  return res.json({
    message: 'UPDATED'
  })
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  await ProductService.deleteProduct(productId);

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
  getUserProducts,
}