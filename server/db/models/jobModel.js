const mongoose = require("mongoose");

const jobSchema = mongoose.Schema( 
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
    },
    salary: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    positions: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    experience:{
      type: Number,
      required: true
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobapplication",
      },
    ],
  },
  { timestamps: true }
);

module.exports = new mongoose.model("job", jobSchema);
