const UserService = require('../services/user.model.service')

const getUser = async (req, res) => {
  const { userId } = req.params;

  const response = await UserService.getUser(userId)  
  return res.json(response);
}

module.exports = {
  getUser,
}


