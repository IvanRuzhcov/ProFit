'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate({ User }) {
      this.hasOne(User, { foreignKey: 'idUserSender' });
      this.hasOne(User, { foreignKey: 'idUserReciever' });
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
    }
  );
  return Chat;
};
