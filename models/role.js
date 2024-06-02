const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const roleSchema = new Schema({
  name: {
    type: String,
    required: [true, "role is required"],
  },
});

const Role = model("Role", roleSchema);
module.exports = Role;
