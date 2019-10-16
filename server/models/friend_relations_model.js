'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend_relations_model = sequelize.define('Friend_relations_model', {
    user_id_1: DataTypes.INTEGER,
    user_id_2: DataTypes.INTEGER,
    action_user: DataTypes.INTEGER,
    status: DataTypes.ENUM('pending', 'accepted', 'rejected', 'blocked')
  }, {});
  Friend_relations_model.associate = function (models) {
    // associations can be defined here
  };
  return Friend_relations_model;
};