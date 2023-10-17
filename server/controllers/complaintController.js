const Complaint = require("../models/Complaint");

const createComplaint = async (req, res) => {
  try {
    const { title, categoryId, userId } = req.body;

    const complaint = new Complaint({
      title,
      categoryId,
      userId,
    });

    const savedComplaint = await complaint.save();
    res.json(savedComplaint);
  } catch (error) {
    res.status(400).json({ error: "Unable to create a complaint" });
  }
};

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch complaints" });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch the complaint" });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
};
