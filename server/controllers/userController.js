const User = require("../models/User");
const moment = require("moment");

const getUsersPerMonth = async (req, res) => {
  try {
    let usersPerMonth = await User.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
      { $limit: 6 },
    ]);

    usersPerMonth = usersPerMonth
      .map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
        const date = moment()
          .month(month - 1)
          .year(year)
          .format("MMM Y");
        return { date, count };
      })
      .reverse();

    res.status(200).json(usersPerMonth);
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
