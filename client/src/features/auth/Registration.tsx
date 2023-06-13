import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import styled from '@emotion/styled';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { register, resetRegisterFormError } from './authSlice';
import style from './styles.module.css';
import logo from './logo.svg';
import './styles.css';

function Registration(): JSX.Element {

  const [login, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPassword2] = useState('');
  const [statusUser, setStatusUser] = useState('');
  const [strength, setStrength] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useSelector((state: RootState) => state.auth.registerFormError);

  const strengthLabels = ['weak', 'medium', 'strong'];

  const handleChange = (event: SelectChangeEvent): void => {
    setStatusUser(event.target.value);
  };

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

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const dispatchResult = await dispatch(
        register({
          login,
          email,
          status: statusUser,
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

  const handleNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
      dispatch(resetRegisterFormError());
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      getStrength(event.target.value);
      setPassword(event.target.value);
      dispatch(resetRegisterFormError());
    },
    [dispatch]
  );

  const handlePasswordRepeatChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword2(event.target.value);
      dispatch(resetRegisterFormError());
    },
    [dispatch]
  );

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      dispatch(resetRegisterFormError());
    },
    [dispatch]
  );

  return (
    <div>
      <div className={style.containerForm}>
        <div className="login_card animate__animated animate__bounceInLeft">
          <img src={logo} alt="logo" />
          <h2>Регистрация</h2>
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
            <div className={style.username}>
              <input
                className={style.control}
                type="Email"
                name="email"
                placeholder="Почта"
                onChange={handleEmailChange}
              />
              <div id={style.spinner} className={style.spinner} />
            </div>
            <input
              spellCheck="false"
              className={style.control}
              // type="password"
              placeholder="Пароль"
              onChange={handlePasswordChange}
            />
            <input
              spellCheck="false"
              className={style.control}
              type="password"
              placeholder="Повторите пароль"
              onChange={handlePasswordRepeatChange}
            />
            <div className={style.select_status}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  fullWidth
                  sx={{
                    '& label.Mui-focused': {
                      color: 'black',
                    },
                  }}
                >
                  <InputLabel id="demo-multiple-name-label">
                    Выберите статус
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={statusUser}
                    label="Выберите статус"
                    onChange={handleChange}
                    sx={{
                      '&.MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#9e9e9e',
                        },
                        '&:hover fieldset': {
                          borderColor: '#9e9e9e',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#9e9e9e',
                        },
                      },
                    }}
                  >
                    <MenuItem value="sportsman">Спортсмен</MenuItem>
                    <MenuItem value="coach">Тренер</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={`bars ${strength}`} />
            <div className={style.strength}>
              {strength && <>{strength} password</>}
            </div>

            <button className={style.control} type="submit">
              Зарегистрироваться
            </button>
            <div className={style.errorRegister}>{error}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
