const router = require("express").Router();
const {
  createCategory,
  getAllCategories,
} = require("../controllers/categoryController");
const checkPermissions = require("../utils/checkPermissions");

router.post("/", checkPermissions, createCategory);
router.get("/", getAllCategories);

module.exports = router;
