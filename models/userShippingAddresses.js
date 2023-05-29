module.exports = (sequelize, DataTypes) => {
    const UserShippingAddresses = sequelize.define('UserShippingAddresses', {
        userId: DataTypes.INTEGER,
        shippingAddressId: DataTypes.INTEGER,
    });

    UserShippingAddresses.associate = (models) => {
        UserShippingAddresses.belongsTo(models.ShippingAddresses, {
          foreignKey: 'shippingAddressId',
          as: 'shippingAddress',
        });
    };

    return UserShippingAddresses;
};