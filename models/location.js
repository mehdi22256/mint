const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const locationSchema = new Schema({
  latitude: {
    type: String,
    required: [true, "location is required"],
  },

  longitude: {
    type: String,
    required: [true, "location is required"],
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user is required"],
  },
});

const location = model("location", locationSchema);
module.exports = location;
