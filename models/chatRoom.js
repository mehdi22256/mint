const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const chatRoomSchema = new Schema({
  name: {
    type: String,
    required: [true, "text is required"],
  },
  usernames: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "username is required"],
    },
  ],
});

const ChatRoom = model("ChatRoom", chatRoomSchema);
module.exports = ChatRoom;
