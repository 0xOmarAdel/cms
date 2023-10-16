const Category = require("../models/Category");
const { checkPermissions } = require("../utils");

const createCategory = async (req, res) => {
  try {
    checkPermissions(req.user, req.user.userId);

    const { name } = req.body;

    const category = new Category({
      name,
    });

    const savedCategory = await category.save();
    res.json(savedCategory);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch categories" });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
