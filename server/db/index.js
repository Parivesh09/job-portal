const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/userModel");
const Job = require("./models/jobModel");
const Company = require("./models/companyModel");
const JobApplication = require("./models/jobApplicationModel");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = { connectDB, User, Job, Company, JobApplication };
