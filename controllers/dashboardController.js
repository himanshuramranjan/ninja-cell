const Interview = require("../models/interview");
const Student = require("../models/student");

module.exports.dashboardStudent = async function (req, res) {
  try {
    if (req.isAuthenticated()) {
      // populating all students with interviews
      let students = await Student.find({}).populate("interviews");

      return res.render("dashboard", {
        all_students: students
      });
    } else {
      return res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};



module.exports.dashboardInterview = async function (req, res) {
  try {
    if (req.isAuthenticated()) {
      // populating all interviews with students
      let interviews = await Interview.find({}).populate("students.student");

      return res.render("dashboard_interview", {
        all_interviews: interviews,
      });
    } else {
      return res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};
