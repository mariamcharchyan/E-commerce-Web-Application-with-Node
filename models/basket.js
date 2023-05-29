module.exports = (sequelize, DataTypes) => {
    const Baskets = sequelize.define('Baskets', {
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
    });

    Baskets.associate = (models) => {
        Baskets.belongsTo(models.Users, { foreignKey: 'userId' });
        Baskets.belongsTo(models.Products, { 
            foreignKey: 'productId', 
            as: 'productData'
        });
    };


    return Baskets;
};