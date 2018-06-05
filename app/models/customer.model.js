const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = Schema.Types;

// Customer schema
const customerSchema = new Schema({
 customerID: {
  type: SchemaTypes.Number,
  required: true,
  unique: true
 },
 name: {
  first: { type: SchemaTypes.String, lowercase: true, trim: true },
  last: { type: SchemaTypes.String, lowercase: true, trim: true }
 },
 birthday: SchemaTypes.String,
 gender: {
  type: SchemaTypes.String,
  enum: ['m', 'f']
 },
 lastContact: {
  type: Date,
  default: Date.now
 },
 customerLifetimeValue: SchemaTypes.Number
});

module.exports = mongoose.model('customer', customerSchema);