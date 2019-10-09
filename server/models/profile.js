'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
  }, {});
  Profile.associate = function (models) {
    // associations can be defined here
    // hasMany Users as owner_id
    Profile.hasMany(models.User, {
      foreignKey: 'owner_id',
      targetKey: 'id'
    });
  };
  return Profile;
};
