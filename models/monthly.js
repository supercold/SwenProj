var mongoose = require('mongoose');

var MonthlySchema = new mongoose.Schema({
  Month: String,
  RoomID: String,
  Occupancy: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Monthly', MonthlySchema);