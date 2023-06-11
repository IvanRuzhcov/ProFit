const bcrypt = require('bcrypt');
const {
  User, Parametr, Certificate, Experience, File,
} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          id: 1,
          login: 'Vanya',
          name: 'Иван Рыжков',
          profilePicture:
          'https://sun9-28.userapi.com/impg/SYZ2CF-J8sdkgqIU8A43nZ9okVkvzqcUZLV3MQ/AiyFfNv1RkM.jpg?size=828x1242&quality=95&sign=ee669a94261a632b2f3b0411d4ddbf2b&type=album',
          password: await bcrypt.hash('1234', 5),
          email: 'vanya.ruzhcov@gmail.com',
          status: 'coach',
          online: true,
          description: 'Я самый сильный ну типа ',
          city: 'Санкт-Петербург',
          vertification: true,
          Parametrs: [
            {
              weight: 90,
              user_id_param: 1,
              height: 185,
            },
          ],
        },
      ],
      {
        include: [Parametr],
      },
    );

    await Certificate.bulkCreate([
      {
        user_id_cert: 1,
        url_cert:
          'https://fitness-pro.ru/upload/iblock/987/987eb0fd55f6f8ffb05b5f3b87c26604.jpg',
      },
    ]);
    await Experience.bulkCreate([
      {
        user_id_exp: 1,
        description: 'я работал там то там то',
        date: '2018-2023',
      },
    ]);

    await File.bulkCreate([
      {
        id: 1,
        url: 'https://www.youtube.com/watch?v=VSzEycJUBaY',
        user_id_files: 1,
        description: 'тут мы качаем преес',
      },
    ]);

    await User.bulkCreate(
      [
        {
          id: 3,
          profilePicture:
            'blob:https://web.telegram.org/44399c8a-ff7e-4c48-9f21-f19321121859',
          login: 'Maxim',
          name: 'Максим Бец',
          password: await bcrypt.hash('1234', 5),
          email: 'maxim.bes@gmail.com',
          status: 'coach',
          online: true,
          description: 'Я тут по приколу но могу как написать регу логу на редаксе тул кит !) ',
          city: 'Санкт-Петербург',
          vertification: true,
          Parametrs: [
            {
              weight: 70,
              user_id_param: 3,
              height: 180,
            },
          ],
        },
      ],
      {
        include: [Parametr],
      },
    );

    await Certificate.bulkCreate([
      {
        user_id_cert: 3,
        url_cert:
          'https://fitness-pro.ru/upload/iblock/987/987eb0fd55f6f8ffb05b5f3b87c26604.jpg',
      },
    ]);
    await Experience.bulkCreate([
      {
        user_id_exp: 3,
        description: 'я работал там то там то',
        date: '2018-2023',
      },
    ]);

    await File.bulkCreate([
      {
        id: 3,
        url: 'https://www.youtube.com/watch?v=OfmzNF4QFR8',
        user_id_files: 3,
        description: 'тут мы качаем преес',
      },
    ]);

    await User.bulkCreate(
      [
        {
          id: 2,
          profilePicture:
            'https://sun9-22.userapi.com/impg/eMa1WKhBfRMBtDSlCMTG-h4apaeHkWW9Ty1rEQ/PcuYxpBqU9s.jpg?size=2160x2160&quality=96&sign=a8db1806e0ce29bac4ca3596bf1ac6f0&type=album',
          login: 'Sofa',
          name: 'София Жирнова',
          password: await bcrypt.hash('1234', 5),
          email: 'sofii@gmail.com',
          status: 'sportsman',
          description: 'Я хочу стать сильной ',
          city: 'Санкт-Петербург',
          Parametrs: [
            {
              weight: 45,
              user_id_param: 2,
              height: 160,
            },
          ],
        },
      ],
      {
        include: [Parametr],
      },
    );

    await User.bulkCreate(
      [
        {
          id: 4,
          profilePicture:
            'blob:https://web.telegram.org/3bfd1e07-8e7e-4827-abca-612d30e01db0',
          login: 'Konstantin',
          name: 'Константин ',
          password: await bcrypt.hash('1234', 5),
          email: 'Konstantin@gmail.com',
          status: 'sportsman',
          description: 'Я хочу гнуть гвозди ',
          city: 'Санкт-Петербург',
          Parametrs: [
            {
              weight: 70,
              user_id_param: 4,
              height: 189,
            },
          ],
        },
      ],
      {
        include: [Parametr],
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
    await Certificate.destroy({ truncate: { cascade: true } });
    await Experience.destroy({ truncate: { cascade: true } });
    await File.destroy({ truncate: { cascade: true } });
  },
};
