'use strict';
module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define('Province', {
    prov_code: DataTypes.STRING,
    prov_name: DataTypes.STRING
  }, {});
  Province.associate = function(models) {
    // associations can be defined here
  };
  return Province;
};