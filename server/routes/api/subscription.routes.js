const subscriptionRouter = require('express').Router();
const { Subscription } = require('../../db/models');

subscriptionRouter.post('/subscribe', async (req, res) => {
  const { userId } = req.body;
  const sportsmanId = req.session.userId;

  try {
    const sub = await Subscription.findOne({
      where: {
        sportsmen_id: sportsmanId,
        coach_id: userId,
      },
    });

    if (!sub) {
      const subscription = await Subscription.create({
        sportsmen_id: sportsmanId,
        coach_id: userId,
      });
      res.status(201).json(subscription);
    } else {
      await sub.destroy();
      res.status(204).json({ message: 'Subscription removed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});


module.exports = subscriptionRouter;
