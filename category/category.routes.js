const express = require("express");
const router = express.Router();

const {
  updatCategory,
  deleteCategory,
  newCategory,
  getoneCategory,
  getallCategory,
} = require("../category/category.controller");

router.get("/", getallCategory);
router.get("/:CategoryId", getoneCategory);
router.post("/", newCategory);
router.delete("/:CategoryId", deleteCategory);
router.put("/:CategoryId", updatCategory);

module.exports = router;
