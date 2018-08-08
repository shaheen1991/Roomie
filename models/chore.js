const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
  choreName: { type: String, required: true },
  roomieName: { type: String, required: true },
  details: String,
  date: { type: Date, default: Date.now }
});

const Chore = mongoose.model("Chore", ChoreSchema);

module.exports = Chore;
