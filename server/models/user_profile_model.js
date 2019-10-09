'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_profile_model = sequelize.define('User_profile_model', {
    last_name: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    picture_url: DataTypes.STRING,
    picture_big_url: DataTypes.STRING,
    picture_small_url: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User_profile_model.associate = function(models) {
    // associations can be defined here
  };
  return User_profile_model;
};