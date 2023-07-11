const router = require('express').Router();
const CardsController = require('../controller/cards.controller');

router.get('/:id', CardsController.getCardById);
router.get('/', CardsController.getCards);



router.delete('/:id', CardsController.deleteCard)

module.exports = router;