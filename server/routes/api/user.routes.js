const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error('Ошибка при извлечении пользователей:', err);
      res.status(500).json({ error: 'Ошибка при извлечении пользователей' });
    } else {
      res.json(users);
    }
  });
});

module.exports = router;