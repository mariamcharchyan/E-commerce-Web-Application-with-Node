module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        name: DataTypes.STRING,
    });

    Categories.associate = (models) => {
        Categories.hasMany(models.Products, {
            foreignKey: 'categoryId',
            as: 'products',
        });
    };

    return Categories;
};