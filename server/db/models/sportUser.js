const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SportUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Sport }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Sport, { foreignKey: 'sport_id' });
    }
  }
  SportUser.init(
    {
      sport_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Sports',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'SportUser',
    },
  );
  return SportUser;
};
