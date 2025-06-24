import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastStack } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastStack.map((toast, index) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast key={toast.id} variant={toast.variant} toastId={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
