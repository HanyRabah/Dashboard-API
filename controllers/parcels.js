const mongoose = require('mongoose');
const parcelSchema = require('../db/models/parcel');
const Parcel = mongoose.model('Parcel');

exports.getParcels = async (req, res) => {
  const parcels = await Parcel.find({});
  return res.json(parcels)
}

exports.getParcelById = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    return res.json(parcel); 
  } catch(error) {
    return res.status(422).send(error.message)
  }
}

exports.createParcel = async (req, res) => {
  const parcelData = req.body;
  const userId = req.user.sub;
  const parcel = new Parcel(parcelData);
  parcel.userId = userId
  try {
    const newParcel = await parcel.save();
    return res.json(newParcel); 
  } catch(error) {
    return res.status(422).send(error.message)
  }
}
