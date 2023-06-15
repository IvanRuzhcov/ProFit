const subscriptionRouter = require("express").Router();
const { Subscription } = require("../../db/models");

subscriptionRouter.post("/subscribe", async (req, res) => {
  const { userId } = req.body;
  console.log(req.session.user.id, req.body);

  try {
    // const sub = await Subscription.fineOne({
    //   where: {
    //     sportsmen_id: req.session.user.id,
    //     coach_id: userId,
    //   },
    // });
    // if (!sub) {
    const subscription = await Subscription.create({
      sportsmen_id: req.session.user.id,
      coach_id: userId,
    });
    res.status(201).json(subscription);
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

module.exports = subscriptionRouter;
