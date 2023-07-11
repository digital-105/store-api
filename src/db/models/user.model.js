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
        email: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
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