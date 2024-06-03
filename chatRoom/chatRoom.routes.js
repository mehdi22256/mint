const express = require("express");
const router = express.Router();

const {
  getAllChatRooms,
  getOneChatRoom,
  postChatRoom,
  putChatRoom,
  deleteChatRoom,
} = require("./chatRoom.controller");

router.get("/", getAllChatRooms);
router.get("/:id", getOneChatRoom);
router.post("/", postChatRoom);
router.delete("/:id", deleteChatRoom);
router.put("/:id", putChatRoom);

module.exports = router;
