const router = require ('express').Router();

const UserController = require('../controller/user.models.controller')

router.get('/:userId', UserController.getUser);

module.exports = router;