const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/auth");

const {
  getAllComment,
  getCommentById,
  createComment,
  deleteComment,
  updateComment,
} = require("./commeint.controller");

router.get("/", getAllComment);
router.get("/:id", getCommentById);
router.post("/", authenticateToken, createComment);
router.delete("/:id", authenticateToken, deleteComment);
router.put("/:id", authenticateToken, updateComment);

module.exports = router;
