const express = require("express");
const router = express.Router();

const {
  getAllComment,
  getCommentById,
  createComment,
  deleteComment,
  updateComment,
} = require("./commeint.controller");

router.get("/", getAllComment);
router.get("/:id", getCommentById);
router.post("/", createComment);
router.delete("/:id", deleteComment);
router.put("/:id", updateComment);

module.exports = router;
