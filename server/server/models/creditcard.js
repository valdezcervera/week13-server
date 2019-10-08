'use strict';
module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define('CreditCard', {
    cardname: DataTypes.STRING,
    cardnbr: DataTypes.STRING,
    expired_date: DataTypes.STRING
  }, {});
  CreditCard.associate = function(models) {
    // associations can be defined here
    CreditCard.belongsTo(models.Person, {
      foreignKey: 'card_id',
      // Above association, examples are associate using the primary key which is default ID 
      // of the models or table. If you like to use a different field or column as association 
      // reference, you can use `TargetKey` like below.
      //   foreignKey: 'cardnbr',
      //   targetKey: 'cardnbr'
    });
  };
  return CreditCard;
};
