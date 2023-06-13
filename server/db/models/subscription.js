const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate() {
    }
  }
  Subscription.init(
    {
      ssportsmen_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      coach_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Subscription',
    },
  );
  return Subscription;
};
