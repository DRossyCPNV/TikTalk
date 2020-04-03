'use strict';
const {Sequelize} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('Subscribes', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    administrator: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    createdAt: {type: Sequelize.DATE, allowNull: false},
    updatedAt: {type: Sequelize.DATE, allowNull: false}
  }, {});

  Model.associate = function(models) {
    // associations can be defined here
  };

  return Model;
};