const { Model, DataTypes } = require("sequelize");

class Card extends Model {
  static init(connection) {
    super.init({
      alias: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true
      },
    }, {
      tableName: 'cards',
      timestamps: true,
      sequelize: connection,
    })
  }
};

module.exports = Card;