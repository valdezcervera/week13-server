'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_profile_models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      last_name: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.STRING
      },
      picture_url: {
        type: Sequelize.STRING
      },
      picture_big_url: {
        type: Sequelize.STRING
      },
      picture_small_url: {
        type: Sequelize.STRING
      },
      is_admin: {
        type: Sequelize.BOOLEAN
      },
      github: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_profile_models');
  }
};