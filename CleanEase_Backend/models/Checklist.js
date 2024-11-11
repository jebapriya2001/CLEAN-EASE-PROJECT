const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  task: String,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model('Checklist', checklistSchema);
