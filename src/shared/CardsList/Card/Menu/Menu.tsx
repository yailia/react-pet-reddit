import React from 'react';
import { generateId } from '../../../../utils/react/getRandomIndex';
import { Dropdown } from '../../../Dropdown';
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
          <button className={ styles.menuButton} onClick={() => isOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
              <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
              <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
            </svg>
          </button>
        }
        isOpen = {open}
        onClose={() => console.log('closed')}
        onOpen={() => console.log('opened')}
      >
        <GenericList list={list} />
      </Dropdown>
    </div>
  );
}
