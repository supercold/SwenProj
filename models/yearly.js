var mongoose = require('mongoose');

var YearlySchema = new mongoose.Schema({
  Year: String,
  RoomID: String,
  Occupancy: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Yearly', YearlySchema);