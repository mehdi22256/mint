const express = require("express");
const router = express.Router();
const {
  getAllSpecialty,
  addSpecialty,
  deleteSpecialty,
} = require("./specialty.controller");

router.get("/", getAllSpecialty);
router.post("/", addSpecialty);
router.delete("/:id", deleteSpecialty);

module.exports = router;
