import { ChangeEvent, useState } from "react";
import style from "./styles.module.css";
import logo from "./logo.svg";

const strengthLabels = ["weak", "medium", "strong"];

export function RegisterPage():JSX.Element {
  const [strength, setStrength] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getStrength = (password: string) => {
    console.log(password);

    let strengthIndicator = -1;

    let upper = false;
      let lower = false;
      let numbers = false;

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < password.length; index++) {
      const char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        // eslint-disable-next-line no-plusplus
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        // eslint-disable-next-line no-plusplus
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        // eslint-disable-next-line no-plusplus
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    getStrength(event.target.value);

  return (
      <>
       <div className={style.login_card}>
    <img src={logo} />
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
        <div id={style.spinner} className={style.spinner}></div>
      </div>
      <div className={style.username}>
        <input
          autoComplete="off"
          spellCheck="false"
          className={style.control}
          type="email"
          placeholder="Email"
        />
        <div id={style.spinner} className={style.spinner}></div>
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

      <div className={`${style.bars} ${strength}`}>
        <div></div>
      </div>
      <div className={style.strength}>{strength && <>{strength} password</>}</div>
      <button className={style.control} type="button">
        JOIN NOW
      </button>
    </form>
  </div>
  <div className={style.athlete_svg}>
      <img src="/athlete.svg" />
      </div>
      </>
  );
}