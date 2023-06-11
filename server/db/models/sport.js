const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ SportUser, SportFile }) {
      this.hasMany(SportUser, { foreignKey: 'sport_id' });
      this.hasMany(SportFile, { foreignKey: 'sports_id' });
    }
  }
  Sport.init(
    {
      sport: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Sport',
    },
  );
  return Sport;
};
