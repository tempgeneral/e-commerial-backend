const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatoonSchema = new Schema({
  fullName: { type: String, required: true },
  stateCode: { type: String, required: true },
  AmountPay: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Platoons = mongoose.model('Platoon', PlatoonSchema);

module.exports = Platoons;
