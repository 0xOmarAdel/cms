const Category = require("../models/Category");
const { checkPermissions } = require("../utils");

const createCategory = async (req, res) => {
  try {
    checkPermissions(req.user, req.user._id);
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

    const response = categories.map((category) => ({
      id: category._id,
      name: category.name,
      number: categories.length,
    }));

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch categories" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    checkPermissions(req.user, req.user._id);

    const deletedCategory = await Category.findByIdAndRemove(
      req.params.categoryId
    );

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
};
