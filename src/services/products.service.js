const UserModel = require('../db/models/user.model');
const { NotFoundException } = require('../tools');

const getProducts = () => UserModel.find();

const getProductById = (id) => UserModel.findById(id);

const addProduct = (authUserId, payload) => UserModel.create({ ...payload, ownerId: authUserId });

const updateProduct = async (_id, payload) => {
  const product = await UserModel.findOneAndUpdate({
    _id,
    deletedAt: null
  }, payload);

  if (!product) {
    throw new NotFoundException('product with given id does not exist')
  }

  return true;
};

const deleteProduct = async (id) => {
  const product = await UserModel.findOneAndUpdate({
    _id,
    deletedAt: null
  }, {
    deletedAt: new Date()
  });

  if (!product) {
    throw new NotFoundException('product with given id does not exist')
  }

  return true;
}

const getUserProducts = async (userId) => UserModel.find({
  ownerId: userId,
  deletedAt: null
}).populate('ownerId');

module.exports = {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getUserProducts
}

