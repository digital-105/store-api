const { Model, DataTypes } = require('sequelize');

class Region extends Model {
  static init(connection) {
    super.init(
      {
        regionName:{
          type: DataTypes.STRING(50),
          allowNull: false,
        }
      },
      {
        sequelize: connection,
        timestamps: true,
        tableName: 'users'
      }
    )
  }
};
module.exports = Region;