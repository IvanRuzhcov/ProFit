const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ParameterChartBar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id_ChartBar' });
    }
  }
  ParameterChartBar.init(
    {
      time: {
        type: DataTypes.TEXT,
      },
      user_id_ChartBar: {
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
      modelName: 'ParameterChartBar',
    },
  );
  return ParameterChartBar;
};
