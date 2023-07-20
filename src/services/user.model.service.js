const { op } = require("sequelize");
const { User, Region } = require("../db/models")

const getUser = async (userId) => {
  const data = await User.findOne({
    where: {
      id: userId,
    },
    include: {
      model: Region,
      as:'region',
      required: false,
    }
  });

  return data;
}

module.exports = {
  getUser,
}