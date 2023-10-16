const router = require("express").Router();
const {
  createCategory,
  getAllCategories,
} = require("../controllers/categoryController");
const authenticateUser = require("../middleware/authenticateUser");
const checkPermissions = require("../utils/checkPermissions");

router.post("/", authenticateUser, createCategory);
router.get("/", getAllCategories);

module.exports = router;
