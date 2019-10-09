'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    // Belongs in Profile as profile_id
    // hasMany Roles as role_id
    User.belongsTo(models.Profile, {
      foreignKey: 'profile_id',
    });
    User.hasMany(models.Role, {
      foreignKey: 'role_id',
    });
  };
  return User;
};