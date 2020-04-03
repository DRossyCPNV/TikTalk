'use strict';
const {Sequelize} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('Users', {
    user_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: Sequelize.STRING(30), allowNull: false},
    password: {type: Sequelize.STRING(32), allowNull: false},
    createdAt: {type: Sequelize.DATE, allowNull: false},
    updatedAt: {type: Sequelize.DATE, allowNull: false}
  }, {});

  Model.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Messages, {foreignKey: {name: 'user_id', allowNull: false}});
    this.belongsToMany(models.Conversations, {through: models.Subscribes, foreignKey: 'user_id', otherKey: 'conversation_id'});
  };

  return Model;
};