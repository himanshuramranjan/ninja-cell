const express = require("express");
const passport = require("passport");
const dashBoardController = require("../controllers/dashboardController");
const reportController = require("../controllers/reportController");

// requiring files
const userController = require("../controllers/userController");
const router = express.Router();

// router for checking up the profile
router.get("/profile", passport.checkAuthentication, userController.profile);

//updating user profile
router.post("/update", passport.checkAuthentication, userController.updateUser);

// route for student dashboard
router.get("/dashboard/interview", dashBoardController.dashboardInterview);

// route for student dashboard
router.get("/dashboard", dashBoardController.dashboardStudent);

// router for sign in page
router.get("/", userController.signIn);

// route for sign up page
router.get("/sign-up", userController.signUp);

// route for creating a new User
router.post("/create", userController.create);

// use passport as middleware to authenticate
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/" }),
  userController.createSession
);

// route for logout button
router.get("/sign-out", userController.destroySession);

// route for downloading csv reports
router.get("/download", reportController.downloadCSVReport);

module.exports = router;
