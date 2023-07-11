const { Sequelize } = require('sequelize');
const { Card, User } = require('./models');

// NOTE: creates connection object
const connection = new Sequelize(
  'root',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

// NOTE: tests connection object validity
(async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// initializes models
User.init(connection);
Card.init(connection);

// creates relations for sequelize
User.hasMany(Card, {
  as: 'cards',
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});

Card.belongsTo(User, {
  as: 'user',
  foreignKey: {
    name: 'userId',
    allowNull: false
  }
});

// alter table users add column aprop int not null
(async () => {

  // checks whether db tables and models are equal or not
  const syncPromises = [
    User.sync({ force: false }).catch((e) => console.error('User', e)),
    Card.sync({ force: false }).catch((e) => console.error('Card', e)),
  ];

  await Promise.all(syncPromises);
})()

module.exports = connection;
