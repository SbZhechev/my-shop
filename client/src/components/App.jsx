import { useState } from 'react';
import { AUTHENTICATION_FORM_TYPES } from '../utilites/constants';
import AuthenticationForm from './authentication/AuthenticationForm';
import './App.css';
import { handleLogin } from '../services/AuthenticationService';
import { handleSignUp } from '../services/AuthenticationService';

function App() {
  const [activeFormType, setActiveFormType] = useState(AUTHENTICATION_FORM_TYPES.LOGIN_FORM);

  return (
    <section>
      <h1>Welcome to My Shop!</h1>
      <div className='formTypes'>
        <button 
          className={activeFormType === AUTHENTICATION_FORM_TYPES.LOGIN_FORM ? 'active' : ''}
          onClick={() => setActiveFormType(AUTHENTICATION_FORM_TYPES.LOGIN_FORM)}
        >
          Login
        </button>
        <button 
          className={activeFormType === AUTHENTICATION_FORM_TYPES.SIGN_UP_FORM ? 'active' : ''}
          onClick={() => setActiveFormType(AUTHENTICATION_FORM_TYPES.SIGN_UP_FORM)}
        >
          Sign Up
        </button>
      </div>
      { activeFormType === AUTHENTICATION_FORM_TYPES.LOGIN_FORM ?
        <AuthenticationForm key="login" legend="Login" action={handleLogin} actionButtonText="Login" />
        :
        <AuthenticationForm key="sign-up" legend="Sign Up" action={handleSignUp} actionButtonText="Sign Up" />
      }
    </section>
  );
}

export default App;
