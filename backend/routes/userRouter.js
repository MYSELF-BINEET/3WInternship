const express = require("express");
const { createUser, getAllUsers } = require("../controller/user.controller.js");
const { upload } = require("../middleware/cloudinaryConfig.js");

const router = express.Router();

// Route to handle user submissions
router.post("/api/users", upload.array("images"), createUser);

// Route to fetch all users
router.get("/api/users", getAllUsers);

module.exports = router;
