const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const chatSchema = new Schema({
  text: {
    type: String,
    required: [true, "text is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  chatroom: {
    type: Schema.Types.ObjectId,
    ref: "ChatRoom",
  },
});

const Chat = model("Chat", chatSchema);
module.exports = Chat;
