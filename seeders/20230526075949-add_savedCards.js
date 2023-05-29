'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const savedCardsData = [
      { userId: '2', cardNumber: '1234567890123456', cardHolder: 'Hasmik Nalbandyan', cardExpiry: '12/25', cardCVV: '123' },
      { userId: '2', cardNumber: '9876543210987654', cardHolder: 'Hasmik Nalbandyan', cardExpiry: '09/23', cardCVV: '456' },
      { userId: '3', cardNumber: '1111222233334444', cardHolder: 'Narek Nahapetyan', cardExpiry: '06/24', cardCVV: '789' },
      { userId: '4', cardNumber: '5555666677778888', cardHolder: 'Robert Avetisyan', cardExpiry: '03/27', cardCVV: '234' },
      { userId: '4', cardNumber: '9999000011112222', cardHolder: 'Robert Avetisyan', cardExpiry: '08/26', cardCVV: '567' },
    ];

    const savedCards = savedCardsData.map((savedCard) => ({
      ...savedCard,
    }));

    await queryInterface.bulkInsert('SavedCards', savedCards, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SavedCards', null, {});
  }
};
