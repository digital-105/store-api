const { default: mongoose, Schema } = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default: 1,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  updatedAt: Date,
  deletedAt: Date,
});


module.exports = ProductSchema;