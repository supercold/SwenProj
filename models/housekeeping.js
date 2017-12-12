var mongoose = require('mongoose');

var HousekeepingSchema = new mongoose.Schema({
  Name: String,
  Position: String,
  Duties: String,
  Workingstatus: String,
  Breaktime: String,
  Leaveapplication: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Housekeeping', HousekeepingSchema);