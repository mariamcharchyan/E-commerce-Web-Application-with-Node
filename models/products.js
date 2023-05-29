module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        categoryId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        discountPercentage: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        quantity_sold: DataTypes.INTEGER,
        description: DataTypes.TEXT
    });

    Products.associate = (models) => {
        Products.belongsTo(models.Categories, {
          foreignKey: 'categoryId',
          as: 'category',
        });
        Products.hasMany(models.ProductImages, {
            foreignKey: 'productId',
            as: 'productImages',
        });
        Products.hasMany(models.Baskets, {
            foreignKey: 'productId',
            as: 'productData',
        });
        Products.hasMany(models.OrderItems, {
            foreignKey: 'orderId',
            as: 'orderItemData',
        });
    };

    return Products;
};
