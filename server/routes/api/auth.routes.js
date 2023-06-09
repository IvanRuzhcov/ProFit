const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

authRouter.post('/register', async (req, res) => {
  const { login, email, password } = req.body;
  console.log(login, email, password);
  try {
    if (login && password && email) {
      let user = await User.findOne({ where: { login } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({ login, password: hash, email });
        req.session.user = user.id;
        res.locals.user = { login: user.login, id: user.id };
        res
          .status(201)
          .json({ id: user.id, login: user.login, email: user.email });
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

module.exports = authRouter;
