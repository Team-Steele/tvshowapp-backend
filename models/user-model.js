const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  tvShows: {
    type: [String],
  },
  opinion: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comments',
    },
  ],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
