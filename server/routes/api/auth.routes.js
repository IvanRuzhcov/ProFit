const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Certificate, File } = require('../../db/models');

authRouter.post('/register', async (req, res) => {
  const { login, email, password, status } = req.body;
  try {
    if (login && password && email && status) {
      let user = await User.findOne({ where: { login } });
      const userEmail = await User.findOne({ where: { email } });
      if (!user && !userEmail) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({
          login,
          password: hash,
          email,
          status,
          profilePicture:
            'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        });
        req.session.userId = user.id;
        res.locals.user = { login: user.login, id: user.id };
        res.status(201).json({
          id: user.id,
          login: user.login,
          name: user.name,
          email: user.email,
          status: user.status,
          online: user.online,
          description: user.description,
          city: user.city,
          vertification: user.vertification,
          profilePicture: user.profilePicture,
          Certificates: user.Certificates,
          Files: user.Files,
        });
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

authRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;
  const existingUser = await User.findOne({
    where: { login },
    include: [{ model: Certificate }, { model: File }],
    order: [[File, 'createdAt', 'DESC']],
  });

  // проверка что пользователь есть и пароли совпадают
  if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
    req.session.userId = existingUser.id;
    req.session.user = existingUser;
    res.json({
      id: existingUser.id,
      login: existingUser.login,
      name: existingUser.name,
      email: existingUser.email,
      status: existingUser.status,
      online: existingUser.online,
      description: existingUser.description,
      city: existingUser.city,
      vertification: existingUser.vertification,
      profilePicture: existingUser.profilePicture,
      Files: existingUser.Files,
      Certificates: existingUser.Certificates,
    });
  } else {
    res.status(401).json({
      error: 'Пароли не совпадают или такого пользователя не существует',
    });
  }
});

authRouter.get('/verification', async (req, res) => {
  if (req.session.userId) {
    const userVer = await User.findOne({
      where: { id: req.session.userId },
      include: [{ model: Certificate }, { model: File }],
      order: [[File, 'createdAt', 'DESC']],
    });
    res.json({
      isLoggedIn: true,
      user: {
        id: userVer.id,
        login: userVer.login,
        name: userVer.name,
        email: userVer.email,
        status: userVer.status,
        online: userVer.online,
        description: userVer.description,
        city: userVer.city,
        vertification: userVer.vertification,
        profilePicture: userVer.profilePicture,
        Certificates: userVer.Certificates,
        Files: userVer.Files,
      },
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

authRouter.post('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

module.exports = authRouter;
