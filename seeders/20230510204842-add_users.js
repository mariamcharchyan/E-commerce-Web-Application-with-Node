'use strict';
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = [
            { firstName: 'Mariam', lastName: 'Charchyan', age: 28, gender: 'female', email: 'mariam@mail.com', isVerified: 1, status: 'admin', password: 'Mariam', image: path.join(__dirname, '..', 'uploads', 'seedUsersPhotos', 'userW1.png') },
            { firstName: 'Hasmik', lastName: 'Nalbandyan', age: 30, gender: 'female', email: 'hasmik@mail.com', isVerified: 1, status: 'user', password: 'Hasmik', image: path.join(__dirname, '..', 'uploads', 'seedUsersPhotos', 'userW2.jpg') },
            { firstName: 'Narek', lastName: 'Nahapetyan', age: 35, gender: 'male', email: 'narek@mail.com', isVerified: 1, status: 'user', password: 'Narek', image: path.join(__dirname, '..', 'uploads', 'seedUsersPhotos', 'userM1.png') },
            { firstName: 'Robert', lastName: 'Avetisyan', age: 27, gender: 'male', email: 'robert@mail.com', isVerified: 1, status: 'user', password: 'Robert', image: path.join(__dirname, '..', 'uploads', 'seedUsersPhotos', 'userM2.jpg') },
            { firstName: 'Marine', lastName: 'Darbinyan', age: 40, gender: 'female', email: 'marine@mail.com', isVerified: 0, status: 'user', password: 'Marine', image: path.join(__dirname, '..', 'uploads', 'seedUsersPhotos', 'userW3.png') },
            { firstName: 'David', lastName: 'Qanaryan', age:42, gender: 'male', email: 'David@mail.com', isVerified: 0, status: 'user', password: 'David', image: path.join(__dirname, '..', 'uploads', 'seedUsersPhotos', 'userM3.png') }
        ];
  
        const hashedUsers = await Promise.all(
            users.map(async (user) => {
                const salt = await bcrypt.genSalt(saltRounds);
                const hashedPassword = await bcrypt.hash(user.password, salt);
                return { ...user, password: hashedPassword };
            })
        );
  
        await queryInterface.bulkInsert('Users', hashedUsers, {});
    },
  
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};