const User = require("../models/User");

const getUsersPerMonth = async (req, res) => {
  try {
    const usersPerMonth = await User.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.year": -1, "_id.month": -1 },
      },
    ]);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const formattedResponse = usersPerMonth.map((item) => ({
      total: item.count,
      month: monthNames[item._id.month - 1],
    }));

    res.status(200).json(formattedResponse);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch users per month" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -role -updatedAt");

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch users" });
  }
};

const getAdminUsers = async (req, res) => {
  try {
    const adminUsers = await User.find({ role: "admin" }).select(
      "-password -role -updatedAt"
    );

    res.status(200).json(adminUsers);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch admin users" });
  }
};

module.exports = {
  getUsersPerMonth,
  getAllUsers,
  getAdminUsers,
};
