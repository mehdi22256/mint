const express = require("express");
const router = express.Router();
const { getAllChat, deleteChat, addChat } = require("./chat.controller");
const { authenticateToken } = require("../middlewares/auth");

router.get("/", getAllChat);
router.post("/", authenticateToken, addChat);
router.delete("/:id", deleteChat);

module.exports = router;
