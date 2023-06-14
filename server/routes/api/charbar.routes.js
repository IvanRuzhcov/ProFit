const chartBarRouter = require('express').Router();
const { ParameterChartBar } = require('../../db/models');

chartBarRouter.post('/chartbar', async (req, res) => {
  const { time } = req.body;
  const { userId } = req.session;
  console.log(time);
  try {
    const result = await ParameterChartBar.create({
      user_id_ChartBar: userId,
      time,
    });
    const chartbar = await ParameterChartBar.findAll({
      where: { user_id_ChartBar: userId },
    });
    res.json({ chartbar });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

chartBarRouter.get('/chartbar', async (req, res) => {
  const { userId } = req.session;
  try {
    const statistic = await ParameterChartBar.findAll({
      where: { user_id_ChartBar: userId },
    });
    res.json(statistic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = chartBarRouter;
