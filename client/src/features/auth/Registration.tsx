import React, { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { register } from './authSlice';
import style from './styles.module.css';
import logo from './logo.svg';
import './styles.css';

// import { useForm } from 'react-hook-form';

function Registration(): JSX.Element {
  // const { register, handleSubmit } = useForm();
  // {...register('name', { required: true })}

  const [login, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPassword2] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [strength, setStrength] = useState('');

  const strengthLabels = ['weak', 'medium', 'strong'];

  const getStrength = (passwordCheck: string): void => {
    let strengthIndicator = -1;

    let upper = false;
    let lower = false;
    let numbers = false;

    for (let index = 0; index < passwordCheck.length; index += 1) {
      const char = passwordCheck.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;

        strengthIndicator += 1;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;

        strengthIndicator += 1;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;

        strengthIndicator += 1;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? '');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    getStrength(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const dispatchResult = await dispatch(
        register({
          login,
          email,
          password,
          passwordRepeat,
        })
      );

      if (register.fulfilled.match(dispatchResult)) {
        navigate('/');
      }
    },
    [dispatch, login, navigate, email, password, passwordRepeat]
  );

  return (
    <div>
      <div className={style.containerForm}>
        <div className={style.login_card}>
          <img src={logo} alt="logo" />
          <h2>Sign Up</h2>
          <form className={style.login_form} onSubmit={handleSubmit}>
            <div className={style.username}>
              <input
                className={style.control}
                type="text"
                name="name"
                placeholder="Имя"
                onChange={(e) => setName(e.target.value)}
              />
              <div id={style.spinner} className={style.spinner} />
            </div>
            <div className={style.username}>
              <input
                className={style.control}
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id={style.spinner} className={style.spinner} />
            </div>
            <input
              name="password"
              spellCheck="false"
              className={style.control}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              name="password"
              spellCheck="false"
              className={style.control}
              type="password"
              placeholder="Repeat password"
              onChange={(e) => setPassword2(e.target.value)}
            />

            <div className={`bars ${strength}`} />

            <div className={style.strength}>
              {strength && <>{strength} password</>}
            </div>
            <button className={style.control} type="submit">
              JOIN NOW
            </button>
          </form>
        </div>
        {/* <div className={style.athlete_svg}>
      </div> */}
      </div>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Почта"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password1"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="password2"
            placeholder="Повторите пароль"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <div>
            <button type="submit">Зарегистрироваться</button>
          </div>
        </div>
      </form> */}
    </div>
  );
}

export default Registration;
