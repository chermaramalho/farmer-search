'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      street: {
          type: Sequelize.STRING
        },
      address: {
          type: Sequelize.STRING
        },
      country: {
          type: Sequelize.STRING
        },
      state: {
          type: Sequelize.STRING
        },
      farmerId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Farmers'
            },
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses');
  }
};
