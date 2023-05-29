'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
      },
      firstName: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      lastName: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM('male', 'female'),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      status: {
        type: Sequelize.ENUM('admin', 'user'),
        defaultValue: 'user'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: 'https://t3.ftcdn.net/jpg/05/87/76/66/240_F_587766653_PkBNyGx7mQh9l1XXPtCAq1lBgOsLl6xH.jpg'
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      });
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
  },
  };
