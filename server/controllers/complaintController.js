const Complaint = require("../models/Complaint");

const createComplaint = async (req, res) => {
  try {
    const { title, categoryId } = req.body;
    const complaint = new Complaint({
      title,
      categoryId,
      userId: req.user._id,
    });

    const savedComplaint = await complaint.save();
    res.status(201).json(savedComplaint);
  } catch (error) {
    res.status(400).json({ error: "Unable to create a complaint" });
  }
};

const getAllComplaints = async (req, res) => {
  try {
    const userId = req.user._id;
    const complaints = await Complaint.find({ userId });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch complaints" });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const complaintId = req.params.id;

    const complaint = await Complaint.findById(complaintId)
      .populate("userId", "-password")
      .populate("categoryId", "name");

    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }

    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch the complaint" });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
};
