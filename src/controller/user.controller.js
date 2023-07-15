const UserService = require('../services/user.service');

const getUsers = (req, res) => {
  const result = UserService.getUsers();
  
  return res.json(result);
};

const getUserById = (req, res) => {
  const { userId } = req.params;

  const user = UserService.getUserById(+userId);

  return res.json(user);
};


const createUser = (req, res) => {
  const user = req.body;

  UserService.addUser(user);

  return res.sendStatus(201);
};


const updateUser = (req, res) => {
  const { userId } = req.params;
  const payload = req.body;

  const user = UserService.getUserById(userId);

  if(!user) {
    return res.json({
      message: 'PRODUCT_WITH_GIVEN_ID_DOES_NOT_EXIST'
    })
  };

  UserService.updateUser(userId, payload);

  return res.json({
    message: 'UPDATED'
  })
};

const deleteUser = (req, res) => {
  const { userId } = req.params;

  const user = UserService.getUserById(userId);

  if(!user) {
    return res.json({
      message: 'PRODUCT_WITH_GIVEN_ID_DOES_NOT_EXIST'
    })
  };

 UserService.deleteUser(userId);

  return res.json({
    message: 'DELETED',
  })

};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}