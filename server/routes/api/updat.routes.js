const updateRouter = require('express').Router();
const { User } = require('../../db/models');

updateRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name, description, city, email,
    } = req.body;
    console.log(req.body);
    const race = await User.findOne({ where: Number(id) });
    console.log(race, 'back');
    race.name = name;
    race.city = city;
    race.email = email;
    race.description = description;

    race.save();
    res.status(201).json(race);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = updateRouter;
