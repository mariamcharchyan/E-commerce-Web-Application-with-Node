module.exports = (sequelize, DataTypes) => {
    const SavedCards = sequelize.define('SavedCards', {
        userId: DataTypes.INTEGER,
        cardNumber: DataTypes.STRING(20),
        cardHolder: DataTypes.STRING(255),
        cardExpiry: DataTypes.STRING(10),
        cardCVV: DataTypes.STRING(4)
    });

    return SavedCards;
};