const sportsmanRouter = require('express').Router();
const { Parametr, Subscription, User } = require('../../db/models');

sportsmanRouter.post('/sportsman', async (req, res) => {
  const { weight } = req.body;
  const { userId } = req.session;
  try {
    // eslint-disable-next-line no-unused-vars
    const result = await Parametr.create({
      user_id_param: userId,
      weight,
    });
    const statistic = await Parametr.findAll({
      where: { user_id_param: userId },
    });
    res.json({ statistic });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

sportsmanRouter.get('/sportsman', async (req, res) => {
  const { userId } = req.session;
  try {
    const statistic = await Parametr.findAll({
      where: { user_id_param: userId },
    });
    res.json(statistic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
sportsmanRouter.get('/sportsman/subscription', async (req, res) => {
  const { userId } = req.session;
  try {
    const statistic = await User.findOne({
      where: { id: userId },
      include: ['coach'],
    });
    res.json(statistic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = sportsmanRouter;
