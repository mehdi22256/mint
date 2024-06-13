const express = require("express");
const router = express.Router();
const upload = require("../middlewares/fileUpload");
const {
  getAllUsers,
  getDoctor,
  signUp,
  putUser,
  deleteUser,
  signIn,
} = require("./user.controller");
const { authenticateUser } = require("../middlewares/auth");

router.get("/", getAllUsers);
router.get("/doctor", getDoctor);
router.post(
  "/signup",
  upload.fields([{ name: "image" }, { name: "certificate" }]),
  signUp
);
router.post("/signin", authenticateUser, signIn);
router.delete("/:id", deleteUser);
router.put("/:id", putUser);

module.exports = router;
