import classNames from 'classnames';
import React from 'react';
import { EColor } from '../../enums/EColor';
import styles from './text.css';

type TSizes = 10 | 12 | 14 | 16 | 20 | 28;

interface ITextProps {
  As?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
}

export function Text(props: ITextProps) {
  const { 
    As = 'span', 
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    color = EColor.black,
   } = props;

   const classes = classNames(
     styles[`s${size}`],
     styles[color],
     { [styles[`m${mobileSize}`]] : mobileSize },
     { [styles[`t${tabletSize}`]] : tabletSize },
     { [styles[`d${desktopSize}`]] :desktopSize },

   );
  return (
    <As className={ classes }>
      {children}
    </As>
  );
}
