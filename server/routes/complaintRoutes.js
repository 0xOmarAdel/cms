const router = require("express").Router();
const {
  createComplaint,
  getAllComplaints,
  getComplaintById,
} = require("../controllers/complaintController");

router.post("/", createComplaint);

router.get("/", getAllComplaints);

router.get("/:id", getComplaintById);

module.exports = router;
