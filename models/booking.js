var mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({
  selected_room: String,
  customer_name: String,
  numberofpeople: Number,
  customer_nric: String,
  phonenumber: Number,
  checkindate: Date,
  checkoutdate: Date,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);