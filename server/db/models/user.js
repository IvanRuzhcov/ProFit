const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      ParameterChartBar,
      Parametr,
      Certificate,
      Experience,
      SportUser,
      Comment,
      File,
    }) {
      this.hasMany(ParameterChartBar, { foreignKey: 'user_id_ChartBar' });
      this.hasMany(Parametr, { foreignKey: 'user_id_param' });
      this.hasMany(Certificate, { foreignKey: 'user_id_cert' });
      this.hasMany(Experience, { foreignKey: 'user_id_exp' });
      this.hasMany(SportUser, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(File, { foreignKey: 'user_id_files' });
    }
  }
  User.init(
    {
      profilePicture: {
        type: DataTypes.TEXT,
      },
      name: {
        type: DataTypes.TEXT,
      },
      login: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: false,
      },
      online: {
        type: DataTypes.BOOLEAN,
      },
      description: {
        type: DataTypes.TEXT,
      },
      city: {
        type: DataTypes.TEXT,
      },
      vertification: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
