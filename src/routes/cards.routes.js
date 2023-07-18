const router = require('express').Router();
const CardsController = require('../controller/cards.controller');
const paramsIdValidator = require('../validators/paramsId.validator');

router.get('/:id', CardsController.getCardById);
router.get('/', CardsController.getCards);
router.delete('/:id',paramsIdValidator, CardsController.deleteCard)

module.exports = router;