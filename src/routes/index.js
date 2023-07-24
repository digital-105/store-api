const router = require('express').Router();

const ProductRoutes = require('./products.routes');
const AuthRoutes = require('./auth.routes');

const CheckAuthMiddleware = require('../middlewares/checkAuth.middleware')

router.use('/auth', AuthRoutes);

router.use(CheckAuthMiddleware)

router.use('/products', ProductRoutes); 

module.exports = router;
