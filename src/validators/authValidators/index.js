const Joi = require("joi");
const { joiValidator } = require('../../tools')


const UserTypeEnum = require('../../db/enums/userType')

const validateRegister = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    userType: Joi.string().valid(UserTypeEnum[0], UserTypeEnum[1]),
    products: Joi.array().allow(),
  });

  return joiValidator({ schema, objectToValidate: req.body, next })
}

const validateLogin = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
  });

  return joiValidator({ schema, objectToValidate: req.body, next })
}

module.exports = { validateRegister, validateLogin }