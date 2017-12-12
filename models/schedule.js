var mongoose = require('mongoose');

var ScheduleSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  publisher: String,
  published_date: Date,
  price: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);