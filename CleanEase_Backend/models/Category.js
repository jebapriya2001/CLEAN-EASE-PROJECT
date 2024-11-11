const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  availability: String,
  price: Number,
});

module.exports = mongoose.model('Category', categorySchema);
