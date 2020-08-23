'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define(
    'Addresses',
    {
      street: DataTypes.STRING,
      address: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      farmerId: DataTypes.INTEGER
    },
    {}
  );
  Addresses.associate = function(models) {
    Addresses.belongsTo(models.Farmers, {
      foreignKey: 'farmerId',
      as: 'farmer'
    });
  };
  return Addresses;
};
