'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_model = sequelize.define('User_model', {
    first_name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User_model.associate = function(models) {
    // associations can be defined here
  };
  return User_model;
};