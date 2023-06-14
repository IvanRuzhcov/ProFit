const subscriptionRouter = require('express').Router();
const { Subscription } = require('../../db/models');

subscriptionRouter.post('/subscribe', async (req, res) => {
  const { userId } = req.body;

  try {
    // Создание подписки в базе данных
    const subscription = await Subscription.create({
      sportsmenId: req.session.user.id,
      coatch: userId,
    });

    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});
subscriptionRouter.get('/subscribe', async (req, res) => {
  try {
    // Создание подписки в базе данных
    const subscription = await Subscription.create({
      sportsmenId: req.session.user.id,
      coatch: userId,
    });

    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});


module.exports = subscriptionRouter;
