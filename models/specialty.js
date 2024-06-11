const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const specialtySchema = new Schema({
  name: {
    type: String,
    required: [true, "specialty is required"],
  },
});

const Specialty = model("Specilty", specialtySchema);
module.exports = Specialty;
