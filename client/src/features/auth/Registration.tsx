import React from 'react';
import { useForm } from 'react-hook-form';

function Registration(): JSX.Element {
  const { register, handleSubmit } = useForm();

  console.log(register);
  


  return (
    <div>
      <form>
        <div>
          <input type="text" {...register('name', { required: true })} name="name" placeholder="Имя" />
          <input type="email" {...register('email', { required: true })} name="email" placeholder="Почта" />
          <input type="password" {...register('password1', { required: true })} name="password1" placeholder="Пароль" />
          <input
            type="password"
            {...register('password2', { required: true })}
            name="password2"
            placeholder="Повторите пароль"
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
