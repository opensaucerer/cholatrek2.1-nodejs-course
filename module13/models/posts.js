const moongose = require('mongoose');
const { Schema } = moongose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = moongose.model('Post', postSchema);

module.exports = { Post };
