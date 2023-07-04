require('dotenv').config();

const express = require('express');
// const path = require('path');
const expressConfig = require('./config/express');

// импортируем роутеры (там лежат наши ручки)
const authRouter = require('./routes/api/auth.routes');
const trainerRouter = require('./routes/api/trainer.routes');
const sportsmanRouter = require('./routes/api/sportsman.routes');
const updatRouter = require('./routes/api/updat.routes');
const subscribeRouter = require('./routes/api/subscription.routes');
const initCoachRouter = require('./routes/api/initCoach.routes');
const chartBarRouter = require('./routes/api/charbar.routes');
const comentsRouter = require('./routes/api/cometnts.routes');

const app = express();
const PORT = process.env.PORT ?? 4000;

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры
app.use('/api/auth', authRouter);
app.use('/api/trainerpage', trainerRouter);
app.use('/api', sportsmanRouter);
app.use('/api/updata', updatRouter);
app.use('/api', subscribeRouter);
app.use('/api', initCoachRouter);
app.use('/api', chartBarRouter);
app.use('/api', comentsRouter);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, _next) => {
  // eslint-disable-next-line no-console
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/public/index.html'));
// });

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`server started at ${PORT}`));
