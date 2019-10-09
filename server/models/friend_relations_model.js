'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend_relations_model = sequelize.define('Friend_relations_model', {
    action_user: DataTypes.INTEGER,
    status:DataTypes.ENUM('pending', 'accepted') 
  }, {});
  Friend_relations_model.associate = function(models) {
    // associations can be defined here
  };
  return Friend_relations_model;
};