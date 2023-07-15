const { Model, DataTypes } = require('sequelize')

class UserType extends Model {
  static init(connection) {
    super.init(
      {
        typeName:{
          type:DataTypes.STRING(50),
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

module.exports = UserType;