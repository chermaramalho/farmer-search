'use strict';
module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define(
    'Documents',
    {
      documentType: DataTypes.STRING,
      documentNumber: DataTypes.STRING
    },
    {}
  );
  Documents.associate = function(models) {
    Documents.belongsTo(models.Farmers, {
      foreignKey: 'farmerId',
      as: 'farmer'
    });
  };
  return Documents;
};
