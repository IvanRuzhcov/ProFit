const initCoachRouter = require('express').Router();
const { User } = require('../../db/models');

initCoachRouter.get('/coach', async (req, res) => {
  try {
    const statistic = await User.findAll({
      where: { status: 'coach' },
    });
    res.json(statistic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = initCoachRouter;
