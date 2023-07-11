const CardsService = require('../services/cards.service');

const getCards = async (req, res) => {
  const { userId, id, alias } = req.query;

  const response = await CardsService.getCards({ 
    userId,
    id,
    alias,
  });

  return res.json(response);
};

const getCardById = async (req, res) => {
  const { id } = req.params;

  const response = await CardsService.getCardById(id);

  return res.json(response);
};

const deleteCard = async (req, res) => {
  const { id }  = req.params;

  const response = await CardsService.deleteCard(id);

  return res.json(response);
}

module.exports = {
  getCards,
  getCardById,
  deleteCard
}