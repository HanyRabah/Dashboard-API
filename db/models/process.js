
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProcessSchema = new Schema({
  parcel: { type: String, required: true, maxlength: 128 },
  parcel_id: { type: String, required: true },
  tractor: { type: String, required: true, maxlength: 64 },
  area: { type: String, required: true, maxlength: 120 },
  date:  { type: Date, required: true },
  userId: {type: String, required: true},
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Process', ProcessSchema);
