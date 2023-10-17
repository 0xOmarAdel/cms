const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: [1, 0],
    default: 1,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  date_closed: Date,
});

module.exports = mongoose.model("Complaint", complaintSchema);
