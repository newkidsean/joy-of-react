import React, { useState } from 'react';
import useKeyDown from '../../hooks/useKeyDown';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [messageText, setMessageText] = useState('');
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [toastStack, setToastStack] = useState([]);
  const handleMessageText = (event) => {
    setMessageText(event.target.value);
  };
  const handleRadio = (event) => {
    setVariant(event.target.value);
  }
  const handleDismissToast = (id) => {
    const newToastStack = toastStack.filter(toast => toast.id !== id);
    setToastStack(newToastStack);
  }
  const handlePopToast = (event) => {
    event.preventDefault()
    if (!messageText) return;

    setToastStack([...toastStack, { message: messageText, variant, id: crypto.randomUUID() }]);
    setMessageText('');
    setVariant(VARIANT_OPTIONS[0]);
  };
  const handleDismissToastAtOnce = () => setToastStack([]);


  useKeyDown('Escape', handleDismissToastAtOnce);

  return (
    <ToastContext.Provider
      value={{
        variant,
        messageText,
        toastStack,
        setToastStack,
        handleDismissToast,
        handleMessageText,
        handleRadio,
        handlePopToast
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
