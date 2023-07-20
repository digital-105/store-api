const router = require('express').Router();

const ProductRoutes = require('./products.routes');

const UserRoutes = require(`./user.routes`);

const UsersRoutes = require('./user.models.routes');

router.use('/users', UsersRoutes);

router.use('/products', ProductRoutes);

// router.use(`/user`, UserRoutes);

module.exports = router;