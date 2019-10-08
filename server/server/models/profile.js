'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    user_id: DataTypes.INTEGER,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    batch_id: DataTypes.INTEGER
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsToMany(models.User, {
      through: 'UserProfile',
      as: 'users',
      foreignKey: 'profile_id'
    });
  };
  return Profile;
};