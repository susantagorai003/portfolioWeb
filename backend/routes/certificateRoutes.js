const express = require('express');
const multer = require('multer');
const path = require('path');
const { getCertificates, createCertificate, updateCertificate, deleteCertificate } = require('../controllers/certificateController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `cert-${Date.now()}${path.extname(file.originalname)}`)
});
const upload = multer({ storage });

router.get('/', getCertificates);
router.post('/', upload.single('image'), createCertificate);
router.put('/:id', upload.single('image'), updateCertificate);
router.delete('/:id', deleteCertificate);

module.exports = router;
