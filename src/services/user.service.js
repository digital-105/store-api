const users = require('../db/users');

const getLatestId = () => users[users.length - 1].id + 1;

const getUsers = () => users.filter((u) => !u.isDeleted);

const getUserById = (id) => users.find((u) => +u.id === +id && !u.isDeleted)

const addUser = (payload) => users.push({ id: getLatestId(), ...payload, isDeleted: false });

const updateUser = (id, payload) => {
  const UserIndex = users.findIndex((u) => u.id === id);

  users[UserIndex] = {
    ...users[UserIndex],
    ...payload,
  };
};

const deleteUser = (id) => {
  const UserIndex = store.findIndex((p) => p.id === id);

  users[UserIndex] = {
    ...[users.UserIndex],
    isDeleted: true,
  }
}

module.exports = {
  getUserById,
  getUsers,
  addUser,
  updateUser,
  deleteUser
}