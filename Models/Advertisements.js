const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Advertisement", advertisementSchema);
