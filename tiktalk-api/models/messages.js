'use strict';
const {Sequelize} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('Messages', {
    message_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: Sequelize.STRING(2000), allowNull: false},
    visible: {type: Sequelize.BOOLEAN, allowNull: false},
    sentDate: {type: Sequelize.DATE, allowNull: false},
    createdAt: {type: Sequelize.DATE, allowNull: false},
    updatedAt: {type: Sequelize.DATE, allowNull: false}
  }, {});

  Model.associate = function(models) {
    // associations can be defined here
    this.user_id = this.belongsTo(models.Users, {foreignKey: {name: 'user_id', allowNull: false}});
    this.status_id = this.belongsTo(models.Status, {foreignKey: {name: 'status_id', allowNull: false}});
    this.conversations_id = this.belongsTo(models.Conversations, {foreignKey: {name: 'conversation_id', allowNull: false}});
  };

  return Model;
};