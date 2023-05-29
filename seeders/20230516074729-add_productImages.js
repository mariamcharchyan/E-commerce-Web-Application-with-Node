'use strict';
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const productImagesData = [
      { productId: 1, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MusicalToy1.jpg') },
      { productId: 1, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MusicalToy2.jpg') },
      { productId: 1, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MusicalToy3.jpg') },
      { productId: 1, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MusicalToy4.jpg') },
      { productId: 1, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MusicalToy5.jpg') },
      
      { productId: 2, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MiniKitchen1.jpg') },
      { productId: 2, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MiniKitchen2.jpg') },
      { productId: 2, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MiniKitchen3.jpg') },
      { productId: 2, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MiniKitchen4.jpg') },
      
      { productId: 3, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Maze1.jpg') },
      { productId: 3, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Maze2.jpg') },
      { productId: 3, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Maze3.jpg') },
      { productId: 3, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Maze4.jpg') },
      { productId: 3, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Maze5.jpg') },
      
      { productId: 4, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MazeAndLogicBox1.jpg') },
      { productId: 4, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MazeAndLogicBox2.jpg') },
      { productId: 4, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MazeAndLogicBox3.jpg') },
      
      { productId: 5, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Rocket1.jpg') },
      { productId: 5, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Rocket2.jpg') },
      { productId: 5, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Rocket3.jpg') },

      { productId: 6, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Excavator1.jpg') },
      { productId: 6, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Excavator1.jpg') },

      { productId: 7, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MiniKitchenP1.jpg') },
      { productId: 7, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MiniKitchenP2.jpg') },
      { productId: 7, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'MiniKitchenP3.jpg') },

      { productId: 8, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Xylophone1.jpg') },
      { productId: 8, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'Xylophone2.jpg') },

      { productId: 9, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'WoodenLogCabin1.jpg') },
      { productId: 9, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'WoodenLogCabin2.jpg') },
      { productId: 9, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'WoodenLogCabin3.jpg') },
      { productId: 9, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'WoodenLogCabin4.jpg') },

      { productId: 10, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'PuzzlesBABYSHARK.jpg') },

      { productId: 11, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'PuzzlesAnimals1.jpg') },
      { productId: 11, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'PuzzlesAnimals2.jpg') },

      { productId: 12, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'PuzzlesButterfly.jpg') },

      { productId: 13, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'PuzzlesDog.jpg') },

      { productId: 14, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'dollNeonPink1.jpg') },
      { productId: 14, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'dollNeonPink2.jpg') },

      { productId: 15, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'dollClothes1.jpg') },
      { productId: 15, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'dollClothes2.jpg') },
      { productId: 15, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'dollClothes3.jpg') },

      { productId: 16, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'TransformRobotRed1.jpg') },
      { productId: 16, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'TransformRobotRed2.jpg') },

      { productId: 17, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'TransformRobotBlue1.jpg') },
      { productId: 17, imagePath:  path.join(__dirname, '..', 'uploads', 'seedProductsPhotos', 'TransformRobotBlue2.jpg') },
    ];

    const productImages = productImagesData.map((productImage) => ({
      ...productImage,
    }));

    await queryInterface.bulkInsert('ProductImages', productImages, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
