const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    date: Date,
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
  },
  doctor: {
    type: String,
    required: [true, "doctor is required"],
  },
});

const Booking = model("Booking", bookingSchema);
module.exports = Booking;
