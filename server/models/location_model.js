'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location_model = sequelize.define('Location_model', {
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  Location_model.associate = function (models) {
    // associations can be defined here
    Location_model.hasMany(models.User_model);
  };
  return Location_model;
};