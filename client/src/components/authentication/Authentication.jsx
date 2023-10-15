import React, { useState } from 'react';
import AuthenticationForm from './AuthenticationForm';
import { AUTHENTICATION_FORM_TYPES } from '../../utilites/constants';
import Button from '../utility/Button';

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
        <AuthenticationForm key="login" legend="Login" actionButtonText="Login" actionButtonType="login" />
        :
        <AuthenticationForm key="sign-up" legend="Sign Up" actionButtonText="Sign Up" actionButtonType="signUp" />
      }
    </>
  )
}