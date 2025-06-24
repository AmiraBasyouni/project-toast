import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  // dismissToast function
  function dismissToast(ToastId) {
    const nextToastStack = toastStack.filter((toast) => toast.id !== ToastId);
    setToastStack(nextToastStack);
    console.log(nextToastStack);
  }

  // createToast function
  function createToast(variant, message) {
    const nextToastStack = [
      ...toastStack,
      { id: Math.random(), variant, message },
    ];
    setToastStack(nextToastStack);
  }

  // Provider Values
  const value = { createToast, dismissToast, toastStack };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
