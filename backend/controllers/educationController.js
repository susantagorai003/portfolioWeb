const Education = require('../models/Education');

// GET all education entries
exports.getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create education entry
exports.createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    const saved = await education.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update education entry
exports.updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!education) return res.status(404).json({ message: 'Education entry not found' });
    res.json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE education entry
exports.deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json({ message: 'Education entry not found' });
    res.json({ message: 'Education entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
