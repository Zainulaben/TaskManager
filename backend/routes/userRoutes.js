const express = require("express");

const { adminOnly, protect } = require("../middlewares/authMiddleware");
const {
  getUsers,
  getUserById,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Router
router.get("/", protect, adminOnly, getUsers); // Get all user (Admin only)
router.get("/:id", protect, getUserById); // Get a specific user

module.exports = router;
