var mongoose = require('mongoose');

var WeeklySchema = new mongoose.Schema({
  Week: String,
  RoomID: String,
  Occupancy: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weekly', WeeklySchema);