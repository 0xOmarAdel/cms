const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessagesByComplaintId,
} = require("../controllers/messageController");

router.post("/", createMessage);

router.get("/complaint/:complaintId", getMessagesByComplaintId);

module.exports = router;
