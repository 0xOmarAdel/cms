const router = require("express").Router();
const {
  createMessage,
  getMessagesByComplaintId,
} = require("../controllers/messageController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/", authenticateUser, createMessage);

router.get(
  "/complaint/:complaintId",
  authenticateUser,
  getMessagesByComplaintId
);

module.exports = router;
