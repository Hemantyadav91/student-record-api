const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Get all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Add new student
router.post("/", async (req, res) => {
  const { name, course, age, city } = req.body;
  if (!name || !course) return res.status(400).json({ message: "Name and course required" });
  const student = new Student({ name, course, age, city });
  await student.save();
  res.status(201).json(student);
});

// Update student
router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
});

// Delete student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

module.exports = router;
