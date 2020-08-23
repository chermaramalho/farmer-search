'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Farmers',
      [
        {
          name: 'Augusta Ada Byron King',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marlyn Wescoff',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fran Bilas',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kay McNulty',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ruth Lichterman',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Farmers', null, {})
};
