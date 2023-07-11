const router = require('express').Router();

const ProductRoutes = require('./products.routes');
const CardRoutes = require('../routes/cards.routes');

router.use('/products', ProductRoutes);
router.use('/cards', CardRoutes);

module.exports = router;
