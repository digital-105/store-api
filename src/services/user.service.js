const bcrypt = require('bcrypt')
const { ConflictException } = require('../tools');

const UserModel = require('../db/models/user.model')

const findById = (id) => UserModel.findById(id);

const findByEmail = (email) => UserModel.findOne({ email });

const createUser = async (userPayload) => {
  const user = await UserModel.findOne({  email: userPayload.email  });

  if (user) throw new ConflictException('User Already exist')

  const hashedPassword = bcrypt.hashSync(userPayload.password, Number(process.env.AUTH_SALT_AMOUNT));

  userPayload.password = hashedPassword;

  return UserModel.create(userPayload);
};

module.exports = {
  findById,
  findByEmail,
  createUser,
}