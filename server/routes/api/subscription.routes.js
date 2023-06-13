const subscriptionRouter = require('express').Router();
const { Subscription } = require('../../db/models');

subscriptionRouter.post('/api/subscribe', async (req, res) => {
  const { userId } = req.body;

  try {
    // Создание подписки в базе данных
    const subscription = await Subscription.create({ userId });

    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

module.exports = subscriptionRouter;
