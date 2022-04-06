import React from 'react';
import { generateId } from '../../../../utils/react/getRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons/MenuIcon';
import { GenericList } from '../../GenericList';
import styles from './menu.css';

const list = [
  {
    text: 'Комментарии',
    className: 'menuItem',
    href: '#comments'
  },
  {
    text: 'Комментарии',
    className: 'menuItem',
    href: '#comments'
  },
  {
    text: 'Комментарии',
    className: 'menuItem',
    href: '#comments'
  }
].map(generateId)

export function Menu() {
  const [open, isOpen] = React.useState(false)
  return (
    <div className={ styles.menu }>
      <Dropdown 
        button={
          <button className={styles.menuButton} onClick={() => isOpen(!open)}>
            <MenuIcon />
          </button>
        }
        isOpen = {open}
      > 
        <div className={styles.dropdown}>
          <GenericList list={list} />
          <button onClick={() => isOpen(!open)} className={styles.closeButton}>Закрыть</button>
        </div>
      </Dropdown>
    </div>
  );
}
