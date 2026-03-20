const Achievement = require('../models/Achievement');

// GET all achievements
exports.getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ createdAt: -1 });
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create achievement
exports.createAchievement = async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    const saved = await achievement.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update achievement
exports.updateAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!achievement) return res.status(404).json({ message: 'Achievement not found' });
    res.json(achievement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE achievement
exports.deleteAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndDelete(req.params.id);
    if (!achievement) return res.status(404).json({ message: 'Achievement not found' });
    res.json({ message: 'Achievement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
