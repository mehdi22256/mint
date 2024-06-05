const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/auth");

const {
  getAllLocation,
  addLocation,
  deleteLocation,
} = require("./location.conteoller");

router.get("/", getAllLocation);
router.post("/", authenticateToken, addLocation);
router.delete("/:id", authenticateToken, deleteLocation);

module.exports = router;
