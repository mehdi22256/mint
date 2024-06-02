const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const commentsSchema = new Schema({
  comment: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user is required"],
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
    required: [true, "blog is required"],
  },
});

const Comments = model("Comments", commentsSchema);
module.exports = Comments;
