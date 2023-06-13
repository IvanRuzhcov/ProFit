const chartBarRouter = require('express').Router();
const { Parametr } = require('../../db/models');

chartBarRouter.post('/chartbar', async (req, res) => {
  const { time } = req.body;
  const { userId } = req.session;
  console.log(time);
  try {
    const result = await Parametr.create({
      user_id_param: userId,
      time,
    });
    const statistic = await Parametr.findAll({
      where: { user_id_param: userId },
    });
    res.json({ statistic });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

chartBarRouter.get('/chartbar', async (req, res) => {
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

module.exports = chartBarRouter;
