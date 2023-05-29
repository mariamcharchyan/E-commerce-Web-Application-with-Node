'use strict';
// const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const OrderItems = sequelize.define('OrderItems', {
        // OrderItem model definition
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        orderId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
        },
      });

      OrderItems.associate = (models) => {
        OrderItems.belongsTo(models.Orders, { foreignKey: 'orderId' });
        OrderItems.belongsTo(models.Products, { 
          foreignKey: 'productId',
          as: 'orderItemData',
        });
    };

  return OrderItems;
};





  