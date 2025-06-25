import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  // function: dismissToast
  function dismissToast(ToastId) {
    const nextToastStack = toastStack.filter((toast) => toast.id !== ToastId);
    setToastStack(nextToastStack);
  }

  // function: createToast
  function createToast(variant, message) {
    const nextToastStack = [
      ...toastStack,
      { id: Math.random(), variant, message },
    ];
    setToastStack(nextToastStack);
  }

  // function: clearToasts
  const clearToasts = React.useCallback(() => {
    setToastStack([]);
  }, []);

  // event: on escape, clear toastStack
  useEscapeKey(clearToasts);

  // Provider Values
  const value = { createToast, dismissToast, clearToasts, toastStack };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
