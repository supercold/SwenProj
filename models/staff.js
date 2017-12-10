var mongoose = require('mongoose');

var StaffSchema = new mongoose.Schema({
  name: String,
  idnum: Number,
  dateofbirth: Date,
  bankaccount: Number,
  address: String,
  number: Number,
  position: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Staff', StaffSchema)