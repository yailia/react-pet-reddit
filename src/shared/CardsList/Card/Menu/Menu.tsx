import React from 'react';
import { EIcon } from '../../../../enums/EIcon';
import { Dropdown } from '../../../Dropdown';
import { Icon } from '../../../Icon/Icon';
import { Text } from '../../../Text';
import { EColor } from '../../../../enums/EColor';
import { MenuItemsList } from './MenuItemsList';
import styles from './menu.css';

export function Menu() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        <Icon name={EIcon.Menu} />
        <div id='dropdown-root'></div>
      </button>
      <Dropdown>
        <div className={styles.dropdown}>
          <MenuItemsList />
          <button onClick={() => setIsOpen(!isOpen)} className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColor.gray66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
