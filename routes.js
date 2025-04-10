const express = require("express");
const Advertisement = require("./Models/Advertisements.js");
const router = express.Router();

// Create an Advertisement
router.post("/", async (req, res) => {
  try {
    const newAd = new Advertisement(req.body);
    await newAd.save();
    res.status(201).json(newAd);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All Advertisements
router.get("/", async (req, res) => {
  try {
    const ads = await Advertisement.find();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read Single Advertisement
router.get("/:id", async (req, res) => {
  try {
    const ad = await Advertisement.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: "Ad not found" });
    res.json(ad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an Advertisement
router.put("/:id", async (req, res) => {
  try {
    const updatedAd = await Advertisement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAd) return res.status(404).json({ message: "Ad not found" });
    res.json(updatedAd);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an Advertisement
router.delete("/:id", async (req, res) => {
  try {
    const deletedAd = await Advertisement.findByIdAndDelete(req.params.id);
    if (!deletedAd) return res.status(404).json({ message: "Ad not found" });
    res.json({ message: "Advertisement deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
