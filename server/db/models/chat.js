const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'idUserSender' });
      this.belongsTo(User, { foreignKey: 'idUserReciever' });
    }
  }
  Chat.init(
    {
      idUserSender: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      idUserReciever: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      messageText: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Chat',
    },
  );
  return Chat;
};
