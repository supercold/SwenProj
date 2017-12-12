var mongoose = require('mongoose');

var DailySchema = new mongoose.Schema({
  Day: String,
  RoomID: String,
  Occupancy: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Daily', DailySchema);