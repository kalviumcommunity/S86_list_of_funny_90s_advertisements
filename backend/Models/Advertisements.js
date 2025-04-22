const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  
  // Add this field for tracking which user created the ad
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Advertisement", advertisementSchema);
