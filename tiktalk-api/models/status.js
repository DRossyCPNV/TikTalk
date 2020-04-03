'use strict';
const {Sequelize} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('Status', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: Sequelize.STRING(30), allowNull: false},
    createdAt: {type: Sequelize.DATE, allowNull: false},
    updatedAt: {type: Sequelize.DATE, allowNull: false}
  }, {});

  Model.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Messages, {foreignKey: {name: 'status_id', allowNull: false}});
  };

  return Model;
};