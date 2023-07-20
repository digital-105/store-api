const { Sequelize } = require('sequelize');
const { UserType, User, Region } = require('./models');


const connection = new Sequelize(
'root',
'root',
'root',
{
  host: 'localhost',
  dialect: 'postgres',
  
}
);

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


User.belongsTo(Region,{
  as:'region',
  foreignKey:{
    name:'regionId',
    allowNull:false,
  },
});

User.belongsTo(UserType, {
  as:'userType',
  foreignKey: {
    name:'userTypeId',
    allowNull: false
  },
});

Region.hasMany(User, {
  as: 'users',
  foreignKey:{
  name:'regionId',
  allowNull:false,
  },
});

UserType.hasMany(User, {
  as: 'users',
  foreignKey:{
  name:'regionId',
  allowNull:false,
  },
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