import React, { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function User() {
  const { user } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) return navigate('login', { replace: true });
  }, [user, navigate]);


  return (
    <h1 className='section__heading'>Welcome {user}!</h1>
  )
};