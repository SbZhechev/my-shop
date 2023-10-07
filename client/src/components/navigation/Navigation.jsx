import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';


export default function Navigation({ user }) {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='nagivation__listItem'>
          <NavLink
            className='navigation__link'
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li className='nagivation__listItem'>
          <NavLink 
            className='navigation__link'
            to={'/products'}
          >
            Products
          </NavLink>
        </li>
        <li className='nagivation__listItem navigation__listItem--last'>
          <NavLink 
            className='navigation__link'
            to={'/signIn'}
          >
            {user ? user : 'Sign In'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};