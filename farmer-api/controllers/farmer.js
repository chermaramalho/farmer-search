const Addresses = require('../models').Addresses;
const Documents = require('../models').Documents;
const Farmers = require('../models').Farmers;
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 

module.exports = {
  findProductByNameOrDocument(req, res){
    if(isNaN(req.params.name)){
      Farmers.findAll({
        where: {
          name: {[Op.like]: '%' + req.params.name + '%'},      
        },
        include: [{
            model: Addresses,
            as: 'address'
          },{
            model: Documents,
            as: 'documents',
        }],
        
      }).then((farmers) => {
      if (!farmers) {
        return res.status(404).send({
          message: 'Farmer with the specified name or document does not exists',
        });
      }
      return res.status(200).send(farmers);
    })
    .catch((error) => { res.status(500).send(error); });  
  } else {
    Farmers.findAll({
      include: [
        {
          model: Addresses,
          as: 'address'
        },{
          model: Documents,
          as: 'documents',
          where: {
            documentNumber: {
                  [Op.like]: '%' + req.params.name + '%'
                  
                },      
          },
      }],
     
    }).then((farmers) => {
      if (!farmers) {
        return res.status(404).send({
          message: 'Farmer with the specified name or document does not exists',
        });
      }
      return res.status(200).send(farmers);
    })
    .catch((error) => { res.status(500).send(error); });    
    }
  },

};