const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/auth");

const {
  getAllChatRooms,
  getOneChatRoom,
  postChatRoom,
  putChatRoom,
  deleteChatRoom,
} = require("./chatRoom.controller");

router.get("/", getAllChatRooms);
router.get("/:id", getOneChatRoom);
router.post("/", authenticateToken, postChatRoom);
router.delete("/:id", authenticateToken, deleteChatRoom);
router.put("/:id", authenticateToken, putChatRoom);

module.exports = router;
