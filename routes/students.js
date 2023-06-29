const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

// rending add  Student page
router.get("/add-student", studentController.addStudent);

// rendering edit page
router.get("/edit-student/:id", studentController.editStudent);

// updating the student
router.post("/update/:id", studentController.updateStudent);

// creating a new Student
router.post("/create", studentController.create);

// deleting a particular student
router.get("/destroy/:studentId", studentController.destroy);

module.exports = router;
