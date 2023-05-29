'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const productsData = [
      { categoryId: 1, name: 'Musical Toy', price: 50, discountPercentage: 30, quantity: 1, description: 'A best selling favorite with thousands of 5 star ratings. Inspires a lifelong love of music. Baby can switch between 10 total melodies'},
      { categoryId: 3, name: 'Mini kitchen', price: 100, discountPercentage: 20, quantity: 2, description: 'Mini kitchen. There is a saucepan and a frying pan to prepare the tastiest imaginative menus. There is even a small sink, two spatulas and the essentials for any meal: salt and pepper shakers. This cute little kitchen is foldable for easy portability and to pack all accessories inside.'},
      { categoryId: 5, name: 'Maze', price: 20, discountPercentage: 30, quantity: 4, description: 'The pull labyrinth develops motor skills, coordination, sensory skills, logic and thinking.'},
      { categoryId: 5, name: 'Maze and logic box', price: 40, discountPercentage: 30, quantity: 5, description: 'The pull labyrinth develops motor skills, coordination, sensory skills, logic and thinking. By moving the small figures along the entire length of the wire, the child trains the muscles of the hand and the celerity of fingers.'},
      { categoryId: 2, name: 'A rocket', price: 30, discountPercentage: 30, quantity: 1, description: 'The fully equipped, 2-in-1 set includes a detachable top capsule and two astronauts that sport molded spacesuits, helmets, and dual-tank backpacks. Powered by a main booster and three auxiliary fin boosters, the Rocket has a large door that flips down to double as a set of steps up into the main cavity, while the detachable nose cone capsule has its own door that opens to reveal buttons, dials, and of course, the signature Green Toys 8-track.'},
      { categoryId: 2, name: 'Excavator', price: 30, discountPercentage: 25, quantity: 3, description: 'Tonka Excavator is made of cold-rolled steel and features colorful and realistic detail.Features a movable arm with a heavy-duty metal bucket to dig and haul. Real working treads allow you to maneuver through any job site in style.'},
      { categoryId: 3, name: 'Mini kitchen', price: 100, discountPercentage: 70, quantity: 0, description: 'Mini kitchen. There is a saucepan and a frying pan to prepare the tastiest imaginative menus. There is even a small sink, two spatulas and the essentials for any meal: salt and pepper shakers. This cute little kitchen is foldable for easy portability and to pack all accessories inside.'},
      { categoryId: 1, name: 'Xylophone', price: 50, discountPercentage: 30, quantity: 10, description: 'Wooden xylophone colorful musical instrument toy children educational toys with drumsticks for kids'},
      { categoryId: 1, name: 'Wooden Log Cabin Set Building House Toy', price: 30, discountPercentage: 50, quantity: 8, description: 'A timeless retro toy for kids and adults alike, these traditional building logs have just the right mix of modern durability and classic style. Childhood memories are waiting to be archived with these amazing wood logs.'},
      { categoryId: 6, name: 'Puzzle BABY SHARK', price: 18, discountPercentage: 0, quantity: 40, description: 'A puzzle is a game, problem, or toy that tests a persons ingenuity or knowledge. In a puzzle, the solver is expected to put pieces together (or take them apart) in a logical way, in order to arrive at the correct or fun solution of the puzzle.'},
      { categoryId: 6, name: 'Puzzle Animals with Numbers', price: 25, discountPercentage: 0, quantity: 40, description: 'A puzzle is a game, problem, or toy that tests a persons ingenuity or knowledge. In a puzzle, the solver is expected to put pieces together (or take them apart) in a logical way, in order to arrive at the correct or fun solution of the puzzle.'},
      { categoryId: 6, name: 'Puzzle Butterfly with Alphabets', price: 20, discountPercentage: 0, quantity: 40, description: 'A puzzle is a game, problem, or toy that tests a persons ingenuity or knowledge. In a puzzle, the solver is expected to put pieces together (or take them apart) in a logical way, in order to arrive at the correct or fun solution of the puzzle.'},
      { categoryId: 6, name: 'Puzzle Dog with Alphabets', price: 20, discountPercentage: 0, quantity: 40, description: 'A puzzle is a game, problem, or toy that tests a persons ingenuity or knowledge. In a puzzle, the solver is expected to put pieces together (or take them apart) in a logical way, in order to arrive at the correct or fun solution of the puzzle.'},
      { categoryId: 4, name: 'Neon Pink Bibi Baby Doll Toy With Dummy', price: 26, discountPercentage: 0, quantity: 40, description: 'This fantastic fashionable clothes set is perfect for a present and will make your children happy.Thouse outfits will bring a lot of joy to your child pretend play, with extra outfits your little ones can explore their imagination or even play mum and change their dolls outfits as areal mum.'},
      { categoryId: 4, name: 'Baby Doll Clothes Set of 6 for Dolls', price: 28, discountPercentage: 0, quantity: 40, description: 'This fantastic fashionable clothes set is perfect for a present and will make your children happy.Thouse outfits will bring a lot of joy to your child pretend play, with extra outfits your little ones can explore their imagination or even play mum and change their dolls outfits as areal mum.'},
      { categoryId: 2, name: 'Red Transform Robot ', price: 70, discountPercentage: 10, quantity: 15, description: 'This wonderful transformer toys robot racing car has many cool design for fun, such as rotation roller and led light on the bottom, which give kids better playing experience, and easy to operate with the on/off switch.'},
      { categoryId: 2, name: 'Blue Transform Robot', price: 70, discountPercentage: 10, quantity: 15, description: 'This wonderful transformer toys robot racing car has many cool design for fun, such as rotation roller and led light on the bottom, which give kids better playing experience, and easy to operate with the on/off switch.'},
    ];


    const products = productsData.map((product) => ({
      ...product,
    }));

    await queryInterface.bulkInsert('Products', products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};