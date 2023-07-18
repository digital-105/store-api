const router = require('express').Router();

const ProductRoutes = require('./products.routes');
const CardRoutes = require('./cards.routes');
const AuthRoutes = require('./auth.routes');

const CheckAuthMiddleware = require('../middlewares/checkAuth.middleware')

router.use('/auth', AuthRoutes);

router.use(CheckAuthMiddleware)

router.use('/products', ProductRoutes); 
router.use('/cards', CardRoutes);

module.exports = router;
