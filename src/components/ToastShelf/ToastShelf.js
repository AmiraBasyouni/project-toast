import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { stack } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {stack.map((toast, index) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} index={index}>
            {toast.content}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
