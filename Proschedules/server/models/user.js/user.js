const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  goals: {
    calories: Number,
    workoutMinutes: Number
  },
  schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }]
});

module.exports = mongoose.model('User', UserSchema);