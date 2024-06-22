const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/auth");
const {
  getBooking,
  addBooking,
  deleteBooking,
  findOneBooking,
} = require("./Booking.controller");

router.get("/", getBooking);
router.get("/:id", findOneBooking);
router.post("/", authenticateToken, addBooking);
router.delete("/:id", authenticateToken, deleteBooking);
module.exports = router;
