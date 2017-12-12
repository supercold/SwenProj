var mongoose = require('mongoose');

var StatusSchema = new mongoose.Schema({
  RoomID: String,
  Occupancy:String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Status', StatusSchema);