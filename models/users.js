module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        isVerified: DataTypes.BOOLEAN,
        status: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    });

    return Users;
};
