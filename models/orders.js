'use strict';
const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    shippingAddressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ShippingAddresses',
        key: 'id',
      },
    },
    cardNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    cardHolder: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cardExpiry: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    cardCVV: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });

  Orders.associate = (models) => {
    Orders.belongsTo(models.Users, { foreignKey: 'userId' });
    Orders.belongsTo(models.ShippingAddresses, { 
      foreignKey: 'shippingAddressId',
      as: 'shippingAddress',
    });
    // Orders.hasMany(models.OrderItem, { foreignKey: 'orderId' });
};

  return Orders;
};
