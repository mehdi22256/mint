const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "category name is required"],
  },
  blog: [
    {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: [true, "blog is required"],
    },
  ],
});

const Category = model("Category", categorySchema);
module.exports = Category;
