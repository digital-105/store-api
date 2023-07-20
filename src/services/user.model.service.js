const { op } = require("sequelize");
const { User } = require("../db/models")

const getUser = async (userId) => {
  const data = await User.findone({
    where: {
      id: userId,
    },
    include: {
      model: User,
      as:'users',
      required: false,
    }
  });

  return data;
}

module.exports = {
  getUser,
}