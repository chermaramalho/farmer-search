'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Documents',
      [
        {
          farmerId: 1,
          documentType: 'CPF', 
          documentNumber: '01171362378',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          farmerId: 2, 
          documentType: 'CPF', 
          documentNumber: '01173569378',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          farmerId: 3, 
          documentType: 'CPF', 
          documentNumber: '01198632378',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          farmerId: 4, 
          documentType: 'CPF', 
          documentNumber: '01198742378',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          farmerId: 5, 
          documentType: 'CPF', 
          documentNumber: '01171362589',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    ),

down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Documents', null, {})

};
