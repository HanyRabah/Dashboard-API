const mongoose = require('mongoose');
const tractorSchema = require('../db/models/tractor');
const Tractor = mongoose.model('Tractor');

exports.getTractors = async (req, res) => {
  const tractors = await Tractor.find({});
  return res.json(tractors)
}

exports.getTractorById = async (req, res) => {
  try {
    const tractor = await Tractor.findById(req.params.id);
    return res.json(tractor); 
  } catch(error) {
    return res.status(422).send(error.message)
  }
}  

exports.createTractor = async (req, res) => {
  const tractorData = req.body;
  const userId = req.user.sub;
  const tractor = new Tractor(tractorData);
  tractor.userId = userId
  try {
    const newTractor = await tractor.save();
    return res.json(newTractor); 
  } catch(error) {
    return res.status(422).send(error.message)
  }
}
