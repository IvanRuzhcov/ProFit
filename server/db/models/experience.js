const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id_exp' });
    }
  }
  Experience.init(
    {
      user_id_exp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      description: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Experience',
    },
  );
  return Experience;
};
