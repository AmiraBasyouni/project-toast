import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

// Toast Renderer
function Toast({ children, variant, index }) {
  const Tag = ICONS_BY_VARIANT[variant];
  const { dismissToast } = React.useContext(ToastContext);

  if (Tag === undefined) {
    throw new Error('Toast Component: variant is undefined');
  }

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {/*Variant SVG icon*/}
        <Tag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>`${variant} - `</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => dismissToast(index)}
      >
        <X size={24} />
        {/*<VisuallyHidden>Dismiss message</VisuallyHidden>*/}
      </button>
    </div>
  );
}

export default Toast;
