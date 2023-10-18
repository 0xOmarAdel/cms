const Complaint = require("../models/Complaint");
const User = require("../models/User");
const Category = require("../models/Category");

const getTotalNumbers = async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();

    const totalUsers = await User.countDocuments();

    const totalAdmins = await User.countDocuments({ role: "admin" });

    const totalCategories = await Category.countDocuments();

    res.status(200).json({
      totalComplaints,
      totalUsers,
      totalAdmins,
      totalCategories,
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch total numbers" });
  }
};

module.exports = {
  getTotalNumbers,
};
