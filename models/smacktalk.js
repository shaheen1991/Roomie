const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SmacktalkSchema = new Schema({
  authorName: { type: String, required: true },
  authorComment: { type: String, required: true },
});

const Smacktalk = mongoose.model("Smacktalk", SmacktalkSchema);

module.exports = Smacktalk;