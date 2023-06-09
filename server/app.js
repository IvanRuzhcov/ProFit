require('dotenv').config();

const express = require('express');
// const path = require('path');
const expressConfig = require('./config/express');

// импортируем роутеры (там лежат наши ручки)
const authRouter = require('./routes/api/auth.routes');

const app = express();
const PORT = process.env.PORT ?? 4000;

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры
app.use('api/auth', authRouter);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, _next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/public/index.html'));
// });

app.listen(PORT, () => console.log(`server started at ${PORT}`));
