var express = require('express');
var router = express.Router();

const farmerController = require('../controllers').farmer;

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Welcome to API Farmer Search!',
    version: '0.0.1',
  });
});

/* Farmer Router */
//router.get('/api/farmer', farmerController.getAllFarmes);
router.get('/api/farmer/:name', farmerController.findProductByNameOrDocument);

//router.get('/farmers/:name', farmerController.list);
//router.get('/api/farmer/:id', farmerController.getById);

module.exports = router;
