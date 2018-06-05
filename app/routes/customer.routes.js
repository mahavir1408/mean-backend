let express = require('express');
let router = express.Router();
let customer = require('../controllers/customer.controller');

router.post('/customer', customer.create);
router.get('/customers', customer.findAll);
router.get('/customer/:customerId', customer.findOne);
router.put('/customer/:customerId', customer.update);
router.delete('/customer/:customerId', customer.delete);

module.exports = router;