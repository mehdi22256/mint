const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },

  date: {
    type: String,
  },
  time: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "doctor is required"],
  },
});

const Booking = model("Booking", bookingSchema);
module.exports = Booking;
