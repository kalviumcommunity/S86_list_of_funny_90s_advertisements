const express = require("express");
const Advertisement = require("../Models/Advertisements");

const router = express.Router();

// Create Ad
router.post("/", async (req, res) => {
  const { title, description, videoUrl, year, category, created_by } = req.body;
  try {
    const newAd = new Advertisement({ title, description, videoUrl, year, category, created_by });
    await newAd.save();
    res.status(201).json(newAd);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Ads (optional filter by user)
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (req.query.created_by) filter.created_by = req.query.created_by;
    const ads = await Advertisement.find(filter).populate("created_by");
    res.json(ads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Single Ad
router.get("/:id", async (req, res) => {
  try {
    const ad = await Advertisement.findById(req.params.id).populate("created_by");
    if (!ad) return res.status(404).json({ message: "Ad not found" });
    res.json(ad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Ad
router.put("/:id", async (req, res) => {
  try {
    const updatedAd = await Advertisement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAd) return res.status(404).json({ message: "Ad not found" });
    res.json(updatedAd);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Ad
router.delete("/:id", async (req, res) => {
  try {
    const deletedAd = await Advertisement.findByIdAndDelete(req.params.id);
    if (!deletedAd) return res.status(404).json({ message: "Ad not found" });
    res.json({ message: "Ad deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
