module.exports = (sequelize, DataTypes) => {
    const ProductImages = sequelize.define('ProductImages', {
        productId: DataTypes.INTEGER,
        imagePath: DataTypes.STRING,
    });

    ProductImages.associate = (models) => {
        ProductImages.belongsTo(models.Products, {
          foreignKey: 'productId',
          as: 'productImages',
        });
    };
    
    return ProductImages;
};