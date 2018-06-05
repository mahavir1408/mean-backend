const customerModel = require('../models/customer.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
 res.json({"message": "create method called"});
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
 res.json({"message": "findAll method called"});
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
 res.json({"message": "findOne method called"});
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
 res.json({"message": "update method called"});
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
 res.json({"message": "delete method called"});
};