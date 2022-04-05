import React from 'react';
import styles from './dropdown.css';


const NOOP = () => {};

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  const handleOpen = () => {
    if(isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose())
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div 
            className={styles.list} 
            onClick={() => setIsDropdownOpen(false)}
          >
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
