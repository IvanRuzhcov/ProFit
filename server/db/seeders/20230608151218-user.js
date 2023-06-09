const bcrypt = require('bcrypt');
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        login: 'Vanya',
        password: await bcrypt.hash('1234', 5),
        email: 'vanya.ruzhcov@gmail.com',
        status: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
