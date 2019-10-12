'use strict';
module.exports = (sequelize, DataTypes) => {
  const Batch_model = sequelize.define('Batch_model', {
    batch_number: DataTypes.INTEGER,
    graduation_year: DataTypes.INTEGER,
    graduation_month: DataTypes.STRING
  }, {});
  Batch_model.associate = function(models) {
    // associations can be defined here
  };
  return Batch_model;
};