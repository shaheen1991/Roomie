const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
  start: { type: Date, default: Date.now },
  end: { type: Date, default: Date.now },
  title:  { type: String, required: true },
  details: { type: String, required: true},
  choreFor: { type: String, required: true}
});

const Chore = mongoose.model("Chore", ChoreSchema);

module.exports = Chore;
