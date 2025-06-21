import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // a stack of Toast metadata
  const [stack, setStack] = React.useState([]);

  const createToast = React.useCallback(
    (variant, message) => {
      // mutable stack
      const nextStack = [...stack];
      // adding Toast to our mutable stack
      nextStack.push({ variant, content: message, id: Math.random() });
      // updating our stack to reflect changes made
      setStack(nextStack);
    },
    [stack]
  );

  const removeToast = React.useCallback(
    (index) => {
      const nextStack = [...stack];
      nextStack.splice(index, 1);
      setStack(nextStack);
    },
    [stack]
  );

  const value = React.useMemo(() => {
    return { stack, createToast, removeToast };
  }, [stack, createToast, removeToast]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default React.memo(ToastProvider);
