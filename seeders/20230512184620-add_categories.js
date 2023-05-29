'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const categoryNames = [
            'For All',
            'For Boys',
            'For Girls',
            'Dolls',
            'Logical Toys',
            'Puzzles',
        ];
    
        const categories = categoryNames.map((name) => ({ name }));
    
        await queryInterface.bulkInsert('Categories', categories, {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Categories', null, {});
    },
};
