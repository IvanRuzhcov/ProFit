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
        req.session.userId = user.id;
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

authRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;
  const existingUser = await User.findOne({ where: { login } });

  // проверка что пользователь есть и пароли совпадают
  if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
    req.session.userId = existingUser.id;
    req.session.user = existingUser;
    res.json({ id: existingUser.id, login: existingUser.login });
  } else {
    res.status(401).json({
      error: 'Пароли не совпадают или такого пользователя не существует',
    });
  }
});

authRouter.get('/verification', async (req, res) => {
  // const userId = req.session.user;
  // const userId = req.session.user;

  // if (userId) {
  //   console.log(userId, '<<<===');
  //   const user = await User.findOne({ where: { id: userId } });
  //   res.json(user);
  //   console.log('user', user);
  // } else {
  //   res.json({ message: 'error' });
  // }
  const { user } = res.locals;
  console.log(user);
  if (user) {
    res.json({
      isLoggedIn: true,
      user: {
        id: user.id,
        login: user.login,
      },
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

module.exports = authRouter;
