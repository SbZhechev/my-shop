import React from 'react';
import { AUTHENTICATION_FORM_TYPES } from '../../utilites/constants';
import Button from '../utility/Button';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from './AuthenticationForm';

export default function Authentication({ authenticationFormType }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='formTypes'>
        <Button 
          active={authenticationFormType.key === AUTHENTICATION_FORM_TYPES.LOGIN_FORM.key}
          action={() => navigate('/auth/login')}
        >
          Login
        </Button>
        <Button 
          active={authenticationFormType.key === AUTHENTICATION_FORM_TYPES.SIGN_UP_FORM.key}
          action={() => navigate('/auth/signUp')}
        >
          Sign Up
        </Button>
      </div>
      <AuthenticationForm 
        key={authenticationFormType.key} 
        legend={authenticationFormType.legend}
        actionButtonText={authenticationFormType.actionButtonText}
      />
    </>
  )
}