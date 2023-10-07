import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function User() {
  const { user } = useOutletContext();

  return (
    <h1 className='section__heading'>Welcome {user}!</h1>
  )
};