import React from 'react';
import styles from './modal.module.css';

function Modal({ active, setActive, children }): JSX.Element {
  return (
    <div
    className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `${styles.modal__content} ${styles.active}` : styles['modal__content']}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
