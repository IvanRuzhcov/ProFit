const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Parametr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id_param' });
    }
  }
  Parametr.init(
    {
      weight: {
        type: DataTypes.TEXT,
      },
      user_id_param: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      time: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Parametr',
    },
  );
  return Parametr;
};
