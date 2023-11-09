import React, { useContext, useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  // const [messageText, setMessageText] = useState('');
  // const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  // const [toastStack, setToastStack] = useState([]);
  const {
    variant,
    messageText,
    handleMessageText,
    handleRadio,
    handlePopToast } = useContext(ToastContext);
  // const handleMessageText = (event) => {
  //   setMessageText(event.target.value);
  // };
  // const handleRadio = (event) => {
  //   setVariant(event.target.value);
  // }
  // const handleDismissToast = (id) => {
  //   const newToastStack = toastStack.filter(toast => toast.id !== id);
  //   setToastStack(newToastStack);
  // }
  // const handlePopToast = (event) => {
  //   event.preventDefault()
  //   if (!messageText) return;

  //   setToastStack([...toastStack, { message: messageText, variant, id: crypto.randomUUID() }]);
  //   setMessageText('');
  //   setVariant(VARIANT_OPTIONS[0]);
  // };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* <ToastShelf toastStack={toastStack} handleDismissToast={handleDismissToast} /> */}
      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={messageText} onChange={handleMessageText} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(opt => (
              <label htmlFor={`variant-${opt}`} key={`variant-${opt}`}>
                <input
                  id={`variant-${opt}`}
                  type="radio"
                  name="variant"
                  value={opt}
                  onChange={handleRadio}
                  checked={variant === opt}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
