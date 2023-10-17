const Complaint = require("../models/Complaint");
const Message = require("../models/Message");

const createComplaint = async (req, res) => {
  try {
    const { title, category, text } = req.body;
    const user = req.user._id;

    const complaint = new Complaint({
      title,
      category,
      user,
    });

    const savedComplaint = await complaint.save();

    const lastInsertedComplaintId = savedComplaint._id;

    const message = new Message({
      complaintId: lastInsertedComplaintId,
      from: user,
      text,
    });

    const savedMessage = await message.save();
    res.json({ complaint: savedComplaint, message: savedMessage });
  } catch (error) {
    res.status(400).json({ error: "Unable to create a complaint and message" });
  }
};

const getAllComplaints = async (req, res) => {
  try {
    const userId = req.user._id;
    const userRole = req.user.role;

    let complaints;

    if (userRole === "admin") {
      complaints = await Complaint.find()
        .populate("user", "-password")
        .populate("category", "name");
    } else {
      complaints = await Complaint.find({ user: userId }).populate(
        "category",
        "name"
      );
    }

    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch complaints" });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const complaintId = req.params.id;
    const userId = req.user._id;
    const userRole = req.user.role;

    const complaint = await Complaint.findById(complaintId).populate({
      path: "category",
      select: "name",
    });

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    if (
      complaint.user.toString() !== userId.toString() &&
      userRole !== "admin"
    ) {
      return res.status(401).json({
        message: "You do not have permission to access this complaint",
      });
    }

    const categoryName = complaint.category.name;

    const modifiedComplaint = {
      _id: complaint._id,
      title: complaint.title,
      category: categoryName,
      status: complaint.status,
      date_created: complaint.date_created,
      date_closed: complaint.date_closed,
    };

    res.status(200).json(modifiedComplaint);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch the complaint" });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
};
