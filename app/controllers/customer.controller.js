const Customer = require('../models/customer.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Customer content cannot be empty"
    });
  }

  // Create a Note
  const customer = new Customer({
    customerID: 1,
    name: {
      first: 'Mahavir',
      last: 'Munot'
    },
    birthday: '1982-08-14',
    gender: 'm',
    customerLifetimeValue: 1.0
  });

  // Save Note in the database
  customer.save().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the customer."
    });
  });

  // console.log('req', req.body);
  // res.json({ "message": "Some Message", "req": req.body });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  res.json({ "message": "findAll method called" });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  res.json({ "message": "findOne method called" });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  res.json({ "message": "update method called" });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  res.json({ "message": "delete method called" });
};