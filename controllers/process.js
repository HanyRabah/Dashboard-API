const mongoose = require('mongoose');
const processSchema = require('../db/models/process');
const Process = mongoose.model('Process');

exports.getProcess = async (req, res) => {
  const process = await Process.find({});
  return res.json(process)
}

exports.getProcessById = async (req, res) => {
  try {
    const process = await Process.findById(req.params.id);
    return res.json(process); 
  } catch(error) {
    return res.status(422).send(error.message)
  }
}

exports.createProcess = async (req, res) => {
  const processData = req.body;
  const userId = req.user.sub;
  const process = new Process(processData);
  process.userId = userId
  try {
    const newProcess = await process.save();
    return res.json(newProcess); 
  } catch(error) {
    return res.status(422).send(error.message)
  }
}
