import classNames from 'classnames';
import React from 'react';
import { EColor } from '../../../../../enums/EColor';
import { EIcon } from '../../../../../enums/EIcon';
import { Icon } from '../../../../Icon';
import { Text } from '../../../../Text';
import styles from './menuitemslist.css';


export function MenuItemsList() {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <Icon name={EIcon.Comment} size={35}/>
        <Text size={12} color={EColor.gray99}>Комментарии</Text>
      </li>
      <li className={styles.menuItem}>
        <Icon name={EIcon.Share} size={12}/>
        <Text size={12} color={EColor.gray99}>Поделиться</Text>
      </li>
      <li className={classNames(styles.menuItem, styles.menuItem_mobile)}>
        <Icon name={EIcon.Hide} size={12}/>
        <Text size={12} color={EColor.gray99}>Скрыть</Text>
      </li>
      <li className={styles.menuItem}>
        <Icon name={EIcon.Save} size={12}/>
        <Text size={12} color={EColor.gray99}>Сохранить</Text>
      </li>
      <li className={classNames(styles.menuItem, styles.menuItem_mobile)}>
        <Icon name={EIcon.Complain} size={12}/>
        <Text size={12} color={EColor.gray99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
