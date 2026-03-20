const Certificate = require('../models/Certificate');

// GET all certificates
exports.getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ date: -1 });
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create certificate
exports.createCertificate = async (req, res) => {
  try {
    const certificate = new Certificate({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : req.body.image || ''
    });
    const saved = await certificate.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update certificate
exports.updateCertificate = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) updateData.image = `/uploads/${req.file.filename}`;
    const certificate = await Certificate.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    if (!certificate) return res.status(404).json({ message: 'Certificate not found' });
    res.json(certificate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE certificate
exports.deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndDelete(req.params.id);
    if (!certificate) return res.status(404).json({ message: 'Certificate not found' });
    res.json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
