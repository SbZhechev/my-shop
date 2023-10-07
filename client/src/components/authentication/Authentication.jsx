import React, { useState } from 'react';
import AuthenticationForm from './AuthenticationForm';
import { AUTHENTICATION_FORM_TYPES } from '../../utilites/constants';
import Button from '../utility/Button';
import { handleLogin, handleSignUp } from '../../services/AuthenticationService';

export default function Authentication() {
  const [activeFormType, setActiveFormType] = useState(AUTHENTICATION_FORM_TYPES.LOGIN_FORM);

  return (
    <>
      <div className='formTypes'>
        <Button 
          active={activeFormType === AUTHENTICATION_FORM_TYPES.LOGIN_FORM}
          action={() => setActiveFormType(AUTHENTICATION_FORM_TYPES.LOGIN_FORM)}
        >
          Login
        </Button>
        <Button 
          active={activeFormType === AUTHENTICATION_FORM_TYPES.SIGN_UP_FORM}
          action={() => setActiveFormType(AUTHENTICATION_FORM_TYPES.SIGN_UP_FORM)}
        >
          Sign Up
        </Button>
      </div>
      { activeFormType === AUTHENTICATION_FORM_TYPES.LOGIN_FORM ?
        <AuthenticationForm key="login" legend="Login" action={handleLogin} actionButtonText="Login" />
        :
        <AuthenticationForm key="sign-up" legend="Sign Up" action={handleSignUp} actionButtonText="Sign Up" />
      }
    </>
  )
}