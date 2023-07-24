const { default: mongoose } = require("mongoose");
const UserTypeEnum = require('../enums/userType');
const ProductSchema = require("../schemas/product.schema");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: UserTypeEnum,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  updatedAt: Date,
  deletedAt: Date,
  products: {
    type: [ProductSchema],
  }
});

module.exports = mongoose.model('users', UserSchema)