var mongoose = require('mongoose');

var GuestSchema = new mongoose.Schema({
  roomid: String,
  numberofpeople: Number,
  bookedby: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Guest', GuestSchema);