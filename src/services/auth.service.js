const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const UserService = require('./user.service');

const login = async (payload) => {
  const user = await UserService.findByEmail(payload.email);

  if (!user) {
    throw new Error('Not Found');
  };

  const match = await bcrypt.compare(payload.password, user.password);

  if (!match) {
    throw new Error('Incorrect Credentials')
  }

  const jwtToken = jwt.sign({
    userId: user.id,
  },
    process.env.JWT_SECRET,
    {
      expiresIn: `${process.env.JWT_VALIDITY_HOURS}h`
    }
  )

  return jwtToken;
};

module.exports = {
  login,
}