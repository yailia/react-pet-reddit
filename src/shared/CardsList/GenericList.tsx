import React from "react";

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string
}

const NOOP = () => {}

interface IGenericListProps {
  list: IItem[]
}

export function GenericList ({ list }: IGenericListProps) {
  return (
    <>
      { 
       list.map(({As = 'a', text, onClick = NOOP, className, id, href}) => {
        return (
          <As
            className={className}
            onClick={() => onClick(id)}
            href={href}
            key={id}
          >
            {text}
          </As>)
       })
      }
    </>
  );
}