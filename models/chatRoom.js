const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const chatRoomSchema = new Schema({
  users: [String],
  chatroomId: String,
});

const ChatRoom = model("ChatRoom", chatRoomSchema);
module.exports = ChatRoom;
