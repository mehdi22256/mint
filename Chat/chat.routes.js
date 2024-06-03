const express = require("express");
const router = express.Router();
const { getAllChat, deleteChat, addChat } = require("./chat.controller");

router.get("/", getAllChat);
router.post("/", addChat);
router.delete("/:id", deleteChat);

module.exports = router;
