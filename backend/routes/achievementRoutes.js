const express = require('express');
const { getAchievements, createAchievement, updateAchievement, deleteAchievement } = require('../controllers/achievementController');

const router = express.Router();

router.get('/', getAchievements);
router.post('/', createAchievement);
router.put('/:id', updateAchievement);
router.delete('/:id', deleteAchievement);

module.exports = router;
