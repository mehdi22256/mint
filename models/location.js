const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const locationSchema = new Schema({
  location: {
    type: String,
    required: [true, "location is required"],
  },
});

const location = model("location", locationSchema);
module.exports = location;
