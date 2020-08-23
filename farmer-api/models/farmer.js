'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farmers = sequelize.define(
    'Farmers',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Farmers.associate = function(models) {
    Farmers.hasMany(models.Documents, {
      foreignKey: 'farmerId',
      as: 'documents',
      onDelete: 'CASCADE'
    });
    Farmers.hasMany(models.Addresses, {
      foreignKey: 'farmerId',
      as: 'address',
      onDelete: 'CASCADE'
    });
  };
  return Farmers;
};
