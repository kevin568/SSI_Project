const Job = require("../model/jobModel");

exports.getAllJob = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({
      status: "success",
      data: {
        data: jobs,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "error",
    });
  }
};

exports.getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        data: job,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "error",
    });
  }
};

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: job,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "error",
    });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndRemove(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "error",
    });
  }
};
