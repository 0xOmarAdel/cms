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
