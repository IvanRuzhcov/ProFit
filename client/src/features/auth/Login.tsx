import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { loginJoin } from './authSlice'

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      //  делаем диспатч санка
      const dispatchResult = await dispatch(
        loginJoin({
          login,
          password,
        })
      );

      // проверяем, что санк login зарезолвился успешно
      if (loginJoin.fulfilled.match(dispatchResult)) {
        navigate('/');
      }

      // выводим в консоль ошибку если санк login зареджектился
      if (loginJoin.rejected.match(dispatchResult)) {
        console.error(dispatchResult.error.message);
      }
    },
    [dispatch, login, navigate, password]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Зарегистрироваться</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
