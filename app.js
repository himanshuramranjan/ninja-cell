const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false,}));

// used for sessions
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport");

const MongoStore = require("connect-mongo");

const userRouter = require("./routes/users");
const studentRouter = require("./routes/students");
const interviewRouter = require("./routes/interview");

app.use(cookieParser());

// set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// mongo-store is used to store session cookies in database
app.use(
  session({
    name: "placement-cell",
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URI,
      autoRemove: "disabled",
    }),
    function(err) {
      console.log(err || "MongoDB connected");
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// sets the authenticated user in the response
app.use(passport.setAuthenticatedUser);


// using bodyParser
app.use(bodyParser.json());

// dashboard routes
app.use("/", userRouter);

// student routes
app.use("/student", studentRouter);

// interview routes
app.use("/interview", interviewRouter);

module.exports = app;
