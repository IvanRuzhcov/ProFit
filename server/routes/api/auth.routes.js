const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

authRouter.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name && password && email) {
      let user = await User.findOne({ where: { name } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({ name, password: hash, email });
        req.session.user = user.id;
        res.locals.user = { name: user.name, id: user.id };
        res
          .status(201)
          .json({ id: user.id, name: user.name, email: user.email });
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = authRouter;
