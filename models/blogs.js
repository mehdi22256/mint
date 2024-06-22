const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  content: {
    type: String,
    required: [true, "content is required"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  timeOfReading: {
    type: String,
    required: [true, "type of reading is required"],
  },
  image: {
    type: String,
  },

  description: {
    type: String,
    required: [true, "description is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user is required"],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    // required: [true, "category is required"],
  },
});

const Blog = model("Blog", blogSchema);
module.exports = Blog;
