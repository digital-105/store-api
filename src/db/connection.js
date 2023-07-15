const { Sequelize } = require('sequelize');
const { UserType } = require('./models');


const connection = new Sequelize(
'root',
'root',
'root',
{
  host: 'localhost',
  diealect: 'postgres',
  
}
)

(async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

User.init(connection);
Region.init(connection);
UserType.init(connection);


Region.belongsTo(User,{
  as:'user',
  foreignKey:{
    name:'regionId',
    allowNull:false,
  },
});

UserType.belongsTo(User, {
  as:'user',
  foreignKey: {
    name:'userTypeId',
    allowNull: false
  }
});

(async () => {

   const syncPromises = [
    User.sync({ force: false }).catch((e) => console.error('User', e)),
    Region.sync({ force: false }).catch((e) => console.error('Region', e)),
    UserType.sync({ force: false }).catch((e) => console.error('UserType', e)),
  ];

  await Promise.all(syncPromises);
})()

module.exports = connection;