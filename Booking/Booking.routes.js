const express = require("express");
const router = express.Router();
const {
  getBooking,
  addBooking,
  deleteBooking,
  findOneBooking,
} = require("./Booking.controller");

router.get("/", getBooking);
router.get("/:id", findOneBooking);
router.post("/", addBooking);
router.delete("/:id", deleteBooking);
module.exports = router;
