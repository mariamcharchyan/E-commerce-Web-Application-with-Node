'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },      
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Users', 
          key:'id', 
        }
      },  
      shippingAddressId: {
        type: Sequelize.INTEGER,
        references:{
          model:'ShippingAddresses', 
          key:'id', 
        }
      },     
      cardNumber: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      cardHolder: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cardExpiry: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      cardCVV: {
        type: Sequelize.STRING(4),
        allowNull: false
      },
      totalAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('Orders');
  },
};