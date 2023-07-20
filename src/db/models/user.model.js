const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(connection) {
    super.init(
      {
        firstName: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        balance: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize: connection,
        timestamps: true,
        tableName: 'users'
      }
    )
  }
};

module.exports = User;