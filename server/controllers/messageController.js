const Complaint = require("../models/Complaint");
const Message = require("../models/Message");

const createMessage = async (req, res) => {
  try {
    const { complaintId, text } = req.body;
    const from = req.user.role === "admin" ? "1" : "0";

    const message = new Message({
      complaintId,
      from,
      text,
    });

    const savedMessage = await message.save();

    if (from === "0") {
      const complaint = await Complaint.findById(complaintId);

      if (!complaint) {
        return res.status(404).json({ error: "Complaint not found" });
      }

      if (complaint.status === 0) {
        complaint.status = 1;
        await complaint.save();
      }
    }

    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ error: "Unable to create a message" });
  }
};

const getMessagesByComplaintId = async (req, res) => {
  try {
    const complaintId = req.params.complaintId;

    const messages = await Message.find({ complaintId });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch messages" });
  }
};

module.exports = {
  createMessage,
  getMessagesByComplaintId,
};
