const mongoose = require('../db/connection');

const CommentsSchema = new mongoose.Schema({
  comment: String,
});

const Comments = mongoose.model('Comments', CommentsSchema);
module.exports = Comments;
