'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },      
      productId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Products', 
          key:'id',
          // onDelete: 'CASCADE' 
        }
      },
      imagePath: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductImages');
  },
};


    // // Add beforeDestroy hook to unlink image files
    // const ProductImages = await queryInterface.sequelize.define('ProductImages', {});
    // ProductImages.addHook('beforeDestroy', 'unlinkImage', async (productImage) => {
    //   const imagePath = productImage.imagePath;

    //   if (imagePath) {
    //     try {
    //       await fs.promises.unlink(imagePath);
    //       console.log('Image unlinked:', imagePath);
    //     } catch (error) {
    //       console.error('Error unlinking image file:', error);
    //     }
    //   }
    // });

