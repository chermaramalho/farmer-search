'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Addresses',
      [
        { 
          farmerId: 1, 
          street: 'Ludwig-Erhard-Anlage',
          state: 'Ludwig-Erhard-Anlage', 
          address: 'Ludwig-Erhard-Anlage, Number 01', 
          country: 'Germany',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          farmerId: 2, 
          street: 'Av. Atlântica',
          state: 'RJ', 
          address: '1702 - Copacabana, Rio de Janeiro', 
          country: 'Brazil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          farmerId: 3, 
          street: 'Praça dos Três Poderes',
          state: 'DF', 
          address: 'Palácio do Congresso, Anexo II,Térreo, Brasília', 
          country: 'Brazil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          farmerId: 4, 
          street: ' Avenida Pasteur',
          state: 'RJ', 
          address: '520 - Botafogo, Rio de Janeiro', 
          country: 'Brazil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          farmerId: 5, 
          street: 'Av. Nazaré',
          state: 'SP', 
          address: 's/n - Ipiranga, São Paulo', 
          country: 'Brazil',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Addresses', null, {})

};
