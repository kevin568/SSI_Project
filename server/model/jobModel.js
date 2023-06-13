const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  Time: {
    type: Date,
    default: Date.now(),
  },
});

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
