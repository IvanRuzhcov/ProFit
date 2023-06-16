const sportsmanRouter = require('express').Router();
const { Parametr, User } = require('../../db/models');
const fileuploadMiddeleware = require('../../middlewares/fileuploadMiddeleware');

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

sportsmanRouter.put('/sportsman', async (req, res) => {
  // const { weight } = req.body;
  // const { userId } = req.session;
  const { url } = req.files;
  const { id } = req.body;
  // const { idSportsman } = req.params;
  // console.log(url);
  try {
    if (url) {
      const newUrl = await fileuploadMiddeleware(url);
      const user = await User.findOne({ where: { id } });
      user.profilePicture = newUrl;
      user.save();
      res.json(user);
    }
    // res.status(500).json({ message: 'nouser' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = sportsmanRouter;
