var mongoose = require('mongoose');

var ScheduleSchema = new mongoose.Schema({
  RoomID: String,
  InCharge: String,
  Status: String,
  Cleanedtime: String,
  donotdisturb: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);