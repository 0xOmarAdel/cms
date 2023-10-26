const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  complaints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Complaint" }],
});

module.exports = mongoose.model("Category", categorySchema);
