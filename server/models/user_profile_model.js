'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_profile_model = sequelize.define('User_profile_model', {
    birthdate: DataTypes.STRING,
    gender: DataTypes.STRING,
    picture_url: DataTypes.STRING,
    picture_big_url: DataTypes.STRING,
    picture_small_url: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User_profile_model.associate = function (models) {
    // associations can be defined here
    User_profile_model.belongsTo(models.User_model, { foreignKey: "user_id" });
  };
  return User_profile_model;
};