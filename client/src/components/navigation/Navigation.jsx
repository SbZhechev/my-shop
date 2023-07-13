import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';


export default function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='nagivation__listItem'>
          <NavLink 
            className={({isActive}) => `navigation__link ${isActive ? 'navigation__link--active' : ''}`} 
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li className='nagivation__listItem'>
          <NavLink 
            className={({isActive}) => `navigation__link ${isActive ? 'navigation__link--active' : ''}`}
            to={'/products'}
          >
            Products
          </NavLink>
        </li>
        <li className='nagivation__listItem navigation__listItem--last'>
          <NavLink 
            className={({isActive}) => `navigation__link ${isActive ? 'navigation__link--active' : ''}`}
            to={'/signIn'}
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};