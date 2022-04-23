import React from 'react';
import { EIcon } from '../../../../enums/EIcon';
import { generateId } from '../../../../utils/react/getRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { Icon } from '../../../Icon/Icon';
import { GenericList } from '../../../../utils/GenericList';
import { Text } from '../../../Text';
import { EColor } from '../../../../enums/EColor';
import { MenuItemsList } from './MenuItemsList';
import styles from './menu.css';

export function Menu() {
  const [open, isOpen] = React.useState(false)
  return (
    <div className={ styles.menu }>
      <Dropdown 
        button={
          <button className={styles.menuButton} onClick={() => isOpen(!open)}>
            <Icon name={EIcon.Menu} />
          </button>
        }
      > 
        <div className={styles.dropdown}>
          <MenuItemsList />
          <button onClick={() => isOpen(!open)} className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColor.gray66}>
              Закрыть
            </Text> 
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
