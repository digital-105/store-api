const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/', UserController.getUsers);
router.get('/:productId', UserController.getUserById);
router.post('/', UserController.createUser);
router.patch('/:productId', UserController.updateUser);
router.delete('/:productId', UserController.deleteUser);

module.exports = router;