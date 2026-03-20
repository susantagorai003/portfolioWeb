const express = require('express');
const multer = require('multer');
const path = require('path');
const { getProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/projectController');

const router = express.Router();

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `project-${Date.now()}${path.extname(file.originalname)}`)
});
const upload = multer({ storage });

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', upload.single('image'), createProject);
router.put('/:id', upload.single('image'), updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
