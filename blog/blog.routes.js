const express = require("express");
const router = express.Router();
const {
  getAllBlog,
  getBlogById,
  createPostBlog,
  deletePostBlog,
  updatePostBlog,
} = require("./blog.controller");

const fileUpload = require("../middlewares/fileUpload");
const { authenticateToken } = require("../middlewares/auth");
router.get("/", getAllBlog);
router.get("/:id", getBlogById);
router.post("/", authenticateToken, fileUpload.single("image"), createPostBlog);
router.delete("/:id", authenticateToken, deletePostBlog);
router.put("/id", authenticateToken, updatePostBlog);

module.exports = router;
