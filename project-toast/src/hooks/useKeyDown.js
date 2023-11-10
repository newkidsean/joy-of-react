import React from "react";

const useKeyDown = (key, handleEvent) => {

  React.useEffect(() => {
    const handleKeyboardEVent = (e) => {
      if (e.code === key) {
        handleEvent();
      }
    }

    window.addEventListener('keydown', handleKeyboardEVent);

    return () => {
      window.removeEventListener('keydown', handleKeyboardEVent);
    }
  }, [key, handleEvent]);
};

export default useKeyDown;