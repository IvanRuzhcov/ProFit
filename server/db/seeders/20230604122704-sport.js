const { Sport } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Sport.bulkCreate([
      { id: 1, sport: 'Футбол' },
      { id: 2, sport: 'Баскетбол' },
      { id: 3, sport: 'Теннис' },
      { id: 4, sport: 'Плавание' },
      { id: 5, sport: 'Хоккей' },
      { id: 6, sport: 'Бейсбол' },
      { id: 7, sport: 'Гольф' },
      { id: 8, sport: 'Волейбол' },
      { id: 9, sport: 'Бокс' },
      { id: 10, sport: 'Американский футбол' },
      { id: 11, sport: 'Бадминтон' },
      { id: 12, sport: 'Борьба' },
      { id: 13, sport: 'Гимнастика' },
      { id: 14, sport: 'Скейтбординг' },
      { id: 15, sport: 'Автоспорт' },
      { id: 16, sport: 'Прыжки в воду' },
      { id: 17, sport: 'Альпинизм' },
      { id: 18, sport: 'Армрестлинг' },
      { id: 19, sport: 'Бокс' },
      { id: 20, sport: 'Велоспорт' },
      { id: 21, sport: 'Гимнастика' },
      { id: 22, sport: 'Гольф' },
      { id: 23, sport: 'Дартс' },
      { id: 24, sport: 'Каратэ' },
      { id: 25, sport: 'Легкая атлетика' },
      { id: 26, sport: 'Прыжки с парашютом' },
      { id: 27, sport: 'Прыжки на батуте' },
      { id: 28, sport: 'Теннис' },
      { id: 29, sport: 'Фехтование' },
      { id: 30, sport: 'Хоккей' },
      { id: 31, sport: 'Шахматы' },
      { id: 32, sport: 'Шорт-трек' },
      { id: 33, sport: 'Экстрим' },
      { id: 34, sport: 'Йога' },
      { id: 35, sport: 'Картинг' },
      { id: 36, sport: 'Киберспорт' },
      { id: 37, sport: 'Фитнес' },
      { id: 38, sport: 'Бодибилдинг' },
      { id: 67, sport: 'Тхэквондо' },
      { id: 68, sport: 'Водное поло' },
      { id: 69, sport: 'Вольная борьба' },
      { id: 70, sport: 'Гребля на байдарках и каноэ' },
      { id: 71, sport: 'Дзюдо' },
      { id: 72, sport: 'Единоборства смешанные' },
      { id: 73, sport: 'Зимняя пентатлон' },
      { id: 74, sport: 'Ипподромные скачки' },
      { id: 75, sport: 'Кёрлинг' },
      { id: 76, sport: 'Кроссфит' },
      { id: 77, sport: 'Лыжные гонки' },
      { id: 78, sport: 'Мотокросс' },
      { id: 79, sport: 'Настольный теннис' },
      { id: 80, sport: 'Паркур' },
      { id: 81, sport: 'Пауэрлифтинг' },
      { id: 82, sport: 'Плавание на дистанции' },
      { id: 83, sport: 'Регби-лига' },
      { id: 84, sport: 'Регби-союз' },
      { id: 85, sport: 'Самбо' },
      { id: 86, sport: 'Серфинг' },
      { id: 87, sport: 'Сноуборд' },
      { id: 88, sport: 'Спортивная гимнастика' },
      { id: 89, sport: 'Сумо' },
      { id: 90, sport: 'Триатлон' },
      { id: 91, sport: 'Ушу' },
      { id: 92, sport: 'Фигурное катание' },
      { id: 93, sport: 'Фрисби' },
      { id: 94, sport: 'Художественная гимнастика' },
      { id: 95, sport: 'Шашки' },
      { id: 96, sport: 'Шейпинг' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Sport.destroy({ truncate: { cascade: true } });
  },
};
