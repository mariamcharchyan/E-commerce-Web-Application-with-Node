'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const shippingAddressesData = [
      { address: '1st Street, Yerevan', city: 'Yerevan', state: 'Yerevan', zipcode: '1001' },
      { address: 'Gyumri Street, Gyumri', city: 'Gyumri', state: 'Shirak', zipcode: '3101' },
      { address: 'Mashtots Avenue, Vanadzor', city: 'Vanadzor', state: 'Lori', zipcode: '2001' },
      { address: 'Republic Square, Yerevan', city: 'Yerevan', state: 'Yerevan', zipcode: '1002' },
      { address: 'Armenia Street, Sevan', city: 'Sevan', state: 'Gegharkunik', zipcode: '1501' },
      { address: 'Abovyan Street, Abovyan', city: 'Abovyan', state: 'Kotayk', zipcode: '2201' },
      { address: 'Shahumyan Street, Kapan', city: 'Kapan', state: 'Syunik', zipcode: '3301' },
      { address: 'Artashat Road, Artashat', city: 'Artashat', state: 'Ararat', zipcode: '0701' },
      { address: 'Nor Nork District, Yerevan', city: 'Yerevan', state: 'Yerevan', zipcode: '1003' },
      { address: 'Masis Street, Armavir', city: 'Armavir', state: 'Armavir', zipcode: '0901' },
      { address: 'Arzni Road, Arzni', city: 'Arzni', state: 'Kotayk', zipcode: '2211' },
      { address: 'Ashtarak Highway, Ashtarak', city: 'Ashtarak', state: 'Aragatsotn', zipcode: '1401' },
      { address: 'Goris Street, Goris', city: 'Goris', state: 'Syunik', zipcode: '3401' },
      { address: 'Byurakan Village, Byurakan', city: 'Byurakan', state: 'Aragatsotn', zipcode: '1402' },
      { address: 'Alaverdi Road, Alaverdi', city: 'Alaverdi', state: 'Lori', zipcode: '2101' },
      { address: 'Sisian Street, Sisian', city: 'Sisian', state: 'Syunik', zipcode: '3501' },
      { address: 'Aparan Street, Aparan', city: 'Aparan', state: 'Aragatsotn', zipcode: '1403' },
      { address: 'Dilijan Center, Dilijan', city: 'Dilijan', state: 'Tavush', zipcode: '3901' },
      { address: 'Vardenis Road, Vardenis', city: 'Vardenis', state: 'Gegharkunik', zipcode: '1601' },
      { address: 'Ijevan Street, Ijevan', city: 'Ijevan', state: 'Tavush', zipcode: '3801' },
    ];

    const shippingAddresses = shippingAddressesData.map((shippingAddress) => ({
      ...shippingAddress,
    }));

    await queryInterface.bulkInsert('ShippingAddresses', shippingAddresses, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ShippingAddresses', null, {});
  }
};
