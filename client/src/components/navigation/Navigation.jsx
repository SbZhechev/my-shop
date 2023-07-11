import React from 'react';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='nagivation__listItem'>
          <a className='navigation__link' href='#' title='home page'>Home</a>
        </li>
        <li className='nagivation__listItem'>
          <a className='navigation__link navigation__link--active' href='#' title='prodcuts page'>Products</a>
        </li>
        <li className='nagivation__listItem navigation__listItem--last'>
          <a className='navigation__link' href='#' title='login page'>Login</a>
        </li>
      </ul>
    </nav>
  );
};