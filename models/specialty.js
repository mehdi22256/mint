const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const specialtySchema = new Schema({
  name: {
    type: String,
  },
});

const Specialty = model("Specilty", specialtySchema);
module.exports = Specialty;
