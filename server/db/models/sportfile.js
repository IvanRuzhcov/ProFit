const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SportFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sport, File }) {
      this.belongsTo(Sport, { foreignKey: 'sports_id' });
      this.belongsTo(File, { foreignKey: 'files_id' });
    }
  }
  SportFile.init(
    {
      sports_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Sports',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      files_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Files',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'SportFile',
    },
  );
  return SportFile;
};
