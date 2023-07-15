const router = require('express').Router();

const ProductRoutes = require('./products.routes');

const UserRoutes = require(`./user.routes`);

router.use('/products', ProductRoutes);

router.use(`/user`, UserRoutes);

module.exports = router;