const router = require("express").Router();
const {
  getUsersPerMonth,
  getAllUsers,
  getAdminUsers,
} = require("../controllers/userController");

router.get("/users-per-month", getUsersPerMonth);
router.get("/all-users", getAllUsers);
router.get("/all-admins", getAdminUsers);

module.exports = router;
