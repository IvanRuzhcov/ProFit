import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loginJoin, resetLoginFormError } from './authSlice'
import style from './styles.module.css';
import logo from './logo.svg';

function Login(): JSX.Element {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, setName] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state:RootState) => state.auth.loginFormError)

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


  const handleNameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
      // 332 очищаем ошибку
      dispatch(resetLoginFormError());
    },
    [dispatch]
  );

  const handlePasswordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      // 332 очищаем ошибку
      dispatch(resetLoginFormError());
    },
    [dispatch]
  );

  return (
    <div className={style.margin_form_login}>
    <div className={style.containerForm}>
        <div className="login_card animate__animated animate__bounceInLeft">
          <img src={logo} alt="logo" />
          <h2>Авторизоваться</h2>
          <form className={style.login_form} onSubmit={handleSubmit}>
            <div className={style.username}>
              <input
                className={style.control}
                type="text"
                name="name"
                placeholder="Имя"
                onChange={handleNameChange}
              />
              <div id={style.spinner} className={style.spinner} />
            </div>
            <input
              name="password"
              spellCheck="false"
              className={style.control}
              type="password"
              placeholder="Пароль"
              onChange={handlePasswordChange}
            />
            <button className={style.control} type="submit">
              ВОЙТИ
            </button>
            <div className={style.errorRegister}>{error}</div>
          </form>
        </div>
      </div>
      </div>
  );
}

export default Login;
