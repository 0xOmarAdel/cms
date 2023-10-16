const router = require("express").Router();
const {
  createCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/categoryController");
const authenticateUser = require("../middleware/authenticateUser");
const checkPermissions = require("../utils/checkPermissions");

router.post("/", authenticateUser, createCategory);
router.get("/", getAllCategories);
router.delete("/:categoryId", authenticateUser, deleteCategory);

module.exports = router;
