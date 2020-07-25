
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parcelSchema = new Schema({
  name: { type: String, required: true, maxlength: 128 },
  culture: { type: String, required: true, maxlength: 64 },
  area: { type: String, required: true, maxlength: 120 },
  userId: {type: String, required: true},
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Parcel', parcelSchema);
