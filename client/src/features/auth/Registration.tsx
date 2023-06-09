import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { register } from './authSlice';

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

  const handleSubmit = React.useCallback(
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
      <form onChange={handleSubmit}>
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
      </form>
    </div>
  );
}

export default Registration;
