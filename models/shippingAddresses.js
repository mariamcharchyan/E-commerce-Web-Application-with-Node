module.exports = (sequelize, DataTypes) => {
    const ShippingAddresses = sequelize.define('ShippingAddresses', {
        address: DataTypes.STRING(255),
        city: DataTypes.STRING(100),
        state: DataTypes.STRING(100),
        zipcode: DataTypes.STRING(10)
    });

    ShippingAddresses.associate = (models) => {
        ShippingAddresses.hasMany(models.UserShippingAddresses, {
            foreignKey: 'shippingAddressId',
            as: 'userShippingAddresses',
        });
        ShippingAddresses.hasMany(models.Orders, {
            foreignKey: 'shippingAddressId',
            as: 'shippingAddress',
        });
    };

    return ShippingAddresses;
};