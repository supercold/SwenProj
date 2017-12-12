var mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  publisher: String,
  published_date: Date,
  price: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);