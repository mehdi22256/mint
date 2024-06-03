const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    minlength: 4,
    maxlength: 20,
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "first name is required"],
  },
  secondName: {
    type: String,
    required: [true, "second name is required"],
  },
  familyName: {
    type: String,
    required: [true, "family name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "email must be correct"],
    unique: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Password invalid, it should contain 8-20 alphanumeric with small and capital letters and be unique!",
    ],
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
  },
  city: {
    type: String,
    required: [true, "city is required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  certificate: {
    type: String,
  },
  // role: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Role",
  //   required: [true, "role is required"],
  // },
});

const User = model("User", userSchema);
module.exports = User;
