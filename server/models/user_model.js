'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_model = sequelize.define('User_model', {
    user_name: {
      type: DataTypes.STRING,
      unique: false
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {});
  User_model.associate = function (models) {
    // associations can be defined here
    User_model.belongsTo(models.Location_model, { foreignKey: "user_location_id" });
    User_model.belongsTo(models.Batch_model, { foreignKey: "user_batch_id" });
  };
  return User_model;
};