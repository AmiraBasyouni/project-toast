import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  // dismissToast function
  function dismissToast(ToastId) {
    const nextToastStack = toastStack.filter((toast) => toast.id !== ToastId);
    setToastStack(nextToastStack);
  }

  // createToast function
  function createToast(variant, message) {
    const nextToastStack = [
      ...toastStack,
      { id: Math.random(), variant, message },
    ];
    setToastStack(nextToastStack);
  }

  // clearToasts function
  function clearToasts() {
    setToastStack([]);
  }

  // Provider Values
  const value = { createToast, dismissToast, clearToasts, toastStack };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
