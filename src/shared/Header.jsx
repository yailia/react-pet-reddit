import { hot } from 'react-hot-loader/root'
import React from 'react';

function HeaderComponent() {
  return (
    <header className="header">
      <h1>Hello reactive world and welcome to me1wet23</h1>
    </header>
  )
}

export const Header = hot(HeaderComponent);