const router = require("express").Router();
const {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  getComplaintsPerMonth,
  closeComplaint,
} = require("../controllers/complaintController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/", authenticateUser, createComplaint);

router.get("/", authenticateUser, getAllComplaints);

router.get("/complaints-per-month", authenticateUser, getComplaintsPerMonth);

router.put("/close/:complaintId", authenticateUser, closeComplaint);

router.get("/:id", authenticateUser, getComplaintById);

module.exports = router;
