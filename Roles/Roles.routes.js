const express = require("express");
const router = express.Router();
const { getAllRoles, addRoles, deleteRoles } = require("./Roles.conteoller");

router.get("/", getAllRoles);
router.post("/", addRoles);
router.delete("/:id", deleteRoles);

module.exports = router;
