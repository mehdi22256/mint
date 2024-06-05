const express = require("express");
const router = express.Router();
const {
  getAllChat,
  deleteChat,
  addChat,
  getAllChatBychatRoomId,
} = require("./chat.controller");
const { authenticateToken } = require("../middlewares/auth");

router.get("/", getAllChat);
router.get("/:id", getAllChatBychatRoomId);
router.post("/", authenticateToken, addChat);
router.delete("/:id", deleteChat);

module.exports = router;
