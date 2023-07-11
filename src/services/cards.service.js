const { Op } = require("sequelize");
const { User, Card } = require("../db/models")

const getCards = async ({ alias, id, userId }) => {
  const filter = {
    ...(alias && {
      alias: {
        [Op.like]: `%${alias}%`
      }
    }),
    ...(id && {
      id,
    }),
    ...(userId && {
      userId,
    })
  };


  const data = await Card.findAll({
    where: {
      ...filter
    },
    include: {
      model: User,
      as: 'user',
      required: false,
    }
  })

  return data;
};

const getCardById = async (id) => Card.findByPk(id);

const deleteCard = async (id) => {
  const card = await Card.findByPk(id);

  if (!card) {
    return {
      message: 'NOT_FOUND'
    }
  };

  await Card.destroy(id);
};

// NOTE: create -> Card.create({ ...})


// v1: NOTE: update -> Card.update({ })
// v2: NOTE: 
// {
//   const card = await Card.findByPk(10);
//   card.alias = '12312312';
//   await card.save();
// }


module.exports = {
  getCards,
  getCardById, deleteCard
}
