const express = require("express");
const { adminLogin, getAdminDashboard } = require("../controller/admin.controller");

const router = express.Router();

// Admin login route
router.post("/api/admin/login", adminLogin);

// Admin dashboard route (fetch all users)
router.get("/api/admin/dashboard", getAdminDashboard);

module.exports = router;
