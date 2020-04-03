'use strict';
const {Sequelize} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('Conversations', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    private: {type: Sequelize.BOOLEAN, allowNull: false},
    type: {type: Sequelize.BOOLEAN, allowNull: false},
    title: {type: Sequelize.STRING(100), allowNull: false},
    createdAt: {type: Sequelize.DATE, allowNull: false},
    updatedAt: {type: Sequelize.DATE, allowNull: false}
  }, {});

  Model.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Messages, {foreignKey: {name: 'conversation_id', allowNull: false}});
    this.belongsToMany(models.Users, {through: models.Subscribes, foreignKey: 'conversation_id', otherKey: 'user_id'});
  };

  return Model;
};