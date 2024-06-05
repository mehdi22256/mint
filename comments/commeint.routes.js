const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/auth");

const {
  getAllComment,
  createComment,
  deleteComment,
  updateComment,
  getAllCommentsByBlogId,
} = require("./commeint.controller");

router.get("/", getAllComment);
router.post("/", authenticateToken, createComment);
router.get("/:id", getAllCommentsByBlogId);
router.delete("/:id", authenticateToken, deleteComment);
router.put("/:id", authenticateToken, updateComment);

module.exports = router;
