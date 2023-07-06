const userRouter = require('express').Router();
const { User } = require('../../db/models');

userRouter.get('/user', async (req, res) => {
  try {
    const userInit = await User.findAll();
    res.status(200).json(userInit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = userRouter;
