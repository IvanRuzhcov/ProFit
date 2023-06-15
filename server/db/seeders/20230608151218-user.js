const bcrypt = require('bcrypt');
const {
  User,
  Parametr,
  Certificate,
  Experience,
  File,
} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate(
      [
        {
          login: 'Vanya',
          name: 'Иван Рыжков',
          profilePicture:
            'https://sun9-28.userapi.com/impg/SYZ2CF-J8sdkgqIU8A43nZ9okVkvzqcUZLV3MQ/AiyFfNv1RkM.jpg?size=403x604&quality=95&sign=b5bf4f0b4a807c2ff4f7e2430ae52a08&c_uniq_tag=Rkrsvel1skoxYVya9xzhF7i3K6cWaKoNJyI3XbSvk2g&type=album',
          password: await bcrypt.hash('1234', 5),
          email: 'vanya.ruzhcov@gmail.com',
          status: 'sportsman',
          online: true,
          description: 'Я самый сильный ну типа ',
          city: 'Санкт-Петербург',
          vertification: true,
          Parametrs: [
            {
              weight: 90,
              user_id_param: 1,
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
          profilePicture:
            'https://sun9-10.userapi.com/impf/GXjf4CEd5qtqvof7U3KZF5UDerfzaxZYIaLnmQ/btrKs4qVLhA.jpg?size=510x510&quality=96&sign=1a00078ba2920131df6b1af9187ce4cb&c_uniq_tag=lPL8Uk_9o2y_FVShtBbX9rudf3U0bjKk0xs7GZTEbMI&type=album',
          login: 'Maxim',
          name: 'Максим Бец',
          password: await bcrypt.hash('1234', 5),
          email: 'maxim.bes@gmail.com',
          status: 'sportsman',
          online: true,
          description:
            'Я тут по приколу но могу как написать регу логу на редаксе тул кит !) ',
          city: 'Санкт-Петербург',
          vertification: true,
          Parametrs: [
            {
              weight: 70,
              user_id_param: 3,
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
          profilePicture:
            'https://sun9-22.userapi.com/impg/eMa1WKhBfRMBtDSlCMTG-h4apaeHkWW9Ty1rEQ/PcuYxpBqU9s.jpg?size=2160x2160&quality=96&sign=a8db1806e0ce29bac4ca3596bf1ac6f0&type=album',
          login: 'Sofa',
          name: 'София Жирнова',
          password: await bcrypt.hash('1234', 5),
          email: 'sofii@gmail.com',
          status: 'sportsman',
          description: 'Я прихожу покрасоваться и показать какая я красивая ',
          city: 'Санкт-Петербург',
          Parametrs: [
            {
              weight: 45,
              user_id_param: 2,
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
          profilePicture: 'blob:https://web.telegram.org/3bfd1e07-8e7e-4827-abca-612d30e01db0',
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
            },
          ],
        },
      ],
      {
        include: [Parametr],
      },
    );
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
    await Certificate.destroy({ truncate: { cascade: true } });
    await Experience.destroy({ truncate: { cascade: true } });
    await File.destroy({ truncate: { cascade: true } });
  },
};
