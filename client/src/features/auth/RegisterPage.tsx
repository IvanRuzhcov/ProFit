import React, { ChangeEvent, useState } from 'react';
import style from './styles.module.css';
import logo from './logo.svg';
import './styles.css'

const strengthLabels = ['weak', 'medium', 'strong'];

export function RegisterPage(): JSX.Element {
  const [strength, setStrength] = useState('');

  
  const getStrength = (password: string): void => {
    console.log(password);

    let strengthIndicator = -1;

    let upper = false;
    let lower = false;
    let numbers = false;

    for (let index = 0; index < password.length; index += 1) {
      const char = password.charCodeAt(index);
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    getStrength(event.target.value);

    
  return (
    <div className={style.containerForm}>
      <div className={style.login_card}>
        <img src={logo} alt="logo" />
        <h2>Sign Up</h2>
        <form className={style.login_form}>
          <div className={style.username}>
            <input
              autoComplete="off"
              spellCheck="false"
              className={style.control}
              type="name"
              placeholder="Name"
            />
            <div id={style.spinner} className={style.spinner} />
          </div>
          <div className={style.username}>
            <input
              autoComplete="off"
              spellCheck="false"
              className={style.control}
              type="email"
              placeholder="Email"
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
            onChange={handleChange}
            
          />

          <div className={`bars ${strength}`}/>
           
          
          <div className={style.strength}>
            {strength && <>{strength} password</>}
          </div>
          <button className={style.control} type="button">
            JOIN NOW
          </button>
        </form>
      </div>
      {/* <div className={style.athlete_svg}>
      </div> */}
    </div>
  );
}
