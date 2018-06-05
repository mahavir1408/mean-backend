module.exports = (app) => {
  const customer = require('../controllers/customer.controller');

  app.post('/customer', customer.create);
  app.get('/customers', customer.findAll);
  app.get('/customer/:customerId', customer.findOne);
  app.put('/customer/:customerId', customer.update);
  app.delete('/customer/:customerId', customer.delete);
}