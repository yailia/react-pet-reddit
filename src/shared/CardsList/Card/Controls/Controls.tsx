import React from 'react';
import { ComentsButton } from './ComentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Controls() {
  return (
    <div className={ styles.controls }>
      <KarmaCounter />
      <ComentsButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
