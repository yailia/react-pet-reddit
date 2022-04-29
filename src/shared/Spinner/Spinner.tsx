import React from 'react';
import styles from './spinner.css';

export function Spinner() {
  return (
    <div className={styles.fade}>
    <div className={styles.spinnerWrp}>
      <div className={styles.ldsSpinner}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    </div>
  );
}
