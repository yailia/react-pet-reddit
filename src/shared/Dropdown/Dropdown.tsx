import React, { EventHandler, useRef } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';


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
  const node = document.querySelector('#dropdown-root');
  const ref = useRef<HTMLDivElement>(null)
  const rect = ref.current?.getBoundingClientRect();
  const top = rect ? rect.top + rect?.height : 0;
  const right = rect ? rect.width * 4 : 0;
  const position = {top: top , right: right};
  if(!node) return null;

  const handleOpen = () => {
    if(isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose())
  return (
        <div className={styles.container}>
          <div onClick={handleOpen} ref={ref}>
            { button }
          </div>
          {isDropdownOpen && (
            ReactDOM.createPortal((
              <div 
                className={styles.listContainer}
                style={position}
              >
                <div 
                  className={styles.list} 
                  onClick={() => setIsDropdownOpen(false)}
                >
                { children }
              </div>
            </div>
            ), node)
          )}
        </div>
      )
}
