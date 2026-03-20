const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: [true, 'Platform name is required'],
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  problemsSolved: {
    type: Number,
    default: 0
  },
  rating: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  profileLink: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema);
