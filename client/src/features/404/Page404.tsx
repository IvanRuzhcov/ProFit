import React from 'react';
import style from './style.module.css';

function Page404(): JSX.Element {
  return (
    <div className={style.content}>
      <svg className={style.svgs} viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%">
            404
          </text>
        </symbol>

        <g className={style.g_ants}>
          <use xlinkHref="#s-text" className={style.text} />
          <use xlinkHref="#s-text" className={style.text} />
          <use xlinkHref="#s-text" className={style.text} />
          <use xlinkHref="#s-text" className={style.text} />
          <use xlinkHref="#s-text" className={style.text} />
        </g>
      </svg>

      <h1 className={style.h_text}>Page Not Found</h1>
      <a className={style.error} href="/">
        Back to Home
      </a>
    </div>
  );
}

export default Page404;
