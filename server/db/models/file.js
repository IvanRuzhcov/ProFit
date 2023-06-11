const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ SportFile, Comment, User }) {
      this.hasMany(SportFile, { foreignKey: 'files_id' });
      this.hasMany(Comment, { foreignKey: 'files_id' });
      this.belongsTo(User, { foreignKey: 'user_id_files' });
    }
  }
  File.init(
    {
      url: {
        type: DataTypes.TEXT,
      },
      user_id_files: {
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
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'File',
    },
  );
  return File;
};
