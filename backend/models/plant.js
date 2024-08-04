const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: { type: String, required: true },
  sowingPeriod: { type: String, required: true },
  transplantingPeriod: { type: String, required: true },
  harvestingPeriod: { type: String, required: true },
});

module.exports = mongoose.model('Plant', PlantSchema);
